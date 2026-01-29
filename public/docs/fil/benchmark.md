# Server Benchmark

Subukan at sukatin ang performance ng iyong server direkta mula sa SSH terminal na may komprehensibong system, disk, at network benchmarks.

## Interface ng Server Benchmark

![Interface ng Server Benchmark](/benchmark.png)

## Pangkalahatang-ideya

Ang Server Benchmark feature ay nagbibigay ng kumpletong pagsusuri ng performance ng iyong remote server, kabilang ang:

- **Impormasyon ng Sistema**: Mga detalye ng hardware at software
- **Performance ng Disk**: Sequential read/write speeds, I/O latency, at random IOPS
- **Bilis ng Network**: Multi-region speed tests na may mga sukat ng download, upload, at latency

## Paano Gamitin

### Pagsisimula ng Benchmark

1. Kumonekta sa server sa pamamagitan ng SSH
2. I-click ang **📊 Benchmark** button sa footer ng terminal
3. (Opsyonal) Lagyan ng tsek ang **"Upload to paste.dev"** para ibahagi ang mga resulta online
4. I-click ang **Start Benchmark**

### Mga Yugto ng Benchmark

Ang benchmark ay tumatakbo sa 4 na yugto:

| Yugto | Paglalarawan | Tagal |
|-------|--------------|-------|
| 1. Info ng Sistema | Nangongolekta ng info ng OS, CPU, RAM, disk | ~2 segundo |
| 2. Pagsubok ng Disk | Nagpapatakbo ng dd, ioping, at fio tests | ~45 segundo |
| 3. Pagsubok ng Network | Sinusubok ang bilis sa 18 pandaigdigang rehiyon | ~3-5 minuto |
| 4. Kumpleto | Nagpapakita ng mga resulta at export options | - |

## Mga Detalye ng Benchmark

### Impormasyon ng Sistema

Kasama sa nakolektang data ang:

| Field | Paglalarawan |
|-------|--------------|
| OS | Pangalan at bersyon ng operating system |
| Kernel | Bersyon ng Linux kernel |
| Architecture | Arkitektura ng CPU (x86_64, arm64, atbp.) |
| Hostname | Hostname ng server |
| CPU Model | Pangalan at specifications ng processor |
| CPU Cores | Bilang ng CPU cores |
| CPU Frequency | Kasalukuyang CPU frequency |
| Memory | Ginamit / Kabuuang RAM |
| Swap | Ginamit / Kabuuang swap space |
| Disk | Ginamit / Kabuuang disk space |
| Uptime | Oras ng pagtakbo ng server |
| Load Average | 1/5/15 minutong load averages |
| Virtualization | Uri ng VM (KVM, VMware, OpenVZ, atbp.) |

### Performance ng Disk

#### Sequential Write/Read (dd)

- **Paraan**: `dd if=/dev/zero of=test bs=64k count=16k conv=fdatasync`
- **Mga Pagpapatakbo**: 3 beses, ina-average para sa kawastuhan
- **Lokasyon ng Pagsubok**: Home directory (hindi /tmp para iwasan ang tmpfs)
- **Sinusukat**: Sequential throughput sa MB/s o GB/s

#### I/O Latency (ioping)

- **Paraan**: `ioping -c 10 -q /`
- **Sinusukat**: Oras ng pagtugon ng disk I/O sa microseconds
- **Target**: Root filesystem para sa tunay na disk latency

#### Random 4K IOPS (fio)

- **Paraan**: fio na may 4K random read/write, 64 queue depth
- **Oras ng Pagpapatakbo**: 30 segundo
- **Sinusukat**:
  - Read IOPS
  - Write IOPS
  - Read Bandwidth
  - Write Bandwidth

> **Paalala**: Kung hindi naka-install ang `fio` o `ioping`, susubukan ng benchmark na i-install ang mga ito nang awtomatiko.

### Bilis ng Network

Ang mga pagsubok ay isinasagawa laban sa mga Speedtest.net server sa 18 pandaigdigang rehiyon:

| Rehiyon | Mga Lokasyon |
|---------|--------------|
| Asya | Singapore, Tokyo, Hong Kong, Seoul, Mumbai |
| Europa | London, Frankfurt, Paris, Amsterdam |
| Americas | Los Angeles, New York, Chicago, Toronto, São Paulo |
| Oceania | Sydney, Auckland |
| Middle East/Africa | Dubai, Johannesburg |

