import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "thailande",
  name: "Thaïlande",
  placeKind: "country",
  country: "Thaïlande",
  genitive: "de la Thaïlande",
  continentSlug: "asie",
  blurb: "Bangkok, Phang Nga, Phuket, Koh Samui",
  keywords: [
    "thailande",
    "bangkok",
    "phuket",
    "phang nga",
    "koh samui",
    "khao yai",
    "chiang mai",
    "temples",
  ],
  metaTitle: "Thaïlande : Voyage sur mesure",
  metaDescription:
    "Voyage en Thaïlande sur mesure : Bangkok, baie de Phang Nga, Phuket, Koh Samui. Itinéraire écrit par votre travel designer Exuma, conciergerie 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe en Thaïlande",
      heading: "Le pays où l'on choisit sa côte selon le mois",
      description:
        "La Thaïlande possède deux façades maritimes dont les saisons s'inversent. La mer d'Andaman se visite de novembre à mars, le golfe de Thaïlande de février à septembre. Le calendrier commande l'itinéraire, jamais l'inverse.",
      images: [
        {
          src: "/destination/thailande/hero-1.webp",
          alt: "Pitons calcaires émergeant de la baie de Phang Nga en Thaïlande au lever du jour",
        },
        {
          src: "/destination/thailande/hero-2.webp",
          alt: "Toits de tuiles vernissées et chedis dorés du temple de Wat Pho à Bangkok",
        },
        {
          src: "/destination/thailande/hero-3.webp",
          alt: "Longue-queue amarrée devant une plage bordée de cocotiers sur la côte d'Andaman",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir en Thaïlande ?",
      heading:
        "Stéphane, spécialiste de la Thaïlande, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "stephane",
        // TODO: verify quote attribution
        quote:
          "La première fois que j'ai découvert Koh Yao Noi, c'était un après-midi de février. Après quelques minutes en bateau depuis Phuket, le décor change : les routes deviennent calmes, les maisons s'ouvrent sur la végétation. C'est cette Thaïlande que j'aime faire découvrir, des îles préservées, des rencontres locales et des expériences loin des itinéraires classiques. Mais aussi un Bangkok plus intime, entre temples au lever du jour et marchés accompagnés d'un chef. Ce sont ces moments qui rendent un voyage inoubliable.",
        role: "Travel Designer · Thaïlande",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte de la Thaïlande",
      heading: "Une capitale, une forêt, deux mers",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Un voyage en Thaïlande commence presque toujours par Bangkok, et c'est souvent l'étape que l'on raccourcit le plus. À tort. La ville se lit depuis le Chao Phraya, à l'heure où les bateaux de riz remontent le fleuve et où les moines de Wat Pho terminent leurs chants. Le Grand Palais, résidence royale pendant plus de deux siècles, se visite dès l'ouverture : la chaleur et les groupes arrivent ensemble, vers le milieu de la matinée.",
        "À trois heures de route au nord-est, le parc national de Khao Yai change complètement de registre. Premier parc du pays, créé en 1962, inscrit au patrimoine mondial en juillet 2005, il couvre 2 168 km². Plus de trois cents éléphants sauvages y vivent, la population la plus importante de Thaïlande. Les chutes de Heow Suwat, dans le parc, ont servi de décor au film The Beach.",
        "Vient ensuite le choix de la mer. Entre la baie de Phang Nga, Phuket et les îles plus confidentielles comme Koh Yao Noi, la côte d'Andaman offre des paysages spectaculaires et une atmosphère préservée. Plus à l'est, Koh Samui dévoile un autre visage, entre plages sauvages et adresses d'exception. Pour un séjour de quinze jours, je privilégie toujours une seule côte afin de prendre le temps de découvrir chaque lieu.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/thailande/full-image.webp",
        alt: "Voyage en Thaïlande : pitons karstiques et eaux calmes de la baie de Phang Nga au crépuscule",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Thaïlande : la baie de Phang Nga",
      heading: "Ce que l'on gagne à traverser la baie",
      theme: "light",
      paragraphs: [
        "Le bateau part de la marina de Phuket et met environ quarante minutes. Koh Yao Noi apparaît plate, couverte d'hévéas et de rizières. Aucun grand complexe hôtelier sur l'île, des villages de pêcheurs, des buffles sur la route qui la traverse. Depuis la côte est, on voit la ligne des pitons calcaires de la baie sans en partager la fréquentation.",
        "La différence tient à l'heure de départ. Les excursions collectives quittent Phuket vers neuf heures et arrivent groupées sur les mêmes sites, James Bond Island en tête. Un bateau privé part à six heures, entre dans les lagons intérieurs de Koh Hong à marée haute et en ressort avant l'arrivée des premiers groupes. Trois heures d'avance suffisent à voir ces lagons vides.",
      ],
      images: [
        {
          src: "/destination/thailande/split-1.webp",
          alt: "Pêcheur remontant son filet devant les pitons de la baie de Phang Nga",
        },
        {
          src: "/destination/thailande/split-2.webp",
          alt: "Lagon intérieur de Koh Hong encerclé de falaises calcaires, mer d'Andaman",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/thailande/xp-croisiere-samui-1.webp",
          alt: "Jonque thaïlandaise à voiles ocre naviguant au large de Koh Samui en fin de journée",
        },
        right: {
          src: "/destination/thailande/xp-croisiere-samui-2.webp",
          alt: "Côte nord de Koh Samui vue depuis le pont d'un catamaran au coucher du soleil",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Le soir où le vent tombe au large de Samui",
        columns: [
          "On embarque en fin d'après-midi sur une jonque thaïlandaise, gréement ocre et coque en teck, ou sur un catamaran selon le nombre de passagers. Le bateau longe la côte nord de Koh Samui, puis s'écarte vers le large. Vers dix-sept heures, la brise de mer tombe. C'est le moment où l'eau devient plate et où les îles du golfe se détachent une à une sur l'horizon.",
          "La côte se regarde alors depuis l'extérieur, ce qui change la lecture de l'île : les collines couvertes de cocotiers, les toits des maisons posés à la lisière de la plage, et très peu de lumières. Le retour se fait à la nuit tombée, moteur au ralenti. Le bateau reste privatisé, l'équipage sert le dîner à bord si l'on préfère rentrer tard.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Thaïlande",
      heading: "Trois matinées qui donnent le ton du séjour",
      description:
        "Les chants des moines à Wat Pho avant l'ouverture au public, le marché puis les fourneaux de l'école Blue Elephant, la marche jusqu'à la tour d'observation de Khao Yai. Trois matinées, trois registres.",
      slugs: [
        "wat-pho-chants-moines",
        "cours-cuisine-blue-elephant",
        "khao-yai-heow-suwat",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Où séjourner en Thaïlande",
      description:
        "Le premier Aman, ouvert en 1988 sur une cocoteraie de Phuket. Une île de la baie de Phang Nga que l'on rejoint en bateau. Une maison de ville à Bangkok, face au parc de Lumphini. Trois registres pour un même itinéraire.",
      slugs: ["amanpuri", "six-senses-yao-noi", "dusit-thani-bangkok"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage en Thaïlande",
      description:
        "Vol, décalage horaire, monnaie, formalités et saisons : les éléments à connaître pour caler les dates d'un voyage en Thaïlande.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Environ 11 h 20 en direct de Paris à Bangkok (BKK) avec Air France ou Thai Airways, un peu plus au retour à cause des vents. Les vols avec escale à Doha, Dubaï ou Istanbul demandent 14 à 17 heures. Un vol intérieur d'une heure rejoint ensuite Phuket, Krabi ou Koh Samui.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "La Thaïlande reste à UTC+7 toute l'année, sans changement d'heure : c'est l'heure française qui bouge. L'écart est donc de cinq heures pendant l'heure d'été française, et de six heures pendant l'heure d'hiver. L'arrivée se fait généralement en fin de matinée, ce qui laisse une première journée utilisable.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Baht thaïlandais (THB), environ 38 bahts pour un euro en août 2026. Les cartes bancaires sont acceptées partout dans les hôtels et les grands restaurants. Prévoir des espèces pour les marchés, les taxis et les bateaux.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Pas de visa pour un séjour touristique. L'exemption, portée à 60 jours en juillet 2024, repasse à 30 jours pour les Français : la mesure a été approuvée le 19 mai 2026 et prend effet à sa publication au Journal officiel thaïlandais. Une extension de 30 jours reste possible sur place. Passeport valide six mois après le retour. Carte d'arrivée numérique (TDAC) à remplir en ligne entre 72 et 24 heures avant l'arrivée.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin obligatoire. Hépatite A, typhoïde et rappel diphtérie-tétanos-polio-coqueluche recommandés, hépatite B et rage selon le séjour. Aucun risque de paludisme à Bangkok, Chiang Mai ni sur les îles : il ne concerne que certaines zones forestières frontalières. La dengue circule dans tout le pays, le répulsif reste la seule protection.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "De novembre à mars pour Bangkok, Khao Yai et la côte d'Andaman (Phuket, Phang Nga), avec un risque de pluie en novembre et en mars. De février à septembre pour Koh Samui et le golfe, qui reçoit ses pluies d'octobre à décembre. Novembre est le mois à éviter à Samui. Avril est le plus chaud du pays.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "Le thaï, langue officielle, avec cinq tons et un alphabet propre. L'anglais est parlé dans les hôtels, les restaurants et par les guides.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Tropical, de 24 à 35 °C toute l'année. Saison sèche de novembre à février, chaleur sèche en mars et avril, mousson du sud-ouest de mai à octobre sur la côte d'Andaman. Le golfe reçoit la sienne d'octobre à décembre, ce qui décale les deux calendriers.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Chaque dossier Thaïlande mobilise plusieurs expertises. Un interlocuteur unique en assure la coordination et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/thailande/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.webp`,
          alt: [
            "Itinéraire sur mesure en Thaïlande entre Bangkok, Khao Yai et la mer d'Andaman",
            "Adresses confidentielles en Thaïlande : tables de quartier et îles peu fréquentées",
            "Hébergements en Thaïlande : Amanpuri à Phuket et Six Senses Yao Noi",
            "Conciergerie privée 24/7 pour un voyage en Thaïlande",
            "Expériences immersives en Thaïlande : Wat Pho, Blue Elephant et Khao Yai",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables en Thaïlande",
      heading: "Six territoires, du Chao Phraya au golfe",
      description:
        "De Bangkok aux pitons de Phang Nga, de la forêt de Khao Yai aux collines de Chiang Mai : six secteurs que peu d'itinéraires réunissent dans un même voyage.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      initialZoom: 5,
      places: [
        {
          title: "Bangkok et le Chao Phraya",
          description:
            "La ville s'est construite autour du fleuve, et c'est encore la façon la plus rapide de la traverser. Wat Pho, le plus ancien temple de Bangkok, réunit plus de mille bouddhas et l'école de massage traditionnel la plus ancienne du pays.",
          image: {
            src: "/destination/thailande/map-bangkok.webp",
            alt: "Bateaux longue-queue sur le Chao Phraya devant les temples de Bangkok",
          },
          // TODO: verify coords
          coordinates: { lat: 13.7563, lng: 100.5018 },
        },
        {
          title: "Khao Yai, la forêt du nord-est",
          description:
            "Premier parc national du pays, créé en 1962 et inscrit au patrimoine mondial en 2005. Il abrite plus de trois cents éléphants sauvages sur 2 168 km². Des vignobles se sont installés sur le plateau, en lisière du parc.",
          image: {
            src: "/destination/thailande/map-khao-yai.webp",
            alt: "Forêt tropicale et chutes de Heow Suwat dans le parc national de Khao Yai",
          },
          // TODO: verify coords
          coordinates: { lat: 14.4396, lng: 101.372 },
        },
        {
          title: "La baie de Phang Nga",
          description:
            "Le parc national d'Ao Phang Nga couvre environ 400 km² et une quarantaine d'îles calcaires, creusées de lagons intérieurs accessibles à marée haute. Koh Yao Noi, au milieu de la baie, vit encore de la pêche et de l'hévéa.",
          image: {
            src: "/destination/thailande/map-phang-nga.webp",
            alt: "Pitons karstiques de la baie de Phang Nga vus depuis Koh Yao Noi",
          },
          // TODO: verify coords
          coordinates: { lat: 8.2667, lng: 98.5 },
        },
        {
          title: "Phuket, côte ouest",
          description:
            "L'île fait 543 km² et se traverse en une heure. Sa côte nord-ouest, autour de Pansea Beach et de Bang Tao, reste la plus calme. Le sud concentre l'activité et les plages saturées.",
          image: {
            src: "/destination/thailande/map-phuket.webp",
            alt: "Plage bordée de cocotiers sur la côte nord-ouest de Phuket",
          },
          // TODO: verify coords
          coordinates: { lat: 7.9519, lng: 98.3381 },
        },
        {
          title: "Koh Samui et le golfe",
          description:
            "Deuxième île du pays par la taille, 228 km², avec une saison sèche de février à septembre, inverse de celle d'Andaman. Le parc marin d'Ang Thong, à deux heures de bateau, réunit quarante-deux îles classées depuis 1980.",
          image: {
            src: "/destination/thailande/map-samui.webp",
            alt: "Côte de Koh Samui bordée de cocotiers dans le golfe de Thaïlande",
          },
          // TODO: verify coords
          coordinates: { lat: 9.512, lng: 100.0136 },
        },
        {
          title: "Chiang Mai et les collines du nord",
          description:
            "Ancienne capitale du royaume de Lanna, fondée en 1296, encore ceinte de ses douves. Les sanctuaires d'éléphants de la vallée du Mae Taeng travaillent sans monte ni spectacle.",
          image: {
            src: "/destination/thailande/map-chiang-mai.webp",
            alt: "Temple lanna et collines boisées aux abords de Chiang Mai",
          },
          // TODO: verify coords
          coordinates: { lat: 18.7883, lng: 98.9853 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage en Thaïlande",
      description:
        "Huit points de repère issus du terrain. Ils servent à choisir la côte, à calibrer les attentes et à comprendre le choix de certaines étapes.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          title: "Les deux moussons et le choix de la côte",
          cardEyebrow: "Saisons",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La côte d'Andaman est sèche de novembre à mars, le golfe de février à septembre. Les deux calendriers sont décalés",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La Thaïlande a deux mers et deux régimes de pluie. La mer
                d&apos;Andaman, à l&apos;ouest (Phuket, Phang Nga, Krabi),
                reçoit la mousson du sud-ouest de mai à octobre. Le golfe de
                Thaïlande, à l&apos;est (Koh Samui, Koh Phangan), reçoit la
                sienne d&apos;octobre à décembre, novembre étant le mois le plus
                arrosé.
              </p>
              <p>
                Conséquence pratique : entre novembre et avril, on part côté
                Andaman. Entre juin et septembre, on part côté golfe, alors que
                Phuket est sous la pluie. Vouloir les deux côtes dans un même
                voyage revient toujours à sacrifier l&apos;une des deux.
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
          title: "La tenue dans les temples",
          cardEyebrow: "Usages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Épaules et genoux couverts, chaussures retirées. Le Grand Palais refuse l'entrée aux tenues non conformes",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les temples sont des lieux de culte en activité. Épaules
                couvertes, jambes couvertes jusqu&apos;au genou, chaussures
                retirées avant d&apos;entrer dans une salle contenant un
                bouddha. Le Grand Palais et Wat Phra Kaeo appliquent la règle
                strictement et refusent l&apos;entrée sur place.
              </p>
              <p>
                Deux points moins connus. On ne tourne jamais la plante des
                pieds vers une statue, ce qui implique de s&apos;asseoir jambes
                repliées sur le côté. Les femmes ne remettent pas un objet
                directement dans la main d&apos;un moine : elles le posent
                devant lui.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Un paréo léger dans le sac règle la question pour la journée, et
                les visites de temples se font le matin, avant la chaleur.
              </p>
            </div>
          ),
        },
        {
          title: "Circuler dans Bangkok",
          cardEyebrow: "Logistique",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le fleuve et le métro aérien vont plus vite que la voiture. Aux heures de pointe, l'écart se compte en heures",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Bangkok compte plus de dix millions d&apos;habitants et les
                embouteillages y sont structurels. Entre 7 h et 9 h 30, puis
                entre 16 h et 19 h 30, un trajet de six kilomètres en voiture
                peut demander une heure.
              </p>
              <p>
                Deux réseaux échappent à cela. Le Chao Phraya, remonté en bateau
                privé, dessert Wat Pho, le Grand Palais et la plupart des hôtels
                de rive. Le BTS, métro aérien, couvre Silom, Sukhumvit et
                Siam.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Les transferts sont calés hors des heures de pointe et les
                visites du matin sont organisées par le fleuve quand la
                géographie le permet.
              </p>
            </div>
          ),
        },
        {
          title: "Formalités et carte d'arrivée",
          cardEyebrow: "Formalités",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Pas de visa pour un séjour touristique, mais l'exemption repasse de 60 à 30 jours et une carte d'arrivée numérique est obligatoire",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les ressortissants français entrent en Thaïlande sans visa pour
                un séjour touristique. La durée de cette exemption change :
                portée à 60 jours en juillet 2024, elle repasse à 30 jours, une
                décision approuvée par le cabinet thaïlandais le 19 mai 2026 et
                applicable dès sa publication au Journal officiel du royaume.
                Une extension de 30 jours reste possible sur place, auprès de
                l&apos;immigration. Le passeport doit être valide six mois après
                la date de retour.
              </p>
              <p>
                Une carte d&apos;arrivée numérique, la Thailand Digital Arrival
                Card, est obligatoire pour tous les voyageurs étrangers depuis
                le 1er mai 2025, y compris les enfants. Elle se remplit en ligne
                entre 72 et 24 heures avant l&apos;arrivée, sur le portail
                officiel de l&apos;immigration. Une demande envoyée plus tôt est
                rejetée. La démarche est gratuite : les sites qui la facturent
                sont des intermédiaires.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Le lien officiel et le rappel de délai sont envoyés avec le
                carnet de voyage. Les billets de sortie du territoire, parfois
                demandés à l&apos;enregistrement, sont fournis dans le dossier.
              </p>
            </div>
          ),
        },
        {
          title: "Santé, eau et cuisine de rue",
          cardEyebrow: "Santé",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Aucun vaccin obligatoire. Eau en bouteille, glaçons industriels, répulsif contre la dengue",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Aucune vaccination n&apos;est exigée à l&apos;entrée.
                L&apos;hépatite A, la typhoïde et le rappel
                diphtérie-tétanos-polio-coqueluche sont recommandés, auxquels
                s&apos;ajoutent l&apos;hépatite B et la rage selon la durée et
                la nature du séjour. Comptez un rendez-vous en centre de
                vaccinations internationales quatre à six semaines avant le
                départ, certains vaccins demandant plusieurs injections. Le
                paludisme, lui, ne concerne que quelques zones forestières
                frontalières : il n&apos;existe pas à Bangkok, à Chiang Mai ni
                sur les îles.
              </p>
              <p>
                L&apos;eau du robinet ne se boit pas. Les glaçons cylindriques
                percés d&apos;un trou sont d&apos;origine industrielle et ne
                posent pas de problème. La cuisine de rue est sûre dans les
                stands à forte rotation, où l&apos;on voit la cuisson se faire.
              </p>
              <p>
                La dengue circule dans tout le pays, avec un pic pendant la
                mousson, et le chikungunya progresse également. Le moustique
                vecteur pique de jour. Le répulsif reste la seule protection
                efficace.
              </p>
            </div>
          ),
        },
        {
          title: "Les éléphants et les sanctuaires",
          cardEyebrow: "Rencontre",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La monte à dos abîme la colonne de l'animal. Les structures sérieuses ne proposent ni monte ni spectacle",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La colonne vertébrale de l&apos;éléphant d&apos;Asie ne supporte
                pas le poids d&apos;une nacelle sur la durée. Les camps qui
                proposent la monte, le bain collectif ou les numéros de peinture
                reposent sur un dressage contraint.
              </p>
              <p>
                Les structures sérieuses fonctionnent autrement : les animaux
                vivent en groupe, on les observe à distance et l&apos;on
                participe éventuellement à la préparation de la nourriture. La
                vallée du Mae Taeng, au nord de Chiang Mai, en compte plusieurs.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous ne plaçons aucune activité de monte dans un itinéraire,
                même sur demande. Les sanctuaires que nous retenons sont visités
                avant d&apos;être proposés.
              </p>
            </div>
          ),
        },
        {
          title: "Vols intérieurs et transferts en bateau",
          cardEyebrow: "Logistique",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Une heure de vol depuis Bangkok pour les îles. Koh Yao Noi se rejoint ensuite en bateau privé",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Bangkok Airways, Thai Airways et Thai Vietjet relient Bangkok à
                Phuket, Krabi et Koh Samui en une heure environ. L&apos;aéroport
                de Koh Samui appartient à Bangkok Airways, ce qui limite le
                nombre de compagnies desservant l&apos;île et maintient les
                tarifs à un niveau élevé.
              </p>
              <p>
                Koh Yao Noi ne dispose pas d&apos;aéroport. On y accède depuis la
                marina de Phuket ou depuis Krabi, en quarante minutes de bateau.
                Le transfert se fait en vedette privée, ce qui dispense des
                horaires de ferry et permet d&apos;arriver de nuit.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Les vols intérieurs limitent souvent les bagages à 20 kg en
                soute. Le supplément se règle à la réservation, pas à
                l&apos;aéroport.
              </p>
            </div>
          ),
        },
        {
          title: "Argent, pourboires et marchandage",
          cardEyebrow: "Budget",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Cartes acceptées dans les hôtels, espèces pour les marchés et les bateaux. Le pourboire n'est pas systématique",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La monnaie est le baht. Les cartes bancaires passent partout dans
                les hôtels, les grands restaurants et les centres commerciaux.
                Les marchés, les taxis, les stands de rue et les bateaux
                fonctionnent en espèces. Les distributeurs prélèvent une
                commission fixe par retrait, ce qui incite à retirer des
                montants plus élevés.
              </p>
              <p>
                Le pourboire ne fait pas partie des usages obligatoires, mais il
                est courant d&apos;arrondir l&apos;addition et de laisser
                l&apos;équivalent de quelques euros au guide ou au chauffeur en
                fin de journée.
              </p>
              <p>
                Le marchandage se pratique sur les marchés et dans les boutiques
                de rue, jamais dans les commerces à prix affiché. Il se fait
                sans insistance et en souriant : la fermeté sèche met fin à la
                discussion.
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
            "Nous avions déjà fait la Thaïlande il y a vingt ans et nous en gardions un souvenir moyen. Le passage par Koh Yao Noi a tout changé. Deux hôtels sur l'île, des buffles sur la route, et la baie en face.",
          image: {
            src: "/destination/thailande/hero-1.webp",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Bangkok et mer d'Andaman, février 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Nous sommes partis en mer à six heures pour les lagons de Koh Hong, au moment où la lumière est la plus belle. Nous y sommes restés seuls une heure. Les autres bateaux arrivaient quand nous repartions, pour un petit-déjeuner à bord.",
          image: {
            src: "/destination/thailande/hero-2.webp",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Thaïlande en famille, décembre 2024", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Les enfants ont retenu le cours de cuisine autant que les plages. Le marché le matin avec le chef, puis les fourneaux. Ils refont le curry vert à Paris, avec les épices rapportées dans la valise.",
          image: {
            src: "/destination/thailande/hero-3.webp",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Bangkok et Koh Samui, juillet 2025", // TODO: replace with real testimonial
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
          question: "Quelle est la meilleure période pour partir en Thaïlande ?",
          answer:
            "De novembre à mars pour Bangkok, Khao Yai et la côte d'Andaman (Phuket, Phang Nga, Krabi) : c'est la saison sèche et la moins chaude. De février à septembre pour Koh Samui et le golfe de Thaïlande, qui reçoit ses pluies d'octobre à décembre, novembre étant le mois à éviter sur cette côte. Avril est le mois le plus chaud du pays. Les deux côtes n'ont pas le même calendrier, ce qui détermine l'itinéraire avant tout autre choix.",
        },
        {
          question: "Combien de temps dure le vol Paris-Bangkok ?",
          answer:
            "Environ 11 heures en vol direct avec Air France ou Thai Airways, et un peu plus de 12 heures au retour en raison des vents dominants. Avec une escale à Doha, Dubaï, Istanbul ou Singapour, comptez 14 à 17 heures selon la correspondance. Un vol intérieur d'une heure relie ensuite Bangkok à Phuket, Krabi ou Koh Samui.",
        },
        {
          question: "Faut-il un visa pour aller en Thaïlande ?",
          answer:
            "Non, les ressortissants français bénéficient d'une exemption de visa pour un séjour touristique. Attention, sa durée change : portée à 60 jours en juillet 2024, elle repasse à 30 jours, une décision approuvée le 19 mai 2026 et applicable dès sa publication au Journal officiel thaïlandais. Une extension de 30 jours reste possible sur place. Le passeport doit être valide six mois après la date de retour. Une carte d'arrivée numérique, la Thailand Digital Arrival Card, est par ailleurs obligatoire : elle se remplit gratuitement en ligne, entre 72 et 24 heures avant l'arrivée, sur le portail officiel de l'immigration thaïlandaise.",
        },
        {
          question: "Que faire en Thaïlande en 15 jours ?",
          answer:
            "Trois nuits à Bangkok pour le fleuve, Wat Pho, le Grand Palais et un cours de cuisine, deux nuits à Khao Yai pour la forêt et les éléphants sauvages, puis huit à neuf nuits sur une seule côte. Entre novembre et avril, ce sera la baie de Phang Nga et Phuket. Entre juin et septembre, Koh Samui et le golfe. Un vol intérieur d'une heure sépare Bangkok de chacune de ces îles.",
        },
        {
          question: "Phuket ou Koh Samui : quelle île choisir ?",
          answer:
            "La réponse dépend des dates plus que des goûts. Phuket et la baie de Phang Nga sont au sec de novembre à avril et donnent accès aux pitons calcaires et à Koh Yao Noi, en bateau. Koh Samui, dans le golfe, est au sec de février à septembre et reste plus compacte, avec le parc marin d'Ang Thong à deux heures de navigation. En juillet et août, Koh Samui est le choix le plus sûr.",
        },
        {
          question: "Quel budget prévoir pour un voyage en Thaïlande ?",
          answer:
            "Un voyage en Thaïlande sur mesure avec Exuma, combinant Bangkok, une étape de forêt et une île de la mer d'Andaman, se situe généralement entre 6 000 et 12 000 € par personne pour quinze jours, hors vols internationaux, selon les hôtels et la saison. Les deux semaines de Noël et du Nouvel An constituent la haute saison la plus tendue de l'année sur la côte d'Andaman.",
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
        "Les temples et les rizières vus depuis l'archipel indonésien, deux îles de l'océan Indien où la saison sèche tombe à d'autres mois. Trois prolongements possibles.",
      slugs: ["indonesie", "maurice", "seychelles"],
    },
  ],
};
