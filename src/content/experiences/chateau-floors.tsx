import type { Experience } from "@/lib/content/types";

export const experience: Experience = {
  slug: "chateau-floors",
  name: "Visite du château de Floors",
  blurb:
    "Bâti en 1721 au-dessus de la Tweed, Floors appartient toujours aux ducs de Roxburghe. On traverse les salons, la collection de tableaux et de tapisseries, puis le jardin clos victorien où poussent les légumes du soir.",
  keywords: ["ecosse", "kelso", "borders", "chateau", "roxburghe"],
  heroImage: {
    src: "/destination/ecosse/xp-chateau-floors.webp",
    // TODO: verify — la photo fournie ne semble pas montrer Floors Castle
    alt: "Façade à tourelles et clochetons d'un château écossais",
  },
  destinationSlugs: ["ecosse"],
  sections: [],
};
