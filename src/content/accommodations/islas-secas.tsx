import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "islas-secas",
  name: "Islas Secas",
  blurb:
    "Un archipel privé à une trentaine de kilomètres de la côte pacifique : quatorze îles, une seule aménagée, huit casitas et une vingtaine de voyageurs au maximum. L'énergie vient du solaire, les sorties du bateau de la maison. Coiba est à une heure de mer.", // TODO: verify nombre de casitas (les sources donnent 8 casitas / 18 hôtes ou 7 unités / 24 hôtes)
  keywords: ["panama", "chiriqui", "islas secas", "ile privee", "coiba"],
  heroImage: {
    src: "/destination/panama/hotel-islas-secas.png",
    alt: "Casita des Islas Secas ouverte sur une baie déserte du golfe de Chiriquí",
  },
  destinationSlugs: ["panama"],
  sections: [],
};
