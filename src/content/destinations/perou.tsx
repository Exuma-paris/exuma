import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "perou",
  name: "Pérou",
  placeKind: "country",
  country: "Pérou",
  genitive: "du Pérou",
  continentSlug: "ameriques",
  blurb: "Machu Picchu, Cusco, Vallée Sacrée, Amazonie, Titicaca",
  keywords: [
    "perou",
    "machu picchu",
    "cusco",
    "vallee sacree",
    "amazonie",
    "titicaca",
    "lima",
    "andes",
  ],
  metaTitle: "Pérou : Voyage sur mesure",
  metaDescription:
    "Voyage au Pérou sur mesure : Machu Picchu, Vallée Sacrée, Amazonie et lac Titicaca. Itinéraire conçu par votre travel designer Exuma, conciergerie privée 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe au Pérou",
      heading:
        "Le Pérou ne se traverse pas à plat, il se lit par paliers d'altitude",
      description:
        "Lima au niveau de la mer, Cusco à 3 400 mètres, le col d'Abra Málaga à plus de 4 300 mètres avant la descente vers la jungle. Le Machu Picchu, redécouvert par Hiram Bingham en 1911, la Vallée Sacrée, le lac Titicaca, le plus haut lac navigable du monde : chaque étape répond à une logique d'altitude. Nous construisons cette logique depuis le premier échange.",
      images: [
        {
          src: "/destination/perou/hero-1.png",
          alt: "Citadelle du Machu Picchu entourée de sommets andins au Pérou",
        },
        {
          src: "/destination/perou/hero-2.png",
          alt: "Terrasses agricoles incas de Moray dans la Vallée Sacrée du Pérou",
        },
        {
          src: "/destination/perou/hero-3.png",
          alt: "Îles flottantes des Uros sur le lac Titicaca au coucher du soleil",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir au Pérou ?",
      heading: "Tainà, spécialiste du Pérou, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "taina",
        // TODO: verify quote attribution
        quote:
          "Le Pérou se découvre à son rythme. À Cusco, les premiers jours d'acclimatation font pleinement partie du voyage : ils permettent de prendre le temps de s'adapter à l'altitude, de profiter pleinement de chaque étape et de savourer ce qui suit, jusqu'au premier matin devant le Machu Picchu.",
        role: "Travel Designer · Pérou",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte du Pérou",
      heading: "Le Pérou, un voyage entre les hauteurs",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Un voyage au Pérou se lit en altitude avant de se lire en kilomètres. Lima au niveau de la mer, Cusco à 3 400 mètres, le col d'Abra Málaga à plus de 4 300 mètres avant la descente vers la jungle : chaque étape change l'air qu'on respire, et ce que le corps ressent le lendemain matin.",
        "La logique d'un itinéraire péruvien se construit à l'envers d'un guide classique. Deux jours à Cusco avant toute chose, pour que le corps s'habitue. La Vallée Sacrée ensuite : Ollantaytambo, les terrasses circulaires de Moray, les salines de Maras qui blanchissent au soleil depuis le XVe siècle. Le train, Vistadome ou Hiram Bingham, remonte la vallée jusqu'à Aguas Calientes. Le Machu Picchu se découvre au matin, avant que les premiers cars n'arrivent de la vallée.",
        "« Il n'y a pas un Pérou. Il y a le désert du Pacifique à Lima, la cordillère à Cusco, et l'Amazonie qui commence à moins de deux heures de vol de la capitale. Le voyage consiste à passer de l'un à l'autre sans perdre le fil. »",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/perou/full-image.png",
        alt: "Vue aérienne de la citadelle du Machu Picchu au lever du jour, Pérou",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Cusco, avant que la ville ne s'éveille",
      heading: "Le matin où les pierres incas appartiennent encore à la ville",
      theme: "light",
      paragraphs: [
        "À Cusco, la Plaza de Armas se traverse à six heures du matin sans un touriste. Les pierres incas de Sacsayhuamán, taillées sans mortier avec une précision qui déjoue encore les ingénieurs, gardent la fraîcheur de la nuit. Un guide raconte comment les Espagnols ont bâti leurs églises directement sur les fondations incas, pierre sur pierre, sans jamais réussir à les remplacer entièrement.",
        "Plus haut, vers le Cristo Blanco, la ville entière apparaît dans la cuvette de la vallée, les toits de tuile rouge encadrés par des sommets encore dans l'ombre. Le marché de San Pedro ouvre à la même heure : les vendeuses de fromage de brebis et de maïs géant du Cusco s'installent avant les premiers cars de visiteurs.",
      ],
      images: [
        {
          src: "/destination/perou/split-1.png",
          alt: "Ruelle pavée de pierres incas dans le centre historique de Cusco",
        },
        {
          src: "/destination/perou/split-2.png",
          alt: "Marché de San Pedro à Cusco au petit matin",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/perou/xp-machu-picchu-aube-1.png",
          alt: "Première lumière sur la citadelle du Machu Picchu avant l'arrivée des visiteurs",
        },
        right: {
          src: "/destination/perou/xp-machu-picchu-aube-2.png",
          alt: "Escalier inca menant vers la Porte du Soleil au Machu Picchu",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Entrer quand la citadelle est encore vide",
        columns: [
          "Le Machu Picchu reste un site public, régulé par des quotas quotidiens fixés par le ministère de la Culture péruvien. Ce qui se négocie, c'est l'heure. En dormant au Sanctuary Lodge, le seul hôtel aux portes du site, on franchit les grilles dès l'ouverture, avant l'arrivée des premiers trains depuis Aguas Calientes.",
          "Pendant près d'une heure, parfois plus selon la saison, la citadelle appartient à ceux qui ont fait ce choix. Le brouillard se lève sur le Huayna Picchu, les lamas broutent entre les terrasses, et le silence n'a pas encore été rompu par les groupes.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Pérou",
      heading: "Nos coups de cœur en Pérou",
      description:
        "Trois expériences qui prennent vie dans des lieux et des rencontres singulières : un chef d'altitude à Lima, un archéologue dans la Vallée Sacrée, un naturaliste en Amazonie. Aucune n'est démonstrative.",
      slugs: [
        "table-chef-central-lima",
        "vallee-sacree-archeologue-prive",
        "immersion-amazonie-naturaliste",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Où séjourner",
      description:
        "Trois adresses choisies pour ce qu'elles permettent, pas pour ce qu'elles affichent : la citadelle aux portes de l'hôtel, un couvent du XVIe siècle à Cusco, une réserve privée en Amazonie.",
      slugs: [
        "belmond-sanctuary-lodge",
        "belmond-palacio-nazarenas",
        "inkaterra-reserva-amazonica",
      ],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Avant le départ",
      heading: "Ce qu'il faut savoir avant de partir au Pérou",
      description:
        "Monnaie, formalités, vaccin, temps de vol, décalage et meilleure saison : l'essentiel pour préparer le voyage sereinement.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Environ 12h30 de vol direct depuis Paris-CDG avec Air France, ou 13 à 16 heures avec une escale via Madrid, Amsterdam ou Bogotá selon la compagnie choisie.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "6 heures de retard sur la France en hiver et 7 heures en été. Le Pérou ne change pas d'heure au cours de l'année.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Sol péruvien (PEN). Les cartes sont largement acceptées à Lima et Cusco, mais prévoyez également des espèces, notamment dans les petites villes et les zones rurales.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Passeport valable au moins 6 mois à compter de l'arrivée au Pérou. Aucun visa requis pour les ressortissants français pour un séjour touristique de moins de 90 jours.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "La fièvre jaune est vivement recommandée en cas de séjour en Amazonie, notamment dans la région de Tambopata et de Puerto Maldonado. Elle n'est pas recommandée pour Cusco ou le Machu Picchu. Aucun vaccin n'est obligatoire pour entrer au Pérou depuis la France.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "De mai à septembre pour Cusco, la Vallée Sacrée et le Machu Picchu, pendant la saison sèche en altitude. L'Amazonie se visite toute l'année, avec une période plus sèche de mai à octobre.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "Espagnol, quechua et aymara selon les régions. Dans les zones touristiques, l'anglais est généralement compris dans les hôtels et établissements haut de gamme, mais reste moins courant ailleurs.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Cusco et la Vallée Sacrée bénéficient d'un climat frais en altitude, avec des journées douces et des nuits fraîches, voire froides pendant la saison sèche. Lima connaît un climat doux et très humide, souvent couvert de mai à octobre. En Amazonie, le climat est chaud et humide toute l'année, avec une saison plus sèche de mai à octobre.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Pérou. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/perou/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Carte d'itinéraire personnalisé au Pérou",
            "Ruelle du centre historique de Cusco",
            "Suite avec vue sur la Vallée Sacrée du Pérou",
            "Concierge Exuma coordonnant un transfert privé au Pérou",
            "Guide privé commentant les terrasses incas de Moray",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables au Pérou",
      heading: "Six lieux, et ce qu'il y a derrière",
      description:
        "Cusco, le Machu Picchu, la Vallée Sacrée, le lac Titicaca, l'Amazonie et Lima : chaque étape répond à une raison précise dans un itinéraire péruvien.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      initialZoom: 6,
      places: [
        {
          title: "Cusco, la capitale inca",
          description:
            "La ville s'organise autour de la Plaza de Armas, bâtie sur les fondations du Qorikancha, le temple du Soleil. Capitale de l'empire jusqu'en 1533.",
          image: {
            src: "/destination/perou/map-cusco.png",
            alt: "Plaza de Armas de Cusco entourée de sommets andins",
          },
          coordinates: { lat: -13.5319, lng: -71.9675 },
        },
        {
          title: "Machu Picchu, la citadelle suspendue",
          description:
            "Cité inca du XVe siècle, redécouverte par l'explorateur Hiram Bingham en 1911. Perchée à 2 430 mètres, invisible depuis la vallée en contrebas.",
          image: {
            src: "/destination/perou/map-machu-picchu.png",
            alt: "Citadelle du Machu Picchu et le Huayna Picchu en arrière-plan",
          },
          coordinates: { lat: -13.1631, lng: -72.545 },
        },
        {
          title: "Vallée Sacrée, Moray et Maras",
          description:
            "Les terrasses circulaires de Moray servaient de laboratoire agricole inca. À quelques kilomètres, les salines de Maras sont exploitées depuis le XVe siècle.",
          image: {
            src: "/destination/perou/map-vallee-sacree.png",
            alt: "Terrasses agricoles circulaires de Moray dans la Vallée Sacrée",
          },
          coordinates: { lat: -13.33, lng: -72.19 }, // TODO: verify coords
        },
        {
          title: "Lac Titicaca, le plus haut lac navigable",
          description:
            "À 3 812 mètres d'altitude, le lac partagé avec la Bolivie abrite les Uros, qui vivent sur des îles flottantes tissées en roseau totora.",
          image: {
            src: "/destination/perou/map-titicaca.png",
            alt: "Île flottante des Uros sur le lac Titicaca",
          },
          coordinates: { lat: -15.8402, lng: -69.335 }, // TODO: verify coords
        },
        {
          title: "Amazonie, réserve de Tambopata",
          description:
            "À moins de deux heures de vol de Lima, la réserve nationale de Tambopata concentre l'une des plus grandes biodiversités de la planète.",
          image: {
            src: "/destination/perou/map-amazonie.png",
            alt: "Canopée de la réserve de Tambopata en Amazonie péruvienne",
          },
          coordinates: { lat: -12.8333, lng: -69.2833 }, // TODO: verify coords
        },
        {
          title: "Lima, entre Pacifique et gastronomie",
          description:
            "Le quartier de Barranco, bohème et colonial, borde le Pacifique. La capitale concentre une partie de la gastronomie la plus reconnue d'Amérique du Sud.",
          image: {
            src: "/destination/perou/map-lima.png",
            alt: "Falaises de Barranco surplombant le Pacifique à Lima",
          },
          coordinates: { lat: -12.0464, lng: -77.0428 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage au Pérou",
      description:
        "Huit repères de terrain pour préparer un séjour entre Andes, Amazonie et Pacifique sans mauvaise surprise.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          title: "Dans ma valise",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Vêtements en couches, protection UV en altitude, comprimés contre le mal des montagnes.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: passeport valide six mois après le retour. Pas de visa
                pour les ressortissants français pour un séjour de moins de 90
                jours.
              </p>
              <h4 className="font-medium">L&apos;essentiel :</h4>
              <p>
                TODO: vêtements en couches pour l&apos;amplitude thermique de
                Cusco (froid le matin, soleil fort en journée), vêtements
                légers et anti-moustiques pour l&apos;Amazonie, crème solaire
                haute protection pour l&apos;altitude.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Nos clients reçoivent une checklist personnalisée selon les
                étapes prévues, environ trois semaines avant le départ.
              </p>
            </div>
          ),
        },
        {
          title: "L'acclimatation à Cusco",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Deux jours avant toute activité intense. Le corps a besoin de ce temps à 3 400 mètres.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Cusco se situe à 3 400 mètres. Le mal des montagnes (soroche)
                touche une partie des voyageurs les premières 24 à 48 heures :
                fatigue, tête lourde, souffle court. La coca en infusion aide
                certains, sans remplacer le repos.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Nous inscrivons systématiquement deux jours d&apos;étape à
                Cusco avant toute marche ou visite intense, et avant la
                descente vers le Machu Picchu qui, lui, se situe plus bas en
                altitude.
              </p>
            </div>
          ),
        },
        {
          title: "Les quotas du Machu Picchu",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Billets limités et horodatés par le ministère de la Culture. À réserver plusieurs mois à l'avance.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: le site limite le nombre d&apos;entrées quotidiennes et
                répartit les visiteurs en créneaux horaires et en circuits
                fixes. Les billets pour la haute saison (mai à septembre) se
                réservent souvent plusieurs mois à l&apos;avance.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous réservons les billets, le train et le guide dès la
                confirmation du voyage, et ajustons le créneau au reste de
                l&apos;itinéraire.
              </p>
            </div>
          ),
        },
        {
          title: "Le train vers la citadelle",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "PeruRail et IncaRail relient Ollantaytambo ou Poroy à Aguas Calientes.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Deux compagnies desservent Aguas Calientes, au pied du Machu
                Picchu : PeruRail et IncaRail. Le trajet depuis Ollantaytambo
                dure environ 1h30, en suivant l&apos;Urubamba.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                TODO: le Vistadome offre de larges baies vitrées ; le Hiram
                Bingham, plus rare, inclut un wagon-bar et un dîner à bord.
                Nous choisissons selon l&apos;heure d&apos;arrivée souhaitée à
                la citadelle.
              </p>
            </div>
          ),
        },
        {
          title: "Santé",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Fièvre jaune pour l'Amazonie, rien d'obligatoire pour les Andes.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: vaccin fièvre jaune recommandé pour l&apos;Amazonie
                (Tambopata, Puerto Maldonado), pas nécessaire pour Cusco, la
                Vallée Sacrée ou le Machu Picchu. Vaccinations universelles à
                jour.
              </p>
              <p>Eau en bouteille recommandée partout hors grands hôtels.</p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Trousse de pharmacie de voyage classique, complétée par un
                traitement contre le mal des montagnes si le médecin le
                recommande.
              </p>
            </div>
          ),
        },
        {
          title: "Meilleure période",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Mai à septembre pour les Andes, juin à octobre pour l'Amazonie.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: de mai à septembre, saison sèche dans les Andes : ciel
                dégagé sur le Machu Picchu et la Vallée Sacrée, nuits froides
                à Cusco. De décembre à mars, saison humide, sentiers parfois
                fermés (dont le Chemin de l&apos;Inca en février).
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                L&apos;Amazonie se visite toute l&apos;année ; juin à octobre
                offre des rivières plus basses et davantage de marche à pied
                dans la réserve.
              </p>
            </div>
          ),
        },
        {
          title: "Budget & Vie locale",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Sol péruvien, marchés de producteurs, pourboire apprécié mais non systématique.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: sol péruvien (PEN). Cartes largement acceptées à Lima et
                Cusco, espèces recommandées en Vallée Sacrée et en Amazonie.
                Pourboire non obligatoire mais apprécié (5 à 10 % au
                restaurant).
              </p>
              <p>
                Marché de San Pedro à Cusco, marché de Chinchero le dimanche :
                textiles, maïs géant, fromage de brebis.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous organisons systématiquement les transferts privés,
                chauffeur ou vol intérieur selon l&apos;étape.
              </p>
            </div>
          ),
        },
        {
          title: "L'Amazonie, saison sèche ou humide",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La saison sèche facilite la marche, la saison humide révèle une rivière plus haute et davantage de faune aquatique.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: la réserve de Tambopata se parcourt en bateau depuis
                Puerto Maldonado. La saison sèche (juin à octobre) facilite la
                marche en forêt ; la saison humide (décembre à mars) fait
                monter le niveau des rivières et révèle davantage de faune
                aquatique.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Deux à trois nuits en réserve suffisent pour un rythme
                sorties à l&apos;aube, sieste, sorties nocturnes, sans lasser
                les enfants ni les adultes.
              </p>
            </div>
          ),
        },
      ],
    },

    {
      type: "spotsList",
      eyebrow: "Récits de voyage",
      heading: "Trois scènes d'un voyage au Pérou",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      spots: [
        {
          title: "Deux jours à Cusco avant de bouger",
          description:
            "L'acclimatation conditionne le reste. Cusco d'abord, la Vallée Sacrée ensuite, le Machu Picchu à l'aube : l'ordre n'est pas négociable.",
        },
        {
          title: "Le Machu Picchu avant les premiers trains",
          description:
            "Dormir au Sanctuary Lodge donne accès au site avant l'arrivée des trains. C'est la seule façon de le voir vide.",
        },
        {
          title: "L'Amazonie après les Andes",
          description:
            "Tambopata avec un naturaliste dédié. Deux pays dans un seul voyage, et un rythme qui n'a rien de touristique.",
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
          question: "Quelle est la meilleure période pour partir au Pérou ?",
          answer:
            "De mai à septembre pour les Andes (Cusco, Vallée Sacrée, Machu Picchu), pendant la saison sèche, avec généralement des journées lumineuses et des nuits fraîches en altitude. L'Amazonie se visite toute l'année, avec une saison plus sèche de mai à octobre.",
        },
        {
          question: "Combien de temps dure un vol depuis Paris pour le Pérou ?",
          answer:
            "Comptez environ 12h30 de vol direct depuis Paris-CDG avec Air France, ou 13 à 16 heures avec une escale selon l'itinéraire choisi. Madrid, Amsterdam ou Bogotá figurent notamment parmi les possibilités.",
        },
        {
          question: "Faut-il un visa pour aller au Pérou ?",
          answer:
            "Non. Les ressortissants français n'ont pas besoin de visa pour un séjour touristique de moins de 90 jours. Le passeport doit être valable au moins six mois à compter de la date d'arrivée au Pérou.",
        },
        {
          question: "Comment s'acclimater à l'altitude à Cusco ?",
          answer:
            "Cusco se situe à environ 3 400 mètres d'altitude. Prévoyez les premières 24 à 48 heures à un rythme tranquille, en évitant les efforts physiques importants et l'alcool, le temps de vous acclimater. Une montée progressive en altitude réduit le risque de mal aigu des montagnes.",
        },
        {
          question: "Combien de temps prévoir pour un voyage au Pérou ?",
          answer:
            "Comptez au moins 5 jours pour découvrir Cusco, la Vallée Sacrée et le Machu Picchu dans de bonnes conditions, en intégrant le temps d'acclimatation. Deux semaines permettent d'enrichir le voyage avec le lac Titicaca ou une immersion en Amazonie.",
        },
        {
          question: "Quel budget prévoir pour un voyage au Pérou ?",
          answer:
            "Nos voyages sur mesure s'adaptent à chaque projet. À titre indicatif, comptez autour de 9 000 € par personne pour un séjour de deux semaines, selon les hébergements choisis, les expériences privées et la saison.",
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
        "Trois autres pays où la même philosophie guide nos voyages : une progression pensée, des expériences révélées par notre connaissance du terrain.",
      slugs: ["colombie", "republique-dominicaine", "kenya"],
    },
  ],
};
