# LAN File Transfer

Maglipat ng mga file sa pagitan ng mga device sa parehong local network nang hindi kailangan ng server.

## Interface ng LAN File Transfer

![LAN File Transfer Interface](/sendfile.png)

## Mga Kinakailangan

> ⚠️ **Mahalaga:** Dapat may **LAN Discovery enabled** ang parehong sender at receiver.
> 
> I-click ang 🌐 na button sa header bar o gamitin ang `Ctrl+Shift+L` para i-toggle.

- Parehong device sa iisang network (WiFi/LAN)
- LAN Discovery enabled sa parehong device
- Tumatakbo ang Marix sa parehong device

## Pagbukas ng LAN File Transfer

I-click ang **"Send Files"** sa sidebar.

## Pagpapadala ng mga File

### Hakbang 1: I-enable ang LAN Discovery
I-click ang **🌐** (globe) icon sa header bar.

### Hakbang 2: Pumili ng mga File
1. Pumunta sa Send Files → **Send** tab
2. I-click ang **"Select Files"** o **"Select Folder"**
3. Lalabas ang mga napiling item sa listahan
4. I-click ang × para magtanggal ng item

### Hakbang 3: Kunin ang Pairing Code
Tandaan ang 6-digit na **Pairing Code** na nakadisplay.

### Hakbang 4: Ibahagi ang Code
Sabihin sa receiver ang iyong pairing code (verbal o sa pamamagitan ng mensahe).

### Hakbang 5: Simulan ang Pagpapadala
1. I-click ang **"Start Sending"**
2. Status: "Waiting for receiver..."
3. Magsisimula ang transfer kapag kumonekta ang receiver

## Pagtanggap ng mga File

### Hakbang 1: I-enable ang LAN Discovery
I-click ang **🌐** (globe) icon sa header bar.

### Hakbang 2: Kumonekta
1. Pumunta sa Send Files → **Receive** tab
2. Ilagay ang 6-digit na pairing code mula sa sender
3. I-click ang **"Connect"**

### Hakbang 3: Tumanggap
- Awtomatikong nagkokonekta ang mga device
- Agad na nagsisimula ang transfer
- Ise-save ang mga file sa iyong Downloads folder

## Progress ng Transfer

Sa panahon ng transfer makikita mo:
- Progress bar na may completion percentage
- Speed indicator (hal., "5.2 MB/s")
- Kasalukuyang file na inililipat

## I-cancel ang Transfer

I-click ang **"Cancel"** na button para ihinto ang transfer anumang oras.

## Pag-troubleshoot

### Hindi Mahanap ang Sender/Receiver

1. Siguraduhing parehong may **LAN Discovery ON** ang mga device (aktibo ang 🌐 icon)
2. Dapat nasa **parehong local network** ang parehong device
3. Suriin kung hindi bina-block ng firewall ang Marix
4. Subukang i-refresh ang koneksyon

### Nabigo ang Transfer

- Maaaring tumagal ang malalaking file - maging mapagpasensya
- Siguraduhing stable ang network connection
- Subukang muling magpadala gamit ang bagong pairing code
- Suriin ang available na disk space sa receiver

### Mabagal na Transfer Speed

- Gumamit ng wired Ethernet para sa mas mabilis na transfer
- Bawasan ang network congestion
- Isara ang mga application na mabigat sa bandwidth
- Suriin ang performance ng router/network

## Seguridad

- Gumagamit ang mga transfer ng **end-to-end encryption**
- Tinitiyak ng 6-digit na pairing code na tanging ang intended recipient lang ang makakatanggap ng mga file
- Walang data na dumadaan sa mga external server
- Direktang naglilipat ang mga file sa pagitan ng mga device

## Mga Tip

- **Malalaking folder**: Piliin ang folder sa halip na mga indibidwal na file
- **Maramihang file**: Maaari kang pumili ng maramihang item nang sabay-sabay
- **I-verify ang pagtanggap**: Kumpirmahin sa receiver na dumating nang tama ang mga file
- **Kalidad ng network**: Mas mabuting network = mas mabilis na transfer
