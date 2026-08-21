import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "hawai",
  name: "Hawaï",
  placeKind: "region",
  country: "États-Unis",
  genitive: "d'Hawaï",
  continentSlug: "ameriques",
  blurb: "Volcans, vallées et grandes falaises du Pacifique",
  keywords: [
    "hawai",
    "hawaii",
    "big island",
    "maui",
    "kauai",
    "molokai",
    "lanai",
    "mauna kea",
  ],
  metaTitle: "Hawaï : Voyage sur mesure",
  metaDescription:
    "Voyage à Hawaï sur mesure : volcans de Big Island, vallées de Molokai, falaises de Kauai. Itinéraire écrit par votre travel designer Exuma, conciergerie 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe à Hawaï",
      heading: "Hawaï, des volcans de Big Island aux vallées de Molokai",
      description:
        "Hawaï se découvre île par île, et chacune a son caractère. Sur Big Island, la lave descend encore vers l'océan et la terre se fabrique sous vos yeux. Sur Molokai, le temps ralentit dans des vallées où le taro pousse toujours dans l'eau. Ailleurs, ce sont les sommets qui percent les nuages, les grandes falaises de Kauai et des plages où l'on reste seul. C'est cet archipel-là que nous composons pour vous, île après île.",
      images: [
        {
          src: "/destination/hawai/hero-1.png",
          alt: "Falaises de la côte de Na Pali plongeant dans l'océan au nord de Kauai à Hawaï",
        },
        {
          src: "/destination/hawai/hero-2.png",
          alt: "Coulée de lave du Kilauea descendant vers l'océan sur Big Island",
        },
        {
          src: "/destination/hawai/hero-3.png",
          alt: "Vallée verte de Halawa et ses cultures de taro sur l'île de Molokai",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir à Hawaï ?",
      heading: "Carole, spécialiste d'Hawaï, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "carole",
        // TODO: verify quote attribution
        quote:
          "Ce que j'aime à Hawaï, c'est que l'archipel ne se laisse jamais résumer à une seule île. On croit partir pour des plages, et l'on rentre en parlant d'un sommet glacé au-dessus des nuages, d'une vallée où une famille vous a reçus, d'un ranch où l'on monte à cheval comme il y a un siècle. Ces contrastes ne s'improvisent pas sur place : tout mon travail consiste à les mettre dans le bon ordre, pour que chaque île vous surprenne à son tour.",
        role: "Travel Designer · Hawaï",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte d'Hawaï",
      heading: "Hawaï, la douceur du Pacifique et le feu des volcans",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Un voyage à Hawaï commence par le choix des îles, et c'est là que tout se joue. Kauai est la plus ancienne : ses reliefs se sont adoucis, ses rivières ont ouvert des canyons rouges et la forêt a tout recouvert. Big Island, la plus jeune, s'agrandit encore à chaque réveil du Kilauea. Entre elles, Maui, Molokai et Lanai proposent chacune une autre façon d'habiter le Pacifique.",
        "L'archipel s'est formé au-dessus d'un point chaud qui n'a jamais bougé, et les îles sont nées l'une après l'autre en dérivant lentement vers le nord-ouest. Cela se lit dans le paysage sans qu'on ait besoin de l'expliquer : on descend le matin dans un canyon que l'eau a mis des millénaires à creuser, et l'on marche le soir sur une coulée noire où rien ne pousse encore.",
        "Nos adresses suivent la même logique. Le Four Seasons occupe une île presque entièrement privée, où l'on ne croise ni feu tricolore ni foule. Kona Village aligne ses maisons de bois sur la lave de Kahuwai Bay, entre des viviers hawaïens et des pétroglyphes que la marée découvre. Nous vous conduisons d'une île à l'autre sans que vous ayez à y penser.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/hawai/full-image.png",
        alt: "Cratère du Haleakala au lever du jour sur l'île de Maui à Hawaï",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Hawaï : la navigation hawaïenne",
      heading: "La pirogue Hokulea et l'art de naviguer aux étoiles",
      theme: "light",
      paragraphs: [
        "La pirogue Hokulea a été construite pour prouver une chose : les ancêtres hawaïens savaient traverser le Pacifique sans le moindre instrument. Elle a rallié Tahiti sans compas, sans carte et sans montre, guidée par un navigateur venu de Micronésie qui lisait la houle sous la coque, les étoiles à leur lever et le vol des oiseaux au crépuscule. Quand elle est entrée dans la passe de Papeete, la moitié de l'île l'attendait sur le quai.",
        "Ce voyage a réveillé toute une culture. La langue hawaïenne, effacée des écoles pendant près d'un siècle, est redevenue officielle et s'apprend aujourd'hui dès la maternelle. Le hula a retrouvé ses chants anciens et se danse à Hilo devant des salles pleines. Nous vous ouvrons les portes de ce renouveau, auprès de ceux qui le font vivre.",
      ],
      images: [
        {
          src: "/destination/hawai/split-1.png",
          alt: "Navigateur hawaïen à la barre d'une pirogue double à voiles au large d'Oahu",
        },
        {
          src: "/destination/hawai/split-2.png",
          alt: "Danseuse de hula en costume traditionnel lors d'un festival à Hilo",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/hawai/xp-halawa-1.png",
          alt: "Sentier de la vallée de Halawa longeant la rivière sous les arbres, Molokai",
        },
        right: {
          src: "/destination/hawai/xp-halawa-2.png",
          alt: "Cascade tombant dans un bassin d'eau douce au fond de la vallée de Halawa",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Une marche dans la vallée de Halawa, à Molokai",
        columns: [
          "La vallée de Halawa est l'une des plus anciennes terres cultivées de l'archipel, et l'une des rares où quelques familles font encore pousser le taro comme autrefois. On n'y entre pas librement : ce sont elles qui vous accueillent à l'entrée du sentier, par un chant en hawaïen auquel il faut répondre avant d'avancer. Ce moment donne le ton de la journée entière.",
          "Le chemin suit ensuite la rivière jusqu'à une cascade qui tombe dans un bassin d'eau douce, où l'on se baigne. En route, notre guide nomme chaque plante et raconte ce que sa famille a vécu ici, les tsunamis qui ont chassé les habitants et le retour de ceux qui n'ont pas voulu partir. Molokai est l'île qui a le plus tenu à rester elle-même, et cela se sent dès qu'on y pose le pied.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités à Hawaï",
      heading: "Les moments dont on reparle en rentrant",
      description:
        "Une nuit au sommet du Mauna Kea avec un astronome, un survol des falaises de Na Pali portes ouvertes, une matinée à cheval dans les pâturages de Kohala.",
      slugs: [
        "sommet-mauna-kea-astronome",
        "napali-helicoptere-kauai",
        "paniolos-parker-ranch",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Où séjourner à Hawaï",
      description:
        "Une île presque entièrement privée pour un seul hôtel, des maisons de bois posées sur la lave à Kahuwai Bay, de vraies résidences de famille face au canal de Molokai.",
      slugs: [
        "four-seasons-lanai",
        "kona-village-rosewood",
        "montage-kapalua-bay",
      ],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage à Hawaï",
      description:
        "Vol, décalage, formalités et saisons : l'essentiel pour préparer sereinement votre voyage à Hawaï.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Il n'existe actuellement pas de vol direct entre Paris et Honolulu. Une escale est nécessaire, souvent en Amérique du Nord, à Los Angeles, San Francisco ou Seattle, pour environ 19 à 24 heures de voyage selon la correspondance. L'arrivée se fait à Honolulu, sur Oahu, ou directement à Kona, sur Big Island, selon les périodes et les compagnies.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Hawaï ne change pas d'heure au cours de l'année. Comptez onze heures de retard sur la France en hiver, et douze heures en été : le décalage varie parce que c'est la France qui change d'heure, pas l'archipel.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Le dollar américain. Les cartes étrangères sont très largement acceptées, y compris pour de petits montants, mais il reste utile de garder quelques espèces pour les marchés et les pourboires, d'usage courant dans la restauration.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Hawaï étant un État américain, les formalités sont celles des États-Unis. Les ressortissants français peuvent séjourner jusqu'à quatre-vingt-dix jours dans le cadre du programme d'exemption de visa, le Visa Waiver Program, à condition d'obtenir une autorisation ESTA avant le départ. Elle est payante et généralement valable deux ans, ou jusqu'à l'expiration du passeport, qui doit être un passeport électronique compatible avec le Visa Waiver Program.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin spécifique n'est obligatoire pour un séjour touristique à Hawaï. Il est recommandé d'être à jour des vaccinations prévues au calendrier vaccinal français.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "Nous privilégions le printemps, d'avril à juin, et l'automne, de septembre à novembre. Ces périodes conjuguent températures agréables et fréquentation plus douce. De décembre à mai, les baleines à bosse rejoignent les eaux hawaïennes. L'hiver apporte également de puissantes houles sur les côtes nord.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "L'anglais et le hawaïen sont les deux langues officielles de l'État. Le hawaïen se réentend grâce aux écoles d'immersion et se lit partout sur les panneaux et les noms de lieux. On entend aussi couramment le créole hawaïen, communément appelé Pidgin, ainsi que le japonais, le tagalog et l'ilocano parlés par les communautés installées dans l'archipel.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Le climat reste doux toute l'année sur les côtes, avec des températures peu variables et des alizés réguliers. Les versants exposés à l'est reçoivent l'essentiel de la pluie, le plus souvent sous forme d'averses brèves, tandis que les côtes ouest, comme celle de Kona, restent sèches et ensoleillées. En altitude, sur le Mauna Kea et le Haleakala, il fait franchement froid et il peut geler la nuit.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Hawaï. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/hawai/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Itinéraire sur mesure à Hawaï entre Big Island, Maui, Molokai et Kauai",
            "Adresses confidentielles à Hawaï, des ranchs de Kohala aux maisons de Molokai",
            "Hébergements à Hawaï : Four Seasons Lanai et Kona Village sur Big Island",
            "Conciergerie privée 24/7 pour un voyage à Hawaï",
            "Expériences immersives à Hawaï, du sommet du Mauna Kea à la vallée de Halawa",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables à Hawaï",
      heading: "Les lieux qui donnent envie de traverser l'archipel",
      description:
        "Du sommet du Mauna Kea aux falaises de Na Pali, voici les étapes autour desquelles nous aimons construire un séjour à Hawaï.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      initialZoom: 6,
      places: [
        {
          title: "Le Mauna Kea, le sommet au-dessus des nuages",
          description:
            "La route monte jusqu'à un plateau lunaire qui domine la mer de nuages. Le coucher de soleil y est irréel, et la nuit venue, le ciel compte parmi les plus purs du monde. La montagne est sacrée : nous vous y conduisons accompagnés, comme il se doit.",
          image: {
            src: "/destination/hawai/map-mauna-kea.png",
            alt: "Observatoires du sommet du Mauna Kea au-dessus de la mer de nuages, Big Island",
          },
          // TODO: verify coords
          coordinates: { lat: 19.8207, lng: -155.4681 },
        },
        {
          title: "Le Kilauea, la terre en train de se faire",
          description:
            "Dans le parc des volcans, le cratère de Halemaumau rougeoie à la tombée du jour et la vapeur monte des failles. Selon les périodes, la lave se voit vraiment. C'est le seul endroit d'Hawaï où l'on assiste à la naissance de la roche.",
          image: {
            src: "/destination/hawai/map-kilauea.png",
            alt: "Cratère de Halemaumau du Kilauea rougeoyant à la nuit tombée dans le parc des volcans",
          },
          // TODO: verify coords
          coordinates: { lat: 19.4069, lng: -155.2834 },
        },
        {
          title: "Halawa, la vallée qui a gardé ses habitants",
          description:
            "À l'extrémité est de Molokai, une vallée verte descend vers une baie où la route s'arrête. Les familles qui y vivent encore cultivent le taro et accueillent elles-mêmes les visiteurs sur le sentier de la cascade.",
          image: {
            src: "/destination/hawai/map-halawa.png",
            alt: "Baie et vallée de Halawa vues depuis la route de l'est de Molokai",
          },
          // TODO: verify coords
          coordinates: { lat: 21.1583, lng: -156.7411 },
        },
        {
          title: "Na Pali, les grandes falaises de Kauai",
          description:
            "Ces falaises plissées tombent droit dans l'océan et aucune route n'y mène. On les découvre en bateau, en hélicoptère ou à pied, et l'on comprend d'un coup pourquoi le nord de Kauai fascine les cinéastes.",
          image: {
            src: "/destination/hawai/map-napali.png",
            alt: "Vallée de Kalalau et falaises de la côte de Na Pali au nord de Kauai",
          },
          // TODO: verify coords
          coordinates: { lat: 22.174, lng: -159.644 },
        },
        {
          title: "Le Haleakala, le lever du soleil sur Maui",
          description:
            "On monte de nuit jusqu'au bord du cratère, bien couvert, pour voir le jour se lever sur un paysage de cendres et de cônes rouges. La descente traverse ensuite les pâturages et les champs de lavande.",
          image: {
            src: "/destination/hawai/map-haleakala.png",
            alt: "Cônes rouges du cratère du Haleakala au lever du soleil sur Maui",
          },
          // TODO: verify coords
          coordinates: { lat: 20.7097, lng: -156.2533 },
        },
        {
          title: "Lanai, l'île où l'on ne croise personne",
          description:
            "Ancienne plantation d'ananas devenue une île presque entièrement privée, Lanai n'a qu'un village, des pistes rouges et les rochers sculptés de Keahiakawelo. On y vient pour le silence.",
          image: {
            src: "/destination/hawai/map-lanai.png",
            alt: "Baie de Hulopoe et rocher de Puupehe sur la côte sud de l'île de Lanai",
          },
          // TODO: verify coords
          coordinates: { lat: 20.7418, lng: -156.8931 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage à Hawaï",
      description:
        "Quelques observations de terrain qui ne se trouvent pas dans un guide, pour choisir la bonne saison, les bonnes îles et profiter de chaque journée.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          title: "Choisir ses îles",
          cardEyebrow: "Itinéraire",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Une île se laisse apprivoiser quand on lui laisse le temps",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L'archipel donne envie de tout voir, et c'est la tentation à
                laquelle nous résistons. Une île se révèle au bout de quelques
                jours seulement, quand on retrouve ses routes, sa plage au
                réveil et le café où l'on a déjà ses habitudes.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Nous construisons le plus souvent le voyage autour de deux ou
                trois îles, en donnant à chacune de vraies journées. Big Island
                pour les volcans et les ranchs, Maui ou Kauai pour les paysages,
                Molokai ou Lanai pour le calme. Les vols intérieurs se réservent
                tôt, en particulier pour Molokai, desservie par de petits
                appareils.
              </p>
            </div>
          ),
        },
        {
          title: "Le sommet du Mauna Kea",
          cardEyebrow: "Sommet",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "On y monte accompagné, doucement, et bien couvert",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le sommet culmine à plus de quatre mille mètres et se rejoint
                depuis le bord de mer en une seule montée. À cette altitude,
                l'air se raréfie et le froid surprend, même en plein été. La
                dernière portion de piste demande un véhicule adapté, que la
                plupart des loueurs interdisent d'y engager.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Nous prévoyons une halte d'acclimatation à la station
                d'observation à mi-pente, le temps que le corps s'habitue, et
                nous vous confions à un accompagnateur habilité. La montagne est
                un lieu sacré, au centre d'un débat toujours vif sur les
                télescopes : on reste sur les sentiers et l'on ne déplace pas les
                pierres. Le sommet est déconseillé aux jeunes enfants, aux femmes
                enceintes et au lendemain d'une plongée.
              </p>
            </div>
          ),
        },
        {
          title: "Ce qui se réserve à l'avance",
          cardEyebrow: "Accès",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les plus beaux sites fonctionnent par créneaux, et ils partent vite",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le lever du soleil au Haleakala demande une réservation
                nominative, ouverte deux mois à l'avance. Le parc de Haena, à
                l'entrée du sentier de Kalalau, limite les entrées et les places
                de parking. La plage de Waianapanapa, sur la route de Hana,
                fonctionne par créneaux horaires, comme Hanauma Bay et Diamond
                Head sur Oahu.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Ces créneaux conditionnent l'itinéraire, et non l'inverse : nous
                les prenons dès l'ouverture des réservations, puis nous
                construisons les journées autour. C'est la seule façon de garder
                un lever de soleil au Haleakala, qui ne se rattrape pas une fois
                sur place.
              </p>
            </div>
          ),
        },
        {
          title: "La crème solaire à emporter",
          cardEyebrow: "Réglementation",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Certains filtres chimiques ne sont plus vendus dans l'archipel",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Hawaï a été le premier État à interdire la vente des crèmes
                contenant de l'oxybenzone et de l'octinoxate, mis en cause dans
                le blanchissement des coraux. Plusieurs clubs de plongée et
                bateaux de snorkeling refusent désormais ces produits à bord.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Vérifiez l'étiquette avant de partir et emportez un filtre
                minéral, à l'oxyde de zinc ou au dioxyde de titane. Un haut
                anti-UV à manches longues reste la protection la plus simple :
                il ne s'efface pas dans l'eau et rien ne se dépose sur le récif.
              </p>
            </div>
          ),
        },
        {
          title: "La pluie ne dure jamais longtemps",
          cardEyebrow: "Météo",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Sur la même île, une côte peut être verte et l'autre presque désertique",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les alizés viennent de l'est et déchargent leur eau sur le
                premier relief. C'est ce qui donne les cascades et les jungles du
                côté de Hilo, quand la côte de Kona, de l'autre côté du volcan,
                reste sèche et lumineuse. Les averses y sont brèves et se
                déplacent vite.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Une averse ne compromet rien à Hawaï, mais le choix du versant
                change tout. Nous plaçons les nuits sur les côtes abritées et les
                journées de cascades et de forêt sur les versants au vent, en
                profitant des matinées, souvent les plus claires.
              </p>
            </div>
          ),
        },
        {
          title: "L'océan et ses saisons",
          cardEyebrow: "Baignade",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La même plage est douce en été et spectaculaire en hiver",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                De l'automne au printemps, la houle du nord vient frapper les
                côtes nord de toutes les îles : c'est la saison des grandes
                vagues et des compétitions de surf. L'été, la mer s'y apaise et
                la houle passe au sud. Certaines plages cassent directement sur
                le sable, ce qui les rend impressionnantes même par beau temps.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Baignez-vous devant un poste de secours et demandez l'état de la
                mer du jour, il change d'une baie à l'autre. Pour les familles,
                nous privilégions les baies protégées par un récif, où l'eau
                reste calme même quand le large travaille, et nous réservons le
                snorkeling aux matinées.
              </p>
            </div>
          ),
        },
        {
          title: "Se tenir dans un lieu hawaïen",
          cardEyebrow: "Usages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Demander avant d'entrer ouvre bien plus de portes qu'on ne l'imagine",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les heiau, ces enceintes de pierre sèche, sont des sanctuaires :
                on ne monte pas sur leurs murs et on ne déplace pas leurs
                pierres. Les tortues vertes et les phoques moines sont protégés
                et s'observent à bonne distance. Les Hawaïens résument tout cela
                par un mot, kuleana, qui dit à la fois le privilège et la
                responsabilité qui l'accompagne.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Sur le terrain, cela veut dire demander avant d'entrer, retirer
                ses chaussures quand on est reçu, et accepter qu'un lieu se
                refuse parfois. C'est aussi ce qui ouvre les vallées privées et
                les maisons où l'on nous attend, et que l'argent seul n'ouvre
                pas.
              </p>
            </div>
          ),
        },
        {
          title: "Dans ma valise",
          cardEyebrow: "Bagages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Trois climats dans un seul sac, de la plage au sommet glacé",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La côte se vit en lin et en coton toute l'année. Le lever du
                soleil au Haleakala se prend dans le vent froid, et le sommet du
                Mauna Kea gèle la nuit. Les sentiers des versants humides se font
                sur roche mouillée, et le récif abîme vite les pieds nus.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Une doudoune fine et un bonnet pour les sommets, une veste
                imperméable légère pour les cascades, de bonnes chaussures
                fermées, des chaussons de récif et un haut anti-UV. Les prises
                sont américaines : un adaptateur suffit, la plupart des chargeurs
                récents acceptant la tension locale.
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
            "Nous avons passé la nuit au sommet du Mauna Kea avec un astronome, au-dessus des nuages. Il faisait un froid sec et le ciel avait une netteté que je n'avais jamais vue ailleurs. Mes enfants en parlent encore.",
          image: {
            src: "/destination/hawai/hero-1.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Hawaï, Big Island et Maui, 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "À Halawa, on nous a fait attendre à l'entrée du sentier le temps du chant d'accueil. Ce n'était pas une mise en scène pour visiteurs, on l'a senti tout de suite. La journée a pris une autre couleur après cela.",
          image: {
            src: "/destination/hawai/hero-2.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Hawaï, Molokai et Kauai, 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Lanai nous a réconciliés avec l'idée de vacances : pas une file d'attente, pas un embouteillage, des pistes rouges et l'océan pour nous seuls. Je ne savais pas qu'il restait un endroit comme celui-là.",
          image: {
            src: "/destination/hawai/hero-3.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Hawaï, Lanai et Big Island, 2026", // TODO: replace with real testimonial
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
          question: "Quelle est la meilleure période pour partir à Hawaï ?",
          answer:
            "Nous privilégions le printemps, d'avril à juin, et l'automne, de septembre à novembre : ces périodes conjuguent des températures agréables et une fréquentation plus douce. De décembre à mai, les baleines à bosse rejoignent les eaux hawaïennes, avec un pic d'observation généralement entre janvier et le début du mois d'avril. L'hiver apporte également de puissantes houles sur les côtes nord. L'archipel se visite toute l'année : le choix du versant compte souvent davantage que celui du mois.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris pour Hawaï ?",
          answer:
            "Il n'existe actuellement pas de vol direct entre Paris et Honolulu. Une escale est nécessaire, souvent en Amérique du Nord, à Los Angeles, San Francisco ou Seattle, et le trajet demande environ 19 à 24 heures selon la correspondance. Selon les périodes et les compagnies, on arrive à Honolulu, sur Oahu, ou directement à Kona, sur Big Island.",
        },
        {
          question: "Faut-il un visa pour aller à Hawaï ?",
          answer:
            "Hawaï est un État américain, les formalités sont donc celles des États-Unis. Les ressortissants français peuvent séjourner jusqu'à quatre-vingt-dix jours dans le cadre du programme d'exemption de visa, le Visa Waiver Program, à condition d'obtenir une autorisation ESTA avant le départ. Elle est payante et généralement valable deux ans, ou jusqu'à l'expiration du passeport, qui doit être un passeport électronique compatible avec le Visa Waiver Program.",
        },
        {
          question: "Quelles îles visiter à Hawaï en 15 jours ?",
          answer:
            "Deux à trois îles se vivent très bien sur quinze jours, en donnant à chacune de vraies journées. Big Island pour les volcans, le Mauna Kea et les ranchs de Kohala ; Maui ou Kauai pour les paysages, la route de Hana ou les falaises de Na Pali ; Molokai ou Lanai pour le calme complet. Nous plaçons toujours une étape agréable au moment des changements d'île, pour que le déplacement fasse partie du plaisir.",
        },
        {
          question: "Hawaï est-il adapté aux familles avec enfants ?",
          answer:
            "Oui, et c'est même l'une des destinations les plus faciles à vivre en famille. Les baies protégées par un récif offrent une eau calme pour la baignade et le snorkeling, l'anglais est parlé partout et les infrastructures sont américaines. Les sorties baleines, les randonnées de cascade et les journées à cheval fonctionnent dès le plus jeune âge. Le sommet du Mauna Kea est en revanche déconseillé aux jeunes enfants : nous prévoyons alors l'observation des étoiles depuis la station à mi-pente.",
        },
        {
          question: "Quel budget prévoir pour un voyage à Hawaï ?",
          answer:
            "Le budget dépend des hébergements retenus, de la saison et du nombre d'îles. La vie courante y est plus chère qu'ailleurs aux États-Unis, l'archipel important presque tout, et les vols intérieurs s'ajoutent au voyage. Ce qui fait la différence, ce sont les quelques maisons qui tiennent un vrai niveau de service et les accès que nous négocions localement, comme la vallée de Halawa ou le sommet du Mauna Kea. Nous construisons chaque voyage sur mesure et vous présentons un budget détaillé avant toute réservation, sans engagement.",
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
        "D'autres terres où le volcan, l'océan et une culture bien vivante composent le même genre de voyage, à écrire sur mesure avec votre travel designer.",
      slugs: ["polynesie", "etats-unis", "mexique"],
    },
  ],
};
