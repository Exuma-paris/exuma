# Reference images — Anguilla

Les vingt-cinq images de `public/destination/anguilla/` sortent des photographies de référence déposées par Exuma dans ce dossier. Aucune n'est libre de droit, à une exception près : elles ont donc toutes été servies à Gemini 3 Pro Image (Nano Banana Pro) comme brief de contenu, et non reprises telles quelles.

Trois régimes, selon la référence :

- **`--inspire`** (`split-1`, `split-2`, `map-sandy-ground`) : la référence n'est pas libre de droit. Gemini compose une photographie neuve du même sujet, sous un autre point de vue et un autre cadrage. Un `--instruction` aurait gardé la composition d'origine, donc une œuvre dérivée.
- **Filtre local, sans IA** (`bento-conciergerie`) : la seule référence libre de droit du lot. Reprise à l'identique, avec le seul filtre Exuma appliqué en local par `.claude/skills/destination-generator/tmp/grade-conciergerie-anguilla.mjs`.
- **Tracé, sans IA** (`bento-map`) : carte construite par `.claude/skills/destination-generator/tmp/build-bento-map-anguilla.mjs` aux couleurs de la carte polynésienne, depuis le tracé fourni par Exuma. Les pastilles numérotent les six étapes du `placesMap` de la page, dans son ordre.

| Output                       | Reference file                   | Source                                  | License        |
| ---------------------------- | -------------------------------- | --------------------------------------- | -------------- |
| `hero-1.webp`                | `hero-1-ref.png`                 | fournie par Exuma                       | image générée  |
| `hero-2.webp`                | `hero-2-ref.png`                 | fournie par Exuma                       | image générée  |
| `hero-3.webp`                | `hero-3-ref.png`                 | fournie par Exuma                       | image générée  |
| `full-image.webp`            | `full-image-ref.png`             | fournie par Exuma                       | image générée  |
| `split-1.webp`               | `split-1-ref.png`                | fournie par Exuma, non libre de droit — `--inspire` | image générée |
| `split-2.webp`               | `split-2-ref.png`                | fournie par Exuma, non libre de droit — `--inspire` | image générée |
| `xp-plongee-epaves-1.webp`   | `xp-plongee-epaves-1-ref.png`    | fournie par Exuma                       | image générée  |
| `xp-plongee-epaves-2.webp`   | `xp-plongee-epaves-2-ref.png`    | fournie par Exuma                       | image générée  |
| `xp-yacht-sandy-island.webp` | `xp-yacht-sandy-island-ref.png`  | fournie par Exuma                       | image générée  |
| `xp-sunset-voilier.webp`     | `xp-sunset-voilier-ref.png`      | fournie par Exuma                       | image générée  |
| `xp-cheval-cove-bay.webp`    | `xp-cheval-cove-bay-ref.png`     | fournie par Exuma                       | image générée  |
| `hotel-cap-juluca.webp`      | `hotel-cap-juluca-ref.jpg`       | fournie par Exuma                       | image générée  |
| `hotel-quintessence.webp`    | `hotel-quintessence-ref.png`     | fournie par Exuma                       | image générée  |
| `hotel-four-seasons.webp`    | `hotel-four-seasons-ref.jpg`     | fournie par Exuma                       | image générée  |
| `bento-map.webp`             | `bento-map.png` (tracé)          | tracé fourni par Exuma, calé sur Natural Earth | domaine public |
| `bento-adresses.webp`        | `bento-adresses-ref.jpg`         | fournie par Exuma                       | image générée  |
| `bento-hebergements.webp`    | `bento-hebergements-ref.jpg`     | fournie par Exuma                       | image générée  |
| `bento-conciergerie.webp`    | `bento-conciergerie.png`         | fournie par Exuma, libre de droit       | interne        |
| `bento-experiences.webp`     | `bento-experiences-ref.jpg`      | fournie par Exuma                       | image générée  |
| `map-shoal-bay.webp`         | `map-shoal-bay-ref.png`          | fournie par Exuma                       | image générée  |
| `map-sandy-ground.webp`      | `map-sandy-ground-ref.png`       | fournie par Exuma, non libre de droit — `--inspire` | image générée |
| `map-meads-bay.webp`         | `map-meads-bay-ref.png`          | fournie par Exuma                       | image générée  |
| `map-rendezvous-bay.webp`    | `map-rendezvous-bay-ref.png`     | fournie par Exuma                       | image générée  |
| `map-sandy-island.webp`      | `map-sandy-island-ref.png`       | fournie par Exuma                       | image générée  |
| `map-the-valley.webp`        | `map-the-valley-ref.png`         | fournie par Exuma                       | image générée  |

Les portraits de témoignage réutilisent `hero-1.webp`, `hero-2.webp` et `hero-3.webp` — pas de fichiers séparés.
