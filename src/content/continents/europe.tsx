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
          src: "/destination/corse/hero-2.png",
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
      type: "entityList",
      kind: "destination",
      eyebrow: "Destinations phares",
      heading: "Cinq entrées dans l'Europe d'Exuma",
      description:
        "Une île méditerranéenne, deux pays du Grand Nord, une île atlantique et un plat pays. Cinq façons d'entrer dans le continent, du maquis corse aux fjords des Lofoten.",
      slugs: ["corse", "islande", "norvege", "madere", "pays-bas"],
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
