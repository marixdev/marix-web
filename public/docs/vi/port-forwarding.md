# Port Forwarding (SSH Tunnel)

SSH tunnel định tuyến lưu lượng an toàn qua kết nối SSH.

## Giao diện Port Forwarding

![Giao diện Port Forwarding](/portfoward.png)

## Các Loại Port Forwarding

| Loại | Hướng | Trường hợp Sử dụng |
|------|-------|-------------------|
| **Local** | Remote → Local | Truy cập dịch vụ từ xa qua cổng cục bộ |
| **Remote** | Local → Remote | Expose dịch vụ cục bộ ra mạng từ xa |
| **Dynamic** | SOCKS Proxy | Tạo SOCKS proxy qua SSH |

## Mở Port Forwarding

Nhấp **"Port Forward"** trong thanh bên.

## Tạo Port Forward

### Bước 1: Mở Hộp thoại
Nhấp nút **"Add Forward"**

### Bước 2: Cấu hình

| Trường | Mô tả | Ví dụ |
|--------|-------|-------|
| Name | Tên mô tả | "MySQL to localhost" |
| Type | Local, Remote, hoặc Dynamic | Local |
| Server | Máy chủ SSH để tunnel qua | My VPS |
| Local Host | Địa chỉ bind cục bộ | 127.0.0.1 |
| Local Port | Số cổng cục bộ | 3307 |
| Remote Host | Đích từ xa | 127.0.0.1 |
| Remote Port | Cổng từ xa | 3306 |

### Bước 3: Lưu
Nhấp **"Add"** hoặc **"Save"**

## Ví dụ Trường hợp Sử dụng

### Local Forward: Truy cập MySQL Từ xa

Truy cập cơ sở dữ liệu MySQL của máy chủ từ máy cục bộ:

| Cài đặt | Giá trị |
|---------|---------|
| Type | Local |
| Local | 127.0.0.1:3307 |
| Remote | 127.0.0.1:3306 |

**Sử dụng:** Kết nối tới `localhost:3307` để đến MySQL của máy chủ.

### Remote Forward: Expose Ứng dụng Cục bộ

Cho phép máy chủ truy cập máy chủ phát triển cục bộ của bạn:

| Cài đặt | Giá trị |
|---------|---------|
| Type | Remote |
| Local | 127.0.0.1:3000 |
| Remote | 0.0.0.0:8080 |

**Sử dụng:** Cổng 8080 của máy chủ kết nối tới localhost:3000 của bạn.

### Dynamic: SOCKS Proxy

Tạo SOCKS5 proxy để duyệt web qua máy chủ:

| Cài đặt | Giá trị |
|---------|---------|
| Type | Dynamic |
| Local | 127.0.0.1:1080 |

**Sử dụng:** Cấu hình ứng dụng sử dụng SOCKS5 proxy tại `localhost:1080`.

## Quản lý Port Forward

### Bắt đầu
1. Tìm forward trong danh sách
2. Nhấp nút **Start** (▶)
3. Trạng thái thay đổi thành "Connected"

### Dừng
1. Tìm forward đang chạy
2. Nhấp nút **Stop** (■)
3. Trạng thái thay đổi thành "Disconnected"

### Sửa
1. **Dừng** forward nếu đang chạy
2. Nhấp nút **Edit** (bút chì)
3. Sửa đổi cài đặt
4. Nhấp **Save**

### Xóa
1. Dừng forward nếu đang chạy
2. Nhấp nút **Delete** (thùng rác)
3. Xác nhận xóa

## Giám sát Trạng thái

Danh sách hiển thị:
- **Chỉ báo trạng thái**: Xanh = đã kết nối, Đỏ = lỗi
- **Số kết nối**: Các kết nối đang hoạt động
- **Bytes đã truyền**: Lưu lượng vào/ra

## Trường hợp Sử dụng Phổ biến

| Dịch vụ | Cổng Cục bộ | Cổng Từ xa | Loại |
|---------|-------------|------------|------|
| MySQL | 3307 | 3306 | Local |
| PostgreSQL | 5433 | 5432 | Local |
| Redis | 6380 | 6379 | Local |
| MongoDB | 27018 | 27017 | Local |
| Web App | 8080 | 80 | Local |
| Jupyter | 8889 | 8888 | Local |

## Khắc phục Sự cố

### Cổng Đã Được Sử dụng
- Chọn cổng cục bộ khác
- Kiểm tra xem ứng dụng khác có đang sử dụng cổng đó không
- Dừng các dịch vụ xung đột

### Kết nối Bị Từ chối
- Xác minh dịch vụ từ xa đang chạy
- Kiểm tra firewall trên máy chủ
- Đảm bảo host/port từ xa chính xác

### Tunnel Bị Ngắt
- Kiểm tra độ ổn định kết nối SSH
- Máy chủ có thể có cài đặt timeout
- Cân nhắc sử dụng keep-alive
