# Onboarding Exuma pour les redactrices Windows

Bienvenue. Ce guide explique comment installer Exuma et travailler avec Claude Code sur un ordinateur Windows, sans apprendre Git, GitHub, Node.js ou le terminal.

Objectif : vous recevez deux fichiers d'installation, vous double-cliquez, vous vous connectez a GitHub et Claude, puis vous pouvez demander des modifications en francais.

## Avant de commencer

Il vous faut :

1. Un ordinateur Windows 10 ou Windows 11.
2. Un compte GitHub qui a accepte l'invitation au depot `RemiBootnow/exuma`.
3. Un compte Claude compatible avec Claude Code.
4. Le token `UNTITLED_UI_TOKEN` fourni par Remi pour installer les dependances privees.
5. Une connexion internet stable.
6. Si vous devez generer des images : une cle `GEMINI_API_KEY` fournie par Remi ou creee depuis Google AI Studio.

Ne mettez jamais une cle API dans GitHub ou dans un fichier que Claude vous demande de publier.

## Installation

Remi vous envoie deux fichiers :

```text
installation\install-windows.bat
installation\install-windows.ps1
```

Il peut aussi vous envoyer un troisieme fichier :

```text
installation\exuma-secrets.env
```

Gardez tous les fichiers recus dans le meme dossier, par exemple `Telechargements`.

1. Ouvrez le dossier `installation`.
2. Double-cliquez sur `install-windows.bat`.
3. Si Windows affiche un avertissement, cliquez sur **Informations complementaires**, puis **Executer quand meme**.
4. Laissez la fenetre ouverte.
5. Si Remi vous a fourni `exuma-secrets.env`, le token est lu automatiquement. Sinon, quand le script demande le token `UNTITLED_UI_TOKEN`, collez celui fourni par Remi. Le texte peut ne pas s'afficher pendant que vous collez, c'est normal.
6. Quand GitHub demande une connexion, choisissez `GitHub.com`, puis `HTTPS`, et connectez-vous dans le navigateur.
7. Quand Claude Code demande une connexion, connectez-vous avec votre compte Claude.

Le script installe automatiquement :

- Git
- GitHub CLI
- Node.js
- Claude Code
- Les dependances du projet Exuma

Le projet est installe ici :

```text
C:\Users\<votre-nom>\Exuma
```

Vous pouvez relancer `install-windows.bat` plus tard : il est concu pour mettre a jour l'installation sans casser le projet.

## Ouvrir le projet dans Claude Code

Apres l'installation :

1. Ouvrez Claude Code.
2. Ouvrez le dossier `Exuma`.
3. Si Claude demande une connexion, connectez-vous avec votre compte Claude.
4. Demandez :

```text
Peux-tu verifier que le projet est bien installe ?
```

Claude doit lire le projet et vous repondre en francais.

## Voir le site en local

Dans le dossier `Exuma`, double-cliquez :

```text
start-windows.bat
```

Le site s'ouvre normalement sur :

```text
http://localhost:3000
```

Laissez la fenetre ouverte pendant que vous regardez le site. Pour arreter le site, fermez la fenetre ou appuyez sur `Ctrl+C`.

## Travailler avec Claude

Vous pouvez demander des modifications naturellement :

```text
Corrige la typo dans la page Rome.
```

```text
Ajoute un paragraphe plus precis sur les hebergements a Marrakech.
```

```text
Peux-tu creer une nouvelle destination avec /destination-generator ?
```

Pour creer une page complete, utilisez :

```text
/destination-generator
```

ou :

```text
/entity-generator
```

Claude vous pose les questions une par une. Repondez simplement en francais.

## Publier

Quand vos modifications sont pretes :

```text
/publish
```

Claude cree une previsualisation Vercel et vous donne un lien. Ouvrez ce lien et verifiez le resultat.

Si quelque chose ne va pas, revenez dans Claude et demandez la correction :

```text
L'image hero est trop sombre, peux-tu la remplacer ?
```

Quand tout est bon :

```text
/publish merge
```

La mise en ligne prend environ une minute.

Pour retrouver le lien d'aperçu :

```text
/publish status
```

## Images et cle Gemini

La generation d'images demande une cle `GEMINI_API_KEY`.

Si Remi vous donne une cle, demandez a Claude :

```text
Peux-tu configurer ma cle Gemini pour ce projet sans la commiter ?
```

Important : la cle doit rester locale a votre ordinateur.

## En cas de probleme

Envoyez a Remi :

1. Une capture d'ecran.
2. Ce que vous vouliez faire.
3. Le dernier message d'erreur visible.

Problemes frequents :

- `winget est introuvable` : installer "App Installer" depuis le Microsoft Store, puis relancer `install-windows.bat`.
- GitHub refuse l'acces : verifier que l'invitation au depot a bien ete acceptee.
- `npm install` echoue sur `@untitledui-pro` : verifier le token `UNTITLED_UI_TOKEN` avec Remi.
- Claude Code n'est pas reconnu juste apres installation : fermer et rouvrir Claude Code, ou redemarrer Windows.
