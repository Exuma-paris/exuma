import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "maldives",
  name: "Maldives",
  placeKind: "country",
  country: "Maldives",
  genitive: "des Maldives",
  continentSlug: "iles-oceanie", // TODO: verify continent (géographiquement Asie, océan Indien) regroupé ici avec les destinations îles/lagon
  blurb: "Baa, Noonu, Laamu, Ari, Vaavu",
  keywords: [
    "maldives",
    "atoll",
    "male",
    "hanifaru",
    "baa",
    "noonu",
    "laamu",
    "raie manta",
    "ocean indien",
  ],
  metaTitle: "Maldives, voyage sur mesure",
  metaDescription:
    "Voyage aux Maldives sur mesure : atolls de Baa, Noonu et Laamu, îles privées, raies manta. Itinéraire écrit par votre travel designer Exuma, conciergerie 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe aux Maldives",
      heading: "Les Maldives, une île, un récif, et l'eau tout autour",
      description:
        "L'archipel se découvre lagon par lagon. On choisit un atoll pour son corail, un autre pour son silence, et l'hydravion relie les deux. Le reste du voyage se passe pieds nus.",
      images: [
        {
          src: "/destination/maldives/hero-1.png",
          alt: "Lagon turquoise et villas sur pilotis d'un atoll des Maldives",
        },
        {
          src: "/destination/maldives/hero-2.png",
          alt: "Banc de sable découvert à marée basse dans l'atoll de Noonu",
        },
        {
          src: "/destination/maldives/hero-3.png",
          alt: "Hydravion amarré au ponton d'une île de l'océan Indien",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir aux Maldives ?",
      heading: "Stéphane, spécialiste des Maldives, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "stephane",
        // TODO: verify quote attribution
        quote:
          "Aux Maldives, tout le monde montre la même photo. Le vrai sujet, c'est le corail qui borde l'île et l'heure à laquelle l'hydravion se pose. C'est ce qui fait la différence entre un joli lagon et une semaine dont on parle encore des années après. Je passe l'essentiel de mon temps à choisir les îles qui tiennent cette promesse, et je les connais une par une.",
        role: "Travel Designer · Maldives",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Ouverture",
      heading: "La douceur de vivre au fil des lagons",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      columns: [
        "Un voyage aux Maldives commence par le choix d'un atoll. L'archipel s'étire du nord au sud dans l'océan Indien, et chaque atoll y dessine un anneau de corail autour d'un lagon clair. Les îles se traversent en quelques pas, des cocotiers et une plage qui en fait le tour, et l'eau reste agréable toute l'année. C'est un pays qui se vit au ras de la mer, dans une lumière que rien n'arrête.",
        "Le séjour s'organise ensuite atoll par atoll. On arrive à Malé, puis l'hydravion se pose devant l'île, toujours de jour. Baa abrite la baie de Hanifaru, où les raies manta se rassemblent une partie de l'année sous la protection de la réserve de biosphère. Noonu garde les grands lagons du nord et les adresses les plus discrètes du pays. Plus au sud, Laamu se partage entre un seul hôtel et une équipe de biologistes marins. Chaque étape a sa raison d'être, et c'est elle qui donne au séjour sa couleur.",
        "« La plus belle question à se poser avant de choisir son île, c'est de savoir ce que l'on verra en entrant dans l'eau depuis la plage. »",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/maldives/full-image.png",
        alt: "Vue aérienne d'un atoll des Maldives et de son récif corallien",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Atoll de Laamu",
      heading: "Un atoll pour un seul hôtel, et le lagon pour soi",
      theme: "light",
      paragraphs: [
        "Laamu est l'un des atolls les plus au sud de l'archipel, et un seul hôtel l'occupe. Cela se sent dès l'arrivée : le lagon reste calme d'un bout de la journée à l'autre, les allées sont en bois, le sable est resté du sable et personne ne porte de chaussures. Sur la pointe est, une vague droite casse sur le récif de juin à septembre. Elle s'appelle Yin Yang et les surfeurs se la partagent entre eux.",
        "Le laboratoire marin se visite le matin. Les biologistes veillent sur les herbiers et sur le corail, suivent les raies manta et soignent les tortues prises dans les filets. Rien n'est mis en scène : on regarde, on pose ses questions, et l'on repart avec le nom d'un récif à aller voir. Le soir, la lumière tombe d'un coup et l'on dîne les pieds dans le sable, avec le bruit du lagon pour seul fond.",
      ],
      images: [
        {
          src: "/destination/maldives/split-1.png",
          alt: "Ponton de bois et villas sur pilotis de l'atoll de Laamu aux Maldives",
        },
        {
          src: "/destination/maldives/split-2.png",
          alt: "Biologiste marin examinant une bouture de corail dans une pépinière",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/maldives/xp-hanifaru-1.png",
          alt: "Raies manta se rassemblant en surface dans la baie de Hanifaru, atoll de Baa",
        },
        right: {
          src: "/destination/maldives/xp-hanifaru-2.png",
          alt: "Nageur au masque et tuba observant une raie manta aux Maldives",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Nager au milieu des raies manta, à Hanifaru",
        columns: [
          "Hanifaru est une petite baie à l'est de l'atoll de Baa. Quand la marée et le courant se rejoignent, le plancton s'y rassemble et les raies manta arrivent, en file, la bouche grande ouverte. Le garde de la réserve donne son créneau à chaque bateau, et l'on entre dans l'eau au masque et au tuba, en surface, pour les regarder tourner sous soi.",
          "Nous vous y conduisons au petit matin, avant les bateaux venus des autres atolls. Le guide coupe le moteur à distance et demande le silence, parce qu'une manta qui entend un moteur redescend. Ensuite on se laisse glisser, sans nager vers elles : elles remontent d'elles-mêmes, passent tout près, et l'aile effleure presque la main. Le rassemblement dure de mai à novembre, et les plus beaux jours tombent autour des pleines lunes de la fin de l'été.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités aux Maldives",
      heading: "Ce qu'on fait, concrètement",
      description:
        "Trois moments ancrés dans un lieu et dans des personnes. Ni démonstration, ni programme : ce qui reste quand on retire le décor.",
      slugs: [
        "diner-banc-de-sable-noonu",
        "peche-dhoni-coucher-soleil",
        "atelier-corail-biologiste",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements aux Maldives",
      heading: "Où séjourner",
      description:
        "Trois façons d'habiter un atoll : la villa qui s'ouvre sur le ciel, la maison de maître au large, le camp de base marin. Le niveau se lit dans le texte, pas dans les étoiles.",
      slugs: ["soneva-jani", "cheval-blanc-randheli", "six-senses-laamu"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage aux Maldives",
      description:
        "Temps de vol, décalage, monnaie, formalités et saison : l'essentiel pour caler le séjour avant d'entrer dans le détail des atolls.",
      cta: { label: "Créer votre voyage", href: "/reserver" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Environ 9h50 en vol direct Paris-Malé. Avec une escale dans le Golfe, comptez plutôt 13 à 16 heures selon la connexion.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Malé vit en UTC+5 toute l'année : +4h sur Paris en hiver, +3h en été. Certains resorts appliquent leur propre heure, souvent +1h.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Le rufiyaa (MVR) est la monnaie locale, mais les resorts fonctionnent surtout en dollars américains. Les cartes passent partout.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Visa touristique accordé à l'arrivée. La déclaration IMUGA est obligatoire dans les 96 heures précédant l'arrivée, rien au départ.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin spécifique n'est généralement exigé depuis la France. Vaccinations courantes à jour recommandées.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "La saison sèche s'étend de décembre à avril. De mai à novembre, la mousson est plus humide et les raies manta se rassemblent.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "Le dhivehi est la langue nationale. L'anglais est largement utilisé dans les resorts et dans le tourisme.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Les températures restent proches de 26 à 32 °C toute l'année, et l'eau du lagon reste chaude en toute saison.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Un voyage aux Maldives se joue sur des détails qu'aucun site de réservation ne montre : le corail qui borde l'île, l'heure du vol en hydravion, le créneau réservé pour Hanifaru. Une seule personne s'en occupe, et elle reste la vôtre jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/maldives/bento-${
            ["map", "adresses", "hebergements", "conciergerie", "experiences"][i]
          }.png`,
          alt: [
            "Carte d'un itinéraire sur mesure entre les atolls des Maldives",
            "Banc de sable isolé au milieu d'un lagon maldivien",
            "Villa sur pilotis ouverte sur le lagon aux Maldives",
            "Concierge coordonnant un transfert en hydravion aux Maldives",
            "Nageurs observant des raies manta dans un lagon des Maldives",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables aux Maldives",
      heading: "Six atolls, et ce qu'il y a derrière",
      description:
        "Du nord au sud, chaque atoll a sa raison d'être : une baie où passent les raies manta, un lagon bordé de villas, un récif que longent les requins-baleines. Voici ceux autour desquels s'organisent la plupart de nos itinéraires.",
      cta: { label: "Créer votre voyage", href: "/reserver" },
      initialZoom: 6,
      places: [
        {
          title: "Malé et Hulhumalé",
          description:
            "La capitale tient sur une île entièrement bâtie, colorée et vivante. On y voit le marché aux poissons et la vieille mosquée de corail, puis le lagon d'où partent les hydravions.",
          image: {
            src: "/destination/maldives/map-male.png",
            alt: "Front de mer et immeubles colorés de Malé, capitale des Maldives",
          },
          coordinates: { lat: 4.1755, lng: 73.5093 }, // TODO: verify coords
        },
        {
          title: "Atoll de Baa, Hanifaru",
          description:
            "Une petite baie classée par l'UNESCO, où le courant rassemble le plancton et attire les raies manta de mai à novembre. On les regarde tourner au masque et au tuba.",
          image: {
            src: "/destination/maldives/map-baa.png",
            alt: "Raies manta rassemblées dans la baie de Hanifaru, atoll de Baa",
          },
          coordinates: { lat: 5.2917, lng: 73.15 }, // TODO: verify coords
        },
        {
          title: "Atoll de Noonu",
          description:
            "Les grands lagons du nord, où le bleu s'éclaircit à perte de vue. Des bancs de sable qui se découvrent à marée basse, et les adresses les plus discrètes du pays.",
          image: {
            src: "/destination/maldives/map-noonu.png",
            alt: "Lagon clair et banc de sable de l'atoll de Noonu aux Maldives",
          },
          coordinates: { lat: 5.85, lng: 73.35 }, // TODO: verify coords
        },
        {
          title: "Atoll de Laamu",
          description:
            "Loin au sud, un seul hôtel occupe tout l'atoll. Un laboratoire marin, des herbiers protégés, et la vague de Yin Yang qui casse sur le récif de juin à septembre.",
          image: {
            src: "/destination/maldives/map-laamu.png",
            alt: "Récif et pointe sableuse de l'atoll de Laamu aux Maldives",
          },
          coordinates: { lat: 1.9333, lng: 73.45 }, // TODO: verify coords
        },
        {
          title: "Ari Sud, Maamigili",
          description:
            "Une aire marine protégée où les requins-baleines longent le récif toute l'année. Ces géants paisibles se croisent au masque et au tuba, depuis un bateau de bois.",
          image: {
            src: "/destination/maldives/map-ari.png",
            alt: "Requin-baleine longeant le récif extérieur de l'atoll d'Ari Sud",
          },
          coordinates: { lat: 3.47, lng: 72.84 }, // TODO: verify coords
        },
        {
          title: "Atoll de Vaavu",
          description:
            "Le petit atoll que préfèrent les plongeurs, pour ses passes et ses tombants. À Fotteyo, les requins de récif remontent le courant à la tombée du jour.",
          image: {
            src: "/destination/maldives/map-vaavu.png",
            alt: "Passe et tombant corallien de l'atoll de Vaavu aux Maldives",
          },
          coordinates: { lat: 3.45, lng: 73.5 }, // TODO: verify coords
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage aux Maldives",
      description:
        "Huit conseils que l'on donne à nos voyageurs avant le départ. De quoi choisir son île en connaissance de cause, et profiter du lagon dès le premier matin.",
      cta: { label: "Créer votre voyage", href: "/reserver" },
      items: [
        {
          title: "Dans ma valise",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Un lycra anti-UV, des chaussures d'eau, et le reste du séjour se passe pieds nus.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                On passe une bonne partie du séjour dans l'eau, à plat, le dos au
                soleil. Un lycra à manches longues protège mieux que n'importe
                quelle crème et sèche presque aussitôt. Des chaussures d'eau
                pour marcher sur le récif à marée basse, et c'est à peu près
                tout : les îles se traversent pieds nus.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Crème solaire minérale uniquement. Les filtres chimiques
                blanchissent le corail et sont interdits dans plusieurs aires
                marines protégées. Nous le précisons sur chaque dossier.
              </p>
            </div>
          ),
        },
        {
          title: "L'hydravion vole de jour",
          cardEyebrow: "Arrivée",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le survol des atolls se fait à la lumière du jour, et c'est un spectacle.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les hydravions se posent à vue, entre le lever et le coucher du
                soleil. Le vol jusqu'à l'atoll devient donc un moment du voyage :
                on survole les lagons à basse altitude, et l'on voit apparaître
                les anneaux de corail les uns après les autres.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous calons l'arrivée sur un vol du matin quand c'est possible.
                Sinon, nous réservons une belle première nuit près de Malé, et
                vous partez pour l'atoll au petit jour.
              </p>
            </div>
          ),
        },
        {
          title: "Le bon rythme entre les atolls",
          cardEyebrow: "Rythme",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Un atoll, parfois deux : on prend ses marques et le séjour devient le vôtre.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le plaisir des Maldives vient de l'installation. On finit par
                connaître son récif, l'heure où la lumière change, le prénom de
                celui qui prépare le petit déjeuner. C'est ce qui rend le séjour
                reposant, et cela demande de rester.
              </p>
              <p>
                Nous construisons donc la plupart des voyages autour d'un seul
                atoll, et de deux lorsque le séjour est plus long : un lagon pour
                le calme, un second pour le corail ou les raies manta.
              </p>
            </div>
          ),
        },
        {
          title: "Le récif de l'île, avant tout",
          cardEyebrow: "Lagon",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Un récif à quelques palmes de la plage, et les journées se remplissent seules.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Sur les plus belles îles, le corail commence juste devant la
                plage : on entre dans l'eau avec un masque et l'on croise déjà
                les poissons-perroquets, les tortues et parfois une raie. Les
                photos ne montrent jamais cette différence, et c'est pourtant
                elle qui remplit la moitié des journées.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous vérifions l'état du corail et l'accès à l'eau depuis la
                plage avant de vous proposer une île.
              </p>
            </div>
          ),
        },
        {
          title: "Hanifaru se mérite",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "De mai à novembre, au masque et tuba, sur un créneau donné par un garde.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La baie se nage en surface, sans bouteille, et la réserve limite
                le nombre de bateaux pour laisser les raies tranquilles. Les
                rassemblements suivent la marée, et ils sont les plus beaux
                autour des pleines lunes de la fin de l'été.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous positionnons le séjour à Baa sur les fenêtres de marée
                favorables et réservons le créneau du matin, avant les bateaux
                venus des autres atolls.
              </p>
            </div>
          ),
        },
        {
          title: "Les îles habitées",
          cardEyebrow: "Usages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Pays musulman : épaules couvertes hors des hôtels, et pas d'alcool.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les Maldives appliquent la loi islamique. L'alcool ne se vend que
                dans les hôtels et sur les bateaux de croisière, jamais sur une
                île habitée. Le maillot de bain reste pour la plage privée, et
                l'on couvre épaules et genoux dans un village.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Une demi-journée sur une île habitée change la lecture du pays :
                l'école, l'atelier de charpentiers de dhoni, le terrain de
                volley du soir.
              </p>
            </div>
          ),
        },
        {
          title: "La dernière journée, sans plongée",
          cardEyebrow: "Plongée",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "On garde le dernier jour pour le lagon, et l'on repart reposé.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les centres demandent de laisser passer une journée entière entre
                la dernière bouteille et le vol du retour. C'est une bonne
                nouvelle : ce jour-là se passe au masque et au tuba, en surface,
                sur le récif de l'île.
              </p>
              <p>
                Les passes des atolls se plongent dans le courant et demandent un
                peu d'expérience. Nous vérifions avec le centre que les sites
                envisagés correspondent à votre niveau.
              </p>
            </div>
          ),
        },
        {
          title: "Budget et pension",
          cardEyebrow: "Budget",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La pension et le transfert en hydravion pèsent autant que l'hôtel.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Sur une île, on dîne là où l'on dort : la pension choisie
                représente donc une bonne part du budget, et le transfert en
                hydravion se règle en plus du séjour. Ce sont les deux lignes qui
                font la différence entre deux adresses de niveau comparable.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous chiffrons transferts et pension dès la première proposition,
                pour que vous compariez deux îles sur un budget complet.
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
      cta: { label: "Créer votre voyage", href: "/reserver" },
      testimonials: [
        {
          // TODO: replace with real testimonial
          quote:
            "Deux atolls en douze jours, et jamais l'impression de faire des transferts. Stéphane avait calé Hanifaru sur la bonne marée. Les mantas sont passées à un mètre, et nous étions le seul bateau.",
          image: {
            src: "/destination/maldives/hero-1.png",
            alt: "Portrait de Guillaume et Sophie", // TODO: verify
          },
          name: "Guillaume & Sophie", // TODO: verify
          role: "Voyage en couple, septembre 2025", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Avec trois enfants, on redoutait l'ennui d'une île. Ils ont passé la semaine dans la pépinière de corail avec le biologiste, et ils y retournaient tous les matins avant le petit déjeuner.",
          image: {
            src: "/destination/maldives/hero-2.png",
            alt: "Portrait de la famille Lambert", // TODO: verify
          },
          name: "Famille Lambert", // TODO: verify
          role: "Séjour en famille, février 2025", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Ce que j'ai apprécié, c'est de n'avoir rien à vérifier. Un seul interlocuteur, du premier appel au retour. Le dîner sur le banc de sable, seuls, valait le voyage à lui seul.",
          image: {
            src: "/destination/maldives/hero-3.png",
            alt: "Portrait de Nicolas", // TODO: verify
          },
          name: "Nicolas", // TODO: verify
          role: "Semaine de décompression, avril 2025", // TODO: verify
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
          question: "Quelle est la meilleure période pour partir aux Maldives ?",
          answer:
            "La saison sèche s'étend de décembre à avril : mer calme, ciel dégagé et belle visibilité sous l'eau. De mai à novembre, la mousson est plus humide, mais c'est aussi la période des raies manta à Hanifaru et des requins-baleines à Ari Sud. Chaque saison a donc son intérêt, et le choix se fait selon ce que vous voulez voir.",
        },
        {
          question: "Combien de temps dure le vol Paris-Maldives ?",
          answer:
            "Environ 9h50 en vol direct entre Paris et Malé, et de 13 à 16 heures avec une escale dans le Golfe selon la connexion. L'atoll se rejoint ensuite en hydravion, ou par un vol intérieur suivi d'un bateau rapide, toujours à la lumière du jour.",
        },
        {
          question: "Faut-il un visa pour les Maldives ?",
          answer:
            "Aucun visa à demander avant le départ : le visa touristique est accordé à l'arrivée, sur présentation d'un passeport valide et d'une réservation d'hébergement. Seule formalité en ligne, la déclaration IMUGA, obligatoire dans les 96 heures précédant l'arrivée. Rien n'est demandé au départ des Maldives.",
        },
        {
          question: "Quand voir les raies manta aux Maldives ?",
          answer:
            "À Hanifaru, dans l'atoll de Baa, de mai à novembre, avec les plus beaux rassemblements autour des pleines lunes de la fin de l'été. L'accès est encadré par la réserve de biosphère : nage en surface au masque et au tuba, nombre de bateaux limité, créneaux attribués par un garde. Nous positionnons le séjour sur les marées favorables.",
        },
        {
          question: "Les Maldives, est-ce adapté aux familles ?",
          answer:
            "Oui, à condition de choisir l'île. Les lagons peu profonds, un pays officiellement exempt de paludisme depuis 2015 et des expériences comme le bouturage de corail avec le biologiste résident conviennent bien aux enfants. Nous privilégions les îles avec un récif accessible depuis la plage et un transfert court, plutôt qu'un long trajet en hydravion.",
        },
        {
          question: "Quel budget prévoir pour un voyage aux Maldives ?",
          answer:
            "Le budget dépend surtout de trois lignes : l'île choisie, la pension et le transfert en hydravion, facturé par personne et par trajet en plus du séjour. Sur une île isolée, on ne dîne pas ailleurs, ce qui rend la pension déterminante. Votre travel designer chiffre l'ensemble dès la première proposition.",
        },
      ],
    },

    {
      type: "entityList",
      kind: "destination",
      background: "bg-background-soft",
      eyebrow: "Inspirations",
      heading: "Destinations similaires",
      description:
        "D'autres façons de faire un voyage autour d'un lagon, ou de l'associer à tout autre chose. À relier ou à comparer selon la saison.",
      slugs: ["seychelles", "polynesie", "kenya"],
    },
  ],
};
