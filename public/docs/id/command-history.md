# Riwayat Perintah (Command Recall)

Marix menyediakan fitur **Riwayat Perintah** yang menyimpan dan mengingat perintah yang telah dieksekusi sebelumnya untuk setiap server. Ini membantu Anda dengan cepat menjalankan ulang perintah umum tanpa mengetiknya lagi.

## Antarmuka Riwayat Perintah

![Antarmuka Riwayat Perintah](/cmh.png)

## Fitur

- **Riwayat Per-Server**: Setiap server memiliki riwayat perintahnya sendiri
- **Penyimpanan Lokal Saja**: Perintah disimpan secara lokal, tidak pernah disinkronkan atau di-backup
- **Filter Data Sensitif**: Secara otomatis memfilter perintah yang mengandung kata sandi, token, atau rahasia
- **Pemangkasan LRU**: Secara otomatis menghapus perintah lama (maksimal 50 per server)
- **Penghitung Eksekusi**: Melacak berapa kali setiap perintah digunakan
- **Pencarian**: Temukan perintah dengan cepat menggunakan pencarian fuzzy

## Cara Mengaktifkan

Riwayat Perintah **dinonaktifkan secara default** untuk privasi. Untuk mengaktifkan:

1. Buka **Settings** (ikon roda gigi di sidebar)
2. Navigasi ke bagian **Terminal**
3. Aktifkan **Enable Command Recall**

## Penggunaan

### Membuka Riwayat Perintah

Saat dalam sesi terminal, tekan:
- Tombol **`Tab`** saat input terminal kosong (kursor di baris kosong)
- Atau klik tombol **History** di toolbar terminal

### Pintasan Keyboard

| Tombol | Aksi |
|--------|------|
| `Tab` (input kosong) | Buka popup command recall |
| `↑` / `↓` | Navigasi melalui perintah |
| `Enter` | Eksekusi perintah terpilih |
| `Escape` | Tutup popup |
| `Delete` / `Backspace` | Hapus perintah terpilih |

### Aksi Popup

- **Klik** perintah untuk mengeksekusinya segera
- **Cari** dengan mengetik di kotak pencarian
- **Hapus** perintah individual dengan ikon tempat sampah
- **Simpan sebagai Snippet** untuk mengubah perintah menjadi snippet yang dapat digunakan ulang

## Privasi & Keamanan

### Perintah yang Difilter

Perintah yang cocok dengan pola ini **tidak pernah disimpan**:

- Perintah yang mengandung `password`, `passwd`, `secret`, `token`
- Perintah dengan `api_key` atau `apikey`
- Perintah MySQL dengan flag `-p` (kata sandi)
- `sudo -S` (kata sandi stdin)
- Perintah menggunakan `sshpass` atau `expect` dengan kata sandi
- Export variabel lingkungan dengan nilai sensitif

### Penyimpanan Data

- Disimpan di `localStorage` browser
- **Tidak pernah disinkronkan** ke layanan cloud
- **Tidak pernah disertakan** dalam backup
- Dihapus saat Anda menghapus data browser

### Menghapus Riwayat

Untuk menghapus riwayat perintah:

1. Buka **Settings** → **Terminal**
2. Klik **Clear Command History**

Atau hapus per-server dari popup command recall.

## Batas

| Batas | Nilai |
|-------|-------|
| Maksimal perintah per server | 50 |
| Panjang perintah minimum | 2 karakter |

## FAQ

### Mengapa beberapa perintah tidak disimpan?

Perintah yang mengandung pola sensitif (kata sandi, token, dll.) secara otomatis difilter untuk keamanan.

### Bisakah saya mengekspor riwayat perintah saya?

Tidak, riwayat perintah sengaja dibuat lokal saja dan tidak dapat diekspor untuk alasan privasi.

### Apakah riwayat perintah disinkronkan antar perangkat?

Tidak, riwayat perintah disimpan secara lokal dan tidak pernah disinkronkan.

### How do I disable command history?

Go to Settings → Terminal → Disable "Enable Command Recall". Existing history is preserved until you clear it manually.
