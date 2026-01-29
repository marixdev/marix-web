# Klien Database

Marix menyertakan klien database bawaan untuk menghubungkan dan mengelola server database langsung dari aplikasi.

## Antarmuka Klien Database

![Antarmuka Klien Database](/database.png)

---

## Database yang Didukung

| Database | Protokol | Fitur |
|----------|----------|-------|
| **MySQL / MariaDB** | `mysql` | Editor query, browser tabel, penampil data, inspector struktur |
| **PostgreSQL** | `postgresql` | Editor query, browser tabel, penampil data, inspector struktur |
| **MongoDB** | `mongodb` | Browser koleksi, penampil dokumen, antarmuka query |
| **Redis** | `redis` | Browser key-value, antarmuka perintah |
| **SQLite** | `sqlite` | Dukungan file lokal, editor SQL lengkap |

---

## Menambah Server Database

1. Klik tombol **+ Add** di sidebar
2. Pilih tab **Database** (atau ikon database)
3. Pilih tipe database Anda

### MySQL / MariaDB / PostgreSQL

| Kolom | Deskripsi | Contoh |
|-------|-----------|--------|
| Name | Nama tampilan | `Production MySQL` |
| Host | Hostname atau IP server | `db.example.com` |
| Port | Port database | `3306` (MySQL) / `5432` (PostgreSQL) |
| Username | User database | `root` |
| Password | Kata sandi user | `••••••••` |
| Database | Database default (opsional) | `myapp_production` |
| SSL | Aktifkan SSL/TLS | ☑️ Aktif |

### MongoDB

| Kolom | Deskripsi | Contoh |
|-------|-----------|--------|
| Name | Nama tampilan | `MongoDB Atlas` |
| Connection String | URI MongoDB lengkap | `mongodb+srv://user:pass@cluster.mongodb.net/` |
| Host | Hostname server | `localhost` |
| Port | Port MongoDB | `27017` |
| Database | Database default | `myapp` |

### Redis

| Kolom | Deskripsi | Contoh |
|-------|-----------|--------|
| Name | Nama tampilan | `Redis Cache` |
| Host | Hostname server | `redis.example.com` |
| Port | Port Redis | `6379` |
| Password | Kata sandi auth (opsional) | `••••••••` |
| Database | Nomor database | `0` |

### SQLite

| Kolom | Deskripsi | Contoh |
|-------|-----------|--------|
| Name | Nama tampilan | `Local SQLite` |
| File Path | Path ke file .db | `/home/user/app.db` |

---

## Antarmuka Klien Database

### 📊 Tab Data

Jelajahi dan lihat data tabel:

- **Pilih database** dari dropdown (jika lebih dari satu)
- **Klik tabel** di sidebar untuk melihat datanya
- **Paginasi** - Navigasi melalui baris (100 per halaman default)
- **Pengurutan kolom** - Klik header kolom untuk mengurutkan
- **Filter cepat** - Cari dalam data yang ditampilkan

### ⚡ Tab Query

Tulis dan eksekusi query SQL dengan:

- **Syntax highlighting** - Kata kunci SQL, string, angka
- **Execute** - Jalankan query dengan `Ctrl+Enter` atau tombol Execute
- **Grid hasil** - Lihat hasil query dalam tabel
- **Export** - Unduh hasil sebagai CSV atau JSON
- **Waktu eksekusi** - Lihat berapa lama query berjalan

### 🏗️ Tab Structure

Periksa skema tabel yang menampilkan:

- Nama kolom dan tipe data
- Primary key, foreign key, unique constraint
- Kolom nullable dan nilai default
- Pengaturan auto-increment

### 🔗 Tab ERD

Lihat Diagram Entity-Relationship:

- Representasi visual tabel dan relasi
- Koneksi foreign key ditampilkan sebagai garis
- Geser dan zoom untuk navigasi skema besar
- Ekspor sebagai gambar (PNG)

---

## Pintasan Keyboard

| Pintasan | Aksi |
|----------|------|
| `Ctrl/Cmd + Enter` | Eksekusi query |
| `Ctrl/Cmd + S` | Simpan query ke file |
| `Ctrl/Cmd + O` | Buka query dari file |
| `Ctrl/Cmd + Shift + F` | Format SQL |
| `Escape` | Batalkan query yang berjalan |

---

## Keamanan Koneksi

### Enkripsi SSL/TLS

Aktifkan checkbox **SSL** saat menambah server. Untuk sertifikat kustom:

- Path CA Certificate
- Path Client Certificate (opsional)
- Path Client Key (opsional)

### SSH Tunnel

Hubungkan melalui SSH tunnel:

1. Pertama tambahkan server SSH di Marix
2. Saat menambah database, aktifkan **SSH Tunnel**
3. Pilih server SSH untuk tunnel

---

## Praktik Terbaik

1. **Gunakan Akun Read-Only** - Buat user database dengan izin terbatas
2. **Batasi Result Set** - Selalu gunakan `LIMIT` untuk menghindari memuat terlalu banyak data
3. **Uji Sebelum Mengeksekusi** - Untuk `UPDATE` atau `DELETE`, jalankan `SELECT` terlebih dahulu
4. **Gunakan Transaction** - Untuk operasi kritis, bungkus dalam transaction

---

## Pemecahan Masalah

| Masalah | Solusi |
|---------|--------|
| Koneksi Gagal | Periksa host/port, kredensial, firewall, pengaturan SSL |
| Query Timeout | Tambahkan LIMIT, periksa index, periksa beban server |
| Permission Denied | Periksa grant, akses database, hubungi admin |
| Error SSL Certificate | Nonaktifkan SSL, periksa validitas sertifikat, tambahkan CA cert |
