## So sánh Ionic 3 và Ionic 4

_(Lưu ý: Nội dung này đặc biệt hữu ích cho những người đã có kinh nghiệm với Ionic 2 hoặc 3. Nếu mới bắt đầu, có thể xem lướt qua để hiểu bối cảnh)._

### Hướng dẫn chuyển đổi (Migration)

- Nếu cần nâng cấp dự án từ Ionic 3 lên Ionic 4, hãy tham khảo **Hướng dẫn di chuyển (Migration Guide)** chính thức.
    
- **Vị trí**: Trang `ionicframework.com` $\rightarrow$ Docs $\rightarrow$ Guide $\rightarrow$ Migration.
    
- Tài liệu này cung cấp chi tiết về các thay đổi kỹ thuật và các bước cần thiết để điều chỉnh dự án.
    

### Phương thức tích hợp và Công cụ (CLI)

- **Ionic 3**:
    
    - Phụ thuộc hoàn toàn vào **Giao diện dòng lệnh (Ionic CLI)** để tạo dự án.
        
    - Quy trình xây dựng phức tạp, gắn liền với cấu trúc của framework.
        
- **Ionic 4**:
    
    - Vẫn hỗ trợ **Ionic CLI**.
        
    - **Điểm mới**: Có thể nhúng Ionic trực tiếp thông qua **Mạng phân phối nội dung (CDN)** hoặc **Trình quản lý gói (NPM)**.
        
    - Không bắt buộc phải dùng CLI hay quy trình build phức tạp vì Ionic 4 hoạt động dựa trên Web Components, không phụ thuộc framework.
        

### Bản chất dự án (Project Structure)

- **Ionic 3**:
    
    - Là dự án tập trung cao độ vào thiết bị di động (Mobile-driven).
        
    - Cấu trúc dự án mang nặng tính đặc thù của Ionic.
        
    - Mặc dù có thể tạo Progressive Web Apps (PWA), nhưng trọng tâm vẫn là ứng dụng di động.
        
- **Ionic 4**:
    
    - Là một **dự án web tiêu chuẩn (Standard Web Project)**.
        
    - Sử dụng các công cụ chuẩn của framework nền (ví dụ: dùng Angular CLI cho Angular, hoặc tương tự cho React/Vue).
        
    - Được xem là "Web App cộng thêm các tính năng mở rộng" (Web App plus).
        

### Công cụ xây dựng ứng dụng di động (Build Tools)

- **Ionic 3**: Sử dụng **Cordova** làm công cụ chính để đóng gói ứng dụng web thành ứng dụng di động.
    
- **Ionic 4**:
    
    - Hỗ trợ cả **Cordova** và **Capacitor**.
        
    - **Capacitor**: Là công cụ mới do đội ngũ Ionic phát triển để thay thế và cải tiến quy trình đóng gói ứng dụng.
        
    - _Lưu ý_: Khóa học này sẽ sử dụng Capacitor.
        

### Tổng kết xu hướng thay đổi

Sự chuyển dịch từ Ionic 3 sang Ionic 4 mang lại 3 giá trị cốt lõi:

1. **Linh hoạt hơn (More flexibility)**: Tùy chọn framework, công cụ build.
    
2. **Ổn định hơn (More stability)**: Dựa trên chuẩn Web Components.
    
3. **Tốc độ cao hơn (Speed)**: Hiệu năng tốt hơn nhờ kiến trúc mới.