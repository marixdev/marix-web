# Penanda Aras Pelayan

Uji dan ukur prestasi pelayan anda secara langsung dari terminal SSH dengan penanda aras sistem, cakera dan rangkaian yang komprehensif.

## Antara Muka Penanda Aras Pelayan

![Antara Muka Penanda Aras Pelayan](/benchmark.png)

## Gambaran Keseluruhan

Ciri Penanda Aras Pelayan menyediakan analisis prestasi lengkap untuk pelayan jauh anda, termasuk:

- **Maklumat Sistem**: Butiran perkakasan dan perisian
- **Prestasi Cakera**: Kelajuan baca/tulis berurutan, kependaman I/O dan IOPS rawak
- **Kelajuan Rangkaian**: Ujian kelajuan pelbagai wilayah dengan pengukuran muat turun, muat naik dan kependaman

## Cara Menggunakan

### Memulakan Penanda Aras

1. Sambung ke pelayan melalui SSH
2. Klik butang **📊 Benchmark** di footer terminal
3. (Pilihan) Tandakan **"Upload to paste.dev"** untuk berkongsi keputusan dalam talian
4. Klik **Start Benchmark**

### Fasa Penanda Aras

Penanda aras berjalan dalam 4 fasa:

| Fasa | Penerangan | Tempoh |
|------|------------|--------|
| 1. Info Sistem | Mengumpul info OS, CPU, RAM, cakera | ~2 saat |
| 2. Ujian Cakera | Menjalankan ujian dd, ioping dan fio | ~45 saat |
| 3. Ujian Rangkaian | Menguji kelajuan ke 18 wilayah global | ~3-5 minit |
| 4. Selesai | Menunjukkan keputusan dan pilihan eksport | - |

## Butiran Penanda Aras

### Maklumat Sistem

Data yang dikumpul termasuk:

| Medan | Penerangan |
|-------|------------|
| OS | Nama dan versi sistem pengendalian |
| Kernel | Versi kernel Linux |
| Architecture | Seni bina CPU (x86_64, arm64, dll.) |
| Hostname | Nama hos pelayan |
| CPU Model | Nama dan spesifikasi pemproses |
| CPU Cores | Bilangan teras CPU |
| CPU Frequency | Frekuensi CPU semasa |
| Memory | RAM terpakai / jumlah |
| Swap | Ruang swap terpakai / jumlah |
| Disk | Ruang cakera terpakai / jumlah |
| Uptime | Masa aktif pelayan |
| Load Average | Purata beban 1/5/15 minit |
| Virtualization | Jenis VM (KVM, VMware, OpenVZ, dll.) |

### Prestasi Cakera

#### Tulis/Baca Berurutan (dd)

- **Kaedah**: `dd if=/dev/zero of=test bs=64k count=16k conv=fdatasync`
- **Larian**: 3 kali, dipuratakan untuk ketepatan
- **Lokasi Ujian**: Direktori home (bukan /tmp untuk mengelakkan tmpfs)
- **Mengukur**: Daya pemprosesan berurutan dalam MB/s atau GB/s

#### Kependaman I/O (ioping)

- **Kaedah**: `ioping -c 10 -q /`
- **Mengukur**: Masa tindak balas I/O cakera dalam mikrosaat
- **Sasaran**: Sistem fail akar untuk kependaman cakera sebenar

#### IOPS Rawak 4K (fio)

- **Kaedah**: fio dengan baca/tulis rawak 4K, kedalaman giliran 64
- **Masa larian**: 30 saat
- **Mengukur**:
  - Read IOPS
  - Write IOPS
  - Read Bandwidth
  - Write Bandwidth

> **Nota**: Jika `fio` atau `ioping` tidak dipasang, penanda aras akan cuba memasangnya secara automatik.

### Kelajuan Rangkaian

Ujian dilakukan terhadap pelayan Speedtest.net di 18 wilayah global:

| Wilayah | Lokasi |
|---------|--------|
| Asia | Singapura, Tokyo, Hong Kong, Seoul, Mumbai |
| Eropah | London, Frankfurt, Paris, Amsterdam |
| Amerika | Los Angeles, New York, Chicago, Toronto, São Paulo |
| Oceania | Sydney, Auckland |
| Timur Tengah/Afrika | Dubai, Johannesburg |

