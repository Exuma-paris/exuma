$ErrorActionPreference = "Stop"

$RepoUrl = "https://github.com/RemiBootnow/exuma.git"
$ProjectDir = Join-Path $HOME "Exuma"
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$SecretsFile = Join-Path $ScriptDir "exuma-secrets.env"

function Step($Message) {
    Write-Host ""
    Write-Host "-> $Message" -ForegroundColor Cyan
}

Write-Host "============================================================"
Write-Host " Installation Exuma pour Windows"
Write-Host "============================================================"
Write-Host ""
Write-Host "Ce script installe Git, GitHub CLI, Node.js, Claude Code,"
Write-Host "puis recupere le projet Exuma."

if (Test-Path $SecretsFile) {
    Step "Chargement des secrets locaux"
    Get-Content $SecretsFile | ForEach-Object {
        $Line = $_.Trim()
        if (-not $Line -or $Line.StartsWith("#") -or -not $Line.Contains("=")) {
            return
        }
        $Name, $Value = $Line.Split("=", 2)
        $Name = $Name.Trim()
        $Value = $Value.Trim().Trim('"').Trim("'")
        if ($Name -and $Value) {
            [Environment]::SetEnvironmentVariable($Name, $Value, "User")
            Set-Item -Path "Env:$Name" -Value $Value
        }
    }
}

Step "Verification de winget"
if (-not (Get-Command winget -ErrorAction SilentlyContinue)) {
    throw "winget est introuvable. Installez 'App Installer' depuis le Microsoft Store, puis relancez ce fichier."
}

Step "Installation/mise a jour de Git, GitHub CLI et Node.js"
winget install -e --id Git.Git --accept-source-agreements --accept-package-agreements
winget install -e --id GitHub.cli --accept-source-agreements --accept-package-agreements
winget install -e --id OpenJS.NodeJS.LTS --accept-source-agreements --accept-package-agreements

$env:Path = [Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [Environment]::GetEnvironmentVariable("Path", "User")

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    throw "Git vient d'etre installe mais n'est pas encore disponible. Fermez cette fenetre, rouvrez install-windows.bat, ou redemarrez Windows."
}

if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
    throw "GitHub CLI vient d'etre installe mais n'est pas encore disponible. Fermez cette fenetre, rouvrez install-windows.bat, ou redemarrez Windows."
}

if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
    throw "Node.js vient d'etre installe mais npm n'est pas encore disponible. Fermez cette fenetre, rouvrez install-windows.bat, ou redemarrez Windows."
}

Step "Installation/mise a jour de Claude Code"
irm https://claude.ai/install.ps1 | iex
$env:Path = "$HOME\.claude\local\bin;$HOME\AppData\Local\Programs\Claude\bin;" + $env:Path

if (-not $env:UNTITLED_UI_TOKEN) {
    Step "Token Untitled UI requis pour installer les dependances privees"
    Write-Host "Demandez-le a Remi si vous ne l'avez pas, ou placez exuma-secrets.env a cote de ce script."
    $SecureToken = Read-Host "Collez UNTITLED_UI_TOKEN" -AsSecureString
    $TokenPtr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($SecureToken)
    try {
        $Token = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($TokenPtr)
    } finally {
        [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($TokenPtr)
    }
    if ($Token) {
        [Environment]::SetEnvironmentVariable("UNTITLED_UI_TOKEN", $Token, "User")
        $env:UNTITLED_UI_TOKEN = $Token
    }
}

Step "Connexion a GitHub"
gh auth status 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Choisissez GitHub.com, HTTPS, puis connectez-vous dans le navigateur."
    gh auth login
}

Step "Recuperation du projet"
if (Test-Path (Join-Path $ProjectDir ".git")) {
    git -C $ProjectDir pull --ff-only
} else {
    New-Item -ItemType Directory -Force -Path (Split-Path $ProjectDir) | Out-Null
    git clone $RepoUrl $ProjectDir
}

Step "Installation des dependances du projet"
Set-Location $ProjectDir
npm install

$StartSource = Join-Path $ScriptDir "start-windows.bat"
$StartTarget = Join-Path $ProjectDir "start-windows.bat"
if ((Test-Path $StartSource) -and -not (Test-Path $StartTarget)) {
    Copy-Item $StartSource $StartTarget
}

Step "Verification de Claude Code"
if (Get-Command claude -ErrorAction SilentlyContinue) {
    claude --version
    claude doctor
} else {
    Write-Host "Claude Code est installe, mais il faudra peut-etre rouvrir le Terminal ou redemarrer Windows."
}

Write-Host ""
Write-Host "============================================================"
Write-Host " Installation terminee"
Write-Host "============================================================"
Write-Host ""
Write-Host "Dossier du projet : $ProjectDir"
Write-Host "Pour travailler : ouvrez Claude Code puis ouvrez ce dossier."
Write-Host "Pour lancer le site : double-cliquez start-windows.bat dans le dossier Exuma."
Write-Host ""
Write-Host "Ouverture du dossier Exuma..."
Start-Process explorer.exe $ProjectDir
