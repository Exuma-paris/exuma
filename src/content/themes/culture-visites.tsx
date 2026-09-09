import type { Theme } from "@/lib/content/types";

export const theme: Theme = {
  slug: "culture-visites",
  name: "Culture, visites & patrimoine",
  blurb:
    "On ne visite pas, on comprend. L'accès humain : le conservateur qui ouvre sa réserve, le village que les guides ne mentionnent pas.",
  intent:
    "On ne visite pas, on comprend. L'intention est de mettre en avant l'accès humain. Ce n'est jamais un cours d'histoire, c'est toujours une rencontre.",
  keywords: ["culture", "patrimoine", "musee", "histoire", "rencontre", "conservateur"],
  cardImage: {
    src: "/theme/culture-visites/hero-1-1x1.png",
    alt: "Un couple et leur guide, de dos, seuls sur le chemin de ronde d'une muraille",
  },
  metaTitle: "Voyage culturel et patrimoine sur mesure",
  metaDescription:
    "Voyage culturel sur mesure : sites historiques hors horaires, musées avant l'ouverture, lieux de culte à l'heure de la cérémonie. Organisé par Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Expérience",
      heading: "Culture, visites & patrimoine",
      description: "Comprendre par la rencontre, pas par le guide audio.",
      images: [
        {
          src: "/theme/culture-visites/hero-1.png",
          alt: "Un couple et leur guide, de dos, seuls sur le chemin de ronde d'une muraille",
        },
      ],
    },
    {
      type: "textColumns",
      eyebrow: "Comment choisir",
      heading: "Voyage culturel et patrimoine sur mesure",
      columns: [
        "Un voyage culturel se joue sur l'heure d'arrivée. Le même site, à sept heures ou à onze, n'est pas le même lieu. La Galerie Borghèse ouvre à neuf heures au public, à huit pour six personnes accompagnées d'un historien d'art. L'Acropole se franchit avant que la chaleur et la foule ne montent. Pompéi se visite après la fermeture, quand les rues sont rendues au silence. Ces accès se négocient à l'avance, parfois deux semaines.",
        "Quatre entrées ici, selon ce qu'on vient voir. Les villes et les sites historiques d'abord, de la Vallée des Rois à Éphèse, avec un archéologue qui raconte au lieu de réciter. Les musées ensuite, où l'enjeu tient en une chose, la salle vide : le Rijksmuseum avant neuf heures, le Louvre après la fermeture, le Metropolitan avant l'ouverture. La collection ne change pas, la façon de la regarder change tout.",
        "Restent les lieux vivants. Un lieu de culte se visite à l'heure de la cérémonie, pas à la nôtre : la bénédiction dans une salle fermée du dzong de Punakha, les chants du matin à Wat Pho, la cérémonie du soir au temple de la Dent. Et les traditions, où quelqu'un ouvre sa porte : un keiko dans une écurie de sumo, le candombe dans les coulisses du barrio Sur, l'aube avec les Hadzabe au lac Eyasi.",
      ],
    },
    {
      type: "finalCta",
      eyebrow: "Les accès se négocient des semaines avant",
      heading: "Dites-nous ce que vous voulez voir, nous nous occuperons des horaires",
      primaryCta: { label: "Créer votre voyage", href: "/votre-projet" },
      secondaryCta: { label: "Nous écrire", href: "/nous-ecrire" },
    },
  ],
};
