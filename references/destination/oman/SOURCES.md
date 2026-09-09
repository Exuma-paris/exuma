# Reference images — Oman

Each generated image in `public/destination/oman/` was produced by feeding the prompt baked into `.claude/skills/destination-generator/gen-images.py` to Gemini 3 Pro Image (Nano Banana Pro) alongside the corresponding reference photograph below.

| Output                             | Reference file                         | Source URL | License |
| ---------------------------------- | -------------------------------------- | ---------- | ------- |
| `hero-1.png` | `hero-1-ref.png` | Fournie par le client | Libre de droit |
| `hero-2.png` | `hero-2-ref.png` | Fournie par le client | Libre de droit |
| `hero-3.png` | `hero-3-ref.png` | Fournie par le client | Libre de droit |
| `full-image.png` | `full-image-ref.png` | Fournie par le client | Libre de droit |
| `split-1.png` | `split-1-ref.png` | Fournie par le client | Libre de droit |
| `split-2.png` | `split-2-ref.png` | Fournie par le client | Libre de droit |
| `xp-culture-bedouine-1.png`        | `xp-culture-bedouine-1-ref.jpg`        | TODO       | TODO    |
| `xp-culture-bedouine-2.png` | `xp-culture-bedouine-2-ref.png` | Fournie par le client | Libre de droit |
| `xp-daymaniyat.png`                | `xp-daymaniyat-ref.jpg`                | TODO       | TODO    |
| `xp-nizwa-forts.png` | `xp-nizwa-forts-ref.png` | Fournie par le client | Libre de droit |
| `xp-wadi-bani-khalid.png` | `xp-wadi-bani-khalid-ref.png` | Fournie par le client | Libre de droit |
| `hotel-anantara-jabal-akhdar.png` | `hotel-anantara-jabal-akhdar-ref.jpg` | Fournie par le client | Libre de droit |
| `hotel-chedi-muscat.png` | `hotel-chedi-muscat-ref.png` | Fournie par le client | Libre de droit |
| `hotel-magic-camps.png` | `hotel-magic-camps-ref.png` | Fournie par le client | Libre de droit |
| `bento-map.png`                    | `bento-map-ref.jpg`                    | TODO       | TODO    |
| `bento-adresses.png` | `bento-adresses-ref.jpg` | Fournie par le client | Libre de droit |
| `bento-hebergements.png` | `bento-hebergements-ref.png` | Fournie par le client | Libre de droit |
| `bento-conciergerie.png`           | `bento-conciergerie-ref.jpg`           | TODO       | TODO    |
| `bento-experiences.png` | `bento-experiences-ref.jpg` | Fournie par le client | Libre de droit |
| `map-mascate.png` | `map-mascate-ref.png` | Fournie par le client | Libre de droit |
| `map-nizwa.png` | `map-nizwa-ref.png` | Fournie par le client | Libre de droit |
| `map-jebel-akhdar.png` | `map-jebel-akhdar-ref.png` | Fournie par le client | Libre de droit |
| `map-wahiba.png` | `map-wahiba-ref.png` | Fournie par le client | Libre de droit |
| `map-wadi-bani-khalid.png` | `map-wadi-bani-khalid-ref.png` | Fournie par le client | Libre de droit |
| `map-daymaniyat.png`               | `map-daymaniyat-ref.jpg`               | TODO       | TODO    |

> ⚠️ **Visuels provisoires en place.** Les fichiers actuellement dans `public/destination/oman/`
> sont les photos de référence recadrées en 16:9, **sans le filtre Exuma** : le crédit Gemini
> était épuisé au moment de la production. Avant toute mise en ligne, relancer :
>
> `node .claude/skills/destination-generator/gen-images.mjs oman --force`
>
> Le `--force` est indispensable : sans lui le script saute les fichiers déjà présents.
