import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "old-cataract-assouan",
  name: "Sofitel Legend Old Cataract",
  blurb:
    "La terrasse domine la première cataracte et l'île Éléphantine depuis 1899. Agatha Christie y a écrit une partie de Mort sur le Nil, dans une chambre qui porte aujourd'hui son nom. Le thé se sert à l'heure où les felouques rentrent, face au désert de la rive ouest.", // TODO: verify date de construction et séjour d'Agatha Christie
  keywords: ["egypte", "assouan", "nil", "elephantine", "cataracte"],
  heroImage: {
    src: "/destination/egypte/hotel-old-cataract.webp",
    alt: "Terrasse de l'Old Cataract dominant le Nil et l'île Éléphantine à Assouan",
  },
  destinationSlugs: ["egypte"],
  sections: [],
};
