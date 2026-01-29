# Berbagi Server LAN

Bagikan konfigurasi server Anda dengan pengguna Marix lain di jaringan lokal yang sama.

## Antarmuka Berbagi Server LAN

![Antarmuka Berbagi Server LAN](/servershare.png)

## Persyaratan

> ⚠️ **Penting:** Baik pengirim maupun penerima harus mengaktifkan **LAN Discovery**.
> 
> Klik tombol 🌐 di header bar atau gunakan `Ctrl+Shift+L` untuk toggle.

- Kedua perangkat di jaringan yang sama (WiFi/LAN)
- LAN Discovery diaktifkan di kedua perangkat
- Marix berjalan di kedua perangkat

## Kasus Penggunaan

- Bagikan akses server dengan anggota tim
- Siapkan komputer baru dengan cepat
- Transfer konfigurasi antar perangkat
- Onboarding anggota tim baru

## Membuka Berbagi Server

### Metode 1: Menu Klik Kanan
1. Di daftar Hosts, klik kanan pada server
2. Pilih **"Share on LAN"**

### Metode 2: Multi-select
1. Tahan `Ctrl` (atau `⌘` di Mac) dan klik beberapa server
2. Klik tombol **"Share"** yang muncul
3. Atau klik kanan dan pilih **"Share on LAN"**

## Berbagi Server (Pengirim)

### Langkah 1: Aktifkan LAN Discovery
Klik ikon **🌐** (globe) di header bar.

### Langkah 2: Pilih Server
- Klik kanan → "Share on LAN" untuk server tunggal
- Atau multi-select server lalu klik Share

### Langkah 3: Modal Pemilihan Server
- Tinjau server yang dipilih
- Klik **"Select All"** untuk membagikan semua server
- Klik **"Clear"** untuk membatalkan pilihan semua
- Klik tag untuk memilih server dengan tag tersebut dengan cepat

### Langkah 4: Klik Tombol "Share"

### Langkah 5: Konfigurasi Opsi

| Opsi | Deskripsi |
|------|-----------|
| Include sensitive data ✅ | Bagikan kata sandi dan private key |
| Include sensitive data ❌ | Hapus kata sandi/key (penerima memasukkan secara manual) |

### Langkah 6: Catat Kode Pairing
**Kode Pairing** 6 digit berlaku selama 5 menit.

### Langkah 7: Bagikan Kode
Beritahu penerima kode pairing Anda.

### Langkah 8: Kirim
Klik **"Share on LAN"**

Status menunjukkan: "Sent X server(s). Waiting for receiver..."

## Menerima Server (Penerima)

### Langkah 1: Aktifkan LAN Discovery
Klik ikon **🌐** (globe) di header bar.

### Langkah 2: Tunggu Notifikasi
Popup muncul saat seseorang mengirim server kepada Anda.

Atau buka Hosts → klik kanan area kosong → "Receive Shared Servers"

### Langkah 3: Masukkan Kode Pairing
Masukkan kode 6 digit dari pengirim.

### Langkah 4: Import
Klik **"Decrypt & Import"**

### Langkah 5: Selesai!
Server diimpor dengan:
- Semua pengaturan asli
- Tag **"LAN-Import"** otomatis ditambahkan
- Kata sandi/key (jika pengirim menyertakannya)

Status menunjukkan: "Successfully imported X server(s)!"

## Keamanan

- Semua transfer **terenkripsi**
- Kode pairing 6 digit diperlukan
- Kode kedaluwarsa setelah 5 menit
- No data passes through external servers
- Direct device-to-device transfer

## Troubleshooting

### No Devices Appear

1. Both devices on **same network** (WiFi/LAN)
2. **LAN Discovery ON** on both devices
3. Click "Refresh" to rescan
4. Check firewall isn't blocking Marix

### Pairing Code Expired

- Codes expire after 5 minutes
- Sender can click "Regenerate" for a new code

### "Wrong Pairing Code" Error

- Double-check the code with sender
- Codes are case-sensitive
- Request a new code if needed

### Servers Missing Passwords

- Sender may have disabled "Include sensitive data"
- Manually enter passwords after import
- Ask sender to reshare with sensitive data enabled
