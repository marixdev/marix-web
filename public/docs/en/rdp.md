# RDP Remote Desktop

Connect to Windows servers and computers using the Remote Desktop Protocol (RDP).

## Adding an RDP Server

1. Click **"Add New Host"**
2. Select **Protocol**: RDP
3. Fill in:
   - **Host/IP**: Windows server address
   - **Port**: 3389 (default)
   - **Username**: Windows username
   - **Password**: Windows password
   - **Domain**: (optional) Windows domain name
4. Click **Create**

## Import from .rdp File

Already have an RDP configuration file?

1. In the Add Server dialog, click **"Import .rdp file"**
2. Select your `.rdp` file
3. Fields auto-populate from the file
4. Adjust any settings if needed
5. Click **Create**

## Connecting to RDP

1. Double-click the RDP server in Hosts list
2. Remote desktop window opens within the application
3. You can interact with the Windows desktop normally

## RDP Controls

| Input | Behavior |
|-------|----------|
| **Mouse** | Click, drag, scroll work normally |
| **Keyboard** | All keys forwarded to remote |
| **Clipboard** | Copy/paste between local and remote |

## Disconnecting

- Click × on the session tab
- Or close the application
- Session state is preserved on the remote server

## Linux Requirements

RDP support on Linux requires FreeRDP. Marix **automatically detects** if FreeRDP is installed.

### Auto-Install

If FreeRDP is not found:
1. A notification appears when you try to connect
2. Click the **"Install"** button
3. Marix installs FreeRDP automatically
4. Reconnect after installation completes

### Manual Install

If you prefer to install manually:

**Ubuntu/Debian**
```bash
sudo apt install freerdp3-x11 xdotool
```

**Fedora**
```bash
sudo dnf install freerdp xdotool
```

**Arch Linux**
```bash
sudo pacman -S freerdp xdotool
```

## Display Settings

RDP sessions adapt to your window size. For best experience:
- Maximize the window for full desktop experience
- Resize window to adjust remote resolution
- Full-screen mode available via window controls

## Performance Tips

- **Reduce color depth** for slower connections
- **Disable visual effects** on the Windows side
- Use **wired connection** for best performance
- Close unnecessary applications on the remote machine

## Troubleshooting

### Connection Refused
- Verify Remote Desktop is enabled on Windows
- Check Windows Firewall allows RDP
- Confirm correct port (default 3389)

### Black Screen
- Wait a moment - initial connection may take time
- Try reconnecting
- Check remote machine isn't in sleep mode

### Slow Performance
- Lower screen resolution
- Reduce color depth
- Check network speed
- Close bandwidth-heavy applications

### Authentication Failed
- Verify username format:
  - Local: `username`
  - Domain: `DOMAIN\username` or `username@domain.com`
- Check password is correct
- Ensure account has Remote Desktop access rights
