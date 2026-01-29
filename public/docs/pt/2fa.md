# Autenticação de Dois Fatores (2FA/TOTP)

Gerador de códigos TOTP integrado, como o Google Authenticator. Armazene seus segredos 2FA e obtenha códigos sem precisar do seu celular.

## Interface 2FA

![Interface 2FA](/2fa.png)

## Abrindo o 2FA

Clique em **"2FA"** na barra lateral.

## Adicionar uma Nova Conta 2FA

### Passo 1: Abrir Diálogo
Clique no botão **"Adicionar Conta"**

### Passo 2: Inserir Detalhes

| Campo | Descrição | Obrigatório |
|-------|-----------|-------------|
| Nome da Conta | Rótulo para esta conta (ex: "GitHub", "AWS") | Não (auto-nomeado) |
| Chave Secreta | O segredo TOTP (da página de configuração do QR code) | Sim |

### Passo 3: Salvar
Clique em **"Adicionar"**

## Como Obter a Chave Secreta

Ao habilitar 2FA em um site:

1. Procure por **"Não consegue escanear o QR code?"** ou **"Entrada manual"**
2. Copie a chave secreta (geralmente letras maiúsculas e números)
3. Cole no Marix

Exemplo de formato de chave secreta:
```
JBSWY3DPEHPK3PXP
```

## Usando Códigos 2FA

1. Encontre sua conta na lista
2. O código de 6 dígitos é exibido ao lado
3. Um cronômetro mostra os segundos até o código ser atualizado
4. Clique no botão **Copiar** para copiar o código para a área de transferência

### Cronômetro
- Os códigos são atualizados a cada **30 segundos**
- O indicador de progresso circular mostra o tempo restante
- Aguarde o novo código se o atual estiver prestes a expirar

## Editar Nome da Conta

1. Clique no botão **Editar** ao lado da conta
2. Digite o novo nome
3. Pressione Enter ou clique em Salvar

## Excluir uma Conta 2FA

1. Clique no botão **Excluir** (ícone de lixeira)
2. Confirme a exclusão

> ⚠️ **Aviso:** A exclusão remove o segredo. Certifique-se de ter acesso de backup à conta associada antes de excluir.

## Serviços Comuns

Aqui estão alguns serviços populares que suportam TOTP:

| Serviço | Localização das Configurações 2FA |
|---------|-----------------------------------|
| GitHub | Configurações → Senha e autenticação |
| AWS | IAM → Credenciais de segurança |
| Google | Conta do Google → Segurança |
| Microsoft | Configurações de segurança → Verificação em duas etapas |
| Cloudflare | Perfil → Autenticação |
| DigitalOcean | Conta → Segurança |
| Linode | Meu Perfil → Senha e Autenticação |

## Melhores Práticas

1. **Faça backup dos seus segredos** - Armazene as chaves secretas com segurança
2. **Guarde os códigos de recuperação** - Salve os códigos de backup fornecidos pelos serviços
3. **Use nomes descritivos** - Facilita identificar as contas rapidamente
4. **Teste os códigos antes de depender deles** - Verifique se funcionam imediatamente após adicionar
5. **Sincronização de horário** - Certifique-se de que o relógio do seu computador está correto

## Solução de Problemas

### Códigos Não Funcionam

1. **Verifique a sincronização de horário** - O relógio do seu computador deve estar correto
2. **Verifique a chave secreta** - Redigite se copiou incorretamente
3. **Aguarde o próximo código** - O código atual pode estar expirando

### Perda de Acesso

Se você perder acesso ao Marix:
1. Use os **códigos de recuperação** fornecidos pelo serviço
2. Entre em contato com o suporte do serviço para recuperação da conta
3. This is why backing up secrets is important!
