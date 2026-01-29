# Two-Factor Authentication (2FA/TOTP)

Built-in TOTP code generator, like Google Authenticator. Store your 2FA secrets and get codes without needing your phone.

## 2FA Interface

![2FA Interface](/2fa.png)

## Opening 2FA

Click **"2FA"** in the sidebar.

## Add a New 2FA Account

### Step 1: Open Dialog
Click **"Add Account"** button

### Step 2: Enter Details

| Field | Description | Required |
|-------|-------------|----------|
| Account Name | Label for this account (e.g., "GitHub", "AWS") | No (auto-named) |
| Secret Key | The TOTP secret (from QR code setup page) | Yes |

### Step 3: Save
Click **"Add"**

## How to Get the Secret Key

When enabling 2FA on a website:

1. Look for **"Can't scan QR code?"** or **"Manual entry"**
2. Copy the secret key (usually uppercase letters and numbers)
3. Paste into Marix

Example secret key format:
```
JBSWY3DPEHPK3PXP
```

## Using 2FA Codes

1. Find your account in the list
2. The 6-digit code displays next to it
3. A countdown timer shows seconds until code refreshes
4. Click the **Copy** button to copy code to clipboard

### Timer
- Codes refresh every **30 seconds**
- Circular progress indicator shows time remaining
- Wait for new code if current one is about to expire

## Edit Account Name

1. Click the **Edit** button next to the account
2. Enter new name
3. Press Enter or click Save

## Delete a 2FA Account

1. Click the **Delete** button (trash icon)
2. Confirm deletion

> ⚠️ **Warning:** Deleting removes the secret. Make sure you have backup access to the associated account before deleting.

## Common Services

Here are some popular services that support TOTP:

| Service | 2FA Settings Location |
|---------|----------------------|
| GitHub | Settings → Password and authentication |
| AWS | IAM → Security credentials |
| Google | Google Account → Security |
| Microsoft | Security settings → Two-step verification |
| Cloudflare | Profile → Authentication |
| DigitalOcean | Account → Security |
| Linode | My Profile → Password & Authentication |

## Best Practices

1. **Back up your secrets** - Store secret keys safely
2. **Keep recovery codes** - Save the backup codes provided by services
3. **Use descriptive names** - Easy to identify accounts quickly
4. **Test codes before relying on them** - Verify they work immediately after adding
5. **Time sync** - Ensure your computer's clock is accurate

## Troubleshooting

### Codes Not Working

1. **Check time sync** - Your computer clock must be accurate
2. **Verify secret key** - Re-enter if copied incorrectly
3. **Wait for next code** - Current code may be expiring

### Lost Access

If you lose access to Marix:
1. Use **recovery codes** provided by the service
2. Contact service support for account recovery
3. This is why backing up secrets is important!
