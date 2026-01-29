# Cliente de Banco de Dados

O Marix inclui um cliente de banco de dados integrado para conectar e gerenciar servidores de banco de dados diretamente do aplicativo.

## Interface do Cliente de Banco de Dados

![Interface do Cliente de Banco de Dados](/database.png)

---

## Bancos de Dados Suportados

| Banco de Dados | Protocolo | Recursos |
|----------------|-----------|----------|
| **MySQL / MariaDB** | `mysql` | Editor de consultas, navegador de tabelas, visualizador de dados, inspetor de estrutura |
| **PostgreSQL** | `postgresql` | Editor de consultas, navegador de tabelas, visualizador de dados, inspetor de estrutura |
| **MongoDB** | `mongodb` | Navegador de coleções, visualizador de documentos, interface de consulta |
| **Redis** | `redis` | Navegador de chave-valor, interface de comandos |
| **SQLite** | `sqlite` | Suporte a arquivos locais, editor SQL completo |

---

## Adicionando um Servidor de Banco de Dados

1. Clique no botão **+ Adicionar** na barra lateral
2. Selecione a aba **Banco de Dados** (ou o ícone de banco de dados)
3. Escolha o tipo do seu banco de dados

### MySQL / MariaDB / PostgreSQL

| Campo | Descrição | Exemplo |
|-------|-----------|---------|
| Nome | Nome de exibição | `MySQL Produção` |
| Host | Hostname ou IP do servidor | `db.example.com` |
| Porta | Porta do banco de dados | `3306` (MySQL) / `5432` (PostgreSQL) |
| Usuário | Usuário do banco de dados | `root` |
| Senha | Senha do usuário | `••••••••` |
| Banco de Dados | Banco de dados padrão (opcional) | `myapp_production` |
| SSL | Habilitar SSL/TLS | ☑️ Habilitado |

### MongoDB

| Campo | Descrição | Exemplo |
|-------|-----------|---------|
| Nome | Nome de exibição | `MongoDB Atlas` |
| String de Conexão | URI completa do MongoDB | `mongodb+srv://user:pass@cluster.mongodb.net/` |
| Host | Hostname do servidor | `localhost` |
| Porta | Porta do MongoDB | `27017` |
| Banco de Dados | Banco de dados padrão | `myapp` |

### Redis

| Campo | Descrição | Exemplo |
|-------|-----------|---------|
| Nome | Nome de exibição | `Redis Cache` |
| Host | Hostname do servidor | `redis.example.com` |
| Porta | Porta do Redis | `6379` |
| Senha | Senha de autenticação (opcional) | `••••••••` |
| Banco de Dados | Número do banco de dados | `0` |

### SQLite

| Campo | Descrição | Exemplo |
|-------|-----------|---------|
| Nome | Nome de exibição | `SQLite Local` |
| Caminho do Arquivo | Caminho para o arquivo .db | `/home/user/app.db` |

---

## Interface do Cliente de Banco de Dados

### 📊 Aba Dados

Navegue e visualize dados das tabelas:

- **Selecione o banco de dados** no dropdown (se houver múltiplos)
- **Clique em uma tabela** na barra lateral para visualizar seus dados
- **Paginação** - Navegue pelas linhas (100 por página por padrão)
- **Ordenação de colunas** - Clique nos cabeçalhos das colunas para ordenar
- **Filtro rápido** - Pesquise nos dados exibidos

### ⚡ Aba Consulta

Escreva e execute consultas SQL com:

- **Destaque de sintaxe** - Palavras-chave SQL, strings, números
- **Executar** - Execute a consulta com `Ctrl+Enter` ou botão Executar
- **Grade de resultados** - Visualize os resultados da consulta em uma tabela
- **Exportar** - Baixe os resultados como CSV ou JSON
- **Tempo de execução** - Veja quanto tempo as consultas levam

### 🏗️ Aba Estrutura

Inspecione os esquemas das tabelas mostrando:

- Nomes das colunas e tipos de dados
- Chaves primárias, chaves estrangeiras, constraints únicas
- Colunas anuláveis e valores padrão
- Configurações de auto-incremento

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
