# Workflow de Branches - Landing Page Kaleb

## 📋 Branches Configuradas

- **`main`** = Branch de produção (o que está no ar no seu servidor)
- **`staging`** = Branch de testes (para alterações pequenas antes da produção)
- **`development`** = Branch de desenvolvimento (para alterações maiores)

## 🚀 Como Usar o Workflow

### Para Alterações Pequenas (correções rápidas):
```bash
# Mudar para branch de staging
git checkout staging

# Fazer suas alterações no código
# ... editar arquivos ...

# Commit das alterações
git add .
git commit -m "Descrição da alteração"

# Testar localmente
npm run dev

# Quando estiver pronto para produção
git checkout main
git merge staging
git push origin main
```

### Para Alterações Maiores (novos recursos):
```bash
# Mudar para branch de development
git checkout development

# Fazer suas alterações
# ... editar arquivos ...

# Commit das alterações
git add .
git commit -m "Descrição da alteração"

# Testar localmente
npm run dev

# Quando estiver pronto
git checkout staging
git merge development

# Testar novamente
npm run dev

# Quando tudo estiver OK, ir para produção
git checkout main
git merge staging
git push origin main
```

## 📝 Comandos Úteis

```bash
# Ver em qual branch você está
git branch

# Ver todas as branches
git branch -a

# Mudar de branch
git checkout [nome-da-branch]

# Ver status dos arquivos
git status

# Ver diferenças
git diff

# Fazer commit
git add .
git commit -m "Mensagem descritiva"

# Push para GitHub
git push origin [nome-da-branch]

# Pull do GitHub
git pull origin [nome-da-branch]
```

## 🔄 Deploy no Servidor

Quando você fizer merge para `main` e der push:

1. Vá no seu servidor
2. Execute: `git pull origin main`
3. As alterações estarão no ar automaticamente

## ⚠️ Importante

- Sempre teste localmente antes de mandar para produção
- Use mensagens de commit descritivas
- Para alterações críticas, use o fluxo: development → staging → main
- Para correções rápidas, pode usar diretamente: staging → main