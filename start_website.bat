@echo off
title Birthday Website Server
echo ==============================================
echo   Starting Birthday Website Local Server...
echo ==============================================
echo.
echo Opening http://localhost:8000 in your browser...
start http://localhost:8000
python -m http.server 8000
pause
