# Pag-install

I-download at i-install ang Marix para sa iyong operating system.

## Windows

1. I-download ang **[Marix.Setup.{{VERSION}}.exe](https://github.com/marixdev/marix/releases/latest/download/Marix.Setup.{{VERSION}}.exe)**
2. Patakbuhin ang installer at sundin ang wizard
3. Ilunsad ang Marix mula sa Start Menu

## macOS

### Apple Silicon (M1/M2/M3/M4)

1. I-download ang **[Marix-{{VERSION}}-arm64-mac.zip](https://github.com/marixdev/marix/releases/latest/download/Marix-{{VERSION}}-arm64-mac.zip)**
2. I-extract at i-drag ang `Marix.app` sa Applications
3. Unang paglulunsad: Right-click → Open (para ma-bypass ang Gatekeeper)

### Intel Mac

1. I-download ang **[Marix-{{VERSION}}-mac.zip](https://github.com/marixdev/marix/releases/latest/download/Marix-{{VERSION}}-mac.zip)**
2. I-extract at i-drag ang `Marix.app` sa Applications
3. Unang paglulunsad: Right-click → Open (para ma-bypass ang Gatekeeper)

## Linux

### AppImage (Inirerekomenda)

Gumagana sa karamihan ng mga Linux distribution nang walang pag-install.

1. I-download ang **[Marix-{{VERSION}}.AppImage](https://github.com/marixdev/marix/releases/latest/download/Marix-{{VERSION}}.AppImage)**
2. Gawing executable: `chmod +x Marix-{{VERSION}}.AppImage`
3. Patakbuhin: `./Marix-{{VERSION}}.AppImage`

### Debian/Ubuntu (.deb)

1. I-download ang **[marix_{{VERSION}}_amd64.deb](https://github.com/marixdev/marix/releases/latest/download/marix_{{VERSION}}_amd64.deb)**
2. I-install: `sudo dpkg -i marix_{{VERSION}}_amd64.deb`

### Fedora/RHEL (.rpm)

1. I-download ang **[marix-{{VERSION}}.x86_64.rpm](https://github.com/marixdev/marix/releases/latest/download/marix-{{VERSION}}.x86_64.rpm)**
2. I-install: `sudo dnf install ./marix-{{VERSION}}.x86_64.rpm`

## I-verify ang Pag-install

Ilunsad ang Marix. Dapat makita mo ang pangunahing window na may "Hosts" section sa sidebar.

## Mga Susunod na Hakbang

- [Mabilisang Gabay](quickstart.md) - Idagdag ang iyong unang server
- [SSH Terminal](ssh-terminal.md) - Alamin ang mga tampok ng terminal
