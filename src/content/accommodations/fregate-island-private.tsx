import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "fregate-island-private",
  name: "Frégate Island Private", // TODO: verify
  blurb:
    "Une île privée et ses sept plages, dont Anse Victorin parmi les plus belles de l'océan Indien. Des milliers de tortues géantes en liberté, et un potager qui nourrit la table.",
  keywords: ["seychelles", "fregate island", "ile privee", "plage", "tortues geantes"],
  heroImage: {
    src: "/destination/seychelles/hotel-fregate-island.png",
    alt: "Villa surplombant une plage déserte de Frégate Island aux Seychelles",
  },
  destinationSlugs: ["seychelles"],
  sections: [],
};
