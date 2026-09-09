import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "richards-river-camp",
  name: "Richard's River Camp", // TODO: verify exact name
  blurb:
    "Richard Roberts a fondé ce camp de tentes dans la réserve privée Oare Orok, à l'écart des circuits du Masaï Mara. Huit tentes seulement, pas d'autre camp visible à l'horizon. Les safaris à pied y sont possibles là où les pistes du parc s'arrêtent.",
  keywords: ["kenya", "masai mara", "oare orok", "safari", "camp prive", "tentes"],
  heroImage: {
    src: "/destination/kenya/hotel-richards-river-camp.webp",
    alt: "Tentes de Richard's River Camp dans la réserve privée Oare Orok au Masaï Mara",
  },
  destinationSlugs: ["kenya"],
  sections: [],
};
