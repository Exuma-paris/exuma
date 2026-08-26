import type { ServiceCategory } from "@/lib/content/types";

export const serviceCategory: ServiceCategory = {
  slug: "conciergerie",
  name: "Conciergerie privée & VIP",
  blurb:
    "Moments d'exception, personnel dédié, réservations de dernière minute, l'art d'obtenir l'impossible.",
  keywords: [
    "conciergerie",
    "vip",
    "nanny",
    "staff",
    "reservations",
    "celebrations",
  ],
  serviceSlugs: [
    "moments-exception",
    "personnel-dedie",
    "reservations-derniere-minute",
  ],
  sections: [
    {
      type: "hero",
      eyebrow: "Service",
      heading: "Conciergerie privée & VIP",
      description:
        "Surprises, célébrations, événements privés, sélection de personnel qualifié et capacité à obtenir l'impossible, même dans l'urgence.",
      images: [
        {
          src: "/service/conciergerie/hero-1.png",
          alt: "Mains d'un concierge remettant une clé au comptoir d'un hôtel",
        },
      ],
    },
    {
      type: "finalCta",
      eyebrow: "Aller plus loin",
      heading: "Une question sur ce service ? Écrivez-nous",
      primaryCta: { label: "Nous écrire", href: "/nous-ecrire" },
      secondaryCta: { label: "Créer votre voyage", href: "/votre-projet" },
    },
  ],
};
