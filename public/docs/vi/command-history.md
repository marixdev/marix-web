# Command History (Gọi lại Lệnh)

Marix cung cấp tính năng **Command History** lưu trữ và gọi lại các lệnh đã thực thi trước đó cho mỗi máy chủ. Điều này giúp bạn nhanh chóng chạy lại các lệnh phổ biến mà không cần gõ lại.

## Giao diện Command History

![Command History Interface](/cmh.png)

## Tính năng

- **Lịch sử Theo Máy chủ**: Mỗi máy chủ duy trì lịch sử lệnh riêng
- **Chỉ Lưu trữ Cục bộ**: Các lệnh được lưu trữ cục bộ, không bao giờ đồng bộ hoặc sao lưu
- **Lọc Dữ liệu Nhạy cảm**: Tự động lọc các lệnh chứa mật khẩu, token, hoặc secret
- **LRU Pruning**: Tự động xóa các lệnh cũ (tối đa 50 mỗi máy chủ)
- **Bộ đếm Thực thi**: Theo dõi số lần mỗi lệnh đã được sử dụng
- **Tìm kiếm**: Lọc nhanh lệnh với tìm kiếm mờ

## Cách Bật

Command History **bị tắt theo mặc định** vì lý do bảo mật. Để bật:

1. Mở **Settings** (biểu tượng bánh răng trong sidebar)
2. Điều hướng đến phần **Terminal**
3. Bật **Enable Command Recall**

## Sử dụng

### Mở Command History

Khi trong phiên terminal, nhấn:
- Phím **`Tab`** khi đầu vào terminal trống (con trỏ ở dòng trống)
- Hoặc nhấp nút **History** trong thanh công cụ terminal

### Phím tắt

| Phím | Hành động |
|------|-----------|
| `Tab` (đầu vào trống) | Mở popup gọi lại lệnh |
| `↑` / `↓` | Điều hướng qua các lệnh |
| `Enter` | Thực thi lệnh đã chọn |
| `Escape` | Đóng popup |
| `Delete` / `Backspace` | Xóa lệnh đã chọn |

### Hành động Popup

- **Nhấp** một lệnh để thực thi ngay lập tức
- **Tìm kiếm** bằng cách gõ trong ô tìm kiếm
- **Xóa** các lệnh riêng lẻ với biểu tượng thùng rác
- **Lưu thành Snippet** để chuyển đổi lệnh thành snippet có thể tái sử dụng

## Bảo mật & Riêng tư

### Lệnh được Lọc

Các lệnh khớp với các mẫu sau **không bao giờ được lưu trữ**:

- Các lệnh chứa `password`, `passwd`, `secret`, `token`
- Các lệnh có `api_key` hoặc `apikey`
- Các lệnh MySQL với cờ `-p` (mật khẩu)
- `sudo -S` (mật khẩu stdin)
- Các lệnh sử dụng `sshpass` hoặc `expect` với mật khẩu
- Export biến môi trường với giá trị nhạy cảm

### Lưu trữ Dữ liệu

- Được lưu trong `localStorage` của trình duyệt
- **Không bao giờ đồng bộ** với dịch vụ đám mây
- **Không bao giờ bao gồm** trong bản sao lưu
- Bị xóa khi bạn xóa dữ liệu trình duyệt

### Xóa Lịch sử

Để xóa lịch sử lệnh:

1. Mở **Settings** → **Terminal**
2. Nhấp **Clear Command History**

Hoặc xóa theo máy chủ từ popup gọi lại lệnh.

## Giới hạn

| Giới hạn | Giá trị |
|----------|---------|
| Số lệnh tối đa mỗi máy chủ | 50 |
| Độ dài lệnh tối thiểu | 2 ký tự |

## Câu hỏi Thường gặp

### Tại sao một số lệnh không được lưu?

Các lệnh chứa các mẫu nhạy cảm (mật khẩu, token, v.v.) được tự động lọc vì lý do bảo mật.

### Tôi có thể xuất lịch sử lệnh không?

Không, lịch sử lệnh được thiết kế chỉ dùng cục bộ và không thể xuất vì lý do bảo mật.

### Lịch sử lệnh có đồng bộ giữa các thiết bị không?

Không, lịch sử lệnh được lưu trữ cục bộ và không bao giờ được đồng bộ.

### Làm thế nào để tắt lịch sử lệnh?

Vào Settings → Terminal → Tắt "Enable Command Recall". Lịch sử hiện có được giữ lại cho đến khi bạn xóa thủ công.
