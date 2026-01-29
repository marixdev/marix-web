# Known Hosts

Known Hosts menyimpan fingerprint server untuk mendeteksi jika identitas server berubah (potensi masalah keamanan).

## Antarmuka Known Hosts

![Antarmuka Known Hosts](/knowhosts.png)

## Apa itu Known Hosts?

Saat Anda pertama kali terhubung ke server SSH, server menyajikan fingerprint-nya. Marix menyimpan ini untuk:
- Memverifikasi identitas server pada koneksi berikutnya
- Mendeteksi serangan man-in-the-middle
- Memberi peringatan jika kunci server berubah secara tidak terduga

## Membuka Known Hosts

Klik **"Known Hosts"** di sidebar.

## Melihat Known Hosts

Daftar menunjukkan:

| Kolom | Deskripsi |
|-------|-----------|
| Host | Hostname/IP server |
| Port | Port SSH |
| Key Type | Algoritma SSH key (ED25519, RSA, ECDSA) |
| Fingerprint | Identifikasi unik server |
| Added | Kapan host dipercaya |

## Mencari Known Hosts

1. Gunakan kotak pencarian di atas
2. Cari berdasarkan hostname, IP, atau fingerprint

## Filter berdasarkan Key Type

1. Gunakan filter dropdown
2. Pilih: All, ED25519, RSA, atau ECDSA

## Import Host dari Server

Tambahkan fingerprint server secara manual tanpa terhubung:

1. Klik tombol **"Import from Host"**
2. Masukkan:
   - Hostname atau IP
   - Port (default 22)
3. Klik **"Import"**
4. Fingerprint server diambil dan disimpan

## Menghapus Known Host

1. Temukan host di daftar
2. Klik tombol **Delete** (ikon tempat sampah)
3. Konfirmasi penghapusan

### Kapan Harus Menghapus

- Server diinstal ulang dan memiliki kunci baru
- IP/hostname server berubah
- Anda tidak lagi terhubung ke server ini

## Verifikasi Host Key

Saat terhubung ke server baru:
1. Marix mengambil fingerprint server
2. Anda diminta untuk memverifikasi dan mempercayainya
3. Setelah menerima, disimpan di Known Hosts
4. Koneksi berikutnya diverifikasi secara otomatis

## Peringatan Keamanan

### "Host key has changed"
Peringatan ini muncul saat fingerprint server berbeda dari yang tersimpan.

**Kemungkinan penyebab:**
- Server diinstal ulang
- SSH key server digenerate ulang
- ⚠️ **Serangan man-in-the-middle** (jarang tapi mungkin)

**Yang harus dilakukan:**
1. Verifikasi dengan administrator server apakah kunci memang berubah secara sah
2. Jika dikonfirmasi, hapus entri lama dari Known Hosts
3. Hubungkan kembali dan terima fingerprint baru
4. Jika mencurigakan, jangan terhubung

## Praktik Terbaik

1. **Verifikasi fingerprint** saat terhubung ke server baru
2. **Jangan abaikan peringatan** tentang perubahan host key
3. **Tinjau secara berkala** daftar Known Hosts Anda
4. **Hapus entri lama** untuk server yang tidak lagi Anda gunakan
