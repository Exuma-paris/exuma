import type { Experience } from "@/lib/content/types";

// TODO: verify — format de la visite de la maison et de la distillerie, dégustation
export const experience: Experience = {
  slug: "st-nicholas-abbey",
  name: "St Nicholas Abbey, la maison de 1658 et son rhum",
  blurb:
    "Au nord de l'île, une allée d'acajous mène à une demeure de 1658, pignons courbes et cheminées de pierre, l'une des rares de ce style encore debout dans les Amériques. La canne pousse autour, la distillerie est dans la cour. Un guide raconte trois siècles de la maison, puis on goûte le rhum vieilli sur place.",
  keywords: ["barbade", "st nicholas abbey", "rhum", "demeure jacobeenne", "st peter"],
  heroImage: {
    src: "/destination/barbade/xp-st-nicholas-abbey.webp",
    alt: "Demeure de planteur à pignons courbes au bout d'une allée d'acajous, nord de la Barbade",
  },
  destinationSlugs: ["barbade"],
  sections: [],
};
