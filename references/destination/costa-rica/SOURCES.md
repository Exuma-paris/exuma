# Reference images — Costa Rica

Les 25 visuels de `public/destination/costa-rica/` proviennent de trois filières distinctes, qui n'ont pas le même statut juridique. Le détail compte : il conditionne ce qu'on peut publier.

## 1. Lot d'août — références libres de droits, grade seul

Références fournies par Lya le 25 août 2026 et déclarées libres de droits. Traitées en mode grade seul (`gen-images.mjs` sans option) : la composition de la référence est conservée à l'identique, seul le rendu change. Sortie WebP 4096x2304, qualité 96.

| Output                              | Reference file                          | Source URL | Licence          |
| ----------------------------------- | --------------------------------------- | ---------- | ---------------- |
| `hero-2.webp`                       | `hero-2-ref.png`                        | TODO       | Libre de droits  |
| `full-image.webp`                   | `full-image-ref.png`                    | TODO       | Libre de droits  |
| `split-1.webp`                      | `split-1-ref.png`                       | TODO       | Libre de droits  |
| `split-2.webp`                      | `split-2-ref.jpeg`                      | TODO       | Libre de droits  |
| `hotel-nantipa.webp`                | `hotel-nantipa-ref.jpg`                 | TODO       | Libre de droits  |
| `hotel-pasha.webp`                  | `hotel-pasha-ref.png`                   | TODO       | Libre de droits  |
| `hotel-four-seasons-papagayo.webp`  | `hotel-four-seasons-papagayo-ref.png`   | TODO       | Libre de droits  |
| `bento-adresses.webp`               | `bento-adresses-ref.jpg`                | TODO       | Libre de droits  |
| `bento-hebergements.webp`           | `bento-hebergements-ref.jpg`            | TODO       | Libre de droits  |
| `bento-experiences.webp`            | `bento-experiences-ref.jpg`             | TODO       | Libre de droits  |
| `map-arenal.webp`                   | `map-arenal-ref.png`                    | TODO       | Libre de droits  |
| `map-monteverde.webp`               | `map-monteverde-ref.png`                | TODO       | Libre de droits  |
| `map-santa-teresa.webp`             | `map-santa-teresa-ref.jpg`              | TODO       | Libre de droits  |

Quatre de ces images ont depuis été **reprises en filtre local, sans Gemini** : `hero-2`, `full-image`, `split-1` et `split-2`. Le mode grade seul passe malgré tout par le modèle, qui régénère les pixels ; le filtre local applique le rendu Exuma sur le fichier fourni sans y toucher autrement. Les neuf autres images de ce lot sont encore en grade Gemini.

Trois références de ce lot (`full-image`, `map-arenal`, `split-1`) étaient des exports 3840x2160 comportant des bandes noires latérales d'environ 300 px. Elles ont été recadrées en 16:9 plein cadre avant traitement ; les fichiers d'origine sont conservés dans `_originaux/`.

## 2. Lot de septembre — références tierces, composition recomposée

Références fournies par Lya le 10 septembre 2026 et **signalées par elle comme non libres de droits**. Elles n'ont donc pas été traitées en grade seul, qui aurait produit une copie recolorée de la photo d'origine, c'est-à-dire une œuvre dérivée. Elles sont passées en mode `--inspire`, qui traite la référence comme un brief de sujet et d'ambiance et compose une photographie neuve : espèce, action, terrain, végétation, saison, heure et direction de la lumière sont repris, la position de caméra, l'angle et le cadrage changent. Une consigne de cadrage propre à chaque image a été passée en `--caption`.

