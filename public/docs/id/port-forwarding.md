# Port Forwarding (SSH Tunnel)

SSH tunnel secara aman merutekan lalu lintas melalui koneksi SSH.

## Antarmuka Port Forwarding

![Antarmuka Port Forwarding](/portfoward.png)

## Jenis Port Forwarding

| Jenis | Arah | Kasus Penggunaan |
|-------|------|------------------|
| **Local** | Remote → Local | Akses layanan remote melalui port lokal |
| **Remote** | Local → Remote | Ekspos layanan lokal ke jaringan remote |
| **Dynamic** | SOCKS Proxy | Buat SOCKS proxy melalui SSH |

## Membuka Port Forwarding

Klik **"Port Forward"** di sidebar.

## Membuat Port Forward

### Langkah 1: Buka Dialog
Klik tombol **"Add Forward"**

### Langkah 2: Konfigurasi

| Kolom | Deskripsi | Contoh |
|-------|-----------|--------|
| Name | Nama deskriptif | "MySQL to localhost" |
| Type | Local, Remote, atau Dynamic | Local |
| Server | Server SSH untuk tunnel | My VPS |
| Local Host | Alamat bind lokal | 127.0.0.1 |
| Local Port | Nomor port lokal | 3307 |
| Remote Host | Tujuan remote | 127.0.0.1 |
| Remote Port | Port remote | 3306 |

### Langkah 3: Simpan
Klik **"Add"** atau **"Save"**

## Contoh Kasus Penggunaan

### Local Forward: Akses MySQL Remote

Akses database MySQL server Anda dari mesin lokal:

| Pengaturan | Nilai |
|------------|-------|
| Type | Local |
| Local | 127.0.0.1:3307 |
| Remote | 127.0.0.1:3306 |

**Penggunaan:** Hubungkan ke `localhost:3307` untuk mencapai MySQL server.

### Remote Forward: Ekspos Aplikasi Lokal

Biarkan server mengakses server development lokal Anda:

| Pengaturan | Nilai |
|------------|-------|
| Type | Remote |
| Local | 127.0.0.1:3000 |
| Remote | 0.0.0.0:8080 |

**Penggunaan:** Port 8080 server terhubung ke localhost:3000 Anda.

### Dynamic: SOCKS Proxy

Buat SOCKS5 proxy untuk browsing melalui server:

| Pengaturan | Nilai |
|------------|-------|
| Type | Dynamic |
| Local | 127.0.0.1:1080 |

**Penggunaan:** Konfigurasi aplikasi untuk menggunakan SOCKS5 proxy di `localhost:1080`.

## Mengelola Port Forward

### Mulai
1. Temukan forward di daftar
2. Klik tombol **Start** (▶)
3. Status berubah menjadi "Connected"

### Hentikan
1. Temukan forward yang berjalan
2. Klik tombol **Stop** (■)
3. Status berubah menjadi "Disconnected"

### Edit
1. **Hentikan** forward jika berjalan
2. Klik tombol **Edit** (pensil)
3. Ubah pengaturan
4. Klik **Save**

### Hapus
1. Hentikan forward jika berjalan
2. Klik tombol **Delete** (tempat sampah)
3. Konfirmasi penghapusan

## Monitor Status

Daftar menunjukkan:
- **Indikator status**: Hijau = terhubung, Merah = error
- **Jumlah koneksi**: Koneksi aktif
- **Byte ditransfer**: Lalu lintas masuk/keluar

## Kasus Penggunaan Umum

| Layanan | Port Lokal | Port Remote | Jenis |
|---------|------------|-------------|-------|
| MySQL | 3307 | 3306 | Local |
| PostgreSQL | 5433 | 5432 | Local |
| Redis | 6380 | 6379 | Local |
| MongoDB | 27018 | 27017 | Local |
| Web App | 8080 | 80 | Local |
| Jupyter | 8889 | 8888 | Local |

## Pemecahan Masalah

### Port Sudah Digunakan
- Pilih port lokal yang berbeda
- Periksa apakah aplikasi lain menggunakan port tersebut
- Hentikan layanan yang konflik

### Koneksi Ditolak
- Verifikasi layanan remote berjalan
- Periksa firewall di server
- Pastikan host/port remote benar

### Tunnel Terputus
- Periksa stabilitas koneksi SSH
- Server mungkin memiliki pengaturan timeout
- Pertimbangkan menggunakan keep-alive
