## Tạo Form Nhập liệu và Giao diện Thẻ (Input Form & Card UI)

Phần này hướng dẫn cách thêm các trường nhập liệu tương tác và tổ chức giao diện gọn gàng hơn bằng cách sử dụng các thành phần `Card` của Ionic.

### 1. Tạo trường nhập liệu (Input Fields)

Để tạo các ô nhập liệu chuẩn phong cách Ionic, ta cần kết hợp nhiều thành phần với nhau thay vì chỉ dùng thẻ `input` thông thường.

- **Cấu trúc chuẩn:** Sử dụng `ion-item` làm container để bao bọc `ion-label` và `ion-input`.
    
- **Hiệu ứng nhãn (Label):**
    
    - Sử dụng thuộc tính `position="floating"` cho `ion-label`.
        
    - **Tác dụng:** Nhãn sẽ tự động di chuyển (trôi) lên phía trên khi người dùng nhấp vào ô nhập liệu.
        
- **Kiểu dữ liệu (Input Type):**
    
    - Dùng `type="text"` cho nội dung văn bản (Ví dụ: Lý do chi tiêu).
        
    - Dùng `type="number"` cho nội dung số (Ví dụ: Số tiền), giúp hiển thị bàn phím số trên thiết bị di động.
        

### 2. Tổ chức giao diện với Card (Thẻ)

Để tránh việc các ô nhập liệu trải dài hết chiều rộng màn hình (đặc biệt trên màn hình lớn) và tạo khung nhìn thẩm mỹ hơn, ta sử dụng component `ion-card`.

**Cấu trúc phân cấp của Card:**

1. **`ion-card`**: Thẻ bao ngoài cùng.
    
2. **`ion-card-header`**: Chứa phần đầu của thẻ.
    
    - **`ion-card-title`**: Hiển thị tiêu đề thẻ (Ví dụ: "New Expense").
        
3. **`ion-card-content`**: Chứa nội dung chính của thẻ (nơi đặt các `ion-item` và `ion-input`).
    

### 3. Mã nguồn thực hiện (Implementation)

Dưới đây là đoạn mã HTML kết hợp Card và Input để tạo form nhập khoản chi:

HTML

```
<ion-card>
  <ion-card-header>
    <ion-card-title>New Expense</ion-card-title>
  </ion-card-header>

  <ion-card-content>
    
    <ion-item>
      <ion-label position="floating">Expense Reason</ion-label>
      <ion-input type="text"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="floating">Expense Amount</ion-label>
      <ion-input type="number"></ion-input>
    </ion-item>

  </ion-card-content>
</ion-card>
```

### 4. Ghi chú về hiển thị

- **Trên di động:** Giao diện Card hiển thị gọn gàng, tách biệt với nền.
    
- **Trên màn hình lớn:** Mặc dù đã nằm trong Card, nhưng theo mặc định Card vẫn có thể giãn ra toàn bộ chiều rộng (full width). Vấn đề bố cục (Grid layout) để xử lý việc này sẽ được giải quyết ở các bài học sau.