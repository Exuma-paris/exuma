import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "skalakot",
  name: "Skálakot Manor Hotel",
  blurb:
    "Une ferme équestre tenue par la même famille depuis plusieurs générations, au pied de l'Eyjafjallajökull. Les chevaux islandais sont dans le pré derrière la maison et l'on part en balade depuis la cour. Le domaine agricole est toujours en activité.", // TODO: verify ancienneté familiale et nombre de chambres
  keywords: ["islande", "skalakot", "hvolsvollur", "chevaux", "eyjafjallajokull"],
  heroImage: {
    src: "/destination/islande/hotel-skalakot.webp",
    alt: "Manoir de Skálakot et chevaux islandais au pied de l'Eyjafjallajökull",
  },
  destinationSlugs: ["islande"],
  sections: [],
};
