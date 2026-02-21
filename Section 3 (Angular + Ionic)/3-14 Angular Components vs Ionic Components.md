## Quản lý Thành phần (Component) và So sánh Angular với Ionic

### Hoàn thiện thiết lập ứng dụng

- **Xử lý ngoại lệ:** Bổ sung logic **chuyển hướng (redirect)** trong trường hợp người dùng truy cập vào một trang mà không có ID công thức hợp lệ trên URL.
    
- **Bản chất cốt lõi:** Việc kết hợp Angular và Ionic mang lại rất nhiều tiện ích, nhưng về bản chất, đây vẫn là một ứng dụng Angular thông thường được bổ sung thêm các tính năng của Ionic.
    

### Tạo và sử dụng Thành phần Angular thuần

- Mặc dù đang sử dụng Ionic, bạn vẫn có thể tạo các **thành phần (component)** Angular tiêu chuẩn (không phải là một **trang (page)** hoàn chỉnh) để tái sử dụng mã nguồn.
    
- Sử dụng **giao diện dòng lệnh (CLI)** của Ionic để tự động tạo: `ionic generate component recipes/recipe-item`.
    
- Tách đoạn mã HTML hiển thị (ví dụ: `<ion-item>`) từ trang chính sang **mẫu (template)** của thành phần mới tạo.
    
- Định nghĩa luồng dữ liệu truyền vào từ bên ngoài bằng cách sử dụng **trình trang trí (decorator)** `@Input()`.
    
- Việc khai báo thành phần mới phải được thực hiện trong đúng **mô-đun (module)** sử dụng nó (ví dụ: `recipes.module.ts`), điều này thường được Ionic CLI tự động xử lý.
    

### Mã nguồn

Dưới đây là mô phỏng cách thiết lập thành phần con và gọi nó trong trang chính:

TypeScript

```
// Trong tệp: recipe-item.component.ts
import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model'; // Khai báo kiểu dữ liệu

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent {
  // Biến này có thể được liên kết (bind) dữ liệu từ component cha
  @Input() recipeItem: Recipe; 
}
```

HTML

```
<app-recipe-item 
  *ngFor="let recipe of recipes" 
  [recipeItem]="recipe">
</app-recipe-item>
```

### Phân biệt Thành phần Angular và Thành phần Ionic

Để hiểu rõ cách hai hệ thống thành phần này tương tác trong dự án, hãy xem bảng so sánh sau:

|**Tiêu chí**|**Thành phần Angular (Angular Component)**|**Thành phần Ionic (Ionic Web Component)**|
|---|---|---|
|**Cách tạo ra**|Do lập trình viên tự định nghĩa thông qua trình trang trí `@Component`.|Là các thành phần dựng sẵn do thư viện Ionic cung cấp.|
|**Khả năng tùy chỉnh**|Hoàn toàn kiểm soát và có thể chỉnh sửa tự do mã nguồn.|Là mã nguồn mở nhưng không được phép chỉnh sửa trực tiếp vào mã lõi.|
|**Môi trường hoạt động**|Chỉ có thể sử dụng bên trong **mẫu (template)** của một ứng dụng Angular.|Có thể sử dụng ở bất kỳ đâu, trong bất kỳ framework nào nhờ sử dụng công nghệ web bản địa.|
|**Cơ chế kết xuất**|Angular chịu trách nhiệm kết xuất (render) nội dung ra **mô hình đối tượng tài liệu (DOM)**.|Lõi là các **thành phần web (web components)**, được gói (wrap) nhẹ lại bằng `@ionic/angular` để dễ sử dụng trong dự án.|