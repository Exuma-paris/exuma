import type { Theme } from "@/lib/content/types";

export const theme: Theme = {
  slug: "croisiere",
  name: "Croisière d'exception",
  blurb:
    "La mer prise au sérieux. Un petit navire, peu de monde, des escales que personne ne fait.",
  intent:
    "Rien à voir avec la croisière de masse. La mer prise au sérieux, un petit navire, peu de monde. Le ton est lent et souverain.",
  keywords: ["croisiere", "yacht", "voilier", "mer", "navigation", "escales"],
  cardImage: {
    src: "/theme/croisiere/hero-1-1x1.png",
    alt: "Un navire à voiles seul devant une côte montagneuse déserte",
  },
  metaTitle: "Croisière d'exception sur mesure",
  metaDescription:
    "Croisière d'exception sur mesure : voilier et catamaran privatisés, croisière fluviale sur le Nil, le Mékong ou le Zambèze. Organisée par Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Expérience",
      heading: "Croisière d'exception",
      description: "La mer, en petit comité, à l'écart des routes habituelles.",
      images: [
        {
          src: "/theme/croisiere/hero-1.png",
          alt: "Un navire à voiles seul devant une côte montagneuse déserte",
        },
      ],
    },
    {
      type: "textColumns",
      eyebrow: "Comment choisir",
      heading: "Croisière d'exception sur mesure",
      columns: [
        "Une croisière d'exception se juge sur le bateau autant que sur l'itinéraire. À la voile, la coque devient la chambre : on dort au mouillage, on change de crique chaque soir, et l'équipage se compte sur les doigts d'une main. Sur un fleuve, le courant impose le rythme et les berges font tout le paysage. Les deux se préparent différemment, du choix des dates au nombre de personnes à bord.",
        "À la voile, la question est celle du plan d'eau. Les Cyclades se naviguent d'avril à octobre, avec le meltem qui monte l'après-midi en juillet et en août. Les Grenadines s'enchaînent en traversées courtes et à vue, ce qui les rend faciles même sans expérience de la navigation. L'archipel de Stockholm se parcourt de juin à août, quand la nuit ne tombe presque pas et qu'on peut mouiller devant une île déserte.",
        "Sur les fleuves, le bateau sert de moyen de transport plus que d'hébergement. Le Mékong se descend en sampan, moteur coupé sur les derniers kilomètres. Le Nil se remonte entre Louxor et Assouan, à la voile quand le vent le permet. Les canaux de l'Okavango se traversent en mokoro, une pirogue poussée à la perche par quelqu'un qui connaît le fond. Deux entrées ici, la voile et le fleuve.",
      ],
    },
    {
      type: "finalCta",
      eyebrow: "Le bateau donne sa forme au voyage",
      heading: "Dites-nous où vous voulez naviguer, nous écrirons le reste du séjour",
      primaryCta: { label: "Créer votre voyage", href: "/votre-projet" },
      secondaryCta: { label: "Nous écrire", href: "/nous-ecrire" },
    },
  ],
};
