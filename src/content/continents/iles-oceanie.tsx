import type { Continent } from "@/lib/content/types";

export const continent: Continent = {
  slug: "iles-oceanie",
  name: "Îles & Océanie",
  genitive: "des îles et de l'Océanie",
  blurb: "Polynésie, Fidji, Australie, des archipels qui imposent le silence.",
  keywords: [
    "iles",
    "oceanie",
    "polynesie",
    "fidji",
    "australie",
    "nouvelle-zelande",
    "pacifique",
  ],
  sections: [
    {
      type: "hero",
      eyebrow: "Continent",
      heading: "Îles & Océanie",
      description:
        "Des motus polynésiens aux fjords de Nouvelle-Zélande, ce sont les destinations les plus lointaines que nous préparons. Vingt à vingt-quatre heures de vol, et des séjours qui descendent rarement sous douze nuits.",
      images: [
        {
          src: "/destination/polynesie/hero-2.png",
          alt: "Bungalows sur pilotis face au mont Otemanu à Bora Bora",
        },
        {
          src: "/destination/maurice/hero-2.png",
          alt: "Terres colorées et forêt de Chamarel dans les hauteurs mauriciennes",
        },
        {
          src: "/destination/maurice/hero-3.png",
          alt: "Ligne d'écume du récif barrière vue à la verticale, océan et platier corallien",
        },
      ],
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Ouverture",
      heading: "Le temps de vol dicte la durée du séjour",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      columns: [
        "C'est la seule région où le trajet impose sa loi. Paris rejoint Tahiti en une vingtaine d'heures avec une escale, l'Australie en vingt-deux, Maurice en onze de vol direct. En dessous de douze nuits sur place, le voyage se passe à récupérer du décalage. Nous refusons régulièrement des séjours trop courts pour cette raison.",
        "Les archipels se parcourent ensuite par petits sauts. En Polynésie, on relie Tahiti à Bora Bora, Moorea ou Fakarava en cinquante minutes d'avion, parfois moins. Les Tuamotu demandent une organisation plus fine, avec des rotations moins nombreuses. Aux Fidji comme aux Seychelles, l'hydravion et le bateau remplacent souvent l'avion de ligne.",
        "Les saisons y sont franches. L'hiver austral, de mai à octobre, donne le temps le plus sec sur la Polynésie, les Fidji et le nord de l'Australie. Maurice et les Seychelles restent praticables toute l'année, avec des alizés plus marqués de juin à septembre sur la côte est. La Nouvelle-Zélande, elle, se visite d'octobre à avril.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/polynesie/full-image.png",
        alt: "Vue panoramique d'un atoll polynésien",
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
