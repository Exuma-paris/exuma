import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "six-senses-fiji",
  name: "Six Senses Fiji",
  // TODO: verify l'autonomie solaire et le nombre de villas
  blurb:
    "Sur l'île de Malolo, dans les Mamanuca, la maison fonctionne à l'énergie solaire et embouteille sa propre eau. Les villas ouvrent sur un lagon peu profond, à vingt minutes de bateau du continent.",
  keywords: ["fidji", "mamanuca", "malolo", "six senses", "nadi"],
  heroImage: {
    src: "/destination/fidji/hotel-six-senses-fiji.png",
    alt: "Villa du Six Senses Fiji ouverte sur le lagon de Malolo dans les Mamanuca",
  },
  destinationSlugs: ["fidji"],
  sections: [],
};
