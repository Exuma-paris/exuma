import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "maroma-belmond",
  name: "Maroma, A Belmond Hotel", // TODO: verify
  blurb:
    "Une plage de la Riviera Maya bordée de palmiers, dessinée autrefois avec l'aide d'un chaman maya puis reprise avec beaucoup de soin. Les chambres blanches donnent sur la mangrove ou sur le sable, et l'agitation de la côte s'arrête à l'entrée du domaine.",
  keywords: ["mexique", "riviera maya", "maroma", "belmond", "quintana roo"],
  heroImage: {
    src: "/destination/mexique/hotel-maroma.png",
    alt: "Plage et palmiers du Maroma sur la Riviera Maya au petit matin",
  },
  destinationSlugs: ["mexique"],
  sections: [],
};
