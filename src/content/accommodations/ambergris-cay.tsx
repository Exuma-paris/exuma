import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "ambergris-cay",
  name: "Ambergris Cay",
  // TODO: verify la superficie de l'île et le nombre d'invités accueillis
  blurb:
    "Un cay du sud de l'archipel avec sa propre piste, où les avions se posent à quelques minutes des chambres. Onze cents hectares pour une trentaine d'invités, et pas un bateau de passage.",
  keywords: [
    "turks-and-caicos",
    "ambergris cay",
    "ile privee",
    "piste privee",
    "south caicos",
  ],
  heroImage: {
    src: "/destination/turks-and-caicos/hotel-ambergris-cay.png",
    alt: "Villa isolée au bord de l'eau sur l'île privée d'Ambergris Cay",
  },
  destinationSlugs: ["turks-and-caicos"],
  sections: [],
};
