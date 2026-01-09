## Khái niệm Thành phần (Components) trong Angular

### Tư duy thiết kế (Design Thinking)

Ý tưởng cốt lõi của Angular là xây dựng ứng dụng dựa trên các **Thành phần** (Components). Thay vì nhìn nhận trang web như một khối liền mạch, ta phân tách chúng thành các mảnh ghép riêng biệt để cấu thành nên giao diện người dùng (User Interface).

Ví dụ về cấu trúc một trang web điển hình:
![[Commponents.png]]
- **Thanh tiêu đề** (Header Component)
    
- **Thanh điều hướng bên** (Side Navigation Component)
    
- **Khu vực nội dung**: Chứa các **Mục danh sách** (List Item Components)
    

### Lợi ích của Kiến trúc Hướng Thành phần

Việc áp dụng tư duy **Phát triển hướng thành phần** (Component-driven development) mang lại ưu điểm lớn về **tính tái sử dụng** (reusability):

- **Định nghĩa một lần**: Bạn chỉ cần thiết lập logic xử lý và giao diện (look) cho một thành phần (ví dụ: _List Item_) một lần duy nhất.
    
- **Sử dụng nhiều lần**: Có thể tái sử dụng thành phần đó ở bất kỳ đâu và bao nhiêu lần tùy ý trong ứng dụng (ví dụ: lặp lại 4 lần trong một danh sách) mà không cần viết lại mã.
    
