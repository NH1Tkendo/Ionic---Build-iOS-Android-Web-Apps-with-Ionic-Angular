## Hoàn thiện Logic: Xóa dữ liệu và Tính tổng (Clear & Total Calculation)

Phần này tập trung vào hai chức năng quan trọng để hoàn thiện trải nghiệm người dùng: làm sạch form sau khi thao tác và hiển thị tổng chi phí tích lũy.

### 1. Chức năng Xóa dữ liệu (Clear Logic)

Để đảm bảo tính tái sử dụng (DRY - Don't Repeat Yourself), ta tạo một hàm riêng biệt để xử lý việc xóa dữ liệu trong các ô input.

#### a. Tạo hàm `clear`

Hàm này truy cập vào các ô input và đặt giá trị (`value`) của chúng về chuỗi rỗng.

JavaScript

```
const clear = () => {
  reasonInput.value = '';
  amountInput.value = '';
};
```

#### b. Xử lý sự kiện cho nút Hủy (Cancel Button)

Gán hàm `clear` vào sự kiện click của nút Cancel.

- **Lưu ý quan trọng:** Khi truyền hàm vào `addEventListener`, chỉ truyền **tham chiếu** (tên hàm `clear`), tuyệt đối **không** dùng dấu ngoặc đơn `clear()` (vì `clear()` sẽ thực thi hàm ngay lập tức khi code chạy, thay vì đợi sự kiện click).
    

JavaScript

```
// Đúng: Truyền tham chiếu
cancelBtn.addEventListener('click', clear);

// Sai: Thực thi ngay lập tức
// cancelBtn.addEventListener('click', clear()); 
```

#### c. Tích hợp vào luồng "Thêm chi phí"

Gọi hàm `clear()` ở cuối sự kiện click của nút **Confirm** để làm sạch form ngay sau khi dữ liệu đã được thêm thành công vào danh sách.

### 2. Tính toán và Hiển thị Tổng chi phí (Total Expenses)

#### a. Cập nhật cấu trúc HTML

Thêm một khu vực hiển thị mới bên dưới danh sách để hiện tổng tiền. Sử dụng thẻ `span` với ID cụ thể để JavaScript có thể tìm và cập nhật nội dung.

HTML

```
<ion-row>
  <ion-col>
    <p>Total Expenses: $<span id="total-expenses">0</span></p>
  </ion-col>
</ion-row>
```

#### b. Logic JavaScript

Cần thực hiện các bước sau trong file `app.js`:

1. **Tham chiếu phần tử:** Lấy thẻ `span` hiển thị tổng thông qua `querySelector`.
    
2. **Khởi tạo biến tổng:** Tạo biến `totalExpenses` bắt đầu từ 0 (dùng `let` vì giá trị sẽ thay đổi).
    
3. **Xử lý chuyển đổi kiểu dữ liệu:** Dữ liệu lấy từ `input.value` luôn là **Chuỗi (String)**. Cần chuyển sang **Số (Number)** trước khi cộng.
    
4. **Cập nhật DOM:** Gán giá trị mới vào `textContent` của thẻ span.
    

Công thức tính toán:

$$Total_{new} = Total_{old} + Amount$$

**Mã nguồn cập nhật đầy đủ:**

JavaScript

```
// 1. Tham chiếu và Khởi tạo
const totalExpensesOutput = document.querySelector('#total-expenses');
let totalExpenses = 0;

confirmBtn.addEventListener('click', () => {
    // ... (Phần validation code đã viết trước đó) ...

    // 2. Chuyển đổi và Tính toán
    // Sử dụng toán tử cộng một ngôi (+) trước biến chuỗi để ép kiểu sang số
    const enteredAmountNum = +enteredAmount;
    
    // Cộng dồn vào tổng
    totalExpenses += enteredAmountNum;

    // 3. Cập nhật giao diện (DOM)
    totalExpensesOutput.textContent = totalExpenses;

    // ... (Phần tạo và thêm ion-item vào danh sách) ...
    
    // 4. Xóa form sau khi hoàn tất
    clear();
});
```

### 3. Tổng kết luồng dữ liệu (Data Flow)

1. Người dùng nhập liệu $\rightarrow$ Nhấn **Add Expense**.
    
2. Hệ thống kiểm tra dữ liệu (Validate).
    
3. Hệ thống chuyển đổi chuỗi sang số và cộng vào biến `totalExpenses`.
    
4. Cập nhật số tổng mới lên giao diện (`span`).
    
5. Tạo và thêm `ion-item` mới vào danh sách hiển thị.
    
6. Gọi hàm `clear()` để xóa trắng các ô input, sẵn sàng cho lần nhập tiếp theo.