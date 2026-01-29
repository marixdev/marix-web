# Pengelola DNS Cloudflare

Kelola record DNS Cloudflare Anda langsung dari Marix.

## Antarmuka Pengelola DNS Cloudflare

![Antarmuka Pengelola DNS Cloudflare](/cf.png)

## Pengaturan

### Langkah 1: Dapatkan API Token

1. Buka [Dashboard Cloudflare](https://dash.cloudflare.com)
2. Navigasi ke Profile → API Tokens
3. Klik "Create Token"
4. Gunakan template "Edit zone DNS" atau buat kustom dengan:
   - Zone.DNS: Edit
   - Zone.Zone: Read
5. Salin token

### Langkah 2: Konfigurasi di Marix

1. Buka **Settings** di sidebar
2. Temukan bagian **"Cloudflare API Token"**
3. Klik **"Add Token"**
4. Tempel token Anda
5. Klik **"Save"**

## Menggunakan DNS Cloudflare

1. Klik **"Cloudflare"** di sidebar
2. Domain Anda dimuat di dropdown
3. Pilih domain
4. Record DNS untuk domain tersebut muncul

## Melihat Record DNS

Tabel menunjukkan:

| Kolom | Deskripsi |
|-------|-----------|
| Type | Tipe record (A, AAAA, CNAME, MX, TXT, dll.) |
| Name | Nama record/subdomain |
| Content | Nilai record (IP, hostname, teks) |
| TTL | Time-to-live (Auto atau detik) |
| Proxy | Melalui proxy Cloudflare atau DNS saja |

## Menambah Record DNS

### Langkah 1: Buka Dialog
Klik tombol **"Add Record"**

### Langkah 2: Isi Detail

| Kolom | Deskripsi |
|-------|-----------|
| Type | Pilih: A, AAAA, CNAME, MX, TXT, SRV, dll. |
| Name | Subdomain (misalnya, "www") atau "@" untuk root |
| Content | Nilai (IP untuk A, hostname untuk CNAME, dll.) |
| TTL | Time-to-live: Auto atau detik kustom |
| Proxy | Toggle: Proxied (cloud oranye) atau DNS saja (abu-abu) |
| Comment | Catatan opsional |

### Langkah 3: Buat
Klik **"Create"**

## Tipe Record Umum

### Record A
Mengarahkan domain ke alamat IPv4.

| Kolom | Contoh |
|-------|--------|
| Type | A |
| Name | @ (atau www) |
| Content | 192.168.1.100 |

### Record AAAA
Mengarahkan domain ke alamat IPv6.

| Kolom | Contoh |
|-------|--------|
| Type | AAAA |
| Name | @ |
| Content | 2001:db8::1 |

### Record CNAME
Membuat alias ke domain lain.

| Kolom | Contoh |
|-------|--------|
| Type | CNAME |
| Name | www |
| Content | example.com |

### Record MX
Menentukan mail server.

| Kolom | Contoh |
|-------|--------|
| Type | MX |
| Name | @ |
| Content | mail.example.com |
| Priority | 10 |

### Record TXT
Menyimpan data teks (SPF, DKIM, verifikasi).

| Kolom | Contoh |
|-------|--------|
| Type | TXT |
| Name | @ |
| Content | v=spf1 include:_spf.google.com ~all |

## Edit Record DNS

1. Temukan record di tabel
2. Klik tombol **Edit** (ikon pensil)
3. Ubah kolom
4. Klik **"Save"**

## Hapus Record DNS

1. Temukan record
2. Klik tombol **Delete** (ikon tempat sampah)
3. Konfirmasi penghapusan

## Status Proxy

| Ikon | Status | Efek |
|------|--------|------|
| 🟠 Cloud oranye | Proxied | Lalu lintas melalui CDN Cloudflare |
| ⚪ Cloud abu-abu | DNS saja | Koneksi langsung ke origin |

### Kapan Menggunakan Proxy

**Proxied (Oranye):**
- Server web (HTTP/HTTPS)
- Ingin perlindungan DDoS
- Ingin caching CDN

**DNS Saja (Abu-abu):**
- Server SSH, FTP, mail
- Layanan non-HTTP
- Perlu koneksi IP langsung

## Refresh Record

Klik tombol **Refresh** di sebelah dropdown domain untuk memuat ulang record.

## Tips

- **TTL Auto** direkomendasikan untuk sebagian besar kasus
- **Uji perubahan** menggunakan alat DNS lookup
- **Backup record** sebelum membuat perubahan besar
- **Propagasi** mungkin memakan waktu hingga 48 jam secara global
