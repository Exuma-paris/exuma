import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "aman-kyoto",
  name: "Aman Kyoto", // TODO: verify
  blurb:
    "Pavillon discret dans un jardin de trois hectares au pied du mont Daimonji, à Kyoto. Accès direct aux sentiers forestiers de la ville. Depuis aucune chambre on ne voit d'autre chambre.",
  keywords: ["kyoto", "aman", "jardin", "daimonji", "japon", "ryokan"],
  heroImage: {
    src: "/destination/japon/hotel-aman-kyoto.png",
    alt: "Pavillon de l'Aman Kyoto au bord de son étang dans le jardin privé, mont Daimonji en arrière-plan",
  },
  destinationSlug: "japon",
  sections: [],
};
