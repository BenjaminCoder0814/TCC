@echo off
echo ===============================================
echo 🚀 MUSCLE LEVELS - GitHub Setup Script
echo ===============================================
echo.
echo 📋 INSTRUÇÕES PARA CRIAR REPOSITÓRIO:
echo.
echo 1. Vá para: https://github.com/new
echo 2. Repository name: muscle-levels-app
echo 3. Description: Professional fitness platform built with Next.js 14
echo 4. ✅ Public
echo 5. ❌ NÃO marque "Add a README file"
echo 6. ❌ NÃO marque "Add .gitignore" 
echo 7. ❌ NÃO marque "Choose a license"
echo 8. Clique "Create repository"
echo.
echo ===============================================
echo 💡 APÓS CRIAR, EXECUTE ESTES COMANDOS:
echo ===============================================
echo.
echo git remote add origin https://github.com/SEU_USUARIO/muscle-levels-app.git
echo git branch -M main
echo git push -u origin main
echo.
echo ===============================================
echo ✅ STATUS ATUAL DO PROJETO:
echo ===============================================
git status
echo.
echo 📊 Commits realizados:
git log --oneline -5
echo.
echo ===============================================
echo 🎯 PRÓXIMOS PASSOS:
echo ===============================================
echo 1. Criar repositório no GitHub (manual)
echo 2. Executar comandos de push
echo 3. Verificar se está público
echo 4. Compartilhar URL do repositório
echo ===============================================
pause