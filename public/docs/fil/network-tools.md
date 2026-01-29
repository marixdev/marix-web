# Mga Network Tool

Isang komprehensibong suite ng mga network diagnostic tool na built-in sa Marix.

## Interface ng Network Tools

![Network Tools Interface](/loockup.png)

## Pagbukas ng Network Tools

I-click ang **"Lookup"** sa sidebar.

## Mga Available na Tool

| Tool | Function | Halimbawa ng Input |
|------|----------|-------------------|
| A Record | Kunin ang IPv4 address | example.com |
| AAAA Record | Kunin ang IPv6 address | example.com |
| MX Lookup | Kunin ang mga mail server | example.com |
| TXT Record | Kunin ang mga TXT record | example.com |
| SPF Check | I-verify ang SPF record | example.com |
| CNAME Lookup | Kunin ang canonical name | www.example.com |
| NS Lookup | Kunin ang mga name server | example.com |
| SOA Record | Kunin ang mga SOA detail | example.com |
| PTR Lookup | Reverse DNS | 8.8.8.8 |
| Ping | Mag-ping ng host | example.com |
| Traceroute | Trace ng network path | example.com |
| TCP Port | Subukan kung bukas ang port | example.com |
| Web Check | Suriin ang status ng website | example.com |
| Blacklist | Suriin ang mga IP blacklist | 1.2.3.4 |
| DNS Check | Buong DNS analysis | example.com |
| IP Info | Kunin ang IP ownership info | 8.8.8.8 |
| WHOIS | Impormasyon sa domain registration | example.com |

## Paggamit ng Network Tool

### Hakbang 1: Pumili ng Tool
I-click ang isang tool mula sa kaliwang sidebar.

### Hakbang 2: Ilagay ang Target
- Domain name, IP address, o hostname
- Para sa TCP Port: ilagay din ang port number

### Hakbang 3: Patakbuhin
I-click ang **"Run"** na button o pindutin ang Enter.

### Hakbang 4: Tingnan ang mga Resulta
- **Green badge** = Tagumpay
- **Red badge** = Nabigo/Error
- Ipinapakita ng timestamp kung kailan pinatakbo

## Mga DNS Tool

### A Record
Ibinabalik ang (mga) IPv4 address para sa isang domain.

```
example.com → 93.184.216.34
```

### AAAA Record
Ibinabalik ang (mga) IPv6 address para sa isang domain.

```
example.com → 2606:2800:220:1:248:1893:25c8:1946
```

### MX Lookup
Ibinabalik ang mga mail exchange server para sa isang domain.

```
example.com →
  10 mail1.example.com
  20 mail2.example.com
```

### TXT Record
Ibinabalik ang mga text record (kadalasang ginagamit para sa verification, SPF, DKIM).

```
example.com → "v=spf1 include:_spf.google.com ~all"
```

### CNAME Lookup
Ibinabalik ang canonical name (alias) para sa isang subdomain.

```
www.example.com → example.com
```

### NS Lookup
Ibinabalik ang mga name server para sa isang domain.

```
example.com →
  ns1.example.com
  ns2.example.com
```

### PTR Lookup (Reverse DNS)
Ibinabalik ang hostname para sa isang IP address.

```
8.8.8.8 → dns.google
```

## Mga Network Diagnostic

### Ping
Subukan ang connectivity at sukatin ang latency.

```
Pinging example.com:
  Reply: 64 bytes, time=23ms
  Reply: 64 bytes, time=21ms
  Average: 22ms
```

### Traceroute
Trace ang network path patungo sa isang destination.

```
1  router.local (192.168.1.1) 1ms
2  isp-gateway (10.0.0.1) 5ms
3  backbone.isp.net 12ms
...
```

### TCP Port Test
Suriin kung bukas ang isang partikular na port.

**Mabilisang port button:** SSH(22), HTTP(80), HTTPS(443), MySQL(3306), atbp.

```
example.com:443 → Open
example.com:22 → Closed/Filtered
```

### Web Check
Subukan ang HTTP/HTTPS connectivity at response.

```
https://example.com
  Status: 200 OK
  Response time: 145ms
  SSL: Valid
```

## Mga IP Tool

### IP Info
Kunin ang impormasyon sa pagmamay-ari at lokasyon para sa isang IP.

```
8.8.8.8 →
  Organization: Google LLC
  Country: United States
  ASN: AS15169
```

### Blacklist Check
Suriin kung nasa spam/abuse blacklist ang isang IP.

```
Checking 1.2.3.4:
  ✅ Spamhaus: Clean
  ✅ Barracuda: Clean
  ⚠️ SORBS: Listed
```

## Mga Domain Tool

### WHOIS
Kunin ang impormasyon sa domain registration.

```
example.com →
  Registrar: Example Registrar
  Created: 1995-08-14
  Expires: 2025-08-13
  Status: clientTransferProhibited
```

### DNS Check
Komprehensibong DNS health check.

```
Checking example.com:
  ✅ NS records found
  ✅ A record resolves
  ✅ MX records configured
  ✅ SPF record valid
```

## Mga Tip

- **Kopyahin ang mga resulta** sa pamamagitan ng pagpili at paggamit ng `Ctrl+C`
- **Magpatakbo ng maramihang check** sa parehong domain
- Ipinapakita ng mga resulta ang **timestamp** para sa sanggunian
- Gamitin ang **IP Info** para mag-imbestiga ng hindi kilalang mga IP
- **Blacklist check** bago magpadala ng mga email mula sa bagong IP
