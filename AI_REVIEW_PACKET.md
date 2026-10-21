# GÓI BÀN GIAO REVIEW (AI REVIEW PACKET)
## DỰ ÁN: TÀI LIỆU ĐỈNH

*Tài liệu này được Gemini Pro (Lead Dev) tạo ra độc lập để Chủ dự án hoặc hệ thống có thể chuyển tiếp cho ChatGPT (Tổng đạo diễn) hoặc Claude (QA-QC chuyên sâu) đánh giá mà không cần sao chép toàn bộ lịch sử trò chuyện.*

---

### THÔNG TIN TỔNG QUAN

* **Người gửi:** Gemini Pro (Lead Developer)
* **Người nhận đề xuất:** Claude (QA-QC chuyên sâu) hoặc ChatGPT (Tổng đạo diễn)
* **Milestone:** Đánh giá toàn diện Milestone 1 — Website Tài Liệu Đỉnh (Thuần K12 Phổ thông)
* **Trạng thái:** Mã nguồn đã chạy thực tế trên máy cục bộ và đã đẩy lên GitHub tại `cauph96-design/tai-lieu-dinh`.

---

### 1. MỤC TIÊU CỦA ĐỢT REVIEW NÀY

1. **Về phía Claude (QA-QC):**
   - Đánh giá tính an toàn bảo mật của hàm xử lý DOM, chống tấn công XSS từ dữ liệu bên ngoài (đặc biệt là hàm `escapeHTML` và callback Google Sheets trong `script.js`).
   - Kiểm tra logic bộ lọc đa tiêu chí (OR trong nhóm, AND giữa các nhóm) và trường hợp biên (edge cases) khi chọn/bỏ chọn cấp học, khối lớp, môn học.
   - Rà soát tính dễ tiếp cận (Accessibility / a11y) và trải nghiệm trên thiết bị di động (Mobile Drawer, touch targets).
2. **Về phía ChatGPT (Tổng đạo diễn):**
   - Đánh giá cấu trúc thông tin (Information Architecture) của 6 trang: đã đạt chuẩn trải nghiệm người dùng học thuật, tin cậy cho giáo viên chưa?
   - Đánh giá câu từ (Copywriting): tính nhất quán của thông điệp thương hiệu *Tài Liệu Đỉnh — Đỉnh cao tài liệu*, tính minh bạch khi không có thanh toán trực tuyến.

---

### 2. CÁC TỆP NGUỒN CỐT LÕI CẦN REVIEW

| Tệp | Vị trí | Nội dung chính |
| :--- | :--- | :--- |
| `script.js` | [`script.js`](./script.js) | Chứa 66 tài liệu K12, taxonomy `MON_THEO_LOP`, logic lọc OR/AND, sync URL, DOM rendering an toàn, callback Google Sheets JSONP. |
| `style.css` | [`style.css`](./style.css) | Toàn bộ CSS phong cách tối giản Apple/Starbucks, responsive mobile drawer, card dossier, spec table. |
| `index.html` | [`index.html`](./index.html) | Trang chủ với Hero, 3 cổng cấp học, 6 tài liệu nổi bật, quy trình 3 bước, CTA Zalo. |
| `kho-tai-lieu/index.html` | [`kho-tai-lieu/index.html`](./kho-tai-lieu/index.html) | Trang danh mục & bộ lọc Thế Giới Di Động. |
| `tai-lieu/index.html` | [`tai-lieu/index.html`](./tai-lieu/index.html) | Trang chi tiết tài liệu, specs table, iframe preview. |
| `lien-he/index.html` | [`lien-he/index.html`](./lien-he/index.html) | Kênh liên hệ Zalo & Trình tạo nội dung tin nhắn phía client. |

---

### 3. CÁC KIỂM THỬ ĐÃ THỰC HIỆN BỞI GEMINI PRO

1. **Bộ kiểm thử 12 ca (`scratch/run_12_tests.py`):**
   - ✅ Test 1: THCS -> Lớp 7 -> Toán: Chỉ hiển thị tài liệu Toán lớp 7.
   - ✅ Test 2: Chọn Lớp 7 & Lớp 8 -> Toán: Hiển thị tài liệu thuộc Lớp 7 hoặc Lớp 8.
   - ✅ Test 3: Thêm từ khóa "đề kiểm tra": Kết hợp chuẩn AND với các tiêu chí đang chọn.
   - ✅ Test 4: Lớp 3 chỉ hiển thị đúng 4 môn: Toán, Tiếng Việt, Tiếng Anh, Tự nhiên và Xã hội.
   - ✅ Test 5: THPT Lớp 11 lọc riêng rẽ Vật lý, Hóa học, Sinh học.
   - ✅ Test 6: Bỏ một tiêu chí (Lớp 7) giữ nguyên các tiêu chí còn lại hợp lệ.
   - ✅ Test 7: Xóa toàn bộ bộ lọc trả về đủ 66 tài liệu ban đầu.
   - ✅ Test 8: Tìm kiếm có dấu "vật lý" và không dấu "vat ly" đồng nhất 100%.
   - ✅ Test 9: Hoàn toàn sạch bóng trạng thái kỹ thuật Google Sheets trên giao diện công khai.
   - ✅ Test 10: Tất cả các nút Zalo đều dùng số cấu hình thật `0926.999.869` (`https://zalo.me/0926999869`).
   - ✅ Test 11: Nút Mobile Filter và Drawer Bottom Sheet sẵn sàng hoạt động.
   - ✅ Test 12: Giữ đúng thương hiệu *Tài Liệu Đỉnh* và slogan *Đỉnh cao tài liệu*.
2. **Kiểm thử liên kết:** 100% thẻ `<a href>` và `<script src>`, `<link href>` nội bộ phân giải thành công, 0 lỗi 404.
3. **Kiểm tra từ khóa cấm:** 0 phát hiện các tuyên bố "24/7", "Bộ GD&ĐT chứng nhận", "3 phút", "bảo hành trọn đời".

---

### 4. CÂU HỎI CỤ THỂ CHO REVIEWER

1. **Cho Claude (QA-QC):**
   - *Đoạn mã callback `handleSheetData` trong `script.js` đã đảm bảo miễn nhiễm hoàn toàn với XSS dạng stored payload từ Google Sheets chưa? Có cần bổ sung thêm Content Security Policy (CSP) ở header HTML không?*
   - *Logic `popstate` khi người dùng bấm nút Back/Forward trên trình duyệt ở trang `/kho-tai-lieu/` có trường hợp nào gây lệch trạng thái giữa chip được chọn và mảng `filterState` không?*
2. **Cho ChatGPT (Tổng đạo diễn):**
   - *Cách diễn đạt trên trang `/tai-lieu/` khi tài liệu chưa có sẵn bản PDF xem thử trực tuyến ("Bản xem thử trực tuyến hiện chưa cập nhật... vui lòng nhắn Zalo") đã đủ tinh tế và khuyến khích người dùng liên hệ chưa?*
   - *Bố cục 3 cổng cấp học ở Trang chủ và bảng điều khiển tại Kho tài liệu đã đủ sức thuyết phục giáo viên các cấp chưa?*

---

### 5. KẾT QUẢ MONG ĐỢI NHẬN ĐƯỢC

- Báo cáo kết luận: **PASS**, **PASS WITH ISSUES** hoặc **FAIL**.
- Danh sách phát hiện theo mức độ: **Critical / High / Medium / Low**.
- Đề xuất giải pháp kỹ thuật cụ thể (kèm đoạn code nếu cần sửa).
