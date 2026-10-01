# Reference images — Afrique du Sud

Les photographies de cette destination sont fournies par l'agence. Sauf mention contraire, elles sont **reprises à l'exactitude**, sans passage par un modèle : seul le filtre Exuma est appliqué en local.

Réglage : saturation 0.84, brightness 1.015, gain [0.86, 0.855, 0.83], lift [18, 15, 11], grain gaussien sigma 6, WebP qualité 96. Les bandes transparentes des captures 1920x1080 sont rognées sur la boîte opaque, avec 3 px de marge, puis l'alpha est retiré. L'aspect natif est conservé, le grand côté plafonné à 4096 px. Script : `.claude/skills/destination-generator/tmp/grade-afrique-du-sud.mjs`.

Deux exceptions :

- **`bento-map.webp`** part de la silhouette fournie par l'agence. Elle est recolorée dans la palette de la Polynésie (terre `#f5f2ec`, pastilles `#a5794c`, trait blanc pointillé) et reçoit quatre pastilles numérotées : Le Cap, le Cederberg, la route des Jardins, Thornybush. Le calage géographique a été vérifié sur le trou du Lesotho, moins de 8 px d'écart sur 689. Script : `.claude/skills/destination-generator/tmp/bento-map-afrique-du-sud.mjs`.
- **`map-cederberg.webp`** est la seule image passée par Gemini, en mode `--inspire`, la photographie de référence n'étant pas libre de droit. Le modèle compose une scène comparable sous un autre point de vue plutôt que de restyler le cadre d'origine.

| Output | Reference file | Traitement | Source URL | License |
| --- | --- | --- | --- | --- |
| `hero-1.webp` | `hero-1-ref.png` | Étalonnage local | Fournie par l'agence | Libre de droit |
| `hero-2.webp` | `hero-2-ref.png` | Étalonnage local | Fournie par l'agence | Libre de droit |
| `hero-3.webp` | `hero-3.webp.png` | Étalonnage local | Fournie par l'agence | Libre de droit |
| `full-image.webp` | `full-image.webp.png` | Étalonnage local | Fournie par l'agence | Libre de droit |
| `split-1.webp` | `split-1.webp.png` | Étalonnage local | Fournie par l'agence | Libre de droit |
| `split-2.webp` | `split-2.webp.png` | Étalonnage local | Fournie par l'agence | Libre de droit |
| `xp-art-rupestre-1.webp` | `xp-art-rupestre-1.webp.png` | Étalonnage local | Fournie par l'agence | Libre de droit |
| `xp-art-rupestre-2.webp` | `xp-art-rupestre-2.webp.png` | Étalonnage local | Fournie par l'agence | Libre de droit |
| `xp-manchots-boulders.webp` | `xp-manchots-boulders-ref.png` | Étalonnage local | Fournie par l'agence | Libre de droit |
| `xp-marche-thornybush.webp` | `xp-marche-thornybush-ref.jpg` | Étalonnage local | Fournie par l'agence | Libre de droit |
| `xp-helicoptere-mpumalanga.webp` | `xp-helicoptere-mpumalanga.webp.png` | Étalonnage local | Fournie par l'agence | Libre de droit |
| `hotel-ellerman-house.webp` | `hotel-ellerman-house-ref.png` | Étalonnage local | Fournie par l'agence | Libre de droit |
| `hotel-bushmans-kloof.webp` | `hotel-bushmans-kloof-ref.png` | Étalonnage local | Fournie par l'agence | Libre de droit |
| `hotel-saseka.webp` | `hotel-saseka-ref.png` | Étalonnage local | Fournie par l'agence | Libre de droit |
| `bento-map.webp` | `bento-map.webp.png` | Silhouette fournie, recolorée palette Polynésie, pastilles ajoutées | Fournie par l'agence | Libre de droit |
| `bento-adresses.webp` | `bento-adresses.webp.png` | Étalonnage local | Fournie par l'agence | Libre de droit |
| `bento-hebergements.webp` | `bento-hebergements.webp.png` | Étalonnage local | Fournie par l'agence | Libre de droit |
| `bento-conciergerie.webp` | `bento-conciergerie.webp.png` | Étalonnage local | Fournie par l'agence | Libre de droit |
| `bento-experiences.webp` | `bento-experiences.webp.png` | Étalonnage local | Fournie par l'agence | Libre de droit |
| `map-le-cap.webp` | `map-le-cap.webp.png` | Étalonnage local | Fournie par l'agence | Libre de droit |
| `map-simons-town.webp` | `map-simons-town.webp.png` | Étalonnage local | Fournie par l'agence | Libre de droit |
| `map-winelands.webp` | `map-winelands.webp.png` | Étalonnage local | Fournie par l'agence | Libre de droit |
| `map-cederberg.webp` | `map-cederberg-ref.png` | Gemini, mode *inspire* : point de vue recomposé | Fournie par l'agence | Photo non libre de droit |
| `map-thornybush.webp` | `map-thornybush-ref.jpg` | Étalonnage local | Fournie par l'agence | Libre de droit |
| `map-route-des-jardins.webp` | `map-route-des-jardins.webp.png` | Étalonnage local | Fournie par l'agence | Libre de droit |

Les binaires de référence sont ignorés par git ; ce fichier est suivi.
