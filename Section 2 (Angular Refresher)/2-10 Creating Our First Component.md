## Tạo và Đăng ký Component Tùy chỉnh

### 1. Tạo tệp tin Component

Theo quy chuẩn, chúng ta nên tổ chức mã nguồn bằng cách tạo thư mục riêng cho từng component.

- **Vị trí**: Tạo thư mục con `persons` bên trong `src/app`.
    
- **Tên tệp**: Tuân theo quy tắc `[tên-component].component.ts` (ví dụ: `persons.component.ts`).
    

### 2. Định nghĩa Logic Component (TypeScript)

Trong tệp `persons.component.ts`, thực hiện các bước sau:

1. **Khai báo lớp (Class)**: Xuất khẩu (`export`) class với tên theo kiểu PascalCase (ví dụ: `PersonsComponent`).
    
2. **Import Decorator**: Nhập `@Component` từ `@angular/core`.
    
    - _Lưu ý_: Mỗi tệp trong Angular hoạt động độc lập. Ngay cả khi `@Component` đã được dùng ở nơi khác, bạn vẫn phải import lại trong tệp mới này.
        
3. **Cấu hình Metadata**:
    
    - **`selector`**: Đặt tên thẻ HTML tùy chỉnh. Quy ước là `app-[tên]` (ví dụ: `app-persons`) để tránh xung đột với các thẻ HTML chuẩn.
        
    - **`templateUrl`**: Trỏ đến tệp HTML hiển thị giao diện (đường dẫn tương đối).
        

TypeScript

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})
export class PersonsComponent {
  // Logic của component sẽ nằm ở đây
}
```

### 3. Tạo Template (HTML)

Tạo tệp `persons.component.html` cùng cấp với tệp `.ts`. Đây là nơi chứa cấu trúc hiển thị của component.

HTML

```
<p>Some persons</p>
```

### 4. Đăng ký Component trong Module

Angular sẽ không nhận diện được component mới nếu nó không được đăng ký.

- **Tệp chỉnh sửa**: `src/app/app.module.ts`.
    
- **Thao tác**:
    
    1. **Import**: Nhập `PersonsComponent` từ đường dẫn tệp tương ứng.
        
    2. **Khai báo**: Thêm `PersonsComponent` vào mảng `declarations`.
        

> **Lưu ý quan trọng**: Không thêm component con vào mảng `bootstrap`. Mảng `bootstrap` chỉ dành cho component gốc (root component) khởi chạy ứng dụng.

TypeScript

```
// app.module.ts
import { PersonsComponent } from './persons/persons.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent // Đăng ký tại đây
  ],
  // ... các cấu hình khác
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### 5. Sử dụng Component

Sau khi đăng ký, bạn có thể sử dụng component mới bên trong các component khác (những component cũng thuộc cùng module).

- **Vị trí**: Mở tệp `src/app/app.component.html` (Template của component gốc).
    
- **Cách dùng**: Sử dụng `selector` đã định nghĩa (`app-persons`) như một thẻ HTML.
    

HTML

```
<app-persons></app-persons>
```

**Kết quả**: Khi chạy ứng dụng, nội dung của `PersonsComponent` ("Some persons") sẽ hiển thị trên trình duyệt.