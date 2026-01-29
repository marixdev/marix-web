# RDP Remote Desktop

Kết nối với máy chủ và máy tính Windows sử dụng Remote Desktop Protocol (RDP).

## Thêm Máy chủ RDP

1. Nhấp **"Add New Host"**
2. Chọn **Protocol**: RDP
3. Điền vào:
   - **Host/IP**: Địa chỉ máy chủ Windows
   - **Port**: 3389 (mặc định)
   - **Username**: Tên người dùng Windows
   - **Password**: Mật khẩu Windows
   - **Domain**: (tùy chọn) Tên domain Windows
4. Nhấp **Create**

## Import từ File .rdp

Đã có file cấu hình RDP?

1. Trong hộp thoại Add Server, nhấp **"Import .rdp file"**
2. Chọn file `.rdp` của bạn
3. Các trường tự động điền từ file
4. Điều chỉnh cài đặt nếu cần
5. Nhấp **Create**

## Kết nối với RDP

1. Nhấp đúp vào máy chủ RDP trong danh sách Hosts
2. Cửa sổ remote desktop mở trong ứng dụng
3. Bạn có thể tương tác với desktop Windows bình thường

## Điều khiển RDP

| Đầu vào | Hành vi |
|---------|---------|
| **Chuột** | Nhấp, kéo, cuộn hoạt động bình thường |
| **Bàn phím** | Tất cả phím được chuyển tiếp đến remote |
| **Clipboard** | Sao chép/dán giữa local và remote |

## Ngắt kết nối

- Nhấp × trên tab phiên
- Hoặc đóng ứng dụng
- Trạng thái phiên được bảo toàn trên máy chủ từ xa

## Yêu cầu Linux

Hỗ trợ RDP trên Linux yêu cầu FreeRDP. Marix **tự động phát hiện** nếu FreeRDP được cài đặt.

### Tự động Cài đặt

Nếu không tìm thấy FreeRDP:
1. Thông báo xuất hiện khi bạn thử kết nối
2. Nhấp nút **"Install"**
3. Marix tự động cài đặt FreeRDP
4. Kết nối lại sau khi cài đặt hoàn tất

### Cài đặt Thủ công

Nếu bạn thích cài đặt thủ công:

**Ubuntu/Debian**
```bash
sudo apt install freerdp3-x11 xdotool
```

**Fedora**
```bash
sudo dnf install freerdp xdotool
```

**Arch Linux**
```bash
sudo pacman -S freerdp xdotool
```

## Cài đặt Hiển thị

Phiên RDP thích ứng với kích thước cửa sổ của bạn. Để có trải nghiệm tốt nhất:
- Phóng to cửa sổ để có trải nghiệm desktop đầy đủ
- Thay đổi kích thước cửa sổ để điều chỉnh độ phân giải remote
- Chế độ toàn màn hình có sẵn qua điều khiển cửa sổ

## Mẹo Hiệu suất

- **Giảm độ sâu màu** cho kết nối chậm hơn
- **Tắt hiệu ứng hình ảnh** trên phía Windows
- Sử dụng **kết nối có dây** để có hiệu suất tốt nhất
- Đóng các ứng dụng không cần thiết trên máy từ xa

## Khắc phục Sự cố

### Kết nối Bị Từ chối
- Xác minh Remote Desktop được bật trên Windows
- Kiểm tra Windows Firewall cho phép RDP
- Xác nhận cổng chính xác (mặc định 3389)

### Màn hình Đen
- Đợi một lát - kết nối ban đầu có thể mất thời gian
- Thử kết nối lại
- Kiểm tra máy từ xa không ở chế độ ngủ

### Hiệu suất Chậm
- Giảm độ phân giải màn hình
- Giảm độ sâu màu
- Kiểm tra tốc độ mạng
- Đóng các ứng dụng tiêu tốn băng thông

### Xác thực Thất bại
- Xác minh định dạng tên người dùng:
  - Local: `username`
  - Domain: `DOMAIN\username` hoặc `username@domain.com`
- Kiểm tra mật khẩu chính xác
- Đảm bảo tài khoản có quyền truy cập Remote Desktop
