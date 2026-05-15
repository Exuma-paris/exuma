import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "tanzanie",
  name: "Tanzanie",
  country: "Tanzanie",
  continentSlug: "afrique",
  heroImage: {
    src: "/destination/tanzanie/hero-1.png",
    alt: "Plaines du Serengeti au lever du soleil, troupeaux de gnous à l'horizon, Tanzanie",
  },
  blurb: "Serengeti, Ngorongoro, Mahale, Nyerere",
  keywords: [
    "tanzanie",
    "serengeti",
    "ngorongoro",
    "mahale",
    "nyerere",
    "safari",
    "migration",
    "kilimanjaro",
    "zanzibar",
  ],
  metaTitle: "Tanzanie — Voyage sur mesure",
  metaDescription:
    "Voyage en Tanzanie sur mesure : safari au Serengeti, trekking chimpanzés à Mahale, nuit au Nyerere, Ngorongoro. Itinéraire écrit par votre travel designer Exuma.",
  sections: [
    // 1. hero
    {
      type: "hero",
      eyebrow: "Voyage de luxe en Tanzanie",
      heading:
        "Tanzanie. Serengeti, Mahale, Nyerere : trois terrains, trois voyages.",
      description:
        "Serengeti, Ngorongoro, Mahale, Nyerere : chaque terrain tient une promesse distincte. Un voyage en Tanzanie se construit autour de la question de ce qu'on cherche, pas de ce qu'on coche.",
      images: [
        {
          src: "/destination/tanzanie/hero-1.png",
          alt: "Plaines du Serengeti au lever du soleil, troupeaux de gnous à l'horizon, Tanzanie",
        },
        {
          src: "/destination/tanzanie/hero-2.png",
          alt: "Vue plongeante sur la caldeira du Ngorongoro depuis le rebord, Tanzanie",
        },
        {
          src: "/destination/tanzanie/hero-3.png",
          alt: "Chimpanzé dans la forêt du parc national de Mahale, bords du lac Tanganyika",
        },
      ],
    },

    // 2. specialistSpotlight
    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir en Tanzanie ?",
      heading: "Stéphane, spécialiste Afrique, vous partage son approche",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "stephane", // TODO: verify collaborateurSlug — à réaffecter quand taina rejoindra l'équipe
        // TODO: verify quote attribution
        quote:
          "La plupart des gens arrivent en Tanzanie avec la migration en tête. C'est légitime. Mais les voyages qui marquent sont ceux où on a aussi prévu Mahale, ou une nuit au Nyerere. Ce qu'on construit, c'est la logique entre les terrains, pas une liste de réserves.",
        role: "Travel Designer · Afrique", // TODO: verify
      },
      features: defaultSpotlightFeatures,
    },

    // 3. textColumns (intro)
    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte de la Tanzanie",
      heading: "Un pays qui change selon ce qu'on cherche à voir",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      columns: [
        "Un voyage en Tanzanie se construit autour d'une logique d'écosystèmes. Le Serengeti pour les grandes plaines et la migration. Le Ngorongoro pour la densité : dans la caldeira, les cinq grands sont présents toute l'année autour des points d'eau permanents. Tarangire en saison sèche, quand les éléphants convergent par centaines sous les baobabs centenaires.",
        "Le Mahale est accessible uniquement en bateau ou en avion léger depuis les rives du lac Tanganyika. 800 chimpanzés, une forêt dense, aucune route. Le Nyerere, l'ancienne réserve du Selous rebaptisée en 2022, est l'une des zones protégées les plus étendues du continent. On y fait des safaris en bateau sur la rivière Rufiji, pas en véhicule.",
        "Un itinéraire bien construit en Tanzanie ne ressemble pas à un autre selon ce qu'on y cherche. Chaque terrain a sa raison, et cette raison change la qualité de ce qu'on ressent en arrivant.\n\n« On peut passer deux semaines en Tanzanie sans jamais voir les mêmes paysages deux fois. Le travail consiste à choisir lesquels, dans quel ordre. »",
      ],
    },

    // 4. fullImage
    {
      type: "fullImage",
      image: {
        src: "/destination/tanzanie/full-image.png",
        alt: "Plaines du Serengeti à l'heure dorée, girafe en silhouette contre le ciel, Tanzanie",
      },
      height: 600,
    },

    // 5. textImagesSplit
    {
      type: "textImagesSplit",
      eyebrow: "Ngorongoro, Tanzanie",
      heading: "La descente dans le cratère du monde",
      theme: "light",
      paragraphs: [
        "La piste qui descend dans la caldeira longe d'abord la paroi de lave noire, puis les forêts d'acacia sur le rebord intérieur, avant de déboucher sur une plaine circulaire de 264 kilomètres carrés. C'est la plus grande caldeira volcanique intacte au monde. Au fond, les points d'eau permanents maintiennent une concentration de faune que les réserves de plaine ne produisent qu'en saison sèche.",
        "En deux heures de circuit dans la caldeira, on peut croiser lions, éléphants, rhinocéros noirs (l'une des rares populations stables d'Afrique orientale), flamants roses sur le lac Magadi et hyènes tachetées à l'affût. La logique n'est pas la même qu'au Serengeti : ici, les animaux ne migrent pas. Ils restent.",
        "Ce que peu d'agences anticipent : descendre avant huit heures du matin, depuis un lodge positionné sur le rebord, avant que les autres convois de véhicules ne se forment au poste d'entrée. L'&Beyond Ngorongoro Crater Lodge tient à vingt minutes du bord. C'est une information logistique qui change la qualité du séjour entier.",
      ],
      images: [
        {
          src: "/destination/tanzanie/split-1.png",
          alt: "Vue plongeante sur la plaine de la caldeira depuis le rebord du Ngorongoro, Tanzanie",
        },
        {
          src: "/destination/tanzanie/split-2.png",
          alt: "Lions au bord d'un point d'eau permanent dans la caldeira du Ngorongoro, Tanzanie",
        },
      ],
    },

    // 6. entityList — régions de Tanzanie
    {
      type: "entityList",
      kind: "destination",
      background: "bg-background-soft",
      eyebrow: "Inspirations",
      heading: "L'île, la réserve, la ville. Trois Tanzanie qui ne se croisent pas.",
      description:
        "Zanzibar, Ruaha, Dar es Salaam : chacune tient une promesse que les deux autres ne font pas.",
      cta: { label: "Voir toutes les destinations", href: "/destinations" },
      slugs: ["zanzibar", "ruaha", "dar-es-salaam"],
    },

    // 7. imageDuoWithText — Notre coup de cœur : nuit sous les étoiles au Nyerere
    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/tanzanie/xp-camp-etoiles-nyerere.png",
          alt: "Camp de brousse sous ciel étoilé au bord de la rivière Rufiji, parc national de Nyerere",
        },
        right: {
          src: "/destination/tanzanie/xp-rufiji-nyerere.png",
          alt: "Safari en bateau sur la rivière Rufiji au lever du jour, parc national de Nyerere, Tanzanie",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "La nuit à Nyerere, quand la rivière parle",
        columns: [
          "Le parc national de Nyerere, rebaptisé en 2022 depuis la réserve du Selous, est l'une des zones protégées les plus étendues d'Afrique. Pas de foules, pas de convois : la réserve compte moins de visiteurs que le Serengeti en une journée. La rivière Rufiji la traverse sur 400 kilomètres, et les safaris se font en bateau autant qu'en véhicule. La nuit, sous une tente de brousse ouverte sur la rivière, les hippopotames sortent à vingt mètres. Le silence entre deux cris n'a pas d'équivalent.",
          "L'expérience tient trois nuits : le premier safari en bateau sur la Rufiji à l'aube, une sortie nocturne à pied avec un ranger armé au crépuscule, et une nuit de sleep-out sous les étoiles en dehors du camp principal. Pas de filet, pas de murs : une structure légère au sol, le ciel au-dessus. C'est la version de la Tanzanie que la plupart des brochures ne proposent pas.",
        ],
      },
    },

    // 7. entityList (experiences)
    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Tanzanie",
      heading: "Nos coups de cœur en Tanzanie",
      description:
        "Trois accès construits autour de ce que la Tanzanie a de plus singulier. Pas des visites guidées : des terrains où quelqu'un qui connaît ouvre une porte.",
      cta: { label: "Voir l'ensemble de nos expériences", href: "/experiences" },
      slugs: [
        "safari-montgolfiere-serengeti",
        "journee-hadzabe",
        "trekking-chimpanzes-mahale",
      ],
    },

    // 8. entityList (accommodations)
    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements en Tanzanie",
      heading: "Où séjourner en Tanzanie",
      description:
        "Trois adresses choisies pour ce qu'elles sont, pas pour ce qu'elles affichent. Le niveau se lit dans ce qu'on voit depuis la chambre.",
      cta: { label: "Voir tous les hébergements", href: "/hebergements" },
      slugs: [
        "singita-serengeti-house",
        "tarangire-treetops-elewana",
        "beyond-ngorongoro-crater-lodge",
      ],
    },

    // 9. infoGrid
    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Avant le départ",
      heading: "Préparer votre voyage en Tanzanie",
      description:
        "Ce qu'il faut savoir avant de partir. Et ce que nous réglons pour vous, avant que vous posiez le pied sur le tarmac.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          iconName: "plane",
          title: "Vols",
          description:
            "12 à 14 heures depuis Paris avec escale. Nous sélectionnons les connexions et les aéroports d'arrivée selon l'itinéraire retenu : Dar es Salaam ou Kilimanjaro. Les billets sont inclus dans la préparation du dossier.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "+2h en hiver, +1h en été. La Tanzanie est à UTC+3, sans changement d'heure. Le décalage est faible et le corps s'y adapte rapidement.",
        },
        {
          iconName: "euro",
          title: "Monnaie et pourboires",
          description:
            "Les lodges facturent en dollars américains. Nous vous remettons avant le départ un guide des pourboires recommandés (guides, chauffeurs, personnel de lodge) pour que rien ne soit à improviser sur place.",
        },
        {
          iconName: "fileText",
          title: "Formalités",
          description:
            "Visa obligatoire (e-visa en ligne, environ 50 USD) et passeport valide 6 mois minimum. Nous constituons le dossier, soumettons les demandes et suivons les validations. Vous recevez vos documents prêts à l'emploi avant le départ.",
        },
        {
          iconName: "syringe",
          title: "Vaccins et santé",
          description:
            "Fièvre jaune, antipaludéens, hépatite A : nous vous rappelons les obligations et délais dès l'ouverture du dossier, et vous orientons vers un centre de vaccinations internationales si nécessaire. Rien à gérer seul.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "Juin à octobre pour la saison sèche, juillet-août pour la traversée de la Mara. Nous calons l'itinéraire sur la bonne fenêtre selon vos dates et les conditions réelles du terrain, pas sur un calendrier générique.",
        },
        {
          iconName: "languages",
          title: "Langues",
          description:
            "Swahili (langue nationale) et anglais (officiel). Le personnel des lodges parle anglais couramment. Quelques mots de swahili (jambo, asante) sont toujours bien reçus.",
        },
      ],
    },

    // 10. bento
    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Un seul interlocuteur sur chaque dossier Tanzanie, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/tanzanie/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: (
            [
              "Carte d'itinéraire personnalisé en Tanzanie, du Serengeti au Mahale",
              "Adresses confidentielles en Tanzanie, lodges privés et guides locaux",
              "Lodges hors réseaux en Tanzanie, sélection Exuma",
              "Conciergerie Exuma, transferts privés et assistance 24h en Tanzanie",
              "Expériences immersives en Tanzanie, montgolfière et trekking chimpanzés",
            ] as string[]
          )[i],
        },
      })),
    },

    // 11. placesMap
    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Que voir en Tanzanie",
      heading: "Six terrains, six registres",
      description:
        "Du Serengeti à Mahale, du Ngorongoro au Nyerere : les étapes autour desquelles s'organisent la plupart de nos itinéraires, et deux adresses que peu de voyageurs franchissent.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      initialZoom: 6,
      places: [
        {
          title: "Serengeti, la plaine et la migration",
          description:
            "1,5 million de gnous, 250 000 zèbres en circuit permanent. La traversée de la rivière Mara en juillet est le moment le plus spectaculaire de l'Afrique orientale.",
          image: {
            src: "/destination/tanzanie/map-serengeti.png",
            alt: "Troupeaux de gnous sur les plaines du Serengeti, Tanzanie",
          },
          coordinates: { lat: -2.3333, lng: 34.8333 }, // TODO: verify coords
        },
        {
          title: "Ngorongoro, le cratère permanent",
          description:
            "264 kilomètres carrés de caldeira intacte. Les cinq grands sont présents toute l'année. L'une des rares populations stables de rhinocéros noirs d'Afrique orientale.",
          image: {
            src: "/destination/tanzanie/map-ngorongoro.png",
            alt: "Vue aérienne de la caldeira du Ngorongoro et de la plaine en contrebas, Tanzanie",
          },
          coordinates: { lat: -3.1667, lng: 35.5833 }, // TODO: verify coords
        },
        {
          title: "Mahale, les chimpanzés du Tanganyika",
          description:
            "Accessible uniquement en bateau. 800 chimpanzés dans une forêt dense sans route. Le lac Tanganyika est le deuxième lac le plus profond du monde.",
          image: {
            src: "/destination/tanzanie/map-mahale.png",
            alt: "Forêt du parc national de Mahale au bord du lac Tanganyika, Tanzanie",
          },
          coordinates: { lat: -6.1667, lng: 29.75 }, // TODO: verify coords
        },
        {
          title: "Tarangire, les baobabs et les éléphants",
          description:
            "En saison sèche, la plus forte densité d'éléphants d'Afrique orientale. Des baobabs centenaires sur les rives de la rivière Tarangire.",
          image: {
            src: "/destination/tanzanie/map-tarangire.png",
            alt: "Troupeau d'éléphants sous les baobabs au parc national de Tarangire, Tanzanie",
          },
          coordinates: { lat: -3.8333, lng: 36.1667 }, // TODO: verify coords
        },
        {
          title: "Nyerere, la rivière Rufiji",
          description:
            "L'ancienne réserve du Selous. L'une des zones protégées les plus étendues d'Afrique. Safaris en bateau sur la Rufiji, nuits en camp de brousse ouvert.",
          image: {
            src: "/destination/tanzanie/map-nyerere.png",
            alt: "Safari en bateau sur la rivière Rufiji, parc national de Nyerere, Tanzanie",
          },
          coordinates: { lat: -8.5, lng: 37.5 }, // TODO: verify coords
        },
        {
          title: "Zanzibar, Stone Town et les épices",
          description:
            "L'île des épices à 35 minutes de vol de Dar es Salaam. Stone Town classée UNESCO, marchés d'épices, côte est peu fréquentée.",
          image: {
            src: "/destination/tanzanie/map-zanzibar.png",
            alt: "Ruelle de Stone Town, Zanzibar, Tanzanie, classée UNESCO",
          },
          coordinates: { lat: -6.1659, lng: 39.2026 }, // TODO: verify coords
        },
      ],
    },

    // 12. tips
    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Ce que les guides ne disent pas",
      heading: "Les conseils de nos experts pour votre voyage en Tanzanie",
      description:
        "Cinq observations de terrain, pour décider d'une étape, éviter une erreur de préparation ou comprendre ce que la logistique change à l'expérience.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          title: "Le paludisme : ne pas improviser",
          cardEyebrow: "Santé",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Les antipaludéens sont obligatoires en Tanzanie. La prescription et la prise doivent commencer avant le départ.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La Tanzanie est une zone de transmission du paludisme toute
                l'année, y compris dans les réserves. Aucune exception pour
                les zones d'altitude comme Ngorongoro. La prophylaxie se choisit
                avec un médecin du voyageur selon la durée du séjour, les
                pathologies préexistantes et la tolérance aux molécules
                disponibles (Malarone, Doxycycline, Lariam).
              </p>
              <p>
                Certains antipaludéens commencent une à deux semaines avant
                le départ. Ne pas attendre le dernier moment.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous rappelons les vaccinations et prophylaxies à chaque
                ouverture de dossier et orientons vers un centre de vaccinations
                internationales si nécessaire.
              </p>
            </div>
          ),
        },
        {
          title: "Les sacs plastiques, interdits",
          cardEyebrow: "Pratique",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "La Tanzanie a interdit les sacs en plastique en 2019. L'information ne figure pas dans la plupart des guides.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Depuis juin 2019, l'importation, la distribution et l'usage des
                sacs en plastique sont interdits en Tanzanie. La règle est
                appliquée aux aéroports : les sacs plastiques sont confisqués
                à l'arrivée. Il faut prévoir des sacs en tissu ou en papier
                pour les bagages à main et les courses.
              </p>
              <p>
                Les bouteilles en plastique restent autorisées. Les lodges
                haut de gamme proposent en général des gourdes et des stations
                de filtration.
              </p>
            </div>
          ),
        },
        {
          title: "La grande migration : une question de position, pas de date",
          cardEyebrow: "Safari",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "La traversée de la Mara a lieu en juillet-août, mais l'endroit exact change chaque année. Se positionner dépend d'une information de terrain.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La migration des gnous est permanente : le troupeau circule
                en boucle toute l'année entre le Serengeti et le Masai Mara
                kenyan. La traversée de la rivière Mara, le moment le plus
                spectaculaire, a lieu approximativement entre juillet et
                septembre. Mais la rivière peut se traverser à plusieurs
                endroits différents, et les troupeaux attendant parfois plusieurs
                jours avant de plonger.
              </p>
              <p>
                Ce qui compte, ce n'est pas la date du vol : c'est la position
                du camp par rapport aux zones de traversée, et un guide qui
                connaît les comportements du troupeau cette semaine-là.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous travaillons avec des guides qui suivent les troupeaux en
                temps réel et ajustent les sorties selon les conditions de la
                semaine, pas selon le programme établi trois mois avant.
              </p>
            </div>
          ),
        },
        {
          title: "Voler entre les réserves, pas rouler",
          cardEyebrow: "Logistique",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Les distances entre réserves sont grandes. L'avion léger change la structure du voyage.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Entre le Serengeti et Mahale, il y a plus de 700 kilomètres.
                Entre le Ngorongoro et le Nyerere, environ 500. Les pistes
                tanzaniennes ne permettent pas de couvrir ces distances en une
                journée sans sacrifier une demi-journée de safari.
              </p>
              <p>
                Les vols intérieurs en avion léger (Cessna Caravan, Twin Otter)
                relient les principales réserves depuis des airstrips situées
                dans les parcs. Un vol Serengeti-Mahale dure environ 90 minutes.
                Sur un circuit de dix jours, l'avion léger peut libérer deux
                jours entiers de terrain.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous construisons la logistique aérienne en même temps que les
                réservations de lodges. Les airstrips privées liées aux lodges
                haut de gamme permettent des horaires plus flexibles que les
                liaisons commerciales.
              </p>
            </div>
          ),
        },
        {
          title: "La saison des petites pluies, novembre-décembre",
          cardEyebrow: "Calendrier",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Moins de visiteurs, paysages verts, naissances dans le Serengeti. Une fenêtre que peu d'agences proposent.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les petites pluies (octobre-novembre) transforment les plaines
                du Serengeti en savane verte. C'est la période des naissances
                des gnous et des zèbres, avec des prédateurs en activité
                intense. Les prix des lodges baissent de 20 à 40 %, et la
                fréquentation chute.
              </p>
              <p>
                Les grandes pluies (mars-mai) sont moins recommandées : les
                pistes peuvent être impraticables. Mais novembre reste praticable
                dans la majorité des réserves, avec des averses brèves
                l'après-midi.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous proposons cette fenêtre aux clients dont les dates
                correspondent et qui veulent éviter la haute saison. Les
                réservations de lodges sont négociées en conséquence, avec les
                tarifs basse saison intégrés dès la construction du devis.
              </p>
            </div>
          ),
        },
      ],
    },

    // 13. testimonials
    {
      type: "testimonials",
      eyebrow: "Témoignages",
      heading: "Ils ont vécu l'expérience Exuma",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      testimonials: [
        {
          // TODO: replace with real testimonial
          quote:
            "On avait demandé quelque chose de précis : pas de camp avec trente personnes autour. On a eu la Singita Serengeti House en exclusivité, nos propres guides, et la migration au bout du chemin.",
          image: {
            src: "/destination/tanzanie/hero-1.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Voyage en famille, août 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "La nuit au Nyerere, à ciel ouvert, les hippopotames dans la rivière à vingt mètres. Je n'avais pas compris ce que ça voulait dire avant d'être là.",
          image: {
            src: "/destination/tanzanie/hero-2.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Séjour en couple, octobre 2024", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Trois heures de marche dans la forêt de Mahale avant de trouver le groupe. Et puis, à dix mètres, les chimpanzés. Le reste du voyage avait déjà disparu.",
          image: {
            src: "/destination/tanzanie/hero-3.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Voyage solo, juillet 2025", // TODO: replace with real testimonial
        },
      ],
    },

    // 14. faq
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
          question: "Quelle est la meilleure période pour un safari en Tanzanie ?",
          answer:
            "La saison sèche de juin à octobre est la période la plus favorable : la végétation est basse, la faune se concentre autour des points d'eau et les pistes sont praticables. La traversée de la rivière Mara par la migration a lieu approximativement en juillet-août. Novembre offre une bonne alternative avec moins de visiteurs et des paysages verts.",
        },
        {
          question: "Faut-il un visa pour aller en Tanzanie ?",
          answer:
            "Les ressortissants français doivent obtenir un visa pour entrer en Tanzanie. L'e-visa est disponible en ligne avant le départ sur le portail officiel (environ 50 USD). Il est également délivré à l'arrivée à Dar es Salaam et Kilimanjaro, mais les délais peuvent être longs. Passeport valide avec au moins six mois de validité obligatoire.", // TODO: verify visa fees
        },
        {
          question: "Combien de temps dure le vol Paris-Tanzanie ?",
          answer:
            "Il n'existe pas de vol direct depuis Paris. Les connexions les plus courantes passent par Doha (Qatar Airways, environ 13h de trajet total), Nairobi (Kenya Airways ou Air France, 13-14h) ou Addis-Abeba (Ethiopian Airlines, 12-13h). La destination d'arrivée dépend de l'itinéraire : Dar es Salaam ou Kilimanjaro International.",
        },
        {
          question: "Quels vaccins faut-il pour aller en Tanzanie ?",
          answer:
            "La fièvre jaune est obligatoire si vous transitez par un pays à risque (et recommandée dans tous les cas). Les antipaludéens sont obligatoires : consulter un médecin du voyageur avant le départ pour choisir la molécule adaptée. Vaccins recommandés : hépatite A, typhoïde, diphtérie-tétanos-poliomyélite. Consulter un centre de vaccinations internationales six à huit semaines avant le départ.",
        },
        {
          question: "Quel budget prévoir pour un safari haut de gamme en Tanzanie ?",
          answer:
            "Un voyage en lodges exclusifs avec safaris privés et vols intérieurs représente entre 8 000 et 15 000 € par personne pour dix à douze jours, transport international inclus. La Singita Serengeti House en exclusivité représente à elle seule plusieurs milliers d'euros par nuit. Les tarifs varient selon la saison et les réserves choisies.", // TODO: verify price ranges
        },
        {
          question: "Tanzanie ou Kenya pour la grande migration ?",
          answer:
            "Les deux pays font partie du même circuit migratoire. La traversée de la rivière Mara se produit des deux côtés de la frontière. Le Kenya (Masai Mara) est plus fréquenté et plus accessible. La Tanzanie (nord du Serengeti) offre généralement moins de véhicules autour des mêmes scènes. Pour les autres terrains de la migration (naissances dans le Serengeti sud en janvier-mars), la Tanzanie est la seule option.",
        },
      ],
    },
  ],
};
