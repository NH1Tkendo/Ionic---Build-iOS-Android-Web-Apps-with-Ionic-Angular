## Khái niệm cốt lõi về Angular

### Định nghĩa

![[What is Angular.png]]
Angular là một **framework JavaScript phía client** (client-side), được thiết kế để xây dựng các **giao diện người dùng** (user interfaces - UI) có tính tương tác cao và phản hồi nhanh (reactive).

### Các đặc điểm kỹ thuật chính

**1. Hoạt động phía Client (Client-side)**

- Chạy trực tiếp trên trình duyệt (browser), không chạy trên máy chủ (server).
    
- Không sử dụng Node.js hay các ngôn ngữ lập trình phía server khác để hiển thị giao diện.
    

**2. Ngôn ngữ phát triển: TypeScript**

- Angular sử dụng **TypeScript** (một tập siêu của JavaScript - superset) để giúp quá trình phát triển thuận tiện và chặt chẽ hơn cho lập trình viên.
    
- **Cơ chế biên dịch**: Mặc dù viết bằng TypeScript, mã nguồn cuối cùng sẽ được biên dịch thành JavaScript thuần để chạy trên trình duyệt.
    

**3. Bản chất Framework** Là tập hợp các quy tắc (rules) và công cụ tiện ích (utility tools) giúp đơn giản hóa việc viết mã logic phức tạp. Angular tự động xử lý các tác vụ nền tảng như:

- Gửi yêu cầu HTTP (HTTP requests).
    
- Định tuyến (Routing): Hiển thị nội dung/trang khác nhau dựa trên điều hướng người dùng.
    
- Quản lý trạng thái (State management): Quản lý dữ liệu cần thiết cho ứng dụng.
    

### Tại sao nên sử dụng Angular?

- **Đơn giản hóa độ phức tạp**: Nếu viết bằng JavaScript thuần, các tính năng cao cấp sẽ đòi hỏi mã nguồn rất phức tạp và tinh vi. Angular cung cấp khung sườn để thực hiện điều này dễ dàng hơn.
    
- **Tối ưu cho ứng dụng phức tạp**: Angular không dành cho các ứng dụng đơn giản (trivial applications). Nó phát huy sức mạnh tốt nhất ở các ứng dụng web phức tạp, nơi có nhiều tương tác người dùng.
    
- **Trải nghiệm người dùng mượt mà**: Cho phép cập nhật các thành phần trên giao diện trình duyệt mà **không cần tải lại trang** (without reloading the page) hoặc tải lại file HTML mới.