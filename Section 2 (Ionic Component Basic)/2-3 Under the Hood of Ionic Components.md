## Cách sử dụng và Cấu trúc của Ionic Components

### 1. Cách sử dụng cơ bản (Usage)

![[IonicComponent.png]]
Khi thư viện Ionic đã được import vào dự án, bạn có quyền truy cập vào các thành phần cốt lõi (core components).

- **Cú pháp**: Sử dụng giống như các thẻ HTML thông thường (regular HTML elements).
    
- **Ví dụ**: `ion-button`
    
    - Đây là thành phần bao bọc (wrap) thẻ `<button>` gốc của HTML.
        
    - Được thêm sẵn các kiểu dáng (styling) và chức năng (functionality).
        

#### Cấu hình Component

Các Web Components của Ionic không chỉ là các phần tử được tạo kiểu sẵn mà còn chứa logic JavaScript. Chúng có thể được cấu hình thông qua:

- **Thuộc tính (Attributes)**: Thiết lập trực tiếp trên thẻ HTML (tương tự `class`, `id`...).
    
- **Thuộc tính đối tượng (Properties)**: Thiết lập thông qua lập trình (programmatically).
    
- **Tài liệu tham khảo**: [Ionic Official Docs](https://ionicframework.com/docs) là nơi tra cứu chính xác nhất các thuộc tính (như `fill`, `color`,...) cho từng component.
    

#### Sự kiện (Events)

Các thành phần Ionic có thể phát ra (emit) các sự kiện:

- Hỗ trợ các sự kiện chuẩn.
    
- **Sự kiện tùy chỉnh (Custom Events)**: Ví dụ `ionChange` cho các dropdown menu.
    

### 2. Cấu tạo bên trong (Under the hood)

![[How-Ionic-Web-Component-Work.png]]
Một Ionic Component thực chất là một **Web Component**, được cấu thành từ 3 trụ cột chính của Front-end:

#### A. HTML (Cấu trúc)

- Được xây dựng từ các thẻ HTML thuần (Vanilla HTML elements).
    
- Có thể bao gồm các Web Component khác lồng nhau.
    
- Tầng dưới cùng luôn là HTML thuần.
    

#### B. CSS (Giao diện)

- Chứa các quy tắc định kiểu dáng.
    
- **Biến CSS (CSS Variables)**: Sử dụng cú pháp `var(--name)`.
    
    - Giúp dễ dàng tùy chỉnh giao diện (Theming) từ bên ngoài.
        
    - Không cần can thiệp sâu vào code gốc.
        

#### C. JavaScript (Logic)

- Điều khiển hành vi của component.
    
- Xử lý các logic hiển thị (ví dụ: đổi màu, đổi kiểu nút).
    
- Đóng gói toàn bộ thành một đối tượng JavaScript để thêm vào DOM.
    

#### Công nghệ hỗ trợ

- **Shadow DOM**: Kỹ thuật đóng gói (encapsulation) giúp ngăn chặn CSS của component bị rò rỉ ra ngoài hoặc bị ảnh hưởng bởi CSS toàn cục của ứng dụng.
    
- **Polyfills**: Ionic tự động tải các bản vá lỗi để đảm bảo Web Components hoạt động tốt trên cả các trình duyệt cũ không hỗ trợ chuẩn này mặc định.
    

### 3. Mã nguồn và Công cụ (Source Code & Tools)

#### Stencil

- **Định nghĩa**: Một công cụ (compiler) do đội ngũ Ionic phát triển.
    
- **Chức năng**: Dùng để xây dựng các Web Components của Ionic một cách dễ dàng hơn, sau đó biên dịch ra Web Components chuẩn (vanilla web components).
    
- **Ngôn ngữ**: Sử dụng TypeScript (`.tsx`).
    

#### Khám phá mã nguồn (Open Source)

Bạn có thể tham khảo mã nguồn của Ionic trên GitHub để hiểu rõ cách hoạt động:

- **Repository**: `ionic-team/ionic`.
    
- **Thư mục quan trọng**: `core` (chứa source code các component).
    
- **Cách tra cứu**:
    
    - Tìm file `.tsx` của component (ví dụ: `ion-button`).
        
    - Tại đây có thể xem trực tiếp các `properties` (như `disabled`, `type`, `color`) và logic xử lý gốc.
        
