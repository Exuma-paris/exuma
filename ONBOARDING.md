# Onboarding rédacteur, projet Exuma

Bienvenue. Ce guide vous explique comment publier du contenu sur le site Exuma sans jamais avoir à apprendre git, GitHub, ni la ligne de commande. Vous parlez à Claude en français, vous décrivez ce que vous voulez changer, et Claude se charge du reste.

Prévoir 15 minutes pour la première mise en place. Une fois fait, publier une modification prend quelques minutes.

---

## 1. Avant de commencer (une seule fois)

À faire la première fois, dans cet ordre :

1. **Installer Claude Code.** Téléchargez l'application depuis [claude.ai/code](https://claude.ai/code) et connectez-vous avec votre compte Anthropic.

2. **Recevoir l'accès au projet.** Rémi vous envoie une invitation au repository GitHub `RemiBootnow/exuma`. Acceptez l'invitation depuis votre boîte mail.

3. **Installer `gh` (l'outil GitHub).** Dans un terminal :
   ```bash
   brew install gh   # sur Mac
   gh auth login     # puis suivre les étapes, choisir "GitHub.com" et "HTTPS"
   ```
   Si vous n'êtes pas à l'aise avec le terminal, demandez à Rémi de le faire avec vous, c'est cinq minutes.

4. **Récupérer une clé Gemini (pour générer les images).** Allez sur [aistudio.google.com](https://aistudio.google.com), créez une clé API gratuite, puis ajoutez-la à votre profil shell :
   ```bash
   echo 'export GEMINI_API_KEY="votre-clé-ici"' >> ~/.zshrc
   source ~/.zshrc
   ```

5. **Cloner le projet.** Une seule fois :
   ```bash
   gh repo clone RemiBootnow/exuma
   ```
   Puis ouvrez le dossier `exuma` dans Claude Code (`File > Open`).

---

## 2. Démarrer une session de travail

Chaque fois que vous voulez modifier le site :

1. Ouvrez Claude Code.
2. Ouvrez le projet Exuma (il devrait apparaître dans votre liste récente).
3. Claude crée automatiquement un espace de travail isolé pour vous. Vous pouvez modifier ce que vous voulez sans risquer de casser le travail d'un collègue.

C'est tout. Pas de "branche" à créer, pas de commande à taper. Vous êtes prêt à écrire.

---

## 3. Créer du contenu

Trois manières, du plus simple au plus complet :

### A. Demander en français

Pour des petites modifications, parlez naturellement à Claude :

> *"Corrige la typo dans la description de Bora Bora."*
> *"Ajoute une section sur la gastronomie sur la page Rome, environ trois paragraphes."*
> *"Change le titre de la page Marrakech."*

Claude lit le code, applique la modification, et vous montre ce qui a changé.

### B. Utiliser `/destination-generator`

Pour créer une nouvelle destination (ex. Saint-Barth, Patagonie, Kyoto), tapez :

```
/destination-generator
```

Claude vous pose quelques questions (nom de la destination, expériences à inclure, hôtels, collaborateur référent), puis génère tout le squelette de la page : structure, texte, références d'images, fiches d'expériences et d'hôtels. Vous fournissez ensuite les liens d'images de référence, Claude les télécharge et les transforme.

### C. Utiliser `/entity-generator`

Pour créer une expérience (ex. "Cours de samba à Mangueira") ou un hébergement (ex. "Hôtel Belmond Cap Juluca") en page complète :

```
/entity-generator
```

Même principe : Claude vous guide étape par étape.

---

## 4. Publier (mettre en ligne)

Une fois vos modifications faites :

1. **Demandez un aperçu :**
   ```
   /publish
   ```
   Claude pousse vos changements et vous donne un lien de prévisualisation Vercel en moins de 2 minutes. C'est votre site, version "brouillon", visible uniquement par vous et l'équipe.

2. **Ouvrez le lien.** Vérifiez que tout est comme vous le voulez : textes, images, mise en page, navigation.

3. **Si quelque chose ne va pas :** revenez sur Claude Code, décrivez le problème en français (*"l'image hero est trop sombre, change-la"*, *"corrige cette typo"*), puis relancez `/publish`. Le lien d'aperçu se met à jour automatiquement.

4. **Si tout est bon, mettez en ligne :**
   ```
   /publish merge
   ```
   La production se déploie en environ une minute. Votre modification est en ligne, visible publiquement.

Vous avez perdu le lien d'aperçu ? Tapez `/publish status`, Claude vous le redonne.

---

## 5. Quand ça casse

Vous pouvez modifier n'importe quoi dans le projet. Aucune modification n'est définitive avant `/publish merge`, et même après, tout peut être annulé. **N'ayez pas peur de tester.**

Si quelque chose ne fonctionne pas comme prévu :

1. **Arrêtez** ce que vous êtes en train de faire (ne cliquez pas sur `/publish merge`).
2. **Faites une capture d'écran** de Claude Code (le message d'erreur, ce que vous avez tapé).
3. **Envoyez-la à Rémi** sur Slack, avec une phrase de contexte (*"je voulais faire X, ça me dit Y"*).

Si la prévisualisation Vercel échoue (Claude vous le dira en rouge), c'est que le code est cassé. Décrivez le problème à Claude, il corrigera. Si vous ne comprenez pas, ping Rémi.

---

## Quelques règles utiles à connaître

- **Pas de tirets cadratins (`—`)** dans les textes. Utilisez une virgule, un point, ou des parenthèses. Si vous oubliez, `/publish` les retire automatiquement.
- **Le ton Exuma :** voir `.claude/STYLE.md` pour les règles éditoriales (vocabulaire interdit, structure des phrases, etc.). Claude les connaît et les applique automatiquement quand vous utilisez les générateurs.
- **Une session = une modification cohérente.** Si vous voulez changer deux choses non liées (ex. une typo sur Rome et une nouvelle destination), faites deux sessions et deux `/publish` séparés. Plus simple à relire pour vous, plus facile à annuler si besoin.

---

Bon courage. Pour toute question qui ne trouve pas sa réponse ici, demandez à Rémi.
