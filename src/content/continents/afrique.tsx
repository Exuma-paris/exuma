import type { Continent } from "@/lib/content/types";

export const continent: Continent = {
  slug: "afrique",
  name: "Afrique",
  genitive: "d'Afrique",
  blurb: "Safaris confidentiels, déserts et côtes de l'océan Indien.",
  keywords: ["afrique", "kenya", "tanzanie", "namibie", "maroc", "afrique du sud"],
  sections: [
    {
      type: "hero",
      eyebrow: "Continent",
      heading: "Afrique",
      description:
        "Du Masaï Mara au désert du Namib, l'Afrique se voyage en réserves privées et en camps de taille réduite, avec des guides qui vivent sur le terrain toute l'année.",
      images: [
        {
          src: "/destination/namibie/hero-2.webp",
          alt: "Deux montgolfières au-dessus des plaines du Namib au lever du jour",
        },
        {
          src: "/destination/kenya/hero-3.png",
          alt: "Plage de sable blanc de Galu Beach sur la côte sud du Kenya",
        },
        {
          src: "/destination/afrique-du-sud/hero-2.webp",
          alt: "Léopard sur une branche dans la réserve privée de Thornybush, Afrique du Sud",
        },
      ],
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Ouverture",
      heading: "Le safari se joue sur le terrain, pas sur le nom du camp",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      columns: [
        "En Afrique de l'Est, la différence entre deux voyages ne tient pas au niveau de confort mais au terrain. Une réserve privée limite le nombre de véhicules sur un même animal, autorise la sortie de piste et les sorties de nuit, ce que les parcs nationaux interdisent. C'est le premier arbitrage que nous posons, avant même de parler d'adresses.",
        "Le continent impose ensuite son calendrier. Les gnous traversent la Grumeti entre juin et juillet, la Mara entre août et octobre. En Namibie, la saison sèche concentre les animaux autour des points d'eau d'Etosha de juin à octobre, quand les dunes de Sossusvlei se photographient toute l'année au lever du jour. En Égypte, la navigation sur le Nil devient confortable d'octobre à avril.",
        "La plupart de nos itinéraires africains associent deux terrains dans un même voyage. Une semaine de brousse suivie de quatre nuits sur la côte de l'océan Indien, le Cap et une réserve du Kruger, le Namib et la Skeleton Coast. Les vols intérieurs se font en avion léger, souvent une heure d'une piste à l'autre.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/tanzanie/full-image.webp",
        alt: "Plaines du Serengeti en Tanzanie parcourues par le troupeau de la grande migration",
      },
      height: 560,
    },

    {
      type: "entityList",
      kind: "destination",
      eyebrow: "Destinations phares",
      heading: "Cinq terrains africains",
      description:
        "Deux pays de grande migration, un désert, une pointe de continent et une vallée du Nil. Cinq entrées qui couvrent l'essentiel des façons de voyager en Afrique.",
      slugs: ["kenya", "tanzanie", "namibie", "afrique-du-sud", "egypte"],
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
