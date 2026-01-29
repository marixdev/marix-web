# Khóa Ứng dụng

Bảo vệ ứng dụng Marix của bạn với Khóa Ứng dụng. Khi được bật, ứng dụng tự động khóa sau một khoảng thời gian không hoạt động, ngăn chặn truy cập trái phép vào máy chủ và thông tin đăng nhập của bạn.

## Giao diện Khóa Ứng dụng

![Giao diện Khóa Ứng dụng](/applock.png)

## Bật Khóa Ứng dụng

1. Mở **Settings** (biểu tượng bánh răng trong thanh bên)
2. Tìm phần **Security**
3. Bật **Enable App Lock**

## Phương thức Khóa

Chọn cách khóa ứng dụng:

| Phương thức | Mô tả | Mức độ Bảo mật |
|-------------|-------|----------------|
| **Blur** | Làm mờ nội dung màn hình | Thấp - chỉ bảo mật trực quan |
| **PIN** | Yêu cầu mã PIN 4-6 chữ số để mở khóa | Trung bình |
| **Password** | Yêu cầu mật khẩu để mở khóa | Cao |

### Chế độ Blur

- Nội dung màn hình bị làm mờ
- Nhấp vào bất kỳ đâu để mở khóa
- Tốt nhất cho sự riêng tư nhanh trong môi trường văn phòng

### Chế độ PIN

- Đặt mã PIN số 4-6 chữ số
- Nhập PIN để mở khóa
- Cân bằng tốt giữa bảo mật và tiện lợi

### Chế độ Password

- Đặt mật khẩu tùy chỉnh
- Nhập mật khẩu để mở khóa
- Mức độ bảo mật cao nhất

## Thiết lập PIN hoặc Password

Khi chuyển sang chế độ PIN hoặc Password:

1. Chọn phương thức khóa
2. Một hộp thoại xuất hiện để thiết lập thông tin xác thực
3. Nhập PIN/Password của bạn
4. Xác nhận bằng cách nhập lại
5. Nhấp **Save**

> **Lưu ý:** Nếu bạn quên PIN/Password, bạn sẽ cần khởi động lại ứng dụng. Dữ liệu máy chủ của bạn vẫn an toàn.

## Thời gian Chờ Khóa

Cấu hình thời gian ứng dụng đợi trước khi khóa:

| Thời gian chờ | Trường hợp Sử dụng |
|---------------|-------------------|
| 1 phút | Bảo mật tối đa |
| 2 phút | Bảo mật cao |
| 5 phút | Mặc định, cân bằng |
| 10 phút | Bảo mật vừa phải |
| 15 phút | Sử dụng thông thường |
| 30 phút | Bảo mật thấp |
| 60 phút | Bảo vệ tối thiểu |

Bộ đếm thời gian được đặt lại với bất kỳ chuyển động chuột, nhập liệu bàn phím hoặc nhấp chuột.

## Mở khóa

### Chế độ Blur
- Nhấp vào bất kỳ đâu trên màn hình
- Di chuyển chuột

### Chế độ PIN/Password
1. Nhập PIN hoặc Password của bạn
2. Nhấn **Enter** hoặc nhấp **Unlock**
3. Ứng dụng mở khóa ngay lập tức

## Thay đổi Thông tin Xác thực

Để thay đổi PIN hoặc Password:

1. Vào **Settings** → **Security**
2. Nhấp **Change PIN** hoặc **Change Password**
3. Nhập thông tin xác thực mới
4. Xác nhận và lưu

## Xóa Thông tin Xác thực

Để xóa PIN/Password và chuyển về Blur:

1. Vào **Settings** → **Security**
2. Nhấp **Clear Credential**
3. Phương thức khóa trở về Blur

## Cách Hoạt động

1. **Theo dõi Hoạt động**: Marix theo dõi các sự kiện chuột, bàn phím và nhấp chuột
2. **Bộ đếm Không hoạt động**: Sau khi không có hoạt động trong thời gian chờ đã đặt, ứng dụng khóa
3. **Khóa Tức thì**: Bạn cũng có thể khóa thủ công (nếu được triển khai)
4. **Lưu trữ An toàn**: PIN/Password được lưu trữ an toàn bằng system keychain

## Cân nhắc Bảo mật

### Khóa Ứng dụng Bảo vệ Những gì

- ✅ Quyền truy cập trực quan vào danh sách máy chủ
- ✅ Xem thông tin đăng nhập đã lưu
- ✅ Truy cập các phiên terminal đang hoạt động
- ✅ Duyệt trình quản lý file SFTP

### Khóa Ứng dụng KHÔNG Bảo vệ

- ❌ Các kết nối SSH đã thiết lập (chúng vẫn hoạt động)
- ❌ Dữ liệu trên đĩa (sử dụng mã hóa hệ thống cho việc đó)
- ❌ Lưu lượng mạng (sử dụng SSH/TLS cho việc đó)

## Thực hành Tốt nhất

1. **Sử dụng chế độ Password** cho môi trường nhạy cảm
2. **Đặt thời gian chờ ngắn hơn** trong không gian làm việc chung
3. **Sử dụng thông tin xác thực duy nhất** - không sử dụng lại mật khẩu
4. **Khóa trước khi rời đi** khỏi máy tính
5. **Kết hợp với khóa hệ điều hành** để bảo mật tối đa

## Khắc phục Sự cố

### Quên PIN/Password

- Khởi động lại ứng dụng
- Khóa Ứng dụng được đặt lại khi khởi động lại
- Dữ liệu máy chủ của bạn được bảo toàn

### Ứng dụng Khóa Quá Nhanh

- Tăng thời gian chờ trong Settings
- Kiểm tra xem bạn có phiên hoạt động nào có thể ngăn phát hiện hoạt động

### Ứng dụng Không Khóa

- Đảm bảo Khóa Ứng dụng được bật
- Kiểm tra cài đặt thời gian chờ
- Xác minh cửa sổ ứng dụng đang được focus
