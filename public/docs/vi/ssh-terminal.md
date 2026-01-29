# SSH Terminal

SSH Terminal trong Marix cung cấp trình giả lập terminal mạnh mẽ, đầy đủ tính năng để kết nối với máy chủ từ xa.

## Giao diện Terminal

![Giao diện Terminal](/terminal.png)

Sau khi kết nối qua SSH, bạn sẽ thấy:
- Trình giả lập terminal đầy đủ (sử dụng xterm.js)
- Nút chuyển đổi Terminal/SFTP ở trên cùng
- Dropdown chọn theme
- Nút kết nối lại

## Điều khiển Terminal

| Điều khiển | Chức năng |
|------------|-----------|
| Nút Terminal | Chuyển sang chế độ xem terminal |
| Nút SFTP | Chuyển sang trình duyệt file |
| Chọn theme | Thay đổi bảng màu terminal |
| ↺ Reconnect | Kết nối lại nếu bị ngắt |

## Sử dụng Terminal

1. **Gõ lệnh** giống như terminal SSH bình thường
2. Lệnh thực thi trên máy chủ từ xa
3. **Sao chép văn bản**: 
   - Chọn văn bản bằng chuột → Copy
   - Hoặc sử dụng `Ctrl+C`
4. **Dán văn bản**: 
   - Nhấp chuột phải → Paste
   - Hoặc sử dụng `Ctrl+V`

## Phím Tắt

| Phím tắt | Hành động |
|----------|-----------|
| `Ctrl+C` | Sao chép văn bản đã chọn |
| `Ctrl+V` | Dán từ clipboard |
| `Ctrl+L` | Xóa màn hình |
| `Tab` | Mở/Đóng Lịch sử Lệnh |

## Thay đổi Theme Terminal

1. Trong khi ở phiên terminal
2. Nhấp dropdown chọn theme (góc trên phải của terminal)
3. Duyệt các theme có sẵn (400+ tùy chọn)
4. Nhấp vào theme để áp dụng ngay

Các danh mục theme có sẵn:
- Cổ điển (Tango, Solarized, Monokai)
- Hiện đại (Dracula, One Dark, Nord)
- Độ tương phản cao
- Màu tùy chỉnh


## Mở Terminal Cục bộ

Mở terminal trên máy cục bộ mà không cần kết nối với máy chủ từ xa:

- Phím tắt: `Ctrl+Shift+T`
- Hữu ích để chạy lệnh cục bộ


## Trạng thái Kết nối

Tab hiển thị trạng thái kết nối:
- **Chỉ báo xanh**: Đã kết nối
- **Chỉ báo đỏ**: Đã ngắt kết nối
- **Chỉ báo vàng**: Đang kết nối

## Kết nối lại

Nếu kết nối của bạn bị ngắt:
Marix tự động kết nối lại SSH

Terminal bảo toàn lịch sử cuộn của bạn sau khi kết nối lại.
