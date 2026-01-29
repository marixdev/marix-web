# Sao lưu & Khôi phục

Bảo vệ dữ liệu của bạn với các bản sao lưu được mã hóa. Marix hỗ trợ 6 nhà cung cấp sao lưu, tất cả đều sử dụng mã hóa Argon2id.

> 💡 **Mẹo:** Khi bạn kết nối tài khoản đám mây để sao lưu, bạn không cần kết nối lại để khôi phục trên cùng một thiết bị. Xác thực của bạn được lưu cục bộ.

## Giao diện Sao lưu & Khôi phục

### Sao lưu
![Giao diện Sao lưu](/backup.png)

### Khôi phục
![Giao diện Khôi phục](/restore.png)

## Những gì Được Sao lưu

- Tất cả máy chủ và thông tin đăng nhập (mật khẩu, private key)
- SSH key từ Keychain
- Cấu hình port forward
- Bí mật 2FA/TOTP
- Cài đặt ứng dụng
- Cloudflare API token

## Yêu cầu Mật khẩu

| Yêu cầu | Mô tả |
|---------|-------|
| Độ dài | Ít nhất 10 ký tự |
| Chữ hoa | Bao gồm chữ in hoa |
| Chữ thường | Bao gồm chữ thường |
| Số | Bao gồm ít nhất một số |
| Đặc biệt | Bao gồm ký tự đặc biệt |

> ⚠️ **Cảnh báo:** Chúng tôi không thể khôi phục mật khẩu của bạn. Nếu bạn quên, bản sao lưu sẽ không thể truy cập vĩnh viễn.

## Sao lưu Cục bộ

Lưu file sao lưu được mã hóa vào máy tính của bạn.

### Tạo Sao lưu Cục bộ

1. Vào **Settings** → Nhấp **"Create Backup"**
2. Chọn tab **Local** (biểu tượng thư mục)
3. Nhập **mật khẩu mạnh** (10+ ký tự)
4. Xác nhận mật khẩu
5. Nhấp **"Create Backup"**
6. Chọn nơi lưu file `.marix`
7. Lưu trữ file này an toàn

### Khôi phục từ Sao lưu Cục bộ

1. Vào **Settings** → Nhấp **"Restore Backup"**
2. Chọn tab **Local**
3. Nhấp **"Select File"** và chọn file sao lưu `.marix` của bạn
4. Nhập **mật khẩu** bạn đã dùng khi tạo bản sao lưu
5. Nhấp **"Restore"**
6. Ứng dụng khởi động lại với tất cả dữ liệu được khôi phục

## Google Drive

Đồng bộ sao lưu của bạn lên Google Drive.

### Kết nối

1. Chọn tab **Google Drive**
2. Nhấp **"Connect"**
3. Đăng nhập vào tài khoản Google của bạn
4. Cấp quyền cho Marix
5. Bạn sẽ thấy "Connected" cùng với email của bạn

### Tạo Sao lưu

1. Sau khi kết nối, nhập mật khẩu mạnh
2. Xác nhận mật khẩu
3. Nhấp **"Create Backup"**
4. Trạng thái hiển thị: "Backup created successfully"

### Khôi phục

1. Nếu đã kết nối, tài khoản của bạn được nhớ
2. Nếu có bản sao lưu, bạn sẽ thấy "Last backup: [ngày]"
3. Nhập mật khẩu
4. Nhấp **"Restore"**

## GitHub

Lưu trữ sao lưu của bạn trong GitHub Gist riêng tư.

### Kết nối

1. Chọn tab **GitHub**
2. Nhấp **"Connect"**
3. **Device Code** xuất hiện (ví dụ: `ABCD-1234`)
4. Truy cập: https://github.com/login/device
5. Nhập mã
6. Ủy quyền cho Marix

### Tạo Sao lưu

1. Nhập mật khẩu mạnh
2. Xác nhận mật khẩu
3. Nhấp **"Create Backup"**
4. Sao lưu được lưu trữ dưới dạng Gist riêng tư

### Khôi phục

