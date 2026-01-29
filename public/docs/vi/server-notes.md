# Server Notes (Ghi chú Nhanh)

Marix cung cấp tính năng **Server Notes** cho phép bạn đính kèm ghi chú cá nhân vào mỗi máy chủ. Điều này hữu ích để ghi chép cấu hình máy chủ, nhắc nhở bảo trì, hoặc thông tin tham khảo nhanh.

## Giao diện Server Notes

![Server Notes Interface](/note.png)

## Tính năng

- **Ghi chú Theo Máy chủ**: Mỗi máy chủ có thể có ghi chú riêng
- **Tự động Lưu**: Thay đổi được lưu tự động khi bạn gõ (debounce 500ms)
- **Hỗ trợ Rich Text**: Văn bản thuần với xuống dòng
- **Chỉ báo Trực quan**: Máy chủ có ghi chú hiển thị biểu tượng ghi chú đầy
- **Đồng bộ với Dữ liệu Máy chủ**: Ghi chú được bao gồm trong bản sao lưu máy chủ

## Sử dụng

### Mở Ghi chú

1. Kết nối đến máy chủ (SSH terminal hoặc SFTP)
2. Nhấp nút **Notes** trong thanh công cụ phía trên (biểu tượng bút chì)
3. Popup ghi chú nhanh xuất hiện ở góc dưới bên phải

### Viết Ghi chú

- Chỉ cần gõ trong textarea
- Ghi chú được **tự động lưu** sau 500ms không hoạt động
- Chỉ báo "Saving..." hiển thị khi đang lưu
- Nhấn `Escape` hoặc nhấp bên ngoài để đóng

### Chỉ báo Trực quan

| Trạng thái Biểu tượng | Ý nghĩa |
|-----------------------|---------|
| Outline (trống) | Không có ghi chú cho máy chủ này |
| Filled (đặc) | Máy chủ có ghi chú |
| Màu Amber/Yellow | Ghi chú tồn tại |

## Trường hợp Sử dụng

### Cấu hình Máy chủ

```
Web Server - Production
-----------------------
IP: 192.168.1.100
Nginx: /etc/nginx/sites-enabled/
Logs: /var/log/nginx/
SSL Cert hết hạn: 2026-12-15
```

### Nhắc nhở Bảo trì

```
TODO:
- [ ] Cập nhật OpenSSL (CVE-2025-XXXX)
- [ ] Đổi thông tin đăng nhập database
- [ ] Tăng swap lên 4GB
```

### Tham khảo Nhanh

```
Lệnh Phổ biến:
- Khởi động lại Nginx: sudo systemctl restart nginx
- Kiểm tra đĩa: df -h
- Xem kết nối: netstat -tuln

Database:
- User: app_user
- Port: 5432
```

## Lưu trữ Dữ liệu

- Ghi chú được lưu trữ như một phần của cấu hình máy chủ
- ✅ **Bao gồm trong sao lưu cục bộ** (tính năng sao lưu Marix)
- ✅ **Bao gồm trong sao lưu đám mây** (Google Drive, Box)
- ✅ **Được mã hóa** khi sử dụng mã hóa sao lưu

## Phím tắt

| Phím | Hành động |
|------|-----------|
| `Escape` | Đóng popup ghi chú |
| Nhấp bên ngoài | Đóng popup ghi chú |

## Câu hỏi Thường gặp

### Ghi chú có được mã hóa không?

Ghi chú được lưu trữ dưới dạng văn bản thuần trong file cấu hình máy chủ. Khi bạn tạo bản sao lưu được mã hóa, ghi chú được mã hóa cùng với tất cả dữ liệu máy chủ.

### Tôi có thể sử dụng Markdown không?

Ghi chú hiện tại chỉ hỗ trợ văn bản thuần. Hiển thị Markdown có thể được thêm trong phiên bản tương lai.

### Có giới hạn ký tự không?

Không có giới hạn cứng, nhưng ghi chú rất dài có thể ảnh hưởng hiệu suất. Khuyến nghị giữ ghi chú ngắn gọn.
