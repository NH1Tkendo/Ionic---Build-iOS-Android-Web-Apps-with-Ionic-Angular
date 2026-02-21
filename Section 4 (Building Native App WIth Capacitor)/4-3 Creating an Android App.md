## Phát triển Ứng dụng Android với Capacitor

### Capacitor so với Cordova

- Cả **Capacitor** và **Cordova** đều là các công cụ giúp đóng gói một **ứng dụng web (web app)** thành một **ứng dụng gốc (native app)**.
    
- Mặc dù Ionic vẫn hỗ trợ Cordova (công cụ lâu đời hơn), khóa học này sẽ sử dụng **Capacitor**. Đây là công cụ do chính nhóm phát triển Ionic xây dựng, sở hữu **giao diện lập trình ứng dụng (API)** tối ưu hơn và đang được phát triển mạnh mẽ.

### Cài đặt Môi trường và Công cụ (Environment & Tools Setup)

Để biên dịch ứng dụng cho Android, bạn cần tải và cài đặt **Android Studio** từ trang chủ chính thức. Mặc dù chúng ta không viết code trực tiếp trên phần mềm này, Capacitor sẽ sử dụng nó ngầm như một **công cụ biên dịch (build tool)**.

Trong quá trình cài đặt (hoặc thông qua **Trình quản lý SDK - SDK Manager** bên trong Android Studio), hãy đảm bảo bạn đã cài đặt các thành phần sau:

- **Nền tảng SDK Android (Android SDK platform)**: Yêu cầu API 21 trở lên.
    
- **Bộ công cụ biên dịch SDK Android (Android SDK build tools)**.
    
- **Trình cài đặt HAXM (HAXM installer)**: Khuyên dùng để tăng tốc độ cho trình giả lập.
    
- **Trình giả lập Android (Android emulator)**.
    

### Tích hợp Android vào Dự án (Adding Android Platform)

Trước khi chuyển đổi thành ứng dụng di động, bạn bắt buộc phải biên dịch dự án Angular để tạo ra thư mục `www` (chứa ứng dụng web đã hoàn thiện):

Bash

```
ng build
```

Sau khi có thư mục `www`, hãy chạy lệnh sau trong terminal để thêm nền tảng Android:

Bash

```
ionic capacitor add android
```

_Ghi chú: Lệnh này sẽ cài đặt gói `@capacitor/core` và tạo ra một thư mục `android` mới chứa toàn bộ mã nguồn của ứng dụng gốc._

### Cấu hình Định danh Ứng dụng (App Identifier)

Mở tệp `capacitor.config.json` để thay đổi **ID ứng dụng (app ID)**.

- ID này giúp phân biệt ứng dụng của bạn với các ứng dụng khác trên App Store/CH Play.
    
- **Quy ước:** Thường sử dụng định dạng URL đảo ngược (reverse-URL).
    
- _Ví dụ:_ `"appId": "com.udemy-course.ionic-angular"`
    

### Biên dịch và Chạy Ứng dụng (Build and Run)

Sau mỗi lần chạy `ng build` để cập nhật ứng dụng web, bạn cần đồng bộ mã nguồn vào thư mục ứng dụng gốc bằng lệnh:

Bash

```
ionic capacitor copy android
```

**Cách chạy tự động:** Thay vì gõ từng lệnh, bạn có thể sử dụng lệnh gộp dưới đây. Lệnh này sẽ tự động chạy `ng build`, sao chép thư mục `www` vào thư mục gốc, và mở thư mục Android bằng Android Studio:

Bash

```
ionic capacitor run android
```

### Thiết lập Trình giả lập (Emulator Setup)

1. Trong Android Studio, mở **Trình quản lý Thiết bị Ảo (AVD Manager)** (Tools > AVD Manager).
    
2. Chọn **Tạo thiết bị ảo (Create virtual device)**, chọn một thiết bị mẫu (Ví dụ: Pixel 2) và phiên bản Android ổn định mới nhất.
    
3. Nhấn biểu tượng **Play (màu xanh lá)** trên thanh công cụ của Android Studio, chọn trình giả lập vừa tạo (hoặc thiết bị thật đang kết nối) để phần mềm tiến hành cài đặt và khởi chạy ứng dụng.
    

_Lưu ý: Đây là một ứng dụng di động gốc (custom native mobile app) thực sự, không phải là trình duyệt web đang hiển thị trang web của bạn._

### Tính năng Tải lại Trực tiếp (Live Reload)

Để tăng tốc quá trình phát triển, bạn có thể thêm cờ `-l` (live reload) vào lệnh chạy:

Bash

```
ionic capacitor run android -l
```

**Lợi ích:** Lệnh này sẽ chạy `ng serve` ngầm. Thay vì phải biên dịch lại toàn bộ ứng dụng (`ng build`) mỗi khi bạn sửa code, ứng dụng gốc trên trình giả lập/thiết bị thật sẽ tự động cập nhật ngay lập tức các thay đổi, tương tự như trải nghiệm phát triển trên trình duyệt.