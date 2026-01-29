# Histórico de Comandos (Recuperação de Comandos)

O Marix oferece um recurso de **Histórico de Comandos** que armazena e recupera comandos executados anteriormente para cada servidor. Isso ajuda você a reexecutar rapidamente comandos comuns sem digitá-los novamente.

## Interface do Histórico de Comandos

![Interface do Histórico de Comandos](/cmh.png)

## Recursos

- **Histórico por Servidor**: Cada servidor mantém seu próprio histórico de comandos
- **Armazenamento Apenas Local**: Comandos são armazenados localmente, nunca sincronizados ou salvos em backup
- **Filtragem de Dados Sensíveis**: Filtra automaticamente comandos contendo senhas, tokens ou segredos
- **Remoção LRU**: Remove automaticamente comandos antigos (máximo 50 por servidor)
- **Contador de Execução**: Rastreia quantas vezes cada comando foi usado
- **Busca**: Filtre rapidamente comandos com busca aproximada

## Como Ativar

O Histórico de Comandos está **desativado por padrão** por privacidade. Para ativar:

1. Abra as **Configurações** (ícone de engrenagem na barra lateral)
2. Navegue até a seção **Terminal**
3. Ative **Habilitar Recuperação de Comandos**

## Uso

### Abrindo o Histórico de Comandos

Quando em uma sessão de terminal, pressione:
- Tecla **`Tab`** quando a entrada do terminal estiver vazia (cursor em linha vazia)
- Ou clique no botão **Histórico** na barra de ferramentas do terminal

### Atalhos de Teclado

| Tecla | Ação |
|-------|------|
| `Tab` (entrada vazia) | Abrir popup de recuperação de comandos |
| `↑` / `↓` | Navegar pelos comandos |
| `Enter` | Executar comando selecionado |
| `Escape` | Fechar popup |
| `Delete` / `Backspace` | Excluir comando selecionado |

### Ações do Popup

- **Clique** em um comando para executá-lo imediatamente
- **Pesquise** digitando na caixa de busca
- **Exclua** comandos individuais com o ícone de lixeira
- **Salvar como Snippet** para converter um comando em um snippet reutilizável

## Privacidade e Segurança

### Comandos Filtrados

Comandos que correspondem a estes padrões **nunca são armazenados**:

- Comandos contendo `password`, `passwd`, `secret`, `token`
- Comandos com `api_key` ou `apikey`
- Comandos MySQL com flag `-p` (senha)
- `sudo -S` (senha via stdin)
- Comandos usando `sshpass` ou `expect` com senha
- Exportações de variáveis de ambiente com valores sensíveis

### Armazenamento de Dados

- Armazenado no `localStorage` do navegador
- **Nunca sincronizado** com serviços na nuvem
- **Nunca incluído** em backups
- Limpo quando você limpa os dados do navegador

### Limpando o Histórico

Para limpar o histórico de comandos:

1. Abra **Configurações** → **Terminal**
2. Clique em **Limpar Histórico de Comandos**

Ou limpe por servidor através do popup de recuperação de comandos.

## Limites

| Limite | Valor |
|--------|-------|
| Máximo de comandos por servidor | 50 |
| Tamanho mínimo do comando | 2 caracteres |

## Perguntas Frequentes

### Por que alguns comandos não são salvos?

Comandos contendo padrões sensíveis (senhas, tokens, etc.) são automaticamente filtrados por segurança.

### Posso exportar meu histórico de comandos?

Não, o histórico de comandos é intencionalmente apenas local e não exportável por razões de privacidade.

### O histórico de comandos sincroniza entre dispositivos?

Não, o histórico de comandos é armazenado localmente e nunca sincronizado.

### How do I disable command history?

Go to Settings → Terminal → Disable "Enable Command Recall". Existing history is preserved until you clear it manually.
