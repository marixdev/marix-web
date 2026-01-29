# RDP Remote Desktop

Kumonekta sa mga Windows server at computer gamit ang Remote Desktop Protocol (RDP).

## Pagdaragdag ng RDP Server

1. I-click ang **"Add New Host"**
2. Piliin ang **Protocol**: RDP
3. Punan ang:
   - **Host/IP**: Windows server address
   - **Port**: 3389 (default)
   - **Username**: Windows username
   - **Password**: Windows password
   - **Domain**: (opsyonal) Windows domain name
4. I-click ang **Create**

## Mag-import mula sa .rdp File

Mayroon ka na bang RDP configuration file?

1. Sa Add Server dialog, i-click ang **"Import .rdp file"**
2. Piliin ang iyong `.rdp` file
3. Awtomatikong mapupunan ang mga field mula sa file
4. Ayusin ang mga setting kung kinakailangan
5. I-click ang **Create**

## Pagkonekta sa RDP

1. I-double-click ang RDP server sa Hosts list
2. Magbubukas ang remote desktop window sa loob ng application
3. Normal na maaari mong gamitin ang Windows desktop

## Mga RDP Control

| Input | Behavior |
|-------|----------|
| **Mouse** | Normal na gumagana ang click, drag, scroll |
| **Keyboard** | Lahat ng key ay ipinapasa sa remote |
| **Clipboard** | Copy/paste sa pagitan ng local at remote |

## Pagdiskonekta

- I-click ang × sa session tab
- O isara ang application
- Napapanatili ang session state sa remote server

## Mga Kinakailangan sa Linux

Ang suporta sa RDP sa Linux ay nangangailangan ng FreeRDP. **Awtomatikong tinutukoy** ng Marix kung naka-install ang FreeRDP.

### Auto-Install

Kung hindi nahanap ang FreeRDP:
1. May lalabas na notification kapag sinubukan mong kumonekta
2. I-click ang **"Install"** na button
3. Awtomatikong ini-install ng Marix ang FreeRDP
4. Muling kumonekta pagkatapos makumpleto ang pag-install

### Mano-manong Pag-install

Kung mas gusto mong mano-manong mag-install:

**Ubuntu/Debian**
```bash
sudo apt install freerdp3-x11 xdotool
```

**Fedora**
```bash
sudo dnf install freerdp xdotool
```

**Arch Linux**
```bash
sudo pacman -S freerdp xdotool
```

## Mga Display Setting

Ang mga RDP session ay umaangkop sa laki ng iyong window. Para sa pinakamahusay na karanasan:
- I-maximize ang window para sa buong desktop experience
- I-resize ang window para i-adjust ang remote resolution
- Available ang full-screen mode sa pamamagitan ng window control

## Mga Tip sa Performance

- **Bawasan ang color depth** para sa mas mabagal na koneksyon
- **I-disable ang mga visual effect** sa Windows side
- Gumamit ng **wired connection** para sa pinakamahusay na performance
- Isara ang mga hindi kinakailangang application sa remote machine

## Pag-troubleshoot

### Tinanggihan ang Koneksyon
- I-verify na naka-enable ang Remote Desktop sa Windows
- Suriin kung pinapayagan ng Windows Firewall ang RDP
- Kumpirmahin ang tamang port (default 3389)

### Itim na Screen
- Maghintay sandali - maaaring tumagal ang unang koneksyon
- Subukang muling kumonekta
- Suriin kung hindi nasa sleep mode ang remote machine

### Mabagal na Performance
- Babaan ang screen resolution
- Bawasan ang color depth
- Suriin ang bilis ng network
- Isara ang mga application na mabigat sa bandwidth

### Nabigo ang Authentication
- I-verify ang format ng username:
  - Local: `username`
  - Domain: `DOMAIN\username` o `username@domain.com`
- Suriin kung tama ang password
- Siguraduhing may Remote Desktop access right ang account
