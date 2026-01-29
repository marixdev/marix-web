# Known Hosts

Known Hosts lưu trữ fingerprint máy chủ để phát hiện nếu danh tính máy chủ thay đổi (vấn đề bảo mật tiềm ẩn).

## Giao diện Known Hosts

![Giao diện Known Hosts](/knowhosts.png)

## Known Hosts là gì?

Khi bạn kết nối lần đầu với máy chủ SSH, máy chủ trình bày fingerprint của nó. Marix lưu trữ điều này để:
- Xác minh danh tính máy chủ trong các kết nối tương lai
- Phát hiện tấn công man-in-the-middle
- Cảnh báo bạn nếu key máy chủ thay đổi bất ngờ

## Mở Known Hosts

Nhấp **"Known Hosts"** trong thanh bên.

## Xem Known Hosts

Danh sách hiển thị:

| Cột | Mô tả |
|-----|-------|
| Host | Hostname/IP máy chủ |
| Port | Cổng SSH |
| Key Type | Thuật toán SSH key (ED25519, RSA, ECDSA) |
| Fingerprint | Định danh duy nhất của máy chủ |
| Added | Khi nào host được tin cậy |

## Tìm kiếm Known Hosts

1. Sử dụng ô tìm kiếm ở trên cùng
2. Tìm kiếm theo hostname, IP, hoặc fingerprint

## Lọc theo Loại Key

1. Sử dụng bộ lọc dropdown
2. Chọn: All, ED25519, RSA, hoặc ECDSA

## Import Host từ Máy chủ

Thêm thủ công fingerprint máy chủ mà không cần kết nối:

1. Nhấp nút **"Import from Host"**
2. Nhập:
   - Hostname hoặc IP
   - Port (mặc định 22)
3. Nhấp **"Import"**
4. Fingerprint máy chủ được lấy và lưu trữ

## Xóa Known Host

1. Tìm host trong danh sách
2. Nhấp nút **Delete** (biểu tượng thùng rác)
3. Xác nhận xóa

### Khi nào Nên Xóa

- Máy chủ được cài đặt lại và có key mới
- IP/hostname máy chủ thay đổi
- Bạn không còn kết nối với máy chủ này

## Xác minh Host Key

Khi kết nối với máy chủ mới:
1. Marix lấy fingerprint của máy chủ
2. Bạn được yêu cầu xác minh và tin cậy nó
3. Sau khi chấp nhận, nó được lưu trong Known Hosts
4. Các kết nối tương lai được xác minh tự động

## Cảnh báo Bảo mật

### "Host key has changed"
Cảnh báo này xuất hiện khi fingerprint máy chủ khác với fingerprint đã lưu.

**Nguyên nhân có thể:**
- Máy chủ được cài đặt lại
- SSH key của máy chủ được tạo lại
- ⚠️ **Tấn công man-in-the-middle** (hiếm nhưng có thể xảy ra)

**Cần làm gì:**
1. Xác minh với quản trị viên máy chủ nếu key thay đổi hợp lệ
2. Nếu được xác nhận, xóa mục cũ khỏi Known Hosts
3. Kết nối lại và chấp nhận fingerprint mới
4. Nếu nghi ngờ, không kết nối

## Thực hành Tốt nhất

1. **Xác minh fingerprint** khi kết nối với máy chủ mới
2. **Không bỏ qua cảnh báo** về host key thay đổi
3. **Thường xuyên xem lại** danh sách Known Hosts của bạn
4. **Xóa các mục cũ** cho các máy chủ bạn không còn sử dụng
