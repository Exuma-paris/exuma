# Reference images — Zimbabwe

Chaque image de `public/destination/zimbabwe/` est produite à partir de la photo de référence correspondante, déposée par l'auteur. Trois traitements coexistent selon le statut des droits, et la colonne « Traitement » dit lequel a servi.

- **Filtre local** — photo libre de droit, reprise à l'identique, filtre Exuma appliqué en local sans passage par Gemini (`.claude/skills/destination-generator/tmp/grade-conciergerie-zimbabwe.mjs`).
- **Filtre Exuma** — photo libre de droit, passée dans `gen-images.mjs` : composition conservée, étalonnage seul.
- **Inspiré** — photo **non libre de droit** : `gen-images.mjs --inspire`, la référence sert de brief de contenu et l'image produite est une composition neuve. Jamais de dérivé de la photo protégée.
- **Tracé** — image construite par script, sans IA.

| Output                            | Reference file                       | Droits            | Traitement    |
| --------------------------------- | ------------------------------------ | ----------------- | ------------- |
| `hero-1.webp`                     | `hero-1-ref.png`                     | libre de droit    | Filtre Exuma  |
| `hero-2.webp`                     | `hero-2-ref.png`                     | libre de droit    | Filtre Exuma  |
| `hero-3.webp`                     | `hero-3-ref.png`                     | libre de droit    | Filtre Exuma  |
| `full-image.webp`                 | `full-image-ref.png`                 | libre de droit    | Filtre Exuma  |
| `split-1.webp`                    | `split-1-ref.png`                    | libre de droit    | Filtre Exuma  |
| `split-2.webp`                    | `split-2-ref.png`                    | libre de droit    | Filtre Exuma  |
| `xp-chutes-a-pied-1.webp`         | `xp-chutes-a-pied-1-ref.jpg`         | libre de droit    | Filtre Exuma  |
| `xp-chutes-a-pied-2.webp`         | `xp-chutes-a-pied-2-ref.png`         | libre de droit    | Filtre Exuma  |
| `xp-croisiere-zambeze.webp`       | `xp-croisiere-zambeze-ref.png`       | libre de droit    | Filtre Exuma  |
| `xp-helico-chutes.webp`           | `xp-helico-chutes-ref.png`           | **non libre**     | Inspiré       |
| `xp-safari-vehicule.webp`         | `xp-safari-vehicule-ref.jpg`         | libre de droit    | Filtre Exuma  |
| `hotel-stanley-livingstone.webp`  | `hotel-stanley-livingstone-ref.jpg`  | libre de droit    | Filtre Exuma  |
| `hotel-linkwasha.webp`            | `hotel-linkwasha-ref.png`            | libre de droit    | Filtre Exuma  |
| `hotel-pamushana.webp`            | `hotel-pamushana-ref.png`            | libre de droit    | Filtre Exuma  |
| `bento-map.webp`                  | aucune                               | -                 | Tracé         |
| `bento-adresses.webp`             | `bento-adresses-ref.jpg`             | libre de droit    | Filtre Exuma  |
| `bento-hebergements.webp`         | `bento-hebergements-ref.jpg`         | libre de droit    | Filtre Exuma  |
| `bento-conciergerie.webp`         | `bento-conciergerie-ref.png`         | libre de droit    | Filtre local  |
| `bento-experiences.webp`          | `bento-experiences-ref.jpg`          | libre de droit    | Filtre Exuma  |
| `map-victoria-falls.webp`         | `map-victoria-falls-ref.png`         | **non libre**     | Inspiré       |
| `map-hwange.webp`                 | `map-hwange-ref.png`                 | libre de droit    | Filtre Exuma  |
| `map-mana-pools.webp`             | `map-mana-pools-ref.png`             | **non libre**     | Inspiré       |
| `map-matobo.webp`                 | `map-matobo-ref.png`                 | libre de droit    | Filtre Exuma  |
| `map-great-zimbabwe.webp`         | `map-great-zimbabwe-ref.png`         | libre de droit    | Filtre Exuma  |
| `map-malilangwe.webp`             | `map-malilangwe-ref.png`             | **non libre**     | Inspiré       |

## Sujets demandés en mode inspiré

La légende passée à `--caption` porte le vrai sujet : c'est là qu'un décalage entre la photo fournie et le contenu de la page a été corrigé.

| Output                    | Sujet demandé                                                                                                                  |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `xp-helico-chutes.webp`   | Vue aérienne des chutes en fin d'après-midi, le fleuve en amont, la colonne d'embruns, les gorges en zigzag. Aucun appareil dans le cadre. |
| `map-victoria-falls.webp` | Les chutes vues du sol depuis le sentier de la rive zimbabwéenne, la forêt humide au premier plan. Lumière du matin.            |
| `map-mana-pools.webp`     | Un bras du Zambèze et la forêt claire d'albidas, éléphants au loin. La photo fournie était un gros plan d'éléphant, déjà vu deux fois sur la page. |
| `map-malilangwe.webp`     | Les falaises de grès de Chilojo au-dessus de la brousse. La photo fournie était une savane générique sans les falaises que la page annonce. |

## Correction appliquée au-delà du filtre

| Output                  | Instruction passée à Gemini                                   |
| ----------------------- | ------------------------------------------------------------- |
| `hotel-pamushana.webp`  | remise au net de la photographie de référence, qui était floue |

## Carte bento

`bento-map.webp` est construite par `.claude/skills/destination-generator/tmp/build-bento-map-zimbabwe.mjs`, sans IA. Le tracé vient de Natural Earth (world-atlas `countries-10m`, domaine public), la palette est relevée sur `public/destination/polynesie/bento-map.png`, et les six pastilles numérotent les étapes du `placesMap` de la page, dans son ordre.
