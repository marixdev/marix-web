# Database Client

May built-in na database client ang Marix para kumonekta at pamahalaan ang mga database server nang direkta mula sa application.

## Interface ng Database Client

![Database Client Interface](/database.png)

---

## Mga Sinusuportahang Database

| Database | Protocol | Mga Tampok |
|----------|----------|------------|
| **MySQL / MariaDB** | `mysql` | Query editor, table browser, data viewer, structure inspector |
| **PostgreSQL** | `postgresql` | Query editor, table browser, data viewer, structure inspector |
| **MongoDB** | `mongodb` | Collection browser, document viewer, query interface |
| **Redis** | `redis` | Key-value browser, command interface |
| **SQLite** | `sqlite` | Suporta sa local file, buong SQL editor |

---

## Pagdaragdag ng Database Server

1. I-click ang **+ Add** na button sa sidebar
2. Piliin ang **Database** tab (o ang database icon)
3. Piliin ang uri ng iyong database

### MySQL / MariaDB / PostgreSQL

| Field | Paglalarawan | Halimbawa |
|-------|--------------|-----------|
| Name | Display name | `Production MySQL` |
| Host | Server hostname o IP | `db.example.com` |
| Port | Database port | `3306` (MySQL) / `5432` (PostgreSQL) |
| Username | Database user | `root` |
| Password | User password | `••••••••` |
| Database | Default database (opsyonal) | `myapp_production` |
| SSL | I-enable ang SSL/TLS | ☑️ Enabled |

### MongoDB

| Field | Paglalarawan | Halimbawa |
|-------|--------------|-----------|
| Name | Display name | `MongoDB Atlas` |
| Connection String | Buong MongoDB URI | `mongodb+srv://user:pass@cluster.mongodb.net/` |
| Host | Server hostname | `localhost` |
| Port | MongoDB port | `27017` |
| Database | Default database | `myapp` |

### Redis

| Field | Paglalarawan | Halimbawa |
|-------|--------------|-----------|
| Name | Display name | `Redis Cache` |
| Host | Server hostname | `redis.example.com` |
| Port | Redis port | `6379` |
| Password | Auth password (opsyonal) | `••••••••` |
| Database | Database number | `0` |

### SQLite

| Field | Paglalarawan | Halimbawa |
|-------|--------------|-----------|
| Name | Display name | `Local SQLite` |
| File Path | Path patungo sa .db file | `/home/user/app.db` |

---

## Interface ng Database Client

### 📊 Data Tab

Mag-browse at tingnan ang table data:

- **Pumili ng database** mula sa dropdown (kung marami)
- **I-click ang isang table** sa sidebar para tingnan ang data nito
- **Pagination** - Mag-navigate sa mga row (100 bawat page bilang default)
- **Column sorting** - I-click ang mga column header para mag-sort
- **Mabilisang filter** - Maghanap sa loob ng displayed data

### ⚡ Query Tab

Magsulat at mag-execute ng mga SQL query na may:

- **Syntax highlighting** - Mga SQL keyword, string, numero
- **Execute** - Patakbuhin ang query gamit ang `Ctrl+Enter` o Execute button
- **Results grid** - Tingnan ang mga query result sa isang talahanayan
- **Export** - I-download ang mga result bilang CSV o JSON
- **Execution time** - Tingnan kung gaano katagal ang mga query

### 🏗️ Structure Tab

Suriin ang mga table schema na nagpapakita ng:

- Mga column name at data type
- Mga primary key, foreign key, unique constraint
- Mga nullable column at default value
- Mga auto-increment setting

### 🔗 ERD Tab

Tingnan ang Entity-Relationship Diagram:

- Visual na representasyon ng mga table at relationship
- Mga foreign key connection na ipinapakita bilang mga linya
- Mag-drag at mag-zoom para mag-navigate sa malalaking schema
- I-export bilang image (PNG)

---

## Mga Keyboard Shortcut

| Shortcut | Aksyon |
|----------|--------|
| `Ctrl/Cmd + Enter` | I-execute ang query |
| `Ctrl/Cmd + S` | I-save ang query sa file |
| `Ctrl/Cmd + O` | Buksan ang query mula sa file |
| `Ctrl/Cmd + Shift + F` | I-format ang SQL |
| `Escape` | I-cancel ang tumatakbong query |

---

## Seguridad ng Koneksyon

### SSL/TLS Encryption

I-enable ang **SSL** checkbox kapag nagdaragdag ng server. Para sa mga custom certificate:

- CA Certificate path
- Client Certificate path (opsyonal)
- Client Key path (opsyonal)

### SSH Tunnel

Kumonekta sa pamamagitan ng SSH tunnel:

1. Magdagdag muna ng SSH server sa Marix
2. Kapag nagdaragdag ng database, i-enable ang **SSH Tunnel**
3. Piliin ang SSH server na dadaanan ng tunnel

---

## Mga Pinakamahusay na Kasanayan

1. **Gumamit ng Read-Only Account** - Gumawa ng mga database user na may limitadong permiso
2. **Limitahan ang mga Result Set** - Palaging gumamit ng `LIMIT` para maiwasan ang pag-load ng masyadong maraming data
3. **Subukan Bago Mag-execute** - Para sa `UPDATE` o `DELETE`, patakbuhin muna ang `SELECT`
4. **Gumamit ng mga Transaction** - Para sa mga kritikal na operasyon, ibalot sa mga transaction

---

## Pag-troubleshoot

| Isyu | Solusyon |
|------|----------|
| Nabigo ang Koneksyon | Suriin ang host/port, kredensyal, firewall, mga SSL setting |
| Nag-timeout ang Query | Magdagdag ng LIMIT, suriin ang mga index, suriin ang server load |
| Tinanggihan ang Permiso | Suriin ang mga grant, database access, makipag-ugnayan sa admin |
| SSL Certificate Error | I-disable ang SSL, suriin ang validity ng certificate, magdagdag ng CA cert |
