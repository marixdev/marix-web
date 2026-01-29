# Instalador de Código Fonte

O Instalador de Código Fonte permite instalar frameworks web populares e CMS diretamente no seu servidor remoto via SSH.

## Interface do Instalador de Código Fonte

![Interface do Instalador de Código Fonte](/source.png)

---

## Frameworks Suportados

| Categoria | Frameworks |
|-----------|------------|
| **PHP** | Laravel, WordPress, Symfony, CodeIgniter 3/4 |
| **JavaScript** | Express.js, NestJS, Fastify, Vue.js, Nuxt.js, React, Next.js |
| **TypeScript** | TypeScript Node |

---

## Começando

### Pré-requisitos

- **Para frameworks PHP**: PHP e Composer instalados
- **Para frameworks JavaScript**: Node.js e npm instalados
- **Acesso SSH** com permissões apropriadas

### Acessando o Instalador de Código Fonte

1. Conecte-se ao seu servidor via SSH
2. Mude para a aba **SFTP**
3. Navegue até o diretório de destino
4. Clique com o botão direito e selecione **"Instalar Código Fonte"**

---

## Processo de Instalação

### Passo 1: Selecionar Framework

Escolha entre os frameworks disponíveis organizados por categoria.

### Passo 2: Seleção de Versão

#### Frameworks PHP

- **Detecta sua versão do PHP** automaticamente
- **Busca versões disponíveis** do GitHub em tempo real
- **Mostra status de compatibilidade**:
  - ✅ Compatível - Versão do PHP atende aos requisitos
  - ❌ Incompatível - Versão do PHP muito baixa ou muito alta
  - 🟢 LTS - Versão com suporte de longo prazo

#### Frameworks JavaScript/TypeScript

- Versões buscadas do registro npm
- Última versão estável selecionada por padrão

### Passo 3: Configuração

| Opção | Descrição |
|-------|-----------|
| Nome do Projeto | Nome da pasta a criar |
| Instalar no diretório atual | Instalar arquivos diretamente na pasta atual |
| Configuração do Banco de Dados | Para frameworks que precisam |

### Passo 4: Instalação

Clique em **"Instalar"** para começar. O instalador irá:

1. Verificar dependências (Composer/Node.js/npm)
2. Baixar o framework
3. Configurar o projeto
4. Exibir logs de instalação em tempo real

---

## Detalhes dos Frameworks

### Laravel

| Versão | Requisito PHP | Status |
|--------|---------------|--------|
| Laravel 12 | PHP 8.3+ | Mais recente |
| Laravel 11 | PHP 8.2+ | LTS |
| Laravel 10 | PHP 8.1+ | LTS |

### WordPress

- Busca versões do GitHub
- Auto-configura `wp-config.php` com credenciais do banco de dados

### Symfony

| Versão | Requisito PHP |
|--------|---------------|
| Symfony 8.x | PHP 8.3+ |
| Symfony 7.x | PHP 8.2+ |
| Symfony 6.4 | PHP 8.1+ (LTS) |

### Frameworks Node.js

- Express.js, NestJS, Fastify (Node.js 14+)
- Vue.js, Nuxt.js, React, Next.js (Node.js 16+)

---

## Busca Dinâmica de Versões

O instalador busca versões disponíveis em tempo real:

| Framework | Fonte |
|-----------|-------|
| Laravel, CodeIgniter | API de Releases do GitHub |
| WordPress | API de Tags do GitHub |
| Symfony | API symfony.com |
| Frameworks Node.js | Registro npm |

Quando novas versões são lançadas, elas aparecem automaticamente.

---

## Solução de Problemas

### "Composer não encontrado"

```bash
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
```

### "Node.js não encontrado"

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install --lts
```

### "Versão do PHP incompatível"

Verifique e atualize o PHP:

```bash
php -v
sudo add-apt-repository ppa:ondrej/php
sudo apt update
sudo apt install php8.3
```

### "Permission denied"

```bash
sudo chown -R $USER:$USER /var/www/html
```

---

## Best Practices

1. **Use specific versions in production** for reproducible deployments
2. **Check PHP compatibility first** before installing
3. **Configure database before installing** to save time
4. **Install in clean directories** to avoid conflicts
