# Reference images — Japon

Chaque image de `public/destination/japon/` vient de la référence listée ci-dessous, traitée selon son statut de droits :

- **Libre de droit** → filtre Exuma appliqué en local (`.claude/skills/destination-generator/tmp/grade-local-japon.mjs`), photo reprise telle quelle, aucun passage par Gemini.
- **Non libre de droit** → `gen-images.mjs --inspire`, qui lit la référence comme un brief de contenu et compose une photographie neuve : la composition d'origine n'est pas reprise.
- **Grade Gemini** → première série, passée par le prompt de `gen-images.py` avec la référence en entrée.

| Output                        | Reference file                   | Traitement          | Source URL | License |
| ----------------------------- | -------------------------------- | ------------------- | ---------- | ------- |
| `hero-1.png`                  | `hero-1-ref.jpg`                 | Grade Gemini        | TODO       | TODO    |
| `hero-2.png`                  | `hero-2-ref.jpg`                 | Grade Gemini        | TODO       | TODO    |
| `hero-3.png`                  | `hero-3-ref.jpg`                 | Grade Gemini        | https://fr.pinterest.com/pin/5629568274545324/ | TODO |
| `full-image.png`              | `full-image-ref.jpg`             | Grade Gemini        | TODO       | TODO    |
| `split-1.webp`                | `split-1-ref.png`                | Inspire (Gemini)    | TODO       | Non libre de droit — image neuve |
| `split-2.png`                 | `split-2-ref.jpg`                | Grade Gemini        | TODO       | TODO    |
| `xp-survol-fuji-1.png`        | `xp-survol-fuji-1-ref.jpg`       | Grade Gemini        | TODO       | TODO    |
| `xp-survol-fuji-2.png`        | `xp-survol-fuji-2-ref.jpg`       | Grade Gemini        | TODO       | TODO    |
| `xp-sumo-tokyo.webp`          | `xp-sumo-tokyo-brief.png`        | Inspire, puis retouche de pose | TODO | Non libre de droit — image neuve |
| `xp-ceremonie-the-kyoto.webp` | `xp-ceremonie-the-kyoto-ref.jpg` | Grade Gemini        | TODO       | Libre de droits (fournie par Exuma) |
| `xp-kaiseki-gion.webp`        | `xp-kaiseki-gion-ref.jpg`        | Grade Gemini        | TODO       | Libre de droits (fournie par Exuma) |
| `hotel-aman-tokyo.png`        | `hotel-aman-tokyo-ref.jpg`       | Grade Gemini        | TODO       | TODO    |
| `hotel-hoshinoya-kyoto.webp`  | `hotel-hoshinoya-kyoto-ref.jpg`  | Grade Gemini        | TODO       | Libre de droits (fournie par Exuma) |
| `hotel-hoshinoya-fuji.webp`   | `hotel-hoshinoya-fuji-ref.jpg`   | Grade Gemini        | TODO       | Libre de droits (fournie par Exuma) |
| `bento-map.webp`              | `bento-map-ref.png` (silhouette) | Tracé vectoriel     | Natural Earth via `world-atlas@2/countries-10m` | Domaine public |
| `bento-adresses.webp`         | `bento-adresses-ref.jpg`         | Grade Gemini        | TODO       | Libre de droits (fournie par Exuma) |
| `bento-hebergements.webp`     | `bento-hebergements-ref.jpg`     | Grade Gemini        | TODO       | Libre de droits (fournie par Exuma) |
| `bento-conciergerie.webp`     | `bento-conciergerie-ref.png`     | Filtre local        | TODO       | Libre de droits (fournie par Exuma) |
| `bento-experiences.webp`      | `bento-experiences-ref.jpg`      | Grade Gemini        | TODO       | Libre de droits (fournie par Exuma) |
| `map-tokyo.webp`              | `map-tokyo-ref.png`              | Filtre local        | TODO       | Libre de droits (fournie par Exuma) |
| `map-kyoto.webp`              | `map-kyoto-ref.png`              | Filtre local        | TODO       | Libre de droits (fournie par Exuma) |
| `map-fuji.webp`               | `map-fuji-ref.png`               | Filtre local        | TODO       | Libre de droits (fournie par Exuma) |
| `map-kanazawa.webp`           | `map-kanazawa-ref.png`           | Filtre local        | TODO       | Libre de droits (fournie par Exuma) |
| `map-nara.webp`               | `map-nara-ref.png`               | Filtre local        | TODO       | Libre de droits (fournie par Exuma) |
| `map-miyajima.webp`           | `map-miyajima-ref.png`           | Filtre local        | TODO       | Libre de droits (fournie par Exuma) |

## Retouche de pose sur `xp-sumo-tokyo.webp`

La photo d'origine, non libre de droit, est conservée sous
`xp-sumo-tokyo-brief.png` : elle n'a servi que de brief de contenu et n'est plus
lue par le pipeline. L'image neuve produite en `--inspire` montrait le lutteur
en shiko, sur un pied. La correction est passée par `--instruction`, avec **notre
propre rendu** comme référence (`xp-sumo-tokyo-ref.webp`) : le mode édition garde
la salle, le cadrage et la lumière, et ne change que la posture — les deux pieds
au sol. Aucune composition tierce n'entre dans cette passe.

## Tracé de `bento-map.webp`

La silhouette déposée (`bento-map-ref.png`) a servi de brief. Le tracé rendu vient
de Natural Earth (`world-atlas@2/countries-10m`, domaine public), pas de Nominatim
qui rend la frontière maritime et non la côte. Palette relevée sur
`public/destination/polynesie/bento-map.png` : fond `#383632`, terre `#f5f2ec`,
pastilles `#a5794c`, chiffres blancs en serif, tirets `#1a1206`. Format 1602×828.
Script : `.claude/skills/destination-generator/tmp/build-bento-map-japon.mjs`.
