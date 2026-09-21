# Images attendues — Bhoutan

Dossier : `public/destination/bhoutan/`

**25 sur 25 présentes.** La page est complète. Toutes les images sont en `.webp`.

Trois provenances, trois traitements :

- **20 photos libres de droit** déposées dans `references/destination/bhoutan/`,
  reprises telles quelles et passées au filtre Exuma en local, sans Gemini
  (`.claude/skills/destination-generator/tmp/grade-local-bhoutan.mjs`). Les
  fichiers 1920×1080 arrivaient en carré centré entre deux bandes transparentes,
  rognées avant traitement.
- **4 photos non libres de droit** (celle de Punakha portait un filigrane Getty),
  déposées elles aussi mais utilisées comme brief : Gemini recompose une image
  neuve du même sujet en mode `--inspire`, cadrage et point de vue différents,
  aucun détail identifiant repris — `xp-punakha-benediction`,
  `xp-grues-phobjikha`, `xp-helico-jomolhari`, `map-bumthang`.
- **1 carte**, tracée sans IA depuis Natural Earth (world-atlas countries-10m,
  domaine public) aux couleurs relevées sur la tuile Polynésie : fond `#383632`,
  terre `#f5f2ec`, pastilles `#a5794c`, chiffres blancs en serif, itinéraire en
  tirets (`.claude/skills/destination-generator/tmp/build-bento-map-bhoutan.mjs`).
  Les six pastilles numérotent les étapes du `placesMap` de la page, dans son
  ordre. Haa a été replacé juste après Paro, dont il dépend par le col de Chele
  La : en dernière position, le trait d'itinéraire traversait tout le pays pour
  revenir à l'ouest.

## À vérifier

`map-paro.webp` montre les chortens du col de Dochula, pas la vallée de Paro :
la carte interactive annonce « Paro, la vallée d'arrivée » sur cette étape.

## Définition un peu juste

`hotel-gangtey-lodge` (880 px), `hotel-six-senses-bhutan` (788 px) et
`bento-conciergerie` (887 px) sont des photos libres de droit de petite taille.
Elles tiennent, mais un restylage 4K à cadrage conservé leur ferait du bien —
`gen-images.mjs --only <nom> bhoutan --force`, sans flag de mode.

## Inventaire

### Carrousel du hero
- [x] `hero-1.webp` — le Nid du Tigre accroché à la falaise
- [x] `hero-2.webp` — un moine devant la façade peinte d'un temple
- [x] `hero-3.webp` — toiture dorée d'un temple devant la montagne

### Bandeau pleine largeur
- [x] `full-image.webp` — rangée de moulins à prières peints

### Section texte et images
- [x] `split-1.webp` — entrée peinte d'un dzong et son escalier de pierre
- [x] `split-2.webp` — toiture dorée d'un temple en fin de journée

### Le Nid du Tigre
- [x] `xp-taktsang-1.webp` — moines longeant les moulins à prières
- [x] `xp-taktsang-2.webp` — Taktsang vu entre les drapeaux de prière

### Expériences
- [x] `xp-punakha-benediction.webp` — un lama bénissant un fidèle agenouillé
- [x] `xp-grues-phobjikha.webp` — les grues à cou noir s'envolant de la tourbière
- [x] `xp-helico-jomolhari.webp` — l'hélicoptère au-dessus des lacs glaciaires

### Hébergements
- [x] `hotel-amankora.webp` — chambre en bois clair, poêle et fenêtre sur la forêt
- [x] `hotel-gangtey-lodge.webp` — baignoire face à la vallée de Phobjikha
- [x] `hotel-six-senses-bhutan.webp` — pavillon et piscine à débordement

### Bloc bento
- [x] `bento-map.webp` — la carte du pays et ses six étapes
- [x] `bento-adresses.webp` — repas préparé à la main dans une maison de famille
- [x] `bento-conciergerie.webp` — la conciergerie au travail
- [x] `bento-experiences.webp` — danseurs masqués d'un festival cham
- [x] `bento-hebergements.webp` — baignoire de pierre devant une fenêtre de bois

### Carte interactive
- [x] `map-paro.webp` — chortens du col de Dochula (voir « À vérifier »)
- [x] `map-haa.webp` — fermes et champs en terrasses de la vallée de Haa
- [x] `map-thimphu.webp` — le grand Bouddha Dordenma
- [x] `map-punakha.webp` — le dzong, son pont couvert et ses jacarandas
- [x] `map-phobjikha.webp` — la vallée et ses tourbières au couchant
- [x] `map-bumthang.webp` — un dzong sur sa crête boisée dans la brume
