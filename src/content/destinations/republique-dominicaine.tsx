import type { Destination } from "@/lib/content/types";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "republique-dominicaine",
  name: "République dominicaine",
  placeKind: "country",
  country: "République dominicaine",
  genitive: "de la République dominicaine",
  continentSlug: "ameriques",
  blurb: "Samaná, Punta Cana, Casa de Campo, Los Haitises",
  keywords: [
    "republique dominicaine",
    "punta cana",
    "samana",
    "casa de campo",
    "los haitises",
    "riviera cana",
    "caraibes",
    "hispaniola",
  ],
  metaTitle: "République dominicaine : Voyage sur mesure",
  metaDescription:
    "Voyage sur mesure en République dominicaine : Samaná, Punta Cana, Casa de Campo. Itinéraire écrit par votre travel designer Exuma, conciergerie privée 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage sur mesure en République dominicaine",
      heading:
        "République dominicaine. Une même île regarde l'Atlantique d'un côté, les Caraïbes de l'autre.",
      description:
        "De Samaná à Punta Cana, l'île change de mer sans changer de latitude. Baleines à bosse dans la baie de Samaná, villas isolées à Casa de Campo, cacao cultivé depuis plusieurs générations près de Río San Juan : une même République dominicaine raconte plusieurs histoires selon la côte où l'on pose sa valise.",
      images: [
        {
          src: "/destination/republique-dominicaine/hero-1.png",
          alt: "Plage de sable blanc bordée de cocotiers à Punta Cana, République dominicaine",
        },
        {
          src: "/destination/republique-dominicaine/hero-2.png",
          alt: "Baleine à bosse dans la baie de Samaná, République dominicaine",
        },
        {
          src: "/destination/republique-dominicaine/hero-3.png",
          alt: "Villa privée face à l'océan à Casa de Campo, La Romana",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir en République dominicaine ?",
      heading:
        "Carole, spécialiste de la République dominicaine, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "carole",
        // TODO: verify quote attribution
        quote:
          "La plupart des voyageurs ne voient que la côte est, celle des resorts. Il y a une autre République dominicaine, une heure plus au nord : la baie de Samaná, les mangroves de Los Haitises, une plantation de cacao qu'on visite encore à l'ancienne. Mon travail, c'est de faire tenir les deux côtes dans un même itinéraire, sans que l'un efface l'autre.",
        role: "Travel Designer · République dominicaine",
      },
      features: [
        {
          iconName: "badgeCheck",
          title: "Villas et propriétés isolées",
          description:
            "Casitas sur une falaise à Río San Juan, villa avec personnel dédié à La Romana : des adresses choisies pour leur emplacement et leur caractère.",
        },
        {
          iconName: "sparkles",
          title: "D'une côte à l'autre",
          description:
            "Atlantique au nord, Caraïbes au sud-est : un itinéraire construit pour faire évoluer les paysages et les ambiances, sans jamais rompre le fil du voyage.",
        },
        {
          iconName: "star",
          title: "Accès négociés localement",
          description:
            "Capitaine de baleinier à Samaná, planteurs de cacao, guides des Haitises : des rencontres construites avec des personnes qui connaissent l'île pour y vivre.",
        },
      ],
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Ouverture",
      heading: "Une île, deux mers",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      columns: [
        "Un voyage en République dominicaine change de mer sans jamais changer de latitude. Au nord, la péninsule de Samaná regarde l'Atlantique et ses courants agités. Au sud-est, Punta Cana et La Romana bordent la mer des Caraïbes, plus plate, plus chaude. Entre les deux, la cordillère centrale sépare deux climats et deux rythmes de vie.",
        "De janvier à mars, plusieurs milliers de baleines à bosse viennent mettre bas dans la baie de Samaná avant de repartir vers l'Atlantique Nord. Plus à l'est, le parc national Los Haitises ne se traverse qu'en bateau, entre mangroves et grottes aux pictogrammes taïnos. Sur la côte sud-est, les villas de Casa de Campo et de Punta Cana composent un tout autre registre : celui de la propriété privée, du golf et du personnel dédié. Nous construisons l'itinéraire qui fait tenir ces deux versants ensemble.",
        "« Il y a la République dominicaine des resorts qu'on voit depuis l'avion en atterrissant à Punta Cana. Et il y a celle qu'on découvre en remontant vers Samaná, une heure plus tôt le matin, une mer plus tôt dans la journée. Entre les deux, il y a tout le voyage. »",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/republique-dominicaine/full-image.png",
        alt: "Baie de Samaná vue du ciel au lever du jour, République dominicaine",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Samaná, la baie qui attend les baleines",
      heading: "Ce que la mangrove garde",
      theme: "light",
      paragraphs: [
        "Entre janvier et mars, la baie de Samaná devient l'une des zones de reproduction les plus denses de baleines à bosse de l'Atlantique Nord. Elles remontent depuis les eaux froides du Groenland et de l'Islande, un trajet de plus de six mille kilomètres, pour mettre bas dans une eau à 26 degrés. Certains matins, le souffle se voit avant le corps.",
        "Plus à l'est, le parc national Los Haitises ne s'atteint que par l'eau. Un bateau glisse entre des dômes karstiques recouverts de mangrove, jusqu'à des grottes où des pictogrammes taïnos, vieux de plusieurs siècles, restent visibles à marée basse. Aucune route ne traverse le parc. C'est ce qui l'a préservé.",
      ],
      images: [
        {
          src: "/destination/republique-dominicaine/split-1.png",
          alt: "Queue de baleine à bosse émergeant de la baie de Samaná",
        },
        {
          src: "/destination/republique-dominicaine/split-2.png",
          alt: "Dômes karstiques couverts de mangrove dans le parc Los Haitises",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/republique-dominicaine/xp-survol-helicoptere-samana-1.png",
          alt: "Vue aérienne de la côte de Samaná depuis un hélicoptère",
        },
        right: {
          src: "/destination/republique-dominicaine/xp-survol-helicoptere-samana-2.png",
          alt: "Plage isolée vue du ciel entre Samaná et Punta Cana",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "La côte, vue d'en haut",
        columns: [
          "Entre Samaná et Punta Cana, la route longe la côte sans jamais la montrer en entier. L'hélicoptère, lui, prend de la hauteur au moment où la lumière rase la mer, et la géographie de l'île devient lisible d'un coup : la baie qui se referme sur elle-même, les plages qu'aucune route ne dessert, la cordillère qui bascule brutalement vers la mer des Caraïbes.",
          "Le pilote adapte le tracé au vent du jour et aux plages qu'il veut montrer, jamais le même exactement deux fois. On survole des criques sans nom, une réserve de cocotiers, puis on redescend vers un déjeuner organisé sur une plage que le sentier n'atteint pas. Le trajet dure moins d'une heure. La mémoire qu'il laisse dure plus longtemps que le reste du séjour.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en République dominicaine",
      heading: "Nos coups de cœur en République dominicaine",
      description:
        "Trois façons de découvrir une République dominicaine plus confidentielle : observer les baleines dans la baie de Samaná, traverser les mangroves de Los Haitises en bateau, découvrir le travail du cacao encore réalisé à la main.",
      slugs: [
        "baleines-samana",
        "los-haitises-bateau",
        "cacao-hacienda-elvesia",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements en République dominicaine",
      heading: "Où séjourner",
      description:
        "Trois adresses qui racontent trois visages de l'île : une falaise sur l'Atlantique, une plage à l'écart du resort, un domaine privé à La Romana. Des lieux choisis pour leur cadre, leur atmosphère et la qualité de l'expérience qu'ils proposent.",
      slugs: ["amanera", "tortuga-bay", "casa-de-campo"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage en République dominicaine",
      description:
        "Décalage horaire, monnaie, visa, saison : l'essentiel pour construire un itinéraire en République dominicaine sans mauvaise surprise.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Environ 9 heures à 10 heures depuis Paris vers Punta Cana ou Saint-Domingue en vol direct, selon la destination et la compagnie.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "5 heures de moins en hiver et 6 heures de moins en été par rapport à la France. La République dominicaine reste à la même heure toute l'année.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Le peso dominicain (DOP) est la monnaie officielle. À titre indicatif, 1 € ≈ 65 DOP, selon le taux de change. Les dollars américains sont également largement acceptés dans les hôtels, resorts et zones touristiques.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Les ressortissants français n'ont pas besoin de visa pour un séjour touristique jusqu'à 30 jours. Un passeport en cours de validité est nécessaire. Avant l'arrivée comme au départ, chaque voyageur doit remplir gratuitement le formulaire e-ticket en ligne et présenter le QR code obtenu.",
        },
        {
          iconName: "syringe",
          title: "Vaccins et santé",
          description:
            "Aucun vaccin n'est obligatoire pour un séjour touristique depuis la France. Les vaccinations habituelles doivent être à jour. Une protection efficace contre les moustiques est recommandée ; le risque de paludisme existe toute l'année, notamment dans certaines provinces de l'ouest du pays.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "De décembre à avril, la période est généralement la plus agréable pour voyager. À Samaná, les baleines à bosse sont présentes de janvier à mars. La saison cyclonique s'étend de juin à novembre, avec une activité généralement plus marquée entre août et octobre.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "L'espagnol est la langue officielle. L'anglais est courant dans les hôtels et les principales zones touristiques ; le français est également présent dans certains établissements.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Climat tropical toute l'année, avec des températures généralement comprises entre 25 et 32 °C. L'humidité et les précipitations sont plus importantes de mai à novembre, avec un risque de phénomènes cycloniques pendant cette période.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier République dominicaine. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/republique-dominicaine/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Carte d'itinéraire personnalisé pour un voyage en République dominicaine",
            "Terrasse privée d'une villa isolée à La Romana",
            "Casita d'Amanera surplombant la côte atlantique",
            "Concierge Exuma organisant un transfert privé à Punta Cana",
            "Bateau glissant dans les mangroves du parc Los Haitises",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables en République dominicaine",
      heading: "Six lieux, et ce qu'ils gardent",
      description:
        "Samaná, Punta Cana, Santo Domingo : les grands repères d'un voyage en République dominicaine, complétés de lieux que la plupart des voyageurs traversent sans s'arrêter.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      initialZoom: 8,
      places: [
        {
          title: "Samaná, la baie des baleines",
          description:
            "De janvier à mars, plusieurs milliers de baleines à bosse viennent y mettre bas. Le reste de l'année, la péninsule garde ses plages sans nom.",
          image: {
            src: "/destination/republique-dominicaine/map-samana.png",
            alt: "Péninsule de Samaná vue depuis la baie, République dominicaine",
          },
          // TODO: verify coords
          coordinates: { lat: 19.2085, lng: -69.3345 },
        },
        {
          title: "Parc national Los Haitises",
          description:
            "Un parc qui ne se visite qu'en bateau, entre mangroves et grottes aux pictogrammes taïnos. Aucune route ne le traverse.",
          image: {
            src: "/destination/republique-dominicaine/map-los-haitises.png",
            alt: "Mangroves et dômes karstiques du parc national Los Haitises",
          },
          // TODO: verify coords
          coordinates: { lat: 19.0667, lng: -69.6667 },
        },
        {
          title: "Punta Cana, la côte des resorts",
          description:
            "Trente-deux kilomètres de plage continue sur la côte est. La densité y est réelle ; elle se contourne par les propriétés privées.",
          image: {
            src: "/destination/republique-dominicaine/map-punta-cana.png",
            alt: "Plage de Punta Cana bordée de palmiers, République dominicaine",
          },
          coordinates: { lat: 18.5601, lng: -68.3725 },
        },
        {
          title: "La Romana et Altos de Chavón",
          description:
            "Un village d'artiste reconstitué dans les années 1970 au-dessus de la rivière Chavón. Casa de Campo occupe les terres alentour.",
          image: {
            src: "/destination/republique-dominicaine/map-altos-de-chavon.png",
            alt: "Village d'Altos de Chavón surplombant la rivière Chavón, La Romana",
          },
          coordinates: { lat: 18.4227, lng: -68.9068 },
        },
        {
          title: "Río San Juan, la côte nord sans les resorts",
          description:
            "Playa Grande s'étend sur près d'un kilomètre sans une seule construction visible depuis le sable. Amanera occupe la falaise au-dessus.",
          image: {
            src: "/destination/republique-dominicaine/map-rio-san-juan.png",
            alt: "Falaise de Río San Juan surplombant Playa Grande, République dominicaine",
          },
          // TODO: verify coords
          coordinates: { lat: 19.6167, lng: -70.0167 },
        },
        {
          title: "Santo Domingo, la première ville d'Amérique",
          description:
            "La Zona Colonial garde la première cathédrale et la première rue pavée du Nouveau Monde, fondées au début du XVIe siècle. Classée à l'UNESCO.",
          image: {
            src: "/destination/republique-dominicaine/map-santo-domingo.png",
            alt: "Rue pavée de la Zona Colonial à Santo Domingo, République dominicaine",
          },
          coordinates: { lat: 18.4747, lng: -69.8927 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading:
        "Les conseils de nos experts pour votre voyage en République dominicaine",
      description:
        "Huit clés de lecture pour comprendre la République dominicaine autrement. Des repères qui guident nos choix d'étapes et la construction de chaque itinéraire.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          title: "Dans ma valise",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Passeport, tenue légère, un lainage pour les soirées de janvier à Samaná.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: Passeport valide au moins six mois après la date de
                retour. Carte de tourisme généralement incluse dans le billet
                d&apos;avion pour un séjour touristique.
              </p>
              <h4 className="font-medium">L&apos;essentiel :</h4>
              <p>
                Tenue légère toute l&apos;année, un lainage pour les soirées
                de janvier à mars sur la côte nord. Crème solaire et
                répulsif anti-moustiques, utiles dans les zones de mangrove.
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
          title: "Santé",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Aucun vaccin obligatoire pour un séjour touristique. Eau en bouteille recommandée.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: Aucun vaccin obligatoire. Vaccinations universelles à
                jour recommandées. Une protection antipaludique peut être
                conseillée pour certaines zones rurales.
              </p>
              <p>
                Eau en bouteille recommandée en dehors des grands hôtels.
                Répulsif anti-moustiques utile près des mangroves de Los
                Haitises et de Samaná.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Trousse de pharmacie de voyage classique : antalgiques,
                pansements, traitement anti-diarrhéique, répulsif.
              </p>
            </div>
          ),
        },
        {
          title: "Meilleure période",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Décembre à avril pour la saison sèche. Janvier à mars pour les baleines.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: Décembre à avril offre le meilleur compromis : saison
                sèche, chaleur stable, peu de pluie. Janvier à mars ajoute
                l&apos;observation des baleines à bosse dans la baie de
                Samaná.
              </p>
              <p>
                Août à octobre correspond à la saison des ouragans dans
                l&apos;Atlantique. Ce n&apos;est pas une saison à exclure
                systématiquement, mais elle demande un itinéraire flexible.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Nous ajustons l&apos;ordre des étapes nord-sud selon la
                saison de départ, pour ne jamais faire coïncider une étape
                avec sa période la moins favorable.
              </p>
            </div>
          ),
        },
        {
          title: "Budget & Vie locale",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Peso dominicain. Dollars et cartes acceptés dans les resorts, espèces utiles ailleurs.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: Peso dominicain (DOP). Les hôtels et resorts acceptent
                largement le dollar américain et la carte bancaire ; prévoir
                des espèces pour les petites adresses hors des zones
                touristiques.
              </p>
              <p>
                Les marchés de Santo Domingo et les petites gargotes le long
                de la route de Samaná offrent un aperçu direct de la vie
                locale, loin des buffets de resort.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous organisons systématiquement les transferts de nos
                clients : chauffeur privé, vols intérieurs, bateaux entre
                étapes.
              </p>
            </div>
          ),
        },
        {
          title: "Se déplacer en République dominicaine",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La route entre Punta Cana et Samaná prend plusieurs heures ; l'avion privé raccourcit le trajet.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Entre la côte est et la péninsule de Samaná, la route
                traverse une bonne partie de l&apos;île et prend plusieurs
                heures. Un vol intérieur ou un hélicoptère raccourcit
                nettement le trajet entre les deux étapes.
              </p>
              <p>
                À l&apos;intérieur d&apos;une même zone (Punta Cana, La
                Romana), la voiture avec chauffeur reste la meilleure option.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous calculons systématiquement l&apos;option la plus
                pertinente selon votre itinéraire et réservons chaque trajet
                à l&apos;avance.
              </p>
            </div>
          ),
        },
        {
          title: "La saison des ouragans",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Août à octobre concentre le risque cyclonique dans l'Atlantique. Ce n'est pas une saison à exclure d'office.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: La saison des ouragans s&apos;étend officiellement de
                juin à novembre, avec un pic entre août et octobre. La
                République dominicaine n&apos;est pas touchée chaque année,
                mais le risque existe.
              </p>
              <p>
                Les infrastructures hôtelières haut de gamme sont conçues
                pour absorber les intempéries ; les annulations de vol
                restent le principal aléa.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Nous surveillons les prévisions saisonnières et proposons des
                dates alternatives en cas de risque identifié avant le
                départ.
              </p>
            </div>
          ),
        },
        {
          title: "Réserver avant de partir",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les places pour l'observation des baleines et certaines villas de La Romana se réservent plusieurs mois à l'avance.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les sorties d&apos;observation des baleines à Samaná se
                remplissent vite en février, le pic de la saison. Les villas
                les plus isolées de Casa de Campo et les casitas d&apos;Amanera
                se réservent également plusieurs mois à l&apos;avance en haute
                saison.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous verrouillons ces réservations dès la confirmation du
                voyage, souvent avant même le reste de l&apos;itinéraire.
              </p>
            </div>
          ),
        },
        {
          title: "Formalités et douanes",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La carte de tourisme est généralement incluse dans le billet d'avion pour un séjour de moins de 30 jours.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: Les ressortissants français n&apos;ont pas besoin de
                visa pour un séjour touristique de moins de 30 jours. La
                carte de tourisme est le plus souvent incluse dans le prix du
                billet d&apos;avion.
              </p>
              <p>
                Le passeport doit rester valide au moins six mois après la
                date de retour prévue.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous vérifions systématiquement les formalités de chaque
                client avant le départ, selon sa nationalité et la durée du
                séjour.
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
            "Nous ne connaissions que Punta Cana par ouïe-dire. Carole nous a fait remonter jusqu'à Samaná pour les baleines, puis redescendre vers Casa de Campo : deux voyages en un, sans une seule journée de trop.",
          image: {
            src: "/destination/republique-dominicaine/hero-1.png",
            alt: "Portrait de Isabelle et Thomas", // TODO: verify
          },
          name: "Isabelle & Thomas", // TODO: verify
          role: "Séjour en famille, février 2026", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Le survol en hélicoptère entre Samaná et Punta Cana restera le moment fort du voyage. On a vu l'île entière basculer d'une mer à l'autre en moins d'une heure.",
          image: {
            src: "/destination/republique-dominicaine/hero-2.png",
            alt: "Portrait de Frédéric", // TODO: verify
          },
          name: "Frédéric", // TODO: verify
          role: "Voyage entre amis, mars 2026", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Ce qui m'a marquée, c'est l'Hacienda Elvesia : une plantation de cacao familiale, loin des circuits organisés. Nos enfants n'ont plus regardé une tablette de chocolat de la même façon.",
          image: {
            src: "/destination/republique-dominicaine/hero-3.png",
            alt: "Portrait de Constance", // TODO: verify
          },
          name: "Constance", // TODO: verify
          role: "Voyage en famille, janvier 2026", // TODO: verify
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
          question:
            "Quelle est la meilleure période pour partir en République dominicaine ?",
          answer:
            "Décembre à avril offre la saison sèche la plus stable. Janvier à mars ajoute l'observation des baleines à bosse dans la baie de Samaná. Août à octobre correspond à la saison des ouragans dans l'Atlantique.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris ?",
          answer:
            "Environ 9 heures à 10 heures depuis Paris vers Punta Cana ou Saint-Domingue en vol direct, selon la destination et la compagnie.",
        },
        {
          question: "Faut-il un visa pour aller en République dominicaine ?",
          answer:
            "Les ressortissants français n'ont pas besoin de visa pour un séjour touristique de moins de 30 jours. La carte de tourisme est le plus souvent incluse dans le billet d'avion. Un passeport valide au moins six mois après la date de retour reste requis.",
        },
        {
          question: "Combien d'étapes peut-on faire en deux semaines ?",
          answer:
            "Nous recommandons généralement 3 à 4 étapes pour un séjour de deux semaines : la côte nord et la baie de Samaná, Los Haitises, puis Punta Cana ou La Romana pour la partie balnéaire.",
        },
        {
          question: "Le voyage est-il adapté aux familles ?",
          answer:
            "Oui. Observation des baleines, excursion en bateau dans les mangroves de Los Haitises, plages privées des villas de Punta Cana ou de Casa de Campo : le pays se prête bien à un séjour multi-âges. Nous adaptons le rythme et les hébergements à l'âge des enfants.",
        },
        {
          question:
            "Quel budget prévoir pour un voyage en République dominicaine ?",
          answer:
            "Nos voyages sur mesure s'adaptent à chaque projet. À titre indicatif, un séjour de dix jours en République dominicaine se situe généralement autour de 7 000 € par personne, selon les hébergements, les expériences privées et la saison.",
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
        "Trois autres pays où la même philosophie guide nos voyages : des îles ou des côtes qui se lisent par leur géographie, révélées par notre connaissance du terrain.",
      slugs: ["seychelles", "polynesie", "kenya"],
    },
  ],
};
