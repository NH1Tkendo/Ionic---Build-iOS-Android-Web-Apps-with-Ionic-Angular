## Tạo Trang Chi Tiết và Cấu Hình Điều Hướng (Routing)

### Cài đặt Trang Chi Tiết (Detail Page)

- Để hiển thị thông tin chi tiết của một mục (ví dụ: hình ảnh lớn hơn, danh sách thành phần), chúng ta cần tạo một trang mới.
    
- Sử dụng giao diện dòng lệnh (CLI) để tạo trang trực tiếp vào đúng thư mục mong muốn.
    
- **Lệnh thực thi**:
    
    Bash
    
    ```
    ionic generate page recipes/recipe-detail
    ```
    
- **Kết quả**: Hệ thống sẽ tự động tạo một thư mục thành phần (component folder) mới tên là `recipe-detail` nằm trong thư mục `recipes`. Thư mục này đi kèm với mô-đun riêng để hỗ trợ tải lười (lazy loading) và mô-đun điều hướng (routing module).
    

### Cú pháp Tải lười (Lazy Loading Syntax)

- Khi tạo trang, một đường dẫn (path) mới sẽ được tự động thêm vào hệ thống để tải trang chi tiết theo dạng tải lười (lazily).
    
- **Lưu ý về cú pháp**: Cú pháp của thuộc tính `loadChildren` có thể có sự khác biệt tùy theo phiên bản Angular bạn đang sử dụng. Dù sử dụng cú pháp mới hay cũ, bản chất và chức năng triển khai tải lười (lazy loading) vẫn giữ nguyên và hoạt động ổn định.
    

### Tùy chỉnh Cấu trúc Điều hướng (Routing Setup)

Thay vì sử dụng các đường dẫn ngang hàng mặc định, hệ thống cần được tái cấu trúc thành dạng cha-con để xử lý URL hợp lý hơn.

- **Mục tiêu**:
    
    - `path: 'recipes'` $\rightarrow$ Tải trang danh sách.
        
    - `path: 'recipes/:recipeId'` $\rightarrow$ Tải trang chi tiết dựa trên ID.
        
- **Cách thực hiện**:
    
    1. Thêm thuộc tính `children` (một mảng chứa các định nghĩa đường dẫn con) vào bên trong cấu hình của đường dẫn `recipes`.
        
    2. **Định nghĩa mảng `children`**:
        
        - **Đường dẫn rỗng**: `path: ''` $\rightarrow$ Chỉ định tải mô-đun `RecipesPageModule` (trang danh sách mặc định).
            
        - **Đường dẫn động**: `path: ':recipeId'` $\rightarrow$ Tải trang chi tiết.
            
    3. Xóa đường dẫn `recipe-detail` độc lập được tự động tạo trước đó và di chuyển lệnh `loadChildren` của nó vào đường dẫn động bên trong mảng `children`.
        
- **Đặc điểm của Phân đoạn động (Dynamic Segment)**: Cú pháp `:recipeId` khai báo một phân đoạn động trong Angular. Điều này có nghĩa là URL có thể nhận bất kỳ giá trị nào ở vị trí này (ví dụ: `/recipes/abc` hoặc `/recipes/123`), và thành phần (component) được tải lên có thể đọc được giá trị đó để truy xuất dữ liệu tương ứng.
    

### Giới thiệu về Quản lý Trạng thái (State Management)

- **Vấn đề hiện tại**: Dữ liệu danh sách công thức đang được lưu trữ cục bộ bên trong thành phần trang (page component) `RecipesPage`. Trang chi tiết mới được tạo sẽ không có cách nào để truy cập vào khối dữ liệu này.
    
- **Hạn chế**: Việc cố gắng import trực tiếp thành phần (component) này vào một trang khác là sai nguyên tắc trong Angular và có thể dẫn đến các tác dụng phụ (side effects) không mong muốn.
    
- **Giải pháp**: Cần triển khai một giải pháp quản lý trạng thái toàn cục (global state management solution). Dữ liệu sẽ được tách ra và quản lý bởi một Dịch vụ (Angular service) để các trang khác nhau có thể cùng chia sẻ và truy cập một cách an toàn.