Para sa bawat server, sinusukat ng benchmark ang:
- **Bilis ng Download**: MB/s o Gbps
- **Bilis ng Upload**: MB/s o Gbps
- **Latency**: Round-trip time sa milliseconds

## Mga Opsyon sa Pag-export

Pagkatapos makumpleto ang benchmark, maaari mong i-export ang mga resulta sa maraming format:

### 🌐 HTML

Standalone HTML file na may styled layout. Mga tampok:
- Disenyo ng dark theme
- Responsive layout
- Lahat ng benchmark data sa mga card
- Footer na may marix.dev at GitHub links

### 📋 JSON

Structured JSON data na may:
- Kumpletong benchmark results
- Mga timestamp
- Meta object na may website at GitHub links
- Machine-readable format para sa automation

### 🖼️ PNG

High-resolution image screenshot:
- 2x scale para sa retina displays
- RGB colors (compatible sa html2canvas)
- Kasama ang lahat ng seksyon
- Footer na may branding

### 📄 TXT

ASCII art formatted text file:
- Box-drawing characters para sa mga talahanayan
- Madaling i-copy-paste
- Terminal-style output
- Footer na may mga link

## paste.dev Integration

Ibahagi ang iyong benchmark results online sa isang click:

### Paano Ito Gumagana

1. Lagyan ng tsek ang **"Upload to paste.dev"** bago simulan ang benchmark
2. Patakbuhin ang benchmark
3. Pagkatapos makumpleto, awtomatikong ina-upload ang mga resulta
4. Lumilitaw ang shareable link na may **Copy** at **Open** buttons

### Mga Tampok

- **Awtomatikong Upload**: Ina-upload ang TXT format kapag nakumpleto ang benchmark
- **Kopyahin ang Link**: I-click ang 📋 Copy para kopyahin ang URL sa clipboard
- **Buksan ang Link**: I-click ang 🔗 Open para tingnan sa browser
- **Pampublikong Pagbabahagi**: Sinumang may link ay makakakita ng mga resulta

## Mga Kinakailangan

### Mga Kinakailangan ng Server

| Tool | Layunin | Auto-Install |
|------|---------|--------------|
| `dd` | Bilis ng disk write/read | Karaniwang naka-install na |
| `ioping` | Pagsukat ng I/O latency | ✅ Oo |
| `fio` | Random IOPS testing | ✅ Oo |
| `curl` | Network speed tests | Karaniwang naka-install na |

### Mga Sinusuportahang Package Managers

Gumagana ang auto-installation sa:
- **apt** (Debian, Ubuntu)
- **yum** (CentOS, RHEL)
- **dnf** (Fedora)
- **pacman** (Arch Linux)
- **apk** (Alpine Linux)
- **zypper** (openSUSE)

## Pag-troubleshoot

### Ang Disk Test ay Nagpapakita ng Hindi Makatotohanang Bilis (5+ GB/s)

**Sanhi**: Ang `/tmp` ay naka-mount bilang tmpfs (RAM disk)

**Solusyon**: Awtomatikong nakikita ito ng benchmark at gumagamit ng home directory sa halip.

### Masyadong Matagal ang Network Test

**Sanhi**: Ang ilang rehiyon ay maaaring mabagal o hindi maabot

**Solusyon**: Sinusubukan ng benchmark ang maraming rehiyon. Ang mabagal na mga rehiyon ay magti-timeout pagkatapos ng 30 segundo.

### "Permission Denied" sa Pag-install ng Tools

**Sanhi**: Walang sudo access ang user

**Solusyon**: Hilingin sa iyong server administrator na i-install ang `fio` at `ioping`:

```bash
# Debian/Ubuntu
sudo apt install fio ioping

# CentOS/RHEL
sudo yum install fio ioping

# Fedora
sudo dnf install fio ioping
```

### PNG Export Error "oklch"

**Sanhi**: Hindi sinusuportahan ng html2canvas ang oklch color format

**Solusyon**: Naayos na sa v1.0.19. Gumagamit na ang PNG ng RGB hex colors.

## Halimbawa ng Output

### Sample ng TXT Format

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

## Mga Paalala sa Seguridad

- Nagpapatakbo ang benchmark ng mga command sa remote server sa pamamagitan ng SSH
- Walang data na ipinapadala sa mga external server maliban sa Speedtest.net (para sa speed tests)
- Ang paste.dev uploads ay opsyonal at sinimulan ng user
- Awtomatikong nililinis ang mga pansamantalang test files pagkatapos ng benchmark
