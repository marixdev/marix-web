# Pengesahan Dua Faktor (2FA/TOTP)

Penjana kod TOTP terbina dalam, seperti Google Authenticator. Simpan rahsia 2FA anda dan dapatkan kod tanpa memerlukan telefon anda.

## Antara Muka 2FA

![Antara Muka 2FA](/2fa.png)

## Membuka 2FA

Klik **"2FA"** di bar sisi.

## Tambah Akaun 2FA Baru

### Langkah 1: Buka Dialog
Klik butang **"Add Account"**

### Langkah 2: Masukkan Butiran

| Medan | Penerangan | Diperlukan |
|-------|-------------|----------|
| Account Name | Label untuk akaun ini (cth., "GitHub", "AWS") | Tidak (dinamakan automatik) |
| Secret Key | Rahsia TOTP (dari halaman persediaan kod QR) | Ya |

### Langkah 3: Simpan
Klik **"Add"**

## Cara Mendapatkan Kunci Rahsia

Apabila mengaktifkan 2FA di laman web:

1. Cari **"Can't scan QR code?"** atau **"Manual entry"**
2. Salin kunci rahsia (biasanya huruf besar dan nombor)
3. Tampal ke dalam Marix

Contoh format kunci rahsia:
```
JBSWY3DPEHPK3PXP
```

## Menggunakan Kod 2FA

1. Cari akaun anda dalam senarai
2. Kod 6 digit dipaparkan di sebelahnya
3. Pemasa undur menunjukkan saat sehingga kod dikemas kini
4. Klik butang **Copy** untuk menyalin kod ke papan klip

### Pemasa
- Kod dikemas kini setiap **30 saat**
- Penunjuk kemajuan bulat menunjukkan masa yang tinggal
- Tunggu kod baru jika kod semasa akan tamat tempoh

## Edit Nama Akaun

1. Klik butang **Edit** di sebelah akaun
2. Masukkan nama baru
3. Tekan Enter atau klik Save

## Padam Akaun 2FA

1. Klik butang **Delete** (ikon tong sampah)
2. Sahkan pemadaman

> ⚠️ **Amaran:** Memadam akan mengalih keluar rahsia. Pastikan anda mempunyai akses sandaran ke akaun yang berkaitan sebelum memadam.

## Perkhidmatan Biasa

Berikut adalah beberapa perkhidmatan popular yang menyokong TOTP:

| Perkhidmatan | Lokasi Tetapan 2FA |
|---------|----------------------|
| GitHub | Settings → Password and authentication |
| AWS | IAM → Security credentials |
| Google | Google Account → Security |
| Microsoft | Security settings → Two-step verification |
| Cloudflare | Profile → Authentication |
| DigitalOcean | Account → Security |
| Linode | My Profile → Password & Authentication |

## Amalan Terbaik

1. **Sandarkan rahsia anda** - Simpan kunci rahsia dengan selamat
2. **Simpan kod pemulihan** - Simpan kod sandaran yang disediakan oleh perkhidmatan
3. **Gunakan nama deskriptif** - Mudah mengenal pasti akaun dengan cepat
4. **Uji kod sebelum bergantung padanya** - Sahkan ia berfungsi sejurus selepas menambah
5. **Penyegerakan masa** - Pastikan jam komputer anda tepat

## Penyelesaian Masalah

### Kod Tidak Berfungsi

1. **Semak penyegerakan masa** - Jam komputer anda mesti tepat
2. **Sahkan kunci rahsia** - Masukkan semula jika disalin dengan salah
3. **Tunggu kod seterusnya** - Kod semasa mungkin tamat tempoh

### Kehilangan Akses

Jika anda kehilangan akses kepada Marix:
1. Gunakan **kod pemulihan** yang disediakan oleh perkhidmatan
2. Hubungi sokongan perkhidmatan untuk pemulihan akaun
3. This is why backing up secrets is important!
