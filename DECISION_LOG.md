# NHẬT KÝ QUYẾT ĐỊNH (DECISION LOG)
## DỰ ÁN: TÀI LIỆU ĐỈNH

Tài liệu này lưu trữ tất cả các quyết định quan trọng về sản phẩm, giao diện, dữ liệu và kỹ thuật đã được chốt hoặc áp dụng tạm thời, nhằm đảm bảo các AI và thành viên dự án không thay đổi âm thầm các định hướng đã thống nhất.

---

| Mã quyết định | Ngày | Người / Vai trò quyết định | Nội dung quyết định | Lý do & Hệ quả | Trạng thái |
| :---: | :---: | :---: | :--- | :--- | :---: |
| **DEC-001** | 2026-10-17 | Chủ dự án (PO) | **Khóa tên thương hiệu & Slogan chính thức:**<br/>- Tên: **Tài Liệu Đỉnh**<br/>- Slogan: **Đỉnh cao tài liệu** | Nhận diện thương hiệu cốt lõi. Tuyệt đối không tự ý đổi sang slogan khác ("Đỉnh cao học liệu", v.v.). | **ĐÃ CHỐT** |
| **DEC-002** | 2026-10-17 | Chủ dự án (PO) | **Số điện thoại & Kênh liên hệ duy nhất:**<br/>Zalo `0926.999.869` (`https://zalo.me/0926999869`). | Không thanh toán online, không đặt nút tải file Word trực tiếp; mọi trao đổi thực hiện qua Zalo người phụ trách. | **ĐÃ CHỐT** |
| **DEC-003** | 2026-10-17 | Chủ dự án (PO) | **Triết lý thiết kế Editorial / Tối giản (Apple & Starbucks):**<br/>- Bỏ toàn bộ hiệu ứng AI (quả cầu mờ, gradient tím xanh, glassmorphism).<br/>- Tông màu: Trắng/xám nhạt `#f8fafc`, Xanh Navy `#0f172a`, Xanh Word `#185abd`. Màu Xanh Zalo `#0068ff` chỉ dùng cho nút liên hệ.<br/>- Bỏ toàn bộ emoji, dùng biểu tượng Lucide SVG đồng bộ. | Tạo cảm giác chính quy, học thuật, đáng tin cậy cho giáo viên và học sinh Việt Nam. | **ĐÃ CHỐT** |
| **DEC-004** | 2026-10-19 | Chủ dự án (PO) | **Chuyển đổi thành các trang web thật (Multi-page):**<br/>Tạo các route thư mục riêng (`/`, `/kho-tai-lieu/`, `/tai-lieu/`, `/gioi-thieu/`, `/huong-dan/`, `/lien-he/`). | Loại bỏ SPA giả lập ẩn section; đảm bảo URL riêng, hỗ trợ Back/Forward và sẵn sàng chuyển giao Next.js. | **ĐÃ CHỐT** |
| **DEC-005** | 2026-10-19 | Chủ dự án & Gemini | **Làm sạch tuyên bố quảng bá (Honest Copywriting):**<br/>- Bỏ tuyên bố: "Bộ GD&ĐT chứng nhận", "chuẩn 100%", "hỗ trợ 24/7", "nhận file sau 3 phút", "bảo hành trọn đời".<br/>- Khung giờ hỗ trợ chính thức: `8h00 – 12h00` và `13h30 – 21h30`. | Minh bạch, trung thực, tránh rủi ro pháp lý và tạo niềm tin bền vững với giáo viên. | **ĐÃ CHỐT** |
| **DEC-006** | 2026-10-19 | Chủ dự án (PO) | **Thuần nhất phạm vi Phổ thông (Lớp 1 đến 12):**<br/>Loại bỏ hoàn toàn các mục Đại học / Cao đẳng / Sinh viên; chỉ tập trung vào 3 cấp học: Tiểu học, THCS, THPT. | Đúng đối tượng mục tiêu kinh doanh trọng tâm; giao diện 3 cấp học cân đối và mạch lạc. | **ĐÃ CHỐT** |
| **DEC-007** | 2026-10-20 | Chủ dự án (PO) | **Quản lý phiên bản mã nguồn trên GitHub:**<br/>- Khởi tạo Git repo và liên kết với repo GitHub: `git@github.com:cauph96-design/tai-lieu-dinh.git`.<br/>- Xác thực an toàn bằng SSH Key chuẩn `ed25519`. | Sao lưu mã nguồn an toàn trên đám mây, sẵn sàng kích hoạt GitHub Pages hoặc CI/CD khi cần. | **ĐÃ CHỐT** |
| **DEC-008** | 2026-10-21 | Chủ dự án (PO) | **Thiết lập AI Team Operating Protocol:**<br/>Mô hình 3 AI (ChatGPT: Tổng đạo diễn / Claude: QA-QC / Gemini Pro: Thợ code chính trong Antigravity) + Chủ dự án. | Phối hợp đúng sở trường, tiết kiệm hạn mức AI và đảm bảo chất lượng kỹ thuật cao nhất. | **ĐÃ CHỐT** |
