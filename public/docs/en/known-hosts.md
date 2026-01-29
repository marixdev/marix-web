# Known Hosts

Known Hosts stores server fingerprints to detect if a server's identity changes (potential security issue).

## Known Hosts Interface

![Known Hosts Interface](/knownhosts.png)

## What are Known Hosts?

When you first connect to an SSH server, the server presents its fingerprint. Marix stores this to:
- Verify server identity on future connections
- Detect man-in-the-middle attacks
- Alert you if a server key changes unexpectedly

## Opening Known Hosts

Click **"Known Hosts"** in the sidebar.

## View Known Hosts

The list shows:

| Column | Description |
|--------|-------------|
| Host | Server hostname/IP |
| Port | SSH port |
| Key Type | SSH key algorithm (ED25519, RSA, ECDSA) |
| Fingerprint | Unique server identifier |
| Added | When the host was trusted |

## Search Known Hosts

1. Use the search box at the top
2. Search by hostname, IP, or fingerprint

## Filter by Key Type

1. Use the dropdown filter
2. Select: All, ED25519, RSA, or ECDSA

## Import Host from Server

Manually add a server's fingerprint without connecting:

1. Click **"Import from Host"** button
2. Enter:
   - Hostname or IP
   - Port (default 22)
3. Click **"Import"**
4. Server's fingerprint is fetched and stored

## Remove a Known Host

1. Find the host in the list
2. Click the **Delete** button (trash icon)
3. Confirm removal

### When to Remove

- Server was reinstalled and has a new key
- Server IP/hostname changed
- You no longer connect to this server

## Host Key Verification

When connecting to a new server:
1. Marix fetches the server's fingerprint
2. You're asked to verify and trust it
3. After accepting, it's stored in Known Hosts
4. Future connections are verified automatically

## Security Warnings

### "Host key has changed"
This warning appears when a server's fingerprint differs from the stored one.

**Possible causes:**
- Server was reinstalled
- Server's SSH key was regenerated
- ⚠️ **Man-in-the-middle attack** (rare but possible)

**What to do:**
1. Verify with the server administrator if the key changed legitimately
2. If confirmed, remove the old entry from Known Hosts
3. Reconnect and accept the new fingerprint
4. If suspicious, do not connect

## Best Practices

1. **Verify fingerprints** when connecting to new servers
2. **Don't ignore warnings** about changed host keys
3. **Regularly review** your Known Hosts list
4. **Remove old entries** for servers you no longer use
