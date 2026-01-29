# Pemasang Sumber

Pemasang Sumber membolehkan anda memasang framework web dan CMS popular terus pada pelayan jauh anda melalui SSH.

## Antara Muka Pemasang Sumber

![Antara Muka Pemasang Sumber](/source.png)

---

## Framework yang Disokong

| Kategori | Framework |
|----------|------------|
| **PHP** | Laravel, WordPress, Symfony, CodeIgniter 3/4 |
| **JavaScript** | Express.js, NestJS, Fastify, Vue.js, Nuxt.js, React, Next.js |
| **TypeScript** | TypeScript Node |

---

## Bermula

### Prasyarat

- **Untuk framework PHP**: PHP dan Composer dipasang
- **Untuk framework JavaScript**: Node.js dan npm dipasang
- **Akses SSH** dengan kebenaran yang sesuai

### Mengakses Pemasang Sumber

1. Sambung ke pelayan anda melalui SSH
2. Tukar ke tab **SFTP**
3. Navigasi ke direktori sasaran
4. Klik kanan dan pilih **"Install Source Code"**

---

## Proses Pemasangan

### Langkah 1: Pilih Framework

Pilih dari framework yang tersedia yang disusun mengikut kategori.

### Langkah 2: Pemilihan Versi

#### Framework PHP

- **Mengesan versi PHP pelayan anda** secara automatik
- **Mengambil versi yang tersedia** dari GitHub dalam masa nyata
- **Menunjukkan status keserasian**:
  - ✅ Serasi - Versi PHP memenuhi keperluan
  - ❌ Tidak serasi - Versi PHP terlalu rendah atau terlalu tinggi
  - 🟢 LTS - Versi sokongan jangka panjang

#### Framework JavaScript/TypeScript

- Versi diambil dari registry npm
- Versi stabil terkini dipilih secara lalai

### Langkah 3: Konfigurasi

| Pilihan | Penerangan |
|--------|-------------|
| Project Name | Nama folder untuk dicipta |
| Install in current directory | Pasang fail terus dalam folder semasa |
| Database Configuration | Untuk framework yang memerlukannya |

### Langkah 4: Pemasangan

Klik **"Install"** untuk bermula. Pemasang akan:

1. Semak dependensi (Composer/Node.js/npm)
2. Muat turun framework
3. Konfigurasikan projek
4. Paparkan log pemasangan masa nyata

---

## Butiran Framework

### Laravel

| Versi | Keperluan PHP | Status |
|---------|-----------------|--------|
| Laravel 12 | PHP 8.3+ | Terkini |
| Laravel 11 | PHP 8.2+ | LTS |
| Laravel 10 | PHP 8.1+ | LTS |

### WordPress

- Mengambil versi dari GitHub
- Mengkonfigurasi `wp-config.php` secara automatik dengan kelayakan pangkalan data

### Symfony

| Versi | Keperluan PHP |
|---------|-----------------|
| Symfony 8.x | PHP 8.3+ |
| Symfony 7.x | PHP 8.2+ |
| Symfony 6.4 | PHP 8.1+ (LTS) |

### Framework Node.js

- Express.js, NestJS, Fastify (Node.js 14+)
- Vue.js, Nuxt.js, React, Next.js (Node.js 16+)

---

## Pengambilan Versi Dinamik

Pemasang mengambil versi yang tersedia dalam masa nyata:

| Framework | Sumber |
|-----------|--------|
| Laravel, CodeIgniter | GitHub Releases API |
| WordPress | GitHub Tags API |
| Symfony | symfony.com API |
| Framework Node.js | npm Registry |

Apabila versi baru dikeluarkan, ia muncul secara automatik.

---

## Penyelesaian Masalah

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

Semak dan naik taraf PHP:

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

## Amalan Terbaik

1. **Gunakan versi tertentu dalam pengeluaran** untuk pelaksanaan yang boleh diulang
2. **Semak keserasian PHP dahulu** sebelum memasang
3. **Konfigurasikan pangkalan data sebelum memasang** untuk menjimatkan masa
4. **Pasang dalam direktori bersih** untuk mengelakkan konflik
