## Thiết lập Dự án Ionic Độc lập (Không sử dụng Framework)

Bài học này hướng dẫn cách xây dựng một ứng dụng Ionic cơ bản mà không phụ thuộc vào bất kỳ framework nào (như Angular, React, hay Vue). Mục tiêu là để hiểu rõ bản chất hoạt động độc lập của các **thành phần web Ionic (Ionic Web Components)**.

### 1. Mục tiêu dự án

- **Ứng dụng:** Công cụ lập kế hoạch ngân sách (Budget Planner).
    
- **Chức năng chính:**
    
    - Tạo danh sách chi phí.
        
    - Thêm các khoản chi tiêu mới.
        
    - Tính toán tổng chi phí.
        
- **Công nghệ:** HTML5 thuần và Ionic (không dùng Angular trong bài này).
    

### 2. Tại sao không sử dụng Angular ngay từ đầu?

- Để chứng minh sức mạnh của **Ionic Web Components**: Chúng có khả năng hoạt động độc lập mà không cần framework.
    
- Giúp người học phân biệt rõ ràng đâu là tính năng của Ionic, đâu là tính năng của Angular.
    
- _Lưu ý:_ Các phần sau của khóa học vẫn sẽ sử dụng Angular kết hợp với Ionic.
    

### 3. Quy trình thiết lập môi trường

#### Bước 1: Tạo cấu trúc HTML cơ bản

1. Xóa các nội dung cũ (nếu có) trong dự án.
    
2. Tạo một file mới tên là `index.html`.
    
3. Sử dụng **VS Code**: Gõ `html`, nhấn `Ctrl + Space`, chọn `HTML5` để tạo khung sườn (skeleton) HTML cơ bản.
    

#### Bước 2: Tích hợp Ionic qua CDN

Để sử dụng các thành phần Ionic, ta cần nhúng thư viện từ **Mạng phân phối nội dung (CDN)** vào file HTML.

1. Truy cập `ionicframework.com` $\rightarrow$ Developers $\rightarrow$ UI Components $\rightarrow$ Guide $\rightarrow$ Packages & CDN.
    
2. Sao chép liên kết CDN được cung cấp.
    

**Cấu hình trong thẻ `<head>`:**

- **Thêm JavaScript:** Dán liên kết script của Ionic vào cuối phần `<head>`.
    
- **Thêm CSS (Styles):**
    
    - Sao chép (duplicate) dòng script vừa dán.
        
    - Đổi thẻ `script` thành `link`.
        
    - Thêm thuộc tính `rel="stylesheet"`.
        
    - Chỉnh sửa đường dẫn (href): Thay đổi phần cuối từ `ionic.js` thành `css/ionic.bundle.css` (theo hướng dẫn trong bài).
        

### 4. Mã nguồn tham khảo (Minh họa)

Dưới đây là cấu trúc file `index.html` sau khi đã thiết lập:

HTML

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Budget Planner</title>
    
    <script src="https://unpkg.com/@ionic/core@latest/dist/ionic.js"></script>
    
    <link rel="stylesheet" href="https://unpkg.com/@ionic/core@latest/css/ionic.bundle.css">
</head>
<body>
    </body>
</html>
```

### 5. Kết luận

Sau khi hoàn tất việc nhúng cả JavaScript và CSS, dự án đã sẵn sàng để sử dụng các thành phần giao diện (UI Components) của Ionic mà không cần cài đặt phức tạp.

---

**Bạn có muốn tôi phác thảo cấu trúc HTML chi tiết cho phần thân (body) của ứng dụng "Budget Planner" dựa trên các component cơ bản của Ionic không?**