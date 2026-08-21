import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "france",
  name: "France",
  placeKind: "country",
  country: "France",
  genitive: "de la France",
  continentSlug: "europe",
  blurb: "Chambord, Reims, le Luberon, le Mont-Blanc",
  keywords: [
    "france",
    "loire",
    "champagne",
    "luberon",
    "provence",
    "cote d azur",
    "mont saint michel",
    "chamonix",
  ],
  metaTitle: "France : Voyage sur mesure",
  metaDescription:
    "Voyage en France sur mesure : châteaux de la Loire, Champagne, Luberon et Mont-Blanc. Itinéraire écrit par votre travel designer Exuma, conciergerie 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe en France",
      heading: "Toute la douceur de la France, de la Loire à la Méditerranée.",
      description:
        "On croit avoir déjà tout vu de la France. Et puis on découvre Chambord au lever du jour, avant que les grilles n’ouvrent. Un déjeuner sous les platanes dans un village du Luberon. Une cave de Champagne où il fait frais en plein mois d’août. C’est cette France-là que nous montrons.",
      images: [
        {
          src: "/destination/france/hero-1.png",
          alt: "Village de pierre dorée du Luberon dans la lumière du matin, en France",
        },
        {
          src: "/destination/france/hero-2.png",
          alt: "Château de Chambord émergeant de la brume de Sologne au lever du jour",
        },
        {
          src: "/destination/france/hero-3.png",
          alt: "Aiguilles de Chamonix et glaciers au-dessus de la vallée de l’Arve",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Notre rôle dans ce voyage",
      heading: "Un seul interlocuteur, du premier échange jusqu’au retour",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "taina",
        // TODO: verify quote attribution
        quote:
          "Mes clients ont souvent fait le tour du monde avant de voyager en France. Et puis un matin, ils s’arrêtent devant un château qui sort de la brume ou devant une table dressée au milieu des vignes, et je vois quelque chose se dénouer chez eux. C’est ce moment-là que je cherche à chaque fois. Tout le reste du voyage vient s’organiser autour.",
        role: "Travel Designer · France",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Ouverture",
      heading: "La France que l’on découvre en ralentissant",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Les plus beaux moments d’un voyage en France arrivent tôt le matin, quand tout est encore calme. Chambord flotte alors au-dessus de la brume de Sologne, le Mont-Saint-Michel se détache seul sur des sables luisants, et un marché de Provence embaume le melon, la lavande et le basilic.",
        "Les soirs, eux, ne se ressemblent jamais d’une région à l’autre. En Provence, la chaleur du jour s’attarde et les dîners s’étirent jusqu’à la nuit tombée. En Champagne, on descend dans la craie une veste sur les épaules, au mois d’août. Sur le cap Ferrat, la mer devient rose entre les pins et plus personne n’a envie de rentrer.",
        "« La France ne se visite pas. Elle se traverse lentement, et elle finit par rendre à chacun le temps qu’il lui aura donné. »",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/france/full-image.png",
        alt: "Vignes et village perché du Luberon au soleil couchant, dans le sud de la France",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Les régions",
      heading: "Chacune a son air, ses parfums et sa façon de vivre",
      theme: "light",
      paragraphs: [
        "La Normandie offre des ciels immenses et une odeur de sel qui ne quitte plus les vêtements. La Champagne garde sa fraîcheur sous terre, dans le blanc de la craie, même au plus fort de l’été. Le Luberon sent le thym et la pierre chaude jusque tard dans la soirée. Et à Chamonix, l’air devient si clair que l’on croit pouvoir toucher la montagne du doigt.",
        "Alors on ralentit, et c’est souvent là que le voyage commence. On reste deux ou trois nuits au même endroit, assez pour reconnaître le boulanger et savoir à quelle heure la place se remplit. On prend les petites routes, celles qui longent les vignes et passent sous les platanes, parce qu’on n’a plus tellement envie d’arriver.",
        "Le reste attendra. Il y aura toujours un prochain voyage.",
      ],
      images: [
        {
          src: "/destination/france/split-1.png",
          alt: "Route bordée de platanes traversant un plateau de Haute-Provence",
        },
        {
          src: "/destination/france/split-2.png",
          alt: "Étal d’un marché provençal installé à l’aube sous les arcades",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/france/xp-montgolfiere-1.png",
          alt: "Montgolfière au-dessus de la brume de Sologne au lever du jour",
        },
        right: {
          src: "/destination/france/xp-montgolfiere-2.png",
          alt: "Toits et cheminées du château de Chambord vus depuis les airs",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Chambord en montgolfière, quand la brume se lève",
        columns: [
          "La montgolfière décolle d’un champ de Sologne avant le lever du soleil. Le brûleur souffle, la toile se gonfle lentement au-dessus des têtes, et la terre s’éloigne sans que l’on ait senti le moindre mouvement. En dessous, la brume dort encore au creux des vallons. Puis Chambord apparaît, ses tours d’abord, ses toits ensuite, et toute cette forêt de cheminées que personne ne voit jamais d’en bas.",
          "Le vol dure une petite heure et se termine là où le vent en a décidé. On avance au ralenti au-dessus des bois et des étangs de Sologne, et le ballon ne monte que pour une famille à la fois. Puis la nacelle se pose dans un champ, une voiture arrive par le chemin, et le petit déjeuner se prend là, assis dans l’herbe, pendant que l’équipage replie la toile.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en France",
      heading: "Trois matins dont on se souvient longtemps",
      description:
        "Une baie que la mer découvre puis recouvre, une cave où l’on descend goûter ce qui n’est pas encore du champagne, et une montagne entière pour soi avant l’arrivée des premiers visiteurs.",
      slugs: [
        "baie-mont-saint-michel",
        "vins-clairs-champagne",
        "vallee-blanche-mont-blanc",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements en France",
      heading: "Où séjourner",
      description:
        "Trois maisons et trois lumières différentes : la pierre dorée d’un village du Luberon, un château endormi au milieu des bois de Sologne, une pointe de pins suspendue au-dessus de la Méditerranée.",
      slugs: [
        "la-bastide-de-gordes",
        "les-sources-de-cheverny",
        "grand-hotel-du-cap-ferrat",
      ],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Avant le départ",
      heading: "Préparer votre voyage en France",
      description:
        "Trajets, saison, climat et formalités : l’essentiel avant de partir.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Rien de long, où que l’on aille. Une heure de vol jusqu’à Nice ou Marseille, un peu moins d’une heure de train pour Reims ou pour la Loire. On part après le petit déjeuner et l’on déjeune sur place.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Aucun, où que l’on se rende. De la Manche à la Méditerranée, la France entière vit à la même heure.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "L’euro partout, et les cartes passent sans difficulté. Gardez tout de même quelques billets pour les marchés et pour les auberges de village.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Rien à prévoir pour les voyageurs français et européens. Pour les autres nationalités, la France relève du visa Schengen court séjour, selon le pays de résidence.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin obligatoire, et aucune précaution particulière à prendre avant de partir.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "Le printemps et le début de l’automne, quand les journées s’étirent, que les villages respirent et que les belles tables se réservent encore. La lavande fleurit en juillet et les vendanges commencent à la fin de l’été.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "Le français, bien sûr. L’anglais se parle dans les hôtels et sur la côte, plus rarement dans les villages de l’intérieur, où le sourire fait le reste.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Quatre douceurs pour un seul pays : les ciels lavés de l’Atlantique, les étés secs du Midi, les automnes dorés de l’Est et l’air léger des Alpes. Il arrive de passer de la chaleur à la fraîcheur dans la même journée.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Un voyage en France tient souvent à trois fois rien : une montgolfière qui décolle avant le jour, une cave que l’on ouvre pour vous seuls, une table de village que l’on ne trouve dans aucun moteur de réservation. Une seule personne réunit tout cela, et elle reste la vôtre jusqu’au retour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/france/bento-${
            ["map", "adresses", "hebergements", "conciergerie", "experiences"][i]
          }.png`,
          alt: [
            "Carte d’un itinéraire sur mesure entre la Loire, la Champagne et la Provence",
            "Ruelle pavée et façades de pierre dorée d’un village du Luberon",
            "Terrasse d’une bastide provençale ouverte sur la vallée au soleil couchant",
            "Concierge coordonnant un transfert privé entre deux régions françaises",
            "Table dressée au milieu des vignes de Champagne à la fin du jour",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Que voir en France",
      heading: "Six régions dont on ne revient pas tout à fait le même",
      description:
        "Le Mont-Saint-Michel, Chambord, Reims, le Luberon, le cap Ferrat, Chamonix. Nos itinéraires s’écrivent presque toujours autour de trois d’entre elles.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      initialZoom: 6,
      places: [
        {
          title: "Le Mont-Saint-Michel, Normandie",
          description:
            "La mer se retire si loin qu’elle finit par disparaître, puis elle revient. Entre les deux, la baie s’ouvre en un immense désert de sable clair que l’on traverse pieds nus, derrière un guide qui sait où poser le pied. Le Mont grandit droit devant, pendant toute la marche.",
          image: {
            src: "/destination/france/map-mont-saint-michel.png",
            alt: "Mont-Saint-Michel isolé dans sa baie à marée basse, en Normandie",
          },
          coordinates: { lat: 48.6361, lng: -1.5115 }, // TODO: verify coords
        },
        {
          title: "Chambord et les châteaux de la Loire",
          description:
            "Une forêt, un mur qui n’en finit pas de longer la route, et soudain ce château blanc posé là comme un rêve de roi. François Ier l’a voulu pour chasser. Tout autour, Cheverny, Chaumont et Villandry se rejoignent dans la même journée.",
          image: {
            src: "/destination/france/map-chambord.png",
            alt: "Façade et toitures du château de Chambord en val de Loire",
          },
          coordinates: { lat: 47.6161, lng: 1.5169 }, // TODO: verify coords
        },
        {
          title: "Reims et la Champagne",
          description:
            "Sous la ville s’ouvrent d’anciennes carrières de craie, où le froid et l’obscurité veillent sur les bouteilles depuis des siècles. En surface, la cathédrale des sacres, et les coteaux de la côte des Blancs à quelques minutes de route.",
          image: {
            src: "/destination/france/map-reims.png",
            alt: "Crayères de Champagne et rangées de bouteilles sous Reims",
          },
          coordinates: { lat: 49.2583, lng: 4.0317 }, // TODO: verify coords
        },
        {
          title: "Gordes et le Luberon",
          description:
            "Un village de pierre dorée accroché à sa falaise, face à toute la vallée. Les marchés se montent avant le jour à Apt, à Coustellet et à L’Isle-sur-la-Sorgue, et à midi il ne reste plus que l’odeur des melons sur le pavé.",
          image: {
            src: "/destination/france/map-gordes.png",
            alt: "Village de Gordes accroché à sa falaise au-dessus du Luberon",
          },
          coordinates: { lat: 43.9114, lng: 5.1985 }, // TODO: verify coords
        },
        {
          title: "Le cap Ferrat, Côte d’Azur",
          description:
            "Une presqu’île de pins posée entre Nice et Monaco, qu’un sentier contourne au ras de l’eau. Tout en haut, la villa Ephrussi de Rothschild laisse descendre ses jardins jusqu’à la mer.",
          image: {
            src: "/destination/france/map-cap-ferrat.png",
            alt: "Presqu’île du cap Ferrat et son sentier littoral au-dessus de la Méditerranée",
          },
          coordinates: { lat: 43.6874, lng: 7.332 }, // TODO: verify coords
        },
        {
          title: "Chamonix et le Mont-Blanc",
          description:
            "Le téléphérique s’élève dans le vide et dépose à l’Aiguille du Midi, au milieu des glaciers, là où l’air devient si léger qu’il en change la voix. De là part la vallée Blanche, une longue descente sur la glace jusqu’au fond de la vallée, encordé derrière un guide.",
          image: {
            src: "/destination/france/map-chamonix.png",
            alt: "Aiguille du Midi et massif du Mont-Blanc au-dessus de Chamonix",
          },
          coordinates: { lat: 45.9237, lng: 6.8694 }, // TODO: verify coords
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Ce que les guides ne disent pas",
      heading: "Ce que l’on aimerait vous dire avant le départ",
      description:
        "Quelques observations rapportées du terrain, à force d’y retourner. De quoi comprendre pourquoi nous plaçons telle étape à telle heure.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          title: "Aller moins loin, rester plus longtemps",
          cardEyebrow: "Itinéraire",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Tout semble à portée de main, et c’est justement ce qui épuise les voyages",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                En France, tout paraît accessible, alors la tentation est
                grande de vouloir tout prendre. Un itinéraire qui enchaîne la
                Normandie, la Loire, la Champagne et la Provence se transforme
                vite en couloir d’autoroute, et l’on rentre chez soi sans avoir
                eu un seul matin pour souffler.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Trois régions au maximum, et deux nuits au moins dans chacune.
                Le reste attendra, et c’est très bien ainsi : il y aura un
                prochain voyage.
              </p>
            </div>
          ),
        },
        {
          title: "Les marchés se font au petit jour",
          cardEyebrow: "Marchés",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Passé dix heures, il ne reste souvent que l’odeur des melons sur le pavé",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                En Provence, les maraîchers montent leur étal quand il fait
                encore frais et commencent à remballer avant midi. Les plus
                belles choses partent dans la première heure, souvent aux
                cuisiniers du coin. L’Isle-sur-la-Sorgue le dimanche, Apt le
                samedi, Coustellet le dimanche matin.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Y aller à l’ouverture, un café à la main, et avec un chef si le
                séjour s’y prête. Le déjeuner se cuisine ensuite avec ce que
                l’on a trouvé, et non avec une carte décidée la veille.
              </p>
            </div>
          ),
        },
        {
          title: "Le train pour venir, la voiture pour rester",
          cardEyebrow: "Transports",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Les longues distances se traversent en lisant. Le reste se roule",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Rejoindre la Provence, la Champagne ou la Loire depuis Paris se
                fait en train, presque sans y penser, et l’on arrive reposé.
                Rouler depuis Paris ajoute des heures d’autoroute qui n’ajoutent
                rien au voyage. Une fois sur place, en revanche, une région ne
                se découvre pas sans voiture.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Le train pour les longues étapes, la voiture avec chauffeur une
                fois arrivé. Les journées de marche et les journées de
                dégustation supposent quelqu’un au volant qui ne boit pas.
              </p>
            </div>
          ),
        },
        {
          title: "Les jours où tout ferme",
          cardEyebrow: "Timing",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Un lundi mal placé peut coûter une journée entière de voyage",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Beaucoup de musées ferment en début de semaine, les maisons de
                Champagne reçoivent peu le lundi, et les meilleures tables
                s’arrêtent dès le dimanche soir. Trois nuits mal placées
                perdent ainsi un bon tiers de leur programme.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous construisons les dates autour de ces fermetures plutôt que
                l’inverse. Certaines portes s’ouvrent malgré tout, mais elles se
                demandent longtemps à l’avance.
              </p>
            </div>
          ),
        },
        {
          title: "Les monuments, avant ou après tout le monde",
          cardEyebrow: "Accès",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Le même château, vide, une heure avant l’ouverture des grilles",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Aux heures d’affluence, Chambord et le Mont-Saint-Michel se
                regardent par-dessus des épaules. Les mêmes lieux, une heure
                avant l’ouverture ou juste après la fermeture, redeviennent
                silencieux et changent complètement de visage.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Ouvertures anticipées, visites du soir, guides conservateurs.
                Cela se négocie lieu par lieu, et toutes les dates ne sont
                malheureusement pas possibles.
              </p>
            </div>
          ),
        },
        {
          title: "Le dimanche soir en province",
          cardEyebrow: "Table",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "C’est le repas que l’on cale en premier, jamais en dernier",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Hors des grandes villes, presque tout ferme le dimanche soir et
                le lundi. Les bonnes maisons de campagne prennent leurs
                réservations des semaines à l’avance et n’ont bien souvent que
                deux services dans la soirée.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Garder ce soir-là pour la table de l’hôtel, ou pour une auberge
                réservée bien en amont. C’est celui que l’on choisit avant tous
                les autres.
              </p>
            </div>
          ),
        },
        {
          title: "La montagne n’a jamais deux fois la même saison",
          cardEyebrow: "Saison",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "La vallée Blanche se descend à la fin de l’hiver, jamais en été",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                À Chamonix, la haute montagne vit deux vies bien distinctes. La
                descente de la vallée Blanche réclame la neige de fin d’hiver.
                L’été venu, on monte à l’Aiguille du Midi pour la lumière et
                pour les arêtes, et les refuges rouvrent leurs portes.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Un guide de la Compagnie de Chamonix réservé longtemps à
                l’avance, et une journée de repli si le ciel venait à se fermer.
                C’est la météo qui décide, jamais le programme.
              </p>
            </div>
          ),
        },
        {
          title: "Dans la valise",
          cardEyebrow: "Bagages",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Quatre climats dans le même pays, parfois dans la même journée",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Un mois de mai donne la chaleur dans le Luberon et le froid en
                altitude. La baie du Mont-Saint-Michel se traverse pieds nus,
                dans une eau qui réveille. Et le vent de Champagne fait tomber
                la température dès que l’on passe à l’ombre des vignes.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Trois couches, une veste imperméable, des chaussures qui
                tiennent sur le pavé mouillé, et une tenue habillée. Plusieurs
                belles tables demandent encore la veste au dîner.
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
            "J’avais vu Chambord trois fois dans ma vie, toujours en plein après-midi et toujours au milieu de la foule. Le voir sortir de la brume depuis une nacelle, au petit matin, ce n’était plus du tout le même château.",
          image: {
            src: "/destination/france/hero-1.png",
            alt: "Portrait d’Édouard", // TODO: verify
          },
          name: "Édouard", // TODO: verify
          role: "Voyage anniversaire, mai 2026", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Nous étions trois générations pendant dix jours, et personne ne s’est plaint des trajets une seule fois. Tainà avait tout posé au bon rythme, les longues étapes en train et les matins réservés aux marchés. Mes parents en parlent encore.",
          image: {
            src: "/destination/france/hero-2.png",
            alt: "Portrait de Constance", // TODO: verify
          },
          name: "Constance", // TODO: verify
          role: "Voyage en famille, juin 2026", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Descendre dans la craie avec le chef de cave, goûter ce qui n’est pas encore du champagne, dans le froid et dans le silence. Nous n’avions jamais rien connu de tel, et surtout pas en France.",
          image: {
            src: "/destination/france/hero-3.png",
            alt: "Portrait de Bernard", // TODO: verify
          },
          name: "Bernard", // TODO: verify
          role: "Séjour en couple, septembre 2025", // TODO: verify
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
          question: "Quelle est la meilleure période pour visiter la France ?",
          answer:
            "Le printemps et le début de l’automne, quand les journées s’étirent, que les villages respirent et que les belles tables se réservent encore. Juillet et août concentrent le monde sur la côte et dans les châteaux de la Loire. La lavande fleurit en juillet et les vendanges commencent à la fin de l’été.",
        },
        {
          question: "Combien de régions peut-on voir en une semaine en France ?",
          answer:
            "Deux, et trois au maximum sur dix jours. Au-delà, le voyage se transforme en trajets. Nous comptons deux nuits au moins par étape et plaçons les longues distances en train, pour garder les journées entières sur place.",
        },
        {
          question: "Faut-il un visa pour venir en France ?",
          answer:
            "Aucune formalité pour les voyageurs français et européens. La France appartient à l’espace Schengen : les autres nationalités relèvent du visa court séjour, dont les conditions dépendent du pays de résidence. Nous vous indiquons la marche à suivre selon votre passeport.",
        },
        {
          question: "Vaut-il mieux voyager en train ou en voiture en France ?",
          answer:
            "Les deux, mais pas au même moment. Le train pour rejoindre la région, sans fatigue et sans autoroute. La voiture avec chauffeur une fois sur place, indispensable pour les villages, les domaines et les départs de marche.",
        },
        {
          question: "Que faire en France avec des enfants ?",
          answer:
            "La montgolfière au-dessus de Chambord, la traversée de la baie du Mont-Saint-Michel et les marchés de Provence plaisent à tous les âges. Nous choisissons des maisons où les générations logent séparément, et nous gardons les journées courtes.",
        },
        {
          question: "Quel budget prévoir pour un voyage sur mesure en France ?",
          answer:
            "Le budget dépend des hébergements, de la saison et de la part de voiture avec chauffeur dans l’itinéraire. Nous construisons chaque voyage sur mesure et vous présentons un budget détaillé avant toute réservation, sans engagement.",
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
        "Trois voisines de Méditerranée, où le voyage commence lui aussi à table.",
      slugs: ["grece", "rome", "corse"],
    },
  ],
};
