# Sources — service / mobilité

## accueil-aeroport

- **Référence** : https://store.lyonaeroports.com/media/wysiwyg/ADL/accueil-personnalise/service-accompagnement_header_2023.jpg
- **Sujet** : accueil personnalisé à la dépose-minute, agent en uniforme tenant une pancarte nominative face à une voyageuse et sa valise cabine, façade vitrée du terminal en fond.
- **Droits** : photographie de Lyon Aéroports, crédit EXIF « Guillaume PERRET ». Nous n'avons aucune licence dessus.
- **Mode de génération** : `--inspire`, et non le regrade par défaut. Un regrade conserverait le cadrage de l'original et produirait une œuvre dérivée ; `--inspire` ne lit la référence que comme brief de sujet et d'ambiance, et compose un cadre original.
- **Contraintes de marque appliquées** : aucun visage identifiable, aucun texte lisible, aucun logo ni marque.

```
GEMINI_API_KEY=… python3 .claude/skills/destination-generator/gen-images.py \
  --root service --only accueil-aeroport --inspire --caption "<voir ci-dessous>" mobilite
```

## bagages-terminal

- **Référence** : la même photo Lyon Aéroports que `accueil-aeroport`, réutilisée comme brief d'ambiance et de lieu (trottoir de terminal, lumière rasante, geste de prise en charge). Elle ne contient aucun instrument : le sujet vient entièrement de la consigne, pas de la référence.
- **Sujet demandé** : un chauffeur de dos, visage caché, portant un étui rigide d'instrument de musique jusqu'à une berline dont la portière arrière est ouverte.
- **Droits** : voir la section précédente. Même raison, même mode `--inspire`.
- **Recadrage** : la rangée 04 du `featureRows` s'affiche en portrait. Le master 16:9 sert de source à `bagages-sensibles-3x4.png`, dérivé par `crop-images.py` et centré sur le sujet détecté. Les dérivés `-1x1` et `-9x16` produits au passage ont été supprimés, aucun autre dossier du dépôt n'en conserve.
- **Réserve** : la silhouette de l'étui tire davantage vers la guitare que vers le violon. Elle se lit sans ambiguïté comme un instrument à cordes, ce qui suffit au propos, mais une vraie référence photo d'étui de violon donnerait un résultat plus juste.

## preparation (bloc « Un jour de départ », image portrait)

- **Source** : photo du shooting marque employeur Exuma, `EXUMA#Shooting#MarqueEmployeur#Photographe©JulesDESPRETZ-5.jpg`, dossier SwissTransfer `399380a2`.
- **Droits** : shooting commandé par Exuma, crédit photographe Jules Despretz.
- **Aucune génération** : la photo est utilisée telle quelle, simplement recadrée en 3:4 et réduite en 1080×1440. Elle n'est pas passée par `gen-images.py`. Sa composition et son étalonnage sont déjà dans la palette, et le piège documenté du script est justement d'inventer un membre en trop sur ce type d'image.
- **Filigrane** : les fichiers du dossier sont des épreuves portant la signature circulaire « Jules Despretz Photographe » en bas à droite. Le cadrage coupe la largeur à 5300 px sur 5560 pour l'exclure. **À remplacer par le fichier livré sans filigrane** dès que le photographe l'a fourni : la parade au recadrage ne marchera pas sur toutes les images du lot.

## valise (bloc « Un jour de départ », image carrée)

- **Référence** : vignette web (encrypted-tbn0.gstatic.com), 736×416, valise ouverte au sol dans un salon.
- **Droits** : photo tierce sans licence, et de toute façon trop petite pour servir de master. D'où le mode `--inspire`, qui compose un cadre original.
- **Sujet demandé** : valise ouverte en cours de préparation dans un appartement parisien au matin, sans aucune personne dans le cadre.
- **Recadrage** : le bloc affiche un carré, donc `valise-1x1.png` dérivé par `crop-images.py`. Les variantes 3:4 et 9:16 ont été supprimées.

### Historique de `bagages-terminal`

Trois passes, chacune corrigeant un défaut constaté à pleine résolution :

1. **Trottoir extérieur** : bras fusionnés à la poignée de la valise, une seule main pour deux avant-bras, et visage client identifiable. Rejetée.
2. **Hall vide** : anatomie et anonymat corrects, mais le terminal désert « faisait IA ». Rejetée.
3. **Hall animé** (retenue) : file d'enregistrement, chariots à bagages chargés, passants en flou de mouvement, voyageurs assis. Les figurants restent petits et flous, aucun visage ne se résout, aucune signalétique n'est lisible. Anatomie du porteur vérifiée main par main.

**Nommage** : le fichier a été renommé à chaque passe (`bagages-sensibles` → `bagages-hall` → `bagages-terminal`) parce que remplacer une image sans changer son nom laisse le cache de l'aperçu servir l'ancienne version. La vraie solution est de vider `.next/dev/cache/images`, le renommage n'est qu'une parade.
