# Alat Jaringan

Rangkaian lengkap alat diagnostik jaringan yang terintegrasi di Marix.

## Antarmuka Alat Jaringan

![Antarmuka Alat Jaringan](/loockup.png)

## Membuka Alat Jaringan

Klik **"Lookup"** di sidebar.

## Alat yang Tersedia

| Alat | Fungsi | Contoh Input |
|------|--------|--------------|
| A Record | Dapatkan alamat IPv4 | example.com |
| AAAA Record | Dapatkan alamat IPv6 | example.com |
| MX Lookup | Dapatkan mail server | example.com |
| TXT Record | Dapatkan record TXT | example.com |
| SPF Check | Verifikasi record SPF | example.com |
| CNAME Lookup | Dapatkan nama kanonik | www.example.com |
| NS Lookup | Dapatkan name server | example.com |
| SOA Record | Dapatkan detail SOA | example.com |
| PTR Lookup | Reverse DNS | 8.8.8.8 |
| Ping | Ping host | example.com |
| Traceroute | Lacak jalur jaringan | example.com |
| TCP Port | Uji apakah port terbuka | example.com |
| Web Check | Periksa status website | example.com |
| Blacklist | Periksa blacklist IP | 1.2.3.4 |
| DNS Check | Analisis DNS lengkap | example.com |
| IP Info | Dapatkan info kepemilikan IP | 8.8.8.8 |
| WHOIS | Info registrasi domain | example.com |

## Menggunakan Alat Jaringan

### Langkah 1: Pilih Alat
Klik alat dari sidebar kiri.

### Langkah 2: Masukkan Target
- Nama domain, alamat IP, atau hostname
- Untuk TCP Port: juga masukkan nomor port

### Langkah 3: Jalankan
Klik tombol **"Run"** atau tekan Enter.

### Langkah 4: Lihat Hasil
- **Badge hijau** = Berhasil
- **Badge merah** = Gagal/Error
- Timestamp menunjukkan kapan dijalankan

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
Mengembalikan mail exchange server untuk domain.

```
example.com →
  10 mail1.example.com
  20 mail2.example.com
```

### TXT Record
Mengembalikan text record (sering digunakan untuk verifikasi, SPF, DKIM).

```
example.com → "v=spf1 include:_spf.google.com ~all"
```

### CNAME Lookup
Mengembalikan nama kanonik (alias) untuk subdomain.

```
www.example.com → example.com
```

### NS Lookup
Mengembalikan name server untuk domain.

```
example.com →
  ns1.example.com
  ns2.example.com
```

### PTR Lookup (Reverse DNS)
Mengembalikan hostname untuk alamat IP.

```
8.8.8.8 → dns.google
```

## Diagnostik Jaringan

### Ping
Uji konektivitas dan ukur latensi.

```
Pinging example.com:
  Reply: 64 bytes, time=23ms
  Reply: 64 bytes, time=21ms
  Average: 22ms
```

### Traceroute
Lacak jalur jaringan ke tujuan.

```
1  router.local (192.168.1.1) 1ms
2  isp-gateway (10.0.0.1) 5ms
3  backbone.isp.net 12ms
...
```

### TCP Port Test
Periksa apakah port tertentu terbuka.

**Tombol port cepat:** SSH(22), HTTP(80), HTTPS(443), MySQL(3306), dll.

```
example.com:443 → Open
example.com:22 → Closed/Filtered
```

### Web Check
Uji konektivitas HTTP/HTTPS dan respons.

```
https://example.com
  Status: 200 OK
  Response time: 145ms
  SSL: Valid
```

## Alat IP

### IP Info
Dapatkan informasi kepemilikan dan lokasi untuk IP.

```
8.8.8.8 →
  Organization: Google LLC
  Country: United States
  ASN: AS15169
```

### Blacklist Check
Periksa apakah IP ada di blacklist spam/abuse.

```
Checking 1.2.3.4:
  ✅ Spamhaus: Clean
  ✅ Barracuda: Clean
  ⚠️ SORBS: Listed
```

## Alat Domain

### WHOIS
Dapatkan informasi registrasi domain.

```
example.com →
  Registrar: Example Registrar
  Created: 1995-08-14
  Expires: 2025-08-13
  Status: clientTransferProhibited
```

### DNS Check
Pemeriksaan kesehatan DNS komprehensif.

```
Checking example.com:
  ✅ NS records found
  ✅ A record resolves
  ✅ MX records configured
  ✅ SPF record valid
```

## Tips

- **Salin hasil** dengan memilih dan menggunakan `Ctrl+C`
- **Jalankan beberapa pemeriksaan** pada domain yang sama
- Hasil menunjukkan **timestamp** untuk referensi
- Gunakan **IP Info** untuk menyelidiki IP yang tidak dikenal
- **Blacklist check** sebelum mengirim email dari IP baru
