# Benchmark Máy Chủ

Kiểm tra và đo lường hiệu suất máy chủ của bạn trực tiếp từ terminal SSH với các bài benchmark toàn diện về hệ thống, ổ đĩa và mạng.

## Giao Diện Benchmark Máy Chủ

![Giao Diện Benchmark Máy Chủ](/benchmark.png)

## Tổng Quan

Tính năng Benchmark Máy Chủ cung cấp phân tích hiệu suất hoàn chỉnh cho máy chủ từ xa của bạn, bao gồm:

- **Thông Tin Hệ Thống**: Chi tiết phần cứng và phần mềm
- **Hiệu Suất Ổ Đĩa**: Tốc độ đọc/ghi tuần tự, độ trễ I/O và IOPS ngẫu nhiên
- **Tốc Độ Mạng**: Kiểm tra tốc độ đa vùng với các phép đo tải xuống, tải lên và độ trễ

## Cách Sử Dụng

### Bắt Đầu Benchmark

1. Kết nối với máy chủ qua SSH
2. Nhấp vào nút **📊 Benchmark** ở chân terminal
3. (Tùy chọn) Đánh dấu **"Upload to paste.dev"** để chia sẻ kết quả trực tuyến
4. Nhấp **Start Benchmark**

### Các Giai Đoạn Benchmark

Benchmark chạy qua 4 giai đoạn:

| Giai Đoạn | Mô Tả | Thời Gian |
|-----------|-------|-----------|
| 1. Thông Tin Hệ Thống | Thu thập thông tin OS, CPU, RAM, ổ đĩa | ~2 giây |
| 2. Kiểm Tra Ổ Đĩa | Chạy các bài test dd, ioping và fio | ~45 giây |
| 3. Kiểm Tra Mạng | Kiểm tra tốc độ đến 18 vùng toàn cầu | ~3-5 phút |
| 4. Hoàn Thành | Hiển thị kết quả và tùy chọn xuất | - |

## Chi Tiết Benchmark

### Thông Tin Hệ Thống

Dữ liệu thu thập bao gồm:

| Trường | Mô Tả |
|--------|-------|
| OS | Tên và phiên bản hệ điều hành |
| Kernel | Phiên bản Linux kernel |
| Architecture | Kiến trúc CPU (x86_64, arm64, v.v.) |
| Hostname | Tên máy chủ |
| CPU Model | Tên và thông số bộ xử lý |
| CPU Cores | Số lõi CPU |
| CPU Frequency | Tần số CPU hiện tại |
| Memory | RAM đã dùng / Tổng RAM |
| Swap | Dung lượng swap đã dùng / Tổng |
| Disk | Dung lượng ổ đĩa đã dùng / Tổng |
| Uptime | Thời gian hoạt động máy chủ |
| Load Average | Trung bình tải 1/5/15 phút |
| Virtualization | Loại VM (KVM, VMware, OpenVZ, v.v.) |

### Hiệu Suất Ổ Đĩa

#### Ghi/Đọc Tuần Tự (dd)

- **Phương Pháp**: `dd if=/dev/zero of=test bs=64k count=16k conv=fdatasync`
- **Số Lần Chạy**: 3 lần, lấy trung bình để đảm bảo độ chính xác
- **Vị Trí Test**: Thư mục home (không phải /tmp để tránh tmpfs)
- **Đo Lường**: Thông lượng tuần tự tính bằng MB/s hoặc GB/s

#### Độ Trễ I/O (ioping)

- **Phương Pháp**: `ioping -c 10 -q /`
- **Đo Lường**: Thời gian phản hồi I/O ổ đĩa tính bằng micro giây
- **Mục Tiêu**: Hệ thống file gốc để đo độ trễ ổ đĩa thực

#### IOPS Ngẫu Nhiên 4K (fio)

- **Phương Pháp**: fio với đọc/ghi ngẫu nhiên 4K, độ sâu hàng đợi 64
- **Thời Gian Chạy**: 30 giây
- **Đo Lường**: 
  - Read IOPS
  - Write IOPS
  - Read Bandwidth
  - Write Bandwidth

> **Lưu Ý**: Nếu `fio` hoặc `ioping` chưa được cài đặt, benchmark sẽ tự động thử cài đặt chúng.

### Tốc Độ Mạng

Các bài test được thực hiện với máy chủ Speedtest.net tại 18 vùng toàn cầu:

| Khu Vực | Địa Điểm |
|---------|----------|
| Châu Á | Singapore, Tokyo, Hong Kong, Seoul, Mumbai |
| Châu Âu | London, Frankfurt, Paris, Amsterdam |
| Châu Mỹ | Los Angeles, New York, Chicago, Toronto, São Paulo |
| Châu Đại Dương | Sydney, Auckland |
| Trung Đông/Châu Phi | Dubai, Johannesburg |

Với mỗi máy chủ, benchmark đo:
- **Tốc Độ Tải Xuống**: MB/s hoặc Gbps
- **Tốc Độ Tải Lên**: MB/s hoặc Gbps
- **Độ Trễ**: Thời gian khứ hồi tính bằng mili giây

## Tùy Chọn Xuất

Sau khi benchmark hoàn thành, bạn có thể xuất kết quả ở nhiều định dạng:

### 🌐 HTML

File HTML độc lập với bố cục đã được định dạng. Tính năng:
- Thiết kế giao diện tối
- Bố cục responsive
- Tất cả dữ liệu benchmark trong các thẻ
- Chân trang với liên kết marix.dev và GitHub

### 📋 JSON

Dữ liệu JSON có cấu trúc với:
- Kết quả benchmark hoàn chỉnh
- Dấu thời gian
- Đối tượng meta với liên kết website và GitHub
- Định dạng có thể đọc bằng máy để tự động hóa

