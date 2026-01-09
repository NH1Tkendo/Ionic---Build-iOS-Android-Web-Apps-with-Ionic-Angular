## Cài đặt môi trường và Tạo ứng dụng Ionic đầu tiên

### Yêu cầu tiên quyết

Để làm việc với Ionic, không cần tài khoản Ionic nhưng cần cài đặt **Node.js**:

- **Node.js**: Môi trường chạy JavaScript (runtime). Mặc dù thường dùng cho phía máy chủ (server-side), khóa học này cần Node.js vì 2 lý do:
    
    1. **NPM (Node Package Manager)**: Dùng để quản lý các thư viện phụ thuộc (dependencies) và là tiêu chuẩn cho các dự án web frontend.
        
    2. **Ionic CLI**: Công cụ dòng lệnh của Ionic chạy trên nền Node.js để thực hiện quy trình build (xây dựng) ứng dụng.
        
- **Cài đặt**: Tải phiên bản mới nhất (hoặc bản LTS) từ trang chủ Node.js. Trình cài đặt sẽ tự động cài cả Node.js và NPM.
    

### Cài đặt Ionic CLI

Cài đặt công cụ dòng lệnh Ionic (Ionic CLI) ở phạm vi toàn cục (global) để có thể sử dụng ở bất kỳ đâu.

**Lệnh cài đặt (trong Terminal/Command Prompt):**

Bash

```
npm install -g @ionic/cli
```

_Lưu ý về quyền hạn:_

- **Windows**: Chạy Command Prompt dưới quyền Admin (Run as Administrator).
    
- **Mac OS/Linux**: Có thể cần thêm `sudo` vào trước câu lệnh và nhập mật khẩu để cấp quyền.
    

### Tạo dự án mới

Di chuyển đến thư mục muốn lưu trữ dự án và chạy lệnh:

Bash

```
ionic start
```

**Các bước thiết lập:**

1. **Đặt tên dự án**: Ví dụ `ionic-angular`.
    
2. **Chọn Template (Mẫu)**:
    
    - `blank`: Dự án trống (chỉ có trang bắt đầu). _Được chọn trong bài học này để bắt đầu đơn giản._
        
    - `sidemenu`: Có menu trượt từ bên trái.
        
    - `tabs`: Có các tab điều hướng ở dưới cùng.
        
3. **Ionic Appflow**: Chọn `No` khi được hỏi về việc kết nối dịch vụ đám mây này.
    

### Chạy ứng dụng (Development Server)

Di chuyển vào thư mục dự án vừa tạo và khởi chạy server phát triển:

Bash

```
cd ten-thu-muc-du-an
ionic serve
```

- **Cơ chế**: `ionic serve` sử dụng **Angular CLI** ở phía sau để khởi tạo server và build ứng dụng.
    
- **Tính năng**: Tự động theo dõi thay đổi trong code và tải lại trang (Live Reload).
    

### Công cụ lập trình (IDE) & Tiện ích mở rộng

Sử dụng **Visual Studio Code (VS Code)** để viết code.

**Các Extension (Tiện ích) khuyến nghị:**

- **Angular Essentials**: Hỗ trợ phát triển Angular chung.
    
- **Material Icon Theme** (Tùy chọn): Thay đổi biểu tượng file cho dễ nhìn hơn.
    

### Cấu trúc dự án và Chỉnh sửa Code

Dự án Ionic có cấu trúc tương tự dự án Angular thông thường (có thư mục `src`, `app module`, `app component`). Điểm khác biệt nằm ở các thẻ HTML.

#### 1. Web Components của Ionic

Ionic cung cấp các thành phần giao diện (UI components) dưới dạng Web Components thay vì thẻ HTML chuẩn.

Ví dụ trong home.page.html:

- `<ion-header>`, `<ion-toolbar>`, `<ion-title>`: Các thành phần tiêu đề.
    
- `<ion-content>`: Phần nội dung chính.
    
- `<ion-button>`: Nút bấm chuẩn của Ionic.
    

#### 2. Ví dụ: Thêm tính năng tương tác

Thực hiện thay đổi văn bản khi nhấn nút (kết hợp code Angular và UI Ionic).

Bước 1: Chỉnh sửa home.page.ts (Logic)

Khai báo biến và hàm xử lý sự kiện:

TypeScript

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  text = 'Default text'; // Văn bản mặc định

  constructor() {}

  onChangeText() {
    this.text = 'Changed!'; // Thay đổi văn bản khi gọi hàm
  }
}
```

Bước 2: Chỉnh sửa home.page.html (Giao diện)

Sử dụng Nội suy chuỗi (String Interpolation) và Liên kết sự kiện (Event Binding):

HTML

```
<ion-content>
  <p>{{ text }}</p> 
  
  <ion-button (click)="onChangeText()">Change Text</ion-button>
</ion-content>
```

### Kiểm thử và Giao diện Đa nền tảng

- **Kiểm tra trên trình duyệt**: Dùng Chrome Developer Tools -> Toggle Device Toolbar để giả lập giao diện mobile.
    
- **Tính thích ứng (Adaptability)**: Ionic tự động điều chỉnh giao diện (CSS) để phù hợp với nền tảng đang chạy.
    
    - **iOS**: Giao diện phẳng, chuẩn Apple.
        
    - **Android (Material Design)**: Có hiệu ứng gợn sóng (ripple effect) khi nhấn nút.
        
- **Kết luận**: Viết code một lần, ứng dụng tự động hiển thị chuẩn giao diện (Native look and feel) trên cả iOS và Android.