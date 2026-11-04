import type { Subtheme } from "@/lib/content/types";

export const subtheme: Subtheme = {
  slug: "safari-marin",
  name: "Safari marin",
  themeSlug: "safaris-aventure",
  blockHeading:
    "Le safari marin commence à la surface",
  blurb:
    "Au Silver Bank, trois bateaux seulement sont autorisés chaque saison. À Seal Bay, les lions de mer dorment sur le sable, à quelques mètres du ranger. L'observation se fait d'abord depuis le bateau ou depuis la plage. Ce qui se passe sous la surface relève de la plongée et du snorkeling.",
  bandIntent:
    "Une baleine ou des otaries observées depuis le pont d'un bateau, la surface de l'eau dans le cadre. Aucun véhicule terrestre.",
  heroImage: {
    src: "/subtheme/safari-marin/band.png",
    alt: "Baleine à bosse sautant près d'un bateau, vue depuis le pont, la surface de l'eau dans le cadre",
  },
  thumbnailsIntro:
    "D'autres côtes, où l'animal se laisse voir depuis le pont.",
  featuredDestinationSlugs: [
    "galapagos",
    "mexique",
    "republique-dominicaine",
    "australie",
    "colombie",
    "canada",
    "los-cabos",
    "panama",
    "seychelles",
  ],
  cards: [
    {
      slug: "galapagos",
      description:
        "Punta Suárez, sur Española, accueille la quasi-totalité des albatros des Galápagos, d'avril à décembre. Le parc national limite le nombre de visiteurs par jour, et l'on s'arrête à quelques mètres des oiseaux. Sur la lave noire de l'île, les iguanes marins se chauffent au soleil.",
      image: {
        src: "/destination/galapagos/xp-albatros-punta-suarez.webp",
        alt: "Couple d'albatros des Galápagos, bec contre bec, à Punta Suárez",
      },
    },
    {
      slug: "mexique",
      description:
        "En hiver, les baleines à bosse viennent mettre bas dans la baie de Banderas. Le bateau coupe son moteur, l'hydrophone descend dans l'eau, et le chant des mâles remplit tout à coup le silence.",
      image: {
        src: "/destination/mexique/xp-baleines.webp",
        alt: "Baleine à bosse en plein saut, nageoire levée, dans la baie de Banderas",
      },
    },
    {
      slug: "republique-dominicaine",
      description:
        "De février à avril, des milliers de baleines à bosse se retrouvent au Silver Bank, au large de la côte nord. Trois bateaux seulement y sont autorisés chaque saison. On nage avec masque et tuba, encadré par un guide, et ce sont les baleines qui choisissent d'approcher.",
      image: {
        src: "/destination/republique-dominicaine/xp-baleines-silver-bank.webp",
        alt: "Baleine à bosse et son baleineau sous l'eau, un nageur au masque à distance",
      },
    },
    {
      slug: "australie",
      description:
        "Sur la côte sud de Kangaroo Island, une colonie de lions de mer australiens dort sur le sable entre deux marées. Avec un ranger, on descend sur la plage elle-même, à quelques mètres des animaux.",
      image: {
        src: "/subtheme/safari-marin/card-australie.webp",
        alt: "Lion de mer australien sur le sable de Seal Bay, à Kangaroo Island",
      },
    },
    {
      slug: "colombie",
      image: {
        src: "/destination/colombie/xp-baleines.webp",
        alt: "Baleine à bosse en plein saut au coucher du soleil, sur le Pacifique colombien",
      },
    },
    {
      slug: "canada",
      image: {
        src: "/destination/canada/xp-icebergs-terre-neuve.webp",
        alt: "Bateau de pêche au pied d'un iceberg, à Terre-Neuve",
      },
    },
    {
      slug: "los-cabos",
      image: {
        src: "/destination/los-cabos/xp-snorkeling-otaries.webp",
        alt: "Otarie de Californie nageant vers l'objectif, à Los Islotes",
      },
    },
    {
      slug: "seychelles",
      image: {
        src: "/destination/seychelles/map-curieuse.webp",
        alt: "Tortues géantes sur le sable de l'île de Curieuse, aux Seychelles",
      },
    },
  ],
  sections: [],
};
