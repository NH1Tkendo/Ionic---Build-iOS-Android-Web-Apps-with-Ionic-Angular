## Thêm Nút Bấm và Biểu tượng (Buttons & Icons)

Phần này tập trung vào việc thêm các nút tương tác (`Add Expense` và `Clear`) vào ứng dụng, đồng thời tinh chỉnh giao diện và tích hợp biểu tượng để tăng tính thẩm mỹ và trải nghiệm người dùng.

### 1. Thêm nút bấm cơ bản (`ion-button`)

Sử dụng component `ion-button` để tạo các nút chức năng.

- Mặc định, nút bấm sẽ có màu nền (solid background) và kiểu dáng chuẩn của hệ điều hành.
    
- **Hiệu ứng:** Trên Android, nút bấm tự động có "hiệu ứng gợn sóng" (ripple effect) khi nhấn.
    

### 2. Tùy chỉnh giao diện nút (Styling)

Ionic cung cấp các thuộc tính (attributes) để thay đổi vẻ ngoài của nút mà không cần viết CSS thủ công.

#### a. Thuộc tính `fill` (Kiểu tô màu)

Quy định cách hiển thị nền và viền của nút:

- `solid` (Mặc định): Có màu nền đầy đủ.
    
- `outline`: Chỉ có viền và chữ màu, nền trong suốt.
    
- `clear`: Không viền, không nền, chỉ có chữ (giống text link).
    

#### b. Thuộc tính `color` (Màu sắc)

Sử dụng bảng màu mặc định của Ionic (trong `theme/variables.scss` nếu dùng Angular, hoặc mặc định của CDN):

- `primary`: Màu chính (thường là xanh dương).
    
- `danger`: Màu cảnh báo (thường là đỏ).
    
- `tertiary`, `secondary`, v.v.
    

**Ví dụ cấu hình nút "Clear":** Mục tiêu là tạo nút màu đỏ, chỉ có viền:

HTML

```
<ion-button color="danger" fill="outline">Clear</ion-button>
```

### 3. Tích hợp biểu tượng (`ion-icon`)

Bộ icon **Ionicons** đã được tích hợp sẵn trong gói CDN của Ionic, không cần import thêm.

- **Tra cứu:** Tìm tên icon tại trang chủ `ionicons.com`.
    
- **Cách dùng:** Sử dụng thẻ `<ion-icon>` và thuộc tính `name`.
    
- **Các icon sử dụng trong bài:**
    
    - Nút Clear: Dùng icon `close` (dấu X).
        
    - Nút Add: Dùng icon `add` (dấu +).
        

### 4. Định vị với `slot` (Slots)

Để icon hiển thị đẹp mắt bên cạnh văn bản (có khoảng cách hợp lý), ta sử dụng thuộc tính `slot`. Đây là cơ chế của Web Components để định vị nội dung vào các vị trí dành sẵn.

- `slot="start"`: Đặt icon vào đầu nút (bên trái văn bản).
    
- `slot="end"`: Đặt icon vào cuối nút (bên phải văn bản).
    

**Lợi ích:** `slot` tự động xử lý `padding` và `margin` giữa icon và chữ, giúp giao diện thoáng và chuyên nghiệp hơn.

### 5. Mã nguồn hoàn chỉnh

Dưới đây là đoạn mã cho hai nút bấm sau khi đã thêm icon và định dạng:

HTML

```
<ion-button color="danger" fill="outline">
  <ion-icon name="close" slot="start"></ion-icon>
  Clear
</ion-button>

<ion-button>
  <ion-icon name="add" slot="start"></ion-icon>
  Add Expense
</ion-button>
```