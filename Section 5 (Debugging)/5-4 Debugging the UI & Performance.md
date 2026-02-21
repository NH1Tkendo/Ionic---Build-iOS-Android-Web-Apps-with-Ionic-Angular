## Khám phá các công cụ gỡ lỗi khác trên Chrome Developer Tools

Ngoài việc sử dụng điểm dừng (breakpoints), Chrome Developer Tools còn cung cấp nhiều thẻ (tabs) cực kỳ hữu ích để phân tích và gỡ lỗi toàn diện ứng dụng của bạn. Đây là những kỹ năng chung không chỉ áp dụng cho Ionic mà cho bất kỳ dự án web nào.

### Theo dõi Dữ liệu với Tab Mạng (Network Tab)

- **Hiện tại:** Tab này chủ yếu hiển thị các tệp JavaScript đang được tải xuống. Ionic có cơ chế **chia nhỏ mã tự động (code splitting)** theo từng thành phần (component), giúp giữ cho các đoạn mã (chunks) nhỏ gọn và tối ưu tốc độ tải.
    
- **Ứng dụng thực tế (Sau khi thêm API):** Khi bạn bắt đầu kết nối với máy chủ (back-end) bằng các **yêu cầu HTTP (HTTP requests)**, tab Mạng sẽ trở thành công cụ đắc lực:
    
    - Kiểm tra xem một yêu cầu có được gửi đi hay không (hoặc có gửi sai thời điểm không).
        
    - Kiểm tra tính chính xác của dữ liệu (data) được gửi đi và phản hồi nhận về.
        

### Chỉnh sửa Giao diện với Tab Thành phần (Elements Tab)

Nếu giao diện người dùng (UI) hiển thị không như mong đợi, đây là nơi đầu tiên bạn cần kiểm tra.

- **Cấu trúc DOM:** Hiển thị toàn bộ **Cây mô hình đối tượng tài liệu (DOM)** với các thành phần HTML của ứng dụng.
    
- **Công cụ chọn (Inspect Tool):** Nhấp vào biểu tượng mũi tên ở góc trái trên cùng của DevTools, sau đó bấm trực tiếp vào một phần tử trên trang web để nhảy thẳng đến mã HTML của phần tử đó.
    
- **Kiểm tra Kiểu dáng (Styling):** - Xem tất cả các **lớp (classes)** đang áp dụng lên phần tử.
    
    - Biết chính xác đoạn CSS đó nằm ở tệp nào (thuộc về thư viện Ionic hay tệp tùy chỉnh của bạn), từ đó dễ dàng tìm cách **ghi đè (overwrite)** lại nếu cần.
        
- **Mô hình Hộp (Box Model):** Cung cấp biểu diễn trực quan về kích thước phần tử, bao gồm khoảng cách lề (margin), viền (border) và khoảng đệm (padding).
    
- **Tính năng Nâng cao:** Bạn còn có thể kiểm tra các **trình nghe sự kiện (event listeners)** và các **thuộc tính (properties)** được gắn trực tiếp trên phần tử đó.
    

### Tối ưu hóa với Tab Hiệu suất (Performance) và Bộ nhớ (Memory)

Hai tab này đặc biệt quan trọng trong giai đoạn hoàn thiện ứng dụng trước khi ra mắt.

- **Tab Hiệu suất (Performance):** Cho phép bạn **ghi lại (record)** một bản chụp quá trình hoạt động. Bạn có thể đo lường thời gian thực thi của từng tập lệnh (scripts) để tìm ra đoạn mã nào đang chạy quá lâu hoặc gây nghẽn (blocking) ứng dụng.
    
- **Tab Bộ nhớ (Memory):** Cho phép chụp lại trạng thái bộ nhớ để theo dõi mức độ chiếm dụng của các quy trình. Rất hữu ích để phát hiện lỗi **rò rỉ bộ nhớ (memory leaks)**.
    

### 💡 Tóm tắt Quy trình Sửa lỗi Nhanh (Immediate Bug Fixing)

Đối với các lỗi hàng ngày cần xử lý gấp, hãy ưu tiên sử dụng ba công cụ sau:

1. Đặt lệnh `console.log()` để kiểm tra luồng logic nhanh.
    
2. Thiết lập **Điểm dừng (Breakpoints)** trong tab Sources để kiểm tra dữ liệu biến đổi.
    
3. Sử dụng tab **Thành phần (Elements)** để bắt lỗi giao diện UI/layout.