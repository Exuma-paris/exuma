import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "malaisie",
  name: "Malaisie",
  placeKind: "country",
  country: "Malaisie",
  genitive: "de la Malaisie",
  continentSlug: "asie",
  blurb: "Bornéo, Langkawi, Penang, Kuala Lumpur",
  keywords: [
    "malaisie",
    "kuala lumpur",
    "langkawi",
    "borneo",
    "sabah",
    "penang",
    "sipadan",
    "danum valley",
  ],
  metaTitle: "Malaisie : Voyage sur mesure",
  metaDescription:
    "Voyage en Malaisie sur mesure : Langkawi, jungle de Bornéo, Penang et plongée à Sipadan. Itinéraire écrit par votre travel designer Exuma, conciergerie 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe en Malaisie",
      heading: "Le pays où la forêt a cent trente millions d'années",
      description:
        "Les forêts de Bornéo comptent parmi les plus anciennes de la planète, plus vieilles que l'Amazonie. Quatre-vingt-dix-neuf îles composent l'archipel de Langkawi, à l'autre bout du pays. Entre les deux, Kuala Lumpur et George Town rappellent que la Malaisie s'est construite au carrefour de trois cultures.",
      images: [
        {
          src: "/destination/malaisie/hero-1.png",
          alt: "Tours Petronas de Kuala Lumpur éclairées au crépuscule, voyage en Malaisie",
        },
        {
          src: "/destination/malaisie/hero-2.png",
          alt: "Pitons calcaires du parc géologique de Kilim à Langkawi, mer d'Andaman",
        },
        {
          src: "/destination/malaisie/hero-3.png",
          alt: "Canopée de la forêt primaire de Danum Valley à Sabah, Bornéo malaisien",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir en Malaisie ?",
      heading: "Stéphane, spécialiste de la Malaisie, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "stephane",
        // TODO: verify quote attribution
        quote:
          "La Malaisie surprend toujours ceux qui pensent la connaître par la Thaïlande ou le Vietnam voisins. On quitte Kuala Lumpur un matin, et le soir même on remonte la rivière Kinabatangan de nuit, lampe torche à la main, à la recherche des yeux rouges des crocodiles sur la berge. C'est un pays de contrastes nets : une capitale qui rivalise avec Singapour, et à quelques heures d'avion, une des dernières forêts primaires d'Asie où l'on croise encore l'orang-outan en liberté.",
        role: "Travel Designer · Malaisie",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte de la Malaisie",
      heading: "Une capitale, une jungle, deux mers",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Un voyage en Malaisie commence le plus souvent par Kuala Lumpur. La ville se lit depuis le pied des tours Petronas, quatre cent cinquante et un mètres et quatre-vingt-huit étages, les plus hautes tours jumelles du monde depuis leur achèvement en 1998. À quelques rues de là, le quartier colonial de Merdeka Square et les grottes de Batu, creusées dans le calcaire et accessibles par deux cent soixante-douze marches peintes de couleurs vives, racontent une autre histoire de la ville.",
        "À deux heures de vol vers l'est, Sabah change complètement de registre. La vallée de Danum, quatre cent trente-huit kilomètres carrés de forêt primaire sans aucun village permanent, abrite l'une des plus fortes densités d'orangs-outans sauvages du pays. Plus au nord, la rivière Kinabatangan sert de corridor à des éléphants pygmées, des singes proboscis et des varans, observables depuis un bateau silencieux au lever et au coucher du soleil.",
        "Vient ensuite le choix de la côte. Langkawi, archipel de quatre-vingt-dix-neuf îles classé géoparc mondial par l'Unesco en 2007, associe plages désertes et mangroves du parc de Kilim. Penang, à deux heures de route, conserve dans George Town un centre historique inscrit au patrimoine mondial en 2008, entre maisons de négociants chinois et cuisine de rue considérée comme l'une des meilleures d'Asie. Pour un séjour de deux semaines, je conseille toujours de choisir Bornéo ou la côte, rarement les deux dans un premier voyage.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/malaisie/full-image.png",
        alt: "Voyage en Malaisie : brume matinale sur la canopée de la forêt primaire de Danum Valley",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Malaisie — le parc de Kilim",
      heading: "Ce que l'on gagne à pagayer avant l'aube",
      theme: "light",
      paragraphs: [
        "Le kayak part d'un ponton discret sur la côte est de Langkawi, avant sept heures. Le parc géologique de Kilim, réserve de mangroves classée en 2007, se referme rapidement en un tunnel de racines et de calcaire noirci par les marées. À cette heure, les pygargues à ventre blanc chassent encore bas au-dessus de l'eau : c'est le rapace qui a donné son nom à l'île, Langkawi signifiant approximativement « aigle rougeâtre » en malais ancien.",
        "Les excursions collectives quittent la jetée principale vers dix heures, en bateau à moteur, quand la chaleur a déjà fait remonter les aigles en altitude. Un guide privé part plus tôt, en kayak silencieux, et entre dans les grottes de calcaire à marée basse. On y croise des varans suspendus aux racines des palétuviers, et le silence n'est interrompu que par le bruit de la pagaie.",
      ],
      images: [
        {
          src: "/destination/malaisie/split-1.png",
          alt: "Kayak glissant entre les mangroves du parc géologique de Kilim à Langkawi",
        },
        {
          src: "/destination/malaisie/split-2.png",
          alt: "Pygargue à ventre blanc survolant les eaux calmes de Langkawi au lever du jour",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/malaisie/xp-plongee-sipadan-1.png",
          alt: "Tombant corallien vertical au large de l'île de Sipadan, Sabah",
        },
        right: {
          src: "/destination/malaisie/xp-plongee-sipadan-2.png",
          alt: "Tornade de barracudas au-dessus du récif de Sipadan, mer de Célèbes",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "L'île que Cousteau appelait une œuvre d'art intacte",
        columns: [
          "Sipadan est la seule île océanique de Malaisie, un pinacle corallien qui s'élève à plus de six cents mètres du fond de la mer de Célèbes. Depuis 2004, l'île n'accueille plus aucun hébergement afin de préserver son écosystème exceptionnel. L'accès aux plongeurs est aujourd'hui strictement encadré par un quota quotidien de permis, attribués aux opérateurs agréés par Sabah Parks. Le tombant nord-est, Barracuda Point, doit son nom aux impressionnants bancs de barracudas qui s'y rassemblent en formations tourbillonnantes, offrant l'un des spectacles les plus emblématiques de la plongée à Sipadan.",
          "On dort à Mabul ou Kapalai, les deux îles voisines, et on embarque avant sept heures pour espérer les meilleurs numéros de permis. Tortues vertes, requins-marteaux au large en saison et bancs de carangues font partie des rencontres courantes sur les tombants ouest. Jacques Cousteau, qui a filmé Sipadan en 1989, la décrivait comme une œuvre d'art intacte, préservée par son isolement.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Malaisie",
      heading: "Trois rencontres qui donnent le ton du séjour",
      description:
        "Une nuit sur la Kinabatangan à la recherche des éléphants pygmées, une marche dans la canopée de Danum Valley, un tour de George Town avant l'ouverture des étals. Trois registres, un même pays.",
      slugs: [
        "observation-orangs-outans-kinabatangan",
        "trek-danum-valley",
        "patrimoine-george-town",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Où séjourner en Malaisie",
      description:
        "Un pavillon niché dans une jungle de dix millions d'années à Langkawi. Une île privée au large de Kota Kinabalu. Un lodge accessible uniquement par la rivière, au cœur du corridor faunique de la Kinabatangan. Trois façons d'habiter la Malaisie.",
      slugs: ["the-datai-langkawi", "bunga-raya-island-resort", "sukau-rainforest-lodge"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage en Malaisie",
      description:
        "Vol, décalage horaire, monnaie, formalités et saisons : les éléments à connaître pour caler les dates d'un voyage en Malaisie.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Un vol direct d'environ 13 heures relie Paris à Kuala Lumpur avec Malaysia Airlines. Depuis Kuala Lumpur, compter environ 2h30 de vol pour rejoindre Kota Kinabalu, porte d'entrée de Sabah.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "La Malaisie reste à UTC+8 toute l'année, sans changement d'heure. L'écart avec la France est de six heures en été et de sept heures en hiver.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "La monnaie est le ringgit malaisien (MYR), avec environ 4,7 ringgits pour un euro en août 2026. Les cartes bancaires sont largement acceptées dans les hôtels, restaurants et commerces, mais prévoyez des espèces pour les marchés, petits commerces et certaines excursions à Sabah.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Les ressortissants français n'ont pas besoin de visa pour un séjour touristique de moins de 90 jours en Malaisie péninsulaire et au Sabah. Le passeport doit être valide au moins six mois après la date de fin du séjour. Une déclaration d'arrivée en ligne (MDAC) est également requise avant l'entrée dans le pays.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin n'est systématiquement obligatoire pour les voyageurs en provenance de France. Il est recommandé d'être à jour des vaccinations habituelles ; selon l'itinéraire et les conditions de séjour, les vaccins contre l'hépatite A, la typhoïde ou l'encéphalite japonaise peuvent notamment être recommandés. Le paludisme est présent dans certaines zones rurales et forestières de Bornéo, tandis que la dengue circule dans tout le pays.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "De décembre à février pour Kuala Lumpur, Langkawi et Penang, avec une préférence pour janvier et février. Pour Sabah, la période de février à avril est généralement favorable, même si des pluies peuvent survenir toute l'année.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "Le malais est la langue officielle. L'anglais est largement parlé, notamment dans les villes et les zones touristiques. Le mandarin, le cantonais, le hokkien et le tamoul sont également couramment utilisés dans certaines communautés.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "La Malaisie bénéficie d'un climat tropical chaud et humide toute l'année, avec des températures généralement comprises entre 24 et 33 °C. Deux moussons rythment le climat : la mousson de nord-est, de novembre à mars, et celle de sud-ouest, de mai à septembre. Leur influence varie selon les régions et les côtes.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Chaque dossier Malaisie mobilise plusieurs expertises. Un interlocuteur unique en assure la coordination et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/malaisie/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Itinéraire sur mesure en Malaisie entre Kuala Lumpur, Bornéo et Langkawi",
            "Adresses confidentielles en Malaisie : tables de rue et lodges peu fréquentés",
            "Hébergements en Malaisie : Datai Langkawi et Sukau Rainforest Lodge",
            "Conciergerie privée 24/7 pour un voyage en Malaisie",
            "Expériences immersives en Malaisie : Sipadan, Danum Valley et Kinabatangan",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables en Malaisie",
      heading: "Six territoires, de la péninsule à Bornéo",
      description:
        "De Kuala Lumpur aux tombants de Sipadan, de la vallée de Danum aux mangroves de Langkawi : six secteurs que peu d'itinéraires réunissent dans un même voyage.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      initialZoom: 5,
      places: [
        {
          title: "Kuala Lumpur",
          description:
            "La capitale s'est construite au confluent de deux rivières, d'où son nom, « confluent boueux ». Les tours Petronas, quatre cent cinquante et un mètres, restent les plus hautes tours jumelles du monde depuis 1998.",
          image: {
            src: "/destination/malaisie/map-kuala-lumpur.png",
            alt: "Tours Petronas et skyline de Kuala Lumpur au crépuscule",
          },
          // TODO: verify coords
          coordinates: { lat: 3.139, lng: 101.6869 },
        },
        {
          title: "Langkawi",
          description:
            "Archipel de quatre-vingt-dix-neuf îles au large du Kedah, classé géoparc mondial par l'Unesco en 2007. Le parc de Kilim protège l'une des dernières mangroves intactes de la côte ouest.",
          image: {
            src: "/destination/malaisie/map-langkawi.png",
            alt: "Îles calcaires et mangroves de l'archipel de Langkawi",
          },
          // TODO: verify coords
          coordinates: { lat: 6.35, lng: 99.8 },
        },
        {
          title: "George Town, Penang",
          description:
            "Centre historique inscrit au patrimoine mondial de l'Unesco en 2008. Les shophouses des clans chinois côtoient les fresques murales et les stands de rue ouverts jusqu'à minuit.",
          image: {
            src: "/destination/malaisie/map-george-town.png",
            alt: "Shophouses coloniales et street art de George Town, Penang",
          },
          // TODO: verify coords
          coordinates: { lat: 5.4141, lng: 100.3288 },
        },
        {
          title: "Danum Valley",
          description:
            "Quatre cent trente-huit kilomètres carrés de forêt primaire à Sabah, sans aucun village permanent depuis les années 1980. L'une des plus fortes densités d'orangs-outans sauvages de Malaisie.",
          image: {
            src: "/destination/malaisie/map-danum-valley.png",
            alt: "Forêt primaire et canopée de la Danum Valley Conservation Area, Sabah",
          },
          // TODO: verify coords
          coordinates: { lat: 4.9667, lng: 117.8 },
        },
        {
          title: "La rivière Kinabatangan",
          description:
            "Plus long fleuve de Sabah, corridor faunique entre forêts fragmentées et plantations de palmiers. Éléphants pygmées, singes proboscis et varans se croisent sur ses berges au lever du jour.",
          image: {
            src: "/destination/malaisie/map-kinabatangan.png",
            alt: "Croisière au lever du jour sur la rivière Kinabatangan à Sabah",
          },
          // TODO: verify coords
          coordinates: { lat: 5.5, lng: 118.3667 },
        },
        {
          title: "Sipadan et Semporna",
          description:
            "Seule île océanique de Malaisie, protégée depuis 2004 et sans aucun hébergement sur place. L'accès en plongée est limité à cent vingt permis par jour depuis Semporna.",
          image: {
            src: "/destination/malaisie/map-sipadan.png",
            alt: "Île de Sipadan et récif corallien au large de Semporna, Sabah",
          },
          // TODO: verify coords
          coordinates: { lat: 4.115, lng: 118.629 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage en Malaisie",
      description:
        "Huit points de repère issus du terrain. Ils servent à choisir la côte, à calibrer les attentes et à comprendre le choix de certaines étapes.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          title: "Le permis de plongée à Sipadan",
          cardEyebrow: "Plongée",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Cent vingt permis par jour, tirés au sort la veille depuis Semporna. Réserver un centre agréé change tout",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Depuis 2004, Sipadan n&apos;accueille aucun hébergement et
                l&apos;accès en plongée est plafonné à cent vingt permis par jour,
                répartis entre les centres agréés de Semporna, Mabul et Kapalai.
                Chaque centre reçoit un quota fixe : réserver tôt et passer par un
                opérateur qui détient un quota garanti évite les listes
                d&apos;attente sur place.
              </p>
              <p>
                Les tombants nord, autour de Barracuda Point, concentrent les
                plus fortes chances de croiser une tornade de barracudas ou des
                tortues vertes en nombre.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Les permis sont réservés plusieurs semaines à l&apos;avance,
                auprès des centres qui garantissent un accès quotidien plutôt
                qu&apos;un tirage aléatoire.
              </p>
            </div>
          ),
        },
        {
          title: "Les deux moussons et le choix de la côte",
          cardEyebrow: "Saisons",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La côte ouest est sèche de décembre à février, la côte est reçoit la mousson à la même période",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La péninsule malaise a deux façades et deux régimes de pluie.
                La côte ouest (Langkawi, Penang, Kuala Lumpur) reste la plus
                praticable de décembre à février. La côte est reçoit la mousson
                du nord-est de novembre à février, la période la plus arrosée
                de l&apos;année sur cette façade.
              </p>
              <p>
                Sabah, sur Bornéo, échappe en grande partie à ce calendrier :
                la pluie y tombe toute l&apos;année en fin d&apos;après-midi,
                avec une période plus sèche de février à avril.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Le choix de la côte est arrêté avant celui des hôtels, en
                fonction des dates. C&apos;est le premier point que nous
                traitons avec vous.
              </p>
            </div>
          ),
        },
        {
          title: "Le paludisme, réservé à l'intérieur des terres",
          cardEyebrow: "Santé",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Aucun risque à Kuala Lumpur, Langkawi ou Penang. Un traitement préventif se discute pour l'intérieur de Bornéo",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le paludisme ne concerne que certaines zones forestières de
                l&apos;intérieur de Sabah et du Sarawak, loin des côtes et des
                grandes villes. Kuala Lumpur, Langkawi, Penang et le littoral de
                Sabah n&apos;en sont pas concernés.
              </p>
              <p>
                Un traitement préventif se discute avec un médecin avant un
                séjour prolongé dans la vallée de Danum ou sur la Kinabatangan.
                La dengue, elle, circule dans tout le pays : le répulsif reste
                la seule protection.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Le carnet de voyage précise, étape par étape, si un traitement
                préventif est recommandé pour votre itinéraire.
              </p>
            </div>
          ),
        },
        {
          title: "Voir l'orang-outan sans le déranger",
          cardEyebrow: "Rencontre",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les centres sérieux réintroduisent en forêt, sans contact rapproché ni mise en scène",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Sepilok et Danum Valley fonctionnent selon un principe
                différent des zoos ou parcs à contact : les animaux vivent en
                liberté ou en semi-liberté, et l&apos;approche se fait à
                distance, depuis une plateforme ou un sentier balisé.
              </p>
              <p>
                Les structures qui proposent un contact rapproché, un bain
                partagé ou une photo tenue dans les bras exposent l&apos;animal
                à un stress et à des maladies transmissibles par l&apos;homme.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous ne retenons que les centres de conservation visités par
                notre équipe, jamais les structures à contact direct.
              </p>
            </div>
          ),
        },
        {
          title: "Vols intérieurs et transferts vers Sabah",
          cardEyebrow: "Logistique",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Deux heures trente de vol depuis Kuala Lumpur. Danum Valley et Sipadan demandent ensuite route et bateau",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Malaysia Airlines et AirAsia relient Kuala Lumpur à Kota
                Kinabalu en environ deux heures trente. Pour Danum Valley, un
                second vol d&apos;une heure rejoint Lahad Datu, suivi de deux à
                trois heures de route.
              </p>
              <p>
                Pour Sipadan, un vol vers Tawau d&apos;environ une heure précède
                un transfert routier puis un bateau vers Semporna, Mabul ou
                Kapalai.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Les vols intérieurs limitent souvent les bagages à 20 kg en
                soute. Le supplément se règle à la réservation.
              </p>
            </div>
          ),
        },
        {
          title: "Argent, pourboires et États sans alcool",
          cardEyebrow: "Budget",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Cartes acceptées dans les hôtels, espèces pour les marchés. L'alcool est restreint dans certains États",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La monnaie est le ringgit. Les cartes bancaires passent
                partout dans les hôtels et les restaurants des grandes villes.
                Les marchés, les bateaux de Sabah et les stands de rue
                fonctionnent en espèces.
              </p>
              <p>
                Le pourboire ne fait pas partie des usages obligatoires, un
                service étant souvent déjà inclus. Certains États comme le
                Kelantan restreignent la vente d&apos;alcool : les hôtels
                internationaux de Langkawi, Penang et Sabah n&apos;appliquent
                pas cette restriction.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Langkawi bénéficie d&apos;un statut de zone franche, ce qui
                rend l&apos;alcool moins cher qu&apos;ailleurs dans le pays.
              </p>
            </div>
          ),
        },
        {
          title: "La tenue dans les lieux de culte",
          cardEyebrow: "Usages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Épaules et genoux couverts dans les mosquées et les temples. Une robe est prêtée à l'entrée",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La Malaisie compte trois grandes traditions religieuses :
                musulmane, bouddhiste et hindoue. Dans les mosquées comme la
                Mosquée de fer de Putrajaya, épaules et jambes couvertes sont
                exigées ; une robe est généralement prêtée à l&apos;entrée pour
                les visiteurs non préparés.
              </p>
              <p>
                Dans les temples chinois et hindous de George Town, les
                chaussures se retirent avant d&apos;entrer dans certaines
                salles, sans obligation de couvrir les épaules.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Un paréo léger dans le sac règle la question pour la journée,
                quel que soit le lieu de culte visité.
              </p>
            </div>
          ),
        },
        {
          title: "La cuisine de rue, entre trois cultures",
          cardEyebrow: "Gastronomie",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Laksa, char kway teow, roti canai : la cuisine de rue de Penang est sûre dans les stands à forte rotation",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                George Town réunit sur un même trottoir la cuisine malaise, la
                cuisine chinoise péranakane et la cuisine indienne. Le assam
                laksa, soupe de poisson et de tamarin, et le char kway teow,
                nouilles sautées au wok, comptent parmi les plats les plus
                caractéristiques.
              </p>
              <p>
                Les stands à forte rotation, où l&apos;on voit la cuisson se
                faire devant soi, présentent le moins de risque. L&apos;eau du
                robinet ne se boit pas, l&apos;eau en bouteille est disponible
                partout.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Un tour de George Town accompagné d&apos;un guide local
                sélectionne les meilleurs stands avant l&apos;heure de pointe
                du déjeuner.
              </p>
            </div>
          ),
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
          question: "Quelle est la meilleure période pour partir en Malaisie ?",
          answer:
            "De décembre à février pour Kuala Lumpur, Langkawi et Penang, sur la côte ouest de la péninsule, où les précipitations sont généralement plus faibles à cette période. À l'est, la mousson de nord-est apporte au contraire des pluies abondantes, particulièrement de novembre à janvier. Sabah se visite toute l'année, avec une période généralement plus sèche de février à avril dans plusieurs régions, notamment au sud et au nord-ouest de l'État.",
        },
        {
          question: "Combien de temps dure le vol Paris-Kuala Lumpur ?",
          answer:
            "Environ 13 heures en vol direct avec Malaysia Airlines. Un vol intérieur d'environ deux heures trente relie ensuite Kuala Lumpur à Kota Kinabalu, porte d'entrée de Sabah.",
        },
        {
          question: "Faut-il un visa pour aller en Malaisie ?",
          answer:
            "Non, les ressortissants français n'ont pas besoin de visa pour un séjour touristique de moins de 90 jours, en Malaisie péninsulaire comme à Sabah. Le passeport doit être valide au moins six mois après la date de fin du séjour, et une déclaration d'arrivée en ligne (MDAC) est requise avant l'entrée dans le pays.",
        },
        {
          question: "Que faire en Malaisie en 15 jours ?",
          answer:
            "Trois nuits à Kuala Lumpur pour les tours Petronas, les grottes de Batu et un cours de cuisine, cinq à six nuits à Sabah pour la vallée de Danum, la rivière Kinabatangan et la plongée à Sipadan, puis quatre à cinq nuits à Langkawi ou Penang selon l'envie de plage ou de patrimoine.",
        },
        {
          question: "Faut-il un traitement contre le paludisme en Malaisie ?",
          answer:
            "Le risque de paludisme est limité aux zones forestières de l'intérieur de Bornéo et ne concerne pas les principales zones urbaines et côtières, comme Kuala Lumpur, Langkawi ou Penang. Pour un séjour prolongé ou une exposition importante dans les forêts de Sabah, notamment dans la vallée de Danum, un traitement préventif peut être envisagé avec un médecin spécialisé en médecine des voyages avant le départ.",
        },
        {
          question: "Quel budget prévoir pour un voyage en Malaisie ?",
          answer:
            "Un voyage en Malaisie sur mesure avec Exuma, combinant Kuala Lumpur, un lodge à Sabah et une étape côtière à Langkawi ou Penang, se situe généralement entre 6 000 et 11 000 € par personne pour quinze jours, hors vols internationaux, selon les hôtels et la saison.",
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
        "Les temples et les volcans de l'archipel indonésien, les deux mers de Thaïlande, les récifs et les rizières des Philippines. Trois prolongements possibles en Asie du Sud-Est.",
      slugs: ["indonesie", "thailande", "philippines"],
    },
  ],
};
