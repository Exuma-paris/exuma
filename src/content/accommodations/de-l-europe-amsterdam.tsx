import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "de-l-europe-amsterdam",
  name: "De L'Europe Amsterdam",
  blurb:
    "La terrasse donne sur l'Amstel, à l'endroit où la rivière entre dans la ville. La maison appartient à une famille d'Amsterdam, et certaines chambres accrochent des toiles du Siècle d'or prêtées par le Rijksmuseum. On dort devant un tableau de musée, les bateaux passant sous les fenêtres.", // TODO: verify la propriété familiale et le prêt de toiles par le Rijksmuseum
  keywords: ["pays-bas", "amsterdam", "amstel", "grachten", "rijksmuseum"],
  heroImage: {
    src: "/destination/pays-bas/hotel-de-l-europe.png",
    alt: "Terrasse de De L'Europe au bord de l'Amstel en fin de journée, Amsterdam",
  },
  destinationSlugs: ["pays-bas"],
  sections: [],
};
