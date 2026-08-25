import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "constance-tsarabanjina",
  name: "Constance Tsarabanjina",
  blurb:
    "Vingt-cinq cases de bois posées sur un îlot de granit de l'archipel des Mitsio. Une plage regarde le lever du soleil, l'autre le coucher. Il n'y a aucune route sur l'île.", // TODO: verify le nombre de cases
  keywords: ["madagascar", "mitsio", "tsarabanjina", "nosy be", "plage"],
  heroImage: {
    src: "/destination/madagascar/hotel-tsarabanjina.png",
    alt: "Cases de bois de Constance Tsarabanjina sur la plage de l'archipel des Mitsio",
  },
  destinationSlugs: ["madagascar"],
  sections: [],
};
