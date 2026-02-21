## Gỡ lỗi (Debugging) trên Ứng dụng gốc (Native App) - Nền tảng Android

Sau khi đã nắm rõ cách gỡ lỗi trên trình duyệt web, bước tiếp theo là tìm hiểu cách gỡ lỗi khi ứng dụng đang chạy thực tế trên thiết bị di động (hoặc trình giả lập).

### Khởi chạy Môi trường Gỡ lỗi

Để bắt đầu gỡ lỗi trên Android với tính năng tải lại trực tiếp (live reload), hãy chạy lệnh sau, lệnh này sẽ khởi động máy chủ phát triển và kết nối với Android Studio:

Bash

```
ionic capacitor run android -l
```

Sau khi Android Studio mở lên, hãy chọn một **trình giả lập (simulator)** và khởi chạy ứng dụng.

### Xem Log trên Android Studio

Không giống như môi trường web, bạn không thể xem `console.log` của ứng dụng gốc trực tiếp trên tab Console của trình duyệt thông thường. Thay vào đó, bạn có thể xem chúng ngay trong Android Studio.

- Mở tab **Chạy (Run)** ở thanh công cụ phía dưới cùng của Android Studio để xem toàn bộ **đầu ra (output)** của hệ thống.
    
- **Mẹo tìm kiếm log (Trick):** Cửa sổ này thường chứa lượng lớn các tin nhắn hệ thống, khiến việc tìm dòng log của bạn trở nên khó khăn. Hãy thêm một chuỗi nhận diện viết hoa nổi bật vào lệnh log để dễ dàng quét mắt tìm kiếm (Ví dụ: `console.log('LOADED RECIPES', data);`).
    

### Gỡ lỗi Chuyên sâu với Chrome Inspect (Remote Debugging)

Để đặt **điểm dừng (breakpoints)** và kiểm tra chi tiết ứng dụng Android giống như cách bạn làm trên web, trình duyệt Chrome cung cấp một công cụ gỡ lỗi từ xa cực kỳ mạnh mẽ.

1. **Truy cập công cụ:** Mở trình duyệt Chrome và nhập địa chỉ sau vào thanh URL:
    
    Plaintext
    
    ```
    chrome://inspect
    ```
    
2. **Tìm thiết bị:** Tại đây, bạn sẽ thấy danh sách các thiết bị đang kết nối, bao gồm trình giả lập (emulator) hoặc thiết bị Android thật (yêu cầu thiết bị thật phải bật tính năng **Gỡ lỗi USB - USB debugging**).
    
3. **Mở DevTools:** Nhấn vào nút **Inspect** bên dưới tên ứng dụng Ionic của bạn. Hành động này sẽ mở ra một cửa sổ Chrome Developer Tools hoàn toàn mới, được kết nối trực tiếp với ứng dụng gốc (native app) đang chạy trên thiết bị Android.
    

**Lợi ích của phương pháp này:**

- **Tab Console:** Hiển thị log rõ ràng và sạch sẽ hơn rất nhiều so với tab Run của Android Studio.
    
- **Tab Mạng (Network):** Theo dõi chính xác các yêu cầu HTTP gửi đi từ thiết bị gốc.
    
- **Tab Nguồn (Sources):** Bạn có thể truy cập vào thư mục `webpack` (ví dụ: vào `recipes` -> `recipe detail`), kiểm tra mã nguồn và thiết lập **điểm dừng (breakpoints)**. Mã chạy trên thiết bị sẽ thực sự tạm dừng khi chạm đến điểm dừng này.
    
- **Các tab khác:** Bạn có toàn quyền sử dụng tab **Thành phần (Elements)**, **Hiệu suất (Performance)** và **Bộ nhớ (Memory)** y hệt như khi đang gỡ lỗi một trang web thông thường.