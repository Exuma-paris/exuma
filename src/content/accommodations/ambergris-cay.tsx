import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "ambergris-cay",
  name: "Ambergris Cay",
  // TODO: verify la superficie de l'île et le nombre d'invités accueillis
  blurb:
    "Un cay du sud de l'archipel avec sa propre piste, où les avions se posent à quelques minutes des chambres. Quatre cent cinquante hectares pour quelques villas et bungalows, et pas un bateau de passage.",
  keywords: [
    "turks-and-caicos",
    "ambergris cay",
    "ile privee",
    "piste privee",
    "south caicos",
  ],
  heroImage: {
    src: "/destination/turks-and-caicos/hotel-ambergris-cay.webp",
    alt: "Piscine à débordement et transats face à la mer sur l'île privée d'Ambergris Cay",
  },
  destinationSlugs: ["turks-and-caicos"],
  sections: [],
};
