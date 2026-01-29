# FTP/FTPS File Transfer

Sinusuportahan ng Marix ang mga FTP at FTPS protocol para kumonekta sa mga file server na hindi sumusuporta sa SSH.

## Layout ng Interface

![FTP Interface](/ftp.png)

## Pagdaragdag ng FTP Server

1. I-click ang **"Add New Host"**
2. Piliin ang **Protocol**: FTP o FTPS
3. Punan ang:
   - **Host/IP**: FTP server address
   - **Port**: 21 (FTP) o 990 (FTPS)
   - **Username**: FTP username
   - **Password**: FTP password
4. I-click ang **Create**

## FTP vs FTPS

| Tampok | FTP | FTPS |
|--------|-----|------|
| Encryption | Wala | TLS/SSL |
| Default Port | 21 | 990 |
| Seguridad | Mababa | Mataas |
| Gamit | Mga legacy system | Mga ligtas na transfer |

> **Rekomendasyon**: Gamitin ang FTPS kapag available para sa mga naka-encrypt na file transfer.

## Pagkonekta sa FTP

1. I-double-click ang FTP server sa Hosts list
2. Direktang magbubukas ang koneksyon sa **file browser mode**
3. Walang available na terminal (ang FTP ay file transfer lang)

## Mga File Operation

Lahat ng file operation ay gumagana katulad ng SFTP:

### Paglilipat ng mga File
- **Drag & drop** para maglipat sa pagitan ng local at remote
- **Right-click** → Download/Upload

### Pamamahala ng File
- **Gumawa ng folder**: Right-click → New Folder
- **Palitan ng pangalan ang mga file**: Right-click → Rename
- **Magbura ng mga file**: Right-click → Delete

### Navigation
- Gamitin ang mga toolbar button: Back, Forward, Up, Home
- I-double-click ang mga folder para pumasok
- Gamitin ang search para i-filter ang mga file

## Mga Limitasyon

Hindi sinusuportahan ng FTP ang:
- **chmod** (pagbabago ng mga permiso)
- **Symbolic link**
- **Pag-edit ng file** (kailangang i-download, i-edit, muling i-upload)

## Passive vs Active Mode

Gumagamit ang Marix ng **passive mode** bilang default, na mas gumagana sa:
- Mga NAT router
- Mga firewall
- Karamihan ng mga modernong network configuration

## Pag-troubleshoot

### Connection Timeout
- Suriin kung pinapayagan ng server ang iyong IP
- I-verify ang mga firewall rule sa magkabilang dulo
- Subukan ang ibang port kung naka-configure

### Nabigo ang Authentication
- I-verify ang username at password
- Suriin kung naka-enable ang FTP user sa server
- Ang ilang server ay nangangailangan ng partikular na login format

### Nabigo ang Transfer
- Suriin ang available na disk space
- I-verify ang mga file permission sa server
- Ang malalaking file ay maaaring mag-timeout - suriin ang mga server limit
