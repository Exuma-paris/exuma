#!/bin/bash
set -euo pipefail

REPO_URL="https://github.com/RemiBootnow/exuma.git"
PROJECT_DIR="$HOME/Exuma"
NODE_MAJOR="22"

echo "============================================================"
echo " Installation Exuma pour macOS"
echo "============================================================"
echo ""
echo "Ce script installe Homebrew, Git, GitHub CLI, Node.js, Claude Code,"
echo "puis recupere le projet Exuma."
echo ""

if ! command -v xcode-select >/dev/null 2>&1 || ! xcode-select -p >/dev/null 2>&1; then
  echo "-> Installation des outils Apple requis..."
  xcode-select --install || true
  echo ""
  echo "Si une fenetre Apple vient de s'ouvrir, terminez l'installation,"
  echo "puis relancez ce fichier."
  echo ""
  read -r -p "Appuyez sur Entree pour fermer."
  exit 0
fi

if ! command -v brew >/dev/null 2>&1; then
  echo "-> Installation de Homebrew..."
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
fi

if [ -x /opt/homebrew/bin/brew ]; then
  eval "$(/opt/homebrew/bin/brew shellenv)"
elif [ -x /usr/local/bin/brew ]; then
  eval "$(/usr/local/bin/brew shellenv)"
fi

echo "-> Installation/mise a jour de Git, GitHub CLI et Node.js..."
brew update
brew install git gh "node@${NODE_MAJOR}" || brew upgrade git gh "node@${NODE_MAJOR}" || true

if brew --prefix "node@${NODE_MAJOR}" >/dev/null 2>&1; then
  NODE_PREFIX="$(brew --prefix "node@${NODE_MAJOR}")"
  export PATH="$NODE_PREFIX/bin:$PATH"
  SHELL_RC="$HOME/.zshrc"
  if ! grep -q "$NODE_PREFIX/bin" "$SHELL_RC" 2>/dev/null; then
    {
      echo ""
      echo "# Exuma Node.js"
      echo "export PATH=\"$NODE_PREFIX/bin:\$PATH\""
    } >> "$SHELL_RC"
  fi
fi

echo "-> Installation/mise a jour de Claude Code..."
curl -fsSL https://claude.ai/install.sh | bash

export PATH="$HOME/.claude/local/bin:$HOME/.local/bin:$PATH"

if [ -z "${UNTITLED_UI_TOKEN:-}" ]; then
  echo ""
  echo "-> Token Untitled UI requis pour installer les dependances privees."
  echo "Demandez-le a Remi si vous ne l'avez pas."
  read -r -s -p "Collez UNTITLED_UI_TOKEN puis appuyez sur Entree : " UNTITLED_UI_TOKEN
  echo ""
  if [ -n "$UNTITLED_UI_TOKEN" ]; then
    export UNTITLED_UI_TOKEN
    SHELL_RC="$HOME/.zshrc"
    if ! grep -q "UNTITLED_UI_TOKEN" "$SHELL_RC" 2>/dev/null; then
      {
        echo ""
        echo "# Exuma private npm token"
        echo "export UNTITLED_UI_TOKEN=\"$UNTITLED_UI_TOKEN\""
      } >> "$SHELL_RC"
    fi
  fi
fi

if ! gh auth status >/dev/null 2>&1; then
  echo ""
  echo "-> Connexion a GitHub."
  echo "Choisissez GitHub.com, HTTPS, puis connectez-vous dans le navigateur."
  gh auth login
fi

if [ -d "$PROJECT_DIR/.git" ]; then
  echo "-> Projet deja present, mise a jour..."
  git -C "$PROJECT_DIR" pull --ff-only || true
else
  echo "-> Recuperation du projet dans $PROJECT_DIR..."
  git clone "$REPO_URL" "$PROJECT_DIR"
fi

cd "$PROJECT_DIR"

echo "-> Installation des dependances du projet..."
npm install

echo ""
echo "-> Verification de Claude Code..."
if command -v claude >/dev/null 2>&1; then
  claude --version || true
  claude doctor || true
else
  echo "Claude Code est installe, mais il faudra peut-etre rouvrir le Terminal."
fi

echo ""
echo "============================================================"
echo " Installation terminee"
echo "============================================================"
echo ""
echo "Dossier du projet : $PROJECT_DIR"
echo "Pour travailler : ouvrez Claude Code puis ouvrez ce dossier."
echo "Pour lancer le site : double-cliquez start-mac.command dans le dossier Exuma."
echo ""
read -r -p "Appuyez sur Entree pour fermer."
