import type { Continent } from "@/lib/content/types";

export const continent: Continent = {
  slug: "proche-orient",
  name: "Proche & Moyen-Orient",
  genitive: "du Proche et Moyen-Orient",
  blurb: "Déserts, médinas, palais, l'art d'une hospitalité ancienne.",
  keywords: [
    "proche orient",
    "moyen orient",
    "jordanie",
    "oman",
    "emirats",
    "arabie",
    "iran",
  ],
  sections: [
    {
      type: "hero",
      eyebrow: "Continent",
      heading: "Proche & Moyen-Orient",
      description:
        "Cinq heures de vol depuis Paris, aucun décalage horaire notable, et une saison haute qui tombe en plein hiver européen. La région se prête aux voyages courts entre novembre et mars.",
      images: [
        {
          src: "/destination/jordanie/hero-2.webp",
          alt: "Massifs de grès et sable rouge du désert du Wadi Rum en fin de journée",
        },
        {
          src: "/destination/oman/hero-3.webp",
          alt: "Tours de terre du fort de Nizwa dominant la palmeraie omanaise",
        },
        {
          src: "/destination/jordanie/hero-3.webp",
          alt: "Dépôts de sel et eau immobile sur la rive jordanienne de la mer Morte",
        },
      ],
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Ouverture",
      heading: "Une région qui se visite quand l'Europe est en hiver",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      columns: [
        "Le calendrier de la région est l'inverse du nôtre. De juin à septembre, les températures dépassent régulièrement quarante degrés dans les déserts jordaniens et omanais, et les journées de visite deviennent inconfortables. À partir de novembre, l'air redescend, les nuits sous tente demandent une couverture, et les sites archéologiques se parcourent à pied sans contrainte d'horaire.",
        "Les distances sont courtes et se font par la route. Amman, Jerash, la mer Morte, Pétra et le Wadi Rum s'enchaînent sur un axe unique de quatre cents kilomètres. À Oman, Mascate, Nizwa, le Jebel Akhdar et les Wahiba Sands tiennent dans le même rayon. Un chauffeur suit le voyage du premier au dernier jour, ce qui évite les changements de guide à chaque étape.",
        "L'hospitalité y est codifiée et fait partie du voyage. On boit le café à la cardamome avant de parler, on partage un repas assis au sol sous une tente bédouine, on dort une nuit dans le désert avant de rejoindre la côte. Ce sont ces moments-là que nous préparons en priorité, plus que le classement des hôtels.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/oman/full-image.webp",
        alt: "Canyon du Jebel Akhdar et villages accrochés à la falaise lors d'un voyage à Oman",
      },
      height: 560,
    },

    {
      type: "finalCta",
      eyebrow: "Aller plus loin",
      heading: "Dites-nous ce que vous avez en tête",
      primaryCta: { label: "Créer votre voyage", href: "/votre-projet" },
      secondaryCta: { label: "Nous écrire", href: "/nous-ecrire" },
    },
  ],
};
