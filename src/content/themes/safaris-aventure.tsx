import type { Theme } from "@/lib/content/types";

export const theme: Theme = {
  slug: "safaris-aventure",
  name: "Safaris, trek & aventure",
  blurb:
    "L'intensité sans glamouriser l'inconfort. Le Serengeti avant les autres jeeps, le camp qui n'accueille que six personnes.",
  intent:
    "Raconter l'intensité sans glamouriser l'inconfort. Le confort est sous-entendu, jamais décrit. Ce qui compte c'est l'accès. Ton documentaire, pas lyrique.",
  keywords: ["safari", "trek", "aventure", "brousse", "serengeti", "masai mara"],
  cardImage: {
    src: "/theme/safaris-aventure/hero-1-1x1.png",
    alt: "Un véhicule seul arrêté dans la plaine à la première lumière, une girafe traversant la piste",
  },
  metaTitle: "Voyage safari sur mesure",
  metaDescription:
    "Voyage safari sur mesure : safari terrestre en concession privée, safari marin, trek et expédition. Itinéraire écrit par votre travel designer Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Expérience",
      heading: "Safaris, trek & aventure",
      description: "L'accès au terrain, pas la mise en scène.",
      images: [
        {
          src: "/theme/safaris-aventure/hero-1.png",
          alt: "Un véhicule seul arrêté dans la plaine à la première lumière, une girafe traversant la piste",
        },
      ],
    },
    {
      type: "textColumns",
      eyebrow: "Comment choisir",
      heading: "Voyage safari sur mesure",
      columns: [
        "Un safari se décide sur trois questions posées dans cet ordre : à terre ou en mer, en concession privée ou en parc national, et à quelle saison. La concession privée autorise le hors-piste, la sortie de nuit et la marche accompagnée, que les parcs nationaux interdisent presque partout. Elle limite aussi le nombre de véhicules autour d'un même animal, souvent à deux ou trois. C'est la différence la plus visible sur le terrain, et la première ligne du budget.",
        "La saison ne se négocie pas. La traversée de la Mara par les gnous se joue entre juillet et octobre, et personne ne sait à quel jour près. Le delta de l'Okavango se remplit d'avril à septembre d'une eau tombée en Angola trois mois plus tôt. En Namibie, la saison sèche concentre les animaux autour de quelques points d'eau : l'observation devient plus simple, le paysage plus dur.",
        "Trois entrées ici, et elles ne se ressemblent pas. Le safari terrestre, avec un pisteur et un véhicule, du Serengeti au Pantanal. Le safari marin, où l'on observe depuis le bateau ou depuis la plage, des baleines de Samaná aux lions de mer de Seal Bay. Le trek et l'expédition, où la marche devient le sujet et où l'on porte, du Rub al-Khali aux fjords Kawésqar. Chacune a son bloc, ses pays et sa saison.",
      ],
    },
    {
      type: "finalCta",
      eyebrow: "Un safari se prépare une saison à l'avance",
      heading: "Dites-nous ce que vous voulez voir, nous trouverons le mois et le terrain",
      primaryCta: { label: "Créer votre voyage", href: "/votre-projet" },
      secondaryCta: { label: "Nous écrire", href: "/nous-ecrire" },
    },
  ],
};
