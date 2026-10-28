import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "aqua-mare",
  name: "Aqua Mare", // TODO: verify
  blurb:
    "Le superyacht d'Aqua Expeditions n'embarque que seize passagers, dans sept suites. Quatre ponts, un jacuzzi et un beach club à fleur d'eau, d'où partent le kayak et le snorkeling entre deux îles.", // TODO: verify facts
  keywords: ["galapagos", "aqua mare", "yacht", "aqua expeditions", "croisiere"],
  heroImage: {
    src: "/destination/galapagos/hotel-aqua-mare.webp",
    alt: "Salon en bois verni ouvrant sur la table du pont arrière d'Aqua Mare, face à l'océan",
  },
  destinationSlugs: ["galapagos"],
  sections: [],
};
