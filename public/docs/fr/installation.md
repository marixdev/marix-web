# Installation

Téléchargez et installez Marix pour votre système d'exploitation.

## Windows

1. Téléchargez **[Marix.Setup.{{VERSION}}.exe](https://github.com/marixdev/marix/releases/latest/download/Marix.Setup.{{VERSION}}.exe)**
2. Exécutez l'installateur et suivez l'assistant
3. Lancez Marix depuis le menu Démarrer

## macOS

### Apple Silicon (M1/M2/M3/M4)

1. Téléchargez **[Marix-{{VERSION}}-arm64-mac.zip](https://github.com/marixdev/marix/releases/latest/download/Marix-{{VERSION}}-arm64-mac.zip)**
2. Extrayez et glissez `Marix.app` dans Applications
3. Premier lancement : Clic droit → Ouvrir (pour contourner Gatekeeper)

### Intel Mac

1. Téléchargez **[Marix-{{VERSION}}-mac.zip](https://github.com/marixdev/marix/releases/latest/download/Marix-{{VERSION}}-mac.zip)**
2. Extrayez et glissez `Marix.app` dans Applications
3. Premier lancement : Clic droit → Ouvrir (pour contourner Gatekeeper)

## Linux

### AppImage (Recommandé)

Fonctionne sur la plupart des distributions Linux sans installation.

1. Téléchargez **[Marix-{{VERSION}}.AppImage](https://github.com/marixdev/marix/releases/latest/download/Marix-{{VERSION}}.AppImage)**
2. Rendez-le exécutable : `chmod +x Marix-{{VERSION}}.AppImage`
3. Exécutez : `./Marix-{{VERSION}}.AppImage`

### Debian/Ubuntu (.deb)

1. Téléchargez **[marix_{{VERSION}}_amd64.deb](https://github.com/marixdev/marix/releases/latest/download/marix_{{VERSION}}_amd64.deb)**
2. Installez : `sudo dpkg -i marix_{{VERSION}}_amd64.deb`

### Fedora/RHEL (.rpm)

1. Téléchargez **[marix-{{VERSION}}.x86_64.rpm](https://github.com/marixdev/marix/releases/latest/download/marix-{{VERSION}}.x86_64.rpm)**
2. Installez : `sudo dnf install ./marix-{{VERSION}}.x86_64.rpm`

## Vérifier l'installation

Lancez Marix. Vous devriez voir la fenêtre principale avec la section « Hôtes » dans la barre latérale.

## Étapes suivantes

- [Démarrage rapide](quickstart.md) - Ajoutez votre premier serveur
- [Terminal SSH](ssh-terminal.md) - Apprenez les fonctionnalités du terminal
