import type { Theme } from "@/lib/content/types";

export const theme: Theme = {
  slug: "bien-etre",
  name: "Bien-être & reconnexion",
  blurb:
    "L'endroit où quelqu'un qui n'arrête jamais va enfin s'arrêter. Parfois c'est un hammam fermé pour une seule visite, parfois un bassin d'eau chaude sous un volcan, parfois une vallée sans réseau. Le lieu fait le travail à votre place, à condition de lui laisser assez de jours.",
  intent:
    "On ne parle pas de spas ou de soins. On parle de l'endroit où quelqu'un qui n'arrête jamais va enfin s'arrêter. L'intention est de faire ressentir la coupure, pas de décrire les équipements.",
  keywords: ["bien-etre", "reconnexion", "ressourcement", "deconnexion", "retraite", "yoga", "hammam", "sources chaudes", "thermes"],
  cardImage: {
    src: "/theme/bien-etre/hero-1-1x1.png",
    alt: "Une personne seule attablée devant un café, de dos, face au lac au petit matin",
  },
  metaTitle: "Séjour bien-être et retraite sur mesure",
  metaDescription:
    "Voyage bien-être sur mesure : hammam ottoman, sources chaudes, retraite de yoga, cure ayurvédique en Inde et au Sri Lanka, lieux sans réseau. Conçu par Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Expérience",
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
        "Le soin voyage mal quand il n'est qu'un étage d'hôtel. Il tient debout quand il est une pratique locale, avec ses gestes, ses durées et ses règles. Un hammam se garde pour vous le temps d'une matinée. Une cure ayurvédique tient quatorze jours au minimum, sinon elle ne produit rien. Ce sont des durées, pas des options, et c'est la première question que nous vous posons.",
        "Le bain a ses écoles. À Istanbul, le hammam ottoman du Kilic Ali Pasa occupe un bâtiment rendu à son usage d'origine après des années de restauration. À Marrakech, La Mamounia réserve un espace pour une seule séance. Ailleurs, c'est la terre qui chauffe l'eau : les bassins de Tabacón sous l'Arenal, un onsen à Hakone, les thermes de quartzite de Vals.",
        "La cure et la retraite demandent davantage. Au Kerala, le médecin écrit un programme dès l'arrivée. Sur la côte sud du Sri Lanka, une famille exerce depuis quatre générations et cultive ses plantes derrière la maison. Près d'Ubud, la journée commence par le yoga du lever du soleil. Et parfois il n'y a rien à suivre du tout : un camp sans réseau au bord du Kakadu, une concession de Namibie où l'on roule des jours sans croiser personne.",
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
