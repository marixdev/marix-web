# Snippet Perintah

Snippet adalah template perintah yang dapat digunakan ulang yang membantu Anda mengeksekusi perintah yang sering digunakan dengan cepat di terminal SSH.

## Antarmuka Snippet Perintah

![Antarmuka Snippet Perintah](/snippets.png)

---

## Ringkasan

Fitur Snippet menggabungkan **template perintah** dengan **pintasan keyboard** opsional:

- **Simpan perintah yang umum digunakan** untuk akses cepat
- **Tetapkan hotkey** (Ctrl+Shift+Key atau Cmd+Shift+Key) untuk eksekusi instan
- **Organisir berdasarkan kategori** (System, Docker, Git, Network, dll.)
- **Visibilitas berbasis scope** - global, per-host, atau per-group

---

## Mengakses Snippet

### Panel Snippet

Saat terhubung ke terminal SSH, **panel Snippet** muncul di sisi kanan:

- **Cari** - Temukan snippet berdasarkan nama, perintah, atau tag
- **Filter berdasarkan kategori** - Klik ikon kategori untuk memfilter
- **Klik untuk menyisipkan** - Klik snippet untuk menyisipkan perintahnya
- **Collapse/Expand** - Toggle visibilitas panel

### Pengelola Snippet

Akses dari menu sidebar untuk:

- Lihat semua snippet terorganisir berdasarkan scope
- Tambah, edit, atau hapus snippet
- Kelola penetapan hotkey

---

## Membuat Snippet

1. Buka **Snippets Manager** dari sidebar
2. Klik tombol **Add Snippet**
3. Isi formulir:

| Kolom | Deskripsi |
|-------|-----------|
| Name | Judul deskriptif singkat |
| Command | Perintah shell |
| Category | Pilih dari yang ditentukan atau "Custom" |
| Scope | Global, Host, atau Group |
| Hotkey | Karakter tunggal opsional |
| Description | Jelaskan apa yang dilakukan perintah |
| Tags | Kata kunci untuk kemampuan pencarian |

### Contoh Snippet

| Nama | Perintah | Kategori | Hotkey |
|------|----------|----------|--------|
| Disk Usage | `df -h` | System | D |
| List All Docker | `docker ps -a` | Docker | P |
| Git Status | `git status` | Git | G |
| Check Ports | `netstat -tulpn` | Network | N |
| Tail Logs | `tail -f /var/log/syslog` | System | L |

---

## Menggunakan Hotkey

### Pintasan Keyboard

| Platform | Format Pintasan |
|----------|-----------------|
| **Windows/Linux** | `Ctrl + Shift + [Key]` |
| **macOS** | `Cmd + Shift + [Key]` |

### Tombol yang Dicadangkan

Beberapa tombol dicadangkan dan tidak dapat digunakan:

| Tombol | Dicadangkan Untuk |
|--------|-------------------|
| A | Tambah Host Baru |
| C | Copy |
| L | Toggle LAN Transfer |
| O | Switch Terminal/SFTP |
| T | Terminal Lokal |
| V | Paste |

---

## Kategori

| Ikon | Kategori | Digunakan Untuk |
|------|----------|-----------------|
| 🖥️ | System | Perintah OS, service, log |
| 🐳 | Docker | Manajemen container |
| 📦 | Git | Version control |
| 🌐 | Network | Port, koneksi, DNS |
| 📁 | Files | Operasi file |
| 🗄️ | Database | Perintah database |
| ✨ | Custom | Lainnya |

---

## Level Scope

### Scope Global
Terlihat di **semua** koneksi SSH. Terbaik untuk perintah universal.

### Scope Host
Terlihat hanya di **server tertentu**. Terbaik untuk perintah spesifik server.

### Scope Group
Terlihat di semua server dalam **group tertentu**. Terbaik untuk perintah spesifik environment.

---

## Tips & Praktik Terbaik

1. **Gunakan Variabel** - Tinggalkan placeholder untuk bagian variabel: `tail -f [LOG_PATH]`
2. **Gabungkan Perintah** - Kombinasikan beberapa perintah: `cd /var/www && git pull && systemctl restart app`
3. **Organisir dengan Tag** - Tambahkan tag seperti `prod`, `dev`, `urgent` untuk pemfilteran lebih mudah
4. **Backup Snippet Anda** - Disertakan dalam backup terenkripsi .marix

---

## Penyimpanan Data

- Disimpan secara lokal di localStorage browser
- Disertakan dalam backup terenkripsi (file .marix)
- Disinkronkan dengan Google Drive (jika diaktifkan)
- Tidak ada penyimpanan cloud tanpa aksi backup eksplisit

---

## Pemecahan Masalah

| Masalah | Solusi |
|---------|--------|
| Hotkey Tidak Berfungsi | Periksa konflik, pastikan terminal memiliki fokus |
| Snippet Tidak Muncul | Periksa scope cocok dengan koneksi saat ini |
| Perintah Tidak Tereksekusi | Periksa status terminal, masalah izin |
