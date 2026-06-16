import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "north-island",
  name: "North Island", // TODO: verify
  blurb:
    "Une île entière pour onze villas de bois et de granit, ouvertes sur la plage. Les tortues remontent pondre devant les terrasses. On ne croise que ses propres traces sur le sable.",
  keywords: ["seychelles", "north island", "ile privee", "villa", "tortues"],
  heroImage: {
    src: "/destination/seychelles/hotel-north-island.png",
    alt: "Villa de bois ouverte sur la plage de North Island aux Seychelles",
  },
  destinationSlugs: ["seychelles"],
  sections: [],
};
