# Klien Pangkalan Data

Marix menyertakan klien pangkalan data terbina dalam untuk menyambung dan mengurus pelayan pangkalan data terus dari aplikasi.

## Antara Muka Klien Pangkalan Data

![Antara Muka Klien Pangkalan Data](/database.png)

---

## Pangkalan Data yang Disokong

| Pangkalan Data | Protokol | Ciri-ciri |
|----------|----------|----------|
| **MySQL / MariaDB** | `mysql` | Editor pertanyaan, pelayar jadual, pemapar data, pemeriksa struktur |
| **PostgreSQL** | `postgresql` | Editor pertanyaan, pelayar jadual, pemapar data, pemeriksa struktur |
| **MongoDB** | `mongodb` | Pelayar koleksi, pemapar dokumen, antara muka pertanyaan |
| **Redis** | `redis` | Pelayar kunci-nilai, antara muka arahan |
| **SQLite** | `sqlite` | Sokongan fail tempatan, editor SQL penuh |

---

## Menambah Pelayan Pangkalan Data

1. Klik butang **+ Add** di bar sisi
2. Pilih tab **Database** (atau ikon pangkalan data)
3. Pilih jenis pangkalan data anda

### MySQL / MariaDB / PostgreSQL

| Medan | Penerangan | Contoh |
|-------|-------------|---------|
| Name | Nama paparan | `Production MySQL` |
| Host | Nama hos atau IP pelayan | `db.example.com` |
| Port | Port pangkalan data | `3306` (MySQL) / `5432` (PostgreSQL) |
| Username | Pengguna pangkalan data | `root` |
| Password | Kata laluan pengguna | `••••••••` |
| Database | Pangkalan data lalai (pilihan) | `myapp_production` |
| SSL | Aktifkan SSL/TLS | ☑️ Diaktifkan |

### MongoDB

| Medan | Penerangan | Contoh |
|-------|-------------|---------|
| Name | Nama paparan | `MongoDB Atlas` |
| Connection String | URI MongoDB penuh | `mongodb+srv://user:pass@cluster.mongodb.net/` |
| Host | Nama hos pelayan | `localhost` |
| Port | Port MongoDB | `27017` |
| Database | Pangkalan data lalai | `myapp` |

### Redis

| Medan | Penerangan | Contoh |
|-------|-------------|---------|
| Name | Nama paparan | `Redis Cache` |
| Host | Nama hos pelayan | `redis.example.com` |
| Port | Port Redis | `6379` |
| Password | Kata laluan pengesahan (pilihan) | `••••••••` |
| Database | Nombor pangkalan data | `0` |

### SQLite

| Medan | Penerangan | Contoh |
|-------|-------------|---------|
| Name | Nama paparan | `Local SQLite` |
| File Path | Laluan ke fail .db | `/home/user/app.db` |

---

## Antara Muka Klien Pangkalan Data

### 📊 Tab Data

Layari dan lihat data jadual:

- **Pilih pangkalan data** dari dropdown (jika berbilang)
- **Klik jadual** di bar sisi untuk melihat datanya
- **Paginasi** - Navigasi melalui baris (100 setiap halaman secara lalai)
- **Pengisihan lajur** - Klik pengepala lajur untuk mengisih
- **Penapis pantas** - Cari dalam data yang dipaparkan

### ⚡ Tab Query

Tulis dan laksanakan pertanyaan SQL dengan:

- **Penyorotan sintaks** - Kata kunci SQL, rentetan, nombor
- **Execute** - Jalankan pertanyaan dengan `Ctrl+Enter` atau butang Execute
- **Grid keputusan** - Lihat hasil pertanyaan dalam jadual
- **Export** - Muat turun hasil sebagai CSV atau JSON
- **Masa pelaksanaan** - Lihat berapa lama pertanyaan mengambil masa

### 🏗️ Tab Structure

Periksa skema jadual yang menunjukkan:

- Nama lajur dan jenis data
- Kunci utama, kunci asing, kekangan unik
- Lajur nullable dan nilai lalai
- Tetapan auto-increment

### 🔗 Tab ERD

Lihat Rajah Hubungan Entiti:

- Representasi visual jadual dan hubungan
- Sambungan kunci asing ditunjukkan sebagai garisan
- Seret dan zum untuk menavigasi skema besar
- Eksport sebagai imej (PNG)

---

## Pintasan Papan Kekunci

| Pintasan | Tindakan |
|----------|--------|
| `Ctrl/Cmd + Enter` | Laksanakan pertanyaan |
| `Ctrl/Cmd + S` | Simpan pertanyaan ke fail |
| `Ctrl/Cmd + O` | Buka pertanyaan dari fail |
| `Ctrl/Cmd + Shift + F` | Format SQL |
| `Escape` | Batalkan pertanyaan yang sedang berjalan |

---

## Keselamatan Sambungan

### Penyulitan SSL/TLS

Aktifkan kotak semak **SSL** apabila menambah pelayan. Untuk sijil tersuai:

- Laluan Sijil CA
- Laluan Sijil Klien (pilihan)
- Laluan Kunci Klien (pilihan)

### Terowong SSH

Sambung melalui terowong SSH:

1. Mula-mula tambah pelayan SSH dalam Marix
2. Apabila menambah pangkalan data, aktifkan **SSH Tunnel**
3. Pilih pelayan SSH untuk membuat terowong

---

## Amalan Terbaik

1. **Gunakan Akaun Baca-Sahaja** - Cipta pengguna pangkalan data dengan kebenaran terhad
2. **Hadkan Set Hasil** - Sentiasa gunakan `LIMIT` untuk mengelakkan memuatkan terlalu banyak data
3. **Uji Sebelum Melaksanakan** - Untuk `UPDATE` atau `DELETE`, jalankan `SELECT` dahulu
4. **Gunakan Transaksi** - Untuk operasi kritikal, bungkus dalam transaksi

---

## Penyelesaian Masalah

| Isu | Penyelesaian |
|-------|----------|
| Sambungan Gagal | Semak hos/port, kelayakan, firewall, tetapan SSL |
| Tamat Masa Pertanyaan | Tambah LIMIT, semak indeks, semak beban pelayan |
| Kebenaran Dinafikan | Semak pemberian, akses pangkalan data, hubungi pentadbir |
| Ralat Sijil SSL | Lumpuhkan SSL, semak kesahihan sijil, tambah sijil CA |
