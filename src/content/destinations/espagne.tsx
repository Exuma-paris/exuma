import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "espagne",
  name: "Espagne",
  placeKind: "country",
  country: "Espagne",
  genitive: "de l'Espagne",
  continentSlug: "europe",
  blurb: "Grenade, Séville, le Pays basque, Majorque",
  keywords: [
    "espagne",
    "andalousie",
    "alhambra",
    "grenade",
    "seville",
    "pays basque",
    "saint sebastien",
    "majorque",
    "ribera del duero",
  ],
  metaTitle: "Espagne : Voyage sur mesure",
  metaDescription:
    "Voyage en Espagne sur mesure : Alhambra de Grenade, tables basques, Ribera del Duero, Serra de Tramuntana. Itinéraire écrit par votre travel designer Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe en Espagne",
      heading: "L'Espagne, de l'Alhambra aux tables du Pays basque",
      description:
        "L'Espagne ne se visite pas d'un seul tenant, elle se savoure région par région. L'Andalousie se vit à l'ombre des patios, le Pays basque autour d'une table, et Majorque au rythme de la montagne qui descend vers la mer. C'est cette Espagne-là que nous vous montrons.",
      images: [
        {
          src: "/destination/espagne/hero-1.png",
          alt: "Cour des Lions de l'Alhambra de Grenade au crépuscule, voyage en Espagne",
        },
        {
          src: "/destination/espagne/hero-2.png",
          alt: "Baie de la Concha à Saint-Sébastien au lever du jour, Pays basque",
        },
        {
          src: "/destination/espagne/hero-3.png",
          alt: "Terrasses d'oliviers de la Serra de Tramuntana à Majorque",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Notre rôle dans ce voyage",
      heading: "Un seul interlocuteur, du premier échange jusqu'au retour",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "stephane",
        // TODO: verify quote attribution
        quote:
          "On croit connaître l'Espagne parce qu'on y est déjà allé, un week-end à Barcelone ou un été au bord de la mer. Le voyage commence vraiment quand on accepte de ralentir et de n'en garder que quelques régions : le nord pour la table, l'Andalousie pour les palais, une île pour finir. Tout le reste, ce sont des portes que l'on fait ouvrir pour vous.",
        role: "Travel Designer · Espagne",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Ouverture",
      heading: "L'Espagne, la douceur de vivre à l'ombre des patios",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Un voyage en Espagne commence souvent à Grenade, dans les jardins de l'Alhambra. Les Nasrides ont bâti ce palais autour de l'eau, qui court d'un bassin à l'autre et rafraîchit les cours avant même que l'on y entre. On s'y attarde bien plus longtemps que prévu, simplement pour écouter.",
        "Le pays se déguste ensuite du sud au nord. L'Andalousie se visite le matin puis se vit à l'ombre, entre les patios fleuris de Cordoue et les ruelles de Séville. Le Pays basque se raconte autour d'une table, à Saint-Sébastien où l'on passe d'un comptoir à l'autre, et à Getaria où le poisson cuit doucement sur la braise. La Castille garde ses vignes et ses caves sous les villages de la Ribera del Duero. Puis vient une île, pour finir les pieds dans l'eau.",
        "« Il n'y a pas une Espagne mais plusieurs, et tout le plaisir du voyage tient à celles que l'on choisit. Nous les connaissons une à une, et nous vous y conduisons. »",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/espagne/full-image.png",
        alt: "Patios et azulejos de l'Alcázar de Séville en fin de journée, voyage en Espagne",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "La Serra de Tramuntana",
      heading: "Majorque, les oliviers en terrasses au-dessus de la mer",
      theme: "light",
      paragraphs: [
        "Sur la côte nord de Majorque, la montagne descend jusqu'à la mer en larges terrasses plantées d'oliviers. Ces murets de pierre sèche ont été montés à la main, génération après génération, pour retenir la terre sur la pente. Le paysage tout entier est l'œuvre de ceux qui y ont vécu, et l'UNESCO l'a distingué pour cette raison.",
        "La route de corniche qui la traverse relie des villages où l'on a envie de s'arrêter. Banyalbufar et ses vignes suspendues au-dessus de l'eau, Deià où Robert Graves a passé sa vie, Valldemossa où Chopin est venu chercher la douceur d'un hiver espagnol. Hors saison, on n'y croise que des cyclistes et quelques chèvres.",
        "À la fin de l'hiver, les amandiers fleurissent avant tout le reste et la montagne se couvre de blanc.",
      ],
      images: [
        {
          src: "/destination/espagne/split-1.png",
          alt: "Terrasses d'oliviers en pierre sèche au-dessus de la mer à Banyalbufar",
        },
        {
          src: "/destination/espagne/split-2.png",
          alt: "Ruelle de pierre du village de Deià à Majorque",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/espagne/xp-alhambra-1.png",
          alt: "Cour des Lions de l'Alhambra vidée de ses visiteurs en fin de journée",
        },
        right: {
          src: "/destination/espagne/xp-alhambra-2.png",
          alt: "Coupole de mocárabes d'une salle nasride de l'Alhambra en lumière douce",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "L'Alhambra rien que pour vous, quand les visiteurs sont partis",
        columns: [
          "Quand les derniers visiteurs quittent l'Alhambra en fin de journée, le gardien rouvre la grille pour un tout petit groupe. Les palais nasrides se vivent alors comme ils ont été pensés, dans le silence et la lumière qui baisse. Dans la salle des Deux Sœurs, la coupole se met à ressortir alvéole après alvéole, et l'on comprend enfin ce que les artisans avaient en tête.",
          "On traverse ensuite la cour des Lions sans personne devant les colonnes, et l'on entend enfin la fontaine. Un historien de l'art accompagne le groupe et parle à voix basse, parce qu'il n'y a plus besoin d'élever la voix. C'est un moment que la journée ne donne jamais, et nous vous y conduisons.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Espagne",
      heading: "Nos coups de cœur en Espagne",
      description:
        "Un txoko basque que l'on ouvre pour vous seuls, un élevage de chevaux andalous à Jerez, une cave de la Ribera del Duero où le maître de chai sert lui-même les vieux millésimes. Des portes qui ne s'ouvrent pas en ligne.",
      slugs: [
        "txoko-san-sebastian",
        "chevaux-carthusiens-jerez",
        "vega-sicilia-grands-millesimes",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements en Espagne",
      heading: "Où séjourner",
      description:
        "Trois maisons qui n'ont en commun que le soin apporté à vos matins. Une colline basque au-dessus de la mer, une grande finca andalouse au milieu des jardins, un domaine majorquin posé sur ses terrasses d'oliviers.",
      slugs: ["akelarre", "finca-cortesin", "son-bunyola"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Avant le départ",
      heading: "Préparer votre voyage en Espagne",
      description:
        "Temps de vol, décalage, monnaie, formalités et meilleure saison : l'essentiel pour préparer le voyage sereinement.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Environ 2h05 en vol direct depuis Paris vers Madrid et 1h50 vers Barcelone. Séville, Bilbao, Grenade et Palma de Majorque sont accessibles en vol direct selon les périodes et les compagnies, ou avec correspondance.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Aucun décalage avec la France : l'Espagne continentale et les Baléares vivent sur le même fuseau. Seules les Canaries ont une heure de retard.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "L'euro. Aucune conversion, aucun risque de change. Les cartes bancaires sont très largement acceptées, mais il est utile de conserver un peu d'espèces pour les petits commerces.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "L'Espagne est dans l'espace Schengen. Pour les ressortissants français et européens, une carte nationale d'identité ou un passeport en cours de validité suffit, sans visa.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin spécifique n'est généralement requis pour un séjour depuis la France. Il est recommandé d'être à jour des vaccinations habituelles.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "D'avril à juin et de septembre à octobre pour la plus grande partie du pays. L'Andalousie est déjà chaude dès le mois de juin, tandis que le nord reste frais plus longtemps. Aux Baléares, la mer reste douce jusqu'à la fin de l'automne.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "Le castillan est parlé dans tout le pays. Selon les régions, le catalan et le valencien, le basque, le galicien ou l'aranais ont également un statut officiel. L'anglais est courant dans l'hôtellerie, le français plus rare hors des grandes villes.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Méditerranéen sur la côte est et aux Baléares, océanique et verdoyant sur la côte nord, sec et contrasté sur les plateaux de Castille. Les Canaries, elles, vivent une douceur subtropicale toute l'année.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Espagne. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/espagne/bento-${
            ["map", "adresses", "hebergements", "conciergerie", "experiences"][i]
          }.png`,
          alt: [
            "Carte d'un itinéraire sur mesure en Espagne",
            "Patio andalou fleuri aux azulejos bleus et blancs",
            "Chambre ouverte sur la mer Cantabrique au Pays basque",
            "Concierge coordonnant un transfert privé en Andalousie",
            "Table dressée sous une treille dans une finca andalouse",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Que voir en Espagne",
      heading: "De Grenade à Majorque, les étapes qui marquent le voyage",
      description:
        "Grenade, Séville, Madrid, Saint-Sébastien, la Serra de Tramuntana et la Ribera del Duero. Voici les lieux autour desquels s'organisent la plupart de nos itinéraires.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      initialZoom: 6,
      places: [
        {
          title: "Grenade et l'Alhambra",
          description:
            "Le dernier palais des rois nasrides veille sur la ville depuis sa colline, face aux terrasses blanches de l'Albaicín. On y entre à une heure précise, et cette heure change tout au plaisir de la visite.",
          image: {
            src: "/destination/espagne/map-grenade.png",
            alt: "L'Alhambra de Grenade devant les sommets de la Sierra Nevada",
          },
          coordinates: { lat: 37.1761, lng: -3.5881 }, // TODO: verify coords
        },
        {
          title: "Séville, l'Alcázar et Triana",
          description:
            "Un palais mudéjar aux patios frais, une cathédrale immense, et de l'autre côté du Guadalquivir le quartier de Triana, où le flamenco se danse encore entre voisins.",
          image: {
            src: "/destination/espagne/map-seville.png",
            alt: "Patio de l'Alcázar de Séville et ses arcades mudéjares",
          },
          coordinates: { lat: 37.3826, lng: -5.9963 }, // TODO: verify coords
        },
        {
          title: "Madrid et ses musées",
          description:
            "Le Prado, le Thyssen-Bornemisza et le Reina Sofía se suivent le long d'une même promenade. On y passe la matinée avec Vélasquez et Goya, puis on va déjeuner dans le quartier des Lettres.",
          image: {
            src: "/destination/espagne/map-madrid.png",
            alt: "Façade du musée du Prado sur le paseo del Prado à Madrid",
          },
          coordinates: { lat: 40.4138, lng: -3.6921 }, // TODO: verify coords
        },
        {
          title: "Saint-Sébastien et la côte basque",
          description:
            "La baie de la Concha dessine un croissant parfait au pied de la vieille ville. On y vient pour les comptoirs à pintxos, puis pour la route de Getaria et d'Axpe, où la braise fait tout le travail.",
          image: {
            src: "/destination/espagne/map-saint-sebastien.png",
            alt: "Baie de la Concha à Saint-Sébastien vue du Monte Igueldo",
          },
          coordinates: { lat: 43.3183, lng: -1.9812 }, // TODO: verify coords
        },
        {
          title: "La Serra de Tramuntana",
          description:
            "La montagne majorquine descend vers la mer en terrasses d'oliviers, entre Banyalbufar, Deià et Valldemossa. On y roule lentement, les fenêtres ouvertes.",
          image: {
            src: "/destination/espagne/map-tramuntana.png",
            alt: "Route en corniche de la Serra de Tramuntana au-dessus de la Méditerranée",
          },
          coordinates: { lat: 39.6869, lng: 2.5147 }, // TODO: verify coords
        },
        {
          title: "La Ribera del Duero",
          description:
            "Sur les hauts plateaux de Castille, le tempranillo prend son temps et donne des vins profonds. Les plus belles caves se visitent sous les maisons, creusées dans la pierre.",
          image: {
            src: "/destination/espagne/map-ribera-del-duero.png",
            alt: "Vignes de la Ribera del Duero au pied du château de Peñafiel",
          },
          coordinates: { lat: 41.5983, lng: -4.1156 }, // TODO: verify coords
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Ce que les guides ne disent pas",
      heading: "Les conseils de nos experts pour votre voyage en Espagne",
      description:
        "Huit observations de terrain qui ne se trouvent pas dans un guide, pour choisir vos étapes et comprendre pourquoi nous les inscrivons à votre itinéraire.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          title: "Prenez l'heure espagnole",
          cardEyebrow: "Rythme",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "On déjeune tard et l'on dîne plus tard encore. C'est là que la journée devient agréable",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                En Espagne, la vie se décale doucement vers le soir. Les
                cuisines s'animent quand la chaleur retombe, les comptoirs à
                tapas se remplissent à la nuit tombante, et l'on dîne longuement
                sans regarder l'heure. Vouloir garder ses horaires français
                revient à manger seul dans une salle vide.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous plaçons les visites le matin, nous laissons l'après-midi
                respirer, et nous réservons les tables au moment où la ville s'y
                met.
              </p>
            </div>
          ),
        },
        {
          title: "L'Alhambra se mérite un peu",
          cardEyebrow: "Grenade",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Les palais nasrides se visitent sur créneau, et les plus beaux moments partent longtemps à l'avance",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L'entrée dans les palais nasrides se fait à une heure précise, et
                le nombre de visiteurs y est limité. Les créneaux du tout début
                de matinée et de la fin de journée, les plus doux, disparaissent
                bien avant les autres. Les jardins du Generalife, eux, se
                parcourent librement.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous obtenons une entrée après la fermeture au public, avec un
                historien de l'art et un tout petit groupe. C'est la seule façon
                de traverser la cour des Lions sans personne devant les
                colonnes.
              </p>
            </div>
          ),
        },
        {
          title: "L'Andalousie s'apprécie à la bonne saison",
          cardEyebrow: "Saison",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Au printemps et à l'automne, Séville et Cordoue se découvrent avec un vrai plaisir",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La vallée du Guadalquivir devient brûlante au cœur de l'été. Les
                patios, les murs épais et les fontaines ont été pensés pour
                cela, mais on préfère largement découvrir Séville et Cordoue au
                printemps ou à l'automne, quand la ville reste dehors du matin
                au soir.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Si les dates d'été s'imposent, nous inversons le programme :
                l'Andalousie aux heures douces, et le cœur du séjour vers le
                nord ou les Baléares.
              </p>
            </div>
          ),
        },
        {
          title: "Le nord se mange",
          cardEyebrow: "Table",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Autour de Saint-Sébastien, la braise est un art, et certaines maisons ne s'ouvrent qu'aux habitués",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le Pays basque se raconte à table. À Getaria, le turbot cuit
                entier au-dessus des braises, retourné à la main. À Axpe, tout
                passe par le feu de bois, jusqu'au dessert. Et dans chaque
                quartier de Saint-Sébastien, des txokos, ces sociétés
                gastronomiques où l'on cuisine soi-même, restent fermés aux
                visiteurs.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous faisons ouvrir un txoko pour un dîner, et nous réservons
                les grandes maisons de braise qui ne prennent pas de réservation
                en ligne.
              </p>
            </div>
          ),
        },
        {
          title: "Laissez la voiture quand vous le pouvez",
          cardEyebrow: "Sur place",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Le train relie les grandes villes en douceur, la voiture avec chauffeur ouvre les villages",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Entre Madrid, Séville et Barcelone, le train est de loin le plus
                agréable : on part du centre, on arrive au centre, et l'on n'a ni
                parking ni ruelle interdite à négocier. La voiture reprend tout
                son intérêt pour les villages blancs d'Andalousie, les caves de
                la Ribera del Duero et la corniche majorquine.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous combinons les deux, avec un chauffeur partout où la route
                fait elle-même partie du plaisir.
              </p>
            </div>
          ),
        },
        {
          title: "Séville au printemps, deux fêtes à connaître",
          cardEyebrow: "Calendrier",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "La Semaine sainte puis la Feria d'avril transforment la ville. Superbe, à condition de le savoir",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Pendant la Semana Santa, les processions traversent Séville jour
                et nuit et les quartiers se ferment à mesure qu'elles avancent.
                La Feria de Abril prend le relais peu après, avec ses casetas et
                ses robes à volants. La ville est alors magnifique, mais elle vit
                à son rythme et non au vôtre.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Soit nous venons pour cela, avec un balcon réservé sur le
                parcours d'une procession, soit nous décalons le séjour de
                quelques jours.
              </p>
            </div>
          ),
        },
        {
          title: "Majorque au printemps ou à l'automne",
          cardEyebrow: "Îles",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Même mer, même lumière, et la montagne retrouve tout son calme",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Majorque au cœur de l'été et Majorque à l'automne sont deux îles
                différentes. Hors saison, la Serra de Tramuntana redevient un
                pays de bergers et de cyclistes, les criques du nord s'atteignent
                sans attendre, et la mer reste douce très tard dans l'année.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous logeons du côté de la Tramuntana plutôt que sur la côte
                sud : on garde la mer, on gagne le paysage et le silence.
              </p>
            </div>
          ),
        },
        {
          title: "Le vin espagnol ne se résume pas à la Rioja",
          cardEyebrow: "Vin",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Ribera del Duero, Priorat, Jerez, Rías Baixas : quatre plaisirs très différents",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Sur les plateaux de Castille, la Ribera del Duero donne des
                rouges profonds que l'on garde longtemps. En Catalogne, le
                Priorat pousse sur des pentes de schiste et concentre tout dans
                le verre. À Jerez, les xérès reposent dans des fûts que l'on ne
                vide jamais complètement, si bien qu'on y goûte plusieurs
                générations à la fois. Et en Galice, l'albariño se boit face à
                l'Atlantique, avec des coquillages.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous ouvrons pour vous des caves fermées aux visiteurs, où c'est
                le maître de chai lui-même qui sert.
              </p>
            </div>
          ),
        },
      ],
    },

    {
      type: "spotsList",
      eyebrow: "Récits de voyage",
      heading: "Trois scènes d'un voyage en Espagne",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      spots: [
        {
          title: "L'Alhambra après la fermeture",
          description:
            "Une poignée de visiteurs dans la cour des Lions, un historien qui parle tout bas. Passé un certain silence, on n'entend plus que l'eau.",
        },
        {
          title: "Trois régions, pas dix",
          description:
            "L'Andalousie, le Pays basque, puis Majorque. Choisir quelques régions plutôt que tout voir est la seule façon de ne pas courir.",
        },
        {
          title: "Un txoko de Saint-Sébastien",
          description:
            "On y cuisine soi-même, la maison n'est ouverte à personne d'autre ce soir-là. On en repart avec le sentiment d'avoir été reçu.",
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
          question: "Quelle est la meilleure période pour partir en Espagne ?",
          answer:
            "D'avril à juin et de septembre à octobre pour la plus grande partie du pays. Tout dépend ensuite de la région : l'Andalousie est déjà chaude dès le mois de juin, tandis que le nord reste frais plus longtemps et que les Baléares se baignent jusqu'à la fin de l'automne. Le cœur de l'été reste beau dans le sud, à condition d'organiser les journées autrement.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris ?",
          answer:
            "Comptez environ 2h05 en vol direct vers Madrid et 1h50 vers Barcelone. Séville, Bilbao, Grenade et Palma de Majorque sont accessibles en vol direct depuis Paris selon les périodes et les compagnies, ou avec correspondance.",
        },
        {
          question: "Faut-il un visa pour aller en Espagne ?",
          answer:
            "Non. L'Espagne fait partie de l'espace Schengen : pour les ressortissants français et européens, une carte nationale d'identité ou un passeport en cours de validité suffit, sans visa.",
        },
        {
          question: "Quelles régions d'Espagne choisir pour un premier voyage ?",
          answer:
            "L'Andalousie pour Grenade, Séville et Cordoue, le Pays basque pour la table et la côte, la Castille pour Madrid et la Ribera del Duero, et les Baléares pour finir au bord de l'eau. Nous conseillons d'en retenir quelques-unes qui se complètent plutôt que de vouloir tout voir.",
        },
        {
          question:
            "Combien d'étapes prévoir pour un voyage de deux semaines en Espagne ?",
          answer:
            "Sur deux semaines, un rythme agréable associe l'Andalousie, une étape en Castille autour de Madrid et de la Ribera del Duero, puis le Pays basque ou Majorque pour terminer. Nous glissons toujours une halte plaisante entre deux régions, une table ou une cave, pour que le trajet fasse partie du voyage.",
        },
        {
          question: "Quel budget prévoir pour un voyage en Espagne ?",
          answer:
            "Le budget dépend des hébergements, de la saison et de la part d'accès privés dans l'itinéraire. Nous construisons chaque voyage sur mesure et vous présentons un budget détaillé avant toute réservation, sans engagement.",
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
        "D'autres pays du sud de l'Europe où la table, la pierre et la mer se répondent, à composer sur mesure avec votre travel designer.",
      slugs: ["portugal", "italie", "grece"],
    },
  ],
};
