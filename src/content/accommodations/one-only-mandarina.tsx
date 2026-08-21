import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "one-only-mandarina",
  name: "One&Only Mandarina", // TODO: verify
  blurb:
    "Sur la côte du Nayarit, des villas posées dans la canopée ou au bord de la falaise, entre la montagne et le Pacifique. Certaines se rejoignent par une passerelle suspendue au-dessus des arbres. L'hiver, on aperçoit les baleines depuis la terrasse.",
  keywords: ["mexique", "nayarit", "mandarina", "pacifique", "riviera nayarit"],
  heroImage: {
    src: "/destination/mexique/hotel-mandarina.png",
    alt: "Villa perchée dans la canopée du One&Only Mandarina face au Pacifique",
  },
  destinationSlugs: ["mexique"],
  sections: [],
};
