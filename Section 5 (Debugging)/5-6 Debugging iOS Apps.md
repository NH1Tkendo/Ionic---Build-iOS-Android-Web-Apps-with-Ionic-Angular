## Gỡ lỗi (Debugging) trên Ứng dụng gốc (Native App) - Nền tảng iOS

### Khởi chạy Môi trường Gỡ lỗi

- Để gỡ lỗi ứng dụng iOS (lưu ý: chỉ hỗ trợ trên hệ điều hành **macOS**), hãy chạy lệnh sau để khởi động máy chủ **tải lại trực tiếp (live reload)**:
    
    Bash
    
    ```
    ionic capacitor run ios -l
    ```
    
- Lệnh này sẽ tự động biên dịch ứng dụng, thiết lập kết nối với máy chủ và mở dự án trong **Xcode**.
    
- Trong Xcode, hãy chọn một **trình giả lập (simulator)** (ví dụ: iPhone XS) và nhấn nút **Play** để khởi chạy **ứng dụng gốc (native app)**.
    

### Trình kiểm tra Web Safari (Safari Web Inspector)

- Đối với iOS, bạn **không thể** sử dụng Chrome DevTools (chrome://inspect) như trên Android. Thay vào đó, bạn sử dụng công cụ gỡ lỗi chuyên biệt của trình duyệt Safari.
    
- **Cách kết nối công cụ gỡ lỗi:**
    
    1. Mở trình duyệt Safari trên máy Mac.
        
    2. Trên thanh menu trên cùng, chọn **Phát triển (Develop)**.
        
    3. Tìm tên trình giả lập iPhone đang chạy ứng dụng của bạn trong danh sách xổ xuống.
        
    4. Nhấp vào địa chỉ IP hiển thị bên trong menu đó để mở cửa sổ Trình kiểm tra Web.
        

### Gỡ lỗi Chuyên sâu với Safari Web Inspector

Trình kiểm tra Web của Safari cung cấp các tính năng rất tương đồng với Chrome DevTools, cho phép bạn phân tích toàn diện ứng dụng Ionic đang chạy trên thiết bị iOS:

- **Tab Elements (Thành phần):** Xem cách **Mô hình Đối tượng Tài liệu (DOM)** được hiển thị, kiểm tra các lớp CSS đang áp dụng và các **kiểu được tính toán (computed styles)** ở góc trên bên phải.
    
- **Tab Debugger (Trình gỡ lỗi):**
    
    - Sử dụng thanh tìm kiếm (bộ lọc) để tìm trực tiếp các tệp TypeScript thô (ví dụ: gõ `recipe` để tìm `recipes.page.ts` hoặc `recipe-detail.page.ts`).
        
    - Bạn có thể đặt các **điểm dừng (breakpoints)** trực tiếp trong mã nguồn. Khi thao tác trên trình giả lập, mã sẽ tạm dừng tại các điểm này.
        
    - Cung cấp các công cụ điều khiển luồng (như **bước vào - step into**, **bước ra - step out**) để chạy từng dòng lệnh và kiểm tra chi tiết giá trị của các biến (ví dụ: xem bên trong `recipeId` hay `paramMap` chứa gì).
        
- **Tab Timelines (Dòng thời gian):** Đo lường và theo dõi thời gian thực thi, ví dụ như đo lường thời gian xử lý của các **yêu cầu mạng (network requests)**.
    
- **Tab Console (Bảng điều khiển):** Nơi hiển thị trực tiếp các thông báo `console.log()` từ ứng dụng của bạn.
    
- **Tab Storage (Lưu trữ):** Kiểm tra dữ liệu đang được lưu trong **bộ nhớ cục bộ (local storage)** và các phương thức lưu trữ khác của ứng dụng iOS.
    

### Xem Log trực tiếp trên Xcode (Xcode Built-in Log)

- Tương tự như tab Run trong Android Studio, Xcode cũng có một bảng điều khiển log tích hợp sẵn ở cạnh dưới của cửa sổ làm việc.
    
- Các thông báo `console.log()` sẽ tự động xuất hiện tại đây ngay khi ứng dụng đang chạy.
    
- **Đánh giá:** Bảng log này của Xcode thường dễ đọc, rõ ràng và ít bị nhiễu bởi các tiến trình hệ thống hơn so với Android Studio.