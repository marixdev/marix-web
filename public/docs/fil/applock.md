# App Lock

Protektahan ang iyong Marix application gamit ang App Lock. Kapag naka-enable, awtomatikong nagla-lock ang app pagkatapos ng panahon ng kawalan ng aktibidad, na pinipigilan ang hindi awtorisadong pag-access sa iyong mga server at kredensyal.

## Interface ng App Lock

![App Lock Interface](/applock.png)

## Pag-enable ng App Lock

1. Buksan ang **Settings** (gear icon sa sidebar)
2. Hanapin ang seksyong **Security**
3. I-toggle ang **Enable App Lock**

## Mga Paraan ng Pag-lock

Piliin kung paano dapat ma-lock ang app:

| Paraan | Paglalarawan | Antas ng Seguridad |
|--------|--------------|---------------------|
| **Blur** | Binlu-blur ang content ng screen | Mababa - visual privacy lang |
| **PIN** | Kailangan ng 4-6 digit PIN para ma-unlock | Katamtaman |
| **Password** | Kailangan ng password para ma-unlock | Mataas |

### Blur Mode

- Nagiging blurred ang content ng screen
- I-click kahit saan para ma-unlock
- Pinakamabuti para sa mabilis na privacy sa mga opisina

### PIN Mode

- Magtakda ng 4-6 digit na numeric PIN
- Ilagay ang PIN para ma-unlock
- Magandang balanse ng seguridad at kaginhawaan

### Password Mode

- Magtakda ng custom password
- Ilagay ang password para ma-unlock
- Pinakamataas na antas ng seguridad

## Pag-setup ng PIN o Password

Kapag lumilipat sa PIN o Password mode:

1. Piliin ang paraan ng pag-lock
2. May lalabas na dialog para itakda ang iyong kredensyal
3. Ilagay ang iyong PIN/Password
4. Kumpirmahin sa pamamagitan ng muling paglalagay
5. I-click ang **Save**

> **Paalala:** Kung nakalimutan mo ang iyong PIN/Password, kailangan mong i-restart ang app. Mananatiling ligtas ang iyong server data.

## Lock Timeout

I-configure kung gaano katagal maghihintay ang app bago mag-lock:

| Timeout | Gamit |
|---------|-------|
| 1 minuto | Maximum na seguridad |
| 2 minuto | Mataas na seguridad |
| 5 minuto | Default, balansyado |
| 10 minuto | Katamtamang seguridad |
| 15 minuto | Kaswal na paggamit |
| 30 minuto | Mababang seguridad |
| 60 minuto | Minimal na proteksyon |

Nagre-reset ang timer sa anumang mouse movement, keyboard input, o click.

## Pag-unlock

### Blur Mode
- I-click kahit saan sa screen
- Igalaw ang mouse

### PIN/Password Mode
1. Ilagay ang iyong PIN o Password
2. Pindutin ang **Enter** o i-click ang **Unlock**
3. Agad na magbu-bukas ang app

## Pagpapalit ng Kredensyal

Para palitan ang iyong PIN o Password:

1. Pumunta sa **Settings** → **Security**
2. I-click ang **Change PIN** o **Change Password**
3. Ilagay ang iyong bagong kredensyal
4. Kumpirmahin at i-save

## Pag-clear ng Kredensyal

Para tanggalin ang PIN/Password at bumalik sa Blur:

1. Pumunta sa **Settings** → **Security**
2. I-click ang **Clear Credential**
3. Magbabalik sa Blur ang paraan ng pag-lock

## Paano Ito Gumagana

1. **Pagsubaybay ng Aktibidad**: Sinusubaybayan ng Marix ang mga mouse, keyboard, at click event
2. **Inactivity Timer**: Pagkatapos ng walang aktibidad sa itinakdang timeout, nagla-lock ang app
3. **Instant Lock**: Maaari ka ring manual na mag-lock (kung implemented)
4. **Secure Storage**: Ligtas na nakaimbak ang PIN/Password gamit ang system keychain

## Mga Konsiderasyon sa Seguridad

### Ano ang Pinoprotektahan ng App Lock

- ✅ Visual na access sa iyong listahan ng mga server
- ✅ Pagtingin sa mga naka-save na kredensyal
- ✅ Pag-access sa mga aktibong terminal session
- ✅ Pagba-browse ng mga SFTP file manager

### Ano ang HINDI Pinoprotektahan ng App Lock

- ❌ Mga naka-establish na SSH connection (nananatiling aktibo ang mga ito)
- ❌ Data sa disk (gumamit ng system encryption para dito)
- ❌ Network traffic (gumamit ng SSH/TLS para dito)

## Mga Pinakamahusay na Kasanayan

1. **Gumamit ng Password mode** para sa mga sensitibong kapaligiran
2. **Magtakda ng mas maikling timeout** sa mga shared workspace
3. **Gumamit ng natatanging kredensyal** - huwag reuse ang mga password
4. **Mag-lock bago umalis** ng iyong computer
5. **Pagsamahin sa OS lock** para sa maximum na seguridad

## Pag-troubleshoot

### Nakalimutan ang PIN/Password

- I-restart ang application
- Nagre-reset ang App Lock sa restart
- Napapanatili ang iyong server data

### Masyadong Mabilis Mag-lock ang App

- Taasan ang timeout sa Settings
- Suriin kung may mga aktibong session na maaaring pumigil sa activity detection

### Hindi Nagla-lock ang App

- Siguraduhing naka-enable ang App Lock
- Suriin ang timeout setting
- I-verify na may focus ang app window
