import type { Theme } from "@/lib/content/types";

export const theme: Theme = {
  slug: "iles-lagons",
  name: "Îles & lagons",
  blurb:
    "Le séjour balnéaire, île par île. Ce qui sépare une côte d'une autre, et comment choisir.",
  intent:
    "L'intention est de trancher entre des îles qui se ressemblent de loin. Le texte doit donner un critère de choix concret, pas une atmosphère.",
  keywords: [
    "balneaire",
    "sejour balneaire",
    "iles",
    "lagon",
    "plage",
    "caraibes",
    "ocean indien",
  ],
  metaTitle: "Séjour balnéaire sur mesure, îles et lagons",
  metaDescription:
    "Séjour balnéaire sur mesure : îles des Caraïbes, atolls de l'océan Indien, archipels du Pacifique, littoraux de Méditerranée. Conçu par Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Thématique",
      heading: "Îles & lagons",
      description:
        "Un séjour balnéaire se décide sur des détails : la distance, la saison des pluies, ce qu'il y a à faire quand on quitte la plage.",
      images: [
        {
          src: "/destination/polynesie/hero-1.png",
          alt: "Lagon polynésien vu depuis la plage, à l'heure où l'eau change de couleur",
        },
      ],
    },
    {
      type: "textColumns",
      eyebrow: "Comment choisir",
      heading: "Séjour balnéaire sur mesure, îles et lagons",
      columns: [
        "Un séjour balnéaire se décide sur la distance et la saison, avant même de regarder la couleur de l'eau. Une île des Caraïbes se rejoint en une journée depuis Paris, un atoll de l'océan Indien demande une escale, un motu du Pacifique en demande deux et près de vingt-deux heures de vol. Ces trajets ne se comparent pas : une semaine se conçoit aux Caraïbes, rarement en Polynésie.",
        "Les saisons s'inversent d'un océan à l'autre. Les Caraïbes se visitent de décembre à avril, la saison cyclonique courant de juin à novembre. L'océan Indien se partage entre deux moussons, et la bonne période n'est pas la même à Maurice, aux Maldives et à Zanzibar. La Polynésie reste praticable une grande partie de l'année, avec une saison sèche de mai à octobre. Se tromper de mois coûte plus cher qu'une catégorie de chambre.",
        "Quatre entrées ici, rangées par océan parce que c'est la question qui se pose en premier. Les Caraïbes, où chaque île a son caractère : Saint-Barthélemy tient sur son port, la Grenade sur ses épices, les Grenadines sur le mouillage. L'océan Indien, où l'île a une histoire à terre. Le Pacifique, que la distance protège encore. La Méditerranée et l'Atlantique enfin, à moins de six heures.",
      ],
    },
    {
      type: "finalCta",
      eyebrow: "Le bon mois change d'un océan à l'autre",
      heading: "Dites-nous quand vous pouvez partir, nous dirons vers quel océan",
      primaryCta: { label: "Créer votre voyage", href: "/votre-projet" },
      secondaryCta: { label: "Nous écrire", href: "/nous-ecrire" },
    },
  ],
};
