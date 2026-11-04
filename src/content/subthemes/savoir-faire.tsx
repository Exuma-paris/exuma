import type { Subtheme } from "@/lib/content/types";

export const subtheme: Subtheme = {
  slug: "savoir-faire",
  name: "Savoir-faire & artisanat",
  themeSlug: "gastronomie",
  blockHeading:
    "Les savoir-faire, vus depuis l'atelier",
  blurb:
    "Dans le Småland, le four du maître verrier reste allumé depuis le dix-huitième siècle. Un horloger de la vallée de Joux, les rouleurs de La Romana, le bleu de Delft posé à la main. On regarde travailler avant d'acheter quoi que ce soit.",
  bandIntent:
    "Les mains d'un artisan au travail sur un établi, lumière rasante, l'outil bien visible.",
  heroImage: {
    src: "/subtheme/savoir-faire/band.png",
    alt: "Mains d'un artisan à l'établi, l'outil bien visible, dans une lumière rasante",
  },
  thumbnailsIntro:
    "D'autres ateliers, d'autres gestes.",
  featuredDestinationSlugs: [
    "suede",
    "suisse",
    "republique-dominicaine",
    "pays-bas",
    "maroc",
    "marrakech",
    "zanzibar",
    "colombie",
    "inde",
    "sainte-lucie",
    "saint-vincent-et-les-grenadines",
    "saint-barthelemy",
  ],
  cards: [
    {
      slug: "suede",
      description:
        "Dans un atelier du Småland, un maître verrier façonne la pâte incandescente au bout d'une canne, devant un four resté allumé depuis le dix-huitième siècle. On repart avec une pièce soufflée sous ses yeux.",
      image: {
        src: "/destination/suede/xp-atelier-verre.webp",
        alt: "Un maître verrier devant son four, dans un atelier du Småland",
      },
    },
    {
      slug: "suisse",
      description:
        "Dans une vallée du Jura, un petit atelier ouvre ses portes pour vous seuls. On démonte une montre, on la remonte, et l'horloger raconte son métier tout en travaillant.",
      image: {
        src: "/destination/suisse/xp-atelier-horloger.webp",
        alt: "Mains d'un horloger sur un mouvement de montre, vallée de Joux",
      },
    },
    {
      slug: "republique-dominicaine",
      description:
        "La Romana roule une grande partie des cigares premium du monde. On visite en privé une manufacture, du séchage des feuilles à la salle des rouleurs, puis un maître vous apprend à rouler votre propre cigare.",
      image: {
        src: "/destination/republique-dominicaine/xp-cigares-la-romana.webp",
        alt: "Caisses de cigares alignés dans une manufacture de La Romana",
      },
    },
    {
      slug: "pays-bas",
      description:
        "Six heures du matin à Aalsmeer. Les chariots de fleurs défilent sous la passerelle, et les prix descendent au cadran jusqu'à ce qu'un acheteur s'arrête. L'après-midi, à Delft, les peintres de la Royal Delft posent le bleu à la main.",
      image: {
        src: "/subtheme/savoir-faire/card-pays-bas.webp",
        alt: "Chariots de fleurs vus d'en haut, à la criée d'Aalsmeer",
      },
    },
    {
      slug: "maroc",
      image: {
        src: "/destination/maroc/xp-vallee-des-roses.webp",
        alt: "Cueilleuse de roses de Damas, dans la vallée des Roses",
      },
    },
    {
      slug: "marrakech",
      image: {
        src: "/destination/marrakech/zellige.webp",
        alt: "Patio aux zelliges et stucs ciselés, à Marrakech",
      },
    },
    {
      slug: "zanzibar",
      image: {
        src: "/destination/zanzibar/xp-epices-kidichi.webp",
        alt: "Badiane et épices en poudre, à Zanzibar",
      },
    },
    {
      slug: "colombie",
      image: {
        src: "/destination/colombie/xp-cafe.webp",
        alt: "Vallée de Cocora et ses palmiers de cire, dans le Quindío",
      },
    },
    {
      slug: "inde",
      image: {
        src: "/destination/inde/split-2.webp",
        alt: "Mains d'une tisserande tendant les fils de soie colorés sur son métier",
      },
    },
    {
      slug: "sainte-lucie",
      image: {
        src: "/destination/sainte-lucie/xp-arbre-au-chocolat.webp",
        alt: "Un cultivateur ouvrant une cabosse de cacao, à Soufrière",
      },
    },
    {
      slug: "saint-vincent-et-les-grenadines",
      image: {
        src: "/destination/saint-vincent-et-les-grenadines/xp-maquettistes-bequia.webp",
        alt: "Un maquettiste de Bequia taillant une coque à la main",
      },
    },
    {
      slug: "saint-barthelemy",
      image: {
        src: "/destination/saint-barthelemy/xp-corossol.webp",
        alt: "Vannerie de latanier à Corossol, à Saint-Barthélemy",
      },
    },
  ],
  sections: [],
};
