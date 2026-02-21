## Điều hướng và Nút quay lại trong Ionic với Angular (Navigation and Back Button)

### 1. Sử dụng Liên kết Định tuyến (Router Link)

- Trong các phiên bản Ionic mới, framework này tích hợp hoàn toàn với định tuyến mặc định của Angular `(Angular routing)` thay vì sử dụng giải pháp điều hướng nội bộ như ở Ionic 2 và 3.
    
- Người dùng chỉ cần phụ thuộc vào Angular cho các logic điều hướng phức tạp `(heavy lifting)`. Ionic sẽ lùi về sau và chỉ chịu trách nhiệm cung cấp hiệu ứng chuyển trang `(page transition / animation)` mượt mà.
    
- **Cách thực hiện:** Để làm cho một mục danh sách `(recipe item)` có thể nhấp vào và chuyển trang, bạn không cần dùng hàm lắng nghe sự kiện `(click listener)` để điều hướng bằng mã `(programmatically)`. Thay vào đó, hãy gắn trực tiếp `routerLink` vào component `ion-item`.
    

#### Mã nguồn ví dụ:

HTML

```
<ion-item [routerLink]="['/recipes', recipe.id]">
  </ion-item>
```

### 2. Cấu hình Nút quay lại (Back Button)

Mặc định khi chuyển sang trang chi tiết, nút quay lại sẽ không tự động xuất hiện mà cần phải được cấu hình thủ công.

- Để thêm nút quay lại, hãy sử dụng thẻ `ion-back-button` đặt bên trong thanh công cụ `(toolbar)`.
    
- Thẻ này phải được bọc bên trong component `ion-buttons` (thường dùng để chứa các nút chức năng trong thanh công cụ).
    
- Sử dụng thuộc tính `slot="start"` để định vị trí nút quay lại ở điểm bắt đầu mặc định theo nền tảng `(platform)`. Thông thường là ở bên trái, nhưng có thể đổi sang bên phải tùy theo khu vực và hệ điều hành người dùng đang sử dụng.
    

#### Mã nguồn ví dụ:

HTML

```
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button></ion-back-button>
    </ion-buttons>
    </ion-toolbar>
</ion-header>
```

### 3. Xử lý Lịch sử Điều hướng và Thuộc tính Liên kết Dự phòng (Default Href)

- Ẩn dưới hệ thống `(under the hood)`, Ionic tự động theo dõi các bước di chuyển và xây dựng một ngăn xếp các trang `(stack of pages)`. Điều này giúp nút quay lại hoạt động hoàn hảo khi người dùng đi từ trang chủ đến trang chi tiết.
    
- **Vấn đề khi tải lại trang `(reload page)`:** Do đây là ứng dụng web `(web app)`, nếu người dùng tải lại trang chi tiết trực tiếp trên trình duyệt, ngăn xếp lịch sử của Ionic sẽ bị trống. Nút quay lại sẽ không biết trang trước đó là gì và sẽ bị ẩn đi.
    
- **Cách khắc phục:** Thêm thuộc tính `defaultHref` vào thẻ `ion-back-button`. Nếu người dùng truy cập trực tiếp vào trang này mà không có lịch sử điều hướng trước đó, nút quay lại vẫn hiển thị và sẽ đưa người dùng về đường dẫn dự phòng này.
    

#### Mã nguồn cập nhật:

HTML

```
<ion-buttons slot="start">
  <ion-back-button defaultHref="/recipes"></ion-back-button>
</ion-buttons>
```

### Ghi chú thêm (Notes)

- Ở thời điểm bài giảng, có một lỗi nhỏ `(known bug)` khi sử dụng đường dẫn tương đối `(relative path)` (như `./`) với `routerLink` khiến việc nhấp nhiều lần không điều hướng được. Cách giải quyết tạm thời và dễ nhất `(easiest workaround)` là luôn sử dụng **đường dẫn tuyệt đối `(absolute path)`**.
    
- Các chủ đề sâu hơn về tích hợp tab và luồng định tuyến chi tiết sẽ được tìm hiểu ở các học phần về `(routing and navigation module)` sau.