# Hướng Dẫn Quản Lý Tài Liệu Bằng Google Sheets & Up PDF Đọc Thử

Tài liệu này hướng dẫn bạn cách quản lý toàn bộ kho tài liệu website ngay trên Google Sheets (điện thoại hoặc máy tính) mà **không cần động vào code**, bao gồm cả tính năng **nhúng file PDF đọc thử 3–5 trang** trực tiếp cho khách xem!

---

## Bước 1: Cấu trúc 6 cột trên Google Sheet

Tạo **6 cột ở Dòng 1** theo đúng thứ tự:

| Cột A | Cột B | Cột C | Cột D | Cột E | Cột F (Mới) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Mã** | **Tiêu đề** | **Mô tả** | **Môn** | **Khối** | **LinkDemo** |

> 📌 **Lưu ý định dạng chuẩn:**
> - **Cột Môn (Cột D)**: Ghi đúng 1 trong các chữ: `Toán`, `Văn`, `Anh`, `KHTN`, `KHXH`.
> - **Cột Khối (Cột E)**: Ghi đúng 1 trong các chữ: `Tiểu học`, `Lớp 6`, `Lớp 7`, `Lớp 8`, `Lớp 9`, `Lớp 10`, `Lớp 11`, `Lớp 12`.
> - **Cột LinkDemo (Cột F)**: Dán link Google Drive của file PDF đọc thử (hoặc để trống nếu chưa có file PDF).

---

## Bước 2: Cách lấy Link PDF Demo từ Google Drive để dán vào Cột F

Trong file CSV / Google Sheet, **không thể nhét trực tiếp file PDF nặng vài MB vào ô**, nhưng bạn **hoàn toàn có thể để LINK Google Drive của file PDF vào Cột F**. Website sẽ tự động nhúng file PDF đó thành một khung đọc thử lướt từng trang cho khách xem!

### Các bước thực hiện:
1. Bạn trích xuất khoảng **3 đến 5 trang đầu** của tài liệu thành 1 file PDF (ví dụ: `Demo_Toan_12.pdf`).
2. Tải file PDF này lên [Google Drive](https://drive.google.com).
3. Nhấp chuột phải vào file PDF trên Google Drive $\rightarrow$ chọn **Chia sẻ (Share)** $\rightarrow$ chọn **Chia sẻ**.
4. Ở mục *Quyền truy cập chung*, đổi thành: **Bất kỳ ai có đường liên kết (Anyone with the link)** với quyền **Người xem**.
5. Nhấn **Sao chép đường liên kết (Copy link)**. Link sẽ có dạng:
   ```
   https://drive.google.com/file/d/1wQQXVthJrTmYSJPJfuGJ3kbHdi3YnhM1/view?usp=sharing
   ```
6. **Dán link vừa copy vào Cột F (LinkDemo)** trên dòng tài liệu tương ứng của Google Sheet.

> 💡 **Website tự động làm phần còn lại:**
> - Khi khách bấm **"Xem thử"**, website sẽ tự động nhận diện link Google Drive và mở trực tiếp trình đọc PDF để khách lướt đọc 3–5 trang thật 100%!
> - Nếu ô Cột F để trống: Website sẽ tự động hiển thị bản tóm tắt trích đoạn + mục lục chuyên sâu dự phòng.

---

## Ví dụ mẫu các dòng nhập liệu:

| Mã | Tiêu đề | Mô tả | Môn | Khối | LinkDemo |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `L12-TOAN-01` | Toán 12 Khảo Sát Hàm Số | Tổng ôn lý thuyết, 200 câu trắc nghiệm bám sát đề thi. | Toán | Lớp 12 | `https://drive.google.com/file/d/1XYZ.../view` |
| `L10-VAN-01` | Tuyển Tập Văn Mẫu 10 | 50 bài văn mẫu nghị luận xã hội và văn học hay nhất. | Văn | Lớp 10 | *(để trống)* |
| `TH-ANH-01` | Tiếng Anh Tiểu Học 1–5 | Từ vựng, ngữ pháp cơ bản và bài tập theo chương trình mới. | Anh | Tiểu học | `https://drive.google.com/file/d/2ABC.../view` |

---

## Bước 3: Lấy Link CSV Xuất Bản để kết nối vào Web
1. Trên file Google Sheet, nhấn menu **Tệp (File)** ở góc trên bên trái.
2. Chọn **Chia sẻ (Share)** $\rightarrow$ chọn tiếp **Xuất bản lên web (Publish to web)**.
3. Trong hộp thoại:
   - Chọn **Toàn bộ tài liệu** (hoặc Trang tính 1).
   - Đổi mục *Trang web* thành **Giá trị phân cách bằng dấu phẩy (.csv)**.
4. Nhấn **Xuất bản (Publish)** $\rightarrow$ nhấn **OK** xác nhận.
5. Sao chép ID của file Google Sheet (chuỗi ký tự nằm giữa `/d/` và `/edit` trên thanh địa chỉ trình duyệt).
6. Dán ID này vào cấu hình `CONFIG.SHEET_ID` trong tệp `script.js`:
   ```javascript
   const CONFIG = {
     // ...
     SHEET_ID: 'ID_SHEET_CỦA_BẠN',
     // ...
   };
   ```

Từ đó về sau, mỗi khi bạn thêm tài liệu mới hoặc paste thêm link PDF vào Google Sheet, website sẽ **tự động cập nhật tài liệu mới ngay lập tức**!
