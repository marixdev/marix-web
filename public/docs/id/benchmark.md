# Benchmark Server

Uji dan ukur performa server Anda langsung dari terminal SSH dengan benchmark sistem, disk, dan jaringan yang komprehensif.

## Antarmuka Benchmark Server

![Antarmuka Benchmark Server](/benchmark.png)

## Gambaran Umum

Fitur Benchmark Server menyediakan analisis performa lengkap untuk server jarak jauh Anda, termasuk:

- **Informasi Sistem**: Detail perangkat keras dan perangkat lunak
- **Performa Disk**: Kecepatan baca/tulis sekuensial, latensi I/O, dan IOPS acak
- **Kecepatan Jaringan**: Uji kecepatan multi-region dengan pengukuran unduh, unggah, dan latensi

## Cara Menggunakan

### Memulai Benchmark

1. Hubungkan ke server melalui SSH
2. Klik tombol **📊 Benchmark** di footer terminal
3. (Opsional) Centang **"Upload to paste.dev"** untuk berbagi hasil secara online
4. Klik **Start Benchmark**

### Fase Benchmark

Benchmark berjalan dalam 4 fase:

| Fase | Deskripsi | Durasi |
|------|-----------|--------|
| 1. Info Sistem | Mengumpulkan info OS, CPU, RAM, disk | ~2 detik |
| 2. Uji Disk | Menjalankan tes dd, ioping, dan fio | ~45 detik |
| 3. Uji Jaringan | Menguji kecepatan ke 18 wilayah global | ~3-5 menit |
| 4. Selesai | Menampilkan hasil dan opsi ekspor | - |

## Detail Benchmark

### Informasi Sistem

Data yang dikumpulkan meliputi:

| Field | Deskripsi |
|-------|-----------|
| OS | Nama dan versi sistem operasi |
| Kernel | Versi kernel Linux |
| Architecture | Arsitektur CPU (x86_64, arm64, dll.) |
| Hostname | Nama host server |
| CPU Model | Nama dan spesifikasi prosesor |
| CPU Cores | Jumlah core CPU |
| CPU Frequency | Frekuensi CPU saat ini |
| Memory | RAM terpakai / total |
| Swap | Ruang swap terpakai / total |
| Disk | Ruang disk terpakai / total |
| Uptime | Waktu aktif server |
| Load Average | Rata-rata beban 1/5/15 menit |
| Virtualization | Jenis VM (KVM, VMware, OpenVZ, dll.) |

### Performa Disk

#### Tulis/Baca Sekuensial (dd)

- **Metode**: `dd if=/dev/zero of=test bs=64k count=16k conv=fdatasync`
- **Eksekusi**: 3 kali, dirata-ratakan untuk akurasi
- **Lokasi Tes**: Direktori home (bukan /tmp untuk menghindari tmpfs)
- **Mengukur**: Throughput sekuensial dalam MB/s atau GB/s

#### Latensi I/O (ioping)

- **Metode**: `ioping -c 10 -q /`
- **Mengukur**: Waktu respons I/O disk dalam mikrodetik
- **Target**: Sistem file root untuk latensi disk nyata

#### IOPS Acak 4K (fio)

- **Metode**: fio dengan baca/tulis acak 4K, kedalaman antrian 64
- **Waktu eksekusi**: 30 detik
- **Mengukur**:
  - Read IOPS
  - Write IOPS
  - Read Bandwidth
  - Write Bandwidth

> **Catatan**: Jika `fio` atau `ioping` tidak terinstal, benchmark akan mencoba menginstalnya secara otomatis.

### Kecepatan Jaringan

Pengujian dilakukan terhadap server Speedtest.net di 18 wilayah global:

| Wilayah | Lokasi |
|---------|--------|
| Asia | Singapura, Tokyo, Hong Kong, Seoul, Mumbai |
| Eropa | London, Frankfurt, Paris, Amsterdam |
| Amerika | Los Angeles, New York, Chicago, Toronto, São Paulo |
| Oseania | Sydney, Auckland |
| Timur Tengah/Afrika | Dubai, Johannesburg |

Untuk setiap server, benchmark mengukur:
- **Kecepatan Unduh**: MB/s atau Gbps
- **Kecepatan Unggah**: MB/s atau Gbps
- **Latensi**: Waktu pulang-pergi dalam milidetik

## Opsi Ekspor

Setelah benchmark selesai, Anda dapat mengekspor hasil dalam berbagai format:

### 🌐 HTML

File HTML mandiri dengan tata letak bergaya. Fitur:
- Desain tema gelap
- Tata letak responsif
- Semua data benchmark dalam kartu
- Footer dengan tautan marix.dev dan GitHub

### 📋 JSON

Data JSON terstruktur dengan:
- Hasil benchmark lengkap
- Timestamp
- Objek meta dengan tautan situs web dan GitHub
- Format yang dapat dibaca mesin untuk otomatisasi

### 🖼️ PNG

Screenshot gambar resolusi tinggi:
- Skala 2x untuk tampilan retina
- Warna RGB (kompatibel html2canvas)
- Semua bagian disertakan
- Footer dengan branding

