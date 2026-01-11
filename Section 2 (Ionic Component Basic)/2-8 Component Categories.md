## Phân loại Component & Chiến lược Bố cục

![[Component Categories.png]]
Để giải quyết vấn đề hiển thị (như thẻ `ion-card` bị giãn quá rộng trên màn hình lớn), ta cần hiểu bản chất của các component trong Ionic. Mặc dù Ionic không phân chia chính thức, nhưng ta có thể tư duy theo 3 nhóm chức năng chính để dễ dàng quản lý và sử dụng:

### 1. Thành phần Hiển thị (Output Components)

Nhóm này tập trung vào việc **xuất dữ liệu** và đưa thông tin lên màn hình cho người dùng xem.

- **Chức năng chính:** Hiển thị nội dung, hình ảnh, văn bản.
    
- **Ví dụ:**
    
    - `ion-img`: Hiển thị hình ảnh.
        
    - `ion-badge`: Hiển thị huy hiệu/thông báo nhỏ.
        
    - `ion-label`: Nhãn văn bản.
        
    - `ion-title`: Tiêu đề.
        
    - `ion-toolbar`: Thanh công cụ.
        
    - `ion-alert`: Hộp thoại thông báo (Tuy có tương tác nút bấm, nhưng mục đích chính vẫn là hiển thị thông tin).
        

### 2. Thành phần Bố cục (Layout Components)

Nhóm này thường không hiển thị nội dung trực tiếp mà giúp **cấu trúc, sắp xếp và tổ chức** các thành phần khác trên trang.

- **Chức năng chính:** Gom nhóm, định vị, và kiểm soát kích thước của các phần tử con.
    
- **Ví dụ:**
    
    - `ion-list`: Danh sách.
        
    - `ion-tabs`: Các tab điều hướng.
        
    - `ion-card`: Thẻ nội dung (Vừa có tính hiển thị, vừa có tính bao bọc bố cục).
        
    - `ion-grid`: Hệ thống lưới (Quan trọng cho việc chia cột và dòng).
        

### 3. Thành phần Nhập liệu (Input Components)

Nhóm này tập trung vào **tương tác người dùng**, cho phép người dùng nhập dữ liệu hoặc ra lệnh cho ứng dụng.

- **Chức năng chính:** Nhận sự kiện click, gõ phím, vuốt, v.v.
    
- **Ví dụ:**
    
    - `ion-button`: Nút bấm.
        
    - `ion-input`: Ô nhập liệu.
        
    - `ion-textarea`: Ô nhập văn bản nhiều dòng.
        

---

### Giải pháp cho vấn đề giao diện (Responsive)

Để xử lý vấn đề `ion-card` hiển thị không đẹp trên các kích thước màn hình khác nhau (quá rộng trên Desktop), ta cần sử dụng **Thành phần Bố cục (Layout Components)**.

- Giải pháp cụ thể được đề xuất là sử dụng **`ion-grid`**.
    
- `ion-grid` cung cấp hệ thống lưới linh hoạt giúp kiểm soát độ rộng và vị trí của nội dung một cách hiệu quả.