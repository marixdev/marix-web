# Backup & Restore

Lindungi data Anda dengan backup terenkripsi. Marix mendukung 6 penyedia backup, semuanya menggunakan enkripsi Argon2id.

> 💡 **Tips:** Setelah Anda menghubungkan akun cloud untuk backup, Anda tidak perlu menghubungkan ulang untuk restore di perangkat yang sama. Autentikasi Anda disimpan secara lokal.

## Antarmuka Backup & Restore

### Backup
![Antarmuka Backup](/backup.png)

### Restore
![Antarmuka Restore](/restore.png)

## Yang Di-backup

- Semua server dan kredensial (kata sandi, private key)
- SSH key dari Keychain
- Konfigurasi port forward
- Rahasia 2FA/TOTP
- Pengaturan aplikasi
- Token API Cloudflare

## Persyaratan Kata Sandi

| Persyaratan | Deskripsi |
|-------------|-----------|
| Panjang | Minimal 10 karakter |
| Huruf Besar | Sertakan huruf besar |
| Huruf Kecil | Sertakan huruf kecil |
| Angka | Sertakan minimal satu angka |
| Khusus | Sertakan karakter khusus |

> ⚠️ **Peringatan:** Kami tidak dapat memulihkan kata sandi Anda. Jika Anda lupa, backup Anda tidak dapat diakses secara permanen.

## Backup Lokal

Simpan file backup terenkripsi ke komputer Anda.

### Membuat Backup Lokal

1. Buka **Settings** → Klik **"Create Backup"**
2. Pilih tab **Local** (ikon folder)
3. Masukkan **kata sandi kuat** (10+ karakter)
4. Konfirmasi kata sandi
5. Klik **"Create Backup"**
6. Pilih tempat menyimpan file `.marix`
7. Simpan file ini dengan aman

### Restore dari Backup Lokal

1. Buka **Settings** → Klik **"Restore Backup"**
2. Pilih tab **Local**
3. Klik **"Select File"** dan pilih file backup `.marix` Anda
4. Masukkan **kata sandi** yang Anda gunakan saat membuat backup
5. Klik **"Restore"**
6. Aplikasi restart dengan semua data dipulihkan

## Google Drive

Sinkronkan backup Anda ke Google Drive.

### Menghubungkan

1. Pilih tab **Google Drive**
2. Klik **"Connect"**
3. Masuk ke akun Google Anda
4. Berikan izin Marix
5. Anda akan melihat "Connected" dengan email Anda

### Membuat Backup

1. Setelah terhubung, masukkan kata sandi kuat
2. Konfirmasi kata sandi
3. Klik **"Create Backup"**
4. Status menunjukkan: "Backup created successfully"

### Restore

1. Jika sudah terhubung, akun Anda diingat
2. Jika backup ada, Anda akan melihat "Last backup: [tanggal]"
3. Masukkan kata sandi
4. Klik **"Restore"**

## GitHub

Simpan backup Anda di GitHub Gist privat.

### Menghubungkan

1. Pilih tab **GitHub**
2. Klik **"Connect"**
3. **Device Code** muncul (misalnya, `ABCD-1234`)
4. Buka: https://github.com/login/device
5. Masukkan kode
6. Otorisasi Marix

### Membuat Backup

1. Masukkan kata sandi kuat
2. Konfirmasi kata sandi
3. Klik **"Create Backup"**
4. Backup disimpan sebagai Gist privat

### Restore

1. Jika sudah terhubung, akun Anda diingat
2. Jika backup ada, Anda akan melihat "Last backup: [tanggal]"
3. Masukkan kata sandi
4. Klik **"Restore"**

### Di Mana Backup Saya?

Buka https://gist.github.com → Gist privat Anda → Cari "marix-backup"

## GitLab

Simpan backup Anda di GitLab Snippet.

### Menghubungkan

1. Pilih tab **GitLab**
2. Klik **"Connect"**
3. Masuk ke GitLab
4. Otorisasi Marix

### Membuat Backup

1. Masukkan kata sandi kuat
2. Konfirmasi kata sandi
3. Klik **"Create Backup"**
4. Backup disimpan sebagai Snippet privat

### Restore

1. Jika sudah terhubung, akun Anda diingat
2. Jika backup ada, Anda akan melihat "Last backup: [tanggal]"
3. Masukkan kata sandi
4. Klik **"Restore"**

## Box.net

Simpan backup Anda di penyimpanan cloud Box.

### Menghubungkan

1. Pilih tab **Box.net**
2. Klik **"Connect to Box.net"**
3. Masuk ke akun Box.net Anda
4. Otorisasi Marix

### Membuat Backup

1. Masukkan kata sandi kuat
2. Konfirmasi kata sandi
3. Klik **"Create Backup"**

### Restore

1. Jika sudah terhubung, akun Anda diingat
2. Jika backup ada, Anda akan melihat "Last backup: [tanggal]"
3. Masukkan kata sandi
4. Klik **"Restore"**

## OneDrive

Sinkronkan backup Anda ke Microsoft OneDrive.

### Menghubungkan

1. Pilih tab **OneDrive**
2. Klik **"Connect"**
3. Masuk ke akun Microsoft Anda
4. Berikan izin Marix
5. Anda akan melihat "Connected" dengan email Anda

### Membuat Backup

1. Setelah terhubung, masukkan kata sandi kuat
2. Konfirmasi kata sandi
3. Klik **"Create Backup"**
4. Status menunjukkan: "Backup created successfully"

### Restore

1. Jika sudah terhubung, akun Anda diingat
2. Jika backup ada, Anda akan melihat "Last backup: [tanggal]"
3. Masukkan kata sandi
4. Klik **"Restore"**

## Perbandingan Penyedia

| Penyedia | Lokasi Penyimpanan | Kelebihan | Kekurangan |
|----------|-------------------|-----------|------------|
| **Local** | Komputer Anda | Kontrol penuh, offline | Harus kelola file secara manual |
| **Google Drive** | Cloud Google | Auto-sync, banyak digunakan | Memerlukan akun Google |
| **OneDrive** | Cloud Microsoft | Terintegrasi dengan Windows | Memerlukan akun Microsoft |
| **GitHub** | GitHub Gist | Gratis, version control | Memerlukan akun GitHub |
| **GitLab** | GitLab Snippet | Gratis, opsi self-hosted | Memerlukan akun GitLab |
| **Box.net** | Cloud Box.net | Ramah perusahaan | Memerlukan akun Box |

## Praktik Terbaik

1. **Gunakan kata sandi berbeda** untuk penyedia berbeda
2. **Simpan kata sandi Anda** di password manager
3. **Uji restore** secara berkala untuk memastikan backup berfungsi
4. **Simpan backup lokal** sebagai opsi sekunder
5. **Jangan bagikan** file backup - berisi data sensitif
6. **Perbarui backup** secara rutin setelah menambah server baru
