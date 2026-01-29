# FTP/FTPS File Transfer

Marix supports FTP and FTPS protocols for connecting to file servers that don't support SSH.

## Interface Layout

![FTP Interface](/ftp.png)

## Adding an FTP Server

1. Click **"Add New Host"**
2. Select **Protocol**: FTP or FTPS
3. Fill in:
   - **Host/IP**: FTP server address
   - **Port**: 21 (FTP) or 990 (FTPS)
   - **Username**: FTP username
   - **Password**: FTP password
4. Click **Create**

## FTP vs FTPS

| Feature | FTP | FTPS |
|---------|-----|------|
| Encryption | None | TLS/SSL |
| Default Port | 21 | 990 |
| Security | Low | High |
| Use Case | Legacy systems | Secure transfers |

> **Recommendation**: Use FTPS when available for encrypted file transfers.

## Connecting to FTP

1. Double-click the FTP server in Hosts list
2. Connection opens directly in **file browser mode**
3. No terminal is available (FTP is file transfer only)

## File Operations

All file operations work the same as SFTP:

### Transfer Files
- **Drag & drop** to transfer between local and remote
- **Right-click** → Download/Upload

### File Management
- **Create folders**: Right-click → New Folder
- **Rename files**: Right-click → Rename
- **Delete files**: Right-click → Delete

### Navigation
- Use toolbar buttons: Back, Forward, Up, Home
- Double-click folders to enter
- Use search to filter files

## Limitations

FTP does not support:
- **chmod** (change permissions)
- **Symbolic links**
- **File editing** (must download, edit, re-upload)

## Passive vs Active Mode

Marix uses **passive mode** by default, which works better with:
- NAT routers
- Firewalls
- Most modern network configurations

## Troubleshooting

### Connection Timeout
- Check if the server allows your IP
- Verify firewall rules on both ends
- Try different ports if configured

### Authentication Failed
- Verify username and password
- Check if FTP user is enabled on server
- Some servers require specific login formats

### Transfer Fails
- Check available disk space
- Verify file permissions on server
- Large files may timeout - check server limits
