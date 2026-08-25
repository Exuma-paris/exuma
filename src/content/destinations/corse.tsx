import type { Destination } from "@/lib/content/types";

export const destination: Destination = {
  slug: "corse",
  name: "Corse",
  country: "France",
  genitive: "de la Corse",
  continentSlug: "europe",
  blurb: "Bonifacio, Calvi, Sartenais, Cap Corse, Lavezzi",
  keywords: [
    "corse",
    "bonifacio",
    "calvi",
    "corte",
    "bastia",
    "porto-vecchio",
    "cap corse",
    "lavezzi",
    "mediterranee",
    "ile de beaute",
  ],
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe en Corse",
      heading: "L'île de beauté, dans son silence le plus rare",
      description:
        "Une montagne plongée dans la mer. Des criques que l'on rejoint en bateau privé, des bergeries préservées au cœur du maquis, des tables confidentielles où la cuisine raconte une mémoire insulaire. Chaque étape est pensée pour vous laisser respirer.",
      images: [
        {
          src: "/destination/corse/hero-1.png",
          alt: "Falaises blanches de Bonifacio surplombant la Méditerranée",
        },
        {
          src: "/destination/corse/hero-2.png",
          alt: "Plage de Palombaggia bordée de pins parasols au lever du jour",
        },
        {
          src: "/destination/corse/hero-3.png",
          alt: "Villa de luxe avec piscine à débordement face au golfe",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir en Corse ?",
      heading:
        "Stéphane, spécialiste de la Corse, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "stephane",
        // TODO: replace with a real verbatim from Stéphane (was Antoine placeholder)
        quote:
          "La Corse ne se visite pas en quatre jours. Elle se traverse, du Cap Corse au Sartenais, dans le rythme des bergeries et des passes. Mon travail, c'est d'inscrire les bonnes heures dans cet itinéraire, celle où la lumière tombe sur Bonifacio, celle où le vigneron sort sa cuvée d'avant.",
      },
      features: [
        {
          iconName: "badgeCheck",
          title: "Conciergerie 24/7",
          description:
            "Assistance discrète, transferts privés, bateau et hélicoptère sur appel.",
        },
        {
          iconName: "sparkles",
          title: "Sur mesure",
          description:
            "Un travel designer dédié, expert de la Corse, façonne votre voyage selon vos envies.",
        },
        {
          iconName: "star",
          title: "Exclusif",
          description:
            "Accédez à des bergeries, vignerons et tables qui ne sont pas dans les guides.",
        },
      ],
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte de la Corse",
      heading: "La Corse, une île où le temps prend une autre épaisseur",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      columns: [
        "Il existe des îles que l'on regarde, et d'autres que l'on écoute. La Corse appartient à la seconde famille.\n\nDes crêtes du GR20 aux calanques rouges de Piana, du désert blanc des Agriates aux ruelles silencieuses de Sartène, chaque vallée garde une langue, un parfum, une lumière qui n'appartiennent qu'à elle.",
        "Le maquis sent le ciste et l'immortelle dès l'aube, le granit garde la chaleur du jour bien après le coucher du soleil, et la mer change de couleur d'heure en heure. À Bonifacio, les falaises calcaires tombent à pic dans une eau d'un bleu qui n'a pas de nom, tandis que plus haut, dans les villages perchés du Cap Corse, on partage un verre de muscat avec quelqu'un qui ne vous connaissait pas la veille.",
        "Marcher au lever du jour sur le sable de Saleccia avant que personne n'arrive, écouter une polyphonie a cappella dans une église romane de Pigna, déjeuner d'un brocciu frais sur une terrasse en pierre face au golfe : ce sont ces instants discrets et entiers qui composent un voyage en Corse, et qui s'installent durablement dans la mémoire.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/corse/full-image.png",
        alt: "Vue aérienne du golfe de Porto et des calanques de Piana au coucher du soleil",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Corse, Le luxe et l'exclusif",
      heading: "L'essence secrète de l'île de beauté",
      theme: "light",
      paragraphs: [
        "Notre sélection vous ouvre les portes d'une Corse confidentielle. Nous choisissons nos adresses pour leur singularité absolue. Des bergeries restaurées dans le maquis du Sartenais. Des villas en pierre sèche cachées au-dessus de la baie de Rondinara. Chaque lieu est pensé pour vous offrir un horizon dégagé et une déconnexion totale. L'exception devient un privilège. Un bateau privé vous emporte depuis Bonifacio jusqu'aux îles Lavezzi, mouillage à l'écart, déjeuner à bord.",
        "À terre, le luxe prend tout son sens. Nous vous confions à des artisans et des gardiens d'une mémoire vivante. Un berger du Niolu vous accueille dans sa bergerie pour une dégustation de brocciu et de figatellu. Un maître de chai du Sartenais vous fait goûter ses vermentinos sur les terrasses de granit. De ces instants naissent des souvenirs d'une rareté absolue. C'est l'essence même du voyage d'Exuma.",
      ],
      images: [
        {
          src: "/destination/corse/split-1.png",
          alt: "Bergerie en pierre sèche au cœur du maquis corse",
        },
        {
          src: "/destination/corse/split-2.png",
          alt: "Bateau traditionnel mouillé dans une crique des îles Lavezzi",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/corse/polyphonie.png",
          alt: "Chanteurs polyphoniques corses dans une église romane",
        },
        right: {
          src: "/destination/corse/berger.png",
          alt: "Berger corse devant sa bergerie de pierre dans le maquis",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "L'éveil au cœur de l'âme insulaire",
        columns: [
          "En Corse, le voyage prend une autre épaisseur lorsqu'on entre vraiment dans la maison. À travers une rencontre directe avec celles et ceux qui font vivre l'île, bergers, vignerons, chantres, sculpteurs sur bois, vous découvrirez une mémoire transmise de génération en génération. Des chants polyphoniques aux fêtes de village, ces gestes encore vivants vous plongent dans le quotidien des habitants.",
          "L'art ancien des paghjelle raconte la pierre, la terre et les saints. La fleur d'immortelle vous accueille dès vos premiers pas dans le maquis. Visitez les chapelles romanes oubliées, écoutez le silence des anciens villages perchés. La Corse, terre d'histoires retenues, sait toujours et encore vous saisir profondément.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences & activités en Corse",
      heading: "Nos coups de cœur en Corse",
      description:
        "Une île qui se révèle à qui prend le temps. Du sentier muletier aux calanques rouges, du bateau privé aux caves de granit, chaque expérience est pensée pour vous immerger dans une Corse intime et préservée.",
      cta: { label: "Voir tous les coups de cœur", href: "/experiences" },
      slugs: ["gr20", "lavezzi", "vin-corse"],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Nos hébergements",
      description:
        "Nous avons soigneusement choisi les plus belles adresses de Corse, bergeries restaurées, villas en pierre, palaces discrets, pour vous offrir une expérience inoubliable.",
      cta: { label: "Voir tous les hébergements", href: "/hebergements" },
      slugs: ["murtoli", "casadelmar", "cala-rossa"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage en Corse",
      description:
        "Prêt à explorer la beauté préservée de l'île ? Voici l'essentiel à savoir avant de partir.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "TODO: 1h45 de vol depuis Paris (Ajaccio, Bastia, Calvi, Figari)",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description: "Aucun, même fuseau que la France métropolitaine",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description: "Euro, comme en métropole",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Carte nationale d'identité ou passeport en cours de validité",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description: "Aucun vaccin spécifique requis",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "TODO: De mai à juin et de septembre à mi-octobre pour la lumière et la tranquillité",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description: "Français et corse (langue régionale)",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: "Exuma",
      heading: "Voyage sur mesure en Corse",
      description:
        "Un travel designer, expert de la Corse, façonne un voyage d'exception selon vos envies.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      cards: [
        {
          title: "Création d'itinéraires",
          description:
            "Chaque voyage naît d'un échange personnel pour comprendre vos rythmes, vos envies et vos habitudes.",
          image: {
            src: "/destination/corse/bento-map.png",
            alt: "Carte d'itinéraire personnalisé en Corse",
          },
          tone: "dark",
        },
        {
          title: "Adresses confidentielles",
          description:
            "Accès privilégié à nos adresses hors des sentiers battus, des bergeries aux tables d'hôtes secrètes.",
          image: {
            src: "/destination/corse/bento-adresses.png",
            alt: "Ruelle de pierres d'un village perché corse",
          },
        },
        {
          title: "Hébergements de luxe",
          description:
            "Des bergeries restaurées dans le maquis aux villas privées les pieds dans l'eau.",
          image: {
            src: "/destination/corse/bento-aerien.png",
            alt: "Vue aérienne d'une crique préservée de Corse",
          },
        },
        {
          title: "Conciergerie 24/7",
          description:
            "Assistance en continu. Bateau privé, chauffeur, dîner privé sur la plage à toute heure.",
          image: {
            src: "/destination/corse/bento-conciergerie.png",
            alt: "Concierge Exuma sur le port de Bonifacio",
          },
        },
        {
          title: "Expériences immersives",
          description:
            "Accédez à des expériences rares : journée chez un berger, sortie en bateau privé, dégustation de vermentinos.",
          image: {
            src: "/destination/corse/bento-experience.png",
            alt: "Dégustation de vins et charcuterie corse sur une terrasse",
          },
        },
      ],
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables en Corse",
      heading: "La Corse, entre montagnes, golfes et villages perchés",
      description:
        "Que vous soyez amateur de randonnée, de plongée ou simplement en quête de silence, la diversité des paysages corses saura vous émerveiller.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      initialZoom: 7,
      places: [
        {
          title: "Bonifacio",
          description:
            "Cité médiévale perchée sur des falaises calcaires, escalier du Roy d'Aragon et îles Lavezzi à proximité.",
          image: {
            src: "/destination/corse/map-bonifacio.png",
            alt: "Falaises et citadelle de Bonifacio",
          },
          // TODO: verify coords
          coordinates: { lat: 41.3878, lng: 9.1599 },
        },
        {
          title: "Calvi",
          description:
            "Citadelle génoise face à la baie, point de départ vers le désert des Agriates et la plage de Saleccia.",
          image: {
            src: "/destination/corse/map-calvi.png",
            alt: "Citadelle de Calvi vue depuis la mer",
          },
          // TODO: verify coords
          coordinates: { lat: 42.5667, lng: 8.7575 },
        },
        {
          title: "Corte",
          description:
            "Capitale historique au cœur des montagnes, accès aux gorges de la Restonica et au lac de Melu.",
          image: {
            src: "/destination/corse/map-corte.png",
            alt: "Citadelle de Corte au pied des montagnes",
          },
          // TODO: verify coords
          coordinates: { lat: 42.3081, lng: 9.1497 },
        },
        {
          title: "Bastia",
          description:
            "Port animé du Cap Corse, ruelles génoises, marché du Vieux-Port et balcons sur le Tyrrhénienne.",
          image: {
            src: "/destination/corse/map-bastia.png",
            alt: "Vieux-Port de Bastia au matin",
          },
          // TODO: verify coords
          coordinates: { lat: 42.7028, lng: 9.4506 },
        },
        {
          title: "Porto-Vecchio",
          description:
            "Golfe protégé bordé de plages mythiques : Palombaggia, Santa Giulia, Rondinara.",
          image: {
            src: "/destination/corse/map-porto-vecchio.png",
            alt: "Plage de Palombaggia au lever du jour",
          },
          // TODO: verify coords
          coordinates: { lat: 41.5917, lng: 9.2806 },
        },
        {
          title: "Cap Corse",
          description:
            "Presqu'île sauvage au nord de l'île, villages de pêcheurs, tours génoises et vins de muscat.",
          image: {
            src: "/destination/corse/map-cap-corse.png",
            alt: "Tour génoise et maquis du Cap Corse",
          },
          // TODO: verify coords
          coordinates: { lat: 42.9667, lng: 9.4333 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage en Corse",
      description:
        "Une île de contrastes : montagne, mer, maquis, villages perchés. Quelques repères pour préparer un séjour à la hauteur de ce que la Corse a à offrir.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          title: "Dans ma valise",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Tenue de randonnée, maillot, lainage léger pour les soirées en altitude : la Corse demande de l'amplitude.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: Carte d&apos;identité ou passeport. Permis de conduire si
                vous louez un véhicule (vivement recommandé).
              </p>
              <p>
                &laquo; Nous vérifions systématiquement les formalités de chacun
                de nos clients avant le départ. &raquo;
              </p>
              <h4 className="font-medium">L&apos;essentiel :</h4>
              <p>
                TODO: Tenue légère pour le littoral, chaussures de marche pour
                les sentiers du maquis, lainage pour les soirées en altitude.
                Crème solaire haute protection, anti-moustiques pour le maquis.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                &laquo; Nos clients reçoivent une checklist personnalisée selon
                les activités prévues lors de leur séjour, environ 3 semaines
                avant. &raquo;
              </p>
            </div>
          ),
        },
        {
          title: "Santé",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Aucun vaccin obligatoire. Quelques précautions pour le maquis et le soleil méditerranéen.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: Aucun vaccin obligatoire. Vaccinations universelles à
                jour. Numéros d&apos;urgence européens (112) actifs partout sur
                l&apos;île.
              </p>
              <p>
                Soleil intense en été, vigilance déshydratation en randonnée.
                Eau du robinet potable.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Trousse de pharmacie de voyage classique : antalgiques,
                pansements, anti-moustiques, crème apaisante après-soleil.
              </p>
            </div>
          ),
        },
        {
          title: "Meilleure période",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "De mai à juin et de septembre à mi-octobre pour la lumière, la mer chaude et le calme.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: La période recommandée par notre équipe : mai-juin et
                septembre-mi-octobre. Mer entre 22 °C et 25 °C, lumière douce,
                fréquentation modérée.
              </p>
              <p>
                Juillet-août : haute saison, chaleur forte, plages animées,
                parfait pour les amateurs d&apos;effervescence, à anticiper côté
                hébergements.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                TODO: Festivals d&apos;été (Calvi on the Rocks, Festivoce de
                Pigna), fêtes de village d&apos;août, à intégrer à
                l&apos;itinéraire pour ceux qui aiment la culture vivante.
              </p>
            </div>
          ),
        },
        {
          title: "Budget & Vie locale",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Euro, paiement par carte généralisé. Restaurants confidentiels et marchés de producteurs.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: Euro. Paiement par carte largement accepté. Pourboire non
                obligatoire mais apprécié (5–10 % en restaurant).
              </p>
              <p>
                Marchés de producteurs dans la plupart des villages le matin :
                charcuterie, fromage, miel, huile d&apos;olive, vin.
              </p>
              <h4 className="font-medium">Moyens de transport sur place :</h4>
              <p>
                TODO: Voiture de location indispensable pour rayonner.
                Possibilité de bateau privé pour rejoindre les criques
                inaccessibles par la route.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                &laquo; Nous organisons systématiquement tous les transferts de
                nos clients : chauffeur privé, bateau, hélicoptère selon les
                envies. &raquo;
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
      cta: { label: "Créer mon voyage", href: "/votre-projet" },
      testimonials: [
        {
          // TODO: replace with real testimonial
          quote:
            "Notre semaine en Corse avec Exuma a été d'une douceur rare. La bergerie restaurée dans le Sartenais, le bateau privé jusqu'aux Lavezzi, le dîner sous les pins de Palombaggia, chaque détail parlait.",
          image: {
            src: "/destination/corse/hero-1.png",
            alt: "Portrait de Hélène et Pierre", // TODO: verify
          },
          name: "Hélène & Pierre", // TODO: verify
          role: "Anniversaire de mariage, septembre 2025", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Notre travel designer nous a ouvert une Corse qu'on ne pensait pas exister. La rencontre avec un berger du Niolu, une dégustation chez un vigneron du Sartenais, des moments d'une justesse rare.",
          image: {
            src: "/destination/corse/hero-2.png",
            alt: "Portrait de Julien", // TODO: verify
          },
          name: "Julien", // TODO: verify
          role: "Séjour en famille, juillet 2025", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Ce qui m'a marquée, c'est la justesse de l'accompagnement. Tout fluide, du premier appel jusqu'au retour. On se sent vraiment prise en charge, sans jamais en faire trop.",
          image: {
            src: "/destination/corse/hero-3.png",
            alt: "Portrait de Camille", // TODO: verify
          },
          name: "Camille", // TODO: verify
          role: "Escapade solo, juin 2025", // TODO: verify
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
          question: "Quelle est la meilleure période pour partir ?",
          answer:
            "TODO: De mai à juin et de septembre à mi-octobre offrent le meilleur compromis : mer chaude, lumière douce et fréquentation faible. Juillet-août restent splendides mais demandent à anticiper sur les hébergements.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris ?",
          answer:
            "TODO: Comptez environ 1h45 de vol direct vers Ajaccio, Bastia, Calvi ou Figari. Plusieurs liaisons quotidiennes en haute saison.",
        },
        {
          question: "Faut-il un visa pour la Corse ?",
          answer:
            "Non. La Corse fait partie du territoire français : carte d'identité ou passeport en cours de validité suffisent.",
        },
        {
          question: "Combien de régions peut-on visiter en deux semaines ?",
          answer:
            "TODO: Nous recommandons 2 à 3 bases pour un séjour de 14 jours, par exemple Sartenais, Cap Corse et Balagne, afin de profiter pleinement de chaque étape sans passer trop de temps en route.",
        },
        {
          question: "Le voyage est-il adapté aux familles ?",
          answer:
            "Absolument. Nous sélectionnons des hébergements et activités adaptés à tous les âges. Les criques abritées et les sentiers de petite randonnée sont parfaits avec des enfants.",
        },
        {
          question: "Quel budget prévoir ?",
          answer:
            "TODO: Nos voyages sur mesure démarrent à partir de 4 000 € par personne pour deux semaines. Le budget varie selon le choix des hébergements, des expériences et de la saison.",
        },
      ],
    },
  ],
};
