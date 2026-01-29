# App Lock

Protect your Marix application with App Lock. When enabled, the app automatically locks after a period of inactivity, preventing unauthorized access to your servers and credentials.

## App Lock Interface

![App Lock Interface](/applock.png)

## Enabling App Lock

1. Open **Settings** (gear icon in sidebar)
2. Find the **Security** section
3. Toggle **Enable App Lock**

## Lock Methods

Choose how the app should be locked:

| Method | Description | Security Level |
|--------|-------------|----------------|
| **Blur** | Blurs the screen content | Low - visual privacy only |
| **PIN** | Requires 4-6 digit PIN to unlock | Medium |
| **Password** | Requires password to unlock | High |

### Blur Mode

- Screen content becomes blurred
- Click anywhere to unlock
- Best for quick privacy in office environments

### PIN Mode

- Set a 4-6 digit numeric PIN
- Enter PIN to unlock
- Good balance of security and convenience

### Password Mode

- Set a custom password
- Enter password to unlock
- Highest security level

## Setting Up PIN or Password

When switching to PIN or Password mode:

1. Select the lock method
2. A dialog appears to set your credential
3. Enter your PIN/Password
4. Confirm by entering it again
5. Click **Save**

> **Note:** If you forget your PIN/Password, you'll need to restart the app. Your server data remains safe.

## Lock Timeout

Configure how long the app waits before locking:

| Timeout | Use Case |
|---------|----------|
| 1 minute | Maximum security |
| 2 minutes | High security |
| 5 minutes | Default, balanced |
| 10 minutes | Moderate security |
| 15 minutes | Casual use |
| 30 minutes | Low security |
| 60 minutes | Minimal protection |

The timer resets with any mouse movement, keyboard input, or click.

## Unlocking

### Blur Mode
- Click anywhere on the screen
- Move the mouse

### PIN/Password Mode
1. Enter your PIN or Password
2. Press **Enter** or click **Unlock**
3. App unlocks immediately

## Changing Credentials

To change your PIN or Password:

1. Go to **Settings** → **Security**
2. Click **Change PIN** or **Change Password**
3. Enter your new credential
4. Confirm and save

## Clearing Credentials

To remove PIN/Password and switch back to Blur:

1. Go to **Settings** → **Security**
2. Click **Clear Credential**
3. Lock method reverts to Blur

## How It Works

1. **Activity Tracking**: Marix monitors mouse, keyboard, and click events
2. **Inactivity Timer**: After no activity for the set timeout, app locks
3. **Instant Lock**: You can also lock manually (if implemented)
4. **Secure Storage**: PIN/Password stored securely using system keychain

## Security Considerations

### What App Lock Protects

- ✅ Visual access to your servers list
- ✅ Viewing saved credentials
- ✅ Accessing active terminal sessions
- ✅ Browsing SFTP file managers

### What App Lock Does NOT Protect

- ❌ Already established SSH connections (they remain active)
- ❌ Data on disk (use system encryption for that)
- ❌ Network traffic (use SSH/TLS for that)

## Best Practices

1. **Use Password mode** for sensitive environments
2. **Set shorter timeouts** in shared workspaces
3. **Use unique credentials** - don't reuse passwords
4. **Lock before leaving** your computer
5. **Combine with OS lock** for maximum security

## Troubleshooting

### Forgot PIN/Password

- Restart the application
- App Lock resets on restart
- Your server data is preserved

### App Locks Too Quickly

- Increase the timeout in Settings
- Check if you have active sessions that might prevent activity detection

### App Doesn't Lock

- Ensure App Lock is enabled
- Check the timeout setting
- Verify the app window has focus
