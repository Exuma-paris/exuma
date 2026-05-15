import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "japon",
  name: "Japon",
  country: "Japon",
  continentSlug: "asie",
  blurb: "Kyoto, Kōyasan, la péninsule de Noto",
  keywords: [
    "japon",
    "kyoto",
    "koyasan",
    "noto",
    "wajima",
    "gifu",
    "kanazawa",
    "ryokan",
  ],
  metaTitle: "Japon — Voyage sur mesure",
  metaDescription:
    "Voyage au Japon sur mesure : Kyoto, Kōyasan, péninsule de Noto, ryokan hors réseaux. Itinéraire écrit par votre travel designer Exuma, conciergerie 24/7.",
  sections: [
    // 1. hero
    {
      type: "hero",
      eyebrow: "Voyage de luxe au Japon",
      heading: "Le Japon, un pays où chaque geste a traversé des siècles.",
      description:
        "Quatre grandes îles, 47 préfectures. Kyoto, la péninsule de Noto, Kōyasan, Gifu : chaque étape tient une logique propre, et cette logique change ce qu'on emporte.",
      images: [
        {
          src: "/destination/japon/hero-1.png",
          alt: "Allée de torii au lever du jour au temple Fushimi Inari, Kyoto, Japon",
        },
        {
          src: "/destination/japon/hero-2.png",
          alt: "Forêt de cryptomères millénaires sur le plateau de Kōyasan, préfecture de Wakayama",
        },
        {
          src: "/destination/japon/hero-3.png",
          alt: "Barque de pêche au cormoran sur la rivière Nagara au crépuscule, Gifu",
        },
      ],
    },

    // 2. specialistSpotlight
    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir au Japon ?",
      heading: "Stéphane, spécialiste du Japon, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "stephane", // TODO: verify collaborateurSlug — à réaffecter si un spécialiste Japon rejoint l'équipe
        // TODO: verify quote attribution
        quote:
          "Au Japon, la difficulté n'est pas de trouver des lieux. C'est de comprendre dans quel ordre les traverser, et avec qui. Un ryokan sur la péninsule de Noto n'a pas le même sens avant ou après Kyoto. Ce que nous construisons, c'est cette logique-là.",
        role: "Travel Designer · Japon", // TODO: verify
      },
      features: defaultSpotlightFeatures,
    },

    // 3. textColumns (intro)
    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte du Japon",
      heading: "Un pays qui change selon l'ordre dans lequel on le traverse",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      columns: [
        "Un voyage au Japon se construit autour de la question du rythme. Trop vite, et le pays devient un défilé d'images. La semaine à Kyoto pour les temples et les marchés du matin. Le détour par Kanazawa avant la péninsule de Noto. La nuit à Kōyasan pour comprendre ce que le silence signifie ici.",
        "Le Japon n'a pas une saison. Il en a quatre, et chacune change l'objet du voyage : les cerisiers d'avril dans la vallée de Yoshino, les feux des festivals d'été à Gifu, les érables de novembre dans les gorges d'Arashiyama, les neiges de Kanazawa sur les toits des samouraïs.",
        "Un itinéraire bien écrit ne ressemble pas à un autre selon le mois. Chaque étape a une raison, et cette raison change la qualité de ce qu'on ressent en arrivant.\n\n« Ce n'est pas un pays où l'on arrive avec une liste. C'est un pays où l'on revient avec les bonnes questions. »",
      ],
    },

    // 4. fullImage
    {
      type: "fullImage",
      image: {
        src: "/destination/japon/full-image.png",
        alt: "Vue sur les toits de Kyoto depuis les hauteurs du quartier de Higashiyama, Japon",
      },
      height: 600,
    },

    // 5. textImagesSplit
    {
      type: "textImagesSplit",
      eyebrow: "Péninsule de Noto, Ishikawa",
      heading: "Le bout de la route, à l'ouest de l'archipel",
      theme: "light",
      paragraphs: [
        "La route qui monte vers le cap Noroshi longe d'abord des rizières en terrasses, puis des villages de pêcheurs où les volets sont tirés depuis cinq heures du matin. La péninsule de Noto dépasse vers la mer du Japon depuis la préfecture d'Ishikawa, et la plupart des voyageurs qui visitent Kanazawa ne la franchissent pas. C'est l'indication.",
        "À Wajima, les artisans de laque travaillent depuis le Xe siècle avec les mêmes gestes et les mêmes outils. Il y a 124 couches de laque sur un bol de qualité. La première est appliquée sur le bois vert. La dernière peut demander trois mois. Ce n'est pas un chiffre touristique. C'est une contrainte de fabrication, et elle explique pourquoi une pièce vaut ce qu'elle vaut.",
      ],
      images: [
        {
          src: "/destination/japon/split-1.png",
          alt: "Artisan appliquant la laque wajima-nuri sur un bol dans son atelier, péninsule de Noto",
        },
        {
          src: "/destination/japon/split-2.png",
          alt: "Rizières en terrasses sur la côte de la péninsule de Noto, mer du Japon",
        },
      ],
    },

    // 6. entityList — destinations similaires (régions du Japon)
    // TODO: Activer quand les pages régions seront créées
    // Régions prévues : kyoto, tohoku, hokkaido
    {
      type: "entityList",
      kind: "destination",
      background: "bg-background-soft",
      eyebrow: "Inspirations",
      heading: "Kyoto, Tōhoku, Hokkaidō : trois archipels dans un seul pays",
      description:
        "Chaque région tient un registre que les autres n'ont pas. Aucune ne ressemble à ce qu'on imagine avant d'y être.",
      cta: { label: "Voir toutes les destinations", href: "/destinations" },
      slugs: ["kyoto", "tohoku", "hokkaido"],
    },

    // 7. imageDuoWithText — Notre coup de cœur : artisanat samouraï à Seki
    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/japon/xp-seki-forgeron.png",
          alt: "Maître forgeron à l'atelier de Seki martelant une lame sur l'enclume, préfecture de Gifu",
        },
        right: {
          src: "/destination/japon/xp-seki-iaido.png",
          alt: "Initiation à l'iaïdo avec un maître, dojo de Seki, préfecture de Gifu",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Quatre jours dans l'univers du sabre",
        columns: [
          "Seki forge des lames depuis le IXe siècle. La ville a équipé les samouraïs des seigneurs de guerre médiévaux, puis les soldats de la Seconde Guerre mondiale. Aujourd'hui, une vingtaine d'ateliers travaillent encore selon les méthodes traditionnelles, avec les mêmes aciers tamahagane et les mêmes cycles de chauffe et de trempe. La visite d'un atelier avec un forgeron en activité (pas une démonstration : un matin de travail) est l'une des rares expériences de ce type accessibles à un étranger.",
          "L'itinéraire tient quatre jours : le château d'Inuyama en ouverture, une matinée dans un atelier de forge, une séance d'initiation à l'iaïdo conduite par un maître de l'école Musōshinden, et une randonnée dans les montagnes de Gifu avant de redescendre vers la plaine par la rivière. Nuit en ryokan à chaque étape. Ce n'est pas un circuit thématique. C'est une lecture de la préfecture de Gifu par l'outil qui l'a construite.",
        ],
      },
    },

    // 8. entityList (experiences)
    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités au Japon",
      heading: "Nos coups de cœur au Japon",
      description:
        "Trois accès inscrits dans des pratiques vivantes. Pas des visites guidées : des moments où quelqu'un qui connaît ouvre une porte.",
      cta: { label: "Voir l'ensemble de nos expériences", href: "/experiences" },
      slugs: ["ukai-gifu", "dashi-chef-harada", "ryotei-kaga-kaiseki"],
    },

    // 8. entityList (accommodations)
    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements au Japon",
      heading: "Où séjourner au Japon",
      description:
        "Trois ryokan choisis pour ce qu'ils préservent, pas pour ce qu'ils affichent. Dans chacun, le niveau se lit dans la cuisine du soir et le silence du matin.",
      cta: { label: "Voir tous les hébergements", href: "/hebergements" },
      slugs: ["beniya-mukayu", "patina-osaka", "aman-kyoto"],
    },

    // 9. infoGrid
    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Avant le départ",
      heading: "Préparer votre voyage au Japon",
      description:
        "Monnaie, formalités, vol, décalage, saisons et langues : l'essentiel pour arriver prêt.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "TODO: Environ 12h depuis Paris en vol direct (Air France CDG–HND). Connexions via Helsinki, Doha ou Singapour pour Tokyo Narita ou Osaka Kansai.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "+8h en hiver, +7h en été. Le Japon ne pratique pas le changement d'heure. Le décalage favorise les lève-tôt.",
        },
        {
          iconName: "euro",
          title: "Monnaie",
          description:
            "TODO: Yen japonais (JPY). 1 000 JPY ≈ 6,10 € (taux 2024). Le Japon reste très majoritairement en espèces, y compris dans les restaurants gastronomiques.",
        },
        {
          iconName: "fileText",
          title: "Formalités",
          description:
            "Aucun visa requis pour les ressortissants français (séjour touristique de moins de 90 jours). Passeport valide obligatoire.",
        },
        {
          iconName: "syringe",
          title: "Vaccins",
          description:
            "Aucun vaccin obligatoire. Vaccins recommandés à jour : hépatite A, diphtérie-tétanos-poliomyélite. Pas de risque palustre.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "Avril–mai (cerisiers, hanami) et octobre–novembre (érables, momiji). L'été est chaud et humide. Éviter la Golden Week fin avril.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "Japonais. L'anglais est peu répandu hors des grandes villes et des hôtels internationaux. Les panneaux de transport sont bilingues.",
        },
      ],
    },

    // 10. bento
    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Japon. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/japon/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: (
            [
              "Carte d'itinéraire personnalisé au Japon, de Kyoto à la péninsule de Noto",
              "Adresses confidentielles au Japon, restaurants et ateliers artisanaux",
              "Ryokan hors réseaux au Japon, sélection Exuma",
              "Conciergerie Exuma, transferts privés et assistance 24h au Japon",
              "Expériences immersives au Japon, pêche ukai et laque de Wajima",
            ] as string[]
          )[i],
        },
      })),
    },

    // 11. placesMap
    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Que voir au Japon",
      heading: "Six lieux, six registres",
      description:
        "De Kyoto à la péninsule de Noto, de Kōyasan à la rivière Nagara : les étapes autour desquelles s'organisent la plupart de nos itinéraires.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      initialZoom: 6,
      places: [
        {
          title: "Kyoto, la ville qui garde la forme",
          description:
            "Gion avant neuf heures, quand les ruelles sont à peu près vides. Arashiyama en novembre pour les érables dans les gorges de l'Ōi. L'Aman Kyoto dans le jardin du mont Daimonji.",
          image: {
            src: "/destination/japon/map-kyoto.png",
            alt: "Temple Kinkaku-ji reflété dans son étang, Kyoto, Japon",
          },
          coordinates: { lat: 35.0116, lng: 135.7681 }, // TODO: verify coords
        },
        {
          title: "Kōyasan, le plateau des 117 temples",
          description:
            "À 800 mètres d'altitude, fondé en 816. Le cimetière d'Okunoin la nuit, les prières du matin dans le brouillard. Le dernier téléphérique redescend à 17h30.",
          image: {
            src: "/destination/japon/map-koyasan.png",
            alt: "Allée de lanternes dans le cimetière d'Okunoin à Kōyasan, Wakayama",
          },
          coordinates: { lat: 34.2128, lng: 135.5855 }, // TODO: verify coords
        },
        {
          title: "Gifu, la rivière Nagara",
          description:
            "La pêche au cormoran (ukai) se pratique ici depuis 1 300 ans, sous licence de la Maison impériale. Cinq bateliers licenciés travaillent encore la rivière à la torche.",
          image: {
            src: "/destination/japon/map-gifu.png",
            alt: "Batelier et ses cormorans sur la rivière Nagara à Gifu, lumière des torches dans la nuit",
          },
          coordinates: { lat: 35.4232, lng: 136.7607 }, // TODO: verify coords
        },
        {
          title: "Wajima, la laque du bout de la péninsule",
          description:
            "Sur la péninsule de Noto, les ateliers de laque wajima-nuri travaillent depuis le Xe siècle. 124 couches pour un bol, la dernière prend trois mois.",
          image: {
            src: "/destination/japon/map-wajima.png",
            alt: "Bol de laque wajima-nuri rouge sur la table d'un atelier, Wajima, Noto",
          },
          coordinates: { lat: 37.3903, lng: 136.8997 }, // TODO: verify coords
        },
        {
          title: "Kaga Onsen, les sources de l'Ishikawa",
          description:
            "Au sud de Kanazawa, quatre sources thermales dans les forêts de la préfecture d'Ishikawa. Le Beniya Mukayu y travaille la cuisine kaiseki depuis les produits alentour.",
          image: {
            src: "/destination/japon/map-kaga.png",
            alt: "Bain thermal en plein air (rotenburo) dans les forêts de Kaga Onsen, Ishikawa",
          },
          coordinates: { lat: 36.3022, lng: 136.3219 }, // TODO: verify coords
        },
        {
          title: "Shuzenji, la vallée de la rivière Katsura",
          description:
            "Dans la péninsule d'Izu, à deux heures de Tokyo. L'Asaba Ryokan est installé au bord de la rivière Katsura depuis le XVIe siècle. Scène de nō suspendue au-dessus de l'eau.",
          image: {
            src: "/destination/japon/map-shuzenji.png",
            alt: "Rivière Katsura et végétation de Shuzenji en automne, péninsule d'Izu",
          },
          coordinates: { lat: 34.9707, lng: 138.9316 }, // TODO: verify coords
        },
      ],
    },

    // 12. tips
    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Ce que les guides ne disent pas",
      heading: "Les conseils de nos experts pour votre voyage au Japon",
      description:
        "Huit observations de terrain, pour décider d'une étape, éviter une erreur de débutant ou comprendre comment le pays fonctionne.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          title: "Le JR Pass, avant le départ",
          cardEyebrow: "Transport",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Le pass ferroviaire national ne s'achète pas au Japon. Il faut l'anticiper en France.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le Japan Rail Pass couvre la quasi-totalité des trains longue
                distance, y compris les Shinkansen. Il ne s'achète pas au
                Japon : il faut commander un bon d'échange avant le départ et
                l'activer à l'arrivée dans une gare JR. Pour un itinéraire
                Kyoto–Kanazawa–Tokyo, la formule 14 jours est généralement la
                plus adaptée.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous intégrons l'achat du JR Pass dans la préparation du
                voyage et vérifions sa pertinence selon l'itinéraire retenu.
                Certains trajets (vols intérieurs, taxis express) ne sont pas
                couverts.
              </p>
            </div>
          ),
        },
        {
          title: "La carte IC pour les transports urbains",
          cardEyebrow: "Pratique",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Une carte rechargeable pour les métros, bus et petits achats. Plus rapide que d'acheter un ticket à chaque trajet.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La Suica ou la Pasmo fonctionne dans les transports en commun
                de toutes les grandes villes et dans la plupart des combinis
                (7-Eleven, Lawson, FamilyMart). Elle se charge en espèces aux
                bornes des gares. Il est possible d'en télécharger une version
                sur iPhone via Apple Wallet depuis la France, avec une carte
                bancaire internationale.
              </p>
            </div>
          ),
        },
        {
          title: "Les espèces, encore indispensables",
          cardEyebrow: "Budget",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Le Japon reste très majoritairement en espèces, même dans les restaurants gastronomiques.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les cartes bancaires sont acceptées dans les grands hôtels et
                certains restaurants urbains. Mais un nombre significatif de
                ryokan, d'ateliers et de restaurants gastronomiques ne prennent
                que le cash. Partir avec 300 à 500 € en yens est une base
                raisonnable pour une semaine.
              </p>
              <h4 className="font-medium">Où retirer :</h4>
              <p>
                Les distributeurs 7-Bank (dans les 7-Eleven) et Japan Post
                acceptent les cartes européennes sans problème. Ceux des
                banques locales (Mizuho, SMBC) sont moins fiables.
              </p>
            </div>
          ),
        },
        {
          title: "Les chaussures, la règle silencieuse",
          cardEyebrow: "Quotidien",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Au Japon, on enlève ses chaussures souvent. Des lacets, c'est une mauvaise idée.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les temples, les ryokan, certains restaurants, les maisons
                privées : on retire ses chaussures à l'entrée, dans la zone
                genkan. La règle est toujours visible si l'on fait attention.
                Des chaussures à enfiler sans lacer (mocassins, sabots) rendent
                les matinées de visite beaucoup plus fluides.
              </p>
              <p>
                Dans les ryokan, des chaussons sont fournis pour circuler à
                l'intérieur. Des chaussons séparés sont prévus pour les
                toilettes. Il ne faut pas les oublier dans le couloir.
              </p>
            </div>
          ),
        },
        {
          title: "L'étiquette à l'onsen",
          cardEyebrow: "Ryokan",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Les bains thermaux ont des règles précises. Les connaître à l'avance évite l'inconfort.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les onsen se font nu, sans maillot de bain. On se lave
                intégralement sous la douche avant d'entrer dans le bain. La
                petite serviette fournie ne doit pas entrer dans l'eau : on la
                pose sur la tête ou sur le bord. Les tatouages sont interdits
                dans la majorité des établissements publics, y compris dans
                certains ryokan.
              </p>
              <h4 className="font-medium">Notre conseil :</h4>
              <p>
                Choisir un ryokan avec rotenburo (bain en plein air) privatif
                pour éviter la contrainte liée aux tatouages. Nous
                sélectionnons les adresses en fonction.
              </p>
            </div>
          ),
        },
        {
          title: "Le takuhaibin, pour voyager léger",
          cardEyebrow: "Bagages",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Le service de transfert de bagages entre hôtels fonctionne partout au Japon. Il change la logistique.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le takuhaibin (Yamato, Sagawa) livre les bagages d'hôtel en
                hôtel en 24 heures pour moins de 2 000 JPY par valise. On
                dépose sa valise à la réception le matin, et elle arrive au
                prochain ryokan avant le soir. Le Shinkansen n'est pas conçu
                pour les gros bagages.
              </p>
              <p>
                Il fonctionne depuis les combinis et les gares. L'adresse de
                destination doit être écrite en japonais : nous préparons les
                étiquettes pour chaque étape de l'itinéraire.
              </p>
            </div>
          ),
        },
        {
          title: "Les réservations gastronomiques",
          cardEyebrow: "Table",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Les meilleures tables de Kyoto et Tokyo se réservent trois à six mois à l'avance.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les restaurants kaiseki du quartier de Gion n'acceptent pas les
                réservations en ligne et préfèrent les recommandations. Certains
                n'ont pas de site web. Plusieurs demandent une présentation en
                japonais. Six mois d'anticipation est une base raisonnable pour
                les adresses les plus demandées.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous coordonnons les réservations dès l'ouverture du dossier.
                La plupart de nos adresses nécessitent un contact direct en
                japonais : nous l'assurons.
              </p>
            </div>
          ),
        },
        {
          title: "Saisons : cerisiers et érables",
          cardEyebrow: "Calendrier",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Le hanami et le momiji sont les deux moments où le Japon est le plus lui-même, et le plus fréquenté.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La floraison des cerisiers (hanami) se déplace du sud vers le
                nord entre fin mars et mi-avril. À Kyoto, elle dure environ
                dix jours. Dans la vallée de Yoshino (Nara), le spectacle est
                décalé d'une semaine et bien moins connu. La Golden Week qui
                suit (fin avril–début mai) est la période la plus fréquentée
                de l'année : prix et foules doublent.
              </p>
              <p>
                Les érables (momiji) colorent les collines de novembre. La
                fenêtre est plus longue qu'en avril, et les matins de semaine
                sont souvent praticables même à Kyoto.
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
            "On avait demandé quelque chose de précis : pas de grandes villes, pas de temples en file. On a eu Kōyasan, la péninsule de Noto et une nuit sur la Nagara. Le reste, le travel designer l'a construit.",
          image: {
            src: "/destination/japon/hero-1.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Voyage en couple, avril 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Le dîner à Beniya Mukayu, servi dans la chambre, face aux forêts de Kaga. Je n'avais pas idée qu'un repas pouvait tenir autant de silence.",
          image: {
            src: "/destination/japon/hero-2.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Séjour en automne, novembre 2024", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "La prière du matin à Eko-in, à six heures, dans le brouillard. C'est la seule chose dont je parle encore quand quelqu'un me demande ce que j'ai aimé au Japon.",
          image: {
            src: "/destination/japon/hero-3.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Voyage solo, octobre 2025", // TODO: replace with real testimonial
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
          question: "Quelle est la meilleure période pour partir au Japon ?",
          answer:
            "Les deux saisons les plus recherchées sont le printemps (mi-mars à fin avril, floraison des cerisiers) et l'automne (octobre–novembre, érables). Ces périodes sont aussi les plus fréquentées. Éviter la Golden Week (fin avril–début mai) et les grands week-ends de l'Obon (mi-août).",
        },
        {
          question: "Combien de temps dure le vol Paris–Tokyo ?",
          answer:
            "Le vol direct Paris Charles-de-Gaulle–Tokyo Haneda (Air France) dure environ 12 heures. Des connexions via Helsinki, Doha ou Singapour permettent de rallier Tokyo Narita ou Osaka Kansai.",
        },
        {
          question: "Faut-il un visa pour aller au Japon ?",
          answer:
            "Non. Les ressortissants français n'ont pas besoin de visa pour un séjour touristique de moins de 90 jours. Un passeport valide est obligatoire. Depuis 2025, un système d'autorisation électronique (JESTA) est en cours de déploiement — à vérifier selon la date du voyage.",
        },
        {
          question: "Combien de temps faut-il pour visiter le Japon ?",
          answer:
            "Deux semaines permettent de construire un itinéraire cohérent : Kyoto, une excursion vers Noto ou Kōyasan, Tokyo. Trois semaines donnent le temps d'étapes moins connues comme Kanazawa, la péninsule de Noto ou les monts Kii. En dessous de dix jours, le décalage horaire et les distances limitent la profondeur du séjour.",
        },
        {
          question: "Quel budget prévoir pour un voyage au Japon ?",
          answer:
            "Un voyage en ryokan de qualité avec des expériences sur mesure représente entre 10 000 et 18 000 € par personne pour deux semaines, transport international inclus. Un ryokan haut de gamme à Kaga Onsen ou Shuzenji représente à lui seul 500 à 1 000 € la nuit.",
        },
        {
          question: "Japon, quelle saison éviter ?",
          answer:
            "La saison des pluies (tsuyu) s'étend de mi-juin à mi-juillet, avec une humidité importante. L'été (juillet–août) est chaud, humide et très fréquenté. Les typhons peuvent affecter les déplacements entre août et octobre, surtout dans le sud de l'archipel.",
        },
      ],
    },

  ],
};
