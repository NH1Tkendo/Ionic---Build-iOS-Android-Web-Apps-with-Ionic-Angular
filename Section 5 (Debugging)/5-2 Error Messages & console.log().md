## Gỡ lỗi (Debugging) trên Ứng dụng Trình duyệt

### Phân tích một Vấn đề Thực tế

- **Tình huống:** Trong ứng dụng công thức nấu ăn, khi người dùng xóa một mục và quay lại trang danh sách, mục vừa xóa vẫn hiển thị.
    
- **Nguyên nhân sâu xa:** Vấn đề này liên quan đến cách Ionic xử lý **định tuyến (routing)**, **điều hướng (navigation)** và tái sử dụng trang. (Chi tiết về **quản lý trạng thái (state management)** sẽ được tìm hiểu sâu ở các học phần sau).
    
- Đây là một ví dụ hoàn hảo để thực hành cách tìm và gỡ lỗi.
    

### Phương pháp 1: Đọc và Tìm kiếm Thông báo Lỗi

- Khi gặp sự cố hoặc hành vi lạ, điều đơn giản nhất là kiểm tra xem có thông báo lỗi (error message) nào không.
    
- **Cách xử lý:** Đừng hoảng sợ khi thấy lỗi. Hãy đọc kỹ, sao chép (copy) và dán (paste) toàn bộ thông báo lỗi lên Google. Thường bạn sẽ tìm thấy ngay các giải pháp hoặc gợi ý hữu ích từ cộng đồng.
    

### Phương pháp 2: Sử dụng `console.log()`

Mặc dù không phải là công cụ chuyên sâu nhất, việc chèn các câu lệnh `console.log()` là một phương pháp cực kỳ tuyệt vời và hiệu quả để kiểm tra nhanh luồng chạy của code.

**Các bước thực hành tìm lỗi với `console.log()`:**

1. Mở trang danh sách công thức (nơi dữ liệu tải bị sai).
    
2. Thêm lệnh log vào bên trong hàm khởi tạo `ngOnInit`:
    
    TypeScript
    
    ```
    ngOnInit() {
      console.log('Dữ liệu recipes:', this.recipes);
      // Các logic tải dữ liệu khác...
    }
    ```
    
3. Tải lại (reload) ứng dụng trên trình duyệt. Bạn sẽ thấy mảng chứa 2 công thức xuất hiện trong tab Console.
    
4. Tiến hành xóa một công thức và quay lại trang danh sách.
    
5. **Quan sát:** Lúc này, bạn sẽ _không_ thấy có thêm một dòng log mới nào xuất hiện trong Console.
    

**Kết luận từ quá trình Debug:**

- Việc không có log mới chứng tỏ hàm `ngOnInit` **đã không được thực thi lại** khi chúng ta quay về trang.
    
- **Lý do:** Khung làm việc Ionic có cơ chế **lưu trữ bộ nhớ tạm (cache pages)**. Nó không tạo lại toàn bộ trang từ đầu khi bạn điều hướng qua lại, do đó hàm `ngOnInit` bị bỏ qua và dữ liệu mới không được lấy (fetch) từ service.
    
- **Hướng giải quyết:** Thay vì phụ thuộc vào `ngOnInit`, bạn cần thiết lập một **đăng ký theo dõi (subscription)** để lắng nghe dữ liệu cập nhật từ service (mô hình này sẽ được triển khai chi tiết ở dự án chính của khóa học).
    

### Hạn chế của `console.log()`

Dù rất tiện lợi để thu hẹp phạm vi lỗi, `console.log()` đôi khi không cung cấp đủ góc nhìn chi tiết. Nếu bạn muốn theo dõi chính xác từng bước trong luồng logic phức tạp, bạn sẽ cần đến các công cụ gỡ lỗi nâng cao hơn.