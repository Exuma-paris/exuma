import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "red-sea-edition",
  name: "The Red Sea EDITION",
  blurb:
    "Sur l'île de Shura, à l'ouest du royaume, un récif de corail commence à quelques mètres de la plage. Les chambres ouvrent toutes sur le lagon. On rejoint l'île par bateau ou par la route qui traverse la lagune.", // TODO: verify l'accès à l'île de Shura et la date d'ouverture
  keywords: ["arabie-saoudite", "mer-rouge", "shura", "recif", "plage"],
  heroImage: {
    src: "/destination/arabie-saoudite/hotel-red-sea-edition.png",
    alt: "Chambre ouverte sur le lagon turquoise au Red Sea EDITION, île de Shura",
  },
  destinationSlugs: ["arabie-saoudite"],
  sections: [],
};
