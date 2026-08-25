import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "bhoutan",
  name: "Bhoutan",
  placeKind: "country",
  country: "Bhoutan",
  genitive: "du Bhoutan",
  continentSlug: "asie",
  blurb: "Paro, Punakha, Phobjikha, Bumthang",
  keywords: [
    "bhoutan",
    "himalaya",
    "paro",
    "taktsang",
    "punakha",
    "phobjikha",
    "bumthang",
    "thimphu",
  ],
  metaTitle: "Bhoutan : Voyage sur mesure",
  metaDescription:
    "Voyage au Bhoutan sur mesure : Nid du Tigre, dzong de Punakha, vallée de Phobjikha, temples du Bumthang. Itinéraire écrit par votre travel designer Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe au Bhoutan",
      heading: "Le Bhoutan, de la vallée de Paro aux temples du Bumthang",
      description:
        "Le Bhoutan se laisse approcher lentement, vallée après vallée. La route mène de Thimphu, la capitale où les moines croisent les voitures, à Punakha et ses rizières, puis s'élève vers Phobjikha, où les grues venues du nord passent l'hiver au bord du marais. Partout, les monastères sont restés des lieux de vie plutôt que des monuments. C'est ce royaume-là que nous vous ouvrons, porte après porte.",
      images: [
        {
          src: "/destination/bhoutan/hero-1.png",
          alt: "Monastère du Nid du Tigre au-dessus de la vallée de Paro au Bhoutan",
        },
        {
          src: "/destination/bhoutan/hero-2.png",
          alt: "Dzong de Punakha au bord de la rivière au Bhoutan",
        },
        {
          src: "/destination/bhoutan/hero-3.png",
          alt: "Moines en robe grenat dans la cour d'un dzong bhoutanais au petit matin",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir au Bhoutan ?",
      heading: "Stéphane, spécialiste du Bhoutan, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "stephane",
        // TODO: verify quote attribution
        quote:
          "Ce que j'aime au Bhoutan, c'est que rien ne s'y obtient par la porte principale. Les plus beaux moments arrivent parce qu'un moine accepte d'ouvrir une salle avant le jour, ou parce qu'une famille du Bumthang met un couvert de plus à sa table. Je construis les voyages avec les gens que je connais là-bas, pour que ces portes s'ouvrent au bon moment.",
        role: "Travel Designer · Bhoutan",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte du Bhoutan",
      heading: "Un royaume bouddhiste où le temps ralentit",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Un voyage au Bhoutan commence toujours par une vallée. Celle de Paro accueille les arrivées, entre ses champs de riz rouge et ses maisons aux fenêtres peintes. La brume ne quitte les versants qu'en milieu de matinée, et l'on part vers le monastère du Nid du Tigre pendant que l'air est encore frais. Rien ne presse ici, et c'est déjà une bonne raison de venir.",
        "La route continue vers Thimphu, où l'on croise des moines devant les cafés et un agent en gants blancs qui règle la circulation à la main. À l'école des treize arts, les élèves apprennent encore la peinture de thangka, la broderie et la sculpture sur bois comme on l'enseignait à leurs grands-parents. On y passe une matinée entière sans s'en apercevoir.",
        "Puis vient Punakha, plus basse et plus douce, où les orangers poussent au bord des rivières et où la forteresse se reflète dans l'eau. Plus loin s'ouvrent la vallée de Phobjikha et ses tourbières, et le Bumthang avec ses temples fondateurs. Nous relions ces vallées à votre rythme, et nous vous conduisons dans les monastères aux heures où personne d'autre n'y entre.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/bhoutan/full-image.png",
        alt: "Vallée de Paro et ses rizières en terrasses au Bhoutan dans la lumière du matin",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Bhoutan : l'art de vivre bouddhiste",
      heading: "Le pays qui a choisi de préserver ce qui le rend heureux",
      theme: "light",
      paragraphs: [
        "Le Bhoutan mesure sa réussite au bonheur de ses habitants plutôt qu'à sa richesse. L'idée a l'air d'une jolie formule, et pourtant elle se voit partout : dans les forêts que le royaume protège, dans les maisons neuves qui gardent leurs fenêtres peintes et leurs toits de bois, dans la lenteur avec laquelle le pays s'est ouvert au voyage.",
        "Cela donne un royaume où les gestes anciens n'ont pas disparu. Les charpentiers assemblent toujours le pin bleu sans clou apparent, les peintres broient leurs pigments à la main, et les moulins à prières tournent au fil des rivières. On traverse les vallées sans croiser une enseigne lumineuse, et l'on comprend assez vite que c'est un choix.",
      ],
      images: [
        {
          src: "/destination/bhoutan/split-1.png",
          alt: "Peintre de thangka de l'école des treize arts au travail à Thimphu",
        },
        {
          src: "/destination/bhoutan/split-2.png",
          alt: "Fenêtres peintes d'une ferme traditionnelle de la vallée de Punakha",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/bhoutan/xp-taktsang-1.png",
          alt: "Sentier montant vers le monastère du Nid du Tigre dans la brume du matin",
        },
        right: {
          src: "/destination/bhoutan/xp-taktsang-2.png",
          alt: "Lampes à beurre allumées dans une salle de méditation du monastère de Taktsang",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "La montée au Nid du Tigre, avant les premiers visiteurs",
        columns: [
          "Le monastère de Taktsang tient sur une paroi au-dessus de la vallée de Paro, là où Guru Rinpoché serait arrivé sur le dos d'une tigresse pour méditer dans la grotte que le bâtiment abrite aujourd'hui. On l'aperçoit d'en bas, minuscule au milieu du rocher, et l'on met un moment à croire que le sentier y conduit vraiment.",
          "Nous vous y emmenons avant le jour, avec un moine du monastère qui monte à vos côtés. Le chemin traverse la forêt de pins et les drapeaux de prière, la vallée s'éclaire peu à peu en dessous. En haut, il ouvre pour vous la salle de méditation avant l'arrivée des visiteurs : il n'y a que les lampes à beurre, leur odeur et le vent contre la paroi. On redescend quand les autres commencent à monter.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités au Bhoutan",
      heading: "Les moments que l'on garde en rentrant",
      description:
        "Une bénédiction donnée dans un dzong dont on referme les portes, les grues qui s'éveillent dans la tourbière de Phobjikha, et l'Himalaya vu depuis un hélicoptère privé.",
      slugs: [
        "punakha-benediction-lama",
        "grues-phobjikha-ornithologue",
        "helico-himalaya-jomolhari",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Des maisons où l'on se sent attendu",
      description:
        "Des lodges qui se répondent d'une vallée à l'autre, une ferme rénovée face au monastère de Gangteng, et des bains de pierres chaudes préparés au bord de la rivière.",
      slugs: ["amankora", "six-senses-bhutan", "gangtey-lodge"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage au Bhoutan",
      description:
        "Vol, formalités, saisons et altitude : l'essentiel pour préparer votre voyage au Bhoutan en toute tranquillité.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Paro se rejoint avec une correspondance en Asie, le plus souvent par Delhi, Katmandou, Bangkok ou Singapour, sur Drukair ou Bhutan Airlines. Comptez environ 18 à 24 heures de trajet selon la correspondance et la durée de l'escale.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Le Bhoutan ne change pas d'heure. Comptez quatre heures d'avance sur la France en été, et cinq heures en hiver.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Le ngultrum (BTN), indexé sur la roupie indienne, qui circule également dans le pays. Les cartes étrangères sont acceptées dans les hôtels de Paro et de Thimphu, plus rarement ailleurs : il reste utile de conserver des espèces.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Le visa est obligatoire pour les ressortissants français. Il se demande en ligne avant le départ, sur le portail officiel bhoutanais, et s'obtient avec la confirmation du séjour. Le passeport doit être valable au moins six mois au-delà du séjour prévu. S'y ajoute la redevance de développement durable, due pour chaque nuit passée dans le pays, dont le montant en vigueur figure sur votre devis.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Depuis la France, aucune vaccination spécifique n'est systématiquement exigée. L'Institut Pasteur recommande d'être à jour du calendrier vaccinal et conseille l'hépatite A. La typhoïde et la rage se discutent ensuite selon la durée et les conditions du séjour.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "Les saisons favorables vont de mars à mai et d'octobre à novembre. Nous privilégions le printemps pour les rhododendrons en fleur et les grands festivals, et l'automne pour la clarté de l'air sur l'Himalaya. La mousson occupe l'été, et l'hiver reste lumineux dans les basses vallées.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "Le dzongkha est la langue officielle, aux côtés de nombreuses langues régionales, dont le sharchop dans l'est et le népali dans le sud. L'anglais est la langue d'enseignement et se parle très largement, y compris dans les villages.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Un climat de montagne, très différent d'une vallée à l'autre. Doux et sec à Punakha, plus frais à Paro et Thimphu, franchement froid la nuit à Phobjikha en hiver. Les cols peuvent être enneigés de décembre à février.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Bhoutan. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/bhoutan/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Itinéraire sur mesure au Bhoutan entre Paro, Punakha, Phobjikha et Bumthang",
            "Adresses confidentielles au Bhoutan : maisons de famille et monastères fermés à la visite",
            "Hébergements au Bhoutan : lodges de vallée et ferme rénovée face au monastère de Gangteng",
            "Conciergerie privée 24/7 pour un voyage au Bhoutan",
            "Expériences immersives au Bhoutan : le Nid du Tigre au petit jour et les grues de Phobjikha",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables au Bhoutan",
      heading: "D'une vallée à l'autre, du dzong de Punakha aux grues de Phobjikha",
      description:
        "Six étapes que la route relie sans jamais donner l'impression de courir, avec le temps de s'arrêter dans les monastères et les fermes.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      initialZoom: 8,
      places: [
        {
          title: "Paro, la vallée d'arrivée",
          description:
            "Ses champs de riz rouge, ses fermes aux fenêtres peintes et son dzong blanc au-dessus de la rivière. C'est d'ici que part le sentier du Nid du Tigre, et le monastère se devine déjà depuis la route.",
          image: {
            src: "/destination/bhoutan/map-paro.png",
            alt: "Vallée de Paro, son dzong et ses rizières vus depuis les hauteurs",
          },
          // TODO: verify coords
          coordinates: { lat: 27.4287, lng: 89.4164 },
        },
        {
          title: "Thimphu, la capitale",
          description:
            "Elle tient tout entière dans une vallée et garde des allures de ville de province. On y croise des moines devant les cafés, un agent qui règle la circulation à la main, et le grand Bouddha doré qui veille depuis la colline.",
          image: {
            src: "/destination/bhoutan/map-thimphu.png",
            alt: "Grand Bouddha doré dominant la vallée de Thimphu au Bhoutan",
          },
          // TODO: verify coords
          coordinates: { lat: 27.4728, lng: 89.639 },
        },
        {
          title: "Punakha, l'ancienne capitale d'hiver",
          description:
            "Plus basse et plus douce, elle laisse pousser les orangers au bord de l'eau. Sa forteresse se tient entre deux rivières et se couvre de jacarandas violets au printemps.",
          image: {
            src: "/destination/bhoutan/map-punakha.png",
            alt: "Dzong de Punakha et ses jacarandas au bord de la rivière Mo Chhu",
          },
          // TODO: verify coords
          coordinates: { lat: 27.6206, lng: 89.8676 },
        },
        {
          title: "Phobjikha, la vallée des grues",
          description:
            "Une large vallée de tourbières où les grues à cou noir viennent passer l'hiver. Les lignes électriques y ont été enterrées pour ne pas les gêner, et le monastère de Gangteng regarde le marais depuis sa colline.",
          image: {
            src: "/destination/bhoutan/map-phobjikha.png",
            alt: "Grues à cou noir dans la tourbière de la vallée de Phobjikha au Bhoutan",
          },
          // TODO: verify coords
          coordinates: { lat: 27.4667, lng: 90.1667 },
        },
        {
          title: "Bumthang, le berceau religieux",
          description:
            "Quatre vallées et les temples les plus anciens du royaume, où l'on vient encore prier plutôt que visiter. On y mange le sarrasin sous toutes ses formes et l'on y boit l'ara au coin du feu.",
          image: {
            src: "/destination/bhoutan/map-bumthang.png",
            alt: "Temple de Kurjey Lhakhang dans la vallée de Bumthang au Bhoutan",
          },
          // TODO: verify coords
          coordinates: { lat: 27.55, lng: 90.75 },
        },
        {
          title: "Haa et le col de Chele La",
          description:
            "Une vallée longtemps restée fermée aux voyageurs, que l'on rejoint par le plus haut col carrossable du pays. De là-haut, les sommets de l'Himalaya se découvrent d'un coup, drapeaux de prière au premier plan.",
          image: {
            src: "/destination/bhoutan/map-haa.png",
            alt: "Drapeaux de prière au col de Chele La face aux sommets de l'Himalaya bhoutanais",
          },
          // TODO: verify coords
          coordinates: { lat: 27.3833, lng: 89.2833 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage au Bhoutan",
      description:
        "Huit conseils de terrain, pour choisir la bonne saison, arriver reposé et comprendre pourquoi nous inscrivons telle étape à votre itinéraire.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          title: "Quand partir",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le printemps pour les fleurs et les festivals, l'automne pour la clarté de l'air",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Deux saisons se partagent l&apos;année. Au printemps, les
                rhododendrons couvrent les cols et les grands festivals
                rassemblent les vallées autour des danses masquées. En automne,
                l&apos;atmosphère se dégage et l&apos;Himalaya se découvre depuis
                les hauteurs de Haa, au moment où les grues reviennent à
                Phobjikha.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                L&apos;été apporte la mousson, mais aussi le vert des rizières de
                Punakha et un pays presque vide de voyageurs. L&apos;hiver reste
                lumineux et sec dans les basses vallées, même si les hauts cols
                peuvent fermer quelques jours. Les dates des festivals suivent le
                calendrier lunaire et changent chaque année : nous construisons
                l&apos;itinéraire autour de la date, jamais l&apos;inverse.
              </p>
            </div>
          ),
        },
        {
          title: "La montée au Nid du Tigre",
          cardEyebrow: "Terrain",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Une belle matinée de marche en forêt, à commencer avant le lever du jour",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le sentier grimpe dans une forêt de pins et de drapeaux de
                prière, puis longe la paroi jusqu&apos;au monastère. Comptez une
                bonne matinée aller et retour, sur un chemin de terre que les
                mules empruntent aussi. La dernière partie descend un escalier
                avant de remonter vers l&apos;entrée.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Nous partons avant le jour, quand la vallée est encore dans
                l&apos;ombre et le chemin désert. Les sacs et les appareils photo
                restent en consigne à l&apos;entrée du monastère. Pour ceux qui
                préfèrent ne pas monter jusqu&apos;en haut, des chevaux conduisent
                à la cafétéria de mi-parcours, d&apos;où la vue sur le monastère
                est déjà celle des photographies.
              </p>
            </div>
          ),
        },
        {
          title: "L'arrivée à Paro",
          cardEyebrow: "Transport",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "L'un des atterrissages les plus spectaculaires du monde, entre les montagnes",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L&apos;aéroport de Paro se niche au fond d&apos;une vallée
                bordée de hauts sommets. L&apos;approche se fait à vue et de jour
                seulement, ce qui explique que seuls Drukair et Bhutan Airlines la
                pratiquent. Les derniers virages passent au-dessus des fermes et
                des vergers : côté gauche depuis Katmandou, on longe la ligne de
                l&apos;Himalaya.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Nous prévoyons une nuit d&apos;étape à Delhi, Katmandou ou
                Bangkok avant Paro, et une nuit tampon au retour : le temps peut
                décaler un vol d&apos;une journée, et l&apos;on arrive ainsi
                reposé pour la première vallée. Les vols intérieurs vers le
                Bumthang existent, mais nous gardons la route comme référence.
              </p>
            </div>
          ),
        },
        {
          title: "Entrer dans un dzong",
          cardEyebrow: "Usages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Ces forteresses abritent une administration et une communauté monastique en activité",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Un dzong réunit sous le même toit les bureaux du district et un
                collège de moines. Les Bhoutanais y viennent en tenue nationale,
                le gho pour les hommes, la kira pour les femmes, avec
                l&apos;écharpe posée sur l&apos;épaule. On y couvre épaules et
                genoux, on retire chapeau et lunettes de soleil, et l&apos;on
                tourne les temples par la gauche.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                L&apos;intérieur des temples ne se photographie pas, et l&apos;on
                demande aux moines avant de les prendre en photo. Les jours de
                festival, la cour se remplit dès l&apos;aube : nous plaçons nos
                voyageurs auprès d&apos;une famille du village plutôt que dans
                l&apos;espace réservé aux visiteurs, et l&apos;expérience change
                du tout au tout.
              </p>
            </div>
          ),
        },
        {
          title: "L'altitude, sans y penser",
          cardEyebrow: "Santé",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les vallées restent accessibles, ce sont les cols qui demandent un peu d'habitude",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                On dort dans les vallées, à des altitudes qui se supportent bien,
                de la douceur de Punakha à la fraîcheur de Phobjikha. Ce sont les
                cols franchis en voiture qui montent haut, sur des routes de
                montagne qui tournent beaucoup.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Deux nuits à Paro ou Thimphu avant la première journée de marche
                suffisent à s&apos;acclimater sans y penser. Le mal des
                transports gêne souvent davantage que l&apos;altitude : les places
                à l&apos;avant se prennent sans discuter. Les structures
                médicales sont bonnes à Thimphu et plus simples ailleurs ; nous
                repérons le recours le plus proche à chaque étape, et
                l&apos;assurance rapatriement fait partie du dossier.
              </p>
            </div>
          ),
        },
        {
          title: "Dans ma valise",
          cardEyebrow: "Bagages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "De quoi passer d'un midi ensoleillé à une nuit de montagne dans la même journée",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L&apos;écart entre le soleil de midi à Punakha et la nuit à
                Phobjikha surprend toujours. Les lodges chauffent au bois, le
                poêle s&apos;allume en fin de journée, et le soleil de montagne
                brûle même quand l&apos;air reste frais.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Trois épaisseurs plutôt qu&apos;un manteau : une sous-couche, une
                polaire et une veste imperméable. Des chaussures de marche déjà
                faites pour le Nid du Tigre, une tenue couvrante pour les dzongs,
                de la crème solaire et une lampe pour les intérieurs de temples.
                Les drones demandent une autorisation préalable, mieux vaut les
                laisser à la maison.
              </p>
            </div>
          ),
        },
        {
          title: "À table",
          cardEyebrow: "Table",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Ici, le piment n'est pas un condiment mais le légume du plat",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L&apos;ema datshi, le plat national, marie les piments verts au
                fromage de vache fermenté et se mange avec le riz rouge de la
                vallée de Paro. Le thé au beurre salé accompagne les visites, et
                l&apos;ara, l&apos;alcool de riz ou de sarrasin distillé à la
                maison, se sert tiède dans le Bumthang.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Demander une version douce est tout à fait admis, et le plat
                reste relevé. Les lodges cuisinent volontiers une carte
                internationale, ce qui fait passer à côté de l&apos;essentiel :
                nous organisons toujours un repas dans une ferme, où la cuisine se
                fait au feu de bois et où le fromage vient de la vache de la
                maison.
              </p>
            </div>
          ),
        },
        {
          title: "Ce que le pays demande aux voyageurs",
          cardEyebrow: "Budget",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Une redevance par nuit, qui explique le calme des monastères et des vallées",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le Bhoutan demande à chaque voyageur une redevance de
                développement durable pour chaque nuit passée dans le pays,
                indépendante du prix de l&apos;hébergement. Elle finance la santé,
                l&apos;école et la reforestation, et elle explique pourquoi les
                sentiers et les monastères restent aussi calmes. Un guide et un
                véhicule accompagnent obligatoirement le séjour.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Cette part demandée par le royaume s&apos;ajoute à tout
                itinéraire, quel que soit le niveau d&apos;hébergement choisi. Des
                réductions existent pour les enfants. Nous la présentons
                séparément dans le devis, pour que la discussion porte sur ce qui
                reste ouvert : les vallées, les nuits, les accès que nous
                négocions pour vous.
              </p>
            </div>
          ),
        },
      ],
    },

    {
      type: "spotsList",
      eyebrow: "Récits de voyage",
      heading: "Trois scènes d'un voyage au Bhoutan",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      spots: [
        {
          title: "La montée de Taktsang, avant le jour",
          description:
            "Le départ se fait de nuit avec un moine qui connaît chaque pierre du sentier. En haut, la salle de méditation s'ouvre pour vous seuls, éclairée aux lampes à beurre.",
        },
        {
          title: "Une bénédiction à Punakha",
          description:
            "Portes refermées, un lama prend le temps d'expliquer chaque geste. Ce n'est pas une visite : on vous laisse prendre part au moment.",
        },
        {
          title: "La vallée de Phobjikha au petit matin",
          description:
            "Les grues quittent le marais et il n'y a personne d'autre autour. Deux semaines où tout est réglé avant même qu'on y pense.",
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
          question: "Quelle est la meilleure période pour partir au Bhoutan ?",
          answer:
            "Deux saisons se détachent. Le printemps, de mars à mai, couvre les vallées de rhododendrons en fleur et rassemble les grands festivals, dont le tsechu de Paro. L'automne, d'octobre à novembre, offre l'air le plus clair de l'année sur l'Himalaya et le retour des grues à cou noir dans la vallée de Phobjikha. L'été apporte la mousson et le vert des rizières, l'hiver reste lumineux et sec dans les basses vallées, même si les hauts cols peuvent être fermés quelques jours.",
        },
        {
          question: "Faut-il un visa pour aller au Bhoutan ?",
          answer:
            "Oui, le visa est obligatoire pour les ressortissants français. Il se demande en ligne avant le départ, sur le portail officiel bhoutanais, et s'obtient avec la confirmation du séjour, guide et véhicule inclus : nous nous en chargeons pour vous. Le passeport doit être valable au moins six mois au-delà du séjour prévu. S'y ajoute la redevance de développement durable, due pour chaque nuit passée dans le pays, dont le montant en vigueur figure sur votre devis.",
        },
        {
          question: "Combien coûte un voyage au Bhoutan ?",
          answer:
            "Le budget se compose de deux parts. Une part demandée par le royaume : la redevance de développement durable pour chaque nuit, ainsi que le guide et le véhicule, obligatoires pour circuler. Une part variable : les hébergements, les éventuels vols intérieurs et les accès que nous négocions dans les monastères. Cette particularité explique qu'un séjour au Bhoutan se compare mal à une autre destination d'Asie. Nous détaillons les deux séparément avant toute réservation, sans engagement.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris ?",
          answer:
            "Paro se rejoint avec une correspondance en Asie, le plus souvent par Delhi, Katmandou, Bangkok ou Singapour, sur Drukair ou Bhutan Airlines. Comptez environ 18 à 24 heures de trajet selon la correspondance et la durée de l'escale. L'approche de Paro se fait à vue et de jour uniquement : nous prévoyons une nuit d'étape à l'aller comme au retour, pour arriver reposé et à l'abri d'un décalage de vol.",
        },
        {
          question: "Que faire au Bhoutan en 10 jours ?",
          answer:
            "Dix jours suffisent à traverser quatre vallées sans courir. Paro d'abord, pour s'acclimater et monter au Nid du Tigre. Thimphu ensuite, pour l'école des treize arts et le grand Bouddha qui veille sur la vallée. Punakha pour sa forteresse entre les rivières, ses rizières et ses orangers. Phobjikha enfin, pour la tourbière et le monastère de Gangteng. Trois jours de plus ouvrent le Bumthang et ses temples fondateurs, ou la vallée de Haa par le col de Chele La.",
        },
        {
          question: "Le Bhoutan est-il accessible sans être un grand marcheur ?",
          answer:
            "Oui. Les étapes se font en voiture avec chauffeur et guide, et la plupart des monastères, fermes et ateliers d'artisans se visitent sans effort particulier. Seule la montée au Nid du Tigre demande une bonne condition physique ; des chevaux conduisent jusqu'à la cafétéria de mi-parcours, d'où la vue sur le monastère est déjà celle des photographies. Nous adaptons le rythme et les étapes à chacun, y compris avec des grands-parents et de jeunes enfants.",
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
        "D'autres pays où les temples vivants, les grandes civilisations et la nature se répondent dans un même voyage, à composer sur mesure avec votre travel designer.",
      slugs: ["sri-lanka", "cambodge", "kenya"],
    },
  ],
};
