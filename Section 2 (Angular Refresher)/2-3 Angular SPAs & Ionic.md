## Angular: Từ Web đến Ứng dụng Di động

### Phạm vi ứng dụng

- **Thông thường**: Angular được dùng để xây dựng các ứng dụng web chạy trên trình duyệt.
    
- **Trong khóa học này**: Angular được sử dụng kết hợp với công cụ **Ionic** để xây dựng các **ứng dụng di động gốc** (native mobile applications).
    

### Kiến trúc Ứng dụng Một trang (Single Page Application - SPA)
![[SPA.png]]
Một ứng dụng web Angular điển hình hoạt động theo mô hình SPA:

- **Cấu trúc**: Chỉ có một tệp HTML duy nhất (thường là `index.html`) được máy chủ gửi về trình duyệt.
    
- **Cơ chế tải**:
    
    - Trình duyệt tải tệp `index.html` và tập lệnh Angular (Angular script).
        
    - Tập lệnh này bao gồm: Mã nguồn của framework + Mã logic của ứng dụng (do người dùng viết).
        
    - **Quy trình biên dịch**: Mã nguồn được viết bằng **TypeScript** (giúp cấu trúc rõ ràng, dễ đọc), sau đó được biên dịch sang JavaScript và đóng gói (bundled) để chạy trên trình duyệt.
        

### Cơ chế hoạt động và Hiệu năng

- **Kết xuất lại (Re-rendering)**:
    
    - Angular liên tục vẽ lại giao diện người dùng (các phần tử HTML) dựa trên tương tác.
        
    - **Về mặt trải nghiệm**: Người dùng cảm thấy như đang chuyển qua nhiều trang khác nhau.
        
    - **Về mặt kỹ thuật**: Tất cả được điều khiển bởi JavaScript trên một trang duy nhất.
        
- **Ưu điểm**:
    
    - **Hiệu suất cao**: Do chạy trực tiếp trên trình duyệt bằng JavaScript.
        
    - **Phản hồi tức thì**: Giao diện cập nhật ngay lập tức mà không cần tải lại trang.
        
    - **Khả năng hoạt động ngoại tuyến**: Có thể hoạt động ngay cả khi mất kết nối internet tạm thời (do mã đã được tải về).
        
    - **Xử lý dữ liệu**: Việc tải dữ liệu mới từ cơ sở dữ liệu diễn ra ngầm (behind the scenes), không làm gián đoạn trải nghiệm.
        

### Mối liên hệ với Ionic

- Mô hình SPA của Angular mang lại trải nghiệm mượt mà, phản hồi nhanh ("reactive") tương tự như các ứng dụng di động.
    
- **Chiến lược**: Sử dụng kiến thức Angular để xây dựng **logic nghiệp vụ** (business logic), sau đó dùng Ionic để đóng gói thành ứng dụng di động gốc thực thụ.