## Hệ sinh thái Ionic và cách hoạt động

## Sơ đồ tổng quan

Ionic cho phép bạn xây dựng một ứng dụng web (web app) với hoặc không có framework:

- **Với framework:** Angular, React, Vue
    
- **Không framework:** Vanilla JavaScript
    

Từ ứng dụng web này, bạn có thể tạo ra:

- Progressive Web App (PWA) với các tính năng nâng cao
    
- Ứng dụng di động native (native mobile app)
    

## Các thành phần trong hệ sinh thái
![[Ionic-Ecosystem.png]]
## Web Components của Ionic

- Trông giống các thẻ HTML thông thường nhưng thực chất không phải
    
- Cung cấp giao diện đẹp và nhiều chức năng sẵn có
    
- Giúp tiết kiệm công sức xây dựng từ đầu
    
- Được xây dựng bằng công cụ Stencil (không bắt buộc phải học Stencil để sử dụng Ionic)
    

## Công cụ phát triển

- **Ionic CLI:** Quản lý dự án và quy trình phát triển
    
- **Capacitor hoặc Cordova:** Chuyển đổi web app thành mobile app
    

## Quy trình xây dựng ứng dụng

## Bước 1: Tạo dự án Ionic

Tạo một ứng dụng web với:

- Mã nguồn tự viết (code riêng)
    
- Front-end framework (tùy chọn) - trong khóa học này là Angular
    
- Framework Ionic - bộ web components
    

## Bước 2: Thêm Ionic Framework

Khi thêm Ionic vào dự án:

- Ứng dụng tự động có giao diện đẹp
    
- Có nhiều khả năng (capabilities) phong phú
    
- Tiết kiệm rất nhiều công sức so với tự xây dựng
    

## Bước 3: Xây dựng các loại ứng dụng khác nhau

Từ một bộ mã nguồn (single codebase), có thể tạo ra nhiều dạng ứng dụng nhờ Capacitor hoặc Cordova.

## Vai trò của Stencil

**Stencil** là công cụ được Ionic team sử dụng để xây dựng các web components của Ionic.

**Lưu ý quan trọng:**

- **Không cần** học Stencil để làm việc với Ionic
    
- Khóa học này **không dạy** Stencil
    
- Chỉ nên học Stencil nếu muốn:
    
    - Hiểu cách web components của Ionic được xây dựng
        
    - Tự tạo web components riêng để dùng cùng framework và Ionic
        

## Capacitor - Cầu nối quan trọng

Capacitor (hoặc Cordova) hoạt động như một **cầu nối (bridge)** giữa:

- Mã web JavaScript của bạn
    
- Nền tảng native mà ứng dụng đang chạy
    

**Chức năng:**

- Từ mã JavaScript, có thể kích hoạt các hàm (functions)
    
- Các hàm này thực thi mã native thực sự trên thiết bị
    
- Ví dụ: Mở camera, lấy vị trí người dùng, hiển thị cảnh báo
    
- Thực thi mã native thay bạn mà không cần tự viết
    

**Trong khóa học:**

- Sử dụng chủ yếu Capacitor (công cụ do Ionic team phát triển)
    
- Có thể kết hợp cả Capacitor và Cordova
    
- Ở hoàn toàn trong hệ sinh thái Ionic
    

## Nội dung khóa học này

Những gì sẽ học:

- Tất cả về Ionic
    
- Angular như front-end framework
    
- Capacitor để chuyển đổi ứng dụng
    
- Xây dựng Progressive Web App
    
- Xây dựng Mobile Apps
    

Những gì không học:

- Stencil (trừ khi muốn tìm hiểu thêm ngoài khóa học)