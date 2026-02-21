## Chức năng Xóa dữ liệu và Điều hướng với Angular Router (Delete Functionality and Routing)

### 1. Tích hợp giữa Angular và Ionic (Angular & Ionic Integration)

- Bạn có thể tận dụng hoàn toàn các tính năng cốt lõi của Angular như chỉ thị `ngFor` để kết xuất DOM động `(dynamic DOM rendering)` thay vì phải tự viết logic bằng JavaScript thuần.
    
- Các thành phần đặc thù như **bộ điều khiển thông báo `(Alert Controller)`** trong các phiên bản Ionic mới không còn được bọc thành một component Angular riêng biệt (như `<ion-alert-controller>`). Thay vào đó, chúng được sử dụng theo một hướng tiếp cận lập trình `(programmatically)` tiện lợi hơn (sẽ được đi sâu vào phần sau).
    

### 2. Thêm nút Xóa vào Giao diện (Adding a Delete Button)

Để cho phép người dùng xóa một công thức `(recipe)`, chúng ta cần thêm một nút thao tác vào thanh công cụ `(toolbar)`.

- Dùng `ion-buttons` với thuộc tính `slot="primary"` để đặt nút ở cuối thanh công cụ (theo mặc định).
    
- Sử dụng `ion-icon` với biểu tượng thùng rác (từ _ionicons.com_).
    
- Đặt thuộc tính `slot="icon-only"` trên `ion-icon` để nút chỉ hiển thị biểu tượng mà không có chữ.
    

#### Mã nguồn giao diện (HTML):

HTML

```
<ion-buttons slot="primary">
  <ion-button (click)="onDeleteRecipe()">
    <ion-icon name="trash" slot="icon-only"></ion-icon>
  </ion-button>
</ion-buttons>
```

### 3. Cập nhật Logic Xóa trong Dịch vụ (Service Logic)

Trong tệp dịch vụ `(recipe service)`, tạo một phương thức để nhận ID của công thức cần xóa và cập nhật lại mảng dữ liệu.

- Sử dụng hàm `filter()` mặc định của JavaScript.
    
- Hàm `filter()` sẽ duyệt qua từng phần tử; nếu trả về `true` thì giữ lại, `false` thì loại bỏ.
    
- **Logic:** Giữ lại tất cả các phần tử có ID _khác_ với ID truyền vào.
    

#### Mã nguồn dịch vụ (TypeScript):

TypeScript

```
deleteRecipe(recipeId: string) {
  // Giữ lại các công thức có ID không trùng khớp với ID cần xóa
  this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
}
```

### 4. Xử lý Sự kiện và Điều hướng (Event Handling & Navigation)

Khi người dùng nhấn nút xóa, dữ liệu trang hiện tại sẽ không còn, do đó chúng ta cần đưa người dùng quay lại trang danh sách chính.

- Trong component chi tiết, tạo hàm `onDeleteRecipe()`.
    
- Truyền ID của công thức đang được tải `(loaded recipe)` vào hàm xóa của dịch vụ.
    
- Tiêm `(inject)` bộ định tuyến tiêu chuẩn của Angular `(Angular router)` từ gói `@angular/router`.
    
- Gọi hàm `Maps()` để chuyển hướng ứng dụng.
    

#### Mã nguồn component (TypeScript):

TypeScript

```
import { Router } from '@angular/router';

// Tiêm dịch vụ và Router thông qua constructor
constructor(
  private recipesService: RecipesService, 
  private router: Router
) {}

onDeleteRecipe() {
  // 1. Gọi dịch vụ để xóa công thức khỏi mảng dữ liệu
  this.recipesService.deleteRecipe(this.loadedRecipe.id);
  
  // 2. Điều hướng người dùng quay lại trang danh sách công thức
  this.router.navigate(['/recipes']);
}
```