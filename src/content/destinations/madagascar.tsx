import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "madagascar",
  name: "Madagascar",
  placeKind: "country",
  country: "Madagascar",
  genitive: "de Madagascar",
  continentSlug: "afrique",
  blurb: "Le Nord, Anjajavy, les baobabs, Andasibe",
  keywords: [
    "madagascar",
    "antsiranana",
    "nosy ankao",
    "mitsio",
    "anjajavy",
    "morondava",
    "andasibe",
    "lemuriens",
  ],
  metaTitle: "Madagascar : Voyage sur mesure",
  metaDescription:
    "Voyage à Madagascar sur mesure : îles du Nord, forêt de baobabs d'Anjajavy, lémuriens d'Andasibe. Itinéraire écrit par votre travel designer Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe à Madagascar",
      heading: "Rien de ce qui vit ici ne vit ailleurs",
      description:
        "Le matin, à Anjajavy, un lémurien blanc traverse la pelouse et s'arrête à trois mètres de la terrasse. La forêt sèche commence juste derrière, et la mer est de l'autre côté. Le soir, l'eau du canal du Mozambique passe au rose, puis au gris.",
      images: [
        {
          src: "/destination/madagascar/hero-1.png",
          alt: "Lémurien sifaka dans la forêt sèche d'Anjajavy, voyage à Madagascar",
        },
        {
          src: "/destination/madagascar/hero-2.png",
          alt: "Les cirques de latérite des Tsingy Rouges dans la vallée de l'Irodo, au nord d'Antsiranana",
        },
        {
          src: "/destination/madagascar/hero-3.png",
          alt: "Plage et barrière de corail de Nosy Ankao, au large du nord-est malgache",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir à Madagascar ?",
      heading: "Carole, spécialiste de Madagascar, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "carole",
        // TODO: verify quote attribution
        quote:
          "Madagascar est le seul pays où je ne reconnais rien de ce que je connais ailleurs. Les arbres, les animaux, la couleur de la terre : tout y est particulier, et cela commence dès le hublot de l'avion. Ma région préférée est le Nord, autour d'Antsiranana, pour ses collines rouges et sa lumière de fin de journée. Mais ce dont mes voyageurs me parlent au retour, ce sont les gens. On leur explique, on prend le temps de répondre, on les invite à s'asseoir. Ils rentrent avec des prénoms en tête.",
        role: "Travel Designer · Madagascar",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte de Madagascar",
      heading: "Le Nord, la côte ouest, puis la forêt de l'Est",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      columns: [
        "Un voyage à Madagascar commence souvent par le Nord. Autour d'Antsiranana, la terre est rouge et l'air sent la poussière chaude. Les Tsingy Rouges, dans la vallée de l'Irodo, en sont la forme la plus spectaculaire. Au large, les îles sont nombreuses et presque vides : Nosy Ankao à l'est, l'archipel des Mitsio à l'ouest. Sur chacune, une plage, quelques villas et personne d'autre.",
        "Plus au sud, sur la côte ouest, Anjajavy occupe une presqu'île que la route n'atteint pas : on y arrive par les airs, sur une piste en terre. Le long de cette côte, les pêcheurs vezo naviguent en pirogue à voile et partent avec le vent du matin. Près de Morondava, l'allée des baobabs aligne une vingtaine de ces arbres de part et d'autre d'une piste de sable. Les Sakalava, le peuple de cette région, les considèrent comme des ancêtres.",
        "L'Est est vert et humide. La forêt tropicale forme un long ruban le long de la côte, et le parc d'Andasibe-Mantadia en protège une partie, à quelques heures de route d'Antananarivo. On y marche entre les fougères arborescentes et les orchidées, qui comptent ici des centaines d'espèces. Au large, l'île de Sainte-Marie garde le cimetière des pirates qui mouillaient dans sa baie au dix-huitième siècle.", // TODO: verify le nombre d'espèces d'orchidées et le cimetière de pirates de Sainte-Marie
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/madagascar/full-image.png",
        alt: "L'allée des baobabs près de Morondava en fin de journée, voyage à Madagascar",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Les hauts plateaux",
      heading: "Le vert des rizières, le rouge des maisons",
      theme: "light",
      paragraphs: [
        "Au centre de l'île, la route monte et l'air se rafraîchit. Les rizières remplissent le fond des vallées, puis grimpent en terrasses jusqu'aux crêtes. Elles changent de couleur avec les mois : vert tendre après la plantation, or à la récolte, et miroir d'eau le reste du temps, où le ciel se reflète en entier. Le matin, la brume reste au creux des vallons jusqu'au premier soleil.",
        "Les maisons ont deux étages, des murs de brique et des balcons de bois ouverts sur la vallée. Elles sont de la même couleur que la terre dont elles sont faites. En fin de journée, la lumière passe à l'orange et les façades la gardent longtemps. On s'arrête pour une nuit à Antsirabe, on pousse la porte des ateliers de pierres dures et de soie sauvage, et l'on repart vers le sud au petit matin.",
      ],
      images: [
        {
          src: "/destination/madagascar/split-1.png",
          alt: "Rizières en terrasses des hauts plateaux malgaches, au sud d'Antananarivo",
        },
        {
          src: "/destination/madagascar/split-2.png",
          alt: "Maisons de brique rouge à balcons de bois sur les hauts plateaux, près d'Antsirabe",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/madagascar/xp-indri-1.png",
          alt: "Famille d'indris dans la forêt humide d'Andasibe, à l'est de Madagascar",
        },
        right: {
          src: "/destination/madagascar/xp-indri-2.png",
          alt: "Pisteur du village guidant des visiteurs dans la forêt d'Andasibe au lever du jour",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "On entend l'indri bien avant de le voir",
        columns: [
          "Le départ se fait à l'aube, depuis le lodge, avec un pisteur du village voisin. La forêt est encore fraîche et l'humidité tient sur les feuilles. On marche vingt minutes, puis le pisteur s'arrête et lève la main : le premier chant vient de commencer, quelque part au-dessus. Il dure une à deux minutes. Plusieurs familles se répondent d'une vallée à l'autre, et le son occupe tout l'espace.",
          "Ensuite, il faut le trouver. L'indri se déplace par bonds, à quinze ou vingt mètres du sol, et son pelage noir et blanc se confond avec les taches de lumière. Les pisteurs connaissent le territoire de chaque groupe et savent où regarder. Quand la famille est là, elle reste : les jeunes jouent, la mère mange des feuilles à portée de vue. Le soir, une seconde marche permet de voir les lémuriens nocturnes et les caméléons endormis sur les branches.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités à Madagascar",
      heading: "Le rouge du Nord, les baobabs, les baleines",
      description:
        "Trois expériences portent le séjour. Au nord d'Antsiranana, les Tsingy Rouges se visitent en fin de journée, quand la latérite prend sa couleur la plus forte. Près de Morondava, l'allée des baobabs se rejoint avant le lever du soleil. À Sainte-Marie, les baleines à bosse passent de juillet à octobre.",
      slugs: ["tsingy-rouges", "allee-baobabs-aube", "baleines-sainte-marie"],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements à Madagascar",
      heading: "Où séjourner à Madagascar",
      description:
        "Trois adresses, trois façons d'être sur place. Une île privée au large du nord-est, avec sa piste d'atterrissage et son bateau. Un îlot de granit des Mitsio, où les cases se partagent deux plages. Une presqu'île de la côte ouest, entre la forêt et la mer, que la route n'atteint pas.",
      slugs: [
        "time-tide-miavana",
        "constance-tsarabanjina",
        "anjajavy-le-lodge",
      ],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage à Madagascar",
      description:
        "Vol, formalités, monnaie et saisons : de quoi caler les dates et la durée d'un voyage à Madagascar.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Environ onze heures sans escale entre Paris et Antananarivo, sur Air France ou Corsair, presque tous les jours.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Quand il est 16 h à Paris en été, il est 17 h à Antananarivo. Deux heures d'écart en hiver : l'île ne change pas d'heure.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "L'ariary, qui ne s'obtient que sur place. On change des euros à l'arrivée, et la carte passe dans les lodges et la capitale.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Visa à l'arrivée à Ivato ou en ligne avant le départ, offert pour les séjours de moins de quinze jours. Passeport valide six mois après l'arrivée.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucune vaccination exigée en venant d'Europe. Un traitement antipaludéen est conseillé, ainsi que les hépatites A et B et la typhoïde.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "D'avril à octobre, en saison sèche. Avril, septembre et octobre sont les plus beaux mois. Les baleines passent à Sainte-Marie de juillet à octobre.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "Le malgache et le français sont les deux langues officielles. Le français s'entend partout, à l'école comme dans les administrations.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Chaud sur les côtes toute l'année. Sur les hauts plateaux, à mille trois cents mètres, l'air reste frais : autour de 15 °C en juillet à Antananarivo.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se croisent sur un dossier Madagascar : les vols intérieurs, les lodges, les pisteurs. Un seul interlocuteur coordonne l'ensemble et reste le vôtre.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/madagascar/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Itinéraire sur mesure à Madagascar, du Nord à la côte ouest et à la forêt de l'Est",
            "Adresses confidentielles à Madagascar : îles privées et lodges de forêt",
            "Hébergements à Madagascar : île privée du Nord, îlot des Mitsio et presqu'île d'Anjajavy",
            "Conciergerie privée 24/7 pour un voyage à Madagascar",
            "Expériences à Madagascar : Tsingy Rouges, allée des baobabs et baleines de Sainte-Marie",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables à Madagascar",
      heading: "Six étapes, du Nord rouge à la forêt de l'Est",
      description:
        "Six étapes qui ne se ressemblent pas : une baie et ses cirques de latérite, deux îles posées au large, une presqu'île de forêt sèche, une allée de baobabs sur la piste de Morondava, et un parc de forêt humide à l'est d'Antananarivo.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      initialZoom: 5,
      places: [
        {
          title: "La baie d'Antsiranana",
          description:
            "L'une des plus vastes rades naturelles du monde. Un rocher en pain de sucre en marque l'entrée, les plages de Ramena ferment la pointe nord, et la vallée de l'Irodo est à une heure de route.", // TODO: verify le classement de la rade d'Antsiranana
          image: {
            src: "/destination/madagascar/map-antsiranana.png",
            alt: "La baie d'Antsiranana et son rocher en pain de sucre, pointe nord de Madagascar",
          },
          // TODO: verify coords
          coordinates: { lat: -12.2787, lng: 49.2917 },
        },
        {
          title: "Nosy Ankao",
          description:
            "Cinq îles au large du nord-est, dont une seule est habitée. Le récif commence à la sortie de la plage, et les tortues vertes viennent pondre sur le sable entre novembre et mars.", // TODO: verify la saison de ponte des tortues à Nosy Ankao
          image: {
            src: "/destination/madagascar/map-nosy-ankao.png",
            alt: "Lagon et plage blanche de l'île de Nosy Ankao, nord-est de Madagascar",
          },
          // TODO: verify coords
          coordinates: { lat: -12.9022, lng: 49.9394 },
        },
        {
          title: "L'archipel des Mitsio",
          description:
            "Une dizaine d'îles de granit au nord de Nosy Be. Tsarabanjina, la plus connue, tient une plage au nord et une autre au sud : on change de côté selon l'heure du jour.",
          image: {
            src: "/destination/madagascar/map-mitsio.png",
            alt: "Rochers de granit et plage de l'archipel des Mitsio, au nord de Nosy Be",
          },
          // TODO: verify coords
          coordinates: { lat: -12.955, lng: 48.5833 },
        },
        {
          title: "Anjajavy",
          description:
            "Une presqu'île de la côte ouest, que l'on rejoint en avion. Des grottes de calcaire s'ouvrent au bord de l'eau à marée basse, et des criques se succèdent jusqu'à la pointe.",
          image: {
            src: "/destination/madagascar/map-anjajavy.png",
            alt: "Forêt sèche et plage de la presqu'île d'Anjajavy, côte ouest de Madagascar",
          },
          // TODO: verify coords
          coordinates: { lat: -15.0167, lng: 47.2333 },
        },
        {
          title: "L'allée des baobabs",
          description:
            "Sur la piste au nord de Morondava, une vingtaine de baobabs bordent la route sur quelques centaines de mètres. On y va au lever ou au coucher du soleil, quand la lumière est basse.",
          image: {
            src: "/destination/madagascar/map-baobabs.png",
            alt: "L'allée des baobabs et sa piste de sable au nord de Morondava",
          },
          // TODO: verify coords
          coordinates: { lat: -20.2505, lng: 44.4183 },
        },
        {
          title: "Andasibe-Mantadia",
          description:
            "À l'est d'Antananarivo, une forêt humide protégée où se croisent onze espèces de lémuriens. Les marches se font au petit matin, quand les familles chantent, et le soir à la lampe.", // TODO: verify le nombre d'espèces de lémuriens à Andasibe-Mantadia
          image: {
            src: "/destination/madagascar/map-andasibe.png",
            alt: "Forêt humide du parc d'Andasibe-Mantadia, à l'est d'Antananarivo",
          },
          // TODO: verify coords
          coordinates: { lat: -18.9333, lng: 48.4167 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage à Madagascar",
      description:
        "Huit repères venus du terrain : les liaisons intérieures, l'heure des lémuriens, les guides de village, la table, la vanille, Antananarivo et les saisons.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          title: "Le Nord se rejoint en avion",
          cardEyebrow: "Terrain",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "L'île est grande et les étapes se relient par les airs : le survol fait partie du voyage",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Madagascar est la cinquième plus grande île du monde. D&apos;un
                bout à l&apos;autre, il y a la distance de Paris à Alger. Les
                étapes se relient donc par avion, le plus souvent depuis
                Antananarivo, et les derniers kilomètres se font en hélicoptère
                ou en bateau.
              </p>
              <p>
                Ces vols sont courts et bas. On voit les rizières en terrasses
                des hauts plateaux, puis la terre rouge, puis les récifs qui
                dessinent le bord des îles. C&apos;est souvent le moment où
                l&apos;on comprend la géographie du pays.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Vols intérieurs et rotations privées réservés en amont, avec les
                transferts calés sur les horaires réels et un accueil à chaque
                escale.
              </p>
            </div>
          ),
        },
        {
          title: "L'heure des lémuriens",
          cardEyebrow: "Faune",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Ils chantent et mangent au lever du jour : c'est le moment où on les voit le mieux",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les lémuriens sont actifs très tôt. À Andasibe, les chants
                commencent entre six et huit heures du matin, puis les groupes
                mangent dans la cime des arbres. À Anjajavy, les sifakas
                traversent les pelouses du lodge au même moment.
              </p>
              <p>
                Une seconde sortie a lieu après le dîner. À la lampe, on observe
                les espèces nocturnes, dont les microcèbes, parmi les plus
                petits primates du monde, et les caméléons qui dorment sur les
                branches basses.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Les petits déjeuners sont servis avant le départ, et le café
                part avec vous dans une bouteille isolante.
              </p>
            </div>
          ),
        },
        {
          title: "Un pisteur du village",
          cardEyebrow: "Guides",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Dans chaque parc, les guides viennent des villages voisins et connaissent chaque famille de lémuriens",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les parcs malgaches fonctionnent avec des guides issus des
                villages qui les entourent. Ils ont grandi dans cette forêt,
                connaissent le territoire de chaque groupe de lémuriens et
                repèrent un caméléon de la taille d&apos;un pouce à dix mètres.
              </p>
              <p>
                Une partie du droit d&apos;entrée revient aux communautés
                voisines, qui gèrent la forêt et les pépinières. C&apos;est ce
                qui explique la qualité du pistage : le guide connaît ces
                animaux depuis l&apos;enfance.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Un guide francophone accompagne l&apos;ensemble du séjour, et
                travaille avec le pisteur local sur chaque étape.
              </p>
            </div>
          ),
        },
        {
          title: "La table malgache",
          cardEyebrow: "Table",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Du riz à chaque repas, du zébu mijoté, des brèdes, et des letchis en décembre",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le riz est la base de tous les repas. On le sert avec du zébu
                mijoté, du poulet au gingembre, ou du romazava, un bouillon de
                viande et de brèdes, les feuilles vertes du pays. Sur la côte, le
                poisson et le crabe arrivent le matin.
              </p>
              <p>
                Les fruits changent avec les mois : letchis en décembre, mangues
                en janvier, ananas et corossols au printemps. La vanille et le
                poivre sauvage de Voatsiperifery se retrouvent dans les cuisines
                des lodges.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Le rhum arrangé se prépare maison, aux fruits et aux épices.
                Chaque lodge a sa recette et la sert au retour des marches.
              </p>
            </div>
          ),
        },
        {
          title: "La vanille de la Sava",
          cardEyebrow: "Épices",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le nord-est produit l'essentiel de la vanille du monde, et les préparateurs se visitent",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La région de la Sava, autour de Sambava et d&apos;Antalaha,
                fournit la plus grande partie de la vanille mondiale. La fleur
                est fécondée à la main, une par une, sur quelques heures le
                matin. Il faut ensuite huit à neuf mois avant la récolte.
              </p>
              <p>
                La gousse verte n&apos;a aucun parfum. Ce sont l&apos;échaudage à
                l&apos;eau chaude, la mise en sueur dans des malles de bois et
                plusieurs mois de séchage au soleil qui font l&apos;odeur que
                l&apos;on connaît.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Visite d&apos;un préparateur pendant la saison de traitement, et
                gousses expédiées à Paris après le retour.
              </p>
            </div>
          ),
        },
        {
          title: "Une nuit à Antananarivo",
          cardEyebrow: "Étape",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La ville d'arrivée mérite une nuit : le palais des reines, les escaliers, les tables d'auteur",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Antananarivo est bâtie sur douze collines, et les quartiers
                anciens se rejoignent par des escaliers de pierre plutôt que par
                des rues. En haut, le Rova, le palais des reines merina, regarde
                toute la vallée. En bas, le lac Anosy et son allée de
                jacarandas.
              </p>
              <p>
                C&apos;est aussi la ville où la cuisine malgache se raconte le
                mieux. Quelques tables travaillent le zébu, le poivre sauvage et
                la vanille avec une technique française, et l&apos;artisanat des
                hauts plateaux se trouve au marché de la Digue : marqueterie,
                soie sauvage, papier antaimoro.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Une nuit à l&apos;arrivée et une au retour, avec un guide de la
                ville pour les collines et les ateliers, et la table réservée
                selon le jour.
              </p>
            </div>
          ),
        },
        {
          title: "Dans ma valise",
          cardEyebrow: "Bagages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Du coton léger, une lampe frontale pour les marches de nuit, des jumelles et des chaussures fermées",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Du coton et du lin pour les côtes, un pull et une veste pour les
                hauts plateaux, où les nuits sont fraîches à mille deux cents
                mètres d&apos;altitude. Des chaussures fermées pour la forêt, et
                des sandales qui se mouillent pour les îles.
              </p>
              <p>
                Deux objets font la différence : une lampe frontale, qui laisse
                les mains libres pendant les marches de nuit, et une paire de
                jumelles légères. Les lémuriens sont souvent à vingt mètres de
                hauteur.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Les vols intérieurs limitent le poids des bagages. Une valise
                souple de taille moyenne suffit, le reste attend à Antananarivo.
              </p>
            </div>
          ),
        },
        {
          title: "Quand partir",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "D'avril à octobre, avec des ciels dégagés et des pistes sèches sur presque toute l'île",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Avril et mai suivent la saison verte : la forêt est dense, les
                cascades sont hautes et les orchidées fleurissent à Andasibe. De
                juin à septembre, l&apos;air est sec et clair, et c&apos;est la
                période des baleines sur la côte est.
              </p>
              <p>
                Octobre est souvent le plus beau mois. Les jacarandas mettent
                Antananarivo au violet, les côtes se réchauffent, et
                c&apos;est le moment des naissances chez les lémuriens : les
                petits voyagent accrochés au dos de leur mère.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Le sens de l&apos;itinéraire est calé sur le mois de départ, pour
                placer chaque étape au moment où elle donne le plus.
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
            "Je pensais qu'il fallait marcher des heures pour voir un lémurien. Le premier est passé devant la terrasse pendant le petit déjeuner, puis un deuxième. Ils habitent la forêt qui touche l'hôtel, et ils passent tous les matins à la même heure.",
          image: {
            src: "/destination/madagascar/hero-1.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Anjajavy, septembre 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "La marche de nuit, on l'a faite sans trop y croire. En une heure, le pisteur nous a montré trois caméléons endormis sur des branches à hauteur d'yeux, puis un lémurien de la taille d'une pomme. Il les repérait à la lampe avant nous, chaque fois.",
          image: {
            src: "/destination/madagascar/hero-2.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Andasibe, octobre 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "L'hélicoptère s'est posé sur la plage, puis il est reparti. Nous étions huit sur l'île. Le soir, on marchait jusqu'à la pointe sans croiser personne, et le matin l'équipe savait déjà à quelle heure nous voulions le café.",
          image: {
            src: "/destination/madagascar/hero-3.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Nosy Ankao, juin 2026", // TODO: replace with real testimonial
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
            "Quelle est la meilleure période pour partir à Madagascar ?",
          answer:
            "D'avril à octobre, pendant la saison sèche. Avril et mai suivent la saison verte : la forêt est dense et les cascades sont hautes. De juin à septembre, l'air est sec et clair, et les baleines à bosse passent au large de Sainte-Marie. Octobre est souvent le plus beau mois : les jacarandas fleurissent sur les hauts plateaux et les lémuriens mettent bas.",
        },
        {
          question: "Combien de temps dure le vol Paris-Antananarivo ?",
          answer:
            "Environ onze heures sans escale, presque tous les jours, sur Air France ou Corsair. Le décalage horaire est d'une heure de plus qu'en France en été et de deux heures en hiver, l'île ne changeant pas d'heure. Des vols intérieurs relient ensuite Antananarivo au Nord, à Anjajavy et à Morondava, en une à deux heures selon l'étape.", // TODO: verify la durée des vols intérieurs
        },
        {
          question: "Faut-il un visa pour aller à Madagascar ?",
          answer:
            "Oui, un visa de tourisme, qui s'obtient à l'arrivée à l'aéroport d'Ivato, à Antananarivo, ou en ligne avant le départ. Il est offert pour les séjours de moins de quinze jours, et payant au-delà. Le passeport doit rester valide six mois après la date d'arrivée. Aucune vaccination n'est exigée en venant d'Europe ; les hépatites A et B, la typhoïde et un traitement antipaludéen sont conseillés."
        },
        {
          question: "Que faire à Madagascar en deux semaines ?",
          answer:
            "Trois étapes suffisent. Quatre nuits dans le Nord, entre Antsiranana, les Tsingy Rouges et une île du large. Quatre nuits à Anjajavy, sur la côte ouest, pour les criques, les grottes et les plages. Trois nuits à Andasibe, à l'est, pour la forêt humide et les marches de nuit. Morondava et son allée de baobabs s'ajoutent avec deux nuits de plus.",
        },
        {
          question: "Où voir des lémuriens à Madagascar ?",
          answer:
            "Le parc d'Andasibe-Mantadia, à l'est d'Antananarivo, est le plus accessible : on y voit l'indri, le plus grand lémurien du monde, et plusieurs espèces nocturnes. Sur la côte ouest, les sifakas d'Anjajavy vivent dans les arbres autour du lodge et traversent les pelouses au petit matin. Dans le Sud, la réserve de Berenty abrite les makis à queue annelée.",
        },
        {
          question: "Quel budget prévoir pour un voyage à Madagascar ?",
          answer:
            "Un voyage à Madagascar sur mesure avec Exuma se situe généralement entre 6 000 et 12 000 € par personne pour dix nuits, hébergements, vols intérieurs, guides et transferts compris, hors vol depuis Paris. Les rotations en hélicoptère et les nuits sur les îles privées constituent le principal poste variable.", // TODO: verify la fourchette de budget
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
        "Trois autres façons de voyager dans cette partie du monde : deux îles de l'océan Indien et un désert d'Afrique australe, où la faune se voit de très loin.",
      slugs: ["maurice", "seychelles", "namibie"],
    },
  ],
};
