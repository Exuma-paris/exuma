# Reference images — Panama

Each generated image in `public/destination/panama/` was produced by feeding the prompt baked into `.claude/skills/destination-generator/gen-images.mjs` (Node port of `gen-images.py`, used because this workstation has no Python) to Gemini 3 Pro Image (Nano Banana Pro) alongside the corresponding reference below. Pure preserve + grade: no `--instruction` was passed, so every composition is the reference's own.

References were supplied directly by Exuma (dropped into this folder), not downloaded from a stock library — hence no source URL. Output masters are 16:9 WebP at 4K.

| Output                            | Reference file                        | Source                | License |
| --------------------------------- | ------------------------------------- | --------------------- | ------- |
| `hero-1.webp`                     | `hero-1-ref.png`                      | fournie par Exuma     | interne |
| `hero-2.webp`                     | `hero-2-ref.png`                      | fournie par Exuma     | interne |
| `hero-3.webp`                     | `hero-3-ref.png`                      | fournie par Exuma     | interne |
| `full-image.webp`                 | `full-image-ref.png`                  | fournie par Exuma     | interne |
| `split-1.webp`                    | `split-1-ref.png`                     | fournie par Exuma     | interne |
| `split-2.webp`                    | `split-2-ref.png`                     | fournie par Exuma     | interne |
| `xp-chocolat-ngobe-1.webp`        | `xp-chocolat-ngobe-1-ref.png`         | fournie par Exuma     | interne |
| `xp-chocolat-ngobe-2.webp`        | `xp-chocolat-ngobe-2-ref.png`         | fournie par Exuma     | interne |
| `xp-coiba.webp`                   | `xp-coiba-ref.png`                    | fournie par Exuma     | interne |
| `xp-bioluminescence.webp`         | `xp-bioluminescence-ref.png`          | fournie par Exuma     | interne |
| `xp-bateau-prive.webp`            | `xp-bateau-prive-ref.png`             | fournie par Exuma     | interne |
| `hotel-sofitel-casco-viejo.webp`  | `hotel-sofitel-casco-viejo-ref.png`   | fournie par Exuma     | interne |
| `hotel-santa-maria.webp`          | `hotel-santa-maria-ref.png`           | fournie par Exuma     | interne |
| `hotel-islas-secas.webp`          | `hotel-islas-secas.png`               | fournie par Exuma, libre de droit | interne |
| `bento-map.webp`                  | `bento-map.png` (contour) + `geo/pa.json` | trace fourni par Exuma | interne |
| `bento-adresses.webp`             | `bento-adresses-ref.png`              | fournie par Exuma     | interne |
| `bento-hebergements.webp`         | `bento-hebergements-ref.png`          | fournie par Exuma     | interne |
| `bento-conciergerie.webp`         | `bento-conciergerie.png`              | fournie par Exuma, libre de droit | interne |
| `bento-experiences.webp`          | `bento-experiences-ref.png`           | fournie par Exuma     | interne |
| `map-canal.webp`                  | `map-canal-ref.png`                   | brief Exuma, image neuve (--inspire) | image originale |
| `map-casco-viejo.webp`            | `map-casco-viejo-ref.png`             | fournie par Exuma     | interne |
| `map-guna-yala.webp`              | `map-guna-yala-ref.png`               | fournie par Exuma     | interne |
| `map-bocas-del-toro.webp`         | `map-bocas-del-toro-ref.png`          | fournie par Exuma     | interne |
| `map-boquete.webp`                | `map-boquete-ref.png`                 | brief Exuma, image neuve (--inspire) | image originale |
| `map-coiba.webp`                  | `map-coiba-ref.png`                   | fournie par Exuma     | interne |

Une seconde variante de `bento-hebergements` a été déposée (`bento-hebergements.png (2).png`) et laissée de côté : c'est la première qui a été retenue.

## Les cinq derniers visuels (16 septembre 2026)

Trois régimes différents, selon le statut des droits de chaque référence :

- **`bento-conciergerie` et `hotel-islas-secas`** : références libres de droit. Pas de passage par Gemini, la photo est reprise telle quelle et seul le filtre Exuma est appliqué en local (`tmp/grade-panama.mjs`, dosage Égypte : saturation 0.84, gain [0.86, 0.855, 0.83], lift [18, 15, 11], grain sigma 6, WebP q96). La conciergerie est livrée en master carré, la carte bento étant carrée en `object-cover`.
- **`map-canal` et `map-boquete`** : références non libres de droit. Traitées en `gen-images.mjs --inspire`, qui lit la référence comme un brief de contenu et compose une image neuve. Un simple changement d'angle (`--instruction`) resterait une œuvre dérivée.
- **`bento-map`** : construite sans IA par `tmp/build-bento-map-panama.mjs`, dans la palette relevée sur `public/destination/polynesie/bento-map.png` (fond #383632, terre #f9f5ee, pastille #a5794c). La terre vient du contour fourni par Exuma, rempli par propagation depuis les bords : la relation administrative OSM inclut les eaux territoriales et remplit le golfe de Panama. Les cinq pastilles reprennent les étapes de l'itinéraire dans l'ordre, comme la Polynésie.
