## Các khối xây dựng cốt lõi của ứng dụng Ionic (Core Building Blocks)

Trước khi đi sâu vào chi tiết từng component, cần nắm vững các yếu tố nền tảng cấu thành nên một ứng dụng Ionic điển hình (chạy được cả trên web và thiết bị di động).

![[CoreBuildingBlocks.png]]
### 1. Thành phần giao diện (UI Components)

Đây là khối xây dựng quan trọng nhất.

- Là "trái tim" của ứng dụng.
    
- Được sử dụng trong mọi ứng dụng Ionic bất kể nền tảng (Web hay Native).
    

### 2. Chủ đề và Định kiểu (Theming and Styling)

Mặc dù các component mặc định của Ionic đã đẹp mắt, nhưng việc tùy chỉnh là cần thiết để phù hợp với nhận diện thương hiệu.

- **Mục tiêu**: Điều chỉnh giao diện `(look)` của các component.
    
- **Khả năng tùy biến**: Ionic cho phép thay đổi kiểu dáng linh hoạt theo phong cách riêng hoặc nhận diện doanh nghiệp `(corporate identity)`.
    
- _Nội dung này sẽ được học kỹ trong module riêng biệt._
    

### 3. Điều hướng (Navigation)

Quản lý việc chuyển đổi giữa các trang trong ứng dụng.

- **Bản chất kỹ thuật**:
    
    - Không phải tải lại tài liệu mới từ máy chủ như web truyền thống.
        
    - Hoạt động theo mô hình **Ứng dụng đơn trang (Single Page Application - SPA)**.
        
    - Sử dụng các framework như Angular, Vue hoặc React kết hợp với Router để render các phần khác nhau của ứng dụng lên màn hình.
        
- **Trải nghiệm người dùng**: Mô phỏng hành vi của ứng dụng gốc `(native app)`, ví dụ: chạm vào mục để xem trang mới, chạm nút "Back" để quay lại.
    

### 4. Quản lý trạng thái (State Management)

Quản lý dữ liệu và thông tin trong quá trình ứng dụng vận hành.

- **Ví dụ về trạng thái**:
    
    - Người dùng có đang gửi yêu cầu không? (để hiển thị vòng xoay loading).
        
    - Danh sách sản phẩm đã tải xong chưa?
        
- **Độ phức tạp**: Đơn giản với app nhỏ, nhưng trở nên khó khăn hơn khi ứng dụng mở rộng.
    
- **Công cụ hỗ trợ**: Các framework như Angular sẽ hỗ trợ trực tiếp việc này (Ionic không trực tiếp xử lý logic này).
    

### 5. Tính năng thiết bị gốc (Native Device Features)

Khi xuất bản ứng dụng lên App Store/Play Store, ứng dụng Ionic sẽ được bọc trong một **Web View** (lớp vỏ ứng dụng gốc).

- **Chức năng**: Tạo cầu nối `(bridge)` để truy cập phần cứng thiết bị.
    
- **Các tính năng phổ biến**: Camera, Face ID, Touch ID, Định vị `(Location)`, v.v.
    
- **Công cụ thực hiện**:
    
    - **Capacitor**: Được phát triển bởi đội ngũ Ionic (khuyên dùng).
        
    - **Cordova**: Được Ionic hỗ trợ (nhưng không trực tiếp phát triển).
        

### 6. Công cụ dòng lệnh (CLI) & Quy trình làm việc (Workflows)

Hỗ trợ các tác vụ kỹ thuật phía sau hậu trường.

- **Build workflow**: Quy trình đóng gói và xây dựng ứng dụng.
    
- **Publishing workflow**: Quy trình xuất bản ứng dụng.
    

---

**Tóm lại**: Trong module hiện tại, trọng tâm sẽ dồn vào **UI Components**. Đây là kiến thức nền tảng bắt buộc cho dù bạn xây dựng Web App hay Mobile App.
