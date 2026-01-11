## Tài liệu và Thành phần Ionic (Ionic Components & Docs)

Ionic cung cấp hơn 100 thành phần dựng sẵn (**pre-built components**). Việc ghi nhớ tất cả là không thể và không cần thiết. Thay vào đó, kỹ năng quan trọng nhất là biết cách tra cứu và sử dụng tài liệu chính thức (`Official Docs`).

### 1. Tổng quan về Tài liệu Ionic

- **Nguồn chính thống**: Truy cập trang tài liệu chính thức của Ionic.
    
- **Tính cập nhật**: Tài liệu được tạo trực tiếp từ mã nguồn (**source code**), đảm bảo thông tin luôn chính xác và mới nhất.
    
- **Cách học**: Không học thuộc lòng. Hãy học thông qua quá trình xây dựng ứng dụng thực tế và tra cứu khi cần.
    

### 2. Cấu trúc thông tin của một Component

Khi tra cứu một thành phần cụ thể (ví dụ: `ion-button`), tài liệu sẽ cung cấp các thông tin kỹ thuật sau:

- **Minh họa trực quan (Visual Examples)**:
    
    - Hiển thị giao diện của component trên iOS và Android (phong cách **Material Design**).
        
    - Cho phép tương tác thử nghiệm ngay trên tài liệu.
        
- **Hướng dẫn sử dụng & Cấu hình**:
    
    - Mô tả chức năng của component.
        
    - Các ví dụ mã nguồn (**code examples**) cho JavaScript và Angular.
        
    - Ví dụ cấu hình giao diện: Thuộc tính `fill` của nút bấm có thể đặt là `clear`, `outline`, hoặc `solid`.
        
- **Thuộc tính (Properties)**:
    
    - Danh sách các thuộc tính có thể thiết lập cho component.
        
    - Có thể gán các thuộc tính này dưới dạng `attribute` trực tiếp trên thẻ HTML.
        
    - Liệt kê các giá trị hợp lệ cho từng thuộc tính.
        
- **Sự kiện (Events)**:
    
    - Bao gồm các sự kiện tùy chỉnh (**custom events**) do component phát ra.
        
    - Vẫn hỗ trợ các sự kiện HTML mặc định (như `click`, v.v.).
        
- **Tùy chỉnh CSS (CSS Custom Properties)**:
    
    - Danh sách các biến CSS (**CSS variables**) có thể ghi đè để thay đổi giao diện mặc định của component.
        

### 3. Áp dụng vào dự án Budget Planner

Dựa trên tài liệu này, ta sẽ bắt đầu lựa chọn và tích hợp các component phù hợp để xây dựng giao diện cho ứng dụng "Budget Planner" trong các bước tiếp theo.