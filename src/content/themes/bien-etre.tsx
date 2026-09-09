import type { Theme } from "@/lib/content/types";

export const theme: Theme = {
  slug: "bien-etre",
  name: "Bien-être & reconnexion",
  blurb:
    "L'endroit où quelqu'un qui n'arrête jamais va enfin s'arrêter. Le lieu fait le travail à la place du visiteur.",
  intent:
    "On ne parle pas de spas ou de soins. On parle de l'endroit où quelqu'un qui n'arrête jamais va enfin s'arrêter. L'intention est de faire ressentir la coupure, pas de décrire les équipements.",
  keywords: ["bien-etre", "reconnexion", "ressourcement", "deconnexion", "retraite"],
  cardImage: {
    src: "/theme/bien-etre/hero-1-1x1.png",
    alt: "Une personne seule attablée devant un café, de dos, face au lac au petit matin",
  },
  metaTitle: "Voyage bien-être et retraite sur mesure",
  metaDescription:
    "Voyage bien-être sur mesure : hammam ottoman, thalasso face à l'océan, retraite de yoga et cure ayurvédique en Inde et au Sri Lanka. Conçu par Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Thématique",
      heading: "Bien-être & reconnexion",
      description:
        "L'endroit où quelqu'un qui n'arrête jamais va enfin s'arrêter.",
      images: [
        {
          src: "/theme/bien-etre/hero-1.png",
          alt: "Une personne seule attablée devant un café, de dos, face au lac au petit matin",
          // Le cadre du hero est en 21:9, la photo en 16:9 : le centrage par
          // défaut coupe le dallage et les pieds de la table.
          position: "center 80%",
        },
      ],
    },
    {
      type: "textColumns",
      eyebrow: "Comment choisir",
      heading: "Voyage bien-être et retraite sur mesure",
      columns: [
        "Le soin voyage mal quand il n'est qu'un étage d'hôtel. Il tient debout quand il est une pratique locale, avec ses gestes, ses durées et ses règles. Un hammam se privatise deux heures, savon noir et gant de crin compris. Une cure ayurvédique tient quatorze jours au minimum, sinon elle ne produit rien. Une retraite de yoga commence à six heures et n'organise pas le reste de la journée. Ce sont des durées, pas des options.",
        "Le bain a ses écoles. Le hammam ottoman du Kilic Ali Pasa, à Istanbul, occupe un bâtiment rendu à son usage d'origine après des années de restauration. Le Dar El Bacha, à Marrakech, se ferme pour une seule visite. Aux Grenadines, le parcours de soins se fait face à l'océan, portes ouvertes. Dans le Rub al-Khali, le bain de sable se prend au coucher du soleil, quand la dune garde encore la chaleur du jour.",
        "La cure demande davantage. Au Kerala, le médecin prend le pouls à trois doigts avant d'écrire un protocole qui ne ressemble à celui de personne d'autre. Sur la côte sud du Sri Lanka, une famille exerce depuis quatre générations et cultive ses plantes derrière la maison. À Ubud, le premier cours part quand la vallée est encore dans la brume. Deux entrées ici, le bain d'un côté, la retraite de l'autre.",
      ],
    },
    {
      type: "finalCta",
      eyebrow: "Le repos se prépare comme le reste",
      heading: "Dites-nous combien de jours vous pouvez vraiment vous arrêter",
      primaryCta: { label: "Créer votre voyage", href: "/votre-projet" },
      secondaryCta: { label: "Nous écrire", href: "/nous-ecrire" },
    },
  ],
};
