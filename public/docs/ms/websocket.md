# Klien WebSocket

Sambung ke pelayan WebSocket untuk komunikasi dua hala masa nyata. Sesuai untuk menguji API, menyahpepijat suapan langsung, atau memantau perkhidmatan WebSocket.

## Antara Muka Klien WebSocket

![Antara Muka WebSocket](/websocket.png)

## Menambah Pelayan WebSocket

1. Klik **"Add New Host"**
2. Pilih **Protokol**: WebSocket (WSS)
3. Isi:
   - **Nama**: Nama paparan untuk sambungan
   - **URL**: Alamat pelayan WebSocket
   - **Pengepala**: (pilihan) Pengepala tersuai untuk pengesahan
4. Klik **Create**

### Format URL

| Format | Contoh |
|--------|---------|
| Dengan protokol | `wss://api.example.com/ws` |
| Tanpa protokol | `api.example.com/ws` (auto-tambah `wss://`) |
| Dengan port | `wss://localhost:8080/socket` |
| Dengan laluan | `wss://stream.example.com/v1/feed` |

> **Nota:** Jika tiada protokol dinyatakan, Marix akan menambah `wss://` secara automatik untuk sambungan WebSocket selamat.

## Menyambung

1. Klik dua kali pelayan WebSocket dalam senarai Hosts
2. Tunggu sambungan (masa tamat: 15 saat)
3. Penunjuk status menunjukkan keadaan sambungan

### Status Sambungan

| Status | Penunjuk | Penerangan |
|--------|-----------|-------------|
| Menyambung | 🟡 Kuning | Mewujudkan sambungan |
| Bersambung | 🟢 Hijau | Sedia untuk hantar/terima |
| Terputus | ⚪ Kelabu | Sambungan ditutup |
| Ralat | 🔴 Merah | Sambungan gagal |

## Menghantar Mesej

1. Taip mesej anda di kawasan input di bahagian bawah
2. Tekan **Enter** atau klik **Send**
3. Mesej dihantar muncul dengan anak panah ↑ (hijau)

### Format Mesej yang Disokong

- Teks biasa
- JSON (akan diformat untuk kemudahan bacaan)
- Sebarang data rentetan

## Menerima Mesej

- Mesej masuk muncul secara automatik dengan anak panah ↓ (ungu)
- Mesej JSON diformat automatik dengan indentasi yang betul
- Cap masa menunjukkan bila setiap mesej diterima
- Sejarah mesej menyimpan sehingga 1000 mesej setiap sesi

## Kawalan

| Kawalan | Fungsi |
|---------|----------|
| **Send** | Hantar mesej ke pelayan |
| **Clear** | Kosongkan semua mesej dari paparan |
| **Disconnect** | Tutup sambungan |
| **Reconnect** | Sambung semula selepas terputus/ralat |
| **Theme Selector** | Tukar tema warna penonton |

## Pintasan Papan Kekunci

| Pintasan | Tindakan |
|----------|--------|
| `Enter` | Hantar mesej |
| `Shift+Enter` | Baris baharu dalam mesej |

## Ciri-ciri

### Skrol Automatik

- Didayakan secara lalai
- Skrol automatik ke mesej terbaru
- Matikan untuk melihat mesej lama
- Kiraan mesej dipaparkan di bahagian bawah

### Sokongan Tema

- 400+ tema terminal tersedia
- Klik pemilih tema di pengepala
- Tema digunakan pada keseluruhan penonton
- Warna menyesuaikan dengan tema terang/gelap

### Pemformatan JSON

Apabila menerima mesej JSON:
```json
{"event":"update","data":{"id":1,"value":"test"}}
```

Marix memformatkannya secara automatik sebagai:
```json
{
  "event": "update",
  "data": {
    "id": 1,
    "value": "test"
  }
}
```

## Kes Penggunaan

### Ujian API

Uji API WebSocket semasa pembangunan:
- Hantar muatan ujian
- Pantau respons
- Nyahpepijat isu sambungan

### Pemantauan Data Langsung

Pantau suapan masa nyata:
- Kemas kini harga saham
- Aplikasi sembang
- Data sensor IoT
- Acara pelayan permainan

### Penyahpepijatan

Nyahpepijat pelaksanaan WebSocket:
- Sahkan format mesej
- Periksa kestabilan sambungan
- Uji logik sambung semula

## Penyelesaian Masalah

### Masa Tamat Sambungan

- Semak URL adalah betul
- Sahkan pelayan sedang berjalan
- Semak tetapan firewall/proksi
- Cuba dengan protokol `wss://` yang eksplisit

### Sambungan Ditolak

- Pelayan mungkin tidak menerima sambungan
- Nombor port salah
- Isu sijil SSL/TLS
- Pelayan memerlukan pengepala pengesahan

### Mesej Tidak Dihantar

- Semak status sambungan adalah "Bersambung"
- Sahkan format mesej sepadan dengan jangkaan pelayan
- Semak log pelayan untuk ralat

### Terputus Secara Tidak Dijangka

- Pelayan mungkin telah menutup sambungan
- Gangguan rangkaian
- Masa tamat melahu di pihak pelayan
- Klik **Reconnect** untuk memulihkan sambungan
