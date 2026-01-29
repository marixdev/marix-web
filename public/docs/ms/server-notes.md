# Nota Pelayan (Nota Lekat)

Marix menyediakan ciri **Nota Pelayan** yang membolehkan anda melampirkan nota peribadi pada setiap pelayan. Ini berguna untuk mendokumenkan konfigurasi pelayan, peringatan penyelenggaraan, atau maklumat rujukan pantas.

## Antara Muka Nota Pelayan

![Antara Muka Nota Pelayan](/note.png)

## Ciri-ciri

- **Nota Per-Pelayan**: Setiap pelayan boleh mempunyai notanya sendiri
- **Simpan Automatik**: Perubahan disimpan secara automatik semasa anda menaip (debounce 500ms)
- **Sokongan Teks Kaya**: Teks biasa dengan pemisah baris
- **Penunjuk Visual**: Pelayan dengan nota menunjukkan ikon nota yang diisi
- **Disegerakkan dengan Data Pelayan**: Nota disertakan dalam sandaran pelayan

## Penggunaan

### Membuka Nota

1. Sambung ke pelayan (terminal SSH atau SFTP)
2. Klik butang **Notes** dalam bar alat atas (ikon pensel)
3. Popup nota lekat muncul di sudut kanan bawah

### Menulis Nota

- Hanya taip dalam textarea
- Nota **disimpan automatik** selepas 500ms tidak aktif
- Penunjuk "Saving..." menunjukkan apabila penyimpanan sedang berjalan
- Tekan `Escape` atau klik di luar untuk menutup

### Penunjuk Visual

| Keadaan Ikon | Maksud |
|------------|---------|
| Outline (kosong) | Tiada nota untuk pelayan ini |
| Diisi (pepejal) | Pelayan mempunyai nota |
| Warna Ambar/Kuning | Nota wujud |

## Kes Penggunaan

### Konfigurasi Pelayan

```
Web Server - Production
-----------------------
IP: 192.168.1.100
Nginx: /etc/nginx/sites-enabled/
Logs: /var/log/nginx/
SSL Cert expires: 2026-12-15
```

### Peringatan Penyelenggaraan

```
TODO:
- [ ] Kemas kini OpenSSL (CVE-2025-XXXX)
- [ ] Putar kelayakan pangkalan data
- [ ] Tingkatkan swap kepada 4GB
```

### Rujukan Pantas

```
Arahan Biasa:
- Mulakan semula Nginx: sudo systemctl restart nginx
- Semak cakera: df -h
- Lihat sambungan: netstat -tuln

Pangkalan Data:
- Pengguna: app_user
- Port: 5432
```

## Storan Data

- Nota disimpan sebagai sebahagian daripada konfigurasi pelayan
- ✅ **Disertakan dalam sandaran tempatan** (ciri sandaran Marix)
- ✅ **Disertakan dalam sandaran awan** (Google Drive, Box)
- ✅ **Disulitkan** apabila menggunakan penyulitan sandaran

## Pintasan Papan Kekunci

| Kekunci | Tindakan |
|-----|--------|
| `Escape` | Tutup popup nota |
| Klik di luar | Tutup popup nota |

## Soalan Lazim

### Adakah nota disulitkan?

Nota disimpan sebagai teks biasa dalam fail konfigurasi pelayan. Apabila anda mencipta sandaran yang disulitkan, nota disulitkan bersama-sama dengan semua data pelayan.

### Bolehkah saya menggunakan Markdown?

Nota kini adalah teks biasa sahaja. Rendering Markdown mungkin ditambah dalam versi akan datang.

### Adakah terdapat had aksara?

Tiada had keras, tetapi nota yang sangat panjang mungkin menjejaskan prestasi. Disyorkan untuk memastikan nota ringkas.
