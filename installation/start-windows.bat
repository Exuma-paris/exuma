@echo off
title Exuma local
cd /d "%~dp0"
echo Lancement du site Exuma...
echo URL : http://localhost:3000
start "" "http://localhost:3000"
npm run dev
