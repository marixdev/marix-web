# WebSocket Client

Kết nối đến máy chủ WebSocket cho giao tiếp hai chiều thời gian thực. Hoàn hảo cho việc kiểm thử API, debug các feed trực tiếp, hoặc giám sát dịch vụ WebSocket.

## Giao diện WebSocket Client

![WebSocket Interface](/websocket.png)

## Thêm Máy chủ WebSocket

1. Nhấp **"Add New Host"**
2. Chọn **Protocol**: WebSocket (WSS)
3. Điền thông tin:
   - **Name**: Tên hiển thị cho kết nối
   - **URL**: Địa chỉ máy chủ WebSocket
   - **Headers**: (tùy chọn) Header tùy chỉnh cho xác thực
4. Nhấp **Create**

### Định dạng URL

| Định dạng | Ví dụ |
|-----------|-------|
| Có protocol | `wss://api.example.com/ws` |
| Không có protocol | `api.example.com/ws` (tự động thêm `wss://`) |
| Có cổng | `wss://localhost:8080/socket` |
| Có đường dẫn | `wss://stream.example.com/v1/feed` |

> **Lưu ý:** Nếu không chỉ định protocol, Marix tự động thêm `wss://` cho kết nối WebSocket bảo mật.

## Kết nối

1. Nhấp đúp vào máy chủ WebSocket trong danh sách Hosts
2. Đợi kết nối (timeout: 15 giây)
3. Chỉ báo trạng thái hiển thị trạng thái kết nối

### Trạng thái Kết nối

| Trạng thái | Chỉ báo | Mô tả |
|------------|---------|-------|
| Connecting | 🟡 Vàng | Đang thiết lập kết nối |
| Connected | 🟢 Xanh | Sẵn sàng gửi/nhận |
| Disconnected | ⚪ Xám | Kết nối đã đóng |
| Error | 🔴 Đỏ | Kết nối thất bại |

## Gửi Tin nhắn

1. Nhập tin nhắn của bạn trong vùng nhập liệu ở phía dưới
2. Nhấn **Enter** hoặc nhấp **Send**
3. Tin nhắn đã gửi xuất hiện với mũi tên ↑ (xanh lá)

### Định dạng Tin nhắn được Hỗ trợ

- Văn bản thuần
- JSON (sẽ được định dạng để dễ đọc)
- Bất kỳ dữ liệu chuỗi nào

## Nhận Tin nhắn

- Tin nhắn đến xuất hiện tự động với mũi tên ↓ (tím)
- Tin nhắn JSON được tự động định dạng với thụt lề đúng
- Dấu thời gian hiển thị khi mỗi tin nhắn được nhận
- Lịch sử tin nhắn giữ tối đa 1000 tin nhắn mỗi phiên

## Điều khiển

| Điều khiển | Chức năng |
|------------|-----------|
| **Send** | Gửi tin nhắn đến máy chủ |
| **Clear** | Xóa tất cả tin nhắn khỏi chế độ xem |
| **Disconnect** | Đóng kết nối |
| **Reconnect** | Kết nối lại sau khi ngắt/lỗi |
| **Theme Selector** | Thay đổi theme màu của viewer |

## Phím tắt

| Phím tắt | Hành động |
|----------|-----------|
| `Enter` | Gửi tin nhắn |
| `Shift+Enter` | Xuống dòng mới trong tin nhắn |

## Tính năng

### Tự động Cuộn

- Được bật theo mặc định
- Tự động cuộn đến tin nhắn mới nhất
- Tắt để xem lại tin nhắn cũ hơn
- Số lượng tin nhắn hiển thị ở phía dưới

### Hỗ trợ Theme

- 400+ theme terminal có sẵn
- Nhấp vào bộ chọn theme ở header
- Theme áp dụng cho toàn bộ viewer
- Màu sắc thích ứng với theme sáng/tối

### Định dạng JSON

Khi nhận tin nhắn JSON:
```json
{"event":"update","data":{"id":1,"value":"test"}}
```

Marix tự động định dạng thành:
```json
{
  "event": "update",
  "data": {
    "id": 1,
    "value": "test"
  }
}
```

## Trường hợp Sử dụng

### Kiểm thử API

Kiểm thử WebSocket API trong quá trình phát triển:
- Gửi payload test
- Theo dõi phản hồi
- Debug vấn đề kết nối

### Giám sát Dữ liệu Trực tiếp

Giám sát các feed thời gian thực:
- Cập nhật giá cổ phiếu
- Ứng dụng chat
- Dữ liệu cảm biến IoT
- Sự kiện máy chủ game

### Debug

Debug các triển khai WebSocket:
- Xác minh định dạng tin nhắn
- Kiểm tra độ ổn định kết nối
- Kiểm thử logic kết nối lại

## Khắc phục Sự cố

### Connection Timeout

- Kiểm tra URL đúng
- Xác minh máy chủ đang chạy
- Kiểm tra cài đặt firewall/proxy
- Thử với protocol `wss://` rõ ràng

### Connection Refused

- Máy chủ có thể không chấp nhận kết nối
- Sai số cổng
- Vấn đề chứng chỉ SSL/TLS
- Máy chủ yêu cầu header xác thực

### Tin nhắn Không Gửi được

- Kiểm tra trạng thái kết nối là "Connected"
- Xác minh định dạng tin nhắn khớp với yêu cầu máy chủ
- Kiểm tra log máy chủ để tìm lỗi

### Ngắt kết nối Bất ngờ

- Máy chủ có thể đã đóng kết nối
- Gián đoạn mạng
- Idle timeout phía máy chủ
- Nhấp **Reconnect** để khôi phục kết nối
