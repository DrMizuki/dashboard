@echo off
chcp 65001 >nul
setlocal
cd /d "%~dp0"

rem 优先用项目自带的 Node（tools\node），没有就报错提示
set "NODE_DIR=%~dp0..\tools\node"
if exist "%NODE_DIR%\node.exe" (
  set "PATH=%NODE_DIR%;%PATH%"
) else (
  echo [错误] 没找到项目自带的 Node：%NODE_DIR%
  echo 请确认 tools\node 目录存在，或自行安装 Node.js LTS： https://nodejs.org/
  pause
  exit /b 1
)

if not exist "node_modules" (
  echo 首次运行，正在安装依赖，请稍候……
  call npm install --no-fund --no-audit
  if errorlevel 1 (
    echo.
    echo [错误] 依赖安装失败，请检查网络后重试。
    pause
    exit /b 1
  )
)

echo.
echo ============================================
echo   开发服务器启动中，请稍候……
echo   浏览器访问： http://localhost:5173/
echo   关闭本窗口即停止服务。
echo ============================================
echo.

start "" http://localhost:5173/
call npm run dev

pause
