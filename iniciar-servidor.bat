@echo off
chcp 65001 > nul
title Quando o Planeta Responde - Servidor Local
cls
echo =================================================================
echo   Iniciando Servidor Local - Quando o Planeta Responde
echo =================================================================
echo.
cd /d "%~dp0"

echo Verificando dependencias (Node.js)...
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERRO] Node.js nao foi encontrado no seu computador!
    echo Por favor, instale o Node.js em: https://nodejs.org/
    echo.
    echo Pressione qualquer tecla para abrir o arquivo direto sem servidor...
    pause > nul
    start antigravity.html
    exit /b
)

if not exist node_modules (
    echo Instalando pacotes necessarios pela primeira vez (isso leva alguns segundos)...
    call npm install
    if %errorlevel% neq 0 (
        echo [AVISO] Ocorreu uma falha no npm install. Tentando continuar...
    )
)

echo.
echo Abrindo o site no seu navegador em http://localhost:3000 ...
start http://localhost:3000

echo.
echo Servidor ativo! Nao feche esta janela enquanto estiver navegando.
echo (Para parar o servidor, feche esta janela ou pressione Ctrl+C).
echo.
call npm run dev

pause
