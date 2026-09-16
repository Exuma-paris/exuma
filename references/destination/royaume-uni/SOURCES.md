# Reference images — Royaume-Uni

Les photos de cette page ont été choisies et déposées par l'équipe dans ce
dossier. Elles se répartissent en trois lots, traités différemment selon leurs
droits :

- **A** — libres de droit : reprises telles quelles, filtre Exuma en local, sans Gemini.
- **A bis** — deux d'entre elles, trop basse définition, repassées en 4K par Gemini
  en mode restylage (composition conservée à l'identique).
- **B** — non libres de droit : servent de brief à Gemini, qui compose une image neuve.
- **C** — la carte du bloc bento, tracée depuis une géométrie publique, sans IA.

Le filtre local du lot A est appliqué par
`.claude/skills/destination-generator/tmp/grade-royaume-uni.mjs` — désaturation
douce, tons denses, grain 35 mm (saturation 0.84, brightness 1.015, gain
[0.86, 0.855, 0.83], lift [18, 15, 11], grain gaussien sigma 6, sortie WebP q96,
grand côté plafonné à 4096 px).

Les fichiers du lot A portaient une double extension (`hero-2.png.png`) et, pour
la plupart, des bandes transparentes de part et d'autre de l'image : le script
détecte la boîte opaque, la rogne avec deux pixels de marge, puis retire la
couche alpha avant le filtre.

## A — Photos libres de droit, filtrées en local (16 images)

| Sortie                    | Fichier de référence           | Source URL | Licence |
| ------------------------- | ------------------------------ | ---------- | ------- |
| `hero-1.webp`             | `hero-1.png`                   | TODO       | libre de droit |
| `hero-2.webp`             | `hero-2.png.png`               | TODO       | libre de droit |
| `hero-3.webp`             | `hero-3.png.png`               | TODO       | libre de droit |
| `full-image.webp`         | `full-image.png.png`           | TODO       | libre de droit |
| `split-1.webp`            | `split-1.png.png`              | TODO       | libre de droit |
| `split-2.webp`            | `split-2.png.png`              | TODO       | libre de droit |
| `xp-islay.webp`           | `xp-islay.png.png`             | TODO       | libre de droit |
| `hotel-connaught.webp`    | `hotel-connaught.png.png`      | TODO       | libre de droit |
| `bento-adresses.webp`     | `bento-adresses.png.png`       | TODO       | libre de droit |
| `bento-hebergements.webp` | `bento-hebergements.png.png`   | TODO       | libre de droit |
| `bento-conciergerie.webp` | `bento-conciergerie.png.png`   | TODO       | libre de droit |
| `bento-experiences.webp`  | `bento-experiences.png.png`    | TODO       | libre de droit |
| `map-cotswolds.webp`      | `map-cotswolds.png.png`        | TODO       | libre de droit |
| `map-edimbourg.webp`      | `map-edimbourg.png.png`        | TODO       | libre de droit |
| `map-islay.webp`          | `map-islay.png.png`            | TODO       | libre de droit |
| `map-skye.webp`           | `map-skye.png.png`             | TODO       | libre de droit |

Les `alt` de la page ont été réécrits d'après ces photos : le texte scaffoldé
décrivait une image imaginée, pas celle qui est arrivée.

## A bis — Deux photos remontées en 4K (2 images)

`hotel-fife-arms` (876x560) et `hotel-heckfield` (707x721) arrivaient trop
petites : à la taille d'affichage des cartes, le filtre local ne pouvait rendre
qu'une image molle. Elles sont donc repassées par
`gen-images.mjs` en mode **restylage** (le mode par défaut, ni `--inspire` ni
`--instruction`), qui conserve la composition, le cadrage, la perspective, les
sujets et la lumière de la référence et n'y applique que le grade Exuma, en
rendant un master 4K. Sorties : 4096x2304.

| Sortie                 | Référence                 | Source URL | Licence |
| ---------------------- | ------------------------- | ---------- | ------- |
| `hotel-fife-arms.webp` | `hotel-fife-arms-ref.png` | TODO       | libre de droit |
| `hotel-heckfield.webp` | `hotel-heckfield-ref.png` | TODO       | libre de droit |

Les `-ref.png` sont les fichiers déposés, simplement débarrassés de leurs bandes
transparentes par
`.claude/skills/destination-generator/tmp/prep-ref-royaume-uni.mjs` : aucun
filtre ne leur est appliqué avant Gemini, le prompt s'en charge.

## B — Photos non libres de droit, recomposées par Gemini (6 images)

Ces six photos ont été déposées avec la mention « pas libres de droit ». Elles ne
sont donc **pas** reprises : elles servent de brief de contenu à
`gen-images.mjs --inspire`, qui compose une image neuve du même sujet — même
saison, même lumière, même distance de prise de vue — mais avec une autre
disposition, un autre point de vue et aucun détail identifiant de l'original. Un
simple changement d'angle en mode `--instruction` resterait une œuvre dérivée.

| Sortie                      | Référence                      | Légende passée à `--inspire` |
| --------------------------- | ------------------------------ | ---------------------------- |
| `map-londres.webp`          | `map-londres-ref.png`          | rue d'immeubles victoriens de brique rouge, jour couvert |
| `map-speyside.webp`         | `map-speyside-ref.png`         | pelouse d'une distillerie du Speyside, fût de chêne, fin d'après-midi |
| `xp-domaine-highlands.webp` | `xp-domaine-highlands-ref.png` | maison de famille en pierre dans son parc, vaches Highland au premier plan |
| `xp-saumon-spey-1.webp`     | `xp-saumon-spey-1-ref.png`     | pêcheur en waders lançant une canne à deux mains dans une rivière à saumon |
| `xp-saumon-spey-2.webp`     | `xp-saumon-spey-2-ref.png`     | saumon sauvage franchissant un barrage, eau blanche |
| `xp-savile-row.webp`        | `xp-savile-row-ref.png`        | salon d'essayage d'un tailleur, boiseries sombres, portant de vestes |

Les `alt` de la page ont été réécrits d'après les images produites.

## C — Carte tracée (1 image)

`bento-map.webp` n'est pas une photo. Elle est tracée par
`.claude/skills/destination-generator/tmp/build-bento-map-royaume-uni.mjs` depuis
la géométrie Natural Earth (`world-atlas` countries-10m, domaine public), dans la
palette relevée sur `public/destination/polynesie/bento-map.png` : fond `#383632`,
terre `#f5f2ec`, pastilles `#a5794c`, chiffres `#ffffff`, tracé pointillé
`#1a1206`. Aucune IA.

La relation OpenStreetMap « United Kingdom » a été écartée : elle rend la
frontière maritime et non la côte, ce qui donne un pâté lisse qui avale la mer
d'Irlande et fait disparaître l'Irlande du Nord.

Les six pastilles numérotent les étapes du `placesMap` de la page, dans son
ordre : 1 Londres, 2 Cotswolds, 3 Édimbourg, 4 Speyside, 5 Islay, 6 Skye.

La silhouette `bento-map.png` déposée dans ce dossier est une illustration de
banque d'images filigranée : elle n'a pas été utilisée.

## Références déposées mais non utilisées

- `inutilise-london-eye.png` — première photo du `hero-1` (le London Eye et Big
  Ben), remplacée par la façade de Mayfair, qui tient mieux le titre de la page.
- `bento-map.png` — illustration de banque d'images filigranée, jamais utilisée :
  la carte du bloc bento est tracée (voir le lot C).
