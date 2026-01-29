# Source Installer

Source Installer memungkinkan Anda menginstal framework web dan CMS populer langsung di server remote Anda melalui SSH.

## Antarmuka Source Installer

![Antarmuka Source Installer](/source.png)

---

## Framework yang Didukung

| Kategori | Framework |
|----------|-----------|
| **PHP** | Laravel, WordPress, Symfony, CodeIgniter 3/4 |
| **JavaScript** | Express.js, NestJS, Fastify, Vue.js, Nuxt.js, React, Next.js |
| **TypeScript** | TypeScript Node |

---

## Memulai

### Prasyarat

- **Untuk framework PHP**: PHP dan Composer terinstal
- **Untuk framework JavaScript**: Node.js dan npm terinstal
- **Akses SSH** dengan izin yang sesuai

### Mengakses Source Installer

1. Hubungkan ke server Anda melalui SSH
2. Beralih ke tab **SFTP**
3. Navigasi ke direktori target
4. Klik kanan dan pilih **"Install Source Code"**

---

## Proses Instalasi

### Langkah 1: Pilih Framework

Pilih dari framework yang tersedia yang diorganisir berdasarkan kategori.

### Langkah 2: Pemilihan Versi

#### Framework PHP

- **Mendeteksi versi PHP server Anda** secara otomatis
- **Mengambil versi yang tersedia** dari GitHub secara real-time
- **Menunjukkan status kompatibilitas**:
  - ✅ Kompatibel - Versi PHP memenuhi persyaratan
  - ❌ Tidak Kompatibel - Versi PHP terlalu rendah atau terlalu tinggi
  - 🟢 LTS - Versi dukungan jangka panjang

#### Framework JavaScript/TypeScript

- Versi diambil dari npm registry
- Versi stabil terbaru dipilih secara default

### Langkah 3: Konfigurasi

| Opsi | Deskripsi |
|------|-----------|
| Project Name | Nama folder yang akan dibuat |
| Install in current directory | Instal file langsung di folder saat ini |
| Database Configuration | Untuk framework yang membutuhkannya |

### Langkah 4: Instalasi

Klik **"Install"** untuk memulai. Installer akan:

1. Memeriksa dependensi (Composer/Node.js/npm)
2. Mengunduh framework
3. Mengonfigurasi proyek
4. Menampilkan log instalasi real-time

---

## Detail Framework

### Laravel

| Versi | Persyaratan PHP | Status |
|-------|-----------------|--------|
| Laravel 12 | PHP 8.3+ | Terbaru |
| Laravel 11 | PHP 8.2+ | LTS |
| Laravel 10 | PHP 8.1+ | LTS |

### WordPress

- Mengambil versi dari GitHub
- Auto-konfigurasi `wp-config.php` dengan kredensial database

### Symfony

| Versi | Persyaratan PHP |
|-------|-----------------|
| Symfony 8.x | PHP 8.3+ |
| Symfony 7.x | PHP 8.2+ |
| Symfony 6.4 | PHP 8.1+ (LTS) |

### Framework Node.js

- Express.js, NestJS, Fastify (Node.js 14+)
- Vue.js, Nuxt.js, React, Next.js (Node.js 16+)

---

## Pengambilan Versi Dinamis

Installer mengambil versi yang tersedia secara real-time:

| Framework | Sumber |
|-----------|--------|
| Laravel, CodeIgniter | GitHub Releases API |
| WordPress | GitHub Tags API |
| Symfony | symfony.com API |
| Framework Node.js | npm Registry |

Saat versi baru dirilis, mereka muncul secara otomatis.

---

## Pemecahan Masalah

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

Periksa dan upgrade PHP:

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

## Praktik Terbaik

1. **Gunakan versi spesifik di production** untuk deployment yang dapat direproduksi
2. **Periksa kompatibilitas PHP terlebih dahulu** sebelum menginstal
3. **Konfigurasi database sebelum menginstal** untuk menghemat waktu
4. **Instal di direktori bersih** untuk menghindari konflik
