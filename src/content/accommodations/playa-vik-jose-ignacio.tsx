import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "playa-vik-jose-ignacio",
  name: "Playa Vik José Ignacio",
  // TODO: verify l'architecte
  blurb:
    "Sur la plage Mansa, une maison de bronze dessinée par Carlos Ott et des casas dispersées dans le jardin. Les œuvres n'ont pas été choisies pour décorer : elles ont été commandées pour ces murs-là.",
  keywords: ["uruguay", "jose ignacio", "maldonado", "playa mansa", "carlos ott"],
  heroImage: {
    src: "/destination/uruguay/hotel-playa-vik.webp",
    alt: "Salon creusé autour du feu sur la terrasse de Playa Vik, face à l'océan au crépuscule",
  },
  destinationSlugs: ["uruguay"],
  sections: [],
};
