## Xây dựng Giao diện Cơ bản (Basic UI Structure)

Phần này hướng dẫn cách sử dụng các component nền tảng của Ionic để tạo bố cục ứng dụng di động tiêu chuẩn, bao gồm thanh tiêu đề (Header) và vùng nội dung chính (Content).

### 1. Phân tích bố cục ứng dụng (Layout Analysis)

Ứng dụng "Budget Planner" (Quản lý chi tiêu) cần có các vùng chức năng sau:

- **Thanh công cụ (Toolbar):** Hiển thị tiêu đề ứng dụng ở trên cùng.
    
- **Nội dung chính (Main Content):**
    
    - Ô nhập liệu (Input): Tên khoản chi và số tiền.
        
    - Nút bấm (Button): Để thêm khoản chi.
        
    - Danh sách (List): Hiển thị các khoản chi đã nhập.
        
    - Tổng kết (Total Sum): Hiển thị tổng số tiền ở dưới cùng.
        

### 2. Các thành phần Ionic cốt lõi

Dưới đây là các component cần thiết để dựng khung sườn (skeleton) cho ứng dụng:

#### a. Bộ khung ứng dụng (`ion-app`)

- **Chức năng:** Là lớp bao bọc (wrapper) cho toàn bộ ứng dụng Ionic. Nó đảm bảo các thiết lập kiểu dáng và hành vi chung được áp dụng chính xác.
    
- **Quy tắc:**
    
    - Luôn luôn bọc toàn bộ ứng dụng bằng `ion-app`.
        
    - Chỉ sử dụng **một lần duy nhất** trong một file HTML (hoặc trong root component của Angular).
        

#### b. Vùng nội dung (`ion-content`)

- **Chức năng:** Chứa nội dung chính của ứng dụng.
    
- **Đặc điểm:** Tự động quản lý việc cuộn trang (scrolling) và hiển thị nội dung hợp lý trên các thiết bị.
    

#### c. Thanh tiêu đề (`ion-header`, `ion-toolbar`, `ion-title`)

Để tạo thanh tiêu đề cố định ở phía trên (fixed top):

1. **`ion-header`**: Container định vị vị trí ở trên cùng.
    
2. **`ion-toolbar`**: Nằm bên trong header, chứa các công cụ điều hướng hoặc tiêu đề.
    
3. **`ion-title`**: Nằm bên trong toolbar, hiển thị tên của ứng dụng hoặc màn hình hiện tại.
    

### 3. Mã nguồn thực hiện (Implementation)

Cấu trúc HTML sau khi thêm Header và Content:

HTML

```
<ion-app>
  <ion-header>
    <ion-toolbar color="primary">
      <ion-title>Budget Planner</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    </ion-content>
</ion-app>
```

### 4. Tùy biến giao diện (Styling & Configuration)

Ionic cho phép cấu hình giao diện thông qua các thuộc tính (properties) trực tiếp trên thẻ HTML.

- **Thuộc tính màu sắc (`color`):**
    
    - Ví dụ: `<ion-toolbar color="primary">`.
        
    - Các giá trị phổ biến: `primary`, `secondary`, `danger`, v.v. (dựa trên bảng màu mặc định của Ionic).
        
- **Cơ chế tương phản tự động:**
    
    - Khi thiết lập màu nền (background) cho `ion-toolbar` là màu tối hoặc đậm (ví dụ: xanh dương - primary).
        
    - Ionic tự động điều chỉnh màu chữ của `ion-title` (ví dụ: sang màu trắng) để đảm bảo độ tương phản và dễ đọc.
        

### 5. Ghi chú kỹ thuật (Technical Insights)

- **Web Components:** Khi chạy trên trình duyệt, các thẻ như `ion-toolbar` được render thành các phần tử DOM thực sự (không phải giả lập).
    
- **Shadow DOM:** Nếu kiểm tra phần tử (Inspect Element), bạn sẽ thấy cấu trúc bên trong (như các thẻ `div` ẩn) nằm trong `shadow-root`. Đây là cơ chế giúp đóng gói (encapsulation) style và logic của Web Components.
    
- **Responsive:** Sử dụng chế độ "Device Mode" trong Chrome DevTools để kiểm tra, giao diện sẽ tự động hiển thị chuẩn theo phong cách Mobile (iOS/Android).