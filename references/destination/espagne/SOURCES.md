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
| `xp-txoko.webp` | `xp-txoko-ref.jpg` (brief) | Poêle de fideuà aux fruits de mer sur la table d'un txoko, convives autour. **Image neuve créée par IA** (mode `--inspire`) ; brief : image Google fournie par Thea, non libre de droit, non publiée. Brute gardée dans `xp-txoko-ia.png`, puis recadrage et filtre local | Image générée | pas de crédit tiers |
| `xp-jerez.webp` | `xp-jerez-ref.jpg` (brief) | Cheval carthusien gris en levade avec son cavalier dans le manège d'un haras de Jerez. **Image neuve créée par IA** (mode `--inspire`) ; brief : photo GetYourGuide fournie par Thea, non libre de droit, non publiée. Brute gardée dans `xp-jerez-ia.png`, puis recadrage et filtre local | Image générée | pas de crédit tiers |
| `xp-vega-sicilia.webp`     | `xp-vega-sicilia-ref.png`       | TODO       | Libre de droit (déclaré utilisateur)   |                      |
| `hotel-akelarre.webp`      | `hotel-akelarre-ref.png`        | TODO       | Libre de droit (déclaré utilisateur)   |                      |
| `hotel-finca-cortesin.webp`| `hotel-finca-cortesin-ref.png`  | TODO       | Libre de droit (déclaré utilisateur)   |                      |
| `hotel-son-bunyola.webp`   | `hotel-son-bunyola-ref.png`     | TODO       | Libre de droit (déclaré utilisateur)   |                      |
| `bento-map.webp` | — | Carte de l'Espagne, itinéraire Madrid › Ribera del Duero › Saint-Sébastien › Séville › Grenade › Majorque. Tracé vectoriel, aucune IA. Script : `geo/build-bento-map.mjs` | Contours Natural Earth (`geo/es.json`, Canaries exclues) | Domaine public |
| `bento-adresses.webp`      | `bento-adresses-ref.png`        | TODO       | Libre de droit (déclaré utilisateur)   |                      |
| `bento-hebergements.webp`  | `bento-hebergements-ref.png`    | TODO       | Libre de droit (déclaré utilisateur)   |                      |
| `bento-conciergerie.webp` | — | Photo d'équipe habituelle, reprise de `vietnam/bento-conciergerie.webp` | Shooting marque employeur Exuma | Fournie par Exuma, libre de droit |
| `bento-experiences.webp`   | `bento-experiences-ref.png`     | TODO       | Libre de droit (déclaré utilisateur)   |                      |
| `map-grenade.webp`         | `map-grenade-ref.png`           | TODO       | Libre de droit (déclaré utilisateur)   |                      |
| `map-seville.webp`         | `map-seville-ref.png`           | TODO       | Libre de droit (déclaré utilisateur)   |                      |
| `map-madrid.webp`          | `map-madrid-ref.png`            | TODO       | Libre de droit (déclaré utilisateur)   |                      |
| `map-saint-sebastien.webp` | `map-saint-sebastien-ref.png`   | TODO       | Libre de droit (déclaré utilisateur)   | ⚠️ sujet à revoir     |
| `map-tramuntana.webp` | `map-tramuntana-ref.jpg` | La route de Sa Calobra et son nœud de cravate dans la Serra de Tramuntana. **Vraie photo**, sans IA : recadrage et filtre local (bleus désaturés) | https://commons.wikimedia.org/wiki/File:Carretera_de_la_Calobra_msu-2018-4033.jpg | CC BY-SA 4.0, User:Matthias Süßen (crédit obligatoire) |
| `map-ribera-del-duero.webp`| `map-ribera-del-duero-ref.png`  | TODO       | Libre de droit (déclaré utilisateur)   |                      |

Les portraits de la section témoignages réutilisent `hero-1.webp`, `hero-2.webp` et `hero-3.webp` : aucun fichier supplémentaire.

## Références fournies mais non attribuées

Deux photographies ne correspondent à aucun emplacement de la fiche Espagne actuelle :

- `non-attribue-ronda-puente-nuevo.png` — le Puente Nuevo de Ronda au-dessus du Tajo
- `non-attribue-barcelone-eixample.png` — vue aérienne de l'Eixample et de la Sagrada Família, Barcelone

Elles ne sont pas suffixées `-ref`, donc le pipeline les ignore. Ronda et Barcelone ne figurent pas dans les six étapes de la carte : à ajouter comme étapes si l'on veut les utiliser.
