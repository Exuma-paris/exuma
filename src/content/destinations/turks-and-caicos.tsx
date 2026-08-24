import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "turks-and-caicos",
  name: "Turks and Caicos",
  placeKind: "region",
  country: "Caraïbes",
  genitive: "des Turks and Caicos",
  continentSlug: "caraibes",
  blurb: "Grace Bay, Parrot Cay, le mur de West Caicos",
  keywords: [
    "turks-and-caicos",
    "providenciales",
    "grace bay",
    "parrot cay",
    "west caicos",
    "middle caicos",
    "grand turk",
    "caraibes",
  ],
  metaTitle: "Turks and Caicos : Voyage sur mesure",
  metaDescription:
    "Voyage aux Turks and Caicos sur mesure : Grace Bay, Parrot Cay, le mur de West Caicos. Itinéraire écrit par votre travel designer Exuma, conciergerie 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe aux Turks and Caicos",
      heading: "Turks and Caicos, de Grace Bay aux cays sans personne",
      description:
        "Une quarantaine d'îles et de cays composent l'archipel, huit seulement sont habitées. Providenciales tient la vie du nord, Grand Turk garde la capitale et ses anciennes salines, et entre les deux le passage des Turks descend à deux mille mètres. Le reste, ce sont des cays privés où l'on n'entre qu'en y dormant. C'est cet archipel-là que nous vous ouvrons.",
      images: [
        {
          src: "/destination/turks-and-caicos/hero-1.png",
          alt: "Voyage aux Turks and Caicos : la longue plage de Grace Bay à Providenciales au petit matin",
        },
        {
          src: "/destination/turks-and-caicos/hero-2.png",
          alt: "Le tombant du récif et l'eau claire au large de West Caicos",
        },
        {
          src: "/destination/turks-and-caicos/hero-3.png",
          alt: "Les falaises de Mudjin Harbour à Middle Caicos en fin de journée",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir aux Turks and Caicos ?",
      heading:
        "Carole, spécialiste des Turks and Caicos, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "carole",
        // TODO: verify quote attribution
        quote:
          "Ici, on ne suit pas un programme, on suit la mer. Je laisse trois options par journée et le capitaine tranche le matin selon le vent : le tombant de West Caicos si c'est calme, les hauts-fonds du nord sinon. Ceux qui aiment cette destination sont ceux qui acceptent de ne pas savoir la veille.",
        role: "Travel Designer · Turks and Caicos",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte des Turks and Caicos",
      heading: "Quarante îles, huit habitées",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      columns: [
        "Un voyage aux Turks and Caicos commence par une ligne de récif plutôt que par une route. Le corail court au large de la côte nord, casse la houle de l'Atlantique et laisse derrière lui une eau immobile où l'on voit son ombre sur le sable avant d'avoir nagé. Providenciales tient cette côte avec Grace Bay, puis l'archipel s'égrène vers l'est : North et Middle Caicos reliées par une chaussée, South Caicos et ses flats, Grand Turk et Salt Cay au-delà du passage.",
        "Chaque île a gardé son usage. Providenciales reçoit les vols et concentre les tables, mais sa pointe nord-ouest reste vide, adossée au parc marin de Northwest Point. Middle Caicos garde les grottes de Conch Bar et les falaises de Mudjin Harbour, seul endroit de l'archipel où la côte cesse d'être plate. South Caicos vit encore de la langouste et de la conque, et ses fonds à hauteur de mollet font venir les pêcheurs à la mouche de très loin.",
        "Le reste appartient aux cays. Parrot Cay se rejoint en une demi-heure de bateau, Ambergris Cay reçoit les avions sur sa propre piste, et ni l'un ni l'autre n'accepte de visiteur à la journée. Little Water Cay, un peu plus au nord, n'abrite que des iguanes endémiques. Nous plaçons les nuits et les traversées pour que ces îles arrivent dans le bon ordre, et jamais toutes d'affilée.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/turks-and-caicos/full-image.png",
        alt: "Voyage aux Turks and Caicos : le récif et les cays inhabités vus depuis la mer",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Les Turks and Caicos sous la surface",
      heading: "Le plateau de corail s'arrête, et le fond tombe à deux mille mètres",
      theme: "light",
      paragraphs: [
        "On se met à l'eau au-dessus d'un plateau de corail par douze mètres de fond. On longe une arête, et le bleu passe d'un coup du turquoise au marine : derrière l'arête, il y a deux mille mètres. C'est cette rupture qui fait la réputation de Northwest Point, de West Caicos et de French Cay, trois sites inhabités où l'on ne croise presque jamais d'autre bateau.",
        "Les raies aigles passent en groupe le long du tombant, les tortues broutent l'herbier au-dessus, et les requins de récif tiennent le bord du plateau sans s'approcher. Personne ne remonte en comptant les espèces vues. On remonte en parlant du moment où le fond s'est ouvert.",
      ],
      images: [
        {
          src: "/destination/turks-and-caicos/split-1.png",
          alt: "Plongeur longeant le tombant du récif au large de West Caicos",
        },
        {
          src: "/destination/turks-and-caicos/split-2.png",
          alt: "Raies aigles au-dessus du plateau de corail de Northwest Point",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/turks-and-caicos/xp-apnee-1.png",
          alt: "Apnéiste descendant le long d'un cordage dans l'eau claire des Turks and Caicos",
        },
        right: {
          src: "/destination/turks-and-caicos/xp-apnee-2.png",
          alt: "Instructrice d'apnée et son élève en surface avant la descente",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Descendre sur une seule inspiration",
        columns: [
          "Samantha Kildegaard enseigne l'apnée aux Turks and Caicos. La séance commence à terre, assis, sans eau : ralentir le souffle, puis le retenir sans lutter. Ce n'est pas une démonstration sportive. C'est un exercice d'attention, et il se passe pour l'essentiel dans la tête.",
          "Ensuite on met à l'eau. Aucune bouteille, aucun détendeur, rien qui fasse du bruit : on descend le long d'un cordage, les poissons ne s'écartent pas, et le silence est complet. La première descente dure quelques secondes. La dernière de la journée en dure trois fois plus, et l'on remonte en se demandant pourquoi c'était si simple.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités aux Turks and Caicos",
      heading: "Le mur de West Caicos, le Beluga, les grottes de l'est",
      description:
        "Nous vous emmenons sur les tombants de Northwest Point et de French Cay, à bord d'un catamaran de douze mètres dont le capitaine navigue ici depuis vingt-cinq ans, et jusqu'aux falaises et aux grottes calcaires de Middle Caicos.",
      slugs: [
        "plongee-northwest-point-west-caicos",
        "catamaran-prive-beluga",
        "north-middle-caicos-mudjin-harbour",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Une pointe déserte, une île entière, une piste privée",
      description:
        "Un pavillon adossé au parc marin de Northwest Point, une île de quatre cents hectares où l'on n'entre qu'en y dormant, et un cay du sud qui reçoit les avions sur sa propre piste. Nous les proposons selon la façon dont vous voulez arriver, et selon le nombre de personnes que vous acceptez de croiser.",
      slugs: ["amanyara", "como-parrot-cay", "ambergris-cay"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage aux Turks and Caicos",
      description:
        "Voici les repères pratiques à réunir avant de choisir vos dates : le trajet, les formalités, la monnaie et les saisons.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          // TODO: verify les liaisons et les durées de vol vers Providenciales
          description:
            "Il n'existe pas de vol direct depuis Paris. Les itinéraires passent par Londres, d'où British Airways rejoint Providenciales, ou par un hub nord-américain : Miami est à un peu plus d'une heure de l'archipel, New York à trois heures et demie, Toronto à quatre heures. Comptez une journée complète de trajet depuis Paris. Providenciales concentre les vols internationaux ; Grand Turk, South Caicos et Ambergris Cay se rejoignent ensuite en petit avion, North et Middle Caicos par le ferry puis par la chaussée.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "L'archipel vit à l'heure de la côte est américaine et change d'heure aux mêmes dates que les États-Unis. Le décalage avec la France reste donc stable toute l'année : six heures de retard.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          // TODO: verify le taux des taxes de séjour et du service
          description:
            "La monnaie officielle est le dollar américain, ce qui évite tout change sur place. Les cartes passent partout à Providenciales, dans les hôtels comme dans les restaurants. On garde des espèces pour les taxis, les bateaux et les petites adresses de Blue Hills ou de Middle Caicos. Une taxe de séjour s'ajoute aux nuitées, et le service est le plus souvent facturé d'office.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          // TODO: verify l'obligation d'ETA britannique en transit aéroportuaire
          description:
            "Aucun visa n'est demandé aux ressortissants français pour un séjour touristique de moins de trois mois. Le passeport doit être valide pendant toute la durée du séjour, et un billet de retour est demandé à l'entrée. Si l'itinéraire passe par les États-Unis, l'autorisation ESTA est obligatoire, y compris en simple transit. En cas de correspondance à Londres, l'autorisation britannique ETA est à prévoir : mieux vaut la demander avant le départ.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin n'est obligatoire pour un séjour touristique. Il est recommandé d'être à jour des vaccinations du calendrier français, celle contre l'hépatite A se discutant selon la durée du séjour. La dengue circule dans les Antilles selon les années : une protection contre les moustiques reste la précaution la plus utile, surtout en fin de journée.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "La saison sèche court de décembre à avril, avec un alizé régulier et une humidité basse. Nous privilégions février et mars, quand l'eau est la plus claire et que les baleines à bosse remontent le passage des Turks vers le Silver Bank. Mai et le début du mois de juin restent une bonne fenêtre, plus chaude et beaucoup plus calme. La saison cyclonique court de juin à novembre, avec un cœur d'activité en août, septembre et octobre.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "L'anglais est la langue officielle et celle de la vie quotidienne, dans les hôtels comme sur les bateaux. On entend aussi le créole haïtien, parlé par une partie de la population, et l'espagnol dans les commerces.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Le climat est tropical et sec, l'un des plus secs des Caraïbes : Providenciales reçoit peu de pluie et le soleil domine presque toute l'année. Les températures varient peu, autour de vingt-sept degrés en moyenne, avec des maximales proches de trente-deux degrés en été. L'alizé souffle presque en continu et tempère la chaleur sur les côtes au vent.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Turks and Caicos. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/turks-and-caicos/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Itinéraire sur mesure aux Turks and Caicos entre Providenciales, les cays et Middle Caicos",
            "Adresses confidentielles aux Turks and Caicos : plages sans accès et tables de Blue Hills",
            "Hébergements aux Turks and Caicos : Amanyara, COMO Parrot Cay et Ambergris Cay",
            "Conciergerie privée 24/7 pour un séjour aux Turks and Caicos",
            "Expériences aux Turks and Caicos : apnée, plongée sur le mur et navigation à la voile",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables aux Turks and Caicos",
      heading: "Les îles où l'on jette l'ancre",
      description:
        "L'archipel se parcourt d'ouest en est, de la côte habitée aux cays déserts, et chaque île a son heure. Nous plaçons les étapes pour que le rythme reste celui de la mer.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      initialZoom: 9,
      places: [
        {
          title: "Providenciales et Grace Bay",
          description:
            "C'est l'île d'arrivée, et celle où se trouvent presque toutes les tables de l'archipel. Grace Bay tient la côte nord derrière son récif, l'eau y reste plate toute la journée, et la plage se marche longtemps sans croiser de construction. La pointe nord-ouest, elle, reste vide.",
          image: {
            src: "/destination/turks-and-caicos/map-providenciales.png",
            alt: "La plage de Grace Bay à Providenciales et son eau plate derrière le récif",
          },
          // TODO: verify coords
          coordinates: { lat: 21.7936, lng: -72.1962 },
        },
        {
          title: "Northwest Point et West Caicos",
          description:
            "Le parc marin de Northwest Point ferme la pointe de Providenciales, et West Caicos lui fait face, inhabitée depuis l'abandon de ses salines. Le tombant y démarre par douze mètres de fond et descend à deux mille. Les sites les plus connus, Elephant Ear Canyon et The Anchor, se rejoignent en une heure de bateau.",
          image: {
            src: "/destination/turks-and-caicos/map-west-caicos.png",
            alt: "La côte inhabitée de West Caicos et le tombant du récif au large",
          },
          // TODO: verify coords
          coordinates: { lat: 21.6333, lng: -72.4667 },
        },
        {
          title: "Chalk Sound et Little Water Cay",
          description:
            "Chalk Sound est un lagon fermé, semé de dizaines d'îlots rocheux, d'un turquoise qui ne ressemble à rien d'autre sur l'île. Un peu plus à l'est, Little Water Cay n'a pour habitants que des iguanes endémiques, une espèce que l'on ne trouve que dans cet archipel.",
          image: {
            src: "/destination/turks-and-caicos/map-chalk-sound.png",
            alt: "Les îlots rocheux du lagon de Chalk Sound à Providenciales",
          },
          // TODO: verify coords
          coordinates: { lat: 21.75, lng: -72.2833 },
        },
        {
          title: "Middle et North Caicos",
          description:
            "Une chaussée relie les deux îles, et la route de l'est se fait en une journée. Les falaises de Mudjin Harbour tombent droit dans la mer, les grottes de Conch Bar s'enfoncent sous le calcaire, et la plantation de Wade's Green attend depuis deux siècles au milieu des broussailles.",
          image: {
            src: "/destination/turks-and-caicos/map-middle-caicos.png",
            alt: "Les falaises de Mudjin Harbour et la plage en contrebas à Middle Caicos",
          },
          // TODO: verify coords
          coordinates: { lat: 21.8206, lng: -71.7639 },
        },
        {
          title: "Parrot Cay",
          description:
            "Une île entière à une demi-heure de bateau de Providenciales, sans route ni débarcadère public. Sa plage nord fait plus d'un kilomètre et l'on n'y voit personne. On n'accède à Parrot Cay qu'en y séjournant, ce qui règle la question du monde.",
          image: {
            src: "/destination/turks-and-caicos/map-parrot-cay.png",
            alt: "La plage nord de l'île privée de Parrot Cay aux Turks and Caicos",
          },
          // TODO: verify coords
          coordinates: { lat: 21.85, lng: -72.0333 },
        },
        {
          title: "Grand Turk et Salt Cay",
          description:
            "De l'autre côté du passage, deux petites îles vivent au ralenti sur les vestiges de l'industrie du sel. Cockburn Town garde ses maisons de bois et ses salines à sec. De janvier à avril, les baleines à bosse remontent le passage en longeant la côte, à portée de vue depuis la terre.",
          image: {
            src: "/destination/turks-and-caicos/map-grand-turk.png",
            alt: "Les anciennes salines et les maisons de bois de Cockburn Town à Grand Turk",
          },
          // TODO: verify coords
          coordinates: { lat: 21.4664, lng: -71.1389 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading:
        "Les conseils de nos experts pour votre voyage aux Turks and Caicos",
      description:
        "Voici quelques observations de terrain qui ne se trouvent pas dans un guide, pour choisir la bonne semaine et comprendre comment l'archipel se vit une fois sur place.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          title: "Arriver, puis rejoindre son île",
          cardEyebrow: "Arrivée",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Tout passe par Providenciales, et le dernier tronçon se cale avec de la marge",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Il n&apos;existe pas de vol direct depuis Paris. Les itinéraires
                passent par Londres ou par un hub nord-américain, Miami et New
                York étant les plus pratiques, et arrivent tous à
                Providenciales. Comptez une journée complète de trajet.
              </p>
              <p>
                Depuis Providenciales, Grand Turk, South Caicos et Ambergris Cay
                se rejoignent en petit avion, Parrot Cay en bateau privé, North
                Caicos par le ferry puis par la chaussée qui la relie à Middle
                Caicos. Ces petits appareils ne volent pas de nuit et leur
                franchise de bagages est limitée : nous laissons de la marge
                après le long-courrier plutôt que d&apos;enchaîner.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous réservons les vols régionaux et les transferts par la mer
                selon votre heure d&apos;arrivée, et nous suivons les
                correspondances le jour même.
              </p>
            </div>
          ),
        },
        {
          title: "Choisir entre la côte et un cay",
          cardEyebrow: "Itinéraire",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Deux bases suffisent, et elles ne se ressemblent pas du tout",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Providenciales et un cay privé ne racontent pas la même chose.
                Sur Providenciales, on a les tables, les bateaux, la plongée à
                la demi-journée et la possibilité de sortir le soir. Sur Parrot
                Cay ou Ambergris Cay, on a le silence et rien à décider, mais
                l&apos;île se referme sur elle-même au bout de quelques jours.
              </p>
              <p>
                Une semaine tient très bien sur une base unique. Dix jours
                permettent d&apos;en tenir deux, la pointe nord-ouest de
                Providenciales d&apos;abord, un cay ensuite, dans cet ordre
                plutôt que l&apos;inverse.
              </p>
            </div>
          ),
        },
        {
          title: "Quand partir, et quand les baleines passent",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La saison sèche va de décembre à avril, et nous visons février et mars",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La saison sèche court de décembre à avril, avec un alizé
                régulier et une humidité basse. Nous privilégions février et
                mars : l&apos;eau est au plus clair, la visibilité sur le
                tombant atteint ses meilleurs jours, et les baleines à bosse
                remontent le passage des Turks vers le Silver Bank.
              </p>
              <p>
                Les fêtes de fin d&apos;année sont la période la plus demandée
                et la plus chère. Mai et le début du mois de juin restent une
                bonne fenêtre, plus chaude et beaucoup plus calme. La saison
                cyclonique court de juin à novembre, avec un cœur
                d&apos;activité en août, septembre et octobre.
              </p>
            </div>
          ),
        },
        {
          title: "Ce que le récif demande",
          cardEyebrow: "Plongée",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le mur se plonge à l'aise, mais il ne pardonne pas l'improvisation",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les tombants de Northwest Point, de West Caicos et de French Cay
                démarrent par douze mètres de fond et descendent à pic. La
                visibilité y est grande, ce qui fait paraître le fond plus
                proche qu&apos;il ne l&apos;est : c&apos;est le piège classique
                du mur, et il concerne surtout les plongeurs confirmés qui se
                laissent porter par le paysage.
              </p>
              <p>
                Grace Bay convient mieux aux premières bouteilles et aux
                baptêmes, sur des patates de corail par dix mètres. Pour ceux
                qui ne plongent pas, le récif de la maison d&apos;Amanyara et
                les hauts-fonds du nord se font au masque et au tuba, sans
                bateau.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous retenons les places à bord et les guides selon votre niveau
                et le nombre de plongeurs, et nous calons les sorties sur les
                jours de meilleure mer.
              </p>
            </div>
          ),
        },
        {
          title: "Rouler jusqu'à l'est de l'archipel",
          cardEyebrow: "Nature",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "North et Middle Caicos se font en une journée, et l'on part tôt",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le ferry quitte Providenciales le matin pour North Caicos, où
                l&apos;on récupère une voiture. La chaussée mène ensuite à
                Middle Caicos : Mudjin Harbour et ses falaises, les grottes de
                Conch Bar sous le calcaire, la longue plage de Bambarra, et les
                ruines de la plantation de Wade&apos;s Green sur le chemin du
                retour.
              </p>
              <p>
                Il n&apos;y a presque rien pour se ravitailler en route et les
                distances sont plus longues qu&apos;elles n&apos;en ont
                l&apos;air. On emporte l&apos;eau et le déjeuner, et l&apos;on
                cale le retour sur le dernier ferry.
              </p>
            </div>
          ),
        },
        {
          title: "Venir avec des enfants",
          cardEyebrow: "Famille",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "L'eau plate de Grace Bay et les iguanes de Little Water Cay",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le récif fait de Grace Bay une piscine : pas de houle, pas de
                courant, un fond de sable qui descend lentement. Les plus jeunes
                nagent au masque à quelques mètres du bord et voient déjà des
                poissons. Little Water Cay et ses iguanes endémiques se font en
                une matinée, passerelle de bois comprise.
              </p>
              <p>
                Les adolescents s&apos;attachent vite au kitesurf de Long Bay,
                où l&apos;eau reste basse sur des centaines de mètres, ou aux
                premières bouteilles à Grace Bay. Nous plaçons les sorties en
                mer le matin, quand la mer est la plus douce.
              </p>
            </div>
          ),
        },
        {
          title: "Les tables et le ravitaillement",
          cardEyebrow: "Tables",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Tout se concentre sur Providenciales, et les cays vivent en autonomie",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les tables de l&apos;archipel sont presque toutes sur
                Providenciales, entre Grace Bay, Turtle Cove et Blue Hills.
                Elles se réservent en amont de décembre à avril, et les
                meilleures partent plusieurs semaines à l&apos;avance. Ailleurs,
                on dîne dans son hôtel : c&apos;est le seul couvert de
                l&apos;île.
              </p>
              <p>
                Presque tout est importé, ce qui se lit sur les additions comme
                sur les cartes. Pour une villa, les courses se commandent avant
                l&apos;arrivée depuis Providenciales, et certains produits
                demandent quelques jours.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous posons les réservations avant votre départ et nous
                transmettons vos préférences à la cuisine de la maison.
              </p>
            </div>
          ),
        },
        {
          title: "La conque, et ce qui se pêche ici",
          cardEyebrow: "Cuisine",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le mollusque est partout sur les cartes, et South Caicos le fournit",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La conque est le plat national et se trouve sous toutes les
                formes : crue en salade avec du citron vert et de
                l&apos;oignon, frite en beignets, mijotée en ragoût. Elle
                remonte de South Caicos, avec la langouste, dont la saison
                s&apos;ouvre à la fin de l&apos;été et se ferme au printemps.
              </p>
              <p>
                Les flats de South Caicos font par ailleurs venir les pêcheurs à
                la mouche : des kilomètres de fonds à hauteur de mollet, des
                guides de Cockburn Harbour qui repèrent l&apos;ombre du bonefish
                avant le poisson lui-même.
              </p>
            </div>
          ),
        },
        {
          title: "Ce que l'on met dans sa valise",
          cardEyebrow: "Bagages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Un bagage souple pour le petit avion, et de quoi passer la journée en mer",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les vols régionaux et les transferts en bateau imposent une
                valise mesurée : mieux vaut un bagage souple qu&apos;une grande
                valise rigide. Les journées se passent en maillot et les soirées
                restent simples, un peu plus habillées sur Grace Bay.
              </p>
              <p>
                Prévoyez une protection solaire élevée, un vêtement à manches
                longues pour les heures en mer, des chaussures d&apos;eau pour
                les rochers de Mudjin Harbour, et une protection contre les
                moustiques pour la fin de journée. Ceux qui ont leur masque
                l&apos;emportent : on s&apos;en sert tous les jours.
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
      cta: { label: "Construire ce voyage", href: "/reserver" },
      testimonials: [
        {
          // TODO: replace with real testimonial
          quote:
            "Nous avons plongé le mur de West Caicos le deuxième matin et je n'ai rien vu de comparable ailleurs. Le reste de la semaine, personne ne nous a demandé quoi que ce soit.",
          image: {
            src: "/destination/turks-and-caicos/hero-1.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Providenciales, mars 2026", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Une île pour nous, un bateau qui venait nous chercher quand on le demandait, et la même personne au téléphone du premier échange au retour. C'est exactement ce que nous cherchions.",
          image: {
            src: "/destination/turks-and-caicos/hero-2.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Parrot Cay, février 2026", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "La séance d'apnée a changé la semaine. Nos filles ont voulu y retourner deux fois, et elles parlent encore du moment où l'on n'entend plus rien.",
          image: {
            src: "/destination/turks-and-caicos/hero-3.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Les Turks and Caicos en famille, avril 2026", // TODO: replace with real testimonial
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
            "Quelle est la meilleure période pour partir aux Turks and Caicos ?",
          answer:
            "La saison sèche court de décembre à avril, avec un alizé régulier et une humidité basse. Nous privilégions février et mars : l'eau est au plus clair, la visibilité sur les tombants atteint ses meilleurs jours, et les baleines à bosse remontent le passage des Turks vers le Silver Bank. Les fêtes de fin d'année sont la période la plus demandée et la plus chère. Mai et le début du mois de juin restent une bonne fenêtre, plus chaude et beaucoup plus calme. La saison cyclonique court de juin à novembre, avec un cœur d'activité en août, septembre et octobre.",
        },
        {
          question: "Comment se rendre aux Turks and Caicos depuis Paris ?",
          answer:
            "Il n'existe pas de vol direct depuis Paris. Les itinéraires passent par Londres, d'où British Airways rejoint Providenciales, ou par un hub nord-américain : Miami, New York, Charlotte ou Toronto. Comptez une journée complète de trajet. Tous les vols internationaux arrivent à Providenciales. De là, Grand Turk, South Caicos et Ambergris Cay se rejoignent en petit avion, Parrot Cay en bateau privé, et North Caicos par le ferry puis par la chaussée qui la relie à Middle Caicos. Les petits appareils ne volent pas de nuit : prévoyez de la marge entre le long-courrier et le dernier tronçon.",
        },
        {
          question: "Faut-il un visa pour les Turks and Caicos ?",
          answer:
            "Les ressortissants français n'ont pas besoin de visa pour un séjour touristique de moins de trois mois. Le passeport doit être valide pendant toute la durée du séjour, et un billet de retour est demandé à l'entrée. Si votre itinéraire comprend une escale aux États-Unis, l'autorisation ESTA est obligatoire, y compris en simple transit. En cas de correspondance à Londres, prévoyez l'autorisation britannique ETA avant le départ.",
        },
        {
          question: "Que faire aux Turks and Caicos en une semaine ?",
          answer:
            "Une semaine tient confortablement sur une base et quelques journées de mer. On garde une journée entière pour les tombants de Northwest Point ou de West Caicos, une autre pour North et Middle Caicos, avec Mudjin Harbour et les grottes de Conch Bar, et une troisième pour naviguer vers les cays du nord et Little Water Cay. Les journées restantes se passent entre la plage, le masque et la sieste. Ceux qui pêchent à la mouche ajoutent les flats de South Caicos.",
        },
        {
          question: "Où dormir aux Turks and Caicos ?",
          answer:
            "Trois logiques s'offrent à vous. La côte de Grace Bay, à Providenciales, met les tables et les bateaux à portée de marche. La pointe nord-ouest de la même île, avec Amanyara, garde la même facilité d'accès mais sans le voisinage, adossée au parc marin de Northwest Point. Les cays privés, enfin, Parrot Cay et Ambergris Cay, se rejoignent en bateau ou en avion et ne reçoivent aucun visiteur à la journée : on n'y entre qu'en y dormant.",
        },
        {
          question: "Quel budget prévoir pour un voyage aux Turks and Caicos ?",
          answer:
            "Le budget dépend surtout de l'hébergement choisi, de la saison et de la place donnée au bateau. Les fêtes de fin d'année se situent en haut de la gamme, tandis que mai, juin et la fin du mois de novembre restent plus mesurés à confort égal. Un cay privé se chiffre à la nuit et selon le nombre de chambres ouvertes, un bateau à la journée et selon sa taille. Presque tout étant importé, la vie courante sur place coûte plus cher qu'ailleurs dans les Caraïbes. Nous chiffrons chaque projet précisément après un premier échange, une fois les dates et les envies posées.",
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
        "On remonte vers la région entière quand on veut relier plusieurs îles par la mer, on choisit Saint-Barthélemy pour ses tables et ses anses sans route, et les Bahamas pour leurs cays et leurs bancs de sable à perte de vue.",
      slugs: ["caraibes", "bahamas", "saint-barthelemy"],
    },
  ],
};
