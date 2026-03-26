# Configuração de Remotes Git para Kaleb Landing Page

## 📋 Remotes Configurados

### `origin` (GitHub - Ambiente de Teste)
- URL: https://github.com/alsedan-coder/kaleb-brasil-landing
- Uso: Para testes e backup
- Comando: `git push origin main`

### `production` (Kinghost - Ambiente de Produção)
- URL: [PRECISA SER CONFIGURADO]
- Uso: Para deploy em produção
- Comando: `git push production main`

## 🚀 Como Usar

### Para testar mudanças (GitHub):
```bash
git add .
git commit -m "Minha alteração"
git push origin main
```

### Para publicar em produção (Kinghost):
```bash
git add .
git commit -m "Minha alteração"
git push production main
```

## ⚙️ Configuração do Remote de Produção

Para configurar o remote de produção, você precisa:

1. **Criar um repositório Git no Kinghost** (se não existir)
2. **Obter a URL do repositório** (HTTP ou SSH)
3. **Executar o comando**:
   ```bash
   git remote add production [URL_DO_REPOSITORIO]
   ```

### Exemplos de URLs possíveis:
- HTTP: `https://seu-dominio.com/git/kaleb-landing.git`
- SSH: `ssh://usuario@servidor.com/var/repo/kaleb-landing.git`
- Git: `git@servidor.com:kaleb-landing.git`

## 📝 Comandos Úteis

```bash
# Ver todos os remotes
git remote -v

# Remover remote se necessário
git remote remove production

# Renomear remote
git remote rename production prod
```