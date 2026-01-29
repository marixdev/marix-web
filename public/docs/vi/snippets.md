# Command Snippets

Snippets là các mẫu lệnh có thể tái sử dụng giúp bạn thực thi các lệnh thường dùng nhanh chóng trong terminal SSH.

## Giao diện Command Snippets

![Command Snippets Interface](/snippets.png)

---

## Tổng quan

Tính năng Snippets kết hợp **mẫu lệnh** với **phím tắt** tùy chọn:

- **Lưu các lệnh thường dùng** để truy cập nhanh
- **Gán phím nóng** (Ctrl+Shift+Key hoặc Cmd+Shift+Key) để thực thi ngay lập tức
- **Tổ chức theo danh mục** (System, Docker, Git, Network, v.v.)
- **Khả năng hiển thị theo phạm vi** - toàn cục, theo host, hoặc theo nhóm

---

## Truy cập Snippets

### Bảng Snippets

Khi kết nối đến terminal SSH, **bảng Snippets** xuất hiện ở bên phải:

- **Tìm kiếm** - Tìm snippets theo tên, lệnh, hoặc thẻ
- **Lọc theo danh mục** - Nhấp vào biểu tượng danh mục để lọc
- **Nhấp để chèn** - Nhấp vào bất kỳ snippet nào để chèn lệnh của nó
- **Thu gọn/Mở rộng** - Bật/Tắt hiển thị bảng

### Trình quản lý Snippets

Truy cập từ menu sidebar để:

- Xem tất cả snippets được tổ chức theo phạm vi
- Thêm, sửa, hoặc xóa snippets
- Quản lý các phím nóng được gán

---

## Tạo Snippets

1. Mở **Snippets Manager** từ sidebar
2. Nhấp nút **Add Snippet**
3. Điền vào form:

| Trường | Mô tả |
|--------|-------|
| Name | Tiêu đề mô tả ngắn gọn |
| Command | Lệnh shell |
| Category | Chọn từ danh mục có sẵn hoặc "Custom" |
| Scope | Global, Host, hoặc Group |
| Hotkey | Ký tự đơn tùy chọn |
| Description | Giải thích lệnh làm gì |
| Tags | Từ khóa để tìm kiếm |

### Ví dụ Snippets

| Tên | Lệnh | Danh mục | Phím nóng |
|-----|------|----------|-----------|
| Disk Usage | `df -h` | System | D |
| List All Docker | `docker ps -a` | Docker | P |
| Git Status | `git status` | Git | G |
| Check Ports | `netstat -tulpn` | Network | N |
| Tail Logs | `tail -f /var/log/syslog` | System | L |

---

## Sử dụng Phím nóng

### Phím tắt

| Nền tảng | Định dạng Phím tắt |
|----------|-------------------|
| **Windows/Linux** | `Ctrl + Shift + [Key]` |
| **macOS** | `Cmd + Shift + [Key]` |

### Phím Được Dành riêng

Một số phím được dành riêng và không thể sử dụng:

| Phím | Được Dành riêng Cho |
|------|---------------------|
| A | Add New Host |
| C | Copy |
| L | Toggle LAN Transfer |
| O | Switch Terminal/SFTP |
| T | Local Terminal |
| V | Paste |

---

## Danh mục

| Biểu tượng | Danh mục | Dùng Cho |
|------------|----------|----------|
| 🖥️ | System | Lệnh OS, dịch vụ, log |
| 🐳 | Docker | Quản lý container |
| 📦 | Git | Quản lý phiên bản |
| 🌐 | Network | Cổng, kết nối, DNS |
| 📁 | Files | Thao tác file |
| 🗄️ | Database | Lệnh database |
| ✨ | Custom | Mọi thứ khác |

---

## Các cấp độ Phạm vi

### Phạm vi Global
Hiển thị trên **tất cả** kết nối SSH. Tốt nhất cho các lệnh phổ biến.

### Phạm vi Host
Chỉ hiển thị trên một **máy chủ cụ thể**. Tốt nhất cho các lệnh đặc thù máy chủ.

### Phạm vi Group
Hiển thị trên tất cả máy chủ trong một **nhóm cụ thể**. Tốt nhất cho các lệnh đặc thù môi trường.

---

## Mẹo & Thực hành Tốt nhất

1. **Sử dụng Biến** - Để placeholder cho các phần biến đổi: `tail -f [LOG_PATH]`
2. **Kết hợp Lệnh** - Kết hợp nhiều lệnh: `cd /var/www && git pull && systemctl restart app`
3. **Tổ chức với Tags** - Thêm tags như `prod`, `dev`, `urgent` để lọc dễ hơn
4. **Sao lưu Snippets** - Được bao gồm trong bản sao lưu .marix được mã hóa

---

## Lưu trữ Dữ liệu

- Được lưu trữ cục bộ trong localStorage của trình duyệt
- Được bao gồm trong bản sao lưu được mã hóa (file .marix)
- Đồng bộ với Google Drive (nếu được bật)
- Không lưu trữ đám mây nếu không có hành động sao lưu rõ ràng

---

## Khắc phục Sự cố

| Vấn đề | Giải pháp |
|--------|-----------|
| Phím nóng Không Hoạt động | Kiểm tra xung đột, đảm bảo terminal đang được focus |
| Snippet Không Xuất hiện | Kiểm tra phạm vi khớp với kết nối hiện tại |
| Lệnh Không Thực thi | Kiểm tra trạng thái terminal, vấn đề quyền |
