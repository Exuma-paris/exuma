import type { Subtheme } from "@/lib/content/types";

export const subtheme: Subtheme = {
  slug: "caraibes-plages",
  name: "Caraïbes",
  themeSlug: "iles-lagons",
  blockHeading:
    "Le séjour balnéaire aux Caraïbes, île par île",
  blurb:
    "Anguilla compte trente-trois plages pour quinze mille habitants. Saint-Barthélemy tient sur son port, la Grenade sur ses épices, les Grenadines sur le mouillage. Sainte-Lucie se lit depuis ses deux Pitons, Antigua depuis le chantier naval où relâchait la flotte anglaise, les Turks et Caïcos depuis un lagon qu'aucune rivière ne vient troubler. Le balnéaire caraïbe ne veut pas dire la même chose d'une côte à l'autre : on choisit l'île pour ce qu'on y fera quand on ne sera pas sur le sable.",
  bandIntent:
    "Une plage caraïbe, sable clair, eau turquoise, végétation basse. Pas de resort dans le cadre.",
  thumbnailsIntro:
    "D'autres îles, pour qui connaît déjà les premières.",
  featuredDestinationSlugs: [
    "saint-barthelemy",
    "sainte-lucie",
    "antigua",
    "anguilla",
    "bahamas",
    "barbade",
  ],
  cards: [
    {
      slug: "saint-barthelemy",
      description:
        "Saint-Barthélemy a cette douceur des îles où rien ne presse. On passe la matinée dans l'eau, on remonte déjeuner à l'ombre, et l'on redescend vers Gustavia quand la chaleur tombe. Quatorze plages se partagent l'île, de Saline, restée sans construction, à Colombier, qu'on n'atteint qu'à pied ou en bateau.",
    },
    {
      slug: "sainte-lucie",
      description:
        "Sainte-Lucie se reconnaît de loin, à ces deux montagnes qui sortent de la mer au-dessus de Soufrière. L'île est verte jusqu'au bord de l'eau, et la forêt descend si près des baies qu'on l'entend depuis le bateau. Au pied des Pitons, à Anse Chastanet, le récif commence à quelques brasses du sable.",
    },
    {
      slug: "antigua",
      description:
        "L'île compte deux cent quatre-vingts kilomètres carrés et une plage pour chaque jour de l'année, un chiffre que les habitants citent avant même le nom d'English Harbour. Celles de l'ouest, Darkwood ou Ffryes, restent calmes. Celles de l'est, comme Half Moon Bay, reçoivent l'Atlantique.",
    },
    {
      slug: "anguilla",
      description:
        "Ici rien ne dépasse. L'île est plate, sèche, couverte de buissons bas. Toute l'attention va à l'eau, qui passe du turquoise au vert selon l'heure et le banc de sable qu'elle recouvre. Shoal Bay, Meads Bay, Rendezvous Bay : toutes les plages sont publiques, et les plus longues dépassent le kilomètre.",
    },
    {
      // La fiche Colombie ouvre sur la Ciudad Perdida : juste pour le pays,
      // hors sujet dans un bloc plages.
      slug: "colombie",
      image: {
        src: "/subtheme/caraibes-plages/card-colombie.png",
        alt: "Les îles du Rosaire vues d'avion, au large de Carthagène, cernées par le récif",
      },
    },
    {
      slug: "porto-rico",
      image: {
        src: "/destination/porto-rico/map-culebra.webp",
        alt: "Plage de Flamenco Beach aux eaux turquoise sur l'île de Culebra",
      },
    },
    {
      slug: "republique-dominicaine",
      image: {
        src: "/destination/republique-dominicaine/map-rio-san-juan.webp",
        alt: "Plage et cocotiers près de Río San Juan, côte nord de la République dominicaine",
      },
    },
  ],
  sections: [],
};
