# Snippets de Comandos

Snippets são modelos de comandos reutilizáveis que ajudam você a executar comandos frequentemente usados rapidamente no terminal SSH.

## Interface de Snippets de Comandos

![Interface de Snippets de Comandos](/snippets.png)

---

## Visão Geral

O recurso de Snippets combina **modelos de comandos** com **atalhos de teclado** opcionais:

- **Salve comandos comumente usados** para acesso rápido
- **Atribua teclas de atalho** (Ctrl+Shift+Tecla ou Cmd+Shift+Tecla) para execução instantânea
- **Organize por categoria** (Sistema, Docker, Git, Rede, etc.)
- **Visibilidade baseada em escopo** - global, por host ou por grupo

---

## Acessando Snippets

### Painel de Snippets

Quando conectado a um terminal SSH, um **painel de Snippets** aparece no lado direito:

- **Pesquisa** - Encontre snippets por nome, comando ou tag
- **Filtrar por categoria** - Clique nos ícones de categoria para filtrar
- **Clique para inserir** - Clique em qualquer snippet para inserir seu comando
- **Recolher/Expandir** - Alterne a visibilidade do painel

### Gerenciador de Snippets

Acesse pelo menu da barra lateral para:

- Ver todos os snippets organizados por escopo
- Adicionar, editar ou excluir snippets
- Gerenciar atribuições de teclas de atalho

---

## Criando Snippets

1. Abra o **Gerenciador de Snippets** na barra lateral
2. Clique no botão **Adicionar Snippet**
3. Preencha o formulário:

| Campo | Descrição |
|-------|-----------|
| Nome | Título descritivo curto |
| Comando | O comando shell |
| Categoria | Selecione de predefinidas ou "Personalizado" |
| Escopo | Global, Host ou Grupo |
| Tecla de Atalho | Caractere único opcional |
| Descrição | Explique o que o comando faz |
| Tags | Palavras-chave para pesquisa |

### Exemplos de Snippets

| Nome | Comando | Categoria | Tecla de Atalho |
|------|---------|-----------|-----------------|
| Uso de Disco | `df -h` | Sistema | D |
| Listar Todo Docker | `docker ps -a` | Docker | P |
| Status Git | `git status` | Git | G |
| Verificar Portas | `netstat -tulpn` | Rede | N |
| Tail Logs | `tail -f /var/log/syslog` | Sistema | L |

---

## Usando Teclas de Atalho

### Atalhos de Teclado

| Plataforma | Formato do Atalho |
|------------|-------------------|
| **Windows/Linux** | `Ctrl + Shift + [Tecla]` |
| **macOS** | `Cmd + Shift + [Tecla]` |

### Teclas Reservadas

Algumas teclas são reservadas e não podem ser usadas:

| Tecla | Reservada Para |
|-------|----------------|
| A | Adicionar Novo Host |
| C | Copiar |
| L | Alternar Transferência LAN |
| O | Mudar Terminal/SFTP |
| T | Terminal Local |
| V | Colar |

---

## Categorias

| Ícone | Categoria | Usar Para |
|-------|-----------|-----------|
| 🖥️ | Sistema | Comandos do SO, serviços, logs |
| 🐳 | Docker | Gerenciamento de containers |
| 📦 | Git | Controle de versão |
| 🌐 | Rede | Portas, conexões, DNS |
| 📁 | Arquivos | Operações de arquivo |
| 🗄️ | Banco de Dados | Comandos de banco de dados |
| ✨ | Personalizado | Qualquer outra coisa |

---

## Níveis de Escopo

### Escopo Global
Visível em **todas** as conexões SSH. Melhor para comandos universais.

### Escopo Host
Visível apenas em um **servidor específico**. Melhor para comandos específicos do servidor.

### Escopo Grupo
Visível em todos os servidores de um **grupo específico**. Melhor para comandos específicos de ambiente.

---

## Dicas e Melhores Práticas

1. **Use Variáveis** - Deixe placeholders para partes variáveis: `tail -f [CAMINHO_LOG]`
2. **Encadeie Comandos** - Combine múltiplos comandos: `cd /var/www && git pull && systemctl restart app`
3. **Organize com Tags** - Adicione tags como `prod`, `dev`, `urgente` para filtragem mais fácil
4. **Faça Backup dos Seus Snippets** - Incluídos em backups .marix criptografados

---

## Armazenamento de Dados

- Armazenado localmente no localStorage do navegador
- Incluído em backups criptografados (arquivos .marix)
- Sincronizado com Google Drive (se habilitado)
- Sem armazenamento na nuvem sem ação explícita de backup

---

## Solução de Problemas

| Problema | Solução |
|----------|---------|
| Tecla de Atalho Não Funciona | Verifique conflitos, certifique-se de que o terminal está focado |
| Snippet Não Aparece | Verifique se o escopo corresponde à conexão atual |
| Comando Não Executa | Verifique o estado do terminal, problemas de permissão |
