import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "lhotel-paris",
  name: "L'Hôtel",
  blurb:
    "Rue des Beaux-Arts, vingt chambres dans un hôtel particulier du XVIIIe. Oscar Wilde y est mort en 1900 dans la chambre 16, qu'on peut louer.",
  keywords: ["paris", "lhotel", "rive gauche", "oscar wilde", "saint germain", "boutique"],
  heroImage: {
    src: "/destination/paris/hotel-lhotel.webp",
    alt: "Terrasse d'une chambre de L'Hôtel sur les toits de Saint-Germain-des-Prés",
  },
  destinationSlugs: ["paris"],
  sections: [],
};
