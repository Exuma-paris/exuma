// EN ATTENTE D'OUVERTURE — fiche volontairement non enregistrée dans
// src/lib/content/registry.ts. Tant qu'elle n'y figure pas, l'adresse
// n'apparaît ni sur la page Norvège, ni dans la recherche, ni dans le plan du
// site. Le jour où la date d'ouverture est connue : ajouter l'import + l'entrée
// dans le registre, puis ajouter "svart" aux slugs de la section
// `entityList kind: "accommodation"` de src/content/destinations/norvege.tsx.
import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "svart",
  name: "Svart", // TODO: verify nom commercial définitif à l'ouverture
  blurb:
    "Un anneau posé sur pilotis dans le Holandsfjord, face au glacier de Svartisen. Le bâtiment produit davantage d'énergie qu'il n'en consomme, et se rejoint par bateau depuis Meløy.", // TODO: verify
  keywords: ["norvege", "svart", "svartisen", "meloy", "holandsfjord"],
  heroImage: {
    src: "/destination/norvege/hotel-svart.webp",
    alt: "Bâtiment circulaire sur pilotis face au glacier de Svartisen en Norvège",
  },
  destinationSlugs: ["norvege"],
  sections: [],
};
