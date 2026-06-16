import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "four-seasons-mahe",
  name: "Four Seasons Resort Seychelles, Petite Anse", // TODO: verify
  blurb:
    "Des villas accrochées à la colline au-dessus de la baie de Petite Anse, sur Mahé. Chacune a sa piscine et sa vue sur le lagon. La forêt descend jusqu'au sable d'une plage en croissant.",
  keywords: ["seychelles", "mahe", "petite anse", "four seasons", "villa"],
  heroImage: {
    src: "/destination/seychelles/hotel-four-seasons-mahe.png",
    alt: "Villa sur pilotis dans la colline surplombant la baie de Petite Anse à Mahé",
  },
  destinationSlugs: ["seychelles"],
  sections: [],
};
