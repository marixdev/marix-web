# Truyền File LAN

Truyền file giữa các thiết bị trên cùng mạng nội bộ mà không cần máy chủ.

## Giao diện Truyền File LAN

![Giao diện Truyền File LAN](/sendfile.png)

## Yêu cầu

> ⚠️ **Quan trọng:** Cả người gửi và người nhận phải bật **LAN Discovery**.
> 
> Nhấp nút 🌐 trong thanh header hoặc sử dụng `Ctrl+Shift+L` để bật/tắt.

- Cả hai thiết bị trên cùng một mạng (WiFi/LAN)
- LAN Discovery được bật trên cả hai thiết bị
- Marix đang chạy trên cả hai thiết bị

## Mở Truyền File LAN

Nhấp **"Send Files"** trong thanh bên.

## Gửi File

### Bước 1: Bật LAN Discovery
Nhấp biểu tượng **🌐** (quả địa cầu) trong thanh header.

### Bước 2: Chọn File
1. Vào Send Files → tab **Send**
2. Nhấp **"Select Files"** hoặc **"Select Folder"**
3. Các mục đã chọn xuất hiện trong danh sách
4. Nhấp × để xóa một mục

### Bước 3: Lấy Mã Ghép đôi
Ghi lại **Mã Ghép đôi** 6 chữ số được hiển thị.

### Bước 4: Chia sẻ Mã
Cho người nhận biết mã ghép đôi của bạn (nói trực tiếp hoặc qua tin nhắn).

### Bước 5: Bắt đầu Gửi
1. Nhấp **"Start Sending"**
2. Trạng thái: "Waiting for receiver..."
3. Truyền bắt đầu khi người nhận kết nối

## Nhận File

### Bước 1: Bật LAN Discovery
Nhấp biểu tượng **🌐** (quả địa cầu) trong thanh header.

### Bước 2: Kết nối
1. Vào Send Files → tab **Receive**
2. Nhập mã ghép đôi 6 chữ số từ người gửi
3. Nhấp **"Connect"**

### Bước 3: Nhận
- Thiết bị tự động kết nối
- Truyền bắt đầu ngay lập tức
- File được lưu vào thư mục Downloads của bạn

## Tiến trình Truyền

Trong quá trình truyền bạn sẽ thấy:
- Thanh tiến trình với phần trăm hoàn thành
- Chỉ số tốc độ (ví dụ: "5.2 MB/s")
- File hiện tại đang được truyền

## Hủy Truyền

Nhấp nút **"Cancel"** để dừng truyền bất cứ lúc nào.

## Khắc phục Sự cố

### Không Tìm thấy Người gửi/Người nhận

1. Đảm bảo cả hai thiết bị đều **BẬT LAN Discovery** (biểu tượng 🌐 đang hoạt động)
2. Cả hai thiết bị phải ở trên **cùng một mạng nội bộ**
3. Kiểm tra firewall không chặn Marix
4. Thử làm mới kết nối

### Truyền Thất bại

- File lớn có thể mất thời gian - hãy kiên nhẫn
- Đảm bảo kết nối mạng ổn định
- Thử gửi lại với mã ghép đôi mới
- Kiểm tra dung lượng đĩa còn trống trên máy người nhận

### Tốc độ Truyền Chậm

- Sử dụng Ethernet có dây để truyền nhanh hơn
- Giảm tắc nghẽn mạng
- Đóng các ứng dụng tiêu tốn băng thông
- Kiểm tra hiệu suất router/mạng

## Bảo mật

- Truyền sử dụng **mã hóa end-to-end**
- Mã ghép đôi 6 chữ số đảm bảo chỉ người nhận dự định mới nhận được file
- Không có dữ liệu đi qua máy chủ bên ngoài
- File truyền trực tiếp giữa các thiết bị

## Mẹo

- **Thư mục lớn**: Chọn thư mục thay vì từng file riêng lẻ
- **Nhiều file**: Bạn có thể chọn nhiều mục cùng lúc
- **Xác minh nhận**: Xác nhận với người nhận rằng file đã đến đúng
- **Chất lượng mạng**: Mạng tốt hơn = truyền nhanh hơn
