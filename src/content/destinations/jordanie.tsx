import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "jordanie",
  name: "Jordanie",
  placeKind: "country",
  country: "Jordanie",
  genitive: "de la Jordanie",
  continentSlug: "proche-orient",
  blurb: "Pétra, Wadi Rum, mer Morte",
  keywords: [
    "jordanie",
    "petra",
    "wadi rum",
    "mer morte",
    "amman",
    "jerash",
    "aqaba",
    "nabateens",
  ],
  metaTitle: "Jordanie : Voyage sur mesure",
  metaDescription:
    "Voyage en Jordanie sur mesure : Pétra, désert du Wadi Rum, mer Morte. Itinéraire écrit par votre travel designer Exuma, conciergerie privée 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe en Jordanie",
      heading: "Une faille dans la montagne, et Pétra derrière",
      description:
        "Le matin, la roche de Pétra passe du brun au rose. Plus au sud, le sable du Wadi Rum garde la chaleur de la veille et les nuits y sont froides. À l'ouest, la mer Morte ne fait aucun bruit. La Jordanie se traverse lentement, même si elle est petite.",
      images: [
        {
          src: "/destination/jordanie/hero-1.webp",
          alt: "Façade du Khazneh à Pétra au sortir du Siq lors d'un voyage en Jordanie",
        },
        {
          src: "/destination/jordanie/hero-2.webp",
          alt: "Massifs de grès et sable rouge du désert du Wadi Rum en fin de journée",
        },
        {
          src: "/destination/jordanie/hero-3.webp",
          alt: "Dépôts de sel et eau immobile sur la rive jordanienne de la mer Morte",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir en Jordanie ?",
      heading:
        "Stéphane, spécialiste de la Jordanie, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "stephane",
        // TODO: verify quote attribution
        quote:
          "On me demande souvent si une journée suffit pour Pétra. Elle ne suffit pas, et je le dis avant même de parler du reste du voyage. Le site est immense, et la plupart des visiteurs s'arrêtent au Khazneh alors que les vallées derrière sont vides. Je réserve donc toujours deux nuits à Wadi Musa, et j'entre le second matin par le chemin de Little Petra, celui qui arrive au Monastère par le haut. Mon autre consigne concerne le désert : une nuit au campement ne suffit pas non plus, parce que la première se passe à s'habituer au froid et au silence. C'est la seconde nuit dont les voyageurs me reparlent.",
        role: "Travel Designer · Jordanie",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte de la Jordanie",
      heading: "De la pierre, du sable et une mer où l'on flotte",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      columns: [
        "Un voyage en Jordanie commence presque toujours par Amman. La capitale s'étale sur une série de collines et elle est plus discrète qu'on ne l'imagine. Les maisons sont bâties en calcaire clair, ce qui donne à la ville une teinte uniforme, presque beige. Le théâtre romain et la citadelle tiennent en plein centre, à quelques minutes des cafés de Jabal Amman.",
        "Au sud d'Amman, la route des Rois descend vers Pétra en suivant la ligne des hauts plateaux. C'est l'ancienne voie caravanière. Elle passe par les mosaïques de Madaba, par le mont Nébo qui regarde la vallée du Jourdain, puis par la forteresse croisée de Kerak. L'autoroute du désert va beaucoup plus vite. La route des Rois demande la journée entière, et c'est celle qui a du sens.",
        "Après Pétra, le paysage se vide. Le Wadi Rum est un désert de grès et de granit, où des massifs isolés sortent du sable comme des îles. Les Bédouins de la tribu Zalabieh y vivent et gèrent la zone protégée. Plus au nord, la mer Morte occupe le point le plus bas de la surface de la Terre. On y flotte sans effort, grâce à la concentration en sel.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/jordanie/full-image.webp",
        alt: "Massifs de grès du Wadi Rum au coucher du soleil lors d'un voyage en Jordanie",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Jordanie : la pierre et le désert",
      heading: "La faille se traverse à pied, dans l'ombre",
      theme: "light",
      paragraphs: [
        "L'entrée de Pétra ne se voit pas depuis la vallée. Il faut d'abord descendre dans le Siq, une faille étroite que l'eau a ouverte dans la montagne. Les parois montent très haut et se rapprochent par endroits, jusqu'à ne laisser qu'une bande de ciel. L'air y reste frais même en plein été. Sur la roche, on distingue encore les canaux que les Nabatéens avaient taillés pour conduire l'eau des crues vers la cité.",
        "Puis la faille débouche d'un seul coup sur le Khazneh, la façade sculptée à même la falaise. Elle prend sa couleur la plus forte en fin de matinée, quand le soleil finit par entrer dans le cirque.",
      ],
      images: [
        {
          src: "/destination/jordanie/split-1.webp",
          alt: "Parois resserrées du Siq de Pétra éclairées par une bande de lumière",
        },
        {
          src: "/destination/jordanie/split-2.webp",
          alt: "Canaux d'eau nabatéens taillés dans la paroi du Siq à Pétra, Jordanie",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/jordanie/xp-petra-by-night-1.webp",
          alt: "Bougies posées au sol éclairant le Siq de Pétra pendant Petra by Night",
        },
        right: {
          src: "/destination/jordanie/xp-petra-by-night-2.webp",
          alt: "Esplanade du Khazneh à Pétra couverte de bougies à la nuit tombée",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Le Siq éclairé à la bougie, et rien d'autre",
        columns: [
          "Le lundi, le mercredi et le jeudi, le site rouvre après la fermeture. Le Siq est alors éclairé uniquement par des bougies posées au sol, protégées dans des sacs de papier. On descend la faille sans lampe, en suivant la ligne de flammes jusqu'au bout. Le silence est demandé à l'entrée, et il est plutôt bien respecté.",
          "L'esplanade du Khazneh est couverte de bougies elle aussi. Des musiciens bédouins jouent du rababa et de la flûte, puis quelqu'un raconte l'histoire du site en quelques minutes. La façade reste dans la pénombre presque tout du long, avant d'être éclairée à la fin. C'est le seul moment de la journée où Pétra se regarde sans foule.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Jordanie",
      heading: "Le désert, les étoiles et la mer Rouge",
      description:
        "Deux heures de 4x4 entre les massifs du Wadi Rum, une nuit sous un ciel sans lumière parasite, et les récifs du golfe d'Aqaba.",
      slugs: [
        "wadi-rum-4x4-campement",
        "observation-etoiles-wadi-rum",
        "plongee-mer-rouge-aqaba",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Où dormir en Jordanie",
      description:
        "Une rive privée sur la mer Morte, une adresse à quelques minutes à pied de l'entrée de Pétra, et une colline d'Amman au-dessus de la ville.",
      slugs: [
        "kempinski-ishtar-dead-sea",
        "movenpick-resort-petra",
        "four-seasons-amman",
      ],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage en Jordanie",
      description:
        "Vol, décalage, monnaie, formalités et meilleure saison : l'essentiel pour préparer sereinement un séjour sur mesure en Jordanie.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Environ 5 heures en vol direct depuis Paris vers Amman (AMM). Royal Jordanian est la seule compagnie à assurer le sans escale, au départ de Roissy. Avec escale, on passe par Istanbul, Doha ou Dubaï.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Quand il est 16 h à Paris, il est 17 h à Amman en été et 18 h en hiver. La Jordanie est à UTC+3 toute l'année et ne change plus d'heure depuis octobre 2022.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Dinar jordanien (JOD), une monnaie de forte valeur : 1 dinar vaut environ 1,22 €. Les cartes passent partout à Amman et dans les hôtels. Gardez des espèces pour les souks, les taxis et les villages.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Un visa est nécessaire. Le Jordan Pass, acheté en ligne avant le départ, dispense des frais de visa et donne accès à 43 sites dont Pétra, à condition de passer au moins trois nuits dans le pays. Passeport valable plus de six mois après l'entrée.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin obligatoire. Calendrier vaccinal français à jour, hépatite A et typhoïde recommandées selon la durée et les conditions du séjour. Les conditions sanitaires du pays sont bonnes.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "De mars à mai et de septembre à novembre, avec des journées entre 15 et 25°C sur la plus grande partie du pays. Le printemps verdit les plateaux du nord, l'automne donne les nuits les plus douces dans le désert.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "L'arabe est la langue officielle. L'anglais est très répandu à Amman et sur les sites. Nous travaillons avec des guides francophones sur l'ensemble du parcours.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Amman et Pétra, en altitude, connaissent des hivers frais et pluvieux, avec de la neige certaines années. La mer Morte dépasse 40°C en été et le Wadi Rum monte jusqu'à 45°C. Les nuits du désert restent froides jusqu'au printemps.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Jordanie. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/jordanie/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.webp`,
          alt: [
            "Itinéraire sur mesure en Jordanie entre Amman, Pétra et le Wadi Rum",
            "Adresses confidentielles en Jordanie : maisons de pierre et campements hors piste",
            "Hébergements en Jordanie : rive de la mer Morte et campement privé dans le Wadi Rum",
            "Conciergerie privée 24/7 pour un voyage en Jordanie",
            "Expériences immersives en Jordanie : Petra by Night et nuits bédouines",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les grandes étapes en Jordanie",
      heading: "Du nord romain au golfe d'Aqaba",
      description:
        "Six étapes reliées par une seule route, du nord au sud. Les distances sont courtes, ce qui laisse le temps de s'arrêter.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      initialZoom: 7,
      places: [
        {
          title: "Amman, la capitale beige",
          description:
            "La ville s'étend sur une série de collines et reste bâtie en calcaire clair. La citadelle et le théâtre romain occupent le centre. En fin de journée, les cafés de Rainbow Street et de Jabal Amman se remplissent.",
          image: {
            src: "/destination/jordanie/map-amman.webp",
            alt: "Colonnes du temple d'Hercule sur la citadelle d'Amman au-dessus de la ville, Jordanie",
          },
          // TODO: verify coords
          coordinates: { lat: 31.9539, lng: 35.9106 },
        },
        {
          title: "Jerash, la ville romaine",
          description:
            "C'est l'une des cités romaines les mieux conservées du Proche-Orient. La grande rue à colonnades traverse tout le site, du forum ovale à l'arc d'Hadrien. On y marche une bonne partie de la matinée sans revenir sur ses pas.",
          image: {
            src: "/destination/jordanie/map-jerash.webp",
            alt: "Rue à colonnades et forum ovale du site romain de Jerash, Jordanie",
          },
          // TODO: verify coords
          coordinates: { lat: 32.2808, lng: 35.8911 },
        },
        {
          title: "La mer Morte, le point le plus bas",
          description:
            "La rive jordanienne descend en terrasses jusqu'à l'eau. La concentration en sel est telle qu'on flotte sans nager. Sur le bord, le sel forme des croûtes blanches et la boue grise se ramasse à la main.",
          image: {
            src: "/destination/jordanie/map-mer-morte.webp",
            alt: "Formations de sel blanc sur la rive jordanienne de la mer Morte au crépuscule",
          },
          // TODO: verify coords
          coordinates: { lat: 31.72, lng: 35.585 },
        },
        {
          title: "Pétra, la cité nabatéenne",
          description:
            "On entre par le Siq, une faille de plus d'un kilomètre, qui débouche sur le Khazneh. Le site continue derrière sur plusieurs vallées : le théâtre, les tombeaux royaux, puis l'escalier qui monte au Monastère.",
          image: {
            src: "/destination/jordanie/map-petra.webp",
            alt: "Façade du Monastère taillée dans la falaise sur les hauteurs de Pétra, Jordanie",
          },
          // TODO: verify coords
          coordinates: { lat: 30.3285, lng: 35.4444 },
        },
        {
          title: "Wadi Rum, le désert de grès",
          description:
            "Des massifs de grès et de granit sortent du sable rouge, séparés par de larges couloirs plats. La zone est protégée et gérée par les Bédouins Zalabieh. Après le coucher du soleil, la température tombe vite.",
          image: {
            src: "/destination/jordanie/map-wadi-rum.webp",
            alt: "Couloir de sable rouge entre deux massifs de grès du Wadi Rum, Jordanie",
          },
          // TODO: verify coords
          coordinates: { lat: 29.5833, lng: 35.42 },
        },
        {
          title: "Aqaba, la fenêtre sur la mer Rouge",
          description:
            "C'est le seul accès du pays à la mer. Le récif commence à quelques mètres du bord, ce qui est rare. L'eau reste chaude toute l'année et la visibilité est meilleure en automne.",
          image: {
            src: "/destination/jordanie/map-aqaba.webp",
            alt: "Récif corallien et eau claire du golfe d'Aqaba sur la côte jordanienne",
          },
          // TODO: verify coords
          coordinates: { lat: 29.5321, lng: 35.0063 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage en Jordanie",
      description:
        "Neuf observations de terrain qui ne se trouvent pas dans un guide. Pour calibrer les attentes, choisir la bonne fenêtre ou comprendre pourquoi nous inscrivons telle étape à l'itinéraire.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          title: "Pétra demande deux jours",
          cardEyebrow: "Site",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La plupart des visiteurs s'arrêtent au Khazneh. Le site continue sur plusieurs vallées derrière",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Pétra n&apos;est pas un monument, c&apos;est une ville. Après le
                Khazneh, le chemin continue vers le théâtre, les tombeaux royaux
                et la grande rue à colonnades. Un escalier taillé dans la roche
                monte ensuite jusqu&apos;au Monastère, le Deir, dont la façade
                est plus grande encore que celle du Khazneh.
              </p>
              <p>
                En une seule journée, on fait l&apos;aller-retour jusqu&apos;au
                Khazneh et on rentre fatigué sans avoir vu le reste. Deux jours
                permettent de séparer le fond de la vallée et les hauteurs, et
                de garder les montées pour le matin.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous prévoyons deux nuits à Wadi Musa et faisons entrer le
                second matin par le chemin de Little Petra, qui arrive au
                Monastère par le haut. La descente se fait alors dans le sens de
                la lumière, et on croise très peu de monde.
              </p>
            </div>
          ),
        },
        {
          title: "Petra by Night ne se joue pas tous les soirs",
          cardEyebrow: "Site",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La soirée aux bougies n'a lieu que trois fois par semaine, et elle cale toute l'étape",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le site rouvre le lundi, le mercredi et le jeudi après la
                fermeture, et le Siq est alors éclairé uniquement par des
                bougies, environ mille cinq cents disposées au sol. Le départ se
                fait du centre des visiteurs à 20h30 et le retour vers 22h30.
              </p>
              <p>
                L&apos;accès se réserve séparément et n&apos;est pas compris
                dans le Jordan Pass : il faut détenir en plus un billet
                d&apos;entrée de journée ou le Jordan Pass lui-même pour pouvoir
                l&apos;acheter.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous positionnons l&apos;étape de Pétra sur les bons jours de la
                semaine avant même de réserver les hébergements. C&apos;est la
                contrainte qui structure tout l&apos;itinéraire, pas
                l&apos;inverse.
              </p>
            </div>
          ),
        },
        {
          title: "Le Jordan Pass s'achète avant de partir",
          cardEyebrow: "Formalités",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Acheté en ligne avant le départ, il dispense des frais de visa. Acheté sur place, il ne les dispense plus",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le Jordan Pass est un billet unique qui couvre l&apos;entrée de
                Pétra et de 43 sites au total, dont Jerash, le Wadi Rum et la
                citadelle d&apos;Amman. Son intérêt principal est ailleurs : il
                dispense des frais de visa à l&apos;arrivée.
              </p>
              <p>
                Deux conditions à connaître. Il doit être acheté en ligne avant
                le départ, et le séjour doit compter au moins trois nuits
                consécutives en Jordanie. En dessous, la dispense de visa ne
                s&apos;applique pas.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous vérifions la durée du séjour et transmettons le lien
                officiel au moment de la constitution du dossier. Les règles
                d&apos;entrée évoluent régulièrement dans la région.
              </p>
            </div>
          ),
        },
        {
          title: "La route des Rois, pas l'autoroute",
          cardEyebrow: "Logistique",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Deux routes relient Amman à Pétra. Celle qui va vite ne traverse rien",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L&apos;autoroute du désert file droit vers le sud et permet de
                rejoindre Pétra en une demi-journée. Elle ne passe à côté
                d&apos;aucun site.
              </p>
              <p>
                La route des Rois suit l&apos;ancienne voie caravanière sur la
                ligne des plateaux. Elle dessert Madaba et ses mosaïques
                byzantines, le mont Nébo qui donne sur la vallée du Jourdain, la
                réserve de Dana et la forteresse croisée de Kerak. Elle demande
                la journée entière, avec des arrêts.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous plaçons la route des Rois à la descente vers Pétra, et
                l&apos;autoroute au retour si le programme est serré. Le trajet
                devient une étape et non un transfert.
              </p>
            </div>
          ),
        },
        {
          title: "Se baigner dans la mer Morte",
          cardEyebrow: "Santé",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "L'eau est très concentrée en sel. On ne se rase pas la veille et on ne met jamais la tête sous l'eau",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La concentration en sel est très supérieure à celle des océans.
                Le corps flotte sans effort, mais l&apos;eau irrite la moindre
                coupure. On évite de se raser dans les vingt-quatre à
                quarante-huit heures qui précèdent, et on garde la tête hors de
                l&apos;eau : le contact avec les yeux brûle et trouble la vue un
                moment.
              </p>
              <p>
                Une baignade de quinze à vingt minutes suffit, suivie d&apos;un
                rinçage à l&apos;eau douce. Des chaussures d&apos;eau protègent
                des cristaux de sel, coupants sur le fond. La boue grise que
                l&apos;on trouve sur la rive s&apos;applique avant, puis sèche
                au soleil.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Le niveau de la mer baisse chaque année, et la rive recule. Les
                hôtels installent des navettes ou des escaliers pour rejoindre
                l&apos;eau.
              </p>
            </div>
          ),
        },
        {
          title: "Les nuits du Wadi Rum sont froides",
          cardEyebrow: "Valise",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La température tombe dès que le soleil passe derrière les massifs, même au printemps",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le sable restitue la chaleur de la journée, puis le désert se
                refroidit vite. En mars et en novembre, les nuits sous tente
                descendent nettement. En hiver, le Wadi Rum compte même quelques
                jours de neige chaque année. Les campements fournissent des
                couvertures, rarement plus.
              </p>
              <p>
                Prévoir une polaire ou une doudoune légère, un pantalon long et
                des chaussures fermées pour marcher dans le sable. La journée
                demande l&apos;inverse : lin, chèche, lunettes et crème solaire.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Les campements de la zone protégée n&apos;ont pas toujours
                l&apos;électricité en continu. Une lampe frontale reste utile
                pour la nuit.
              </p>
            </div>
          ),
        },
        {
          title: "Printemps et automne, pas l'été",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "L'été dépasse 40°C dans le désert et à la mer Morte. La bonne fenêtre est courte",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                De juin à août, la chaleur rend Pétra et le Wadi Rum difficiles
                dès le milieu de la matinée. La mer Morte, située très en
                contrebas, est le point le plus chaud du pays.
              </p>
              <p>
                Les deux bonnes fenêtres sont mars à mai et septembre à
                novembre, avec des journées comprises entre 15 et 25°C sur la
                plus grande partie du pays. Au printemps, les plateaux du nord
                verdissent. En automne, les nuits du désert sont plus douces.
              </p>
              <h4 className="font-medium">L&apos;hiver :</h4>
              <p>
                Amman et Pétra sont frais et pluvieux, avec de la neige certaines
                années. Le site de Pétra ferme parfois quelques heures après de
                fortes pluies, à cause du risque de crue dans le Siq.
              </p>
            </div>
          ),
        },
        {
          title: "Se tenir en Jordanie",
          cardEyebrow: "Usages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Épaules et genoux couverts hors des hôtels. Le pays est ouvert, mais discret",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La Jordanie est un pays musulman, plus détendu que ses voisins du
                Golfe mais attaché à la retenue. Dans les villes, les villages et
                sur les sites, épaules et genoux restent couverts, pour les
                hommes comme pour les femmes. Le maillot de bain se limite aux
                piscines, aux plages d&apos;hôtel et à la mer Morte.
              </p>
              <p>
                L&apos;alcool se trouve dans les hôtels et une partie des
                restaurants d&apos;Amman, plus rarement ailleurs. Photographier
                une personne, en particulier une femme, se demande avant.
              </p>
              <h4 className="font-medium">Pendant le ramadan :</h4>
              <p>
                Ne pas manger, boire ni fumer en public pendant la journée. Les
                hôtels servent normalement et les horaires des sites changent.
              </p>
            </div>
          ),
        },
        {
          title: "Ce qu'on mange, et où",
          cardEyebrow: "Table",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le mansaf est le plat national. Il se partage à plusieurs, dans un grand plat commun",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le mansaf associe l&apos;agneau, le riz et une sauce de yaourt
                de brebis séché, le jameed. Il se sert dans un grand plat que
                l&apos;on partage, et il se mange traditionnellement de la main
                droite. C&apos;est le plat des occasions, pas du déjeuner rapide.
              </p>
              <p>
                Le reste du répertoire se prête mieux au quotidien : mezzés,
                falafel du centre d&apos;Amman, maqluba renversée à table, et
                kunafa au fromage pour finir. Dans le désert, le zarb cuit sous
                le sable, dans un four enterré que l&apos;on ouvre devant les
                convives.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous organisons le mansaf chez une famille plutôt qu&apos;au
                restaurant, et nous prévenons du protocole avant le repas.
                {/* TODO: verify la faisabilité du mansaf chez une famille */}
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
            "J'étais persuadé qu'un jour suffisait pour Pétra et j'avais demandé à raccourcir. On m'a expliqué pourquoi, on a gardé les deux nuits, et le second matin on est arrivés au Monastère par le haut sans croiser personne. C'est ce jour-là que j'ai compris la taille du site.",
          image: {
            src: "/destination/jordanie/hero-1.webp",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Jordanie, Pétra et Wadi Rum, 2026", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "La mer Morte, je la voyais comme une attraction pour photos. On s'est retrouvés seuls sur la rive en fin de journée, avec le sel qui craque sous les pieds et les lumières de l'autre côté de l'eau. On y est restés deux nuits au lieu d'une.",
          image: {
            src: "/destination/jordanie/hero-2.webp",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Jordanie, mer Morte et route des Rois, 2026", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Notre chauffeur bédouin du Wadi Rum nous a emmenés chez son frère, à l'écart des campements. Le thé, le pain cuit sur la plaque, et les enfants qui nous montraient où grimper dans le rocher. On est rentrés au campement à la nuit tombée.",
          image: {
            src: "/destination/jordanie/hero-3.webp",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Jordanie, désert et Aqaba, 2026", // TODO: replace with real testimonial
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
          question: "Quelle est la meilleure période pour partir en Jordanie ?",
          answer:
            "De mars à mai et de septembre à novembre. Ce sont les deux fenêtres où Pétra se marche sans souffrir de la chaleur et où les nuits du Wadi Rum restent supportables. L'été, de juin à août, dépasse 40°C dans le désert et à la mer Morte. L'hiver est frais et pluvieux à Amman et à Pétra, avec de la neige certaines années.",
        },
        {
          question: "Combien de temps dure le vol Paris-Amman ?",
          answer:
            "Environ 5 heures en vol direct vers l'aéroport Queen Alia d'Amman. Royal Jordanian est la seule compagnie à assurer la liaison sans escale au départ de Roissy, avec plusieurs départs par semaine. Avec une escale à Istanbul, Doha ou Dubaï, le temps de trajet total monte à 8 ou 10 heures.",
        },
        {
          question: "Faut-il un visa pour aller en Jordanie ?",
          answer:
            "Oui. Le plus simple est le Jordan Pass, acheté en ligne avant le départ : il dispense des frais de visa et donne accès à 43 sites, dont Pétra, Jerash et le Wadi Rum. La dispense ne s'applique qu'aux séjours de trois nuits minimum en Jordanie, et le pass doit avoir été acheté avant l'arrivée. Sans Jordan Pass, le visa se délivre en ligne ou à l'arrivée, à l'aéroport Queen Alia comme aux postes-frontières. Le passeport doit rester valable plus de six mois après l'entrée.",
        },
        {
          question: "Combien de jours faut-il pour visiter Pétra ?",
          answer:
            "Deux jours pleins, avec deux nuits à Wadi Musa. Le premier jour couvre le Siq, le Khazneh, le théâtre et les tombeaux royaux au fond de la vallée. Le second permet de monter au Monastère, idéalement par le chemin de Little Petra qui arrive au sommet par le haut. En une seule journée, on voit la façade la plus connue et on manque l'essentiel du site.",
        },
        {
          question: "Que faire en Jordanie en une semaine ?",
          answer:
            "Une semaine suffit à relier les grands terrains du pays sans se répéter : une nuit à Amman avec la citadelle et Jerash au nord, une nuit à la mer Morte, la descente par la route des Rois avec Madaba et Kerak, deux nuits à Wadi Musa pour Pétra et la soirée Petra by Night, puis deux nuits dans le Wadi Rum. Aqaba et la mer Rouge s'ajoutent facilement en fin de parcours.",
        },
        {
          question: "La Jordanie est-elle adaptée aux familles avec enfants ?",
          answer:
            "Oui. Les distances sont courtes, rarement plus de trois heures de route entre deux étapes. Les activités se partagent bien : la baignade portée par le sel de la mer Morte, le 4x4 dans le Wadi Rum, le masque et tuba à Aqaba. Le seul point d'attention est la marche à Pétra, longue et en partie en montée, qui demande de fractionner sur deux jours avec de jeunes enfants.",
        },
        {
          question: "Quel budget prévoir pour un voyage en Jordanie ?",
          answer:
            "Un voyage en Jordanie sur mesure avec Exuma, incluant les hébergements sélectionnés, un chauffeur-guide francophone sur l'ensemble du parcours et les nuits en campement dans le Wadi Rum, se situe généralement entre 3 500 et 7 000 € par personne pour une semaine, hors vols internationaux, selon la saison et les adresses retenues.",
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
        "D'autres pays du Proche-Orient où la pierre, le désert et l'eau organisent le voyage.",
      // TODO: ajouter "emirats-arabes-unis" ici dès que cette destination existe
      slugs: ["oman", "egypte"],
    },
  ],
};
