# Network Tools

A comprehensive suite of network diagnostic tools built into Marix.

## Network Tools Interface

![Network Tools Interface](/lookup.png)

## Opening Network Tools

Click **"Lookup"** in the sidebar.

## Available Tools

| Tool | Function | Input Example |
|------|----------|---------------|
| A Record | Get IPv4 address | example.com |
| AAAA Record | Get IPv6 address | example.com |
| MX Lookup | Get mail servers | example.com |
| TXT Record | Get TXT records | example.com |
| SPF Check | Verify SPF record | example.com |
| CNAME Lookup | Get canonical name | www.example.com |
| NS Lookup | Get name servers | example.com |
| SOA Record | Get SOA details | example.com |
| PTR Lookup | Reverse DNS | 8.8.8.8 |
| Ping | Ping a host | example.com |
| Traceroute | Trace network path | example.com |
| TCP Port | Test if port is open | example.com |
| Web Check | Check website status | example.com |
| Blacklist | Check IP blacklists | 1.2.3.4 |
| DNS Check | Full DNS analysis | example.com |
| IP Info | Get IP ownership info | 8.8.8.8 |
| WHOIS | Domain registration info | example.com |

## Using a Network Tool

### Step 1: Select Tool
Click a tool from the left sidebar.

### Step 2: Enter Target
- Domain name, IP address, or hostname
- For TCP Port: also enter port number

### Step 3: Run
Click **"Run"** button or press Enter.

### Step 4: View Results
- **Green badge** = Success
- **Red badge** = Failed/Error
- Timestamp shows when run

## DNS Tools

### A Record
Returns the IPv4 address(es) for a domain.

```
example.com → 93.184.216.34
```

### AAAA Record
Returns the IPv6 address(es) for a domain.

```
example.com → 2606:2800:220:1:248:1893:25c8:1946
```

### MX Lookup
Returns mail exchange servers for a domain.

```
example.com →
  10 mail1.example.com
  20 mail2.example.com
```

### TXT Record
Returns text records (often used for verification, SPF, DKIM).

```
example.com → "v=spf1 include:_spf.google.com ~all"
```

### CNAME Lookup
Returns the canonical name (alias) for a subdomain.

```
www.example.com → example.com
```

### NS Lookup
Returns name servers for a domain.

```
example.com →
  ns1.example.com
  ns2.example.com
```

### PTR Lookup (Reverse DNS)
Returns the hostname for an IP address.

```
8.8.8.8 → dns.google
```

## Network Diagnostics

### Ping
Test connectivity and measure latency.

```
Pinging example.com:
  Reply: 64 bytes, time=23ms
  Reply: 64 bytes, time=21ms
  Average: 22ms
```

### Traceroute
Trace the network path to a destination.

```
1  router.local (192.168.1.1) 1ms
2  isp-gateway (10.0.0.1) 5ms
3  backbone.isp.net 12ms
...
```

### TCP Port Test
Check if a specific port is open.

**Quick port buttons:** SSH(22), HTTP(80), HTTPS(443), MySQL(3306), etc.

```
example.com:443 → Open
example.com:22 → Closed/Filtered
```

### Web Check
Test HTTP/HTTPS connectivity and response.

```
https://example.com
  Status: 200 OK
  Response time: 145ms
  SSL: Valid
```

## IP Tools

### IP Info
Get ownership and location information for an IP.

```
8.8.8.8 →
  Organization: Google LLC
  Country: United States
  ASN: AS15169
```

### Blacklist Check
Check if an IP is on spam/abuse blacklists.

```
Checking 1.2.3.4:
  ✅ Spamhaus: Clean
  ✅ Barracuda: Clean
  ⚠️ SORBS: Listed
```

## Domain Tools

### WHOIS
Get domain registration information.

```
example.com →
  Registrar: Example Registrar
  Created: 1995-08-14
  Expires: 2025-08-13
  Status: clientTransferProhibited
```

### DNS Check
Comprehensive DNS health check.

```
Checking example.com:
  ✅ NS records found
  ✅ A record resolves
  ✅ MX records configured
  ✅ SPF record valid
```

## Tips

- **Copy results** by selecting and using `Ctrl+C`
- **Run multiple checks** on the same domain
- Results show **timestamps** for reference
- Use **IP Info** to investigate unknown IPs
- **Blacklist check** before sending emails from a new IP
