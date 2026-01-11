## Tiện ích CSS (CSS Utilities) và Căn chỉnh Layout

Ionic cung cấp sẵn một bộ công cụ định dạng gọi là **CSS Utilities**. Đây là các lớp (class) hoặc thuộc tính giúp xử lý nhanh các vấn đề về khoảng cách (padding, margin) và vị trí (positioning/alignment) mà không cần viết mã CSS riêng.

### 1. Lưu ý quan trọng về Cú pháp (Ionic 5+)

Trong các phiên bản Ionic cũ (như Ionic 4), các tiện ích này được viết dưới dạng **thuộc tính** (attribute) trực tiếp trên thẻ HTML. Tuy nhiên, từ **Ionic 5 trở đi**, chúng đã chuyển thành **CSS Class**.

- **Quy tắc chuyển đổi:** Thêm tiền tố `ion-` vào trước tên thuộc tính cũ và đặt nó trong `class="..."`.
    
- **Ví dụ:**
    
    - Cũ: `<div text-center>`
        
    - Mới: `<div class="ion-text-center">`
        
    - Cũ: `<div margin>`
        
    - Mới: `<div class="ion-margin">`
        

### 2. Áp dụng vào dự án (Căn chỉnh nút bấm)

Mục tiêu là tạo khoảng cách cho hàng nút bấm và căn chúng sang bên phải màn hình.

#### Bước 1: Sử dụng thẻ bao (Wrapper)

Chúng ta có thể sử dụng các thẻ HTML tiêu chuẩn như `<div>` bên trong ứng dụng Ionic. Hãy bao quanh hai nút bấm (`Clear` và `Add Expense`) bằng một thẻ `<div>`.

#### Bước 2: Thêm Class tiện ích

Sử dụng các class sau vào thẻ `<div>`:

1. **`ion-margin-vertical`**: Thêm khoảng cách (margin) vào phía trên và phía dưới của phần tử. (Hoặc dùng `ion-margin` nếu muốn cách đều 4 phía).
    
2. **`ion-text-right`**: Căn chỉnh nội dung văn bản (và các phần tử inline như button) sang bên phải.
    

#### Mã nguồn minh họa:

HTML

```
<div class="ion-text-right ion-margin-vertical">
  
  <ion-button color="danger" fill="outline">
    <ion-icon slot="start" name="close"></ion-icon>
    Clear
  </ion-button>

  <ion-button>
    <ion-icon slot="start" name="add"></ion-icon>
    Add Expense
  </ion-button>

</div>
```

### 3. Lợi ích của CSS Utilities

- **Tính nhất quán (Consistency):** Ionic sử dụng các giá trị mặc định chuẩn cho margin và padding. Việc sử dụng các class này giúp giao diện toàn ứng dụng đồng bộ, tránh việc tự đoán mò các giá trị pixel (ví dụ: không lo chỗ này margin 10px, chỗ kia 12px).
    
- **Tốc độ:** Không cần viết file CSS riêng cho các định dạng cơ bản.
    
- **Tra cứu:** Có thể tìm danh sách đầy đủ các class này trong tài liệu chính thức của Ionic tại mục **Layout > CSS Utilities**.