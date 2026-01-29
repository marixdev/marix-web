# Transfer File LAN

Transfer file antar perangkat di jaringan lokal yang sama tanpa memerlukan server.

## Antarmuka Transfer File LAN

![Antarmuka Transfer File LAN](/sendfile.png)

## Persyaratan

> ⚠️ **Penting:** Baik pengirim maupun penerima harus mengaktifkan **LAN Discovery**.
> 
> Klik tombol 🌐 di header bar atau gunakan `Ctrl+Shift+L` untuk toggle.

- Kedua perangkat di jaringan yang sama (WiFi/LAN)
- LAN Discovery diaktifkan di kedua perangkat
- Marix berjalan di kedua perangkat

## Membuka Transfer File LAN

Klik **"Send Files"** di sidebar.

## Mengirim File

### Langkah 1: Aktifkan LAN Discovery
Klik ikon **🌐** (globe) di header bar.

### Langkah 2: Pilih File
1. Buka Send Files → tab **Send**
2. Klik **"Select Files"** atau **"Select Folder"**
3. Item yang dipilih muncul di daftar
4. Klik × untuk menghapus item

### Langkah 3: Dapatkan Kode Pairing
Catat **Kode Pairing** 6 digit yang ditampilkan.

### Langkah 4: Bagikan Kode
Beritahu penerima kode pairing Anda (secara lisan atau via pesan).

### Langkah 5: Mulai Mengirim
1. Klik **"Start Sending"**
2. Status: "Waiting for receiver..."
3. Transfer dimulai saat penerima terhubung

## Menerima File

### Langkah 1: Aktifkan LAN Discovery
Klik ikon **🌐** (globe) di header bar.

### Langkah 2: Hubungkan
1. Buka Send Files → tab **Receive**
2. Masukkan kode pairing 6 digit dari pengirim
3. Klik **"Connect"**

### Langkah 3: Terima
- Perangkat terhubung secara otomatis
- Transfer dimulai segera
- File disimpan ke folder Downloads Anda

## Progres Transfer

Selama transfer Anda akan melihat:
- Progress bar dengan persentase selesai
- Indikator kecepatan (misalnya, "5.2 MB/s")
- File yang sedang ditransfer saat ini

## Batalkan Transfer

Klik tombol **"Cancel"** untuk menghentikan transfer kapan saja.

## Pemecahan Masalah

### Tidak Dapat Menemukan Pengirim/Penerima

1. Pastikan kedua perangkat **LAN Discovery ON** (ikon 🌐 aktif)
2. Kedua perangkat harus di **jaringan lokal yang sama**
3. Periksa firewall tidak memblokir Marix
4. Coba refresh koneksi

### Transfer Gagal

- File besar mungkin memerlukan waktu - bersabarlah
- Pastikan koneksi jaringan stabil
- Coba kirim ulang dengan kode pairing baru
- Periksa ruang disk yang tersedia di penerima

### Kecepatan Transfer Lambat

- Gunakan Ethernet kabel untuk transfer lebih cepat
- Kurangi kemacetan jaringan
- Tutup aplikasi yang banyak menggunakan bandwidth
- Periksa performa router/jaringan

## Keamanan

- Transfer menggunakan **enkripsi end-to-end**
- Kode pairing 6 digit memastikan hanya penerima yang dituju yang menerima file
- Tidak ada data yang melewati server eksternal
- File ditransfer langsung antar perangkat

## Tips

- **Large folders**: Select the folder instead of individual files
- **Multiple files**: You can select multiple items at once
- **Verify receipt**: Confirm with receiver that files arrived correctly
- **Network quality**: Better network = faster transfers
