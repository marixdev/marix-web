# Catatan Server (Sticky Notes)

Marix menyediakan fitur **Catatan Server** yang memungkinkan Anda melampirkan catatan pribadi ke setiap server. Ini berguna untuk mendokumentasikan konfigurasi server, pengingat pemeliharaan, atau informasi referensi cepat.

## Antarmuka Catatan Server

![Antarmuka Catatan Server](/note.png)

## Fitur

- **Catatan Per-Server**: Setiap server dapat memiliki catatannya sendiri
- **Auto-Save**: Perubahan disimpan secara otomatis saat Anda mengetik (debounce 500ms)
- **Dukungan Rich Text**: Teks biasa dengan line break
- **Indikator Visual**: Server dengan catatan menampilkan ikon catatan terisi
- **Disinkronkan dengan Data Server**: Catatan disertakan dalam backup server

## Penggunaan

### Membuka Catatan

1. Hubungkan ke server (terminal SSH atau SFTP)
2. Klik tombol **Notes** di toolbar atas (ikon pensil)
3. Popup sticky note muncul di pojok kanan bawah

### Menulis Catatan

- Cukup ketik di textarea
- Catatan **auto-saved** setelah 500ms tidak ada aktivitas
- Indikator "Saving..." menunjukkan saat penyimpanan sedang berlangsung
- Tekan `Escape` atau klik di luar untuk menutup

### Indikator Visual

| Status Ikon | Arti |
|-------------|------|
| Outline (kosong) | Tidak ada catatan untuk server ini |
| Filled (solid) | Server memiliki catatan |
| Warna Amber/Kuning | Catatan ada |

## Kasus Penggunaan

### Konfigurasi Server

```
Web Server - Production
-----------------------
IP: 192.168.1.100
Nginx: /etc/nginx/sites-enabled/
Logs: /var/log/nginx/
SSL Cert expires: 2026-12-15
```

### Pengingat Pemeliharaan

```
TODO:
- [ ] Update OpenSSL (CVE-2025-XXXX)
- [ ] Rotate database credentials
- [ ] Increase swap to 4GB
```

### Referensi Cepat

```
Common Commands:
- Restart Nginx: sudo systemctl restart nginx
- Check disk: df -h
- View connections: netstat -tuln

Database:
- User: app_user
- Port: 5432
```

## Penyimpanan Data

- Catatan disimpan sebagai bagian dari konfigurasi server
- ✅ **Disertakan dalam backup lokal** (fitur backup Marix)
- ✅ **Disertakan dalam backup cloud** (Google Drive, Box)
- ✅ **Terenkripsi** saat menggunakan enkripsi backup

## Pintasan Keyboard

| Tombol | Aksi |
|--------|------|
| `Escape` | Tutup popup catatan |
| Klik di luar | Tutup popup catatan |

## FAQ

### Apakah catatan terenkripsi?

Catatan disimpan sebagai teks biasa dalam file konfigurasi server. Saat Anda membuat backup terenkripsi, catatan dienkripsi bersama semua data server.

### Bisakah saya menggunakan Markdown?

Catatan saat ini hanya teks biasa. Rendering Markdown mungkin akan ditambahkan di versi mendatang.

### Apakah ada batas karakter?

Tidak ada batas keras, tetapi catatan yang sangat panjang mungkin mempengaruhi performa. Disarankan untuk menjaga catatan tetap ringkas.
