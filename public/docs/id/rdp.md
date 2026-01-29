# Remote Desktop RDP

Hubungkan ke server dan komputer Windows menggunakan Remote Desktop Protocol (RDP).

## Menambah Server RDP

1. Klik **"Add New Host"**
2. Pilih **Protocol**: RDP
3. Isi:
   - **Host/IP**: Alamat server Windows
   - **Port**: 3389 (default)
   - **Username**: Username Windows
   - **Password**: Kata sandi Windows
   - **Domain**: (opsional) Nama domain Windows
4. Klik **Create**

## Import dari File .rdp

Sudah punya file konfigurasi RDP?

1. Di dialog Add Server, klik **"Import .rdp file"**
2. Pilih file `.rdp` Anda
3. Kolom terisi otomatis dari file
4. Sesuaikan pengaturan jika diperlukan
5. Klik **Create**

## Menghubungkan ke RDP

1. Klik dua kali server RDP di daftar Hosts
2. Jendela remote desktop terbuka di dalam aplikasi
3. Anda dapat berinteraksi dengan desktop Windows secara normal

## Kontrol RDP

| Input | Perilaku |
|-------|----------|
| **Mouse** | Klik, drag, scroll bekerja normal |
| **Keyboard** | Semua tombol diteruskan ke remote |
| **Clipboard** | Copy/paste antara lokal dan remote |

## Memutuskan Koneksi

- Klik × pada tab sesi
- Atau tutup aplikasi
- Status sesi tetap tersimpan di server remote

## Persyaratan Linux

Dukungan RDP di Linux memerlukan FreeRDP. Marix **mendeteksi secara otomatis** jika FreeRDP terinstal.

### Instalasi Otomatis

Jika FreeRDP tidak ditemukan:
1. Notifikasi muncul saat Anda mencoba terhubung
2. Klik tombol **"Install"**
3. Marix menginstal FreeRDP secara otomatis
4. Hubungkan kembali setelah instalasi selesai

### Instalasi Manual

Jika Anda lebih suka menginstal secara manual:

**Ubuntu/Debian**
```bash
sudo apt install freerdp3-x11 xdotool
```

**Fedora**
```bash
sudo dnf install freerdp xdotool
```

**Arch Linux**
```bash
sudo pacman -S freerdp xdotool
```

## Pengaturan Tampilan

Sesi RDP menyesuaikan dengan ukuran jendela Anda. Untuk pengalaman terbaik:
- Maksimalkan jendela untuk pengalaman desktop penuh
- Ubah ukuran jendela untuk menyesuaikan resolusi remote
- Mode layar penuh tersedia melalui kontrol jendela

## Tips Performa

- **Kurangi kedalaman warna** untuk koneksi lebih lambat
- **Nonaktifkan efek visual** di sisi Windows
- Gunakan **koneksi kabel** untuk performa terbaik
- Tutup aplikasi yang tidak diperlukan di mesin remote

## Pemecahan Masalah

### Koneksi Ditolak
- Verifikasi Remote Desktop diaktifkan di Windows
- Periksa Windows Firewall mengizinkan RDP
- Konfirmasi port benar (default 3389)

### Layar Hitam
- Tunggu sebentar - koneksi awal mungkin memakan waktu
- Coba hubungkan kembali
- Periksa mesin remote tidak dalam mode tidur

### Performa Lambat
- Turunkan resolusi layar
- Kurangi kedalaman warna
- Periksa kecepatan jaringan
- Tutup aplikasi yang banyak menggunakan bandwidth

### Autentikasi Gagal
- Verifikasi format username:
  - Lokal: `username`
  - Domain: `DOMAIN\username` atau `username@domain.com`
- Periksa kata sandi benar
- Pastikan akun memiliki hak akses Remote Desktop
