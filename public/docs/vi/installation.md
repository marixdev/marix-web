# Cài đặt

Tải xuống và cài đặt Marix cho hệ điều hành của bạn.

## Windows

1. Tải xuống **[Marix.Setup.{{VERSION}}.exe](https://github.com/marixdev/marix/releases/latest/download/Marix.Setup.{{VERSION}}.exe)**
2. Chạy trình cài đặt và làm theo hướng dẫn
3. Khởi chạy Marix từ Start Menu

## macOS

### Apple Silicon (M1/M2/M3/M4)

1. Tải xuống **[Marix-{{VERSION}}-arm64-mac.zip](https://github.com/marixdev/marix/releases/latest/download/Marix-{{VERSION}}-arm64-mac.zip)**
2. Giải nén và kéo `Marix.app` vào Applications
3. Lần khởi chạy đầu tiên: Nhấp chuột phải → Open (để bypass Gatekeeper)

### Intel Mac

1. Tải xuống **[Marix-{{VERSION}}-mac.zip](https://github.com/marixdev/marix/releases/latest/download/Marix-{{VERSION}}-mac.zip)**
2. Giải nén và kéo `Marix.app` vào Applications
3. Lần khởi chạy đầu tiên: Nhấp chuột phải → Open (để bypass Gatekeeper)

## Linux

### AppImage (Khuyến nghị)

Hoạt động trên hầu hết các bản phân phối Linux mà không cần cài đặt.

1. Tải xuống **[Marix-{{VERSION}}.AppImage](https://github.com/marixdev/marix/releases/latest/download/Marix-{{VERSION}}.AppImage)**
2. Cấp quyền thực thi: `chmod +x Marix-{{VERSION}}.AppImage`
3. Chạy: `./Marix-{{VERSION}}.AppImage`

### Debian/Ubuntu (.deb)

1. Tải xuống **[marix_{{VERSION}}_amd64.deb](https://github.com/marixdev/marix/releases/latest/download/marix_{{VERSION}}_amd64.deb)**
2. Cài đặt: `sudo dpkg -i marix_{{VERSION}}_amd64.deb`

### Fedora/RHEL (.rpm)

1. Tải xuống **[marix-{{VERSION}}.x86_64.rpm](https://github.com/marixdev/marix/releases/latest/download/marix-{{VERSION}}.x86_64.rpm)**
2. Cài đặt: `sudo dnf install ./marix-{{VERSION}}.x86_64.rpm`

## Xác minh Cài đặt

Khởi chạy Marix. Bạn sẽ thấy cửa sổ chính với phần "Hosts" trong thanh bên.

## Bước Tiếp theo

- [Bắt đầu Nhanh](quickstart.md) - Thêm máy chủ đầu tiên của bạn
- [SSH Terminal](ssh-terminal.md) - Tìm hiểu các tính năng terminal
