# Quản lý Cloudflare DNS

Quản lý bản ghi Cloudflare DNS trực tiếp từ Marix.

## Giao diện Quản lý Cloudflare DNS

![Giao diện Quản lý Cloudflare DNS](/cf.png)

## Thiết lập

### Bước 1: Lấy API Token

1. Truy cập [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Điều hướng đến Profile → API Tokens
3. Nhấp "Create Token"
4. Sử dụng template "Edit zone DNS" hoặc tạo tùy chỉnh với:
   - Zone.DNS: Edit
   - Zone.Zone: Read
5. Sao chép token

### Bước 2: Cấu hình trong Marix

1. Vào **Settings** trong thanh bên
2. Tìm phần **"Cloudflare API Token"**
3. Nhấp **"Add Token"**
4. Dán token của bạn
5. Nhấp **"Save"**

## Sử dụng Cloudflare DNS

1. Nhấp **"Cloudflare"** trong thanh bên
2. Các tên miền của bạn được tải trong dropdown
3. Chọn một tên miền
4. Bản ghi DNS cho tên miền đó xuất hiện

## Xem Bản ghi DNS

Bảng hiển thị:

| Cột | Mô tả |
|-----|-------|
| Type | Loại bản ghi (A, AAAA, CNAME, MX, TXT, v.v.) |
| Name | Tên bản ghi/subdomain |
| Content | Giá trị bản ghi (IP, hostname, text) |
| TTL | Time-to-live (Auto hoặc giây) |
| Proxy | Proxy qua Cloudflare hoặc chỉ DNS |

## Thêm Bản ghi DNS

### Bước 1: Mở Hộp thoại
Nhấp nút **"Add Record"**

### Bước 2: Điền Chi tiết

| Trường | Mô tả |
|--------|-------|
| Type | Chọn: A, AAAA, CNAME, MX, TXT, SRV, v.v. |
| Name | Subdomain (ví dụ: "www") hoặc "@" cho root |
| Content | Giá trị (IP cho A, hostname cho CNAME, v.v.) |
| TTL | Time-to-live: Auto hoặc giây tùy chỉnh |
| Proxy | Bật/tắt: Proxied (đám mây cam) hoặc chỉ DNS (xám) |
| Comment | Ghi chú tùy chọn |

### Bước 3: Tạo
Nhấp **"Create"**

## Các Loại Bản ghi Phổ biến

### A Record
Trỏ tên miền đến địa chỉ IPv4.

| Trường | Ví dụ |
|--------|-------|
| Type | A |
| Name | @ (hoặc www) |
| Content | 192.168.1.100 |

### AAAA Record
Trỏ tên miền đến địa chỉ IPv6.

| Trường | Ví dụ |
|--------|-------|
| Type | AAAA |
| Name | @ |
| Content | 2001:db8::1 |

### CNAME Record
Tạo alias đến tên miền khác.

| Trường | Ví dụ |
|--------|-------|
| Type | CNAME |
| Name | www |
| Content | example.com |

### MX Record
Chỉ định máy chủ mail.

| Trường | Ví dụ |
|--------|-------|
| Type | MX |
| Name | @ |
| Content | mail.example.com |
| Priority | 10 |

### TXT Record
Lưu trữ dữ liệu văn bản (SPF, DKIM, xác minh).

| Trường | Ví dụ |
|--------|-------|
| Type | TXT |
| Name | @ |
| Content | v=spf1 include:_spf.google.com ~all |

## Sửa Bản ghi DNS

1. Tìm bản ghi trong bảng
2. Nhấp nút **Edit** (biểu tượng bút chì)
3. Sửa đổi các trường
4. Nhấp **"Save"**

## Xóa Bản ghi DNS

1. Tìm bản ghi
2. Nhấp nút **Delete** (biểu tượng thùng rác)
3. Xác nhận xóa

## Trạng thái Proxy

| Biểu tượng | Trạng thái | Hiệu ứng |
|------------|------------|----------|
| 🟠 Đám mây cam | Proxied | Lưu lượng đi qua Cloudflare CDN |
| ⚪ Đám mây xám | Chỉ DNS | Kết nối trực tiếp đến origin |

### Khi nào Sử dụng Proxy

**Proxied (Cam):**
- Máy chủ web (HTTP/HTTPS)
- Muốn bảo vệ DDoS
- Muốn CDN caching

**Chỉ DNS (Xám):**
- Máy chủ SSH, FTP, mail
- Dịch vụ không phải HTTP
- Cần kết nối IP trực tiếp

## Làm mới Bản ghi

Nhấp nút **Refresh** bên cạnh dropdown tên miền để tải lại bản ghi.

## Mẹo

- **TTL Auto** được khuyến nghị cho hầu hết các trường hợp
- **Kiểm tra thay đổi** bằng công cụ tra cứu DNS
- **Sao lưu bản ghi** trước khi thực hiện thay đổi lớn
- **Propagation** có thể mất đến 48 giờ trên toàn cầu
