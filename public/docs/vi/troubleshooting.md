# Khắc phục Sự cố

Các vấn đề phổ biến và giải pháp cho Marix.

## Vấn đề Kết nối

### "Connection refused"

**Nguyên nhân:**
- Máy chủ không chạy
- Sai IP/hostname
- Sai cổng
- Firewall chặn kết nối

**Giải pháp:**
1. Xác minh host/IP chính xác
2. Kiểm tra cổng chính xác và mở
3. Đảm bảo máy chủ đang chạy
4. Kiểm tra firewall cho phép kết nối
5. Thử ping máy chủ

### "Connection timeout"

**Nguyên nhân:**
- Máy chủ không thể truy cập
- Vấn đề mạng
- Firewall chặn

**Giải pháp:**
1. Kiểm tra kết nối internet của bạn
2. Xác minh máy chủ đang online
3. Thử từ mạng khác
4. Kiểm tra nếu cần VPN

### "Authentication failed"

**Nguyên nhân:**
- Sai tên người dùng
- Sai mật khẩu
- Sai SSH key
- Passphrase key không chính xác

**Giải pháp:**
1. Xác minh tên người dùng chính xác
2. Kiểm tra mật khẩu (phân biệt chữ hoa chữ thường)
3. Đảm bảo SSH key chính xác được chọn
4. Nhập passphrase key chính xác
5. Xác minh người dùng có quyền truy cập SSH trên máy chủ

### "Host key verification failed"

**Nguyên nhân:**
- Máy chủ được cài đặt lại
- SSH key của máy chủ thay đổi
- Vấn đề bảo mật tiềm ẩn

**Giải pháp:**
1. Xác minh với admin máy chủ nếu key thay đổi
2. Vào Known Hosts → xóa mục cũ
3. Kết nối lại và chấp nhận fingerprint mới
4. Nếu nghi ngờ, điều tra trước khi kết nối

### "Permission denied (publickey)"

**Nguyên nhân:**
- SSH key không được chấp nhận
- Key không có trong authorized_keys
- Chọn sai key

**Giải pháp:**
1. Xác minh public key có trong `~/.ssh/authorized_keys` của máy chủ
2. Kiểm tra quyền key: `chmod 600 ~/.ssh/authorized_keys`
3. Đảm bảo key chính xác được chọn trong Marix
4. Thử xác thực bằng mật khẩu nếu có

## Vấn đề SFTP

### "Permission denied" khi tải lên

**Nguyên nhân:**
- Không có quyền ghi trên remote
- Sai thư mục
- Đĩa đầy

**Giải pháp:**
1. Kiểm tra quyền ghi trên thư mục remote
2. Thử tải lên thư mục home trước
3. Kiểm tra dung lượng đĩa trên máy chủ
4. Sử dụng `sudo` nếu cần (qua terminal)

### Truyền file chậm

**Nguyên nhân:**
- Tốc độ mạng
- Kích thước file lớn
- Tải máy chủ

**Giải pháp:**
1. Kiểm tra tốc độ mạng của bạn
2. File lớn mất nhiều thời gian hơn - hãy kiên nhẫn
3. Thử vào giờ thấp điểm
4. Nén file trước khi truyền

### "No such file or directory"

**Nguyên nhân:**
- Đường dẫn không tồn tại
- Symbolic link bị hỏng
- Quyền liệt kê thư mục

**Giải pháp:**
1. Xác minh đường dẫn tồn tại
2. Điều hướng thủ công đến vị trí
3. Kiểm tra quyền thư mục cha

## Vấn đề Terminal

### Terminal hiển thị văn bản lộn xộn

**Nguyên nhân:**
- Không khớp encoding
- Không tương thích loại terminal

**Giải pháp:**
1. Thử theme terminal khác
2. Kiểm tra cài đặt locale của máy chủ
3. Kết nối lại với máy chủ

### Sao chép/dán không hoạt động

**Giải pháp:**
1. Sử dụng `Ctrl+Shift+C` và `Ctrl+Shift+V`
2. **Sao chép văn bản**: 
   - Chọn văn bản bằng chuột → Copy
   - Hoặc sử dụng `Ctrl+C`
3. **Dán văn bản**: 
   - Nhấp chuột phải → Paste
   - Hoặc sử dụng `Ctrl+V`
4. Kiểm tra nếu văn bản thực sự được chọn

### Terminal không phản hồi

**Giải pháp:**
1. Đợi một lát - lệnh có thể đang xử lý
2. Nhấn `Ctrl+C` để hủy lệnh đang chạy
3. Nhấp nút Reconnect
4. Đóng và mở lại tab

## Vấn đề RDP

### Màn hình đen sau khi kết nối

**Nguyên nhân:**
- Độ trễ kết nối ban đầu
- Máy từ xa đang ngủ
- Vấn đề đồ họa

**Giải pháp:**
1. Đợi một lát để kết nối
2. Thử kết nối lại
3. Đánh thức máy từ xa trước
4. Kiểm tra máy từ xa không bị khóa

### Hiệu suất RDP chậm

**Giải pháp:**
1. Giảm cài đặt độ sâu màu
2. Tắt hiệu ứng hình ảnh trên Windows
3. Sử dụng kết nối có dây
4. Đóng các ứng dụng tiêu tốn băng thông
5. Giảm độ phân giải remote

## Vấn đề Ứng dụng

### Marix không khởi động

**Giải pháp:**
1. Khởi động lại máy tính
2. Cài đặt lại Marix
3. Kiểm tra phần mềm xung đột
4. Chạy với quyền administrator (Windows)

### Cài đặt không được lưu

**Nguyên nhân:**
- Không có quyền ghi
- File cấu hình bị hỏng

**Giải pháp:**
1. Chạy Marix với quyền administrator
2. Đặt lại cài đặt (Settings → Reset)
3. Xóa thư mục cấu hình và khởi động lại

### Sử dụng CPU/bộ nhớ cao

**Giải pháp:**
1. Đóng các tab kết nối không sử dụng
2. Giảm số bảng SFTP đang mở
3. Khởi động lại Marix
4. Cập nhật lên phiên bản mới nhất

## Vấn đề Sao lưu

### "Wrong password" khi khôi phục

**Giải pháp:**
1. Đảm bảo bạn đang sử dụng đúng mật khẩu
2. Mật khẩu phân biệt chữ hoa chữ thường
3. Kiểm tra khoảng trắng đầu/cuối
4. Thử sao lưu từ nhà cung cấp khác

### Tải lên sao lưu thất bại

**Giải pháp:**
1. Kiểm tra kết nối internet
2. Xác minh kết nối OAuth hợp lệ
3. Kết nối lại với nhà cung cấp sao lưu
4. Kiểm tra hạn ngạch lưu trữ không bị vượt quá

## Nhận Trợ giúp

Nếu vấn đề của bạn không được liệt kê ở đây:

1. **Kiểm tra cập nhật** - Phiên bản mới nhất có thể sửa vấn đề của bạn
2. **Tìm kiếm issues** trên GitHub
3. **Báo cáo lỗi** trên [GitHub Issues](https://github.com/marixdev/marix/issues)
4. **Liên hệ hỗ trợ** qua website

Khi báo cáo vấn đề, bao gồm:
- Phiên bản Marix
- Hệ điều hành
- Các bước tái tạo
- Thông báo lỗi (nếu có)
- Ảnh chụp màn hình (nếu phù hợp)
