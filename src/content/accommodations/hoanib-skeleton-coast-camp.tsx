import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "hoanib-skeleton-coast-camp",
  name: "Wilderness Hoanib Skeleton Coast Camp",
  blurb:
    "Huit tentes seules dans un affluent de la Hoanib, au cœur du Kaokoland. La première route goudronnée est à une heure de vol. Les éléphants du désert descendent le lit de la rivière sèche et passent devant les tentes en fin de journée.", // TODO: verify nombre de tentes
  keywords: ["namibie", "hoanib", "skeleton coast", "kaokoland", "kunene"],
  heroImage: {
    src: "/destination/namibie/hotel-hoanib.webp",
    alt: "Tente du Hoanib Skeleton Coast Camp dans une vallée sèche du Kaokoland, Namibie",
  },
  destinationSlugs: ["namibie"],
  sections: [],
};
