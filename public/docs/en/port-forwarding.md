# Port Forwarding (SSH Tunnels)

SSH tunnels securely route traffic through an SSH connection.

## Port Forwarding Interface

![Port Forwarding Interface](/portfoward.png)

## Types of Port Forwarding

| Type | Direction | Use Case |
|------|-----------|----------|
| **Local** | Remote → Local | Access remote service through local port |
| **Remote** | Local → Remote | Expose local service to remote network |
| **Dynamic** | SOCKS Proxy | Create a SOCKS proxy through SSH |

## Opening Port Forwarding

Click **"Port Forward"** in the sidebar.

## Create a Port Forward

### Step 1: Open Dialog
Click **"Add Forward"** button

### Step 2: Configure

| Field | Description | Example |
|-------|-------------|---------|
| Name | Descriptive name | "MySQL to localhost" |
| Type | Local, Remote, or Dynamic | Local |
| Server | SSH server to tunnel through | My VPS |
| Local Host | Local bind address | 127.0.0.1 |
| Local Port | Local port number | 3307 |
| Remote Host | Remote destination | 127.0.0.1 |
| Remote Port | Remote port | 3306 |

### Step 3: Save
Click **"Add"** or **"Save"**

## Use Case Examples

### Local Forward: Access Remote MySQL

Access your server's MySQL database from your local machine:

| Setting | Value |
|---------|-------|
| Type | Local |
| Local | 127.0.0.1:3307 |
| Remote | 127.0.0.1:3306 |

**Usage:** Connect to `localhost:3307` to reach server's MySQL.

### Remote Forward: Expose Local App

Let the server access your local development server:

| Setting | Value |
|---------|-------|
| Type | Remote |
| Local | 127.0.0.1:3000 |
| Remote | 0.0.0.0:8080 |

**Usage:** Server's port 8080 connects to your localhost:3000.

### Dynamic: SOCKS Proxy

Create a SOCKS5 proxy for browsing through the server:

| Setting | Value |
|---------|-------|
| Type | Dynamic |
| Local | 127.0.0.1:1080 |

**Usage:** Configure apps to use SOCKS5 proxy at `localhost:1080`.

## Manage Port Forwards

### Start
1. Find the forward in the list
2. Click the **Start** button (▶)
3. Status changes to "Connected"

### Stop
1. Find the running forward
2. Click the **Stop** button (■)
3. Status changes to "Disconnected"

### Edit
1. **Stop** the forward if running
2. Click the **Edit** button (pencil)
3. Modify settings
4. Click **Save**

### Delete
1. Stop the forward if running
2. Click the **Delete** button (trash)
3. Confirm deletion

## Monitor Status

The list shows:
- **Status indicator**: Green = connected, Red = error
- **Connection count**: Active connections
- **Bytes transferred**: In/out traffic

## Common Use Cases

| Service | Local Port | Remote Port | Type |
|---------|------------|-------------|------|
| MySQL | 3307 | 3306 | Local |
| PostgreSQL | 5433 | 5432 | Local |
| Redis | 6380 | 6379 | Local |
| MongoDB | 27018 | 27017 | Local |
| Web App | 8080 | 80 | Local |
| Jupyter | 8889 | 8888 | Local |

## Troubleshooting

### Port Already in Use
- Choose a different local port
- Check if another application is using that port
- Stop conflicting services

### Connection Refused
- Verify the remote service is running
- Check firewall on the server
- Ensure correct remote host/port

### Tunnel Drops
- Check SSH connection stability
- Server may have timeout settings
- Consider using keep-alive
