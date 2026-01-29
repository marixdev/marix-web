# Terminal SSH

Terminal SSH di Marix menyediakan emulator terminal yang powerful dan kaya fitur untuk terhubung ke server remote.

## Antarmuka Terminal

![Antarmuka Terminal](/terminal.png)

Setelah terhubung via SSH, Anda akan melihat:
- Emulator terminal lengkap (didukung oleh xterm.js)
- Tombol toggle untuk tampilan Terminal/SFTP di bagian atas
- Dropdown pemilih tema
- Tombol reconnect

## Kontrol Terminal

| Kontrol | Fungsi |
|---------|--------|
| Tombol Terminal | Beralih ke tampilan terminal |
| Tombol SFTP | Beralih ke file browser |
| Pemilih tema | Ubah skema warna terminal |
| ↺ Reconnect | Hubungkan kembali jika terputus |

## Menggunakan Terminal

1. **Ketik perintah** seperti terminal SSH normal
2. Perintah dieksekusi di server remote
3. **Salin teks**: 
   - Pilih teks dengan mouse → Copy
   - Atau gunakan `Ctrl+C`
4. **Tempel teks**: 
   - Klik kanan → Paste
   - Atau gunakan `Ctrl+V`

## Pintasan Keyboard

| Pintasan | Aksi |
|----------|------|
| `Ctrl+C` | Salin teks terpilih |
| `Ctrl+V` | Tempel dari clipboard |
| `Ctrl+L` | Bersihkan layar |
| `Tab` | Buka/Tutup Riwayat Perintah |

## Ubah Tema Terminal

1. Saat dalam sesi terminal
2. Klik dropdown pemilih tema (kanan atas terminal)
3. Jelajahi tema yang tersedia (400+ pilihan)
4. Klik tema untuk menerapkan secara instan

Kategori tema yang tersedia:
- Classic (Tango, Solarized, Monokai)
- Modern (Dracula, One Dark, Nord)
- High Contrast
- Warna kustom


## Buka Terminal Lokal

Buka terminal di mesin lokal Anda tanpa terhubung ke server remote:

- Pintasan keyboard: `Ctrl+Shift+T`
- Berguna untuk menjalankan perintah lokal


## Status Koneksi

Tab menunjukkan status koneksi:
- **Indikator hijau**: Terhubung
- **Indikator merah**: Terputus
- **Indikator kuning**: Menghubungkan

## Menghubungkan Kembali

Jika koneksi Anda terputus:
Marix auto reconnect ssh

Terminal mempertahankan riwayat scroll Anda setelah koneksi ulang.
