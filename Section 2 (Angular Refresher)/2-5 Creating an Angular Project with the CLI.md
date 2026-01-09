Dưới đây là ghi chú hướng dẫn thao tác khởi tạo dự án, chuẩn bị cho bài học tiếp theo:

## Khởi tạo Dự án Angular Mới

### Câu lệnh thực hiện

Để tạo một dự án mới tương thích với nội dung khóa học, bạn cần chạy câu lệnh `ng new` kèm theo các cờ cấu hình cụ thể:

Bash

```
ng new my-project --strict false --standalone false
```

### Lưu ý cấu hình

- **Các cờ bắt buộc (Flags)**:
    
    - `--strict false`: Tắt chế độ kiểm tra nghiêm ngặt (strict mode) để giảm bớt các ràng buộc về kiểu dữ liệu khi mới học.
        
    - `--standalone false`: Tắt chế độ tạo thành phần độc lập (standalone components), đảm bảo dự án sử dụng cấu trúc dựa trên Module truyền thống (phù hợp với hướng dẫn của khóa học này).
        
- **Tương tác với CLI**:
    
    - Sau khi chạy lệnh, công cụ sẽ đưa ra một loạt câu hỏi cấu hình.
        
    - Chỉ cần nhấn **ENTER** để chấp nhận tất cả các tùy chọn mặc định.
        

---

_Bạn có muốn tôi tiếp tục với phần hướng dẫn về cấu trúc thư mục hoặc tạo component đầu tiên không?_