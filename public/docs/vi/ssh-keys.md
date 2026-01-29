# Quản lý SSH Key

Quản lý SSH key để xác thực không mật khẩu với máy chủ của bạn.

## Giao diện Quản lý SSH Key

![Giao diện Quản lý SSH Key](/sshkey.png)

## Mở Quản lý SSH Key

Nhấp **"SSH Key"** trong menu thanh bên.

## Tạo SSH Key Mới

### Bước 1: Mở Trình tạo
Nhấp nút **"Generate Key"**

### Bước 2: Điền Chi tiết

| Trường | Mô tả | Bắt buộc |
|--------|-------|----------|
| Key Name | Tên để nhận diện key này (ví dụ: "work-laptop") | Có |
| Key Type | ed25519 (khuyến nghị), RSA, hoặc ECDSA | Có |
| Passphrase | Mật khẩu để mã hóa key (tùy chọn nhưng khuyến nghị) | Không |
| Comment | Ghi chú bổ sung (ví dụ: địa chỉ email) | Không |

### Bước 3: Tạo
Nhấp **"Generate"**

### Bước 4: Hoàn thành
Key xuất hiện trong danh sách của bạn với:
- Tên
- Badge loại (ED25519, RSA, ECDSA)
- Fingerprint
- Ngày tạo

## So sánh Các Loại Key

| Loại | Bảo mật | Tương thích | Khuyến nghị |
|------|---------|-------------|-------------|
| **ED25519** | Xuất sắc | Máy chủ hiện đại | ✅ Khuyến nghị |
| **RSA (4096)** | Rất tốt | Phổ quát | Tốt cho hệ thống cũ |
| **ECDSA** | Tốt | Hầu hết máy chủ | Thay thế cho ED25519 |

## Import Key Hiện có

### Bước 1: Mở Trình import
Nhấp nút **"Import Key"**

### Bước 2: Cung cấp Dữ liệu Key

| Trường | Mô tả | Bắt buộc |
|--------|-------|----------|
| Key Name | Tên cho key này | Có |
| Private Key | Dán nội dung key HOẶC nhấp "Select File" | Có |
| Comment | Ghi chú bổ sung | Không |

### Bước 3: Import
Nhấp **"Import"**

## Xem Public Key

1. Nhấp vào một key trong danh sách
2. Bảng chi tiết hiển thị ở bên phải
3. Nhấp **"Show Public Key"**
4. Sao chép public key để thêm vào `~/.ssh/authorized_keys` của máy chủ

## Xuất Key

1. Tìm key trong danh sách
2. Nhấp nút **Export** (hoặc nhấp chuột phải → Export)
3. Chọn:
   - **Export Public Key Only** - An toàn hơn, để chia sẻ
   - **Export Both Keys** - Private + Public (giữ an toàn!)
4. Chọn vị trí lưu
5. Key được lưu dưới dạng file

## Xóa Key

1. Tìm key trong danh sách
2. Nhấp nút **Delete** (biểu tượng thùng rác)
3. Xác nhận xóa

> ⚠️ **Cảnh báo:** Key đã xóa không thể khôi phục. Đảm bảo bạn có bản sao lưu nếu cần.

## Sử dụng Key cho Kết nối Máy chủ

1. Khi thêm/sửa máy chủ
2. Đặt Authentication thành **"SSH Key"**
3. Trong dropdown **"SSH Key from Keychain"**
4. Chọn key đã import của bạn
5. Nếu key có passphrase, nhập vào trường Passphrase

## Thêm Public Key vào Máy chủ

Để bật đăng nhập không mật khẩu, thêm public key của bạn vào máy chủ:

### Phương pháp 1: Thủ công
```bash
# Trên máy local của bạn, sao chép public key
# Sau đó trên máy chủ:
echo "your-public-key-here" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

### Phương pháp 2: Sử dụng ssh-copy-id (nếu có)
```bash
ssh-copy-id -i ~/.ssh/your_key.pub user@server
```

## Thực hành Tốt nhất

1. **Sử dụng ED25519** cho key mới khi có thể
2. **Thêm passphrase** để bảo mật bổ sung
3. **Sử dụng key khác nhau** cho các mục đích khác nhau (công việc, cá nhân)
4. **Sao lưu key của bạn** an toàn
5. **Không bao giờ chia sẻ private key** - chỉ chia sẻ public key
6. **Xoay key định kỳ** để bảo mật
