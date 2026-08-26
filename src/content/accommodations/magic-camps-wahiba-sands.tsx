import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "magic-camps-wahiba-sands",
  name: "Magic Camps Wahiba Sands",
  blurb:
    "Des tentes de toile dressées dans les dunes pour la durée du séjour, puis démontées. Vrais lits, salle d'eau privée, dîner au pied d'une crête. Au départ, il ne reste aucune trace sur le sable.", // TODO: verify le détail des tentes
  keywords: ["oman", "wahiba sands", "sharqiya", "desert", "campement", "magic camps"],
  heroImage: {
    src: "/destination/oman/hotel-magic-camps.webp",
    alt: "Tentes de toile du campement Magic Camps au pied des dunes des Wahiba Sands, Oman",
  },
  destinationSlugs: ["oman"],
  sections: [],
};
