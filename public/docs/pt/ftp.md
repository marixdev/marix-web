# Transferência de Arquivos FTP/FTPS

O Marix suporta protocolos FTP e FTPS para conectar a servidores de arquivos que não suportam SSH.

## Layout da Interface

![Interface FTP](/ftp.png)

## Adicionando um Servidor FTP

1. Clique em **"Adicionar Novo Host"**
2. Selecione **Protocolo**: FTP ou FTPS
3. Preencha:
   - **Host/IP**: Endereço do servidor FTP
   - **Porta**: 21 (FTP) ou 990 (FTPS)
   - **Usuário**: Nome de usuário FTP
   - **Senha**: Senha FTP
4. Clique em **Criar**

## FTP vs FTPS

| Recurso | FTP | FTPS |
|---------|-----|------|
| Criptografia | Nenhuma | TLS/SSL |
| Porta Padrão | 21 | 990 |
| Segurança | Baixa | Alta |
| Caso de Uso | Sistemas legados | Transferências seguras |

> **Recomendação**: Use FTPS quando disponível para transferências de arquivos criptografadas.

## Conectando ao FTP

1. Clique duas vezes no servidor FTP na lista de Hosts
2. A conexão abre diretamente no **modo de navegador de arquivos**
3. Não há terminal disponível (FTP é apenas para transferência de arquivos)

## Operações de Arquivo

Todas as operações de arquivo funcionam da mesma forma que o SFTP:

### Transferir Arquivos
- **Arraste e solte** para transferir entre local e remoto
- **Clique com o botão direito** → Download/Upload

### Gerenciamento de Arquivos
- **Criar pastas**: Clique com o botão direito → Nova Pasta
- **Renomear arquivos**: Clique com o botão direito → Renomear
- **Excluir arquivos**: Clique com o botão direito → Excluir

### Navegação
- Use os botões da barra de ferramentas: Voltar, Avançar, Subir, Início
- Clique duas vezes nas pastas para entrar
- Use a pesquisa para filtrar arquivos

## Limitações

O FTP não suporta:
- **chmod** (alterar permissões)
- **Links simbólicos**
- **Edição de arquivos** (deve baixar, editar, reenviar)

## Modo Passivo vs Ativo

O Marix usa **modo passivo** por padrão, que funciona melhor com:
- Roteadores NAT
- Firewalls
- A maioria das configurações de rede modernas

## Solução de Problemas

### Tempo Limite de Conexão
- Verifique se o servidor permite seu IP
- Verifique as regras de firewall em ambos os lados
- Tente portas diferentes se configuradas

### Autenticação Falhou
- Verifique nome de usuário e senha
- Verifique se o usuário FTP está habilitado no servidor
- Alguns servidores requerem formatos de login específicos

### Transferência Falha
- Verifique o espaço em disco disponível
- Verifique as permissões de arquivo no servidor
- Arquivos grandes podem expirar - verifique os limites do servidor
