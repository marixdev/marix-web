# Installation

Download and install Marix for your operating system.

## Windows

1. Download **[Marix.Setup.{{VERSION}}.exe](https://github.com/marixdev/marix/releases/latest/download/Marix.Setup.{{VERSION}}.exe)**
2. Run the installer and follow the wizard
3. Launch Marix from the Start Menu

## macOS

### Apple Silicon (M1/M2/M3/M4)

1. Download **[Marix-{{VERSION}}-arm64-mac.zip](https://github.com/marixdev/marix/releases/latest/download/Marix-{{VERSION}}-arm64-mac.zip)**
2. Extract and drag `Marix.app` to Applications
3. First launch: Right-click → Open (to bypass Gatekeeper)

### Intel Mac

1. Download **[Marix-{{VERSION}}-mac.zip](https://github.com/marixdev/marix/releases/latest/download/Marix-{{VERSION}}-mac.zip)**
2. Extract and drag `Marix.app` to Applications
3. First launch: Right-click → Open (to bypass Gatekeeper)

## Linux

### AppImage (Recommended)

Works on most Linux distributions without installation.

1. Download **[Marix-{{VERSION}}.AppImage](https://github.com/marixdev/marix/releases/latest/download/Marix-{{VERSION}}.AppImage)**
2. Make executable: `chmod +x Marix-{{VERSION}}.AppImage`
3. Run: `./Marix-{{VERSION}}.AppImage`

### Debian/Ubuntu (.deb)

1. Download **[marix_{{VERSION}}_amd64.deb](https://github.com/marixdev/marix/releases/latest/download/marix_{{VERSION}}_amd64.deb)**
2. Install: `sudo dpkg -i marix_{{VERSION}}_amd64.deb`

### Fedora/RHEL (.rpm)

1. Download **[marix-{{VERSION}}.x86_64.rpm](https://github.com/marixdev/marix/releases/latest/download/marix-{{VERSION}}.x86_64.rpm)**
2. Install: `sudo dnf install ./marix-{{VERSION}}.x86_64.rpm`

## Verify Installation

Launch Marix. You should see the main window with "Hosts" section in the sidebar.

## Next Steps

- [Quick Start](quickstart.md) - Add your first server
- [SSH Terminal](ssh-terminal.md) - Learn terminal features
