import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "bresil",
  name: "Brésil",
  placeKind: "country",
  country: "Brésil",
  genitive: "du Brésil",
  continentSlug: "ameriques",
  blurb: "Les Lençóis, Salvador, Iguaçu, le Pantanal",
  keywords: [
    "bresil",
    "lencois maranhenses",
    "atins",
    "salvador de bahia",
    "iguacu",
    "pantanal",
    "amazonie",
    "maranhao",
  ],
  metaTitle: "Brésil : Voyage sur mesure",
  metaDescription:
    "Voyage au Brésil sur mesure : Lençóis Maranhenses, Salvador de Bahia, chutes d'Iguaçu, Pantanal. Itinéraire écrit par votre travel designer Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe au Brésil",
      heading: "Traversez le Brésil, de Bahia au Maranhão",
      description:
        "On croit le connaître, et il se dévoile ailleurs. Il faut monter une dune pour découvrir des lagunes d'eau tiède, s'asseoir un soir dans le Pelourinho, entendre Iguaçu bien avant de la voir. Chaque étape appelle la suivante, et nous en écrivons l'ordre avec vous.",
      images: [
        {
          src: "/destination/bresil/hero-1.png",
          alt: "Dunes blanches et lagunes turquoise des Lençóis Maranhenses au Brésil",
        },
        {
          src: "/destination/bresil/hero-2.png",
          alt: "Façades colorées du Pelourinho à Salvador de Bahia en fin de journée",
        },
        {
          src: "/destination/bresil/hero-3.png",
          alt: "Rideau d'eau des chutes d'Iguaçu vu depuis la passerelle brésilienne",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Notre rôle dans ce voyage",
      heading: "Un seul interlocuteur, du premier échange jusqu'au retour",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "taina",
        // TODO: verify quote attribution
        quote:
          "J'aime le Brésil pour ses paysages, et encore davantage pour ceux qui y vivent. Ici, on vous prend par le bras, on vous fait goûter, on vous raconte, et une journée prévue pour deux heures en dure six. Le pilote de 4×4 du Maranhão, la cuisinière de Salvador, le pisteur du Pantanal : chacun a sa façon de vous ouvrir sa région. Je passe l'essentiel de mon temps à choisir ces personnes-là, parce que ce sont elles qui font le voyage.",
        role: "Travel Designer · Brésil",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Ouverture",
      heading: "De l'eau, de la forêt et du sable à perte de vue",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      columns: [
        "Un voyage au Brésil commence par une leçon d'échelle. Un fleuve si large que l'on n'en voit pas l'autre rive. Des chutes que l'on entend gronder bien avant d'arriver. Des dunes qui se remplissent d'eau douce et deviennent, quelques mois par an, un désert de lagunes tièdes. Des plages qui n'en finissent pas.",
        "Au milieu de tout cela vivent des jaguars, des loutres géantes, des aras et des dauphins roses, que l'on approche ici plus facilement que partout ailleurs. Et à chaque étape, une ville, une table, une musique qui rappellent que ce pays sait aussi très bien recevoir.",
        "« Le Brésil ne se raconte pas, il se mesure une fois sur place. »",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/bresil/full-image.png",
        alt: "Lagunes d'eau douce entre les dunes des Lençóis Maranhenses, Brésil",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Salvador, la ville haute et la ville basse",
      heading: "L'or des églises et les tambours du soir",
      theme: "light",
      paragraphs: [
        "Salvador a été la capitale du pays bien avant Rio et Brasília, et elle en a gardé les manières. La ville se déploie sur deux niveaux, le port en bas, la vieille ville en haut, reliés par un ascenseur public que tout le monde emprunte. On débouche en haut sur les façades colorées du Pelourinho.",
        "Dans l'église São Francisco, le bois sculpté disparaît sous l'or à la feuille, du sol jusqu'au plafond. Un peu plus loin, une baiana en robe blanche fait frire des acarajés à l'huile de palme, à la place qu'occupait sa mère avant elle. Quand le soir tombe, les répétitions de percussions démarrent dans les ruelles et se prolongent une bonne partie de la nuit.",
        "On repart d'ici avec ce rythme dans la tête.",
      ],
      images: [
        {
          src: "/destination/bresil/split-1.png",
          alt: "Baiana en robe blanche préparant des acarajés dans une rue de Salvador",
        },
        {
          src: "/destination/bresil/split-2.png",
          alt: "Intérieur doré à la feuille de l'église São Francisco de Salvador",
        },
      ],
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités au Brésil",
      heading: "Les lagunes, les chutes, la voile et les jaguars",
      description:
        "Ces quatre moments donnent au voyage sa colonne vertébrale. On atteint les lagunes du Maranhão quand elles n'appartiennent encore à personne, on entre dans le parc d'Iguaçu avant son ouverture, on navigue à la voile dans la baie de Tous-les-Saints, et l'on approche les jaguars du Pantanal à quelques mètres.",
      slugs: [
        "lagunes-lencois-aube",
        "iguacu-chutes-aube",
        "saveiro-baie-tous-les-saints",
        "pistage-jaguars-pantanal",
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/bresil/xp-lencois-1.png",
          alt: "4×4 sur la plage d'Atins au lever du jour, à l'entrée des Lençóis",
        },
        right: {
          src: "/destination/bresil/xp-lencois-2.png",
          alt: "Baigneur seul dans une lagune des Lençóis Maranhenses au petit matin",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Les lagunes des Lençóis avant tout le monde",
        columns: [
          "Le 4×4 quitte Atins au petit matin, par la plage tant que la marée le permet, puis par une piste de sable jusqu'au pied des dunes. On gravit les derniers mètres à pied, on bascule de l'autre côté, et les lagunes apparaissent jusqu'à l'horizon. L'eau y est douce et tiède comme un bain. Il n'y a personne.",
          "Vous aurez la matinée pour vous seuls, et vous redescendrez vers la mer avant que le premier véhicule n'apparaisse à l'horizon. Le petit-déjeuner attend sur le sable, à l'ombre d'une paillote de pêcheurs : tapioca, fruits, café. Nous vous y conduisons avant le lever du jour, parce que c'est à cette heure-là que cet endroit se donne vraiment.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements au Brésil",
      heading: "Où séjourner",
      description:
        "Trois maisons choisies pour l'endroit où elles se trouvent : à la lisière des dunes du Maranhão, à l'intérieur du parc d'Iguaçu, et au-dessus de la baie de Tous-les-Saints.",
      slugs: ["vila-guara", "belmond-das-cataratas", "fasano-salvador"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Avant le départ",
      heading: "Préparer votre voyage au Brésil",
      description:
        "Temps de vol, décalage, monnaie, formalités et saisons : l'essentiel pour caler les dates avant d'écrire l'itinéraire.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Environ 12 heures en vol direct depuis Paris vers São Paulo, 11 heures vers Rio. Comptez un vol intérieur de 2 à 3 heures pour rejoindre São Luís, Salvador, Iguaçu ou le Pantanal.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          // TODO: verify
          description:
            "4 à 5 heures de retard sur la France selon la saison. Le décalage se rattrape en une journée, et les vols de nuit à l'aller le rendent presque indolore.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          // TODO: verify
          description:
            "Le réal brésilien, autour de 6 réaux pour 1 euro. Les cartes passent partout, y compris chez les petits commerçants. L'espèce reste utile à Atins et dans le Pantanal.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Aucun visa pour les ressortissants français en séjour touristique de moins de 90 jours. Passeport valable pendant toute la durée du séjour et billet de retour demandés à l'entrée.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          // TODO: verify
          description:
            "Aucun vaccin obligatoire depuis la France. La vaccination contre la fièvre jaune est fortement recommandée pour l'Amazonie, le Pantanal et la région d'Iguaçu, à faire au moins dix jours avant le départ.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "Deux saisons se détachent. De juin à septembre, les lagunes sont pleines et le Pantanal concentre sa faune. En février ou mars, Rio danse pour le carnaval.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "Le portugais du Brésil. L'anglais reste peu répandu en dehors de l'hôtellerie et des guides. Nous prévoyons des accompagnants francophones ou anglophones sur chaque étape.",
        },
        {
          iconName: "sun",
          title: "Climat",
          // TODO: verify
          description:
            "Tropical sur presque tout le territoire, 25 à 32 degrés toute l'année dans le Nordeste. Saison des pluies de janvier à mai au nord, hivers doux et secs de juin à septembre au sud.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Brésil. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/bresil/bento-${
            ["map", "adresses", "hebergements", "conciergerie", "experiences"][i]
          }.png`,
          alt: [
            "Carte d'un itinéraire sur mesure au Brésil",
            "Ruelle pavée du Pelourinho aux façades colorées",
            "Bangalô de bois ouvert sur les dunes à Atins",
            "Concierge coordonnant un vol intérieur au Brésil",
            "Pirogue remontant un bras du rio Negro dans le Pantanal",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Que voir au Brésil",
      heading: "Les six régions que nous relions le plus souvent",
      description:
        "Les Lençóis, Salvador, Iguaçu, le Pantanal, l'Amazonie et Rio composent la plupart de nos itinéraires. Chacune a sa saison et son tempérament, et l'on retient celles qui se répondent le mieux.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      initialZoom: 4,
      places: [
        {
          title: "Lençóis Maranhenses",
          description:
            "Un immense champ de dunes blanches qui se remplit d'eau de pluie pendant l'hiver austral. On y entre par le village d'Atins, en 4×4, au lever du jour.",
          image: {
            src: "/destination/bresil/map-lencois.png",
            alt: "Lagunes entre les dunes du parc des Lençóis Maranhenses",
          },
          coordinates: { lat: -2.4867, lng: -43.1281 }, // TODO: verify coords
        },
        {
          title: "Salvador de Bahia",
          description:
            "La première capitale du pays, restée son cœur afro-brésilien. On y trouve le Pelourinho, l'or de São Francisco, les tambours du soir et la cuisine à l'huile de palme.",
          image: {
            src: "/destination/bresil/map-salvador.png",
            alt: "Vue du Pelourinho et de la baie de Tous-les-Saints à Salvador",
          },
          coordinates: { lat: -12.9711, lng: -38.5108 }, // TODO: verify coords
        },
        {
          title: "Les chutes d'Iguaçu",
          description:
            "La forêt s'ouvre d'un coup sur des dizaines de cascades, à la frontière argentine. Le côté brésilien offre le panorama, le côté argentin mène au pied de la Garganta do Diabo.",
          image: {
            src: "/destination/bresil/map-iguacu.png",
            alt: "Panorama des chutes d'Iguaçu depuis le côté brésilien",
          },
          coordinates: { lat: -25.6953, lng: -54.4367 }, // TODO: verify coords
        },
        {
          title: "Le Pantanal",
          description:
            "La plus grande zone humide de la planète. Quand la saison sèche s'installe, les jaguars descendent sur les berges et se laissent observer depuis une barque.",
          image: {
            src: "/destination/bresil/map-pantanal.png",
            alt: "Jaguar sur une berge du Pantanal au Brésil",
          },
          coordinates: { lat: -19.9556, lng: -56.3211 }, // TODO: verify coords
        },
        {
          title: "L'Amazonie et le rio Negro",
          description:
            "En amont de Manaus, le fleuve s'élargit en un archipel d'îles couvertes de forêt. Ses eaux sombres portent peu de moustiques, ce qui rend les nuits douces.",
          image: {
            src: "/destination/bresil/map-amazonie.png",
            alt: "Eaux noires du rio Negro et forêt inondée de l'archipel d'Anavilhanas",
          },
          coordinates: { lat: -3.136, lng: -59.98 }, // TODO: verify coords
        },
        {
          title: "Rio de Janeiro",
          description:
            "La baie de Guanabara, les morros, Ipanema et Santa Teresa. Rio se glisse en début ou en fin de séjour, et la ville a sa propre page chez nous.",
          image: {
            src: "/destination/bresil/map-rio.png",
            alt: "Pain de Sucre et baie de Guanabara à Rio de Janeiro",
          },
          coordinates: { lat: -22.9519, lng: -43.2105 }, // TODO: verify coords
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Ce que les guides ne disent pas",
      heading: "Les conseils de nos experts pour votre voyage au Brésil",
      description:
        "Huit observations de terrain qui décident souvent d'une date, d'une étape ou d'une façon de voyager.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          title: "Les lagunes se remplissent de juin à septembre",
          cardEyebrow: "Saison",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "C'est la pluie de l'été austral qui les forme, et elles atteignent leur plus beau niveau au cœur de l'hiver.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les lagunes ne viennent pas d'une rivière mais de la pluie, qui
                tombe de janvier à mai et met des semaines à remonter entre les
                dunes. Les bassins sont donc au plus haut en juin et juillet,
                encore superbes en août, et s'assèchent doucement à partir de la
                mi-septembre.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous plaçons toujours l'étape du Maranhão en premier dans le
                calendrier, puis nous construisons le reste de l'itinéraire
                autour d'elle.
              </p>
            </div>
          ),
        },
        {
          title: "Atins, le village d'où l'on part",
          cardEyebrow: "Base",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Un village de pêcheurs aux rues de sable, posé tout près des premières lagunes.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Atins se trouve de l'autre côté du rio Preguiças, à une
                quarantaine de minutes des premières lagunes. On y arrive en
                bateau ou en 4×4 par la plage, et l'on y vit au rythme du
                village : les rues sont en sable, les tables du soir se
                réservent le matin même.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Trois nuits sur place, avec deux sorties dans les dunes au lever
                du jour. C'est de là que partent nos 4×4, bien avant les convois
                organisés depuis Barreirinhas.
              </p>
            </div>
          ),
        },
        {
          title: "Dormir à l'intérieur du parc d'Iguaçu",
          cardEyebrow: "Accès",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Le portail se referme en fin d'après-midi, et les chutes reviennent aux clients de l'hôtel.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Un seul hôtel se trouve derrière la barrière du parc national,
                côté brésilien. Tout se joue sur l'horaire : le sentier des
                chutes s'ouvre à ses clients avant l'arrivée des cars et rouvre
                après leur départ, quand la lumière traverse la brume et que les
                coatis reviennent sur le chemin.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Deux nuits sur place, une journée côté brésilien pour le
                panorama, une demi-journée côté argentin pour la Garganta do
                Diabo. Nous préparons le passage de frontière à l'avance.
              </p>
            </div>
          ),
        },
        {
          title: "Voir les jaguars du Pantanal",
          cardEyebrow: "Faune",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Dans cette plaine ouverte, les animaux se laissent voir plutôt qu'entendre.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le Pantanal est une plaine inondable où la végétation reste
                basse. En saison sèche, la faune se rassemble autour de l'eau
                qui subsiste et l'on observe à découvert les jaguars, les
                caïmans, les loutres géantes et les aras, depuis un 4×4 ou
                depuis une barque.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous programmons cette étape entre juillet et octobre, sur trois
                nuits, avec des sorties au lever et au coucher du soleil, qui
                sont les heures où les jaguars se montrent.
              </p>
            </div>
          ),
        },
        {
          title: "Les distances se franchissent en avion",
          cardEyebrow: "Logistique",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Le pays est un continent : chaque changement de région se fait par les airs.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Passer du Maranhão à Bahia ou du Pantanal à Iguaçu demande un
                vol intérieur de deux à trois heures, souvent avec une
                correspondance à São Paulo, Brasília ou Recife. Les horaires
                imposent parfois une nuit d'étape dans une ville qui n'était pas
                au programme.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous arbitrons entre vol régulier, vol privé et bateau selon
                l'étape, et nous plaçons les transferts de façon à ne jamais
                vous faire manquer un lever de jour.
              </p>
            </div>
          ),
        },
        {
          title: "La cuisine de Bahia",
          cardEyebrow: "Table",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Huile de palme, lait de coco et crevettes séchées : Bahia cuisine comme nulle part ailleurs dans le pays.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La moqueca mijote dans un plat en terre, à l'huile de dendê et
                au lait de coco. L'acarajé, un beignet de haricot frit dans la
                même huile, se vend dans la rue par des baianas en robe blanche
                et se mange debout, encore brûlant.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous réservons les tables du Rio Vermelho et organisons un
                déjeuner à bord d'un saveiro dans la baie de Tous-les-Saints,
                avec la moqueca préparée pendant la navigation.
              </p>
            </div>
          ),
        },
        {
          title: "Marcher dans les villes accompagné",
          cardEyebrow: "Sur place",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Salvador et Rio se parcourent très bien avec quelqu'un qui connaît chaque quartier et chaque heure.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La question de la sécurité se pose dans les grandes villes, et
                elle se règle simplement : un chauffeur qui attend, un guide qui
                sait quelle rue vit à quelle heure, et l'on se promène
                tranquillement du Pelourinho à Santa Teresa.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Chauffeur et guide privés sur toutes les étapes urbaines,
                conciergerie joignable jour et nuit, et un contact local sur
                chaque région.
              </p>
            </div>
          ),
        },
        {
          title: "Ici, on parle portugais",
          cardEyebrow: "Langue",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "L'anglais s'arrête souvent à la réception de l'hôtel, et un accompagnant francophone change tout.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le portugais du Brésil chante, et il ne ressemble pas à
                l'espagnol. En dehors de l'hôtellerie internationale, l'anglais
                se pratique peu : dans le Maranhão comme dans le Pantanal, le
                pilote de 4×4 et le guide de terrain parlent leur langue.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous prévoyons un accompagnant francophone sur les étapes de
                nature, là où l'on perd le plus à ne pas comprendre ce qui se
                dit.
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
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      testimonials: [
        {
          // TODO: replace with real testimonial
          quote:
            "Partir d'Atins avant le jour et se retrouver seuls dans les lagunes restera notre plus beau souvenir de voyage. Nous avons croisé les premiers véhicules en repartant, alors que la matinée était déjà bien avancée.",
          image: {
            src: "/destination/bresil/hero-1.png",
            alt: "Portrait d'Édouard", // TODO: verify
          },
          name: "Édouard", // TODO: verify
          role: "Voyage en couple, juillet 2025", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Trois régions en deux semaines, et pas une correspondance ratée. Le Pantanal nous a offert deux jaguars, dont un tout près de la barque, et nous en parlons encore à nos amis.",
          image: {
            src: "/destination/bresil/hero-2.png",
            alt: "Portrait de Bernard et Michèle", // TODO: verify
          },
          name: "Bernard & Michèle", // TODO: verify
          role: "Voyage anniversaire, août 2025", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Salvador avec un guide qui connaissait chaque ruelle du Pelourinho, puis Iguaçu depuis l'hôtel du parc. Les chutes pour nous seuls au petit matin. Nos enfants s'en souviennent encore.",
          image: {
            src: "/destination/bresil/hero-3.png",
            alt: "Portrait de Constance", // TODO: verify
          },
          name: "Constance", // TODO: verify
          role: "Voyage en famille, juillet 2025", // TODO: verify
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
          question: "Quelle est la meilleure période pour partir au Brésil ?",
          answer:
            "De juin à septembre pour un itinéraire qui associe le Nordeste, les Lençóis Maranhenses et le Pantanal : les lagunes sont pleines, la saison sèche concentre la faune et les températures restent autour de 30 degrés. En février ou mars, on vient pour le carnaval de Rio et pour l'été du sud, en sachant que le nord est alors en saison des pluies.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris ?",
          answer:
            "Comptez environ 12 heures en vol direct depuis Paris vers São Paulo, et 11 heures vers Rio de Janeiro. Ajoutez un vol intérieur de 2 à 3 heures pour rejoindre São Luís et les Lençóis, Salvador, Iguaçu ou le Pantanal.",
        },
        {
          question: "Faut-il un visa pour aller au Brésil ?",
          answer:
            "Non. Les ressortissants français sont dispensés de visa pour un séjour touristique de moins de 90 jours. Il faut un passeport valable pendant toute la durée du séjour et un billet de sortie du territoire.",
        },
        {
          question:
            "Quand voir les lagunes des Lençóis Maranhenses remplies d'eau ?",
          answer:
            "De juin à début septembre. Les lagunes se forment avec la pluie tombée entre janvier et mai, atteignent leur niveau maximal en juin et juillet, puis s'assèchent progressivement à partir de la mi-septembre.",
        },
        {
          question: "Le Brésil est-il adapté à un voyage en famille ?",
          answer:
            "Oui, à condition de choisir les étapes. Les Lençóis, Iguaçu et le Pantanal se vivent très bien à partir de sept ou huit ans, avec des journées courtes et des transferts organisés. Nous prévoyons chauffeur et guide privés sur les étapes urbaines et adaptons les horaires au rythme des enfants.",
        },
        {
          question: "Quel budget prévoir pour un voyage au Brésil ?",
          answer:
            "Le budget dépend du nombre de régions, de la part de vols intérieurs et du niveau d'hébergement, très variable entre une pousada du Maranhão et un hôtel de parc national. Nous construisons chaque voyage sur mesure et présentons un budget détaillé avant toute réservation, sans engagement.",
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
        "D'autres pays où la nature commande le calendrier et où chaque saison ouvre une porte différente, à composer sur mesure avec votre travel designer.",
      cta: { label: "Voir toutes les destinations", href: "/destinations" },
      slugs: ["kenya", "polynesie", "seychelles"],
    },
  ],
};
