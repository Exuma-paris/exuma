import type { Subtheme } from "@/lib/content/types";

export const subtheme: Subtheme = {
  slug: "plongee-bouteille",
  name: "Plongée",
  themeSlug: "plongee",
  blockHeading:
    "La plongée, sur les sites qui justifient le brevet",
  blurb:
    "À Northwest Point, le corail s'arrête à douze mètres et le fond tombe à deux mille. À Apo Reef, on dort à bord, au mouillage. Au Great Astrolabe, les mantas passent dans les canaux. Le site demande une bouteille et un niveau, et il décide du voyage.",
  bandIntent:
    "Trois plongeurs en silhouette le long d'un tombant, bleu profond derrière.",
  heroImage: {
    src: "/subtheme/plongee-bouteille/band.png",
    alt: "Trois plongeurs en silhouette le long d'un tombant, le bleu profond en contrebas",
  },
  thumbnailsIntro:
    "D'autres fonds, pour qui a déjà fait les grands classiques.",
  featuredDestinationSlugs: [
    "philippines",
    "turks-and-caicos",
    "fidji",
    "los-cabos",
    "jordanie",
    "panama",
    "maldives",
  ],
  cards: [
    {
      slug: "philippines",
      description:
        "Apo Reef s'étend à perte de vue au large de Mindoro, loin de toute côte. On plonge dans une eau limpide où les requins de récif passent sans s'inquiéter de vous, et l'on dort à bord. À Donsol, de novembre à juin, on nage à côté des requins-baleines.",
      image: {
        src: "/destination/philippines/xp-apo-reef.webp",
        alt: "Récif corallien d'Apo Reef sous la surface éclairée, aux Philippines",
      },
    },
    {
      slug: "turks-and-caicos",
      description:
        "Le corail s'arrête à douze mètres et le fond tombe à deux mille. Les palanquées descendent sur les tombants de Northwest Point, de West Caicos et de French Cay, là où les raies aigles passent en groupe. Le capitaine choisit le site le matin, selon le vent.",
      image: {
        src: "/subtheme/plongee-bouteille/card-turks.png",
        alt: "Plongeurs descendant le long d'un tombant de corail, bleu profond en contrebas",
      },
    },
    {
      slug: "fidji",
      description:
        "Le bateau quitte Kadavu au petit matin et coupe le moteur au-dessus du Great Astrolabe. Les mantas passent dans les canaux, et le récif ferme l'horizon sur des dizaines de kilomètres. À Beqa, on descend sans cage derrière une murette de corail, parmi huit espèces de requins.",
      image: {
        src: "/destination/fidji/xp-great-astrolabe.webp",
        alt: "Coraux mous et poissons orange sur le récif du Great Astrolabe, aux Fidji",
      },
    },
    {
      slug: "los-cabos",
      description:
        "À deux heures de route du corridor, Cabo Pulmo protège l'un des rares récifs coralliens vivants du Pacifique nord-américain. Avec un guide privé, hors des horaires collectifs, on plonge au milieu des tourbillons de carangues, des raies et, en saison, des requins-bouledogues.",
      image: {
        src: "/subtheme/plongee-bouteille/card-los-cabos.png",
        alt: "Plongeur face à un tourbillon de carangues dans le bleu de Cabo Pulmo",
      },
    },
    {
      slug: "jordanie",
      image: {
        src: "/destination/jordanie/xp-plongee-aqaba.webp",
        alt: "Épave d'avion et plongeurs sur le sable clair du golfe d'Aqaba",
      },
    },
    {
      slug: "panama",
      image: {
        src: "/subtheme/plongee-bouteille/card-panama.webp",
        alt: "Éponges rouges et poissons sur un récif du parc national de Coiba",
      },
    },
    {
      slug: "maldives",
      image: {
        src: "/destination/maldives/xp-corail.webp",
        alt: "Boutures fixées sur une structure de pépinière de corail, dans l'eau claire d'un lagon",
      },
    },
  ],
  sections: [],
};
