import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "chine",
  name: "Chine",
  placeKind: "country",
  country: "Chine",
  genitive: "de la Chine",
  continentSlug: "asie",
  blurb: "Pékin, Shanghai, Hangzhou et le Yunnan",
  keywords: [
    "chine",
    "pekin",
    "shanghai",
    "hangzhou",
    "grande muraille",
    "yunnan",
    "guizhou",
    "hong kong",
  ],
  metaTitle: "Chine : Voyage sur mesure",
  metaDescription:
    "Voyage en Chine sur mesure : la Grande Muraille, Shanghai, le lac de l'Ouest à Hangzhou et le Yunnan. Itinéraire écrit par votre travel designer Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe en Chine",
      heading: "De la Cité interdite aux villages du Yunnan",
      description:
        "Au petit matin, la Grande Muraille sort de la brume et suit la crête jusqu'à disparaître. Le soir, Shanghai s'allume sur ses deux rives. Plus loin vers le sud-ouest, les vallées gardent leurs rizières en terrasses et leurs maisons de bois.",
      images: [
        {
          src: "/destination/chine/hero-1.webp",
          alt: "Voyage en Chine : la Grande Muraille suivant la crête à Jinshanling, au lever du jour",
        },
        {
          src: "/destination/chine/hero-2.webp",
          alt: "Toits de la Cité interdite vus depuis la colline de Jingshan, à Pékin",
        },
        {
          src: "/destination/chine/hero-3.webp",
          alt: "Rizières en terrasses et village de bois dans les montagnes du Guizhou",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir en Chine ?",
      heading: "Stéphane, spécialiste de la Chine, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "stephane",
        // TODO: verify quote attribution : à faire valider par Stéphane avant mise en ligne
        quote:
          "La Chine change de visage tous les trois jours. On dîne dans une maison de brique de Shanghai, et la semaine suivante on partage le repas d'une famille dong sur une crête du Guizhou. Ce que je propose presque toujours, c'est l'axe du nord, Pékin et Xi'an, puis une descente vers le sud-ouest. C'est là que le voyage devient une histoire à raconter.",
        role: "Travel Designer · Chine",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte de la Chine",
      heading: "Un pays qui change de siècle à chaque étape",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      columns: [
        "Un voyage en Chine se joue sur le choix des régions. Le nord tient l'histoire impériale, le delta tient les villes et le thé, le sud-ouest tient les montagnes et les fêtes de village. Un itinéraire en retient trois, pour ce qu'elles ont d'irremplaçable.",
        "Au nord, l'histoire impériale. Pékin aligne la Cité interdite, le temple du Ciel et les tombes des Ming, et la Grande Muraille court sur les crêtes voisines, sur des sections où l'on marche seul pendant des heures. Xi'an complète l'ensemble avec l'armée de terre cuite, sortie d'une fosse en 1974 par des paysans qui creusaient un puits.",
        "Au sud-ouest, autre chose. Dans le Yunnan et le Guizhou, les montagnes sont hautes et les villages tiennent encore leur langue, leurs fêtes et leurs toits de bois. Entre les deux, sur le delta : Shanghai et ses ruelles de shikumen prises entre les tours, Hangzhou et son lac de l'Ouest, les collines de thé de Longjing juste derrière.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/chine/full-image.webp",
        alt: "Voyage en Chine : le lac de l'Ouest à Hangzhou dans la brume du matin",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "La Chine à table",
      heading: "Il n'y a pas une cuisine chinoise, il y en a huit",
      theme: "light",
      paragraphs: [
        "Ces huit cuisines n'ont presque rien en commun. Le canard laqué de Pékin se prépare sur deux jours et se découpe devant la table. À Chengdu, le poivre du Sichuan engourdit la bouche avant que le piment n'arrive. À Canton, on juge un cuisinier sur un poisson cuit à la vapeur, sans rien pour masquer.",
        "Le thé suit la même logique. Sur les collines de Longjing, au-dessus du lac de l'Ouest, la cueillette de printemps ne dure que quelques semaines et se fait à la main, feuille par feuille. Les meilleurs lots ne quittent jamais la province.",
      ],
      images: [
        {
          src: "/destination/chine/split-1.webp",
          alt: "Cuisinier découpant un canard laqué devant la table, à Pékin",
        },
        {
          src: "/destination/chine/split-2.webp",
          alt: "Cueilleuses de thé dans les collines de Longjing, au-dessus de Hangzhou",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/chine/xp-dejeuner-grande-muraille-1.webp",
          alt: "Table dressée sur le chemin de ronde de la Grande Muraille de Chine",
        },
        right: {
          src: "/destination/chine/xp-dejeuner-grande-muraille-2.webp",
          alt: "La Grande Muraille suivant la ligne des collines depuis une tour de guet",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Une table dressée sur la Grande Muraille",
        columns: [
          // TODO: verify : privatisation de la section et déroulé du service à confirmer auprès du prestataire
          "La section est fermée au public le temps du déjeuner. On monte en fin de matinée, et la table est déjà dressée sur le chemin de ronde : nappe blanche, verres, service en gants blancs. De part et d'autre, la Muraille suit la crête et disparaît derrière la ligne des collines.",
          "Le repas se déroule en trois services, avec un toast au champagne avant le premier plat. Il n'y a personne d'autre sur cette portion du mur, ni avant, ni après. C'est le genre d'autorisation qui se négocie section par section, plusieurs semaines avant le départ.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Chine",
      heading: "Shanghai le soir, le Guizhou en montagne, Hong Kong d'en haut",
      description:
        "Ces trois sorties se calent avant le départ. Le Guizhou demande deux nuits sur place, et les créneaux d'hélicoptère au-dessus de Victoria Harbor partent vite le week-end.",
      slugs: [
        "spectacle-era-shanghai",
        "villages-ethniques-guizhou",
        "helicoptere-victoria-harbor",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Le Yunnan, Shanghai, le lac de l'Ouest",
      description:
        "Une maison de pierre au pied du Jade Dragon dans le Yunnan, un ensemble de shikumen restaurés au cœur de Shanghai, et un village de cours d'eau au-dessus du lac de l'Ouest.",
      slugs: ["amandayan", "capella-shanghai", "banyan-tree-hangzhou"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage en Chine",
      description:
        "Vol, décalage horaire, paiement, formalités et saisons : les éléments à connaître avant de caler les dates.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Air France et China Eastern relient Paris à Shanghai et à Pékin sans escale, en une dizaine d'heures à l'aller. Cathay Pacific descend jusqu'à Hong Kong en douze heures. À l'intérieur du pays, le train à grande vitesse et les vols intérieurs remplacent la route sur presque tous les trajets.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Six heures d'avance sur Paris en été, sept en hiver. Toute la Chine vit sur le fuseau de Pékin, y compris le Yunnan où le soleil se lève donc près de deux heures plus tard. Le décalage se digère mieux à l'aller qu'au retour.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Le yuan, aussi appelé renminbi. Le paiement se fait presque partout par téléphone, via Alipay ou WeChat Pay, et les deux applications acceptent désormais les cartes bancaires étrangères. Prévoir un peu d'espèces pour les villages de montagne.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "TODO: à revérifier avant chaque départ, la mesure étant reconduite période après période. Les voyageurs français bénéficient d'une exemption de visa pour les séjours touristiques de moins de trente jours. Le passeport doit rester valide six mois après le retour. Hong Kong et Macao relèvent de régimes d'entrée distincts.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin n'est exigé à l'entrée. Il est conseillé d'être à jour du DTP, de la coqueluche et de la rougeole, et l'hépatite A est recommandée au-delà de deux semaines. L'encéphalite japonaise ne concerne que les séjours ruraux prolongés dans le sud, en saison humide.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "Deux fenêtres. Avril et mai d'abord, quand les jardins de Suzhou et de Hangzhou sont en fleur et que l'air reste doux. Puis de fin septembre à début novembre, la plus belle saison au nord, avec un ciel dégagé sur la Muraille et des couleurs sur les collines. Les dates se calent juste après la première semaine d'octobre, quand le pays a fini de voyager pour la fête nationale.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "Le mandarin, écrit en caractères simplifiés sur le continent. Le cantonais domine à Canton et à Hong Kong, où les caractères restent traditionnels. L'anglais se parle dans les grands hôtels de Shanghai et de Pékin. Partout ailleurs, un guide francophone accompagne les journées et ouvre les conversations.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Trois climats dans un seul pays. Pékin a des hivers secs autour de zéro degré et des étés chauds, jusqu'à trente-cinq. Shanghai reste humide toute l'année, avec une saison des pluies en juin. Le Yunnan, en altitude, tourne autour de vingt degrés une bonne partie de l'année, ce qui lui a valu son surnom de province du printemps éternel.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Chine. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/chine/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.webp`,
          alt: [
            "Itinéraire sur mesure en Chine, de Pékin à Shanghai et aux montagnes du Yunnan",
            "Adresses confidentielles en Chine : maisons de thé, ateliers d'artisans et tables de chefs",
            "Hébergements en Chine : shikumen de Shanghai et maisons de pierre du Yunnan",
            "Conciergerie privée 24/7 pour un voyage en Chine",
            "Expériences en Chine : Grande Muraille privatisée, villages du Guizhou et survol de Hong Kong",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les étapes à connaître en Chine",
      heading: "De Pékin au Yunnan, six étapes possibles",
      description:
        "On commence par le nord et l'histoire, on descend sur le delta et ses jardins, puis vers les montagnes du sud-ouest. Voici les étapes qui structurent un séjour.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      initialZoom: 4,
      places: [
        {
          title: "Pékin",
          description:
            "La capitale s'ordonne sur un grand axe nord-sud, de la Cité interdite au temple du Ciel. Les hutongs, ces ruelles de maisons basses à cour carrée, occupent encore des quartiers entiers autour du lac Houhai.",
          image: {
            src: "/destination/chine/map-pekin.webp",
            alt: "Cour intérieure d'une maison de hutong dans le vieux Pékin",
          },
          // TODO: verify coords
          coordinates: { lat: 39.9042, lng: 116.4074 },
        },
        {
          title: "Xi'an",
          description:
            "Le point de départ de la route de la soie, encore ceinturé de ses remparts Ming, que l'on parcourt à vélo au-dessus des toits. L'armée de terre cuite dort dans ses fosses à la sortie de la ville, et le dégagement n'est toujours pas terminé.",
          image: {
            src: "/destination/chine/map-xian.webp",
            alt: "Fosse de l'armée de terre cuite et rangées de guerriers, près de Xi'an",
          },
          // TODO: verify coords
          coordinates: { lat: 34.3416, lng: 108.9398 },
        },
        {
          title: "Shanghai",
          description:
            "Sur une rive, les façades des années 1920 du Bund. Sur l'autre, les tours de Pudong. Entre les deux, l'ancienne concession française, ses platanes et ses ruelles de shikumen, ces maisons mitoyennes de brique à porte de pierre.",
          image: {
            src: "/destination/chine/map-shanghai.webp",
            alt: "Ruelle de shikumen bordée de platanes dans l'ancienne concession française de Shanghai",
          },
          // TODO: verify coords
          coordinates: { lat: 31.2304, lng: 121.4737 },
        },
        {
          title: "Hangzhou",
          description:
            "Une ville posée autour d'un lac que les peintres chinois copient depuis mille ans. Les collines de thé de Longjing commencent au bout des faubourgs, et le Grand Canal, creusé à la main sur des siècles, s'achève ici.",
          image: {
            src: "/destination/chine/map-hangzhou.webp",
            alt: "Barque sur le lac de l'Ouest à Hangzhou, avec les collines en arrière-plan",
          },
          // TODO: verify coords
          coordinates: { lat: 30.2741, lng: 120.1551 },
        },
        {
          title: "Lijiang et le Yunnan",
          description:
            "Une vieille ville de canaux et de pavés, posée au pied du Jade Dragon. Les Naxi y vivent depuis des siècles et ont gardé la dernière écriture pictographique encore en usage au monde.",
          image: {
            src: "/destination/chine/map-lijiang.webp",
            alt: "Toits et canaux de la vieille ville de Lijiang, au pied du Jade Dragon",
          },
          // TODO: verify coords
          coordinates: { lat: 26.8721, lng: 100.2299 },
        },
        {
          title: "Le Guizhou",
          description:
            "La province la plus montagneuse du pays, et la moins parcourue. Autour de Kaili, les villages miao et dong se tiennent sur les crêtes, avec leurs tours du tambour en bois assemblées sans un seul clou.",
          image: {
            src: "/destination/chine/map-guizhou.webp",
            alt: "Village dong et tour du tambour en bois sur une crête du Guizhou",
          },
          // TODO: verify coords
          coordinates: { lat: 26.5833, lng: 107.9817 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage en Chine",
      description:
        "Huit repères rapportés du terrain : comment on circule, ce qui se prépare avant de partir, et ce qui change d'une région à l'autre.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          title: "Le train fait le plus beau du trajet",
          cardEyebrow: "Transports",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Des gares en plein centre, et le pays qui défile derrière la vitre",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les grandes villes sont reliées entre elles par le train à
                grande vitesse, et les gares sont en plein centre. On monte au
                milieu d&apos;une ville, on descend au milieu de la suivante, et
                entre les deux on regarde passer les rizières, les canaux et les
                villages.
              </p>
              <p>
                L&apos;avion reprend la main pour descendre vers le Yunnan ou
                le Guizhou. Sur place, un chauffeur à la journée reste la plus
                belle façon de circuler : on s&apos;arrête où l&apos;on veut, et
                les bagages restent dans la voiture.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Les billets sont pris avant le départ, en première classe, et un
                chauffeur récupère les voyageurs à chaque gare.
              </p>
            </div>
          ),
        },
        {
          title: "Le téléphone se prépare avant de partir",
          cardEyebrow: "Pratique",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Une eSIM en itinérance et deux applications installées, et tout fonctionne comme à la maison",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les applications occidentales habituelles passent par une
                connexion en itinérance ou un VPN, à installer et à tester depuis
                la France plutôt que sur place. Une eSIM en itinérance
                internationale règle la question en quelques minutes.
              </p>
              <p>
                Deux applications valent la peine d&apos;être installées avant le
                départ : WeChat, qui sert autant à échanger qu&apos;à réserver,
                et un traducteur avec reconnaissance de caractères, très utile
                devant un menu.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous envoyons la marche à suivre une dizaine de jours avant le
                départ, et le guide reste joignable sur WeChat pendant tout le
                séjour.
              </p>
            </div>
          ),
        },
        {
          title: "Tout se paie par téléphone",
          cardEyebrow: "Argent",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Alipay et WeChat Pay acceptent les cartes étrangères, jusque sur les étals de marché",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le paiement mobile a remplacé presque tout le reste, jusque sur
                les marchés et dans les taxis. Alipay et WeChat Pay acceptent
                désormais les cartes bancaires étrangères, et l&apos;inscription
                se fait avant le départ, en une dizaine de minutes.
              </p>
              <p>
                La carte bancaire seule reste acceptée dans les grands hôtels et
                les restaurants internationaux. Un peu d&apos;espèces rend
                service dans les villages du Yunnan et du Guizhou.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Créer les comptes et vérifier qu&apos;un premier paiement passe
                avant de quitter la France. La validation demande parfois
                vingt-quatre heures.
              </p>
            </div>
          ),
        },
        {
          title: "Deux semaines, trois régions",
          cardEyebrow: "Itinéraire",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le nord, le delta, et une région du sud-ouest : le découpage qui laisse le temps de s'installer",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Pékin demande quatre nuits, avec la Cité interdite, le temple du
                Ciel, les hutongs et une journée entière sur la Muraille.
                Xi&apos;an se traite en deux nuits. Shanghai et Hangzhou occupent
                ensuite quatre à cinq nuits à elles deux.
              </p>
              <p>
                Le sud-ouest se garde pour la fin, quand le rythme baisse : le
                Yunnan autour de Lijiang, ou le Guizhou et ses villages. Un seul
                des deux suffit, et le séjour gagne des journées entières sur
                place.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous plaçons les journées libres après les journées de visite,
                jamais l&apos;inverse, et jamais deux grands sites le même jour.
              </p>
            </div>
          ),
        },
        {
          title: "Les grands sites fonctionnent sur quota",
          cardEyebrow: "Réservation",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Billets nominatifs et créneaux horaires à la Cité interdite comme à l'armée de terre cuite",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La Cité interdite fonctionne avec un nombre de billets limité par
                jour, nominatifs et associés à un créneau. Au printemps et à
                l&apos;automne, les places partent plusieurs semaines à
                l&apos;avance. L&apos;armée de terre cuite suit le même principe.
              </p>
              <p>
                Certains lieux ne se visitent que sur rendez-vous : ateliers de
                céramistes, maisons de thé privées, collections particulières de
                Shanghai. Ce sont souvent les meilleurs moments de la journée.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Les créneaux sont pris dès la validation des dates, et nous
                privilégions systématiquement les premières entrées du matin.
              </p>
            </div>
          ),
        },
        {
          title: "La Muraille se choisit section par section",
          cardEyebrow: "Terrain",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Jinshanling et Gubeikou pour marcher seul, Mutianyu pour une journée en famille",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L&apos;expérience change du tout au tout selon la section. À
                Jinshanling et à Gubeikou, la pierre est restée brute et
                l&apos;on marche pendant des heures sans croiser grand monde,
                avec la crête qui file devant et derrière.
              </p>
              <p>
                Mutianyu est mieux équipée, avec un télésiège, ce qui en fait
                le bon choix avec des enfants ou des grands-parents.
                Le lever du jour est le moment où la crête se détache le mieux.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Départ de Pékin avant l&apos;aube, chauffeur privé, et un
                pique-nique ou un déjeuner servi sur le mur selon la section
                retenue.
              </p>
            </div>
          ),
        },
        {
          title: "Un guide francophone change la nature du voyage",
          cardEyebrow: "Sur place",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le même accompagnant d'une région à l'autre, plutôt qu'un guide différent chaque matin",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Un guide francophone ouvre les conversations, commande à table,
                et explique ce qu&apos;un panneau ne dit jamais : à quoi sert un
                autel de cour, pourquoi une tour du tambour tient sans un seul
                clou, ce que raconte la broderie d&apos;une veste de fête.
              </p>
              <p>
                Dans le Guizhou et le Yunnan, il change tout. Les villages miao
                et dong ont leurs propres langues, et la porte d&apos;une maison
                s&apos;ouvre parce que quelqu&apos;un connaît la famille depuis
                des années.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous gardons le même guide sur toute la durée du séjour quand la
                géographie le permet, plutôt qu&apos;un accompagnant différent
                dans chaque ville.
              </p>
            </div>
          ),
        },
        {
          title: "Ce qui repart dans la valise",
          cardEyebrow: "Achats",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Thé de printemps, porcelaine de Jingdezhen, soie de Suzhou et papier de Xuan",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le thé se ramène directement du producteur : Longjing autour de
                Hangzhou, pu-erh dans le Yunnan, où les galettes se gardent des
                années et se bonifient. Les qualités varient énormément, et un
                guide fait la différence entre un atelier et une boutique à
                touristes.
              </p>
              <p>
                La porcelaine de Jingdezhen, la soie de Suzhou et le papier de
                Xuan pour la calligraphie complètent la liste. Les ateliers
                sérieux emballent pour le transport aérien, mais expédient
                rarement en France.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Prévoir de la place au retour, et une valise rigide si la
                porcelaine fait partie du programme.
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
            "Le déjeuner sur la Muraille, nous en parlons encore. Nous étions seuls sur la section, la table était dressée quand nous sommes arrivés, et personne n'est passé de toute la matinée.",
          image: {
            src: "/destination/chine/hero-1.webp",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Chine à deux, octobre 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Nous appréhendions les distances. Le train a tout réglé, et le même guide nous a suivis de Pékin jusqu'à Hangzhou. Nous n'avons jamais eu à chercher notre chemin.",
          image: {
            src: "/destination/chine/hero-2.webp",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Chine en famille, avril 2026", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Ce sont les villages du Guizhou qui nous ont marqués, pas les grandes villes. On nous a reçus dans une maison de bois, on a mangé avec la famille, et il n'y avait aucun autre voyageur.",
          image: {
            src: "/destination/chine/hero-3.webp",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Chine, novembre 2025", // TODO: replace with real testimonial
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
          question: "Quelle est la meilleure période pour partir en Chine ?",
          answer:
            "Deux fenêtres se détachent. Le printemps d'abord, en avril et mai, quand les jardins de Suzhou et de Hangzhou sont en fleur et que l'air reste doux. L'automne ensuite, de fin septembre à début novembre, la plus belle saison au nord : ciel dégagé sur la Grande Muraille, couleurs sur les collines et températures stables à Pékin. L'été convient bien au sud-ouest, plus haut en altitude et plus frais. Les dates se calent juste après la première semaine d'octobre, celle de la fête nationale, quand le pays a fini de voyager.",
        },
        {
          question: "Combien de temps dure le vol Paris - Pékin ?",
          answer:
            "Une dizaine d'heures sans escale à l'aller, un peu plus au retour où les vents sont contraires. Air France et China Eastern assurent la liaison vers Pékin comme vers Shanghai, et Cathay Pacific descend jusqu'à Hong Kong en douze heures. Le décalage est de six heures d'avance en été et de sept en hiver, sur toute la Chine, qui ne vit que sur un seul fuseau horaire.",
        },
        {
          question: "Faut-il un visa pour aller en Chine ?",
          answer:
            "Les voyageurs français bénéficient depuis plusieurs années d'une exemption de visa pour les séjours touristiques de moins de trente jours. La mesure est reconduite période après période par les autorités chinoises, et nous vérifions son état avant chaque départ. Le passeport doit rester valide six mois après la date de retour. Hong Kong et Macao relèvent de régimes d'entrée distincts : un aller-retour depuis le continent compte comme une nouvelle entrée en Chine.",
        },
        {
          question: "Que faire en Chine en deux semaines ?",
          answer:
            "Quatre nuits à Pékin pour la Cité interdite, le temple du Ciel, les hutongs et une journée entière sur une section peu fréquentée de la Grande Muraille. Deux nuits à Xi'an pour l'armée de terre cuite et les remparts Ming. Ensuite le delta : Shanghai et ses shikumen, puis Hangzhou, le lac de l'Ouest et les collines de thé de Longjing. Les derniers jours dans le sud-ouest, autour de Lijiang dans le Yunnan ou dans les villages du Guizhou.",
        },
        {
          question: "Comment se déplacer en Chine ?",
          answer:
            "Le train à grande vitesse couvre l'essentiel : Pékin rejoint Xi'an en quatre heures et demie, Shanghai en autant, et Hangzhou est à une heure de Shanghai. Les gares sont en centre-ville, ce qui évite les trajets d'aéroport. L'avion redevient utile pour descendre vers le Yunnan ou le Guizhou. Dans les villes, un chauffeur à la journée reste la solution la plus simple, les adresses chinoises étant difficiles à indiquer à un taxi.",
        },
        {
          question: "Où dormir en Chine ?",
          answer:
            "À Pékin, les maisons de hutong transformées placent les palais à pied et gardent une cour intérieure. À Shanghai, l'ancienne concession française réunit les platanes, les ruelles de shikumen et les grandes tables, tandis que le Bund donne sur les tours de Pudong. À Hangzhou, les adresses installées au-dessus du lac de l'Ouest offrent le format le plus calme. Dans le Yunnan, les maisons de pierre au pied du Jade Dragon servent de base pour les vallées alentour.",
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
        "D'autres pays d'Asie où les temples, les tables et les montagnes tiennent le même rôle. Trois prolongements possibles après un premier voyage en Chine.",
      slugs: ["japon", "vietnam", "coree-du-sud"],
    },
  ],
};
