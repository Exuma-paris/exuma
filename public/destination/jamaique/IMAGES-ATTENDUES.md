# Images attendues — Jamaïque

Dossier : `public/destination/jamaique/`

**25 sur 25 présentes.** La page est complète.

Le format est le **WebP**, produit automatiquement : déposez vos photos de référence dans `references/destination/jamaique/` et le filtre Exuma génère le `.webp` correspondant. Le nom du fichier de référence doit être `<nom>-ref.png` (ou `.jpg`).

Conseil pour un prochain dépôt : exportez vos photos **en 16/9 direct, sans toile de fond**, et le plus grand possible. Onze références sont arrivées en 1188 × 1080 posées sur un fond blanc de 1920 × 1080, ce qui a produit des bandes blanches qu'il a fallu détourer et régénérer.

## Carrousel du hero

- [x] `hero-1.webp`
- [x] `hero-2.webp`
- [x] `hero-3.webp`

## Bandeau pleine largeur

- [x] `full-image.webp`

## Section texte et images

- [x] `split-1.webp`
- [x] `split-2.webp`

## Expériences

- [x] `xp-appleton-rhum.webp`
- [x] `xp-cafe-blue-mountains.webp`
- [x] `xp-raft-rio-grande-1.webp`
- [x] `xp-raft-rio-grande-2.webp`
- [x] `xp-yacht-montego-bay.webp`

## Hébergements

- [x] `hotel-round-hill.webp`
- [x] `hotel-strawberry-hill.webp`
- [x] `hotel-tryall-club.webp`

## Bloc bento

- [x] `bento-adresses.webp`
- [x] `bento-conciergerie.webp` — photo libre de droit, filtre appliqué en local sans Gemini
- [x] `bento-experiences.webp`
- [x] `bento-hebergements.webp`
- [x] `bento-map.webp` — construite depuis le contour réel de l'île, voir ci-dessous

## Carte interactive

- [x] `map-appleton.webp`
- [x] `map-blue-mountains.webp`
- [x] `map-kingston.webp`
- [x] `map-montego-bay.webp`
- [x] `map-port-antonio.webp`
- [x] `map-treasure-beach.webp`

## Portraits des témoignages

Aucun fichier à fournir : ils réutilisent `hero-1.webp`, `hero-2.webp` et `hero-3.webp`.

## La carte du bloc bento

`bento-map.webp` n'est pas une image générée : elle est construite par
`.claude/skills/destination-generator/tmp/build-bento-map-jamaique.mjs` depuis le
contour administratif réel de l'île (`references/destination/jamaique/geo/jm-land.json`,
source geoBoundaries ADM0), dans la palette de la carte de la Polynésie : terre crème,
pastilles brunes, tracé pointillé blanc.

Les quatre chiffres reprennent l'itinéraire de la page : Port Antonio, les Blue
Mountains, Kingston, Montego Bay. Pour les déplacer, éditez la liste `stops` du script
et relancez-le.
