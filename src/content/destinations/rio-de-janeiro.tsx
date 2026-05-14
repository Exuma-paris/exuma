import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "rio-de-janeiro",
  name: "Rio de Janeiro",
  country: "Brésil",
  genitive: "de Rio de Janeiro",
  continentSlug: "ameriques",
  blurb: "Copacabana, Ipanema, Santa Teresa, Corcovado, Lapa",
  keywords: [
    "rio",
    "rio-de-janeiro",
    "bresil",
    "copacabana",
    "ipanema",
    "santa-teresa",
    "corcovado",
    "lapa",
  ],
  metaDescription:
    "Voyage à Rio de Janeiro sur mesure : Copacabana, Ipanema, Santa Teresa, Corcovado à l'aube. Adresses confidentielles, accès samba à Mangueira, conciergerie 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe à Rio de Janeiro",
      heading: "Rio, où l'océan s'arrête au pied de la forêt",
      description:
        "Copacabana, Ipanema, Santa Teresa, Lapa : six kilomètres de plage et six siècles de mélange. L'itinéraire se construit autour du moment où la ville bascule, vers seize heures, quand la lumière change.",
      images: [
        {
          src: "/destination/rio-de-janeiro/hero-1.png",
          alt: "Pain de Sucre et baie de Guanabara au lever du jour, Rio de Janeiro",
        },
        {
          src: "/destination/rio-de-janeiro/hero-2.png",
          alt: "Plage d'Ipanema et pic des Dois Irmãos au coucher du soleil",
        },
        {
          src: "/destination/rio-de-janeiro/hero-3.png",
          alt: "Tramway jaune dans les rues pavées de Santa Teresa, Rio",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Notre rôle dans ce voyage",
      heading: "Un seul interlocuteur, du brief jusqu'au retour",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "stephane", // TODO: verify collaborateurSlug — pas de spécialiste Brésil dédié
        // TODO: verify quote attribution
        quote:
          "Rio change deux fois par jour. Le matin, les plages se remplissent par couches sociales — une famille à six heures, un coureur à sept, l'enseignant à huit. Le soir, après dix-sept heures, c'est tout l'inverse. La logique du voyage commence là : choisir les bonnes heures pour les bons quartiers.",
        role: "Travel Designer · Brésil", // TODO: verify
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Ouverture",
      heading: "Une ville qui change deux fois par jour",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      columns: [
        "Un voyage à Rio de Janeiro ne commence pas par un programme. Il commence par une lecture des heures. Six heures du matin, une famille pose ses serviettes sur le sable de Copacabana. Sept heures, un coureur prend la mesure du Pain de Sucre depuis la promenade. Dix-sept heures, la lumière passe au-dessus du Corcovado et la ville bascule. Apprendre ces heures, c'est déjà la moitié du voyage.",
        "L'itinéraire se construit par quartiers, pas par checklists. Une matinée à Santa Teresa entre les tramways jaunes et les ateliers d'artisans, un déjeuner au comptoir d'Ipanema, une visite à l'aube du Corcovado par le sentier de Paineiras, un atelier de samba à la Mangueira. Chaque quartier garde sa langue, son rythme, sa cuisine. Nous écrivons cette logique en collaboration avec les Brésiliens qui la vivent.",
        "« Carioca » n'est pas un adjectif facile. C'est un état d'attention au temps qui change, à la lumière qui tourne, au rythme qui ne se force pas. Rio, c'est la ville où l'océan s'arrête au pied de la forêt — et où la forêt redescend dans la ville.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/rio-de-janeiro/full-image.png",
        alt: "Vue panoramique de Rio depuis le Pain de Sucre, baie de Guanabara",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "L'aube sur le Corcovado",
      heading: "L'heure où la ville se montre entière",
      theme: "light",
      paragraphs: [
        "Le sentier de Paineiras part à six heures du matin. Quarante minutes de marche dans la forêt de Tijuca avant que le sommet ne soit ouvert au public. Les singes capucins traversent au-dessus du chemin, on les entend avant de les voir. Le guide marche en tête. Pas de carte, pas de balisage : il connaît le sentier depuis vingt ans.",
        "À sept heures, on arrive sous la statue du Christ Rédempteur. Personne. Le brouillard se déchire sous les pieds, et la baie de Guanabara apparaît par fragments — Pain de Sucre, baie de Botafogo, Niterói en arrière-plan. La ville s'étend entre les sept montagnes. C'est cette heure-là, et seulement cette heure-là, qu'on voit Rio en entier.",
      ],
      images: [
        {
          src: "/destination/rio-de-janeiro/split-1.png",
          alt: "Singes capucins dans la forêt de Tijuca, sentier de Paineiras",
        },
        {
          src: "/destination/rio-de-janeiro/split-2.png",
          alt: "Statue du Christ Rédempteur du Corcovado au lever du jour",
        },
      ],
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Rio de Janeiro",
      heading: "Ce qu'on fait, concrètement",
      description:
        "Trois moments ancrés dans des personnes : un percussionniste de la Mangueira, un guide-naturaliste, un pêcheur d'Ipanema. Aucune file d'attente, aucun groupe.",
      cta: { label: "Voir l'ensemble de nos expériences", href: "/experiences" },
      slugs: [
        "atelier-samba-mangueira",
        "corcovado-aube-paineiras",
        "iles-cagarras-pecheur",
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/rio-de-janeiro/mangueira-percussion.png",
          alt: "Percussionniste de l'école de samba Mangueira, Rio",
        },
        right: {
          src: "/destination/rio-de-janeiro/mangueira-tambourins.png",
          alt: "Tambourins et surdo dans la quadra de Mangueira",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Deux heures avec un percussionniste de la Mangueira",
        columns: [
          "L'école de Mangueira est l'une des plus anciennes de Rio. Fondée en 1928 dans le quartier ouvrier qui a donné son nom à la samba moderne, elle reste un cœur vivant : répétitions hebdomadaires, défilé du carnaval, école de musique pour les enfants du quartier. L'atelier privé se tient le mardi ou le jeudi, dans la quadra (la salle de répétition).",
          "Notre percussionniste y est résident depuis vingt ans. Il enseigne le surdo, le tamborim, le pandeiro — un par participant. La séance dure deux heures. Le rythme s'apprend par le corps, pas par la partition. À la fin, on joue ensemble une samba simple. C'est ce moment-là qu'on signe, parce qu'on ne le voit pas autrement.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements à Rio de Janeiro",
      heading: "Trois adresses, trois quartiers",
      description:
        "Le niveau se lit dans le choix des matériaux, des cuisiniers, des matins. Trois maisons, trois manières de vivre Rio.",
      cta: { label: "Voir tous les hébergements", href: "/hebergements" },
      slugs: ["belmond-copacabana-palace", "fasano-rio", "hotel-santa-teresa"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Avant le départ",
      heading: "Ce qu'il faut savoir avant de partir à Rio",
      description:
        "Vol, monnaie, langue, sécurité, période : l'essentiel pour préparer le voyage sereinement.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "11h30 depuis Paris CDG. Air France et LATAM proposent des vols directs quotidiens, sans escale obligatoire en Europe.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "4 heures de retard sur Paris en hiver, 5 heures en été. Le décalage joue en faveur des couche-tard.",
        },
        {
          iconName: "euro",
          title: "Monnaie",
          description:
            "Real brésilien (BRL). 1 € ≈ 6 BRL. Les paiements par carte sont largement acceptés. Espèces conseillées sur les marchés.",
        },
        {
          iconName: "fileText",
          title: "Formalités",
          description:
            "Passeport valide six mois après le retour. Aucun visa pour les ressortissants français pour des séjours de moins de 90 jours.",
        },
        {
          iconName: "syringe",
          title: "Vaccins",
          description:
            "Aucun vaccin obligatoire pour Rio même. Fièvre jaune recommandée si extension Amazonie ou Pantanal.",
        },
        {
          iconName: "calendarDays",
          title: "Quand partir",
          description:
            "Mai à octobre : saison sèche, températures de 22 à 28 °C. Carnaval en février-mars. Éviter janvier (chaleur lourde, pluies).",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "Portugais brésilien partout. L'anglais reste minoritaire, le français rare. Quelques mots de portugais facilitent les échanges.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Rio de Janeiro. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      cards: [
        {
          ...defaultBento.cards[0],
          image: {
            src: "/destination/rio-de-janeiro/bento-map.png",
            alt: "Plan stylisé des quartiers de Rio de Janeiro",
          },
        },
        {
          ...defaultBento.cards[1],
          image: {
            src: "/destination/rio-de-janeiro/bento-adresses.png",
            alt: "Devanture d'un boteco à Ipanema, Rio",
          },
        },
        {
          ...defaultBento.cards[2],
          image: {
            src: "/destination/rio-de-janeiro/bento-hebergements.png",
            alt: "Suite avec vue sur la baie de Rio depuis Santa Teresa",
          },
        },
        {
          ...defaultBento.cards[3],
          image: {
            src: "/destination/rio-de-janeiro/bento-conciergerie.png",
            alt: "Travel designer Exuma au téléphone",
          },
        },
        {
          ...defaultBento.cards[4],
          image: {
            src: "/destination/rio-de-janeiro/bento-experiences.png",
            alt: "Atelier de samba dans la quadra de Mangueira",
          },
        },
      ],
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Que voir à Rio",
      heading: "Six quartiers, et ce qu'il y a derrière",
      description:
        "Copacabana, Ipanema, Santa Teresa, Lapa, Centro, Jardim Botânico : chaque quartier tient sa promesse. Voici ceux autour desquels s'organisent la plupart de nos itinéraires.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      initialZoom: 11,
      places: [
        {
          title: "Copacabana, le balcon de Rio",
          description:
            "4 km de plage, mosaïque au sol dessinée par Burle Marx, face à la pleine mer ouverte. Réveiller la ville par le sport est une institution locale.",
          image: {
            src: "/destination/rio-de-janeiro/map-copacabana.png",
            alt: "Promenade de Copacabana et plage à l'aube, Rio",
          },
          coordinates: { lat: -22.9711, lng: -43.1822 },
        },
        {
          title: "Ipanema, l'autre rive",
          description:
            "Plage du coucher de soleil. Deux pierres immenses (Dois Irmãos) ferment l'horizon à l'ouest. Le soir, on applaudit le coucher du soleil depuis le sable.",
          image: {
            src: "/destination/rio-de-janeiro/map-ipanema.png",
            alt: "Pic des Dois Irmãos vu d'Ipanema au coucher du soleil",
          },
          coordinates: { lat: -22.9847, lng: -43.2086 },
        },
        {
          title: "Santa Teresa, la colline d'artistes",
          description:
            "Quartier suspendu au-dessus du centre, accessible par le tramway jaune (bondinho) restauré en 2015. Ateliers d'artisans, escalier Selarón, vues sur la baie.",
          image: {
            src: "/destination/rio-de-janeiro/map-santa-teresa.png",
            alt: "Tramway jaune dans les rues pavées de Santa Teresa",
          },
          coordinates: { lat: -22.9166, lng: -43.1841 },
        },
        {
          title: "Lapa, la nuit qui ne finit pas",
          description:
            "Quartier de la samba, des arches du XVIIIe siècle (Arcos da Lapa) et des bars qui ouvrent à vingt-deux heures. Le rendez-vous des cariocas musiciens.",
          image: {
            src: "/destination/rio-de-janeiro/map-lapa.png",
            alt: "Arches de Lapa de nuit, Rio de Janeiro",
          },
          coordinates: { lat: -22.9116, lng: -43.1797 },
        },
        {
          title: "Jardim Botânico, l'autre forêt",
          description:
            "140 hectares fondés en 1808 par Dom João VI. Une allée de palmiers impériaux, des collections d'orchidées, héliconias, broméliacées. Une marche d'une heure suffit.",
          image: {
            src: "/destination/rio-de-janeiro/map-jardim-botanico.png",
            alt: "Allée de palmiers impériaux du Jardin botanique de Rio",
          },
          coordinates: { lat: -22.9683, lng: -43.2243 },
        },
        {
          title: "Centro, la mémoire impériale",
          description:
            "Place Cinelândia, théâtre municipal de 1909, bibliothèque nationale, palais Tiradentes. Le centre administratif coexiste avec une vie diurne intense.",
          image: {
            src: "/destination/rio-de-janeiro/map-centro.png",
            alt: "Théâtre municipal de Rio sur la place Cinelândia",
          },
          coordinates: { lat: -22.9099, lng: -43.1758 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Ce que les guides ne disent pas",
      heading: "L'envers de Rio",
      description:
        "Huit observations de terrain qui ne se trouvent pas dans un guide. Pour décider d'une étape, ou comprendre pourquoi nous l'inscrivons à un itinéraire.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          title: "Le coucher du soleil à Ipanema, debout",
          cardEyebrow: "Tradition",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Vers dix-sept heures trente, les baigneurs se lèvent et applaudissent le soleil qui passe derrière les Dois Irmãos",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                À Ipanema, l'horizon ouest est fermé par deux pierres jumelles
                appelées Morro Dois Irmãos. Quand le soleil disparaît derrière
                elles, les Cariocas debout sur le sable applaudissent. Le geste
                est quotidien, sans solennité, sans annonce. Il dure quarante
                secondes.
              </p>
              <p>
                Les meilleurs postes d'observation sont les Postes 9 et 10, à
                hauteur des rues Vinícius de Moraes et Joana Angélica.
              </p>
              <h4 className="font-medium">À retenir :</h4>
              <p>
                Ne pas confondre avec Copacabana, où le soleil se couche
                derrière les bâtiments. À Ipanema, l'horizon est dégagé sur
                l'océan.
              </p>
            </div>
          ),
        },
        {
          title: "Les heures de la plage",
          cardEyebrow: "Tradition",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Six heures pour les familles, sept pour les coureurs, dix pour les nageurs, seize pour les jeunes",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La plage carioca se lit par strates horaires. Six heures du
                matin, les familles posent leurs serviettes. Sept à neuf
                heures, c'est l'heure du sport (course, futevôlei, natation
                organisée). De dix à treize heures, les nageurs et les enfants.
                Quatorze à seize, la plage se vide pour la sieste. À partir de
                seize heures, elle se remplit à nouveau, jusqu'à la nuit.
              </p>
              <p>
                Il existe aussi une géographie sociale par poste : poste 9
                Ipanema (jeunesse, musique), poste 10 (familles aisées), poste
                12 (LGBT), Leblon (Carioca historique). Chaque poste a ses
                vendeurs, ses kiosques, son ambiance.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Le travel designer indique le poste qui correspond au profil
                des voyageurs et coordonne, si besoin, un boy de plage privé
                (chaises, parasol, service).
              </p>
            </div>
          ),
        },
        {
          title: "Caipirinha, l'art du dosage",
          cardEyebrow: "Cuisine",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Citron vert pilé avec la peau, sucre de canne brut, cachaça artisanale, glace concassée — l'ordre compte",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La caipirinha de bar touristique est une boisson sucrée au
                citron. La caipirinha vraie est un cocktail amer, pilé avec la
                peau du citron pour libérer les huiles essentielles, sucré au
                sucre de canne brut (pas raffiné), et arrosé de cachaça
                artisanale en bouteille blanche, jamais industrielle.
              </p>
              <p>
                Trois adresses de référence à Rio : Academia da Cachaça
                (Leblon), Bar Veloso (Botafogo), Bip Bip (Copacabana, samba en
                bonus). Demander explicitement « cachaça artesanal », sinon le
                bar sert de la marque industrielle.
              </p>
              <h4 className="font-medium">À retenir :</h4>
              <p>
                Le citron vert se choisit petit et ferme. Les meilleurs
                barmans pèlent la peau partiellement avant le pilage pour
                éviter l'amertume excessive.
              </p>
            </div>
          ),
        },
        {
          title: "Bondinho, le seul tramway",
          cardEyebrow: "Transport",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Le tramway jaune de Santa Teresa restauré en 2015 — patrimoine vivant, vingt-cinq minutes pour traverser le quartier",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le bondinho de Santa Teresa est le dernier tramway en service
                à Rio. Restauré et rouvert en 2015 après un accident en 2011,
                il traverse le quartier en vingt-cinq minutes, sur les rails
                des Arches de Lapa. Le ticket coûte 20 BRL (≈ 3,50 €). Pas de
                réservation, file d'attente courte tôt le matin.
              </p>
              <p>
                Les places assises se remplissent vite. La meilleure position
                est debout sur le marchepied extérieur, comme les Cariocas le
                font depuis 1896.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Premier départ à dix heures depuis le terminal Carioca, dans
                le centre. Y aller en début de matinée pour combiner avec un
                déjeuner à Santa Teresa.
              </p>
            </div>
          ),
        },
        {
          title: "Açaí, la vraie tradition amazonienne",
          cardEyebrow: "Cuisine",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "À Rio, l'açaí se mange salé avec du poisson séché. Sucré au guarana, c'est la version sportive carioca",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L'açaí est une baie amazonienne consommée traditionnellement
                en plat salé, accompagnée de farine de manioc et de poisson
                séché. À Rio, le sportif l'a réinventé en bowl glacé sucré au
                sirop de guarana, servi dans tous les juice bars (suquerias)
                du bord de mer.
              </p>
              <p>
                Le bon açaí est noir profond, granuleux, sans excès de sirop.
                Référence : Polis Sucos (Leblon), Bibi Sucos (Ipanema), BB
                Lanches (Leblon). Éviter les chaînes industrielles type Açaí
                Amazonas.
              </p>
              <h4 className="font-medium">Adresses :</h4>
              <p>
                Pour la version traditionnelle salée, restaurant Da Silva à
                Leblon, ou un déplacement plus large vers la cuisine
                Para-amazonienne sur le Centro.
              </p>
            </div>
          ),
        },
        {
          title: "Le Corcovado, par derrière",
          cardEyebrow: "Vue",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Le sentier de Paineiras part à six heures du matin. Quarante minutes de marche pour arriver avant les bus de touristes",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le Corcovado se monte habituellement par le train depuis
                Cosme Velho. Le sentier de Paineiras, par derrière la
                montagne, est une alternative à pied. Quarante minutes de
                marche dans la forêt de Tijuca, avec un guide naturaliste.
                On arrive au sommet vers sept heures, avant l'ouverture aux
                touristes.
              </p>
              <p>
                Les singes capucins traversent le sentier. Les bromélies
                s'accrochent aux arbres en altitude. Le Christ apparaît dans
                le brouillard quelques mètres avant la dernière marche.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Guide naturaliste francophone, transport privé jusqu'au
                départ du sentier, café au sommet avant la redescente. Trois
                heures et demie au total.
              </p>
            </div>
          ),
        },
        {
          title: "Lapa, après vingt-trois heures",
          cardEyebrow: "Quartier",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Le quartier ne se réveille pas avant vingt-trois heures. Avant, c'est mort. Après, c'est jusqu'à six heures du matin",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Lapa, sous les arches du XVIIIe siècle, est le quartier de la
                vie nocturne carioca. Y aller à vingt heures est une erreur :
                les bars sont vides, les rues sales, l'ambiance triste. À
                partir de vingt-trois heures, la rue se remplit, les
                orchestres sortent les instruments, les cariocas dansent sur
                le pavé.
              </p>
              <p>
                Trois adresses : Rio Scenarium (gros club de samba sur trois
                étages), Carioca da Gema (samba authentique en petit comité),
                et Bar do Mineiro (table classique pour dîner avant la nuit).
              </p>
              <h4 className="font-medium">À retenir :</h4>
              <p>
                Lapa demande une certaine vigilance la nuit. Préférer un taxi
                privé organisé par le travel designer plutôt qu'un Uber au
                hasard.
              </p>
            </div>
          ),
        },
        {
          title: "Sécurité, par quartier",
          cardEyebrow: "Pratique",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Ipanema, Leblon, Lagoa, Botafogo, Urca : sûrs en journée et en soirée. Centro et Lapa : prudents la nuit",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Rio a une géographie de la sécurité qui se lit par quartier,
                pas globalement. Les quartiers de la Zona Sul (Ipanema, Leblon,
                Lagoa, Botafogo, Urca) sont sûrs en journée comme en soirée.
                Le Centro est sûr en journée, vide et déconseillé après vingt
                heures. Lapa demande de l'attention la nuit, mais l'animation
                rend la rue active.
              </p>
              <p>
                Règles de base : pas de bijoux ostentatoires, pas de téléphone
                en main dans la rue, pas de sac à dos plein dans la foule. Pour
                aller à la plage, un sac de plage discret avec le minimum.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Transferts privés systématiques pour les sorties de soirée et
                pour les quartiers sensibles (Centro, Mangueira, Vidigal).
                Briefing à l'arrivée par le travel designer local.
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
            "Le Corcovado à six heures du matin avec notre guide naturaliste, c'est ce qui restera. Pas de file, pas de bus. Le silence et la baie qui apparaît en dessous.",
          image: {
            src: "/destination/rio-de-janeiro/hero-1.png",
            alt: "Portrait de voyageur (TODO)", // TODO: verify
          },
          name: "TODO", // TODO: verify
          role: "Voyage en couple, août 2025", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "L'atelier de samba à Mangueira a complètement changé notre voyage. On a passé deux heures avec un percussionniste qui enseigne aux enfants du quartier. Aucun spectacle n'aurait pu remplacer ça.",
          image: {
            src: "/destination/rio-de-janeiro/hero-2.png",
            alt: "Portrait de voyageur (TODO)", // TODO: verify
          },
          name: "TODO", // TODO: verify
          role: "Voyage en famille, juillet 2025", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Stéphane nous a fait choisir le Hotel Santa Teresa plutôt que Copacabana. C'était la bonne décision. La vue sur la baie depuis la terrasse, le soir, et le tram jaune juste devant la porte.",
          image: {
            src: "/destination/rio-de-janeiro/hero-3.png",
            alt: "Portrait de voyageur (TODO)", // TODO: verify
          },
          name: "TODO", // TODO: verify
          role: "Anniversaire de mariage, octobre 2025", // TODO: verify
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
          question: "Quel est le meilleur moment pour partir à Rio ?",
          answer:
            "Mai à octobre : saison sèche, températures de 22 à 28 °C, lumière nette, foules raisonnables. Le Carnaval (février-mars) est un événement mondial mais sature les hôtels et triple les tarifs. Janvier est lourd et pluvieux ; éviter sauf pour le Réveillon.",
        },
        {
          question: "Combien de jours faut-il pour visiter Rio ?",
          answer:
            "Pour ne pas courir, cinq jours minimum, sept c'est mieux. Compter une matinée pour le Corcovado, une demi-journée pour Santa Teresa, une journée pour Copacabana et Ipanema, une journée pour le Pain de Sucre et la baie de Botafogo, et le reste pour les expériences (samba, sortie en mer, marchés).",
        },
        {
          question: "Faut-il un visa pour aller à Rio ?",
          answer:
            "Non, les ressortissants français peuvent entrer au Brésil sans visa pour des séjours de moins de 90 jours. Le passeport doit être valide six mois après la date de retour. Aucune autorisation préalable de type ESTA n'est requise.",
        },
        {
          question: "Combien coûte un voyage à Rio ?",
          answer:
            "Le budget dépend du standing souhaité et de la durée. Pour cinq jours en hôtel cinq étoiles (Belmond, Fasano) avec accès privés (Corcovado à l'aube, atelier samba, sortie en mer) et transferts inclus, compter à partir de 4 800 € par personne, hors vol.", // TODO: verify
        },
        {
          question: "Rio est-elle dangereuse ?",
          answer:
            "Rio se lit par quartier. La Zona Sul (Ipanema, Leblon, Lagoa, Botafogo, Urca, Copacabana) est sûre en journée et en soirée. Le Centro est sûr en journée, déconseillé après vingt heures. Avec un travel designer local et des transferts privés, les voyageurs ne sont pas exposés aux quartiers sensibles.",
        },
        {
          question: "Combien de temps dure le vol Paris–Rio ?",
          answer:
            "Le vol direct Paris–Rio dure environ 11h30. Air France et LATAM proposent des vols quotidiens depuis Charles-de-Gaulle. Aucune escale n'est obligatoire.",
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
        "Une autre culture côtière, une autre chaleur, un autre rythme.",
      cta: { label: "Voir toutes les destinations", href: "/destinations" },
      slugs: ["polynesie", "marrakech", "corse"],
    },
  ],
};
