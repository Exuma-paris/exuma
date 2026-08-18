import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "egypte",
  name: "Égypte",
  placeKind: "country",
  country: "Égypte",
  genitive: "de l'Égypte",
  continentSlug: "afrique",
  blurb: "Le Nil, Louxor, Assouan, Siwa",
  keywords: [
    "egypte",
    "le caire",
    "gizeh",
    "louxor",
    "assouan",
    "vallee des rois",
    "nil",
    "siwa",
  ],
  metaTitle: "Égypte : Voyage sur mesure",
  metaDescription:
    "Voyage en Égypte sur mesure : Louxor, Assouan, Vallée des Rois et oasis de Siwa. Itinéraire écrit par votre travel designer Exuma, conciergerie privée 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe en Égypte",
      heading: "Tout le pays tient dans la largeur du Nil",
      description:
        "Quatre-vingt-quinze pour cent des Égyptiens vivent sur quatre pour cent du territoire, le long d'un fleuve qui n'excède parfois pas un kilomètre de large. Le reste est désert. De Gizeh à Abou Simbel, les sites ne sont pas des monuments isolés : ils sont alignés sur cette bande d'eau, dans l'ordre où on les a bâtis.", // TODO: verify répartition population / surface habitée
      images: [
        {
          src: "/destination/egypte/hero-1.webp",
          alt: "Felouques sur le Nil à Assouan en fin de journée, voyage en Égypte",
        },
        {
          src: "/destination/egypte/hero-2.webp",
          alt: "Colonnes de la salle hypostyle de Karnak à contre-jour, Louxor",
        },
        {
          src: "/destination/egypte/hero-3.webp",
          alt: "Dunes de la Grande Mer de Sable en bordure de l'oasis de Siwa",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir en Égypte ?",
      heading: "Stéphane, spécialiste de l'Égypte, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "stephane",
        // TODO: verify quote attribution
        quote:
          "La première fois que je suis descendu dans la tombe de Séti Ier, le gardien m'a tendu sa lampe et m'a laissé seul un moment. Les bleus du plafond astronomique n'ont jamais été repeints. C'est le pigment d'origine, posé il y a trente-trois siècles, et il est plus vif que tout ce que j'avais vu en vitrine. Depuis, je garde toujours la rive ouest de Louxor pour la fin du séjour. Il faut avoir traversé Karnak et sa démesure pour mesurer ce que les mêmes bâtisseurs ont fait sous terre, là où personne ne devait entrer. Mon second conseil tient en deux nuits : celles qu'on laisse vides sur le fleuve, entre Edfou et Assouan, sans rien au programme. Ce sont celles dont on me reparle un an après.",
        role: "Travel Designer · Égypte",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte de l'Égypte",
      heading: "Remonter le fleuve, dans l'ordre",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      columns: [
        "Un voyage en Égypte se lit du nord au sud, à contre-courant. Le Caire d'abord, Gizeh et le Grand Egyptian Museum. Louxor ensuite, à une heure de vol. Assouan enfin, puis Abou Simbel, à quarante kilomètres de la frontière soudanaise. Le fleuve descend dans l'autre sens : c'est lui qui a fixé cet ordre il y a cinq mille ans.",
        "Le plateau de Gizeh se tient à la lisière de la ville. Depuis 2025, le Grand Egyptian Museum lui fait face avec la collection complète de Toutânkhamon, cinq mille quatre cents objets réunis pour la première fois au même endroit. La chambre funéraire n'avait jamais été montrée dans son entier.", // TODO: verify nombre d'objets et date d'ouverture complète du GEM
        "Louxor coupe la journée en deux. Sur la rive est, Karnak et le temple de Louxor, les vivants. Sur la rive ouest, la Vallée des Rois, la Vallée des Reines et Deir el-Bahari, les morts. On traverse le fleuve à midi, et c'est le seul trajet du voyage qui a un sens rituel.",
        "Trois maisons portent l'itinéraire. L'Old Cataract ouvre sur la première cataracte et l'île Éléphantine, à Assouan. Al Moudira se tient sur la rive ouest de Louxor, à l'écart des quais. Une dahabieh privatisée relie les deux, à la voile, quatre à six cabines et un équipage complet pour une seule famille.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/egypte/full-image.webp",
        alt: "Dahabieh à la voile sur le Nil entre Assouan et Louxor, voyage en Égypte",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Égypte : le fleuve et le désert",
      heading: "Ce que la crue a rendu possible",
      theme: "light",
      paragraphs: [
        "Chaque été, avant le barrage, le Nil montait de sept mètres et couvrait la vallée de limon noir. Les Égyptiens appelaient leur pays Kemet, la terre noire, par opposition à Decheret, la terre rouge du désert.",
        "La crue était mesurée. Les nilomètres d'Éléphantine et de Roda comptaient les coudées, et l'impôt de l'année se fixait sur ce chiffre. Trop bas, c'était la famine. Trop haut, les digues cédaient.",
        "Cette régularité a libéré des mois entiers de main-d'œuvre agricole. Les chantiers de Gizeh et de Karnak se sont bâtis pendant les crues, quand les champs étaient sous l'eau et les blocs de pierre flottables jusqu'au pied du chantier.", // TODO: verify le lien crue / calendrier des chantiers
        "Le haut barrage d'Assouan a mis fin à la crue en 1970. Le limon s'arrête désormais au fond du lac Nasser, et les paysans achètent l'engrais que le fleuve leur livrait.",
        "La terre noire s'est arrêtée. Ce qu'elle a permis de construire tient toujours debout.",
      ],
      images: [
        {
          src: "/destination/egypte/split-1.webp",
          alt: "Escalier du nilomètre de l'île Éléphantine descendant vers le Nil, Assouan",
        },
        {
          src: "/destination/egypte/split-2.webp",
          alt: "Bande de cultures vertes serrée entre le Nil et le désert, moyenne Égypte",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/egypte/xp-gem-nocturne-1.webp",
          alt: "Galerie du Grand Egyptian Museum vide en soirée, plateau de Gizeh",
        },
        right: {
          src: "/destination/egypte/xp-gem-nocturne-2.webp",
          alt: "Masque funéraire de Toutânkhamon sous éclairage rasant, Grand Egyptian Museum",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Le musée après la fermeture, et un conservateur pour seul guide",
        columns: [
          "Le Grand Egyptian Museum occupe cinquante hectares au pied du plateau de Gizeh. La façade d'albâtre translucide est alignée sur les trois pyramides, et le grand escalier monte vers une baie qui les cadre en fin de parcours. Aux heures d'ouverture, cette baie compte deux cents personnes.", // TODO: verify superficie du GEM
          "Après dix-huit heures, le bâtiment se vide. L'accès se négocie plusieurs mois à l'avance et se limite à un groupe par soirée. Un conservateur du musée ouvre les galeries Toutânkhamon, s'arrête devant les objets qu'il a lui-même remontés de l'ancien musée de la place Tahrir, et raconte ce qui ne figure sur aucun cartel : ce qui était cassé, ce qui a été recollé, ce qui reste en réserve.",
          "La visite dure deux heures et se termine devant le masque. Dans un musée encore fermé au public, le silence change de nature. On distingue la ventilation, puis les pas d'un gardien dans une galerie voisine.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Égypte",
      heading: "Trois terrains inscrits à l'itinéraire",
      description:
        "Trois sorties structurent le voyage. On ouvre des tombes normalement fermées au public, sur autorisation et hors horaires. On décolle avant le jour au-dessus de la nécropole thébaine. On rejoint enfin Siwa, à cinq cent soixante kilomètres du Caire, pour une nuit sous tente dans la Grande Mer de Sable.", // TODO: verify distance Le Caire - Siwa
      slugs: [
        "vallee-rois-tombes-fermees",
        "montgolfiere-necropole-thebaine",
        "siwa-campement-desert",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Où séjourner en Égypte",
      description:
        "Trois maisons jalonnent le fleuve. La première domine la première cataracte depuis 1899. La deuxième se cache dans les cannes à sucre de la rive ouest de Louxor. La troisième n'a pas d'adresse : elle navigue à la voile entre les deux.",
      slugs: [
        "old-cataract-assouan",
        "al-moudira-louxor",
        "dahabieh-privatisee-nil",
      ],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage en Égypte",
      description:
        "Vol, décalage horaire, monnaie, formalités et saisons. Voici les repères qui permettent de caler les dates d'un voyage en Égypte.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Quatre heures trente en vol direct Paris-Le Caire, plusieurs départs quotidiens. Louxor et Assouan se rejoignent ensuite en une heure de vol intérieur. Marsa Alam et Hurghada sont également desservis en direct depuis Paris en saison.", // TODO: verify les liaisons directes Marsa Alam et Hurghada
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Quand il est 16 h à Paris, il est 17 h au Caire. L'Égypte a rétabli l'heure d'été en 2023, si bien que cette heure d'écart reste la même toute l'année, hiver comme été.", // TODO: verify le rétablissement de l'heure d'été en 2023
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "La livre égyptienne (EGP) s'échange autour de 55 pour un euro depuis la dévaluation de mars 2024. Les hôtels facturent souvent en euros ou en dollars. Les pourboires, systématiques, se règlent en espèces et en monnaie locale.", // TODO: verify la date de la dévaluation
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Le visa touristique est entièrement électronique. La demande se fait en ligne sur le portail officiel avant le départ, et le visa arrive sous forme de QR code à présenter à l'arrivée. Il couvre un séjour de trente jours. Le passeport doit rester valide six mois après la date de retour.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "TODO: Aucune vaccination n'est obligatoire, sauf la fièvre jaune en cas d'arrivée depuis un pays endémique. Les vaccins hépatite A et typhoïde sont recommandés. L'eau du robinet ne se boit pas, y compris pour le brossage des dents.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "TODO: D'octobre à avril, avec un pic de confort en novembre et en mars. De mai à septembre, la Haute-Égypte dépasse régulièrement 42 °C et les visites se limitent aux premières heures du jour. Le Caire reste praticable toute l'année.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "TODO: L'arabe égyptien est la langue du quotidien, l'arabe littéral celle de l'écrit. L'anglais est parlé dans les hôtels et sur les sites. Les guides francophones sont nombreux et diplômés d'égyptologie.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "TODO: Désertique et sec presque partout. Le Caire oscille entre 20 °C en janvier et 35 °C en juillet. Assouan monte de dix degrés au-dessus. Il ne pleut quasiment jamais au sud du Caire, et les nuits du désert descendent près de zéro en janvier.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Égypte. Un seul interlocuteur en assure la coordination. Il reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/egypte/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.webp`,
          alt: [
            "Itinéraire sur mesure en Égypte, du plateau de Gizeh à l'oasis de Siwa",
            "Adresses confidentielles en Égypte : tombes fermées et visites hors horaires",
            "Hébergements en Égypte : Old Cataract d'Assouan et dahabieh privatisée",
            "Conciergerie privée 24/7 pour un voyage en Égypte",
            "Expériences immersives en Égypte : Vallée des Rois, Nil et désert de Siwa",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables en Égypte",
      heading: "Six étapes, du plateau de Gizeh aux sables de Siwa",
      description:
        "Six secteurs composent la carte du pays. Cinq sont alignés sur le fleuve, dans l'ordre chronologique de leur construction. Le sixième se trouve à sept cents kilomètres à l'ouest, et n'a jamais parlé la même langue.", // TODO: verify distance Siwa / vallée du Nil
      cta: { label: "Construire ce voyage", href: "/reserver" },
      initialZoom: 5,
      places: [
        {
          title: "Gizeh et le Grand Egyptian Museum",
          description:
            "Khéops a gardé le titre de plus haute construction humaine pendant près de quatre mille ans. En face, le Grand Egyptian Museum réunit depuis 2025 l'intégralité du mobilier de Toutânkhamon, jamais montré au complet auparavant.", // TODO: verify durée du record de Khéops
          image: {
            src: "/destination/egypte/map-gizeh.webp",
            alt: "Pyramides de Gizeh vues depuis la façade du Grand Egyptian Museum, Égypte",
          },
          // TODO: verify coords
          coordinates: { lat: 29.9773, lng: 31.1325 },
        },
        {
          title: "Louxor, rive est : Karnak",
          description:
            "La salle hypostyle aligne cent trente-quatre colonnes sur cinq mille mètres carrés. Le site s'est construit sur deux mille ans, chaque pharaon ajoutant au précédent sans jamais démolir. C'est un chantier, pas un monument.", // TODO: verify nombre de colonnes et surface
          image: {
            src: "/destination/egypte/map-karnak.webp",
            alt: "Salle hypostyle du temple de Karnak au petit matin, Louxor",
          },
          // TODO: verify coords
          coordinates: { lat: 25.7188, lng: 32.6573 },
        },
        {
          title: "Louxor, rive ouest : la Vallée des Rois",
          description:
            "Soixante-cinq tombes creusées dans le calcaire d'un vallon sec, choisi parce qu'un sommet naturel y dessine une pyramide. Les couleurs des chambres de Séti Ier ont trois mille trois cents ans et n'ont jamais été repeintes.", // TODO: verify nombre de tombes
          image: {
            src: "/destination/egypte/map-vallee-des-rois.webp",
            alt: "Entrées des hypogées de la Vallée des Rois dans le vallon calcaire, Louxor",
          },
          // TODO: verify coords
          coordinates: { lat: 25.7402, lng: 32.6014 },
        },
        {
          title: "Assouan et l'île de Philae",
          description:
            "Le temple d'Isis a été démonté bloc par bloc et remonté sur l'île d'Aguilkia avant la mise en eau du barrage. Les derniers hiéroglyphes connus y ont été gravés en 394, quatre siècles après que plus personne ne les lisait couramment.", // TODO: verify date des derniers hiéroglyphes
          image: {
            src: "/destination/egypte/map-philae.webp",
            alt: "Temple d'Isis de Philae émergeant du Nil près d'Assouan, Égypte",
          },
          // TODO: verify coords
          coordinates: { lat: 24.0254, lng: 32.8845 },
        },
        {
          title: "Abou Simbel",
          description:
            "Les deux temples ont été sciés en mille trente-six blocs et remontés soixante-cinq mètres plus haut entre 1964 et 1968. Deux fois par an, le 22 février et le 22 octobre, le soleil traverse soixante mètres de roche et atteint le fond du sanctuaire.", // TODO: verify nombre de blocs et profondeur du sanctuaire
          image: {
            src: "/destination/egypte/map-abou-simbel.webp",
            alt: "Colosses de Ramsès II à la façade du grand temple d'Abou Simbel, Égypte",
          },
          // TODO: verify coords
          coordinates: { lat: 22.3372, lng: 31.6258 },
        },
        {
          title: "L'oasis de Siwa",
          description:
            "À vingt-cinq kilomètres de la frontière libyenne, Siwa parle le siwi, une langue berbère, et non l'arabe. Alexandre y a consulté l'oracle d'Amon en 331 avant notre ère. Les maisons de kershef, mélange de sel et d'argile, fondent sous la pluie, ce qui n'arrive que tous les dix ans.", // TODO: verify distance frontière et date de la visite d'Alexandre
          image: {
            src: "/destination/egypte/map-siwa.webp",
            alt: "Forteresse de Shali en briques de sel dominant l'oasis de Siwa, Égypte",
          },
          // TODO: verify coords
          coordinates: { lat: 29.2041, lng: 25.5195 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage en Égypte",
      description:
        "Huit repères issus du terrain. Ils aident à choisir la période, à découper les journées et à comprendre ce qui se négocie à l'avance.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          title: "L'heure d'ouverture des sites",
          cardEyebrow: "Terrain",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les premiers cars de croisière arrivent vers neuf heures. Une visite dès l'ouverture offre donc près de deux heures de calme.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les grands sites de Louxor ouvrent à six heures en été, à sept
                heures le reste de l&apos;année. Les groupes de croisière
                arrivent en bloc autour de neuf heures, une fois le petit
                déjeuner servi à bord.
              </p>
              <p>
                Il reste donc deux heures pleines pendant lesquelles la salle
                hypostyle est presque vide et la lumière rasante encore dans
                l&apos;axe des colonnes. Passé onze heures, le site est plein et
                le soleil à la verticale efface tous les reliefs.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Les journées se construisent en deux blocs, tôt le matin et en
                fin d&apos;après-midi, avec le milieu de journée sur le fleuve ou
                à l&apos;hôtel. Ce découpage n&apos;enlève rien au programme.
              </p>
            </div>
          ),
        },
        {
          title: "Les tombes à supplément et les fermetures tournantes",
          cardEyebrow: "Accès",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le billet de la Vallée des Rois donne accès à trois tombes. Les plus belles n'en font pas partie",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le billet standard de la Vallée des Rois ouvre trois tombes au
                choix parmi celles ouvertes ce jour-là. Les tombes de Séti Ier et
                de Toutânkhamon relèvent d&apos;un billet séparé, et celle de
                Néfertari, dans la Vallée des Reines, se réserve à part avec une
                durée de visite limitée.
              </p>
              <p>
                Les autorités font tourner les ouvertures pour laisser respirer
                les peintures. La liste change d&apos;une semaine à
                l&apos;autre et n&apos;est pas publiée à l&apos;avance.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Les tombes normalement fermées s&apos;ouvrent sur autorisation
                du ministère, demandée deux à trois mois avant le départ, et hors
                horaires publics. C&apos;est la seule façon de rester plus de dix
                minutes devant une paroi.
              </p>
            </div>
          ),
        },
        {
          title: "Croisière classique ou dahabieh",
          cardEyebrow: "Fleuve",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Naviguer sur une dahabieh transforme l'expérience du Nil. Six cabines et deux voiles offrent un rythme très différent d'un bateau de deux cents cabines.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les bateaux de croisière classiques comptent de soixante à deux
                cents cabines et accostent tous au même quai, à la même heure,
                parfois à cinq de front. On traverse alors le hall des autres
                bateaux pour rejoindre la berge.
              </p>
              <p>
                La dahabieh est un voilier à fond plat de quatre à douze cabines.
                Elle se privatise en entier, avance à la voile ou au remorqueur
                selon le vent, et accoste sur des berges où les grands bateaux ne
                peuvent pas venir : un four à pain de village, une carrière de
                grès, une île sans quai.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Le trajet Assouan-Louxor se fait dans le sens du courant et dure
                quatre à cinq nuits. Dans l&apos;autre sens, il faut une nuit de
                plus.
              </p>
            </div>
          ),
        },
        {
          title: "La chaleur de Haute-Égypte",
          cardEyebrow: "Climat",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Assouan dépasse 42 °C de mai à septembre. L'ombre y est une donnée d'itinéraire",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Entre Louxor et Abou Simbel, l&apos;été dépasse régulièrement
                42 °C, avec des pointes au-delà de 45. L&apos;air est sec, ce qui
                rend la chaleur supportable à l&apos;ombre et brutale au soleil.
              </p>
              <p>
                D&apos;octobre à avril, les journées tournent entre 25 et 32 °C
                et les nuits descendent à 10 °C dans le désert. Novembre et mars
                sont les deux mois où l&apos;on peut marcher toute la matinée
                sans contrainte.
              </p>
              <h4 className="font-medium">Dans la valise :</h4>
              <p>
                Un chapeau à bord large, du lin, des chaussures fermées pour les
                éboulis de la rive ouest, et une polaire pour les soirées de
                janvier sur le pont.
              </p>
            </div>
          ),
        },
        {
          title: "Le guide égyptologue change tout",
          cardEyebrow: "Rencontres",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Tous les guides ne proposent pas la même lecture des sites. Certains récitent les cartouches. D'autres ont travaillé plusieurs saisons sur un chantier de fouilles.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La profession est réglementée : les guides égyptiens sont
                diplômés et licenciés par le ministère du Tourisme. Le niveau
                varie néanmoins beaucoup, entre celui qui récite les cartouches
                et celui qui a travaillé sur un chantier de fouilles.
              </p>
              <p>
                La différence se voit sur les parois. Un égyptologue lit une
                scène, montre où le nom a été martelé puis regravé, et explique
                pourquoi cette chapelle a été murée. Les autres donnent des
                dates.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Le même guide accompagne tout le séjour, du Caire à Assouan. Il
                est choisi nommément, et non affecté par un correspondant local.
              </p>
            </div>
          ),
        },
        {
          title: "Photographier dans les tombes",
          cardEyebrow: "Sites",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Un billet photo se prend à l'entrée. Le flash reste interdit partout",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Un billet photographie séparé s&apos;achète à l&apos;entrée de la
                plupart des sites et donne le droit d&apos;utiliser un appareil
                dans les hypogées. Le flash est interdit sans exception : les
                pigments des chambres funéraires n&apos;ont jamais été restaurés.
              </p>
              <p>
                Les trépieds sont refusés sur presque tous les sites, sauf
                autorisation écrite du ministère. Un objectif lumineux vaut mieux
                qu&apos;un pied négocié à la porte.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Le Grand Egyptian Museum applique ses propres règles, distinctes
                de celles des sites archéologiques. Elles sont vérifiées avant
                chaque visite.
              </p>
            </div>
          ),
        },
        {
          title: "Les pourboires et le fonctionnement local",
          cardEyebrow: "Usages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le bakchich n'est pas un extra. C'est une part du salaire de beaucoup de métiers",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Gardiens de tombes, bagagistes, chauffeurs, équipage de bateau :
                une large partie de la chaîne touristique vit du pourboire.
                Refuser met mal à l&apos;aise ; sur-payer déséquilibre tout aussi
                sûrement.
              </p>
              <p>
                L&apos;usage se règle en petites coupures de livres égyptiennes,
                jamais en devises pour les petits montants. Une réserve de
                billets de dix et vingt livres se prépare dès le premier jour.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Une grille indicative est remise avant le départ, poste par
                poste. Les pourboires de l&apos;équipage d&apos;une dahabieh
                privatisée sont, eux, centralisés en fin de croisière.
              </p>
            </div>
          ),
        },
        {
          title: "Rejoindre Siwa",
          cardEyebrow: "Logistique",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Aucun aéroport civil. Huit à dix heures de route depuis Le Caire, ou quatre depuis Marsa Matrouh",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Siwa n&apos;a pas d&apos;aéroport ouvert au trafic civil.
                L&apos;accès se fait par la route : huit à dix heures depuis Le
                Caire par la côte, ou quatre heures depuis Marsa Matrouh, elle
                même reliée par un vol intérieur en saison.
              </p>
              <p>
                Le détour se justifie sur un voyage de douze jours minimum. En
                deçà, il consomme deux journées entières de transfert au
                détriment de la vallée du Nil.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Les sorties dans la Grande Mer de Sable demandent un permis
                militaire et un chauffeur agréé. Le campement se monte pour la
                nuit puis se démonte au matin.
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
            "Notre guide avait passé quatre saisons sur un chantier de fouilles à Deir el-Bahari. Il ne commentait pas les monuments : il les rattachait à ce qu'on venait de sortir du sable, et à ce que les gens du village en font aujourd'hui. La qualité du guide a plus compté que tout le reste du programme.",
          image: {
            src: "/destination/egypte/hero-1.webp",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Le Caire, Louxor et Assouan, novembre 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "On nous avait imposé un ordre : Karnak d'abord, la rive ouest seulement deux jours plus tard. Sur le moment nous n'avons pas compris pourquoi. Dans la Vallée des Rois, c'est devenu évident. On voyait ce que les mêmes équipes avaient fait sous terre, là où plus personne ne les regardait.",
          image: {
            src: "/destination/egypte/hero-2.webp",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Voyage de transmission, mars 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Nous avions demandé une catégorie d'hôtel, on nous a répondu emplacement. Al Moudira se tient sur la rive ouest, à l'écart des quais : nous étions aux tombes en quinze minutes quand les autres traversaient encore le fleuve. C'est ça qui a fait le séjour, pas les équipements de la chambre.",
          image: {
            src: "/destination/egypte/hero-3.webp",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Louxor rive ouest et dahabieh, février 2025", // TODO: replace with real testimonial
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
          question: "Quelle est la meilleure période pour partir en Égypte ?",
          answer:
            "D'octobre à avril, avec un confort maximal en novembre et en mars. Les journées tournent alors entre 25 et 32 °C en Haute-Égypte et les visites du matin se font sans contrainte. De mai à septembre, Louxor et Assouan dépassent régulièrement 42 °C : le voyage reste possible, mais il se replie sur les premières heures du jour et sur le fleuve. Décembre et janvier sont les mois les plus fréquentés.",
        },
        {
          question: "Combien de temps dure le vol Paris-Le Caire ?",
          answer:
            "Environ quatre heures trente en vol direct, avec plusieurs départs quotidiens depuis Roissy. Louxor et Assouan se rejoignent ensuite par un vol intérieur d'une heure. Côté horaires, quand il est 16 h à Paris, il est 17 h au Caire, et cet écart d'une heure ne change pas selon la saison.",
        },
        {
          question: "Faut-il un visa pour aller en Égypte ?",
          answer:
            "Oui, et il s'obtient entièrement en ligne. Le visa égyptien est électronique : la demande se dépose sur le portail officiel avant le départ, et vous recevez un QR code à présenter à l'arrivée, sans passer par un guichet. Il couvre un séjour de trente jours. Le passeport doit rester valide six mois après la date de retour. Nous préparons la demande avec vous.",
        },
        {
          question: "Que faire en Égypte en 10 jours ?",
          answer:
            "Trois nuits au Caire pour Gizeh, le Grand Egyptian Museum et le vieux Caire copte. Deux nuits à Louxor, une rive par jour : Karnak à l'est, la Vallée des Rois et Deir el-Bahari à l'ouest. Quatre nuits ensuite sur une dahabieh privatisée jusqu'à Assouan, avec Edfou, Kom Ombo et les carrières de grès de Gebel Silsileh en chemin. Abou Simbel s'ajoute en une journée depuis Assouan. Siwa demande deux jours supplémentaires.",
        },
        {
          question: "Une croisière sur le Nil, est-ce que ça vaut le coup ?",
          answer:
            "Sur un bateau classique de soixante à deux cents cabines, l'expérience est celle d'un hôtel flottant qui accoste au même quai que quatre autres. Sur une dahabieh privatisée de quatre à six cabines, c'est un autre voyage : la voile, des berges inaccessibles aux grands bateaux, un équipage pour une seule famille et des escales décidées le matin même. C'est cette seconde formule que nous construisons.",
        },
        {
          question: "Quel budget prévoir pour un voyage en Égypte ?",
          answer:
            "Un voyage en Égypte sur mesure avec Exuma se situe généralement entre 5 000 et 12 000 € par personne pour dix à douze jours, vols intérieurs, guide égyptologue privé et dahabieh privatisée compris, hors vols internationaux. Les accès négociés hors horaires et les tombes sur autorisation constituent le principal poste variable.", // TODO: verify la fourchette de budget
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
        "Une autre ville où l'histoire se lit dans la pierre et où les ruelles se traversent avant la chaleur. La Jordanie et Oman rejoindront bientôt cette sélection.",
      slugs: ["marrakech"],
    },
  ],
};
