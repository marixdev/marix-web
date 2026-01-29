# Pag-troubleshoot

Gabay sa pagresolba ng mga karaniwang problema sa Marix.

## Mga Problema sa Koneksyon

### Hindi Makakonekta sa Server

**Mga Sintomas:**
- "Connection refused" na error
- "Connection timed out" na error
- "Host unreachable" na error

**Mga Solusyon:**

1. **Suriin ang network connectivity**
   ```bash
   ping server-ip-address
   ```

2. **I-verify na tumatakbo ang SSH service**
   ```bash
   # Sa server
   sudo systemctl status sshd
   sudo systemctl start sshd
   ```

3. **Suriin ang firewall**
   ```bash
   # Tingnan kung bukas ang port 22
   sudo ufw status
   sudo ufw allow 22
   ```

4. **I-verify ang mga kredensyal**
   - Tama ba ang username?
   - Tama ba ang password o SSH key?
   - Tama ba ang port (default: 22)?

### "Host Key Verification Failed"

**Mga Sintomas:**
- "Host key verification failed" na mensahe
- Hindi tinatanggap ang koneksyon

**Mga Solusyon:**

1. Buksan ang **Known Hosts** manager
2. Hanapin ang host na may problema
3. I-click ang **"Remove"** para burahin ang lumang key
4. Subukang kumonekta muli
5. Tanggapin ang bagong host key

### Mabagal na Koneksyon

**Mga Solusyon:**

1. **Suriin ang DNS resolution**
   - Gamitin ang IP address sa halip na hostname

2. **I-disable ang DNS lookup sa SSH**
   - Sa server, i-edit ang `/etc/ssh/sshd_config`:
   ```
   UseDNS no
   ```

3. **Suriin ang bandwidth**
   - Gumamit ng compression kung mabagal ang network

## Mga Problema sa Authentication

### "Permission Denied (publickey)"

**Mga Solusyon:**

1. **Suriin ang SSH key permissions**
   ```bash
   chmod 700 ~/.ssh
   chmod 600 ~/.ssh/authorized_keys
   chmod 600 ~/.ssh/id_rsa
   ```

2. **I-verify na nasa authorized_keys ang public key**
   ```bash
   cat ~/.ssh/authorized_keys
   ```

3. **Suriin ang SELinux context** (kung enabled)
   ```bash
   restorecon -R ~/.ssh
   ```

### "Too Many Authentication Failures"

**Mga Solusyon:**

1. Tukuyin ang partikular na key sa connection:
   - Sa server settings, piliin ang eksaktong SSH key

2. Limitahan ang mga authentication attempt sa SSH config

### Password Hindi Tinatanggap

**Mga Solusyon:**

1. **Suriin kung enabled ang password authentication**
   - Sa server, i-check ang `/etc/ssh/sshd_config`:
   ```
   PasswordAuthentication yes
   ```

2. **I-reset ang password sa server**
   ```bash
   sudo passwd username
   ```

## Mga Problema sa SFTP

### Hindi Makapag-upload ng File

**Mga Sintomas:**
- "Permission denied" sa pag-upload
- Hindi naka-create ang file

**Mga Solusyon:**

1. **Suriin ang directory permissions**
   ```bash
   ls -la /target/directory
   ```

2. **Suriin ang disk space**
   ```bash
   df -h
   ```

3. **Suriin ang file size limits**

### Mabagal ang File Transfer

**Mga Solusyon:**

1. Gumamit ng **compression** para sa mga text file
2. **I-split ang malalaking file** sa mas maliliit na bahagi
3. Suriin ang **network bandwidth**

## Mga Problema sa Database

### Hindi Makakonekta sa Database

**Mga Solusyon:**

1. **Suriin ang database service**
   ```bash
   sudo systemctl status mysql
   sudo systemctl status postgresql
   ```

2. **I-verify ang kredensyal**
   - Tama ba ang username at password?
   - Tama ba ang database name?

3. **Suriin ang remote access configuration**
   - MySQL: i-check ang bind-address sa `my.cnf`
   - PostgreSQL: i-check ang `pg_hba.conf`

### Timeout ng Query

**Mga Solusyon:**

1. **I-optimize ang query**
2. **Dagdagan ang timeout setting** sa app
3. **Suriin ang mga index** sa database

## Mga Problema sa App

### Hindi Naglo-load ang App

**Mga Solusyon:**

1. **I-clear ang app cache**
2. **I-restart ang app**
3. **I-update sa pinakabagong bersyon**

### Lost ang mga Setting

**Mga Solusyon:**

1. **I-restore mula sa backup**
2. **I-import ang mga exported setting**
3. **I-check ang app data directory**

### Mabagal ang App

**Mga Solusyon:**

1. **Isara ang hindi ginagamit na mga session**
2. **I-clear ang terminal scrollback**
3. **I-restart ang app**

## Mga Problema sa SSL/TLS

### Certificate Error

**Mga Solusyon:**

1. **Suriin ang system date/time**
2. **I-update ang CA certificates**
3. **I-verify ang certificate chain**

### Expired Certificate

**Mga Solusyon:**

1. **I-renew ang certificate** sa server
2. **I-bypass ang certificate check** (hindi inirerekomenda para sa production)

## Pag-report ng Bug

Kung hindi naresolba ng mga solusyon na ito ang problema:

1. **Kolektahin ang mga log**
   - Pumunta sa Settings → Logs
   - I-export ang mga log file

2. **Gumawa ng bug report**
   - Ilarawan ang problema
   - Isama ang mga hakbang para i-reproduce
   - I-attach ang mga log

3. **Magsubmit ng report**
   - Sa GitHub Issues
   - O sa support email

## Mga Tip sa Pag-iwas sa Problema

- **Regular na i-backup** ang mga setting at data
- **Panatilihing updated** ang app
- **Gumamit ng SSH keys** sa halip na password
- **Suriin ang mga log** para sa mga babala
- **Dokumentuhin ang mga pagbabago** sa configuration
