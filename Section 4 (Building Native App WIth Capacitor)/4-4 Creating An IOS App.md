## Phát triển Ứng dụng iOS với Capacitor

### Yêu cầu Môi trường (Environment Setup)

Để biên dịch và chạy ứng dụng cho iOS, bạn bắt buộc phải thao tác trên hệ điều hành **macOS**. Bạn cần chuẩn bị các công cụ sau:

1. **Xcode (Phiên bản 9 trở lên):**
    
    - Tải và cài đặt miễn phí từ App Store trên máy Mac.
        
2. **Công cụ dòng lệnh Xcode (Xcode command line tools):**
    
    - Mở terminal và kiểm tra bằng lệnh: `xcode-select`
        
    - Nếu hệ thống báo lỗi không tìm thấy lệnh (command not found), hãy cài đặt bằng lệnh sau:
        ```
        xcode-select --install
        ```
        
3. **Tài khoản Nhà phát triển Apple (Apple Developer account):**
    
    - Đăng ký miễn phí tại `developer.apple.com` bằng Apple ID của bạn. (Chỉ cần bản trả phí khi bạn muốn đưa ứng dụng lên App Store).
        

### Tích hợp iOS vào Dự án (Adding iOS Platform)

Để thêm nền tảng iOS vào dự án, hãy chạy lệnh sau:

Bash

```
ionic capacitor add ios
```

_Lưu ý từ giảng viên:_ Hãy đảm bảo **ID ứng dụng (App ID)** của bạn (trong file `capacitor.config.json`) không chứa dấu gạch ngang `-` để tránh lỗi trong bước này. Lệnh này sẽ tạo ra một thư mục `ios` chứa toàn bộ mã nguồn của **ứng dụng gốc (native app)**.

### Biên dịch và Chạy Ứng dụng (Build and Run)

Quy trình chuẩn để đưa code web vào ứng dụng iOS bao gồm hai bước:

1. Chạy `ng build` để tạo bản build của dự án Angular (thư mục `www`).
    
2. Chạy `ionic capacitor copy ios` để sao chép thư mục `www` vào thư mục `ios`.
    

**Cách chạy tự động (Khuyên dùng):** Sử dụng lệnh gộp dưới đây để tự động thực hiện cả hai bước trên, đồng thời mở sẵn dự án trong Xcode:

Bash

```
ionic capacitor run ios
```

### Cấu hình Xcode và Khởi chạy (Xcode Configuration & Launch)

Khi dự án được mở trong Xcode, bạn cần thực hiện cấu hình bắt buộc sau để có thể chạy ứng dụng:

1. Chọn mục **App** ở cây thư mục bên trái.
    
2. Chuyển sang tab **Signing & Capabilities**.
    
3. Tại mục **Team**, chọn tài khoản của bạn. (Nếu chưa có, hãy nhấn _Add an account_ và đăng nhập bằng Apple ID đã đăng ký Apple Developer).
    
4. Chọn **trình giả lập (simulator)** hoặc thiết bị thật (iPhone) đã kết nối ở thanh công cụ phía trên.
    
5. Nhấn nút **Play** để Xcode biên dịch và khởi chạy ứng dụng.
    

### Tính năng Tải lại Trực tiếp (Live Reload)

Tương tự như Android, bạn có thể chạy ứng dụng iOS với tính năng **tải lại trực tiếp (live reload)** để tăng tốc độ phát triển:

Bash

```
ionic capacitor run ios -l
```

- **Nguyên lý hoạt động:** Lệnh này sẽ chạy `ng serve` (thay vì `ng build`) và khởi chạy một máy chủ phát triển cục bộ. Ứng dụng gốc trên máy ảo sẽ tự động cập nhật ngay khi bạn lưu thay đổi trong mã nguồn.
    
- **Ghi chú:** Đôi khi tính năng này hoạt động chưa thực sự mượt mà trên môi trường giả lập (clunky). Trong hầu hết thời gian của khóa học, giảng viên vẫn ưu tiên phát triển và gỡ lỗi (debug) trên trình duyệt web, và chỉ sử dụng giả lập thiết bị gốc (native device) để kiểm tra chéo (cross-check).