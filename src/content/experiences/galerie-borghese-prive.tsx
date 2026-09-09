import type { Experience } from "@/lib/content/types";

export const experience: Experience = {
  slug: "galerie-borghese-prive",
  name: "Galerie Borghèse, hors horaires",
  blurb:
    "La salle de Bernini avant l'ouverture, lumière naturelle sur le marbre. Notre historien d'art italien guide en français, par tranches de quinze minutes par salle. Apollon et Daphné, deux fois.",
  keywords: ["rome", "borghese", "bernini", "art", "musee"],
  heroImage: {
    src: "/destination/rome/xp-borghese.png",
    alt: "Sculpture de Bernini à la Galerie Borghèse, Rome",
  },
  destinationSlugs: ["rome"],
  metaTitle: "Galerie Borghèse, hors horaires à Rome",
  metaDescription:
    "Visite privée de la Galerie Borghèse hors horaires à Rome : ouverture à huit heures, six personnes, historien d'art francophone, une heure avec Bernini.",
  sections: [
    {
      type: "heroImageBackground",
      eyebrow: "Expérience à Rome",
      heading: "Bernini, à l'heure où la salle est vide",
      description:
        "La Galerie Borghèse ouvre à neuf heures pour le public. À huit, le gardien fait entrer six personnes maximum, accompagnées d'un historien d'art italien francophone. Une heure de visite, dans le silence d'un palais qui vient de finir sa nuit.",
      images: [
        {
          src: "/experience/galerie-borghese-prive/hero.png",
          alt: "Statue d'Apollon et Daphné par Bernini à la Galerie Borghèse, Rome",
        },
      ],
    },

    {
      type: "textImagesSplit",
      eyebrow: "Avant l'ouverture publique",
      heading: "Une heure devant Apollon et Daphné",
      theme: "light",
      paragraphs: [
        "La Galerie Borghèse hors horaires à Rome se réserve par créneaux. Le gardien ouvre la porte à huit heures, allume une seule rangée de lumières, et le bruit des serrures résonne dans le silence. Pas de file, pas de signal sonore. Six personnes maximum dans tout le palais. Apollon et Daphné restent fermés derrière nous une heure de plus que pour le public.",
        "Notre historien d'art italien guide en français, par tranches de quinze minutes par salle. Il revient deux fois sur Apollon et Daphné : Bernini avait vingt-quatre ans quand il a sculpté la transformation. Personne ne demande à passer plus vite. C'est le marbre qui mène la conversation.",
      ],
      images: [
        {
          src: "/experience/galerie-borghese-prive/split-1.png",
          alt: "Détail des mains du Rapt de Proserpine, Galerie Borghèse",
        },
        {
          src: "/experience/galerie-borghese-prive/split-2.png",
          alt: "Salle des sculptures de la Galerie Borghèse au matin",
        },
      ],
    },

    {
      type: "gallery",
      heading: "Trois salles, et ce qu'elles montrent",
      description:
        "Trois moments du parcours, à l'heure où la lumière naturelle traverse encore les fenêtres.",
      images: [
        {
          src: "/experience/galerie-borghese-prive/gallery-1.png",
          alt: "Apollon et Daphné par Bernini, Galerie Borghèse",
        },
        {
          src: "/experience/galerie-borghese-prive/gallery-2.png",
          alt: "David et Goliath par Caravage, Galerie Borghèse",
        },
        {
          src: "/experience/galerie-borghese-prive/gallery-3.png",
          alt: "Plafond peint et marqueterie de la Galerie Borghèse",
        },
      ],
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-background-soft",
      eyebrow: "Expériences et activités en Rome",
      heading: "Autres expériences à Rome",
      description:
        "Deux autres moments coordonnés à Rome, dans des registres différents.",
      cta: { label: "Voir l'ensemble de nos expériences", href: "/experiences" },
      slugs: ["nonna-cuisine-trastevere", "via-appia-vespa"],
    },

    {
      type: "featureShowcase",
      eyebrow: "Notre rôle dans cette expérience",
      heading: "Un interlocuteur unique pour cette expérience",
      description:
        "Du premier échange à la sortie de la galerie, Élise coordonne chaque détail.",
      // TODO: verify with the collaborateur
      items: [
        {
          title: "Sélection du créneau et coordination avec la Galerie",
          detail: (
            <p>
              La Galerie Borghèse fonctionne par créneaux serrés. Élise appelle
              deux semaines avant pour réserver l'ouverture privée à huit
              heures, et coordonner les détails avec le gardien.
            </p>
          ),
          image: {
            src: "/collaborateurs/taina-profile-v2.jpg",
            alt: "Portrait de Tainà Dos Santos Papaleo, Luxury Travel Designer chez Exuma",
          },
        },
        {
          title: "Accompagnement de l'historien d'art",
          detail: (
            <p>
              L'historien d'art francophone retrouve les voyageurs à l'entrée à
              sept heures cinquante. Il guide en français, par tranches de
              quinze minutes par salle, et revient deux fois sur Apollon et
              Daphné.
            </p>
          ),
          image: {
            src: "/collaborateurs/taina-profile-v2.jpg",
            alt: "Portrait de Tainà Dos Santos Papaleo, Luxury Travel Designer chez Exuma",
          },
        },
        {
          title: "Prolongement vers les Caravage gratuits",
          detail: (
            <p>
              À la sortie, Élise propose une marche vers
              Saint-Louis-des-Français pour les trois Caravage. Café
              Sant'Eustachio à mi-chemin. La matinée se prolonge naturellement
              jusqu'à onze heures.
            </p>
          ),
          image: {
            src: "/collaborateurs/taina-profile-v2.jpg",
            alt: "Portrait de Tainà Dos Santos Papaleo, Luxury Travel Designer chez Exuma",
          },
        },
      ],
    },
    {
      type: "finalCta",
      eyebrow: "Aller plus loin",
      heading: "Envie d'en faire une étape de votre voyage ?",
      primaryCta: { label: "Créer votre voyage", href: "/votre-projet" },
    },
  ],
};
