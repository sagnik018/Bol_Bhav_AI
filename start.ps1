Write-Host "Starting Bol Bhav AI - Frontend and Backend..." -ForegroundColor Green
Write-Host ""

# Start Backend Server
Write-Host "Starting Backend Server..." -ForegroundColor Yellow
$backend = Start-Process -FilePath "node" -ArgumentList "app/server.js" -WorkingDirectory "d:\Bol_Bhav_AI\server" -PassThru

# Wait for backend to start
Write-Host "Waiting for backend to start..." -ForegroundColor Yellow
Start-Sleep -Seconds 3

# Start Frontend
Write-Host "Starting Frontend..." -ForegroundColor Yellow
$frontend = Start-Process -FilePath "& 'C:\Program Files\nodejs\node.exe'" -ArgumentList "'C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js', 'start'" -WorkingDirectory "d:\Bol_Bhav_AI\client" -PassThru

Write-Host ""
Write-Host "Both servers are running..." -ForegroundColor Green
Write-Host "Backend: http://localhost:5000" -ForegroundColor Cyan
Write-Host "Frontend: http://localhost:3000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop both servers" -ForegroundColor Yellow

# Wait for interrupt
try {
    while ($true) {
        Start-Sleep -Seconds 1
    }
}
finally {
    Write-Host "Stopping servers..." -ForegroundColor Red
    $backend.Kill()
    $frontend.Kill()
    Write-Host "Servers stopped." -ForegroundColor Green
}
