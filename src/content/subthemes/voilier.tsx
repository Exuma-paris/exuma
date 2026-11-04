import type { Subtheme } from "@/lib/content/types";

export const subtheme: Subtheme = {
  slug: "voilier",
  name: "Voilier & catamaran",
  themeSlug: "croisiere",
  blockHeading:
    "La croisière à la voile, quand la nuit se passe à bord",
  blurb:
    "La goélette mouille dans une crique lycienne sans route d'accès. Cyclades, Grenadines, archipel de Stockholm, Baie des Îles : le voilier sert de chambre et de moyen de transport. On choisit le mouillage du soir selon le vent, on se baigne avant le petit-déjeuner, et l'on rejoint par la mer des criques qu'aucune route ne dessert. Quand la nuit se passe à terre, l'affaire relève des îles et des lagons.",
  bandIntent:
    "Le pont d'un voilier au mouillage, gréement et bois dans le cadre, une crique derrière.",
  heroImage: {
    src: "/destination/turquie/xp-goelette-lycienne.webp",
    alt: "Goélette au mouillage devant une grotte marine, côte lycienne",
    position: "center 80%",
  },
  thumbnailsIntro:
    "D'autres mouillages, moins évidents et souvent plus tranquilles.",
  featuredDestinationSlugs: [
    "saint-vincent-et-les-grenadines",
    "maurice",
    "norvege",
    "chili",
    "grece",
    "turquie",
  ],
  cards: [
    {
      slug: "saint-vincent-et-les-grenadines",
      description:
        "Trente-deux îles et cays se suivent ici du nord au sud, et l'on passe de l'une à l'autre en une heure de navigation. Le soir, on mouille devant les Tobago Cays, des îlots sans habitants protégés par un récif en fer à cheval.",
      image: {
        src: "/subtheme/voilier/card-saint-vincent.png",
        alt: "Catamaran au mouillage près d'un récif, vu du ciel, dans les Grenadines",
      },
    },
    {
      slug: "maurice",
      description:
        "L'île mesure environ 67 kilomètres du nord au sud et 46 kilomètres de large. Un récif corallien l'entoure presque entièrement et protège un lagon aux eaux calmes. Le catamaran quitte La Gaulette au petit matin, mouille devant l'île aux Bénitiers pour le déjeuner et rentre avec le Morne en vue.",
      image: {
        src: "/destination/maurice/xp-croisiere-benitiers.png",
        alt: "Catamaran à l'ancre dans le lagon de l'île aux Bénitiers à Maurice",
      },
    },
    {
      slug: "norvege",
      description:
        "Un fjord est un bras de mer qui entre dans les terres, entre deux parois de plusieurs centaines de mètres. On y navigue comme dans un couloir, avec la montagne des deux côtés. En juin, dans les Lofoten, il fait jour toute la nuit. Depuis Ålesund, le voilier mouille au pied des faces du Hjørundfjord : on monte à peaux le matin et l'on redescend jusqu'à la mer.",
      image: {
        src: "/subtheme/voilier/card-norvege.png",
        alt: "Voilier sur une eau calme, sous les falaises de la côte du Helgeland en Norvège",
      },
    },
    {
      slug: "chili",
      description:
        "Un pays long de 4 300 kilomètres et large de deux cents, tenu entre la cordillère et le Pacifique. Au sud, une goélette part de Puerto Natales pour cinq jours dans les canaux d'Última Esperanza, jusqu'aux glaciers Balmaceda et Serrano, là où il n'y a plus de route.",
      image: {
        src: "/destination/chili/xp-fjords-kawesqar.webp",
        alt: "Voilier privé au mouillage entre les glaces flottantes, face au glacier Serrano, Patagonie chilienne",
      },
    },
    {
      slug: "grece",
      image: {
        src: "/destination/grece/xp-croisiere-cyclades.webp",
        alt: "Goélette privée au mouillage dans une crique turquoise des Cyclades",
      },
    },
    {
      // La goélette lycienne sert déjà de bandeau au bloc.
      slug: "turquie",
      image: {
        src: "/destination/turquie/map-bodrum.webp",
        alt: "Bateaux de bois au mouillage dans une eau turquoise, sur la côte de Bodrum",
      },
    },
    {
      slug: "croatie",
      image: {
        src: "/destination/croatie/xp-voile-kornati-1.webp",
        alt: "Voilier privé naviguant entre les îlots calcaires des Kornati",
      },
    },
    {
      slug: "nouvelle-zelande",
      image: {
        src: "/destination/nouvelle-zelande/map-baie-des-iles.webp",
        alt: "Îlots de la Baie des Îles vus depuis un voilier",
      },
    },
    {
      slug: "anguilla",
      image: {
        src: "/destination/anguilla/xp-sunset-voilier.webp",
        alt: "Voilier au large d'Anguilla, sa voile gonflée au coucher du soleil",
      },
    },
    {
      slug: "antigua",
      image: {
        src: "/destination/antigua/hero-2.webp",
        alt: "Voilier au mouillage dans une baie boisée d'Antigua",
      },
    },
    {
      slug: "caraibes",
      image: {
        src: "/destination/caraibes/bento-experiences.webp",
        alt: "Goélette sous voiles dans les Caraïbes, vue depuis le pont d'un autre voilier",
      },
    },
    {
      slug: "turks-and-caicos",
      image: {
        src: "/destination/turks-and-caicos/bento-experiences.webp",
        alt: "Deux passagers sur le pont d'un voilier, aux Turks and Caicos",
      },
    },
  ],
  sections: [],
};
