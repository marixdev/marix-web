# Pengelola File SFTP

SFTP (SSH File Transfer Protocol) menyediakan transfer file aman melalui koneksi SSH terenkripsi.

## Membuka SFTP

### Dari Koneksi SSH yang Ada

1. Hubungkan ke server SSH
2. Klik tombol **SFTP** di bagian atas sesi
3. Atau gunakan pintasan keyboard: `Ctrl+Shift+O`

### Koneksi SFTP Langsung

1. Klik kanan server SSH di daftar Hosts
2. Pilih **"SFTP"** dari menu konteks

## Tata Letak Antarmuka

![Antarmuka SFTP](/sftp.png)

## Kontrol Navigasi

| Tombol | Fungsi |
|--------|--------|
| ← | Kembali dalam riwayat |
| → | Maju dalam riwayat |
| ↑ | Ke direktori parent |
| 🏠 | Ke direktori home |
| 🔄 | Refresh direktori saat ini |
| 🔍 | Cari/filter file |
| 💾 | Pilih drive (Windows/Linux) |

## Operasi File

### Unduh File (Remote → Local)

1. Navigasi ke file di panel **REMOTE** (kanan)

**Metode A: Drag & Drop**
- Klik dan seret file ke panel LOCAL (kiri)
- Lepaskan di folder yang diinginkan

**Metode B: Klik Kanan**
- Klik kanan file
- Pilih **"Download"**
- File diunduh ke folder lokal saat ini

### Unggah File (Local → Remote)

1. Navigasi ke file di panel **LOCAL** (kiri)

**Metode A: Drag & Drop**
- Klik dan seret file ke panel REMOTE (kanan)
- Lepaskan di folder yang diinginkan

**Metode B: Klik Kanan**
- Klik kanan file
- Pilih **"Upload"**
- File diunggah ke folder remote saat ini

### Buat Folder Baru

1. Navigasi ke direktori target
2. Klik kanan di area kosong
3. Pilih **"New Folder"**
4. Masukkan nama folder
5. Klik OK

### Buat File Baru

1. Navigasi ke direktori target
2. Klik kanan di area kosong
3. Pilih **"New File"**
4. Masukkan nama file
5. Klik OK (membuat file kosong)

### Hapus File atau Folder

1. Klik kanan file atau folder
2. Pilih **"Delete"**
3. Konfirmasi penghapusan

### Ubah Nama File atau Folder

1. Klik kanan file atau folder
2. Pilih **"Rename"**
3. Masukkan nama baru
4. Klik OK

## Ubah Izin (chmod)

1. Klik kanan file atau folder (panel REMOTE)
2. Pilih **"Change Permissions"**
3. Masukkan izin dalam format oktal (misalnya, `755`, `644`)
4. Klik OK

### Nilai Izin Umum

| Nilai | Arti | Kasus Penggunaan |
|-------|------|------------------|
| `755` | Owner: penuh, Others: read+execute | Folder, executable |
| `644` | Owner: read+write, Others: read | File biasa |
| `600` | Owner saja | File privat, SSH key |
| `777` | Semua: akses penuh | Tidak direkomendasikan |

## Edit File Remote

1. Temukan file teks di panel REMOTE
2. Klik dua kali (atau klik kanan → Edit)
3. File terbuka di editor bawaan
4. Buat perubahan Anda
5. Klik **Save** atau tekan `Ctrl+S`
6. File disimpan kembali ke server

### Tipe File yang Didukung

**File kode:**
`.js`, `.ts`, `.py`, `.php`, `.java`, `.c`, `.cpp`, `.go`, `.rs`, `.rb`

**File konfigurasi:**
`.json`, `.yml`, `.yaml`, `.toml`, `.ini`, `.conf`, `.env`

**File web:**
`.html`, `.css`, `.scss`, `.vue`, `.svelte`

**Script:**
`.sh`, `.bash`, `.ps1`, `.bat`

**Lainnya:**
`.txt`, `.md`, `.log`, `Dockerfile`, `Makefile`

## Kompres File

Buat arsip dari file atau folder di server remote:

1. Klik kanan file atau folder (panel REMOTE)
2. Arahkan ke **"Compress"**
3. Pilih format:
   - **ZIP** - Universal, bekerja di mana saja
   - **TAR.GZ** - Terbaik untuk Linux/Unix
   - **TAR** - Arsip tanpa kompresi

Arsip dibuat di direktori yang sama.

## Ekstrak Arsip

Ekstrak file terkompresi di server remote:

1. Klik kanan file arsip (panel REMOTE)
2. Pilih **"Extract Here"**
3. File diekstrak ke direktori saat ini

### Format Arsip yang Didukung

| Format | Ekstensi |
|--------|----------|
| ZIP | `.zip` |
| TAR | `.tar`, `.tar.gz`, `.tgz`, `.tar.bz2`, `.tar.xz` |
| GZIP | `.gz` |
| BZIP2 | `.bz2` |
| XZ | `.xz` |
| 7-Zip | `.7z` |
| RAR | `.rar` |

> **Catatan:** Ekstraksi memerlukan alat yang sesuai terinstal di server (unzip, tar, 7z, unrar).

## Properti File

Lihat informasi detail tentang file dan folder:

1. Klik kanan file atau folder
2. Pilih **"Properties"**
3. Lihat detail:

| Properti | Deskripsi |
|----------|-----------|
| Name | Nama file atau folder |
| Path | Lokasi path lengkap |
| Size | Ukuran file dalam bytes/KB/MB/GB |
| Type | File atau Directory |
| Permissions | Read/write/execute (misalnya, 755) |
| Owner | User owner (remote saja) |
| Group | Group owner (remote saja) |
| Modified | Tanggal modifikasi terakhir |
| Created | Tanggal pembuatan (jika tersedia) |
| Accessed | Tanggal akses terakhir |

## Antrian Transfer

Saat mentransfer beberapa file:
- Progress bar menunjukkan penyelesaian keseluruhan
- Progres file individual ditampilkan
- Klik ✕ untuk membatalkan transfer
- Transfer yang gagal dapat dicoba ulang

## Pintasan Keyboard

| Pintasan | Aksi |
|----------|------|
| `Ctrl+Shift+O` | Toggle Terminal/SFTP |
| `F2` | Ubah nama yang dipilih |
| `Delete` | Hapus yang dipilih |
| `Ctrl+C` | Salin path |
| `Ctrl+R` | Refresh direktori |

## Tips

- **Seret seluruh folder** untuk transfer rekursif
- **Klik dua kali** folder untuk masuk
- Gunakan **cari/filter** untuk menemukan file dengan cepat
- **Konfirmasi overwrite** mencegah kehilangan data yang tidak disengaja
