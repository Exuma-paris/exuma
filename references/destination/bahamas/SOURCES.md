# Reference images — Bahamas

Les photographies de `references/destination/bahamas/` ont été déposées par Exuma comme libres de droit. Elles sont **reprises à l'identique** : pas de passage par Gemini, seulement le filtre Exuma appliqué en local (`.claude/skills/destination-generator/tmp/grade-local-bahamas.mjs` — désaturation 0.84, tons denses, grain 35 mm, WebP q96).

Exception : les trois `hotel-*` arrivaient en définition trop basse (812 à 1618 px de large). Elles ont été repassées par `gen-images.mjs --only hotel-<nom> bahamas --force`, **sans aucun flag de mode** : le prompt `GRADE_ONLY` conserve le cadrage et rend un master 4K. Comparaison avant/après vérifiée dans `.claude/skills/destination-generator/tmp/cmp-hotels-bahamas.jpg` — même bâtiment, même mobilier, même vue, le 16:9 élargit simplement le champ.

Les fichiers de référence sont arrivés en double extension (`hero-1.png.png`) et, pour la plupart, en 1920x1080 avec des bandes latérales transparentes autour d'un carré : ils ont été renommés `<nom>-ref.png` et rognés sur leur boîte opaque avant traitement.

| Output                         | Reference file                      | Source URL | License |
| ------------------------------ | ----------------------------------- | ---------- | ------- |
| `hero-1.webp`                  | `hero-1-ref.png`                    | déposée par Exuma | libre de droit |
| `hero-2.webp`                  | `hero-2-ref.png`                    | déposée par Exuma | libre de droit |
| `hero-3.webp`                  | `hero-3-ref.png`                    | déposée par Exuma | libre de droit |
| `full-image.webp`              | `full-image-ref.png`                | déposée par Exuma | libre de droit |
| `split-1.webp`                 | — manquante                         | à fournir  | —       |
| `split-2.webp`                 | `split-2-ref.png`                   | déposée par Exuma | libre de droit |
| `xp-harbour-island-1.webp`     | — manquante                         | à fournir  | —       |
| `xp-harbour-island-2.webp`     | — manquante                         | à fournir  | —       |
| `xp-bonefish.webp`             | `xp-bonefish-ref.png`               | déposée par Exuma | libre de droit |
| `xp-catamaran-green-cay.webp`  | `xp-catamaran-green-cay-ref.png`    | déposée par Exuma | libre de droit |
| `xp-junkanoo.webp`             | `xp-junkanoo-ref.png`               | déposée par Exuma | libre de droit |
| `hotel-musha-cay.webp`         | `hotel-musha-cay-ref.png`           | déposée par Exuma — restylage 4K, cadrage conservé | libre de droit |
| `hotel-kamalame-cay.webp`      | `hotel-kamalame-cay-ref.png`        | déposée par Exuma — restylage 4K, cadrage conservé | libre de droit |
| `hotel-potlatch-club.webp`     | `hotel-potlatch-club-ref.png`       | déposée par Exuma — restylage 4K, cadrage conservé | libre de droit |
| `bento-map.webp`               | — manquante                         | carte à tracer depuis Natural Earth | — |
| `bento-adresses.webp`          | `bento-adresses-ref.png` — hors sujet (visage de Bouddha) | à remplacer | — |
| `bento-hebergements.webp`      | `bento-hebergements-ref.png` — hors sujet (salon d'hôtel asiatique) | à remplacer | — |
| `bento-conciergerie.webp`      | — manquante                         | à fournir  | —       |
| `bento-experiences.webp`       | `bento-experiences-ref.png`         | déposée par Exuma | libre de droit |
| `map-nassau.webp`              | `map-nassau-ref.png`                | déposée par Exuma | libre de droit |
| `map-harbour-island.webp`      | `map-harbour-island-ref.png`        | déposée par Exuma | libre de droit |
| `map-exumas.webp`              | `map-exumas-ref.png`                | déposée par Exuma | libre de droit |
| `map-andros.webp`              | — manquante                         | à fournir  | —       |
| `map-abacos.webp`              | — manquante                         | à fournir  | —       |
| `map-long-island.webp`         | — manquante                         | à fournir  | —       |
