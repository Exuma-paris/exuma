import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "suisse",
  name: "Suisse",
  placeKind: "country",
  country: "Suisse",
  genitive: "de la Suisse",
  continentSlug: "europe",
  blurb: "Gstaad, Zermatt, l’Engadine, le Tessin",
  keywords: [
    "suisse",
    "alpes",
    "gstaad",
    "zermatt",
    "cervin",
    "engadine",
    "grisons",
    "tessin",
    "valais",
  ],
  metaTitle: "Suisse : Voyage sur mesure",
  metaDescription:
    "Voyage en Suisse sur mesure : Gstaad, Zermatt, l’Engadine et le Tessin. Itinéraire écrit par votre travel designer Exuma, conciergerie privée 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe en Suisse",
      heading: "La Suisse, du Cervin aux rives du Tessin",
      description:
        "La Suisse se découvre vallée après vallée. On passe des chalets de Gstaad aux forêts de l’Engadine, puis on descend vers le sud, au bord du lac Majeur. Chaque versant a son caractère, et nous savons dans quel ordre les traverser.",
      images: [
        {
          src: "/destination/suisse/hero-1.png",
          alt: "Chalet de bois et sommets enneigés au lever du jour, voyage en Suisse",
        },
        {
          src: "/destination/suisse/hero-2.png",
          alt: "Le Cervin se dévoile au-dessus de Zermatt au premier soleil",
        },
        {
          src: "/destination/suisse/hero-3.png",
          alt: "Terrasse de bois face au lac des Quatre-Cantons dans la brume du matin",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir en Suisse ?",
      heading: "Un seul interlocuteur, du premier échange jusqu’au retour",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "taina",
        // TODO: verify quote attribution
        quote:
          "La Suisse a la réputation d’être facile. Elle l’est, jusqu’au jour où l’on veut autre chose que ce qui se réserve en ligne. Une maison au bout d’une route de montagne, un atelier d’horloger qui ouvre pour vous seuls, une cabane d’altitude gardée pour une seule famille. Ces adresses-là se transmettent, et c’est notre métier de les connaître.",
        role: "Travel Designer · Suisse",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Ouverture",
      heading: "La Suisse, le grand calme et la lumière des sommets",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Un voyage en Suisse commence souvent sur une route de montagne. Elle s’élève doucement entre les sapins, franchit un col, et redescend dans une vallée où l’on vous répond en italien. Le pays change de langue et de lumière en quelques virages. C’est ce qui le rend si vivant.",
        "Le reste se compose au fil des saisons. L’hiver appartient à l’Oberland bernois et au Valais, quand la neige tient et que le soleil reste haut. L’été ouvre les alpages et les sentiers des Grisons. L’automne dore les forêts de l’Engadine. Et le sud garde sa douceur presque toute l’année. Nous vous disons ce qui se vit le mieux au moment où vous partez.",
        "« Il y a la Suisse des affiches, celle des sommets et des trains rouges. Et il y a celle des maisons sans enseigne, où l’on entre parce que quelqu’un a téléphoné la veille. C’est celle-là que nous vous montrons. »",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/suisse/full-image.png",
        alt: "Vallée alpine et sommets enneigés au petit matin, voyage en Suisse",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "L’Engadine",
      heading: "L’Engadine, l’automne le plus doré de Suisse",
      theme: "light",
      paragraphs: [
        "L’Engadine se mérite un peu. La route s’élève longtemps avant d’ouvrir sur une vallée large, posée en altitude, où les lacs se suivent comme un collier. Les maisons y sont blanches, décorées de motifs gravés dans l’enduit. Certaines portent une phrase en romanche, la langue que l’on parle encore ici.",
        "En octobre, les mélèzes jaunissent tous en même temps et la vallée s’embrase pour une quinzaine de jours. C’est le moment que préfèrent ceux qui la connaissent bien. L’hiver, les lacs gèlent et l’on marche dessus d’une rive à l’autre, sur une glace noire qui craque sans céder.",
        "Sils Maria tient en trois rues au bord de l’eau. Nietzsche y passait ses étés.",
      ],
      images: [
        {
          src: "/destination/suisse/split-1.png",
          alt: "Maison engadinoise aux motifs gravés dans l’enduit, à Sils Maria",
        },
        {
          src: "/destination/suisse/split-2.png",
          alt: "Forêts de mélèzes dorées au-dessus du lac de Silvaplana en Engadine",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/suisse/xp-glacier-aletsch-1.png",
          alt: "Hélicoptère posé sur la neige du glacier d’Aletsch au lever du jour",
        },
        right: {
          src: "/destination/suisse/xp-glacier-aletsch-2.png",
          alt: "Table dressée sur la neige face aux glaces du glacier d’Aletsch",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        // TODO: verify — autorisation de dépose en hélicoptère et point de décollage
        heading: "Le petit-déjeuner qui vous attend sur le glacier d’Aletsch",
        columns: [
          "L’hélicoptère décolle du Valais au lever du jour et se pose sur le glacier d’Aletsch, là où quatre glaciers se rejoignent. Le pilote coupe le moteur et le silence tombe d’un coup. On entend seulement l’eau qui circule sous la glace.",
          "La table est déjà dressée sur la neige : pain de seigle valaisan, abricots du pays, café brûlant. Le glacier descend vers la vallée aussi loin que porte le regard, et pour l’heure il n’appartient qu’à vous. Les premiers marcheurs n’arriveront pas avant midi. Nous vous ramenons bien avant eux.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Suisse",
      heading: "Nos coups de cœur en Suisse",
      description:
        "Un atelier qui n’ouvre pas ses portes au public, un lac que l’on traverse avant tout le monde, un train réservé pour vous seuls. Ces accès-là se demandent, ils ne se réservent pas.",
      slugs: [
        "atelier-horloger-vallee-de-joux",
        "aube-barque-oeschinensee",
        "bernina-express-wagon-prive",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements en Suisse",
      heading: "Où séjourner",
      description:
        "Trois maisons, trois Suisses différentes. Un chalet au-dessus de Gstaad, une architecture de pierre au fond des Grisons, un domaine les pieds dans le lac Majeur.",
      slugs: ["the-alpina-gstaad", "hotel-7132-vals", "castello-del-sole-ascona"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Avant le départ",
      heading: "Préparer votre voyage en Suisse",
      description:
        "Le trajet, la monnaie, les formalités et la meilleure saison. De quoi choisir vos dates l’esprit tranquille.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Environ 1 h 20 de vol direct depuis Paris vers Genève ou Zurich. Le train relie également Paris à ces deux villes sans changement.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Aucun. La Suisse et la France métropolitaine partagent le même fuseau et les mêmes changements d’heure entre été et hiver.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Le franc suisse (CHF). Les cartes sont acceptées partout. L’euro passe dans certains commerces et zones touristiques, mais la monnaie est rendue en francs suisses.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "La Suisse appartient à l’espace Schengen sans être membre de l’Union européenne. Pour un court séjour, une carte nationale d’identité ou un passeport en cours de validité suffit aux ressortissants français.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin obligatoire. Il est recommandé d’être à jour des vaccinations habituelles. Pour un séjour prolongé en zone boisée, la vaccination contre l’encéphalite à tiques peut se discuter avec votre médecin.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "L’hiver pour le ski et les paysages enneigés, l’été pour la randonnée et les lacs. Le printemps et l’automne conviennent aux séjours plus calmes.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "L’allemand, le français, l’italien et le romanche sont les quatre langues nationales. On parle français à Genève, à Lausanne et en Valais, italien au Tessin.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Le relief commande tout : air vif et sec en altitude, températures plus douces au bord des lacs. Le Tessin, abrité au sud des Alpes, est la région la plus ensoleillée du pays, mais il connaît aussi l’hiver.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque voyage en Suisse. Un seul interlocuteur coordonne l’ensemble et reste le vôtre, du premier échange jusqu’au retour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/suisse/bento-${
            ["map", "adresses", "hebergements", "conciergerie", "experiences"][i]
          }.png`,
          alt: [
            "Carte d’un itinéraire sur mesure entre les vallées suisses",
            "Ruelle d’un village de l’Oberland bernois aux façades de bois",
            "Suite de chalet ouverte sur un massif enneigé",
            "Concierge coordonnant un transfert privé en Suisse",
            "Table dressée sur une terrasse d’altitude au crépuscule",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Que voir en Suisse",
      heading: "Les six lieux que nous aimons faire découvrir",
      description:
        "Zermatt, Gstaad, l’Engadine, Lavaux, Lucerne et Ascona. Six lieux, six ambiances, et la plupart de nos voyages en retiennent trois.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      initialZoom: 7,
      places: [
        {
          title: "Zermatt et le Cervin",
          description:
            "Le village se blottit au fond d’une vallée sans issue, face au Cervin. Aucune voiture n’y circule. Le matin, la montagne se dévoile avant que les nuages ne viennent la couvrir.",
          image: {
            src: "/destination/suisse/map-zermatt.png",
            alt: "Le Cervin au-dessus du village de Zermatt en Valais",
          },
          coordinates: { lat: 46.0207, lng: 7.7491 }, // TODO: verify coords
        },
        {
          title: "Gstaad et le Saanenland",
          description:
            "Des chalets de bois sombre, une rue où l’on se promène, et tout autour des alpages qui montent doucement. Rien ne dépasse, rien ne brille. C’est ce qui plaît à ceux qui viennent y disparaître.",
          image: {
            src: "/destination/suisse/map-gstaad.png",
            alt: "Chalets de bois de Gstaad et alpages du Saanenland sous la neige",
          },
          coordinates: { lat: 46.4726, lng: 7.2861 }, // TODO: verify coords
        },
        {
          title: "L’Engadine et Sils Maria",
          description:
            "Une vallée posée en altitude, entre forêts sombres et villages blancs. Saint-Moritz est tout près, et pourtant on se sent ailleurs. Le temps y ralentit dès le premier matin.",
          image: {
            src: "/destination/suisse/map-engadine.png",
            alt: "Lac de Sils et forêts de l’Engadine dans les Grisons",
          },
          coordinates: { lat: 46.4297, lng: 9.7614 }, // TODO: verify coords
        },
        {
          title: "Les terrasses de Lavaux",
          description:
            "Les vignes descendent en terrasses jusqu’au Léman, entre Lausanne et Montreux. Le chasselas mûrit face au lac. Les vignerons ouvrent leur caveau à tour de rôle, et l’on s’y attarde volontiers.",
          image: {
            src: "/destination/suisse/map-lavaux.png",
            alt: "Vignes en terrasses de Lavaux descendant vers le lac Léman",
          },
          coordinates: { lat: 46.4833, lng: 6.75 }, // TODO: verify coords
        },
        {
          title: "Lucerne et le lac des Quatre-Cantons",
          description:
            "Un pont de bois couvert, une vieille ville restée intacte, et un lac dont les bras s’enfoncent chacun dans une montagne. Les bateaux à vapeur y naviguent encore.",
          image: {
            src: "/destination/suisse/map-lucerne.png",
            alt: "Bateau à vapeur sur le lac des Quatre-Cantons devant Lucerne",
          },
          coordinates: { lat: 47.0502, lng: 8.3093 }, // TODO: verify coords
        },
        {
          title: "Ascona et le lac Majeur",
          description:
            "Ici, la Suisse parle italien. Les façades sont ocre, les palmiers bordent la promenade du lac Majeur, et les terrasses restent ouvertes tard.",
          image: {
            src: "/destination/suisse/map-ascona.png",
            alt: "Promenade et façades ocre d’Ascona au bord du lac Majeur, Tessin",
          },
          coordinates: { lat: 46.1547, lng: 8.7739 }, // TODO: verify coords
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Ce que les guides ne disent pas",
      heading: "Les conseils de nos experts pour votre voyage en Suisse",
      description:
        "Huit choses que l’on apprend en y allant souvent, et qui aident à choisir sa saison, sa vallée et son rythme.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          title: "Le train, la plus belle façon de circuler",
          cardEyebrow: "Logistique",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Les correspondances s’enchaînent sans effort, et vos bagages peuvent voyager d’un hôtel à l’autre sans vous",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le réseau suisse est d’une régularité rare. Les trains partent
                aux mêmes minutes chaque heure et les correspondances se font
                souvent sur le même quai. On regarde le paysage défiler au lieu
                de conduire, et les plus belles lignes traversent des vallées
                que la route ne voit jamais.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous choisissons pour chaque étape entre le train, la voiture
                avec chauffeur et l’hélicoptère. Vos bagages partent le matin et
                vous attendent dans la chambre suivante.
              </p>
            </div>
          ),
        },
        {
          title: "Les villages où la voiture n’entre pas",
          cardEyebrow: "Villages",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Zermatt, Wengen, Mürren, Saas-Fee : on laisse la voiture en bas et l’on monte en petit train ou en télécabine",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Plusieurs villages ont banni les voitures depuis longtemps. On y
                monte en petit train ou en funiculaire, et l’on découvre en
                arrivant un calme que l’on avait oublié. Le soir, on n’entend
                plus que la neige sous les pas.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Gardez un petit sac pour la première nuit. Le reste des bagages
                suit par le service de l’hôtel, et vous n’avez rien à porter.
              </p>
            </div>
          ),
        },
        {
          title: "L’hiver, même sans skier",
          cardEyebrow: "Saison",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Traîneau, patinoire naturelle, marche sur un lac gelé, spa face aux sommets : la journée se remplit sans chausser",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Tout le monde ne skie pas, et ce n’est pas un problème. Les
                sentiers d’hiver sont damés comme les pistes, les lacs de
                l’Engadine se traversent à pied, et les grandes maisons alpines
                ont pensé leur spa pour ceux qui restent en bas.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous composons des journées à deux rythmes. Cours privé le matin
                pour ceux qui skient, attelage ou thermes pour les autres, et
                tout le monde se retrouve à déjeuner en altitude.
              </p>
            </div>
          ),
        },
        {
          title: "L’été des alpages",
          cardEyebrow: "Été",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Entre la montée des troupeaux en juin et la désalpe de septembre, la montagne s’ouvre et les fromageries aussi",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les cabanes d’alpage et les fromageries de montagne ne vivent
                qu’à la belle saison. Les troupeaux montent au début de l’été et
                redescendent en septembre, fleuris et sonnaillants, pour la
                désalpe. C’est une fête de village, et l’on peut y assister.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Pour la montagne en été, juillet et août sont les mois sûrs.
                Plus tôt dans la saison, beaucoup de refuges et de routes
                n’ont pas encore rouvert.
              </p>
            </div>
          ),
        },
        {
          title: "Le Tessin, la Suisse italienne",
          cardEyebrow: "Sud",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Au sud des Alpes, le climat s’adoucit, la cuisine change et l’on commande son vin en italien",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Passé le Saint-Gothard, tout s’adoucit. Ascona et Locarno vivent
                au bord de l’eau, les vallées de Verzasca et de Bavona gardent
                leurs hameaux de pierre, et l’on dîne dans les grotti, ces caves
                fraîches où le vin arrive dans un pichet d’étain.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous plaçons volontiers cette étape en fin de séjour, après la
                montagne. Le contraste est plus doux dans ce sens.
              </p>
            </div>
          ),
        },
        {
          title: "La table suisse, au-delà de la fondue",
          cardEyebrow: "Table",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Fromages d’alpage, poissons de lac, viande séchée des Grisons et chasselas de Lavaux",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La cuisine change d’une vallée à l’autre. Une féra pêchée dans
                le lac de Neuchâtel, une viande séchée coupée fine dans les
                Grisons, un gruyère d’alpage longuement affiné, un chasselas
                servi frais sur une terrasse de Lavaux. Les vins suisses
                s’exportent à peine, on ne les boit qu’ici.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous réservons les petites tables qui ne prennent pas de
                réservation en ligne, et nous organisons une dégustation chez un
                vigneron, dans ses vignes.
              </p>
            </div>
          ),
        },
        {
          title: "Les routes de col, une affaire de saison",
          cardEyebrow: "Route",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Le Grimsel, la Furka et le Susten dorment sous la neige une bonne partie de l’année",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les grandes routes de col ne rouvrent qu’à la fin du printemps,
                parfois plus tard pour les plus hautes. Un itinéraire imaginé
                sur une carte peut donc changer en chemin. Quand un col reste
                fermé, le train prend le relais et le paysage n’y perd rien.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Pour passer d’un versant à l’autre en voiture, l’été est la
                bonne saison. Le reste de l’année, le rail se moque de la météo.
              </p>
            </div>
          ),
        },
        {
          title: "Ce que coûte la Suisse",
          cardEyebrow: "Budget",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Le pays est cher, mais le choix de la semaine pèse souvent plus lourd que le choix de la maison",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Un déjeuner en refuge ou un forfait de remontées coûtent plus
                qu’ailleurs en Europe. En revanche, les écarts de prix d’une
                semaine à l’autre, ou d’une station connue à la vallée voisine,
                sont considérables à qualité égale.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous vous indiquons les semaines à éviter et celles où les mêmes
                maisons se réservent sans difficulté.
              </p>
            </div>
          ),
        },
      ],
    },

    {
      type: "testimonials",
      eyebrow: "Témoignages",
      heading: "Ils ont vécu l’expérience Exuma",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      testimonials: [
        {
          // TODO: replace with real testimonial
          quote:
            "Trois vallées, et jamais l’impression de courir. Gstaad, puis les Grisons, puis le Tessin. Nos bagages nous précédaient d’une maison à l’autre, nous n’avons rien porté de tout le séjour.",
          image: {
            src: "/destination/suisse/hero-1.png",
            alt: "Portrait de Frédéric", // TODO: verify
          },
          name: "Frédéric", // TODO: verify
          role: "Séjour en couple, février 2026", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Nous étions trois générations et personne n’a attendu personne. Les enfants au ski le matin, mes parents aux thermes, et tout le monde à la même table à midi. C’était exactement ce que j’espérais.",
          image: {
            src: "/destination/suisse/hero-2.png",
            alt: "Portrait de Constance", // TODO: verify
          },
          name: "Constance", // TODO: verify
          role: "Voyage en famille, janvier 2026", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Le petit-déjeuner sur le glacier restera le souvenir du voyage. Ce moment-là est difficile à raconter. Nous étions redescendus avant même que la vallée ne se réveille.",
          image: {
            src: "/destination/suisse/hero-3.png",
            alt: "Portrait de Laurent", // TODO: verify
          },
          name: "Laurent", // TODO: verify
          role: "Voyage anniversaire, septembre 2025", // TODO: verify
        },
      ],
    },

    {
      type: "faq",
      background: "bg-white",
      eyebrow: "FAQ",
      heading: "Questions fréquentes",
      contact: {
        prefix: "Besoin d’un renseignement ? ",
        label: "Contactez votre travel designer",
        href: "/contact",
        suffix: " pour une réponse personnalisée.",
      },
      items: [
        {
          question: "Quelle est la meilleure période pour partir en Suisse ?",
          answer:
            "De décembre à mars pour le ski et les paysages enneigés. De juin à septembre pour la randonnée, les alpages et les lacs. Le printemps et l’automne conviennent aux séjours plus calmes, avec les couleurs des mélèzes en octobre dans les Grisons.",
        },
        {
          question: "Combien de temps dure le trajet depuis Paris ?",
          answer:
            "Environ 1 h 20 de vol direct vers Genève ou Zurich. Le train relie également Paris à ces deux villes sans changement, et vous dépose au centre-ville.",
        },
        {
          question: "Faut-il un visa pour aller en Suisse ?",
          answer:
            "Non. La Suisse fait partie de l’espace Schengen sans appartenir à l’Union européenne : pour les ressortissants français et européens, une carte nationale d’identité ou un passeport en cours de validité suffit. Les contrôles douaniers, eux, subsistent.",
        },
        {
          question: "Que faire en Suisse en une semaine ?",
          answer:
            "Une semaine se partage confortablement entre deux vallées. Par exemple quelques nuits dans l’Oberland bernois ou en Valais pour la montagne, puis quelques nuits dans les Grisons ou au Tessin pour changer d’ambiance. On garde ainsi le temps de s’installer et de flâner.",
        },
        {
          question: "La Suisse est-elle adaptée à un voyage en famille ?",
          answer:
            "Oui, c’est l’une des destinations les plus simples à organiser avec des enfants d’âges différents : villages sans voitures, écoles de ski privées, sentiers d’hiver damés et maisons qui proposent une garde en chambre. Les grands-parents y trouvent leur rythme sans skier.",
        },
        {
          question: "Quel budget prévoir pour un voyage en Suisse ?",
          answer:
            "Le budget dépend surtout de la saison, de l’altitude et des maisons retenues : à qualité égale, l’écart entre les vacances scolaires et les semaines voisines est important. Nous construisons chaque voyage sur mesure et présentons un budget détaillé avant toute réservation, sans engagement.",
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
        "D’autres pays d’Europe où la montagne et la mer se répondent, à composer sur mesure avec votre travel designer.",
      slugs: ["france", "italie", "grece"],
    },
  ],
};
