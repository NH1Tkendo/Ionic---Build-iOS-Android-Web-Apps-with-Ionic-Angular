## Quản lý Trình điều khiển cảnh báo (Alert Controller) trong Ionic Angular

### Khái niệm

- Thay vì phải nhúng trực tiếp thành phần hộp thoại vào **mẫu (template)** và thao tác thông qua JavaScript như cách làm cũ, gói `@ionic/angular` cho phép **tiêm (inject)** trực tiếp **Trình điều khiển cảnh báo (Alert Controller)** dưới dạng một **dịch vụ (service)**.
    
- Lợi ích chính của phương pháp này là tính tiện dụng và linh hoạt: bạn có thể gọi hộp thoại cảnh báo ở bất kỳ đâu trong ứng dụng mà không cần cấu hình mẫu HTML phức tạp.
    

### Cách thực hiện

- **Nhập thư viện (Import):** Cần import `AlertController` từ `@ionic/angular`.
    
- **Tiêm dịch vụ (Injection):** Khai báo `AlertController` trong hàm khởi tạo (constructor) của lớp.
    
- **Khởi tạo hộp thoại:** - Gọi phương thức `create()` và truyền vào một **đối tượng (object)** chứa cấu hình hộp thoại.
    
    - Với sự hỗ trợ của TypeScript, IDE sẽ có tính năng **tự động hoàn thiện (auto-completion)** giúp bạn dễ dàng tra cứu các thuộc tính như `header` hay `message`.
        
- **Cấu hình nút bấm (Buttons):** Truyền một mảng đối tượng thay vì mảng chuỗi đơn thuần để định nghĩa hành vi chi tiết cho từng nút:
    
    - **Nút Hủy (Cancel):** Thêm thuộc tính `role: 'cancel'`. Thuộc tính này sẽ tự động đóng **hộp thoại (dialog)** khi bấm mà không thực thi thêm hành động nào.
        
    - **Nút Chức năng (ví dụ: Delete):** Định nghĩa một **hàm xử lý (handler)**. Đây là một **hàm mũi tên vô danh (anonymous arrow function)** chứa đoạn mã sẽ được thực thi khi người dùng xác nhận (như mã xóa dữ liệu hoặc điều hướng).
        
- **Hiển thị hộp thoại:** Phương thức `create()` trả về một **lời hứa (Promise)** mang theo phần tử cảnh báo. Bạn cần gọi phương thức `present()` trên phần tử này để hiển thị nó lên màn hình.
    

### Ví dụ / Mã nguồn

Dưới đây là mô phỏng lại đoạn mã thực thi chức năng hiển thị cảnh báo xác nhận xóa dựa theo nội dung của bài học:

TypeScript

```
import { AlertController } from '@ionic/angular';

// Trong lớp thành phần (Component class)
constructor(private alertController: AlertController) {}

onDeleteRecipe() {
  this.alertController.create({
    header: 'Are you sure',
    message: 'Do you really want to delete the recipe?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel' // Tự động đóng hộp thoại
      },
      {
        text: 'Delete',
        handler: () => {
          // Hàm xử lý khi người dùng chọn Delete
          // Thực thi logic xóa dữ liệu và điều hướng tại đây
          console.log('Recipe deleted!');
        }
      }
    ]
  }).then(alertEl => {
    // alertEl là phần tử cảnh báo trả về từ Promise
    alertEl.present();
  });
}
```

### Ghi chú thêm

- Tính năng này là một ưu điểm lớn của việc sử dụng Angular kết hợp với gói `@ionic/angular`. Nó bọc (wrap) các tính năng cốt lõi và cung cấp cho lập trình viên trải nghiệm viết mã gọn gàng, mang đậm tính cấu trúc dịch vụ của Angular.