## Chuyển đổi Ứng dụng Web thành Ứng dụng Di động
### Tài liệu Hướng dẫn (Official Docs)

- Luôn xem **tài liệu chính thức (official docs)** là người bạn đồng hành. Nếu bạn gặp khó khăn hay có điểm nào chưa rõ, hãy tra cứu ngay tại đây.
    
- Trong mục `Guide`, bạn sẽ tìm thấy các hướng dẫn từng bước (step-by-step instructions) rất chi tiết tại phần **Chạy trên iOS (Running on iOS)** hoặc **Chạy trên Android (Running on Android)** để nắm rõ toàn bộ quy trình chuyển đổi.
    

### Yêu cầu về Hệ điều hành để Biên dịch (Build)

Để có thể biên dịch (build) ứng dụng cục bộ (locally) trên máy tính cá nhân, bạn cần đặc biệt lưu ý các điều kiện về hệ điều hành như sau:

- **Đối với ứng dụng iOS:**
    
    - **Bắt buộc:** Phải thực hiện trên hệ điều hành **MacOS**. Bạn không thể biên dịch ứng dụng iOS cục bộ trên máy tính Windows.
        
    - **Ngoại lệ (Dịch vụ đám mây):** Nếu bạn dùng Windows, giải pháp thay thế là sử dụng **AppFlow** – một dịch vụ trả phí của Ionic cho phép biên dịch ứng dụng trên đám mây (cloud) với môi trường MacOS giả lập. (Bạn có thể tìm hiểu thêm tại `ionicframework.com`). Tuy nhiên, do đây là dịch vụ trả phí, khóa học này sẽ **không đề cập** đến phương pháp này.
        
- **Đối với ứng dụng Android:**
    
    - Linh hoạt hơn rất nhiều, bạn có thể thực hiện biên dịch trên **MacOS**, **Windows** và cả **Linux**.
        

### Các công cụ cần thiết (Required Tools)

- Để quá trình thao tác thành công, bạn bắt buộc phải cài đặt một số công cụ lập trình và môi trường cụ thể trên máy tính của mình.