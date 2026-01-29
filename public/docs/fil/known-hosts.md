# Mga Kilalang Host

Nag-iimbak ang Known Hosts ng mga server fingerprint para matukoy kung nagbago ang pagkakakilanlan ng isang server (potensyal na isyu sa seguridad).

## Interface ng Known Hosts

![Known Hosts Interface](/knowhosts.png)

## Ano ang Known Hosts?

Kapag unang kumonekta ka sa isang SSH server, nagpapakita ang server ng kanyang fingerprint. Ini-iimbak ito ng Marix para:
- I-verify ang pagkakakilanlan ng server sa mga susunod na koneksyon
- Matukoy ang mga man-in-the-middle attack
- Alertuhan ka kung may hindi inaasahang pagbabago sa server key

## Pagbukas ng Known Hosts

I-click ang **"Known Hosts"** sa sidebar.

## Tingnan ang mga Known Host

Ipinapakita ng listahan ang:

| Kolum | Paglalarawan |
|-------|--------------|
| Host | Server hostname/IP |
| Port | SSH port |
| Key Type | SSH key algorithm (ED25519, RSA, ECDSA) |
| Fingerprint | Natatanging server identifier |
| Added | Kailan pinagkatiwalaan ang host |

## Maghanap ng Known Host

1. Gamitin ang search box sa itaas
2. Maghanap ayon sa hostname, IP, o fingerprint

## I-filter ayon sa Key Type

1. Gamitin ang dropdown filter
2. Piliin: All, ED25519, RSA, o ECDSA

## Mag-import ng Host mula sa Server

Mano-manong magdagdag ng fingerprint ng server nang hindi kumokonekta:

1. I-click ang **"Import from Host"** na button
2. Ilagay ang:
   - Hostname o IP
   - Port (default 22)
3. I-click ang **"Import"**
4. Kukunin at itatago ang fingerprint ng server

## Magtanggal ng Known Host

1. Hanapin ang host sa listahan
2. I-click ang **Delete** na button (trash icon)
3. Kumpirmahin ang pagtanggal

### Kailan Dapat Magtanggal

- Na-reinstall ang server at may bagong key
- Nagbago ang IP/hostname ng server
- Hindi ka na kumokonekta sa server na ito

## Host Key Verification

Kapag kumokonekta sa bagong server:
1. Kinukuha ng Marix ang fingerprint ng server
2. Hihilingin sa iyo na i-verify at pagkatiwalaan ito
3. Pagkatapos tanggapin, ito ay itatago sa Known Hosts
4. Awtomatikong sine-verify ang mga susunod na koneksyon

## Mga Babala sa Seguridad

### "Host key has changed"
Lumalabas ang babala na ito kapag iba ang fingerprint ng server sa nakaimbak.

**Mga posibleng sanhi:**
- Na-reinstall ang server
- Na-regenerate ang SSH key ng server
- ⚠️ **Man-in-the-middle attack** (bihira pero posible)

**Ano ang gagawin:**
1. I-verify sa server administrator kung lehitimo ang pagbabago ng key
2. Kung nakumpirma, alisin ang lumang entry mula sa Known Hosts
3. Muling kumonekta at tanggapin ang bagong fingerprint
4. Kung may hinala, huwag kumonekta

## Mga Pinakamahusay na Kasanayan

1. **I-verify ang mga fingerprint** kapag kumokonekta sa mga bagong server
2. **Huwag balewalain ang mga babala** tungkol sa mga nagbagong host key
3. **Regular na suriin** ang iyong listahan ng Known Hosts
4. **Alisin ang mga lumang entry** para sa mga server na hindi mo na ginagamit
