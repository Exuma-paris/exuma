import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "indonesie",
  name: "Indonésie",
  placeKind: "country",
  country: "Indonésie",
  genitive: "de l'Indonésie",
  continentSlug: "asie",
  blurb: "Ubud, Komodo, Sumba",
  keywords: [
    "indonesie",
    "bali",
    "ubud",
    "komodo",
    "sumba",
    "flores",
    "phinisi",
    "java",
    "bromo",
  ],
  metaTitle: "Indonésie : Voyage sur mesure",
  metaDescription:
    "Voyage en Indonésie sur mesure : le mont Bromo à Java, Bali et Ubud, croisière en phinisi à Komodo, Sumba. Itinéraire écrit par votre travel designer Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe en Indonésie",
      heading: "L'Indonésie ne se fait pas en un voyage",
      description:
        "Plus de dix-sept mille îles, dont environ six mille habitées : aucun itinéraire ne prétend en faire le tour. Celui-ci en retient quatre, choisies pour ce qu'elles ne partagent pas. Java pour les volcans, Bali pour les temples et les rizières, Komodo pour la navigation, Sumba pour ce qui n'a pas encore été aménagé.", // TODO: verify nombre d'îles et d'îles habitées
      images: [
        {
          src: "/destination/indonesie/hero-1.webp",
          alt: "Rizières en terrasses au-dessus de la gorge de l'Ayung près d'Ubud, Bali, Indonésie",
        },
        {
          src: "/destination/indonesie/hero-2.webp",
          alt: "Phinisi à voiles carguées mouillé devant les collines sèches du parc national de Komodo",
        },
        {
          src: "/destination/indonesie/hero-3.webp",
          alt: "Cavalier sumbanais sur la plage de Nihiwatu, côte ouest de Sumba au petit matin",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir en Indonésie ?",
      heading:
        "Stéphane, spécialiste de l'Indonésie, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "stephane",
        // TODO: verify quote attribution
        quote:
          "Bali concentre l'essentiel de la demande, et le sud de l'île en souffre. Je commence donc par Java, pour ses volcans, et je reprends Bali par l'intérieur, du côté d'Ubud. Komodo se découvre ensuite en bateau. Le phinisi est un voilier traditionnel construit à Sulawesi selon des méthodes transmises de génération en génération : deux nuits à bord remplacent une semaine de trajets. Sumba ferme le voyage. C'est l'île la moins visitée des quatre, et souvent celle dont mes clients reparlent au retour.",
        role: "Travel Designer · Indonésie",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte de l'Indonésie",
      heading: "Quatre îles, quatre façons de voyager",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Un voyage en Indonésie pose d'abord une question de distance. Entre Sumatra et la Papouasie, l'archipel s'étend sur plus de cinq mille kilomètres. Vouloir tout relier revient à passer son séjour dans les aéroports intérieurs. Nous préférons retenir quatre étapes, reliées entre elles par des vols d'une à deux heures. Ce format demande une vingtaine de jours.",
        "Java ouvre le voyage. Jakarta sert de porte d'entrée, avec ses musées et la vieille ville de Batavia. L'est de l'île concentre les volcans : le mont Bromo, qui culmine à 2 329 mètres, se rejoint depuis Surabaya et se découvre avant le lever du soleil. Bali vient ensuite, mais pas par Kuta ni par Seminyak. Ubud a gardé ses temples et ses ateliers de peinture. Plus à l'est, autour de Manggis et de Karangasem, se trouvent les anciens palais d'eau des rois de Bali : Tirtagangga et Ujung. Il faut s'y rendre tôt le matin, avant l'arrivée des groupes.", // TODO: verify altitude du Bromo et meilleur horaire de visite des palais d'eau
        "Trois maisons structurent l'itinéraire. Le Four Seasons de Jakarta ouvre le séjour et sert de base pour Java. Amankila occupe ensuite une falaise de la côte est de Bali, avec trois bassins qui descendent vers le détroit de Lombok. NIHI Sumba ferme le voyage à l'ouest de Sumba, le long d'une plage privée de deux kilomètres et demi.", // TODO: verify longueur de la plage
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/indonesie/full-image.webp",
        alt: "Rizières en terrasses et palmiers au lever du jour dans l'intérieur de Bali, Indonésie",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Indonésie : l'ouest de Sumba",
      heading: "Sumba, l'île la moins parcourue de l'archipel",
      theme: "light",
      paragraphs: [
        "Sumba se trouve à une heure de vol de Bali, mais l'île suit une tout autre culture. Les villages y sont organisés par une religion ancestrale, le marapu, autour de maisons à toit pointu et de tombes de pierre. Dans l'ouest de l'île, les tisserandes perpétuent l'art de l'ikat. Les fils sont teints avant d'être tissés, notamment à l'indigo et au morinda. Chaque pièce demande plusieurs mois de travail et reflète un savoir-faire transmis depuis des générations.",
        "Plus au nord, près de Pero, le lagon de Weekuri offre un décor spectaculaire. Séparé de l'océan Indien par une barrière naturelle de calcaire, il reste étonnamment calme et limpide. Accessible par une piste, le site conserve une atmosphère sauvage et préservée.",
      ],
      images: [
        {
          src: "/destination/indonesie/split-1.webp",
          alt: "Tisserande sumbanaise nouant les fils d'un ikat sur un métier à dos, ouest de Sumba",
        },
        {
          src: "/destination/indonesie/split-2.webp",
          alt: "Village de clan aux toits de chaume pointus et tombes de pierre, ouest de Sumba",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/indonesie/xp-croisiere-komodo-1.webp",
          alt: "Phinisi en bois de fer mouillé dans une baie du parc national de Komodo au crépuscule",
        },
        right: {
          src: "/destination/indonesie/xp-croisiere-komodo-2.webp",
          alt: "Varan de Komodo traversant un sentier sec sur l'île de Rinca, Flores",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Trois jours et deux nuits à bord de l'Amandira",
        columns: [
          "L'Amandira est un phinisi, le voilier traditionnel des charpentiers bugis et konjo du sud de Sulawesi. Il a été construit sur la plage d'Ara, en bois de fer et en teck, sans plan dessiné : les proportions se transmettent de mémoire. Le bateau mesure cinquante-deux mètres. Il accueille dix passagers dans cinq cabines, avec un équipage de dix-huit personnes.", // TODO: verify longueur, nombre de cabines et taille de l'équipage
          "La croisière dure trois jours et deux nuits, au départ de Labuan Bajo. Le premier jour mène à l'île de Rinca, où l'on suit les varans à pied avec un ranger, puis à Kalong au coucher du soleil, quand des milliers de roussettes quittent la mangrove. Le lendemain matin, quarante minutes de montée suffisent pour atteindre le sommet de Padar, qui domine trois baies aux sables de couleurs différentes. L'après-midi est consacré à Manta Point, où le courant amène les raies manta sur un haut-fond. Le bateau change de mouillage chaque soir.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Indonésie",
      heading: "Trois moments inscrits à l'itinéraire",
      description:
        "Un volcan de Java que l'on rejoint de nuit pour arriver avant le jour, un rituel de purification dans les bassins d'un temple balinais, un lagon fermé par une barrière de calcaire à l'ouest de Sumba.",
      slugs: [
        "ascension-mont-bromo",
        "tirta-empul-foret-singes",
        "lagon-weekuri-sumba",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Où séjourner en Indonésie",
      description:
        "Une tour au centre de Jakarta pour explorer Java, une maison suspendue au-dessus du détroit de Lombok, une plage privée à Sumba. Trois étapes, trois ambiances très différentes.",
      slugs: ["four-seasons-jakarta", "amankila", "nihi-sumba"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage en Indonésie",
      description:
        "Vol, décalage horaire, monnaie, formalités et saisons : les éléments à connaître pour caler les dates d'un voyage en Indonésie.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "TODO: Il n'existe pas de vol direct depuis Paris. Comptez 16 à 19 heures jusqu'à Jakarta ou Denpasar, avec une escale à Doha, Dubaï, Singapour ou Istanbul. À l'intérieur du pays, Surabaya, Denpasar, Labuan Bajo et Sumba se relient par des vols d'une à deux heures.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "TODO: Bali, Komodo et Sumba ont sept heures d'avance sur Paris en hiver, six en été. Java et Jakarta comptent une heure de moins.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "TODO: La monnaie est la roupie indonésienne, environ 17 000 roupies pour un euro. Les cartes bancaires passent dans les hôtels et à Ubud, beaucoup moins à Sumba et à Flores. Prévoyez des espèces pour les villages et les pourboires.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Les ressortissants français voyagent avec l'e-VOA, le visa électronique à l'arrivée, qui se demande en ligne avant le départ. Il autorise un séjour touristique de 30 jours, prolongeable une fois jusqu'à 60 jours. Le passeport doit être valide au moins six mois à l'arrivée, et un billet retour ou de continuation est demandé.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "TODO: Aucun vaccin n'est obligatoire au départ de France. Les vaccins contre l'hépatite A et la typhoïde sont recommandés. Le risque de paludisme est négligeable à Bali, mais réel dans l'est de l'archipel.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "TODO: La saison sèche s'étend d'avril à octobre. Mai, juin et septembre offrent le meilleur compromis : mer calme pour la navigation à Komodo et fréquentation encore mesurée. Juillet et août sont les mois les plus chargés à Bali.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "TODO: L'indonésien est la langue officielle. Le balinais reste parlé à Bali, et plusieurs langues locales à Sumba. L'anglais suffit dans les hôtels et à bord des bateaux.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "TODO: Le climat est équatorial, entre 26 et 32 °C toute l'année sur la côte. La saison des pluies va de novembre à mars, avec des averses courtes en fin de journée. Sur les hauteurs du mont Bromo, il fait entre 5 et 10 °C avant le lever du soleil.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Chaque dossier Indonésie mobilise plusieurs expertises. Un interlocuteur unique en assure la coordination et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/indonesie/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.webp`,
          alt: [
            "Itinéraire sur mesure en Indonésie entre Java, Bali, Komodo et Sumba",
            "Adresses confidentielles en Indonésie : villages de Sumba et ateliers d'Ubud",
            "Hébergements en Indonésie : Amankila, NIHI Sumba et Four Seasons Jakarta",
            "Conciergerie privée 24/7 pour un voyage en Indonésie",
            "Expériences immersives en Indonésie : mont Bromo, Tirta Empul et croisière en phinisi",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables en Indonésie",
      heading: "Six escales, des volcans de Java à l'ouest de Sumba",
      description:
        "De la caldeira du Tengger au parc national de Komodo, des temples d'Ubud aux villages de l'ouest de Sumba : six territoires que peu d'itinéraires réunissent dans un même voyage.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      initialZoom: 5,
      places: [
        {
          title: "Ubud et la gorge de l'Ayung",
          description:
            "Ubud est le centre culturel de Bali. Le village de Kedewatan domine la rivière Ayung, qui coule au fond d'une gorge boisée. La ville concentre les ateliers de peinture, les temples et les marchés d'artisanat.",
          image: {
            src: "/destination/indonesie/map-ubud.webp",
            alt: "Gorge de l'Ayung et rizières en terrasses vues depuis Kedewatan, Ubud, Bali",
          },
          // TODO: verify coords
          coordinates: { lat: -8.5069, lng: 115.2625 },
        },
        {
          title: "Le mont Bromo et la caldeira du Tengger",
          description:
            "Le Bromo est un volcan actif de l'est de Java, haut de 2 329 mètres. Il se dresse au milieu d'une caldeira couverte de sable noir, la mer de sable. On y arrive de nuit, en 4x4, pour voir le soleil se lever derrière le Semeru.", // TODO: verify altitude et largeur de la caldeira
          image: {
            src: "/destination/indonesie/map-bromo.webp",
            alt: "Cratères du mont Bromo et mer de sable de la caldeira du Tengger, est de Java",
          },
          // TODO: verify coords
          coordinates: { lat: -7.9425, lng: 112.953 },
        },
        {
          title: "Manggis et les palais d'eau de Karangasem",
          description:
            "La côte est de Bali fait face au détroit de Lombok. On y visite deux anciens palais d'eau, Tirtagangga et Ujung, construits par les rois de Karangasem. Ils se découvrent tôt le matin, avant l'arrivée des groupes.", // TODO: verify attribution des palais
          image: {
            src: "/destination/indonesie/map-manggis.webp",
            alt: "Bassins et statues du palais d'eau de Tirtagangga à Karangasem, est de Bali",
          },
          // TODO: verify coords
          coordinates: { lat: -8.49, lng: 115.55 },
        },
        {
          title: "Labuan Bajo, sur la côte ouest de Flores",
          description:
            "Labuan Bajo est le port de départ de toutes les navigations vers Komodo. Les phinisi y sont amarrés en rade. Ces voiliers de bois à deux mâts servaient autrefois au transport de marchandises entre les îles.",
          image: {
            src: "/destination/indonesie/map-labuan-bajo.webp",
            alt: "Phinisi amarrés dans la rade de Labuan Bajo au crépuscule, ouest de Flores",
          },
          // TODO: verify coords
          coordinates: { lat: -8.4964, lng: 119.8877 },
        },
        {
          title: "Le parc national de Komodo",
          description:
            "Le parc protège trois grandes îles et une trentaine d'îlots. Les varans de Komodo y vivent en liberté et atteignent trois mètres de long. Depuis le sommet de l'île de Padar, on domine trois baies dont les sables n'ont pas la même couleur.", // TODO: verify nombre d'îlots
          image: {
            src: "/destination/indonesie/map-komodo.webp",
            alt: "Les trois baies de l'île de Padar vues du sommet, parc national de Komodo",
          },
          // TODO: verify coords
          coordinates: { lat: -8.55, lng: 119.45 },
        },
        {
          title: "L'ouest de Sumba",
          description:
            "C'est la partie de l'île où les villages traditionnels sont les mieux conservés. On y trouve aussi le lagon de Weekuri, fermé par une barrière de calcaire, et les longues plages de la côte sud autour de Nihiwatu.",
          image: {
            src: "/destination/indonesie/map-sumba.webp",
            alt: "Lagon de Weekuri et sa barrière de calcaire face à l'océan Indien, ouest de Sumba",
          },
          // TODO: verify coords
          coordinates: { lat: -9.35, lng: 118.95 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage en Indonésie",
      description:
        "Huit points de repère issus du terrain. Ils servent à calibrer les attentes, à choisir la période et à comprendre le choix de certaines étapes.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          title: "Les formalités se règlent en ligne, avant le départ",
          cardEyebrow: "Formalités",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Deux démarches distinctes : le visa e-VOA, puis la déclaration All Indonesia qui donne un QR code à présenter à l'arrivée",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La première démarche est l&apos;e-VOA, le visa électronique à
                l&apos;arrivée. Il se demande en ligne sur le portail officiel
                de l&apos;immigration indonésienne, avant le départ. Il autorise
                un séjour touristique de 30 jours, prolongeable une fois
                jusqu&apos;à 60 jours. Le passeport doit être valide au moins
                six mois à l&apos;arrivée, et un billet retour ou de
                continuation est demandé.
              </p>
              <p>
                La seconde est la déclaration « All Indonesia ». C&apos;est
                désormais le formulaire d&apos;arrivée unique : il regroupe
                l&apos;immigration, la douane, la santé et la quarantaine, et
                remplace l&apos;ancienne déclaration douanière séparée. Il se
                remplit à partir de trois jours avant l&apos;arrivée et se
                termine par un QR code. Ce code est à conserver et à présenter à
                l&apos;aéroport : il accélère nettement le passage.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Les liens officiels et la marche à suivre vous sont envoyés
                avant le départ, avec un rappel au moment où la déclaration
                d&apos;arrivée devient remplissable.
              </p>
            </div>
          ),
        },
        {
          title: "Éviter le sud de Bali",
          cardEyebrow: "Itinéraire",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Kuta, Seminyak et Canggu concentrent l'essentiel de la fréquentation. L'intérieur et la côte est sont bien plus calmes",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La pointe sud de Bali, de Kuta à Canggu, reçoit la majorité des
                visiteurs. Les embouteillages y sont quotidiens. Un trajet de
                quinze kilomètres peut demander une heure et demie en fin de
                journée.
              </p>
              <p>
                L&apos;intérieur, autour d&apos;Ubud, et la côte est, autour de
                Manggis, suivent un rythme différent. Les villages y célèbrent
                encore leurs cérémonies et les routes restent praticables.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                L&apos;itinéraire évite le sud, sauf pour l&apos;arrivée et le
                départ à Denpasar. Le transfert vers Ubud est calé en dehors des
                heures de pointe.
              </p>
            </div>
          ),
        },
        {
          title: "Le mont Bromo se rejoint de nuit",
          cardEyebrow: "Volcan",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Départ vers 3 heures du matin en 4x4 depuis Cemoro Lawang, pour être au belvédère avant le lever du soleil",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le Bromo se trouve dans l&apos;est de Java, à environ trois
                heures de route de Surabaya. Le départ se fait vers 3 heures du
                matin, en 4x4, depuis le village de Cemoro Lawang. La piste mène
                au belvédère de Penanjakan, qui domine toute la caldeira.
              </p>
              <p>
                Il y fait entre 5 et 10 °C avant le lever du jour, avec du vent.
                Une polaire, un bonnet et une lampe frontale sont
                indispensables. La descente vers le cratère se poursuit à pied
                ou à cheval, sur la mer de sable, puis par un escalier
                d&apos;environ 250 marches.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Le site est sacré pour les Tenggerese, qui y déposent des
                offrandes dans le cratère. Nous décalons le départ pour éviter
                le gros du flux de 4x4 sur la piste du belvédère.
              </p>
            </div>
          ),
        },
        {
          title: "La tenue exigée dans les temples",
          cardEyebrow: "Usages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Sarong et écharpe obligatoires. Pour le rituel de purification, prévoir des vêtements de rechange",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L&apos;entrée dans un temple balinais suppose un sarong noué à
                la taille et une écharpe autour des hanches. Les épaules doivent
                être couvertes. Les temples en prêtent, mais ils sont souvent
                humides et de taille unique.
              </p>
              <p>
                À Tirta Empul, le rituel de purification se pratique habillé,
                dans un tissu porté par-dessus le maillot de bain. On passe sous
                les fontaines dans l&apos;ordre, de gauche à droite, en évitant
                celles qui sont réservées aux rites funéraires. Prévoyez une
                serviette et des vêtements secs.
              </p>
            </div>
          ),
        },
        {
          title: "Les singes d'Ubud ne sont pas décoratifs",
          cardEyebrow: "Sécurité",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Environ mille deux cents macaques vivent en liberté dans la forêt. Ils prennent lunettes, téléphones et sacs",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La forêt sacrée de Padangtegal, à Ubud, abrite environ mille
                deux cents macaques répartis en plusieurs groupes. Trois temples
                du XIV<sup>e</sup> siècle se trouvent sous les grands arbres.
              </p>
              <p>
                Les macaques sont habitués à l&apos;homme et savent ouvrir un
                sac. Lunettes de soleil, casquettes, bouteilles et téléphones
                disparaissent régulièrement. Il ne faut pas les nourrir, ni les
                fixer dans les yeux, ni tenter de récupérer un objet soi-même.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                La visite est calée tôt le matin, avant l&apos;arrivée des
                groupes, avec un guide qui connaît le comportement des
                différentes bandes.
              </p>
            </div>
          ),
        },
        {
          title: "Naviguer à Komodo : la question de la houle",
          cardEyebrow: "Navigation",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Mer formée et vents forts de janvier à mars. La navigation se pratique d'avril à octobre",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le détroit de Sape, entre Sumbawa et Komodo, est parcouru par
                des courants puissants. De janvier à mars, la mousson d&apos;ouest
                lève une houle qui rend la navigation inconfortable et fait
                annuler des sorties.
              </p>
              <p>
                D&apos;avril à octobre, la mer se calme. Les raies manta
                s&apos;observent toute l&apos;année à Manta Point, avec un pic
                entre décembre et février, quand le plancton remonte. C&apos;est
                précisément la période la moins favorable à la navigation :
                c&apos;est l&apos;arbitrage principal du calendrier.
              </p>
            </div>
          ),
        },
        {
          title: "Les vols intérieurs et les bagages",
          cardEyebrow: "Logistique",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Bali, Labuan Bajo et Sumba se relient en une heure de vol. La franchise bagage est réduite",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Garuda Indonesia, Wings Air et Nam Air desservent Labuan Bajo et
                Tambolaka depuis Denpasar, en une heure environ. Les appareils
                sont des ATR ou des Boeing 737 selon les rotations.
              </p>
              <p>
                La franchise bagage descend à 10 ou 20 kg selon la compagnie, et
                les horaires changent régulièrement. Un vol du matin laisse de la
                marge en cas de report.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Les vols intérieurs sont réservés en direct et suivis
                jusqu&apos;au départ. Le surplus de bagages reste en consigne à
                Denpasar.
              </p>
            </div>
          ),
        },
        {
          title: "Sumba : ce qu'il faut savoir avant d'y aller",
          cardEyebrow: "Culture",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Une île qui suit une religion ancestrale, le marapu. Les villages sont habités, ce ne sont pas des sites touristiques",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Sumba n&apos;est ni hindoue ni majoritairement musulmane.
                L&apos;île suit le marapu, une religion ancestrale qui organise
                encore la vie des villages de l&apos;ouest. Les maisons à toit
                pointu entourent une place où sont dressées des tombes de pierre.
              </p>
              <p>
                La Pasola est une joute équestre rituelle qui se tient en février
                et en mars. Sa date dépend du calendrier lunaire et de
                l&apos;arrivée de vers de mer sur la plage. Elle n&apos;est
                jamais fixée longtemps à l&apos;avance.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Les visites de village passent par un intermédiaire connu du chef
                de clan, avec une contribution fixée à l&apos;avance. Sans cela,
                l&apos;accueil se limite souvent à la vente de tissus.
              </p>
            </div>
          ),
        },
        {
          title: "Paiements, pourboires et connexion",
          cardEyebrow: "Budget",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les espèces sont indispensables à Sumba et à Flores. Le réseau devient irrégulier dès qu'on quitte Bali",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les cartes bancaires sont acceptées à Ubud, dans les hôtels et
                dans les restaurants du sud de Bali. À Sumba, à Flores et dans
                les villages, tout se règle en roupies. Les distributeurs
                limitent souvent les retraits à deux millions de roupies.
              </p>
              <p>
                Le pourboire n&apos;est pas obligatoire, mais il est attendu des
                guides, des chauffeurs et des équipages. Une carte SIM locale
                s&apos;achète dès l&apos;aéroport. Elle couvre correctement
                Bali, par intermittence Sumba, et presque pas Komodo.
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
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      testimonials: [
        {
          // TODO: replace with real testimonial
          quote:
            "Deux nuits à bord de l'Amandira, et le bateau change de mouillage pendant qu'on dort. Au réveil, le paysage n'est plus le même. Nos deux adolescents ont passé la traversée sur le pont avant, ce qui n'était pas gagné.",
          image: {
            src: "/destination/indonesie/hero-1.webp",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Bali et Komodo en famille, juillet 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Le Bromo à 4 heures du matin, dans le noir et dans le froid. Une fois au belvédère, on s'est assis et personne n'a parlé pendant vingt minutes. C'est le seul moment du voyage où j'ai oublié de prendre une photo.",
          image: {
            src: "/destination/indonesie/hero-2.webp",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Indonésie, mai 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Nous n'avions jamais entendu parler de Sumba avant que Stéphane l'ajoute à l'itinéraire. C'est l'étape dont nos enfants reparlent, un an après. Pas la plage : les villages.",
          image: {
            src: "/destination/indonesie/hero-3.webp",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Bali et Sumba, septembre 2024", // TODO: replace with real testimonial
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
          question: "Quelle est la meilleure période pour partir en Indonésie ?",
          answer:
            "La saison sèche va d'avril à octobre. Mai, juin et septembre offrent le meilleur compromis : la mer est calme pour la navigation à Komodo, la chaleur reste supportable à Bali et la fréquentation est encore mesurée. Juillet et août sont les mois les plus chargés dans le sud de Bali. De janvier à mars, la mousson d'ouest lève une houle qui fait souvent annuler les sorties en mer.",
        },
        {
          question: "Combien de temps dure le vol Paris-Bali ?",
          answer:
            "Il n'existe pas de vol direct entre Paris et Denpasar. Comptez 17 à 19 heures avec une escale, selon la compagnie : Doha avec Qatar Airways, Dubaï avec Emirates, Singapour avec Singapore Airlines ou Istanbul avec Turkish Airlines. Les vols intérieurs vers Labuan Bajo et Sumba durent ensuite environ une heure depuis Denpasar.",
        },
        {
          question: "Faut-il un visa pour aller en Indonésie ?",
          answer:
            "Oui, et tout se fait en ligne avant le départ. Les ressortissants français relèvent de l'e-VOA, le visa électronique à l'arrivée, à demander sur le portail officiel de l'immigration indonésienne. Il autorise un séjour touristique de 30 jours, prolongeable une fois jusqu'à 60 jours. Le passeport doit être valide au moins six mois à l'arrivée et un billet retour ou de continuation est demandé. Il faut y ajouter la déclaration « All Indonesia », le formulaire d'arrivée unique qui regroupe immigration, douane, santé et quarantaine. Il se remplit jusqu'à trois jours avant l'arrivée et donne un QR code à présenter à l'aéroport.",
        },
        {
          question: "Que faire en Indonésie en 20 jours ?",
          answer:
            "Deux nuits à Jakarta pour la vieille ville et les musées, puis deux nuits dans l'est de Java pour le lever du soleil sur le mont Bromo. Ensuite quatre nuits à Ubud pour les temples et les ateliers, et trois nuits sur la côte est de Bali, autour de Manggis. Un vol d'une heure mène à Labuan Bajo, d'où part la croisière de trois jours et deux nuits dans le parc de Komodo. Les cinq dernières nuits se passent à Sumba, entre les villages de l'ouest et le lagon de Weekuri.",
        },
        {
          question: "L'Indonésie est-elle adaptée aux familles ?",
          answer:
            "Oui, à condition de bien calibrer les étapes. Bali se voyage facilement avec des enfants : les distances sont courtes, la cuisine est douce et les hôtels sont bien équipés. La navigation à Komodo fonctionne à partir de sept ou huit ans, avec un bateau privatisé qui évite les horaires imposés. Sumba demande plus d'autonomie : les trajets y sont longs et les infrastructures médicales limitées.",
        },
        {
          question: "Quel budget prévoir pour un voyage en Indonésie ?",
          answer:
            "Un voyage en Indonésie sur mesure avec Exuma, incluant Bali, une navigation privatisée à Komodo et un séjour à Sumba, se situe généralement entre 10 000 et 20 000 € par personne pour une vingtaine de jours, hors vols internationaux. La privatisation du bateau et les vols intérieurs sont les deux postes les plus variables.",
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
        "D'autres archipels où la navigation dessine l'itinéraire, et où deux îles voisines peuvent avoir des cultures très différentes.",
      slugs: ["polynesie", "seychelles", "maurice"],
    },
  ],
};
