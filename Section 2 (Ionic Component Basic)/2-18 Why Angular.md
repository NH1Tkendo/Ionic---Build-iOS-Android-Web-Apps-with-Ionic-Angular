## Tổng kết Module & Tại sao sử dụng Angular?

Sau khi hoàn thành module cơ bản với JavaScript thuần (Vanilla JS), chúng ta đã nắm được cách sử dụng các thành phần cốt lõi của Ionic và cách tra cứu tài liệu. Tuy nhiên, để xây dựng các ứng dụng lớn và phức tạp, việc sử dụng một Framework như Angular là điều cần thiết.

### 1. Tổng quan về Ionic Components

- **Tài liệu chính thức (Official Docs):** Là nguồn thông tin quan trọng nhất. Không cần ghi nhớ thuộc lòng mọi thứ, chỉ cần hiểu cách tra cứu cấu hình và cách kết hợp các components.
    
- **Khả năng độc lập:** Chúng ta đã xây dựng được giao diện đẹp mắt chỉ bằng HTML/JS thuần mà không cần CSS tùy chỉnh. Điều này chứng minh sức mạnh của Ionic Web Components.
    

### 2. Hạn chế của Vanilla JavaScript

Khi ứng dụng phát triển phức tạp hơn, việc chỉ sử dụng JavaScript thuần sẽ gặp nhiều khó khăn:

- **"Reinventing the wheel" (Phát minh lại bánh xe):** Tốn thời gian xử lý các tác vụ cấp thấp (low-level) như thao tác DOM thủ công (`createElement`, `appendChild`, v.v.).
    
- **Khó bảo trì:** Code dễ trở nên lộn xộn, khó kiểm soát lỗi (bugs) khi logic nghiệp vụ tăng lên.
    

### 3. Ba lý do cốt lõi để sử dụng Angular
![[Why-Angular.png]]
Angular giúp giải quyết các vấn đề trên thông qua 3 khía cạnh chính:

#### a. Quản lý Logic phức tạp & Trừu tượng hóa DOM

- **Vấn đề:** Thay vì tập trung vào logic hiển thị (làm sao để vẽ một list ra màn hình), lập trình viên nên tập trung vào logic nghiệp vụ (thêm sản phẩm, validate dữ liệu, gọi API).
    
- **Giải pháp Angular:** Tự động cập nhật DOM dựa trên thay đổi của dữ liệu. Cung cấp cấu trúc rõ ràng (`Components`, `Directives`, `Pipes`) giúp code có tổ chức.
    

#### b. Quản lý trạng thái (State Management)

- **Vấn đề:** Việc truyền dữ liệu qua lại giữa các phần của ứng dụng (app state) rất phức tạp và dễ gây lỗi trong các ứng dụng lớn.
    
- **Giải pháp Angular:**
    
    - Sử dụng **Services** và **Dependency Injection (DI)** để quản lý dữ liệu tập trung.
        
    - **Ví dụ thực tế:** Với `alert-controller`, trong Angular ta chỉ cần "inject" nó vào component và sử dụng. Không cần phải thêm thẻ `<ion-alert-controller>` vào HTML rồi dùng `querySelector` để tìm như trong Vanilla JS.
        

#### c. Định tuyến nâng cao (Advanced Routing)

- **Vấn đề:** Ứng dụng thực tế cần nhiều trang (Tabs, Side Drawer, Product List, Cart, Profile...), không chỉ là một trang đơn lẻ.
    
- **Giải pháp Angular:**
    
    - Mặc dù Ionic có router riêng, nhưng **Angular Router** mạnh mẽ hơn nhiều.
        
    - Hỗ trợ các tính năng phức tạp: Truyền tham số (`query params`), Tải chậm (`lazy loading`), Guard (bảo vệ route).
        
    - Đã được kiểm chứng (battle-proven) về hiệu năng và độ ổn định.
        

### 4. Kết luận & Bước tiếp theo

Việc chuyển sang sử dụng Angular kết hợp với Ionic giúp:

- Tăng tốc độ phát triển nhờ CLI và các công cụ hỗ trợ.
    
- Code sạch, dễ bảo trì và mở rộng.
    
- Tận dụng hệ sinh thái mạnh mẽ của Angular.
    

**Nội dung tiếp theo của khóa học:**

- Thiết lập dự án Ionic & Angular (Chi tiết cấu trúc dự án).
    
- Cách Ionic tận dụng **Angular CLI** bên dưới.
    
- Bắt đầu xây dựng ứng dụng thực tế với kiến trúc chuẩn.
