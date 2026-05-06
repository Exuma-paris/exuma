import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "lhotel-paris",
  name: "L'Hôtel",
  blurb:
    "Rue des Beaux-Arts, vingt chambres dans un hôtel particulier du XVIIIe. Oscar Wilde y est mort en 1900 dans la chambre 16, qu'on peut louer aujourd'hui. Mistinguett a vécu dans l'Art déco du second étage. Une piscine voûtée au sous-sol, une cour intérieure, un restaurant étoilé. La rive gauche en confidence, hors palace, au plus près des galeries.",
  keywords: ["paris", "lhotel", "rive gauche", "oscar wilde", "saint germain", "boutique"],
  heroImage: {
    src: "/destination/paris/hotel-lhotel.png",
    alt: "Cour intérieure de L'Hôtel rue des Beaux-Arts",
  },
  destinationSlug: "paris",
  sections: [],
};
