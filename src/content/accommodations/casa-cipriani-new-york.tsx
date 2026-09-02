import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "casa-cipriani-new-york",
  name: "Casa Cipriani New York",
  blurb:
    "Un club privé installé dans une ancienne gare maritime restaurée, où l'on dort au bord de l'eau plutôt qu'entre deux tours. Le bar joue du jazz tard, et le service est celui de la famille Cipriani.", // TODO: verify le statut de club privé et la programmation du bar,
  keywords: ["new-york", "manhattan", "battery-park", "cipriani", "port"],
  heroImage: {
    src: "/destination/new-york/hotel-casa-cipriani.webp",
    alt: "Façade de l'ancienne gare maritime abritant Casa Cipriani, à Battery Park",
  },
  destinationSlugs: ["new-york"],
  sections: [],
};
