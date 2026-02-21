## Phân tích Cấu trúc Dự án Ionic kết hợp Angular

Bài học này giải thích cách một dự án Ionic được tích hợp bên trong bộ khung của Angular, thông qua việc phân tích các tệp tin và thư mục cốt lõi.

### Khởi tạo Ứng dụng Angular Cơ bản

Nhìn chung, cấu trúc dự án tuân theo tiêu chuẩn của một ứng dụng Angular thông thường:

- **Tệp `main.ts`**: Nơi _khởi động (bootstrap)_ ứng dụng Angular. Không chứa bất kỳ mã nguồn nào liên quan trực tiếp đến Ionic.
    
- **Tệp `index.html`**: Một tệp HTML tiêu chuẩn, chứa bộ chọn của _thành phần gốc (root component)_ (cụ thể là `app-root`).
    
- **Tệp `app.module.ts`**: Chứa định nghĩa về _mô-đun gốc (root module)_. Nó chịu trách nhiệm khởi động thành phần gốc (`app component`), từ đó kết nối với bộ chọn `app-root` trong tệp `index.html`. Điều này giúp gắn thành phần gốc của Angular vào _Mô hình Đối tượng Tài liệu (DOM)_ thực tế.
    
- **Ghi chú**: Cần nắm vững kiến thức cơ bản về cách hoạt động và khởi chạy của Angular để hiểu rõ quy trình này.
    

### Quản lý Giao diện với Thư mục Theme

Thư mục `theme` là điểm khác biệt đầu tiên so với Angular thuần, được Ionic sử dụng để quản lý giao diện toàn cục:

- **Ngôn ngữ**: Sử dụng mặc định SASS/SCSS.
    
- **Thuộc tính tùy chỉnh CSS (CSS custom properties / CSS variables)**: Ionic sử dụng mạnh mẽ tính năng tiêu chuẩn này của CSS.
    
- **Lợi ích**: Cho phép lưu trữ các giá trị như màu sắc, đơn vị, kích thước, khoảng cách lề... vào các biến và tái sử dụng ở mọi nơi. Khi gán biến này cho một thành phần (ví dụ: màu nền của thẻ `div`), việc thay đổi giao diện tổng thể của ứng dụng trở nên rất dễ dàng.
    

### Sự Tích hợp giữa Ionic và Angular

Các cấu hình nội bộ của dự án đã được tự động điều chỉnh để Angular có thể nhận diện và làm việc với Ionic:

- **Tệp `angular.json`**: Chứa cấu hình _biên dịch (build)_ mặc định. Ionic đã tự động thêm cấu hình để nhập các _tài nguyên (assets)_, tiêu biểu là các biểu tượng của Ionic (`ionicons`).
    
- **Tệp `ionic.config.json`**: Dùng để thiết lập các thông tin cơ bản, ví dụ như _định danh ứng dụng (app identifier)_ của Ionic.
    
- **Tệp `package.json`**: Bên cạnh các lệnh nhập (import) mặc định của Angular, dự án khai báo thêm các gói của Ionic, quan trọng nhất là gói `@ionic/angular`.
    

### Vai trò của IonicModule trong AppModule

Điểm giao thoa cốt lõi giữa hai nền tảng nằm ở tệp `app.module.ts` (mô-đun gốc của dự án):

- Tệp này vẫn khai báo mã Angular tiêu chuẩn (như `NgModule`, `BrowserModule`, khởi động `AppComponent`).
    
- **Sự bổ sung**: Nhập `IonicModule` và các _nhà cung cấp (providers)_ từ gói `@ionic/angular`.
    
- **Chức năng của `IonicModule`**: Mô-đun này có nhiệm vụ "mở khóa" và đưa các _thành phần web (web components)_ của Ionic vào ứng dụng Angular.
    
- **Tại sao cần gói `@ionic/angular`?** Thay vì kéo các thành phần web của Ionic thông qua _liên kết Mạng phân phối nội dung (CDN link)_ theo cách thủ công, `IonicModule` không chỉ tự động nhập các thành phần này mà còn cung cấp thêm các công cụ tối ưu hóa để chúng hoạt động mượt mà và liền mạch với hệ sinh thái của Angular.