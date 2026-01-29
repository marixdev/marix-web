# Kunci Aplikasi

Lindungi aplikasi Marix anda dengan Kunci Aplikasi. Apabila diaktifkan, aplikasi akan dikunci secara automatik selepas tempoh tidak aktif, menghalang akses tanpa kebenaran kepada pelayan dan kelayakan anda.

## Antara Muka Kunci Aplikasi

![Antara Muka Kunci Aplikasi](/applock.png)

## Mengaktifkan Kunci Aplikasi

1. Buka **Settings** (ikon gear di bar sisi)
2. Cari bahagian **Security**
3. Togol **Enable App Lock**

## Kaedah Kunci

Pilih cara aplikasi harus dikunci:

| Kaedah | Penerangan | Tahap Keselamatan |
|--------|-------------|----------------|
| **Blur** | Kaburkan kandungan skrin | Rendah - privasi visual sahaja |
| **PIN** | Memerlukan PIN 4-6 digit untuk membuka | Sederhana |
| **Password** | Memerlukan kata laluan untuk membuka | Tinggi |

### Mod Blur

- Kandungan skrin menjadi kabur
- Klik di mana-mana untuk membuka
- Terbaik untuk privasi pantas dalam persekitaran pejabat

### Mod PIN

- Tetapkan PIN numerik 4-6 digit
- Masukkan PIN untuk membuka
- Keseimbangan baik antara keselamatan dan kemudahan

### Mod Kata Laluan

- Tetapkan kata laluan tersuai
- Masukkan kata laluan untuk membuka
- Tahap keselamatan tertinggi

## Menetapkan PIN atau Kata Laluan

Apabila bertukar ke mod PIN atau Kata Laluan:

1. Pilih kaedah kunci
2. Dialog muncul untuk menetapkan kelayakan anda
3. Masukkan PIN/Kata Laluan anda
4. Sahkan dengan memasukkannya semula
5. Klik **Save**

> **Nota:** Jika anda terlupa PIN/Kata Laluan anda, anda perlu memulakan semula aplikasi. Data pelayan anda kekal selamat.

## Masa Tamat Kunci

Konfigurasikan berapa lama aplikasi menunggu sebelum mengunci:

| Masa Tamat | Kes Penggunaan |
|---------|----------|
| 1 minit | Keselamatan maksimum |
| 2 minit | Keselamatan tinggi |
| 5 minit | Lalai, seimbang |
| 10 minit | Keselamatan sederhana |
| 15 minit | Penggunaan kasual |
| 30 minit | Keselamatan rendah |
| 60 minit | Perlindungan minimum |

Pemasa ditetapkan semula dengan sebarang pergerakan tetikus, input papan kekunci, atau klik.

## Membuka Kunci

### Mod Blur
- Klik di mana-mana pada skrin
- Gerakkan tetikus

### Mod PIN/Kata Laluan
1. Masukkan PIN atau Kata Laluan anda
2. Tekan **Enter** atau klik **Unlock**
3. Aplikasi dibuka serta-merta

## Menukar Kelayakan

Untuk menukar PIN atau Kata Laluan anda:

1. Pergi ke **Settings** → **Security**
2. Klik **Change PIN** atau **Change Password**
3. Masukkan kelayakan baru anda
4. Sahkan dan simpan

## Mengosongkan Kelayakan

Untuk mengalih keluar PIN/Kata Laluan dan bertukar kembali ke Blur:

1. Pergi ke **Settings** → **Security**
2. Klik **Clear Credential**
3. Kaedah kunci kembali ke Blur

## Cara Ia Berfungsi

1. **Penjejakan Aktiviti**: Marix memantau peristiwa tetikus, papan kekunci, dan klik
2. **Pemasa Tidak Aktif**: Selepas tiada aktiviti untuk masa tamat yang ditetapkan, aplikasi dikunci
3. **Kunci Segera**: Anda juga boleh mengunci secara manual (jika dilaksanakan)
4. **Storan Selamat**: PIN/Kata Laluan disimpan dengan selamat menggunakan keychain sistem

## Pertimbangan Keselamatan

### Apa yang Dilindungi oleh Kunci Aplikasi

- ✅ Akses visual ke senarai pelayan anda
- ✅ Melihat kelayakan yang disimpan
- ✅ Mengakses sesi terminal aktif
- ✅ Melayari pengurus fail SFTP

### Apa yang TIDAK Dilindungi oleh Kunci Aplikasi

- ❌ Sambungan SSH yang sudah diwujudkan (ia kekal aktif)
- ❌ Data pada cakera (gunakan penyulitan sistem untuk itu)
- ❌ Trafik rangkaian (gunakan SSH/TLS untuk itu)

## Amalan Terbaik

1. **Gunakan mod Kata Laluan** untuk persekitaran sensitif
2. **Tetapkan masa tamat yang lebih pendek** di ruang kerja yang dikongsi
3. **Gunakan kelayakan unik** - jangan guna semula kata laluan
4. **Kunci sebelum meninggalkan** komputer anda
5. **Gabungkan dengan kunci OS** untuk keselamatan maksimum

## Penyelesaian Masalah

### Terlupa PIN/Kata Laluan

- Mulakan semula aplikasi
- Kunci Aplikasi ditetapkan semula pada permulaan semula
- Data pelayan anda dipelihara

### Aplikasi Mengunci Terlalu Cepat

- Tingkatkan masa tamat dalam Tetapan
- Semak jika anda mempunyai sesi aktif yang mungkin menghalang pengesanan aktiviti

### Aplikasi Tidak Mengunci

- Pastikan Kunci Aplikasi diaktifkan
- Semak tetapan masa tamat
- Sahkan tetingkap aplikasi mempunyai fokus
