import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "portugal",
  name: "Portugal",
  placeKind: "country",
  country: "Portugal",
  genitive: "du Portugal",
  continentSlug: "europe",
  blurb: "Lisbonne, le Douro, Comporta, l'Algarve",
  keywords: [
    "portugal",
    "lisbonne",
    "douro",
    "porto",
    "comporta",
    "alentejo",
    "algarve",
    "sintra",
  ],
  metaTitle: "Portugal : Voyage sur mesure",
  metaDescription:
    "Voyage au Portugal sur mesure : Lisbonne, vignobles du Douro, plages de Comporta et Algarve. Itinéraire écrit par votre travel designer Exuma, conciergerie 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe au Portugal",
      heading: "Le Portugal, du Douro aux plages de l'Algarve",
      description:
        "Le Portugal se découvre lentement. Lisbonne se laisse apprivoiser par ses collines et ses tramways jaunes. Au nord, les grands domaines viticoles vous reçoivent comme des amis, au-dessus d'un fleuve qui serpente entre les coteaux. Au sud, la pinède de Comporta s'ouvre sur l'océan, et le soleil s'y couche dans la mer.",
      images: [
        {
          src: "/destination/portugal/hero-1.png",
          alt: "Toits d'azulejos de l'Alfama et le Tage en contrebas, à Lisbonne au Portugal",
        },
        {
          src: "/destination/portugal/hero-2.png",
          alt: "Terrasses de vignes du Douro descendant vers le fleuve au-dessus de Pinhão",
        },
        {
          src: "/destination/portugal/hero-3.png",
          alt: "Longue plage de sable bordée de pins à Comporta, au sud de Lisbonne",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Notre rôle dans ce voyage",
      heading: "Une seule personne écrit ce voyage et reste la vôtre",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "carole",
        // TODO: verify quote attribution
        quote:
          "J'aime le Portugal pour sa douceur. On passe d'une ville à un vignoble, puis à une plage, sans jamais avoir l'impression de courir. Les gens vous accueillent simplement, et c'est souvent de cela que l'on se souvient en rentrant. Mon travail consiste à choisir le bon moment pour chaque étape.",
        role: "Travel Designer · Portugal",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Ouverture",
      heading: "Le Portugal, la douceur de vivre au bord de l'Atlantique",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      columns: [
        "Un voyage au Portugal commence toujours par la mer. Elle borde le pays sur toute sa longueur et se retrouve partout : dans la cuisine, dans les chansons, dans la façon qu'ont les gens de vous recevoir. D'un bout à l'autre de la côte, chaque étape a son caractère, et c'est ce qui donne envie d'y revenir.",
        "Lisbonne se dévoile peu à peu, entre ses tramways jaunes et ses façades d'azulejos. Un peu plus au sud, la pinède de Comporta ouvre sur un sable clair où l'on marche longtemps sans croiser personne. L'Alentejo prend ensuite le relais, avec ses villages blancs et ses grandes tables d'été. Tout au nord, le Douro déroule ses vignes au-dessus du fleuve, là où naissent les plus beaux vins du pays.",
        "« Le Portugal ne cherche pas à impressionner. Il vous installe, et l'on finit par ne plus vouloir repartir. »",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/portugal/full-image.png",
        alt: "Falaises et arches de grès de la côte de l'Algarve, au sud du Portugal",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Le vignoble",
      heading: "Le Douro, quand le vin se boit face aux vignes",
      theme: "light",
      paragraphs: [
        "Le Douro est le plus beau détour du voyage. Le fleuve creuse le nord du pays et les coteaux plongent jusqu'à lui, plantés en terrasses que des générations ont retenues par des murets de pierre. C'est ici que naît le porto, dans la plus ancienne région viticole du monde.",
        "On y vit au rythme des quintas, ces domaines de famille où l'on vous reçoit comme chez des amis. La vendange se fait encore au panier, parce que rien ne roule sur des pentes aussi raides. Le soir, la table se dresse dehors et le vigneron descend chercher quelques bouteilles à la cave.",
        "On y goûte d'abord les rouges de la maison. Le porto arrive à la fin, quand la nuit tombe sur la vallée.",
      ],
      images: [
        {
          src: "/destination/portugal/split-1.png",
          alt: "Murs de pierre et rangs de vigne en terrasses au-dessus du Douro",
        },
        {
          src: "/destination/portugal/split-2.png",
          alt: "Table dressée dehors dans une quinta du Douro à la fin du jour",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/portugal/xp-croisiere-douro-1.png",
          alt: "Bateau privé glissant sur le Douro au coucher du soleil entre les coteaux",
        },
        right: {
          src: "/destination/portugal/xp-croisiere-douro-2.png",
          alt: "Table dressée sur le pont d'un bateau privé au fil du Douro",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Une croisière privée sur le Douro, au coucher du soleil",
        columns: [
          "Le bateau quitte le quai de Pinhão en fin d'après-midi, quand la lumière commence à dorer les coteaux. Personne d'autre à bord que vous et l'équipage. À cette heure, l'eau est si lisse que les collines s'y reflètent d'une rive à l'autre.",
          "La table est dressée sur le pont et le dîner se prend sans se presser. Les lumières des villages s'allument une à une sur les hauteurs, puis il ne reste que le bruit du sillage. Nous réservons le bateau pour votre soirée seule, avec les bouteilles de la maison que vous aurez visitée dans la journée.", // TODO: verify
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités au Portugal",
      heading: "Trois moments, rien que pour vous",
      description:
        "On part à cheval sur une plage immense au petit matin, on écoute le fado tard le soir dans une chapelle de Lisbonne, et l'on entre dans les grottes de l'Algarve avant tout le monde.",
      slugs: [
        "cheval-plage-comporta",
        "fado-chapelle-alfama",
        "grottes-ponta-da-piedade",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements au Portugal",
      heading: "Où séjourner",
      description:
        "Une quinta au-dessus du Douro, une maison de plage dans la pinède de Comporta, un palais entouré de jardins à Lisbonne. Trois adresses où l'on se sent chez soi dès le premier soir.",
      slugs: [
        "six-senses-douro-valley",
        "sublime-comporta",
        "olissippo-lapa-palace",
      ],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Avant le départ",
      heading: "Préparer votre voyage au Portugal",
      description:
        "Vol, décalage, monnaie, formalités et saison : l'essentiel avant de partir.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Environ 2h30 en vol direct depuis Paris jusqu'à Lisbonne, 2h15 jusqu'à Porto, 2h45 jusqu'à Faro. Plusieurs départs par jour.", // TODO: verify
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Une heure de moins qu'en France, toute l'année. Autant dire aucun décalage à gérer.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "L'euro. Aucune conversion à prévoir, les cartes passent partout, y compris sur les marchés.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Espace Schengen : une carte nationale d'identité ou un passeport en cours de validité suffit.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin obligatoire, aucune précaution sanitaire particulière.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "De mai à octobre pour la mer. Septembre pour les vendanges du Douro. Avril et octobre pour les villes, sans la chaleur ni la foule.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "Le portugais. L'anglais se parle largement à Lisbonne, à Porto et sur l'Algarve, et le français reste courant chez les générations qui ont émigré.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Été sec et lumineux, autour de vingt-huit degrés à Lisbonne au mois d'août et un peu plus dans l'Alentejo. L'hiver reste doux sur la côte, plus humide au nord.", // TODO: verify
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Un voyage au Portugal se prépare dans le détail. Une cave que l'on ouvre pour vous seuls, une table de village qui ne prend pas de réservation, une voiture qui vous attend là où le sentier s'arrête. Une seule personne s'occupe de tout, et elle reste la vôtre jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/portugal/bento-${
            ["map", "adresses", "hebergements", "conciergerie", "experiences"][i]
          }.png`,
          alt: [
            "Carte d'un itinéraire sur mesure au Portugal",
            "Ruelle pavée et façades d'azulejos dans un quartier ancien de Lisbonne",
            "Terrasse d'une quinta du Douro ouverte sur les vignes",
            "Concierge coordonnant un transfert privé entre Lisbonne et l'Alentejo",
            "Table dressée face à l'Atlantique sur la côte de l'Alentejo",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Que voir au Portugal",
      heading: "Les lieux que l'on aime faire découvrir",
      description:
        "Lisbonne, Sintra, le Douro, Porto, Comporta et l'Algarve. Nos itinéraires passent presque toujours par là, dans un ordre qui change avec la saison.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      initialZoom: 6,
      places: [
        {
          title: "Lisbonne, l'Alfama et le Tage",
          description:
            "Lisbonne se découvre en montant. L'Alfama a gardé ses ruelles étroites et son linge aux fenêtres, et chaque terrasse s'ouvre sur le fleuve. On s'y perd volontiers, puis on redescend en tramway.",
          image: {
            src: "/destination/portugal/map-lisbonne.png",
            alt: "Ruelles de l'Alfama et le Tage vus depuis un mirador de Lisbonne",
          },
          coordinates: { lat: 38.7139, lng: -9.1292 }, // TODO: verify coords
        },
        {
          title: "Sintra et ses palais dans les arbres",
          description:
            "À quelques kilomètres de Lisbonne, une montagne boisée que la brume garde verte toute l'année. Les rois y passaient l'été et leurs palais se cachent encore dans la végétation. Le jardin de la Quinta da Regaleira se visite comme un conte.",
          image: {
            src: "/destination/portugal/map-sintra.png",
            alt: "Palais de Pena émergeant de la brume sur les hauteurs de Sintra",
          },
          coordinates: { lat: 38.7876, lng: -9.3904 }, // TODO: verify coords
        },
        {
          title: "Le Douro, de Pinhão à Peso da Régua",
          description:
            "Le cœur de la vallée, là où les vignes tombent le plus raide vers l'eau. La petite gare de Pinhão raconte la vendange sur ses murs d'azulejos. D'une quinta à l'autre, on se déplace en bateau plutôt qu'en voiture.",
          image: {
            src: "/destination/portugal/map-douro.png",
            alt: "Méandre du Douro entre les vignes en terrasses près de Pinhão",
          },
          coordinates: { lat: 41.1897, lng: -7.5433 }, // TODO: verify coords
        },
        {
          title: "Porto et les caves de Vila Nova de Gaia",
          description:
            "Une ville de granit posée sur son estuaire, où l'on dîne presque les pieds dans l'eau. Les maisons de porto vieillissent sur l'autre rive, à Vila Nova de Gaia, et leurs caves sentent le bois et le sucre.",
          image: {
            src: "/destination/portugal/map-porto.png",
            alt: "Quais de la Ribeira à Porto et les caves de Vila Nova de Gaia",
          },
          coordinates: { lat: 41.1405, lng: -8.6132 }, // TODO: verify coords
        },
        {
          title: "Comporta, la pinède et le sable",
          description:
            "À une heure de Lisbonne, les rizières laissent place aux pins, puis au sable. Rien n'y dépasse la hauteur des arbres. Des dauphins vivent à l'année dans l'estuaire du Sado et l'on part parfois les voir au lever du jour.",
          image: {
            src: "/destination/portugal/map-comporta.png",
            alt: "Cabanes de pêcheurs et rizières près de la plage de Comporta",
          },
          coordinates: { lat: 38.3833, lng: -8.7833 }, // TODO: verify coords
        },
        {
          title: "L'Algarve, de Lagos à Sagres",
          description:
            "La côte se creuse en falaises ocre et en petites criques que l'on rejoint par la mer. Sagres ferme le pays au sud-ouest : c'est de là que partaient les navigateurs, et l'on comprend pourquoi en regardant l'horizon.",
          image: {
            src: "/destination/portugal/map-algarve.png",
            alt: "Arches de grès et criques de la côte de l'Algarve près de Lagos",
          },
          coordinates: { lat: 37.1028, lng: -8.6742 }, // TODO: verify coords
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Ce que les guides ne disent pas",
      heading: "Ce que l'on aimerait vous dire avant le départ",
      description:
        "Des observations de terrain, glanées à force d'y retourner. De quoi comprendre pourquoi nous plaçons telle étape à telle heure.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          title: "Lisbonne se monte à pied",
          cardEyebrow: "Ville",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "La ville grimpe, et ses pavés deviennent glissants dès qu'il pleut",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les trottoirs de Lisbonne sont faits de petits pavés de calcaire
                polis par le temps, très beaux et très glissants dans les
                descentes. Le tramway qui fait le tour des collines se remplit
                dès le milieu de la matinée, alors que les ascenseurs et les
                funiculaires de la ville restent tranquilles.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Prévoyez des semelles souples qui accrochent, et laissez le cuir
                lisse à la maison. Le plus agréable est de monter en voiture
                jusqu'au belvédère, puis de redescendre à pied.
              </p>
            </div>
          ),
        },
        {
          title: "Où se baigner, et de quel côté",
          cardEyebrow: "Baignade",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "L'eau est vive sur la côte ouest, douce et calme du côté de l'Algarve",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Un courant venu du nord longe la côte ouest et garde l'océan
                frais, même au plus chaud de l'été. Le vent se lève souvent en
                début d'après-midi. Passé le cap de Sagres, la mer change
                complètement : elle devient abritée, tiède et calme.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Les baignades le matin sur la côte ouest, et les après-midi à
                l'abri. Avec de jeunes enfants, nous plaçons la partie mer du
                côté de la Ria Formosa, où l'eau est douce et peu profonde.
              </p>
            </div>
          ),
        },
        {
          title: "Comporta, une question de saison",
          cardEyebrow: "Plage",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "En août, tout Lisbonne y descend. En juin et en septembre, la plage est à vous",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Comporta est le lieu de vacances des Lisboètes, et cela se sent
                pendant tout le mois d'août : les tables se réservent longtemps
                à l'avance et la route se charge le vendredi soir. En juin et en
                septembre, l'eau est la même et la plage se garde pour vous.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous plaçons cette étape en début ou en fin de saison chaque
                fois que votre calendrier le permet, et nous gardons les villas
                les plus retirées de la pinède.
              </p>
            </div>
          ),
        },
        {
          title: "Le porto, et surtout les vins du domaine",
          cardEyebrow: "Vin",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Le pays produit bien plus de vins secs que de porto, et personne ne le sait",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les vignes du Douro donnent aussi des rouges secs magnifiques,
                que l'on sert au domaine avant même de parler de porto.
                L'Alentejo produit des vins généreux et solaires, et le nord un
                vin blanc léger et frais que l'on boit à l'apéritif.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Une dégustation dans une quinta de famille du Douro, loin des
                circuits de visite, avec le vigneron et les vieux millésimes de
                sa réserve. Et les caves de Vila Nova de Gaia le matin, avant
                l'ouverture au public.
              </p>
            </div>
          ),
        },
        {
          title: "À table",
          cardEyebrow: "Table",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "La morue sous toutes ses formes, les coquillages en cataplana, et le pastel de nata encore tiède",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                On déjeune tard et l'on dîne tard, rarement avant vingt heures.
                Les petiscos se partagent au milieu de la table, comme des tapas
                en plus copieux. Les meilleures adresses à coquillages sont
                souvent les plus simples, éclairées au néon, où l'on sert le
                crustacé au poids. Le pastel de nata se mange tiède, tout juste
                sorti du four, avec un peu de cannelle.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous réservons les tables de village qui ne prennent pas de
                réservation en ligne, et nous organisons un déjeuner chez un
                producteur de l'Alentejo, à l'ombre des chênes-lièges.
              </p>
            </div>
          ),
        },
        {
          title: "Le fado, où l'écouter vraiment",
          cardEyebrow: "Musique",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Les grandes salles à dîner-spectacle, ou une petite chapelle qui n'ouvre qu'à la nuit",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le fado se chante dans le silence complet : on ne parle pas, on
                ne trinque pas, on ne photographie pas. Les grandes maisons du
                Bairro Alto enchaînent deux services par soir pour les groupes.
                Dans l'Alfama, quelques salles minuscules attendent que les
                chanteurs aient fini de travailler ailleurs en ville, et
                commencent bien plus tard.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Deux places dans une ancienne chapelle couverte d'azulejos, avec
                un dîner léger avant, pour tenir jusqu'à la deuxième partie.
              </p>
            </div>
          ),
        },
        {
          title: "Le Douro au fil des saisons",
          cardEyebrow: "Saison",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "La vallée change complètement de couleur entre le printemps et l'automne",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Au printemps, les coteaux sont d'un vert tendre et les amandiers
                fleurissent au-dessus de l'eau. L'été est chaud et sec, ce qui
                rend les fins de journée sur le fleuve particulièrement
                agréables. En septembre et en octobre, la vallée passe au roux
                et à l'or pendant la récolte, et l'animation gagne les domaines.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                L'automne est notre saison préférée, mais c'est aussi la plus
                demandée : les plus belles maisons de la vallée se réservent
                longtemps à l'avance. Nous posons les dates dès que votre
                projet se précise.
              </p>
            </div>
          ),
        },
        {
          title: "Dans la valise",
          cardEyebrow: "Bagages",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Un coupe-vent même en été, des chaussures qui tiennent sur le pavé, une tenue pour le soir",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le vent de l'après-midi rafraîchit joliment la côte, et les
                soirées au bord de l'eau restent fraîches tout l'été. Dans
                l'Alentejo, c'est l'inverse : les journées y sont sèches et
                lourdes, et l'ombre devient précieuse.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Trois couches légères, un maillot qui sèche vite et une tenue
                habillée. Dans les salles à manger de Lisbonne et du Douro, on
                met une veste le soir.
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
            "Nous voulions voir le Douro, et nous avons vendangé. Deux heures dans la cuve, puis le dîner avec ceux qui avaient travaillé la journée. Je ne pensais plus avoir de première fois comme celle-là.",
          image: {
            src: "/destination/portugal/hero-1.png",
            alt: "Portrait de Bernard", // TODO: verify
          },
          name: "Bernard", // TODO: verify
          role: "Voyage en couple, septembre 2025", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Trois enfants, dont un petit qui n'entre pas dans l'eau froide. Carole a mis la mer du côté de la Ria Formosa et gardé Lisbonne pour la fin. Personne ne s'est plaint de marcher, ce qui n'arrive jamais chez nous.",
          image: {
            src: "/destination/portugal/hero-2.png",
            alt: "Portrait de Constance", // TODO: verify
          },
          name: "Constance", // TODO: verify
          role: "Voyage en famille, juin 2026", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Une semaine sans ouvrir une carte ni choisir un restaurant. La maison de Comporta était à quelques minutes de la plage et le chauffeur savait où aller sans que j'aie à le dire. C'est exactement ce que je cherchais.",
          image: {
            src: "/destination/portugal/hero-3.png",
            alt: "Portrait de Frédéric", // TODO: verify
          },
          name: "Frédéric", // TODO: verify
          role: "Séjour en famille, juillet 2025", // TODO: verify
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
          question: "Quelle est la meilleure période pour partir au Portugal ?",
          answer:
            "De mai à octobre pour la mer, avec juillet et août les plus chauds et les plus fréquentés. Septembre est le mois des vendanges dans le Douro. Pour Lisbonne et Porto, avril, mai et octobre offrent la meilleure lumière sans la chaleur.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris ?",
          answer:
            "Environ 2h30 en vol direct jusqu'à Lisbonne, 2h15 jusqu'à Porto et 2h45 jusqu'à Faro. Plusieurs départs quotidiens depuis Paris, Lyon, Marseille, Nice et Bordeaux.",
        },
        {
          question: "Faut-il un visa pour aller au Portugal ?",
          answer:
            "Non. Le Portugal fait partie de l'Union européenne et de l'espace Schengen : une carte nationale d'identité ou un passeport en cours de validité suffit pour les ressortissants français et européens.",
        },
        {
          question: "Que faire au Portugal en dix jours ?",
          answer:
            "Trois nuits à Lisbonne pour la ville, Sintra et le Tage. Trois nuits dans le Douro, en quinta, pour les vignes et le fleuve. Puis quatre nuits sur la côte, à Comporta ou sur l'Algarve. Chaque trajet se fait en voiture privée, et nous prévoyons une étape agréable à mi-chemin plutôt qu'une longue route d'affilée.",
        },
        {
          question:
            "Où se baigner au Portugal quand on voyage avec des enfants ?",
          answer:
            "Sur la côte ouest, de Comporta à Sagres, l'océan reste frais et venté l'après-midi. Avec de jeunes enfants, mieux vaut prévoir la partie mer sur l'Algarve, notamment autour de la Ria Formosa, où l'eau est plus douce, calme et peu profonde.",
        },
        {
          question: "Quel budget prévoir pour un voyage au Portugal ?",
          answer:
            "Le budget dépend des hébergements, de la saison et de la part de voiture avec chauffeur dans l'itinéraire. Nous construisons chaque voyage sur mesure et vous présentons un budget détaillé avant toute réservation, sans engagement.",
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
        "D'autres rivages d'Europe où la table, la vigne et l'histoire donnent le rythme du voyage.",
      slugs: ["grece", "italie", "madere"],
    },
  ],
};
