## Thiết lập Dự án Ionic & Chuyển đổi cấu trúc Module

Hướng dẫn này giúp khởi tạo dự án Ionic mới và chuyển đổi từ cấu trúc mặc định hiện đại (**Standalone Components**) về cấu trúc truyền thống (**Module-based**) để tương thích với nội dung khóa học.

### 1. Khởi tạo Dự án

Nếu gặp lỗi khi tạo dự án theo video bài giảng, hãy thực hiện thủ công bằng dòng lệnh (Terminal/Command Prompt):

1. **Cài đặt Ionic CLI:**
    
    Bash
    
    ```
    npm install -g @ionic/cli
    ```
    
    _(Lưu ý: Trên macOS hoặc Linux, nếu gặp lỗi quyền truy cập, hãy thêm `sudo` vào trước câu lệnh)._
    
2. **Tạo dự án mới:**
    
    Bash
    
    ```
    ionic start
    ```
    

---

### 2. Chuyển đổi sang kiến trúc Module (Module-based Approach)

Các phiên bản Ionic mới mặc định sử dụng **thành phần độc lập (standalone components)**. Để theo dõi khóa học dễ dàng hơn, cần điều chỉnh dự án về cấu trúc sử dụng `NgModule`.

Thực hiện lần lượt các bước chỉnh sửa tệp tin trong thư mục `src` như sau:

#### Bước 1: Cập nhật `main.ts`

Chỉnh sửa tệp `main.ts` để khởi động ứng dụng thông qua `AppModule` thay vì bootstrap trực tiếp component.

**Nội dung thay thế:**

TypeScript

```
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { defineCustomElements } from 'ionicons/dist/loader';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.log(err));

// Gọi trình tải phần tử sau khi nền tảng đã được khởi động
defineCustomElements(window);
```

#### Bước 2: Tạo tệp định tuyến `app-routing.module.ts`

Tạo tệp mới tại đường dẫn `src/app/app-routing.module.ts` để quản lý các tuyến đường (routes).

**Nội dung:**

TypeScript

```
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './home/home.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

#### Bước 3: Tạo tệp Module chính `app.module.ts`

Tạo tệp mới tại đường dẫn `src/app/app.module.ts`. Đây là nơi khai báo các thành phần và module gốc của ứng dụng.

**Nội dung:**

TypeScript

```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {
  RouteReuseStrategy,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    IonicModule.forRoot(),
    IonicModule,
    RouterLink,
    RouterLinkActive,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

#### Bước 4: Chỉnh sửa `src/app/app.component.ts`

Mở tệp `app.component.ts` và tìm phần decorator `@Component(...)`.

- **Thao tác:** Xóa dòng `standalone: true`.
    

#### Bước 5: Dọn dẹp

- Xóa tệp `app.routes.ts` (vì đã chuyển sang dùng `app-routing.module.ts`).
    

> **Kết quả:** Dự án hiện tại đã có cấu trúc tương đồng với mã nguồn mẫu trong các bài giảng tiếp theo.