@echo off
echo Cleaning up project...
taskkill /F /IM node.exe 2>nul
rd /s /q .next 2>nul
rd /s /q node_modules 2>nul
del package-lock.json 2>nul
echo Installing dependencies...
npm cache clean --force
npm install
echo Done! 