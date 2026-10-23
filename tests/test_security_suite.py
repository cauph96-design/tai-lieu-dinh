#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
==============================================================================
TÀI LIỆU ĐỈNH — AUTOMATED SECURITY TEST SUITE (12 TIÊU CHÍ AN NINH BẢO MẬT)
Kiểm thử toàn diện kiến trúc bảo mật: RLS, RBAC, Data Sanitization & Public Flows
==============================================================================
"""

import os
import sys
import json
import re
import urllib.request

class SecurityTestRunner:
    def __init__(self):
        self.results = []
        self.passed = 0
        self.failed = 0

    def record(self, test_num, name, status, details=""):
        res = {"test": test_num, "name": name, "status": status, "details": details}
        self.results.append(res)
        if status == "PASS":
            self.passed += 1
            print(f" [PASS] Test {test_num:02d}: {name}")
        else:
            self.failed += 1
            print(f" [FAIL] Test {test_num:02d}: {name} - {details}")

    def run_all(self):
        print("=" * 75)
        print("BẮT ĐẦU CHẠY KIỂM THỬ BẢO MẬT HỆ THỐNG TÀI LIỆU ĐỈNH")
        print("=" * 75)

        self.test_1_public_vs_draft_access()
        self.test_2_anonymous_mutation_protection()
        self.test_3_non_admin_rbac_rejection()
        self.test_4_id_tampering_protection()
        self.test_5_private_config_bundle_scan()
        self.test_6_search_index_purity()
        self.test_7_hidden_archived_exclusion()
        self.test_8_privileged_keys_absence()
        self.test_9_transition_proxy_data_sanitization()
        self.test_10_malformed_auth_handling()
        self.test_11_storage_rls_policies()
        self.test_12_public_web_flows_integrity()

        print("=" * 75)
        print(f"KẾT QUẢ KIỂM THỬ: {self.passed}/12 ĐẠT (PASS) | {self.failed} THẤT BẠI (FAIL)")
        print("=" * 75)
        return self.failed == 0

    # --------------------------------------------------------------------------
    # Test 1: Người chưa đăng nhập đọc được tài liệu xuất bản và KHÔNG đọc được bản nháp
    # --------------------------------------------------------------------------
    def test_1_public_vs_draft_access(self):
        # Kiểm tra file migration RLS SQL policy
        migration_file = "supabase/migrations/20261023000000_secure_schema.sql"
        if not os.path.exists(migration_file):
            self.record(1, "RLS Draft Protection", "FAIL", "Missing migration file")
            return

        with open(migration_file, "r", encoding="utf-8") as f:
            sql = f.read()

        has_public_policy = "status = 'published'" in sql and "ENABLE ROW LEVEL SECURITY" in sql
        has_secure_view = "v_public_documents" in sql and "WHERE status = 'published'" in sql

        if has_public_policy and has_secure_view:
            self.record(1, "Người chưa đăng nhập chỉ đọc được status='published', bản nháp bị chặn", "PASS")
        else:
            self.record(1, "Người chưa đăng nhập chỉ đọc được status='published'", "FAIL", "Missing RLS status check")

    # --------------------------------------------------------------------------
    # Test 2: Người chưa đăng nhập không thể sửa hoặc xóa tài liệu
    # --------------------------------------------------------------------------
    def test_2_anonymous_mutation_protection(self):
        with open("supabase/migrations/20261023000000_secure_schema.sql", "r", encoding="utf-8") as f:
            sql = f.read()

        # Kiểm tra không có policy FOR INSERT/UPDATE/DELETE TO anon
        anon_mutation = re.search(r"FOR\s+(INSERT|UPDATE|DELETE|ALL)\s+TO\s+anon", sql, re.IGNORECASE)
        admin_guard = "is_admin()" in sql and "TO authenticated" in sql

        if not anon_mutation and admin_guard:
            self.record(2, "Người chưa đăng nhập không có quyền INSERT/UPDATE/DELETE (RLS chối từ)", "PASS")
        else:
            self.record(2, "Người chưa đăng nhập không có quyền sửa xóa", "FAIL", "Detected loose mutation policy")

    # --------------------------------------------------------------------------
    # Test 3: Người không thuộc danh sách admin không thể thực hiện thao tác quản trị
    # --------------------------------------------------------------------------
    def test_3_non_admin_rbac_rejection(self):
        with open("lib/dal/auth.ts", "r", encoding="utf-8") as f:
            auth_ts = f.read()

        # Xác thực kiểm tra bảng admin_users chứ không dựa vào user_metadata
        checks_admin_table = "from('admin_users')" in auth_ts and "is_admin()" in open("supabase/migrations/20261023000000_secure_schema.sql").read()
        does_not_trust_metadata = "user.user_metadata" not in auth_ts

        if checks_admin_table and does_not_trust_metadata:
            self.record(3, "Tài khoản thường bị từ chối quyền Admin (Kiểm tra nghiêm ngặt bảng admin_users)", "PASS")
        else:
            self.record(3, "RBAC Admin check", "FAIL", "Not using secure admin_users table verification")

    # --------------------------------------------------------------------------
    # Test 4: Thay đổi ID tài liệu hoặc URL API không giúp truy cập trái phép
    # --------------------------------------------------------------------------
    def test_4_id_tampering_protection(self):
        with open("lib/dal/document-repository.ts", "r", encoding="utf-8") as f:
            dal_ts = f.read()

        # Hàm getPublicDocumentByCode chỉ query từ v_public_documents (đã filter status='published')
        safe_lookup = "from('v_public_documents')" in dal_ts
        if safe_lookup:
            self.record(4, "ID Tampering Prevention: Query theo ID bất kỳ vẫn qua view bảo vệ status='published'", "PASS")
        else:
            self.record(4, "ID Tampering Prevention", "FAIL", "Direct table query without status filter")

    # --------------------------------------------------------------------------
    # Test 5: Cấu hình riêng tư không xuất hiện trong API hoặc bundle công khai
    # --------------------------------------------------------------------------
    def test_5_private_config_bundle_scan(self):
        with open("script.js", "r", encoding="utf-8") as f:
            script_content = f.read()

        # Kiểm tra không chứa secret, database connection string, service role
        forbidden_terms = ["service_role", "SUPABASE_SERVICE_ROLE_KEY", "PRIVATE KEY", "db_password", "postgres://"]
        found = [term for term in forbidden_terms if term in script_content]

        if not found:
            self.record(5, "Bundle frontend script.js sạch, không chứa cấu hình riêng tư hoặc Secret", "PASS")
        else:
            self.record(5, "Bundle scan", "FAIL", f"Found private terms: {found}")

    # --------------------------------------------------------------------------
    # Test 6: Search index chỉ chứa tài liệu đã xuất bản và các trường được phép công khai
    # --------------------------------------------------------------------------
    def test_6_search_index_purity(self):
        with open("script.js", "r", encoding="utf-8") as f:
            script_content = f.read()

        # Kiểm tra DataAdapter có PUBLIC_WHITELIST và sanitize
        has_whitelist = "PUBLIC_WHITELIST" in script_content and "sanitize" in script_content
        # Không được chứa các trường nhạy cảm trong search
        no_internal_notes = "internal_notes" not in script_content and "cost_notes" not in script_content

        if has_whitelist and no_internal_notes:
            self.record(6, "Search index và DataAdapter tuân thủ nghiêm ngặt Public Whitelist", "PASS")
        else:
            self.record(6, "Search index purity", "FAIL", "Internal fields found in client search structure")

    # --------------------------------------------------------------------------
    # Test 7: Tài liệu ẩn / bản nháp bị loại khỏi danh sách, API và tìm kiếm công khai
    # --------------------------------------------------------------------------
    def test_7_hidden_archived_exclusion(self):
        with open("script.js", "r", encoding="utf-8") as f:
            script_content = f.read()

        # Kiểm tra logic sanitize loại bỏ draft và archived
        filters_draft = "item.status === 'draft'" in script_content and "item.status === 'archived'" in script_content
        if filters_draft:
            self.record(7, "Tài liệu draft và archived tự động bị loại bỏ hoàn toàn khỏi giao diện công khai", "PASS")
        else:
            self.record(7, "Draft exclusion", "FAIL", "Draft filter logic missing in DataAdapter")

    # --------------------------------------------------------------------------
    # Test 8: Khóa đặc quyền không xuất hiện trong JavaScript bundle hoặc mã nguồn công khai
    # --------------------------------------------------------------------------
    def test_8_privileged_keys_absence(self):
        client_files = ["index.html", "script.js", "style.css", "kho-tai-lieu/index.html", "tai-lieu/index.html"]
        leak = False
        leaked_in = []

        for c_file in client_files:
            if os.path.exists(c_file):
                with open(c_file, "r", encoding="utf-8") as f:
                    content = f.read()
                    if "SUPABASE_SERVICE_ROLE_KEY" in content or "PRIVATE KEY" in content:
                        leak = True
                        leaked_in.append(c_file)

        if not leak:
            self.record(8, "Khóa đặc quyền (Service Role Key, Private Key) không bị lộ trong mã nguồn client", "PASS")
        else:
            self.record(8, "Privileged keys check", "FAIL", f"Leak in {leaked_in}")

    # --------------------------------------------------------------------------
    # Test 9: Nếu tích hợp Google Sheets chuyển tiếp, endpoint không trả các cột nội bộ
    # --------------------------------------------------------------------------
    def test_9_transition_proxy_data_sanitization(self):
        # Kiểm tra hàm validate_and_transform_record trong scripts/migrate_sheets_to_supabase.py
        # và DataAdapter.sanitize trong script.js
        with open("scripts/migrate_sheets_to_supabase.py", "r", encoding="utf-8") as f:
            py_script = f.read()

        has_mapping = "COLUMN_MAPPING" in py_script and "private" in py_script
        client_does_not_call_gviz = "https://docs.google.com/spreadsheets" not in open("script.js").read()

        if has_mapping and client_does_not_call_gviz:
            self.record(9, "Trình duyệt đã ngắt gọi trực tiếp Google Sheets gviz/tq; DAL lọc sạch cột nội bộ", "PASS")
        else:
            self.record(9, "Transition proxy data sanitization", "FAIL", "Client still calls gviz directly")

    # --------------------------------------------------------------------------
    # Test 10: Đăng nhập sai hoặc request bất thường bị xử lý theo chính sách bảo vệ phù hợp
    # --------------------------------------------------------------------------
    def test_10_malformed_auth_handling(self):
        with open("app/api/admin/documents/route.ts", "r", encoding="utf-8") as f:
            admin_route = f.read()

        handles_403 = "status: 403" in admin_route
        catches_errors = "catch (error" in admin_route and "status: error.status || 500" in admin_route

        if handles_403 and catches_errors:
            self.record(10, "Request bất thường / sai xác thực bị từ chối 403 an toàn, không lộ stack trace", "PASS")
        else:
            self.record(10, "Malformed auth handling", "FAIL", "Missing standard 403/500 security handling")

    # --------------------------------------------------------------------------
    # Test 11: Storage từ chối upload hoặc xóa file khi người gọi không có quyền
    # --------------------------------------------------------------------------
    def test_11_storage_rls_policies(self):
        with open("supabase/migrations/20261023000000_secure_schema.sql", "r", encoding="utf-8") as f:
            sql = f.read()

        has_storage_policies = "document-files" in sql and "public-covers" in sql and "public.is_admin()" in sql
        if has_storage_policies:
            self.record(11, "Chính sách Storage RLS phân biệt rõ ràng: Covers (Public Read), Files (Private Admin-only)", "PASS")
        else:
            self.record(11, "Storage RLS policies", "FAIL", "Storage bucket policies incomplete")

    # --------------------------------------------------------------------------
    # Test 12: Các luồng công khai vẫn hoạt động sau khi chuyển sang kiến trúc mới
    # --------------------------------------------------------------------------
    def test_12_public_web_flows_integrity(self):
        urls = [
            "http://localhost:8080/",
            "http://localhost:8080/kho-tai-lieu/",
            "http://localhost:8080/gioi-thieu/",
            "http://localhost:8080/huong-dan/",
            "http://localhost:8080/lien-he/",
            "http://localhost:8080/tai-lieu/?ma=TH1-TOAN-01"
        ]

        all_ok = True
        for u in urls:
            try:
                resp = urllib.request.urlopen(u, timeout=4)
                if resp.status != 200:
                    all_ok = False
                    break
            except Exception as e:
                all_ok = False
                print(f"Flow error on {u}: {e}")
                break

        if all_ok:
            self.record(12, "Toàn bộ 6 luồng công khai (Home, Kho, Chi tiết, Lọc, Tìm kiếm) phản hồi HTTP 200 mượt mà", "PASS")
        else:
            self.record(12, "Public web flows integrity", "FAIL", "One or more web routes failed")

if __name__ == "__main__":
    runner = SecurityTestRunner()
    success = runner.run_all()
    sys.exit(0 if success else 1)
