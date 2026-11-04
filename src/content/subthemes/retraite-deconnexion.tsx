import type { Subtheme } from "@/lib/content/types";

export const subtheme: Subtheme = {
  slug: "retraite-deconnexion",
  name: "Retraite & déconnexion",
  themeSlug: "bien-etre",
  blockHeading:
    "La déconnexion, quand le réseau s'arrête avant vous",
  blurb:
    "Aux plaines du Kakadu, Bamurru Plains n'a ni réseau mobile ni télévision. Au Bhoutan, un moine ouvre la salle de méditation avant l'arrivée des visiteurs. Dans le Cederberg, on marche le matin sans croiser personne d'autre que son guide. Rien n'y est prévu pour occuper le temps.",
  bandIntent:
    "Un grand paysage vide au lever du jour, une seule silhouette ou aucune. Ni soin, ni tapis de yoga, ni équipement.",
  heroImage: {
    src: "/destination/namibie/xp-namib-naukluft.webp",
    alt: "Une silhouette seule sur une crête de dune, dans le Namib",
  },
  thumbnailsIntro:
    "D'autres endroits où le temps cesse d'être compté.",
  featuredDestinationSlugs: [
    "australie",
    "bhoutan",
    "afrique-du-sud",
    "namibie",
  ],
  cards: [
    {
      slug: "australie",
      description:
        "Bamurru Plains se tient au bord des plaines du Kakadu, sans réseau mobile ni télévision. On y arrive par un petit vol depuis Darwin, et le camp ferme à la saison des pluies.",
      image: {
        src: "/destination/australie/hotel-bamurru-plains.png",
        alt: "Terrasse de bois et petit bassin face aux plaines inondables, à Bamurru Plains",
      },
    },
    {
      slug: "bhoutan",
      description:
        "Avant le jour, un moine monte avec vous vers le Nid du Tigre, entre les pins et les drapeaux de prière. En haut, il ouvre la salle de méditation avant l'arrivée des visiteurs : il ne reste que les lampes à beurre et le vent contre la paroi.",
      image: {
        src: "/destination/bhoutan/xp-taktsang-2.webp",
        alt: "Le monastère du Nid du Tigre accroché à la falaise",
      },
    },
    {
      slug: "afrique-du-sud",
      description:
        "Au nord du Cap, la route monte vers le grès rouge du Cederberg. La réserve de Bushmans Kloof y protège plus de cent trente sites de peintures rupestres. On y marche le matin, et on ne croise personne d'autre que son guide.",
      image: {
        src: "/destination/afrique-du-sud/map-cederberg.webp",
        alt: "Piste entre les rochers de grès rouge du Cederberg, lumière du soir",
      },
    },
    {
      slug: "namibie",
      description:
        "Les camps n'ont que huit à dix tentes, sur d'immenses concessions, et l'on peut rouler trois jours sans croiser personne. Dans la réserve du NamibRand, le Sossusvlei Desert Lodge ouvre sa verrière sur les étoiles.",
      image: {
        src: "/destination/namibie/xp-namibrand-nuit.webp",
        alt: "Voie lactée au-dessus des dunes et d'un arbre isolé dans le désert du Namib",
      },
    },
  ],
  sections: [],
};
