@echo off
echo Starting Bol Bhav AI - Frontend and Backend...
echo.

echo Starting Backend Server...
start "Backend Server" cmd /k "cd /d d:\Bol_Bhav_AI\server && node app/server.js"

echo Waiting for backend to start...
timeout /t 3 /nobreak >nul

echo Starting Frontend...
start "Frontend" cmd /k "cd /d d:\Bol_Bhav_AI\client && & \"C:\Program Files\nodejs\node.exe\" \"C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js\" start"

echo.
echo Both servers are starting...
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo.
echo Press any key to exit...
pause >nul
