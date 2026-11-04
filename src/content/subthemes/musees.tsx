import type { Subtheme } from "@/lib/content/types";

export const subtheme: Subtheme = {
  slug: "musees",
  name: "Musées & collections",
  themeSlug: "culture-visites",
  blockHeading:
    "Les musées quand la salle est encore vide",
  blurb:
    "Le Rijksmuseum ouvre à neuf heures. À huit, la Ronde de nuit n'a personne devant elle. Le Louvre à dix-neuf heures, Toutânkhamon après la fermeture du Grand Musée égyptien, la Frick un jour de fermeture. La collection se regarde sans épaule devant soi.",
  bandIntent:
    "Une galerie de musée vide, une œuvre au mur, le parquet et la lumière naturelle.",
  heroImage: {
    src: "/subtheme/musees/band.png",
    alt: "Statue colossale de Ramsès II dans le grand hall vide du Grand Musée égyptien",
    position: "center 10%",
  },
  thumbnailsIntro:
    "D'autres collections, ouvertes avant le public elles aussi.",
  featuredDestinationSlugs: [
    "pays-bas",
    "paris",
    "egypte",
    "new-york",
    "etats-unis",
    "espagne",
    "royaume-uni",
    "emirats-arabes-unis",
  ],
  cards: [
    {
      slug: "pays-bas",
      description:
        "À huit heures, la Galerie d'honneur est vide et personne ne se tient devant La Ronde de nuit. Un conservateur raconte ce que la dernière restauration a mis au jour, couche par couche. Le musée ouvre au public une heure plus tard.",
      image: {
        src: "/subtheme/musees/card-pays-bas.png",
        alt: "Tableau de Vermeer accroché seul sur un mur sombre du Rijksmuseum",
      },
    },
    {
      slug: "paris",
      description:
        "Dix-neuf heures, les galeries du Louvre se vident. Avec un conservateur de département, la Joconde sans la foule, la Samothrace dans le silence.",
      image: {
        src: "/destination/paris/xp-louvre.webp",
        alt: "Une guide et une famille devant une grande toile, au Louvre",
      },
    },
    {
      slug: "egypte",
      description:
        "Depuis 2025, le Grand Musée égyptien fait face au plateau de Gizeh avec la collection complète de Toutânkhamon, plus de cinq mille objets réunis pour la première fois. Selon les autorisations du moment, un conservateur ouvre les galeries après la fermeture, pour un seul groupe par soirée. L'accès se demande plusieurs mois à l'avance.",
      image: {
        src: "/destination/egypte/xp-gem-nocturne-2.webp",
        alt: "Masque funéraire de Toutânkhamon dans sa vitrine, au Grand Musée égyptien",
      },
    },
    {
      slug: "new-york",
      description:
        "Le jour de fermeture hebdomadaire, certaines collections restées dans leur hôtel particulier se visitent avec un conférencier, une heure et demie, sans personne d'autre dans la maison. À la Frick, les Vermeer sont au salon, et les Fragonard dans une pièce construite pour eux.",
      image: {
        src: "/destination/new-york/map-frick.webp",
        alt: "Grande galerie de la Frick Collection, vide, sous sa verrière",
      },
    },
    {
      slug: "etats-unis",
      image: {
        src: "/destination/etats-unis/xp-met-avant-ouverture.webp",
        alt: "Galerie de sculptures du Metropolitan presque vide, vue d'en haut",
      },
    },
    {
      slug: "espagne",
      image: {
        src: "/subtheme/musees/card-espagne.png",
        alt: "Grande galerie du musée du Prado, vide, sous sa voûte, à Madrid",
      },
    },
    {
      slug: "royaume-uni",
      image: {
        src: "/subtheme/musees/card-royaume-uni.png",
        alt: "Squelette de baleine suspendu dans le grand hall du Natural History Museum, à Londres",
      },
    },
    {
      slug: "emirats-arabes-unis",
      image: {
        src: "/subtheme/musees/card-emirats.png",
        alt: "Le musée du Futur, à Dubaï, aux Émirats arabes unis",
      },
    },
  ],
  sections: [],
};
