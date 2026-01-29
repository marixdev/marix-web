# Instalasi

Unduh dan instal Marix untuk sistem operasi Anda.

## Windows

1. Unduh **[Marix.Setup.{{VERSION}}.exe](https://github.com/marixdev/marix/releases/latest/download/Marix.Setup.{{VERSION}}.exe)**
2. Jalankan installer dan ikuti wizard
3. Luncurkan Marix dari Start Menu

## macOS

### Apple Silicon (M1/M2/M3/M4)

1. Unduh **[Marix-{{VERSION}}-arm64-mac.zip](https://github.com/marixdev/marix/releases/latest/download/Marix-{{VERSION}}-arm64-mac.zip)**
2. Ekstrak dan seret `Marix.app` ke Applications
3. Peluncuran pertama: Klik kanan → Open (untuk melewati Gatekeeper)

### Intel Mac

1. Unduh **[Marix-{{VERSION}}-mac.zip](https://github.com/marixdev/marix/releases/latest/download/Marix-{{VERSION}}-mac.zip)**
2. Ekstrak dan seret `Marix.app` ke Applications
3. Peluncuran pertama: Klik kanan → Open (untuk melewati Gatekeeper)

## Linux

### AppImage (Direkomendasikan)

Bekerja di sebagian besar distribusi Linux tanpa instalasi.

1. Unduh **[Marix-{{VERSION}}.AppImage](https://github.com/marixdev/marix/releases/latest/download/Marix-{{VERSION}}.AppImage)**
2. Jadikan executable: `chmod +x Marix-{{VERSION}}.AppImage`
3. Jalankan: `./Marix-{{VERSION}}.AppImage`

### Debian/Ubuntu (.deb)

1. Unduh **[marix_{{VERSION}}_amd64.deb](https://github.com/marixdev/marix/releases/latest/download/marix_{{VERSION}}_amd64.deb)**
2. Instal: `sudo dpkg -i marix_{{VERSION}}_amd64.deb`

### Fedora/RHEL (.rpm)

1. Unduh **[marix-{{VERSION}}.x86_64.rpm](https://github.com/marixdev/marix/releases/latest/download/marix-{{VERSION}}.x86_64.rpm)**
2. Instal: `sudo dnf install ./marix-{{VERSION}}.x86_64.rpm`

## Verifikasi Instalasi

Luncurkan Marix. Anda akan melihat jendela utama dengan bagian "Hosts" di sidebar.

## Langkah Selanjutnya

- [Panduan Cepat](quickstart.md) - Tambahkan server pertama Anda
- [Terminal SSH](ssh-terminal.md) - Pelajari fitur terminal
