# Database Client

Marix includes a built-in database client for connecting to and managing database servers directly from the application.

## Database Client Interface

![Database Client Interface](/database.png)

---

## Supported Databases

| Database | Protocol | Features |
|----------|----------|----------|
| **MySQL / MariaDB** | `mysql` | Query editor, table browser, data viewer, structure inspector |
| **PostgreSQL** | `postgresql` | Query editor, table browser, data viewer, structure inspector |
| **MongoDB** | `mongodb` | Collection browser, document viewer, query interface |
| **Redis** | `redis` | Key-value browser, command interface |
| **SQLite** | `sqlite` | Local file support, full SQL editor |

---

## Adding a Database Server

1. Click the **+ Add** button in the sidebar
2. Select **Database** tab (or the database icon)
3. Choose your database type

### MySQL / MariaDB / PostgreSQL

| Field | Description | Example |
|-------|-------------|---------|
| Name | Display name | `Production MySQL` |
| Host | Server hostname or IP | `db.example.com` |
| Port | Database port | `3306` (MySQL) / `5432` (PostgreSQL) |
| Username | Database user | `root` |
| Password | User password | `••••••••` |
| Database | Default database (optional) | `myapp_production` |
| SSL | Enable SSL/TLS | ☑️ Enabled |

### MongoDB

| Field | Description | Example |
|-------|-------------|---------|
| Name | Display name | `MongoDB Atlas` |
| Connection String | Full MongoDB URI | `mongodb+srv://user:pass@cluster.mongodb.net/` |
| Host | Server hostname | `localhost` |
| Port | MongoDB port | `27017` |
| Database | Default database | `myapp` |

### Redis

| Field | Description | Example |
|-------|-------------|---------|
| Name | Display name | `Redis Cache` |
| Host | Server hostname | `redis.example.com` |
| Port | Redis port | `6379` |
| Password | Auth password (optional) | `••••••••` |
| Database | Database number | `0` |

### SQLite

| Field | Description | Example |
|-------|-------------|---------|
| Name | Display name | `Local SQLite` |
| File Path | Path to .db file | `/home/user/app.db` |

---

## Database Client Interface

### 📊 Data Tab

Browse and view table data:

- **Select database** from dropdown (if multiple)
- **Click a table** in the sidebar to view its data
- **Pagination** - Navigate through rows (100 per page default)
- **Column sorting** - Click column headers to sort
- **Quick filter** - Search within displayed data

### ⚡ Query Tab

Write and execute SQL queries with:

- **Syntax highlighting** - SQL keywords, strings, numbers
- **Execute** - Run query with `Ctrl+Enter` or Execute button
- **Results grid** - View query results in a table
- **Export** - Download results as CSV or JSON
- **Execution time** - See how long queries take

### 🏗️ Structure Tab

Inspect table schemas showing:

- Column names and data types
- Primary keys, foreign keys, unique constraints
- Nullable columns and default values
- Auto-increment settings

### 🔗 ERD Tab

View Entity-Relationship Diagram:

- Visual representation of tables and relationships
- Foreign key connections shown as lines
- Drag and zoom to navigate large schemas
- Export as image (PNG)

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl/Cmd + Enter` | Execute query |
| `Ctrl/Cmd + S` | Save query to file |
| `Ctrl/Cmd + O` | Open query from file |
| `Ctrl/Cmd + Shift + F` | Format SQL |
| `Escape` | Cancel running query |

---

## Connection Security

### SSL/TLS Encryption

Enable **SSL** checkbox when adding server. For custom certificates:

- CA Certificate path
- Client Certificate path (optional)
- Client Key path (optional)

### SSH Tunnel

Connect through an SSH tunnel:

1. First add an SSH server in Marix
2. When adding database, enable **SSH Tunnel**
3. Select the SSH server to tunnel through

---

## Best Practices

1. **Use Read-Only Accounts** - Create database users with limited permissions
2. **Limit Result Sets** - Always use `LIMIT` to avoid loading too much data
3. **Test Before Executing** - For `UPDATE` or `DELETE`, first run a `SELECT`
4. **Use Transactions** - For critical operations, wrap in transactions

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Connection Failed | Check host/port, credentials, firewall, SSL settings |
| Query Timeout | Add LIMIT, check indexes, check server load |
| Permission Denied | Check grants, database access, contact admin |
| SSL Certificate Error | Disable SSL, check certificate validity, add CA cert |
