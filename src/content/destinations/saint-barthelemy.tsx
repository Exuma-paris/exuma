import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "saint-barthelemy",
  name: "Saint-Barthélemy",
  placeKind: "region",
  country: "Caraïbes",
  genitive: "de Saint-Barthélemy",
  continentSlug: "caraibes",
  blurb: "Gustavia, Colombier, les anses au vent",
  keywords: [
    "saint-barthelemy",
    "saint-barth",
    "gustavia",
    "colombier",
    "flamands",
    "grande saline",
    "caraibes",
    "antilles",
  ],
  metaTitle: "Saint-Barthélemy : Voyage sur mesure",
  metaDescription:
    "Voyage à Saint-Barthélemy sur mesure : Gustavia, l'anse de Colombier, les plages de Flamands et de Saline. Itinéraire écrit par votre travel designer Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe à Saint-Barthélemy",
      heading:
        "Saint-Barthélemy, de l'anse de Colombier aux tables de Gustavia",
      description:
        "Saint-Barthélemy a cette douceur des îles où rien ne presse. On passe la matinée dans l'eau, on remonte déjeuner à l'ombre, et l'on redescend vers Gustavia quand la chaleur tombe. Les plus belles plages se gagnent à pied ou par la mer, et l'on y reste toujours plus longtemps que prévu. C'est cette île-là que nous vous ouvrons.",
      images: [
        {
          src: "/destination/saint-barthelemy/hero-1.png",
          alt: "Voyage à Saint-Barthélemy : l'anse de Colombier vue depuis le sentier de la pointe",
        },
        {
          src: "/destination/saint-barthelemy/hero-2.png",
          alt: "La baie de Saint-Jean et son rocher en fin d'après-midi",
        },
        {
          src: "/destination/saint-barthelemy/hero-3.png",
          alt: "Voiliers au mouillage devant le port de Gustavia",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir à Saint-Barthélemy ?",
      heading:
        "Carole, spécialiste de Saint-Barthélemy, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "carole",
        // TODO: verify quote attribution
        quote:
          "Saint-Barth est une île qu'on finit par appeler la sienne. En quelques jours, on a sa plage du matin, sa table du soir, et son coin d'ombre pour la sieste. Les voyageurs me redemandent souvent les mêmes dates l'année suivante, simplement pour retrouver ça. J'écris les séjours de façon à ce que ces habitudes aient le temps de naître.",
        role: "Travel Designer · Saint-Barthélemy",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte de Saint-Barthélemy",
      heading: "Le plaisir de vivre dehors, du réveil jusqu'au dîner",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      columns: [
        "Un voyage à Saint-Barthélemy commence toujours par la mer. L'île est petite, bordée de baies qui se découvrent une à une, et chacune change de caractère selon l'heure et selon le vent. Au sud, Grande Saline et le Gouverneur s'étendent au pied des collines, loin de toute construction. Au nord, Flamands et le Grand Cul-de-Sac sont plus doux, et c'est là que les familles s'installent pour la semaine.",
        "Ce qui étonne, c'est la vie qui continue en dehors des plages. À Corossol, les barques de pêche restent tirées sur le sable et l'on entend encore le parler de l'île chez les anciens. Le marché de Gustavia sent la mangue et le poisson du matin. Les tables sont tenues par des chefs installés là depuis longtemps, et l'on y mange une cuisine française qui a pris le goût des Antilles.",
        "Les maisons où nous vous installons reçoivent chacune à leur manière : un jardin de cocotiers qui descend jusqu'au sable à Flamands, un lagon calme au Grand Cul-de-Sac où les enfants ne sortent plus de l'eau, un rocher au-dessus de la baie de Saint-Jean d'où l'on regarde l'île s'animer. Nous les choisissons pour la façon dont on s'y réveille, et pour ce que l'on a envie de faire juste après.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/saint-barthelemy/full-image.png",
        alt: "Voyage à Saint-Barthélemy : la plage de Grande Saline et les collines qui la ferment",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Saint-Barthélemy à table",
      heading:
        "Les dîners qui commencent au coucher du soleil et finissent tard",
      theme: "light",
      paragraphs: [
        "L'île mange bien, et cela se sait depuis longtemps. À Gustavia, des chefs français installés là depuis des années travaillent le poisson pêché le matin et les légumes qui arrivent par bateau. À Saline, on déjeune sous les raisiniers, pieds dans le sable, sans changer de tenue entre la baignade et la table. Le soir, à Pointe Milou, les terrasses regardent le soleil descendre derrière Saint-Martin.",
        "Ces soirées se ressemblent sans jamais lasser. Le patron finit par garder votre place dès qu'il vous a vu deux fois, on redemande le poisson livré le matin par le pêcheur de Corossol, et l'on termine la soirée là où on l'avait terminée la veille. C'est ce qui donne envie de rester une semaine de plus.",
      ],
      images: [
        {
          src: "/destination/saint-barthelemy/split-1.png",
          alt: "Table dressée sous les raisiniers sur la plage de Grande Saline",
        },
        {
          src: "/destination/saint-barthelemy/split-2.png",
          alt: "Terrasse de restaurant à Pointe Milou au moment du coucher du soleil",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/saint-barthelemy/xp-ile-fourchue-1.png",
          alt: "Mouillage de l'Île Fourchue au nord de Saint-Barthélemy vu depuis les hauteurs",
        },
        right: {
          src: "/destination/saint-barthelemy/xp-ile-fourchue-2.png",
          alt: "Déjeuner servi à bord d'un bateau à l'ancre dans la baie de l'Île Fourchue",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "La journée au mouillage de l'Île Fourchue",
        columns: [
          "L'Île Fourchue se voit depuis le nord de Saint-Barth, posée entre l'île et Saint-Martin. Elle est inhabitée, en forme de fer à cheval, et sa baie abrite un mouillage où l'on arrive souvent seul le matin. Le bateau s'y installe pour la journée, et il ne se passe rien d'autre que ce que l'on décide.",
          "On nage jusqu'aux rochers où les poissons ne s'écartent pas, on monte à pied jusqu'aux hauteurs pour voir les deux îles en même temps, et l'on redescend déjeuner à bord. Les chèvres sauvages regardent passer les nageurs depuis le haut de la baie. Vers la fin de l'après-midi, quand les autres bateaux sont repartis, on comprend que l'île a été pour nous seuls, et l'on demande souvent à y revenir avant la fin du séjour.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités à Saint-Barthélemy",
      heading:
        "Déjeuner sur une plage sans route, ou prendre la barre au large",
      description:
        "Nous vous emmenons déjeuner à Colombier, sur une anse que la route n'atteint pas, passer une matinée à Corossol auprès des vannières, et prendre la barre d'un voilier de régate au large de Gustavia.",
      slugs: [
        "pique-nique-anse-colombier",
        "corossol-vannieres-lantana",
        "voiles-de-saint-barth-regate",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading:
        "Dormir dans les cocotiers de Flamands, ou sur le rocher de Saint-Jean",
      description:
        "Un jardin de cocotiers descend jusqu'au sable à Flamands, un lagon fermé par la barrière retient les vagues au Grand Cul-de-Sac, et un rocher domine la baie de Saint-Jean. Chacune de ces maisons reçoit à sa manière, et nous les proposons selon la façon dont vous aimez passer vos matins.",
      slugs: [
        "cheval-blanc-st-barth",
        "rosewood-le-guanahani",
        "eden-rock-st-barths",
      ],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage à Saint-Barthélemy",
      description:
        "Voici les repères pratiques à réunir avant de choisir vos dates : le vol, les formalités, la monnaie et les saisons.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Air France, Air Caraïbes et Corsair desservent Sint Maarten en direct depuis Paris selon les périodes et les compagnies, pour environ 8h30 de vol. Pointe-à-Pitre et Fort-de-France sont également desservies en direct, pour une durée comparable. Saint-Barthélemy se rejoint ensuite en petit avion depuis Saint-Martin ou depuis la Guadeloupe, avec Winair, St Barth Commuter ou Tradewind Aviation selon les périodes, ou par la mer depuis Saint-Martin. La piste de l'aérodrome de Saint-Jean est très courte : seuls de petits appareils s'y posent, les vols n'ont pas lieu de nuit et la franchise de bagages y est plus limitée que sur un long-courrier.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Saint-Barthélemy ne change pas d'heure. Comptez cinq heures de retard sur la France en hiver, et six heures en été.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Saint-Barthélemy est une collectivité française et utilise l'euro. Le dollar américain est largement accepté sur l'île, à un taux fixé par le commerçant. Les cartes bancaires passent très largement dans les hôtels, les restaurants et les boutiques, et il reste utile de garder un peu d'espèces pour les taxis et les petites tables de plage.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Saint-Barthélemy est une collectivité d'outre-mer française : pour les ressortissants français, une carte nationale d'identité ou un passeport en cours de validité suffisent. La plupart des itinéraires transitent toutefois par Sint Maarten, du côté néerlandais, qui ne relève pas de l'espace Schengen : le passeport y est fortement recommandé et peut être exigé selon la compagnie et les conditions d'entrée en vigueur. Une carte d'arrivée en ligne peut également être demandée par Sint Maarten, selon les règles applicables au moment du voyage. Si l'itinéraire comprend une escale aux États-Unis, l'autorisation ESTA est obligatoire, s'obtient en ligne avant le départ et reste généralement valable deux ans ou jusqu'à l'expiration du passeport.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin spécifique n'est obligatoire pour un séjour touristique à Saint-Barthélemy. Il est recommandé d'être à jour des vaccinations prévues au calendrier vaccinal français, celle contre l'hépatite A se discutant selon la durée et les conditions du séjour. La dengue et le chikungunya circulent dans les Antilles selon les années : une protection contre les moustiques reste la précaution la plus utile, en journée comme en fin d'après-midi.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "La saison sèche s'étend de décembre à avril, avec un alizé régulier et peu de pluie. Nous privilégions la fin janvier à la mi-avril, quand la mer est belle et que l'île retrouve son calme après les fêtes. Mai et le début du mois de juin restent agréables et plus tranquilles encore. La saison cyclonique court officiellement de juin à novembre, avec un cœur d'activité en août, septembre et octobre.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "Le français est la langue officielle et celle de la vie quotidienne. L'anglais est largement parlé dans les hôtels, les restaurants et les boutiques. Un parler traditionnel saint-barth, d'origine normande et française ancienne, subsiste encore chez certaines familles, notamment à Corossol et à Colombier.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Le climat est tropical et chaud toute l'année, avec des températures qui varient peu, généralement entre vingt-cinq et trente et un degrés. L'alizé souffle presque en continu et rend la chaleur supportable, surtout sur les côtes exposées à l'est. La période la plus humide s'étend d'août à novembre, sans qu'il s'agisse d'une saison des pluies continue : les averses sont tropicales et brèves, le plus souvent en fin de journée.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Saint-Barthélemy. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/saint-barthelemy/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Itinéraire sur mesure à Saint-Barthélemy entre Gustavia, Flamands et Colombier",
            "Adresses confidentielles à Saint-Barthélemy : tables de chefs et anses sans route",
            "Hébergements à Saint-Barthélemy : Cheval Blanc, Le Guanahani et Eden Rock",
            "Conciergerie privée 24/7 pour un séjour à Saint-Barthélemy",
            "Expériences à Saint-Barthélemy : mouillage de l'Île Fourchue et vannerie de Corossol",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables à Saint-Barthélemy",
      heading: "Les endroits de l'île où l'on aime revenir",
      description:
        "L'île se découvre par petites boucles, et chaque anse a son heure. Nous plaçons les journées pour que chacune arrive au bon moment du séjour.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      initialZoom: 11,
      places: [
        {
          title: "Gustavia",
          description:
            "Le port occupe le fond d'une baie étroite, et l'on s'y promène le soir entre les voiliers et les vitrines. Les tables de Gustavia sont tenues par des chefs installés là depuis longtemps, et le marché du matin sent la mangue et le poisson.",
          image: {
            src: "/destination/saint-barthelemy/map-gustavia.png",
            alt: "Le port de Gustavia à Saint-Barthélemy et ses voiliers au quai",
          },
          // TODO: verify coords
          coordinates: { lat: 17.8963, lng: -62.8498 },
        },
        {
          title: "La baie de Saint-Jean",
          description:
            "C'est la baie la plus vivante de l'île, coupée en deux par le rocher de l'Eden Rock. L'eau y est peu profonde et calme, les boutiques et les tables bordent la plage, et l'on y croise tout le monde au fil de la journée.",
          image: {
            src: "/destination/saint-barthelemy/map-saint-jean.png",
            alt: "La baie de Saint-Jean et son rocher central vus depuis la plage",
          },
          // TODO: verify coords
          coordinates: { lat: 17.9036, lng: -62.8436 },
        },
        {
          title: "Corossol",
          description:
            "C'est le village des vannières, où le lantana sèche au soleil avant d'être tressé en chapeaux et en paniers. Le savoir-faire se transmet de mère en fille depuis des générations, et les femmes le montrent volontiers à qui prend le temps de s'asseoir près d'elles.",
          image: {
            src: "/destination/saint-barthelemy/map-corossol.png",
            alt: "Barques de pêche tirées sur le sable du village de Corossol",
          },
          // TODO: verify coords
          coordinates: { lat: 17.9092, lng: -62.8531 },
        },
        {
          title: "L'anse de Colombier",
          description:
            "Aucune route ne descend jusqu'à Colombier : on y arrive par le sentier de la pointe ou par la mer. Les rochers abritent la baie, l'eau y reste claire quand le vent forcit ailleurs, et les tortues remontent respirer près du bord.",
          image: {
            src: "/destination/saint-barthelemy/map-colombier.png",
            alt: "L'anse de Colombier fermée par ses rochers à Saint-Barthélemy",
          },
          // TODO: verify coords
          coordinates: { lat: 17.9186, lng: -62.8583 },
        },
        {
          title: "Les anses de Saline et du Gouverneur",
          description:
            "Ce sont les deux grandes plages du sud, sauvages et sans une maison en vue. À Saline, on franchit la dune et la mer apparaît d'un coup. Au Gouverneur, les collines ferment la baie de chaque côté et l'eau vire au vert en fin de journée.",
          image: {
            src: "/destination/saint-barthelemy/map-saline-gouverneur.png",
            alt: "La plage sauvage de Grande Saline derrière sa dune",
          },
          // TODO: verify coords
          coordinates: { lat: 17.8876, lng: -62.8267 },
        },
        {
          title: "L'Île Fourchue",
          description:
            "L'îlot inhabité se dessine au nord de Saint-Barth, deux bras de terre refermés sur un mouillage abrité. Les chèvres sauvages y vivent seules, les oiseaux de mer nichent dans les rochers, et les bateaux repartent avant le soir.",
          image: {
            src: "/destination/saint-barthelemy/map-ile-fourchue.png",
            alt: "L'Île Fourchue inhabitée et son mouillage abrité au nord de Saint-Barth",
          },
          // TODO: verify coords
          coordinates: { lat: 17.9797, lng: -62.9139 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading:
        "Les conseils de nos experts pour votre voyage à Saint-Barthélemy",
      description:
        "Voici quelques observations de terrain qui ne se trouvent pas dans un guide, pour choisir la bonne semaine et comprendre comment l'île se vit une fois sur place.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          title: "Arriver sur l'île sans y penser",
          cardEyebrow: "Arrivée",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le dernier tronçon se fait en petit avion ou par la mer, et cela s'organise à l'avance",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Saint-Barthélemy se rejoint depuis Saint-Martin ou depuis la
                Guadeloupe, en petit avion ou par la mer. La piste de
                l&apos;aérodrome de Saint-Jean est très courte, si bien que seuls
                de petits appareils s&apos;y posent et que les vols
                n&apos;ont pas lieu de nuit. La franchise de bagages y est
                également plus limitée que sur un long-courrier.
              </p>
              <p>
                Ce dernier tronçon est court et souvent le plus beau du voyage,
                à condition de ne pas le caler trop juste après
                l&apos;atterrissage du long-courrier. Nous laissons de la marge
                entre les deux, et nous prévoyons le transfert vers la maison
                pour que l&apos;arrivée se fasse sans attente.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous réservons le vol depuis Saint-Martin ou la traversée selon
                l&apos;heure de votre arrivée, et nous suivons les
                correspondances le jour même.
              </p>
            </div>
          ),
        },
        {
          title: "Choisir son anse selon le vent du matin",
          cardEyebrow: "Plages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "L'alizé décide de la plage où l'eau sera la plus calme",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L&apos;île est assez petite pour que l&apos;on change de côte
                dans la matinée. Quand l&apos;alizé forcit à l&apos;est, la mer
                se creuse au Gouverneur et à Toiny, tandis que Flamands, Colombier
                et le lagon du Grand Cul-de-Sac restent lisses. À
                l&apos;inverse, les jours de calme, les grandes plages du sud
                sont les plus belles de l&apos;île.
              </p>
              <p>
                Cette habitude se prend en deux jours : on regarde la mer en
                sortant, et l&apos;on choisit sa plage à ce moment-là plutôt que
                la veille au soir.
              </p>
            </div>
          ),
        },
        {
          title: "Quand partir, et quand l'île se remplit",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La saison sèche va de décembre à avril, et nous privilégions la fin de l'hiver",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La saison sèche s&apos;étend de décembre à avril, avec un alizé
                régulier et peu de pluie. Nous privilégions la fin janvier à la
                mi-avril, quand la mer est belle et que l&apos;île retrouve son
                calme après les fêtes. Mai et le début du mois de juin restent
                agréables et plus tranquilles encore.
              </p>
              <p>
                Entre Noël et les premiers jours de janvier, l&apos;île est au
                complet : les maisons se réservent très en avance et les tables
                se prennent avant le départ. La saison cyclonique court
                officiellement de juin à novembre, avec un cœur
                d&apos;activité en août, septembre et octobre.
              </p>
            </div>
          ),
        },
        {
          title: "Se déplacer d'une anse à l'autre",
          cardEyebrow: "Sur place",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Une petite voiture ouverte suffit, et les routes se prennent doucement",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                On se déplace en petite voiture décapotable, le modèle que
                l&apos;on voit partout sur l&apos;île. Les routes sont étroites,
                pentues et bordées de murets, et tout le monde y roule
                doucement. Le stationnement demande un peu de patience à
                Gustavia en fin d&apos;après-midi et devant les plages du sud en
                milieu de journée.
              </p>
              <p>
                Pour les dîners, le chauffeur privé est la solution la plus
                confortable, en particulier sur les routes de Pointe Milou et de
                Toiny une fois la nuit tombée.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous réservons la voiture et le chauffeur avant votre arrivée,
                les deux se réservant longtemps à l&apos;avance en haute saison.
              </p>
            </div>
          ),
        },
        {
          title: "Réserver les tables avant de partir",
          cardEyebrow: "Tables",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les bonnes tables se prennent depuis Paris, surtout en haute saison",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L&apos;île compte peu de couverts pour beaucoup de monde en
                saison. Les tables de Gustavia, celles des plages de Saline et
                de Flamands et les terrasses de Pointe Milou se réservent depuis
                Paris, parfois plusieurs semaines à l&apos;avance pour les
                soirées de fin de semaine.
              </p>
              <p>
                Le déjeuner sur la plage reste plus souple, et c&apos;est
                souvent le meilleur moment de la journée. On y arrive après la
                baignade, on s&apos;installe sous les raisiniers et
                l&apos;après-midi passe sans que personne ne pense à repartir.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous posons les réservations avant votre départ et nous les
                ajustons pendant le séjour, y compris le jour même.
              </p>
            </div>
          ),
        },
        {
          title: "Venir avec des enfants",
          cardEyebrow: "Famille",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le lagon du Grand Cul-de-Sac reste calme et peu profond toute la journée",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Saint-Barth se vit très bien en famille, à condition de choisir
                sa côte. Au Grand Cul-de-Sac, la barrière retient les vagues et
                l&apos;eau reste peu profonde sur une bonne distance : les
                enfants y passent leurs journées sans surveillance rapprochée.
                La baie de Saint-Jean et Flamands offrent la même douceur, avec
                davantage de vie autour.
              </p>
              <p>
                Les journées en mer plaisent beaucoup aux adolescents, surtout
                celles qui comprennent un mouillage et de la nage. Nous plaçons
                les traversées le matin, quand la mer est la plus douce, et nous
                gardons les après-midi libres.
              </p>
            </div>
          ),
        },
        {
          title: "La villa ou la maison d'hôtel",
          cardEyebrow: "Hébergement",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Deux façons de vivre l'île, et elles ne conviennent pas aux mêmes séjours",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L&apos;île compte de très belles villas privées, avec piscine,
                cuisinier et gouvernante. C&apos;est la formule qui convient aux
                familles nombreuses et à ceux qui veulent leurs horaires, leurs
                repas et leur calme.
              </p>
              <p>
                Les maisons d&apos;hôtel apportent autre chose : le service
                permanent, la plage aménagée, le restaurant en bas et la vie qui
                passe devant. Beaucoup de nos voyageurs combinent les deux au
                cours d&apos;un même séjour, en commençant par la villa et en
                terminant par l&apos;hôtel.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous visitons les maisons que nous proposons et nous vous
                orientons selon la composition du groupe et la période choisie.
              </p>
            </div>
          ),
        },
        {
          title: "Ce que l'on met dans sa valise",
          cardEyebrow: "Bagages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Léger pour le petit avion, mais une tenue habillée pour les dîners",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les journées se passent en maillot et en tenue légère, et les
                soirées sont plus habillées qu&apos;on ne l&apos;imagine, en
                particulier à Gustavia et sur les terrasses de Pointe Milou. Une
                veste légère suffit pour les hommes, et les soirées de fin
                d&apos;année sont les plus habillées de la saison.
              </p>
              <p>
                Le vol en petit avion impose une valise mesurée : mieux vaut un
                bagage souple qu&apos;une grande valise rigide. Prévoyez aussi
                une protection solaire élevée, une protection contre les
                moustiques pour la fin de journée, et des chaussures fermées si
                vous comptez descendre à Colombier par le sentier.
              </p>
            </div>
          ),
        },
        {
          title: "Les régates qui animent le printemps",
          cardEyebrow: "Agenda",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Mars et avril amènent les grands voiliers dans la baie de Gustavia",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le printemps est la saison des régates. Les grands voiliers se
                rassemblent dans la baie de Gustavia, le port se remplit de
                mâts et l&apos;île vit au rythme des départs et des arrivées.
                C&apos;est un très beau moment pour venir, et l&apos;un des plus
                animés de l&apos;année.
              </p>
              <p>
                Ces semaines-là demandent de réserver tôt, la maison comme les
                tables. Ceux qui préfèrent le calme choisiront la fin janvier ou
                le début du mois de février, quand la lumière est aussi belle et
                que l&apos;île respire.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous vous disons les dates exactes des régates de
                l&apos;année en cours et nous organisons, si vous le souhaitez,
                une journée à bord d&apos;un voilier engagé.
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
            "Nous sommes partis pour l'Île Fourchue le deuxième jour et nous y sommes retournés avant de rentrer. Le skipper nous attendait chaque matin avec une idée différente.",
          image: {
            src: "/destination/saint-barthelemy/hero-1.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Saint-Barthélemy, février 2026", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Nos enfants ont passé la semaine dans le lagon et nous avons dîné le soir sans jamais nous occuper des réservations. Nous sommes rentrés reposés, ce qui ne nous arrive jamais.",
          image: {
            src: "/destination/saint-barthelemy/hero-2.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Saint-Barthélemy en famille, avril 2026", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Le déjeuner à Colombier restera notre meilleur souvenir. La table était dressée à l'ombre quand nous sommes arrivés par la mer, et personne n'est venu de tout l'après-midi.",
          image: {
            src: "/destination/saint-barthelemy/hero-3.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Saint-Barthélemy, mars 2026", // TODO: replace with real testimonial
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
            "Quelle est la meilleure période pour partir à Saint-Barthélemy ?",
          answer:
            "La saison sèche s'étend de décembre à avril, avec un alizé régulier et peu de pluie. Nous privilégions la fin janvier à la mi-avril, quand la mer est belle et que l'île retrouve son calme après les fêtes. Mai et le début du mois de juin restent agréables et plus tranquilles encore. La saison cyclonique court officiellement de juin à novembre, avec un cœur d'activité en août, septembre et octobre. Sachez aussi que l'île est au complet entre Noël et les premiers jours de janvier, et très animée pendant les régates de mars et d'avril.",
        },
        {
          question: "Comment se rendre à Saint-Barthélemy depuis Paris ?",
          answer:
            "Air France, Air Caraïbes et Corsair desservent Sint Maarten en direct depuis Paris selon les périodes et les compagnies, pour environ 8h30 de vol. Pointe-à-Pitre et Fort-de-France sont également desservies en direct, pour une durée comparable. Saint-Barthélemy se rejoint ensuite en petit avion depuis Saint-Martin ou depuis la Guadeloupe, avec Winair, St Barth Commuter ou Tradewind Aviation selon les périodes, ou par la mer depuis Saint-Martin. La piste de l'aérodrome de Saint-Jean étant très courte, seuls de petits appareils s'y posent et les vols n'ont pas lieu de nuit : nous laissons de la marge entre le long-courrier et ce dernier tronçon.",
        },
        {
          question: "Faut-il un passeport pour aller à Saint-Barthélemy ?",
          answer:
            "Saint-Barthélemy est une collectivité d'outre-mer française : pour les ressortissants français, une carte nationale d'identité ou un passeport en cours de validité suffisent. La plupart des itinéraires transitent toutefois par Sint Maarten, du côté néerlandais, qui ne relève pas de l'espace Schengen : le passeport y est fortement recommandé et peut être exigé selon la compagnie et les conditions d'entrée en vigueur. Une carte d'arrivée en ligne peut également être demandée par Sint Maarten, selon les règles applicables au moment du voyage : c'est la formalité que l'on oublie le plus souvent. Si votre itinéraire comprend une escale aux États-Unis, l'autorisation ESTA est obligatoire et s'obtient en ligne avant le départ.",
        },
        {
          question: "Que faire à Saint-Barthélemy en une semaine ?",
          answer:
            "Une semaine laisse le temps de prendre ses habitudes sans courir. On garde deux ou trois journées en mer, dont une au mouillage de l'Île Fourchue et une autre consacrée au déjeuner à Colombier, où l'on arrive par le sentier de la pointe ou par le bateau. Les autres journées se passent entre les plages du sud, une matinée à Corossol auprès des vannières, le marché et les boutiques de Gustavia, et les tables que l'on réserve avant de partir. Ceux qui aiment la voile ajoutent une sortie à la barre d'un voilier de régate au large du port.",
        },
        {
          question: "Saint-Barth est-elle adaptée aux familles ?",
          answer:
            "Oui, et c'est même l'une des îles les plus faciles à vivre avec des enfants d'âges différents. Au Grand Cul-de-Sac, la barrière retient les vagues et l'eau reste peu profonde, si bien que les plus jeunes y passent leurs journées. La baie de Saint-Jean et Flamands offrent la même douceur avec plus de vie autour. Les villas avec cuisinier et gouvernante conviennent bien aux familles nombreuses, et les journées en mer plaisent beaucoup aux adolescents. Nous plaçons les traversées le matin, quand la mer est la plus douce.",
        },
        {
          question: "Quel budget prévoir pour un voyage à Saint-Barthélemy ?",
          answer:
            "Le budget dépend surtout de la maison choisie, de la saison et de la place donnée aux journées en mer. La période des fêtes et celle des régates se situent en haut de la gamme, tandis que la fin janvier, février et le mois de mai restent plus mesurés à confort égal. Une villa privée avec personnel se chiffre à la semaine et selon le nombre de chambres, un bateau à la journée et selon sa taille. Nous chiffrons chaque projet précisément après un premier échange, une fois les dates et les envies posées.",
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
        "On remonte vers la région entière quand on veut relier plusieurs îles par la mer, on choisit les Bahamas pour leurs cays et leurs fonds encore plus clairs, et l'on part sur la côte caraïbe du Mexique quand on aime ajouter des ruines et des cenotes à ses journées de plage.",
      slugs: ["caraibes", "bahamas", "mexique"],
    },
  ],
};
