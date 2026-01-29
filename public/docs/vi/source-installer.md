# Source Installer

Source Installer cho phép bạn cài đặt các framework web và CMS phổ biến trực tiếp trên máy chủ remote qua SSH.

## Giao diện Source Installer

![Source Installer Interface](/source.png)

---

## Framework được Hỗ trợ

| Danh mục | Frameworks |
|----------|------------|
| **PHP** | Laravel, WordPress, Symfony, CodeIgniter 3/4 |
| **JavaScript** | Express.js, NestJS, Fastify, Vue.js, Nuxt.js, React, Next.js |
| **TypeScript** | TypeScript Node |

---

## Bắt đầu

### Điều kiện Tiên quyết

- **Cho framework PHP**: PHP và Composer đã được cài đặt
- **Cho framework JavaScript**: Node.js và npm đã được cài đặt
- **Quyền truy cập SSH** với quyền phù hợp

### Truy cập Source Installer

1. Kết nối đến máy chủ qua SSH
2. Chuyển sang tab **SFTP**
3. Điều hướng đến thư mục đích
4. Nhấp chuột phải và chọn **"Install Source Code"**

---

## Quy trình Cài đặt

### Bước 1: Chọn Framework

Chọn từ các framework có sẵn được tổ chức theo danh mục.

### Bước 2: Chọn Phiên bản

#### Framework PHP

- **Phát hiện phiên bản PHP của máy chủ** tự động
- **Lấy các phiên bản có sẵn** từ GitHub theo thời gian thực
- **Hiển thị trạng thái tương thích**:
  - ✅ Tương thích - Phiên bản PHP đáp ứng yêu cầu
  - ❌ Không tương thích - Phiên bản PHP quá thấp hoặc quá cao
  - 🟢 LTS - Phiên bản hỗ trợ dài hạn

#### Framework JavaScript/TypeScript

- Phiên bản được lấy từ npm registry
- Phiên bản ổn định mới nhất được chọn mặc định

### Bước 3: Cấu hình

| Tùy chọn | Mô tả |
|----------|-------|
| Project Name | Tên thư mục sẽ tạo |
| Install in current directory | Cài đặt file trực tiếp vào thư mục hiện tại |
| Database Configuration | Cho các framework cần database |

### Bước 4: Cài đặt

Nhấp **"Install"** để bắt đầu. Trình cài đặt sẽ:

1. Kiểm tra dependencies (Composer/Node.js/npm)
2. Tải xuống framework
3. Cấu hình dự án
4. Hiển thị log cài đặt theo thời gian thực

---

## Chi tiết Framework

### Laravel

| Phiên bản | Yêu cầu PHP | Trạng thái |
|-----------|-------------|------------|
| Laravel 12 | PHP 8.3+ | Mới nhất |
| Laravel 11 | PHP 8.2+ | LTS |
| Laravel 10 | PHP 8.1+ | LTS |

### WordPress

- Lấy phiên bản từ GitHub
- Tự động cấu hình `wp-config.php` với thông tin database

### Symfony

| Phiên bản | Yêu cầu PHP |
|-----------|-------------|
| Symfony 8.x | PHP 8.3+ |
| Symfony 7.x | PHP 8.2+ |
| Symfony 6.4 | PHP 8.1+ (LTS) |

### Framework Node.js

- Express.js, NestJS, Fastify (Node.js 14+)
- Vue.js, Nuxt.js, React, Next.js (Node.js 16+)

---

## Lấy Phiên bản Động

Trình cài đặt lấy các phiên bản có sẵn theo thời gian thực:

| Framework | Nguồn |
|-----------|-------|
| Laravel, CodeIgniter | GitHub Releases API |
| WordPress | GitHub Tags API |
| Symfony | symfony.com API |
| Framework Node.js | npm Registry |

Khi phiên bản mới được phát hành, chúng xuất hiện tự động.

---

## Khắc phục Sự cố

### "Composer not found"

```bash
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
```

### "Node.js not found"

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install --lts
```

### "PHP version incompatible"

Kiểm tra và nâng cấp PHP:

```bash
php -v
sudo add-apt-repository ppa:ondrej/php
sudo apt update
sudo apt install php8.3
```

### "Permission denied"

```bash
sudo chown -R $USER:$USER /var/www/html
```

---

## Thực hành Tốt nhất

1. **Sử dụng phiên bản cụ thể trong production** để triển khai có thể tái tạo
2. **Kiểm tra tương thích PHP trước** trước khi cài đặt
3. **Cấu hình database trước khi cài đặt** để tiết kiệm thời gian
4. **Cài đặt trong thư mục sạch** để tránh xung đột
