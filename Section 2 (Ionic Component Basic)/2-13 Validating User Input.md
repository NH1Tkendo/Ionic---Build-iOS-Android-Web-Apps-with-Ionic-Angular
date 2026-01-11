## Xử lý Dữ liệu và Xác thực (Input Handling & Validation)

Sau khi đã kết nối sự kiện `click`, bước tiếp theo là lấy dữ liệu người dùng nhập vào, kiểm tra tính hợp lệ (validation) trước khi xử lý tiếp.

### 1. Truy xuất giá trị từ Input

Các thành phần `ion-input` hoạt động tương tự như thẻ `input` chuẩn của HTML trong việc lưu trữ dữ liệu.

- Sử dụng thuộc tính `.value` trên biến tham chiếu của phần tử để lấy nội dung hiện tại.
    
- Lưu trữ các giá trị này vào biến cục bộ để xử lý.
    

### 2. Logic xác thực (Validation Logic)

Để đảm bảo dữ liệu đầu vào chính xác, ta cần thêm các điều kiện kiểm tra. Nếu dữ liệu không hợp lệ, hàm sẽ sử dụng lệnh `return` để dừng thực thi ngay lập tức.

**Các điều kiện kiểm tra:**

1. **Lý do chi tiêu (Reason):** Không được để trống.
    
    - Sử dụng phương thức `.trim()` để loại bỏ khoảng trắng thừa ở đầu và cuối.
        
    - Kiểm tra độ dài chuỗi: $Length \le 0$.
        
2. **Số tiền (Amount):** Phải là số dương và không được để trống.
    
    - Kiểm tra giá trị số: $Amount \le 0$.
        
    - Kiểm tra chuỗi rỗng (sau khi trim): $Length \le 0$.
        

### 3. Mã nguồn thực hiện (Implementation)

Cập nhật logic bên trong sự kiện `click` của nút **Confirm** trong file `app.js`:

JavaScript

```
confirmBtn.addEventListener('click', () => {
    // 1. Lấy giá trị từ các ô input
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    // 2. Logic xác thực (Validation)
    if (
        enteredReason.trim().length <= 0 || // Kiểm tra lý do rỗng
        enteredAmount <= 0 ||               // Kiểm tra số tiền <= 0
        enteredAmount.trim().length <= 0    // Kiểm tra số tiền rỗng
    ) {
        // Dừng hàm nếu dữ liệu không hợp lệ
        return; 
    }

    // 3. Xử lý khi dữ liệu hợp lệ (Tạm thời in ra console)
    console.log(enteredReason, enteredAmount);
});
```

### 4. Kết quả kiểm thử (Testing)

- **Trường hợp 1:** Bỏ trống "Reason" $\rightarrow$ Không in gì ra console (Hàm dừng).
    
- **Trường hợp 2:** Nhập "Amount" là 0 hoặc số âm $\rightarrow$ Không in gì ra console.
    
- **Trường hợp 3:** Nhập đầy đủ thông tin hợp lệ $\rightarrow$ Console hiển thị: `Food 12.99`.