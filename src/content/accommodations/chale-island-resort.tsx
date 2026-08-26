import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "chale-island-resort",
  name: "Chale Island Resort", // TODO: verify exact name
  blurb:
    "Une petite île posée au large de la côte sud du Kenya, face à Diani. On y arrive en bateau, la traversée dure quelques minutes et suffit à couper du continent. Autour, la mangrove, le lagon et le récif. L'océan Indien est partout, et il n'y a rien d'autre sur l'île que l'hôtel.", // TODO: verify
  keywords: ["kenya", "chale island", "diani beach", "cote kenyane", "ile privee", "ocean indien"],
  heroImage: {
    src: "/destination/kenya/hotel-chale-island-resort.webp",
    alt: "Plage et lagon de l'île de Chale au large de la côte sud du Kenya",
  },
  destinationSlugs: ["kenya"],
  sections: [],
};
