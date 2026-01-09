## Thiết lập Môi trường Phát triển (IDE)
### Visual Studio Code

Tác giả khuyến nghị sử dụng **Visual Studio Code (VS Code)** làm IDE chính để phát triển ứng dụng.

- **Tải xuống**: [code.visualstudio.com](https://code.visualstudio.com/) (Miễn phí, đa nền tảng).
    
- **Mở dự án**: Sử dụng tính năng _File > Open Folder_ và chọn thư mục dự án vừa tạo (`ng-refresher`).
    

### Cấu hình VS Code

Một số thiết lập giúp tăng hiệu suất làm việc (sử dụng phím tắt `Ctrl + Shift + P` hoặc `Cmd + Shift + P` để mở bảng lệnh):

1. **Giao diện (Theme)**: Chọn _Color Theme_ > _Dark+_ (Giao diện tối).
    
2. **Tiện ích mở rộng (Extensions)** (Phím tắt `Ctrl/Cmd + Shift + X`):
    
    - **Material Icon Theme**: (Tùy chọn) Giúp hiển thị biểu tượng tệp tin trực quan hơn.
        
    - **Angular Essentials**: (Khuyên dùng) Gói tiện ích hỗ trợ đắc lực cho việc viết mã Angular.
        

---

## Chạy Ứng dụng (Development Server)

Để xem trước ứng dụng và kích hoạt chế độ tự động biên dịch khi sửa mã:

### Cách thực hiện

Sử dụng **Terminal tích hợp** (Integrated Terminal) ngay trong VS Code:

1. Chọn menu _Terminal > New Terminal_.
    
2. Terminal sẽ tự động mở tại thư mục gốc của dự án.
    
3. Chạy lệnh:
    
    Bash
    
    ```
    ng serve
    ```
    

### Cơ chế hoạt động

- Lệnh `ng serve` khởi động một **máy chủ phát triển** (development server).
    
- **Theo dõi (Watch)**: Tự động theo dõi các thay đổi trong tệp tin và biên dịch lại (re-build) ngay lập tức.
    
- **Truy cập**: Mở trình duyệt tại địa chỉ `http://localhost:4200`.
    

> **Lưu ý quan trọng**: Không được mở trực tiếp file `index.html` bằng cách nhấp đúp (double-click).
> 
> - Lý do 1: File này cần được biên dịch và chèn script động.
>     
> - Lý do 2: Ứng dụng cần giao thức `http://` để hoạt động đúng, không phải giao thức `file://`.
>     

---

## Cơ chế Biên dịch và Đóng gói (Build Process)

Hiểu về những gì diễn ra "phía sau hậu trường" (behind the scenes) của Angular CLI:

### So sánh `ng serve` và `ng build`

|**Đặc điểm**|**ng serve**|**ng build**|
|---|---|---|
|**Mục đích**|Phát triển (Development)|Triển khai (Production/Deployment)|
|**Lưu trữ**|Biên dịch và lưu trong **bộ nhớ RAM** (In-memory)|Xuất file ra đĩa cứng (thư mục `dist`)|
|**Kết quả**|Server ảo để xem trước|Các tệp tĩnh để đưa lên host|

### Phân tích đầu ra (Output)

Khi chạy `ng build`, kết quả sẽ nằm trong thư mục `dist`:

- **index.html**: Tệp nhập duy nhất, chứa các thẻ `<script>` trỏ tới mã nguồn đã biên dịch.
    
- **main.js**: Chứa toàn bộ logic ứng dụng và framework Angular đã được:
    
    - Biên dịch từ TypeScript sang JavaScript.
        
    - Đóng gói (Bundled).
        
    - Tối ưu hóa (Optimized).
        

→ **Kết luận**: Chúng ta viết mã nguồn "sạch" trong thư mục `src`, Angular CLI sẽ xử lý việc biến đổi nó thành mã máy tối ưu trong `dist` (hoặc trong bộ nhớ khi dùng `ng serve`).
