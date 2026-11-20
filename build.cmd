@echo off
chcp 65001 >nul
setlocal
cd /d "%~dp0"

set "NODE_DIR=%~dp0..\tools\node"
if exist "%NODE_DIR%\node.exe" (
  set "PATH=%NODE_DIR%;%PATH%"
) else (
  echo [错误] 没找到项目自带的 Node：%NODE_DIR%
  pause
  exit /b 1
)

if not exist "node_modules" (
  call npm install --no-fund --no-audit
  if errorlevel 1 ( pause & exit /b 1 )
)

call npm run build
echo.
echo 打包完成，产物在 dist\ 目录。
pause
