# Backup & Restore

Protect your data with encrypted backups. Marix supports 6 backup providers, all using Argon2id encryption.

> 💡 **Tip:** Once you connect a cloud account for backup, you don't need to reconnect for restore on the same device. Your authentication is saved locally.

## Backup & Restore Interface

### Backup
![Backup Interface](/backup.png)

### Restore
![Restore Interface](/restore.png)

## What's Backed Up

- All servers and credentials (passwords, private keys)
- SSH keys from Keychain
- Port forward configurations
- 2FA/TOTP secrets
- Application settings
- Cloudflare API token

## Password Requirements

| Requirement | Description |
|-------------|-------------|
| Length | At least 10 characters |
| Uppercase | Include uppercase letters |
| Lowercase | Include lowercase letters |
| Numbers | Include at least one number |
| Special | Include special characters |

> ⚠️ **Warning:** We cannot recover your password. If you forget it, your backup is permanently inaccessible.

## Local Backup

Save an encrypted backup file to your computer.

### Create Local Backup

1. Go to **Settings** → Click **"Create Backup"**
2. Select the **Local** tab (folder icon)
3. Enter a **strong password** (10+ characters)
4. Confirm the password
5. Click **"Create Backup"**
6. Choose where to save the `.marix` file
7. Store this file safely

### Restore from Local Backup

1. Go to **Settings** → Click **"Restore Backup"**
2. Select the **Local** tab
3. Click **"Select File"** and choose your `.marix` backup file
4. Enter the **password** you used when creating the backup
5. Click **"Restore"**
6. Application restarts with all data restored

## Google Drive

Sync your backup to Google Drive.

### Connect

1. Select the **Google Drive** tab
2. Click **"Connect"**
3. Sign in to your Google account
4. Grant Marix permission
5. You'll see "Connected" with your email

### Create Backup

1. After connecting, enter a strong password
2. Confirm the password
3. Click **"Create Backup"**
4. Status shows: "Backup created successfully"

### Restore

1. If already connected, your account is remembered
2. If a backup exists, you'll see "Last backup: [date]"
3. Enter the password
4. Click **"Restore"**

## GitHub

Store your backup in a private GitHub Gist.

### Connect

1. Select the **GitHub** tab
2. Click **"Connect"**
3. A **Device Code** appears (e.g., `ABCD-1234`)
4. Go to: https://github.com/login/device
5. Enter the code
6. Authorize Marix

### Create Backup

1. Enter a strong password
2. Confirm the password
3. Click **"Create Backup"**
4. Backup is stored as a private Gist

### Restore

1. If already connected, your account is remembered
2. If a backup exists, you'll see "Last backup: [date]"
3. Enter the password
4. Click **"Restore"**

### Where's My Backup?

Go to https://gist.github.com → Your private gists → Look for "marix-backup"

## GitLab

Store your backup in a GitLab Snippet.

### Connect

1. Select the **GitLab** tab
2. Click **"Connect"**
3. Sign in to GitLab
4. Authorize Marix

### Create Backup

1. Enter a strong password
2. Confirm the password
3. Click **"Create Backup"**
4. Backup is stored as a private Snippet

### Restore

1. If already connected, your account is remembered
2. If a backup exists, you'll see "Last backup: [date]"
3. Enter the password
4. Click **"Restore"**

## Box.net

Store your backup in Box cloud storage.

### Connect

1. Select the **Box.net** tab
2. Click **"Connect to Box.net"**
3. Sign in to your Box.net account
4. Authorize Marix

### Create Backup

1. Enter a strong password
2. Confirm the password
3. Click **"Create Backup"**

### Restore

1. If already connected, your account is remembered
2. If a backup exists, you'll see "Last backup: [date]"
3. Enter the password
4. Click **"Restore"**

## OneDrive

Sync your backup to Microsoft OneDrive.

### Connect

1. Select the **OneDrive** tab
2. Click **"Connect"**
3. Sign in to your Microsoft account
4. Grant Marix permission
5. You'll see "Connected" with your email

### Create Backup

1. After connecting, enter a strong password
2. Confirm the password
3. Click **"Create Backup"**
4. Status shows: "Backup created successfully"

### Restore

1. If already connected, your account is remembered
2. If a backup exists, you'll see "Last backup: [date]"
3. Enter the password
4. Click **"Restore"**

## Provider Comparison

| Provider | Storage Location | Pros | Cons |
|----------|------------------|------|------|
| **Local** | Your computer | Full control, offline | Must manage file manually |
| **Google Drive** | Google cloud | Auto-sync, widely used | Requires Google account |
| **OneDrive** | Microsoft cloud | Integrated with Windows | Requires Microsoft account |
| **GitHub** | GitHub Gist | Free, version control | Requires GitHub account |
| **GitLab** | GitLab Snippet | Free, self-hosted option | Requires GitLab account |
| **Box.net** | Box.net cloud | Enterprise-friendly | Requires Box account |

## Best Practices

1. **Use different passwords** for different providers
2. **Store your password** in a password manager
3. **Test restore** periodically to ensure backup works
4. **Keep local backup** as secondary option
5. **Don't share** backup files - they contain sensitive data
6. **Update backups** regularly after adding new servers
