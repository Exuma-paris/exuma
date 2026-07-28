# Onboarding equipe Exuma, notes pour Remi

Les redactrices utilisent uniquement Windows. Le parcours officiel est donc Windows-only.

## Fichiers a envoyer

Envoyer ces deux fichiers ensemble :

- `installation/install-windows.bat`
- `installation/install-windows.ps1`

Optionnellement, envoyer aussi :

- `installation/exuma-secrets.env`

Les fichiers doivent rester dans le meme dossier `installation`. L'utilisatrice double-clique seulement sur `install-windows.bat`.

Ne pas envoyer les fichiers Mac sauf besoin exceptionnel.

## Avant d'envoyer les fichiers

1. Inviter l'utilisatrice au repo GitHub `RemiBootnow/exuma`.
2. Verifier qu'elle a accepte l'invitation.
3. Verifier qu'elle a un compte Claude compatible avec Claude Code.
4. Lui fournir `UNTITLED_UI_TOKEN`, soit oralement, soit via un fichier `exuma-secrets.env` non commite. Sans ce token, `npm install` ne peut pas installer `@untitledui-pro/icons`.
5. Decider si elle doit generer des images.
6. Si oui, lui fournir une cle `GEMINI_API_KEY` via un canal securise, jamais dans GitHub.

## Ce que le script Windows installe

- Git via `winget`
- GitHub CLI via `winget`
- Node.js LTS via `winget`
- Claude Code via l'installateur natif officiel
- Le depot Exuma dans `%USERPROFILE%\Exuma`
- Les dependances npm du projet

## Limites connues

- `winget` doit etre disponible. S'il manque, installer "App Installer" depuis le Microsoft Store.
- Le premier login GitHub reste interactif : l'utilisatrice doit autoriser GitHub dans le navigateur.
- Le premier login Claude reste interactif.
- Si `exuma-secrets.env` est present a cote du script, le script configure automatiquement `UNTITLED_UI_TOKEN` et `GEMINI_API_KEY`.
- Si l'entreprise bloque PowerShell, il faudra autoriser l'execution locale du fichier ou faire une installation accompagnee.

## Test recommande

Tester avec un compte GitHub non-admin, proche du profil reel d'une redactrice :

```text
1. Double-cliquer install-windows.bat
2. Se connecter a GitHub
3. Ouvrir Claude Code
4. Ouvrir C:\Users\<user>\Exuma
5. Demander "verifie que le projet est installe"
6. Double-cliquer start-windows.bat
7. Ouvrir http://localhost:3000
8. Lancer /publish sur une petite modification de test
```