Untuk setiap pelayan, penanda aras mengukur:
- **Kelajuan Muat Turun**: MB/s atau Gbps
- **Kelajuan Muat Naik**: MB/s atau Gbps
- **Kependaman**: Masa pergi-balik dalam milisaat

## Pilihan Eksport

Selepas penanda aras selesai, anda boleh mengeksport keputusan dalam pelbagai format:

### 🌐 HTML

Fail HTML kendiri dengan susun atur bergaya. Ciri-ciri:
- Reka bentuk tema gelap
- Susun atur responsif
- Semua data penanda aras dalam kad
- Footer dengan pautan marix.dev dan GitHub

### 📋 JSON

Data JSON berstruktur dengan:
- Keputusan penanda aras lengkap
- Cap masa
- Objek meta dengan pautan laman web dan GitHub
- Format boleh dibaca mesin untuk automasi

### 🖼️ PNG

Tangkapan skrin imej resolusi tinggi:
- Skala 2x untuk paparan retina
- Warna RGB (serasi html2canvas)
- Semua bahagian disertakan
- Footer dengan penjenamaan

### 📄 TXT

Fail teks berformat seni ASCII:
- Aksara lukisan kotak untuk jadual
- Mudah untuk salin-tampal
- Output gaya terminal
- Footer dengan pautan

## Integrasi paste.dev

Kongsi keputusan penanda aras anda dalam talian dengan satu klik:

### Cara Ia Berfungsi

1. Tandakan **"Upload to paste.dev"** sebelum memulakan penanda aras
2. Jalankan penanda aras
3. Selepas selesai, keputusan dimuat naik secara automatik
4. Pautan boleh dikongsi muncul dengan butang **Copy** dan **Open**

### Ciri-ciri

- **Muat Naik Automatik**: Format TXT dimuat naik apabila penanda aras selesai
- **Salin Pautan**: Klik 📋 Copy untuk menyalin URL ke papan klip
- **Buka Pautan**: Klik 🔗 Open untuk melihat di pelayar
- **Perkongsian Awam**: Sesiapa sahaja dengan pautan boleh melihat keputusan

## Keperluan

### Keperluan Pelayan

| Alat | Tujuan | Pasang Automatik |
|------|--------|------------------|
| `dd` | Kelajuan tulis/baca cakera | Biasanya sudah dipasang |
| `ioping` | Pengukuran kependaman I/O | ✅ Ya |
| `fio` | Ujian IOPS rawak | ✅ Ya |
| `curl` | Ujian kelajuan rangkaian | Biasanya sudah dipasang |

### Pengurus Pakej yang Disokong

Pemasangan automatik berfungsi dengan:
- **apt** (Debian, Ubuntu)
- **yum** (CentOS, RHEL)
- **dnf** (Fedora)
- **pacman** (Arch Linux)
- **apk** (Alpine Linux)
- **zypper** (openSUSE)

## Penyelesaian Masalah

### Ujian Cakera Menunjukkan Kelajuan Tidak Realistik (5+ GB/s)

**Punca**: `/tmp` dipasang sebagai tmpfs (cakera RAM)

**Penyelesaian**: Penanda aras secara automatik mengesan ini dan menggunakan direktori home sebagai gantinya.

### Ujian Rangkaian Mengambil Masa Terlalu Lama

**Punca**: Sesetengah wilayah mungkin lambat atau tidak dapat dicapai

**Penyelesaian**: Penanda aras menguji pelbagai wilayah. Wilayah lambat akan tamat masa selepas 30 saat.

### "Permission Denied" Semasa Memasang Alat

**Punca**: Pengguna tidak mempunyai akses sudo

**Penyelesaian**: Minta pentadbir pelayan untuk memasang `fio` dan `ioping`:

```bash
# Debian/Ubuntu
sudo apt install fio ioping

# CentOS/RHEL
sudo yum install fio ioping

# Fedora
sudo dnf install fio ioping
```

### Ralat Eksport PNG "oklch"

**Punca**: html2canvas tidak menyokong format warna oklch

**Penyelesaian**: Diperbaiki dalam v1.0.19. PNG kini menggunakan warna RGB hex.

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

## Nota Keselamatan

- Penanda aras menjalankan arahan di pelayan jauh melalui SSH
- Tiada data dihantar ke pelayan luaran kecuali Speedtest.net (untuk ujian kelajuan)
- Muat naik paste.dev adalah pilihan dan dimulakan oleh pengguna
- Fail ujian sementara dibersihkan secara automatik selepas penanda aras
