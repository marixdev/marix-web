# Gerenciador DNS Cloudflare

Gerencie seus registros DNS do Cloudflare diretamente do Marix.

## Interface do Gerenciador DNS Cloudflare

![Interface do Gerenciador DNS Cloudflare](/cf.png)

## Configuração

### Passo 1: Obter Token da API

1. Vá para o [Painel do Cloudflare](https://dash.cloudflare.com)
2. Navegue até Perfil → Tokens da API
3. Clique em "Criar Token"
4. Use o template "Editar DNS da zona" ou crie personalizado com:
   - Zone.DNS: Editar
   - Zone.Zone: Ler
5. Copie o token

### Passo 2: Configurar no Marix

1. Vá em **Configurações** na barra lateral
2. Encontre a seção **"Token da API Cloudflare"**
3. Clique em **"Adicionar Token"**
4. Cole seu token
5. Clique em **"Salvar"**

## Usando o DNS Cloudflare

1. Clique em **"Cloudflare"** na barra lateral
2. Seus domínios carregam em um dropdown
3. Selecione um domínio
4. Os registros DNS desse domínio aparecem

## Visualizar Registros DNS

A tabela mostra:

| Coluna | Descrição |
|--------|-----------|
| Tipo | Tipo do registro (A, AAAA, CNAME, MX, TXT, etc.) |
| Nome | Nome/subdomínio do registro |
| Conteúdo | Valor do registro (IP, hostname, texto) |
| TTL | Tempo de vida (Auto ou segundos) |
| Proxy | Proxiado pelo Cloudflare ou apenas DNS |

## Adicionar um Registro DNS

### Passo 1: Abrir Diálogo
Clique no botão **"Adicionar Registro"**

### Passo 2: Preencher Detalhes

| Campo | Descrição |
|-------|-----------|
| Tipo | Selecione: A, AAAA, CNAME, MX, TXT, SRV, etc. |
| Nome | Subdomínio (ex: "www") ou "@" para raiz |
| Conteúdo | O valor (IP para A, hostname para CNAME, etc.) |
| TTL | Tempo de vida: Auto ou segundos personalizados |
| Proxy | Alternar: Proxiado (nuvem laranja) ou apenas DNS (cinza) |
| Comentário | Nota opcional |

### Passo 3: Criar
Clique em **"Criar"**

## Tipos Comuns de Registro

### Registro A
Aponta um domínio para um endereço IPv4.

| Campo | Exemplo |
|-------|---------|
| Tipo | A |
| Nome | @ (ou www) |
| Conteúdo | 192.168.1.100 |

### Registro AAAA
Aponta um domínio para um endereço IPv6.

| Campo | Exemplo |
|-------|---------|
| Tipo | AAAA |
| Nome | @ |
| Conteúdo | 2001:db8::1 |

### Registro CNAME
Cria um alias para outro domínio.

| Campo | Exemplo |
|-------|---------|
| Tipo | CNAME |
| Nome | www |
| Conteúdo | example.com |

### Registro MX
Especifica servidores de email.

| Campo | Exemplo |
|-------|---------|
| Type | MX |
| Name | @ |
| Content | mail.example.com |
| Priority | 10 |

### TXT Record
Stores text data (SPF, DKIM, verification).

| Field | Example |
|-------|---------|
| Type | TXT |
| Name | @ |
| Content | v=spf1 include:_spf.google.com ~all |

## Edit a DNS Record

1. Find the record in the table
2. Click the **Edit** button (pencil icon)
3. Modify fields
4. Click **"Save"**

## Delete a DNS Record

1. Find the record
2. Click the **Delete** button (trash icon)
3. Confirm deletion

## Proxy Status

| Icon | Status | Effect |
|------|--------|--------|
| 🟠 Orange cloud | Proxied | Traffic goes through Cloudflare CDN |
| ⚪ Gray cloud | DNS only | Direct connection to origin |

### When to Use Proxy

**Proxied (Orange):**
- Web servers (HTTP/HTTPS)
- Want DDoS protection
- Want CDN caching

**DNS Only (Gray):**
- SSH, FTP, mail servers
- Non-HTTP services
- Need direct IP connection

## Refresh Records

Click the **Refresh** button next to the domain dropdown to reload records.

## Tips

- **TTL Auto** is recommended for most cases
- **Test changes** using DNS lookup tools
- **Backup records** before making major changes
- **Propagation** may take up to 48 hours globally
