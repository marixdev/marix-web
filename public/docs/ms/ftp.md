# Pemindahan Fail FTP/FTPS

Marix menyokong protokol FTP dan FTPS untuk menyambung ke pelayan fail yang tidak menyokong SSH.

## Susun Atur Antara Muka

![Antara Muka FTP](/ftp.png)

## Menambah Pelayan FTP

1. Klik **"Add New Host"**
2. Pilih **Protocol**: FTP atau FTPS
3. Isi:
   - **Host/IP**: Alamat pelayan FTP
   - **Port**: 21 (FTP) atau 990 (FTPS)
   - **Username**: Nama pengguna FTP
   - **Password**: Kata laluan FTP
4. Klik **Create**

## FTP vs FTPS

| Ciri | FTP | FTPS |
|---------|-----|------|
| Penyulitan | Tiada | TLS/SSL |
| Port Lalai | 21 | 990 |
| Keselamatan | Rendah | Tinggi |
| Kes Penggunaan | Sistem legasi | Pemindahan selamat |

> **Saranan**: Gunakan FTPS apabila tersedia untuk pemindahan fail yang disulitkan.

## Menyambung ke FTP

1. Klik dua kali pelayan FTP dalam senarai Hosts
2. Sambungan dibuka terus dalam **mod pelayar fail**
3. Tiada terminal tersedia (FTP adalah pemindahan fail sahaja)

## Operasi Fail

Semua operasi fail berfungsi sama seperti SFTP:

### Pindahkan Fail
- **Seret & lepas** untuk memindahkan antara tempatan dan jauh
- **Klik kanan** → Download/Upload

### Pengurusan Fail
- **Cipta folder**: Klik kanan → New Folder
- **Namakan semula fail**: Klik kanan → Rename
- **Padam fail**: Klik kanan → Delete

### Navigasi
- Gunakan butang bar alat: Back, Forward, Up, Home
- Klik dua kali folder untuk masuk
- Gunakan carian untuk menapis fail

## Had

FTP tidak menyokong:
- **chmod** (tukar kebenaran)
- **Pautan simbolik**
- **Penyuntingan fail** (mesti muat turun, edit, muat naik semula)

## Mod Pasif vs Aktif

Marix menggunakan **mod pasif** secara lalai, yang berfungsi lebih baik dengan:
- Penghala NAT
- Firewall
- Kebanyakan konfigurasi rangkaian moden

## Penyelesaian Masalah

### Tamat Masa Sambungan
- Semak jika pelayan membenarkan IP anda
- Sahkan peraturan firewall di kedua-dua hujung
- Cuba port berbeza jika dikonfigurasikan

### Pengesahan Gagal
- Sahkan nama pengguna dan kata laluan
- Semak jika pengguna FTP diaktifkan pada pelayan
- Sesetengah pelayan memerlukan format log masuk tertentu

### Pemindahan Gagal
- Semak ruang cakera yang tersedia
- Sahkan kebenaran fail pada pelayan
- Fail besar mungkin tamat masa - semak had pelayan
