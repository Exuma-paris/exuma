import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "explora-rapa-nui",
  name: "Explora Rapa Nui", // TODO: verify (Posada de Mike Rapu)
  blurb:
    "Une maison basse posée sur le plateau du sud, sans rien d'autre en vue que l'herbe et l'océan. Les explorations partent d'ici chaque jour, à pied, à cheval ou en vélo, avec les guides de la maison. On rentre le soir dans un salon où l'on raconte ce que l'on a vu.",
  keywords: ["ile de paques", "rapa nui", "explora", "hanga roa", "lodge"],
  heroImage: {
    src: "/destination/ile-de-paques/hotel-explora-rapa-nui.webp",
    alt: "Lodge Explora Rapa Nui posé sur le plateau du sud de l'île de Pâques",
  },
  destinationSlugs: ["ile-de-paques"],
  sections: [],
};