1. Nếu đã kết nối, tài khoản của bạn được nhớ
2. Nếu có bản sao lưu, bạn sẽ thấy "Last backup: [ngày]"
3. Nhập mật khẩu
4. Nhấp **"Restore"**

### Sao lưu của Tôi Ở đâu?

Truy cập https://gist.github.com → Gist riêng tư của bạn → Tìm "marix-backup"

## GitLab

Lưu trữ sao lưu của bạn trong GitLab Snippet.

### Kết nối

1. Chọn tab **GitLab**
2. Nhấp **"Connect"**
3. Đăng nhập vào GitLab
4. Ủy quyền cho Marix

### Tạo Sao lưu

1. Nhập mật khẩu mạnh
2. Xác nhận mật khẩu
3. Nhấp **"Create Backup"**
4. Sao lưu được lưu trữ dưới dạng Snippet riêng tư

### Khôi phục

1. Nếu đã kết nối, tài khoản của bạn được nhớ
2. Nếu có bản sao lưu, bạn sẽ thấy "Last backup: [ngày]"
3. Nhập mật khẩu
4. Nhấp **"Restore"**

## Box.net

Lưu trữ sao lưu của bạn trong Box cloud storage.

### Kết nối

1. Chọn tab **Box.net**
2. Nhấp **"Connect to Box.net"**
3. Đăng nhập vào tài khoản Box.net của bạn
4. Ủy quyền cho Marix

### Tạo Sao lưu

1. Nhập mật khẩu mạnh
2. Xác nhận mật khẩu
3. Nhấp **"Create Backup"**

### Khôi phục

1. Nếu đã kết nối, tài khoản của bạn được nhớ
2. Nếu có bản sao lưu, bạn sẽ thấy "Last backup: [ngày]"
3. Nhập mật khẩu
4. Nhấp **"Restore"**

## OneDrive

Đồng bộ sao lưu của bạn lên Microsoft OneDrive.

### Kết nối

1. Chọn tab **OneDrive**
2. Nhấp **"Connect"**
3. Đăng nhập vào tài khoản Microsoft của bạn
4. Cấp quyền cho Marix
5. Bạn sẽ thấy "Connected" cùng với email của bạn

### Tạo Sao lưu

1. Sau khi kết nối, nhập mật khẩu mạnh
2. Xác nhận mật khẩu
3. Nhấp **"Create Backup"**
4. Trạng thái hiển thị: "Backup created successfully"

### Khôi phục

1. Nếu đã kết nối, tài khoản của bạn được nhớ
2. Nếu có bản sao lưu, bạn sẽ thấy "Last backup: [ngày]"
3. Nhập mật khẩu
4. Nhấp **"Restore"**

## So sánh Nhà cung cấp

| Nhà cung cấp | Vị trí Lưu trữ | Ưu điểm | Nhược điểm |
|--------------|----------------|---------|------------|
| **Local** | Máy tính của bạn | Kiểm soát hoàn toàn, ngoại tuyến | Phải quản lý file thủ công |
| **Google Drive** | Google cloud | Tự động đồng bộ, sử dụng rộng rãi | Yêu cầu tài khoản Google |
| **OneDrive** | Microsoft cloud | Tích hợp với Windows | Yêu cầu tài khoản Microsoft |
| **GitHub** | GitHub Gist | Miễn phí, kiểm soát phiên bản | Yêu cầu tài khoản GitHub |
| **GitLab** | GitLab Snippet | Miễn phí, tùy chọn tự host | Yêu cầu tài khoản GitLab |
| **Box.net** | Box.net cloud | Thân thiện doanh nghiệp | Yêu cầu tài khoản Box |

## Thực hành Tốt nhất

1. **Sử dụng mật khẩu khác nhau** cho các nhà cung cấp khác nhau
2. **Lưu trữ mật khẩu** trong trình quản lý mật khẩu
3. **Kiểm tra khôi phục** định kỳ để đảm bảo sao lưu hoạt động
4. **Giữ sao lưu cục bộ** như tùy chọn phụ
5. **Không chia sẻ** file sao lưu - chúng chứa dữ liệu nhạy cảm
6. **Cập nhật sao lưu** thường xuyên sau khi thêm máy chủ mới
