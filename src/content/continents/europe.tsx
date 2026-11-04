import type { Continent } from "@/lib/content/types";

export const continent: Continent = {
  slug: "europe",
  name: "Europe",
  genitive: "d'Europe",
  blurb: "Méditerranée, Atlantique, Alpes, un continent d'art de vivre.",
  keywords: ["europe", "italie", "espagne", "portugal", "grece"],
  sections: [
    {
      type: "hero",
      eyebrow: "Continent",
      heading: "Europe",
      description:
        "Trois heures de vol séparent Paris de Reykjavík, deux heures et demie des Lofoten, une heure et demie d'Ajaccio. C'est le seul continent où l'on change complètement de paysage sans que le trajet mange le voyage.",
      images: [
        {
          src: "/destination/corse/hero-2.webp",
          alt: "Plage de Palombaggia bordée de pins parasols au lever du jour",
        },
        {
          src: "/destination/islande/hero-3.webp",
          alt: "Maison isolée au pied d'un volcan couvert de neige",
        },
        {
          src: "/destination/norvege/hero-2.webp",
          alt: "Parois du Geirangerfjord plongeant dans l'eau sombre au lever du jour",
        },
      ],
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Ouverture",
      heading: "Des distances courtes, et le calendrier pour seule contrainte",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      columns: [
        "L'Europe se prête aux séjours de cinq à dix nuits parce que rien n'y est loin. Une matinée d'avion suffit à passer du maquis méditerranéen à un fjord arctique. Nos itinéraires en profitent pour rester longtemps au même endroit plutôt que de multiplier les étapes : deux bases sur la côte sud islandaise, une seule vallée dans les Lofoten, un village du Sartenais pour toute la Corse du Sud.",
        "Ici, la saison compte plus que partout ailleurs. En Corse, la mer reste chaude jusqu'à la fin septembre et les plages se vident dès la rentrée. En Islande, les grottes de glace ne s'ouvrent qu'entre novembre et mars. Aux Lofoten, la lumière basse de février dure toute la journée. Le premier travail sur un voyage européen consiste presque toujours à déplacer les dates de quelques semaines.",
        "Le continent se parcourt aussi par la mer et par la route. On rejoint les Lavezzi et les calanques de Piana en bateau, la côte sud de l'Islande par la route qui fait le tour de l'île, les villages norvégiens par les ferries qui relient les fjords entre eux. On change de décor chaque jour sans refaire ses valises tous les soirs.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/islande/full-image.webp",
        alt: "Grande cascade tombant d'une falaise couverte de mousse, côte sud de l'Islande",
      },
      height: 560,
    },

    {
      type: "featureCards",
      layout: "seasons",
      eyebrow: "Quand partir",
      heading: "Quand et où partir en Europe",
      description:
        "Quatre moments de l'année, et la destination que nous choisirions pour chacun.",
      cards: [
        {
          title: "Mi-avril à fin avril",
          description:
            "Les tulipes à leur plus beau, au moment de Keukenhof.",
          image: {
            src: "/destination/pays-bas/hero-2.webp",
            alt: "Moulin à vent au bord de l'eau, aux Pays-Bas",
          },
          link: { label: "Pays-Bas", href: "/destinations/pays-bas" },
          months: { full: [], partial: [4] },
        },
        {
          title: "Mai-juin et septembre",
          description:
            "Chaleur douce, mer agréable et sites moins fréquentés.",
          image: {
            src: "/destination/grece/hero-3.webp",
            alt: "Voilier au mouillage dans une crique grecque",
          },
          link: { label: "Grèce", href: "/destinations/grece" },
          months: { full: [5, 6, 9] },
        },
        {
          title: "Juin à août",
          description:
            "Les fjords sous une lumière presque continue.",
          image: {
            src: "/destination/norvege/xp-geirangerfjord-1.webp",
            alt: "Falaises et cascades du Geirangerfjord",
          },
          link: { label: "Norvège", href: "/destinations/norvege" },
          months: { full: [6, 7, 8] },
        },
        {
          title: "Mi-novembre à mars",
          description:
            "Les grottes de glace naturelles s'ouvrent selon l'état de la glace.",
          image: {
            src: "/destination/islande/xp-grotte-glace.webp",
            alt: "Voyageur à l'entrée d'une grotte de glace naturelle",
          },
          link: { label: "Islande", href: "/destinations/islande" },
          months: { full: [12, 1, 2, 3], partial: [11] },
        },
      ],
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
