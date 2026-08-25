import type { Destination } from "@/lib/content/types";

export const destination: Destination = {
  slug: "maurice",
  name: "Île Maurice",
  country: "Île Maurice",
  genitive: "de l'île Maurice",
  continentSlug: "iles-oceanie", // TODO: verify continent (géographiquement Afrique, océan Indien) regroupé ici avec les Seychelles et les destinations îles/lagon
  placeKind: "country",
  blurb: "Le Morne, Grand Baie, Chamarel, Rivière Noire",
  keywords: [
    "maurice",
    "ile maurice",
    "le morne",
    "grand baie",
    "chamarel",
    "port louis",
    "riviere noire",
    "ocean indien",
    "lagon",
  ],
  metaTitle: "Île Maurice, voyage sur mesure",
  metaDescription:
    "Voyage à l'île Maurice sur mesure : Le Morne, Grand Baie, Chamarel et le lagon. Itinéraire écrit par votre travel designer Exuma, conciergerie privée 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe à l'île Maurice",
      heading: "Une île entière enfermée dans son anneau de corail",
      description:
        "L'île mesure environ 67 kilomètres du nord au sud et 46 kilomètres de large. Un récif corallien l'entoure presque entièrement et protège un lagon aux eaux calmes. Le Morne, Chamarel, Grand Baie, les gorges de Rivière Noire : chaque région possède son propre visage.",
      images: [
        {
          src: "/destination/maurice/hero-1.png",
          alt: "Le Morne Brabant et le lagon turquoise au sud-ouest de l'île Maurice",
        },
        {
          src: "/destination/maurice/hero-2.png",
          alt: "Terres colorées et forêt de Chamarel dans les hauteurs mauriciennes",
        },
        {
          src: "/destination/maurice/hero-3.png",
          alt: "Ligne d'écume du récif barrière vue à la verticale, océan et platier corallien",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Notre rôle dans ce voyage",
      heading:
        "Carole, spécialiste de l'île Maurice, reste votre interlocutrice",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "carole",
        // TODO: verify quote attribution
        quote:
          "À l'île Maurice, chaque côte révèle une expérience différente. Le nord de Grand Baie ne ressemble pas au sud du Morne. L'est de Belle Mare offre encore une autre atmosphère. Une famille avec trois enfants et un couple qui souhaite simplement se retrouver n'attendent pas le même séjour. Notre rôle consiste à identifier la région qui correspond réellement à chaque voyageur.",
        role: "Travel Designer · Île Maurice",
      },
      features: [
        {
          iconName: "badgeCheck",
          title: "Des maisons à taille humaine",
          description:
            "Trente-six chambres au bord du lagon de Grand Baie, ou une maison de plage au pied du Morne. Nous retenons ces adresses pour leur service, pas pour leur taille.",
        },
        {
          iconName: "sparkles",
          title: "Une logique de côtes",
          description:
            "Chaque littoral possède son vent, sa mer et ses horaires. Nous construisons l'itinéraire en fonction de l'alizé et des saisons, et non des distances routières.",
        },
        {
          iconName: "star",
          title: "Des partenaires locaux",
          description:
            "Pilotes d'hélicoptère, skippers de Grand Baie, guides agréés du Morne : nous travaillons avec ceux qui connaissent réellement l'île et la font vivre au quotidien.",
        },
      ],
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Ouverture",
      heading: "Une île volcanique dans un anneau de corail",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Un voyage à l'île Maurice commence par le choix de la côte. L'île mesure environ 67 kilomètres du nord au sud et 46 kilomètres de large. Pourtant, chaque région possède son propre visage. Le nord et le sud n'offrent ni la même mer, ni les mêmes vents, ni la même atmosphère. Le récif corallien protège une grande partie du littoral. Il crée ces lagons aux eaux calmes et tièdes. Au sud, lorsque le récif s'interrompt, l'océan devient plus sauvage.",
        "Le séjour se construit autour de ce découpage. Le nord, autour de Grand Baie et de Pointe aux Canonniers, séduit par son lagon abrité. Il permet aussi de rejoindre facilement le Coin de Mire. À l'ouest, Tamarin offre la lumière du soir et les dauphins au lever du jour. Au sud-ouest, Le Morne Brabant domine le littoral du haut de ses 556 mètres. Classé à l'UNESCO, il porte la mémoire des esclaves et fait face aux vents du large. Puis vient l'intérieur de l'île : Chamarel, ses terres de sept couleurs et sa cascade. Enfin, les gorges de Rivière Noire abritent les derniers paysages forestiers naturels de Maurice. Chaque déplacement révèle une autre facette de l'île.",
        "Le dodo a disparu de l'île Maurice moins d'un siècle après l'arrivée des Hollandais. L'île a depuis appris à protéger ce qu'il lui restait. Dans les gorges de Rivière Noire, la crécerelle de Maurice ne comptait plus que quelques individus dans les années soixante-dix. Elle se compte aujourd'hui en centaines. Ces mêmes forêts abritent le pigeon rose, sauvé de la même manière.", // TODO: verify chiffres crécerelle
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/maurice/full-image.png",
        alt: "Le Morne Brabant vu depuis le lagon, plage de sable blanc et eau transparente, île Maurice",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Le Morne Brabant",
      heading: "Une histoire avant d'être un panorama",
      theme: "light",
      paragraphs: [
        "Le Morne Brabant se voit depuis toute la côte sud-ouest. Ce bloc de basalte s'élève à 556 mètres et tombe directement dans le lagon. Au début du dix-neuvième siècle, des esclaves en fuite se réfugiaient sur ses corniches, inaccessibles depuis la plaine. La tradition orale raconte qu'une expédition monta un jour leur annoncer l'abolition. Ils crurent à une capture et se jetèrent dans le vide. L'UNESCO a classé la montagne en 2008 pour cette raison précise. Il s'agit d'un paysage culturel, et non d'un simple point de vue.",
        "L'ascension se fait tôt le matin, accompagnée d'un guide agréé. Elle demande environ deux heures et demie. La seconde partie du sentier traverse des dalles de basalte où l'adhérence compte davantage que l'endurance. La vue s'ouvre ensuite d'un seul coup sur la presqu'île, l'île aux Bénitiers et la passe. En contrebas, les kitesurfeurs travaillent la vague de One Eye. Le sommet lui-même reste fermé au public : le sentier s'arrête sur un plateau, à mi-hauteur.", // TODO: verify altitude d'arrêt du sentier
      ],
      images: [
        {
          src: "/destination/maurice/split-1.png",
          alt: "Vue sur le lagon et l'île aux Bénitiers depuis le plateau du Morne Brabant",
        },
        {
          src: "/destination/maurice/split-2.png",
          alt: "Kitesurfeurs sur la vague de One Eye, entre lagon et océan, au pied du Morne",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/maurice/xp-survol-morne-1.png",
          alt: "Hélicoptère survolant le lagon et la presqu'île du Morne à Maurice",
        },
        right: {
          src: "/destination/maurice/xp-survol-morne-2.png",
          alt: "Illusion d'optique de la cascade sous-marine au large du Morne Brabant",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "La cascade qui n'existe que vue d'en haut",
        columns: [
          "L'hélicoptère quitte la côte ouest et s'élève au-dessus du lagon. Près du Morne Brabant, le fond marin plonge soudainement vers les profondeurs. Les courants déplacent le sable le long de cette pente. Depuis le ciel, ce mouvement crée une illusion spectaculaire : celle d'une immense cascade sous-marine, disparaissant au cœur de l'océan.",
          "Il ne s'agit donc pas d'une véritable cascade, mais d'une illusion d'optique. Elle n'apparaît que depuis les airs, sur un axe précis, aux heures où la lumière révèle les dégradés du fond. Le pilote incline l'appareil au bon moment. Quelques secondes plus tard, le motif se referme et l'on ne distingue plus qu'un lagon. Le vol se poursuit ensuite au-dessus du récif, de l'île aux Bénitiers et des champs de canne du sud.", // TODO: verify créneau horaire optimal
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités à l'île Maurice",
      heading: "Trois moments qui structurent le séjour",
      description:
        "Une journée en mer, un parcours de golf au pied de la montagne, un dîner à bord d'un bateau ancien. Chacune de ces expériences se réserve auprès de partenaires que nous connaissons personnellement.",
      slugs: [
        "croisiere-ilot-benitiers",
        "golf-paradis-morne",
        "diner-lady-lisbeth",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements à l'île Maurice",
      heading: "Où séjourner",
      description:
        "Deux maisons au nord, sur le lagon abrité de Grand Baie. Une troisième au pied du Morne, face aux vents du large. Nous les avons retenues pour leur service et leur emplacement.",
      slugs: ["royal-palm-beachcomber", "20-degres-sud", "lux-le-morne"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage à l'île Maurice",
      description:
        "Temps de vol, décalage horaire, monnaie, formalités et meilleure saison : voici l'essentiel pour organiser votre séjour.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Comptez environ 11 heures de vol direct depuis Paris. L'aéroport Sir Seewoosagur Ramgoolam se situe au sud-est de l'île. Il faut ensuite prévoir de trente minutes à une heure trente de route selon la côte choisie.", // TODO: verify
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "L'île Maurice est en avance de 3 heures sur la France en hiver et de 2 heures en été. Elle ne pratique pas de changement d'heure saisonnier. L'acclimatation est donc immédiate.", // TODO: verify
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "La monnaie locale est la roupie mauricienne. Un euro équivaut à environ 48 roupies. La carte bancaire est acceptée dans les hôtels et les restaurants. Prévoyez des espèces pour les marchés et les taxis.", // TODO: verify taux
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Aucun visa n'est nécessaire pour les ressortissants français. Un permis de séjour touristique est délivré à l'arrivée. Un passeport valide, un billet de sortie et un justificatif d'hébergement sont demandés.", // TODO: verify
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucune vaccination n'est obligatoire pour les voyageurs venant d'Europe. L'île n'est pas touchée par le paludisme. Les vaccins universels à jour suffisent.", // TODO: verify
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "La période de mai à décembre correspond à l'hiver austral. L'air y est sec et les températures tournent autour de 25 °C. De janvier à mars, le climat devient chaud, humide et exposé aux cyclones.", // TODO: verify
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "Le créole mauricien se parle au quotidien. Le français domine dans les médias et les hôtels, l'anglais dans l'administration. Vous vous ferez comprendre partout en français.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Le climat reste tropical toute l'année, entre 20 et 30 °C. Le sud et l'est reçoivent l'alizé et davantage de pluie. Le nord et l'ouest demeurent plus secs et plus chauds.", // TODO: verify
        },
      ],
    },

    {
      type: "bento",
      eyebrow: "Comment nous travaillons",
      heading: "Voyage sur mesure à l'île Maurice",
      description:
        "Plusieurs expertises interviennent sur chaque projet de voyage. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'à votre retour.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      cards: [
        {
          title: "Création d'itinéraires",
          description:
            "Quatre côtes, un intérieur montagneux, et l'île de Rodrigues à une heure et demie de vol. Nous déterminons dans quel ordre les découvrir.",
          image: {
            src: "/destination/maurice/bento-map.png",
            alt: "Carte d'itinéraire personnalisé entre les côtes de l'île Maurice",
          },
          tone: "dark",
        },
        {
          title: "Adresses confidentielles",
          description:
            "Tables de pêcheurs à Mahébourg, ateliers de Chamarel, plages sans accès public. Ces adresses ne figurent pas dans les moteurs de réservation.",
          image: {
            src: "/destination/maurice/bento-langouste.png",
            alt: "Langouste grillée servie sur une planche face au lagon et aux pirogues",
          },
        },
        {
          title: "Hébergements hors réseaux",
          description:
            "Maisons à taille humaine, villas avec équipe, plages privées au pied du Morne. Nous les choisissons pour leur service plutôt que pour leur façade.",
          image: {
            src: "/destination/maurice/bento-hebergements.png",
            alt: "Ponton de bois et lits de repos au bord du lagon à la tombée du jour",
          },
        },
        {
          title: "Conciergerie 24/7",
          description:
            "Un seul interlocuteur du premier échange jusqu'au retour. Réponse sous 24 heures, transferts privés, et ajustements de dernière minute pris en charge.",
          image: {
            src: "/destination/maurice/bento-conciergerie.png",
            alt: "Conseillère Exuma en conversation téléphonique avec un voyageur",
          },
        },
        {
          title: "Expériences immersives",
          description:
            "Survol du Morne, sortie vers le Coin de Mire, dîner à bord d'un bateau de 1929. Chaque accès est négocié avec des partenaires locaux.",
          image: {
            src: "/destination/maurice/bento-experiences.png",
            alt: "Nageuse en apnée au-dessus d'une tortue verte dans un lagon peu profond",
          },
        },
      ],
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables à l'île Maurice",
      heading: "Six étapes qui structurent l'île",
      description:
        "Le Morne, Chamarel, Grand Baie, Port-Louis, les gorges de Rivière Noire et l'île aux Cerfs. La plupart de nos itinéraires s'organisent autour de ces six lieux.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      initialZoom: 10,
      places: [
        {
          title: "Le Morne Brabant",
          description:
            "Ce bloc de basalte de 556 mètres est classé à l'UNESCO pour la mémoire du marronnage. À ses pieds se trouve la vague de One Eye, l'un des spots de kitesurf les plus recherchés de l'océan Indien.",
          image: {
            src: "/destination/maurice/map-le-morne.png",
            alt: "Falaise du Morne Brabant plongeant dans le lagon mauricien",
          },
          coordinates: { lat: -20.4569, lng: 57.3167 }, // TODO: verify coords
        },
        {
          title: "Chamarel, terre des sept couleurs",
          description:
            "Ces dunes de cendre volcanique décomposée présentent des teintes qui ne se mélangent jamais, même après la pluie. À proximité se trouvent une cascade et la plus ancienne rhumerie agricole de l'île.",
          image: {
            src: "/destination/maurice/map-chamarel.png",
            alt: "Dunes rouges et violettes de la terre des sept couleurs à Chamarel",
          },
          coordinates: { lat: -20.4264, lng: 57.3736 }, // TODO: verify coords
        },
        {
          title: "Grand Baie",
          description:
            "Il s'agit de la baie la mieux abritée du nord de l'île. Elle sert de point de départ aux sorties vers le Coin de Mire et l'île Plate. Son lagon reste calme même lorsque l'alizé souffle ailleurs.",
          image: {
            src: "/destination/maurice/map-grand-baie.png",
            alt: "Bateaux au mouillage dans le lagon abrité de Grand Baie à Maurice",
          },
          coordinates: { lat: -20.0125, lng: 57.5806 }, // TODO: verify coords
        },
        {
          title: "Port-Louis",
          description:
            "La capitale s'étend entre le port et la chaîne de Moka. On y visite le marché central et l'Aapravasi Ghat, classé à l'UNESCO. Les tables créoles y ouvrent surtout à l'heure du déjeuner.",
          image: {
            src: "/destination/maurice/map-port-louis.png",
            alt: "Marché central de Port-Louis et montagnes de Moka en arrière-plan",
          },
          coordinates: { lat: -20.1619, lng: 57.4989 }, // TODO: verify coords
        },
        {
          title: "Gorges de Rivière Noire",
          description:
            "Ce parc national protège près de sept mille hectares de forêt endémique. Il abrite les derniers pigeons roses et crécerelles de Maurice. On y trouve des sentiers de crête et plusieurs cascades.",
          image: {
            src: "/destination/maurice/map-riviere-noire.png",
            alt: "Forêt endémique et cascade du parc national des gorges de Rivière Noire",
          },
          coordinates: { lat: -20.4189, lng: 57.4419 }, // TODO: verify coords
        },
        {
          title: "Île aux Cerfs",
          description:
            "Cet îlot de la côte est est bordé de sable blanc et de filaos. Le lagon y reste peu profond sur des centaines de mètres. Un parcours de golf occupe l'essentiel de son intérieur.",
          image: {
            src: "/destination/maurice/map-ile-aux-cerfs.png",
            alt: "Plage de sable blanc et filaos de l'île aux Cerfs à Maurice",
          },
          coordinates: { lat: -20.2733, lng: 57.7969 }, // TODO: verify coords
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage à l'île Maurice",
      description:
        "Huit observations de terrain que l'on ne trouve pas dans les guides. Elles vous aideront à choisir une étape, ou à comprendre pourquoi nous l'inscrivons à un itinéraire.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          title: "Dans ma valise",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Des chaussures fermées pour le basalte, un lycra pour le lagon",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le basalte du Morne et les sentiers de Rivière Noire demandent
                des chaussures fermées à semelle crantée. Les tongs suffisent
                partout ailleurs, mais pas sur ces deux terrains. Pour le
                lagon, un lycra anti-UV est vivement conseillé. Le soleil des
                tropiques reste actif même par ciel voilé, et les journées en
                bateau sont longues.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Privilégiez une crème solaire minérale. Plusieurs parcs marins
                mauriciens découragent les filtres chimiques afin de protéger
                le corail. Nous le précisons sur chaque dossier.
              </p>
            </div>
          ),
        },
        {
          title: "Choisir sa côte",
          cardEyebrow: "Logistique",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le nord pour le lagon calme, le sud-ouest pour le vent et la montagne",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le nord, autour de Grand Baie, offre l'eau la plus calme et la
                vie la plus animée. On y trouve des restaurants ouverts tard,
                des sorties en mer quotidiennes et un marché de nuit. C'est la
                côte des familles et des séjours courts.
              </p>
              <p>
                Le sud-ouest, du Morne à Tamarin, se révèle plus sauvage. Le
                vent y souffle, la montagne se trouve à dix minutes et les
                soirées restent silencieuses. Cette côte convient à ceux qui
                recherchent le calme.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Au-delà de dix jours, nous répartissons souvent le séjour sur
                deux côtes. Une heure de route suffit à changer complètement le
                rythme des journées.
              </p>
            </div>
          ),
        },
        {
          title: "Le Morne, avant huit heures",
          cardEyebrow: "Randonnée",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La seconde moitié du sentier chauffe vite et demande de l'adhérence",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L'ascension du Morne Brabant se fait obligatoirement avec un
                guide agréé. Elle demande environ deux heures et demie. La
                seconde partie traverse des dalles de basalte. À partir de neuf
                heures, la roche renvoie la chaleur et la montée devient
                pénible.
              </p>
              <p>
                Nous conseillons un départ entre six et sept heures. La
                descente s'achève avant midi, la lumière sur le lagon est
                meilleure, et l'après-midi reste libre.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous réservons le guide et calons l'horaire sur la marée, afin
                que la vue depuis le plateau tombe au bon moment.
              </p>
            </div>
          ),
        },
        {
          title: "La saison des cyclones",
          cardEyebrow: "Météo",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "De janvier à mars, le climat devient chaud et humide",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L'île Maurice se situe dans la ceinture cyclonique de l'océan
                Indien. La saison s'étend de novembre à avril, avec un pic
                marqué de janvier à mars. Un passage cyclonique ferme
                l'aéroport et immobilise les bateaux pendant vingt-quatre à
                quarante-huit heures.
              </p>
              <p>
                De mai à décembre, l'hiver austral apporte un air sec, une mer
                plus lisible et des températures autour de 25 °C. C'est la
                période que nous recommandons.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Si vos dates ne sont pas modifiables, nous ajustons le choix de
                la côte et gardons une marge sur les excursions en mer.
              </p>
            </div>
          ),
        },
        {
          title: "Manger dehors",
          cardEyebrow: "Cuisine",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le dholl puri se déguste debout, sur les marchés",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La cuisine mauricienne se vit dans la rue et sur les marchés
                plutôt que dans les salles d'hôtel. Le dholl puri est une
                galette de pois cassés servie avec rougaille et achards. Le
                vindaye de poisson, le mine frite et les gâteaux piments
                relèvent de la même tradition.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Rendez-vous au marché de Port-Louis en semaine à midi, puis aux
                camionnettes de Flacq le dimanche matin. Aucun buffet ne
                remplace ces deux adresses.
              </p>
            </div>
          ),
        },
        {
          title: "Golf et alizé",
          cardEyebrow: "Sport",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les parcours de bord de mer se jouent le matin, avant le vent",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L'île compte une dizaine de parcours de dix-huit trous, dont
                plusieurs bordent le lagon. L'alizé se lève généralement en fin
                de matinée et durcit les trous exposés. Sur les parcours
                côtiers, un départ avant huit heures change complètement la
                partie.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous réservons les départs et les transferts, puis répartissons
                les parcours selon le vent dominant de la semaine.
              </p>
            </div>
          ),
        },
        {
          title: "Une île, plusieurs mers",
          cardEyebrow: "Baignade",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "L'est reçoit l'alizé toute l'année, l'ouest presque jamais",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le vent dominant vient du sud-est. La côte est, de Belle Mare à
                Trou d'Eau Douce, se montre donc ventée et plus fraîche. Elle
                convient parfaitement au kitesurf et à la voile, moins à la
                baignade en milieu de journée. L'ouest, de Flic en Flac au
                Morne, reste sous le vent et conserve une eau lisse.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Choisissez l'ouest pour nager tôt le matin, et l'est pour
                naviguer. Les deux se combinent sur une même journée si vous
                acceptez une heure de route.
              </p>
            </div>
          ),
        },
        {
          title: "Budget et vie locale",
          cardEyebrow: "Budget",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les hôtels facturent en euros, les marchés en roupies",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L'écart de prix reste considérable sur l'île. Une assiette de
                rue coûte quelques roupies, tandis qu'une villa avec équipe se
                compte en milliers d'euros la nuit. La carte bancaire est
                acceptée dans les hôtels, mais les marchés, les taxis et les
                bateaux préfèrent les espèces.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Prévoyez l'équivalent de cent euros en roupies dès l'arrivée.
                Le change à l'aéroport reste correct, celui des hôtels beaucoup
                moins.
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
            "Nous avons partagé nos dix jours entre deux côtes, comme Carole nous l'avait proposé. Le nord pour les enfants, le Morne pour nous. Le survol en hélicoptère reste ce dont ils parlent encore.",
          image: {
            src: "/destination/maurice/hero-1.png",
            alt: "Portrait de la famille Delaunay", // TODO: verify
          },
          name: "Famille Delaunay", // TODO: verify
          role: "Séjour en famille, août 2025", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Nous ne voulions rien avoir à organiser. Tout était prévu : les transferts, les départs de golf, jusqu'au dîner à bord du bateau. Notre seule décision quotidienne concernait l'heure du réveil.",
          image: {
            src: "/destination/maurice/hero-2.png",
            alt: "Portrait de Jean-Marc", // TODO: verify
          },
          name: "Jean-Marc", // TODO: verify
          role: "Voyage en couple, septembre 2025", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Nous avons monté le Morne au lever du jour, avec un guide qui raconte l'histoire du lieu plutôt que de compter les mètres. Cette matinée justifiait à elle seule le voyage.",
          image: {
            src: "/destination/maurice/hero-3.png",
            alt: "Portrait de Claire", // TODO: verify
          },
          name: "Claire", // TODO: verify
          role: "Escapade nature, juin 2025", // TODO: verify
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
          question: "Quelle est la meilleure période pour partir à l'île Maurice ?",
          answer:
            "La période de mai à décembre correspond à l'hiver austral. L'air est sec, la mer plus lisible, et les températures tournent autour de 25 °C. De janvier à mars, le climat devient chaud, humide et exposé aux cyclones. Les mois d'octobre et novembre offrent le meilleur compromis entre température de l'eau et fréquentation.", // TODO: verify
        },
        {
          question: "Combien de temps dure le vol Paris - Maurice ?",
          answer:
            "Comptez environ 11 heures en vol direct entre Paris et l'aéroport Sir Seewoosagur Ramgoolam, situé au sud-est de l'île. Des liaisons avec escale existent également via les compagnies du Golfe. Il faut ensuite prévoir de trente minutes à une heure trente de route selon la côte choisie.", // TODO: verify
        },
        {
          question: "Faut-il un visa pour aller à l'île Maurice ?",
          answer:
            "Aucun visa n'est exigé pour les ressortissants français. Un permis de séjour touristique est délivré gratuitement à l'arrivée. Un passeport valide, un billet retour et un justificatif d'hébergement vous seront demandés. Nous accompagnons chaque voyageur dans ces formalités.", // TODO: verify
        },
        {
          question: "Que faire à l'île Maurice en une semaine ?",
          answer:
            "Une semaine permet de découvrir deux côtes sans précipitation. Commencez par le nord et Grand Baie, pour le lagon et les sorties vers le Coin de Mire. Poursuivez par le sud-ouest, avec Le Morne, Chamarel et les gorges de Rivière Noire. Le survol en hélicoptère et une journée en mer s'y intègrent facilement. Au-delà de deux bases, le séjour se transforme en succession de transferts.",
        },
        {
          question: "L'île Maurice, est-ce adapté aux familles ?",
          answer:
            "Oui. Le lagon peu profond, l'absence de paludisme, le décalage horaire minime et l'usage courant du français en font une destination adaptée aux enfants. Les côtes nord et ouest offrent les eaux les plus calmes. La plupart des adresses disposent de villas familiales et d'un encadrement dédié.", // TODO: verify
        },
        {
          question: "Quel budget prévoir pour un voyage à l'île Maurice ?",
          answer:
            "L'écart est important : l'île propose aussi bien la petite table de rue que la villa avec équipe. Le budget dépend du choix des hébergements, du nombre de côtes visitées et des expériences privées inscrites à l'itinéraire. Votre travel designer établit une proposition chiffrée, ajustée à vos priorités.",
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
        "D'autres îles de l'océan Indien et du Pacifique où le lagon rythme le séjour. À relier à Maurice, ou à comparer selon la saison.",
      slugs: [
        "seychelles",
        "polynesie",
        // TODO: ajouter "rodrigues" et "maldives" une fois ces destinations créées
      ],
    },
  ],
};
