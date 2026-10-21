# KẾ HOẠCH TRIỂN KHAI & ĐẶC TẢ KỸ THUẬT (IMPLEMENTATION PLAN)
## DỰ ÁN: WEBSITE TÀI LIỆU ĐỈNH

---

## 1. MỤC TIÊU SẢN PHẨM & MÔ HÌNH KINH DOANH

- **Tên thương hiệu:** Tài Liệu Đỉnh
- **Slogan chính thức:** Đỉnh cao tài liệu
- **Đối tượng phục vụ:** Giáo viên và học sinh phổ thông các cấp:
  - Tiểu học (Lớp 1 – 5)
  - THCS (Lớp 6 – 9)
  - THPT (Lớp 10 – 12)
- **Sản phẩm trọng tâm:** File Microsoft Word (`.doc`, `.docx`) có thể chỉnh sửa:
  - Kế hoạch bài dạy / Giáo án (theo CV 5512 đối với cấp 2-3, CV 2345 đối với Tiểu học).
  - Bộ đề kiểm tra định kỳ có ma trận, bảng đặc tả và đáp án (theo Thông tư 27 cho Tiểu học, cấu trúc trắc nghiệm Đúng/Sai, trả lời ngắn mới cho THCS-THPT).
  - Tài liệu ôn tập, chuyên đề học tập chuẩn GDPT 2018 theo 3 bộ SGK: Kết nối tri thức với cuộc sống, Cánh Diều, Chân trời sáng tạo.
- **Mô hình giao dịch:**
  - Website là cổng trưng bày, tra cứu và lọc tài liệu chuyên nghiệp.
  - **Không** thanh toán trực tuyến.
  - Khi quan tâm tài liệu, người dùng bấm nút chuyển tiếp sang Zalo (`0926.999.869` - `https://zalo.me/0926999869`) để trao đổi trực tiếp với người phụ trách.

---

## 2. KIẾN TRÚC HỆ THỐNG HIỆN TẠI (MULTI-PAGE ARCHITECTURE)

Do môi trường máy chủ cục bộ chưa có Node.js/npm, toàn bộ dự án được xây dựng bằng kiến trúc **Multi-page HTML5/CSS3/Vanilla JS thuần**, tổ chức thành các thư mục route độc lập, sẵn sàng chuyển đổi liền mạch sang Next.js App Router sau này:

```
docs web/
├── index.html                  # Route / (Trang chủ)
├── kho-tai-lieu/
│   └── index.html              # Route /kho-tai-lieu/ (Kho tài liệu & Bộ lọc)
├── tai-lieu/
│   └── index.html              # Route /tai-lieu/?id=... (Trang chi tiết tài liệu)
├── gioi-thieu/
│   └── index.html              # Route /gioi-thieu/ (Trang giới thiệu)
├── huong-dan/
│   └── index.html              # Route /huong-dan/ (Hướng dẫn & FAQ Accordion)
├── lien-he/
│   └── index.html              # Route /lien-he/ (Liên hệ & Request Builder)
├── style.css                   # Toàn bộ CSS phong cách Apple / Starbucks (K12)
├── script.js                   # Logic toàn trang, 66 tài liệu K12, Sheets sync
├── robots.txt                  # Cấu hình SEO
├── sitemap.xml                 # Sơ đồ website
├── AI_TEAM_PROTOCOL.md         # Quy trình phối hợp 3 AI
├── DECISION_LOG.md             # Nhật ký quyết định sản phẩm & kỹ thuật
├── PROJECT_STATUS.md           # Báo cáo tiến độ & trạng thái
└── AI_REVIEW_PACKET.md         # Gói dữ liệu phục vụ review độc lập
```

---

## 3. ĐẶC TẢ DỮ LIỆU & TAXONOMY PHỔ THÔNG (K12)

Tổng cộng **66 tài liệu chuẩn mực** được cấu hình trong `script.js`:
- **Tiểu học (Lớp 1 – 5):** 20 tài liệu.
  - Môn: Toán, Tiếng Việt, Tiếng Anh, Tự nhiên và Xã hội (Lớp 1–3); Khoa học, Lịch sử và Địa lý (Lớp 4–5).
  - Chuẩn: Giáo án (CV 2345), Đề kiểm tra Thông tư 27.
- **THCS (Lớp 6 – 9):** 24 tài liệu.
  - Môn: Toán, Ngữ văn, Tiếng Anh, Khoa học Tự nhiên, Lịch sử và Địa lý.
  - Chuẩn: Kế hoạch bài dạy (CV 5512), Đề kiểm tra định kỳ & thi vào 10 cấu trúc mới.
- **THPT (Lớp 10 – 12):** 22 tài liệu.
  - Môn: Toán, Ngữ văn, Tiếng Anh, Vật lý, Hóa học, Sinh học, Lịch sử, Địa lý.
  - Chuẩn: Kế hoạch bài dạy (CV 5512), Cấu trúc trắc nghiệm mới (Đúng/Sai, trả lời ngắn, nhiều lựa chọn).

---

## 4. TIÊU CHÍ NGHIỆM THU (ACCEPTANCE CRITERIA)

1. **Bộ lọc kiểu Thế Giới Di Động:**
   - Hỗ trợ chọn đồng thời nhiều lớp và nhiều môn học (logic OR trong nhóm, logic AND giữa các nhóm).
   - Môn học tự động thay đổi theo cấp lớp đang chọn (ví dụ Lớp 3 chỉ hiện 4 môn, Lớp 11 lọc riêng Vật lý/Hóa học/Sinh học).
   - Bộ lọc đồng bộ 2 chiều với URL query string (`?cap=...&khoi=...&mon=...`).
   - Có thanh gỡ bỏ từng tiêu chí (Active Filter Pills) và nút "Xóa tất cả bộ lọc".
   - Drawer bộ lọc hoạt động mượt mà trên thiết bị di động.
2. **Trung thực & Minh bạch (Copywriting):**
   - Loại bỏ hoàn toàn tuyên bố không có căn cứ (không tự nhận chứng nhận của Bộ GD&ĐT, không hứa 24/7, không cam kết giao file 3 phút hay bảo hành trọn đời).
   - Ghi rõ giờ hỗ trợ thực tế: `8h00 – 12h00` và `13h30 – 21h30`.
   - Form soạn tin nhắn liên hệ nêu rõ hoạt động phía trình duyệt, không lưu dữ liệu người dùng lên server.
   - Bản xem thử (Preview) chỉ nhúng iframe khi có link Google Drive PDF thật; nếu chưa có, hiển thị hướng dẫn nhắn Zalo nhận trích đoạn.
3. **Bảo mật & Hiệu năng:**
   - Dữ liệu đưa vào DOM sử dụng `textContent` hoặc hàm `escapeHTML`, ngăn chặn XSS.
   - Nút liên hệ dùng đúng số cấu hình thật `0926.999.869` (`https://zalo.me/0926999869`).
   - Tương thích tốt từ màn hình di động 360px trở lên.
