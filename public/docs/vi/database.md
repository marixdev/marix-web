# Database Client

Marix bao gồm database client tích hợp để kết nối và quản lý máy chủ cơ sở dữ liệu trực tiếp từ ứng dụng.

## Giao diện Database Client

![Giao diện Database Client](/database.png)

---

## Cơ sở Dữ liệu Được Hỗ trợ

| Cơ sở dữ liệu | Giao thức | Tính năng |
|---------------|-----------|-----------|
| **MySQL / MariaDB** | `mysql` | Trình soạn thảo truy vấn, trình duyệt bảng, trình xem dữ liệu, trình kiểm tra cấu trúc |
| **PostgreSQL** | `postgresql` | Trình soạn thảo truy vấn, trình duyệt bảng, trình xem dữ liệu, trình kiểm tra cấu trúc |
| **MongoDB** | `mongodb` | Trình duyệt collection, trình xem document, giao diện truy vấn |
| **Redis** | `redis` | Trình duyệt key-value, giao diện lệnh |
| **SQLite** | `sqlite` | Hỗ trợ file cục bộ, trình soạn thảo SQL đầy đủ |

---

## Thêm Máy chủ Cơ sở Dữ liệu

1. Nhấp nút **+ Add** trong thanh bên
2. Chọn tab **Database** (hoặc biểu tượng cơ sở dữ liệu)
3. Chọn loại cơ sở dữ liệu của bạn

### MySQL / MariaDB / PostgreSQL

| Trường | Mô tả | Ví dụ |
|--------|-------|-------|
| Name | Tên hiển thị | `Production MySQL` |
| Host | Hostname hoặc IP máy chủ | `db.example.com` |
| Port | Cổng cơ sở dữ liệu | `3306` (MySQL) / `5432` (PostgreSQL) |
| Username | Người dùng cơ sở dữ liệu | `root` |
| Password | Mật khẩu người dùng | `••••••••` |
| Database | Cơ sở dữ liệu mặc định (tùy chọn) | `myapp_production` |
| SSL | Bật SSL/TLS | ☑️ Đã bật |

### MongoDB

| Trường | Mô tả | Ví dụ |
|--------|-------|-------|
| Name | Tên hiển thị | `MongoDB Atlas` |
| Connection String | URI MongoDB đầy đủ | `mongodb+srv://user:pass@cluster.mongodb.net/` |
| Host | Hostname máy chủ | `localhost` |
| Port | Cổng MongoDB | `27017` |
| Database | Cơ sở dữ liệu mặc định | `myapp` |

### Redis

| Trường | Mô tả | Ví dụ |
|--------|-------|-------|
| Name | Tên hiển thị | `Redis Cache` |
| Host | Hostname máy chủ | `redis.example.com` |
| Port | Cổng Redis | `6379` |
| Password | Mật khẩu xác thực (tùy chọn) | `••••••••` |
| Database | Số cơ sở dữ liệu | `0` |

### SQLite

| Trường | Mô tả | Ví dụ |
|--------|-------|-------|
| Name | Tên hiển thị | `Local SQLite` |
| File Path | Đường dẫn đến file .db | `/home/user/app.db` |

---

## Giao diện Database Client

### 📊 Tab Data

Duyệt và xem dữ liệu bảng:

- **Chọn cơ sở dữ liệu** từ dropdown (nếu có nhiều)
- **Nhấp vào bảng** trong thanh bên để xem dữ liệu
- **Phân trang** - Điều hướng qua các hàng (mặc định 100 mỗi trang)
- **Sắp xếp cột** - Nhấp vào tiêu đề cột để sắp xếp
- **Lọc nhanh** - Tìm kiếm trong dữ liệu hiển thị

### ⚡ Tab Query

Viết và thực thi truy vấn SQL với:

- **Highlight cú pháp** - Từ khóa SQL, chuỗi, số
- **Thực thi** - Chạy truy vấn với `Ctrl+Enter` hoặc nút Execute
- **Lưới kết quả** - Xem kết quả truy vấn trong bảng
- **Xuất** - Tải xuống kết quả dưới dạng CSV hoặc JSON
- **Thời gian thực thi** - Xem truy vấn mất bao lâu

### 🏗️ Tab Structure

Kiểm tra schema bảng hiển thị:

- Tên cột và kiểu dữ liệu
- Primary key, foreign key, ràng buộc unique
- Cột nullable và giá trị mặc định
- Cài đặt auto-increment

### 🔗 Tab ERD

Xem Sơ đồ Quan hệ Thực thể:

- Biểu diễn trực quan của các bảng và mối quan hệ
- Kết nối foreign key được hiển thị dưới dạng đường
- Kéo và thu phóng để điều hướng schema lớn
- Xuất dưới dạng hình ảnh (PNG)

---

## Phím Tắt

| Phím tắt | Hành động |
|----------|-----------|
| `Ctrl/Cmd + Enter` | Thực thi truy vấn |
| `Ctrl/Cmd + S` | Lưu truy vấn vào file |
| `Ctrl/Cmd + O` | Mở truy vấn từ file |
| `Ctrl/Cmd + Shift + F` | Định dạng SQL |
| `Escape` | Hủy truy vấn đang chạy |

---

## Bảo mật Kết nối

### Mã hóa SSL/TLS

Bật checkbox **SSL** khi thêm máy chủ. Đối với chứng chỉ tùy chỉnh:

- Đường dẫn CA Certificate
- Đường dẫn Client Certificate (tùy chọn)
- Đường dẫn Client Key (tùy chọn)

### SSH Tunnel

Kết nối qua SSH tunnel:

1. Đầu tiên thêm máy chủ SSH trong Marix
2. Khi thêm cơ sở dữ liệu, bật **SSH Tunnel**
3. Chọn máy chủ SSH để tunnel qua

---

## Thực hành Tốt nhất

1. **Sử dụng Tài khoản Chỉ đọc** - Tạo người dùng cơ sở dữ liệu với quyền hạn chế
2. **Giới hạn Tập kết quả** - Luôn sử dụng `LIMIT` để tránh tải quá nhiều dữ liệu
3. **Kiểm tra Trước khi Thực thi** - Với `UPDATE` hoặc `DELETE`, chạy `SELECT` trước
4. **Sử dụng Transaction** - Cho các thao tác quan trọng, bọc trong transaction

---

## Khắc phục Sự cố

| Vấn đề | Giải pháp |
|--------|-----------|
| Kết nối Thất bại | Kiểm tra host/port, thông tin đăng nhập, firewall, cài đặt SSL |
| Truy vấn Timeout | Thêm LIMIT, kiểm tra index, kiểm tra tải máy chủ |
| Permission Denied | Kiểm tra quyền, quyền truy cập cơ sở dữ liệu, liên hệ admin |
| Lỗi SSL Certificate | Tắt SSL, kiểm tra tính hợp lệ chứng chỉ, thêm CA cert |
