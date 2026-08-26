# Reference images — Afrique du Sud

Deux traitements coexistent sur cette destination.

**Étalonnage local (aucune IA).** Les photographies fournies par l'agence, libres de droit, sont conservées au pixel près. Seules les couleurs changent : contraste abaissé, noirs relevés, saturation réduite, palette tirée vers l'ocre et le sable, bleus désaturés, léger grain argentique. Cadrage 16:9 centré, largeur maximale 4096 px sans agrandissement, WebP qualité 96. Même contrat visuel que `.claude/skills/destination-generator/gen-images.mjs`, sans passer par le modèle.

**Pipeline Gemini.** Pour les images restantes, le script envoie la référence et la charte Exuma à Gemini 3 Pro Image, qui restitue la même composition restylée.

| Output | Reference file | Traitement | Source URL | License |
| --- | --- | --- | --- | --- |
| `hero-1.webp` | `hero-1-ref.png` | Étalonnage local | Fournie par l'agence | Libre de droit |
| `hero-2.webp` | `hero-2-ref.png` | Étalonnage local | Fournie par l'agence | Libre de droit |
| `hero-3.webp` | `hero-3-ref.*` | À produire | TODO | TODO |
| `full-image.webp` | `full-image-ref.*` | À produire | TODO | TODO |
| `split-1.webp` | `split-1-ref.*` | À produire | TODO | TODO |
| `split-2.webp` | `split-2-ref.*` | À produire | TODO | TODO |
| `xp-art-rupestre-1.webp` | `xp-art-rupestre-1-ref.*` | À produire | TODO | TODO |
| `xp-art-rupestre-2.webp` | `xp-art-rupestre-2-ref.*` | À produire | TODO | TODO |
| `xp-manchots-boulders.webp` | `xp-manchots-boulders-ref.png` | Étalonnage local | Fournie par l'agence | Libre de droit |
| `xp-marche-thornybush.webp` | `xp-marche-thornybush-ref.jpg` | Étalonnage local | Fournie par l'agence | Libre de droit |
| `xp-helicoptere-mpumalanga.webp` | `xp-helicoptere-mpumalanga-ref.*` | À produire | TODO | TODO |
| `hotel-ellerman-house.webp` | `hotel-ellerman-house-ref.png` | Étalonnage local | Fournie par l'agence | Libre de droit |
| `hotel-bushmans-kloof.webp` | `hotel-bushmans-kloof-ref.png` | Étalonnage local | Fournie par l'agence | Libre de droit |
| `hotel-saseka.webp` | `hotel-saseka-ref.png` | Étalonnage local | Fournie par l'agence | Libre de droit |
| `bento-map.webp` | `bento-map-ref.*` | À produire | TODO | TODO |
| `bento-adresses.webp` | `bento-adresses-ref.*` | À produire | TODO | TODO |
| `bento-hebergements.webp` | `bento-hebergements-ref.*` | À produire | TODO | TODO |
| `bento-conciergerie.webp` | `bento-conciergerie-ref.*` | À produire | TODO | TODO |
| `bento-experiences.webp` | `bento-experiences-ref.*` | À produire | TODO | TODO |
| `map-le-cap.webp` | `map-le-cap-ref.*` | À produire | TODO | TODO |
| `map-simons-town.webp` | `map-simons-town-ref.*` | À produire | TODO | TODO |
| `map-winelands.webp` | `map-winelands-ref.*` | À produire | TODO | TODO |
| `map-cederberg.webp` | `map-cederberg-ref.*` | À produire | TODO | TODO |
| `map-thornybush.webp` | `map-thornybush-ref.jpg` | Étalonnage local | Fournie par l'agence | Libre de droit |
| `map-route-des-jardins.webp` | `map-route-des-jardins-ref.*` | À produire | TODO | TODO |

Les binaires de référence sont ignorés par git ; ce fichier est suivi.
