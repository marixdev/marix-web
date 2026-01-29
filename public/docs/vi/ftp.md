# Truyền File FTP/FTPS

Marix hỗ trợ giao thức FTP và FTPS để kết nối với các máy chủ file không hỗ trợ SSH.

## Bố cục Giao diện

![Giao diện FTP](/ftp.png)

## Thêm Máy chủ FTP

1. Nhấp **"Add New Host"**
2. Chọn **Protocol**: FTP hoặc FTPS
3. Điền vào:
   - **Host/IP**: Địa chỉ máy chủ FTP
   - **Port**: 21 (FTP) hoặc 990 (FTPS)
   - **Username**: Tên người dùng FTP
   - **Password**: Mật khẩu FTP
4. Nhấp **Create**

## FTP vs FTPS

| Tính năng | FTP | FTPS |
|-----------|-----|------|
| Mã hóa | Không có | TLS/SSL |
| Cổng Mặc định | 21 | 990 |
| Bảo mật | Thấp | Cao |
| Trường hợp Sử dụng | Hệ thống cũ | Truyền file an toàn |

> **Khuyến nghị**: Sử dụng FTPS khi có thể để truyền file được mã hóa.

## Kết nối với FTP

1. Nhấp đúp vào máy chủ FTP trong danh sách Hosts
2. Kết nối mở trực tiếp ở **chế độ trình duyệt file**
3. Không có terminal (FTP chỉ dùng để truyền file)

## Thao tác File

Tất cả thao tác file hoạt động giống như SFTP:

### Truyền File
- **Kéo và thả** để truyền giữa local và remote
- **Nhấp chuột phải** → Download/Upload

### Quản lý File
- **Tạo thư mục**: Nhấp chuột phải → New Folder
- **Đổi tên file**: Nhấp chuột phải → Rename
- **Xóa file**: Nhấp chuột phải → Delete

### Điều hướng
- Sử dụng các nút thanh công cụ: Back, Forward, Up, Home
- Nhấp đúp vào thư mục để vào
- Sử dụng tìm kiếm để lọc file

## Hạn chế

FTP không hỗ trợ:
- **chmod** (thay đổi quyền)
- **Symbolic link**
- **Chỉnh sửa file** (phải tải xuống, sửa, tải lại lên)

## Chế độ Passive vs Active

Marix sử dụng **chế độ passive** theo mặc định, hoạt động tốt hơn với:
- Router NAT
- Firewall
- Hầu hết các cấu hình mạng hiện đại

## Khắc phục Sự cố

### Timeout Kết nối
- Kiểm tra xem máy chủ có cho phép IP của bạn không
- Xác minh quy tắc firewall ở cả hai đầu
- Thử các cổng khác nếu được cấu hình

### Xác thực Thất bại
- Xác minh tên người dùng và mật khẩu
- Kiểm tra xem người dùng FTP có được bật trên máy chủ không
- Một số máy chủ yêu cầu định dạng đăng nhập cụ thể

### Truyền Thất bại
- Kiểm tra dung lượng đĩa còn trống
- Xác minh quyền file trên máy chủ
- File lớn có thể timeout - kiểm tra giới hạn máy chủ
