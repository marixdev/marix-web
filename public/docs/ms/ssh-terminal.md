# Terminal SSH

Terminal SSH dalam Marix menyediakan emulator terminal yang berkuasa dan kaya ciri untuk menyambung ke pelayan jauh.

## Antara Muka Terminal

![Antara Muka Terminal](/terminal.png)

Selepas menyambung melalui SSH, anda akan melihat:
- Emulator terminal penuh (dikuasakan oleh xterm.js)
- Butang togol untuk paparan Terminal/SFTP di bahagian atas
- Dropdown pemilih tema
- Butang sambung semula

## Kawalan Terminal

| Kawalan | Fungsi |
|---------|----------|
| Butang Terminal | Tukar ke paparan terminal |
| Butang SFTP | Tukar ke pelayar fail |
| Pemilih tema | Tukar skema warna terminal |
| ↺ Sambung semula | Sambung semula jika terputus |

## Menggunakan Terminal

1. **Taip arahan** sama seperti terminal SSH biasa
2. Arahan dilaksanakan pada pelayan jauh
3. **Salin teks**: 
   - Pilih teks dengan tetikus → Salin
   - Atau gunakan `Ctrl+C`
4. **Tampal teks**: 
   - Klik kanan → Paste
   - Atau gunakan `Ctrl+V`

## Pintasan Papan Kekunci

| Pintasan | Tindakan |
|----------|--------|
| `Ctrl+C` | Salin teks yang dipilih |
| `Ctrl+V` | Tampal dari papan klip |
| `Ctrl+L` | Kosongkan skrin |
| `Tab` | Buka/Tutup Sejarah Arahan |

## Tukar Tema Terminal

1. Semasa dalam sesi terminal
2. Klik dropdown pemilih tema (kanan atas terminal)
3. Layari tema yang tersedia (400+ pilihan)
4. Klik tema untuk menggunakannya serta-merta

Kategori tema yang tersedia:
- Klasik (Tango, Solarized, Monokai)
- Moden (Dracula, One Dark, Nord)
- Kontras Tinggi
- Warna tersuai


## Buka Terminal Tempatan

Buka terminal pada mesin tempatan anda tanpa menyambung ke pelayan jauh:

- Pintasan papan kekunci: `Ctrl+Shift+T`
- Berguna untuk menjalankan arahan tempatan


## Status Sambungan

Tab menunjukkan status sambungan:
- **Penunjuk hijau**: Disambungkan
- **Penunjuk merah**: Terputus
- **Penunjuk kuning**: Menyambung

## Menyambung Semula

Jika sambungan anda terputus:
Marix menyambung semula SSH secara automatik

Terminal memelihara sejarah tatal anda selepas penyambungan semula.
