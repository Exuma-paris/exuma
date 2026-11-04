import type { Subtheme } from "@/lib/content/types";

export const subtheme: Subtheme = {
  slug: "snorkeling",
  name: "Snorkeling",
  themeSlug: "plongee",
  blockHeading:
    "Le snorkeling, là où le masque suffit",
  blurb:
    "À Gardner Bay, aux Galápagos, les otaries rejoignent les nageurs dès qu'ils entrent dans l'eau. Sur les têtes de corail d'Agincourt, les napoléons se postent sous le bateau. Le lagon de Moorea, les sculptures de Molinière, les îles Daymaniyat : on entre depuis la plage ou le bateau, sans brevet, et les enfants suivent.",
  bandIntent:
    "Vu depuis la surface : masque et tuba, fond clair visible dessous, eau peu profonde.",
  heroImage: {
    src: "/subtheme/snorkeling/band.png",
    alt: "Nageur au masque et tuba dans une eau claire et peu profonde, corail et sable visibles dessous",
  },
  thumbnailsIntro:
    "D'autres lagons, aussi simples d'accès.",
  featuredDestinationSlugs: [
    "galapagos",
    "la-grenade",
    "polynesie",
    "australie",
    "oman",
    "maurice",
    "bahamas",
    "seychelles",
  ],
  cards: [
    {
      slug: "galapagos",
      description:
        "À Gardner Bay, sur Española, les otaries rejoignent les nageurs dès qu'ils entrent dans l'eau, tournent autour d'eux et repartent jouer dans les vagues. Sur les rochers voisins, les iguanes marins se chauffent au soleil sur la lave noire.",
      image: {
        src: "/destination/galapagos/xp-otaries-espanola.webp",
        alt: "Otarie et nageur au masque sous la surface, à Española",
      },
    },
    {
      slug: "la-grenade",
      description:
        "Les sculptures de Jason deCaires Taylor reposent à quelques mètres de fond à Molinière, premier musée sous-marin au monde, immergé en 2006. Le corail les a colonisées année après année, et elles se découvrent au masque, sans bouteille. Le Zodiac vous y dépose en longeant la côte ouest.",
      image: {
        src: "/subtheme/snorkeling/card-grenade.png",
        alt: "Sculpture immergée colonisée par le corail, vue au masque dans la baie de Molinière",
      },
    },
    {
      slug: "polynesie",
      description:
        "À Moorea, le guide coupe le moteur. À deux mètres sous la coque, le sable, les poissons, et une raie qui se déplace sans effort apparent. À Fakarava, le fond du lagon se voit à quarante mètres : on voit son ombre sur le sable avant d'avoir sauté du bateau.",
      image: {
        src: "/subtheme/snorkeling/card-polynesie.png",
        alt: "Nageur au masque au-dessus du sable clair d'un lagon polynésien",
      },
    },
    {
      slug: "australie",
      description:
        "En bordure du plateau continental, l'eau donne vingt à trente mètres de visibilité. Les têtes de corail d'Agincourt abritent des tridacnes d'un mètre, des tortues vertes et des napoléons qui se postent sous le bateau. On part de Port Douglas, là où la forêt de Daintree descend jusqu'à la mer.",
      image: {
        src: "/destination/australie/xp-grande-barriere.webp",
        alt: "Bateau au mouillage au-dessus des têtes de corail de la Grande Barrière, vu du ciel",
      },
    },
    {
      slug: "oman",
      image: {
        src: "/destination/oman/xp-daymaniyat.webp",
        alt: "Îlot et bateau sur l'eau transparente des îles Daymaniyat",
      },
    },
    {
      slug: "maurice",
      image: {
        src: "/destination/maurice/xp-croisiere-benitiers.png",
        alt: "Catamaran à l'ancre et nageurs dans le lagon de l'île aux Bénitiers",
      },
    },
    {
      slug: "bahamas",
      image: {
        src: "/destination/bahamas/xp-catamaran-green-cay.webp",
        alt: "Nageuse au masque à côté d'une tortue verte, à Green Cay",
      },
    },
    {
      slug: "seychelles",
      image: {
        src: "/destination/seychelles/map-la-digue.webp",
        alt: "Blocs de granit et eau claire sur la côte de La Digue, aux Seychelles",
      },
    },
  ],
  sections: [],
};
