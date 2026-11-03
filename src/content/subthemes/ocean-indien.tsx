import type { Subtheme } from "@/lib/content/types";

export const subtheme: Subtheme = {
  slug: "ocean-indien",
  name: "Océan Indien",
  themeSlug: "iles-lagons",
  blockHeading:
    "Le balnéaire de l'océan Indien, avec une histoire à terre",
  blurb:
    "Le ciel de l'atoll de Noonu, l'un des plus noirs de l'océan Indien, se lit au télescope avec un astronome. Maurice et son golf au pied du Morne, l'éclosion des tortues aux Seychelles, Stone Town et la route des épices. L'île ne se limite pas au lagon.",
  bandIntent:
    "Un atoll ou un banc de sable vu du ciel, le récif visible autour.",
  thumbnailsIntro:
    "D'autres rivages de l'océan Indien.",
  featuredDestinationSlugs: [
    "maurice",
    "zanzibar",
    "maldives",
    "seychelles",
    "kenya",
  ],
  cards: [
    {
      // Recadrée plus bas que sur la fiche pour garder les boutres entiers.
      slug: "zanzibar",
      image: {
        src: "/destination/zanzibar/hero-1.webp",
        alt: "Banc de sable blanc et boutres au mouillage sur la côte de Zanzibar, vue du ciel",
        position: "center 80%",
      },
    },
    {
      // La fiche n'a pas encore ses photos d'ouverture.
      slug: "seychelles",
      image: {
        src: "/destination/seychelles/map-la-digue.webp",
        alt: "Blocs de granit et eau peu profonde d'Anse Source d'Argent à La Digue",
        position: "center 85%",
      },
    },
    {
      slug: "maldives",
      image: {
        src: "/destination/maldives/hero-2.webp",
        alt: "Banc de sable découvert à marée basse dans l'atoll de Noonu",
      },
    },
    {
      slug: "kenya",
      image: {
        src: "/subtheme/ocean-indien/card-kenya.png",
        alt: "Plage de sable blanc sous les cocotiers, lagon et récif au loin, sur la côte kényane",
      },
    },
  ],
  sections: [],
};
