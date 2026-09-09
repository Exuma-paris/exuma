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
        // TODO: images génériques empruntées à l'océan Indien et au Pacifique,
        // faute de visuels caribéens. À remplacer par des images dédiées
        // (Saint-Barthélemy, Grenadines, Sainte-Lucie) dès qu'elles existent.
        {
          src: "/destination/maurice/hero-3.png",
          alt: "Ligne d'écume d'un récif corallien vue à la verticale, océan et platier",
        },
        {
          src: "/destination/polynesie/hero-1.png",
          alt: "Plage de sable blanc bordée de cocotiers",
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
      type: "finalCta",
      eyebrow: "Aller plus loin",
      heading: "Dites-nous ce que vous avez en tête",
      primaryCta: { label: "Créer votre voyage", href: "/votre-projet" },
      secondaryCta: { label: "Nous écrire", href: "/nous-ecrire" },
    },
  ],
};
