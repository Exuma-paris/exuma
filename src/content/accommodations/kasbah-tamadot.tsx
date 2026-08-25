import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "kasbah-tamadot",
  name: "Kasbah Tamadot", // TODO: verify
  blurb:
    "L'ancienne demeure d'un antiquaire, accrochée au-dessus de la vallée d'Asni, face aux sommets du Haut Atlas. Les tentes berbères du jardin ont chacune leur terrasse, et le petit déjeuner se prend en regardant la brume quitter la montagne.",
  keywords: ["maroc", "haut atlas", "asni", "toubkal", "kasbah"],
  heroImage: {
    src: "/destination/maroc/hotel-kasbah-tamadot.png",
    alt: "Terrasse de la Kasbah Tamadot face aux sommets du Haut Atlas au-dessus d'Asni",
  },
  destinationSlugs: ["maroc"],
  sections: [],
};
