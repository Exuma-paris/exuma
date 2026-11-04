import type { Subtheme } from "@/lib/content/types";

export const subtheme: Subtheme = {
  slug: "vignobles-spiritueux",
  name: "Vignobles & spiritueux",
  themeSlug: "gastronomie",
  blockHeading:
    "Vignobles et spiritueux, goûtés là où ils se font",
  blurb:
    "Les vins clairs se goûtent avec le chef de cave, avant l'assemblage, quand rien n'est encore décidé. Vega Sicilia et ses millésimes, Islay et son entrepôt face à la mer, le rhum d'Appleton, les terrasses de la Wachau. On goûte au chai, pas dans une salle de dégustation.",
  bandIntent:
    "Une rangée de fûts dans une cave, éclairage rare, sol de terre battue ou de pierre.",
  heroImage: {
    src: "/subtheme/vignobles-spiritueux/band.png",
    alt: "Rangée de fûts dans une cave, éclairage rare et sol de pierre",
  },
  thumbnailsIntro:
    "D'autres chais, d'autres cépages, d'autres alcools.",
  featuredDestinationSlugs: [
    "france",
    "espagne",
    "royaume-uni",
    "jamaique",
    "autriche",
    "madere",
    "etats-unis",
    "irlande",
    "barbade",
    "corse",
    "montenegro",
    "ecosse",
  ],
  cards: [
    {
      slug: "france",
      description:
        "On descend dans le froid et l'obscurité des anciennes carrières de craie, sous Reims, et le chef de cave verse ce qui n'est pas encore du champagne. Des jus vifs et tendus, que l'on goûte rarement ailleurs.",
      image: {
        src: "/destination/france/xp-vins-clairs-champagne.webp",
        alt: "Pupitres de bouteilles dans une crayère de craie, sous Reims",
      },
    },
    {
      slug: "espagne",
      description:
        "Dans les caves de Valbuena de Duero, le maître de chai aligne les millésimes d'un même vin et les sert lui-même, du plus jeune au plus ancien. Il raconte ceux qu'il a élevés et ceux dont il a hérité.",
      image: {
        src: "/destination/espagne/xp-vega-sicilia.webp",
        alt: "Cave voûtée de Vega Sicilia et ses rangées de fûts",
      },
    },
    {
      slug: "royaume-uni",
      description:
        "L'entrepôt d'Islay donne sur la mer, et l'air y sent la tourbe mouillée. Le master blender tire le whisky du fût à la pipette, millésime après millésime.",
      image: {
        src: "/destination/royaume-uni/xp-islay.webp",
        alt: "Fûts de whisky empilés dans un entrepôt d'Islay",
      },
    },
    {
      slug: "jamaique",
      description:
        "Le domaine d'Appleton distille dans la vallée de Nassau depuis 1749. La dégustation remonte la gamme jusqu'aux millésimes les plus anciens, commentée par l'équipe de Joy Spence, première maîtresse assembleuse au monde.",
      image: {
        src: "/destination/jamaique/xp-appleton-rhum.webp",
        alt: "Alambics de cuivre de la distillerie Appleton Estate",
      },
    },
    {
      slug: "autriche",
      image: {
        src: "/destination/autriche/xp-wachau.webp",
        alt: "Terrasses de vigne de la Wachau, au-dessus du Danube",
      },
    },
    {
      slug: "madere",
      image: {
        src: "/destination/madere/xp-degustation-blandys.webp",
        alt: "Verres levés lors d'une dégustation de vin de Madère",
      },
    },
    {
      slug: "etats-unis",
      image: {
        src: "/destination/etats-unis/xp-cabernet-napa.webp",
        alt: "Verres de vin posés sur un fût, dans une vigne de Napa",
      },
    },
    {
      slug: "irlande",
      image: {
        src: "/destination/irlande/xp-midleton.webp",
        alt: "Whiskey versé dans un verre, sur des fûts de Midleton",
      },
    },
    {
      slug: "barbade",
      image: {
        src: "/destination/barbade/xp-st-nicholas-abbey.webp",
        alt: "Visiteurs devant la maison de St. Nicholas Abbey, à la Barbade",
      },
    },
    {
      slug: "corse",
      image: {
        src: "/destination/corse/xp-degustation-vin.webp",
        alt: "Dégustation de vins corses",
      },
    },
    {
      slug: "montenegro",
      image: {
        src: "/destination/montenegro/xp-vin-crmnica.webp",
        alt: "Dégustation de vranac au bord du lac de Skadar",
      },
    },
  ],
  sections: [],
};
