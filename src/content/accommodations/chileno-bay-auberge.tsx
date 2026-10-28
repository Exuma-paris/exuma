import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "chileno-bay-auberge",
  name: "Chileno Bay Resort & Residences (Auberge Resorts)", // TODO: verify
  blurb:
    "Sur la baie de Chileno, l'une des seules baies du corridor avec accès direct à un récif de snorkeling. 92 suites et villas dessinées par EDG Design, dispersées sur la colline face à la mer de Cortez. Le récif est accessible à la nage depuis la plage.",
  keywords: [
    "los-cabos",
    "mexique",
    "corridor",
    "chileno-bay",
    "auberge-resorts",
    "snorkeling",
  ],
  heroImage: {
    src: "/destination/los-cabos/hotel-chileno-bay.webp",
    alt: "Suite ouverte sur la terrasse et la mer de Cortez à Chileno Bay, Los Cabos",
  },
  destinationSlugs: ["los-cabos"],
  sections: [],
};
