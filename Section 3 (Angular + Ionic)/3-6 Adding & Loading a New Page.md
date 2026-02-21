## Thực hành: Khởi tạo Ứng dụng "Recipe Book"

Bài học này chuyển từ lý thuyết sang thực hành, hướng dẫn cách tạo một ứng dụng danh sách công thức nấu ăn cơ bản bằng cách sử dụng các công cụ của Ionic và cấu hình định tuyến trong Angular.

### Khởi tạo Trang (Page) bằng Ionic CLI

Thay vì tạo các _thành phần (components)_ thông thường, ứng dụng di động cần các trang hoàn chỉnh.

- **Thiết lập terminal**: Giữ một tab terminal chạy _máy chủ phát triển (development server)_ (lệnh `ionic serve`) để theo dõi các thay đổi. Mở một tab mới để chạy lệnh.
    
- **Xóa mặc định**: Xóa thư mục/thành phần `home` mặc định của dự án để bắt đầu lại từ đầu.
    
- **Tạo trang mới**: Sử dụng lệnh _giao diện dòng lệnh (CLI)_ của Ionic: `ionic generate` $\rightarrow$ chọn `page` $\rightarrow$ đặt tên là `recipes` (hoặc chạy nhanh lệnh: `ionic generate page recipes`).
    
- **Lợi ích của lệnh này**: Dưới nền, nó sử dụng lệnh `ng generate` của Angular nhưng tự động tạo thêm một _mô-đun (module)_ riêng cho trang này. Điều này giúp thiết lập sẵn cơ chế _tải lười biếng (lazy loading)_ ra khỏi hộp (out of the box) trong tệp định tuyến `app-routing.module.ts`.
    

### Cấu hình Định tuyến (Routing) và Xử lý Lỗi Tải Lười Biếng

Sau khi tạo trang mới và xóa trang `home`, chúng ta cần cập nhật lại tệp `app-routing.module.ts`.

- **Cập nhật đường dẫn**: Xóa định tuyến trỏ đến `home` và đổi hướng (redirect) mặc định sang đường dẫn `recipes`.
    
- **Cú pháp tải lười biếng (Lazy Loading Syntax)**:
    
    - Trước đây, Angular sử dụng cú pháp chuỗi (string syntax) để tải mô-đun (ví dụ: `'./recipes/recipes.module#RecipesPageModule'`). Tuy nhiên, cách này có thể gây lỗi ở các phiên bản mới.
        
    - **Khắc phục**: Thay vào đó, hãy sử dụng cú pháp _nhập động (dynamic import)_ của JavaScript hiện đại. Lệnh `import` sẽ trả về một _lời hứa (promise)_, sau đó ta dùng `.then()` để lấy mô-đun.
        

TypeScript

```
// Ví dụ về cú pháp lazy loading mới sử dụng dynamic import
{
  path: 'recipes',
  loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesPageModule)
}
```

### Cấu trúc HTML Tiêu chuẩn của Ionic Page

Khi mở tệp `recipes.page.html`, Ionic đã tạo sẵn một bộ khung chuẩn cho một giao diện di động:

- `<ion-header>`: Chứa `<ion-toolbar>` và `<ion-title>`. Đây là thanh tiêu đề trên cùng. (Đổi thành "Recipes").
    
- `<ion-content>`: Phần nội dung chính của trang. (Xóa padding mặc định và thêm thẻ `<p>` đơn giản để kiểm tra: `Recipes page works`).
    

### So sánh `ion-router-outlet` và `router-outlet`

Trong tệp `app.component.html` (thành phần gốc), toàn bộ ứng dụng được bọc trong thẻ `<ion-app>`. Bên trong nó là bộ định tuyến.

- Mặc dù đây là một dự án Angular bình thường và bạn hoàn toàn có thể dùng `<router-outlet>` tiêu chuẩn, nhưng giao diện sẽ bị lỗi hiển thị (ví dụ: nội dung bị đẩy xuống cuối màn hình).
    
- **Tại sao phải dùng `<ion-router-outlet>`?** Thẻ này thực chất bọc (wraps) lấy bộ định tuyến của Angular và tự động áp dụng các _kiểu dáng CSS (CSS stylings)_ (chẳng hạn như buộc chiều cao trang là 100%) cũng như cung cấp các _hiệu ứng chuyển trang (page transitions)_ đặc thù của nền tảng di động. Do đó, bắt buộc phải dùng thẻ này cho các trang được điều khiển bởi Ionic.