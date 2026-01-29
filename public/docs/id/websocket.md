# Klien WebSocket

Hubungkan ke server WebSocket untuk komunikasi bidireksional real-time. Sempurna untuk pengujian API, debugging feed langsung, atau memantau layanan WebSocket.

## Antarmuka Klien WebSocket

![Antarmuka WebSocket](/websocket.png)

## Menambah Server WebSocket

1. Klik **"Add New Host"**
2. Pilih **Protocol**: WebSocket (WSS)
3. Isi:
   - **Name**: Nama tampilan untuk koneksi
   - **URL**: Alamat server WebSocket
   - **Headers**: (opsional) Header kustom untuk autentikasi
4. Klik **Create**

### Format URL

| Format | Contoh |
|--------|--------|
| Dengan protokol | `wss://api.example.com/ws` |
| Tanpa protokol | `api.example.com/ws` (otomatis menambah `wss://`) |
| Dengan port | `wss://localhost:8080/socket` |
| Dengan path | `wss://stream.example.com/v1/feed` |

> **Catatan:** Jika tidak ada protokol yang ditentukan, Marix secara otomatis menambahkan `wss://` untuk koneksi WebSocket yang aman.

## Menghubungkan

1. Klik dua kali server WebSocket di daftar Hosts
2. Tunggu koneksi (timeout: 15 detik)
3. Indikator status menunjukkan status koneksi

### Status Koneksi

| Status | Indikator | Deskripsi |
|--------|-----------|-----------|
| Connecting | 🟡 Kuning | Membangun koneksi |
| Connected | 🟢 Hijau | Siap mengirim/menerima |
| Disconnected | ⚪ Abu-abu | Koneksi ditutup |
| Error | 🔴 Merah | Koneksi gagal |

## Mengirim Pesan

1. Ketik pesan Anda di area input di bagian bawah
2. Tekan **Enter** atau klik **Send**
3. Pesan terkirim muncul dengan panah ↑ (hijau)

### Format Pesan yang Didukung

- Teks biasa
- JSON (akan diformat untuk keterbacaan)
- Data string apa pun

## Menerima Pesan

- Pesan masuk muncul secara otomatis dengan panah ↓ (ungu)
- Pesan JSON di-auto-format dengan indentasi yang tepat
- Timestamp menunjukkan kapan setiap pesan diterima
- Riwayat pesan menyimpan hingga 1000 pesan per sesi

## Kontrol

| Kontrol | Fungsi |
|---------|--------|
| **Send** | Kirim pesan ke server |
| **Clear** | Bersihkan semua pesan dari tampilan |
| **Disconnect** | Tutup koneksi |
| **Reconnect** | Hubungkan kembali setelah disconnect/error |
| **Theme Selector** | Ubah tema warna viewer |

## Pintasan Keyboard

| Pintasan | Aksi |
|----------|------|
| `Enter` | Kirim pesan |
| `Shift+Enter` | Baris baru dalam pesan |

## Fitur

### Auto-Scroll

- Diaktifkan secara default
- Secara otomatis scroll ke pesan terbaru
- Matikan untuk meninjau pesan lama
- Jumlah pesan ditampilkan di bawah

### Dukungan Tema

- 400+ tema terminal tersedia
- Klik pemilih tema di header
- Tema diterapkan ke seluruh viewer
- Warna menyesuaikan dengan tema terang/gelap

### Formatting JSON

Saat menerima pesan JSON:
```json
{"event":"update","data":{"id":1,"value":"test"}}
```

Marix secara otomatis memformatnya sebagai:
```json
{
  "event": "update",
  "data": {
    "id": 1,
    "value": "test"
  }
}
```

## Kasus Penggunaan

### Pengujian API

Uji API WebSocket selama development:
- Kirim payload uji
- Pantau respons
- Debug masalah koneksi

### Pemantauan Data Langsung

Pantau feed real-time:
- Update harga saham
- Aplikasi chat
- Data sensor IoT
- Event server game

### Debugging

Debug implementasi WebSocket:
- Verifikasi format pesan
- Periksa stabilitas koneksi
- Uji logika reconnection

## Pemecahan Masalah

### Connection Timeout

- Periksa URL benar
- Verifikasi server berjalan
- Periksa pengaturan firewall/proxy
- Coba dengan protokol `wss://` eksplisit

### Connection Refused

- Server mungkin tidak menerima koneksi
- Nomor port salah
- Masalah sertifikat SSL/TLS
- Server memerlukan header autentikasi

### Pesan Tidak Terkirim

- Periksa status koneksi "Connected"
- Verifikasi format pesan sesuai ekspektasi server
- Periksa log server untuk error

### Terputus Secara Tidak Terduga

- Server mungkin menutup koneksi
- Gangguan jaringan
- Idle timeout di sisi server
- Klik **Reconnect** untuk memulihkan koneksi
