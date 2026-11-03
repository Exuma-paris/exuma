import type { Continent } from "@/lib/content/types";

export const continent: Continent = {
  slug: "caraibes",
  name: "Caraïbes",
  genitive: "des Caraïbes",
  blurb: "Un chapelet d'îles où la journée se décide au matin.",
  keywords: [
    "caraibes",
    "antilles",
    "saint-barthelemy",
    "anguilla",
    "mustique",
    "grenadines",
    "sainte-lucie",
    "grenade",
  ],
  sections: [
    {
      type: "hero",
      eyebrow: "Continent",
      heading: "Caraïbes",
      description:
        "De Saint-Barthélemy aux Grenadines, un chapelet d'îles séparées par quelques heures de navigation. On y voyage par la mer, en laissant à chaque escale le temps de se faire aimer.",
      images: [
        {
          src: "/destination/caraibes/hero-3.webp",
          alt: "Le Petit Piton de Sainte-Lucie vu depuis la mer, une barque de pêche au premier plan",
        },
        {
          src: "/destination/caraibes/hero-2.webp",
          alt: "Une longue plage blanche d'Anguilla et son récif, vus du ciel",
        },
        {
          src: "/destination/caraibes/xp-goelette-grenadines-1.webp",
          alt: "Goélette privée sous voiles entre les îles vertes des Grenadines",
        },
      ],
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Ouverture",
      heading: "Des îles proches les unes des autres, et une saison très nette",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      columns: [
        "La saison caribéenne est l'une des plus tranchées qui soient. De décembre à avril, l'air est sec, les alizés réguliers et la mer calme : c'est la période où nous travaillons l'essentiel des voyages. De juin à novembre s'ouvre la saison cyclonique, avec un pic entre août et octobre. Certaines maisons ferment alors plusieurs semaines, et nous le disons avant de proposer des dates.",
        "L'archipel se parcourt par la mer plus que par les airs. Quelques heures de navigation séparent Saint-Vincent de Bequia, Mustique ou les Tobago Cays. Un bateau privé ou un catamaran avec équipage permet de changer d'île sans reprendre l'avion, de mouiller devant une plage vide et de décider chaque matin de la suite selon le vent.",
        "Chaque île a son caractère et il vaut mieux ne pas les confondre. Saint-Barthélemy vit à l'européenne, avec ses tables et ses villas au-dessus des anses. Sainte-Lucie et La Grenade sont volcaniques, vertes et montagneuses, tournées vers la randonnée et les jardins d'épices. Turks and Caicos offre le plus long récif de la zone et une eau d'une transparence rare.",
      ],
    },

    {
      type: "featureCards",
      layout: "seasons",
      eyebrow: "Quand partir",
      heading: "Quand et où partir aux Caraïbes",
      description:
        "Quatre moments de l'année, et l'île que nous choisirions pour chacun.",
      cards: [
        {
          title: "Décembre à avril",
          description:
            "La saison sèche : alizés réguliers, mer calme, peu d'averses. Noël et le Nouvel An se réservent très tôt.",
          image: {
            src: "/destination/saint-barthelemy/xp-ile-fourchue-1.webp",
            alt: "Voiliers au mouillage dans la baie de l'île Fourchue, près de Saint-Barthélemy",
          },
          link: { label: "Saint-Barthélemy", href: "/destinations/saint-barthelemy" },
          months: { full: [12, 1, 2, 3, 4] },
        },
        {
          title: "Mi-janvier à fin mars",
          description:
            "Les baleines à bosse se rassemblent dans la baie de Samaná, avec un pic en février.",
          image: {
            src: "/destination/caraibes/quand-baleine-samana.webp",
            alt: "Baleine à bosse jaillissant de l'eau devant les collines de la baie de Samaná",
          },
          link: { label: "République dominicaine", href: "/destinations/republique-dominicaine" },
          months: { full: [2, 3], partial: [1] },
        },
        {
          title: "Mai et début juin",
          description:
            "La même douceur, beaucoup moins de monde sur les plages, juste avant la saison des cyclones.",
          image: {
            src: "/destination/anguilla/full-image.webp",
            alt: "Plage de sable blanc d'Anguilla et eau turquoise, vues du ciel",
          },
          link: { label: "Anguilla", href: "/destinations/anguilla" },
          months: { full: [5], partial: [6] },
        },
        {
          title: "Juin à novembre",
          description:
            "Saison des cyclones, au plus fort d'août à octobre. La Grenade et la Barbade y sont moins exposées, sans être à l'abri : l'ouragan Beryl a touché la Grenade en 2024.",
          image: {
            src: "/destination/la-grenade/split-2.webp",
            alt: "Cascade dans la forêt tropicale de La Grenade",
          },
          link: { label: "La Grenade", href: "/destinations/la-grenade" },
          months: { full: [6, 7, 8, 9, 10, 11] },
        },
      ],
    },

    {
      type: "finalCta",
      eyebrow: "Aller plus loin",
      heading: "Dites-nous ce que vous avez en tête",
      primaryCta: { label: "Créer votre voyage", href: "/votre-projet" },
      secondaryCta: { label: "Nous écrire", href: "/nous-ecrire" },
    },
  ],
};
