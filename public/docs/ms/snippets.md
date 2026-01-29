# Coretan Arahan

Coretan adalah templat arahan yang boleh digunakan semula yang membantu anda melaksanakan arahan yang kerap digunakan dengan cepat dalam terminal SSH.

## Antara Muka Coretan Arahan

![Antara Muka Coretan Arahan](/snippets.png)

---

## Gambaran Keseluruhan

Ciri Coretan menggabungkan **templat arahan** dengan **pintasan papan kekunci** pilihan:

- **Simpan arahan yang kerap digunakan** untuk akses pantas
- **Tetapkan hotkey** (Ctrl+Shift+Key atau Cmd+Shift+Key) untuk pelaksanaan segera
- **Susun mengikut kategori** (System, Docker, Git, Network, dll.)
- **Keterlihatan berasaskan skop** - global, per-hos, atau per-kumpulan

---

## Mengakses Coretan

### Panel Coretan

Apabila disambungkan ke terminal SSH, **panel Coretan** muncul di sebelah kanan:

- **Cari** - Cari coretan mengikut nama, arahan, atau tag
- **Tapis mengikut kategori** - Klik ikon kategori untuk menapis
- **Klik untuk memasukkan** - Klik mana-mana coretan untuk memasukkan arahannya
- **Kuncup/Kembangkan** - Togol keterlihatan panel

### Pengurus Coretan

Akses dari menu bar sisi untuk:

- Lihat semua coretan yang disusun mengikut skop
- Tambah, edit, atau padam coretan
- Urus penetapan hotkey

---

## Mencipta Coretan

1. Buka **Pengurus Coretan** dari bar sisi
2. Klik butang **Add Snippet**
3. Isi borang:

| Medan | Penerangan |
|-------|-------------|
| Name | Tajuk deskriptif pendek |
| Command | Arahan shell |
| Category | Pilih dari pratetap atau "Custom" |
| Scope | Global, Host, atau Group |
| Hotkey | Aksara tunggal pilihan |
| Description | Terangkan apa yang arahan lakukan |
| Tags | Kata kunci untuk kebolehcarian |

### Contoh Coretan

| Nama | Arahan | Kategori | Hotkey |
|------|---------|----------|--------|
| Disk Usage | `df -h` | System | D |
| List All Docker | `docker ps -a` | Docker | P |
| Git Status | `git status` | Git | G |
| Check Ports | `netstat -tulpn` | Network | N |
| Tail Logs | `tail -f /var/log/syslog` | System | L |

---

## Menggunakan Hotkey

### Pintasan Papan Kekunci

| Platform | Format Pintasan |
|----------|-----------------|
| **Windows/Linux** | `Ctrl + Shift + [Key]` |
| **macOS** | `Cmd + Shift + [Key]` |

### Kekunci Terpelihara

Beberapa kekunci terpelihara dan tidak boleh digunakan:

| Kekunci | Terpelihara Untuk |
|-----|--------------|
| A | Tambah Hos Baru |
| C | Salin |
| L | Togol LAN Transfer |
| O | Tukar Terminal/SFTP |
| T | Terminal Tempatan |
| V | Tampal |

---

## Kategori

| Ikon | Kategori | Gunakan Untuk |
|------|----------|---------|
| 🖥️ | System | Arahan OS, perkhidmatan, log |
| 🐳 | Docker | Pengurusan kontena |
| 📦 | Git | Kawalan versi |
| 🌐 | Network | Port, sambungan, DNS |
| 📁 | Files | Operasi fail |
| 🗄️ | Database | Arahan pangkalan data |
| ✨ | Custom | Apa-apa sahaja |

---

## Tahap Skop

### Skop Global
Kelihatan pada **semua** sambungan SSH. Terbaik untuk arahan universal.

### Skop Hos
Kelihatan hanya pada **pelayan tertentu**. Terbaik untuk arahan khusus pelayan.

### Skop Kumpulan
Kelihatan pada semua pelayan dalam **kumpulan tertentu**. Terbaik untuk arahan khusus persekitaran.

---

## Petua & Amalan Terbaik

1. **Gunakan Pembolehubah** - Tinggalkan placeholder untuk bahagian berubah: `tail -f [LOG_PATH]`
2. **Rangkaikan Arahan** - Gabungkan berbilang arahan: `cd /var/www && git pull && systemctl restart app`
3. **Susun dengan Tag** - Tambah tag seperti `prod`, `dev`, `urgent` untuk penapisan lebih mudah
4. **Sandarkan Coretan Anda** - Disertakan dalam sandaran .marix yang disulitkan

---

## Storan Data

- Disimpan secara tempatan dalam localStorage pelayar
- Disertakan dalam sandaran yang disulitkan (fail .marix)
- Disegerakkan dengan Google Drive (jika diaktifkan)
- Tiada storan awan tanpa tindakan sandaran eksplisit

---

## Penyelesaian Masalah

| Isu | Penyelesaian |
|-------|----------|
| Hotkey Tidak Berfungsi | Semak untuk konflik, pastikan terminal difokuskan |
| Coretan Tidak Muncul | Semak skop sepadan dengan sambungan semasa |
| Arahan Tidak Dilaksanakan | Semak keadaan terminal, isu kebenaran |
