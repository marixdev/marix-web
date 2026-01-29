# Chia sẻ Máy chủ LAN

Chia sẻ cấu hình máy chủ của bạn với người dùng Marix khác trên cùng mạng nội bộ.

## Giao diện Chia sẻ Máy chủ LAN

![Giao diện Chia sẻ Máy chủ LAN](/servershare.png)

## Yêu cầu

> ⚠️ **Quan trọng:** Cả người gửi và người nhận phải bật **LAN Discovery**.
> 
> Nhấp nút 🌐 trong thanh header hoặc sử dụng `Ctrl+Shift+L` để bật/tắt.

- Cả hai thiết bị trên cùng một mạng (WiFi/LAN)
- LAN Discovery được bật trên cả hai thiết bị
- Marix đang chạy trên cả hai thiết bị

## Trường hợp Sử dụng

- Chia sẻ quyền truy cập máy chủ với thành viên nhóm
- Thiết lập máy tính mới nhanh chóng
- Chuyển cấu hình giữa các thiết bị
- Đào tạo thành viên nhóm mới

## Mở Chia sẻ Máy chủ

### Phương pháp 1: Menu Nhấp chuột phải
1. Trong danh sách Hosts, nhấp chuột phải vào một máy chủ
2. Chọn **"Share on LAN"**

### Phương pháp 2: Chọn nhiều
1. Giữ `Ctrl` (hoặc `⌘` trên Mac) và nhấp vào nhiều máy chủ
2. Nhấp nút **"Share"** xuất hiện
3. Hoặc nhấp chuột phải và chọn **"Share on LAN"**

## Chia sẻ Máy chủ (Người gửi)

### Bước 1: Bật LAN Discovery
Nhấp biểu tượng **🌐** (quả địa cầu) trong thanh header.

### Bước 2: Chọn Máy chủ
- Nhấp chuột phải → "Share on LAN" cho máy chủ đơn
- Hoặc chọn nhiều máy chủ rồi nhấp Share

### Bước 3: Modal Chọn Máy chủ
- Xem lại các máy chủ đã chọn
- Nhấp **"Select All"** để chia sẻ tất cả máy chủ
- Nhấp **"Clear"** để bỏ chọn tất cả
- Nhấp vào tag để chọn nhanh máy chủ có tag đó

### Bước 4: Nhấp nút "Share"

### Bước 5: Cấu hình Tùy chọn

| Tùy chọn | Mô tả |
|----------|-------|
| Include sensitive data ✅ | Chia sẻ mật khẩu và private key |
| Include sensitive data ❌ | Loại bỏ mật khẩu/key (người nhận nhập thủ công) |

### Bước 6: Ghi lại Mã Ghép đôi
**Mã Ghép đôi** 6 chữ số có hiệu lực trong 5 phút.

### Bước 7: Chia sẻ Mã
Cho người nhận biết mã ghép đôi của bạn.

### Bước 8: Gửi
Nhấp **"Share on LAN"**

Trạng thái hiển thị: "Sent X server(s). Waiting for receiver..."

## Nhận Máy chủ (Người nhận)

### Bước 1: Bật LAN Discovery
Nhấp biểu tượng **🌐** (quả địa cầu) trong thanh header.

### Bước 2: Chờ Thông báo
Popup xuất hiện khi có người gửi máy chủ cho bạn.

Hoặc vào Hosts → nhấp chuột phải vào vùng trống → "Receive Shared Servers"

### Bước 3: Nhập Mã Ghép đôi
Nhập mã 6 chữ số từ người gửi.

### Bước 4: Import
Nhấp **"Decrypt & Import"**

### Bước 5: Hoàn thành!
Máy chủ được import với:
- Tất cả cài đặt gốc
- Tag **"LAN-Import"** được thêm tự động
- Mật khẩu/key (nếu người gửi bao gồm)

Trạng thái hiển thị: "Successfully imported X server(s)!"

## Bảo mật

- Tất cả truyền được **mã hóa**
- Yêu cầu mã ghép đôi 6 chữ số
- Mã hết hạn sau 5 phút
- Không có dữ liệu đi qua máy chủ bên ngoài
- Truyền trực tiếp giữa thiết bị

## Khắc phục Sự cố

### Không Có Thiết bị Xuất hiện

1. Cả hai thiết bị trên **cùng mạng** (WiFi/LAN)
2. **BẬT LAN Discovery** trên cả hai thiết bị
3. Nhấp "Refresh" để quét lại
4. Kiểm tra firewall không chặn Marix

### Mã Ghép đôi Hết hạn

- Mã hết hạn sau 5 phút
- Người gửi có thể nhấp "Regenerate" để lấy mã mới

### Lỗi "Wrong Pairing Code"

- Kiểm tra lại mã với người gửi
- Mã phân biệt chữ hoa chữ thường
- Yêu cầu mã mới nếu cần

### Máy chủ Thiếu Mật khẩu

- Người gửi có thể đã tắt "Include sensitive data"
- Nhập mật khẩu thủ công sau khi import
- Yêu cầu người gửi chia sẻ lại với sensitive data được bật
