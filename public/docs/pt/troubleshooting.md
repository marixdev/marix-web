# Solução de Problemas

Problemas comuns e soluções para o Marix.

## Problemas de Conexão

### "Conexão recusada"

**Causas:**
- O servidor não está em execução
- IP/hostname incorreto
- Porta incorreta
- Firewall bloqueando a conexão

**Soluções:**
1. Verifique se o host/IP está correto
2. Verifique se a porta está correta e aberta
3. Certifique-se de que o servidor está em execução
4. Verifique se o firewall permite a conexão
5. Tente fazer ping no servidor

### "Tempo limite de conexão"

**Causas:**
- Servidor inacessível
- Problemas de rede
- Firewall bloqueando

**Soluções:**
1. Verifique sua conexão com a internet
2. Verifique se o servidor está online
3. Tente de uma rede diferente
4. Verifique se é necessário VPN

### "Autenticação falhou"

**Causas:**
- Nome de usuário incorreto
- Senha incorreta
- Chave SSH incorreta
- Frase secreta da chave incorreta

**Soluções:**
1. Verifique se o nome de usuário está correto
2. Verifique a senha (diferencia maiúsculas e minúsculas)
3. Certifique-se de que a chave SSH correta está selecionada
4. Digite a frase secreta correta da chave
5. Verifique se o usuário tem acesso SSH no servidor

### "Falha na verificação da chave do host"

**Causas:**
- O servidor foi reinstalado
- A chave SSH do servidor mudou
- Possível problema de segurança

**Soluções:**
1. Verifique com o administrador do servidor se a chave mudou
2. Vá em Hosts Conhecidos → remova a entrada antiga
3. Reconecte e aceite a nova impressão digital
4. Se suspeito, investigue antes de conectar

### "Permissão negada (publickey)"

**Causas:**
- Chave SSH não aceita
- Chave não está no authorized_keys
- Chave incorreta selecionada

**Soluções:**
1. Verifique se a chave pública está no `~/.ssh/authorized_keys` do servidor
2. Verifique as permissões da chave: `chmod 600 ~/.ssh/authorized_keys`
3. Certifique-se de que a chave correta está selecionada no Marix
4. Tente autenticação por senha se disponível

## Problemas de SFTP

### "Permissão negada" ao enviar

**Causas:**
- Sem permissão de escrita no remoto
- Diretório incorreto
- Disco cheio

**Soluções:**
1. Verifique as permissões de escrita na pasta remota
2. Tente enviar para o diretório home primeiro
3. Verifique o espaço em disco no servidor
4. Use `sudo` se necessário (via terminal)

### Transferência de arquivo lenta

**Causas:**
- Velocidade da rede
- Tamanho grande do arquivo
- Carga do servidor

**Soluções:**
1. Verifique sua velocidade de rede
2. Arquivos grandes demoram mais - seja paciente
3. Tente em horários de menor pico
4. Compacte os arquivos antes de transferir

### "Arquivo ou diretório não encontrado"

**Causas:**
- Caminho não existe
- Link simbólico quebrado
- Permissão para listar diretório

**Soluções:**
1. Verifique se o caminho existe
2. Navegue manualmente até o local
3. Verifique as permissões do diretório pai

## Problemas de Terminal

### Terminal mostra texto ilegível

**Causas:**
- Incompatibilidade de codificação
- Incompatibilidade de tipo de terminal

**Soluções:**
1. Tente um tema de terminal diferente
2. Verifique as configurações de locale do servidor
3. Reconecte ao servidor

### Copiar/colar não funciona

**Soluções:**
1. Use `Ctrl+Shift+C` e `Ctrl+Shift+V`
2. **Copiar texto**:
   - Selecione texto com o mouse → Copiar
   - Ou use `Ctrl+C`
3. **Colar texto**:
   - Clique com o botão direito → Colar
   - Ou use `Ctrl+V`
4. Verifique se o texto está realmente selecionado

### Terminal não responde

**Soluções:**
1. Aguarde um momento - o comando pode estar processando
2. Pressione `Ctrl+C` para cancelar o comando em execução
3. Clique no botão Reconectar
4. Feche e reabra a aba

## Problemas de RDP

### Tela preta após conectar

**Causas:**
- Atraso de conexão inicial
- Máquina remota em suspensão
- Problemas gráficos

**Soluções:**
1. Aguarde um momento para a conexão
2. Tente reconectar
3. Acorde a máquina remota primeiro
4. Verifique se a máquina remota não está bloqueada

### Desempenho RDP lento

**Soluções:**
1. Reduza as configurações de profundidade de cor
2. Desabilite efeitos visuais no Windows
3. Use conexão com fio
4. Feche aplicativos que consomem muita banda
5. Diminua a resolução remota

## Problemas do Aplicativo

### Marix não inicia

**Soluções:**
1. Reinicie seu computador
2. Reinstale o Marix
3. Verifique software conflitante
4. Execute como administrador (Windows)

### Configurações não salvas

**Causas:**
- Sem permissão de escrita
- Arquivo de configuração corrompido

**Soluções:**
1. Execute o Marix como administrador
2. Restaure as configurações (Configurações → Restaurar)
3. Exclua a pasta de configuração e reinicie

### Alto uso de CPU/memória

**Soluções:**
1. Feche abas de conexão não utilizadas
2. Reduza o número de painéis SFTP abertos
3. Reinicie o Marix
4. Atualize para a versão mais recente

## Backup Issues

### "Wrong password" when restoring

**Solutions:**
1. Make sure you're using the exact password
2. Passwords are case-sensitive
3. Check for leading/trailing spaces
4. Try backup from another provider

### Backup upload fails

**Solutions:**
1. Check internet connection
2. Verify OAuth connection is valid
3. Reconnect to the backup provider
4. Check storage quota isn't exceeded

## Getting Help

If your issue isn't listed here:

1. **Check for updates** - Latest version may fix your issue
2. **Search issues** on GitHub
3. **Report a bug** on [GitHub Issues](https://github.com/marixdev/marix/issues)
4. **Contact support** via the website

When reporting issues, include:
- Marix version
- Operating system
- Steps to reproduce
- Error messages (if any)
- Screenshots (if applicable)
