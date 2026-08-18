import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "museum-hotel-cappadoce",
  name: "Museum Hotel", // TODO: verify
  blurb:
    "À Uçhisar, les chambres sont taillées dans le tuf et les salons abritent une collection d'antiquités que l'on découvre en passant. La terrasse regarde la vallée, et les ballons s'élèvent à hauteur de balcon.", // TODO: verify la nature de la collection exposée
  keywords: ["turquie", "cappadoce", "uchisar", "troglodyte", "goreme"],
  heroImage: {
    src: "/destination/turquie/hotel-museum-hotel.png",
    alt: "Chambre troglodyte face à la vallée depuis un hôtel d'Uçhisar en Cappadoce",
  },
  destinationSlugs: ["turquie"],
  sections: [],
};
