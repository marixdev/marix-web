# Sejarah Arahan (Panggilan Semula Arahan)

Marix menyediakan ciri **Sejarah Arahan** yang menyimpan dan memanggil semula arahan yang telah dilaksanakan sebelumnya untuk setiap pelayan. Ini membantu anda menjalankan semula arahan biasa dengan cepat tanpa menaipnya lagi.

## Antara Muka Sejarah Arahan

![Antara Muka Sejarah Arahan](/cmh.png)

## Ciri-ciri

- **Sejarah Per-Pelayan**: Setiap pelayan mengekalkan sejarah arahannya sendiri
- **Storan Tempatan Sahaja**: Arahan disimpan secara tempatan, tidak pernah disegerakkan atau disandarkan
- **Penapisan Data Sensitif**: Secara automatik menapis arahan yang mengandungi kata laluan, token, atau rahsia
- **Pemangkasan LRU**: Secara automatik mengalih keluar arahan lama (maksimum 50 setiap pelayan)
- **Pengira Pelaksanaan**: Menjejaki berapa kali setiap arahan telah digunakan
- **Carian**: Tapis arahan dengan cepat menggunakan carian kabur

## Cara Mengaktifkan

Sejarah Arahan **dilumpuhkan secara lalai** untuk privasi. Untuk mengaktifkan:

1. Buka **Settings** (ikon gear di bar sisi)
2. Navigasi ke bahagian **Terminal**
3. Togol **Enable Command Recall**

## Penggunaan

### Membuka Sejarah Arahan

Apabila dalam sesi terminal, tekan:
- Kekunci **`Tab`** apabila input terminal kosong (kursor pada baris kosong)
- Atau klik butang **History** dalam bar alat terminal

### Pintasan Papan Kekunci

| Kekunci | Tindakan |
|-----|--------|
| `Tab` (input kosong) | Buka popup panggilan semula arahan |
| `↑` / `↓` | Navigasi melalui arahan |
| `Enter` | Laksanakan arahan yang dipilih |
| `Escape` | Tutup popup |
| `Delete` / `Backspace` | Padam arahan yang dipilih |

### Tindakan Popup

- **Klik** arahan untuk melaksanakannya serta-merta
- **Cari** dengan menaip dalam kotak carian
- **Padam** arahan individu dengan ikon tong sampah
- **Simpan sebagai Snippet** untuk menukar arahan kepada snippet yang boleh diguna semula

## Privasi & Keselamatan

### Arahan yang Ditapis

Arahan yang sepadan dengan corak ini **tidak pernah disimpan**:

- Arahan yang mengandungi `password`, `passwd`, `secret`, `token`
- Arahan dengan `api_key` atau `apikey`
- Arahan MySQL dengan bendera `-p` (kata laluan)
- `sudo -S` (kata laluan stdin)
- Arahan menggunakan `sshpass` atau `expect` dengan kata laluan
- Eksport pembolehubah persekitaran dengan nilai sensitif

### Storan Data

- Disimpan dalam `localStorage` pelayar
- **Tidak pernah disegerakkan** ke perkhidmatan awan
- **Tidak pernah disertakan** dalam sandaran
- Dikosongkan apabila anda mengosongkan data pelayar

### Mengosongkan Sejarah

Untuk mengosongkan sejarah arahan:

1. Buka **Settings** → **Terminal**
2. Klik **Clear Command History**

Atau kosongkan per-pelayan dari popup panggilan semula arahan.

## Had

| Had | Nilai |
|-------|-------|
| Maksimum arahan setiap pelayan | 50 |
| Panjang arahan minimum | 2 aksara |

## Soalan Lazim

### Mengapa beberapa arahan tidak disimpan?

Arahan yang mengandungi corak sensitif (kata laluan, token, dll.) secara automatik ditapis untuk keselamatan.

### Bolehkah saya mengeksport sejarah arahan saya?

Tidak, sejarah arahan sengaja dibuat tempatan sahaja dan tidak boleh dieksport atas sebab privasi.

### Adakah sejarah arahan disegerakkan antara peranti?

Tidak, sejarah arahan disimpan secara tempatan dan tidak pernah disegerakkan.

### How do I disable command history?

Go to Settings → Terminal → Disable "Enable Command Recall". Existing history is preserved until you clear it manually.
