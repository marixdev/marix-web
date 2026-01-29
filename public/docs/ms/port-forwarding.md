# Port Forwarding (Terowong SSH)

Terowong SSH menghala trafik dengan selamat melalui sambungan SSH.

## Antara Muka Port Forwarding

![Antara Muka Port Forwarding](/portfoward.png)

## Jenis Port Forwarding

| Jenis | Arah | Kes Penggunaan |
|------|-----------|----------|
| **Local** | Jauh → Tempatan | Akses perkhidmatan jauh melalui port tempatan |
| **Remote** | Tempatan → Jauh | Dedahkan perkhidmatan tempatan ke rangkaian jauh |
| **Dynamic** | SOCKS Proxy | Cipta proksi SOCKS melalui SSH |

## Membuka Port Forwarding

Klik **"Port Forward"** di bar sisi.

## Cipta Port Forward

### Langkah 1: Buka Dialog
Klik butang **"Add Forward"**

### Langkah 2: Konfigurasikan

| Medan | Penerangan | Contoh |
|-------|-------------|---------|
| Name | Nama deskriptif | "MySQL to localhost" |
| Type | Local, Remote, atau Dynamic | Local |
| Server | Pelayan SSH untuk membuat terowong | My VPS |
| Local Host | Alamat bind tempatan | 127.0.0.1 |
| Local Port | Nombor port tempatan | 3307 |
| Remote Host | Destinasi jauh | 127.0.0.1 |
| Remote Port | Port jauh | 3306 |

### Langkah 3: Simpan
Klik **"Add"** atau **"Save"**

## Contoh Kes Penggunaan

### Local Forward: Akses MySQL Jauh

Akses pangkalan data MySQL pelayan anda dari mesin tempatan anda:

| Tetapan | Nilai |
|---------|-------|
| Type | Local |
| Local | 127.0.0.1:3307 |
| Remote | 127.0.0.1:3306 |

**Penggunaan:** Sambung ke `localhost:3307` untuk mencapai MySQL pelayan.

### Remote Forward: Dedahkan Aplikasi Tempatan

Benarkan pelayan mengakses pelayan pembangunan tempatan anda:

| Tetapan | Nilai |
|---------|-------|
| Type | Remote |
| Local | 127.0.0.1:3000 |
| Remote | 0.0.0.0:8080 |

**Penggunaan:** Port 8080 pelayan menyambung ke localhost:3000 anda.

### Dynamic: SOCKS Proxy

Cipta proksi SOCKS5 untuk melayari melalui pelayan:

| Tetapan | Nilai |
|---------|-------|
| Type | Dynamic |
| Local | 127.0.0.1:1080 |

**Penggunaan:** Konfigurasikan aplikasi untuk menggunakan proksi SOCKS5 di `localhost:1080`.

## Urus Port Forwards

### Mula
1. Cari forward dalam senarai
2. Klik butang **Start** (▶)
3. Status berubah ke "Connected"

### Berhenti
1. Cari forward yang sedang berjalan
2. Klik butang **Stop** (■)
3. Status berubah ke "Disconnected"

### Edit
1. **Berhentikan** forward jika sedang berjalan
2. Klik butang **Edit** (pensel)
3. Ubah suai tetapan
4. Klik **Save**

### Padam
1. Berhentikan forward jika sedang berjalan
2. Klik butang **Delete** (tong sampah)
3. Sahkan pemadaman

## Pantau Status

Senarai menunjukkan:
- **Penunjuk status**: Hijau = disambungkan, Merah = ralat
- **Kiraan sambungan**: Sambungan aktif
- **Bait dipindahkan**: Trafik masuk/keluar

## Kes Penggunaan Biasa

| Perkhidmatan | Port Tempatan | Port Jauh | Jenis |
|---------|------------|-------------|------|
| MySQL | 3307 | 3306 | Local |
| PostgreSQL | 5433 | 5432 | Local |
| Redis | 6380 | 6379 | Local |
| MongoDB | 27018 | 27017 | Local |
| Web App | 8080 | 80 | Local |
| Jupyter | 8889 | 8888 | Local |

## Penyelesaian Masalah

### Port Sudah Digunakan
- Pilih port tempatan yang berbeza
- Semak jika aplikasi lain menggunakan port itu
- Hentikan perkhidmatan yang bercanggah

### Sambungan Ditolak
- Sahkan perkhidmatan jauh sedang berjalan
- Semak firewall pada pelayan
- Pastikan hos/port jauh betul

### Terowong Terputus
- Semak kestabilan sambungan SSH
- Pelayan mungkin mempunyai tetapan tamat masa
- Pertimbangkan menggunakan keep-alive