### 📄 TXT

File teks berformat ASCII art:
- Karakter gambar kotak untuk tabel
- Mudah disalin-tempel
- Output gaya terminal
- Footer dengan tautan

## Integrasi paste.dev

Bagikan hasil benchmark Anda secara online dengan satu klik:

### Cara Kerja

1. Centang **"Upload to paste.dev"** sebelum memulai benchmark
2. Jalankan benchmark
3. Setelah selesai, hasil otomatis diunggah
4. Tautan yang dapat dibagikan muncul dengan tombol **Copy** dan **Open**

### Fitur

- **Unggah Otomatis**: Format TXT diunggah saat benchmark selesai
- **Salin Tautan**: Klik 📋 Copy untuk menyalin URL ke clipboard
- **Buka Tautan**: Klik 🔗 Open untuk melihat di browser
- **Berbagi Publik**: Siapa saja dengan tautan dapat melihat hasil

## Persyaratan

### Persyaratan Server

| Alat | Tujuan | Instal Otomatis |
|------|--------|-----------------|
| `dd` | Kecepatan tulis/baca disk | Biasanya sudah terinstal |
| `ioping` | Pengukuran latensi I/O | ✅ Ya |
| `fio` | Pengujian IOPS acak | ✅ Ya |
| `curl` | Tes kecepatan jaringan | Biasanya sudah terinstal |

### Manajer Paket yang Didukung

Instalasi otomatis bekerja dengan:
- **apt** (Debian, Ubuntu)
- **yum** (CentOS, RHEL)
- **dnf** (Fedora)
- **pacman** (Arch Linux)
- **apk** (Alpine Linux)
- **zypper** (openSUSE)

## Pemecahan Masalah

### Uji Disk Menampilkan Kecepatan Tidak Realistis (5+ GB/s)

**Penyebab**: `/tmp` di-mount sebagai tmpfs (disk RAM)

**Solusi**: Benchmark secara otomatis mendeteksi ini dan menggunakan direktori home sebagai gantinya.

### Uji Jaringan Terlalu Lama

**Penyebab**: Beberapa wilayah mungkin lambat atau tidak dapat dijangkau

**Solusi**: Benchmark menguji beberapa wilayah. Wilayah lambat akan timeout setelah 30 detik.

### "Permission Denied" Saat Menginstal Alat

**Penyebab**: Pengguna tidak memiliki akses sudo

**Solusi**: Minta administrator server untuk menginstal `fio` dan `ioping`:

```bash
# Debian/Ubuntu
sudo apt install fio ioping

# CentOS/RHEL
sudo yum install fio ioping

# Fedora
sudo dnf install fio ioping
```

### Error Ekspor PNG "oklch"

**Penyebab**: html2canvas tidak mendukung format warna oklch

**Solusi**: Diperbaiki di v1.0.19. PNG sekarang menggunakan warna RGB hex.

## Contoh Output

### Sampel Format TXT

```
════════════════════════════════════════════════════════════
  MARIX SERVER BENCHMARK - my-server.com
  1/29/2026, 10:30:45 AM
════════════════════════════════════════════════════════════

┌────────────────────────────────────────────────────────────┐
│                    SYSTEM INFORMATION                      │
└────────────────────────────────────────────────────────────┘
  OS            : Ubuntu 22.04.3 LTS
  CPU           : AMD EPYC 7B13 64-Core Processor
  CPU Cores     : 4
  Memory        : 2.1 GB / 8.0 GB (26%)
  Disk          : 45 GB / 160 GB (28%)
  Virtualization: KVM

┌────────────────────────────────────────────────────────────┐
│                    DISK PERFORMANCE                        │
└────────────────────────────────────────────────────────────┘
  Sequential Write : 580 MB/s
  Sequential Read  : 1.2 GB/s
  I/O Latency      : 227 µs

  Random 4K IOPS (fio):
    Read IOPS   : 45,230
    Write IOPS  : 15,076
    Read BW     : 176.7 MB/s
    Write BW    : 58.9 MB/s

┌────────────────────────────────────────────────────────────┐
│                    NETWORK SPEED                           │
└────────────────────────────────────────────────────────────┘
  Singapore    : ↓ 892 Mbps  ↑ 456 Mbps  (12ms)
  Tokyo        : ↓ 756 Mbps  ↑ 389 Mbps  (45ms)
  Frankfurt    : ↓ 234 Mbps  ↑ 178 Mbps  (156ms)
  ...

────────────────────────────────────────────────────────────
  marix.dev | https://github.com/marixdev/marix
  Generated by Marix SSH Client v1.0.19
────────────────────────────────────────────────────────────
```

## Catatan Keamanan

- Benchmark menjalankan perintah di server jarak jauh melalui SSH
- Tidak ada data yang dikirim ke server eksternal kecuali Speedtest.net (untuk tes kecepatan)
- Unggahan paste.dev bersifat opsional dan dimulai oleh pengguna
- File tes sementara otomatis dibersihkan setelah benchmark
