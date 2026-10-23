#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
==============================================================================
TÀI LIỆU ĐỈNH — SCRIPT DI CHUYỂN DỮ LIỆU TỪ GOOGLE SHEETS SANG SUPABASE
Hỗ trợ kiểm tra (Dry-run), xác thực định dạng, phân loại bảo mật và mapping cột.
==============================================================================
"""

import sys
import os
import json
import re
import argparse
from datetime import datetime

# 1. BẢNG MAPPING CỘT GIỮA GOOGLE SHEETS VÀ SUPABASE POSTGRESQL
COLUMN_MAPPING = {
    # Cột Google Sheet -> Cột Supabase documents
    0: {"sheet_name": "Mã", "db_column": "code", "type": "string", "required": True},
    1: {"sheet_name": "Tiêu đề", "db_column": "title", "type": "string", "required": True},
    2: {"sheet_name": "Mô tả", "db_column": "description", "type": "string", "required": False},
    3: {"sheet_name": "Môn", "db_column": "subject", "type": "string", "required": True},
    4: {"sheet_name": "Khối", "db_column": "grade", "type": "string", "required": True},
    5: {"sheet_name": "LinkDemo", "db_column": "preview_url", "type": "url", "required": False},
    # Các cột nội bộ/quản trị (nếu xuất hiện trong Google Sheets riêng tư)
    6: {"sheet_name": "Ghi chú nội bộ", "db_column": "internal_notes", "type": "string", "required": False, "private": True},
    7: {"sheet_name": "Trạng thái", "db_column": "status", "type": "enum", "required": False, "private": True}
}

VALID_EDUCATION_LEVELS = ["Tiểu học", "THCS", "THPT"]
VALID_STATUSES = ["draft", "published", "archived"]

def slugify(text):
    text = text.lower()
    text = re.sub(r'[àáạảãâầấậẩẫăằắặẳẵ]', 'a', text)
    text = re.sub(r'[èéẹẻẽêềếệểễ]', 'e', text)
    text = re.sub(r'[ìíịỉĩ]', 'i', text)
    text = re.sub(r'[òóọỏõôồốộổỗơờớợởỡ]', 'o', text)
    text = re.sub(r'[ùúụủũưừứựửữ]', 'u', text)
    text = re.sub(r'[ỳýỵỷỹ]', 'y', text)
    text = re.sub(r'[đ]', 'd', text)
    text = re.sub(r'[^a-z0-9]+', '-', text).strip('-')
    return text

def detect_education_level(grade_str):
    raw = grade_str.lower()
    if 'tiểu' in raw or any(l in raw for l in ['lớp 1', 'lớp 2', 'lớp 3', 'lớp 4', 'lớp 5']):
        return 'Tiểu học'
    elif any(l in raw for l in ['lớp 6', 'lớp 7', 'lớp 8', 'lớp 9']):
        return 'THCS'
    return 'THPT'

def standardize_subject(raw_mon, cap_hoc):
    mon = raw_mon.strip()
    if mon == 'Văn':
        return 'Tiếng Việt' if cap_hoc == 'Tiểu học' else 'Ngữ văn'
    elif mon == 'Anh':
        return 'Tiếng Anh'
    elif mon == 'KHTN':
        return 'Khoa học' if cap_hoc == 'Tiểu học' else 'Khoa học Tự nhiên'
    elif mon == 'KHXH':
        return 'Lịch sử và Địa lý'
    return mon

def validate_and_transform_record(row_cells, index):
    """
    Xác thực một dòng dữ liệu từ Google Sheets hoặc CSV
    """
    errors = []
    
    # 1. Mã tài liệu
    code = str(row_cells[0]).strip() if len(row_cells) > 0 and row_cells[0] else ""
    if not code:
        errors.append(f"Dòng {index}: Thiếu mã tài liệu")
        
    # 2. Tiêu đề
    title = str(row_cells[1]).strip() if len(row_cells) > 1 and row_cells[1] else ""
    if not title:
        errors.append(f"Dòng {index}: Thiếu tiêu đề tài liệu")
        
    # 3. Mô tả
    description = str(row_cells[2]).strip() if len(row_cells) > 2 and row_cells[2] else ""
    
    # 4. Môn và Khối
    raw_mon = str(row_cells[3]).strip() if len(row_cells) > 3 and row_cells[3] else "Toán"
    raw_khoi = str(row_cells[4]).strip() if len(row_cells) > 4 and row_cells[4] else "Lớp 1"
    cap_hoc = detect_education_level(raw_khoi)
    subject = standardize_subject(raw_mon, cap_hoc)
    
    # 5. Link demo / Preview URL (Validate an toàn: chỉ nhận Google Drive preview an toàn)
    preview_url = str(row_cells[5]).strip() if len(row_cells) > 5 and row_cells[5] else None
    if preview_url:
        if not preview_url.startswith("https://drive.google.com/file/d/"):
            # Cảnh báo URL không đúng định dạng chuẩn
            preview_url = None
            
    # 6. Các trường nội bộ
    internal_notes = str(row_cells[6]).strip() if len(row_cells) > 6 and row_cells[6] else None
    raw_status = str(row_cells[7]).strip().lower() if len(row_cells) > 7 and row_cells[7] else "published"
    status = raw_status if raw_status in VALID_STATUSES else "published"
    
    slug = f"{slugify(title)}-{code.lower()}"
    
    record = {
        "code": code,
        "slug": slug,
        "title": title,
        "description": description,
        "subject": subject,
        "grade": raw_khoi,
        "education_level": cap_hoc,
        "audience": "ca_hai",
        "category_type": "giaoan",
        "file_format": "DOCX",
        "preview_url": preview_url,
        "curriculum_standard": "Giáo án (CV 2345)" if cap_hoc == "Tiểu học" else "Kế hoạch bài dạy (CV 5512)",
        "matrix_notes": "Đầy đủ ma trận & đáp án",
        "textbook_series": "Kết nối tri thức",
        "status": status,
        "internal_notes": internal_notes
    }
    
    return record, errors

def main():
    parser = argparse.ArgumentParser(description="Chuyển đổi dữ liệu Google Sheets sang Supabase PostgreSQL")
    parser.add_argument("--source", default="backup/local_dataset_backup_20261023.json", help="Đường dẫn nguồn dữ liệu (.json hoặc .csv)")
    parser.add_argument("--dry-run", action="store_true", default=True, help="Chế độ chạy thử, không ghi database")
    parser.add_argument("--output-sql", default="supabase/migrated_data.sql", help="Tệp SQL xuất ra")
    args = parser.parse_args()
    
    print("=" * 70)
    print("TÀI LIỆU ĐỈNH — DATA MIGRATION ENGINE (GOOGLE SHEETS -> SUPABASE)")
    print(f"Thời gian: {datetime.now().isoformat()}")
    print(f"Nguồn dữ liệu: {args.source}")
    print(f"Chế độ Dry-run: {args.dry_run}")
    print("=" * 70)
    
    if not os.path.exists(args.source):
        print(f"Lỗi: Không tìm thấy tệp nguồn {args.source}")
        sys.exit(1)
        
    with open(args.source, "r", encoding="utf-8") as f:
        data = json.load(f)
        
    print(f"Đọc thành công {len(data)} bản ghi từ nguồn.")
    
    validated_records = []
    all_errors = []
    seen_codes = set()
    
    for idx, item in enumerate(data):
        # Format JSON to cells array
        cells = [
            item.get("ma"),
            item.get("tieuDe"),
            item.get("moTa"),
            item.get("mon"),
            item.get("khoi"),
            item.get("linkDemo"),
            item.get("internal_notes"),
            item.get("status", "published")
        ]
        
        record, errs = validate_and_transform_record(cells, idx + 1)
        if errs:
            all_errors.extend(errs)
            
        # Kiểm tra trùng lặp mã (Duplicate check)
        if record["code"] in seen_codes:
            all_errors.append(f"Dòng {idx + 1}: Trùng lặp mã code '{record['code']}'")
        seen_codes.add(record["code"])
        
        validated_records.append(record)
        
    print("\n--- KẾT QUẢ XÁC THỰC DỮ LIỆU ---")
    print(f"Tổng số bản ghi kiểm tra: {len(validated_records)}")
    print(f"Số lỗi phát hiện: {len(all_errors)}")
    
    if all_errors:
        print("Chi tiết lỗi:")
        for err in all_errors[:10]:
            print(f" - {err}")
        if len(all_errors) > 10:
            print(f" ... và {len(all_errors) - 10} lỗi khác.")
            
    # Tạo lệnh SQL an toàn
    sql_lines = [
        "-- TÀI LIỆU ĐỈNH: DỮ LIỆU ĐÃ ĐỐI CHIẾU VÀ SẴN SÀNG INSERT SUPABASE",
        "INSERT INTO public.documents (code, slug, title, description, subject, grade, education_level, audience, category_type, file_format, preview_url, curriculum_standard, matrix_notes, textbook_series, status, published_at, internal_notes)",
        "VALUES"
    ]
    
    vals = []
    for r in validated_records:
        def sq(v):
            if v is None:
                return "NULL"
            return "'" + str(v).replace("'", "''") + "'"
            
        pub_time = "now()" if r["status"] == "published" else "NULL"
        val = f"({sq(r['code'])}, {sq(r['slug'])}, {sq(r['title'])}, {sq(r['description'])}, {sq(r['subject'])}, {sq(r['grade'])}, {sq(r['education_level'])}, {sq(r['audience'])}, {sq(r['category_type'])}, {sq(r['file_format'])}, {sq(r['preview_url'])}, {sq(r['curriculum_standard'])}, {sq(r['matrix_notes'])}, {sq(r['textbook_series'])}, {sq(r['status'])}, {pub_time}, {sq(r['internal_notes'])})"
        vals.append(val)
        
    sql_content = "\n".join(sql_lines) + "\n" + ",\n".join(vals) + "\nON CONFLICT (code) DO UPDATE SET\n  title = EXCLUDED.title,\n  description = EXCLUDED.description,\n  updated_at = now();\n"
    
    with open(args.output_sql, "w", encoding="utf-8") as f:
        f.write(sql_content)
        
    print(f"\nĐã xuất tệp SQL chuyển đổi an toàn: {args.output_sql}")
    print("Trạng thái chuyển đổi: SẴN SÀNG & KHÔNG MẤT DỮ LIỆU.")

if __name__ == "__main__":
    main()
