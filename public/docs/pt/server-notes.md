# Notas do Servidor (Notas Adesivas)

O Marix oferece um recurso de **Notas do Servidor** que permite anexar notas pessoais a cada servidor. Isso é útil para documentar configurações de servidor, lembretes de manutenção ou informações de referência rápida.

## Interface de Notas do Servidor

![Interface de Notas do Servidor](/note.png)

## Recursos

- **Notas por Servidor**: Cada servidor pode ter suas próprias notas
- **Auto-Salvar**: As alterações são salvas automaticamente enquanto você digita (debounce de 500ms)
- **Suporte a Texto Rico**: Texto simples com quebras de linha
- **Indicador Visual**: Servidores com notas mostram um ícone de nota preenchido
- **Sincronizado com Dados do Servidor**: As notas são incluídas nos backups do servidor

## Uso

### Abrindo Notas

1. Conecte-se a um servidor (terminal SSH ou SFTP)
2. Clique no botão **Notas** na barra de ferramentas superior (ícone de lápis)
3. Um popup de nota adesiva aparece no canto inferior direito

### Escrevendo Notas

- Simplesmente digite na área de texto
- As notas são **auto-salvas** após 500ms de inatividade
- O indicador "Salvando..." mostra quando um salvamento está em andamento
- Pressione `Escape` ou clique fora para fechar

### Indicadores Visuais

| Estado do Ícone | Significado |
|-----------------|-------------|
| Contorno (vazio) | Sem notas para este servidor |
| Preenchido (sólido) | Servidor tem notas |
| Cor âmbar/amarela | Notas existem |

## Casos de Uso

### Configuração do Servidor

```
Servidor Web - Produção
-----------------------
IP: 192.168.1.100
Nginx: /etc/nginx/sites-enabled/
Logs: /var/log/nginx/
Certificado SSL expira: 2026-12-15
```

### Lembretes de Manutenção

```
A FAZER:
- [ ] Atualizar OpenSSL (CVE-2025-XXXX)
- [ ] Rotacionar credenciais do banco de dados
- [ ] Aumentar swap para 4GB
```

### Referência Rápida

```
Comandos Comuns:
- Reiniciar Nginx: sudo systemctl restart nginx
- Verificar disco: df -h
- Ver conexões: netstat -tuln

Banco de Dados:
- Usuário: app_user
- Porta: 5432
```

## Armazenamento de Dados

- As notas são armazenadas como parte da configuração do servidor
- ✅ **Incluídas em backups locais** (recurso de backup do Marix)
- ✅ **Incluídas em backups na nuvem** (Google Drive, Box)
- ✅ **Criptografadas** ao usar criptografia de backup

## Atalhos de Teclado

| Tecla | Ação |
|-------|------|
| `Escape` | Fechar popup de nota |
| Clique fora | Fechar popup de nota |

## Perguntas Frequentes

### As notas são criptografadas?

As notas são armazenadas como texto simples no arquivo de configuração do servidor. Quando você cria um backup criptografado, as notas são criptografadas junto com todos os dados do servidor.

### Posso usar Markdown?

As notas são atualmente apenas texto simples. A renderização de Markdown pode ser adicionada em uma versão futura.

### Existe limite de caracteres?

Sem limite rígido, mas notas muito longas podem afetar o desempenho. Recomenda-se manter as notas concisas.
