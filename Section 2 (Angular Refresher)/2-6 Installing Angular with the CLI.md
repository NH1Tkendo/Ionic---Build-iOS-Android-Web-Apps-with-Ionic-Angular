Dưới đây là nội dung ghi chú học tập về cách cài đặt và thiết lập môi trường Angular thông qua CLI, được biên tập lại từ transcript:

## Bắt đầu làm việc với Angular CLI

### Giới thiệu về Angular CLI

- **Khái niệm**: Angular CLI (Command Line Interface) là công cụ giao diện dòng lệnh giúp đơn giản hóa việc khởi tạo và quản lý dự án Angular.
    
- **Tại sao cần CLI?**
    
    - Angular sử dụng TypeScript và cấu trúc dự án đặc thù.
        
    - Mã nguồn cần được biên dịch (compile) sang JavaScript, đóng gói (bundle) và tối ưu hóa để chạy trên trình duyệt.
        
    - **Vai trò**: CLI tự động hóa quy trình xây dựng (build process) này, giúp lập trình viên tập trung vào logic và giao diện thay vì cấu hình thủ công.
        

### Yêu cầu tiên quyết: Node.js và NPM

Để sử dụng Angular CLI, bạn cần cài đặt **Node.js**.

- **Nguồn tải**: [nodejs.org](https://nodejs.org/) (Tải phiên bản mới nhất).
    
- **Vai trò của Node.js trong khóa học này**:
    
    - Mặc dù Node.js là môi trường chạy JavaScript phía server, chúng ta **không** dùng nó để viết mã server-side.
        
    - Chúng ta cần **NPM** (Node Package Manager) đi kèm với Node.js.
        
- **NPM**: Công cụ quản lý gói, dùng để cài đặt các thư viện phụ thuộc (dependencies) và công cụ phát triển (như Angular CLI).
    

### Hướng dẫn Cài đặt

**1. Cài đặt Node.js**

- Tải và chạy trình cài đặt từ trang chủ Node.js.
    
- Sau khi cài xong, bạn có thể sử dụng lệnh `npm` trong terminal.
    

2. Cài đặt Angular CLI

Chạy lệnh sau trong terminal (Command Prompt/Terminal):

Bash

```
npm install -g @angular/cli
```

- **Lưu ý về quyền truy cập**:
    
    - **MacOS/Linux**: Có thể cần thêm `sudo` phía trước để cấp quyền quản trị (admin permissions): `sudo npm install -g @angular/cli`. Bạn sẽ cần nhập mật khẩu máy tính.
        
    - **Windows**: Thường không cần `sudo`, chỉ cần nhấn Enter.
        

### Hướng dẫn Tạo dự án mới

Sau khi cài đặt CLI thành công, thực hiện các bước sau để tạo dự án:

1. **Di chuyển thư mục**: Dùng lệnh `cd` để đến thư mục muốn lưu dự án.
    
2. **Khởi tạo dự án**: Chạy lệnh `ng new` kèm tên dự án.
    

Bash

```
ng new ng-refresher
```

_(Lưu ý: Bạn có thể thay `ng-refresher` bằng tên bất kỳ. Nhớ kết hợp với các cờ `--strict false` như đã đề cập ở bài trước nếu cần)._

3. **Cấu hình ban đầu** (CLI sẽ hỏi các tùy chọn):
    
    - **Angular Routing?** (Định tuyến): Chọn `N` (No).
        
    - **Stylesheet format?** (Định dạng kiểu): Chọn `CSS` (Mặc định).
        

Sau bước này, CLI sẽ tạo một thư mục mới, tải các gói cần thiết và thiết lập cấu trúc dự án cơ bản.

---

_Bạn có muốn tôi tiếp tục chuyển đổi phần nội dung về "Lựa chọn Editor (IDE)" hoặc "Cấu trúc thư mục dự án" không?_