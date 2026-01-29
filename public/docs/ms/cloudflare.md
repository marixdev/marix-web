# Pengurus DNS Cloudflare

Urus rekod DNS Cloudflare anda terus dari Marix.

## Antara Muka Pengurus DNS Cloudflare

![Antara Muka Pengurus DNS Cloudflare](/cf.png)

## Persediaan

### Langkah 1: Dapatkan Token API

1. Pergi ke [Papan Pemuka Cloudflare](https://dash.cloudflare.com)
2. Navigasi ke Profile → API Tokens
3. Klik "Create Token"
4. Gunakan templat "Edit zone DNS" atau cipta tersuai dengan:
   - Zone.DNS: Edit
   - Zone.Zone: Read
5. Salin token

### Langkah 2: Konfigurasikan dalam Marix

1. Pergi ke **Settings** di bar sisi
2. Cari bahagian **"Cloudflare API Token"**
3. Klik **"Add Token"**
4. Tampal token anda
5. Klik **"Save"**

## Menggunakan DNS Cloudflare

1. Klik **"Cloudflare"** di bar sisi
2. Domain anda dimuat dalam dropdown
3. Pilih domain
4. Rekod DNS untuk domain tersebut muncul

## Lihat Rekod DNS

Jadual menunjukkan:

| Lajur | Penerangan |
|--------|-------------|
| Type | Jenis rekod (A, AAAA, CNAME, MX, TXT, dll.) |
| Name | Nama rekod/subdomain |
| Content | Nilai rekod (IP, nama hos, teks) |
| TTL | Time-to-live (Auto atau saat) |
| Proxy | Diproksi melalui Cloudflare atau DNS sahaja |

## Tambah Rekod DNS

### Langkah 1: Buka Dialog
Klik butang **"Add Record"**

### Langkah 2: Isi Butiran

| Medan | Penerangan |
|-------|-------------|
| Type | Pilih: A, AAAA, CNAME, MX, TXT, SRV, dll. |
| Name | Subdomain (cth., "www") atau "@" untuk root |
| Content | Nilai (IP untuk A, nama hos untuk CNAME, dll.) |
| TTL | Time-to-live: Auto atau saat tersuai |
| Proxy | Togol: Diproksi (awan oren) atau DNS sahaja (kelabu) |
| Comment | Nota pilihan |

### Langkah 3: Cipta
Klik **"Create"**

## Jenis Rekod Biasa

### Rekod A
Menunjuk domain ke alamat IPv4.

| Medan | Contoh |
|-------|---------|
| Type | A |
| Name | @ (atau www) |
| Content | 192.168.1.100 |

### Rekod AAAA
Menunjuk domain ke alamat IPv6.

| Medan | Contoh |
|-------|---------|
| Type | AAAA |
| Name | @ |
| Content | 2001:db8::1 |

### Rekod CNAME
Mencipta alias kepada domain lain.

| Medan | Contoh |
|-------|---------|
| Type | CNAME |
| Name | www |
| Content | example.com |

### Rekod MX
Menentukan pelayan mel.

| Medan | Contoh |
|-------|---------|
| Type | MX |
| Name | @ |
| Content | mail.example.com |
| Priority | 10 |

### Rekod TXT
Menyimpan data teks (SPF, DKIM, pengesahan).

| Medan | Contoh |
|-------|---------|
| Type | TXT |
| Name | @ |
| Content | v=spf1 include:_spf.google.com ~all |

## Edit Rekod DNS

1. Cari rekod dalam jadual
2. Klik butang **Edit** (ikon pensel)
3. Ubah suai medan
4. Klik **"Save"**

## Padam Rekod DNS

1. Cari rekod
2. Klik butang **Delete** (ikon tong sampah)
3. Sahkan pemadaman

## Status Proksi

| Ikon | Status | Kesan |
|------|--------|--------|
| 🟠 Awan oren | Diproksi | Trafik melalui CDN Cloudflare |
| ⚪ Awan kelabu | DNS sahaja | Sambungan terus ke asal |

### Bila Menggunakan Proksi

**Diproksi (Oren):**
- Pelayan web (HTTP/HTTPS)
- Mahu perlindungan DDoS
- Mahu caching CDN

**DNS Sahaja (Kelabu):**
- SSH, FTP, pelayan mel
- Perkhidmatan bukan HTTP
- Perlu sambungan IP terus

## Muat Semula Rekod

Klik butang **Refresh** di sebelah dropdown domain untuk memuat semula rekod.

## Petua

- **TTL Auto** disyorkan untuk kebanyakan kes
- **Uji perubahan** menggunakan alat carian DNS
- **Sandarkan rekod** sebelum membuat perubahan besar
- **Penyebaran** mungkin mengambil masa sehingga 48 jam secara global
