# SSH Key Manager

Manage SSH keys for passwordless authentication to your servers.

## SSH Key Manager Interface

![SSH Key Manager Interface](/sshkey.png)

## Opening SSH Key Manager

Click **"SSH Key"** in the sidebar menu.

## Generate a New SSH Key

### Step 1: Open Generator
Click **"Generate Key"** button

### Step 2: Fill in Details

| Field | Description | Required |
|-------|-------------|----------|
| Key Name | A name to identify this key (e.g., "work-laptop") | Yes |
| Key Type | ed25519 (recommended), RSA, or ECDSA | Yes |
| Passphrase | Password to encrypt the key (optional but recommended) | No |
| Comment | Additional note (e.g., email address) | No |

### Step 3: Generate
Click **"Generate"**

### Step 4: Done
The key appears in your list with:
- Name
- Type badge (ED25519, RSA, ECDSA)
- Fingerprint
- Creation date

## Key Types Comparison

| Type | Security | Compatibility | Recommendation |
|------|----------|---------------|----------------|
| **ED25519** | Excellent | Modern servers | ✅ Recommended |
| **RSA (4096)** | Very Good | Universal | Good for older systems |
| **ECDSA** | Good | Most servers | Alternative to ED25519 |

## Import an Existing Key

### Step 1: Open Importer
Click **"Import Key"** button

### Step 2: Provide Key Data

| Field | Description | Required |
|-------|-------------|----------|
| Key Name | A name for this key | Yes |
| Private Key | Paste key content OR click "Select File" | Yes |
| Comment | Additional note | No |

### Step 3: Import
Click **"Import"**

## View Public Key

1. Click on a key in the list
2. The details panel shows on the right
3. Click **"Show Public Key"**
4. Copy the public key to add to your server's `~/.ssh/authorized_keys`

## Export a Key

1. Find the key in the list
2. Click the **Export** button (or right-click → Export)
3. Choose:
   - **Export Public Key Only** - Safer, for sharing
   - **Export Both Keys** - Private + Public (keep secure!)
4. Select save location
5. Keys are saved as files

## Delete a Key

1. Find the key in the list
2. Click the **Delete** button (trash icon)
3. Confirm deletion

> ⚠️ **Warning:** Deleted keys cannot be recovered. Make sure you have backups if needed.

## Use a Key for Server Connection

1. When adding/editing a server
2. Set Authentication to **"SSH Key"**
3. In the **"SSH Key from Keychain"** dropdown
4. Select your imported key
5. If key has passphrase, enter it in the Passphrase field

## Add Public Key to Server

To enable passwordless login, add your public key to the server:

### Method 1: Manual
```bash
# On your local machine, copy the public key
# Then on the server:
echo "your-public-key-here" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

### Method 2: Using ssh-copy-id (if available)
```bash
ssh-copy-id -i ~/.ssh/your_key.pub user@server
```

## Best Practices

1. **Use ED25519** for new keys when possible
2. **Add a passphrase** for additional security
3. **Use different keys** for different purposes (work, personal)
4. **Back up your keys** securely
5. **Never share private keys** - only share public keys
6. **Rotate keys periodically** for security
