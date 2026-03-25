# Script de Setup Rápido para Kaleb Brasil Landing Page

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "🚀 Setup Kaleb Brasil - Next.js + React" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Verificar se npm está instalado
if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
    Write-Host "❌ npm não foi encontrado. Por favor, instale Node.js primeiro:" -ForegroundColor Red
    Write-Host "   https://nodejs.org/" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ npm encontrado: $(npm --version)" -ForegroundColor Green
Write-Host ""

# Instalar dependências
Write-Host "📦 Instalando dependências..." -ForegroundColor Cyan
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Dependências instaladas com sucesso!" -ForegroundColor Green
    Write-Host ""
    Write-Host "🎉 Pronto! Agora execute:" -ForegroundColor Green
    Write-Host "   npm run dev" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Abra http://localhost:3000 no navegador" -ForegroundColor Cyan
} else {
    Write-Host "❌ Erro ao instalar dependências" -ForegroundColor Red
    exit 1
}
