# Pemecahan Masalah

Masalah umum dan solusi untuk Marix.

## Masalah Koneksi

### "Connection refused"

**Penyebab:**
- Server tidak berjalan
- IP/hostname salah
- Port salah
- Firewall memblokir koneksi

**Solusi:**
1. Verifikasi host/IP benar
2. Periksa port benar dan terbuka
3. Pastikan server berjalan
4. Periksa firewall mengizinkan koneksi
5. Coba ping server

### "Connection timeout"

**Penyebab:**
- Server tidak dapat dijangkau
- Masalah jaringan
- Firewall memblokir

**Solusi:**
1. Periksa koneksi internet Anda
2. Verifikasi server online
3. Coba dari jaringan berbeda
4. Periksa apakah VPN diperlukan

### "Authentication failed"

**Penyebab:**
- Username salah
- Kata sandi salah
- SSH key salah
- Passphrase key tidak benar

**Solusi:**
1. Verifikasi username benar
2. Periksa kata sandi (case-sensitive)
3. Pastikan SSH key yang benar dipilih
4. Masukkan passphrase key yang benar
5. Verifikasi user memiliki akses SSH di server

### "Host key verification failed"

**Penyebab:**
- Server diinstal ulang
- SSH key server berubah
- Potensi masalah keamanan

**Solusi:**
1. Verifikasi dengan admin server jika key berubah
2. Buka Known Hosts → hapus entri lama
3. Hubungkan kembali dan terima fingerprint baru
4. Jika mencurigakan, selidiki sebelum terhubung

### "Permission denied (publickey)"

**Penyebab:**
- SSH key tidak diterima
- Key tidak ada di authorized_keys
- Key yang dipilih salah

**Solusi:**
1. Verifikasi public key ada di `~/.ssh/authorized_keys` server
2. Periksa izin key: `chmod 600 ~/.ssh/authorized_keys`
3. Pastikan key yang benar dipilih di Marix
4. Coba autentikasi kata sandi jika tersedia

## Masalah SFTP

### "Permission denied" saat mengunggah

**Penyebab:**
- Tidak ada izin tulis di remote
- Direktori salah
- Disk penuh

**Solusi:**
1. Periksa izin tulis di folder remote
2. Coba unggah ke direktori home terlebih dahulu
3. Periksa ruang disk di server
4. Gunakan `sudo` jika diperlukan (melalui terminal)

### Transfer file lambat

**Penyebab:**
- Kecepatan jaringan
- Ukuran file besar
- Beban server

**Solusi:**
1. Periksa kecepatan jaringan Anda
2. File besar memerlukan waktu lebih lama - bersabarlah
3. Coba di luar jam sibuk
4. Kompres file sebelum transfer

### "No such file or directory"

**Penyebab:**
- Path tidak ada
- Symbolic link rusak
- Izin untuk melihat direktori

**Solusi:**
1. Verifikasi path ada
2. Navigasi secara manual ke lokasi
3. Periksa izin direktori parent

## Masalah Terminal

### Terminal menampilkan teks kacau

**Penyebab:**
- Encoding tidak cocok
- Ketidakcocokan tipe terminal

**Solusi:**
1. Coba tema terminal berbeda
2. Periksa pengaturan locale server
3. Hubungkan kembali ke server

### Copy/paste tidak berfungsi

**Solusi:**
1. Gunakan `Ctrl+Shift+C` dan `Ctrl+Shift+V`
2. **Salin teks**: 
   - Pilih teks dengan mouse → Copy
   - Atau gunakan `Ctrl+C`
3. **Tempel teks**: 
   - Klik kanan → Paste
   - Atau gunakan `Ctrl+V`
4. Periksa apakah teks benar-benar dipilih

### Terminal tidak responsif

**Solusi:**
1. Tunggu sebentar - perintah mungkin sedang diproses
2. Tekan `Ctrl+C` untuk membatalkan perintah yang berjalan
3. Klik tombol Reconnect
4. Tutup dan buka kembali tab

## Masalah RDP

### Layar hitam setelah terhubung

**Penyebab:**
- Delay koneksi awal
- Mesin remote tidur
- Masalah grafis

**Solusi:**
1. Tunggu sebentar untuk koneksi
2. Coba hubungkan kembali
3. Bangunkan mesin remote terlebih dahulu
4. Periksa mesin remote tidak terkunci

### Performa RDP lambat

**Solusi:**
1. Kurangi pengaturan kedalaman warna
2. Nonaktifkan efek visual di Windows
3. Gunakan koneksi kabel
4. Tutup aplikasi yang banyak menggunakan bandwidth
5. Turunkan resolusi remote

## Masalah Aplikasi

### Marix tidak mau start

**Solusi:**
1. Restart komputer Anda
2. Instal ulang Marix
3. Periksa software yang konflik
4. Jalankan sebagai administrator (Windows)

### Pengaturan tidak tersimpan

**Penyebab:**
- Tidak ada izin tulis
- File konfigurasi rusak

**Solusi:**
1. Jalankan Marix sebagai administrator
2. Reset pengaturan (Settings → Reset)
3. Hapus folder konfigurasi dan restart

### Penggunaan CPU/memori tinggi

**Solusi:**
1. Tutup tab koneksi yang tidak digunakan
2. Kurangi jumlah panel SFTP yang terbuka
3. Restart Marix
4. Update ke versi terbaru

## Masalah Backup

### "Wrong password" saat restore

**Solusi:**
1. Pastikan Anda menggunakan kata sandi yang tepat
2. Kata sandi case-sensitive
3. Periksa spasi di awal/akhir
4. Coba backup dari penyedia lain

### Upload backup gagal

**Solusi:**
1. Periksa koneksi internet
2. Verifikasi koneksi OAuth valid
3. Hubungkan kembali ke penyedia backup
4. Periksa kuota penyimpanan tidak terlampaui

## Mendapatkan Bantuan

Jika masalah Anda tidak tercantum di sini:

1. **Periksa update** - Versi terbaru mungkin memperbaiki masalah Anda
2. **Cari issues** di GitHub
3. **Laporkan bug** di [GitHub Issues](https://github.com/marixdev/marix/issues)
4. **Hubungi support** melalui website

Saat melaporkan masalah, sertakan:
- Versi Marix
- Sistem operasi
- Langkah untuk mereproduksi
- Pesan error (jika ada)
- Screenshot (jika berlaku)
