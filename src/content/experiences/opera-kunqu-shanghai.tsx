import type { Experience } from "@/lib/content/types";

// TODO: verify — programmation de la troupe de kunqu de Shanghai et accès aux coulisses (au cas par cas)
export const experience: Experience = {
  slug: "opera-kunqu-shanghai",
  name: "Le kunqu à Shanghai, l'opéra le plus ancien de Chine",
  blurb:
    "Le kunqu se joue à Shanghai depuis six siècles, avec une flûte, quelques percussions et des gestes codifiés jusqu'au bout des manches. Un spécialiste de l'opéra s'assoit à côté de vous et traduit ce que les mouvements racontent. Avant le lever du rideau, on passe en coulisses voir les comédiens se maquiller.",
  keywords: ["chine", "shanghai", "kunqu", "opera", "unesco"],
  heroImage: {
    src: "/destination/chine/xp-opera-kunqu.webp",
    alt: "Deux comédiens de kunqu en soie blanche brodée de fleurs de prunier, manches d’eau en mouvement, sur une scène sombre",
  },
  destinationSlugs: ["chine"],
  sections: [],
};
