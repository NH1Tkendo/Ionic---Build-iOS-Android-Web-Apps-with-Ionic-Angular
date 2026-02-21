## Gỡ lỗi Nâng cao với Chrome Developer Tools

### Giới thiệu

Khi các câu lệnh `console.log()` không đủ để cung cấp thông tin chi tiết và bạn cần can thiệp sâu hơn vào luồng hoạt động của ứng dụng, **Công cụ dành cho nhà phát triển Chrome (Chrome Developer Tools)** là lựa chọn tối ưu.

### Truy cập Mã nguồn (Accessing Source Code)

- Mở DevTools và chuyển sang tab **Sources (Nguồn)**.
    
- Bạn có thể tìm thấy mã nguồn dự án của mình theo đường dẫn: thư mục `webpack` -> `.` -> thư mục chứa mã nguồn (ví dụ: `src`).
    
- Nhờ vào cơ chế **bản đồ mã nguồn (source maps)**, trình duyệt cho phép bạn xem và gỡ lỗi trực tiếp trên các tệp **TypeScript** (`.ts`) nguyên bản (như `recipes.page.ts`) thay vì mã JavaScript đã bị biên dịch.
    

### Sử dụng Điểm dừng (Breakpoints) để Gỡ lỗi

- **Cách thiết lập:** Mở tệp mã nguồn mong muốn và nhấp chuột vào số dòng lệnh để đặt một **điểm dừng (breakpoint)**.
    
- **Cách hoạt động:** Khi bạn tải lại (reload) trang, quá trình thực thi mã sẽ tự động **tạm dừng (pause)** ngay tại dòng có điểm dừng.
    
- **Kiểm tra dữ liệu (Inspect):** Tại thời điểm mã tạm dừng, bạn có thể rê chuột vào các biến để xem giá trị hiện tại của chúng (ví dụ: xem bên trong biến `this` chứa gì, mảng `recipes` đang có dữ liệu nào, hoặc `recipeService` trả về kết quả ra sao).
    

### Điều khiển Luồng Thực thi (Execution Controls)

Khi mã đang tạm dừng, bạn có thể sử dụng các nút điều khiển của DevTools để di chuyển qua từng dòng lệnh:

- **Bước vào (Step into):** Đi sâu vào bên trong một hàm đang được gọi để xem cách nó hoạt động (ví dụ: nhảy thẳng vào hàm `getAllRecipes` bên trong tệp service).
    
- **Bước ra (Step out):** Thoát khỏi hàm hiện tại và quay trở lại dòng lệnh tiếp theo ở nơi đã gọi hàm đó.
    
- **Chuyển đến dòng tiếp theo (Step over):** Chạy xong dòng hiện tại và dừng ở dòng kế tiếp.
    
- **Tiếp tục chạy (Play / Resume):** Bỏ qua trạng thái tạm dừng và tiếp tục thực thi mã bình thường cho đến khi gặp điểm dừng tiếp theo.
    

### Kiểm chứng Lỗi Tái sử dụng Trang

- Nếu bạn áp dụng điểm dừng vào ví dụ lỗi ở phần trước (xóa công thức rồi quay lại trang danh sách):
    
    1. Tải lại trang: Mã dừng lại tại điểm dừng. Bạn nhấn Play để tiếp tục.
        
    2. Thực hiện xóa một mục và quay lại trang danh sách.
        
    3. **Kết quả:** Quá trình thực thi không hề bị tạm dừng thêm lần nào nữa.
        
- Điều này cung cấp bằng chứng xác thực rằng đoạn mã khởi tạo không bao giờ được thực thi lại (do Ionic đã giữ nguyên trạng thái trang trong bộ nhớ).
    

_Lưu ý: Các công cụ dành cho nhà phát triển của Chrome rất mạnh mẽ và còn vô số tính năng khác. Bạn có thể tham khảo thêm các tài nguyên bổ sung ở cuối học phần để khai thác tối đa công cụ này._