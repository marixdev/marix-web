# WebSocket Client

Ang WebSocket Client ay nagbibigay-daan sa iyong kumonekta at makipag-ugnayan sa mga WebSocket server.

## Pangkalahatang-ideya

![WebSocket Client](/websocket.png)

Ang mga WebSocket ay nagbibigay ng:
- Real-time na bidirectional na komunikasyon
- Persistent na koneksyon sa mga server
- Mababang latency na pagpapalitan ng mensahe

## Paggawa ng WebSocket Connection

### Hakbang 1: Buksan ang WebSocket Client

1. Pumunta sa **Tools** → **WebSocket Client**
2. O pindutin ang `Ctrl+K` at i-type ang "WebSocket"

### Hakbang 2: Ilagay ang Connection Details

| Field | Paglalarawan | Halimbawa |
|-------|--------------|-----------|
| URL | WebSocket server address | `wss://api.example.com/ws` |
| Headers | Custom na mga header (opsyonal) | `Authorization: Bearer token` |
| Subprotocol | WebSocket subprotocol (opsyonal) | `graphql-ws` |

### Hakbang 3: Kumonekta

1. I-click ang **"Connect"**
2. Hintaying mag-establish ang koneksyon
3. Ang status ay magpapakita ng "Connected"

## WebSocket URL Formats

### Secure WebSocket (Inirerekomenda)

```
wss://server.example.com:443/path
```

### Unsecure WebSocket

```
ws://server.example.com:80/path
```

> **Babala:** Ang unsecure WebSocket (ws://) ay hindi naka-encrypt. Gamitin ang `wss://` para sa production.

## Pagpapadala ng mga Mensahe

### Text Message

1. I-type ang iyong mensahe sa input field
2. I-click ang **"Send"** o pindutin ang `Enter`
3. Makikita mo ang mensahe sa message log

### JSON Message

1. Piliin ang **"JSON"** format
2. Ilagay ang iyong JSON:
   ```json
   {
     "type": "subscribe",
     "channel": "updates"
   }
   ```
3. I-click ang **"Send"**

### Binary Message

1. Piliin ang **"Binary"** format
2. Ilagay ang data sa hexadecimal format
3. I-click ang **"Send"**

## Pagtanggap ng mga Mensahe

Ang mga mensahe mula sa server ay awtomatikong lalabas sa message log:

- **Mga text message** - Ipapakita bilang text
- **Mga JSON message** - Maa-format at mag-syntax highlight
- **Mga binary message** - Ipapakita sa hex format

### Message Log Features

| Feature | Paglalarawan |
|---------|--------------|
| Timestamp | Kailan natanggap ang bawat mensahe |
| Direction | Incoming (↓) o Outgoing (↑) |
| Size | Laki ng mensahe sa bytes |
| Type | Text, JSON, o Binary |

## Mga Saved Connection

### I-save ang Connection

1. I-click ang **"Save"** na button
2. Ilagay ang pangalan para sa connection
3. I-click ang **"Save"**

### I-load ang Saved Connection

1. I-click ang **"Saved Connections"** dropdown
2. Piliin ang connection
3. I-click ang **"Connect"**

### Burahin ang Saved Connection

1. I-right-click ang saved connection
2. Piliin ang **"Delete"**
3. Kumpirmahin ang pagbura

## Mga Custom Header

Magdagdag ng mga custom header para sa authentication o configuration:

### Mga Karaniwang Header

| Header | Layunin |
|--------|---------|
| `Authorization` | Bearer token authentication |
| `X-API-Key` | API key authentication |
| `Origin` | CORS origin header |
| `Cookie` | Session cookies |

### Pagdadagdag ng Header

1. I-click ang **"Headers"** na tab
2. I-click ang **"Add Header"**
3. Ilagay ang header name at value
4. I-click ang **"Save"**

## Pagkonekta sa pamamagitan ng SSH Tunnel

Para sa mga WebSocket server na hindi direktang accessible:

1. Mag-set up ng **Local Port Forwarding** sa SSH
2. I-forward ang WebSocket port sa localhost
3. Kumonekta sa `ws://localhost:forwarded-port`

### Halimbawa

1. SSH tunnel: `localhost:8080 → remote:8080`
2. WebSocket URL: `ws://localhost:8080/ws`

## Pag-troubleshoot

### Hindi Makakonekta

**Mga Posibleng Dahilan:**
- Maling URL format
- Server hindi tumatakbo
- Firewall blocking
- SSL certificate issues

**Mga Solusyon:**
1. I-verify ang URL format (ws:// o wss://)
2. Suriin kung tumatakbo ang server
3. Subukan sa browser developer tools
4. Suriin ang SSL certificate kung gumagamit ng wss://

### Bigla Naputol ang Koneksyon

**Mga Posibleng Dahilan:**
- Server timeout
- Network interruption
- Server restart

**Mga Solusyon:**
1. I-implement ang auto-reconnect
2. Magpadala ng ping/heartbeat messages
3. Suriin ang server logs

### Hindi Natatanggap ang mga Mensahe

**Mga Posibleng Dahilan:**
- Hindi naka-subscribe sa channel
- Maling message format
- Server-side filtering

**Mga Solusyon:**
1. I-verify ang subscription message
2. Suriin ang message format na inaasahan ng server
3. I-check ang server documentation

## Mga Keyboard Shortcut

| Shortcut | Aksyon |
|----------|--------|
| `Enter` | Magpadala ng mensahe |
| `Ctrl+Enter` | Bagong linya sa mensahe |
| `Ctrl+L` | I-clear ang message log |
| `Escape` | I-disconnect |

## Mga Tip

- Gamitin ang **wss://** para sa ligtas na koneksyon
- I-save ang mga madalas na ginagamit na **connection** para sa mabilis na pag-access
- Gamitin ang **JSON format** para sa structured na mga mensahe
- I-monitor ang **message log** para sa debugging
- Gamitin ang **SSH tunneling** para sa internal na mga server
