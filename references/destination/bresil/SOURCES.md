# Reference images — Brésil

Each generated image in `public/destination/bresil/` was produced by feeding the prompt baked into `.claude/skills/destination-generator/gen-images.py` to Gemini 3 Pro Image (Nano Banana Pro) alongside the corresponding reference photograph below.

| Output                        | Reference file                    | Source URL | License |
| ----------------------------- | --------------------------------- | ---------- | ------- |
| `hero-1.png`                  | `hero-1-ref.jpg`                  | TODO       | TODO    |
| `hero-2.png`                  | `hero-2-ref.jpg`                  | TODO       | TODO    |
| `hero-3.png`                  | `hero-3-ref.jpg`                  | TODO       | TODO    |
| `full-image.png`              | `full-image-ref.jpg`              | TODO       | TODO    |
| `split-1.png`                 | `split-1-ref.jpg`                 | TODO       | TODO    |
| `split-2.png`                 | `split-2-ref.jpg`                 | TODO       | TODO    |
| `xp-lagunes-lencois.png`      | `xp-lagunes-lencois-ref.jpg`      | TODO       | TODO    |
| `xp-iguacu-chutes.png`        | `xp-iguacu-chutes-ref.jpg`        | TODO       | TODO    |
| `xp-saveiro-bahia.png`        | `xp-saveiro-bahia-ref.jpg`        | TODO       | TODO    |
| `xp-jaguars-pantanal.png`     | `xp-jaguars-pantanal-ref.jpg`     | TODO       | TODO    |
| `xp-lencois-1.png`            | `xp-lencois-1-ref.jpg`            | TODO       | TODO    |
| `xp-lencois-2.png`            | `xp-lencois-2-ref.jpg`            | TODO       | TODO    |
| `hotel-vila-guara.png`        | `hotel-vila-guara-ref.jpg`        | TODO       | TODO    |
| `hotel-das-cataratas.png`     | `hotel-das-cataratas-ref.jpg`     | TODO       | TODO    |
| `hotel-fasano-salvador.png`   | `hotel-fasano-salvador-ref.jpg`   | TODO       | TODO    |
| `bento-map.png`               | `bento-map-ref.jpg`               | TODO       | TODO    |
| `bento-adresses.png`          | `bento-adresses-ref.jpg`          | TODO       | TODO    |
| `bento-hebergements.png`      | `bento-hebergements-ref.jpg`      | TODO       | TODO    |
| `bento-conciergerie.png`      | `bento-conciergerie-ref.jpg`      | TODO       | TODO    |
| `bento-experiences.png`       | `bento-experiences-ref.jpg`       | TODO       | TODO    |
| `map-lencois.png`             | `map-lencois-ref.jpg`             | TODO       | TODO    |
| `map-salvador.png`            | `map-salvador-ref.jpg`            | TODO       | TODO    |
| `map-iguacu.png`              | `map-iguacu-ref.jpg`              | TODO       | TODO    |
| `map-pantanal.png`            | `map-pantanal-ref.jpg`            | TODO       | TODO    |
| `map-amazonie.png`            | `map-amazonie-ref.jpg`            | TODO       | TODO    |
| `map-rio.png`                 | `map-rio-ref.jpg`                 | TODO       | TODO    |

## Passe du 21 septembre 2026 — les onze images manquantes

Références déposées par l'utilisateur dans ce dossier, renommées en `<nom>-ref.png`.

**Photographies non libres de droit → mode `--inspire`.** La référence sert de brief de contenu, pas de cadre à restyler : le modèle compose une photographie neuve. Une copie graduée resterait une œuvre dérivée.

    node .claude/skills/destination-generator/gen-images.mjs --only <nom> bresil --force --inspire --caption "<sujet>"

| Sortie | Référence | Licence | Traitement |
| --- | --- | --- | --- |
| `split-1.webp` | `split-1-ref.png` | non libre de droit | `--inspire` — la légende rétablit la scène de la page (la baiana fait frire des acarajés, la référence la montrait de dos dans la rue) |
| `xp-saveiro-bahia.webp` | `xp-saveiro-bahia-ref.png` | non libre de droit | `--inspire` |
| `xp-jaguars-pantanal.webp` | `xp-jaguars-pantanal-ref.png` | non libre de droit | `--inspire` |
| `bento-adresses.webp` | `bento-adresses-ref.png` | non libre de droit | `--inspire` |
| `bento-hebergements.webp` | `bento-hebergements-ref.png` | non libre de droit | `--inspire`, deux passes : la première gardait le couloir de piscine entre claustra et mur blanc de la référence, la seconde prend la villa depuis la pelouse |
| `bento-experiences.webp` | `bento-experiences-ref.png` | non libre de droit | `--inspire` |
| `map-salvador.webp` | `map-salvador-ref.png` | non libre de droit | `--inspire` |
| `map-pantanal.webp` | `map-pantanal-ref.png` | non libre de droit | `--inspire` |
| `map-amazonie.webp` | `map-amazonie-ref.png` | non libre de droit | `--inspire` |

**Photographie libre de droit → filtre local, sans Gemini.**

| Sortie | Référence | Licence | Traitement |
| --- | --- | --- | --- |
| `bento-conciergerie.webp` | `bento-conciergerie-ref.png` | libre de droit | cadrage d'origine conservé, filtre Exuma appliqué en local par `.claude/skills/destination-generator/tmp/grade-conciergerie-bresil.mjs` |

**Carte bento → tracé, pas d'image générée.**

`bento-map.webp` est construit par `.claude/skills/destination-generator/tmp/build-bento-map-bresil.mjs` à partir de Natural Earth (world-atlas `countries-10m`, domaine public), aux couleurs relevées sur `public/destination/polynesie/bento-map.png` : fond `#383632`, terre `#f5f2ec`, pastilles `#a5794c`, chiffres blancs en serif. Les six pastilles numérotent les étapes du `placesMap` de la page, dans son ordre. Fernando de Noronha, Trindade et les rochers Saint-Pierre-et-Saint-Paul sont écartés du tracé : à 350 à 1100 km au large, ils étirent la boîte et réduisent le continent à une silhouette étroite.

Le jeu de données ne reste pas dans le dépôt :

    curl -L https://cdn.jsdelivr.net/npm/world-atlas@2/countries-10m.json -o <scratchpad>/countries-10m.json

`bento-map-outline.png` est le contour fourni par l'utilisateur ; il n'a pas servi, le tracé vient de la géométrie.

### Recalage colorimétrique (28 septembre 2026)

Les neuf rendus `--inspire` arrivaient avec une dominante dorée que les photographies d'origine n'avaient pas — l'utilisateur l'a lue comme « pas réel » sur le jaguar. Correction par `.claude/skills/destination-generator/tmp/recolor-bresil.mjs`, qui ne touche pas un pixel de la composition.

Le transfert Reinhardt complet de `recolor-bahamas.mjs` ne convient pas ici : plusieurs références sont des cartes postales en plein soleil, et importer leurs statistiques de luminance éclaircissait la nuit du patio et faisait virer Iguaçu au bleu froid. La variante Brésil ne déplace donc que la chrominance (`a` et `b` dans Lab), bornée à 6 unités et avec une dispersion contrainte entre 0,85 et 1,15 ; la luminance du rendu reste intacte, les noirs gardent leur densité.

`xp-jaguars-pantanal` a par ailleurs été regénéré : le premier rendu plaçait l'animal loin dans un sous-bois ambré. La nouvelle légende demande un téléobjectif, l'animal sur un tiers du cadre, une lumière de matinée couverte et des couleurs vertes.
