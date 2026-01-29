# Pengurus Kunci SSH

Urus kunci SSH untuk pengesahan tanpa kata laluan ke pelayan anda.

## Antara Muka Pengurus Kunci SSH

![Antara Muka Pengurus Kunci SSH](/sshkey.png)

## Membuka Pengurus Kunci SSH

Klik **"SSH Key"** dalam menu bar sisi.

## Jana Kunci SSH Baru

### Langkah 1: Buka Penjana
Klik butang **"Generate Key"**

### Langkah 2: Isi Butiran

| Medan | Penerangan | Diperlukan |
|-------|-------------|----------|
| Key Name | Nama untuk mengenal pasti kunci ini (cth., "work-laptop") | Ya |
| Key Type | ed25519 (disyorkan), RSA, atau ECDSA | Ya |
| Passphrase | Kata laluan untuk menyulitkan kunci (pilihan tetapi disyorkan) | Tidak |
| Comment | Nota tambahan (cth., alamat e-mel) | Tidak |

### Langkah 3: Jana
Klik **"Generate"**

### Langkah 4: Selesai
Kunci muncul dalam senarai anda dengan:
- Nama
- Lencana jenis (ED25519, RSA, ECDSA)
- Cap jari
- Tarikh penciptaan

## Perbandingan Jenis Kunci

| Jenis | Keselamatan | Keserasian | Saranan |
|------|----------|---------------|----------------|
| **ED25519** | Cemerlang | Pelayan moden | ✅ Disyorkan |
| **RSA (4096)** | Sangat Baik | Universal | Baik untuk sistem lama |
| **ECDSA** | Baik | Kebanyakan pelayan | Alternatif kepada ED25519 |

## Import Kunci Sedia Ada

### Langkah 1: Buka Pengimport
Klik butang **"Import Key"**

### Langkah 2: Berikan Data Kunci

| Medan | Penerangan | Diperlukan |
|-------|-------------|----------|
| Key Name | Nama untuk kunci ini | Ya |
| Private Key | Tampal kandungan kunci ATAU klik "Select File" | Ya |
| Comment | Nota tambahan | Tidak |

### Langkah 3: Import
Klik **"Import"**

## Lihat Kunci Awam

1. Klik pada kunci dalam senarai
2. Panel butiran muncul di sebelah kanan
3. Klik **"Show Public Key"**
4. Salin kunci awam untuk ditambah ke `~/.ssh/authorized_keys` pelayan anda

## Eksport Kunci

1. Cari kunci dalam senarai
2. Klik butang **Export** (atau klik kanan → Export)
3. Pilih:
   - **Export Public Key Only** - Lebih selamat, untuk berkongsi
   - **Export Both Keys** - Peribadi + Awam (simpan dengan selamat!)
4. Pilih lokasi simpan
5. Kunci disimpan sebagai fail

## Padam Kunci

1. Cari kunci dalam senarai
2. Klik butang **Delete** (ikon tong sampah)
3. Sahkan pemadaman

> ⚠️ **Amaran:** Kunci yang dipadam tidak boleh dipulihkan. Pastikan anda mempunyai sandaran jika diperlukan.

## Gunakan Kunci untuk Sambungan Pelayan

1. Apabila menambah/mengedit pelayan
2. Tetapkan Authentication kepada **"SSH Key"**
3. Dalam dropdown **"SSH Key from Keychain"**
4. Pilih kunci yang diimport anda
5. Jika kunci mempunyai passphrase, masukkannya dalam medan Passphrase

## Tambah Kunci Awam ke Pelayan

Untuk mengaktifkan log masuk tanpa kata laluan, tambah kunci awam anda ke pelayan:

### Kaedah 1: Manual
```bash
# Pada mesin tempatan anda, salin kunci awam
# Kemudian pada pelayan:
echo "your-public-key-here" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

### Kaedah 2: Menggunakan ssh-copy-id (jika tersedia)
```bash
ssh-copy-id -i ~/.ssh/your_key.pub user@server
```

## Amalan Terbaik

1. **Gunakan ED25519** untuk kunci baru apabila boleh
2. **Tambah passphrase** untuk keselamatan tambahan
3. **Gunakan kunci berbeza** untuk tujuan berbeza (kerja, peribadi)
4. **Sandarkan kunci anda** dengan selamat
5. **Jangan sesekali kongsi kunci peribadi** - hanya kongsi kunci awam
6. **Putar kunci secara berkala** untuk keselamatan
