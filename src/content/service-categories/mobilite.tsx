import type { ServiceCategory } from "@/lib/content/types";

export const serviceCategory: ServiceCategory = {
  slug: "mobilite",
  name: "Mobilité & accès privilégié",
  blurb:
    "Jets privés, transferts VIP, fast-track aéroport et gestion de bagages sensibles.",
  keywords: ["jet privé", "aviation", "transferts", "limousine", "vip", "fast-track"],
  serviceSlugs: [
    "jets-prives",
    "transferts-vip",
    "vip-aeroport",
    "bagages-sensibles",
  ],
  sections: [
    {
      type: "hero",
      eyebrow: "Service",
      heading: "Mobilité & accès privilégié",
      description:
        "Affrètement de jets privés, chauffeurs dédiés, accueil VIP en aéroport et transport sécurisé d'objets précieux.",
      images: [
        {
          src: "/service/mobilite/hero-1.png",
          alt: "Passerelle d'un jet privé déployée sur le tarmac",
        },
      ],
    },
  ],
};
