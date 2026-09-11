# Reference images — Argentine

Deux traitements coexistent sur cette page, selon le statut de la référence.

**A. Photos libres de droit, filtre local (20 images).** Fournies par l'équipe
éditoriale, reprises à l'identique : rognage des bandes transparentes, upscale
Lanczos3 vers 1920 px de grand côté, puis filtre Exuma appliqué en local par
`.claude/skills/destination-generator/tmp/grade-argentine.mjs` (saturation 0.84,
gain [0.86, 0.855, 0.83], lift [18, 15, 11], grain gaussien sigma 6, WebP q96).
Aucun passage par Gemini : la composition d'origine est conservée telle quelle.

**B. Références non libres de droit, régénération « inspired by » (4 images).**
La référence a servi de brief de sujet et d'ambiance, pas de source à
reproduire. Gemini 3 Pro Image (mode `--inspire` de `gen-images.mjs`) a composé
une photographie originale : même sujet, même terrain, même saison, même
lumière et même focale, mais position de caméra, angle et cadrage différents.
La sortie n'est pas un dérivé de la photo de référence.

## A — Photos libres de droit, filtre local

| Sortie                      | Référence                    | Source URL | Licence |
| --------------------------- | ---------------------------- | ---------- | ------- |
| `hero-1.webp`               | `hero-1.png`                 | TODO       | libre de droit (à préciser) |
| `hero-2.webp`               | `hero-2.png`                 | TODO       | libre de droit (à préciser) |
| `full-image.webp`           | `full-image.png`             | TODO       | libre de droit (à préciser) |
| `split-1.webp`              | `split-1.png`                | TODO       | libre de droit (à préciser) |
| `split-2.webp`              | `split-2.png`                | TODO       | libre de droit (à préciser) |
| `xp-glacier-upsala.webp`    | `xp-glacier-upsala.png`      | TODO       | libre de droit (à préciser) |
| `xp-milonga-san-telmo.webp` | `xp-milonga-san-telmo.png`   | TODO       | libre de droit (à préciser) |
| `hotel-alvear-palace.webp`  | `hotel-alvear-palace.png`    | TODO       | libre de droit (à préciser) |
| `hotel-awasi-mendoza.webp`  | `hotel-awasi-mendoza.png`    | TODO       | libre de droit (à préciser) |
| `hotel-eolo.webp`           | `hotel-eolo.png`             | TODO       | libre de droit (à préciser) |
| `bento-adresses.webp`       | `bento-adresses.png`         | TODO       | libre de droit (à préciser) |
| `bento-hebergements.webp`   | `bento-hebergements.png`     | TODO       | libre de droit (à préciser) |
| `bento-conciergerie.webp`   | `bento-conciergerie.png`     | TODO       | libre de droit (à préciser) |
| `bento-experiences.webp`    | `bento-experiences.png`      | TODO       | libre de droit (à préciser) |
| `map-buenos-aires.webp`     | `map-buenos-aires.png`       | TODO       | libre de droit (à préciser) |
| `map-mendoza.webp`          | `map-mendoza.png`            | TODO       | libre de droit (à préciser) |
| `map-perito-moreno.webp`    | `map-perito-moreno.png`      | TODO       | libre de droit (à préciser) |
| `map-ibera.webp`            | `map-ibera.png`              | TODO       | libre de droit (à préciser) |
| `map-iguazu.webp`           | `map-iguazu.png`             | TODO       | libre de droit (à préciser) |
| `map-humahuaca.webp`        | `map-humahuaca.png`          | TODO       | libre de droit (à préciser) |

## B — Régénération « inspired by » (référence non libre de droit)

| Sortie                    | Brief                        | Statut de la référence |
| ------------------------- | ---------------------------- | ---------------------- |
| `hero-3.webp`             | `hero-3-ref.png`             | non libre de droit — non publiée, sert de brief seulement |
| `xp-ibera-jaguar-1.webp`  | `xp-ibera-jaguar-1-ref.png`  | non libre de droit — non publiée, sert de brief seulement |
| `xp-ibera-jaguar-2.webp`  | `xp-ibera-jaguar-2-ref.png`  | non libre de droit — non publiée, sert de brief seulement |
| `xp-mallmann-uco.webp`    | `xp-mallmann-uco-ref.png`    | non libre de droit — non publiée, sert de brief seulement |

## C — Carte tracée (1 image)

`bento-map.webp` n'est pas une photo. Elle est tracée par
`.claude/skills/destination-generator/tmp/bento-map-argentine.mjs` depuis la
géométrie OpenStreetMap réelle du pays
(`references/destination/argentine/geo/ar.json`, relevée via Nominatim), dans
la palette prise sur `public/destination/polynesie/bento-map.png` : terre
`#f5f2ec`, pastilles `#a5794c`, tracé et chiffres `#ffffff`, fond transparent
laissé au composant.

Les six pastilles numérotent les étapes de l'itinéraire, aux coordonnées du
`placesMap` de la page : 1 Buenos Aires, 2 Iberá, 3 Iguazú, 4 Humahuaca,
5 Mendoza, 6 Perito Moreno. Aucune IA.
