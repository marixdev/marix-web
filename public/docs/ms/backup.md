# Sandaran & Pemulihan

Lindungi data anda dengan sandaran yang disulitkan. Marix menyokong 6 penyedia sandaran, semua menggunakan penyulitan Argon2id.

> 💡 **Petua:** Setelah anda menyambungkan akaun awan untuk sandaran, anda tidak perlu menyambung semula untuk pemulihan pada peranti yang sama. Pengesahan anda disimpan secara tempatan.

## Antara Muka Sandaran & Pemulihan

### Sandaran
![Antara Muka Sandaran](/backup.png)

### Pemulihan
![Antara Muka Pemulihan](/restore.png)

## Apa yang Disandarkan

- Semua pelayan dan kelayakan (kata laluan, kunci peribadi)
- Kunci SSH dari Keychain
- Konfigurasi port forward
- Rahsia 2FA/TOTP
- Tetapan aplikasi
- Token API Cloudflare

## Keperluan Kata Laluan

| Keperluan | Penerangan |
|-------------|-------------|
| Panjang | Sekurang-kurangnya 10 aksara |
| Huruf Besar | Sertakan huruf besar |
| Huruf Kecil | Sertakan huruf kecil |
| Nombor | Sertakan sekurang-kurangnya satu nombor |
| Khas | Sertakan aksara khas |

> ⚠️ **Amaran:** Kami tidak dapat memulihkan kata laluan anda. Jika anda terlupa, sandaran anda tidak dapat diakses secara kekal.

## Sandaran Tempatan

Simpan fail sandaran yang disulitkan ke komputer anda.

### Buat Sandaran Tempatan

1. Pergi ke **Settings** → Klik **"Create Backup"**
2. Pilih tab **Local** (ikon folder)
3. Masukkan **kata laluan yang kukuh** (10+ aksara)
4. Sahkan kata laluan
5. Klik **"Create Backup"**
6. Pilih tempat untuk menyimpan fail `.marix`
7. Simpan fail ini dengan selamat

### Pulihkan dari Sandaran Tempatan

1. Pergi ke **Settings** → Klik **"Restore Backup"**
2. Pilih tab **Local**
3. Klik **"Select File"** dan pilih fail sandaran `.marix` anda
4. Masukkan **kata laluan** yang anda gunakan semasa membuat sandaran
5. Klik **"Restore"**
6. Aplikasi dimulakan semula dengan semua data dipulihkan

## Google Drive

Segerakkan sandaran anda ke Google Drive.

### Sambung

1. Pilih tab **Google Drive**
2. Klik **"Connect"**
3. Log masuk ke akaun Google anda
4. Berikan kebenaran kepada Marix
5. Anda akan melihat "Connected" dengan e-mel anda

### Buat Sandaran

1. Selepas menyambung, masukkan kata laluan yang kukuh
2. Sahkan kata laluan
3. Klik **"Create Backup"**
4. Status menunjukkan: "Backup created successfully"

### Pulihkan

1. Jika sudah disambungkan, akaun anda diingati
2. Jika sandaran wujud, anda akan melihat "Last backup: [tarikh]"
3. Masukkan kata laluan
4. Klik **"Restore"**

## GitHub

Simpan sandaran anda dalam GitHub Gist peribadi.

### Sambung

1. Pilih tab **GitHub**
2. Klik **"Connect"**
3. **Kod Peranti** muncul (cth., `ABCD-1234`)
4. Pergi ke: https://github.com/login/device
5. Masukkan kod
6. Benarkan Marix

### Buat Sandaran

1. Masukkan kata laluan yang kukuh
2. Sahkan kata laluan
3. Klik **"Create Backup"**
4. Sandaran disimpan sebagai Gist peribadi

### Pulihkan

1. Jika sudah disambungkan, akaun anda diingati
2. Jika sandaran wujud, anda akan melihat "Last backup: [tarikh]"
3. Masukkan kata laluan
4. Klik **"Restore"**

### Di Mana Sandaran Saya?

Pergi ke https://gist.github.com → Gist peribadi anda → Cari "marix-backup"

## GitLab

Simpan sandaran anda dalam GitLab Snippet.

### Sambung

1. Pilih tab **GitLab**
2. Klik **"Connect"**
3. Log masuk ke GitLab
4. Benarkan Marix

### Buat Sandaran

1. Masukkan kata laluan yang kukuh
2. Sahkan kata laluan
3. Klik **"Create Backup"**
4. Sandaran disimpan sebagai Snippet peribadi

### Pulihkan

1. Jika sudah disambungkan, akaun anda diingati
2. Jika sandaran wujud, anda akan melihat "Last backup: [tarikh]"
3. Masukkan kata laluan
4. Klik **"Restore"**

## Box.net

Simpan sandaran anda dalam storan awan Box.

### Sambung

1. Pilih tab **Box.net**
2. Klik **"Connect to Box.net"**
3. Log masuk ke akaun Box.net anda
4. Benarkan Marix

### Buat Sandaran

1. Masukkan kata laluan yang kukuh
2. Sahkan kata laluan
3. Klik **"Create Backup"**

### Pulihkan

1. Jika sudah disambungkan, akaun anda diingati
2. Jika sandaran wujud, anda akan melihat "Last backup: [tarikh]"
3. Masukkan kata laluan
4. Klik **"Restore"**

## OneDrive

Segerakkan sandaran anda ke Microsoft OneDrive.

### Sambung

1. Pilih tab **OneDrive**
2. Klik **"Connect"**
3. Log masuk ke akaun Microsoft anda
4. Berikan kebenaran kepada Marix
5. Anda akan melihat "Connected" dengan e-mel anda

### Buat Sandaran

1. Selepas menyambung, masukkan kata laluan yang kukuh
2. Sahkan kata laluan
3. Klik **"Create Backup"**
4. Status menunjukkan: "Backup created successfully"

### Pulihkan

1. Jika sudah disambungkan, akaun anda diingati
2. Jika sandaran wujud, anda akan melihat "Last backup: [tarikh]"
3. Masukkan kata laluan
4. Klik **"Restore"**

## Perbandingan Penyedia

| Penyedia | Lokasi Storan | Kelebihan | Kekurangan |
|----------|------------------|------|------|
| **Tempatan** | Komputer anda | Kawalan penuh, luar talian | Mesti urus fail secara manual |
| **Google Drive** | Awan Google | Segerak automatik, digunakan secara meluas | Memerlukan akaun Google |
| **OneDrive** | Awan Microsoft | Disepadukan dengan Windows | Memerlukan akaun Microsoft |
| **GitHub** | GitHub Gist | Percuma, kawalan versi | Memerlukan akaun GitHub |
| **GitLab** | GitLab Snippet | Percuma, pilihan hos sendiri | Memerlukan akaun GitLab |
| **Box.net** | Awan Box.net | Mesra perusahaan | Memerlukan akaun Box |

## Amalan Terbaik

1. **Gunakan kata laluan berbeza** untuk penyedia berbeza
2. **Simpan kata laluan anda** dalam pengurus kata laluan
3. **Uji pemulihan** secara berkala untuk memastikan sandaran berfungsi
4. **Simpan sandaran tempatan** sebagai pilihan kedua
5. **Jangan kongsi** fail sandaran - ia mengandungi data sensitif
6. **Kemas kini sandaran** secara berkala selepas menambah pelayan baru