| Output                    | Reference file                  | Changement de point de vue demandé                                              |
| ------------------------- | ------------------------------- | -------------------------------------------------------------------------------- |
| `hero-1.webp`             | `hero-1-ref.png`                | Aérienne plus basse, caméra tournée vers le large, chenal en diagonale           |
| `hero-3.webp`             | `hero-3-ref.png`                | Palette ambre conservée, caméra au bord de l'eau, regard le long du ressac       |
| `xp-aquiares-1.webp`      | `xp-aquiares-1-ref.png`         | Depuis l'intérieur de la plantation, dans un rang qui remonte                    |
| `xp-aquiares-2.webp`      | `xp-aquiares-2-ref.png`         | De côté et au-dessus, mains entrant par la droite, tas en bas de cadre           |
| `xp-tortues.webp`         | `xp-tortues-ref.png`            | Direction inversée : la tortue remonte vers la plage. Caméra au niveau du sable  |
| `xp-curu.webp`            | `xp-curu-ref.png`               | Même espèce, vue de trois quarts arrière, l'animal regardant le large            |
| `map-tortuguero.webp`     | `map-tortuguero-ref.png`        | Caméra tournée vers une rive, canal en fuite diagonale                           |
| `map-papagayo.webp`       | `map-papagayo-ref.png`          | Aérienne plus basse, côté opposé, une anse en premier plan                       |

Point à garder en tête : un changement d'angle réduit le risque, il ne l'annule pas. Ce qui est protégé dans une photographie, c'est le choix de cadrage, d'angle, de lumière et d'instant, pas le sujet lui-même. La sécurité réelle passe par des banques libres de droits ou un shooting commandé.

## 2 bis. Lot de septembre — références libres de droits, filtre local sans Gemini

Ces trois références ont été confirmées libres de droits par Lya. Elles n’avaient donc pas à changer de point de vue et ne sont **pas passées par Gemini** : la photo fournie est reprise à l’identique, seul le filtre Exuma est appliqué en local (saturation 0.84, brightness 1.015, gain [0.86, 0.855, 0.83], lift [18, 15, 11], grain gaussien sigma 6, WebP q96). Aspect natif conservé, grand côté plafonné à 4096 px, aucun agrandissement.

| Output                    | Reference file                  | Sortie      |
| ------------------------- | ------------------------------- | ----------- |
| `xp-nectandra.webp`       | `xp-nectandra-ref.png`          | 581x772     |
| `map-curu.webp`           | `map-curu-ref.png`              | 746x576     |
| `bento-conciergerie.webp` | `bento-conciergerie-ref.png`    | 375x314     |

Ces trois sorties sont à la résolution native des fichiers fournis, nettement plus basse que les 4096x2304 du reste de la série : reprendre la photo à l’exactitude interdit de l’agrandir. Script : `.claude/skills/destination-generator/tmp/grade-costa-rica.mjs`.

## 3. `bento-map.webp` — carte vectorielle, sans photo ni IA

Construite par script à partir des frontières administratives réelles, dans la palette et le style de pastilles de `public/destination/polynesie/bento-map.png` : terre en `#f5f2ec`, pastilles en `#a5794c`, tracé pointillé blanc, fond transparent (l'anthracite vient de la tuile elle-même). Sortie 2136x1104 avec canal alpha.

- Géométrie : `geo/cri-adm0.geojson`, geoBoundaries gbOpen CRI ADM0 (dérivé d'OpenStreetMap). Une attribution peut être requise.
- Les 12 anneaux de l'île du Coco, à 500 km au large, sont écartés du cadrage.
- Le polygone renvoyé par Nominatim a été essayé d'abord et rejeté : il ne contient aucun point dans le golfe de Nicoya et referme la côte pacifique par une ligne droite.
- Étapes : 1 Tortuguero, 2 Arenal, 3 Santa Teresa, 4 Papagayo. Monteverde est écartée parce qu'elle se trouve à 25 km d'Arenal, soit 44 px à cette échelle, et que les deux pastilles de 48 px se chevaucheraient.
- Script : `.claude/skills/destination-generator/tmp/bento-map-cr.mjs` (variante ponctuelle de `build-bento-map.mjs`, qui est figé sur la Tanzanie).

## Notes

Les portraits des témoignages réutilisent `hero-1/2/3.webp` : aucun fichier dédié.

Les binaires de référence sont gitignorés (`references/**/*.{jpg,jpeg,png,webp}`) ; ce `SOURCES.md` et les fichiers `geo/*.geojson` sont suivis par git.
