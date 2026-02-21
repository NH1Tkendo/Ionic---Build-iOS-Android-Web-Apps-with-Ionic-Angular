## Hiển thị danh sách dữ liệu (Data List) trong Ionic

Bài học này hướng dẫn cách kết hợp các thành phần giao diện của Ionic với các tính năng xử lý dữ liệu của Angular và TypeScript để hiển thị một danh sách động (dynamic list) trong ứng dụng.

### Định nghĩa Mô hình Dữ liệu (Data Model)

Để đảm bảo tính nhất quán của dữ liệu trong toàn ứng dụng, chúng ta tạo một _mô hình (model)_ bằng TypeScript.

1. **Tạo tệp**: Tạo một tệp mới tên là `recipe.model.ts` trong thư mục `recipes`.
    
2. **Sử dụng Interface**: Khai báo một _giao diện (interface)_ để định nghĩa cấu trúc dữ liệu cho một công thức nấu ăn.
    

TypeScript

```
// recipe.model.ts
export interface Recipe {
  id: string;
  title: string;
  imageUrl: string;
  ingredients: string[];
}
```

### Tạo Dữ liệu Giả (Dummy Data)

Trong tệp logic của trang (`recipes.page.ts`), chúng ta sẽ tạo một mảng dữ liệu tạm thời dựa trên mô hình vừa định nghĩa.

1. **Nhập mô hình**: Nhập (import) `Recipe` từ tệp model.
    
2. **Khai báo thuộc tính**: Khai báo thuộc tính `recipes` là một mảng các đối tượng `Recipe` (`recipes: Recipe[]`).
    
3. **Khởi tạo dữ liệu**: Gán cho mảng một vài đối tượng dữ liệu mẫu (ví dụ: món Schnitzel và Spaghetti) với đầy đủ các trường `id`, `title`, `imageUrl`, và `ingredients`. _Lưu ý: Tạm thời sử dụng đường dẫn ảnh cố định (hardcoded URL), phần sử dụng camera sẽ được học sau._
    

TypeScript

```
// recipes.page.ts (snippet)
import { Recipe } from './recipe.model';
// ...
recipes: Recipe[] = [
  {
    id: 'r1',
    title: 'Schnitzel',
    imageUrl: 'https://example.com/schnitzel.jpg',
    ingredients: ['French Fries', 'Pork Meat', 'Salad']
  },
  // ... thêm các công thức khác
];
```

### Hiển thị Danh sách trên Giao diện (Template)

Quay lại tệp `recipes.page.html`, chúng ta sử dụng các thành phần danh sách của Ionic kết hợp với chỉ thị của Angular để lặp và hiển thị dữ liệu.

1. **Thành phần bao bọc**: Sử dụng `<ion-list>` làm thẻ chứa chính.
    
2. **Lặp dữ liệu**: Sử dụng chỉ thị `*ngFor` của Angular trên thẻ `<ion-item>` để lặp qua mảng `recipes`: `let recipe of recipes`.
    
3. **Thành phần hiển thị ảnh đại diện (Avatar)**:
    
    - Sử dụng thẻ `<ion-avatar>` để tạo khung ảnh tròn.
        
    - Đặt thuộc tính `slot="start"` để định vị nó ở bên trái của mục danh sách.
        
    - Bên trong, sử dụng thẻ `<ion-img>` (thẻ ảnh tối ưu của Ionic với tính năng tải lười biếng - lazy loading).
        
    - Dùng _ràng buộc thuộc tính (property binding)_ của Angular (`[src]`) để liên kết với đường dẫn ảnh: `[src]="recipe.imageUrl"`.
        
4. **Thành phần hiển thị văn bản**: Sử dụng `<ion-label>` để chứa tiêu đề công thức, và dùng _nội suy chuỗi (string interpolation)_ của Angular (`{{ }}`) để hiển thị: `{{ recipe.title }}`.
    

HTML

```
<ion-content>
  <ion-list>
    <ion-item *ngFor="let recipe of recipes">
      <ion-avatar slot="start">
        <ion-img [src]="recipe.imageUrl"></ion-img>
      </ion-avatar>
      <ion-label>{{ recipe.title }}</ion-label>
    </ion-item>
  </ion-list>
</ion-content>
```

### Kết luận

Bằng cách kết hợp sức mạnh của hệ thống _kiểu dữ liệu (typing)_ trong TypeScript, các _chỉ thị (directives)_ của Angular và bộ _thành phần giao diện (UI components)_ phong phú của Ionic, chúng ta đã dễ dàng tạo ra một danh sách hiển thị dữ liệu động và đẹp mắt.