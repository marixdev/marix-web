# Port Forwarding (SSH Tunnels)

Ligtas na niru-route ng mga SSH tunnel ang traffic sa pamamagitan ng SSH connection.

## Interface ng Port Forwarding

![Port Forwarding Interface](/portfoward.png)

## Mga Uri ng Port Forwarding

| Uri | Direksyon | Gamit |
|-----|-----------|-------|
| **Local** | Remote → Local | I-access ang remote service sa pamamagitan ng local port |
| **Remote** | Local → Remote | I-expose ang local service sa remote network |
| **Dynamic** | SOCKS Proxy | Gumawa ng SOCKS proxy sa pamamagitan ng SSH |

## Pagbukas ng Port Forwarding

I-click ang **"Port Forward"** sa sidebar.

## Gumawa ng Port Forward

### Hakbang 1: Buksan ang Dialog
I-click ang **"Add Forward"** na button

### Hakbang 2: I-configure

| Field | Paglalarawan | Halimbawa |
|-------|--------------|-----------|
| Name | Naglalarawang pangalan | "MySQL to localhost" |
| Type | Local, Remote, o Dynamic | Local |
| Server | SSH server na dadaanan ng tunnel | My VPS |
| Local Host | Local bind address | 127.0.0.1 |
| Local Port | Local port number | 3307 |
| Remote Host | Remote destination | 127.0.0.1 |
| Remote Port | Remote port | 3306 |

### Hakbang 3: I-save
I-click ang **"Add"** o **"Save"**

## Mga Halimbawa ng Gamit

### Local Forward: I-access ang Remote MySQL

I-access ang MySQL database ng iyong server mula sa iyong local machine:

| Setting | Halaga |
|---------|--------|
| Type | Local |
| Local | 127.0.0.1:3307 |
| Remote | 127.0.0.1:3306 |

**Paggamit:** Kumonekta sa `localhost:3307` para maabot ang MySQL ng server.

### Remote Forward: I-expose ang Local App

Hayaang ma-access ng server ang iyong local development server:

| Setting | Halaga |
|---------|--------|
| Type | Remote |
| Local | 127.0.0.1:3000 |
| Remote | 0.0.0.0:8080 |

**Paggamit:** Kinokonekta ng port 8080 ng server ang iyong localhost:3000.

### Dynamic: SOCKS Proxy

Gumawa ng SOCKS5 proxy para sa pag-browse sa pamamagitan ng server:

| Setting | Halaga |
|---------|--------|
| Type | Dynamic |
| Local | 127.0.0.1:1080 |

**Paggamit:** I-configure ang mga app na gumamit ng SOCKS5 proxy sa `localhost:1080`.

## Pamahalaan ang mga Port Forward

### Simulan
1. Hanapin ang forward sa listahan
2. I-click ang **Start** na button (▶)
3. Nagbabago ang status sa "Connected"

### Ihinto
1. Hanapin ang tumatakbong forward
2. I-click ang **Stop** na button (■)
3. Nagbabago ang status sa "Disconnected"

### I-edit
1. **Ihinto** ang forward kung tumatakbo
2. I-click ang **Edit** na button (pencil)
3. Baguhin ang mga setting
4. I-click ang **Save**

### Burahin
1. Ihinto ang forward kung tumatakbo
2. I-click ang **Delete** na button (trash)
3. Kumpirmahin ang pagbura

## Subaybayan ang Status

Ipinapakita ng listahan:
- **Status indicator**: Green = connected, Red = error
- **Connection count**: Mga aktibong koneksyon
- **Bytes transferred**: In/out traffic

## Mga Karaniwang Gamit

| Serbisyo | Local Port | Remote Port | Uri |
|----------|------------|-------------|-----|
| MySQL | 3307 | 3306 | Local |
| PostgreSQL | 5433 | 5432 | Local |
| Redis | 6380 | 6379 | Local |
| MongoDB | 27018 | 27017 | Local |
| Web App | 8080 | 80 | Local |
| Jupyter | 8889 | 8888 | Local |

## Pag-troubleshoot

### Ginagamit na ang Port
- Pumili ng ibang local port
- Suriin kung may ibang application na gumagamit ng port na iyon
- Ihinto ang mga conflicting service

### Tinanggihan ang Koneksyon
- I-verify na tumatakbo ang remote service
- Suriin ang firewall sa server
- Siguraduhing tama ang remote host/port

### Nawawala ang Tunnel
- Suriin ang stability ng SSH connection
- Maaaring may timeout setting ang server
- Isaalang-alang ang paggamit ng keep-alive
