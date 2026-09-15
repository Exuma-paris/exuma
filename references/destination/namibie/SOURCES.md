# Reference images — Namibie

Each generated image in `public/destination/namibie/` was produced by feeding the prompt baked into `.claude/skills/destination-generator/gen-images.mjs` to Gemini 3 Pro Image (Nano Banana Pro) alongside the corresponding reference photograph below.

| Output                                  | Reference file                              | Source URL | License |
| --------------------------------------- | ------------------------------------------- | ---------- | ------- |
| `hero-1.webp`                           | `hero-1-ref.jpg`                            | TODO       | TODO    |
| `hero-2.webp`                           | `hero-2-ref.jpg`                            | TODO       | TODO    |
| `hero-3.webp`                           | `hero-3-ref.jpg`                            | TODO       | TODO    |
| `full-image.webp`                       | `full-image-ref.jpg`                        | TODO       | TODO    |
| `split-1.webp`                          | `split-1-ref.jpg`                           | TODO       | TODO    |
| `split-2.webp`                          | `split-2-ref.jpg`                           | TODO       | TODO    |
| `xp-kalahari-1.webp`                    | `xp-kalahari-1-ref.jpg`                     | TODO       | TODO    |
| `xp-kalahari-2.webp`                    | `xp-kalahari-2-ref.jpg`                     | TODO       | TODO    |
| `xp-skeleton-coast.webp`                | `xp-skeleton-coast-ref.jpg`                 | TODO       | TODO    |
| `xp-namib-naukluft.webp`                | `xp-namib-naukluft-ref.jpg`                 | TODO       | TODO    |
| `xp-sossusvlei.webp`                    | `xp-sossusvlei-ref.jpg`                     | TODO       | TODO    |
| `hotel-sossusvlei-desert-lodge.webp`    | `hotel-sossusvlei-desert-lodge-ref.jpg`     | TODO       | TODO    |
| `hotel-sonop.webp`                      | `hotel-sonop-ref.jpg`                       | TODO       | TODO    |
| `hotel-hoanib.webp`                     | `hotel-hoanib-ref.jpg`                      | TODO       | TODO    |
| `bento-map.webp`                        | `bento-map-ref.jpg`                         | TODO       | TODO    |
| `bento-adresses.webp`                   | `bento-adresses-ref.jpg`                    | TODO       | TODO    |
| `bento-hebergements.webp`               | `bento-hebergements-ref.jpg`                | TODO       | TODO    |
| `bento-conciergerie.webp`               | `bento-conciergerie-ref.jpg`                | TODO       | TODO    |
| `bento-experiences.webp`                | `bento-experiences-ref.jpg`                 | TODO       | TODO    |
| `map-sossusvlei.webp`                   | `map-sossusvlei-ref.jpg`                    | TODO       | TODO    |
| `map-namib-naukluft.webp`               | `map-namib-naukluft-ref.jpg`                | TODO       | TODO    |
| `map-skeleton-coast.webp`               | `map-skeleton-coast-ref.jpg`                | TODO       | TODO    |
| `map-damaraland.webp`                   | `map-damaraland-ref.jpg`                    | TODO       | TODO    |
| `map-kolmanskop.webp`                   | `map-kolmanskop-ref.jpg`                    | TODO       | TODO    |
| `map-etosha.webp`                       | `map-etosha-ref.jpg`                        | TODO       | TODO    |

---

## Retouches appliquées

Quatre visuels n'ont pas suivi le traitement standard :

| Sortie | Traitement |
| --- | --- |
| `xp-skeleton-coast.webp` | Photo non libre de droit. Régénérée avec changement d'angle (vue au niveau du sol au lieu du surplomb) et ajout d'une silhouette au pied de la proue, pour ne pas reproduire l'original. |
| `xp-namib-naukluft.webp` | Photo non libre de droit. Régénérée avec appareil plus bas sur la crête, cadrage plus large et marcheur vu de dos, pour ne pas reproduire l'original. |
| `bento-conciergerie.webp` | Photo appartenant à l'agence. Reprise à l'exactitude, filtre Exuma appliqué en local, aucun passage par le modèle. |
| `bento-map.webp` | Composée localement à partir d'un contour au trait de la Namibie, dans le langage graphique de la Polynésie : fond anthracite, pays en crème, étapes de l'itinéraire numérotées en ocre reliées par un pointillé. Script : `.claude/skills/destination-generator/tmp/build-bento-map.mjs`. |
