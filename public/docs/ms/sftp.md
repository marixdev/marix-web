# Pengurus Fail SFTP

SFTP (SSH File Transfer Protocol) menyediakan pemindahan fail selamat melalui sambungan SSH yang disulitkan.

## Membuka SFTP

### Dari Sambungan SSH Sedia Ada

1. Sambung ke pelayan SSH
2. Klik butang **SFTP** di bahagian atas sesi
3. Atau gunakan pintasan papan kekunci: `Ctrl+Shift+O`

### Sambungan SFTP Terus

1. Klik kanan pelayan SSH dalam senarai Hosts
2. Pilih **"SFTP"** dari menu konteks

## Susun Atur Antara Muka

![Antara Muka SFTP](/sftp.png)

## Kawalan Navigasi

| Butang | Fungsi |
|--------|----------|
| ← | Kembali dalam sejarah |
| → | Ke hadapan dalam sejarah |
| ↑ | Pergi ke direktori induk |
| 🏠 | Pergi ke direktori home |
| 🔄 | Muat semula direktori semasa |
| 🔍 | Cari/tapis fail |
| 💾 | Pilih pemacu (Windows/Linux) |

## Operasi Fail

### Muat Turun Fail (Jauh → Tempatan)

1. Navigasi ke fail pada panel **JAUH** (kanan)

**Kaedah A: Seret & Lepas**
- Klik dan seret fail ke panel TEMPATAN (kiri)
- Lepaskan di folder yang dikehendaki

**Kaedah B: Klik Kanan**
- Klik kanan fail
- Pilih **"Download"**
- Fail dimuat turun ke folder tempatan semasa

### Muat Naik Fail (Tempatan → Jauh)

1. Navigasi ke fail pada panel **TEMPATAN** (kiri)

**Kaedah A: Seret & Lepas**
- Klik dan seret fail ke panel JAUH (kanan)
- Lepaskan di folder yang dikehendaki

**Kaedah B: Klik Kanan**
- Klik kanan fail
- Pilih **"Upload"**
- Fail dimuat naik ke folder jauh semasa

### Cipta Folder Baru

1. Navigasi ke direktori sasaran
2. Klik kanan di ruang kosong
3. Pilih **"New Folder"**
4. Masukkan nama folder
5. Klik OK

### Cipta Fail Baru

1. Navigasi ke direktori sasaran
2. Klik kanan di ruang kosong
3. Pilih **"New File"**
4. Masukkan nama fail
5. Klik OK (mencipta fail kosong)

### Padam Fail atau Folder

1. Klik kanan fail atau folder
2. Pilih **"Delete"**
3. Sahkan pemadaman

### Namakan Semula Fail atau Folder

1. Klik kanan fail atau folder
2. Pilih **"Rename"**
3. Masukkan nama baru
4. Klik OK

## Tukar Kebenaran (chmod)

1. Klik kanan fail atau folder (panel JAUH)
2. Pilih **"Change Permissions"**
3. Masukkan kebenaran dalam format oktal (cth., `755`, `644`)
4. Klik OK

### Nilai Kebenaran Biasa

| Nilai | Maksud | Kes Penggunaan |
|-------|---------|----------|
| `755` | Pemilik: penuh, Lain: baca+laksana | Folder, boleh laksana |
| `644` | Pemilik: baca+tulis, Lain: baca | Fail biasa |
| `600` | Pemilik sahaja | Fail peribadi, kunci SSH |
| `777` | Semua orang: akses penuh | Tidak disyorkan |

## Edit Fail Jauh

1. Cari fail teks pada panel JAUH
2. Klik dua kali (atau klik kanan → Edit)
3. Fail dibuka dalam editor terbina dalam
4. Buat perubahan anda
5. Klik **Save** atau tekan `Ctrl+S`
6. Fail disimpan kembali ke pelayan

### Jenis Fail yang Disokong

**Fail kod:**
`.js`, `.ts`, `.py`, `.php`, `.java`, `.c`, `.cpp`, `.go`, `.rs`, `.rb`

**Fail konfigurasi:**
`.json`, `.yml`, `.yaml`, `.toml`, `.ini`, `.conf`, `.env`

**Fail web:**
`.html`, `.css`, `.scss`, `.vue`, `.svelte`

**Skrip:**
`.sh`, `.bash`, `.ps1`, `.bat`

**Lain-lain:**
`.txt`, `.md`, `.log`, `Dockerfile`, `Makefile`

## Mampatkan Fail

Cipta arkib dari fail atau folder pada pelayan jauh:

1. Klik kanan fail atau folder (panel JAUH)
2. Hover atas **"Compress"**
3. Pilih format:
   - **ZIP** - Universal, berfungsi di mana-mana
   - **TAR.GZ** - Terbaik untuk Linux/Unix
   - **TAR** - Arkib tidak dimampatkan

Arkib dicipta dalam direktori yang sama.

## Ekstrak Arkib

Ekstrak fail termampat pada pelayan jauh:

1. Klik kanan fail arkib (panel JAUH)
2. Pilih **"Extract Here"**
3. Fail diekstrak ke direktori semasa

### Format Arkib yang Disokong

| Format | Sambungan |
|--------|------------|
| ZIP | `.zip` |
| TAR | `.tar`, `.tar.gz`, `.tgz`, `.tar.bz2`, `.tar.xz` |
| GZIP | `.gz` |
| BZIP2 | `.bz2` |
| XZ | `.xz` |
| 7-Zip | `.7z` |
| RAR | `.rar` |

> **Nota:** Pengekstrakan memerlukan alat yang sesuai dipasang pada pelayan (unzip, tar, 7z, unrar).

## Sifat Fail

Lihat maklumat terperinci tentang fail dan folder:

1. Klik kanan fail atau folder
2. Pilih **"Properties"**
3. Lihat butiran:

| Sifat | Penerangan |
|----------|-------------|
| Name | Nama fail atau folder |
| Path | Lokasi laluan penuh |
| Size | Saiz fail dalam bait/KB/MB/GB |
| Type | Fail atau Direktori |
| Permissions | Baca/tulis/laksana (cth., 755) |
| Owner | Pemilik pengguna (jauh sahaja) |
| Group | Pemilik kumpulan (jauh sahaja) |
| Modified | Tarikh pengubahsuaian terakhir |
| Created | Tarikh penciptaan (jika tersedia) |
| Accessed | Tarikh akses terakhir |

## Baris Gilir Pemindahan

Apabila memindahkan berbilang fail:
- Bar kemajuan menunjukkan penyelesaian keseluruhan
- Kemajuan fail individu dipaparkan
- Klik ✕ untuk membatalkan pemindahan
- Pemindahan yang gagal boleh dicuba semula

## Pintasan Papan Kekunci

| Pintasan | Tindakan |
|----------|--------|
| `Ctrl+Shift+O` | Togol Terminal/SFTP |
| `F2` | Namakan semula yang dipilih |
| `Delete` | Padam yang dipilih |
| `Ctrl+C` | Salin laluan |
| `Ctrl+R` | Muat semula direktori |

## Petua

- **Seret seluruh folder** untuk memindahkan secara rekursif
- **Klik dua kali** folder untuk masuk
- Gunakan **cari/tapis** untuk mencari fail dengan cepat
- **Pengesahan tulis ganti** menghalang kehilangan data secara tidak sengaja
