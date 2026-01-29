# Pengelola SSH Key

Kelola SSH key untuk autentikasi tanpa kata sandi ke server Anda.

## Antarmuka Pengelola SSH Key

![Antarmuka Pengelola SSH Key](/sshkey.png)

## Membuka Pengelola SSH Key

Klik **"SSH Key"** di menu sidebar.

## Generate SSH Key Baru

### Langkah 1: Buka Generator
Klik tombol **"Generate Key"**

### Langkah 2: Isi Detail

| Kolom | Deskripsi | Wajib |
|-------|-----------|-------|
| Key Name | Nama untuk mengidentifikasi key ini (misalnya, "work-laptop") | Ya |
| Key Type | ed25519 (direkomendasikan), RSA, atau ECDSA | Ya |
| Passphrase | Kata sandi untuk mengenkripsi key (opsional tapi direkomendasikan) | Tidak |
| Comment | Catatan tambahan (misalnya, alamat email) | Tidak |

### Langkah 3: Generate
Klik **"Generate"**

### Langkah 4: Selesai
Key muncul di daftar Anda dengan:
- Nama
- Badge tipe (ED25519, RSA, ECDSA)
- Fingerprint
- Tanggal pembuatan

## Perbandingan Tipe Key

| Tipe | Keamanan | Kompatibilitas | Rekomendasi |
|------|----------|----------------|-------------|
| **ED25519** | Sangat Baik | Server modern | ✅ Direkomendasikan |
| **RSA (4096)** | Sangat Baik | Universal | Baik untuk sistem lama |
| **ECDSA** | Baik | Sebagian besar server | Alternatif ED25519 |

## Import Key yang Ada

### Langkah 1: Buka Importer
Klik tombol **"Import Key"**

### Langkah 2: Berikan Data Key

| Kolom | Deskripsi | Wajib |
|-------|-----------|-------|
| Key Name | Nama untuk key ini | Ya |
| Private Key | Tempel konten key ATAU klik "Select File" | Ya |
| Comment | Catatan tambahan | Tidak |

### Langkah 3: Import
Klik **"Import"**

## Lihat Public Key

1. Klik key di daftar
2. Panel detail muncul di kanan
3. Klik **"Show Public Key"**
4. Salin public key untuk ditambahkan ke `~/.ssh/authorized_keys` server Anda

## Ekspor Key

1. Temukan key di daftar
2. Klik tombol **Export** (atau klik kanan → Export)
3. Pilih:
   - **Export Public Key Only** - Lebih aman, untuk dibagikan
   - **Export Both Keys** - Private + Public (simpan dengan aman!)
4. Pilih lokasi penyimpanan
5. Key disimpan sebagai file

## Hapus Key

1. Temukan key di daftar
2. Klik tombol **Delete** (ikon tempat sampah)
3. Konfirmasi penghapusan

> ⚠️ **Peringatan:** Key yang dihapus tidak dapat dipulihkan. Pastikan Anda memiliki backup jika diperlukan.

## Gunakan Key untuk Koneksi Server

1. Saat menambah/mengedit server
2. Atur Authentication ke **"SSH Key"**
3. Di dropdown **"SSH Key from Keychain"**
4. Pilih key yang diimpor
5. Jika key memiliki passphrase, masukkan di kolom Passphrase

## Tambahkan Public Key ke Server

Untuk mengaktifkan login tanpa kata sandi, tambahkan public key Anda ke server:

### Metode 1: Manual
```bash
# Di mesin lokal Anda, salin public key
# Lalu di server:
echo "your-public-key-here" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

### Metode 2: Menggunakan ssh-copy-id (jika tersedia)
```bash
ssh-copy-id -i ~/.ssh/your_key.pub user@server
```

## Praktik Terbaik

1. **Gunakan ED25519** untuk key baru jika memungkinkan
2. **Tambahkan passphrase** untuk keamanan tambahan
3. **Gunakan key berbeda** untuk tujuan berbeda (kerja, pribadi)
4. **Backup key Anda** dengan aman
5. **Jangan pernah bagikan private key** - hanya bagikan public key
6. **Rotasi key secara berkala** untuk keamanan
