# Bloqueio do App

Proteja seu aplicativo Marix com o Bloqueio do App. Quando ativado, o app bloqueia automaticamente após um período de inatividade, impedindo acesso não autorizado aos seus servidores e credenciais.

## Interface do Bloqueio do App

![Interface do Bloqueio do App](/applock.png)

## Ativando o Bloqueio do App

1. Abra as **Configurações** (ícone de engrenagem na barra lateral)
2. Encontre a seção **Segurança**
3. Ative **Habilitar Bloqueio do App**

## Métodos de Bloqueio

Escolha como o app deve ser bloqueado:

| Método | Descrição | Nível de Segurança |
|--------|-----------|-------------------|
| **Desfoque** | Desfoca o conteúdo da tela | Baixo - apenas privacidade visual |
| **PIN** | Requer PIN de 4-6 dígitos para desbloquear | Médio |
| **Senha** | Requer senha para desbloquear | Alto |

### Modo Desfoque

- O conteúdo da tela fica desfocado
- Clique em qualquer lugar para desbloquear
- Melhor para privacidade rápida em ambientes de escritório

### Modo PIN

- Defina um PIN numérico de 4-6 dígitos
- Digite o PIN para desbloquear
- Bom equilíbrio entre segurança e conveniência

### Modo Senha

- Defina uma senha personalizada
- Digite a senha para desbloquear
- Nível de segurança mais alto

## Configurando PIN ou Senha

Ao mudar para o modo PIN ou Senha:

1. Selecione o método de bloqueio
2. Um diálogo aparece para definir sua credencial
3. Digite seu PIN/Senha
4. Confirme digitando novamente
5. Clique em **Salvar**

> **Nota:** Se você esquecer seu PIN/Senha, precisará reiniciar o app. Seus dados de servidor permanecem seguros.

## Tempo de Bloqueio

Configure quanto tempo o app aguarda antes de bloquear:

| Tempo | Caso de Uso |
|-------|-------------|
| 1 minuto | Segurança máxima |
| 2 minutos | Alta segurança |
| 5 minutos | Padrão, equilibrado |
| 10 minutos | Segurança moderada |
| 15 minutos | Uso casual |
| 30 minutos | Baixa segurança |
| 60 minutos | Proteção mínima |

O cronômetro reinicia com qualquer movimento do mouse, entrada do teclado ou clique.

## Desbloqueando

### Modo Desfoque
- Clique em qualquer lugar na tela
- Mova o mouse

### Modo PIN/Senha
1. Digite seu PIN ou Senha
2. Pressione **Enter** ou clique em **Desbloquear**
3. O app desbloqueia imediatamente

## Alterando Credenciais

Para alterar seu PIN ou Senha:

1. Vá em **Configurações** → **Segurança**
2. Clique em **Alterar PIN** ou **Alterar Senha**
3. Digite sua nova credencial
4. Confirme e salve

## Limpando Credenciais

Para remover PIN/Senha e voltar ao Desfoque:

1. Vá em **Configurações** → **Segurança**
2. Clique em **Limpar Credencial**
3. O método de bloqueio volta para Desfoque

## Como Funciona

1. **Activity Tracking**: Marix monitors mouse, keyboard, and click events
2. **Inactivity Timer**: After no activity for the set timeout, app locks
3. **Instant Lock**: You can also lock manually (if implemented)
4. **Secure Storage**: PIN/Password stored securely using system keychain

## Security Considerations

### What App Lock Protects

- ✅ Visual access to your servers list
- ✅ Viewing saved credentials
- ✅ Accessing active terminal sessions
- ✅ Browsing SFTP file managers

### What App Lock Does NOT Protect

- ❌ Already established SSH connections (they remain active)
- ❌ Data on disk (use system encryption for that)
- ❌ Network traffic (use SSH/TLS for that)

## Best Practices

1. **Use Password mode** for sensitive environments
2. **Set shorter timeouts** in shared workspaces
3. **Use unique credentials** - don't reuse passwords
4. **Lock before leaving** your computer
5. **Combine with OS lock** for maximum security

## Troubleshooting

### Forgot PIN/Password

- Restart the application
- App Lock resets on restart
- Your server data is preserved

### App Locks Too Quickly

- Increase the timeout in Settings
- Check if you have active sessions that might prevent activity detection

### App Doesn't Lock

- Ensure App Lock is enabled
- Check the timeout setting
- Verify the app window has focus
