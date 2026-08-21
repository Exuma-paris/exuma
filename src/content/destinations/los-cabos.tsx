import type { Destination } from "@/lib/content/types";

export const destination: Destination = {
  slug: "los-cabos",
  name: "Los Cabos",
  country: "Mexique",
  genitive: "de Los Cabos",
  continentSlug: "ameriques",
  placeKind: "city",
  heroImage: {
    src: "/destination/los-cabos/hero-1.png",
    alt: "L'Arco de Cabo San Lucas au lever du soleil, Mexique",
  },
  blurb:
    "La pointe de la péninsule, là où le Pacifique rencontre la mer de Cortez.",
  keywords: [
    "los-cabos",
    "mexique",
    "baja-california-sur",
    "cabo-pulmo",
    "todos-santos",
    "mer-de-cortez",
    "plongee",
    "baleine",
  ],
  metaTitle: "Los Cabos, voyage sur mesure",
  metaDescription:
    "Voyage à Los Cabos sur mesure : Cabo Pulmo, Todos Santos, Valle de Guadalupe, One&Only Palmilla. Itinéraire signé par votre travel designer Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage à Los Cabos",
      heading:
        "Los Cabos. Le Pacifique et la mer de Cortez se touchent ici, et nulle part ailleurs.",
      description:
        "Une péninsule de désert suspendue entre deux mers. Cabo San Lucas, San José del Cabo, Cabo Pulmo : trois visages d'un même bout du monde.",
      images: [
        {
          src: "/destination/los-cabos/hero-1.png",
          alt: "L'Arco de Cabo San Lucas au lever du soleil, Baja California Sur",
        },
        {
          src: "/destination/los-cabos/hero-2.png",
          alt: "Plongée sur le récif de Cabo Pulmo, mer de Cortez",
        },
        {
          src: "/destination/los-cabos/hero-3.png",
          alt: "Vignobles du Valle de Guadalupe au coucher du soleil, Baja California",
        },
      ],
    },
    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir à Los Cabos ?",
      heading:
        "Stéphane, spécialiste du Mexique, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "stephane",
        // TODO: verify quote attribution
        quote:
          "La première fois qu'on arrive à l'Arco en bateau, la lumière du matin est rasante sur les roches dorées. La mer de Cortez d'un côté, le Pacifique de l'autre. Le guide coupe le moteur. Il ne dit rien, parce qu'il n'y a rien à ajouter.",
      },
      features: [
        {
          iconName: "badgeCheck",
          title: "Accès aux meilleures adresses du corridor",
          description:
            "One&Only Palmilla, Four Seasons, Chileno Bay : des propriétés dont les meilleures suites ne se réservent pas en ligne.",
        },
        {
          iconName: "sparkles",
          title: "Expériences hors programme",
          description:
            "Cabo Pulmo à l'aube avant les bateaux collectifs, Todos Santos avec un artiste local, vignes du Valle de Guadalupe avec un œnologue.",
        },
        {
          iconName: "star",
          title: "Circuit Baja construit dans l'ordre",
          description:
            "Los Cabos, La Paz, Isla Espiritu Santo : Stéphane construit la logique de chaque étape et les transferts qui la rendent possible.",
        },
      ],
    },
    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte de Los Cabos",
      heading: "La pointe de la Baja",
      cta: { label: "Créer votre voyage", href: "/reserver" },
      columns: [
        "Un voyage à Los Cabos commence souvent par une image : l'Arco de Cabo San Lucas, cette arche rocheuse dorée où le Pacifique rencontre la mer de Cortez au bout de la péninsule. Ce n'est pas un hasard géographique. C'est la logique du lieu : une fin de terre entre deux eaux, que les baleines, les raies-aigles et les otaries habitent avant nous.",
        "San José del Cabo tient le registre inverse. Pas de marina, pas de discothèque. Des rues pavées du XVIIIe siècle, un district des galeries ouvert le jeudi soir, des restaurants où les chefs cuisinent les légumes du matin. À trente kilomètres au sud, une autre ville commence.",
        "Le corridor qui relie les deux compte quelques-uns des meilleurs hôtels de plage d'Amérique du Nord. Ce n'est pas une coïncidence. La Baja California Sur a gardé ce que d'autres côtes ont depuis longtemps vendu : l'espace, la lumière, les fonds marins intacts de Cabo Pulmo.",
      ],
    },
    {
      type: "fullImage",
      image: {
        src: "/destination/los-cabos/full-image.png",
        alt: "Vue aérienne de Land's End et de l'Arco, Cabo San Lucas, Mexique",
      },
      height: 600,
    },
    {
      type: "textImagesSplit",
      eyebrow: "Los Cabos, le luxe et l'exclusif",
      heading: "Deux mers, deux rythmes",
      theme: "light",
      paragraphs: [
        "La mer de Cortez que Cousteau appelait « l'aquarium du monde » tient cette réputation. Cabo Pulmo, réserve marine nationale, abrite le seul récif corallien vivant de la côte est du Pacifique nord. On y plonge avec des raies-aigles, des barracudas en bancs de plusieurs centaines, des tortues imbriquées. Les bateaux collectifs n'y entrent pas à certaines heures. Les nôtres, si.",
        "La côte Pacifique est différente. Plus sauvage, plus exposée au vent, avec des vagues qui viennent du large. C'est ici que les baleines à bosse hivernent de décembre à avril. Plus au nord, vers La Paz, les baleines grises laissent leurs petits dans les lagunes protégées. Et sur les contreforts de la Sierra de Juárez, les vignerons du Valle de Guadalupe cultivent nebbiolo et tempranillo dans un sol que l'aridité a rendu singulier.",
      ],
      images: [
        {
          src: "/destination/los-cabos/split-1.png",
          alt: "Raie-aigle dans les eaux de Cabo Pulmo, mer de Cortez",
        },
        {
          src: "/destination/los-cabos/split-2.png",
          alt: "San José del Cabo, district des galeries au crépuscule",
        },
      ],
    },
    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences & activités à Los Cabos",
      heading: "Nos coups de cœur à Los Cabos",
      description:
        "Cabo Pulmo à l'aube, les otaries d'Isla Espiritu Santo, Todos Santos avec un guide qui connaît les artistes, les vignes du Valle de Guadalupe avec un œnologue privé : quatre expériences choisies pour leur accès, pas pour leur notoriété.",
      cta: { label: "Voir tous les coups de cœur", href: "/experiences" },
      slugs: [
        "plongee-cabo-pulmo",
        "escapade-todos-santos",
        "snorkeling-lions-mer-espiritu-santo",
        "wine-oclock-valle-guadalupe",
      ],
    },
    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/los-cabos/xp-wine-vigne.png",
          alt: "Vignes du Valle de Guadalupe au lever du soleil, Baja California",
        },
        right: {
          src: "/destination/los-cabos/xp-wine-degustation.png",
          alt: "Dégustation de vins avec un œnologue privé dans un domaine de Baja California",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Le vigneron, la vigne, et le meilleur repas de Baja",
        columns: [
          "Le Valle de Guadalupe produit certains des meilleurs vins de l'hémisphère nord. À une heure d'Ensenada, sur les contreforts de la Sierra de Juárez, une soixantaine de domaines cultivent nebbiolo, tempranillo, chardonnay dans un sol aride que les vignes habitent depuis les années 1920. Ce n'est pas une région émergente. C'est une région que le monde vient de découvrir.",
          "L'expérience qu'on construit ici ne ressemble pas à une dégustation touristique. Un œnologue privé guide la visite de trois domaines choisis pour leur singularité. Le repas qui suit est servi dans l'un des restaurants dont les chefs font des kilomètres depuis Mexico City pour cuisiner avec les légumes du matin.",
        ],
      },
    },
    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Nos hébergements à Los Cabos",
      description:
        "Trois adresses sur le corridor et au-delà. Chacune construite autour d'une logique différente : l'isolement, la plage directe, l'accès à la mer de Cortez.",
      cta: { label: "Voir tous les hébergements", href: "/hebergements" },
      slugs: [
        "four-seasons-los-cabos",
        "one-and-only-palmilla",
        "chileno-bay-auberge",
      ],
    },
    {
      type: "bento",
      eyebrow: "Exuma",
      heading: "Voyage sur mesure à Los Cabos",
      description:
        "De l'Arco de Cabo San Lucas aux vignes du Valle de Guadalupe, chaque étape est construite pour ne rien laisser au hasard.",
      cta: { label: "Créer votre voyage", href: "/reserver" },
      cards: [
        {
          title: "Création d'itinéraires",
          description:
            "Los Cabos, La Paz, Isla Espiritu Santo, Valle de Guadalupe : la logique du circuit Baja, construite dans le bon ordre.",
          image: {
            src: "/destination/los-cabos/bento-map.png",
            alt: "Carte de la péninsule de Baja California Sur",
          },
          tone: "dark",
        },
        {
          title: "Adresses confidentielles",
          description:
            "Les restaurants de San José del Cabo que ne référencent pas les guides. Les domaines du Valle qui n'ouvrent pas leurs portes au public.",
          image: {
            src: "/destination/los-cabos/bento-adresses.png",
            alt: "District des galeries de San José del Cabo au crépuscule",
          },
        },
        {
          title: "Hébergements hors réseaux",
          description:
            "One&Only Palmilla, Four Seasons Costa Palmas, Chileno Bay : les meilleures suites face à la mer de Cortez.",
          image: {
            src: "/destination/los-cabos/bento-aerien.png",
            alt: "Vue aérienne du corridor de Los Cabos entre Pacifique et mer de Cortez",
          },
        },
        {
          title: "Conciergerie 24/7",
          description:
            "Un contact Exuma disponible tout au long du séjour. Du transfert à l'aéroport à la table de dernière minute.",
          image: {
            src: "/destination/los-cabos/bento-conciergerie.png",
            alt: "Marina de Cabo San Lucas au lever du soleil",
          },
        },
        {
          title: "Expériences sur accès",
          description:
            "Cabo Pulmo avant l'ouverture officielle. Les vignes du Valle de Guadalupe hors saison touristique. Les otaries d'Isla Espiritu Santo en bateau privé.",
          image: {
            src: "/destination/los-cabos/bento-experience.png",
            alt: "Snorkeling avec des otaries à Isla Espiritu Santo, La Paz",
          },
        },
      ],
    },
    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables à Los Cabos",
      heading: "De Cabo Pulmo à La Paz",
      description:
        "Six lieux qui définissent la géographie du voyage : l'arche, la réserve marine, la ville d'artistes, l'île aux otaries.",
      cta: { label: "Créer votre voyage", href: "/reserver" },
      initialZoom: 7,
      places: [
        {
          title: "Cabo San Lucas",
          description:
            "L'Arco, Land's End, la marina. L'entrée iconique dans Los Cabos, l'endroit où les deux mers se lisent depuis le pont d'un bateau.",
          image: {
            src: "/destination/los-cabos/map-cabo-san-lucas.png",
            alt: "L'Arco de Cabo San Lucas vu depuis la mer",
          },
          // TODO: verify coords
          coordinates: { lat: 22.8905, lng: -109.9167 },
        },
        {
          title: "San José del Cabo",
          description:
            "Le district des galeries, les rues du XVIIIe siècle, les restaurants de cuisine Baja. La ville qui existe indépendamment du tourisme balnéaire.",
          image: {
            src: "/destination/los-cabos/map-san-jose-del-cabo.png",
            alt: "Rues coloniales de San José del Cabo au crépuscule",
          },
          // TODO: verify coords
          coordinates: { lat: 23.0629, lng: -109.7018 },
        },
        {
          title: "Cabo Pulmo",
          description:
            "Réserve marine nationale, seul récif corallien vivant de la côte Pacifique nord. Les plongeurs qui y accèdent en dehors des horaires collectifs voient quelque chose de différent.",
          image: {
            src: "/destination/los-cabos/map-cabo-pulmo.png",
            alt: "Récif corallien de Cabo Pulmo, mer de Cortez",
          },
          // TODO: verify coords
          coordinates: { lat: 23.4483, lng: -109.4178 },
        },
        {
          title: "Todos Santos",
          description:
            "Pueblo Mágico à 80 km de Cabo, sur la côte Pacifique. Des artistes y ont ouvert des ateliers depuis les années 1980. Punta Lobos, la falaise au-dessus de l'océan, ne figure dans aucun guide.",
          image: {
            src: "/destination/los-cabos/map-todos-santos.png",
            alt: "Atelier d'artiste à Todos Santos, Pueblo Mágico de Baja California Sur",
          },
          // TODO: verify coords
          coordinates: { lat: 23.4469, lng: -110.2256 },
        },
        {
          title: "La Paz",
          description:
            "Capitale de l'état, malecón sur le front de mer, port d'embarquement pour Isla Espiritu Santo. Moins construite que Los Cabos, elle garde un registre que le corridor a perdu.",
          image: {
            src: "/destination/los-cabos/map-la-paz.png",
            alt: "Malecón de La Paz au coucher du soleil, Baja California Sur",
          },
          // TODO: verify coords
          coordinates: { lat: 24.1426, lng: -110.3128 },
        },
        {
          title: "Isla Espiritu Santo",
          description:
            "Île protégée UNESCO à 25 minutes de La Paz en bateau. Une colonie de 400 otaries vit à Los Islotes, à la pointe nord de l'île. On s'y approche en snorkeling.",
          image: {
            src: "/destination/los-cabos/map-isla-espiritu-santo.png",
            alt: "Isla Espiritu Santo vue depuis un bateau, La Paz, Baja California Sur",
          },
          // TODO: verify coords
          coordinates: { lat: 24.4167, lng: -110.35 },
        },
      ],
    },
    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage à Los Cabos",
      description:
        "Ce que les guides ne disent pas, et ce qu'on règle pour vous avant le départ.",
      cta: { label: "Créer votre voyage", href: "/reserver" },
      items: [
        {
          title: "Dans ma valise",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Protection solaire indice 50+ obligatoire : l'UV est intense même en hiver sur la Baja",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Los Cabos est un désert côtier : l'ensoleillement est quasi permanent, même en décembre. Prévoyez une protection solaire indice 50+, une tenue légère anti-UV pour les activités marines et un coupe-vent léger pour les sorties en mer (la brise du Pacifique peut surprendre).
              </p>
              <h4 className="font-medium">Pour Cabo Pulmo et La Paz :</h4>
              <p>
                Un masque et un tuba personnels sont recommandés pour le snorkeling (meilleure hygiène, meilleure vision). Les chaussures de randonnée légères sont utiles à Todos Santos et sur les sentiers côtiers. Pour le Valle de Guadalupe, une veste suffit le soir, les nuits en altitude sont fraîches.
              </p>
            </div>
          ),
        },
        {
          title: "Santé",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Eau en bouteille partout, même dans les hôtels du corridor",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L'eau du robinet n'est pas potable à Los Cabos ni à La Paz. Tous les hôtels fournissent de l'eau filtrée, mais nous vous rappelons les précautions de base pour les déplacements hors corridor. Aucun vaccin n'est obligatoire pour entrer au Mexique.
              </p>
              <h4 className="font-medium">Recommandations :</h4>
              <p>
                L'hépatite A est recommandée si vous mangez en dehors des établissements de l'hôtel (marchés, restaurants locaux à San José). Nous envoyons un guide santé personnalisé avant le départ avec les coordonnées du médecin le plus proche de chaque étape de votre itinéraire.
              </p>
            </div>
          ),
        },
        {
          title: "Meilleure période",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Novembre à mai pour la saison sèche, janvier à mars pour les baleines",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Los Cabos bénéficie d'un climat désertique côtier : 350 jours de soleil par an, peu de pluie sauf en été (juillet à octobre, saison des ouragans). La saison idéale court de novembre à mai, avec des températures entre 22 et 28°C le jour.
              </p>
              <h4 className="font-medium">Les fenêtres spécifiques :</h4>
              <p>
                Janvier à mars : les baleines grises sont dans les lagunes de Baja California Sur (Laguna San Ignacio, Laguna Ojo de Liebre). Décembre à avril : baleines à bosse sur la côte Pacifique. Juin à octobre : présence du requin-baleine dans les eaux de La Paz, mais la chaleur est forte. Nous construisons le calendrier en fonction de ce que vous souhaitez voir.
              </p>
            </div>
          ),
        },
        {
          title: "Budget et vie locale",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le dollar est accepté partout sur le corridor, le peso est indispensable hors des hôtels",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les hôtels du corridor, les restaurants de San José del Cabo et la plupart des opérateurs touristiques acceptent le dollar américain et les cartes internationales sans frais. En dehors de ces zones (Todos Santos, La Paz, marchés locaux), le peso mexicain est nécessaire.
              </p>
              <h4 className="font-medium">Pourboires :</h4>
              <p>
                Le pourboire est structurel au Mexique : 15 à 20% dans les restaurants, 50 à 100 MXN par jour au personnel d'hôtel, 200 à 300 MXN par sortie pour un guide. Nous intégrons ces postes dans le briefing préalable pour qu'aucun moment du séjour ne soit gêné par une question pratique.
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
          question: "Quelle est la meilleure période pour aller à Los Cabos ?",
          answer:
            "Novembre à mai est la saison sèche idéale, avec 22 à 28°C le jour. Pour les baleines grises, janvier à mars est la fenêtre de référence (lagunes de Baja California Sur). Pour les baleines à bosse, décembre à avril sur la côte Pacifique. L'été (juillet-octobre) est chaud et humide, avec un risque d'ouragans.",
        },
        {
          question: "Combien de temps dure le vol Paris - Los Cabos ?",
          answer:
            "14 à 16 heures avec escale, généralement à Mexico City (Aeroméxico) ou à Los Angeles (Air France + Alaska/American). Il n'existe pas de vol direct depuis Paris. Exuma sélectionne les correspondances pour minimiser les temps d'attente et éviter les rotations à risque.", // TODO: verify
        },
        {
          question: "Faut-il un visa pour aller à Los Cabos ?",
          answer:
            "Non. Les ressortissants français n'ont pas besoin de visa pour entrer au Mexique pour un séjour touristique. Une FMM (Forma Migratoria Múltiple) est remise à l'arrivée ou disponible en ligne avant le départ. Passeport valide 6 mois après la date de retour requis.",
        },
        {
          question: "Que faire à Los Cabos en 8 jours ?",
          answer:
            "Un circuit cohérent sur 8 jours peut inclure 3 nuits sur le corridor (Cabo San Lucas + San José del Cabo), 1 journée à Cabo Pulmo, 1 nuit à Todos Santos, 2 nuits à La Paz avec une sortie à Isla Espiritu Santo, et une excursion au Valle de Guadalupe. Exuma construit la séquence en fonction de la saison et de vos préférences.",
        },
        {
          question: "Los Cabos est-il adapté aux enfants ?",
          answer:
            "Oui, particulièrement pour les familles attirées par les activités marines. Le snorkeling à Cabo Pulmo et la rencontre avec les otaries d'Isla Espiritu Santo sont accessibles dès 8 ans. Les hôtels du corridor (Four Seasons, One&Only) proposent des programmes enfants. Exuma adapte l'itinéraire à l'âge des enfants.",
        },
        {
          question: "Quel budget prévoir pour un voyage à Los Cabos ?",
          answer:
            "Pour un séjour de 8 jours en hébergements haut de gamme (One&Only, Four Seasons, Chileno Bay), comptez entre 8 000 et 15 000 euros par personne, vols compris, selon la période et les expériences. Exuma construit un devis détaillé poste par poste sur demande.", // TODO: verify
        },
      ],
    },
  ],
};
