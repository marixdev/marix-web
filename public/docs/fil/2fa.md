# Two-Factor Authentication (2FA/TOTP)

Built-in na TOTP code generator, katulad ng Google Authenticator. I-imbak ang iyong mga 2FA secret at kunin ang mga code nang hindi kailangan ang iyong telepono.

## Interface ng 2FA

![2FA Interface](/2fa.png)

## Pagbukas ng 2FA

I-click ang **"2FA"** sa sidebar.

## Magdagdag ng Bagong 2FA Account

### Hakbang 1: Buksan ang Dialog
I-click ang **"Add Account"** na button

### Hakbang 2: Ilagay ang mga Detalye

| Field | Paglalarawan | Kailangan |
|-------|--------------|-----------|
| Account Name | Label para sa account na ito (hal., "GitHub", "AWS") | Hindi (auto-named) |
| Secret Key | Ang TOTP secret (mula sa QR code setup page) | Oo |

### Hakbang 3: I-save
I-click ang **"Add"**

## Paano Kunin ang Secret Key

Kapag ine-enable ang 2FA sa isang website:

1. Hanapin ang **"Can't scan QR code?"** o **"Manual entry"**
2. Kopyahin ang secret key (karaniwang uppercase letters at numbers)
3. I-paste sa Marix

Halimbawa ng format ng secret key:
\`\`\`
JBSWY3DPEHPK3PXP
\`\`\`

## Paggamit ng mga 2FA Code

1. Hanapin ang iyong account sa listahan
2. Ang 6-digit na code ay nakadisplay sa tabi nito
3. Isang countdown timer ang nagpapakita ng mga segundo bago mag-refresh ang code
4. I-click ang **Copy** na button para kopyahin ang code sa clipboard

### Timer
- Nagre-refresh ang mga code kada **30 segundo**
- Ang circular progress indicator ay nagpapakita ng natitirang oras
- Maghintay ng bagong code kung malapit nang mag-expire ang kasalukuyan

## I-edit ang Account Name

1. I-click ang **Edit** na button sa tabi ng account
2. Maglagay ng bagong pangalan
3. Pindutin ang Enter o i-click ang Save

## Magbura ng 2FA Account

1. I-click ang **Delete** na button (trash icon)
2. Kumpirmahin ang pagbura

> ⚠️ **Babala:** Ang pagbura ay nagtatanggal ng secret. Siguraduhing mayroon kang backup access sa nauugnay na account bago magbura.

## Mga Karaniwang Serbisyo

Narito ang ilang sikat na serbisyo na sumusuporta sa TOTP:

| Serbisyo | Lokasyon ng 2FA Settings |
|----------|--------------------------|
| GitHub | Settings → Password and authentication |
| AWS | IAM → Security credentials |
| Google | Google Account → Security |
| Microsoft | Security settings → Two-step verification |
| Cloudflare | Profile → Authentication |
| DigitalOcean | Account → Security |
| Linode | My Profile → Password & Authentication |

## Mga Pinakamahusay na Kasanayan

1. **I-backup ang iyong mga secret** - Ligtas na itago ang mga secret key
2. **Panatilihin ang mga recovery code** - I-save ang mga backup code na ibinigay ng mga serbisyo
3. **Gumamit ng naglalarawang mga pangalan** - Madaling matukoy ang mga account nang mabilis
4. **Subukan ang mga code bago umasa sa mga ito** - I-verify na gumagana ang mga ito kaagad pagkatapos idagdag
5. **Time sync** - Siguraduhing tama ang orasan ng iyong computer

## Pag-troubleshoot

### Hindi Gumagana ang mga Code

1. **Suriin ang time sync** - Dapat tama ang orasan ng iyong computer
2. **I-verify ang secret key** - Muling ilagay kung may maling kopya
3. **Maghintay ng susunod na code** - Maaaring mag-e-expire na ang kasalukuyang code

### Nawalan ng Access

Kung nawalan ka ng access sa Marix:
1. Gamitin ang **recovery codes** na ibinigay ng serbisyo
2. Makipag-ugnayan sa support ng serbisyo para sa account recovery
