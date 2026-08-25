import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "autriche",
  name: "Autriche",
  placeKind: "country",
  country: "Autriche",
  genitive: "de l’Autriche",
  continentSlug: "europe",
  blurb: "Vienne, Salzbourg, la Wachau, l’Arlberg",
  keywords: [
    "autriche",
    "vienne",
    "salzbourg",
    "wachau",
    "salzkammergut",
    "arlberg",
    "tyrol",
    "danube",
    "alpes",
  ],
  metaTitle: "Autriche : Voyage sur mesure",
  metaDescription:
    "Voyage en Autriche sur mesure : Vienne, Salzbourg, la Wachau et l’Arlberg. Itinéraire écrit par votre travel designer Exuma, conciergerie privée 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe en Autriche",
      heading: "L’Autriche, de la Salle dorée aux crêtes de l’Arlberg",
      description:
        "Le pays tient dans deux registres qui ne se ressemblent pas. Vienne et Salzbourg d’un côté, leurs salles de concert et leurs cafés qui n’ont pas changé de siècle. De l’autre, les vallées du Vorarlberg et du Tyrol, où l’on part skis aux pieds. Nous savons dans quel ordre les prendre.",
      images: [
        {
          src: "/destination/autriche/hero-1.png",
          alt: "Salle de concert dorée et loges de velours à Vienne, voyage en Autriche",
        },
        {
          src: "/destination/autriche/hero-2.png",
          alt: "Village de montagne du Vorarlberg sous la neige au premier soleil",
        },
        {
          src: "/destination/autriche/hero-3.png",
          alt: "Barque de bois amarrée sur un lac du Salzkammergut dans la brume",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir en Autriche ?",
      heading: "Un seul interlocuteur, du premier échange jusqu’au retour",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "taina",
        // TODO: verify quote attribution
        quote:
          "On croit connaître l’Autriche parce qu’on a vu Vienne un week-end. Puis quelqu’un vous fait entrer au Musikverein un matin de répétition, un vigneron de Dürnstein remonte un vieux millésime de sa cave, et le pays change de dimension. Ces portes-là ne s’ouvrent pas depuis un site de réservation. Elles s’ouvrent parce qu’on a téléphoné la veille, et parce qu’on téléphone depuis dix ans.",
        role: "Travel Designer · Autriche",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Ouverture",
      heading: "L’Autriche, la ville d’abord, la montagne ensuite",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Un voyage en Autriche commence presque toujours dans un café de Vienne. Le serveur pose un verre d’eau avant même la commande, le journal pend à sa baguette de bois, et personne ne vous demandera de libérer la table. On y reste deux heures pour le prix d’un mélange. C’est le premier signe que le pays ne mesure pas le temps comme ses voisins.",
        "Le reste se compose ensuite. Salzbourg pour l’été des festivals, la Wachau pour les terrasses de riesling qui descendent vers le Danube, le Salzkammergut pour ses lacs verts et ses maisons d’empereur. Puis l’ouest, le Vorarlberg et le Tyrol, où la neige tient de décembre à avril et où les meilleures maisons ne comptent que vingt chambres. Quatre régions, dans un pays plus petit que la moitié de la France.",
        "« Il y a l’Autriche des cars de tourisme, celle de Mozart en perruque et des concerts pour visiteurs pressés. Et il y a celle des répétitions du matin, des caves familiales et des vallées où l’on entre parce qu’on vous attend. C’est celle-là que nous montrons. »",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/autriche/full-image.png",
        alt: "Le Danube et les terrasses de vigne de la Wachau au lever du jour, voyage en Autriche",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Le Salzkammergut",
      heading: "Le Salzkammergut, les lacs où l’empereur passait ses étés",
      theme: "light",
      paragraphs: [
        "François-Joseph venait à Bad Ischl chaque été pendant plus de soixante ans. Il s’y était fiancé à Élisabeth en 1853, et la Kaiservilla appartient encore à ses descendants. La ville a gardé ses façades jaune impérial et ses pâtisseries au marbre usé. On y prend le café à la même heure qu’à Vienne, mais les fenêtres donnent sur des sapins.",
        "Autour, les lacs se suivent sans se ressembler. Le Wolfgangsee est large et clair, le Fuschlsee reste sombre sous les arbres, le Hallstättersee s’enfonce entre deux parois. À Hallstatt, on remonte le sel de la montagne depuis plus de trois mille ans, ce qui en fait la plus ancienne mine du monde encore en activité. Le village se visite avant neuf heures, quand les cars sont encore sur la route.",
        "À Fuschl, les barques de bois se louent toujours à l’heure. Personne ne vérifie l’heure.",
      ],
      images: [
        {
          src: "/destination/autriche/split-1.png",
          alt: "Façade jaune impérial et volets de bois d’une maison de Bad Ischl",
        },
        {
          src: "/destination/autriche/split-2.png",
          alt: "Le lac de Hallstatt entre deux parois de montagne au petit matin",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/autriche/xp-musikverein-1.png",
          alt: "La Salle dorée du Musikverein de Vienne, vide avant la répétition du matin",
        },
        right: {
          src: "/destination/autriche/xp-musikverein-2.png",
          alt: "Musiciens du Philharmonique de Vienne en répétition sous les cariatides dorées",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        // TODO: verify — accès aux répétitions du Wiener Philharmoniker, calendrier et autorisation
        heading: "La Salle dorée à dix heures du matin, avant tout le monde",
        columns: [
          "La salle est vide quand on entre. Mille sept cent quarante-quatre fauteuils de velours rouge, des cariatides dorées le long des murs, un plafond peint que personne ne regarde jamais assez longtemps le soir. À cette heure-là, la lumière vient des fenêtres hautes et non des lustres. On voit la poussière tourner au-dessus des pupitres.",
          "Puis les musiciens arrivent, en pull, sans cravate. Le chef reprend une mesure, l’arrête, la reprend encore. On entend les corrections, les rires, un violoncelle qui s’accorde seul dans un coin. Le soir, la même salle sera pleine et l’on n’entendra que le résultat. C’est le matin que l’on comprend comment il se fabrique.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Autriche",
      heading: "Nos coups de cœur en Autriche",
      description:
        "Un manège baroque avant l’ouverture, une cave de Dürnstein dont le vigneron remonte les vieux millésimes, une montagne que l’on gravit avant que les remontées ne tournent. Ces accès-là se demandent, ils ne se réservent pas.",
      slugs: [
        "lipizzans-hofreitschule",
        "wachau-riesling-durnstein",
        "arlberg-peau-de-phoque",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements en Autriche",
      heading: "Où séjourner",
      description:
        "Trois maisons, trois Autriches différentes. Une adresse viennoise qui fait face à l’Opéra, un château posé au bord d’un lac du Salzkammergut, un chalet de dix-neuf chambres au pied des pistes de Lech.",
      slugs: ["hotel-sacher-vienna", "rosewood-schloss-fuschl", "aurelio-lech"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Avant le départ",
      heading: "Préparer votre voyage en Autriche",
      description:
        "Le trajet, la monnaie, les formalités et la meilleure saison. De quoi choisir vos dates l’esprit tranquille.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Environ 1 h 55 de vol direct depuis Paris vers Vienne. Salzbourg et Innsbruck ne sont pas desservies en direct : on y arrive avec une correspondance, ou en train depuis Vienne. Un train de nuit relie également Paris à Vienne sans changement.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Aucun. L’Autriche et la France métropolitaine partagent le même fuseau et les mêmes changements d’heure entre été et hiver.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "L’euro. Les cartes sont acceptées presque partout, mais les cafés viennois et les auberges de vallée restent nombreux à préférer les espèces.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "L’Autriche appartient à l’Union européenne et à l’espace Schengen. Pour les ressortissants français, une carte nationale d’identité ou un passeport en cours de validité suffit.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin obligatoire. L’encéphalite à tiques circule dans les zones boisées du pays : la vaccination se discute avec votre médecin pour un séjour en forêt ou en alpage au printemps et en été.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "De décembre à mars pour la neige du Vorarlberg et du Tyrol. De mai à juin et en septembre pour Vienne, la Wachau et les lacs, quand la lumière est belle et les villes moins fréquentées.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "L’allemand, avec des dialectes très marqués d’une vallée à l’autre. L’anglais est couramment parlé à Vienne, à Salzbourg et dans les stations de l’ouest.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Continental à l’est : étés chauds à Vienne et dans la Wachau, hivers secs et froids. À l’ouest, le relief commande, avec de la neige tenue en altitude de décembre à avril et des étés frais en montagne.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque voyage en Autriche. Un seul interlocuteur coordonne l’ensemble et reste le vôtre, du premier échange jusqu’au retour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/autriche/bento-${
            ["map", "adresses", "hebergements", "conciergerie", "experiences"][i]
          }.png`,
          alt: [
            "Carte d’un itinéraire sur mesure entre Vienne, la Wachau et le Tyrol",
            "Cour intérieure pavée et façades baroques dans le centre de Salzbourg",
            "Suite d’un palais viennois ouverte sur les toits de la vieille ville",
            "Concierge coordonnant un transfert privé depuis un hôtel autrichien",
            "Table dressée à la bougie dans une cave voûtée de la Wachau",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Que voir en Autriche",
      heading: "Les six lieux que nous aimons faire découvrir",
      description:
        "Vienne, Salzbourg, la Wachau, le Salzkammergut, Lech am Arlberg et Innsbruck. Six lieux, six ambiances, et la plupart de nos voyages en retiennent trois.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      initialZoom: 7,
      places: [
        {
          title: "Vienne",
          description:
            "La ville se marche du Ring à la Hofburg sans jamais presser le pas. Les cafés y tiennent lieu de salon et l’Opéra donne près de trois cents représentations par an, sur une saison qui court de septembre à juin. Rien n’oblige à tout voir.",
          image: {
            src: "/destination/autriche/map-vienne.png",
            alt: "Façades du Ring et coupoles de Vienne à la tombée du jour",
          },
          coordinates: { lat: 48.2082, lng: 16.3738 }, // TODO: verify coords
        },
        {
          title: "Salzbourg",
          description:
            "Une forteresse au-dessus des toits, une rivière qui coupe la ville en deux, des cours intérieures que l’on traverse sans les avoir vues depuis la rue. Fin juillet, le Festival prend toute la ville et les chambres se réservent un an à l’avance.",
          image: {
            src: "/destination/autriche/map-salzbourg.png",
            alt: "La forteresse de Hohensalzburg au-dessus des toits de Salzbourg",
          },
          coordinates: { lat: 47.8095, lng: 13.055 }, // TODO: verify coords
        },
        {
          title: "La Wachau et Dürnstein",
          description:
            "Une quarantaine de kilomètres de Danube entre Melk et Krems, bordés de terrasses de pierre sèche où mûrissent le riesling et le grüner veltliner. Les domaines sont familiaux et petits. Beaucoup ne vendent qu’au caveau.",
          image: {
            src: "/destination/autriche/map-wachau.png",
            alt: "Terrasses de vigne au-dessus du Danube et clocher bleu de Dürnstein",
          },
          coordinates: { lat: 48.3961, lng: 15.5203 }, // TODO: verify coords
        },
        {
          title: "Le Salzkammergut",
          description:
            "La région des lacs, à l’est de Salzbourg. Une eau verte et froide, des maisons de bois sur les rives, et le sel que l’on remonte de la montagne depuis trois millénaires. Hallstatt se visite tôt, ou pas du tout.",
          image: {
            src: "/destination/autriche/map-salzkammergut.png",
            alt: "Maisons de bois au bord du lac de Hallstatt dans le Salzkammergut",
          },
          coordinates: { lat: 47.5622, lng: 13.6493 }, // TODO: verify coords
        },
        {
          title: "Lech am Arlberg",
          description:
            "Un village du Vorarlberg posé à quinze cents mètres, relié à Zürs et à Saint-Anton par un domaine que l’on parcourt d’un versant à l’autre. Les maisons appartiennent aux mêmes familles depuis trois générations. Aucune n’a grandi.",
          image: {
            src: "/destination/autriche/map-lech.png",
            alt: "Chalets de bois enneigés de Lech am Arlberg dans le Vorarlberg",
          },
          coordinates: { lat: 47.2081, lng: 10.1435 }, // TODO: verify coords
        },
        {
          title: "Innsbruck et le Tyrol",
          description:
            "Une ville de vieilles arcades avec un massif de deux mille cinq cents mètres au bout de la rue principale. Le funiculaire monte du centre aux alpages en une vingtaine de minutes. On déjeune en altitude et l’on redescend dîner en ville.",
          image: {
            src: "/destination/autriche/map-innsbruck.png",
            alt: "Arcades colorées d’Innsbruck devant les sommets enneigés du Tyrol",
          },
          coordinates: { lat: 47.2692, lng: 11.4041 }, // TODO: verify coords
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Ce que les guides ne disent pas",
      heading: "Les conseils de nos experts pour votre voyage en Autriche",
      description:
        "Huit choses que l’on apprend en y allant souvent, et qui aident à choisir sa saison, sa région et son rythme.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          title: "Le café viennois est une institution, pas un commerce",
          cardEyebrow: "Vienne",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "On y commande un mélange, on y reste deux heures, et le serveur ne reviendra pas vous relancer",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le café viennois se commande par son nom : mélange, einspänner,
                verlängerter. Le verre d’eau qui l’accompagne se renouvelle sans
                qu’on le demande. Les journaux sont à disposition sur leurs
                baguettes de bois, et l’on peut y travailler une matinée entière
                sans que personne ne s’en émeuve.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Les plus belles salles se vident après quinze heures. C’est le
                moment d’y entrer, quand la lumière tombe de biais sur les
                banquettes et que les tables du fond se libèrent.
              </p>
            </div>
          ),
        },
        {
          title: "Les concerts pour touristes et les autres",
          cardEyebrow: "Musique",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Les perruques et les habits d’époque signalent un spectacle pour visiteurs, pas la vie musicale de la ville",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Vienne produit chaque soir de la musique à un niveau que peu de
                villes atteignent, et une bonne partie de ce qui se vend dans la
                rue n’en fait pas partie. Le Musikverein, le Konzerthaus et le
                Staatsoper affichent leur saison un an à l’avance, et les places
                partent vite.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous prenons les places dès l’ouverture des ventes, loge comprise,
                et nous obtenons quand c’est possible l’accès à une répétition du
                matin.
              </p>
            </div>
          ),
        },
        {
          title: "Le Festival de Salzbourg change la ville",
          cardEyebrow: "Saison",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "De fin juillet à fin août, les maisons affichent complet et les tables se réservent des mois à l’avance",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le Festival occupe Salzbourg pendant cinq à six semaines chaque
                été. C’est un moment magnifique et une contrainte réelle : les
                chambres se réservent longtemps à l’avance et les prix suivent.
                Hors festival, la même ville se traverse sans effort.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Si le Festival n’est pas la raison du voyage, visez juin ou la
                seconde quinzaine de septembre. La ville est la même, avec
                beaucoup moins de monde.
              </p>
            </div>
          ),
        },
        {
          title: "La Wachau se boit chez le vigneron",
          cardEyebrow: "Vin",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Grüner veltliner et riesling en Smaragd, des domaines familiaux qui vendent surtout au caveau",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les vins secs de la Wachau se classent en trois niveaux,
                Steinfeder, Federspiel et Smaragd, du plus léger au plus
                concentré. Les terrasses de pierre sèche se travaillent à la main.
                Les meilleures cuvées quittent rarement le pays et se goûtent au
                domaine.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous organisons la dégustation dans les vignes puis à la cave,
                avec remontée de vieux millésimes, et l’expédition des caisses
                jusqu’à votre domicile.
              </p>
            </div>
          ),
        },
        {
          title: "L’ouest se skie, l’est se marche",
          cardEyebrow: "Montagne",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Vorarlberg et Tyrol pour la neige, Styrie et Basse-Autriche pour les sentiers et les vignes",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les grandes stations sont toutes à l’ouest : Lech, Zürs,
                Saint-Anton, Kitzbühel. La neige y tient de décembre à avril, plus
                tard sur les glaciers. À l’est, le relief s’adoucit et la montagne
                devient une affaire d’été, entre alpages de Styrie et forêts de
                Basse-Autriche.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Ne cherchez pas à combiner Vienne et l’Arlberg en trois jours. Il
                y a plusieurs heures de train entre les deux, et le voyage y perd
                sa respiration.
              </p>
            </div>
          ),
        },
        {
          title: "La table autrichienne dépasse largement la schnitzel",
          cardEyebrow: "Table",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Poissons des lacs, gibier de Styrie, huile de courge grillée, et une pâtisserie qui se prend au sérieux",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La cuisine change de région en région. Une omble chevalier pêchée
                dans un lac du Salzkammergut, du gibier en Styrie avec l’huile de
                courge grillée que l’on ne trouve que là, et à Vienne une
                pâtisserie de métier : tafelspitz à midi, strudel encore tiède
                l’après-midi.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous réservons les tables qui ne prennent pas de réservation en
                ligne et organisons un déjeuner chez un producteur de Styrie, dans
                sa ferme.
              </p>
            </div>
          ),
        },
        {
          title: "Le train fait mieux que la voiture",
          cardEyebrow: "Logistique",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Vienne, Linz, Salzbourg et Innsbruck sont sur la même ligne, et les gares sont au centre des villes",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le réseau autrichien est dense et ponctuel. Les trains partent à
                heure fixe et les grandes villes s’enchaînent sans changement. Les
                gares étant au centre, on supprime les transferts et le
                stationnement, qui est le vrai casse-tête de Salzbourg.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous arbitrons pour chaque étape entre le train, la voiture avec
                chauffeur et l’hélicoptère, et vos bagages voyagent séparément
                d’une maison à l’autre.
              </p>
            </div>
          ),
        },
        {
          title: "Ce que coûte l’Autriche",
          cardEyebrow: "Budget",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Moins chère que la Suisse à qualité comparable, mais la semaine choisie change tout à l’ouest",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                À prestation égale, l’Autriche reste sensiblement en dessous de sa
                voisine suisse, y compris dans les stations de l’Arlberg. En
                revanche, les écarts d’une semaine à l’autre sont considérables :
                Noël, le Nouvel An et février se paient au prix fort, janvier
                beaucoup moins.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous vous indiquons les semaines à éviter et celles où les mêmes
                maisons se réservent sans difficulté, à budget très différent.
              </p>
            </div>
          ),
        },
      ],
    },

    {
      type: "spotsList",
      eyebrow: "Récits de voyage",
      heading: "Trois scènes d'un voyage en Autriche",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      spots: [
        {
          title: "La répétition du Musikverein",
          description:
            "Une trentaine de personnes dans la salle au matin, pour la répétition. Le soir, le même programme donné en concert n'a plus rien à voir.",
        },
        {
          title: "La cave de Dürnstein",
          description:
            "Dix jours entre Vienne, la Wachau et les lacs, sans jamais courir. À Dürnstein, le vigneron fait descendre à la cave et remonter des bouteilles de 1997, hors programme.",
        },
        {
          title: "Lech avant l'ouverture des remontées",
          description:
            "Un guide le matin, rien d'imposé l'après-midi. La montée se fait en peau de phoque avant l'ouverture, la descente dans une neige que personne n'a touchée.",
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
          question: "Quelle est la meilleure période pour partir en Autriche ?",
          answer:
            "De décembre à mars pour la neige du Vorarlberg et du Tyrol. De mai à juin et en septembre pour Vienne, la Wachau et les lacs du Salzkammergut : la lumière est belle, les salles de concert ont repris leur saison et les villes sont moins fréquentées qu’en plein été.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris ?",
          answer:
            "Environ 1 h 55 de vol direct entre Paris et Vienne. Il n’existe pas de vol direct régulier vers Salzbourg ni vers Innsbruck : on y arrive avec une correspondance, ou en train depuis Vienne. Un train de nuit relie également Paris à Vienne sans changement, et vous dépose au centre-ville au petit matin.",
        },
        {
          question: "Faut-il un visa pour aller en Autriche ?",
          answer:
            "Non. L’Autriche appartient à l’Union européenne et à l’espace Schengen : pour les ressortissants français et européens, une carte nationale d’identité ou un passeport en cours de validité suffit.",
        },
        {
          question: "Que faire en Autriche en une semaine ?",
          answer:
            "Une semaine se partage confortablement entre deux régions. Par exemple trois nuits à Vienne pour la ville, l’opéra et les musées, puis trois nuits dans la Wachau ou au bord des lacs du Salzkammergut. L’ouest et ses stations méritent un séjour à part entière plutôt qu’une étape.",
        },
        {
          question: "Où dormir à Vienne ?",
          answer:
            "Le premier arrondissement, à l’intérieur du Ring, met l’Opéra, le Musikverein et les musées à distance de marche. Nous y travaillons notamment avec l’Hotel Sacher, qui fait face à l’Opéra depuis 1876 : on rentre du concert à pied, en traversant la rue.",
        },
        {
          question: "Quel budget prévoir pour un voyage en Autriche ?",
          answer:
            "Le budget dépend surtout de la saison, de la région et des maisons retenues : à qualité égale, l’écart entre les vacances de février et une semaine de janvier est important dans les stations de l’ouest. Nous construisons chaque voyage sur mesure et présentons un budget détaillé avant toute réservation, sans engagement.",
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
        "D’autres pays d’Europe où la montagne, la table et le patrimoine se répondent, à composer sur mesure avec votre travel designer.",
      slugs: ["suisse", "italie", "france"],
    },
  ],
};
