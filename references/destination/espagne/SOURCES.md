# Reference images — Espagne

Each generated image in `public/destination/espagne/` was produced by feeding the prompt baked into `.claude/skills/destination-generator/gen-images.mjs` to Gemini 3 Pro Image (Nano Banana Pro) alongside the corresponding reference photograph below.

Mode utilisé : **grade only** — la composition, le cadrage et le contenu de la référence sont préservés à l'identique, seul le traitement colorimétrique Exuma est appliqué.

Références fournies par l'utilisateur le 8 septembre 2026, déclarées libres de droit.

Images are listed in page display order.

| Output                     | Reference file                  | Source URL | License                                | Correction appliquée |
| -------------------------- | ------------------------------- | ---------- | -------------------------------------- | -------------------- |
| `hero-1.webp`              | `hero-1-ref.png`                | TODO       | Libre de droit (déclaré utilisateur)   |                      |
| `hero-2.webp`              | `hero-2-ref.png`                | TODO       | Libre de droit (déclaré utilisateur)   | ⚠️ sujet à revoir     |
| `hero-3.webp`              | `hero-3-ref.png`                | TODO       | Libre de droit (déclaré utilisateur)   | ⚠️ sujet à revoir     |
| `full-image.webp`          | `full-image-ref.png`            | TODO       | Libre de droit (déclaré utilisateur)   |                      |
| `split-1.webp`             | `split-1-ref.png`               | TODO       | Libre de droit (déclaré utilisateur)   |                      |
| `split-2.webp`             | `split-2-ref.png`               | TODO       | Libre de droit (déclaré utilisateur)   |                      |
| `xp-alhambra-1.webp`       | `xp-alhambra-1-ref.png`         | TODO       | Libre de droit (déclaré utilisateur)   |                      |
| `xp-alhambra-2.webp`       | `xp-alhambra-2-ref.png`         | TODO       | Libre de droit (déclaré utilisateur)   |                      |
| `xp-txoko.webp`            | — référence manquante           | —          | —                                      | à fournir            |
| `xp-jerez.webp`            | — référence manquante           | —          | —                                      | à fournir            |
| `xp-vega-sicilia.webp`     | `xp-vega-sicilia-ref.png`       | TODO       | Libre de droit (déclaré utilisateur)   |                      |
| `hotel-akelarre.webp`      | `hotel-akelarre-ref.png`        | TODO       | Libre de droit (déclaré utilisateur)   |                      |
| `hotel-finca-cortesin.webp`| `hotel-finca-cortesin-ref.png`  | TODO       | Libre de droit (déclaré utilisateur)   |                      |
| `hotel-son-bunyola.webp`   | `hotel-son-bunyola-ref.png`     | TODO       | Libre de droit (déclaré utilisateur)   |                      |
| `bento-map.webp`           | — carte générée, pas une photo  | —          | —                                      | voir build-bento-map.mjs |
| `bento-adresses.webp`      | `bento-adresses-ref.png`        | TODO       | Libre de droit (déclaré utilisateur)   |                      |
| `bento-hebergements.webp`  | `bento-hebergements-ref.png`    | TODO       | Libre de droit (déclaré utilisateur)   |                      |
| `bento-conciergerie.webp`  | — référence manquante           | —          | —                                      | à fournir            |
| `bento-experiences.webp`   | `bento-experiences-ref.png`     | TODO       | Libre de droit (déclaré utilisateur)   |                      |
| `map-grenade.webp`         | `map-grenade-ref.png`           | TODO       | Libre de droit (déclaré utilisateur)   |                      |
| `map-seville.webp`         | `map-seville-ref.png`           | TODO       | Libre de droit (déclaré utilisateur)   |                      |
| `map-madrid.webp`          | `map-madrid-ref.png`            | TODO       | Libre de droit (déclaré utilisateur)   |                      |
| `map-saint-sebastien.webp` | `map-saint-sebastien-ref.png`   | TODO       | Libre de droit (déclaré utilisateur)   | ⚠️ sujet à revoir     |
| `map-tramuntana.webp`      | — référence manquante           | —          | —                                      | à fournir            |
| `map-ribera-del-duero.webp`| `map-ribera-del-duero-ref.png`  | TODO       | Libre de droit (déclaré utilisateur)   |                      |

Les portraits de la section témoignages réutilisent `hero-1.webp`, `hero-2.webp` et `hero-3.webp` : aucun fichier supplémentaire.

## Références fournies mais non attribuées

Deux photographies ne correspondent à aucun emplacement de la fiche Espagne actuelle :

- `non-attribue-ronda-puente-nuevo.png` — le Puente Nuevo de Ronda au-dessus du Tajo
- `non-attribue-barcelone-eixample.png` — vue aérienne de l'Eixample et de la Sagrada Família, Barcelone

Elles ne sont pas suffixées `-ref`, donc le pipeline les ignore. Ronda et Barcelone ne figurent pas dans les six étapes de la carte : à ajouter comme étapes si l'on veut les utiliser.
