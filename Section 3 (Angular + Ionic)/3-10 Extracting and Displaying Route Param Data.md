## Hiển thị Chi tiết Công thức (Displaying Recipe Details)

Bài học này hướng dẫn cách lấy ID từ URL của trang chi tiết, sử dụng ID đó để truy vấn dữ liệu từ Service và hiển thị thông tin lên giao diện người dùng.

### 1. Lấy tham số ID từ URL (Getting Route Params)

Để hiển thị đúng công thức, chúng ta cần lấy `recipeId` từ URL (ví dụ: `/recipes/r1`). Angular cung cấp `ActivatedRoute` để xử lý việc này.

- **ActivatedRoute**: Một dịch vụ chứa thông tin về tuyến đường (route) hiện tại đang được kích hoạt.
    
- **paramMap**: Một Observable chứa map của các tham số trên URL. Nó sẽ phát ra (emit) dữ liệu mới bất cứ khi nào các đoạn (segments) động trên URL thay đổi.
    

**Các bước thực hiện trong Component (TypeScript):**

1. Tiêm (Inject) `ActivatedRoute` vào constructor.
    
2. Trong `ngOnInit`, đăng ký theo dõi (subscribe) `paramMap`.
    
3. Kiểm tra sự tồn tại của tham số cần thiết (ví dụ: `'recipeId'`).
    
    - _Lưu ý:_ Tên tham số `'recipeId'` phải khớp chính xác với tên đã định nghĩa trong file routing (ví dụ: `path: ':recipeId'`).
        
4. Nếu tồn tại, trích xuất giá trị ID bằng phương thức `.get()`.
    

### 2. Tích hợp Service để lấy dữ liệu (Fetching Data via Service)

Sau khi có ID, ta sử dụng `RecipesService` đã tạo trước đó để lấy đối tượng công thức tương ứng.

1. Tiêm (Inject) `RecipesService` vào constructor.
    
2. Tạo một thuộc tính trong class để lưu trữ kết quả (ví dụ: `loadedRecipe`), nên định nghĩa kiểu dữ liệu rõ ràng (ví dụ: `Recipe | undefined`).
    
3. Gọi phương thức `getRecipe(recipeId)` từ Service và gán kết quả cho thuộc tính đã tạo.
    

**Ví dụ mã nguồn đầy đủ cho file `recipe-detail.page.ts`:**

TypeScript

```
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  // Biến để lưu trữ công thức được tải về
  loadedRecipe: Recipe | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService
  ) { }

  ngOnInit() {
    // Đăng ký theo dõi sự thay đổi của tham số URL
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        // Xử lý trường hợp không có ID (ví dụ: chuyển hướng - sẽ học sau)
        return;
      }
      const recipeId = paramMap.get('recipeId');
      // Sử dụng service để lấy công thức theo ID và lưu vào biến
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    });
  }
}
```

### 3. Hiển thị dữ liệu trên Template (Displaying Data in Template)

Sử dụng dữ liệu trong biến `loadedRecipe` để binding lên giao diện HTML bằng các component của Ionic.

- **Hình ảnh**: Sử dụng `<ion-img>` và property binding `[src]`.
    
- **Tiêu đề**: Sử dụng string interpolation `{{ }}`.
    
- **Danh sách thành phần**: Sử dụng `<ion-list>`, `<ion-item>` kết hợp với vòng lặp `*ngFor`.
    

**Ví dụ cấu trúc file `recipe-detail.page.html`:**

HTML

```
<ion-header>
  <ion-toolbar color="primary">
    <ion-title>{{ loadedRecipe?.title }}</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-grid no-padding>
    <ion-row>
      <ion-col no-padding>
        <ion-img [src]="loadedRecipe?.imageUrl"></ion-img>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        <h1 text-center>{{ loadedRecipe?.title }}</h1>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        <ion-list>
          <ion-item *ngFor="let ingredient of loadedRecipe?.ingredients">
            {{ ingredient }}
          </ion-item>
        </ion-list>
      </ion-col>
    </ion-row>
  </ion-grid>
</ion-content>
```

### 4. Cải thiện Giao diện với CSS Utilities (UI Improvements)

Ionic cung cấp các thuộc tính CSS tiện ích (CSS utility attributes) để điều chỉnh nhanh giao diện ngay trong thẻ HTML:

- `color="primary"`: Đặt màu nền chính cho `<ion-toolbar>` (áp dụng cho cả trang danh sách và trang chi tiết).
    
- `text-center`: Căn giữa văn bản (áp dụng cho thẻ `<h1>`).
    
- `no-padding`: Loại bỏ khoảng đệm mặc định. Áp dụng cho `<ion-grid>` và `<ion-col>` chứa hình ảnh để hình ảnh hiển thị sát lề màn hình.