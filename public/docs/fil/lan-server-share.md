# LAN Server Share

Ibahagi ang iyong mga server configuration sa ibang mga Marix user sa parehong local network.

## Interface ng LAN Server Share

![LAN Server Share Interface](/servershare.png)

## Mga Kinakailangan

> ⚠️ **Mahalaga:** Dapat may **LAN Discovery enabled** ang parehong sender at receiver.
> 
> I-click ang 🌐 na button sa header bar o gamitin ang `Ctrl+Shift+L` para i-toggle.

- Parehong device sa iisang network (WiFi/LAN)
- LAN Discovery enabled sa parehong device
- Tumatakbo ang Marix sa parehong device

## Mga Gamit

- Ibahagi ang server access sa mga team member
- Mabilis na mag-setup ng bagong computer
- Maglipat ng mga configuration sa pagitan ng mga device
- Mag-onboard ng mga bagong team member

## Pagbukas ng Server Share

### Paraan 1: Right-click Menu
1. Sa Hosts list, i-right-click sa isang server
2. Piliin ang **"Share on LAN"**

### Paraan 2: Multi-select
1. Hawakan ang `Ctrl` (o `⌘` sa Mac) at i-click ang maraming server
2. I-click ang **"Share"** na button na lalabas
3. O i-right-click at piliin ang **"Share on LAN"**

## Pagbabahagi ng mga Server (Sender)

### Hakbang 1: I-enable ang LAN Discovery
I-click ang **🌐** (globe) icon sa header bar.

### Hakbang 2: Pumili ng mga Server
- Right-click → "Share on LAN" para sa isang server
- O multi-select ng mga server tapos i-click ang Share

### Hakbang 3: Server Selection Modal
- Suriin ang mga napiling server
- I-click ang **"Select All"** para ibahagi lahat ng server
- I-click ang **"Clear"** para alisin lahat ng pagpili
- I-click ang mga tag para mabilis na pumili ng mga server na may tag na iyon

### Hakbang 4: I-click ang "Share" Button

### Hakbang 5: I-configure ang mga Opsyon

| Opsyon | Paglalarawan |
|--------|--------------|
| Include sensitive data ✅ | Ibahagi ang mga password at private key |
| Include sensitive data ❌ | Tanggalin ang mga password/key (mano-manong ilalagay ng receiver) |

### Hakbang 6: Tandaan ang Pairing Code
Ang 6-digit na **Pairing Code** ay valid sa loob ng 5 minuto.

### Hakbang 7: Ibahagi ang Code
Sabihin sa receiver ang iyong pairing code.

### Hakbang 8: Ipadala
I-click ang **"Share on LAN"**

Ipapakita ng status: "Sent X server(s). Waiting for receiver..."

## Pagtanggap ng mga Server (Receiver)

### Hakbang 1: I-enable ang LAN Discovery
I-click ang **🌐** (globe) icon sa header bar.

### Hakbang 2: Maghintay ng Notification
May lalabas na popup kapag may nagpadala sa iyo ng mga server.

O pumunta sa Hosts → right-click sa empty area → "Receive Shared Servers"

### Hakbang 3: Ilagay ang Pairing Code
Ilagay ang 6-digit na code mula sa sender.

### Hakbang 4: Mag-import
I-click ang **"Decrypt & Import"**

### Hakbang 5: Tapos na!
Na-import ang mga server na may:
- Lahat ng orihinal na setting
- Awtomatikong idinagdag na **"LAN-Import"** tag
- Mga password/key (kung isinama ng sender)

Ipapakita ng status: "Successfully imported X server(s)!"

## Seguridad

- Lahat ng transfer ay **naka-encrypt**
- Kailangan ng 6-digit na pairing code
- Nag-e-expire ang mga code pagkatapos ng 5 minuto
- Walang data na dumadaan sa mga external server
- Direktang device-to-device transfer

## Pag-troubleshoot

### Walang Lumalabas na mga Device

1. Parehong device sa **iisang network** (WiFi/LAN)
2. **LAN Discovery ON** sa parehong device
3. I-click ang "Refresh" para mag-rescan
4. Suriin kung hindi bina-block ng firewall ang Marix

### Nag-expire ang Pairing Code

- Nag-e-expire ang mga code pagkatapos ng 5 minuto
- Maaaring i-click ng sender ang "Regenerate" para sa bagong code

### "Wrong Pairing Code" Error

- I-double-check ang code sa sender
- Case-sensitive ang mga code
- Humiling ng bagong code kung kinakailangan

### Nawawala ang mga Password sa Server

- Maaaring na-disable ng sender ang "Include sensitive data"
- Mano-manong ilagay ang mga password pagkatapos mag-import
- Hilingin sa sender na muling mag-share na may sensitive data enabled
