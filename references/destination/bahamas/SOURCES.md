# Reference images — Bahamas

Les photographies de `references/destination/bahamas/` ont été déposées par Exuma. Trois routages, selon les droits :

**Libres de droit** — reprises à l'identique, seul le filtre Exuma est appliqué en local par `.claude/skills/destination-generator/tmp/grade-local-bahamas.mjs` (désaturation 0.84, tons denses, grain 35 mm, WebP q96). Aucun passage par Gemini, la composition d'origine est intacte.

**Trop peu définies** — les trois `hotel-*` arrivaient entre 812 et 1618 px de large. Elles sont repassées par `gen-images.mjs --only hotel-<nom> bahamas --force`, **sans aucun flag de mode** : le prompt `GRADE_ONLY` conserve le cadrage et rend un master 4K. Comparaison avant/après dans `tmp/cmp-hotels-bahamas.jpg`.

**Non libres de droit** — servies à Gemini comme brief de contenu (`gen-images.mjs --inspire --caption "<sujet>"`), qui compose une photographie neuve du même sujet, sous un autre point de vue et un autre cadrage. Une simple correction colorimétrique aurait laissé une œuvre dérivée. Comparaison référence / image composée dans `tmp/cmp-inspire-bahamas.jpg`. Une seule, `xp-harbour-island-1`, a vu sa colorimétrie recalée sur celle de sa référence graduée (`tmp/recolor-bahamas.mjs`, transfert moyenne/écart-type en Lab, réversible par `tmp/unrecolor-bahamas.mjs`) : son rendu partait trop dans le doré. Les sept autres gardent la lumière rendue par Gemini — le recalage y avait été appliqué puis annulé, l utilisateur ne l ayant pas demandé.

`bento-map.webp` est construite sans IA par `tmp/build-bento-map-bahamas.mjs`, aux couleurs de la carte polynésienne, les pastilles numérotant les six étapes du `placesMap` dans son ordre.

Les fichiers de référence sont arrivés en double extension (`hero-1.png.png`) ou sans suffixe, et pour la plupart en 1920x1080 avec des bandes latérales transparentes autour d'un carré : ils ont été renommés `<nom>-ref.png` et rognés sur leur boîte opaque avant traitement. Deux références du premier lot montraient des sujets asiatiques (visage de Bouddha, salon d'hôtel khmer) ; elles ont été écartées dans `tmp/avant/bahamas-hors-sujet/` et remplacées par le second lot.

| Output                         | Reference file                      | Traitement | License |
| ------------------------------ | ----------------------------------- | ---------- | ------- |
| `hero-1.webp`                  | `hero-1-ref.png`                    | filtre local | libre de droit |
| `hero-2.webp`                  | `hero-2-ref.png`                    | filtre local | libre de droit |
| `hero-3.webp`                  | `hero-3-ref.png`                    | filtre local | libre de droit |
| `full-image.webp`              | `full-image-ref.png`                | filtre local | libre de droit |
| `split-1.webp`                 | `split-1-ref.png`                   | Gemini `--inspire` — image neuve | image générée |
| `split-2.webp`                 | `split-2-ref.png`                   | filtre local | libre de droit |
| `xp-harbour-island-1.webp`     | `xp-harbour-island-1-ref.png`       | Gemini `--inspire` — image neuve | image générée |
| `xp-harbour-island-2.webp`     | `xp-harbour-island-2-ref.png`       | Gemini `--inspire` — image neuve | image générée |
| `xp-bonefish.webp`             | `xp-bonefish-ref.png`               | filtre local | libre de droit |
| `xp-catamaran-green-cay.webp`  | `xp-catamaran-green-cay-ref.png`    | filtre local | libre de droit |
| `xp-junkanoo.webp`             | `xp-junkanoo-ref.png`               | filtre local | libre de droit |
| `hotel-musha-cay.webp`         | `hotel-musha-cay-ref.png`           | restylage 4K, cadrage conservé | libre de droit |
| `hotel-kamalame-cay.webp`      | `hotel-kamalame-cay-ref.png`        | restylage 4K, cadrage conservé | libre de droit |
| `hotel-potlatch-club.webp`     | `hotel-potlatch-club-ref.png`       | restylage 4K, cadrage conservé | libre de droit |
| `bento-map.webp`               | `geo/countries-10m.json`            | tracé sans IA | domaine public |
| `bento-adresses.webp`          | `bento-adresses-ref.png`            | Gemini `--inspire` — image neuve | image générée |
| `bento-hebergements.webp`      | `bento-hebergements-ref.png`        | Gemini `--inspire` — image neuve | image générée |
| `bento-conciergerie.webp`      | `bento-conciergerie-ref.png`        | filtre local | libre de droit |
| `bento-experiences.webp`       | `bento-experiences-ref.png`         | filtre local | libre de droit |
| `map-nassau.webp`              | `map-nassau-ref.png`                | filtre local | libre de droit |
| `map-harbour-island.webp`      | `map-harbour-island-ref.png`        | filtre local | libre de droit |
| `map-exumas.webp`              | `map-exumas-ref.png`                | filtre local | libre de droit |
| `map-andros.webp`              | `map-andros-ref.png`                | Gemini `--inspire` — image neuve | image générée |
| `map-abacos.webp`              | `map-abacos-ref.png`                | Gemini `--inspire` — image neuve | image générée |
| `map-long-island.webp`         | `map-long-island-ref.png`           | Gemini `--inspire` — image neuve | image générée |
