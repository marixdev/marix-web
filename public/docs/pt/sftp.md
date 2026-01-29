# Gerenciador de Arquivos SFTP

SFTP (Protocolo de Transferência de Arquivos SSH) fornece transferência segura de arquivos através de uma conexão SSH criptografada.

## Abrindo o SFTP

### De uma Conexão SSH Existente

1. Conecte-se a um servidor SSH
2. Clique no botão **SFTP** no topo da sessão
3. Ou use o atalho de teclado: `Ctrl+Shift+O`

### Conexão SFTP Direta

1. Clique com o botão direito em um servidor SSH na lista de Hosts
2. Selecione **"SFTP"** no menu de contexto

## Layout da Interface

![Interface SFTP](/sftp.png)

## Controles de Navegação

| Botão | Função |
|-------|--------|
| ← | Voltar no histórico |
| → | Avançar no histórico |
| ↑ | Ir para diretório pai |
| 🏠 | Ir para diretório home |
| 🔄 | Atualizar diretório atual |
| 🔍 | Pesquisar/filtrar arquivos |
| 💾 | Selecionar drive (Windows/Linux) |

## Operações de Arquivo

### Baixar um Arquivo (Remoto → Local)

1. Navegue até o arquivo no painel **REMOTO** (direita)

**Método A: Arrastar e Soltar**
- Clique e arraste o arquivo para o painel LOCAL (esquerda)
- Solte-o na pasta desejada

**Método B: Clique Direito**
- Clique com o botão direito no arquivo
- Selecione **"Download"**
- O arquivo é baixado para a pasta local atual

### Enviar um Arquivo (Local → Remoto)

1. Navegue até o arquivo no painel **LOCAL** (esquerda)

**Método A: Arrastar e Soltar**
- Clique e arraste o arquivo para o painel REMOTO (direita)
- Solte-o na pasta desejada

**Método B: Clique Direito**
- Clique com o botão direito no arquivo
- Selecione **"Upload"**
- O arquivo é enviado para a pasta remota atual

### Criar Nova Pasta

1. Navegue até o diretório de destino
2. Clique com o botão direito em espaço vazio
3. Selecione **"Nova Pasta"**
4. Digite o nome da pasta
5. Clique OK

### Criar Novo Arquivo

1. Navegue até o diretório de destino
2. Clique com o botão direito em espaço vazio
3. Selecione **"Novo Arquivo"**
4. Digite o nome do arquivo
5. Clique OK (cria arquivo vazio)

### Excluir Arquivo ou Pasta

1. Clique com o botão direito no arquivo ou pasta
2. Selecione **"Excluir"**
3. Confirme a exclusão

### Renomear Arquivo ou Pasta

1. Clique com o botão direito no arquivo ou pasta
2. Selecione **"Renomear"**
3. Digite o novo nome
4. Clique OK

## Alterar Permissões (chmod)

1. Clique com o botão direito no arquivo ou pasta (painel REMOTO)
2. Selecione **"Alterar Permissões"**
3. Digite a permissão em formato octal (ex: `755`, `644`)
4. Clique OK

### Valores Comuns de Permissão

| Valor | Significado | Caso de Uso |
|-------|-------------|-------------|
| `755` | Dono: total, Outros: ler+executar | Pastas, executáveis |
| `644` | Dono: ler+escrever, Outros: ler | Arquivos regulares |
| `600` | Apenas dono | Arquivos privados, chaves SSH |
| `777` | Todos: acesso total | Não recomendado |

## Editar Arquivos Remotos

1. Encontre um arquivo de texto no painel REMOTO
2. Clique duas vezes nele (ou clique direito → Editar)
3. O arquivo abre no editor integrado
4. Faça suas alterações
5. Clique em **Salvar** ou pressione `Ctrl+S`
6. O arquivo é salvo de volta no servidor

### Tipos de Arquivo Suportados

**Arquivos de código:**
`.js`, `.ts`, `.py`, `.php`, `.java`, `.c`, `.cpp`, `.go`, `.rs`, `.rb`

**Arquivos de configuração:**
`.json`, `.yml`, `.yaml`, `.toml`, `.ini`, `.conf`, `.env`

**Arquivos web:**
`.html`, `.css`, `.scss`, `.vue`, `.svelte`

**Scripts:**
`.sh`, `.bash`, `.ps1`, `.bat`

**Outros:**
`.txt`, `.md`, `.log`, `Dockerfile`, `Makefile`

## Compactar Arquivos

Crie arquivos compactados a partir de arquivos ou pastas no servidor remoto:

1. Clique com o botão direito no arquivo ou pasta (painel REMOTO)
2. Passe o mouse sobre **"Compactar"**
3. Selecione o formato:
   - **ZIP** - Universal, funciona em todo lugar
   - **TAR.GZ** - Melhor para Linux/Unix
   - **TAR** - Arquivo não compactado

O arquivo é criado no mesmo diretório.

## Extrair Arquivos

Extraia arquivos compactados no servidor remoto:

1. Clique com o botão direito em um arquivo compactado (painel REMOTO)
2. Selecione **"Extrair Aqui"**
3. Os arquivos são extraídos para o diretório atual

### Formatos de Arquivo Suportados

| Formato | Extensões |
|---------|-----------|
| ZIP | `.zip` |
| TAR | `.tar`, `.tar.gz`, `.tgz`, `.tar.bz2`, `.tar.xz` |
| GZIP | `.gz` |
| BZIP2 | `.bz2` |
| XZ | `.xz` |
| 7-Zip | `.7z` |
| RAR | `.rar` |

> **Nota:** A extração requer as ferramentas apropriadas instaladas no servidor (unzip, tar, 7z, unrar).

## Propriedades do Arquivo

Visualize informações detalhadas sobre arquivos e pastas:

1. Clique com o botão direito no arquivo ou pasta
2. Selecione **"Propriedades"**
3. Visualize os detalhes:

| Propriedade | Descrição |
|-------------|-----------|
| Nome | Nome do arquivo ou pasta |
| Caminho | Localização do caminho completo |
| Tamanho | Tamanho do arquivo em bytes/KB/MB/GB |
| Tipo | Arquivo ou Diretório |
| Permissões | Ler/escrever/executar (ex: 755) |
| Dono | Usuário dono (apenas remoto) |
| Grupo | Grupo dono (apenas remoto) |
| Modificado | Data da última modificação |
| Criado | Data de criação (se disponível) |
| Acessado | Data do último acesso |

## Fila de Transferência

Ao transferir múltiplos arquivos:
- A barra de progresso mostra a conclusão geral
- O progresso individual do arquivo é exibido
- Clique em ✕ para cancelar uma transferência
- Transferências falhadas podem ser tentadas novamente

## Atalhos de Teclado

| Atalho | Ação |
|--------|------|
| `Ctrl+Shift+O` | Toggle Terminal/SFTP |
| `F2` | Rename selected |
| `Delete` | Delete selected |
| `Ctrl+C` | Copy path |
| `Ctrl+R` | Refresh directory |

## Tips

- **Drag entire folders** to transfer recursively
- **Double-click** a folder to enter it
- Use **search/filter** to find files quickly
- **Overwrite confirmation** prevents accidental data loss
