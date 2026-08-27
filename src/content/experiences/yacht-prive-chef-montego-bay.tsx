import type { Experience } from "@/lib/content/types";

// Note interne (non affichée) : prestataire identifié pour cette sortie,
// Aristo Kat Tours Ltd. (formule « Private Chef & Yacht Experience », quatre
// heures ou journée de six heures, jusqu'à dix personnes, référencée par
// l'office du tourisme jamaïcain). Le nom du prestataire ne doit pas apparaître
// dans le texte public. TODO: verify les formats et la capacité auprès de l'opérateur.
export const experience: Experience = {
  slug: "yacht-prive-chef-montego-bay",
  name: "Yacht privé avec chef à bord",
  blurb:
    "Le bateau quitte Montego Bay pour la journée, avec un chef à bord et dix personnes au maximum. Mouillage dans une baie pour le snorkeling, déjeuner servi sur le pont, retour à la lumière de fin d'après-midi.",
  keywords: ["jamaique", "montego bay", "yacht prive", "chef", "snorkeling"],
  heroImage: {
    src: "/destination/jamaique/xp-yacht-montego-bay.png",
    alt: "Yacht privé au mouillage dans une baie turquoise au large de Montego Bay",
  },
  destinationSlugs: ["jamaique"],
  sections: [],
};
