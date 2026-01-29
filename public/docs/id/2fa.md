# Autentikasi Dua Faktor (2FA/TOTP)

Generator kode TOTP bawaan, seperti Google Authenticator. Simpan rahasia 2FA Anda dan dapatkan kode tanpa memerlukan ponsel.

## Antarmuka 2FA

![Antarmuka 2FA](/2fa.png)

## Membuka 2FA

Klik **"2FA"** di sidebar.

## Menambah Akun 2FA Baru

### Langkah 1: Buka Dialog
Klik tombol **"Add Account"**

### Langkah 2: Masukkan Detail

| Kolom | Deskripsi | Wajib |
|-------|-----------|-------|
| Account Name | Label untuk akun ini (misalnya, "GitHub", "AWS") | Tidak (nama otomatis) |
| Secret Key | Rahasia TOTP (dari halaman pengaturan kode QR) | Ya |

### Langkah 3: Simpan
Klik **"Add"**

## Cara Mendapatkan Secret Key

Saat mengaktifkan 2FA di sebuah situs web:

1. Cari **"Can't scan QR code?"** atau **"Manual entry"**
2. Salin secret key (biasanya huruf besar dan angka)
3. Tempel ke Marix

Contoh format secret key:
```
JBSWY3DPEHPK3PXP
```

## Menggunakan Kode 2FA

1. Temukan akun Anda dalam daftar
2. Kode 6 digit ditampilkan di sebelahnya
3. Timer hitung mundur menunjukkan detik hingga kode diperbarui
4. Klik tombol **Copy** untuk menyalin kode ke clipboard

### Timer
- Kode diperbarui setiap **30 detik**
- Indikator progres melingkar menunjukkan waktu tersisa
- Tunggu kode baru jika kode saat ini akan segera kedaluwarsa

## Edit Nama Akun

1. Klik tombol **Edit** di sebelah akun
2. Masukkan nama baru
3. Tekan Enter atau klik Save

## Menghapus Akun 2FA

1. Klik tombol **Delete** (ikon tempat sampah)
2. Konfirmasi penghapusan

> ⚠️ **Peringatan:** Menghapus akan menghilangkan secret. Pastikan Anda memiliki akses cadangan ke akun terkait sebelum menghapus.

## Layanan Umum

Berikut beberapa layanan populer yang mendukung TOTP:

| Layanan | Lokasi Pengaturan 2FA |
|---------|----------------------|
| GitHub | Settings → Password and authentication |
| AWS | IAM → Security credentials |
| Google | Google Account → Security |
| Microsoft | Security settings → Two-step verification |
| Cloudflare | Profile → Authentication |
| DigitalOcean | Account → Security |
| Linode | My Profile → Password & Authentication |

## Praktik Terbaik

1. **Cadangkan secret Anda** - Simpan secret key dengan aman
2. **Simpan kode pemulihan** - Simpan kode cadangan yang diberikan layanan
3. **Gunakan nama deskriptif** - Mudah mengidentifikasi akun dengan cepat
4. **Uji kode sebelum mengandalkannya** - Verifikasi kode berfungsi segera setelah menambahkan
5. **Sinkronisasi waktu** - Pastikan jam komputer Anda akurat

## Pemecahan Masalah

### Kode Tidak Berfungsi

1. **Periksa sinkronisasi waktu** - Jam komputer Anda harus akurat
2. **Verifikasi secret key** - Masukkan ulang jika salah menyalin
3. **Tunggu kode berikutnya** - Kode saat ini mungkin akan kedaluwarsa

### Kehilangan Akses

Jika Anda kehilangan akses ke Marix:
1. Gunakan **kode pemulihan** yang diberikan oleh layanan
2. Hubungi dukungan layanan untuk pemulihan akun
3. This is why backing up secrets is important!
