# Xác thực Hai Yếu tố (2FA/TOTP)

Trình tạo mã TOTP tích hợp, giống như Google Authenticator. Lưu trữ bí mật 2FA của bạn và nhận mã mà không cần điện thoại.

## Giao diện 2FA

![Giao diện 2FA](/2fa.png)

## Mở 2FA

Nhấp vào **"2FA"** trong thanh bên.

## Thêm Tài khoản 2FA Mới

### Bước 1: Mở Hộp thoại
Nhấp nút **"Add Account"** (Thêm Tài khoản)

### Bước 2: Nhập Chi tiết

| Trường | Mô tả | Bắt buộc |
|--------|-------|----------|
| Account Name | Nhãn cho tài khoản này (ví dụ: "GitHub", "AWS") | Không (tự động đặt tên) |
| Secret Key | Bí mật TOTP (từ trang thiết lập mã QR) | Có |

### Bước 3: Lưu
Nhấp **"Add"** (Thêm)

## Cách Lấy Secret Key

Khi bật 2FA trên một trang web:

1. Tìm **"Can't scan QR code?"** hoặc **"Manual entry"**
2. Sao chép secret key (thường là chữ in hoa và số)
3. Dán vào Marix

Định dạng secret key ví dụ:
```
JBSWY3DPEHPK3PXP
```

## Sử dụng Mã 2FA

1. Tìm tài khoản của bạn trong danh sách
2. Mã 6 chữ số hiển thị bên cạnh
3. Bộ đếm ngược hiển thị số giây cho đến khi mã được làm mới
4. Nhấp nút **Copy** để sao chép mã vào clipboard

### Bộ đếm thời gian
- Mã được làm mới mỗi **30 giây**
- Chỉ báo tiến trình hình tròn hiển thị thời gian còn lại
- Đợi mã mới nếu mã hiện tại sắp hết hạn

## Sửa Tên Tài khoản

1. Nhấp nút **Edit** bên cạnh tài khoản
2. Nhập tên mới
3. Nhấn Enter hoặc nhấp Save

## Xóa Tài khoản 2FA

1. Nhấp nút **Delete** (biểu tượng thùng rác)
2. Xác nhận xóa

> ⚠️ **Cảnh báo:** Xóa sẽ loại bỏ bí mật. Đảm bảo bạn có quyền truy cập dự phòng vào tài khoản liên kết trước khi xóa.

## Các Dịch vụ Phổ biến

Dưới đây là một số dịch vụ phổ biến hỗ trợ TOTP:

| Dịch vụ | Vị trí Cài đặt 2FA |
|---------|-------------------|
| GitHub | Settings → Password and authentication |
| AWS | IAM → Security credentials |
| Google | Google Account → Security |
| Microsoft | Security settings → Two-step verification |
| Cloudflare | Profile → Authentication |
| DigitalOcean | Account → Security |
| Linode | My Profile → Password & Authentication |

## Thực hành Tốt nhất

1. **Sao lưu bí mật của bạn** - Lưu trữ secret key an toàn
2. **Giữ mã khôi phục** - Lưu các mã dự phòng được cung cấp bởi dịch vụ
3. **Sử dụng tên mô tả** - Dễ dàng nhận diện tài khoản nhanh chóng
4. **Kiểm tra mã trước khi sử dụng** - Xác minh chúng hoạt động ngay sau khi thêm
5. **Đồng bộ thời gian** - Đảm bảo đồng hồ máy tính của bạn chính xác

## Khắc phục Sự cố

### Mã Không Hoạt động

1. **Kiểm tra đồng bộ thời gian** - Đồng hồ máy tính phải chính xác
2. **Xác minh secret key** - Nhập lại nếu sao chép sai
3. **Đợi mã tiếp theo** - Mã hiện tại có thể đang hết hạn

### Mất Quyền Truy cập

Nếu bạn mất quyền truy cập vào Marix:
1. Sử dụng **mã khôi phục** được cung cấp bởi dịch vụ
2. Liên hệ hỗ trợ dịch vụ để khôi phục tài khoản
3. This is why backing up secrets is important!
