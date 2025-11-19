## Ionic là gì?

## Khái niệm cơ bản

Ionic là một nền tảng cho phép xây dựng ứng dụng đa nền tảng (cross-platform) từ **một bộ mã nguồn duy nhất**. Bạn sử dụng các công nghệ web quen thuộc (HTML, JavaScript, CSS) để phát triển giao diện người dùng, sau đó Ionic giúp chuyển đổi thành các dạng ứng dụng khác nhau:

- Ứng dụng web (web apps)
    
- Ứng dụng web tiến bộ (Progressive Web Apps - PWA)
    
- Ứng dụng di động iOS và Android
    
- Ứng dụng desktop thông qua Electron (nếu muốn)
    

**Lợi ích chính:** Sử dụng kiến thức hiện có để tạo ra nhiều loại ứng dụng, phân phối trên nhiều kênh khác nhau với những điều chỉnh nhỏ.

## Progressive Web App (PWA)

PWA là ứng dụng web thông thường nhưng có giao diện và trải nghiệm giống ứng dụng di động native:

- **Không phải** ứng dụng native thực sự
    
- **Không** phân phối qua app store
    
- Vẫn là website có thể tìm thấy qua Google
    
- **Đáng tin cậy (reliable):** Hoạt động ngay cả khi offline hoặc một phần hoạt động offline
    
- **Nhanh (fast):** Phản hồi tức thì với thao tác người dùng
    
- **Hấp dẫn (engaging):** Truy cập được các tính năng thiết bị native như vị trí (location) hoặc camera
    

## Cấu trúc nền tảng Ionic

Nền tảng Ionic bao gồm ba thành phần chính:
![[Ionic-Platform.png]]
## Web Components (Thành phần web)

Đây là **lõi của Ionic** - một bộ sưu tập các thành phần web (web components) được xây dựng sẵn.

**Web components là gì:**

- Công nghệ được trình duyệt hiện đại hỗ trợ
    
- Cho phép tạo các phần tử HTML tùy chỉnh với logic phức tạp
    
- Ví dụ: Thành phần tabs cho phép người dùng chuyển đổi giữa các tab khác nhau
    

**Đặc điểm Web Components của Ionic:**

- Được tạo kiểu đẹp mắt (nicely styled)
    
- Không phụ thuộc nền tảng (platform-agnostic)
    
- Tự động điều chỉnh giao diện theo nền tảng đang chạy
    
- Có nhiều chức năng phong phú, không chỉ về giao diện
    
- Sẵn sàng sử dụng, không cần tự xây dựng
    

## Capacitor

Capacitor là công cụ chuyển đổi ứng dụng web thành ứng dụng di động native.

**Cách hoạt động:**

- Lấy ứng dụng web hiện có
    
- "Bọc" (wrap) nó vào một web view bên trong ứng dụng mobile native
    
- Kết quả là ứng dụng native thực sự với ứng dụng web chạy bên trong
    
- Người dùng không phân biệt được với ứng dụng native thông thường
    

**So với Cordova:**

- Capacitor là phiên bản hiện đại hơn của Cordova
    
- Được xây dựng từ đầu bởi đội ngũ Ionic
    
- Siêu nhanh, dễ sử dụng
    
- Làm cho việc xây dựng ứng dụng mobile native trở nên đơn giản
    

**Vai trò:** Cho phép ứng dụng web chạy trên thiết bị như ứng dụng mobile native, không chỉ là website mở trong trình duyệt.

## Ionic CLI (Command Line Interface)

Giao diện dòng lệnh giúp quản lý dự án Ionic.

**Chức năng:**

- Tạo dự án Ionic mới
    
- Quản lý dự án
    
- Sử dụng Capacitor để chuyển đổi web app thành mobile app
    
- Hỗ trợ toàn bộ quy trình xây dựng (build workflow)
    
- Có thể làm việc với CLI khác (như Angular CLI trong khóa học này)
    
- Giúp build và đóng gói ứng dụng
    

## Dịch vụ bổ sung

Ionic còn cung cấp các dịch vụ premium và cloud (một số miễn phí, một số trả phí):

- Xây dựng ứng dụng trên cloud
    
- Ví dụ: Build ứng dụng iOS trên Windows
    
- Các dịch vụ hỗ trợ phát triển và xem trước ứng dụng
    
- Thông tin chi tiết trên trang web chính thức của Ionic
    

## Tóm tắt về Ionic

Ionic là một nền tảng toàn diện cung cấp:

1. **Giao diện:** Bộ web components đẹp, chức năng phong phú
    
2. **Chuyển đổi:** Công cụ Capacitor để tạo ứng dụng mobile native
    
3. **Quản lý:** Ionic CLI để phát triển, build và đóng gói
    
4. **Linh hoạt:** Một codebase → nhiều loại ứng dụng (web, mobile, desktop)
