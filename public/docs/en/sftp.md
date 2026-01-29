# SFTP File Manager

SFTP (SSH File Transfer Protocol) provides secure file transfer over an encrypted SSH connection.

## Opening SFTP

### From Existing SSH Connection

1. Connect to an SSH server
2. Click the **SFTP** button at the top of the session
3. Or use keyboard shortcut: `Ctrl+Shift+O`

### Direct SFTP Connection

1. Right-click an SSH server in Hosts list
2. Select **"SFTP"** from context menu

## Interface Layout

![SFTP Interface](/sftp.png)

## Navigation Controls

| Button | Function |
|--------|----------|
| ← | Go back in history |
| → | Go forward in history |
| ↑ | Go to parent directory |
| 🏠 | Go to home directory |
| 🔄 | Refresh current directory |
| 🔍 | Search/filter files |
| 💾 | Select drive (Windows/Linux) |

## File Operations

### Download a File (Remote → Local)

1. Navigate to the file on the **REMOTE** (right) pane

**Method A: Drag & Drop**
- Click and drag the file to the LOCAL (left) pane
- Drop it in the desired folder

**Method B: Right-click**
- Right-click the file
- Select **"Download"**
- File downloads to current local folder

### Upload a File (Local → Remote)

1. Navigate to the file on the **LOCAL** (left) pane

**Method A: Drag & Drop**
- Click and drag the file to the REMOTE (right) pane
- Drop it in the desired folder

**Method B: Right-click**
- Right-click the file
- Select **"Upload"**
- File uploads to current remote folder

### Create New Folder

1. Navigate to the target directory
2. Right-click in empty space
3. Select **"New Folder"**
4. Enter folder name
5. Click OK

### Create New File

1. Navigate to the target directory
2. Right-click in empty space
3. Select **"New File"**
4. Enter filename
5. Click OK (creates empty file)

### Delete File or Folder

1. Right-click the file or folder
2. Select **"Delete"**
3. Confirm the deletion

### Rename File or Folder

1. Right-click the file or folder
2. Select **"Rename"**
3. Enter the new name
4. Click OK

## Change Permissions (chmod)

1. Right-click the file or folder (REMOTE pane)
2. Select **"Change Permissions"**
3. Enter permission in octal format (e.g., `755`, `644`)
4. Click OK

### Common Permission Values

| Value | Meaning | Use Case |
|-------|---------|----------|
| `755` | Owner: full, Others: read+execute | Folders, executables |
| `644` | Owner: read+write, Others: read | Regular files |
| `600` | Owner only | Private files, SSH keys |
| `777` | Everyone: full access | Not recommended |

## Edit Remote Files

1. Find a text file on the REMOTE pane
2. Double-click it (or right-click → Edit)
3. File opens in built-in editor
4. Make your changes
5. Click **Save** or press `Ctrl+S`
6. File is saved back to server

### Supported File Types

**Code files:**
`.js`, `.ts`, `.py`, `.php`, `.java`, `.c`, `.cpp`, `.go`, `.rs`, `.rb`

**Config files:**
`.json`, `.yml`, `.yaml`, `.toml`, `.ini`, `.conf`, `.env`

**Web files:**
`.html`, `.css`, `.scss`, `.vue`, `.svelte`

**Scripts:**
`.sh`, `.bash`, `.ps1`, `.bat`

**Other:**
`.txt`, `.md`, `.log`, `Dockerfile`, `Makefile`

## Compress Files

Create archives from files or folders on the remote server:

1. Right-click the file or folder (REMOTE pane)
2. Hover over **"Compress"**
3. Select format:
   - **ZIP** - Universal, works everywhere
   - **TAR.GZ** - Best for Linux/Unix
   - **TAR** - Uncompressed archive

The archive is created in the same directory.

## Extract Archives

Extract compressed files on the remote server:

1. Right-click an archive file (REMOTE pane)
2. Select **"Extract Here"**
3. Files are extracted to current directory

### Supported Archive Formats

| Format | Extensions |
|--------|------------|
| ZIP | `.zip` |
| TAR | `.tar`, `.tar.gz`, `.tgz`, `.tar.bz2`, `.tar.xz` |
| GZIP | `.gz` |
| BZIP2 | `.bz2` |
| XZ | `.xz` |
| 7-Zip | `.7z` |
| RAR | `.rar` |

> **Note:** Extraction requires the appropriate tools installed on the server (unzip, tar, 7z, unrar).

## File Properties

View detailed information about files and folders:

1. Right-click the file or folder
2. Select **"Properties"**
3. View details:

| Property | Description |
|----------|-------------|
| Name | File or folder name |
| Path | Full path location |
| Size | File size in bytes/KB/MB/GB |
| Type | File or Directory |
| Permissions | Read/write/execute (e.g., 755) |
| Owner | User owner (remote only) |
| Group | Group owner (remote only) |
| Modified | Last modification date |
| Created | Creation date (if available) |
| Accessed | Last access date |

## Transfer Queue

When transferring multiple files:
- Progress bar shows overall completion
- Individual file progress displayed
- Click ✕ to cancel a transfer
- Failed transfers can be retried

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+Shift+O` | Toggle Terminal/SFTP |
| `F2` | Rename selected |
| `Delete` | Delete selected |
| `Ctrl+C` | Copy path |
| `Ctrl+R` | Refresh directory |

## Tips

- **Drag entire folders** to transfer recursively
- **Double-click** a folder to enter it
- Use **search/filter** to find files quickly
- **Overwrite confirmation** prevents accidental data loss
