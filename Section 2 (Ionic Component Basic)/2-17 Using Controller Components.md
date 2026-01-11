## Sử dụng Alert Controller (Hiển thị Thông báo)

Thay vì sử dụng hộp thoại `alert()` mặc định của trình duyệt (trông thiếu thẩm mỹ và không đồng bộ), Ionic cung cấp các **Controller Components** để tạo ra các thông báo chuẩn giao diện Mobile (Native-like).

### 1. Khái niệm Controller trong Ionic

- **Đặc điểm:** Các component có hậu tố `-controller` (như `ion-alert-controller`, `ion-action-sheet-controller`) thường không hiển thị trực tiếp lên giao diện khi được thêm vào HTML.
    
- **Chức năng:** Chúng cung cấp các phương thức logic (API) để tạo và điều khiển các thành phần giao diện động đè lên màn hình (overlays).
    

### 2. Quy trình thực hiện (Vanilla JS)

Để hiển thị một Alert trong môi trường không dùng Framework (Vanilla JS), ta thực hiện theo 3 bước:

#### Bước 1: Thêm Controller vào HTML

Thêm thẻ `ion-alert-controller` vào trong `ion-app`. Thẻ này sẽ vô hình trên giao diện nhưng cần thiết để kích hoạt chức năng.

HTML

```
<ion-app>
  <ion-alert-controller></ion-alert-controller>
</ion-app>
```

#### Bước 2: Tham chiếu trong JavaScript

Truy cập vào controller thông qua DOM selector.

JavaScript

```
const alertCtrl = document.querySelector('ion-alert-controller');
```

#### Bước 3: Gọi hàm tạo và hiển thị

Phương thức `.create()` của controller hoạt động **bất đồng bộ** (asynchronous) và trả về một **Promise**.

1. Gọi `alertCtrl.create({ ... })` với object cấu hình (message, header, buttons).
    
2. Sử dụng `.then()` để hứng kết quả trả về là phần tử Alert (`alertElement`).
    
3. Gọi `alertElement.present()` để thực sự hiển thị nó lên màn hình.
    

### 3. Mã nguồn chi tiết

Cập nhật logic xác thực trong file `app.js` để hiển thị thông báo khi dữ liệu không hợp lệ:

JavaScript

```
confirmBtn.addEventListener('click', () => {
  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;

  // Logic xác thực (Validation)
  if (
    enteredReason.trim().length <= 0 || 
    enteredAmount <= 0 || 
    enteredAmount.trim().length <= 0
  ) {
    // TẠO VÀ HIỂN THỊ ALERT
    alertCtrl.create({
      header: 'Invalid Inputs',           // Tiêu đề
      message: 'Please enter a valid reason and amount!', // Nội dung
      buttons: ['Okay']                   // Nút bấm (Mặc định sẽ đóng alert)
    }).then(alertElement => {
      // Hiển thị alert lên màn hình sau khi đã được tạo
      alertElement.present();
    });

    return; // Dừng hàm
  }

  // ... (Logic xử lý khi dữ liệu hợp lệ)
});
```

### 4. Ghi chú quan trọng

- **Giao diện thích ứng (Adaptive Styling):**
    
    - Ionic tự động điều chỉnh giao diện của Alert dựa trên thiết bị.
        
    - **iOS:** Alert giao diện chuẩn iOS.
        
    - **Android:** Alert giao diện Material Design.
        
- **Tương lai với Angular:** Khi sử dụng Angular ở các bài sau, việc này sẽ dễ dàng hơn nhờ cơ chế "Dependency Injection", không cần thao tác DOM thủ công (thêm thẻ vào HTML rồi querySelector) như trên.