### 🖼️ PNG

Ảnh chụp màn hình độ phân giải cao:
- Tỷ lệ 2x cho màn hình retina
- Màu RGB (tương thích html2canvas)
- Bao gồm tất cả các phần
- Chân trang có thương hiệu

### 📄 TXT

File văn bản định dạng ASCII art:
- Ký tự vẽ hộp cho bảng
- Thân thiện với copy-paste
- Đầu ra kiểu terminal
- Chân trang có liên kết

## Tích Hợp paste.dev

Chia sẻ kết quả benchmark của bạn trực tuyến chỉ với một cú nhấp:

### Cách Hoạt Động

1. Đánh dấu **"Upload to paste.dev"** trước khi bắt đầu benchmark
2. Chạy benchmark
3. Sau khi hoàn thành, kết quả tự động được tải lên
4. Một liên kết có thể chia sẻ xuất hiện với các nút **Copy** và **Open**

### Tính Năng

- **Tải Lên Tự Động**: Định dạng TXT được tải lên khi benchmark hoàn thành
- **Sao Chép Liên Kết**: Nhấp 📋 Copy để sao chép URL vào clipboard
- **Mở Liên Kết**: Nhấp 🔗 Open để xem trong trình duyệt
- **Chia Sẻ Công Khai**: Bất kỳ ai có liên kết đều có thể xem kết quả

## Yêu Cầu

### Yêu Cầu Máy Chủ

| Công Cụ | Mục Đích | Tự Động Cài Đặt |
|---------|----------|-----------------|
| `dd` | Tốc độ ghi/đọc ổ đĩa | Thường đã cài sẵn |
| `ioping` | Đo độ trễ I/O | ✅ Có |
| `fio` | Kiểm tra IOPS ngẫu nhiên | ✅ Có |
| `curl` | Kiểm tra tốc độ mạng | Thường đã cài sẵn |

### Trình Quản Lý Gói Được Hỗ Trợ

Tự động cài đặt hoạt động với:
- **apt** (Debian, Ubuntu)
- **yum** (CentOS, RHEL)
- **dnf** (Fedora)
- **pacman** (Arch Linux)
- **apk** (Alpine Linux)
- **zypper** (openSUSE)

## Xử Lý Sự Cố

### Bài Test Ổ Đĩa Hiển Thị Tốc Độ Không Thực Tế (5+ GB/s)

**Nguyên Nhân**: `/tmp` được mount dưới dạng tmpfs (ổ đĩa RAM)

**Giải Pháp**: Benchmark tự động phát hiện điều này và sử dụng thư mục home thay thế.

### Kiểm Tra Mạng Mất Quá Nhiều Thời Gian

**Nguyên Nhân**: Một số vùng có thể chậm hoặc không thể truy cập

**Giải Pháp**: Benchmark kiểm tra nhiều vùng. Các vùng chậm sẽ hết thời gian chờ sau 30 giây.

### Lỗi "Permission Denied" Khi Cài Đặt Công Cụ

**Nguyên Nhân**: Người dùng không có quyền sudo

**Giải Pháp**: Yêu cầu quản trị viên máy chủ cài đặt `fio` và `ioping`:

```bash
# Debian/Ubuntu
sudo apt install fio ioping

# CentOS/RHEL
sudo yum install fio ioping

# Fedora
sudo dnf install fio ioping
```

### Lỗi Xuất PNG "oklch"

**Nguyên Nhân**: html2canvas không hỗ trợ định dạng màu oklch

**Giải Pháp**: Đã sửa trong v1.0.19. PNG giờ sử dụng màu RGB hex.

## Ví Dụ Đầu Ra

### Mẫu Định Dạng TXT

```
════════════════════════════════════════════════════════════
  MARIX SERVER BENCHMARK - my-server.com
  1/29/2026, 10:30:45 AM
════════════════════════════════════════════════════════════

┌────────────────────────────────────────────────────────────┐
│                    SYSTEM INFORMATION                      │
└────────────────────────────────────────────────────────────┘
  OS            : Ubuntu 22.04.3 LTS
  CPU           : AMD EPYC 7B13 64-Core Processor
  CPU Cores     : 4
  Memory        : 2.1 GB / 8.0 GB (26%)
  Disk          : 45 GB / 160 GB (28%)
  Virtualization: KVM

┌────────────────────────────────────────────────────────────┐
│                    DISK PERFORMANCE                        │
└────────────────────────────────────────────────────────────┘
  Sequential Write : 580 MB/s
  Sequential Read  : 1.2 GB/s
  I/O Latency      : 227 µs

  Random 4K IOPS (fio):
    Read IOPS   : 45,230
    Write IOPS  : 15,076
    Read BW     : 176.7 MB/s
    Write BW    : 58.9 MB/s

┌────────────────────────────────────────────────────────────┐
│                    NETWORK SPEED                           │
└────────────────────────────────────────────────────────────┘
  Singapore    : ↓ 892 Mbps  ↑ 456 Mbps  (12ms)
  Tokyo        : ↓ 756 Mbps  ↑ 389 Mbps  (45ms)
  Frankfurt    : ↓ 234 Mbps  ↑ 178 Mbps  (156ms)
  ...

────────────────────────────────────────────────────────────
  marix.dev | https://github.com/marixdev/marix
  Generated by Marix SSH Client v1.0.19
────────────────────────────────────────────────────────────
```

## Lưu Ý Bảo Mật

- Benchmark chạy các lệnh trên máy chủ từ xa qua SSH
- Không có dữ liệu nào được gửi đến máy chủ bên ngoài ngoại trừ Speedtest.net (để kiểm tra tốc độ)
- Tải lên paste.dev là tùy chọn và do người dùng khởi tạo
- Các file test tạm thời được tự động dọn dẹp sau benchmark
