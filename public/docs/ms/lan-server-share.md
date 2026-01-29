# Kongsi Pelayan LAN

Kongsi konfigurasi pelayan anda dengan pengguna Marix lain pada rangkaian tempatan yang sama.

## Antara Muka Kongsi Pelayan LAN

![Antara Muka Kongsi Pelayan LAN](/servershare.png)

## Keperluan

> ⚠️ **Penting:** Kedua-dua penghantar dan penerima mesti mempunyai **LAN Discovery diaktifkan**.
> 
> Klik butang 🌐 di bar pengepala atau gunakan `Ctrl+Shift+L` untuk togol.

- Kedua-dua peranti pada rangkaian yang sama (WiFi/LAN)
- LAN Discovery diaktifkan pada kedua-dua peranti
- Marix berjalan pada kedua-dua peranti

## Kes Penggunaan

- Kongsi akses pelayan dengan ahli pasukan
- Sediakan komputer baru dengan cepat
- Pindahkan konfigurasi antara peranti
- Perkenalkan ahli pasukan baru

## Membuka Kongsi Pelayan

### Kaedah 1: Menu Klik Kanan
1. Dalam senarai Hosts, klik kanan pada pelayan
2. Pilih **"Share on LAN"**

### Kaedah 2: Pilih Berbilang
1. Tahan `Ctrl` (atau `⌘` pada Mac) dan klik berbilang pelayan
2. Klik butang **"Share"** yang muncul
3. Atau klik kanan dan pilih **"Share on LAN"**

## Berkongsi Pelayan (Penghantar)

### Langkah 1: Aktifkan LAN Discovery
Klik ikon **🌐** (glob) di bar pengepala.

### Langkah 2: Pilih Pelayan
- Klik kanan → "Share on LAN" untuk pelayan tunggal
- Atau pilih berbilang pelayan kemudian klik Share

### Langkah 3: Modal Pemilihan Pelayan
- Semak pelayan yang dipilih
- Klik **"Select All"** untuk berkongsi semua pelayan
- Klik **"Clear"** untuk nyahpilih semua
- Klik tag untuk memilih pelayan dengan tag itu dengan cepat

### Langkah 4: Klik Butang "Share"

### Langkah 5: Konfigurasikan Pilihan

| Pilihan | Penerangan |
|--------|-------------|
| Include sensitive data ✅ | Kongsi kata laluan dan kunci peribadi |
| Include sensitive data ❌ | Buang kata laluan/kunci (penerima masukkan secara manual) |

### Langkah 6: Perhatikan Kod Gandingan
**Kod Gandingan** 6 digit sah selama 5 minit.

### Langkah 7: Kongsi Kod
Beritahu penerima kod gandingan anda.

### Langkah 8: Hantar
Klik **"Share on LAN"**

Status menunjukkan: "Sent X server(s). Waiting for receiver..."

## Menerima Pelayan (Penerima)

### Langkah 1: Aktifkan LAN Discovery
Klik ikon **🌐** (glob) di bar pengepala.

### Langkah 2: Tunggu Notifikasi
Popup muncul apabila seseorang menghantar pelayan kepada anda.

Atau pergi ke Hosts → klik kanan kawasan kosong → "Receive Shared Servers"

### Langkah 3: Masukkan Kod Gandingan
Masukkan kod 6 digit dari penghantar.

### Langkah 4: Import
Klik **"Decrypt & Import"**

### Langkah 5: Selesai!
Pelayan diimport dengan:
- Semua tetapan asal
- Tag **"LAN-Import"** automatik ditambah
- Kata laluan/kunci (jika penghantar menyertakannya)

Status menunjukkan: "Successfully imported X server(s)!"

## Keselamatan

- Semua pemindahan **disulitkan**
- Kod gandingan 6 digit diperlukan
- Kod tamat tempoh selepas 5 minit
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
