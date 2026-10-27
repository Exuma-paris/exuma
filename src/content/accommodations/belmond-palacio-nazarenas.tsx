import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "belmond-palacio-nazarenas",
  name: "Belmond Palacio Nazarenas, Cusco", // TODO: verify
  blurb:
    "Un couvent du XVIe siècle à deux pas de la Plaza de Armas de Cusco. Les suites gardent leurs plafonds voûtés et leur air est enrichi en oxygène pour l'altitude. Le cloître abrite la première piscine extérieure chauffée de Cusco.",
  keywords: ["perou", "cusco", "palacio nazarenas", "belmond"],
  heroImage: {
    src: "/destination/perou/hotel-palacio-nazarenas.webp",
    alt: "Piscine, parasols et galeries du cloître du Palacio Nazarenas sous les toits de Cusco",
  },
  destinationSlugs: ["perou"],
  sections: [],
};
