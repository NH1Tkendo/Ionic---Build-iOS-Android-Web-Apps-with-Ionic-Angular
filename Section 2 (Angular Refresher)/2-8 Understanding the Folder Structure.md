## Cấu trúc Tệp tin và Quy trình Khởi động

Sau khi khởi tạo dự án, chúng ta tập trung vào thư mục `src` (nơi chứa mã nguồn chính). Các tệp cấu hình bên ngoài bao gồm:

- **`package.json`**: Quản lý các gói phụ thuộc (dependencies) và thư viện của Angular.
    
- **`angular.json`**: Cấu hình cho Angular CLI, hướng dẫn công cụ cách biên dịch (build) và tối ưu hóa dự án.
    

### 1. Điểm nhập (Entry Point): `main.ts`

Đây là tệp tin đầu tiên được Angular thực thi khi ứng dụng khởi chạy trong trình duyệt.

- **Chức năng**: Khởi động (bootstrap) ứng dụng bằng cách tải mô-đun chính.
    
- **Cơ chế Import**:
    
    - Sử dụng cú pháp `import` của TypeScript để liên kết các tệp.
        
    - Trình duyệt không hiểu trực tiếp cú pháp này, nên quy trình Build của CLI sẽ gộp (merge) và đóng gói tất cả các tệp liên quan thành một tệp JavaScript duy nhất.
        
- **Mã lệnh cốt lõi**:
    
    TypeScript
    
    ```
    // Hàm này khởi động AppModule - mô-đun gốc của ứng dụng
    platformBrowserDynamic().bootstrapModule(AppModule)
    ```
    

### 2. Mô-đun Gốc (Root Module): `app.module.ts`

Mọi ứng dụng Angular đều phải có ít nhất một mô-đun, thường được gọi là `AppModule`.

#### Cấu trúc kỹ thuật

- **Lớp (Class)**: `AppModule` bản chất là một class thông thường.
    
- **Export**: Sử dụng từ khóa `export` để class này có thể được import vào `main.ts`.
    
- **Decorator `@NgModule`**:
    
    - Là một hàm đặc biệt bắt đầu bằng `@`, dùng để gắn **siêu dữ liệu** (metadata) vào class.
        
    - Giúp Angular hiểu rằng class này là một Mô-đun và định nghĩa các tính năng đi kèm.
        

#### Các thuộc tính cấu hình trong `@NgModule`

Decorator này nhận vào một đối tượng cấu hình với các mảng quan trọng:

- **`declarations`**:
    
    - Khai báo tất cả các **thành phần** (Components) thuộc về mô-đun này.
        
    - Ví dụ: `AppComponent` phải được khai báo ở đây để sử dụng.
        
- **`imports`**:
    
    - Nhập khẩu các mô-đun khác cần thiết cho ứng dụng.
        
    - Ví dụ: `BrowserModule` (đến từ `@angular/platform-browser`) là bắt buộc để ứng dụng hoạt động được trên trình duyệt.
        
- **`bootstrap`**:
    
    - Xác định **thành phần gốc** (Root Component) sẽ được hiển thị đầu tiên khi ứng dụng khởi chạy.
        
    - Thường chỉ chứa một component duy nhất (ví dụ: `AppComponent`).
        
- **`providers`**: (Tạm thời bỏ qua, dùng để cấu hình dịch vụ/services).
    

### 3. Mối quan hệ Component - Module

- **Component**: Đơn vị xây dựng giao diện (như đã đề cập ở bài trước).
    
- **Quy trình**:
    
    1. `main.ts` gọi `AppModule`.
        
    2. `AppModule` đọc mảng `bootstrap` để tìm `AppComponent`.
        
    3. Angular hiển thị `AppComponent` lên trình duyệt.
        
    4. Tất cả các component con khác sẽ được lồng bên trong `AppComponent`.
        
