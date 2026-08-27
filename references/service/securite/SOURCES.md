# Sources — service / sécurité

## 01 · protection — paysage

Aucune image produite. La rangée réutilise `/service/securite/hero-1.png`,
le visuel du hero (arbitrage Rémi, 2026-08-25 : « on ne change pas »).

Le brief écarté, s'il fallait la produire un jour : une berline arrêtée devant
une entrée discrète à la tombée du jour, vue de loin, chauffeur de dos, petit
dans le cadre. **Jamais** d'oreillettes, de lunettes noires ni d'hommes en
formation : cette imagerie contredirait la page, qui affirme que la maison
n'est pas une société de sécurité.

## 02 · imprevus — portrait

- **Source** : shooting marque employeur Exuma,
  `EXUMA#Shooting#MarqueEmployeur#Photographe©JulesDESPRETZ-130.jpg`.
- **Droits** : shooting commandé par Exuma, crédit Jules Despretz.
- **Aucune génération** : recadrage seul, en 3:4, réduit en 1080×1440.
- **Pourquoi n°130 et non n°131** : ce sont deux prises du même moment, mais le
  131 sourit. Un sourire irait mal avec un vol annulé ou une hospitalisation.
- **Filigrane** : coupe par le bas, qui l'emporte sans rien retirer sur les
  côtés. **À remplacer par le fichier livré sans filigrane.**

## 03 · assistance — paysage

- **Source** : shooting Jules Despretz, image n°18, mains sur un clavier, carnet
  et téléphone affichant 09:24 sur une table de marbre.
- **Méthode, différente des autres pages** : ce n'est pas `--inspire` mais le
  mode `--instruction`, une **édition** de notre propre photo. La composition est
  préservée à l'identique, seule la feuille de contacts a été ajoutée. C'est
  légitime ici parce que nous détenons les droits de l'image d'origine.
- **Préparation** : une bande 16:9 a été découpée dans le portrait d'origine,
  hors filigrane, avant d'être soumise. Sans ce pré-recadrage le modèle aurait
  reconstruit la mise en page pour tenir dans le format de sortie.
- **Risque assumé et contrôlé** : le piège documenté du script est d'ajouter un
  membre sur une photo de clavier. Les mains ont été vérifiées à pleine
  résolution après édition, aucune main supplémentaire n'est apparue.
- **Contrôle du texte** : la feuille ajoutée porte un titre et six lignes
  totalement illisibles, vérifiées à pleine résolution.

## 04 · sanitaire — portrait

- **Référence** : secuspm.com, une trousse de pharmacie de vacances.
- **Droits** : photo tierce sans licence, d'où le mode `--inspire`.
- **Écart volontaire, et c'est le point important** : le brief initial prévoyait
  un carnet de vaccination international. Il a été abandonné. Reproduire un
  document officiel, même fermé et décoratif, produit un objet qui ressemble à
  un faux. La trousse dit la préparation sans imiter aucun document.
- **Registre** : domestique et non clinique. Ni blouse blanche, ni seringue, ni
  cabinet médical, la page affirmant qu'aucun avis médical n'est donné.
- **Contrôles** : aucune personne, aucune main. Le passeport est fermé, couverture
  seule, jamais la page d'identité.
- **Deux réserves mineures** : la couverture porte le mot « PASSPORT » gravé,
  seul texte lisible de l'image, générique et sans marque. Et la trousse porte
  une croix blanche sur fond rouge, motif de secourisme très répandu mais proche
  d'emblèmes protégés. À trancher si vous voulez être strict.
- **Recadrage** : `sanitaire-3x4.png`, dérivé par `crop-images.py`.

## hero-nuit — bande 21:9

- **Référence** : yonder.fr, une chambre du Standard High Line à New York,
  crédit Pierre Gunther.
- **Droits** : photo tierce sans licence, d'où le mode `--inspire`.
- **Deux écarts volontaires.** La référence est en plein jour : l'image produite
  est de nuit, parce que c'est la situation que la page traite, être loin et
  tard. Et l'Empire State Building comme l'hôtel lui-même sont identifiables :
  la ligne d'horizon produite est anonyme, sans aucun monument reconnaissable.
- **Pourquoi ce sujet en ouverture** : aucune des quatre rangées ne montre le
  moment où l'on a besoin de ce service. Elles montrent la préparation ou le
  bureau. La chambre dit le lointain sans dire le danger, ce qui est exactement
  le registre à tenir sur cette catégorie.
- **Cadrage** : la fenêtre est placée au milieu du cadre pour survivre au
  recadrage en bande 21:9 du hero, qui coupe le haut et le bas.
- **Contrôles** : aucune personne, aucun reflet humain dans la vitre, aucun
  texte lisible, aucun écran allumé.
