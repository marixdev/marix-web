# SFTP File Manager

Ang SFTP (SSH File Transfer Protocol) ay nagbibigay ng ligtas na file transfer sa pamamagitan ng naka-encrypt na SSH connection.

## Pagbukas ng SFTP

### Mula sa Umiiral na SSH Connection

1. Kumonekta sa isang SSH server
2. I-click ang **SFTP** na button sa itaas ng session
3. O gamitin ang keyboard shortcut: `Ctrl+Shift+O`

### Direktang SFTP Connection

1. I-right-click ang isang SSH server sa Hosts list
2. Piliin ang **"SFTP"** mula sa context menu

## Layout ng Interface

![SFTP Interface](/sftp.png)

## Mga Navigation Control

| Button | Function |
|--------|----------|
| ← | Bumalik sa history |
| → | Sumulong sa history |
| ↑ | Pumunta sa parent directory |
| 🏠 | Pumunta sa home directory |
| 🔄 | I-refresh ang kasalukuyang directory |
| 🔍 | Maghanap/mag-filter ng mga file |
| 💾 | Pumili ng drive (Windows/Linux) |

## Mga File Operation

### Mag-download ng File (Remote → Local)

1. Mag-navigate sa file sa **REMOTE** (kanang) pane

**Paraan A: Drag & Drop**
- I-click at i-drag ang file sa LOCAL (kaliwang) pane
- I-drop ito sa gustong folder

**Paraan B: Right-click**
- I-right-click ang file
- Piliin ang **"Download"**
- Mada-download ang file sa kasalukuyang local folder

### Mag-upload ng File (Local → Remote)

1. Mag-navigate sa file sa **LOCAL** (kaliwang) pane

**Paraan A: Drag & Drop**
- I-click at i-drag ang file sa REMOTE (kanang) pane
- I-drop ito sa gustong folder

**Paraan B: Right-click**
- I-right-click ang file
- Piliin ang **"Upload"**
- Maa-upload ang file sa kasalukuyang remote folder

### Gumawa ng Bagong Folder

1. Mag-navigate sa target directory
2. I-right-click sa empty space
3. Piliin ang **"New Folder"**
4. Ilagay ang pangalan ng folder
5. I-click ang OK

### Gumawa ng Bagong File

1. Mag-navigate sa target directory
2. I-right-click sa empty space
3. Piliin ang **"New File"**
4. Ilagay ang filename
5. I-click ang OK (gumagawa ng empty file)

### Magbura ng File o Folder

1. I-right-click ang file o folder
2. Piliin ang **"Delete"**
3. Kumpirmahin ang pagbura

### Palitan ng Pangalan ang File o Folder

1. I-right-click ang file o folder
2. Piliin ang **"Rename"**
3. Ilagay ang bagong pangalan
4. I-click ang OK

## Palitan ang mga Permiso (chmod)

1. I-right-click ang file o folder (REMOTE pane)
2. Piliin ang **"Change Permissions"**
3. Ilagay ang permiso sa octal format (hal., `755`, `644`)
4. I-click ang OK

### Mga Karaniwang Halaga ng Permiso

| Halaga | Kahulugan | Gamit |
|--------|-----------|-------|
| `755` | Owner: full, Others: read+execute | Mga folder, executable |
| `644` | Owner: read+write, Others: read | Mga regular file |
| `600` | Owner lang | Mga private file, SSH key |
| `777` | Everyone: full access | Hindi inirerekomenda |

## I-edit ang mga Remote File

1. Hanapin ang text file sa REMOTE pane
2. I-double-click ito (o right-click → Edit)
3. Magbubukas ang file sa built-in editor
4. Gawin ang iyong mga pagbabago
5. I-click ang **Save** o pindutin ang `Ctrl+S`
6. Mase-save pabalik ang file sa server

### Mga Sinusuportahang Uri ng File

**Mga code file:**
`.js`, `.ts`, `.py`, `.php`, `.java`, `.c`, `.cpp`, `.go`, `.rs`, `.rb`

**Mga config file:**
`.json`, `.yml`, `.yaml`, `.toml`, `.ini`, `.conf`, `.env`

**Mga web file:**
`.html`, `.css`, `.scss`, `.vue`, `.svelte`

**Mga script:**
`.sh`, `.bash`, `.ps1`, `.bat`

**Iba pa:**
`.txt`, `.md`, `.log`, `Dockerfile`, `Makefile`

## I-compress ang mga File

Gumawa ng mga archive mula sa mga file o folder sa remote server:

1. I-right-click ang file o folder (REMOTE pane)
2. Mag-hover sa **"Compress"**
3. Pumili ng format:
   - **ZIP** - Universal, gumagana kahit saan
   - **TAR.GZ** - Pinakamabuti para sa Linux/Unix
   - **TAR** - Uncompressed archive

Nalilikha ang archive sa parehong directory.

## I-extract ang mga Archive

I-extract ang mga compressed file sa remote server:

1. I-right-click ang isang archive file (REMOTE pane)
2. Piliin ang **"Extract Here"**
3. Na-extract ang mga file sa kasalukuyang directory

### Mga Sinusuportahang Archive Format

| Format | Extension |
|--------|-----------|
| ZIP | `.zip` |
| TAR | `.tar`, `.tar.gz`, `.tgz`, `.tar.bz2`, `.tar.xz` |
| GZIP | `.gz` |
| BZIP2 | `.bz2` |
| XZ | `.xz` |
| 7-Zip | `.7z` |
| RAR | `.rar` |

> **Paalala:** Ang extraction ay nangangailangan ng mga naaangkop na tool na naka-install sa server (unzip, tar, 7z, unrar).

## Mga File Property

Tingnan ang detalyadong impormasyon tungkol sa mga file at folder:

1. I-right-click ang file o folder
2. Piliin ang **"Properties"**
3. Tingnan ang mga detalye:

| Property | Paglalarawan |
|----------|--------------|
| Name | Pangalan ng file o folder |
| Path | Buong lokasyon ng path |
| Size | Laki ng file sa bytes/KB/MB/GB |
| Type | File o Directory |
| Permissions | Read/write/execute (hal., 755) |
| Owner | User owner (remote lang) |
| Group | Group owner (remote lang) |
| Modified | Petsa ng huling pagbabago |
| Created | Petsa ng paggawa (kung available) |
| Accessed | Petsa ng huling pag-access |

## Transfer Queue

Kapag naglilipat ng maramihang file:
- Ipinapakita ng progress bar ang kabuuang completion
- Nakadisplay ang individual file progress
- I-click ang ✕ para i-cancel ang isang transfer
- Maaaring i-retry ang mga nabigang transfer

## Mga Keyboard Shortcut

| Shortcut | Aksyon |
|----------|--------|
| `Ctrl+Shift+O` | I-toggle ang Terminal/SFTP |
| `F2` | Palitan ng pangalan ang napili |
| `Delete` | Burahin ang napili |
| `Ctrl+C` | Kopyahin ang path |
| `Ctrl+R` | I-refresh ang directory |

## Mga Tip

- **I-drag ang buong folder** para maglipat ng recursive
- **Double-click** ang folder para pumasok
- Gamitin ang **search/filter** para mabilis na makahanap ng mga file
- Pinipigilan ng **overwrite confirmation** ang aksidenteng pagkawala ng data
