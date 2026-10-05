# Reference images — Corse

Each generated image in `public/destination/corse/` was produced by feeding the prompt in `PROMPTS.md` to Gemini 2.5 Flash Image alongside the corresponding reference photograph below. References are kept here for traceability and so generations can be re-run if needed.

| Output                 | Reference file       | Source                                                                                                                                                                              | License        |
| ---------------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `hero-1.png`           | `hero-1-ref.jpg`     | Wikimedia Commons — [Aerial_image_of_Bonifacio_(view_from_the_southwest).jpg](https://commons.wikimedia.org/wiki/File:Aerial_image_of_Bonifacio_(view_from_the_southwest).jpg)      | CC BY-SA 4.0   |
| `hero-2.png`           | `hero-2-ref.jpg`     | Wikimedia Commons — [Aerial_view_of_Palombaggia_Beach,_Corsica,_France_(52724214180).jpg](https://commons.wikimedia.org/wiki/File:Aerial_view_of_Palombaggia_Beach,_Corsica,_France_(52724214180).jpg) | CC BY 2.0      |
| `hero-3.png`           | `hero-3-ref.jpg`     | Wikimedia Commons — [Villa_Miragalli_infinity_swimminh_pool.jpg](https://commons.wikimedia.org/wiki/File:Villa_Miragalli_infinity_swimminh_pool.jpg)                                | CC BY-SA 3.0   |

References are used for location, atmosphere, and color context only — outputs are new generations following the style brief in `public/destination/corse/PROMPTS.md`. Verify each license link before publishing if attribution is required for the output (most Gemini-generated derivatives do not require attribution to the source, but check the specific license).

## hero-1.png — remplacée le 2026-08-24

- **Référence** : photographie de la citadelle de Bonifacio vue de la mer,
  publiée par le magazine ViaMichelin (crédit shutterstock_2266115997).
  Non licenciée. 1920 x 1080, déjà en 16:9.
- **Traitement** : étalonnage seul, sans consigne de composition — turquoise
  ramené vers un bleu plus sourd, falaises réchauffées, ciel désaturé, pour
  rejoindre la palette crème et brune du site.
- **Portée** : ce fichier sert à la fois la vignette de la recherche sur la
  home et le hero de la page Corse, les deux pointant vers le même chemin.

| `bento-adresses.webp` | — | **Image créée par IA** (texte seul, style reportage). Brute `bento-adresses-ia.png`, puis filtre local | Image générée | pas de crédit tiers |
| `bento-aerien.webp` | — | **Image créée par IA** (texte seul, style reportage). Brute `bento-aerien-ia.png`, puis filtre local | Image générée | pas de crédit tiers |
| `bento-experience.webp` | — | **Image créée par IA** (texte seul, style reportage). Brute `bento-experience-ia.png`, puis filtre local | Image générée | pas de crédit tiers |
| `map-bonifacio.webp` | `map-bonifacio-ref.jpg` | Bonifacio les falaises.jpg. **Vraie photo**, sans IA : recadrage et filtre local | https://commons.wikimedia.org/wiki/File:Bonifacio_les_falaises.jpg | CC BY 3.0, Pierre Bona (crédit obligatoire) |
| `map-calvi.webp` | `map-calvi-ref.jpg` | Calvi panorama mer.jpg. **Vraie photo**, sans IA : recadrage et filtre local | https://commons.wikimedia.org/wiki/File:Calvi_panorama_mer.jpg | CC BY-SA 3.0, Pierre Bona (crédit obligatoire) |
| `map-corte.webp` | `map-corte-ref.jpg` | Citadelle - Corte (FR2B) - 2021-09-08 - 4.jpg. **Vraie photo**, sans IA : recadrage et filtre local | https://commons.wikimedia.org/wiki/File:Citadelle_-_Corte_(FR2B)_-_2021-09-08_-_4.jpg | CC BY-SA 4.0, Chabe01 (crédit obligatoire) |
| `map-bastia.webp` | `map-bastia-ref.jpg` | Bastia - Vieux Port - boats & rugged houses - panoramio.jpg. **Vraie photo**, sans IA : recadrage et filtre local | https://commons.wikimedia.org/wiki/File:Bastia_-_Vieux_Port_-_boats_%26_rugged_houses_-_panoramio.jpg | CC BY-SA 3.0, jeffwarder (crédit obligatoire) |
| `map-porto-vecchio.webp` | `map-porto-vecchio-ref.jpg` | Aerial view of Palombaggia Beach, Corsica, France (52724214180).jpg. **Vraie photo**, sans IA : recadrage et filtre local | https://commons.wikimedia.org/wiki/File:Aerial_view_of_Palombaggia_Beach,_Corsica,_France_(52724214180).jpg | CC BY 2.0, dronepicr (crédit obligatoire) |
| `map-cap-corse.webp` | `map-cap-corse-ref.jpg` | Brando tour génoise de Sagro.jpg. **Vraie photo**, sans IA : recadrage et filtre local | https://commons.wikimedia.org/wiki/File:Brando_tour_g%C3%A9noise_de_Sagro.jpg | CC BY-SA 3.0, Pierre Bona (crédit obligatoire) |
| `bento-map.webp` | — | Carte de la Corse, itinéraire Bastia › Cap Corse › Calvi › Corte › Porto-Vecchio › Bonifacio. Tracé vectoriel, aucune IA. Script `geo/build-bento-map.mjs` | Contours Natural Earth (`geo/co.json`) | Domaine public |
| `bento-conciergerie.webp` | — | Photo d'équipe habituelle, reprise de `vietnam/bento-conciergerie.webp` | Shooting marque employeur Exuma | Fournie par Exuma |
| `full-image.webp` | `full-image-ref.jpg` | Falaises de rhyolite rouge de Scandola vues de la mer. **Vraie photo, retouchée par IA** : yacht privé ajouté et eau éclaircie, falaises inchangées (brief Thea : image Google des calanques, non libre). Version IA `full-image-yacht-ia.png` | https://commons.wikimedia.org/wiki/File:R%C3%A9serve_naturelle_scandola_(18331).jpg | CC BY-SA 4.0, LySioS-wkp, modifiée (crédit obligatoire) |
| `split-1.webp` | `split-1-ref.jpg` (brief) | Bergerie en pierre au bout d'un chemin dans le maquis. **Image neuve créée par IA** (`--inspire`) ; brief : photo domaine-acciola.com, non libre, non publiée | Image générée | pas de crédit tiers |
| `split-2.webp` | `split-2-ref.jpg` (brief) | Yacht au mouillage dans un lagon des Lavezzi. **Image neuve créée par IA** (`--inspire`) ; brief : photo maora-bonifacio.com, non libre, non publiée | Image générée | pas de crédit tiers |
| `polyphonie.webp` | — | Chanteurs de paghjella de dos et de profil, main à l'oreille, dans une chapelle aux bougies, public sur les bancs. **Image créée par IA** (texte seul, style documentaire), variante B choisie par Thea. Versions écartées dans `archives/` (geste faux, rendu trop lisse, variante A) | Image générée | pas de crédit tiers |
| `berger.webp` | `berger-ref.jpg` (brief) | Tommes de brebis en affinage dans une cave de bergerie. **Image neuve créée par IA** (`--inspire`) ; brief : image Google, non libre | Image générée | pas de crédit tiers |
| `xp-bateau-bonifacio.webp` | `xp-bateau-bonifacio-ref.jpg` (brief) | Catamaran privé au mouillage aux Lavezzi, enfants qui plongent (ajoutés à la demande de Thea). **Image neuve créée par IA** (`--inspire`) ; brief : photo tourinsoft (office de tourisme), non libre, non publiée. Remplace `archives/xp-bateau-bonifacio-v1.webp` | Image générée | pas de crédit tiers |
| `xp-degustation-vin.webp` | — | Deux verres de vin rouge sur un muret face au maquis. **Image créée par IA** (texte seul) | Image générée | pas de crédit tiers |
| `xp-randonnee-gr20.webp` | `xp-randonnee-gr20-ref.jpg` (brief) | Randonneuse au pied des aiguilles de Bavella. **Image neuve créée par IA** (`--inspire`) ; brief : photo terdav.com, non libre, non publiée. Remplace une photo libre (`archives/xp-randonnee-gr20-libre-v1.webp`) | Image générée | pas de crédit tiers |
| `hotel-murtoli.webp` | `hotel-murtoli-ref.jpg` | Chambre en pierre et bois d'une bergerie du domaine. **Photo officielle**, sans IA : filtre local | https://murtoli.com/uploads/5b50202c62f8850bd672107e1e363ebd.jpg | © Domaine de Murtoli. **Autorisation d'usage à obtenir** |
| `hotel-casadelmar.webp` | `hotel-casadelmar-ref.jpg` | Chambre ouverte sur la terrasse et le golfe. **Photo officielle**, sans IA : filtre local | https://www.casadelmar.fr/uploads/casadelmar__77_-2.jpg | © Casadelmar. **Autorisation d'usage à obtenir** |
| `hotel-cala-rossa.webp` | `hotel-cala-rossa-ref.jpg` | Terrasse du restaurant U Sognu sous les pins, face à la baie. Vraie photo, sans IA : filtre local | https://dynamic-media-cdn.tripadvisor.com/media/photo-o/33/e2/a7/3c/restaurant-u-sognu.jpg (**via TripAdvisor : auteur à vérifier**) | **Droits à vérifier** : photo de l'hôtel ou d'un voyageur ; obtenir l'accord de Cala Rossa |
| `hero-2.webp` | `archives/hero-2-v1.png` | Palombaggia, même image, couleurs accentuées (étalonnage chaud) | — | inchangée |
| `hero-3.webp` | `hero-3-ref.jpg` | Aiguilles de Bavella depuis le col, pins laricio. **Vraie photo**, sans IA : recadrage carré et étalonnage chaud. Remplace la villa avec piscine (`archives/hero-3-v1.png`) | https://commons.wikimedia.org/wiki/File:Aiguilles_de_Bavella_depuis_le_Col_de_Bavella.jpg | CC BY-SA 3.0, Patrick Rouzet (crédit obligatoire) |
