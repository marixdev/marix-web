# LAN Server Share

Share your server configurations with other Marix users on the same local network.

## LAN Server Share Interface

![LAN Server Share Interface](/servershare.png)

## Requirements

> ⚠️ **Important:** Both sender and receiver must have **LAN Discovery enabled**.
> 
> Click the 🌐 button in the header bar or use `Ctrl+Shift+L` to toggle.

- Both devices on the same network (WiFi/LAN)
- LAN Discovery enabled on both devices
- Marix running on both devices

## Use Cases

- Share server access with team members
- Set up a new computer quickly
- Transfer configurations between devices
- Onboard new team members

## Opening Server Share

### Method 1: Right-click Menu
1. In the Hosts list, right-click on a server
2. Select **"Share on LAN"**

### Method 2: Multi-select
1. Hold `Ctrl` (or `⌘` on Mac) and click multiple servers
2. Click the **"Share"** button that appears
3. Or right-click and select **"Share on LAN"**

## Sharing Servers (Sender)

### Step 1: Enable LAN Discovery
Click the **🌐** (globe) icon in the header bar.

### Step 2: Select Servers
- Right-click → "Share on LAN" for single server
- Or multi-select servers then click Share

### Step 3: Server Selection Modal
- Review selected servers
- Click **"Select All"** to share all servers
- Click **"Clear"** to deselect all
- Click tags to quickly select servers with that tag

### Step 4: Click "Share" Button

### Step 5: Configure Options

| Option | Description |
|--------|-------------|
| Include sensitive data ✅ | Share passwords and private keys |
| Include sensitive data ❌ | Strip passwords/keys (receiver enters manually) |

### Step 6: Note Pairing Code
The 6-digit **Pairing Code** is valid for 5 minutes.

### Step 7: Share Code
Tell the receiver your pairing code.

### Step 8: Send
Click **"Share on LAN"**

Status shows: "Sent X server(s). Waiting for receiver..."

## Receiving Servers (Receiver)

### Step 1: Enable LAN Discovery
Click the **🌐** (globe) icon in the header bar.

### Step 2: Wait for Notification
A popup appears when someone sends you servers.

Or go to Hosts → right-click empty area → "Receive Shared Servers"

### Step 3: Enter Pairing Code
Enter the 6-digit code from the sender.

### Step 4: Import
Click **"Decrypt & Import"**

### Step 5: Done!
Servers are imported with:
- All original settings
- An automatic **"LAN-Import"** tag added
- Passwords/keys (if sender included them)

Status shows: "Successfully imported X server(s)!"

## Security

- All transfers are **encrypted**
- 6-digit pairing code required
- Codes expire after 5 minutes
- No data passes through external servers
- Direct device-to-device transfer

## Troubleshooting

### No Devices Appear

1. Both devices on **same network** (WiFi/LAN)
2. **LAN Discovery ON** on both devices
3. Click "Refresh" to rescan
4. Check firewall isn't blocking Marix

### Pairing Code Expired

- Codes expire after 5 minutes
- Sender can click "Regenerate" for a new code

### "Wrong Pairing Code" Error

- Double-check the code with sender
- Codes are case-sensitive
- Request a new code if needed

### Servers Missing Passwords

- Sender may have disabled "Include sensitive data"
- Manually enter passwords after import
- Ask sender to reshare with sensitive data enabled
