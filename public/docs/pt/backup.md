# Backup e Restauração

Proteja seus dados com backups criptografados. O Marix suporta 6 provedores de backup, todos usando criptografia Argon2id.

> 💡 **Dica:** Uma vez que você conecta uma conta na nuvem para backup, não precisa reconectar para restaurar no mesmo dispositivo. Sua autenticação é salva localmente.

## Interface de Backup e Restauração

### Backup
![Interface de Backup](/backup.png)

### Restauração
![Interface de Restauração](/restore.png)

## O Que é Salvo no Backup

- Todos os servidores e credenciais (senhas, chaves privadas)
- Chaves SSH do Chaveiro
- Configurações de encaminhamento de porta
- Segredos 2FA/TOTP
- Configurações do aplicativo
- Token da API Cloudflare

## Requisitos de Senha

| Requisito | Descrição |
|-----------|-----------|
| Tamanho | Pelo menos 10 caracteres |
| Maiúsculas | Incluir letras maiúsculas |
| Minúsculas | Incluir letras minúsculas |
| Números | Incluir pelo menos um número |
| Especiais | Incluir caracteres especiais |

> ⚠️ **Aviso:** Não podemos recuperar sua senha. Se você esquecê-la, seu backup ficará permanentemente inacessível.

## Backup Local

Salve um arquivo de backup criptografado no seu computador.

### Criar Backup Local

1. Vá em **Configurações** → Clique em **"Criar Backup"**
2. Selecione a aba **Local** (ícone de pasta)
3. Digite uma **senha forte** (10+ caracteres)
4. Confirme a senha
5. Clique em **"Criar Backup"**
6. Escolha onde salvar o arquivo `.marix`
7. Armazene este arquivo com segurança

### Restaurar de Backup Local

1. Vá em **Configurações** → Clique em **"Restaurar Backup"**
2. Selecione a aba **Local**
3. Clique em **"Selecionar Arquivo"** e escolha seu arquivo de backup `.marix`
4. Digite a **senha** que você usou ao criar o backup
5. Clique em **"Restaurar"**
6. O aplicativo reinicia com todos os dados restaurados

## Google Drive

Sincronize seu backup com o Google Drive.

### Conectar

1. Selecione a aba **Google Drive**
2. Clique em **"Conectar"**
3. Entre na sua conta Google
4. Conceda permissão ao Marix
5. Você verá "Conectado" com seu email

### Criar Backup

1. Após conectar, digite uma senha forte
2. Confirme a senha
3. Clique em **"Criar Backup"**
4. O status mostra: "Backup criado com sucesso"

### Restaurar

1. Se já conectado, sua conta é lembrada
2. Se existir um backup, você verá "Último backup: [data]"
3. Digite a senha
4. Clique em **"Restaurar"**

## GitHub

Armazene seu backup em um GitHub Gist privado.

### Conectar

1. Selecione a aba **GitHub**
2. Clique em **"Conectar"**
3. Um **Código do Dispositivo** aparece (ex: `ABCD-1234`)
4. Vá para: https://github.com/login/device
5. Digite o código
6. Autorize o Marix

### Criar Backup

1. Digite uma senha forte
2. Confirm the password
3. Click **"Create Backup"**
4. Backup is stored as a private Gist

### Restore

1. If already connected, your account is remembered
2. If a backup exists, you'll see "Last backup: [date]"
3. Enter the password
4. Click **"Restore"**

### Where's My Backup?

Go to https://gist.github.com → Your private gists → Look for "marix-backup"

## GitLab

Store your backup in a GitLab Snippet.

### Connect

1. Select the **GitLab** tab
2. Click **"Connect"**
3. Sign in to GitLab
4. Authorize Marix

### Create Backup

1. Enter a strong password
2. Confirm the password
3. Click **"Create Backup"**
4. Backup is stored as a private Snippet

### Restore

1. If already connected, your account is remembered
2. If a backup exists, you'll see "Last backup: [date]"
3. Enter the password
4. Click **"Restore"**

## Box.net

Store your backup in Box cloud storage.

### Connect

1. Select the **Box.net** tab
2. Click **"Connect to Box.net"**
3. Sign in to your Box.net account
4. Authorize Marix

### Create Backup

1. Enter a strong password
2. Confirm the password
3. Click **"Create Backup"**

### Restore

1. If already connected, your account is remembered
2. If a backup exists, you'll see "Last backup: [date]"
3. Enter the password
4. Click **"Restore"**

## OneDrive

Sync your backup to Microsoft OneDrive.

### Connect

1. Select the **OneDrive** tab
2. Click **"Connect"**
3. Sign in to your Microsoft account
4. Grant Marix permission
5. You'll see "Connected" with your email

### Create Backup

1. After connecting, enter a strong password
2. Confirm the password
3. Click **"Create Backup"**
4. Status shows: "Backup created successfully"

### Restore

1. If already connected, your account is remembered
2. If a backup exists, you'll see "Last backup: [date]"
3. Enter the password
4. Click **"Restore"**

## Provider Comparison

| Provider | Storage Location | Pros | Cons |
|----------|------------------|------|------|
| **Local** | Your computer | Full control, offline | Must manage file manually |
| **Google Drive** | Google cloud | Auto-sync, widely used | Requires Google account |
| **OneDrive** | Microsoft cloud | Integrated with Windows | Requires Microsoft account |
| **GitHub** | GitHub Gist | Free, version control | Requires GitHub account |
| **GitLab** | GitLab Snippet | Free, self-hosted option | Requires GitLab account |
| **Box.net** | Box.net cloud | Enterprise-friendly | Requires Box account |

## Best Practices

1. **Use different passwords** for different providers
2. **Store your password** in a password manager
3. **Test restore** periodically to ensure backup works
4. **Keep local backup** as secondary option
5. **Don't share** backup files - they contain sensitive data
6. **Update backups** regularly after adding new servers
