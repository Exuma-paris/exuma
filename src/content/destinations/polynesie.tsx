import type { Destination } from "@/lib/content/types";

export const destination: Destination = {
  slug: "polynesie",
  name: "Polynésie française",
  country: "Polynésie française",
  genitive: "de la Polynésie",
  continentSlug: "iles-oceanie",
  blurb: "Tetiaroa, Bora Bora, Moorea, Raiatea, Fakarava",
  keywords: [
    "polynesie",
    "tahiti",
    "bora bora",
    "moorea",
    "tetiaroa",
    "raiatea",
    "fakarava",
    "tuamotu",
    "pacifique",
  ],
  landing: {
    metaTitle: "Voyage de luxe en Polynésie",
    metaDescription:
      "Créateur de voyages d'exception façonnés selon vos aspirations, entre atolls préservés et adresses confidentielles de Polynésie.",
    heroEyebrow: "Voyage de luxe en Polynésie",
    heroHeading: "Vivez l'inaccessible",
    heroDescription:
      "Créateur de voyages d'exception façonnés selon vos aspirations, entre atolls préservés et adresses confidentielles de Polynésie.",
    // TODO: verify rating numbers
    rating: { score: 4.9, label: "247 voyages créés en 2025" },
    floatingCtaLabel: "Découvrir la Polynésie",
    slides: [
      {
        image: {
          src: "/destination/polynesie/hero-1.png",
          alt: "Plage de sable blanc bordée de cocotiers en Polynésie française",
        },
      },
      {
        image: {
          src: "/destination/polynesie/hero-2.png",
          alt: "Bungalows sur pilotis face au mont Otemanu à Bora Bora",
        },
      },
      {
        image: {
          src: "/destination/polynesie/hero-3.png",
          alt: "Lagon de Fakarava vu du ciel, archipel des Tuamotu",
        },
      },
      {
        image: {
          src: "/destination/polynesie/full-image.png",
          alt: "Vue panoramique d'un atoll polynésien",
        },
      },
    ],
  },
  contactQuestions: [
    {
      id: "experience",
      type: "multi",
      eyebrow: "Créer votre voyage",
      heading: "Quelle expérience recherchez-vous en Polynésie ?",
      description: "Sélectionnez tout ce qui vous correspond.",
      options: [
        { id: "lagon", label: "Lagon et plages iconiques" },
        { id: "culture", label: "Immersion culturelle polynésienne" },
        { id: "nature", label: "Nature & randonnées (îles hautes)" },
        { id: "exclusif", label: "Séjour ultra-exclusif / île privée" },
      ],
      min: 1,
    },
    {
      id: "budget",
      type: "single",
      eyebrow: "Créer votre voyage",
      heading: "Quel est votre budget par personne ?",
      options: [
        { id: "tier-1", label: "Moins de 5 000 €" },
        { id: "tier-2", label: "5 000 € – 10 000 €" },
        { id: "tier-3", label: "10 000 € – 20 000 €" },
        { id: "tier-4", label: "Plus de 20 000 €" },
      ],
    },
    {
      id: "with-kids",
      type: "boolean",
      eyebrow: "Créer votre voyage",
      heading: "Voyagez-vous avec des enfants ?",
    },
    {
      id: "dates",
      type: "calendar",
      eyebrow: "Créer votre voyage",
      heading: "Quelle période envisagez-vous pour votre voyage ?",
      months: [
        { id: "2026-01", title: "Janvier", subtitle: "2026" },
        { id: "2026-02", title: "Février", subtitle: "2026" },
        { id: "2026-03", title: "Mars", subtitle: "2026" },
        { id: "2026-04", title: "Avril", subtitle: "2026" },
        { id: "2026-05", title: "Mai", subtitle: "2026", weather: "good" },
        { id: "2026-06", title: "Juin", subtitle: "2026", weather: "good" },
        { id: "2026-07", title: "Juillet", subtitle: "2026", weather: "happy-max" },
        { id: "2026-08", title: "Août", subtitle: "2026", weather: "happy-max" },
        { id: "2026-09", title: "Septembre", subtitle: "2026", weather: "happy-max" },
        { id: "2026-10", title: "Octobre", subtitle: "2026", weather: "good" },
        { id: "2026-11", title: "Novembre", subtitle: "2026" },
        { id: "2026-12", title: "Décembre", subtitle: "2026" },
      ],
    },
    {
      id: "contact",
      type: "contact",
      eyebrow: "Dernière étape",
      heading: "Comment vous joindre ?",
      description: "Un travel designer revient vers vous sous 24 heures.",
    },
  ],
  sections: [
    {
      type: "hero",
      eyebrow: "Voyages sur mesure · Exuma",
      heading:
        "Polynésie française. Il y a une lumière ici qui ne ressemble à aucune autre.",
      description:
        "Cinq archipels, cent dix-huit îles. Tetiaroa, Bora Bora, Moorea, Raiatea, Fakarava : chaque île a sa raison d'être dans un séjour, et cette raison change tout à ce qu'on ressent en arrivant. Nous construisons cette logique depuis plus de dix ans.",
      images: [
        {
          src: "/destination/polynesie/hero-1.png",
          alt: "Plage de sable blanc bordée de cocotiers en Polynésie française",
        },
        {
          src: "/destination/polynesie/hero-2.png",
          alt: "Bungalows sur pilotis face au mont Otemanu à Bora Bora",
        },
        {
          src: "/destination/polynesie/hero-3.png",
          alt: "Lagon de Fakarava vu du ciel, archipel des Tuamotu",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Notre rôle dans ce voyage",
      heading: "Un seul interlocuteur, du premier échange jusqu'au retour",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "stephane",
        // TODO: verify quote attribution
        quote:
          "Il y a des voyages qu'on construit en quelques échanges parce que tout s'aligne vite. Et d'autres où il faut une heure de conversation pour comprendre ce que la personne cherche vraiment, pas ce qu'elle demande. La Polynésie, c'est souvent le deuxième cas. Et c'est là que le voyage devient intéressant.",
        role: "Travel Designer · Polynésie française",
      },
      features: [
        {
          iconName: "badgeCheck",
          title: "Hébergements hors réseaux",
          description:
            "Maisons, motu privés, lodges familiaux : des adresses qui ne se trouvent pas dans les moteurs de réservation.",
        },
        {
          iconName: "sparkles",
          title: "Logique inter-îles",
          description:
            "Connaissance des archipels et des connexions. Chaque déplacement a une raison, vérifiée depuis plus de dix ans.",
        },
        {
          iconName: "star",
          title: "Accès négociés localement",
          description:
            "Pêcheurs, navigateurs, guides, familles. Des personnes qui connaissent les îles pour y vivre.",
        },
      ],
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Ouverture",
      heading: "Un archipel, pas une destination",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      columns: [
        "À Fakarava, le fond du lagon est visible à quarante mètres de profondeur. On voit son ombre sur le sable avant même d'avoir sauté du bateau. Cette clarté n'est pas un détail de brochure. C'est la mesure de ce que la Polynésie française a encore préservé, et de ce que le reste du monde a, depuis longtemps, perdu de vue.",
        "Un voyage en Polynésie française se construit autour d'une logique de déplacement entre les îles. La semaine à Moorea avant les Tuamotu. Le passage par Raiatea pour le marae de Taputapuatea, classé au patrimoine mondial de l'UNESCO. Les deux nuits sur Tetiaroa en ouverture ou en clôture, quand on a besoin que rien ne presse. Nous construisons cette cohérence depuis plus de dix ans. Chaque déplacement a une raison. Cette raison change la qualité de ce qu'on ressent en arrivant.",
        "« Il n'y a pas une Polynésie. Il y a celle qu'on voit depuis un bungalow sur pilotis, et celle qu'on découvre avec les bonnes personnes. Entre les deux, il y a tout le voyage. »",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/polynesie/full-image.png",
        alt: "Lagon de Fakarava vu du ciel, archipel des Tuamotu",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Les étoiles du Pacifique, Bora Bora",
      heading: "Le soir où le ciel change de sens",
      theme: "light",
      paragraphs: [
        "Le bateau quitte Bora Bora au moment précis où le ciel commence à changer de couleur. Pas au coucher du soleil officiel. Avant. Quand le bleu se teinte d'orange sur le bord et que le lagon prend la couleur qu'il ne montrera jamais en plein jour.",
        "Le guide parle peu pendant la traversée. Il montre. La main tendue vers les étoiles qui apparaissent une à une, il explique comment les navigateurs polynésiens lisaient le ciel avant que les cartes n'existent. Tupaia, le navigateur qui accompagna Cook en 1769, connaissait de mémoire la position de soixante-quatorze îles dans l'ensemble du Pacifique. Il les cartographiait par les étoiles. Le guide tend la main vers Arcturus. C'est celle-là qu'on suivait pour revenir de Tahiti.",
        "On accoste sur le motu à la nuit tombée. Il n'y a aucune lumière artificielle visible depuis la plage. Le ciel en Polynésie, loin des côtes, n'est pas le même ciel qu'ailleurs. Les enfants s'allongent dans le sable. Les adultes aussi.",
      ],
      images: [
        {
          src: "/destination/polynesie/split-1.png",
          alt: "Pirogue traditionnelle sur un lagon au coucher du soleil",
        },
        {
          src: "/destination/polynesie/split-2.png",
          alt: "Ciel étoilé au-dessus d'un motu polynésien",
        },
      ],
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Trois expériences",
      heading: "Ce qu'on fait, concrètement",
      description:
        "Des moments vécus, ancrés dans des personnes. Ni démonstrations, ni programme : des accès qui ne se trouvent pas en cherchant.",
      cta: { label: "Voir l'ensemble de nos expériences", href: "/experiences" },
      slugs: ["peche-moorea", "nick-tetautiare", "lagon-moorea"],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/polynesie/ceremony.png",
          alt: "Cérémonie traditionnelle polynésienne sous un fare",
        },
        right: {
          src: "/destination/polynesie/image-homme.png",
          alt: "Homme polynésien tatoué jouant du pu (conque)",
        },
      },
      text: {
        eyebrow: "La logique des archipels",
        heading: "Une façon particulière d'organiser ce voyage",
        columns: [
          "« La Polynésie ne se visite pas dans l'ordre. On n'y avance pas d'est en ouest ni du nord au sud. On y gravite, d'un archipel à l'autre, selon ce que l'on cherche à ce moment-là du voyage. Ce que nous construisons, c'est cette logique de déplacement. Pas un programme. Une cohérence. »",
          "Sur chaque dossier Polynésie, plusieurs expertises se mobilisent : la connaissance des archipels, les hébergements hors réseaux de distribution, la logistique de connexion entre les îles, les accès négociés localement avec des personnes qui connaissent les îles pour y vivre. Un seul interlocuteur coordonne l'ensemble et reste le vôtre du premier échange jusqu'au retour. Les transferts sont privés. Ce que nous mettons en place, vous n'avez pas à le vérifier.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements en Polynésie française",
      heading: "Où séjourner",
      description:
        "Quatre adresses choisies pour ce qu'elles sont, pas pour ce qu'elles disent. Le niveau se lit dans le texte, pas dans les étoiles.",
      cta: { label: "Voir tous les hébergements", href: "/hebergements" },
      slugs: ["the-brando", "le-tahaa", "st-regis-bora-bora"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Avant le départ",
      heading: "Ce qu'il faut savoir avant de partir en Polynésie",
      description:
        "Monnaie, formalités, escale, temps de vol, décalage et meilleure saison : l'essentiel pour préparer le voyage sereinement.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          iconName: "euro",
          title: "Monnaie",
          description:
            "Franc CFP (XPF), fixé à l'euro depuis 1945 et sans fluctuation. 1 € ≈ 119 francs CFP. Retrait sur place, sans risque de change.",
        },
        {
          iconName: "fileText",
          title: "Formalités",
          description:
            "Passeport valide recommandé pour tous, quelle que soit la nationalité. La carte d'identité française ne suffit pas pour l'escale aux États-Unis.",
        },
        {
          iconName: "plane",
          title: "Escale",
          description:
            "La plupart des vols depuis Paris transitent par Los Angeles. Une autorisation ESTA (≈ 21 $, en ligne) est obligatoire. Nous l'anticipons pour chaque client.",
        },
        {
          iconName: "clock",
          title: "Temps de vol",
          description:
            "21 à 23 heures depuis Paris, escale comprise. Vol direct saisonnier Air Tahiti Nui depuis CDG. Air France via Los Angeles ou Tokyo.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "12 heures d'avance sur la France en hiver, 11 heures en été. Le décalage joue en faveur des lève-tôt.",
        },
        {
          iconName: "calendarDays",
          title: "Quand partir",
          description:
            "De mai à octobre : moins d'humidité, vents réguliers. Novembre et avril restent très bien, avec moins de visiteurs. Baleines à bosse d'août à octobre.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: "Comment nous travaillons",
      heading: "Notre rôle dans ce voyage",
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Polynésie. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      cards: [
        {
          title: "Connaissance des archipels",
          description:
            "Cinq archipels, cent dix-huit îles. Nous savons lesquels assembler, dans quel ordre, et pourquoi. Une cohérence vérifiée depuis plus de dix ans.",
          image: {
            src: "/destination/polynesie/bento-map.png",
            alt: "Carte d'itinéraire personnalisé en Polynésie française",
          },
          tone: "dark",
        },
        {
          title: "Hébergements hors réseaux",
          description:
            "Maisons de famille, motu privés, lodges. Des adresses qui ne se trouvent pas dans les moteurs de réservation.",
          image: {
            src: "/destination/polynesie/bento-huahine.png",
            alt: "Végétation luxuriante de Huahine",
          },
        },
        {
          title: "Logistique inter-îles",
          description:
            "Vols domestiques, transferts privés, taxi-boat, hydravion. Ce que nous mettons en place, vous n'avez pas à le vérifier.",
          image: {
            src: "/destination/polynesie/bento-aerien.png",
            alt: "Vue aérienne d'un atoll polynésien",
          },
        },
        {
          title: "Accès négociés localement",
          description:
            "Avec des personnes qui connaissent les îles pour y vivre. Pêcheurs, navigateurs, guides, familles : la différence se sent à table.",
          image: {
            src: "/destination/polynesie/bento-homme.png",
            alt: "Habitant polynésien dans son environnement",
          },
        },
        {
          title: "Un seul interlocuteur",
          description:
            "Du premier échange jusqu'au retour. Réponse sous 24h. Les ajustements de dernière minute, gérés. Les transferts, privés.",
          image: {
            src: "/destination/polynesie/bento-plongee.png",
            alt: "Plongeur nageant avec des raies mantas",
          },
        },
      ],
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Que voir en Polynésie française",
      heading: "Quatre lieux, et ce qu'il y a derrière",
      description:
        "Tetiaroa, Moorea, Bora Bora, Raiatea : chaque île tient une promesse distincte. Voici celles autour desquelles s'organisent la plupart de nos itinéraires, plus deux îles que peu de voyageurs traversent.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      initialZoom: 6,
      places: [
        {
          title: "Tetiaroa, l'atoll privé",
          description:
            "L'atoll n'a pas de route. The Brando occupe les terres que Marlon Brando avait achetées après les Révoltés du Bounty.",
          image: {
            src: "/destination/polynesie/map-tetiaroa.png",
            alt: "Atoll de Tetiaroa vu du ciel",
          },
          coordinates: { lat: -17.0133, lng: -149.5597 },
        },
        {
          title: "Moorea, la montagne dans le lagon",
          description:
            "Depuis le ferry de nuit, on voit la montagne avant l'île. Les pics à 880 mètres, le vert qui descend jusqu'à l'eau.",
          image: {
            src: "/destination/polynesie/map-huahine.png",
            alt: "Pics déchiquetés de Moorea émergeant du lagon",
          },
          coordinates: { lat: -17.5388, lng: -149.8295 },
        },
        {
          title: "Bora Bora, le lagon, vraiment",
          description:
            "Le lagon est réel, exactement la couleur des photographies. La densité des resorts l'est aussi. À aborder par les hauteurs.",
          image: {
            src: "/destination/polynesie/map-huahine.png",
            alt: "Vue aérienne du lagon de Bora Bora et du mont Otemanu",
          },
          coordinates: { lat: -16.5004, lng: -151.7415 },
        },
        {
          title: "Raiatea, le berceau de la Polynésie",
          description:
            "L'île sacrée, point de départ des premiers navigateurs polynésiens. Marae de Taputapuatea classé UNESCO.",
          image: {
            src: "/destination/polynesie/map-raiatea.png",
            alt: "Marae de Taputapuatea sur l'île de Raiatea",
          },
          coordinates: { lat: -16.8333, lng: -151.4333 },
        },
        {
          title: "Maupiti, le lagon sans les hôtels",
          description:
            "À 30 minutes de vol de Bora Bora, le même lagon, sans un seul grand hôtel. Les hébergements sont des maisons de famille.",
          image: {
            src: "/destination/polynesie/map-tahaa.png",
            alt: "Lagon de Maupiti vu du ciel",
          },
          coordinates: { lat: -16.4333, lng: -152.2667 }, // TODO: verify coords
        },
        {
          title: "Fakarava, la passe de Garuae",
          description:
            "La passe se plonge tôt le matin. Les requins gris convergent par centaines, dans la réserve de biosphère UNESCO.",
          image: {
            src: "/destination/polynesie/map-tuamotu.png",
            alt: "Passe de Garuae à Fakarava, archipel des Tuamotu",
          },
          coordinates: { lat: -16.0833, lng: -145.6167 }, // TODO: verify coords
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Ce que les guides ne disent pas",
      heading: "L'envers des îles",
      description:
        "Quatre observations de terrain qui ne se trouvent pas dans un guide. Pour décider d'une étape, ou comprendre pourquoi nous l'inscrivons à un itinéraire.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          title: "Maupiti, le lagon sans les hôtels",
          cardEyebrow: "Île",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Le lagon de Bora Bora, sans un seul grand hôtel. Maisons de famille, table de la maison.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                À trente minutes de vol de Bora Bora, Maupiti possède le même
                lagon sans un seul grand hôtel dessus. La piste d'atterrissage
                n'accepte pas les avions de ligne. On y arrive sur un vol
                régional, et pendant la descente le lagon apparaît en dessous
                avec une clarté identique à celle de Bora Bora, dans un silence
                qu'elle n'a plus.
              </p>
              <p>
                Les hébergements sont des maisons de famille. La table est
                celle de la maison.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous coordonnons les vols régionaux et la mise en relation avec
                les familles qui accueillent. Une étape de deux à trois nuits,
                inscrite avant ou après Bora Bora.
              </p>
            </div>
          ),
        },
        {
          title: "La passe de Garuae, Fakarava",
          cardEyebrow: "Plongée",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Tôt le matin, avant que le courant ne change. Les requins gris convergent par centaines.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                À Fakarava, la passe se plonge tôt le matin, avant que le
                courant ne change de sens. C'est à cette heure-là que les
                requins gris convergent dans la passe, des centaines à la fois,
                dans un spectacle que les scientifiques de la réserve de
                biosphère UNESCO documentent depuis vingt ans.
              </p>
              <p>
                La plupart des hébergements ne s'organisent pas autour de cette
                fenêtre. Nous, si.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Inscrire la plongée le premier matin, avant la fatigue du
                voyage. La fenêtre est étroite et ne se rattrape pas.
              </p>
            </div>
          ),
        },
        {
          title: "L'intérieur de Tahiti, une île dans l'île",
          cardEyebrow: "Tahiti",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "La côte ouest est construite. L'intérieur ne l'est presque pas. Une journée, un 4x4, un guide.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La côte ouest de Tahiti est construite. L'intérieur de l'île ne
                l'est presque pas. La vallée de Fautaua, les cols vers
                Papeno'o, les chutes de Vaipahi composent une autre île, dense
                et verte, que la plupart des voyageurs qui transitent par
                Papeete ne soupçonnent pas.
              </p>
              <p>
                Une journée, un 4x4, le bon guide suffisent à changer le
                registre du séjour entier.
              </p>
            </div>
          ),
        },
        {
          title: "Le vignoble de Rangiroa, du vin sur du corail",
          cardEyebrow: "Tuamotu",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Des vignes poussent sur du corail. Un blanc minéral et iodé qui ne ressemble à aucun autre.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                À Rangiroa, des vignes poussent sur du corail. Le sol de
                l'atoll n'a pas de terre au sens habituel du terme, seulement
                des débris calcaires. Dominique Auroy a planté les premières
                souches en 1999.
              </p>
              <p>
                La cave produit aujourd'hui un blanc minéral et iodé qui ne
                ressemble à aucun autre vin au monde. C'est une information
                géographique avant d'être une curiosité touristique.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Visite de la cave et dégustation, organisées en marge d'une
                étape Tuamotu. Une demi-journée.
              </p>
            </div>
          ),
        },
      ],
    },

    {
      type: "testimonials",
      eyebrow: "Témoignages",
      heading: "Ils ont vécu l'expérience Exuma",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      testimonials: [
        {
          // TODO: replace with real testimonial
          quote:
            "Notre voyage en Polynésie avec Exuma a été un rêve éveillé. Chaque détail était pensé, chaque île une découverte. Le bungalow sur pilotis à Bora Bora restera gravé dans nos mémoires.",
          image: {
            src: "/destination/polynesie/hero-1.png",
            alt: "Portrait de Sophie et Marc", // TODO: verify
          },
          name: "Sophie & Marc", // TODO: verify
          role: "Voyage de noces, octobre 2025", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Grâce à notre travel designer, nous avons découvert des endroits que nous n'aurions jamais trouvés seuls. La plongée à Fakarava, le dîner sur le motu… des moments magiques.",
          image: {
            src: "/destination/polynesie/hero-2.png",
            alt: "Portrait de Laurent", // TODO: verify
          },
          name: "Laurent", // TODO: verify
          role: "Séjour en famille, août 2025", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Ce qui m'a le plus marquée, c'est la qualité de l'accompagnement. Tout était fluide, du premier appel jusqu'au retour. On se sent véritablement pris en charge.",
          image: {
            src: "/destination/polynesie/hero-3.png",
            alt: "Portrait de Claire", // TODO: verify
          },
          name: "Claire", // TODO: verify
          role: "Escapade solo, mai 2025", // TODO: verify
        },
      ],
    },

    {
      type: "faq",
      background: "bg-white",
      eyebrow: "FAQ",
      heading: "Questions fréquentes",
      contact: {
        prefix: "Besoin d'un renseignement ? ",
        label: "Contactez votre travel designer",
        href: "/contact",
        suffix: " pour une réponse personnalisée.",
      },
      items: [
        {
          question:
            "Quel est le meilleur moment pour partir en Polynésie française ?",
          answer:
            "La saison la plus agréable s'étend de mai à octobre, avec moins d'humidité et des vents réguliers. Novembre et avril restent très bien, avec sensiblement moins de visiteurs. Les baleines à bosse sont présentes d'août à octobre.",
        },
        {
          question: "Faut-il un visa pour aller en Polynésie française ?",
          answer:
            "Les ressortissants français et européens n'ont pas besoin de visa pour entrer en Polynésie française. En revanche, un passeport valide est recommandé pour tous les voyageurs : la carte d'identité française ne suffit pas pour l'escale aux États-Unis (Los Angeles), obligatoire sur la plupart des vols depuis Paris. Une autorisation ESTA est requise pour cette escale.",
        },
        {
          question: "Combien de temps dure le vol Paris–Papeete ?",
          answer:
            "Le temps de voyage depuis Paris est de 21 à 23 heures, escale comprise. Air Tahiti Nui propose un vol direct saisonnier depuis Charles-de-Gaulle. Air France dessert Papeete via Los Angeles ou Tokyo.",
        },
        {
          question: "Quelle est la monnaie en Polynésie française ?",
          answer:
            "La Polynésie française utilise le franc CFP (XPF), dont le taux de change est fixé à l'euro depuis 1945. Un euro vaut environ 119 francs CFP. Il faut retirer des francs CFP sur place, mais sans risque de variation de cours.",
        },
        {
          question: "Quelles îles visiter en Polynésie française ?",
          answer:
            "Les îles les plus emblématiques sont Bora Bora pour son lagon, Moorea pour sa géographie montagne-lagon, Tetiaroa pour l'isolement absolu, Raiatea pour sa dimension culturelle et spirituelle, et Fakarava pour la plongée dans une réserve de biosphère UNESCO.",
        },
      ],
    },
  ],
};
