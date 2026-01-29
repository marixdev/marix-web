# Công cụ Mạng

Bộ công cụ chẩn đoán mạng toàn diện được tích hợp trong Marix.

## Giao diện Công cụ Mạng

![Giao diện Công cụ Mạng](/loockup.png)

## Mở Công cụ Mạng

Nhấp **"Lookup"** trong thanh bên.

## Công cụ Có sẵn

| Công cụ | Chức năng | Ví dụ Đầu vào |
|---------|-----------|---------------|
| A Record | Lấy địa chỉ IPv4 | example.com |
| AAAA Record | Lấy địa chỉ IPv6 | example.com |
| MX Lookup | Lấy máy chủ mail | example.com |
| TXT Record | Lấy bản ghi TXT | example.com |
| SPF Check | Xác minh bản ghi SPF | example.com |
| CNAME Lookup | Lấy tên chuẩn | www.example.com |
| NS Lookup | Lấy name server | example.com |
| SOA Record | Lấy chi tiết SOA | example.com |
| PTR Lookup | DNS ngược | 8.8.8.8 |
| Ping | Ping một host | example.com |
| Traceroute | Theo dõi đường mạng | example.com |
| TCP Port | Kiểm tra cổng có mở không | example.com |
| Web Check | Kiểm tra trạng thái website | example.com |
| Blacklist | Kiểm tra IP blacklist | 1.2.3.4 |
| DNS Check | Phân tích DNS đầy đủ | example.com |
| IP Info | Lấy thông tin sở hữu IP | 8.8.8.8 |
| WHOIS | Thông tin đăng ký tên miền | example.com |

## Sử dụng Công cụ Mạng

### Bước 1: Chọn Công cụ
Nhấp vào một công cụ từ thanh bên trái.

### Bước 2: Nhập Mục tiêu
- Tên miền, địa chỉ IP, hoặc hostname
- Với TCP Port: cũng nhập số cổng

### Bước 3: Chạy
Nhấp nút **"Run"** hoặc nhấn Enter.

### Bước 4: Xem Kết quả
- **Badge xanh** = Thành công
- **Badge đỏ** = Thất bại/Lỗi
- Dấu thời gian hiển thị khi chạy

## Công cụ DNS

### A Record
Trả về địa chỉ IPv4 cho một tên miền.

```
example.com → 93.184.216.34
```

### AAAA Record
Trả về địa chỉ IPv6 cho một tên miền.

```
example.com → 2606:2800:220:1:248:1893:25c8:1946
```

### MX Lookup
Trả về máy chủ mail exchange cho một tên miền.

```
example.com →
  10 mail1.example.com
  20 mail2.example.com
```

### TXT Record
Trả về bản ghi văn bản (thường dùng cho xác minh, SPF, DKIM).

```
example.com → "v=spf1 include:_spf.google.com ~all"
```

### CNAME Lookup
Trả về tên chuẩn (alias) cho một subdomain.

```
www.example.com → example.com
```

### NS Lookup
Trả về name server cho một tên miền.

```
example.com →
  ns1.example.com
  ns2.example.com
```

### PTR Lookup (DNS Ngược)
Trả về hostname cho một địa chỉ IP.

```
8.8.8.8 → dns.google
```

## Chẩn đoán Mạng

### Ping
Kiểm tra kết nối và đo độ trễ.

```
Pinging example.com:
  Reply: 64 bytes, time=23ms
  Reply: 64 bytes, time=21ms
  Average: 22ms
```

### Traceroute
Theo dõi đường mạng đến đích.

```
1  router.local (192.168.1.1) 1ms
2  isp-gateway (10.0.0.1) 5ms
3  backbone.isp.net 12ms
...
```

### Kiểm tra TCP Port
Kiểm tra xem một cổng cụ thể có mở không.

**Nút cổng nhanh:** SSH(22), HTTP(80), HTTPS(443), MySQL(3306), v.v.

```
example.com:443 → Open
example.com:22 → Closed/Filtered
```

### Web Check
Kiểm tra kết nối HTTP/HTTPS và phản hồi.

```
https://example.com
  Status: 200 OK
  Response time: 145ms
  SSL: Valid
```

## Công cụ IP

### IP Info
Lấy thông tin sở hữu và vị trí cho một IP.

```
8.8.8.8 →
  Organization: Google LLC
  Country: United States
  ASN: AS15169
```

### Kiểm tra Blacklist
Kiểm tra xem một IP có trong danh sách spam/lạm dụng không.

```
Checking 1.2.3.4:
  ✅ Spamhaus: Clean
  ✅ Barracuda: Clean
  ⚠️ SORBS: Listed
```

## Công cụ Tên miền

### WHOIS
Lấy thông tin đăng ký tên miền.

```
example.com →
  Registrar: Example Registrar
  Created: 1995-08-14
  Expires: 2025-08-13
  Status: clientTransferProhibited
```

### DNS Check
Kiểm tra sức khỏe DNS toàn diện.

```
Checking example.com:
  ✅ NS records found
  ✅ A record resolves
  ✅ MX records configured
  ✅ SPF record valid
```

## Mẹo

- **Sao chép kết quả** bằng cách chọn và sử dụng `Ctrl+C`
- **Chạy nhiều kiểm tra** trên cùng một tên miền
- Kết quả hiển thị **dấu thời gian** để tham khảo
- Sử dụng **IP Info** để điều tra IP không xác định
- **Kiểm tra blacklist** trước khi gửi email từ IP mới
