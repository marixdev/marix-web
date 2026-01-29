# SSH Key Manager

Ang SSH Key Manager ay nagbibigay-daan sa iyong lumikha, mag-import, at pamahalaan ang mga SSH key para sa ligtas na authentication.

## Pangkalahatang-ideya

![SSH Keys](/ssh-keys.png)

Ang mga SSH key ay nagbibigay ng:
- Mas ligtas na authentication kaysa mga password
- Passwordless login sa mga server
- Suporta para sa maramihang mga key para sa iba't ibang server

## Pag-access sa SSH Key Manager

1. Buksan ang **Settings**
2. Mag-navigate sa **SSH Keys** na tab
3. O pindutin ang `Ctrl+K` at i-type ang "SSH Keys"

## Paggawa ng Bagong Key

### Hakbang 1: Buksan ang Key Generator

1. I-click ang **"Generate Key"** na button
2. Ang key generation dialog ay magbubukas

### Hakbang 2: I-configure ang Key

| Field | Paglalarawan | Inirekomenda |
|-------|--------------|--------------|
| Key Type | Algorithm (RSA, Ed25519, ECDSA) | Ed25519 |
| Key Size | Bit length (RSA lang) | 4096 bits |
| Passphrase | Opsyonal na password para sa key | Inirerekomenda |
| Comment | Pangalan o email para sa pagkakakilanlan | email@example.com |

### Hakbang 3: I-generate ang Key

1. I-click ang **"Generate"**
2. Hintaying makumpleto ang key generation
3. Ang iyong bagong key ay lalabas sa listahan

## Mga Uri ng Key

### Ed25519 (Inirerekomenda)

- Pinakabagong at pinakaligtas
- Mabilis at mahusay
- Mas maliliit na key size
- Sinusuportahan ng karamihan ng mga modernong server

### RSA

- Malawak na suportado
- Gamitin ang 4096 bits para sa seguridad
- Kinakailangan para sa mas lumang mga server
- Mas malalaking key size

### ECDSA

- Elliptic curve cryptography
- Magandang seguridad na may mas maliliit na key
- Hindi kasing-laki ng suporta gaya ng RSA

## Pag-import ng mga Key

### Mag-import ng Umiiral na Key

1. I-click ang **"Import Key"**
2. Piliin ang iyong private key file (hal., `id_rsa`, `id_ed25519`)
3. Ilagay ang passphrase kung kinakailangan
4. Ang key ay maidadagdag sa iyong listahan

### Mga Sinusuportahang Format

- OpenSSH format (`-----BEGIN OPENSSH PRIVATE KEY-----`)
- PEM format (`-----BEGIN RSA PRIVATE KEY-----`)
- PuTTY format (`.ppk` files)

## Pag-export ng mga Key

### I-export ang Public Key

1. Piliin ang key mula sa listahan
2. I-click ang **"Copy Public Key"**
3. I-paste sa authorized_keys ng server o GitHub

### I-export ang Private Key

1. Piliin ang key mula sa listahan
2. I-click ang **"Export"**
3. Piliin ang format at lokasyon
4. I-save nang ligtas (huwag ibahagi kailanman)

## Pag-deploy ng mga Key sa Server

### Paraan 1: Awtomatikong Deployment

1. Kumonekta sa server gamit ang password
2. I-click ang **"Deploy Key"** sa Key Manager
3. Piliin ang key na i-deploy
4. Awtomatikong idadagdag ang key sa `~/.ssh/authorized_keys`

### Paraan 2: Manwal na Deployment

1. Kopyahin ang public key
2. Kumonekta sa server sa pamamagitan ng SSH
3. Idagdag sa authorized_keys:

```bash
mkdir -p ~/.ssh
chmod 700 ~/.ssh
echo "your-public-key-here" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

## Pamamahala ng mga Key

### Palitan ng Pangalan ang Key

1. I-right-click ang key
2. Piliin ang **"Rename"**
3. Ilagay ang bagong pangalan
4. I-click ang OK

### Burahin ang Key

1. I-right-click ang key
2. Piliin ang **"Delete"**
3. Kumpirmahin ang pagbura

> **Babala:** Ang pagbura ng key ay maaaring makaapekto sa pag-access sa server. Tiyaking mayroon kang ibang paraan ng pag-access.

### Palitan ang Passphrase

1. I-right-click ang key
2. Piliin ang **"Change Passphrase"**
3. Ilagay ang kasalukuyang passphrase
4. Ilagay ang bagong passphrase
5. I-click ang Save

## Pag-uugnay ng mga Key sa Server

### I-assign ang Key sa Server

1. Buksan ang server settings
2. Pumunta sa **Authentication** na tab
3. Piliin ang SSH key mula sa dropdown
4. I-save ang mga pagbabago

### Maramihang Key

Maaari kang mag-assign ng iba't ibang key sa iba't ibang server para sa mas mahusay na seguridad at organisasyon.

## Mga Pinakamahusay na Kasanayan sa Seguridad

### Proteksyon ng Key

- **Palaging gumamit ng passphrase** para sa mga private key
- **Huwag ibahagi ang mga private key** kailanman
- **I-back up ang mga key** sa ligtas na lokasyon
- **Gumamit ng iba't ibang key** para sa iba't ibang layunin

### Mga Rekomendasyon

- Gamitin ang Ed25519 para sa mga bagong key
- Gumamit ng 4096-bit RSA kung kinakailangan ang compatibility
- Regular na suriin at alisin ang mga hindi na ginagamit na key
- I-rotate ang mga key taon-taon para sa maximum na seguridad

## Mga Tip

- Gamitin ang **Ed25519** para sa pinakamahusay na balanse ng seguridad at performance
- Mag-set ng **paglalarawan** para madaling matukoy ang mga key
- **I-back up** ang mga key bago magtanggal o mag-reset ng device
