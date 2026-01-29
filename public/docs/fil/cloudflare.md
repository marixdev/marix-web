# Cloudflare DNS Manager

Pamahalaan ang iyong mga Cloudflare DNS record nang direkta mula sa Marix.

## Interface ng Cloudflare DNS Manager

![Cloudflare DNS Manager Interface](/cf.png)

## Setup

### Hakbang 1: Kunin ang API Token

1. Pumunta sa [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Mag-navigate sa Profile → API Tokens
3. I-click ang "Create Token"
4. Gamitin ang "Edit zone DNS" template o gumawa ng custom na may:
   - Zone.DNS: Edit
   - Zone.Zone: Read
5. Kopyahin ang token

### Hakbang 2: I-configure sa Marix

1. Pumunta sa **Settings** sa sidebar
2. Hanapin ang seksyong **"Cloudflare API Token"**
3. I-click ang **"Add Token"**
4. I-paste ang iyong token
5. I-click ang **"Save"**

## Paggamit ng Cloudflare DNS

1. I-click ang **"Cloudflare"** sa sidebar
2. Ang iyong mga domain ay maglo-load sa isang dropdown
3. Pumili ng domain
4. Lalabas ang mga DNS record para sa domain na iyon

## Tingnan ang mga DNS Record

Ang talahanayan ay nagpapakita ng:

| Kolum | Paglalarawan |
|-------|--------------|
| Type | Uri ng record (A, AAAA, CNAME, MX, TXT, atbp.) |
| Name | Pangalan/subdomain ng record |
| Content | Halaga ng record (IP, hostname, text) |
| TTL | Time-to-live (Auto o segundo) |
| Proxy | Proxied sa Cloudflare o DNS lang |

## Magdagdag ng DNS Record

### Hakbang 1: Buksan ang Dialog
I-click ang **"Add Record"** na button

### Hakbang 2: Punan ang mga Detalye

| Field | Paglalarawan |
|-------|--------------|
| Type | Piliin: A, AAAA, CNAME, MX, TXT, SRV, atbp. |
| Name | Subdomain (hal., "www") o "@" para sa root |
| Content | Ang halaga (IP para sa A, hostname para sa CNAME, atbp.) |
| TTL | Time-to-live: Auto o custom na segundo |
| Proxy | I-toggle: Proxied (orange cloud) o DNS lang (gray) |
| Comment | Opsyonal na tala |

### Hakbang 3: Lumikha
I-click ang **"Create"**

## Mga Karaniwang Uri ng Record

### A Record
Itinuturo ang domain sa isang IPv4 address.

| Field | Halimbawa |
|-------|-----------|
| Type | A |
| Name | @ (o www) |
| Content | 192.168.1.100 |

### AAAA Record
Itinuturo ang domain sa isang IPv6 address.

| Field | Halimbawa |
|-------|-----------|
| Type | AAAA |
| Name | @ |
| Content | 2001:db8::1 |

### CNAME Record
Gumagawa ng alias sa ibang domain.

| Field | Halimbawa |
|-------|-----------|
| Type | CNAME |
| Name | www |
| Content | example.com |

### MX Record
Tinutukoy ang mga mail server.

| Field | Halimbawa |
|-------|-----------|
| Type | MX |
| Name | @ |
| Content | mail.example.com |
| Priority | 10 |

### TXT Record
Nag-iimbak ng text data (SPF, DKIM, verification).

| Field | Halimbawa |
|-------|-----------|
| Type | TXT |
| Name | @ |
| Content | v=spf1 include:_spf.google.com ~all |

## I-edit ang DNS Record

1. Hanapin ang record sa talahanayan
2. I-click ang **Edit** na button (pencil icon)
3. Baguhin ang mga field
4. I-click ang **"Save"**

## Magbura ng DNS Record

1. Hanapin ang record
2. I-click ang **Delete** na button (trash icon)
3. Kumpirmahin ang pagbura

## Proxy Status

| Icon | Status | Epekto |
|------|--------|--------|
| 🟠 Orange cloud | Proxied | Ang traffic ay dumadaan sa Cloudflare CDN |
| ⚪ Gray cloud | DNS lang | Direktang koneksyon sa origin |

### Kailan Gamitin ang Proxy

**Proxied (Orange):**
- Mga web server (HTTP/HTTPS)
- Gusto ng DDoS protection
- Gusto ng CDN caching

**DNS Lang (Gray):**
- SSH, FTP, mail server
- Mga non-HTTP service
- Kailangan ng direktang IP connection

## I-refresh ang mga Record

I-click ang **Refresh** na button sa tabi ng domain dropdown para i-reload ang mga record.

## Mga Tip

- Inirerekomenda ang **TTL Auto** para sa karamihan ng mga kaso
- **Subukan ang mga pagbabago** gamit ang mga DNS lookup tool
- **I-backup ang mga record** bago gumawa ng malalaking pagbabago
- Ang **Propagation** ay maaaring tumagal ng hanggang 48 oras globally
