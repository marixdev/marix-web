# Transfer File FTP/FTPS

Marix mendukung protokol FTP dan FTPS untuk terhubung ke server file yang tidak mendukung SSH.

## Tata Letak Antarmuka

![Antarmuka FTP](/ftp.png)

## Menambah Server FTP

1. Klik **"Add New Host"**
2. Pilih **Protocol**: FTP atau FTPS
3. Isi:
   - **Host/IP**: Alamat server FTP
   - **Port**: 21 (FTP) atau 990 (FTPS)
   - **Username**: Username FTP
   - **Password**: Kata sandi FTP
4. Klik **Create**

## FTP vs FTPS

| Fitur | FTP | FTPS |
|-------|-----|------|
| Enkripsi | Tidak ada | TLS/SSL |
| Port Default | 21 | 990 |
| Keamanan | Rendah | Tinggi |
| Penggunaan | Sistem lama | Transfer aman |

> **Rekomendasi**: Gunakan FTPS jika tersedia untuk transfer file terenkripsi.

## Menghubungkan ke FTP

1. Klik dua kali server FTP di daftar Hosts
2. Koneksi terbuka langsung dalam **mode file browser**
3. Tidak ada terminal yang tersedia (FTP hanya untuk transfer file)

## Operasi File

Semua operasi file bekerja sama seperti SFTP:

### Transfer File
- **Drag & drop** untuk transfer antara lokal dan remote
- **Klik kanan** → Download/Upload

### Manajemen File
- **Buat folder**: Klik kanan → New Folder
- **Ubah nama file**: Klik kanan → Rename
- **Hapus file**: Klik kanan → Delete

### Navigasi
- Gunakan tombol toolbar: Back, Forward, Up, Home
- Klik dua kali folder untuk masuk
- Gunakan pencarian untuk memfilter file

## Keterbatasan

FTP tidak mendukung:
- **chmod** (ubah izin)
- **Symbolic link**
- **Edit file** (harus download, edit, upload ulang)

## Mode Passive vs Active

Marix menggunakan **mode passive** secara default, yang bekerja lebih baik dengan:
- Router NAT
- Firewall
- Sebagian besar konfigurasi jaringan modern

## Pemecahan Masalah

### Timeout Koneksi
- Periksa apakah server mengizinkan IP Anda
- Verifikasi aturan firewall di kedua sisi
- Coba port berbeda jika dikonfigurasi

### Autentikasi Gagal
- Verifikasi username dan kata sandi
- Periksa apakah user FTP diaktifkan di server
- Beberapa server memerlukan format login tertentu

### Transfer Gagal
- Periksa ruang disk yang tersedia
- Verifikasi izin file di server
- File besar mungkin timeout - periksa batas server
