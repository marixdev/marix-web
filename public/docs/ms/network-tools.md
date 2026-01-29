# Alat Rangkaian

Set lengkap alat diagnostik rangkaian terbina dalam Marix.

## Antara Muka Alat Rangkaian

![Antara Muka Alat Rangkaian](/loockup.png)

## Membuka Alat Rangkaian

Klik **"Lookup"** di bar sisi.

## Alat yang Tersedia

| Alat | Fungsi | Contoh Input |
|------|----------|---------------|
| A Record | Dapatkan alamat IPv4 | example.com |
| AAAA Record | Dapatkan alamat IPv6 | example.com |
| MX Lookup | Dapatkan pelayan mel | example.com |
| TXT Record | Dapatkan rekod TXT | example.com |
| SPF Check | Sahkan rekod SPF | example.com |
| CNAME Lookup | Dapatkan nama kanonik | www.example.com |
| NS Lookup | Dapatkan pelayan nama | example.com |
| SOA Record | Dapatkan butiran SOA | example.com |
| PTR Lookup | DNS terbalik | 8.8.8.8 |
| Ping | Ping hos | example.com |
| Traceroute | Jejak laluan rangkaian | example.com |
| TCP Port | Uji jika port terbuka | example.com |
| Web Check | Semak status laman web | example.com |
| Blacklist | Semak senarai hitam IP | 1.2.3.4 |
| DNS Check | Analisis DNS penuh | example.com |
| IP Info | Dapatkan maklumat pemilikan IP | 8.8.8.8 |
| WHOIS | Maklumat pendaftaran domain | example.com |

## Menggunakan Alat Rangkaian

### Langkah 1: Pilih Alat
Klik alat dari bar sisi kiri.

### Langkah 2: Masukkan Sasaran
- Nama domain, alamat IP, atau nama hos
- Untuk TCP Port: juga masukkan nombor port

### Langkah 3: Jalankan
Klik butang **"Run"** atau tekan Enter.

### Langkah 4: Lihat Keputusan
- **Lencana hijau** = Berjaya
- **Lencana merah** = Gagal/Ralat
- Cap masa menunjukkan bila dijalankan

## Alat DNS

### A Record
Mengembalikan alamat IPv4 untuk domain.

```
example.com → 93.184.216.34
```

### AAAA Record
Mengembalikan alamat IPv6 untuk domain.

```
example.com → 2606:2800:220:1:248:1893:25c8:1946
```

### MX Lookup
Mengembalikan pelayan pertukaran mel untuk domain.

```
example.com →
  10 mail1.example.com
  20 mail2.example.com
```

### TXT Record
Mengembalikan rekod teks (sering digunakan untuk pengesahan, SPF, DKIM).

```
example.com → "v=spf1 include:_spf.google.com ~all"
```

### CNAME Lookup
Mengembalikan nama kanonik (alias) untuk subdomain.

```
www.example.com → example.com
```

### NS Lookup
Mengembalikan pelayan nama untuk domain.

```
example.com →
  ns1.example.com
  ns2.example.com
```

### PTR Lookup (DNS Terbalik)
Mengembalikan nama hos untuk alamat IP.

```
8.8.8.8 → dns.google
```

## Diagnostik Rangkaian

### Ping
Uji ketersambungan dan ukur latensi.

```
Pinging example.com:
  Reply: 64 bytes, time=23ms
  Reply: 64 bytes, time=21ms
  Average: 22ms
```

### Traceroute
Jejak laluan rangkaian ke destinasi.

```
1  router.local (192.168.1.1) 1ms
2  isp-gateway (10.0.0.1) 5ms
3  backbone.isp.net 12ms
...
```

### Ujian TCP Port
Semak jika port tertentu terbuka.

**Butang port pantas:** SSH(22), HTTP(80), HTTPS(443), MySQL(3306), dll.

```
example.com:443 → Open
example.com:22 → Closed/Filtered
```

### Web Check
Uji ketersambungan HTTP/HTTPS dan respons.

```
https://example.com
  Status: 200 OK
  Response time: 145ms
  SSL: Valid
```

## Alat IP

### IP Info
Dapatkan maklumat pemilikan dan lokasi untuk IP.

```
8.8.8.8 →
  Organization: Google LLC
  Country: United States
  ASN: AS15169
```

### Blacklist Check
Semak jika IP berada dalam senarai hitam spam/penyalahgunaan.

```
Checking 1.2.3.4:
  ✅ Spamhaus: Clean
  ✅ Barracuda: Clean
  ⚠️ SORBS: Listed
```

## Alat Domain

### WHOIS
Dapatkan maklumat pendaftaran domain.

```
example.com →
  Registrar: Example Registrar
  Created: 1995-08-14
  Expires: 2025-08-13
  Status: clientTransferProhibited
```

### DNS Check
Pemeriksaan kesihatan DNS yang komprehensif.

```
Checking example.com:
  ✅ NS records found
  ✅ A record resolves
  ✅ MX records configured
  ✅ SPF record valid
```

## Petua

- **Salin keputusan** dengan memilih dan menggunakan `Ctrl+C`
- **Jalankan berbilang pemeriksaan** pada domain yang sama
- Keputusan menunjukkan **cap masa** untuk rujukan
- Gunakan **IP Info** untuk menyiasat IP yang tidak diketahui
- **Blacklist check** before sending emails from a new IP
