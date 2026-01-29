# Troubleshooting

Common issues and solutions for Marix.

## Connection Issues

### "Connection refused"

**Causes:**
- Server is not running
- Wrong IP/hostname
- Wrong port
- Firewall blocking connection

**Solutions:**
1. Verify host/IP is correct
2. Check port is correct and open
3. Ensure server is running
4. Check firewall allows the connection
5. Try pinging the server

### "Connection timeout"

**Causes:**
- Server unreachable
- Network issues
- Firewall blocking

**Solutions:**
1. Check your internet connection
2. Verify server is online
3. Try from a different network
4. Check if VPN is needed

### "Authentication failed"

**Causes:**
- Wrong username
- Wrong password
- Wrong SSH key
- Key passphrase incorrect

**Solutions:**
1. Verify username is correct
2. Check password (case-sensitive)
3. Ensure correct SSH key is selected
4. Enter correct key passphrase
5. Verify user has SSH access on server

### "Host key verification failed"

**Causes:**
- Server was reinstalled
- Server's SSH key changed
- Potential security issue

**Solutions:**
1. Verify with server admin if key changed
2. Go to Known Hosts → remove old entry
3. Reconnect and accept new fingerprint
4. If suspicious, investigate before connecting

### "Permission denied (publickey)"

**Causes:**
- SSH key not accepted
- Key not in authorized_keys
- Wrong key selected

**Solutions:**
1. Verify public key is in server's `~/.ssh/authorized_keys`
2. Check key permissions: `chmod 600 ~/.ssh/authorized_keys`
3. Ensure correct key is selected in Marix
4. Try password authentication if available

## SFTP Issues

### "Permission denied" when uploading

**Causes:**
- No write permission on remote
- Wrong directory
- Disk full

**Solutions:**
1. Check write permissions on remote folder
2. Try uploading to home directory first
3. Check disk space on server
4. Use `sudo` if needed (via terminal)

### File transfer slow

**Causes:**
- Network speed
- Large file size
- Server load

**Solutions:**
1. Check your network speed
2. Large files take longer - be patient
3. Try during off-peak hours
4. Compress files before transfer

### "No such file or directory"

**Causes:**
- Path doesn't exist
- Symbolic link broken
- Permission to list directory

**Solutions:**
1. Verify path exists
2. Navigate manually to the location
3. Check parent directory permissions

## Terminal Issues

### Terminal shows garbled text

**Causes:**
- Encoding mismatch
- Terminal type incompatibility

**Solutions:**
1. Try a different terminal theme
2. Check server's locale settings
3. Reconnect to the server

### Copy/paste not working

**Solutions:**
1. Use `Ctrl+Shift+C` and `Ctrl+Shift+V`
2. **Copy text**: 
   - Select text with mouse → Copy
   - Or use `Ctrl+C`
3. **Paste text**: 
   - Right-click → Paste
   - Or use `Ctrl+V`3. Check if text is actually selected
4. Check if text is actually selected

### Terminal unresponsive

**Solutions:**
1. Wait a moment - command may be processing
2. Press `Ctrl+C` to cancel running command
3. Click Reconnect button
4. Close and reopen the tab

## RDP Issues

### Black screen after connecting

**Causes:**
- Initial connection delay
- Remote machine sleeping
- Graphics issues

**Solutions:**
1. Wait a moment for connection
2. Try reconnecting
3. Wake the remote machine first
4. Check remote machine isn't locked

### Slow RDP performance

**Solutions:**
1. Reduce color depth settings
2. Disable visual effects on Windows
3. Use wired connection
4. Close bandwidth-heavy applications
5. Lower remote resolution

## Application Issues

### Marix won't start

**Solutions:**
1. Restart your computer
2. Reinstall Marix
3. Check for conflicting software
4. Run as administrator (Windows)

### Settings not saved

**Causes:**
- No write permission
- Config file corrupted

**Solutions:**
1. Run Marix as administrator
2. Reset settings (Settings → Reset)
3. Delete config folder and restart

### High CPU/memory usage

**Solutions:**
1. Close unused connection tabs
2. Reduce number of open SFTP panels
3. Restart Marix
4. Update to latest version

## Backup Issues

### "Wrong password" when restoring

**Solutions:**
1. Make sure you're using the exact password
2. Passwords are case-sensitive
3. Check for leading/trailing spaces
4. Try backup from another provider

### Backup upload fails

**Solutions:**
1. Check internet connection
2. Verify OAuth connection is valid
3. Reconnect to the backup provider
4. Check storage quota isn't exceeded

## Getting Help

If your issue isn't listed here:

1. **Check for updates** - Latest version may fix your issue
2. **Search issues** on GitHub
3. **Report a bug** on [GitHub Issues](https://github.com/marixdev/marix/issues)
4. **Contact support** via the website

When reporting issues, include:
- Marix version
- Operating system
- Steps to reproduce
- Error messages (if any)
- Screenshots (if applicable)
