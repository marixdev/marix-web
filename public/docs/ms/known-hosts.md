# Known Hosts

Known Hosts menyimpan cap jari pelayan untuk mengesan jika identiti pelayan berubah (isu keselamatan yang berpotensi).

## Antara Muka Known Hosts

![Antara Muka Known Hosts](/knowhosts.png)

## Apa itu Known Hosts?

Apabila anda mula-mula menyambung ke pelayan SSH, pelayan mempersembahkan cap jarinya. Marix menyimpan ini untuk:
- Mengesahkan identiti pelayan pada sambungan akan datang
- Mengesan serangan man-in-the-middle
- Memberi amaran kepada anda jika kunci pelayan berubah secara tidak dijangka

## Membuka Known Hosts

Klik **"Known Hosts"** di bar sisi.

## Lihat Known Hosts

Senarai menunjukkan:

| Lajur | Penerangan |
|--------|-------------|
| Host | Nama hos/IP pelayan |
| Port | Port SSH |
| Key Type | Algoritma kunci SSH (ED25519, RSA, ECDSA) |
| Fingerprint | Pengecam unik pelayan |
| Added | Bila hos dipercayai |

## Cari Known Hosts

1. Gunakan kotak carian di bahagian atas
2. Cari mengikut nama hos, IP, atau cap jari

## Tapis mengikut Jenis Kunci

1. Gunakan penapis dropdown
2. Pilih: All, ED25519, RSA, atau ECDSA

## Import Hos dari Pelayan

Tambah cap jari pelayan secara manual tanpa menyambung:

1. Klik butang **"Import from Host"**
2. Masukkan:
   - Nama hos atau IP
   - Port (lalai 22)
3. Klik **"Import"**
4. Cap jari pelayan diambil dan disimpan

## Alih Keluar Known Host

1. Cari hos dalam senarai
2. Klik butang **Delete** (ikon tong sampah)
3. Sahkan pengalihan keluar

### Bila Perlu Mengalih Keluar

- Pelayan telah dipasang semula dan mempunyai kunci baru
- IP/nama hos pelayan berubah
- Anda tidak lagi menyambung ke pelayan ini

## Pengesahan Kunci Hos

Apabila menyambung ke pelayan baru:
1. Marix mengambil cap jari pelayan
2. Anda diminta untuk mengesahkan dan mempercayainya
3. Selepas menerima, ia disimpan dalam Known Hosts
4. Sambungan akan datang disahkan secara automatik

## Amaran Keselamatan

### "Host key has changed"
Amaran ini muncul apabila cap jari pelayan berbeza dari yang disimpan.

**Kemungkinan punca:**
- Pelayan telah dipasang semula
- Kunci SSH pelayan telah dijanakan semula
- ⚠️ **Serangan man-in-the-middle** (jarang tetapi mungkin)

**Apa yang perlu dilakukan:**
1. Sahkan dengan pentadbir pelayan jika kunci berubah secara sah
2. Jika disahkan, alih keluar entri lama dari Known Hosts
3. Sambung semula dan terima cap jari baru
4. Jika mencurigakan, jangan sambung

## Amalan Terbaik

1. **Sahkan cap jari** apabila menyambung ke pelayan baru
2. **Jangan abaikan amaran** tentang kunci hos yang berubah
3. **Semak secara berkala** senarai Known Hosts anda
4. **Alih keluar entri lama** untuk pelayan yang tidak lagi anda gunakan
