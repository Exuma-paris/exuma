# Sources — service / conciergerie

## celebrations (rangée 01)

- **Référence** : https://jouretnuit.paris/wp-content/uploads/2020/07/diner-prestige-tour-eiffel.jpg — terrasse parisienne, table dressée pour un dîner privé, tour Eiffel et toits en fond, aucun convive.
- **Droits** : photo tierce (jouretnuit.paris), aucune licence. D'où le mode `--inspire`, qui compose un cadre original au lieu de regrader une copie.
- **Écart volontaire avec la référence** : la tour Eiffel a été retirée. Deux raisons convergentes. `--inspire` interdit de reprendre les détails identifiants du cadre d'origine, et la conciergerie opère partout : un monument reconnaissable épinglerait la page sur une seule ville.
- **Autre écart** : la référence est en lumière grise de jour. L'image produite est à l'heure bleue avec les bougies allumées, ce qui rejoint le paragraphe sur « le moment exact où la lumière baisse » et ramène l'image dans la palette chaude de la maison.
- **Détail demandé** : un briquet posé près d'une bougie et une carte à chaque place, pour que le cadre dise la minute qui précède plutôt qu'une photo de catalogue.
- **Contrôles** : aucune personne, aucune main, aucun monument identifiable. Les cartes de menu portent un tracé illisible à l'échelle d'affichage.

## conseillere-3x4 (bloc « Une demande, un soir », image portrait)

- **Source** : shooting marque employeur Exuma, `EXUMA#Shooting#MarqueEmployeur#Photographe©JulesDESPRETZ-129.jpg`.
- **Droits** : shooting commandé par Exuma, crédit Jules Despretz.
- **Aucune génération** : recadrage seul, en 3:4, réduit en 1080×1440.
- **Filigrane** : les fichiers du lot sont des épreuves signées en bas à droite. Ici la coupe se fait **par le bas**, ce qui emporte le filigrane sans rien retirer sur les côtés. C'est la meilleure méthode pour ce lot, à préférer au rognage latéral. **À remplacer par le fichier livré sans filigrane.**

## personnel (rangée 02)

- **Référence** : vignette web (encrypted-tbn0.gstatic.com), 398×577, une personne en noir traversant un appartement haussmannien avec des fleurs, en flou de mouvement.
- **Droits** : photo tierce sans licence, et trop petite pour servir de master. Mode `--inspire`.
- **Pourquoi ce sujet** : c'est le seul cadre qui couvre toute la rangée. Le texte annonce nounou, chef, majordome, professeur de ski et skipper : un chef en cuisine n'aurait dit que « chef ». Une silhouette de personnel de maison dit « quelqu'un est là pour vous ». Le cadre prolonge aussi la rangée 01, où la salle est prête sans personne : ici on voit, sans la reconnaître, la personne qui l'a préparée.
- **Le flou de mouvement est une sécurité**, pas un effet : il garantit qu'aucun visage ne se résout.
- **Contrôles** : une seule personne, une seule main visible sur les tiges, anatomie correcte, aucune réception d'hôtel, aucun texte.
- **Recadrage** : rangée paire donc portrait, `personnel-3x4.png` dérivé par `crop-images.py`. Variantes 1:1 et 9:16 supprimées.

## À produire

- `reservations.png` — rangée 03, cadrage paysage : le comptoir d'une salle pleine, verres alignés, cuisine ouverte derrière.
- `table.png` — carré du récit : une table de restaurant dressée pour six, vue de haut, sans convives.
