# Cloudflare DNS Manager

Manage your Cloudflare DNS records directly from Marix.

## Cloudflare DNS Manager Interface

![Cloudflare DNS Manager Interface](/cf.png)

## Setup

### Step 1: Get API Token

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to Profile → API Tokens
3. Click "Create Token"
4. Use "Edit zone DNS" template or create custom with:
   - Zone.DNS: Edit
   - Zone.Zone: Read
5. Copy the token

### Step 2: Configure in Marix

1. Go to **Settings** in sidebar
2. Find **"Cloudflare API Token"** section
3. Click **"Add Token"**
4. Paste your token
5. Click **"Save"**

## Using Cloudflare DNS

1. Click **"Cloudflare"** in sidebar
2. Your domains load in a dropdown
3. Select a domain
4. DNS records for that domain appear

## View DNS Records

The table shows:

| Column | Description |
|--------|-------------|
| Type | Record type (A, AAAA, CNAME, MX, TXT, etc.) |
| Name | Record name/subdomain |
| Content | Record value (IP, hostname, text) |
| TTL | Time-to-live (Auto or seconds) |
| Proxy | Proxied through Cloudflare or DNS only |

## Add a DNS Record

### Step 1: Open Dialog
Click **"Add Record"** button

### Step 2: Fill in Details

| Field | Description |
|-------|-------------|
| Type | Select: A, AAAA, CNAME, MX, TXT, SRV, etc. |
| Name | Subdomain (e.g., "www") or "@" for root |
| Content | The value (IP for A, hostname for CNAME, etc.) |
| TTL | Time-to-live: Auto or custom seconds |
| Proxy | Toggle: Proxied (orange cloud) or DNS only (gray) |
| Comment | Optional note |

### Step 3: Create
Click **"Create"**

## Common Record Types

### A Record
Points a domain to an IPv4 address.

| Field | Example |
|-------|---------|
| Type | A |
| Name | @ (or www) |
| Content | 192.168.1.100 |

### AAAA Record
Points a domain to an IPv6 address.

| Field | Example |
|-------|---------|
| Type | AAAA |
| Name | @ |
| Content | 2001:db8::1 |

### CNAME Record
Creates an alias to another domain.

| Field | Example |
|-------|---------|
| Type | CNAME |
| Name | www |
| Content | example.com |

### MX Record
Specifies mail servers.

| Field | Example |
|-------|---------|
| Type | MX |
| Name | @ |
| Content | mail.example.com |
| Priority | 10 |

### TXT Record
Stores text data (SPF, DKIM, verification).

| Field | Example |
|-------|---------|
| Type | TXT |
| Name | @ |
| Content | v=spf1 include:_spf.google.com ~all |

## Edit a DNS Record

1. Find the record in the table
2. Click the **Edit** button (pencil icon)
3. Modify fields
4. Click **"Save"**

## Delete a DNS Record

1. Find the record
2. Click the **Delete** button (trash icon)
3. Confirm deletion

## Proxy Status

| Icon | Status | Effect |
|------|--------|--------|
| 🟠 Orange cloud | Proxied | Traffic goes through Cloudflare CDN |
| ⚪ Gray cloud | DNS only | Direct connection to origin |

### When to Use Proxy

**Proxied (Orange):**
- Web servers (HTTP/HTTPS)
- Want DDoS protection
- Want CDN caching

**DNS Only (Gray):**
- SSH, FTP, mail servers
- Non-HTTP services
- Need direct IP connection

## Refresh Records

Click the **Refresh** button next to the domain dropdown to reload records.

## Tips

- **TTL Auto** is recommended for most cases
- **Test changes** using DNS lookup tools
- **Backup records** before making major changes
- **Propagation** may take up to 48 hours globally
