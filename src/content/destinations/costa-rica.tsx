import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "costa-rica",
  name: "Costa Rica",
  placeKind: "country",
  country: "Costa Rica",
  genitive: "du Costa Rica",
  continentSlug: "ameriques",
  blurb: "Tortuguero, Arenal, Monteverde, Nicoya",
  keywords: [
    "costa-rica",
    "tortuguero",
    "arenal",
    "monteverde",
    "santa teresa",
    "nicoya",
    "papagayo",
    "guanacaste",
  ],
  metaTitle: "Costa Rica : Voyage sur mesure",
  metaDescription:
    "Voyage au Costa Rica sur mesure : canaux de Tortuguero, volcan Arenal, forêt de nuages de Monteverde, péninsule de Nicoya. Itinéraire écrit par Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe au Costa Rica",
      heading: "On ne traverse pas le Costa Rica, on s'y arrête",
      description:
        "Plus de trente parcs nationaux et réserves couvrent le pays. Les canaux de Tortuguero, le volcan Arenal, la forêt de nuages de Monteverde et les plages de Nicoya : quatre milieux qui se succèdent en quinze jours. Nous écrivons ces itinéraires pour que chaque étape existe vraiment.",
      images: [
        {
          src: "/destination/costa-rica/hero-1.webp",
          alt: "Canaux de Tortuguero bordés de forêt tropicale au Costa Rica",
        },
        {
          src: "/destination/costa-rica/hero-2.webp",
          alt: "Cône du volcan Arenal dégagé au-dessus de la forêt de La Fortuna",
        },
        {
          src: "/destination/costa-rica/hero-3.webp",
          alt: "Plage de Santa Teresa à marée basse sur la péninsule de Nicoya",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir au Costa Rica ?",
      heading:
        "Tainà, spécialiste du Costa Rica, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "taina",
        // TODO: reformulation du compte rendu d'éductour de Tainà (30 avril au 8 mai) — à faire valider par elle avant mise en ligne
        quote:
          "Ici, le haut de gamme ne se mesure pas au marbre de la salle de bains, mais à l'accès à la nature. Les meilleures adresses sont des écolodges posés dans leur environnement, avec une terrasse ouverte sur la canopée, un sentier privé vers une cascade et un guide naturaliste attaché à la maison. Elles comptent peu de chambres, et les plus belles se réservent longtemps à l'avance. Je construis ces voyages sur quinze jours, avec de vraies journées sans transfert : c'est ce qui sépare voir le Costa Rica de le vivre.",
        role: "Travel Designer · Costa Rica",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte du Costa Rica",
      heading: "Un pays organisé autour de ce qu'il protège",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      columns: [
        "Un voyage au Costa Rica commence par une donnée simple : plus de trente parcs nationaux et réserves couvrent le territoire. La première d'entre elles, Cabo Blanco, a été créée en 1963 à la pointe de la péninsule de Nicoya. Le pays n'a pas découvert la conservation avec le tourisme, il l'a précédée d'une génération.",
        "L'itinéraire habituel enchaîne quatre milieux qui n'ont rien en commun. Les canaux de Tortuguero, sur la côte caraïbe, ne se rejoignent qu'en bateau. Le volcan Arenal et les sources thermales de La Fortuna occupent le centre du pays. Monteverde, plus haut, tient dans une forêt de nuages où le quetzal se laisse observer une partie de l'année. Santa Teresa ferme le voyage sur le Pacifique, avec ses plages ouvertes et son ambiance de village de surf.",
        "Le reste dépend de ce qu'on cherche. Curú et le golfe de Nicoya pour la forêt sèche et les singes hurleurs, Papagayo pour les deux plus belles plages du nord-ouest, Turrialba et la finca d'Aquiares pour le café. Peu de pays réunissent une jungle, un cratère actif, une forêt de nuages et deux océans dans un même voyage.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/costa-rica/full-image.webp",
        alt: "Forêt de nuages du Costa Rica au lever du jour, canopée noyée de brume",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Costa Rica : canopée et eaux chaudes",
      heading: "La canopée le matin, les sources thermales le soir",
      theme: "light",
      paragraphs: [
        "Les ponts suspendus de La Fortuna se marchent à hauteur de cimes, une trentaine de mètres au-dessus du sol. C'est de là que la forêt se laisse voir : toucans, singes hurleurs, paresseux accrochés à une branche que personne ne remarque depuis le sentier. À Guanacaste, les tyroliennes du Skyline Tour traversent la forêt sèche d'un versant à l'autre. Au nord de la vallée centrale, les sentiers du parc national du volcan Poás mènent au bord d'un cratère en activité.", // TODO: verify hauteur des ponts suspendus de La Fortuna
        "Le soir, le pays change de registre. À Tabacón, l'eau chaude descend naturellement des flancs de l'Arenal et alimente des bassins étagés sous la forêt. Les lodges tiennent le même fil : piscines thermales privées, spa, yoga, potagers et sentiers menant à leurs propres cascades. Une matinée dans la canopée et une fin de journée dans l'eau chaude, sans quitter la même vallée.",
      ],
      images: [
        {
          src: "/destination/costa-rica/split-1.webp",
          alt: "Pont suspendu tendu dans la canopée au-dessus de la forêt de La Fortuna",
        },
        {
          src: "/destination/costa-rica/split-2.webp",
          alt: "Bassin de source thermale naturelle étagé sous la forêt au pied de l'Arenal",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/costa-rica/xp-aquiares-1.webp",
          alt: "Rangs de caféiers de la finca Aquiares sur les pentes du volcan Turrialba",
        },
        right: {
          src: "/destination/costa-rica/xp-aquiares-2.webp",
          alt: "Cerises de café fraîchement récoltées entre les mains d'un cueilleur, Aquiares",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "La finca d'Aquiares, à deux heures à l'est de San José",
        columns: [
          "Aquiares compte parmi les plantations de café les plus réputées du pays. Elle s'étend sur les pentes du volcan Turrialba, et le village s'est construit autour d'elle plutôt que l'inverse. La visite suit la chaîne complète : la cueillette à la main, le dépulpage, le séchage sur patios, puis la torréfaction et la dégustation.", // TODO: verify implantation sur les pentes du Turrialba et organisation du village
          "L'étape se combine avec un séjour au Pacuare, dans la même région. C'est le moment culturel du voyage, celui où l'on parle de rendement, de prix payé au producteur et de ce que la certification change concrètement. Rien d'une visite d'usine : on marche dans les rangs avec ceux qui les exploitent.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités au Costa Rica",
      heading: "Trois accès qui se négocient à l'avance",
      description:
        "Une sortie nocturne encadrée sur la plage de ponte des tortues vertes, une réserve privée ouverte à trois groupes par jour, un refuge protégé depuis 1983 au bord du golfe de Nicoya.",
      slugs: ["ponte-tortues-vertes", "reserve-nectandra", "refuge-curu"],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Où séjourner au Costa Rica",
      description:
        "Des casitas les pieds dans le sable à Santa Teresa, une villa privée de deux hectares invisible depuis la route, un resort posé sur un isthme du Guanacaste. Trois registres, une même exigence de service.",
      slugs: ["nantipa", "pasha-santa-teresa", "four-seasons-papagayo"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage au Costa Rica",
      description:
        "Vol, décalage horaire, monnaie, formalités et saisons : les éléments à connaître pour caler les dates d'un voyage au Costa Rica.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Paris rejoint San José (SJO) via Amsterdam avec KLM et Air France : 11 h 30 à l'aller, 10 h 30 au retour. Les correspondances fonctionnent aussi depuis la province.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Huit heures de retard sur Paris en été, sept en hiver. Le pays ne pratique pas le changement d'heure. Le décalage se digère bien à l'aller, moins au retour.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Colón costaricien (CRC). Le dollar américain est accepté dans la plupart des hôtels, lodges et activités touristiques. Prévoir des espèces en petites coupures pour les pourboires et les villages.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Pas de visa pour les ressortissants français : le passeport suffit. Il doit être valide pendant toute la durée du séjour, et un billet de sortie du territoire peut être demandé à l'arrivée.", // TODO: verify durée de validité exigée du passeport
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucune vaccination obligatoire depuis l'Europe. Le certificat de fièvre jaune est exigé en cas d'arrivée depuis un pays endémique d'Amérique du Sud ou d'Afrique. Vaccins universels à jour recommandés.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "De décembre à avril pour la saison sèche, la plus stable côté Pacifique. De juillet à octobre pour la ponte des tortues vertes, avec un pic en juillet et août. Mai et juin restent praticables et bien moins fréquentés.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "Espagnol. L'anglais est compris dans les zones touristiques et les établissements haut de gamme, beaucoup moins ailleurs. Un guide francophone accompagne l'ensemble de l'itinéraire.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Tropical, de 24 à 32 °C sur les deux côtes toute l'année. Monteverde et les hauteurs restent entre 15 et 22 °C, souvent dans la brume. Saison verte de mai à novembre, averses en fin de journée.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Chaque dossier Costa Rica mobilise plusieurs expertises. Un interlocuteur unique en assure la coordination et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/costa-rica/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.webp`,
          alt: [
            "Itinéraire sur mesure au Costa Rica entre Tortuguero, Arenal et Nicoya",
            "Adresses confidentielles au Costa Rica : réserves privées et villas fermées",
            "Hébergements au Costa Rica : écolodges et villas privées de Santa Teresa",
            "Conciergerie privée 24/7 pour un voyage au Costa Rica",
            "Expériences immersives au Costa Rica : tortues, forêt de nuages et café",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables au Costa Rica",
      heading: "Six étapes, de la côte caraïbe au Pacifique nord",
      description:
        "Des canaux de Tortuguero à la péninsule de Papagayo, six territoires que quinze jours permettent d'enchaîner sans passer ses journées sur la route.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      initialZoom: 7,
      places: [
        {
          title: "Tortuguero, sur la côte caraïbe",
          description:
            "Le village et le parc ne sont accessibles qu'en bateau, par un réseau de canaux tracé dans la jungle. Singes, paresseux et oiseaux s'observent depuis l'eau, moteur coupé, tôt le matin.",
          image: {
            src: "/destination/costa-rica/map-tortuguero.webp",
            alt: "Canal de Tortuguero au petit matin, forêt dense sur les deux rives",
          },
          // TODO: verify coords
          coordinates: { lat: 10.5432, lng: -83.5041 },
        },
        {
          title: "La Fortuna et le volcan Arenal",
          description:
            "La région la plus connue du pays, et pour de bonnes raisons : le cône parfait de l'Arenal, les sources thermales qui descendent de ses flancs et les ponts suspendus tendus dans la canopée.",
          image: {
            src: "/destination/costa-rica/map-arenal.webp",
            alt: "Volcan Arenal vu depuis les sources thermales de La Fortuna, Costa Rica",
          },
          // TODO: verify coords
          coordinates: { lat: 10.4632, lng: -84.7033 },
        },
        {
          title: "Monteverde et la forêt de nuages",
          description:
            "À 1 400 mètres, la forêt reste dans la brume une bonne partie de la journée. L'air y est frais, la lumière basse, et le quetzal s'observe entre février et mai autour des arbres à avocats sauvages.",
          image: {
            src: "/destination/costa-rica/map-monteverde.webp",
            alt: "Pont suspendu dans la canopée de la forêt de nuages de Monteverde",
          },
          // TODO: verify coords et altitude
          coordinates: { lat: 10.3, lng: -84.8 },
        },
        {
          title: "Le golfe de Nicoya et le refuge de Curú",
          description:
            "Trente minutes de bateau depuis la marina d'Ocean Marina. Une ancienne exploitation agricole devenue réserve privée en 1983, où la forêt sèche descend jusqu'à la plage.",
          image: {
            src: "/destination/costa-rica/map-curu.webp",
            alt: "Plage et forêt sèche du refuge de Curú dans le golfe de Nicoya",
          },
          // TODO: verify coords
          coordinates: { lat: 9.7833, lng: -84.9333 },
        },
        {
          title: "Santa Teresa, pointe de Nicoya",
          description:
            "Le village s'étire le long de plages ouvertes sur le Pacifique, dans une ambiance de bord de mer sans façon. Le spot de surf a fait sa réputation, les couchers de soleil font le reste.",
          image: {
            src: "/destination/costa-rica/map-santa-teresa.webp",
            alt: "Surfeurs à contre-jour sur la plage de Santa Teresa au coucher du soleil",
          },
          // TODO: verify coords
          coordinates: { lat: 9.6433, lng: -85.1669 },
        },
        {
          title: "La péninsule de Papagayo",
          description:
            "Le Guanacaste concentre les adresses les plus établies du pays, sur une côte découpée en baies protégées. Les plages y sont baignables toute l'année, et le soleil y est le plus fiable du Costa Rica.",
          image: {
            src: "/destination/costa-rica/map-papagayo.webp",
            alt: "Baie protégée de la péninsule de Papagayo dans le Guanacaste, Costa Rica",
          },
          // TODO: verify coords
          coordinates: { lat: 10.6333, lng: -85.6667 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage au Costa Rica",
      description:
        "Huit repères rapportés du terrain : ce qu'il faut viser, quand partir, et ce qui fait la différence d'une adresse à l'autre.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          title: "Quinze jours pour que chaque étape existe",
          cardEyebrow: "Itinéraire",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Quatre milieux à enchaîner, deux nuits minimum par étape. C'est le format qui laisse le temps d'en profiter",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le Costa Rica réunit quatre milieux très différents sur peu de
                kilomètres : la jungle caraïbe de Tortuguero, la région
                volcanique d&apos;Arenal, la forêt de nuages de Monteverde et
                les plages du Pacifique. Une quinzaine de jours permet de les
                enchaîner sans se presser.
              </p>
              <p>
                Nous comptons deux nuits minimum par étape. C&apos;est ce qui
                laisse la place à une matinée d&apos;observation, un après-midi
                libre et une vraie soirée sur place, plutôt qu&apos;à un
                passage.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                L&apos;itinéraire réserve au moins deux journées entières sans
                transfert, généralement à Santa Teresa et dans la région
                d&apos;Arenal. Les liaisons se font en bateau ou en vol
                intérieur chaque fois que c&apos;est possible.
              </p>
            </div>
          ),
        },
        {
          title: "Les ponts suspendus et les tyroliennes",
          cardEyebrow: "Aventure",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La canopée se marche à trente mètres du sol. C'est de là que la faune se laisse voir",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les ponts suspendus de La Fortuna traversent la canopée à
                hauteur de cimes. Depuis le sentier, la forêt est un mur vert ;
                depuis les passerelles, elle devient lisible. Toucans, singes
                hurleurs et paresseux se repèrent dans le tiers supérieur des
                arbres, là où ils passent leur vie.
              </p>
              <p>
                À Guanacaste, les tyroliennes du Skyline Tour franchissent la
                forêt sèche d&apos;un versant à l&apos;autre. Plus au sud, les
                sentiers du parc national du volcan Poás mènent au bord
                d&apos;un cratère en activité, et la Mystical Hike longe une
                rivière jusqu&apos;à une cascade que l&apos;on atteint à pied.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Les sorties se placent au premier créneau du matin, avant les
                groupes, avec un guide naturaliste privé. C&apos;est aussi
                l&apos;heure où la faune est la plus active.
              </p>
            </div>
          ),
        },
        {
          title: "Ce que veut dire le haut de gamme ici",
          cardEyebrow: "Hébergement",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Des écolodges posés dans leur environnement. Le confort se mesure à l'emplacement et à l'accès",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les meilleures adresses du pays sont des écolodges construits
                dans leur environnement, avec une démarche écoresponsable
                assumée. Le confort s&apos;y lit ailleurs que dans le nombre
                d&apos;étoiles : une terrasse ouverte sur la canopée, une
                piscine thermale privée, un sentier qui descend vers sa propre
                cascade, un guide naturaliste attaché à la maison.
              </p>
              <p>
                C&apos;est le vrai différenciateur, et il ne se lit pas sur une
                grille de classement. Une villa entière apporte l&apos;autre
                réponse : à Santa Teresa, deux hectares fermés, cinq piscines,
                un chef privé et un majordome pour une seule famille.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous ne retenons que les maisons dont l&apos;emplacement fait la
                valeur. Une visite du terrain précède chaque référencement.
              </p>
            </div>
          ),
        },
        {
          title: "Les meilleures adresses partent tôt",
          cardEyebrow: "Hébergement",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Une trentaine de chambres dans les plus grands lodges, parfois moins de dix. Les dates se posent des mois à l'avance",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                C&apos;est la contrepartie du modèle : les lodges haut de gamme
                du Costa Rica sont petits. Les plus grands affichent une
                trentaine d&apos;unités, certains moins de dix. Cette échelle
                fait leur intérêt, et leur rareté.
              </p>
              <p>
                De décembre à avril, ces capacités se remplissent très en
                amont. Ouvrir le dossier tôt, c&apos;est choisir les adresses
                plutôt que composer avec ce qui reste disponible.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous travaillons les départs de haute saison six à neuf mois à
                l&apos;avance et posons des options fermes dès l&apos;accord sur
                l&apos;itinéraire.
              </p>
            </div>
          ),
        },
        {
          title: "Les sources thermales de l'Arenal",
          cardEyebrow: "Bien-être",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "De l'eau chaude qui descend naturellement des flancs du volcan, dans des bassins étagés sous la forêt",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                À Tabacón, l&apos;eau chaude ne vient d&apos;aucune
                installation : elle descend des flancs de l&apos;Arenal et
                alimente une succession de bassins creusés sous la forêt. On
                remonte le courant de l&apos;un à l&apos;autre, à la nuit
                tombée, sous la canopée.
              </p>
              <p>
                Plusieurs maisons de la région disposent de leur propre source.
                À Nayara Springs, chaque villa a sa piscine privée alimentée en
                eau thermale. C&apos;est la différence entre partager les
                bassins publics et avoir la sienne au pied de la chambre.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous privilégions les lodges alimentés par leur propre source, et
                réservons les bassins de Tabacón en fin de journée, quand les
                excursionnistes sont repartis.
              </p>
            </div>
          ),
        },
        {
          title: "La saison des tortues",
          cardEyebrow: "Faune",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Ponte des tortues vertes de juillet à octobre, avec un pic en juillet et août",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La ponte des tortues vertes s&apos;observe principalement à
                Tortuguero, sur la côte caraïbe, et sur la côte pacifique sud.
                La période s&apos;étend de juillet à octobre, avec les meilleures
                chances en juillet et août.
              </p>
              <p>
                La sortie a lieu de nuit, en groupe restreint, avec un guide
                agréé. Pas de lampe blanche, pas de photo au flash : la lumière
                désoriente les femelles et les nouveau-nés. C&apos;est une
                observation encadrée, pas un spectacle, et c&apos;est ce qui en
                fait la force.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Le guide et le créneau sont réservés à l&apos;avance, en groupe
                privé. Les nuits proches de la pleine lune, où la plage reste
                claire, sont écartées du calage des dates.
              </p>
            </div>
          ),
        },
        {
          title: "Le cratère du Poás au lever du jour",
          cardEyebrow: "Volcans",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "L'un des cratères actifs les plus accessibles au monde. Il se dégage tôt le matin",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le parc national du volcan Poás permet de marcher jusqu&apos;au
                belvédère qui surplombe directement le cratère, à quelques
                centaines de mètres du lac acide et des fumerolles. Peu de
                volcans actifs se regardent d&apos;aussi près sans équipement.
              </p>
              <p>
                La couverture nuageuse se referme dans la matinée : le créneau à
                viser est le premier de la journée. L&apos;accès se fait par
                réservation horaire, ce qui limite le nombre de visiteurs
                présents en même temps.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Le premier créneau est réservé à l&apos;avance, avec un départ
                avant l&apos;aube depuis la vallée centrale. La journée se
                prolonge ensuite vers les cascades de Bajos del Toro.
              </p>
            </div>
          ),
        },
        {
          title: "Guide francophone et véhicule privé",
          cardEyebrow: "Sur place",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Un guide et un chauffeur sur toute la durée du séjour, pas un prestataire différent par étape",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Un guide naturaliste francophone attaché à l&apos;ensemble du
                séjour change la nature du voyage. C&apos;est lui qui repère le
                paresseux à trente mètres, qui reconnaît le chant du quetzal et
                qui explique pourquoi ce pays a protégé un quart de son
                territoire.
              </p>
              <p>
                Le véhicule est privatisé sur toute la durée, avec le même
                chauffeur du premier au dernier jour. Ce sont eux qui font le
                lien entre les étapes, et cette continuité compte autant que les
                adresses.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous travaillons avec un nombre restreint de guides
                francophones, réservés dès la confirmation du dossier.
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
            "Le premier matin à Tortuguero, le guide a coupé le moteur au milieu d'un canal et nous a montré un paresseux à trente mètres. Nos enfants ne l'auraient jamais repéré seuls. Et pas un transfert à gérer de tout le séjour.",
          image: {
            src: "/destination/costa-rica/hero-1.webp",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Costa Rica en famille, février 2026", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "La réserve privée avec les propriétaires reste le moment le plus fort. Nous étions six, ils ont marché avec nous toute la matinée. Le déjeuner était simple et excellent.",
          image: {
            src: "/destination/costa-rica/hero-2.webp",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Costa Rica, avril 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "La villa à Santa Teresa est invisible depuis la route, et le chef composait ses menus avec ce que les enfants avaient envie de goûter. On a surfé le matin, marché dans la forêt sèche l'après-midi, dîné les pieds dans le sable.",
          image: {
            src: "/destination/costa-rica/hero-3.webp",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Nicoya et Papagayo, janvier 2026", // TODO: replace with real testimonial
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
          question: "Quelle est la meilleure période pour partir au Costa Rica ?",
          answer:
            "De décembre à avril pour la saison sèche, la plus stable, en particulier côté Pacifique. De juillet à octobre pour la ponte des tortues vertes, avec un pic en juillet et août. Mai et juin sont un bon compromis : la végétation est dense, les averses tombent en fin de journée et la fréquentation reste faible. Septembre et octobre sont les mois les plus pluvieux côté Pacifique.",
        },
        {
          question: "Combien de temps dure le vol Paris-Costa Rica ?",
          answer:
            "Comptez 11 h 30 à l'aller et 10 h 30 au retour, via Amsterdam, avec KLM et Air France. Les correspondances fonctionnent également depuis la province. Un transfert de 1 à 4 heures s'ajoute ensuite selon la première étape de l'itinéraire.",
        },
        {
          question: "Faut-il un visa pour aller au Costa Rica ?",
          answer:
            "Non. Les ressortissants français n'ont besoin que d'un passeport valide pour entrer au Costa Rica en séjour touristique. Un billet de sortie du territoire peut être demandé à l'arrivée. Aucune vaccination n'est obligatoire depuis l'Europe : le certificat de fièvre jaune n'est exigé qu'en cas d'arrivée depuis un pays endémique.",
        },
        {
          question: "Que faire au Costa Rica en 15 jours ?",
          answer:
            "Une nuit à San José à l'arrivée, deux nuits à Tortuguero pour les canaux et la faune, trois nuits dans la région d'Arenal avec le volcan Poás, les sources thermales et les ponts suspendus, deux nuits à Monteverde pour la forêt de nuages, puis quatre nuits à Santa Teresa sur la péninsule de Nicoya. Les deux derniers jours servent au retour vers la vallée centrale ou à une extension balnéaire.",
        },
        {
          question: "Le Costa Rica est-il adapté aux familles ?",
          answer:
            "Oui, c'est même l'un de ses points forts. La faune s'observe partout, y compris depuis la terrasse du lodge, et les activités d'aventure sont accessibles dès l'enfance : ponts suspendus, tyroliennes, sorties en bateau dans les canaux, bassins thermaux. Les lodges savent recevoir plusieurs générations, et les villas privées entières permettent de réunir toute la famille sous un même toit avec un chef sur place.",
        },
        {
          question: "Quel budget prévoir pour un voyage au Costa Rica ?",
          answer:
            "Un voyage au Costa Rica sur mesure avec Exuma, sur quinze jours avec guide francophone privé, véhicule privatisé et lodges haut de gamme, se situe généralement entre 6 000 et 12 000 € par personne, hors vols internationaux. Les villas privées entières et les resorts du Guanacaste font monter cette fourchette. Les disponibilités de haute saison se réservent six à neuf mois à l'avance.",
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
        "D'autres façons de parcourir les Amériques, entre forêt, littoral et grands espaces. Trois prolongements possibles après un premier voyage au Costa Rica.",
      // TODO: les pages argentine et mexique n'existent pas encore. Le rendu filtre
      // les slugs inconnus, elles apparaîtront automatiquement à leur création.
      slugs: ["rio-de-janeiro", "argentine", "mexique"],
    },
  ],
};
