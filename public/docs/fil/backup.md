# Backup at Restore

Protektahan ang iyong data gamit ang mga naka-encrypt na backup. Sinusuportahan ng Marix ang 6 na backup provider, lahat ay gumagamit ng Argon2id encryption.

> 💡 **Tip:** Kapag nakakonekta ka na sa isang cloud account para sa backup, hindi mo na kailangang mag-reconnect para sa restore sa parehong device. Lokal na naka-save ang iyong authentication.

## Interface ng Backup at Restore

### Backup
![Backup Interface](/backup.png)

### Restore
![Restore Interface](/restore.png)

## Ano ang Naba-backup

- Lahat ng mga server at kredensyal (mga password, private key)
- Mga SSH key mula sa Keychain
- Mga port forward configuration
- Mga 2FA/TOTP secret
- Mga application setting
- Cloudflare API token

## Mga Kinakailangan sa Password

| Kinakailangan | Paglalarawan |
|---------------|--------------|
| Haba | Hindi bababa sa 10 character |
| Uppercase | Magsama ng uppercase letters |
| Lowercase | Magsama ng lowercase letters |
| Numbers | Magsama ng kahit isang numero |
| Special | Magsama ng special characters |

> ⚠️ **Babala:** Hindi namin mare-recover ang iyong password. Kung nakalimutan mo ito, permanenteng hindi maa-access ang iyong backup.

## Local Backup

Mag-save ng naka-encrypt na backup file sa iyong computer.

### Lumikha ng Local Backup

1. Pumunta sa **Settings** → I-click ang **"Create Backup"**
2. Piliin ang **Local** tab (folder icon)
3. Maglagay ng **malakas na password** (10+ character)
4. Kumpirmahin ang password
5. I-click ang **"Create Backup"**
6. Piliin kung saan i-save ang `.marix` file
7. Itago ng ligtas ang file na ito

### Mag-restore mula sa Local Backup

1. Pumunta sa **Settings** → I-click ang **"Restore Backup"**
2. Piliin ang **Local** tab
3. I-click ang **"Select File"** at piliin ang iyong `.marix` backup file
4. Ilagay ang **password** na ginamit mo noong ginawa ang backup
5. I-click ang **"Restore"**
6. Magre-restart ang application na may lahat ng data na na-restore

## Google Drive

I-sync ang iyong backup sa Google Drive.

### Kumonekta

1. Piliin ang **Google Drive** tab
2. I-click ang **"Connect"**
3. Mag-sign in sa iyong Google account
4. Bigyan ng permiso ang Marix
5. Makikita mo ang "Connected" kasama ang iyong email

### Lumikha ng Backup

1. Pagkatapos kumonekta, maglagay ng malakas na password
2. Kumpirmahin ang password
3. I-click ang **"Create Backup"**
4. Ipapakita ng status: "Backup created successfully"

### Mag-restore

1. Kung nakakonekta na, naaalala ang iyong account
2. Kung may backup, makikita mo ang "Last backup: [petsa]"
3. Ilagay ang password
4. I-click ang **"Restore"**

## GitHub

I-store ang iyong backup sa isang private GitHub Gist.

### Kumonekta

1. Piliin ang **GitHub** tab
2. I-click ang **"Connect"**
3. May lalabas na **Device Code** (hal., `ABCD-1234`)
4. Pumunta sa: https://github.com/login/device
5. Ilagay ang code
6. I-authorize ang Marix

### Lumikha ng Backup

1. Maglagay ng malakas na password
2. Kumpirmahin ang password
3. I-click ang **"Create Backup"**
4. Itinatago ang backup bilang private Gist

### Mag-restore

1. Kung nakakonekta na, naaalala ang iyong account
2. Kung may backup, makikita mo ang "Last backup: [petsa]"
3. Ilagay ang password
4. I-click ang **"Restore"**

### Nasaan ang Aking Backup?

Pumunta sa https://gist.github.com → Iyong mga private gist → Hanapin ang "marix-backup"

## GitLab

I-store ang iyong backup sa isang GitLab Snippet.

### Kumonekta

1. Piliin ang **GitLab** tab
2. I-click ang **"Connect"**
3. Mag-sign in sa GitLab
4. I-authorize ang Marix

### Lumikha ng Backup

1. Maglagay ng malakas na password
2. Kumpirmahin ang password
3. I-click ang **"Create Backup"**
4. Itinatago ang backup bilang private Snippet

### Mag-restore

1. Kung nakakonekta na, naaalala ang iyong account
2. Kung may backup, makikita mo ang "Last backup: [petsa]"
3. Ilagay ang password
4. I-click ang **"Restore"**

## Box.net

I-store ang iyong backup sa Box cloud storage.

### Kumonekta

1. Piliin ang **Box.net** tab
2. I-click ang **"Connect to Box.net"**
3. Mag-sign in sa iyong Box.net account
4. I-authorize ang Marix

### Lumikha ng Backup

1. Maglagay ng malakas na password
2. Kumpirmahin ang password
3. I-click ang **"Create Backup"**

### Mag-restore

1. Kung nakakonekta na, naaalala ang iyong account
2. Kung may backup, makikita mo ang "Last backup: [petsa]"
3. Ilagay ang password
4. I-click ang **"Restore"**

## OneDrive

I-sync ang iyong backup sa Microsoft OneDrive.

### Kumonekta

1. Piliin ang **OneDrive** tab
2. I-click ang **"Connect"**
3. Mag-sign in sa iyong Microsoft account
4. Bigyan ng permiso ang Marix
5. Makikita mo ang "Connected" kasama ang iyong email

### Lumikha ng Backup

1. Pagkatapos kumonekta, maglagay ng malakas na password
2. Kumpirmahin ang password
3. I-click ang **"Create Backup"**
4. Ipapakita ng status: "Backup created successfully"

### Mag-restore

1. Kung nakakonekta na, naaalala ang iyong account
2. Kung may backup, makikita mo ang "Last backup: [petsa]"
3. Ilagay ang password
4. I-click ang **"Restore"**

## Paghahambing ng mga Provider

| Provider | Lokasyon ng Storage | Mga Kalamangan | Mga Kahinaan |
|----------|---------------------|----------------|--------------|
| **Local** | Iyong computer | Buong kontrol, offline | Kailangang pamahalaan ang file ng mano-mano |
| **Google Drive** | Google cloud | Auto-sync, malawakang gamit | Kailangan ng Google account |
| **OneDrive** | Microsoft cloud | Integrated sa Windows | Kailangan ng Microsoft account |
| **GitHub** | GitHub Gist | Libre, version control | Kailangan ng GitHub account |
| **GitLab** | GitLab Snippet | Libre, self-hosted option | Kailangan ng GitLab account |
| **Box.net** | Box.net cloud | Enterprise-friendly | Kailangan ng Box account |

## Mga Pinakamahusay na Kasanayan

1. **Gumamit ng iba't ibang password** para sa iba't ibang provider
2. **I-store ang iyong password** sa isang password manager
3. **Subukang mag-restore** paminsan-minsan para matiyak na gumagana ang backup
4. **Panatilihin ang local backup** bilang pangalawang opsyon
5. **Huwag mag-share** ng mga backup file - naglalaman ang mga ito ng sensitibong data
6. **I-update ang mga backup** regularly pagkatapos magdagdag ng mga bagong server
