import type { Theme } from "@/lib/content/types";

export const theme: Theme = {
  slug: "ski-montagne",
  name: "Ski & montagne",
  blurb:
    "Pas le ski de station, la montagne comme exigence. L'accès à des zones et des guides que le grand public n'a pas.",
  intent:
    "Ce n'est pas le ski de station, c'est la montagne comme exigence. L'intention est de mettre en avant l'accès à des zones et des guides que le grand public n'a pas, dans un ton direct et physique.",
  keywords: ["ski", "montagne", "heliski", "freeride", "alpinisme", "guide"],
  cardImage: {
    src: "/theme/ski-montagne/hero-1-1x1.png",
    alt: "Un guide, un adulte et un enfant en ski de randonnée sur une pente vierge, de dos",
  },
  metaTitle: "Voyage ski et montagne sur mesure",
  metaDescription:
    "Voyage ski et montagne sur mesure : ski de randonnée, glisse en Alpes et en Scandinavie, randonnée à la journée depuis une base fixe. Conçu par Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Thématique",
      heading: "Ski & montagne",
      description: "La montagne comme exigence, pas comme décor.",
      images: [
        {
          src: "/theme/ski-montagne/hero-1.png",
          alt: "Un guide, un adulte et un enfant en ski de randonnée sur une pente vierge, de dos",
        },
      ],
    },
    {
      type: "textColumns",
      eyebrow: "Comment choisir",
      heading: "Voyage ski et montagne sur mesure",
      columns: [
        "La montagne se voyage de deux façons qui ne partagent ni la saison, ni le matériel, ni le rythme. L'hiver appelle la glisse : les remontées, le hors-piste encadré, et surtout le ski de randonnée, qui monte à la peau de phoque pour une seule descente. L'été ouvre les sentiers, les via ferrata et les lacs d'altitude, avec un retour au même lit chaque soir. Choisir l'un ou l'autre, c'est d'abord choisir un mois.",
        "Les Alpes ne sont pas la seule réponse. En Norvège, les Alpes de Sunnmøre se skient depuis un voilier qui remonte le fjord pendant la nuit et dépose au pied de la pente au matin. En Autriche, la montée en peau de phoque sur l'Arlberg part deux heures avant le lever du jour, pour un versant que personne n'a encore tracé. À Chamonix, la vallée Blanche descend sur le glacier, avec un guide et une corde.",
        "L'été, la montagne change de registre plus que de décor. Une levada de Madère longe un canal d'irrigation creusé pour amener l'eau du nord au sud de l'île. La via ferrata Ivano Dibona suit un sentier de la Première Guerre dans les Dolomites. Le lac Moraine se traverse en canoë avant l'arrivée des premiers cars. Deux entrées ici : la glisse d'un côté, la randonnée à la journée de l'autre.",
      ],
    },
    {
      type: "finalCta",
      eyebrow: "La montagne se choisit par le calendrier",
      heading: "Dites-nous si votre montagne est celle de l'hiver ou celle de l'été",
      primaryCta: { label: "Créer votre voyage", href: "/votre-projet" },
      secondaryCta: { label: "Nous écrire", href: "/nous-ecrire" },
    },
  ],
};
