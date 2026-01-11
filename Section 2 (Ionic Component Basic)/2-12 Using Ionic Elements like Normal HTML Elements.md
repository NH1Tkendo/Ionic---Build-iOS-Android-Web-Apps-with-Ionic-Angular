## Xử lý Logic với JavaScript Thuần (Vanilla JS)

Ionic Web Components hoạt động tương tự như các thẻ HTML tiêu chuẩn, do đó ta có thể sử dụng JavaScript thuần để tương tác mà không bắt buộc phải dùng Framework (như Angular/React) ngay lập tức.

### 1. Thiết lập tệp Script

Để thêm logic xử lý, ta tạo một file JavaScript riêng biệt và nhúng vào ứng dụng.

- **Tạo file:** `app.js` (cùng thư mục với `index.html`).
    
- **Nhúng file:** Thêm thẻ script vào cuối file HTML, ngay trước thẻ đóng `</body>`.
    

HTML

```
<body>
  <ion-app>...</ion-app>

  <script src="app.js"></script>
</body>
```

### 2. Gán định danh (ID) cho phần tử giao diện

Để truy cập chính xác các thành phần trong DOM, ta gán thuộc tính `id` cho các thẻ HTML cần tương tác (Input và Button).

**Trong file `index.html`:**

HTML

```
<ion-input type="text" id="input-reason"></ion-input>

<ion-input type="number" id="input-amount"></ion-input>

<ion-button id="button-cancel" ...>Clear</ion-button>

<ion-button id="button-confirm" ...>Add Expense</ion-button>
```

### 3. Truy cập phần tử DOM trong JavaScript

Sử dụng `document.querySelector` để tham chiếu đến các phần tử thông qua ID đã gán.

**Trong file `app.js`:**

JavaScript

```
// 1. Tham chiếu đến các ô nhập liệu (Inputs)
const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');

// 2. Tham chiếu đến các nút bấm (Buttons)
const cancelBtn = document.querySelector('#button-cancel');
const confirmBtn = document.querySelector('#button-confirm');
```

### 4. Xử lý sự kiện (Event Handling)

Thêm trình lắng nghe sự kiện (`Event Listener`) cho nút bấm để thực thi hành động khi người dùng tương tác.

JavaScript

```
// Lắng nghe sự kiện 'click' trên nút Xác nhận
confirmBtn.addEventListener('click', () => {
    // Kiểm tra kết nối trong Console của trình duyệt
    console.log('It works!');
});
```

**Cách kiểm tra:**

1. Lưu file và tải lại trang.
    
2. Mở **Developer Tools** (F12) $\rightarrow$ tab **Console**.
    
3. Nhấn nút "Add Expense". Nếu dòng chữ `It works!` xuất hiện, logic đã được kết nối thành công.