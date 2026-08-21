import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "awasi-mendoza",
  name: "Awasi Mendoza", // TODO: verify le nom exact et l'existence de cette adresse Awasi à Mendoza
  blurb:
    "Des villas dispersées au milieu des vignes, chacune avec son guide et son véhicule, de sorte que rien n'est jamais mis en commun. Le programme du lendemain se décide la veille au soir, pour vous seuls.",
  keywords: ["argentine", "mendoza", "uco", "awasi", "malbec"],
  heroImage: {
    src: "/destination/argentine/hotel-awasi-mendoza.png",
    alt: "Villa isolée au milieu des vignes face aux Andes à Mendoza",
  },
  destinationSlugs: ["argentine"],
  sections: [],
};
