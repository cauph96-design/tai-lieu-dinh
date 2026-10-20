# Plan: HTML Webpage for Selling Documents

## Overview
Create a simple static HTML page that lists documents for sale. Each document entry includes a **Mua** (Buy) button. When the user clicks the button, a Zalo deep‑link is opened:

```
https://zalo.me/0926999869?text=<Mã_Tài_Liệu>
```

The link opens the Zalo app (or web) with a pre‑filled message containing the document code so the seller can identify the purchase.

## Functional Requirements
- Static HTML page responsive for desktop and mobile.
- Document list displayed as cards or rows with title, short description, price.
- Each card has a **Mua** button.
- Clicking **Mua** triggers a deep link to Zalo with the phone number `0926999869` and query parameter `text` equal to the document's unique code.
- Optional: fallback message if Zalo is not installed (open regular URL).

## Technical Stack
- **HTML5**
- **CSS3** (Flexbox/Grid, optional lightweight framework like Bootstrap CDN)
- **Vanilla JavaScript** for click handling and URL encoding.
- No backend required – the page can be hosted on any static file server (GitHub Pages, Netlify, etc.).

## Page Structure (Skeleton)
```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bán Tài Liệu</title>
  <!-- Optional: Bootstrap CDN -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
  <style>
    /* Custom styles can go here */
  </style>
</head>
<body>
  <div class="container my-4">
    <h1 class="text-center mb-4">Tài Liệu Bán Chạy</h1>
    <div id="document-list" class="row g-4">
      <!-- Document cards will be injected here -->
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

## JavaScript (script.js) – Core Logic
```js
const documents = [
  {
    code: "TL001",
    title: "Giáo Trình Toán 12",
    description: "Bài giảng, đề thi, đáp án",
    price: "150.000₫",
  },
  // ... add more items
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
    window.location.href = url; // triggers deep link
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

## Task List
1. **Project Setup**
   - Create project folder `doc-sale-web` inside the workspace.
   - Initialise git repository (optional).
2. **HTML Skeleton**
   - Create `index.html` with the structure shown above.
3. **CSS Styling**
   - Add custom CSS for branding (colors, fonts) or integrate Bootstrap.
4. **JavaScript Logic**
   - Create `script.js` implementing the document array and click handler.
   - Ensure URL encoding for the document code.
5. **Content Population**
   - Fill the `documents` array with real data (title, description, price, code).
6. **Testing**
   - Open the page in browsers (Chrome, Safari, mobile view).
   - Click **Mua** and verify the Zalo deep link opens with correct text.
   - Test fallback when Zalo is not installed (browser shows a message).
7. **Deployment**
   - Push to a static hosting service (GitHub Pages / Netlify).
   - Verify the live URL works.
8. **Documentation & Maintenance**
   - Write a short README with deployment steps.
   - Add comments in `script.js` explaining the deep‑link construction.

## Timeline (Suggested)
| Phase | Duration |
|-------|----------|
| Setup & Skeleton | 1 day |
| Styling & Responsiveness | 1‑2 days |
| JavaScript & Deep‑link | 1 day |
| Content Entry | 1 day |
| Testing & Bug Fixes | 1‑2 days |
| Deployment | 0.5 day |

Total ≈ **5‑7 days**.

---
*This plan is saved in `PLAN.md` for reference.*
