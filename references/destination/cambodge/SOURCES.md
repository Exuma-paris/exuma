# Reference images — Cambodge

Les photos de cette page ont été choisies et déposées par l'équipe dans ce
dossier, comme libres de droit. Elles sont **reprises à l'exactitude** : pas de
passage par Gemini, seulement le filtre Exuma appliqué en local pour uniformiser
la série — désaturation douce, tons denses, grain 35 mm (saturation 0.84,
brightness 1.015, gain [0.86, 0.855, 0.83], lift [18, 15, 11], grain gaussien
sigma 6, sortie WebP q96, grand côté plafonné à 4096 px).

Script : `.claude/skills/destination-generator/tmp/grade-cambodge.mjs`.

Les fichiers déposés portaient une double extension (`hero-1.png.png`,
`hotel-amansara.png (2).png`) et, pour la plupart, des bandes transparentes de
part et d'autre de l'image : le script détecte la boîte opaque, la rogne, retire
la couche alpha, puis applique le filtre. Les photos déjà en plein cadre
(`full-image`, `xp-angkor-aube-1`, `bento-adresses`, `bento-experiences`)
gardent leur cadrage d'origine.

| Sortie                          | Fichier déposé                      | Sujet réel de la photo | Source URL | License |
| ------------------------------- | ----------------------------------- | ---------------------- | ---------- | ------- |
| `hero-1.webp`                   | `hero-1.png.png`                    | Deux moines en robe safran dans l'embrasure d'un temple d'Angkor | TODO | TODO |
| `hero-2.webp`                   | `hero-2.png.png`                    | Silhouette d'un éléphant et de son cornac au couchant | TODO | TODO |
| `hero-3.webp`                   | `hero-3.png.png`                    | Angkor Vat reflété dans le bassin aux nénuphars | TODO | TODO |
| `full-image.webp`               | `full-image.png.png`                | Porte de grès sculptée et bouddha assis | TODO | TODO |
| `split-1.webp`                  | `split-1.png.png`                   | Visage de pierre du Bayon | TODO | TODO |
| `split-2.webp`                  | `split-2.png.png`                   | Toits dorés du Palais royal de Phnom Penh | TODO | TODO |
| `xp-angkor-aube-1.webp`         | `xp-angkor-aube-1.png.png`          | Tours d'Angkor Vat entre les palmiers à sucre | TODO | TODO |
| `xp-angkor-aube-2.webp`         | `xp-angkor-aube-2.png.png`          | Bas-relief d'apsaras | TODO | TODO |
| `xp-sampan-mekong.webp`         | `xp-sampan-mekong.png.png`          | Pont aménagé d'un sampan privatisé | TODO | TODO |
| `xp-tonle-sap.webp`             | `xp-tonle-sap.png.png`              | Pêcheur relevant son filet à l'aube | TODO | TODO |
| `hotel-amansara.webp`           | `hotel-amansara.png (2).png`        | Villa et bassin sous les grands arbres | TODO | TODO |
| `bento-adresses.webp`           | `bento-adresses.png.jpg`            | Salon d'hôtel ouvert sur un jardin | TODO | TODO |
| `bento-conciergerie.webp`       | `bento-conciergerie.png.png`        | Photo maison — collaboratrice Exuma au casque | maison | maison |
| `bento-experiences.webp`        | `bento-experiences.png.JPG`         | Temple éclairé aux bougies à la nuit tombée | TODO | TODO |
| `bento-hebergements.webp`       | `bento-hebergements.png.png`        | Chambre d'hôtel | TODO | TODO |
| `map-angkor.webp`               | `map-angkor.png.png`                | Tour centrale d'Angkor Vat | TODO | TODO |
| `map-phnom-penh.webp`           | `map-phnom-penh.png.png`            | Monument de l'Indépendance de Phnom Penh | TODO | TODO |
| `map-tonle-sap.webp`            | `map-tonle-sap.png.png`             | Barques sur le Tonlé Sap au couchant | TODO | TODO |
| `map-banteay-chhmar.webp`       | `map-banteay-chhmar.png.png`        | **Banteay Srei**, près de Siem Reap — à revoir, ce n'est pas Banteay Chhmar | TODO | TODO |
| `map-koh-rong.webp`             | `map-koh-rong.png.png`              | Barques devant le village de Koh Rong | TODO | TODO |

## Lot A bis — hôtels, libres de droit mais trop basse définition

Les photos d'hôtel viennent des hôtels eux-mêmes : elles sont libres de droit et
doivent garder leur cadrage d'origine — c'est l'établissement qu'elles montrent,
on ne le recompose pas. Les deux fichiers déposés étaient trop petits pour la
taille d'affichage (1439x800 et 1170x795). Ils sont repassés en 4K par Gemini en
mode restylage, qui conserve la composition à l'identique : même tente, même
plateforme, même charpente, même vue. Seule la définition change.

    node .claude/skills/destination-generator/gen-images.mjs --only <nom> cambodge --force

| Sortie                          | Fichier déposé                      | Sortie |
| ------------------------------- | ----------------------------------- | ------ |
| `hotel-shinta-mani-wild.webp`   | `hotel-shinta-mani-wild-ref.png`    | 4096x2304 |
| `hotel-song-saa.webp`           | `hotel-song-saa-ref.png`            | 4096x2304 |

`hotel-amansara.webp` n'avait pas besoin de ce passage : son fichier d'origine
faisait déjà 2227x1358, il est resté au filtre local du lot A.

## Lot B — photos non libres de droit

Deux photos ont été déposées avec la mention « pas libres de droit ». Elles ne
sont pas reprises : elles servent de brief à Gemini en mode `--inspire`, qui
compose une image neuve du même sujet, avec un autre point de vue, un autre
cadrage et aucun détail identifiant de l'original. Une simple retouche ou un
changement d'angle resterait une œuvre dérivée.

    node .claude/skills/destination-generator/gen-images.mjs --only <nom> --inspire --caption "<sujet>" cambodge --force

| Sortie                          | Brief déposé                        | Sujet demandé |
| ------------------------------- | ----------------------------------- | ------------- |
| `xp-banteay-chhmar.webp`        | `xp-banteay-chhmar-ref.png`         | Tentes de bivouac parmi les blocs de grès d'un temple khmer effondré, fin de journée |
| `map-cardamomes.webp`           | `map-cardamomes-ref.png`            | Rivière en cascades sur dalles de roche sous la canopée des Cardamomes |

## Lot C — la carte du bloc bento

`bento-map.webp` n'est pas une photo. Elle est tracée depuis la géométrie
Natural Earth (world-atlas `countries-10m`, domaine public), sans IA, par
`.claude/skills/destination-generator/tmp/build-bento-map-cambodge.mjs`, aux
couleurs relevées sur `public/destination/polynesie/bento-map.png` : fond
`#383632`, terre `#f5f2ec`, pastilles `#a5794c`, chiffres blancs en serif.
Les six pastilles numérotent les étapes du `placesMap` de la page, dans son ordre.

Les portraits des témoignages réutilisent `hero-1.webp`, `hero-2.webp` et
`hero-3.webp` — pas de fichiers séparés.
