# Images de référence — Madère

Chaque image de `public/destination/madere/` est produite à partir de la référence
listée ci-dessous. Trois traitements coexistent sur cette page :

- **filtre local** — la photo est libre de droit et gardée telle quelle ; seul le
  filtre Exuma est appliqué (désaturation douce, tons denses, grain 35 mm),
  sans passage par Gemini et sans recadrage ;
- **restylage 4K** — même principe, mais la définition d'origine était trop
  basse : `gen-images.mjs` sans flag de mode (`GRADE_ONLY`) conserve le cadrage
  et rend un master 4K ;
- **`--inspire`** — la référence n'est pas libre de droit : elle sert de brief
  et Gemini compose une photo neuve, d'angle et de composition différents.

| Sortie | Référence | Source | Droits et traitement |
| --- | --- | --- | --- |
| `hero-1.png` | `hero-1-ref.jpg` | https://adelestravel.com/wp-content/uploads/2022/03/DSC03620-2.jpg (belvédère de Ninho da Manta) | TODO : droits à vérifier — image générée avant la mise en place du routage |
| `hero-2.webp` | `hero-2-ref.png` | Photo fournie par l'utilisateur | Libre de droit — filtre local |
| `hero-3.webp` | `hero-3-ref.png` | Photo fournie par l'utilisateur | Libre de droit — filtre local |
| `full-image.webp` | `full-image-ref.png` | Photo fournie par l'utilisateur | Libre de droit — filtre local |
| `split-1.webp` | `split-1-ref.png` | Photo fournie par l'utilisateur | Libre de droit — filtre local |
| `split-2.webp` | `split-2-ref.png` | Photo fournie par l'utilisateur | Libre de droit — filtre local |
| `xp-degustation-blandys.webp` | `xp-degustation-blandys-ref.png` | Photo fournie par l'utilisateur | Libre de droit — filtre local |
| `xp-fanal-1.webp` | `xp-fanal-1-ref.png` | Photo fournie par l'utilisateur | Libre de droit — filtre local |
| `xp-fanal-2.webp` | `xp-fanal-2-ref.png` | Photo fournie par l'utilisateur | Libre de droit — filtre local |
| `xp-foret-fanal.webp` | `xp-foret-fanal-ref.png` | Photo fournie par l'utilisateur | Libre de droit — filtre local |
| `xp-mercado-funchal.webp` | `xp-mercado-funchal-ref.png` | Photo fournie par l'utilisateur | Libre de droit — filtre local |
| `xp-plage-seixal.webp` | `xp-plage-seixal-ref.png` | Photo fournie par l'utilisateur | Libre de droit — filtre local |
| `hotel-reids-palace.webp` | `hotel-reids-palace-ref.jpg` | Photo de l'hôtel fournie par l'utilisateur | Libre de droit — filtre local |
| `hotel-casa-velha-palheiro.webp` | `hotel-casa-velha-palheiro-ref.png` | Photo de l'hôtel fournie par l'utilisateur | Libre de droit — restylage 4K, cadrage conservé |
| `hotel-savoy-palace.webp` | `hotel-savoy-palace-ref.png` | Photo de l'hôtel fournie par l'utilisateur | Libre de droit — restylage 4K, cadrage conservé |
| `bento-map.webp` | — | Natural Earth, `world-atlas@2/countries-10m` | Domaine public — tracé vectoriel, aucune IA |
| `bento-adresses.webp` | `bento-adresses-ref.png` | Photo fournie par l'utilisateur | Libre de droit — filtre local |
| `bento-conciergerie.webp` | `bento-conciergerie-ref.png` | Photo fournie par l'utilisateur | Libre de droit — filtre local |
| `bento-hebergements.webp` | `bento-hebergements-ref.png` | Photo tierce fournie par l'utilisateur | Non libre de droit — `--inspire` |
| `bento-experiences.webp` | `bento-experiences-ref.png` | Photo tierce fournie par l'utilisateur | Non libre de droit — `--inspire` |
| `map-funchal.webp` | `map-funchal-ref.png` | Photo fournie par l'utilisateur | Libre de droit — filtre local |
| `map-pico-arieiro.webp` | `map-pico-arieiro-ref.png` | Photo fournie par l'utilisateur | Libre de droit — filtre local |
| `map-curral-das-freiras.webp` | `map-curral-das-freiras-ref.png` | Photo tierce fournie par l'utilisateur | Non libre de droit — `--inspire` |
| `map-porto-moniz.webp` | `map-porto-moniz-ref.png` | Photo fournie par l'utilisateur | Libre de droit — filtre local |
| `map-sao-lourenco.webp` | `map-sao-lourenco-ref.png` | Photo fournie par l'utilisateur | Libre de droit — filtre local |
| `map-camara-de-lobos.webp` | `map-camara-de-lobos-ref.png` | Photo fournie par l'utilisateur | Libre de droit — filtre local |

Les portraits de la section témoignages réutilisent `hero-1`, `hero-2` et
`hero-3` : pas de fichier séparé. Ces témoignages sont encore des placeholders.

## Journal

- **26 images, produites le 21 septembre 2026.** Le routage a suivi le statut des
  droits annoncé par l'utilisateur, image par image.
- Les photos fournies arrivaient dans `public/` avec une double extension
  (`hero-3.png.png`) : les originaux sont maintenant dans ce dossier sous le nom
  `<sortie>-ref.<ext>`, et `public/` ne contient que les sorties.
- `hero-2` et `hero-3` livrés en 1920x1080 avec des bandes transparentes de part
  et d'autre : masters carrés 1080x1076 après rognage.
- L'ancienne référence de `hero-3` (baie de Funchal, paquebot de croisière) est
  rangée dans `remplacees/`.
- `bento-map` : la référence déposée était une silhouette filigranée Alamy,
  inutilisable. La carte est tracée depuis Natural Earth, aux couleurs relevées
  sur `public/destination/polynesie/bento-map.png`. Le jeu de données n'est pas
  gardé dans le dépôt ; le script `tmp/build-bento-map-madere.mjs` porte la
  commande de re-téléchargement en commentaire.
- `hero-1.png` : famille de trois vue de dos à la place de la personne seule,
  teintes de coucher de soleil rétablies, point de vue abaissé à hauteur d'œil.

## À vérifier

- `map-funchal` : la photo montre une vallée verte en terrasses avec un clocher.
  La pastille s'intitule « Funchal, la baie et le marché ». Le lieu ne semble pas
  correspondre.
