## Sử dụng Grid để Bố cục Giao diện (Responsive Layout)

Để giải quyết vấn đề thành phần giao diện (như `ion-card`) bị giãn quá rộng trên màn hình lớn, Ionic cung cấp hệ thống lưới (`ion-grid`) mạnh mẽ, tương tự như Bootstrap, giúp ứng dụng hiển thị tốt trên cả thiết bị di động và máy tính để bàn.

### 1. Cấu trúc phân cấp của Grid

Hệ thống lưới trong Ionic được xây dựng dựa trên cấu trúc phân cấp chặt chẽ:

- **`ion-grid`**: Container bao ngoài cùng.
    
- **`ion-row`**: Các hàng nằm trong grid.
    
- **`ion-col`**: Các cột nằm trong hàng. **Nội dung hiển thị phải được đặt bên trong `ion-col`**.
    

### 2. Nguyên lý hoạt động

- **Hệ thống 12 cột (12-column layout)**: Mặc định, một hàng được chia thành 12 đơn vị chiều rộng.
    
- **Thuộc tính `size`**: Xác định số lượng cột mà một phần tử chiếm giữ (từ 1 đến 12).
    
    - Ví dụ: `size="6"` nghĩa là chiếm 6/12 cột (50% chiều rộng).
        

### 3. Điểm ngắt (Breakpoints) và Responsive

Để giao diện thích ứng với nhiều loại màn hình, ta sử dụng các hậu tố điểm ngắt thay vì chỉ dùng `size` cố định.

- **Các điểm ngắt phổ biến**:
    
    - `xs` (extra small): Điện thoại nhỏ.
        
    - `sm` (small): Điện thoại lớn.
        
    - `md` (medium): Máy tính bảng.
        
    - `lg` (large): Máy tính để bàn.
        
- **Cơ chế hoạt động**: Các thuộc tính này hoạt động theo nguyên tắc "tối thiểu" (min-width).
    
    - Ví dụ: `size-md="6"` nghĩa là: "Trên màn hình **Medium trở lên**, hãy chiếm 6 cột. Trên màn hình nhỏ hơn, hãy dùng mặc định (thường là 12 cột - full width)".
        

### 4. Kỹ thuật căn giữa (Offsetting)

Để căn giữa một cột có kích thước nhỏ hơn 12 (ví dụ `size="6"`) trên màn hình lớn:

- Ta cần tính toán khoảng trống thừa và chia đều cho hai bên.
    
- Công thức tính Offset:
    
    $$Offset = \frac{12 - Size}{2}$$
    
- Áp dụng với size="6":
    
    $$Offset = \frac{12 - 6}{2} = 3$$
    
- **Thuộc tính sử dụng**: `offset-md="3"` (Đẩy sang phải 3 cột trên màn hình Medium trở lên).
    

### 5. Mã nguồn thực hiện (Implementation)

Đoạn mã dưới đây minh họa cách bọc `ion-card` vào trong Grid để nó hiển thị toàn màn hình trên điện thoại, nhưng chỉ chiếm 50% và căn giữa trên máy tính bảng/PC.

HTML

```
<ion-content>
  <ion-grid>
    <ion-row>
      <ion-col size-md="6" offset-md="3">
        
        <ion-card>
          <ion-card-header>
            <ion-card-title>New Expense</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-item>
              <ion-label position="floating">Expense Reason</ion-label>
              <ion-input type="text"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Expense Amount</ion-label>
              <ion-input type="number"></ion-input>
            </ion-item>
          </ion-card-content>
        </ion-card>

      </ion-col>
    </ion-row>
  </ion-grid>
</ion-content>
```

### 6. Tổng kết

- Sử dụng **Grid (`ion-grid`)** khi muốn thay đổi cấu trúc hoặc kích thước phần tử.
    
- Sử dụng **Breakpoints (`md`, `lg`,...)** để tạo giao diện linh hoạt (Responsive).
    
- Sử dụng **Offset** để căn chỉnh vị trí.