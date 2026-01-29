# Kunci Aplikasi

Lindungi aplikasi Marix Anda dengan Kunci Aplikasi. Saat diaktifkan, aplikasi akan terkunci secara otomatis setelah periode tidak aktif, mencegah akses tidak sah ke server dan kredensial Anda.

## Antarmuka Kunci Aplikasi

![Antarmuka Kunci Aplikasi](/applock.png)

## Mengaktifkan Kunci Aplikasi

1. Buka **Settings** (ikon roda gigi di sidebar)
2. Temukan bagian **Security**
3. Aktifkan **Enable App Lock**

## Metode Kunci

Pilih cara aplikasi harus dikunci:

| Metode | Deskripsi | Tingkat Keamanan |
|--------|-----------|------------------|
| **Blur** | Memburamkan konten layar | Rendah - privasi visual saja |
| **PIN** | Memerlukan PIN 4-6 digit untuk membuka | Sedang |
| **Password** | Memerlukan kata sandi untuk membuka | Tinggi |

### Mode Blur

- Konten layar menjadi buram
- Klik di mana saja untuk membuka
- Terbaik untuk privasi cepat di lingkungan kantor

### Mode PIN

- Atur PIN numerik 4-6 digit
- Masukkan PIN untuk membuka
- Keseimbangan baik antara keamanan dan kenyamanan

### Mode Password

- Atur kata sandi kustom
- Masukkan kata sandi untuk membuka
- Tingkat keamanan tertinggi

## Mengatur PIN atau Password

Saat beralih ke mode PIN atau Password:

1. Pilih metode kunci
2. Dialog muncul untuk mengatur kredensial Anda
3. Masukkan PIN/Password Anda
4. Konfirmasi dengan memasukkannya lagi
5. Klik **Save**

> **Catatan:** Jika Anda lupa PIN/Password, Anda perlu me-restart aplikasi. Data server Anda tetap aman.

## Waktu Tunggu Kunci

Konfigurasi berapa lama aplikasi menunggu sebelum terkunci:

| Waktu Tunggu | Penggunaan |
|--------------|------------|
| 1 menit | Keamanan maksimum |
| 2 menit | Keamanan tinggi |
| 5 menit | Default, seimbang |
| 10 menit | Keamanan sedang |
| 15 menit | Penggunaan kasual |
| 30 menit | Keamanan rendah |
| 60 menit | Perlindungan minimal |

Timer direset dengan gerakan mouse, input keyboard, atau klik.

## Membuka Kunci

### Mode Blur
- Klik di mana saja di layar
- Gerakkan mouse

### Mode PIN/Password
1. Masukkan PIN atau Password Anda
2. Tekan **Enter** atau klik **Unlock**
3. Aplikasi langsung terbuka

## Mengubah Kredensial

Untuk mengubah PIN atau Password Anda:

1. Buka **Settings** → **Security**
2. Klik **Change PIN** atau **Change Password**
3. Masukkan kredensial baru Anda
4. Konfirmasi dan simpan

## Menghapus Kredensial

Untuk menghapus PIN/Password dan kembali ke Blur:

1. Buka **Settings** → **Security**
2. Klik **Clear Credential**
3. Metode kunci kembali ke Blur

## Cara Kerjanya

1. **Pelacakan Aktivitas**: Marix memantau event mouse, keyboard, dan klik
2. **Timer Tidak Aktif**: Setelah tidak ada aktivitas selama waktu tunggu yang diatur, aplikasi terkunci
3. **Kunci Instan**: Anda juga dapat mengunci secara manual (jika diimplementasikan)
4. **Penyimpanan Aman**: PIN/Password disimpan dengan aman menggunakan system keychain

## Pertimbangan Keamanan

### Yang Dilindungi Kunci Aplikasi

- ✅ Akses visual ke daftar server Anda
- ✅ Melihat kredensial tersimpan
- ✅ Mengakses sesi terminal aktif
- ✅ Menjelajah pengelola file SFTP

### Yang TIDAK Dilindungi Kunci Aplikasi

- ❌ Koneksi SSH yang sudah terhubung (tetap aktif)
- ❌ Data di disk (gunakan enkripsi sistem untuk itu)
- ❌ Lalu lintas jaringan (gunakan SSH/TLS untuk itu)

## Praktik Terbaik

1. **Gunakan mode Password** untuk lingkungan sensitif
2. **Atur waktu tunggu lebih pendek** di ruang kerja bersama
3. **Gunakan kredensial unik** - jangan gunakan ulang kata sandi
4. **Kunci sebelum meninggalkan** komputer Anda
5. **Kombinasikan dengan kunci OS** untuk keamanan maksimum

## Pemecahan Masalah

### Lupa PIN/Password

- Restart aplikasi
- Kunci Aplikasi direset saat restart
- Data server Anda tetap tersimpan

### Aplikasi Terkunci Terlalu Cepat

- Tingkatkan waktu tunggu di Settings
- Periksa apakah Anda memiliki sesi aktif yang mungkin mencegah deteksi aktivitas

### Aplikasi Tidak Terkunci

- Pastikan Kunci Aplikasi diaktifkan
- Periksa pengaturan waktu tunggu
- Verifikasi jendela aplikasi memiliki fokus
