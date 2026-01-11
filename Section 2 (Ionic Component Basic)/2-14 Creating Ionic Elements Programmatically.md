## Hiển thị Danh sách Chi tiêu (Rendering Expense List)

Sau khi lấy được dữ liệu đầu vào, bước tiếp theo là hiển thị chúng dưới dạng danh sách ngay bên dưới form nhập liệu. Chúng ta tiếp tục sử dụng hệ thống Grid để kiểm soát giao diện.

### 1. Cấu trúc HTML cho Danh sách

Để đảm bảo danh sách hiển thị đẹp và không bị quá rộng trên màn hình lớn, ta đặt nó vào trong một `ion-row` và `ion-column` mới bên trong `ion-grid` đã có.

- **`ion-list`**: Component dùng để hiển thị các phần tử dạng danh sách dọc.
    
- **ID**: Cần gán ID (ví dụ: `expenses-list`) để JavaScript có thể tham chiếu và thao tác.
    

HTML

```
<ion-row>
  <ion-col size-md="6" offset-md="3">
    <ion-list id="expenses-list">
      </ion-list>
  </ion-col>
</ion-row>
```

### 2. Logic JavaScript (DOM Manipulation)

Chúng ta sử dụng các API tiêu chuẩn của DOM (không phải tính năng riêng của Ionic) để tạo và thêm phần tử mới. Điều này chứng minh rằng Ionic Components thực chất là các thẻ HTML chuẩn.

#### Bước 1: Tham chiếu đến danh sách

Trong file `app.js`, lấy tham chiếu đến thẻ `ion-list` vừa tạo:

JavaScript

```
const expensesList = document.querySelector('#expenses-list');
```

#### Bước 2: Tạo phần tử động (`ion-item`)

Cập nhật logic bên trong sự kiện `click` của nút **Confirm** (sau khi đã validate dữ liệu thành công):

1. **Tạo phần tử mới**: Sử dụng `document.createElement('ion-item')`.
    
    - _Lưu ý về `ion-item`:_ Đây là một component đa năng. Trước đó nó được dùng để bọc Input, giờ nó được dùng để hiển thị một dòng trong danh sách.
        
2. **Gán nội dung**: Thiết lập thuộc tính `textContent` cho phần tử mới.
    
3. **Thêm vào DOM**: Sử dụng `appendChild` để đưa item mới vào trong `expensesList`.
    

JavaScript

```
// ... (Sau khi validation thành công)

// 1. Tạo phần tử ion-item mới
const newItem = document.createElement('ion-item');

// 2. Gán nội dung văn bản (Reason + Amount)
newItem.textContent = enteredReason + ': $' + enteredAmount;

// 3. Thêm phần tử mới vào danh sách hiển thị
expensesList.appendChild(newItem);

// ...
```

### 3. Bản chất kỹ thuật (Core Concept)

- **Vanilla JS & Ionic**: Đoạn code trên hoàn toàn là JavaScript thuần (Vanilla JS). Nó tương tác với `ion-item` và `ion-list` hệt như cách tương tác với thẻ `div` hay `ul/li`.
    
- **Vai trò của Framework (Angular/React/Vue)**: Sau này khi dùng Framework, chúng ta sẽ không viết `document.createElement` hay `appendChild` thủ công. Framework sẽ tự động xử lý việc này (Data Binding). Tuy nhiên, hiểu được cơ chế bên dưới giúp ta thấy rõ bản chất của Ionic là bộ **Web Components** chuẩn, được trình duyệt hỗ trợ trực tiếp.