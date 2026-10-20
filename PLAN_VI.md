# Kế hoạch: Trang web HTML bán tài liệu

## Tổng quan
Tạo một trang HTML tĩnh đơn giản liệt kê các tài liệu để bán. Mỗi mục tài liệu có nút **Mua**. Khi người dùng nhấn nút, sẽ mở một deep‑link Zalo:

```
https://zalo.me/0926999869?text=<Mã_Tài_Liệu>
```

Liên kết này sẽ mở ứng dụng Zalo (hoặc web) với tin nhắn đã được điền sẵn chứa mã tài liệu, giúp người bán xác định giao dịch.

## Yêu cầu chức năng
- Trang HTML tĩnh, đáp ứng (responsive) cho cả máy tính để bàn và di động.
- Danh sách tài liệu hiển thị dạng thẻ (card) hoặc dòng, bao gồm tiêu đề, mô tả ngắn, giá.
- Mỗi thẻ có nút **Mua**.
- Khi nhấn **Mua**, sẽ kích hoạt deep‑link Zalo với số điện thoại `0926999869` và tham số truy vấn `text` bằng mã tài liệu duy nhất.
- Tùy chọn: thông báo dự phòng nếu Zalo không được cài đặt (mở URL thông thường).

## Công nghệ
- **HTML5**
- **CSS3** (Flexbox/Grid, tùy chọn sử dụng framework nhẹ như Bootstrap CDN)
- **JavaScript thuần** để xử lý sự kiện click và mã hoá URL.
- Không cần backend – trang có thể được lưu trữ trên bất kỳ máy chủ tĩnh nào (GitHub Pages, Netlify, …).

## Cấu trúc trang (Mẫu skeleton)
```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bán Tài Liệu</title>
  <!-- Tùy chọn: Bootstrap CDN -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
  <style>
    /* Các style tùy chỉnh có thể đặt ở đây */
  </style>
</head>
<body>
  <div class="container my-4">
    <h1 class="text-center mb-4">Tài Liệu Bán Chạy</h1>
    <div id="document-list" class="row g-4">
      <!-- Các thẻ tài liệu sẽ được chèn vào đây -->
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

## JavaScript (script.js) – Logic cốt lõi
```js
const documents = [
  {
    code: "TL001",
    title: "Giáo Trình Toán 12",
    description: "Bài giảng, đề thi, đáp án",
    price: "150.000₫",
  },
  // ... thêm các mục khác ở đây
];

function createCard(doc) {
  const col = document.createElement('div');
  col.className = 'col-md-4';

  const card = document.createElement('div');
  card.className = 'card h-100';

  const body = document.createElement('div');
  body.className = 'card-body';
  body.innerHTML = `
    <h5 class="card-title">${doc.title}</h5>
    <p class="card-text">${doc.description}</p>
    <p class="card-text"><strong>${doc.price}</strong></p>
  `;

  const btn = document.createElement('button');
  btn.className = 'btn btn-primary';
  btn.textContent = 'Mua';
  btn.onclick = () => {
    const encoded = encodeURIComponent(doc.code);
    const url = `https://zalo.me/0926999869?text=${encoded}`;
    window.location.href = url; // kích hoạt deep‑link
  };

  const footer = document.createElement('div');
  footer.className = 'card-footer text-center';
  footer.appendChild(btn);

  card.appendChild(body);
  card.appendChild(footer);
  col.appendChild(card);
  return col;
}

const listEl = document.getElementById('document-list');
documents.forEach(d => listEl.appendChild(createCard(d)));
```

## Danh sách công việc
1. **Thiết lập dự án**
   - Tạo thư mục dự án `doc-sale-web` trong workspace.
   - Khởi tạo kho git (tùy chọn).
2. **Skeleton HTML**
   - Tạo file `index.html` theo cấu trúc ở trên.
3. **CSS Styling**
   - Thêm CSS tùy chỉnh cho thương hiệu (màu sắc, phông chữ) hoặc tích hợp Bootstrap.
4. **Logic JavaScript**
   - Tạo file `script.js` triển khai mảng `documents` và hàm xử lý click.
   - Đảm bảo mã hoá URL cho mã tài liệu.
5. **Nhập nội dung**
   - Điền dữ liệu thực vào mảng `documents` (tiêu đề, mô tả, giá, mã).
6. **Kiểm thử**
   - Mở trang trong các trình duyệt (Chrome, Safari, chế độ di động).
   - Nhấn **Mua** và xác nhận deep‑link Zalo mở đúng tin nhắn.
   - Kiểm tra fallback khi Zalo không được cài đặt (trình duyệt hiển thị thông báo).
7. **Triển khai**
   - Đẩy lên dịch vụ lưu trữ tĩnh (GitHub Pages / Netlify).
   - Xác nhận URL trực tiếp hoạt động.
8. **Tài liệu & Bảo trì**
   - Viết README ngắn gọn với các bước triển khai.
   - Thêm comment trong `script.js` giải thích cách xây dựng deep‑link.

## Lộ trình (gợi ý)
| Giai đoạn | Thời gian |
|-----------|-----------|
| Thiết lập & Skeleton | 1 ngày |
| Thiết kế & Đáp ứng | 1‑2 ngày |
| JavaScript & Deep‑link | 1 ngày |
| Nhập nội dung | 1 ngày |
| Kiểm thử & Sửa lỗi | 1‑2 ngày |
| Triển khai | 0.5 ngày |

Tổng thời gian ≈ **5‑7 ngày**.

---
*Bản kế hoạch này đã được lưu trong `PLAN.md` để tham khảo.*
