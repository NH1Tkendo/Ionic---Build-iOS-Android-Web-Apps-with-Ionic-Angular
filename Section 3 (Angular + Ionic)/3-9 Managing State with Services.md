## Quản lý Trạng thái với Angular Service (State Management)

### Khởi tạo Dịch vụ (Service)

- Dịch vụ (Service) trong Angular được sử dụng để lưu trữ và quản lý dữ liệu tập trung, giúp các thành phần (components) khác nhau có thể chia sẻ thông tin mà không cần truyền trực tiếp cho nhau.
    
- **Cách tạo**: Sử dụng giao diện dòng lệnh (CLI) của Ionic.
    ```
    ionic generate service recipes/recipes
    ```

- **Phạm vi hoạt động**: Service mới được tạo sẽ tự động có decorator `@Injectable({ providedIn: 'root' })`. Điều này đảm bảo nó được cung cấp trên toàn ứng dụng (application-wide), nghĩa là mọi trang hoặc thành phần đều sử dụng chung **một bản thể duy nhất (singleton instance)** của service này. Nếu dữ liệu thay đổi, nó sẽ được cập nhật đồng bộ ở mọi nơi.
    

### Cấu hình Dữ liệu và Phương thức trong Service

Thay vì lưu trữ dữ liệu tại trang danh sách, ta chuyển nó vào Service và kiểm soát quyền truy cập.

- **Bảo mật dữ liệu**: Đặt mảng chứa danh sách công thức `recipes` thành thuộc tính riêng tư (`private`) để ngăn chặn việc chỉnh sửa trực tiếp từ bên ngoài.
    
- **Phương thức lấy toàn bộ danh sách `getAllRecipes()`**:
    
    - Trả về một bản sao của mảng `recipes` thay vì mảng gốc.
        
    - **Lý do**: Trong JavaScript, mảng và đối tượng là các kiểu tham chiếu (reference types). Việc trả về bản sao giúp tránh tình trạng mảng gốc bị vô tình chỉnh sửa từ bên trong component.
        
    - **Kỹ thuật**: Sử dụng toán tử trải (spread operator `...`) để sao chép mảng.
        
- **Phương thức lấy một mục cụ thể `getRecipe(recipeId)`**:
    
    - Nhận vào một ID và trả về đối tượng công thức tương ứng.
        
    - Sử dụng phương thức `find()` mặc định của mảng trong JavaScript để lặp và tìm phần tử có ID trùng khớp.
        
    - Tương tự như trên, sử dụng toán tử trải (spread operator) để trả về một bản sao của đối tượng tìm được.
        

**Mã nguồn minh họa (RecipesService):**

TypeScript

```
// recipes.service.ts
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model'; // Import mô hình dữ liệu

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [ /* Dữ liệu công thức ở đây */ ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes]; // Trả về bản sao của mảng
  }

  getRecipe(recipeId: string) {
    const foundRecipe = this.recipes.find(recipe => recipe.id === recipeId);
    return { ...foundRecipe }; // Trả về bản sao của đối tượng
  }
}
```

### Tiêm (Inject) Service vào Thành phần Trang (Page Component)

Để sử dụng Service vừa tạo bên trong trang hiển thị (ví dụ: `RecipesPage`), chúng ta cần áp dụng cơ chế Tiêm phụ thuộc (Dependency Injection).

- **Thực hiện tiêm (Inject)**: Khai báo Service dưới dạng một thuộc tính riêng tư (`private`) ngay bên trong hàm khởi tạo (constructor) của lớp. Đây là một lối tắt cú pháp của TypeScript.
    
- **Khởi tạo dữ liệu**: Sử dụng vòng đời `ngOnInit` (một nơi lý tưởng để khởi tạo) để gọi hàm `getAllRecipes()` từ Service và gán nó vào một biến cục bộ của trang để hiển thị lên giao diện.
    

**Mã nguồn minh họa (RecipesPage):**

TypeScript

```
// recipes.page.ts
import { Component, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[]; // Ban đầu là undefined

  // Tiêm RecipesService vào component
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    // Gán dữ liệu từ Service vào biến cục bộ khi component khởi tạo
    this.recipes = this.recipesService.getAllRecipes();
  }
}
```