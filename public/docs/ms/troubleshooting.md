# Penyelesaian Masalah

Isu biasa dan penyelesaian untuk Marix.

## Isu Sambungan

### "Connection refused"

**Punca:**
- Pelayan tidak berjalan
- IP/nama hos salah
- Port salah
- Firewall menyekat sambungan

**Penyelesaian:**
1. Sahkan hos/IP betul
2. Semak port betul dan terbuka
3. Pastikan pelayan berjalan
4. Semak firewall membenarkan sambungan
5. Cuba ping pelayan

### "Connection timeout"

**Punca:**
- Pelayan tidak dapat dicapai
- Isu rangkaian
- Firewall menyekat

**Penyelesaian:**
1. Semak sambungan internet anda
2. Sahkan pelayan dalam talian
3. Cuba dari rangkaian berbeza
4. Semak jika VPN diperlukan

### "Authentication failed"

**Punca:**
- Nama pengguna salah
- Kata laluan salah
- Kunci SSH salah
- Passphrase kunci salah

**Penyelesaian:**
1. Sahkan nama pengguna betul
2. Semak kata laluan (sensitif huruf besar/kecil)
3. Pastikan kunci SSH yang betul dipilih
4. Masukkan passphrase kunci yang betul
5. Sahkan pengguna mempunyai akses SSH pada pelayan

### "Host key verification failed"

**Punca:**
- Pelayan telah dipasang semula
- Kunci SSH pelayan berubah
- Isu keselamatan yang berpotensi

**Penyelesaian:**
1. Sahkan dengan pentadbir pelayan jika kunci berubah
2. Pergi ke Known Hosts → alih keluar entri lama
3. Sambung semula dan terima cap jari baru
4. Jika mencurigakan, siasat sebelum menyambung

### "Permission denied (publickey)"

**Punca:**
- Kunci SSH tidak diterima
- Kunci tiada dalam authorized_keys
- Kunci salah dipilih

**Penyelesaian:**
1. Sahkan kunci awam ada dalam `~/.ssh/authorized_keys` pelayan
2. Semak kebenaran kunci: `chmod 600 ~/.ssh/authorized_keys`
3. Pastikan kunci yang betul dipilih dalam Marix
4. Cuba pengesahan kata laluan jika tersedia

## Isu SFTP

### "Permission denied" semasa memuat naik

**Punca:**
- Tiada kebenaran tulis pada jauh
- Direktori salah
- Cakera penuh

**Penyelesaian:**
1. Semak kebenaran tulis pada folder jauh
2. Cuba muat naik ke direktori home dahulu
3. Semak ruang cakera pada pelayan
4. Gunakan `sudo` jika perlu (melalui terminal)

### Pemindahan fail perlahan

**Punca:**
- Kelajuan rangkaian
- Saiz fail besar
- Beban pelayan

**Penyelesaian:**
1. Semak kelajuan rangkaian anda
2. Fail besar mengambil masa lebih lama - bersabar
3. Cuba semasa waktu luar puncak
4. Mampatkan fail sebelum pemindahan

### "No such file or directory"

**Punca:**
- Laluan tidak wujud
- Pautan simbolik rosak
- Kebenaran untuk menyenaraikan direktori

**Penyelesaian:**
1. Sahkan laluan wujud
2. Navigasi secara manual ke lokasi
3. Semak kebenaran direktori induk

## Isu Terminal

### Terminal menunjukkan teks bercelaru

**Punca:**
- Ketidakpadanan pengekodan
- Ketidakserasian jenis terminal

**Penyelesaian:**
1. Cuba tema terminal yang berbeza
2. Semak tetapan locale pelayan
3. Sambung semula ke pelayan

### Salin/tampal tidak berfungsi

**Penyelesaian:**
1. Gunakan `Ctrl+Shift+C` dan `Ctrl+Shift+V`
2. **Salin teks**: 
   - Pilih teks dengan tetikus → Salin
   - Atau gunakan `Ctrl+C`
3. **Tampal teks**: 
   - Klik kanan → Paste
   - Atau gunakan `Ctrl+V`
4. Semak jika teks benar-benar dipilih

### Terminal tidak responsif

**Penyelesaian:**
1. Tunggu sebentar - arahan mungkin sedang diproses
2. Tekan `Ctrl+C` untuk membatalkan arahan yang sedang berjalan
3. Klik butang Sambung semula
4. Tutup dan buka semula tab

## Isu RDP

### Skrin hitam selepas menyambung

**Punca:**
- Kelewatan sambungan awal
- Mesin jauh tidur
- Isu grafik

**Penyelesaian:**
1. Tunggu sebentar untuk sambungan
2. Cuba sambung semula
3. Bangunkan mesin jauh dahulu
4. Semak mesin jauh tidak dikunci

### Prestasi RDP perlahan

**Penyelesaian:**
1. Kurangkan tetapan kedalaman warna
2. Lumpuhkan kesan visual pada Windows
3. Gunakan sambungan berwayar
4. Tutup aplikasi yang memerlukan lebar jalur tinggi
5. Turunkan resolusi jauh

## Isu Aplikasi

### Marix tidak bermula

**Penyelesaian:**
1. Mulakan semula komputer anda
2. Pasang semula Marix
3. Semak perisian yang bercanggah
4. Jalankan sebagai pentadbir (Windows)

### Tetapan tidak disimpan

**Punca:**
- Tiada kebenaran tulis
- Fail konfigurasi rosak

**Penyelesaian:**
1. Jalankan Marix sebagai pentadbir
2. Tetap semula tetapan (Settings → Reset)
3. Padam folder konfigurasi dan mulakan semula

### Penggunaan CPU/memori tinggi

**Penyelesaian:**
1. Tutup tab sambungan yang tidak digunakan
2. Kurangkan bilangan panel SFTP yang terbuka
3. Mulakan semula Marix
4. Kemas kini ke versi terkini

## Isu Sandaran

### "Wrong password" semasa memulihkan

**Penyelesaian:**
1. Pastikan anda menggunakan kata laluan yang tepat
2. Kata laluan sensitif huruf besar/kecil
3. Semak ruang di hadapan/belakang
4. Cuba sandaran dari penyedia lain

### Muat naik sandaran gagal

**Penyelesaian:**
1. Semak sambungan internet
2. Sahkan sambungan OAuth sah
3. Sambung semula ke penyedia sandaran
4. Semak kuota storan tidak melebihi

## Mendapatkan Bantuan

Jika isu anda tidak disenaraikan di sini:

1. **Semak kemas kini** - Versi terkini mungkin memperbaiki isu anda
2. **Cari isu** di GitHub
3. **Laporkan pepijat** di [GitHub Issues](https://github.com/marixdev/marix/issues)
4. **Hubungi sokongan** melalui laman web

Apabila melaporkan isu, sertakan:
- Versi Marix
- Sistem pengendalian
- Langkah untuk menghasilkan semula
- Mesej ralat (jika ada)
- Tangkapan skrin (jika berkenaan)
