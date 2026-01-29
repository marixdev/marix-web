# Desktop Jauh RDP

Sambung ke pelayan dan komputer Windows menggunakan Remote Desktop Protocol (RDP).

## Menambah Pelayan RDP

1. Klik **"Add New Host"**
2. Pilih **Protocol**: RDP
3. Isi:
   - **Host/IP**: Alamat pelayan Windows
   - **Port**: 3389 (lalai)
   - **Username**: Nama pengguna Windows
   - **Password**: Kata laluan Windows
   - **Domain**: (pilihan) Nama domain Windows
4. Klik **Create**

## Import dari Fail .rdp

Sudah mempunyai fail konfigurasi RDP?

1. Dalam dialog Add Server, klik **"Import .rdp file"**
2. Pilih fail `.rdp` anda
3. Medan diisi automatik dari fail
4. Laraskan sebarang tetapan jika perlu
5. Klik **Create**

## Menyambung ke RDP

1. Klik dua kali pelayan RDP dalam senarai Hosts
2. Tetingkap desktop jauh dibuka dalam aplikasi
3. Anda boleh berinteraksi dengan desktop Windows seperti biasa

## Kawalan RDP

| Input | Tingkah Laku |
|-------|----------|
| **Tetikus** | Klik, seret, tatal berfungsi seperti biasa |
| **Papan Kekunci** | Semua kekunci dihantar ke jauh |
| **Papan Klip** | Salin/tampal antara tempatan dan jauh |

## Memutuskan Sambungan

- Klik × pada tab sesi
- Atau tutup aplikasi
- Keadaan sesi dipelihara pada pelayan jauh

## Keperluan Linux

Sokongan RDP di Linux memerlukan FreeRDP. Marix **mengesan secara automatik** jika FreeRDP dipasang.

### Pemasangan Automatik

Jika FreeRDP tidak dijumpai:
1. Notifikasi muncul apabila anda cuba menyambung
2. Klik butang **"Install"**
3. Marix memasang FreeRDP secara automatik
4. Sambung semula selepas pemasangan selesai

### Pemasangan Manual

Jika anda lebih suka memasang secara manual:

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

## Tetapan Paparan

Sesi RDP menyesuaikan dengan saiz tetingkap anda. Untuk pengalaman terbaik:
- Maksimumkan tetingkap untuk pengalaman desktop penuh
- Ubah saiz tetingkap untuk melaraskan resolusi jauh
- Mod skrin penuh tersedia melalui kawalan tetingkap

## Petua Prestasi

- **Kurangkan kedalaman warna** untuk sambungan lebih perlahan
- **Lumpuhkan kesan visual** di bahagian Windows
- Gunakan **sambungan berwayar** untuk prestasi terbaik
- Tutup aplikasi yang tidak diperlukan pada mesin jauh

## Penyelesaian Masalah

### Sambungan Ditolak
- Sahkan Remote Desktop diaktifkan pada Windows
- Semak Windows Firewall membenarkan RDP
- Sahkan port betul (lalai 3389)

### Skrin Hitam
- Tunggu sebentar - sambungan awal mungkin mengambil masa
- Cuba sambung semula
- Semak mesin jauh tidak dalam mod tidur

### Prestasi Perlahan
- Turunkan resolusi skrin
- Kurangkan kedalaman warna
- Semak kelajuan rangkaian
- Tutup aplikasi yang memerlukan lebar jalur tinggi

### Pengesahan Gagal
- Sahkan format nama pengguna:
  - Tempatan: `username`
  - Domain: `DOMAIN\username` atau `username@domain.com`
- Semak kata laluan betul
- Pastikan akaun mempunyai hak akses Remote Desktop
