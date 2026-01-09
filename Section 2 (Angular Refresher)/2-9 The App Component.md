## Phân tích Chi tiết AppComponent

`AppComponent` là thành phần quan trọng nhất trong cấu trúc khởi động, đóng vai trò là thành phần gốc (root component) của ứng dụng.

### 1. Cấu trúc và Định nghĩa

- **Vị trí tệp**: `src/app/app.component.ts`.
    
- **Bản chất**: Là một lớp (Class) được xuất khẩu (`export`) để `AppModule` có thể sử dụng.
    
- **Decorator `@Component`**:
    
    - Được nhập từ `@angular/core`.
        
    - **Chức năng**: Cung cấp siêu dữ liệu (metadata) cho Angular, giúp framework hiểu cách xử lý, biên dịch và hiển thị lớp này trên trình duyệt.
        
    - Tương tự như `@NgModule`, decorator này nhận vào một đối tượng cấu hình JavaScript.
        

### 2. Các thuộc tính cấu hình chính

Đối tượng cấu hình trong `@Component` bao gồm 3 phần cốt lõi:

TypeScript

```
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { ... }
```

#### A. Selector (`selector`)

- **Giá trị**: `'app-root'`.
    
- **Ý nghĩa**: Định nghĩa một thẻ HTML tùy chỉnh (custom HTML tag).
    
- **Cơ chế hoạt động**:
    
    - Angular quét tệp `index.html` để tìm thẻ `<app-root>`.
        
    - Khi tìm thấy, nó sẽ gắn (mount) component này vào vị trí đó.
        
    - **Lưu ý**: Angular chỉ quét `index.html` để tìm selector của component được khai báo trong mảng `bootstrap` của `AppModule` (thường chỉ có một root component).
        

#### B. Template (`templateUrl`)

- **Giá trị**: Đường dẫn đến tệp HTML (`./app.component.html`).
    
- **Chức năng**: Xác định cấu trúc HTML (giao diện) của component.
    
- **Cơ chế hiển thị (Rendering)**:
    
    - **Mã nguồn (View Page Source)**: Nếu xem nguồn trang, bạn chỉ thấy thẻ `<app-root>` rỗng. Trình duyệt không nhận được HTML đầy đủ từ máy chủ.
        
    - **DOM thực tế (Inspect DOM)**: Angular sử dụng JavaScript để phân tích template và sinh ra các phần tử HTML động bên trong `<app-root>`.
        
    - **Kết luận**: Angular thực hiện việc hiển thị phía Client (Client-side rendering).
        

#### C. Styles (`styleUrls`)

- **Giá trị**: Mảng các đường dẫn đến tệp CSS (`['./app.component.css']`).
    
- **Tính năng Phạm vi (Scoped Styling)**:
    
    - CSS được viết trong tệp này **chỉ áp dụng** cho các phần tử thuộc `AppComponent`.
        
    - **Ví dụ**: Nếu bạn định kiểu màu đỏ cho thẻ `h1` tại đây, chỉ thẻ `h1` trong component này bị ảnh hưởng. Các thẻ `h1` ở component khác sẽ không bị tác động.
        
    - Đây là tính năng đóng gói (encapsulation) giúp tránh xung đột giao diện.
        
