import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "singapour",
  name: "Singapour",
  placeKind: "country",
  country: "Singapour",
  genitive: "de Singapour",
  continentSlug: "asie",
  blurb: "Marina Bay, Chinatown, hawkers étoilés, Sentosa",
  keywords: [
    "singapour",
    "marina bay",
    "chinatown",
    "sentosa",
    "gardens by the bay",
    "hawker centre",
    "tanjong pagar",
    "orchard road",
  ],
  metaTitle: "Singapour, voyage sur mesure",
  metaDescription:
    "Voyage à Singapour sur mesure : Marina Bay, hawkers étoilés, îles du Sud. Itinéraire écrit par votre travel designer Exuma, conciergerie privée 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe à Singapour",
      heading: "L'art de faire ville avec la nature",
      description:
        "Cinq millions et demi d'habitants sur sept cent trente kilomètres carrés, entre Marina Bay, Chinatown et Kampong Glam. Les Supertrees de Gardens by the Bay culminent à seize mètres, la voûte végétale de Jewel Changi grimpe sur sept étages autour de la plus haute cascade intérieure du monde. On y atterrit pour deux jours d'escale. On y reste, en général, pour une semaine entière.", // TODO: verify population and area figures
      images: [
        {
          src: "/destination/singapour/hero-1.png",
          alt: "Skyline de Marina Bay et Supertrees de Gardens by the Bay à Singapour",
        },
        {
          src: "/destination/singapour/hero-2.png",
          alt: "Ruelle de shophouses colorées à Chinatown, Singapour",
        },
        {
          src: "/destination/singapour/hero-3.png",
          alt: "Plage et jungle de l'île de Sentosa au sud de Singapour",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir à Singapour ?",
      heading: "Stéphane, spécialiste de Singapour, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "stephane",
        // TODO: verify quote attribution
        quote:
          "Singapour ne se visite pas comme une escale entre deux vols. Le meilleur de la ville se joue dans des adresses qu'on n'obtient pas par une réservation en ligne : une table chez un chef étoilé, un jardin d'orchidées avant l'ouverture, un accès paddock le soir du Grand Prix. Mon rôle est de construire cet accès avant votre arrivée, pas de le découvrir avec vous sur place.",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte de Singapour",
      heading: "Singapour, laboratoire urbain entre trois mondes",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      columns: [
        "Un voyage à Singapour commence souvent par une confusion de repères : on entend le hokkien à Chinatown, le tamoul à Little India, le malais autour de la mosquée du Sultan à Kampong Glam, parfois à trois rues d'écart. La cité-État tient sur sept cent trente kilomètres carrés, entre le détroit de Malacca et la mer de Chine méridionale, et n'a jamais choisi entre ses héritages : elle les fait cohabiter, rue par rue.",
        "La table raconte la même histoire. Chez Maxwell Food Centre, la queue devant Tian Tian Hainanese Chicken Rice ne faiblit jamais avant midi. À quelques stations de MRT, le chef Malcolm Lee sert au Candlenut une cuisine peranakan étoilée, née du croisement entre cuisiniers chinois et épices malaises. Entre les deux, Lau Pa Sat garde sa halle de fonte victorienne et ses satays grillés en pleine rue, chaque soir, depuis plus d'un siècle.",
        "Le reste de la ville s'est construit à la verticale, dans les Southern Ridges et la réserve de MacRitchie, ou vers le large, sur les îlots de Kusu et Lazarus où l'on n'entend plus le trafic de Marina Bay. Singapour a rangé sa jungle dans ses tours. Elle ne l'a jamais fait disparaître.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/singapour/full-image.png",
        alt: "Vue aérienne de Marina Bay Sands et du quartier des affaires de Singapour au crépuscule",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Singapour, le luxe et l'exclusif",
      heading: "Ce que la ville ne montre pas depuis Marina Bay",
      theme: "light",
      paragraphs: [
        "Notre sélection révèle un Singapour que l'on découvre loin des rooftops et des adresses standardisées. Entre Alexandra Park et Sentosa, les bungalows noir et blanc de l'époque coloniale, autrefois réservés aux officiers britanniques, restent aujourd'hui des adresses rares, souvent accessibles dans un cercle restreint. À Somerset, un club confidentiel installé dans une ancienne demeure ne se découvre que sur recommandation. Quant au paddock club du Grand Prix de Singapour, il ne se réserve pas en ligne : l'accès se mérite.", // TODO: verify club name
        "À Singapour, le privilège tient souvent à ce que l'on peut découvrir avant les autres. Un conservateur du Singapore Botanic Gardens ouvre les portes du National Orchid Garden avant l'arrivée du public. Un armateur privé prend le large en sampan jusqu'aux eaux paisibles de Kusu Island, loin des circuits touristiques. Ce ne sont pas de simples expériences ajoutées à un itinéraire : ce sont ces accès rares qui donnent envie de revenir à Singapour une deuxième fois.",
      ],
      images: [
        {
          src: "/destination/singapour/split-1.png",
          alt: "Bungalow colonial noir et blanc caché dans la verdure de Singapour",
        },
        {
          src: "/destination/singapour/split-2.png",
          alt: "Salon d'un club privé confidentiel à Singapour",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/singapour/xp-paddock-f1-1.png",
          alt: "Vue du circuit de Marina Bay depuis le paddock club du Grand Prix de Singapour",
        },
        right: {
          src: "/destination/singapour/xp-paddock-f1-2.png",
          alt: "Monoplaces de Formule 1 sous les projecteurs du circuit de Marina Bay",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "La seule nuit de l'année où la F1 roule sous les étoiles",
        columns: [
          "Depuis 2008, le Grand Prix de Singapour est la première course de nuit de l'histoire de la Formule 1. Le Marina Bay Street Circuit trace vingt-trois virages entre le Padang, l'Esplanade et le pont Anderson, sous des milliers de projecteurs installés le long de cinq kilomètres de tracé. La ville ferme ses rues pendant trois jours pour laisser passer les monoplaces à quelques dizaines de mètres des terrasses de Boat Quay.", // TODO: verify projector count
          "Le paddock club donne accès aux stands, aux garages d'écurie et aux terrasses réservées aux invités des équipes, un accès qui ne s'obtient normalement que par une écurie ou un sponsor. On y suit les qualifications à quelques mètres des mécaniciens, on y dîne avant que la piste ne s'illumine. Ce n'est pas un billet VIP standard, c'est l'un des accès les plus difficiles à obtenir du calendrier sportif mondial.", // TODO: verify paddock club access details
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités à Singapour",
      heading: "Nos coups de cœur à Singapour",
      description:
        "Trois expériences pour entrer dans une Singapour qui ne se voit pas depuis un rooftop : une table peranakan étoilée, un jardin d'orchidées avant l'ouverture, une traversée vers les îles du Sud.",
      slugs: [
        "diner-chef-candlenut",
        "visite-privee-jardins-botaniques",
        "croisiere-iles-du-sud",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Nos hébergements",
      description:
        "Trois adresses qui ne se ressemblent pas : un ancien mess colonial sur Sentosa, l'hôtel fondateur de 1887, un boutique-hôtel confidentiel dans les shophouses de Tanjong Pagar.",
      slugs: ["capella-singapore", "raffles-singapore", "six-senses-duxton"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage à Singapour",
      description:
        "Ce qu'il faut savoir avant de partir pour Singapour, ville-État entre l'Asie du Sud-Est et le reste du monde.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description: "Environ 13h10 de vol direct depuis Paris-CDG vers Singapour.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "6 heures d'avance sur Paris en été et 7 heures en hiver. Singapour ne change pas d'heure.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Dollar de Singapour (SGD). Les cartes bancaires internationales sont largement acceptées, mais quelques espèces peuvent être utiles dans certaines petites adresses.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Les ressortissants français n'ont pas besoin de visa pour un séjour touristique de courte durée. Le passeport doit être valable au moins 6 mois après la date prévue de départ de Singapour. La SG Arrival Card doit être remplie en ligne dans les 3 jours précédant l'arrivée.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin spécifique n'est requis depuis la France. Les vaccins courants sont néanmoins recommandés à jour. Un certificat de vaccination contre la fièvre jaune est exigé en cas de séjour ou de transit de plus de 12 heures dans un pays à risque.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "Toute l'année, avec une préférence pour février à avril, période généralement plus sèche. Le climat reste chaud, humide et ponctué d'averses quelle que soit la saison.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "Anglais, mandarin, malais et tamoul, les quatre langues officielles du pays. L'anglais est largement utilisé au quotidien.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Climat équatorial toute l'année : 25 à 32 °C, forte humidité et averses fréquentes, souvent intenses mais de courte durée.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Singapour. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/singapour/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Carte d'itinéraire personnalisé à Singapour",
            "Ruelle de shophouses de Tanjong Pagar, adresse confidentielle à Singapour",
            "Chambre d'un hôtel confidentiel à Singapour",
            "Concierge Exuma à Marina Bay, Singapour",
            "Dîner privé chez un chef à Singapour",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables à Singapour",
      heading: "Singapour, entre gratte-ciel, temples et îles du Sud",
      description:
        "Une ville-État qui se traverse en une journée mais qui se comprend en une semaine, entre quartiers historiques, jardins et archipel voisin.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      initialZoom: 11,
      places: [
        {
          title: "Marina Bay",
          description:
            "Le front de mer construit sur des terres gagnées sur l'eau, entre Marina Bay Sands, l'Esplanade et les Supertrees de Gardens by the Bay. Le skyline se regarde surtout après la tombée de la nuit.",
          image: {
            src: "/destination/singapour/map-marina-bay.png",
            alt: "Skyline de Marina Bay de nuit à Singapour",
          },
          // TODO: verify coords
          coordinates: { lat: 1.2836, lng: 103.8607 },
        },
        {
          title: "Chinatown",
          description:
            "Shophouses restaurées, temple hindou Sri Mariamman et temple bouddhiste de la Relique de la Dent de Bouddha se côtoient sur quelques rues. Le marché de nuit s'installe dès 18 heures.",
          image: {
            src: "/destination/singapour/map-chinatown.png",
            alt: "Shophouses de Chinatown à Singapour",
          },
          // TODO: verify coords
          coordinates: { lat: 1.2831, lng: 103.8442 },
        },
        {
          title: "Sentosa",
          description:
            "L'île-resort au sud de la ville principale, plages, forts coloniaux (Fort Siloso) et clubs de plage. On y accède par câble aérien ou par une chaussée de moins d'un kilomètre.",
          image: {
            src: "/destination/singapour/map-sentosa.png",
            alt: "Plage et front de mer de l'île de Sentosa",
          },
          // TODO: verify coords
          coordinates: { lat: 1.2494, lng: 103.8303 },
        },
        {
          title: "Gardens by the Bay",
          description:
            "Cent une hectares de jardins futuristes, Supertrees et deux dômes climatisés (Flower Dome, Cloud Forest) qui recréent des climats méditerranéen et tropical de montagne.", // TODO: verify area
          image: {
            src: "/destination/singapour/map-gardens-by-the-bay.png",
            alt: "Supertrees de Gardens by the Bay illuminés à Singapour",
          },
          // TODO: verify coords
          coordinates: { lat: 1.2816, lng: 103.8636 },
        },
        {
          title: "Tanjong Pagar",
          description:
            "Ancien quartier des docks devenu le cœur discret de la ville, shophouses de Duxton Hill reconverties en bars à cocktails et boutique-hôtels, à distance du bruit d'Orchard Road.",
          image: {
            src: "/destination/singapour/map-tanjong-pagar.png",
            alt: "Shophouses de Duxton Hill à Tanjong Pagar, Singapour",
          },
          // TODO: verify coords
          coordinates: { lat: 1.2762, lng: 103.846 },
        },
        {
          title: "Katong",
          description:
            "Le quartier peranakan par excellence, façades pastel de Koon Seng Road, laksa de Katong et boutiques de perles cousues main sur Joo Chiat Road.",
          image: {
            src: "/destination/singapour/map-katong.png",
            alt: "Façades peranakan colorées de Koon Seng Road à Katong, Singapour",
          },
          // TODO: verify coords
          coordinates: { lat: 1.3049, lng: 103.9026 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage à Singapour",
      description:
        "Une ville-État dense et rapide à traverser, mais qui demande quelques repères avant le départ.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          title: "Dans ma valise",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Tenue légère, un lainage pour la climatisation, chaussures fermées pour les hawker centres",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: Carte d&apos;identité ou passeport valide 6 mois. Aucun
                visa requis pour un séjour touristique de moins de 90 jours.
              </p>
              <h4 className="font-medium">L&apos;essentiel :</h4>
              <p>
                Vêtements légers et respirants pour la rue, un lainage léger
                pour l&apos;intérieur (la climatisation est puissante partout).
                Chaussures fermées conseillées dans les hawker centres.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                &laquo; Nos clients reçoivent une checklist personnalisée selon
                les activités prévues, environ 3 semaines avant le départ. &raquo;
              </p>
            </div>
          ),
        },
        {
          title: "Santé",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Aucun vaccin obligatoire, eau du robinet potable, forte humidité toute l'année",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: Aucun vaccin obligatoire. Vaccinations universelles à
                jour recommandées. Eau du robinet potable.
              </p>
              <p>
                Forte humidité et chaleur constantes : hydratation régulière,
                vigilance en cas d&apos;activité physique en extérieur.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Trousse de pharmacie classique : antalgiques, anti-moustiques,
                protection solaire haute protection.
              </p>
            </div>
          ),
        },
        {
          title: "Meilleure période",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Toute l'année, avec une préférence pour février à avril",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: Climat équatorial stable toute l&apos;année, chaleur et
                humidité constantes. Février à avril : mois les plus secs.
              </p>
              <p>
                Novembre à janvier : mousson du nord-est, averses plus
                fréquentes en fin de journée, sans que cela n&apos;empêche le
                séjour.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Le Grand Prix de Singapour se tient chaque année en septembre.
                À réserver plusieurs mois à l&apos;avance pour l&apos;accès
                paddock. // TODO: verify exact dates
              </p>
            </div>
          ),
        },
        {
          title: "Budget & Vie locale",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Dollar de Singapour, carte bancaire acceptée partout, pourboire non obligatoire",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: Dollar de Singapour (SGD). Carte bancaire largement
                acceptée. Pourboire non obligatoire, souvent inclus (service
                charge de 10 %).
              </p>
              <p>
                Hawker centres pour manger vite et bien pour quelques dollars,
                tables étoilées pour les grandes occasions : les deux
                registres coexistent sans hiérarchie.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                &laquo; Nous organisons systématiquement tous les transferts de
                nos clients : chauffeur privé, bateau vers les îles du Sud,
                accès événementiel selon le calendrier. &raquo;
              </p>
            </div>
          ),
        },
        {
          title: "Visa et formalités",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription: "Aucun visa pour un séjour touristique court",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: Les citoyens français n&apos;ont pas besoin de visa pour
                un séjour touristique de moins de 90 jours. Une carte
                d&apos;arrivée électronique (SG Arrival Card) est à remplir
                en ligne avant le vol.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                &laquo; Nous vérifions systématiquement les formalités de
                chacun de nos clients avant le départ. &raquo;
              </p>
            </div>
          ),
        },
        {
          title: "Se déplacer en ville",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription: "MRT rapide, taxis nombreux, chauffeur privé sur demande",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le métro (MRT) couvre l&apos;essentiel de la ville et reste
                le moyen le plus rapide aux heures de pointe. Taxis et VTC
                abondants et bon marché.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Chauffeur privé à disposition sur l&apos;ensemble du séjour,
                utile pour les allers-retours vers Sentosa ou le circuit du
                Grand Prix.
              </p>
            </div>
          ),
        },
        {
          title: "Étiquette locale",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription: "Règles strictes en public, ville très ordonnée",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: Chewing-gum interdit à la vente, amendes pour détritus ou
                consommation dans le métro. Singapour reste l&apos;une des
                villes les plus sûres du monde, de jour comme de nuit.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Dans les hawker centres, il est admis de réserver une table
                en y laissant un paquet de mouchoirs.
              </p>
            </div>
          ),
        },
        {
          title: "Le Grand Prix de Singapour",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription: "Course de nuit unique, en septembre, réservation anticipée",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Première course de nuit de l&apos;histoire de la Formule 1
                depuis 2008. Le Marina Bay Street Circuit ferme une partie du
                centre-ville pendant plusieurs jours. // TODO: verify dates
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Accès paddock club à organiser plusieurs mois à l&apos;avance,
                combiné à un hébergement avec vue sur le circuit.
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
            "Trois jours à Singapour organisés en marge d'un voyage d'affaires, et pourtant rien n'a eu l'air improvisé. Le dîner chez Candlenut, l'accès paddock le soir de la course, tout s'est enchaîné sans un seul temps mort.",
          image: {
            src: "/destination/singapour/hero-1.png",
            alt: "Portrait de Nicolas", // TODO: verify
          },
          name: "Nicolas", // TODO: verify
          role: "Escale d'affaires prolongée, septembre 2025", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Nous cherchions autre chose qu'une simple escale entre deux vols. Notre travel designer nous a fait découvrir un autre visage de Singapour : le jardin d'orchidées à l'aube, encore désert, une nuit à Sentosa loin de l'agitation.",
          image: {
            src: "/destination/singapour/hero-2.png",
            alt: "Portrait de Claire", // TODO: verify
          },
          name: "Claire", // TODO: verify
          role: "Voyage en couple, mars 2025", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Ce qui m'a marqué, c'est la fluidité entre les mondes : Chinatown le matin, un club confidentiel le soir, jamais l'impression de changer d'interlocuteur ni de registre.",
          image: {
            src: "/destination/singapour/hero-3.png",
            alt: "Portrait de Marc", // TODO: verify
          },
          name: "Marc", // TODO: verify
          role: "Voyage solo, novembre 2025", // TODO: verify
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
          question: "Quelle est la meilleure période pour partir à Singapour ?",
          answer:
            "Toute l'année, avec une préférence pour février à avril, période généralement plus sèche. Le climat reste chaud, humide et ponctué d'averses quelle que soit la saison.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris ?",
          answer: "Environ 13h10 de vol direct depuis Paris-CDG vers Singapour.",
        },
        {
          question: "Faut-il un visa pour Singapour ?",
          answer:
            "Les ressortissants français n'ont pas besoin de visa pour un séjour touristique de courte durée. Le passeport doit être valable au moins 6 mois après la date prévue de départ de Singapour. La SG Arrival Card doit être remplie en ligne dans les 3 jours précédant l'arrivée.",
        },
        {
          question: "Que faire à Singapour en quatre jours ?",
          answer:
            "Un format compact suffit pour combiner Marina Bay et Gardens by the Bay, une matinée à Chinatown et Little India, une table peranakan étoilée, puis une journée à Sentosa ou une traversée vers les îles du Sud.",
        },
        {
          question: "Le voyage est-il adapté aux familles ?",
          answer:
            "Oui. Sentosa, les hawker centres et les jardins de la ville se prêtent bien à un séjour multi-âges. Nous adaptons le rythme et les hébergements en conséquence.",
        },
        {
          question: "Quand a lieu le Grand Prix de Singapour ?",
          answer:
            "Chaque année autour de septembre, sur le Marina Bay Street Circuit. Créé en 2008, le Grand Prix de Singapour est devenu la première course de nuit de l'histoire de la Formule 1, disputée sous les projecteurs au cœur de la ville.",
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
        "D'autres visages de l'Asie et de l'océan Indien, à combiner ou à explorer séparément.",
      cta: { label: "Voir toutes les destinations", href: "/destinations" },
      slugs: ["thailande", "vietnam", "maldives"],
    },
  ],
};
