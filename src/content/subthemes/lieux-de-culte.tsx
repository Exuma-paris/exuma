import type { Subtheme } from "@/lib/content/types";

export const subtheme: Subtheme = {
  slug: "lieux-de-culte",
  name: "Lieux de culte",
  themeSlug: "culture-visites",
  blockHeading:
    "Les lieux de culte, à leur heure",
  blurb:
    "À sept heures, la Sixtine se visite à six personnes maximum. À Punakha, un lama conduit la bénédiction dans une chapelle latérale du dzong, quand les visiteurs sont repartis. À Istanbul, la lumière tombe des coupoles de Sainte-Sophie. Le temple de la Dent et Wat Pho gardent leur rite à heure fixe, et l'on s'y range.",
  bandIntent:
    "L'intérieur d'un lieu de culte pendant l'office, fidèles ou officiants de dos, lumière basse.",
  heroImage: {
    src: "/subtheme/lieux-de-culte/band.png",
    alt: "Quelques personnes assises de dos dans un lieu de prière, à la lumière basse des bougies",
  },
  thumbnailsIntro:
    "D'autres rites, à d'autres heures.",
  featuredDestinationSlugs: [
    "bhoutan",
    "rome",
    "indonesie",
    "turquie",
    "sri-lanka",
    "thailande",
  ],
  cards: [
    {
      slug: "bhoutan",
      description:
        "La forteresse de Punakha se tient entre deux rivières, et l'on y entre quand les visiteurs sont repartis. Un lama conduit alors la bénédiction dans une chapelle latérale, tambour et cloche à la main, dans l'odeur des lampes à beurre.",
      image: {
        src: "/destination/bhoutan/xp-punakha-benediction.webp",
        alt: "Lama donnant la bénédiction à un visiteur agenouillé, à la lumière des lampes à beurre",
      },
    },
    {
      slug: "rome",
      description:
        "L'ouverture privée des Musées du Vatican commence à sept heures, avec un historien de la Renaissance. La chapelle Sixtine se visite à six personnes maximum, et les Stanze de Raphaël se regardent salle par salle, à la lumière naturelle. Le parcours complet demande deux heures et demie.",
      image: {
        src: "/destination/rome/bento-experiences.webp",
        alt: "Voûte de Michel-Ange dans la chapelle Sixtine vide",
      },
    },
    {
      slug: "indonesie",
      description:
        "À quelques minutes de Tirta Empul, Pura Mengening garde la même source sacrée, sans la file d'attente. Le prêtre du temple prépare les offrandes, puis on passe sous les fontaines dans l'ordre qu'il indique, en sarong, pour le melukat, la purification balinaise.",
      image: {
        src: "/destination/indonesie/xp-tirta-empul.webp",
        alt: "Purification sous les fontaines d'un bassin sacré, à Bali",
      },
    },
    {
      slug: "turquie",
      description:
        "Istanbul se traverse en bateau, de Sainte-Sophie et de la mosquée Bleue aux marchés de Kadıköy. À Sainte-Sophie, le visiteur monte à la galerie supérieure, fermée pendant les prières. En Cappadoce, les moines byzantins ont creusé des églises entières dans la roche, fresques comprises.",
      image: {
        src: "/destination/turquie/hero-2.webp",
        alt: "Coupole et médaillons calligraphiés de Sainte-Sophie à Istanbul",
      },
    },
    {
      slug: "sri-lanka",
      image: {
        src: "/destination/sri-lanka/xp-temple-de-la-dent.webp",
        alt: "Murs blancs du temple de la Dent, à Kandy",
      },
    },
    {
      slug: "thailande",
      image: {
        src: "/destination/thailande/xp-wat-pho.webp",
        alt: "Chedis couverts de céramique du temple de Wat Pho, à Bangkok",
      },
    },
  ],
  sections: [],
};
