# Trình quản lý File SFTP

SFTP (SSH File Transfer Protocol) cung cấp truyền file an toàn qua kết nối SSH được mã hóa.

## Mở SFTP

### Từ Kết nối SSH Hiện có

1. Kết nối với máy chủ SSH
2. Nhấp nút **SFTP** ở đầu phiên
3. Hoặc sử dụng phím tắt: `Ctrl+Shift+O`

### Kết nối SFTP Trực tiếp

1. Nhấp chuột phải vào máy chủ SSH trong danh sách Hosts
2. Chọn **"SFTP"** từ menu ngữ cảnh

## Bố cục Giao diện

![Giao diện SFTP](/sftp.png)

## Điều khiển Điều hướng

| Nút | Chức năng |
|-----|-----------|
| ← | Quay lại trong lịch sử |
| → | Tiến lên trong lịch sử |
| ↑ | Đến thư mục cha |
| 🏠 | Đến thư mục home |
| 🔄 | Làm mới thư mục hiện tại |
| 🔍 | Tìm kiếm/lọc file |
| 💾 | Chọn ổ đĩa (Windows/Linux) |

## Thao tác File

### Tải xuống File (Remote → Local)

1. Điều hướng đến file trên bảng **REMOTE** (phải)

**Phương pháp A: Kéo & Thả**
- Nhấp và kéo file đến bảng LOCAL (trái)
- Thả vào thư mục mong muốn

**Phương pháp B: Nhấp chuột phải**
- Nhấp chuột phải vào file
- Chọn **"Download"**
- File tải xuống thư mục local hiện tại

### Tải lên File (Local → Remote)

1. Điều hướng đến file trên bảng **LOCAL** (trái)

**Phương pháp A: Kéo & Thả**
- Nhấp và kéo file đến bảng REMOTE (phải)
- Thả vào thư mục mong muốn

**Phương pháp B: Nhấp chuột phải**
- Nhấp chuột phải vào file
- Chọn **"Upload"**
- File tải lên thư mục remote hiện tại

### Tạo Thư mục Mới

1. Điều hướng đến thư mục đích
2. Nhấp chuột phải vào vùng trống
3. Chọn **"New Folder"**
4. Nhập tên thư mục
5. Nhấp OK

### Tạo File Mới

1. Điều hướng đến thư mục đích
2. Nhấp chuột phải vào vùng trống
3. Chọn **"New File"**
4. Nhập tên file
5. Nhấp OK (tạo file trống)

### Xóa File hoặc Thư mục

1. Nhấp chuột phải vào file hoặc thư mục
2. Chọn **"Delete"**
3. Xác nhận xóa

### Đổi tên File hoặc Thư mục

1. Nhấp chuột phải vào file hoặc thư mục
2. Chọn **"Rename"**
3. Nhập tên mới
4. Nhấp OK

## Thay đổi Quyền (chmod)

1. Nhấp chuột phải vào file hoặc thư mục (bảng REMOTE)
2. Chọn **"Change Permissions"**
3. Nhập quyền theo định dạng bát phân (ví dụ: `755`, `644`)
4. Nhấp OK

### Giá trị Quyền Phổ biến

| Giá trị | Ý nghĩa | Trường hợp Sử dụng |
|---------|---------|-------------------|
| `755` | Owner: đầy đủ, Others: đọc+thực thi | Thư mục, file thực thi |
| `644` | Owner: đọc+ghi, Others: đọc | File thông thường |
| `600` | Chỉ owner | File riêng tư, SSH key |
| `777` | Mọi người: quyền đầy đủ | Không khuyến nghị |

## Chỉnh sửa File Từ xa

1. Tìm file văn bản trên bảng REMOTE
2. Nhấp đúp vào nó (hoặc nhấp chuột phải → Edit)
3. File mở trong trình soạn thảo tích hợp
4. Thực hiện thay đổi
5. Nhấp **Save** hoặc nhấn `Ctrl+S`
6. File được lưu lại máy chủ

### Các Loại File Được Hỗ trợ

**File code:**
`.js`, `.ts`, `.py`, `.php`, `.java`, `.c`, `.cpp`, `.go`, `.rs`, `.rb`

**File cấu hình:**
`.json`, `.yml`, `.yaml`, `.toml`, `.ini`, `.conf`, `.env`

**File web:**
`.html`, `.css`, `.scss`, `.vue`, `.svelte`

**Script:**
`.sh`, `.bash`, `.ps1`, `.bat`

**Khác:**
`.txt`, `.md`, `.log`, `Dockerfile`, `Makefile`

## Nén File

Tạo file nén từ file hoặc thư mục trên máy chủ từ xa:

1. Nhấp chuột phải vào file hoặc thư mục (bảng REMOTE)
2. Di chuột qua **"Compress"**
3. Chọn định dạng:
   - **ZIP** - Phổ quát, hoạt động mọi nơi
   - **TAR.GZ** - Tốt nhất cho Linux/Unix
   - **TAR** - Archive không nén

File nén được tạo trong cùng thư mục.

## Giải nén Archive

Giải nén file nén trên máy chủ từ xa:

1. Nhấp chuột phải vào file archive (bảng REMOTE)
2. Chọn **"Extract Here"**
3. File được giải nén vào thư mục hiện tại

### Định dạng Archive Được Hỗ trợ

| Định dạng | Phần mở rộng |
|-----------|--------------|
| ZIP | `.zip` |
| TAR | `.tar`, `.tar.gz`, `.tgz`, `.tar.bz2`, `.tar.xz` |
| GZIP | `.gz` |
| BZIP2 | `.bz2` |
| XZ | `.xz` |
| 7-Zip | `.7z` |
| RAR | `.rar` |

> **Lưu ý:** Giải nén yêu cầu công cụ phù hợp được cài đặt trên máy chủ (unzip, tar, 7z, unrar).

## Thuộc tính File

Xem thông tin chi tiết về file và thư mục:

1. Nhấp chuột phải vào file hoặc thư mục
2. Chọn **"Properties"**
3. Xem chi tiết:

| Thuộc tính | Mô tả |
|------------|-------|
| Name | Tên file hoặc thư mục |
| Path | Vị trí đường dẫn đầy đủ |
| Size | Kích thước file theo bytes/KB/MB/GB |
| Type | File hoặc Directory |
| Permissions | Đọc/ghi/thực thi (ví dụ: 755) |
| Owner | User sở hữu (chỉ remote) |
| Group | Group sở hữu (chỉ remote) |
| Modified | Ngày sửa đổi cuối cùng |
| Created | Ngày tạo (nếu có) |
| Accessed | Ngày truy cập cuối cùng |

## Hàng đợi Truyền

Khi truyền nhiều file:
- Thanh tiến trình hiển thị hoàn thành tổng thể
- Tiến trình file riêng lẻ được hiển thị
- Nhấp ✕ để hủy truyền
- Truyền thất bại có thể thử lại

## Phím Tắt

| Phím tắt | Hành động |
|----------|-----------|
| `Ctrl+Shift+O` | Chuyển đổi Terminal/SFTP |
| `F2` | Đổi tên mục đã chọn |
| `Delete` | Xóa mục đã chọn |
| `Ctrl+C` | Sao chép đường dẫn |
| `Ctrl+R` | Làm mới thư mục |

## Mẹo

- **Kéo toàn bộ thư mục** để truyền đệ quy
- **Nhấp đúp** vào thư mục để vào
- Sử dụng **tìm kiếm/lọc** để tìm file nhanh chóng
- **Xác nhận ghi đè** ngăn mất dữ liệu vô tình
