import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "hermitage-bay",
  name: "Hermitage Bay", // TODO: verify
  blurb:
    "Des cottages disséminés sur la colline et la plage, sans réception visible depuis le sable. Aucune signalétique de resort, juste la mer et la colline.",
  keywords: ["antigua", "hermitage bay", "cottage", "adults only"],
  heroImage: {
    src: "/destination/antigua/hotel-hermitage-bay.png",
    alt: "Cottage privé sur la colline dominant la plage d'Hermitage Bay, Antigua",
  },
  destinationSlugs: ["antigua"],
  sections: [],
};
