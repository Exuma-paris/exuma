import type { Subtheme } from "@/lib/content/types";

export const subtheme: Subtheme = {
  slug: "safari-terrestre",
  name: "Safari terrestre",
  themeSlug: "safaris-aventure",
  blockHeading:
    "Le safari se fait à terre, et l'animal fixe l'heure",
  blurb:
    "Le pisteur coupe le moteur et montre du doigt. Le safari se joue souvent en concession privée, de Grumeti au Masaï Mara, et jusqu'aux jaguars du Pantanal, que des biologistes suivent depuis des années. La saison ne se négocie pas.",
  bandIntent:
    "Un véhicule de safari arrêté dans la savane, un animal proche, la piste visible. Lumière du matin. Le pisteur ou les passagers peuvent apparaître.",
  heroImage: {
    src: "/destination/zimbabwe/xp-safari-vehicule.webp",
    alt: "Véhicule de safari à l'arrêt, un rhinocéros et son petit passant devant lui dans la lumière du soir",
  },
  thumbnailsIntro:
    "D'autres terrains, où le safari se joue dans un décor moins attendu.",
  featuredDestinationSlugs: [
    "tanzanie",
    "kenya",
    "botswana",
    "bresil",
    "afrique-du-sud",
    "namibie",
  ],
  cards: [
    {
      slug: "tanzanie",
      description:
        "Grumeti est une concession tenue par un seul acteur, dans la partie occidentale du Serengeti. Le fly camp y installe la tente deux nuits au pied d'un chaos de granit, sans clôture, avec un veilleur masaï. Entre fin mai et juillet, la migration remonte jusqu'à la rivière.",
      image: {
        src: "/destination/tanzanie/xp-fly-camp.webp",
        alt: "Tente de fly camp ouverte sur la plaine et ses acacias, à Grumeti",
      },
    },
    {
      slug: "kenya",
      description:
        "La montgolfière se gonfle à la lampe torche, dans le noir du Masaï Mara. Pendant une heure, la savane défile sous la nacelle : éléphants, girafes, lions vus du ciel. Le voyage commence dans une concession privée, sans un autre camp visible à l'horizon.",
      image: {
        src: "/destination/kenya/xp-montgolfiere.webp",
        alt: "Montgolfière au-dessus de la plaine et des troupeaux du Masaï Mara",
      },
    },
    {
      slug: "botswana",
      description:
        "Au plus fort de la crue, le delta de l'Okavango s'étend sur près de 15 000 km². La marche part du camp sans véhicule, avec des guides Bushmen San qui lisent les traces. Après le dîner, le projecteur à filtre rouge révèle ce qui ne se montre pas de jour : oryctérope, hyène brune, otocyon.",
      image: {
        src: "/destination/botswana/xp-marche-san.webp",
        alt: "Guides Bushmen San et marcheurs en file au lever du soleil, sur le pan",
      },
    },
    {
      slug: "bresil",
      description:
        "Les biologistes d'Onçafari suivent ces jaguars du Pantanal depuis des années, et les félins ne s'écartent plus des véhicules. On les observe à quelques mètres, depuis un 4×4 ou une barque, au moment où ils descendent boire.",
      image: {
        src: "/destination/bresil/xp-jaguars-pantanal.webp",
        alt: "Jaguar couché sur un tronc au bord de l'eau, dans le Pantanal",
      },
    },
    {
      slug: "afrique-du-sud",
      image: {
        src: "/destination/afrique-du-sud/xp-marche-thornybush.webp",
        alt: "Marcheurs derrière leur pisteur sur une piste de sable, à Thornybush",
      },
    },
    {
      slug: "namibie",
      image: {
        src: "/destination/namibie/xp-ongava-pisteur.webp",
        alt: "Pisteur accroupi lisant une empreinte dans le sable, à Ongava",
      },
    },
    {
      slug: "sri-lanka",
      image: {
        src: "/destination/sri-lanka/xp-leopards-yala.webp",
        alt: "Léopard dans la végétation du parc de Yala",
      },
    },
  ],
  sections: [],
};
