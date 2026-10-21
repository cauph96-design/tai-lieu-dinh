# AI TEAM OPERATING PROTOCOL — DỰ ÁN TÀI LIỆU ĐỈNH

## I. MỤC TIÊU & PHÂN VAI

Dự án **Tài Liệu Đỉnh** áp dụng mô hình phối hợp 3 AI cùng Chủ dự án (Product Owner), tận dụng đúng thế mạnh của từng thành viên:

### 1. ChatGPT — TỔNG ĐẠO DIỄN / CHIEF EDITOR
* **Vai trò:**
  - Phân tích yêu cầu sản phẩm bằng ngôn ngữ tự nhiên, chuyển hóa ý tưởng thành đặc tả rõ ràng.
  - Điều phối thứ tự ưu tiên, phân chia giai đoạn và xác định tiêu chí nghiệm thu (Acceptance Criteria).
  - Đánh giá trải nghiệm người dùng (UX), cấu trúc thông tin, chiến lược sản phẩm và kiến trúc tổng thể.
  - Giải quyết xung đột giữa bài toán kinh doanh và quyết định kỹ thuật.
  - Review các mốc milestone quan trọng, quyết định khi nào cần kiểm thử chuyên sâu.
* **Nguyên tắc:**
  - Định hướng và tổng hợp, không tham gia viết từng dòng code.
  - Chỉ xin ý kiến khi có quyết định sản phẩm lớn, thay đổi kiến trúc hoặc gặp bài toán khó.
  - Tránh đánh giá lại những vấn đề nhỏ đã được thống nhất.

### 2. Gemini Pro — LEAD DEVELOPER / THỢ CODE CHÍNH (Agent hiện tại trong Antigravity)
* **Nhiệm vụ:**
  - Khảo sát workspace, tài liệu và mã nguồn hiện hữu.
  - Lập kế hoạch ngắn gọn và trực tiếp thực thi (viết/sửa code, HTML/CSS/JS, tìm kiếm, bộ lọc, điều hướng).
  - Chạy ứng dụng nội bộ, kiểm thử tự động, sửa lỗi và tối ưu hiệu năng.
  - Tự kiểm tra cơ bản (vòng 1) trước khi gửi review độc lập.
  - Ghi nhận quyết định kỹ thuật vào `DECISION_LOG.md` và chuẩn bị `AI_REVIEW_PACKET.md` cho ChatGPT và Claude.
* **Giới hạn quyền hạn:**
  - Chủ động xử lý công việc triển khai thông thường.
  - **Không** tự ý đổi quyết định sản phẩm quan trọng, không tạo dịch vụ trả phí, không tự ý deploy công khai hoặc thực hiện thao tác có nguy cơ mất dữ liệu khi chưa được phép.

### 3. Claude — CODE REVIEWER / QA-QC CHUYÊN SÂU
* **Nhiệm vụ:**
  - Review độc lập các thay đổi code quan trọng, cấu trúc dữ liệu, xử lý lỗi và edge cases.
  - Rà soát bảo mật: xác thực, phân quyền, dữ liệu đầu vào (XSS, injection), xử lý API.
  - Kiểm tra độ chính xác của bộ lọc cấp/lớp/môn và tìm kiếm tiếng Việt.
  - Đánh giá test coverage, chỉ ra các trường hợp biên chưa được kiểm thử.
  - Báo cáo lỗi theo mức độ nghiêm trọng: File path, Steps to reproduce, Proposed fix.
* **Nguyên tắc:**
  - Tập trung review và kiểm thử, không tự ý viết lại toàn bộ mã nguồn.
  - Kết luận độc lập dựa trên bằng chứng kiểm thử (PASS / PASS WITH ISSUES / FAIL).

### 4. Chủ dự án — PRODUCT OWNER
* Người ra quyết định tối cao về mục tiêu kinh doanh, trải nghiệm mong muốn và thứ tự ưu tiên.
* Phê duyệt các thay đổi có ảnh hưởng lớn, chi phí, bảo mật hoặc chính sách dữ liệu.
* Nhận báo cáo ngắn gọn, trực quan bằng tiếng Việt; không phải đọc log kỹ thuật dài dòng.

---

## II. NGUYÊN TẮC TIẾT KIỆM HẠN MỨC AI

1. **Gemini tự xử lý công việc thông thường:**
   - Sửa lỗi giao diện nhỏ, responsive, CSS, component đã có đặc tả.
   - Viết test cho chức năng đã rõ yêu cầu, sửa lỗi lint, cấu hình.
   - Tinh chỉnh bộ lọc, tìm kiếm theo tiêu chí nghiệm thu có sẵn.
2. **Chỉ dùng ChatGPT tại các mốc có giá trị cao:**
   - Khi có ý tưởng sản phẩm mới hoặc thay đổi lớn về trải nghiệm người dùng.
   - Khi có xung đột giữa các yêu cầu hoặc cần quyết định kiến trúc lâu dài.
   - Khi hoàn thành milestone lớn cần đánh giá tổng thể.
3. **Chỉ dùng Claude cho QA-QC có trọng điểm:**
   - Sau khi hoàn thành bộ lọc, tìm kiếm, luồng dữ liệu nhạy cảm hoặc tích hợp database/dịch vụ ngoài.
   - Trước khi phát hành phiên bản công khai hoặc khi gặp lỗi phức tạp Gemini chưa xử lý được.
4. **Không tiêu tốn lượt vì truyền lại bối cảnh:**
   - Không gửi toàn bộ mã nguồn hoặc chat history.
   - Sử dụng `AI_REVIEW_PACKET.md` với dung lượng cô đọng, chỉ gồm file thay đổi, diff, test kết quả và câu hỏi cụ thể.
   - Tối đa 2 vòng review cho cùng một vấn đề; nếu còn bất đồng, tổng hợp cho Chủ dự án quyết định.
5. **Không tự động phát sinh chi phí:**
   - Không tự gọi API trả phí, không mua quota nếu chưa được Chủ dự án duyệt.

---

## III. QUY TRÌNH 7 BƯỚC PHỐI HỢP CHUẨN

```mermaid
flowchart TD
    S1["Bước 1: ChatGPT định hình yêu cầu & Tiêu chí nghiệm thu"] --> S2["Bước 2: Gemini lập kế hoạch & triển khai mã nguồn"]
    S2 --> S3["Bước 3: Gemini tự chạy kiểm thử nội bộ (Vòng 1)"]
    S3 --> S4{"Cần QA chuyên sâu?"}
    S4 -- "Có (Mốc quan trọng)" --> S5["Bước 4: Claude Review độc lập (AI_REVIEW_PACKET.md)"]
    S4 -- "Không (Nhiệm vụ nhỏ)" --> S7["Bước 7: Báo cáo Chủ dự án (Product Owner)"]
    S5 --> S6["Bước 5: Gemini sửa lỗi theo phản hồi QC"]
    S6 --> S7
```

---

## IV. BẢO MẬT VÀ NGUYÊN TẮC VẬN HÀNH

- Không lưu secret / API key trong mã nguồn.
- Không tự deploy công khai khi chưa có lệnh.
- Không đánh dấu PASS khi chưa chạy kiểm thử thực tế.
- Mọi thay đổi phải bám sát `DECISION_LOG.md` và `implementation_plan.md`.
