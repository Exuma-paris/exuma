# Reference images — Jordanie

Each generated image in `public/destination/jordanie/` is produced by feeding the prompt baked into `.claude/skills/destination-generator/gen-images.mjs` to Gemini 3 Pro Image (Nano Banana Pro) alongside the corresponding reference photograph below. The pipeline preserves the reference composition and applies only the Exuma grade.

Toutes les références ci-dessous ont été fournies par l'utilisateur le 26 août 2026 et déclarées libres de droit. Les compositions sont reprises à l'identique.

| Output                         | Reference file                     | Source URL                          | License                  |
| ------------------------------ | ---------------------------------- | ----------------------------------- | ------------------------ |
| `hero-1.webp`                  | `hero-1-ref.png`                   | fournie par l'utilisateur           | libre de droit (déclaré) |
| `hero-2.webp`                  | `hero-2-ref.png`                   | fournie par l'utilisateur           | libre de droit (déclaré) |
| `hero-3.webp`                  | `hero-3-ref.png`                   | fournie par l'utilisateur           | libre de droit (déclaré) |
| `full-image.webp`              | `full-image-ref.png`               | fournie par l'utilisateur           | libre de droit (déclaré) |
| `split-1.webp`                 | `split-1-ref.png`                  | fournie par l'utilisateur           | libre de droit (déclaré) |
| `split-2.webp`                 | `split-2-ref.png`                  | fournie par l'utilisateur           | libre de droit (déclaré) |
| `xp-petra-by-night-1.webp`     | `xp-petra-by-night-1-ref.png`      | fournie par l'utilisateur           | libre de droit (déclaré) |
| `xp-petra-by-night-2.webp`     | `xp-petra-by-night-2-ref.png`      | fournie par l utilisateur           | NON libre de droit : passee par Gemini avec changement d angle |
| `xp-wadi-rum-4x4.webp`         | `xp-wadi-rum-4x4-ref.png`          | fournie par l'utilisateur           | libre de droit (déclaré) |
| `xp-etoiles-wadi-rum.webp`     | `xp-etoiles-wadi-rum-ref.png`      | fournie par l'utilisateur           | libre de droit (déclaré) |
| `xp-plongee-aqaba.webp`        | `xp-plongee-aqaba-ref.png`         | fournie par l utilisateur           | NON libre de droit : passee par Gemini avec changement de point de vue |
| `hotel-kempinski-ishtar.webp`  | `hotel-kempinski-ishtar-ref.png`   | fournie par l'utilisateur           | libre de droit (déclaré) |
| `hotel-movenpick-petra.webp`   | `hotel-movenpick-petra-ref.png`    | fournie par l'utilisateur           | libre de droit (déclaré) |
| `hotel-four-seasons-amman.webp`| `hotel-four-seasons-amman-ref.png` | fournie par l'utilisateur           | libre de droit (déclaré) |
| `bento-map.webp`               | OpenStreetMap (relation 195270)    | nominatim.openstreetmap.org         | ODbL 1.0 — trace OSM, rendu maison |
| `bento-adresses.webp`          | `bento-adresses-ref.png`           | fournie par l'utilisateur           | libre de droit (déclaré) |
| `bento-hebergements.webp`      | `bento-hebergements-ref.png`       | fournie par l'utilisateur           | libre de droit (déclaré) |
| `bento-conciergerie.webp`      | `bento-conciergerie-ref.png`       | fournie par l utilisateur           | libre de droit (declare) |
| `bento-experiences.webp`       | `bento-experiences-ref.jpg`        | fournie par l'utilisateur           | libre de droit (déclaré) |
| `map-amman.webp`               | `map-amman-ref.png`                | fournie par l'utilisateur           | libre de droit (déclaré) |
| `map-jerash.webp`              | `map-jerash-ref.png`               | fournie par l'utilisateur           | libre de droit (déclaré) |
| `map-mer-morte.webp`           | `map-mer-morte-ref.png`            | fournie par l'utilisateur           | libre de droit (déclaré) |
| `map-petra.webp`               | `map-petra-ref.png`                | fournie par l'utilisateur           | libre de droit (déclaré) |
| `map-wadi-rum.webp`            | `map-wadi-rum-ref.png`             | fournie par l'utilisateur           | libre de droit (déclaré) |
| `map-aqaba.webp`               | `map-aqaba-ref.png`                | fournie par l'utilisateur           | libre de droit (déclaré) |

## Traitement par image

Les vingt-deux photos deposees le 26 aout 2026 sont reprises a l identique, avec le seul filtre Exuma applique en local (saturation 0.84, tons denses, grain 35 mm). Trois images font exception :

- `xp-plongee-aqaba.webp` : la reference n est pas libre de droit. Elle est passee par Gemini avec une consigne de changement de point de vue (vue trois quarts avant-droit, camera reculee et surelevee) tout en conservant le sujet et ses details. Ce n est pas une reprise de la photo source.
- `bento-map.webp` : aucune photo. La carte est construite depuis la frontiere OpenStreetMap de la Jordanie, dans la palette relevee sur la carte d Oman (fond #262122, terre #f0e9e0, pastilles #a5794c). Script : `.claude/skills/destination-generator/tmp/build-bento-map-jordanie.mjs`. Les six etapes numerotees suivent l itineraire de la page, du nord au sud : Jerash, Amman, mer Morte, Petra, Wadi Rum, Aqaba.
- `xp-petra-by-night-2.webp` : la reference, remplacee le 14 septembre 2026, n est pas libre de droit. Elle est passee par Gemini avec une consigne de changement d angle (camera abaissee et decalee, paroi droite dominante, facade decentree) en conservant le sujet et ses details. Sortie en portrait 3:4, l emplacement de la page etant vertical. Script ponctuel : `.claude/skills/destination-generator/tmp/gen-portrait.mjs`. La reference precedente est conservee sous `xp-petra-by-night-2-precedent.png`.
- `bento-conciergerie.webp` : photo maison, composition strictement inchangee, filtre local seul.

## Attention : deux images a ne jamais reprendre en filtre local

`xp-plongee-aqaba` et `xp-petra-by-night-2` ont des references qui ne sont PAS libres de droit. Les sorties sont des images generees avec changement d angle, pas des copies filtrees. Le script `tmp/grade-jordanie.mjs` les exclut explicitement : les reprendre en filtre local produirait une oeuvre derivee de la photo source.

## Bandes noires des references du 26 aout

Quatorze des references deposees le 26 aout 2026 portaient 366 px de bande noire de chaque cote (captures d une photo centree dans un cadre 16/9). Elles sont detectees et rognees automatiquement par `tmp/grade-jordanie.mjs` avant application du filtre, aspect natif conserve.
