import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "crillon-le-brave",
  name: "Crillon le Brave",
  blurb:
    "Ce n’est pas une maison, c’est un village. Une poignée de demeures anciennes reliées par des ruelles et des jardins, tout en haut d’une colline du Vaucluse. Le Ventoux se lève en face, et l’on prend son petit déjeuner en le regardant.",
  keywords: ["france", "provence", "vaucluse", "ventoux", "village perche"],
  heroImage: {
    src: "/destination/france/hotel-crillon-le-brave.png",
    alt: "Maisons de pierre et jardins de Crillon le Brave face au mont Ventoux",
  },
  destinationSlugs: ["france"],
  metaTitle: "Crillon le Brave en Provence, France",
  metaDescription:
    "Crillon le Brave en Provence : un village perché du Vaucluse devenu hôtel, face au mont Ventoux. Séjour en France signé par votre travel designer Exuma.",
  sections: [
    {
      type: "heroImageBackground",
      eyebrow: "Hébergement en France",
      heading: "Crillon le Brave, un village de Provence face au Ventoux",
      description:
        "Des maisons de pierre reliées les unes aux autres, des ruelles qui montent, des jardins qui descendent vers la vallée. L’hôtel occupe le haut du village, et le village continue de vivre autour de lui.",
      images: [
        {
          src: "/accommodation/crillon-le-brave/hero.png",
          alt: "Village de Crillon-le-Brave au soleil couchant, le mont Ventoux en arrière-plan",
        },
      ],
    },

    {
      type: "textImagesSplit",
      eyebrow: "Crillon-le-Brave, Vaucluse",
      heading: "On y dort dans un village, pas dans un hôtel",
      theme: "light",
      paragraphs: [
        "Crillon le Brave en Provence occupe le haut d’un village du Vaucluse, quelque part entre les Dentelles de Montmirail et les marchés de Carpentras. Ce qui n’était qu’une poignée de vieilles demeures est devenu une seule maison, sans que les ruelles cessent pour autant d’appartenir au village. On rejoint sa chambre en traversant une cour, puis un jardin, puis un escalier de pierre. Le mont Ventoux se tient en face, du matin jusqu’au soir.",
        "Les jardins descendent en terrasses vers la plaine, et la piscine s’ouvre au-dessus des vignes. On y passe l’après-midi sans rien décider. Le soir venu, la table de l’hôtel travaille ce que les producteurs du Comtat ont apporté le matin, et le vin vient des coteaux que l’on aperçoit depuis le jardin.", // TODO: verify sourcing local et carte des vins
      ],
      images: [
        {
          src: "/accommodation/crillon-le-brave/split-1.png",
          alt: "Ruelle pavée et façades de pierre de l’hôtel Crillon le Brave, en Provence",
        },
        {
          src: "/accommodation/crillon-le-brave/split-2.png",
          alt: "Piscine et jardins en terrasses de Crillon le Brave au-dessus de la plaine du Comtat",
        },
      ],
    },

    {
      type: "gallery",
      heading: "Le village, du petit matin à la nuit tombée",
      description:
        "La pierre se réchauffe doucement au réveil, les jardins s’apaisent avant le dîner, et le Ventoux change de couleur sans prévenir. On finit par régler ses journées sur cette lumière-là.",
      images: [
        {
          src: "/accommodation/crillon-le-brave/gallery-1.png",
          alt: "Terrasse du petit déjeuner de Crillon le Brave ouverte sur la vallée",
        },
        {
          src: "/accommodation/crillon-le-brave/gallery-2.png",
          alt: "Chambre aux poutres apparentes et aux volets ouverts sur les toits du village",
        },
        {
          src: "/accommodation/crillon-le-brave/gallery-3.png",
          alt: "Table dressée sous les platanes dans un jardin de Crillon le Brave",
        },
        {
          src: "/accommodation/crillon-le-brave/gallery-4.png",
          alt: "Vignes du Comtat Venaissin et mont Ventoux vus depuis le village",
        },
      ],
    },

    {
      type: "featureCards",
      eyebrow: "Les chambres",
      heading: "Trois façons d’habiter le village",
      description:
        "Aucune chambre ne ressemble à la précédente, parce qu’aucune des maisons du village ne se ressemblait avant elles. Ce qui change d’une catégorie à l’autre, c’est ce que l’on voit en ouvrant les volets.",
      // TODO: verify les catégories de chambres auprès de l'hôtel
      cards: [
        {
          title: "Les chambres du village",
          description:
            "On y entre depuis une ruelle, et l’on y retrouve les poutres et les tomettes de la maison d’origine. Les fenêtres donnent sur les toits et sur le clocher. C’est la manière la plus simple de dormir ici, et l’une des plus douces.",
          image: {
            src: "/accommodation/crillon-le-brave/chambre-1.png",
            alt: "Chambre aux poutres anciennes ouverte sur les toits du village de Crillon-le-Brave",
          },
        },
        {
          title: "Les chambres tournées vers le Ventoux",
          description:
            "Elles occupent la façade qui regarde la montagne. On ouvre les volets le matin et le Ventoux est déjà là, encore bleu, avant que le jour ne le blanchisse. Certaines ont leur propre terrasse au-dessus des jardins.",
          image: {
            src: "/accommodation/crillon-le-brave/chambre-2.png",
            alt: "Chambre avec terrasse privée face au mont Ventoux à Crillon le Brave",
          },
        },
        {
          title: "Les maisons et les suites",
          description:
            "Pour une famille, ou pour deux couples qui voyagent ensemble, une maison entière du village avec son salon, son escalier et sa terrasse. On y vit comme si l’on en avait la clé depuis toujours.",
          image: {
            src: "/accommodation/crillon-le-brave/chambre-3.png",
            alt: "Salon d’une maison privatisée de Crillon le Brave, en pierre et bois clair",
          },
        },
      ],
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-background-soft",
      eyebrow: "Expériences et activités en France",
      heading: "À combiner avec le séjour à Crillon le Brave",
      description:
        "Trois moments ancrés ailleurs en France, à glisser en ouverture ou en clôture du séjour en Provence.",
      slugs: [
        "baie-mont-saint-michel",
        "vins-clairs-champagne",
        "vallee-blanche-mont-blanc",
      ],
    },

    {
      type: "finalCta",
      eyebrow: "Aller plus loin",
      heading: "Envie d’en faire une étape de votre voyage ?",
      primaryCta: { label: "Créer votre voyage", href: "/votre-projet" },
    },
  ],
};
