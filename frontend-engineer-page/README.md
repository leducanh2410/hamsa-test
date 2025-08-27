# Frontend Engineer Page

## Responsive Design System

Dự án này sử dụng hệ thống tự động chuyển hướng giữa desktop và mobile dựa trên thiết bị.

### Cách hoạt động

1. **File chính**: `index.html` - Trang desktop
2. **File mobile**: `indexSp.html` - Trang mobile 

### Logic phát hiện thiết bị

#### Trong `index.html` (Desktop):
- Phát hiện thiết bị mobile và chuyển hướng đến `indexSp.html`
- Tiêu chí phát hiện:
  - Màn hình ≤ 768px

#### Trong `indexSp.html` (Mobile):
- Phát hiện thiết bị desktop và chuyển về `index.html`
- Tiêu chí phát hiện:
  - Màn hình > 768px

### Tính năng



### Cách sử dụng

1. Mở `index.html` trong trình duyệt
2. Hệ thống sẽ tự động:
   - Hiển thị trang desktop nếu là máy tính
   - Chuyển hướng đến trang mobile nếu là điện thoại/tablet

### Responsive Breakpoints

- **Mobile**: ≤ 768px
- **Desktop**: > 768px


