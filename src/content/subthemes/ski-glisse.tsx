import type { Subtheme } from "@/lib/content/types";

export const subtheme: Subtheme = {
  slug: "ski-glisse",
  name: "Ski & glisse",
  themeSlug: "ski-montagne",
  blockHeading:
    "Le ski commence avant le lever du jour",
  blurb:
    "Sur l'Arlberg, la montée à peau de phoque part avant que les remontées ne tournent : deux heures pour une seule descente. À Chamonix, la vallée Blanche se descend encordé derrière un guide. Dans le Sunnmøre, le voilier mouille au pied des faces, pour qui trouve les remontées mécaniques bruyantes.",
  bandIntent:
    "Une trace de montée à peau de phoque sur une pente vierge, ou un skieur seul en haut de descente. Neige et lumière froide.",
  heroImage: {
    src: "/subtheme/ski-glisse/band.png",
    alt: "Une trace de montée à peau de phoque sur une pente vierge, un skieur seul dans la lumière froide",
  },
  thumbnailsIntro:
    "D'autres versants, pour qui connaît déjà les premiers.",
  featuredDestinationSlugs: [
    "autriche",
    "norvege",
    "france",
    "suisse",
  ],
  cards: [
    {
      slug: "autriche",
      description:
        "Départ de Lech avant que les remontées ne tournent, avec un guide de la vallée. La montée à peau de phoque dure deux heures et le jour se lève en chemin. La descente se fait dans une neige que personne n'a touchée. Le soir, on rentre dans un chalet de dix-neuf chambres, au pied des pistes.",
      image: {
        src: "/destination/autriche/xp-arlberg.webp",
        alt: "Deux skieurs en montée sur une pente vierge de l'Arlberg, lumière rose sur les sommets",
      },
    },
    {
      slug: "norvege",
      description:
        "Le bateau part d'Ålesund et mouille au pied des faces du Hjørundfjord. On monte à peaux le matin, on redescend jusqu'au niveau de la mer. Aucune remontée mécanique, et l'équipage s'occupe du reste.",
      image: {
        src: "/destination/norvege/xp-ski-voile-sunnmore.webp",
        alt: "Voilier au mouillage au pied des faces enneigées du Hjørundfjord",
      },
    },
    {
      slug: "france",
      description:
        "On monte à l'Aiguille du Midi avant l'ouverture, et l'on ressort au milieu des glaciers, seuls sur la montagne. Puis vient la longue descente vers Chamonix, encordé derrière un guide. Elle réclame la neige de fin d'hiver, et le guide se réserve longtemps à l'avance.",
      image: {
        src: "/destination/france/xp-vallee-blanche.png",
        alt: "Deux personnes encordées sur la neige, face aux aiguilles du massif du Mont-Blanc",
      },
    },
    {
      slug: "suisse",
      description:
        "L'hiver appartient à l'Oberland bernois et au Valais, quand la neige tient et que le soleil reste haut. Cours privé le matin pour ceux qui skient, attelage ou thermes pour les autres, et tout le monde se retrouve à déjeuner en altitude.",
      image: {
        src: "/destination/suisse/map-gstaad.webp",
        alt: "Chalets de Gstaad sous la neige, un attelage sur le chemin",
      },
    },
  ],
  sections: [],
};
