import type { Subtheme } from "@/lib/content/types";

export const subtheme: Subtheme = {
  slug: "spa-thalasso",
  name: "Spa & hammam",
  themeSlug: "bien-etre",
  blockHeading:
    "Le soin comme pratique locale, pas comme équipement",
  blurb:
    "Le hammam de La Mamounia se privatise, savon noir et gommage compris. À Istanbul, le Kilic Ali Pasa a retrouvé l'usage pour lequel il a été bâti. À Bangkok, le massage a son école à Wat Pho. Le soin suit ici des gestes et des durées transmis, et il ne tient pas à un étage d'hôtel.",
  bandIntent:
    "Un intérieur de hammam, marbre humide, vapeur, un rai de lumière. Pas de spa d'hôtel contemporain.",
  heroImage: {
    src: "/subtheme/spa-thalasso/band.png",
    alt: "Salle de hammam en marbre humide, vapeur et rais de lumière tombant de la voûte",
  },
  thumbnailsIntro:
    "D'autres maisons de bain, dans d'autres traditions.",
  featuredDestinationSlugs: [
    "marrakech",
    "turquie",
    "maroc",
    "thailande",
  ],
  cards: [
    {
      slug: "marrakech",
      description:
        "Au spa de La Mamounia, un espace vous est réservé pour une séance sans autres clients : hammam, salle de soins en duo et salon de repos. Le rituel suit la tradition marocaine, du gommage au savon noir à l'enveloppement.",
      image: {
        src: "/destination/marrakech/xp-hammam.webp",
        alt: "Hammam vide aux murs de tadelakt, fontaine en zellige entre deux banquettes",
      },
    },
    {
      slug: "turquie",
      description:
        "À Tophane, un hammam ottoman se garde pour vous seuls le temps d'une matinée. La lumière tombe du dôme en pastilles, le marbre est chaud, et le thé se prend sans regarder l'heure.",
      image: {
        src: "/subtheme/spa-thalasso/card-turquie.png",
        alt: "Hammam ottoman sous son dôme, la lumière tombe des ouvertures rondes sur le marbre",
      },
    },
    {
      slug: "maroc",
      description:
        "Le hammam de quartier est un lieu de vie, chaud et bruyant. Celui d'un hôtel ou d'une maison restaurée se réserve au calme. Les deux valent le détour, et nous pouvons privatiser le second quand vous le souhaitez.",
      image: {
        src: "/subtheme/spa-thalasso/card-maroc.png",
        alt: "Hammam clair aux murs de tadelakt, deux banquettes de pierre sous un puits de lumière",
      },
    },
    {
      slug: "thailande",
      description:
        "À Bangkok, Wat Pho conserve les tablettes gravées à partir de 1832 sur l'origine et le traitement des maladies. Son école de massage a ouvert en 1955, et l'Unesco a inscrit la pratique à son patrimoine immatériel en 2019. La séance se reçoit dans un pavillon commun du temple, sans chambre privée.",
      image: {
        src: "/subtheme/spa-thalasso/card-thailande.png",
        alt: "Massage thaï traditionnel sur un matelas de coton, sous un pavillon de bois ouvert sur une cour de temple",
      },
    },
  ],
  sections: [],
};
