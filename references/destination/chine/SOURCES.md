# Reference images : Chine

Les 25 images de `public/destination/chine/` sont produites par trois voies distinctes, selon le statut des droits de la référence fournie.

- **Preserve + grade** (`gen-images.mjs`, sans instruction) : la composition, le cadrage, les sujets et l'heure du jour de la référence sont conservés, seul le rendu couleur change. Réservé aux photos dont nous avons l'usage.
- **Inspire** (`gen-images.mjs --inspire --caption`) : la référence sert de brief de contenu, pas de cadre à restyler. Le modèle compose une photographie neuve d'une scène comparable. C'est la voie obligatoire quand la référence n'est pas libre de droit, un simple regrade restant une œuvre dérivée.
- **Filtre local** (`tmp/grade-conciergerie-chine.mjs`, sans Gemini) : la photo est reprise à l'exactitude, seul le filtre Exuma est appliqué. Réservé aux photos dont Exuma est propriétaire.

Sortie : WebP, 4096x2304 en 16:9 pour les images générées, format natif pour le filtre local.

| Output | Reference file | Voie et source | Droits |
| --- | --- | --- | --- |
| `hero-1.webp` | `hero-1-ref.png` | Preserve + grade | À préciser |
| `hero-2.webp` | `hero-2-ref.png` | Preserve + grade | À préciser |
| `hero-3.webp` | `hero-3-ref.png` | Preserve + grade | À préciser |
| `full-image.webp` | `full-image-ref.png` | Preserve + grade | À préciser |
| `split-1.webp` | `split-1-ref.png` | Preserve + grade | À préciser |
| `split-2.webp` | `split-2-ref.png` | Preserve + grade | À préciser |
| `xp-dejeuner-grande-muraille-1.webp` | `xp-dejeuner-grande-muraille-1-ref.png` | **Inspire** : référence fournie non libre de droit, image neuve composée | Image originale Exuma |
| `xp-dejeuner-grande-muraille-2.webp` | `xp-dejeuner-grande-muraille-2-ref.png` | Preserve + grade | À préciser |
| `xp-spectacle-era.webp` | `xp-spectacle-era-ref.png` | **Inspire** : référence fournie non libre de droit, image neuve composée | Image originale Exuma |
| `xp-villages-guizhou.webp` | `xp-villages-guizhou-ref.png` | Preserve + grade | À préciser |
| `xp-helicoptere-victoria-harbor.webp` | `xp-helicoptere-victoria-harbor-ref.png` | Preserve + grade | À préciser |
| `hotel-amandayan.webp` | `hotel-amandayan-ref.png` | Preserve + grade, photo fournie par le client (Amandayan.tif) | À préciser |
| `hotel-capella-shanghai.webp` | `hotel-capella-shanghai-ref.png` | Preserve + grade, photo fournie par le client | À préciser |
| `hotel-banyan-tree-hangzhou.webp` | `hotel-banyan-tree-hangzhou-ref.png` | Preserve + grade, photo fournie par le client | À préciser |
| `bento-map.webp` | aucune | **Tracé vectoriel** : géométrie Natural Earth (world-atlas countries-10m), palette relevée sur `polynesie/bento-map.png`. Script : `tmp/build-bento-map-chine.mjs` | Domaine public |
| `bento-adresses.webp` | `bento-adresses-ref.jpg` | Preserve + grade | À préciser |
| `bento-hebergements.webp` | `bento-hebergements-ref.png` | Preserve + grade | À préciser |
| `bento-conciergerie.webp` | `bento-conciergerie-ref.png` | **Filtre local sans Gemini** : photo Exuma reprise à l'exactitude, master carré | Propriété Exuma |
| `bento-experiences.webp` | `bento-experiences-ref.png` | Preserve + grade | À préciser |
| `map-pekin.webp` | `map-pekin-ref.png` | Preserve + grade | À préciser |
| `map-xian.webp` | `map-xian-ref.png` | Preserve + grade | À préciser |
| `map-shanghai.webp` | `map-shanghai-ref.png` | Preserve + grade | À préciser |
| `map-hangzhou.webp` | `map-hangzhou-ref.png` | Preserve + grade | À préciser |
| `map-lijiang.webp` | `map-lijiang-ref.png` | Preserve + grade | À préciser |
| `map-guizhou.webp` | `map-guizhou-ref.png` | Preserve + grade | À préciser |

Les portraits de témoignages réutilisent `hero-1.webp`, `hero-2.webp` et `hero-3.webp` : aucun fichier séparé.

La carte `bento-map.webp` se reconstruit par :

    curl -L https://cdn.jsdelivr.net/npm/world-atlas@2/countries-10m.json -o <scratchpad>/countries-10m.json
    node .claude/skills/destination-generator/tmp/build-bento-map-chine.mjs <scratchpad>/countries-10m.json

Les six pastilles numérotent les étapes du `placesMap` de la page, dans son ordre. Hangzhou est à environ 170 km de Shanghai : à l'échelle du pays entier les deux pastilles se recouvrent, la quatrième est donc décalée vers le sud-ouest et le trait d'itinéraire suit le décalage.
