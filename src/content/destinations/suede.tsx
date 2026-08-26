import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "suede",
  name: "Suède",
  country: "Suède",
  genitive: "de la Suède",
  continentSlug: "europe",
  placeKind: "country",
  blurb: "Stockholm, l'archipel, la Laponie, Gotland",
  keywords: [
    "suede",
    "stockholm",
    "archipel de stockholm",
    "gotland",
    "visby",
    "laponie suedoise",
    "kiruna",
    "aurores boreales",
  ],
  metaTitle: "Suède : Voyage sur mesure",
  metaDescription:
    "Voyage en Suède sur mesure : archipel de Stockholm, Laponie polaire, Gotland. Itinéraire écrit par votre travel designer Exuma, conciergerie privée 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe en Suède",
      heading: "Trente mille îles au sud, la nuit polaire au nord",
      description:
        "L'archipel de Stockholm compte environ trente mille îles, îlots et rochers, entre lesquels on navigue plutôt que l'on ne circule. Mille kilomètres plus au nord, au-delà du cercle polaire, la Laponie suédoise bascule en hiver dans une nuit qui dure plusieurs semaines. Ce sont deux Suède, reliées par un seul vol intérieur.",
      images: [
        {
          src: "/destination/suede/hero-1.png",
          alt: "Voilier entre les îles de l'archipel de Stockholm, en Suède",
        },
        {
          src: "/destination/suede/hero-2.png",
          alt: "Aurores boréales au-dessus d'une cabane de Laponie suédoise",
        },
        {
          src: "/destination/suede/hero-3.png",
          alt: "Rochers de calcaire de l'île de Fårö, au large de Gotland",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Notre rôle dans ce voyage",
      heading: "Taïna, spécialiste de la Suède, reste votre interlocutrice",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "taina",
        // TODO: verify quote attribution
        quote:
          "La Suède n'est pas un pays qui se visite d'un bloc. L'archipel de Stockholm se découvre en bateau, l'été, quand les jours ne finissent presque pas. La Laponie se découvre en hiver, en traîneau, quand la nuit ne finit pas non plus. Je commence toujours par vous demander laquelle des deux vous appelle, avant de construire l'itinéraire.",
        role: "Travel Designer · Suède",
      },
      features: [
        {
          iconName: "badgeCheck",
          title: "Un archipel, pas une croisière",
          description:
            "Un skipper privé, pas un ferry de ligne. Nous réservons des mouillages au-delà de Vaxholm et de Sandhamn, hors des horaires de la navette publique.",
        },
        {
          iconName: "sparkles",
          title: "Le calendrier avant la carte",
          description:
            "L'Icehotel de Jukkasjärvi se reconstruit chaque hiver, le soleil de minuit dure de fin mai à début août au nord du cercle polaire. Nous choisissons la région selon vos dates, jamais l'inverse.",
        },
        {
          iconName: "star",
          title: "Des guides, pas des groupes",
          description:
            "Un éleveur same en Laponie, un maître verrier en Småland : les rencontres se négocient en direct, une famille ou un atelier à la fois.",
        },
      ],
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Ouverture",
      heading: "Un voyage en Suède qui tient sur deux latitudes",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Un voyage en Suède commence, comme en Norvège, par le choix d'une latitude. Au sud, Stockholm et son archipel de trente mille îles occupent la mer Baltique jusqu'à l'horizon. Mille kilomètres plus au nord, au-delà du cercle polaire, la Laponie suédoise bascule en une saison de neige et de nuit. Sur une carte, les deux régions semblent appartenir au même pays. Sur place, on ne fait pas du tout le même voyage.",
        "Autour de Stockholm, la ville se love entre quatorze îles reliées par des ponts, avant que l'archipel ne prenne le relais vers le large. Gamla Stan garde ses ruelles pavées du treizième siècle, tandis que le Vasamuseet abrite un navire de guerre de 1628, coulé au sortir du port et renfloué intact en 1961. Plus loin en mer, Vaxholm et Sandhamn marquent l'entrée de l'archipel habité ; au-delà, les îles se comptent par milliers et ne portent plus de nom. Dans la Baltique, au sud, l'île de Gotland garde la ville close de Visby et les rochers de calcaire de Fårö.",
        "Au nord, le décor change entièrement. La Laponie suédoise s'étend sur la province du Norrbotten, autour de Kiruna et de la rivière Lule. Les éleveurs sames y déplacent leurs troupeaux de rennes au rythme des saisons, une pratique transmise depuis des générations. À Jukkasjärvi, un hôtel de glace se reconstruit chaque hiver avec l'eau du fleuve voisin. Entre les deux régions, la province du Småland garde une tradition de verre soufflé installée depuis le dix-huitième siècle autour de Kosta et d'Orrefors.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/suede/full-image.png",
        alt: "Vue aérienne de l'archipel de Stockholm au coucher du soleil, Suède",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Gotland",
      heading: "Une île calcaire au milieu de la Baltique",
      theme: "light",
      paragraphs: [
        "Gotland se trouve à quatre-vingt-dix kilomètres des côtes suédoises, au milieu de la mer Baltique. Visby, sa capitale, a conservé son enceinte fortifiée du treizième siècle et figure au patrimoine mondial de l'UNESCO depuis 1995. Plus au nord, l'île de Fårö attire depuis les années 1960 les amateurs de cinéma : le réalisateur Ingmar Bergman y a vécu et tourné une partie de son œuvre, entre les rochers de calcaire appelés raukar, façonnés par la mer depuis la dernière glaciation.",
        "Sur la péninsule de Furillen, au nord-est de l'île, une ancienne carrière de calcaire a fermé dans les années 1970. Il ne reste qu'un phare, une usine désaffectée et un paysage minéral presque sans arbres. Ce sont ces terrains délaissés que quelques photographes et hôteliers ont commencé à réinvestir, sans jamais chercher à en corriger l'aspect brut.",
      ],
      images: [
        {
          src: "/destination/suede/split-1.png",
          alt: "Remparts médiévaux de Visby sur l'île de Gotland",
        },
        {
          src: "/destination/suede/split-2.png",
          alt: "Ancienne carrière de calcaire et phare sur la péninsule de Furillen",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/suede/xp-traineau-chiens-1.png",
          alt: "Attelage de chiens de traîneau glissant sur la neige en Laponie suédoise au crépuscule",
        },
        right: {
          src: "/destination/suede/xp-traineau-chiens-2.png",
          alt: "Aurores boréales vertes au-dessus d'une cabane en bois en Laponie suédoise",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Le silence d'une nuit polaire, en traîneau",
        columns: [
          "Le traîneau part au crépuscule, vers quinze heures en plein hiver polaire, depuis un chenil isolé en pleine forêt du Norrbotten. Un attelage de huit chiens, un musher, aucun autre groupe sur la piste. Le silence qui suit l'arrêt de l'attelage à mi-parcours n'est interrompu que par le vent dans les épicéas et, certaines nuits, le crépitement électrique des aurores boréales.",
          "On dort ensuite dans une cabane chauffée au bois, à l'écart de toute autre lumière artificielle. Par nuit claire, l'activité solaire décide de tout : certaines nuits, le ciel reste noir ; d'autres, une bande verte traverse l'horizon pendant une heure. Aucun opérateur ne garantit le spectacle. Le guide, lui, connaît les nuits où il vaut la peine de rester debout.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Suède",
      heading: "Trois rencontres qui organisent le voyage",
      description:
        "Une croisière à voile dans l'archipel de Stockholm, une rencontre avec une famille same et son troupeau de rennes, un après-midi dans un atelier de verre soufflé en Småland. Chacune dépend de la saison et se réserve à l'avance.",
      slugs: [
        "voile-archipel-stockholm",
        "rencontre-sames-rennes-laponie",
        "atelier-verre-smaland",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements en Suède",
      heading: "Trois adresses, trois Suède",
      description:
        "Un spa flottant sur la rivière Lule, des cabanes d'architectes suspendues dans la forêt de Harads, une ancienne carrière de calcaire réhabilitée sur Gotland. Aucune ne ressemble à une chaîne.",
      slugs: ["arctic-bath", "treehotel", "fabriken-furillen"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage en Suède",
      description:
        "Temps de vol, formalités, monnaie, saisons et lumière : l'essentiel pour choisir vos dates avant de choisir votre itinéraire.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Comptez environ 2h30 de vol direct entre Paris et Stockholm. Pour rejoindre la Laponie suédoise, un vol intérieur entre Stockholm et Kiruna dure environ 1h30 à 1h40.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Aucun. La Suède est sur le même fuseau horaire que la France et applique les mêmes changements d'heure.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "La monnaie est la couronne suédoise (SEK). Comptez environ 11 couronnes suédoises pour 1 euro, selon le taux de change. Le paiement par carte est largement privilégié en Suède, y compris pour les petites dépenses ; il est donc conseillé de voyager avec une carte bancaire plutôt qu'avec beaucoup d'espèces.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "La Suède est membre de l'Union européenne et de l'espace Schengen. Aucun visa n'est nécessaire pour les ressortissants français. Une carte nationale d'identité ou un passeport en cours de validité suffit pour entrer dans le pays. Les autorités françaises recommandent toutefois de privilégier un passeport valide ou une carte nationale d'identité au format électronique en cours de validité.",
        },
        {
          iconName: "syringe",
          title: "Vaccins",
          description:
            "Aucune vaccination particulière n'est exigée pour entrer en Suède. Il est recommandé d'être à jour des vaccinations du calendrier français. Pour les séjours en zone rurale ou boisée, notamment dans le centre et le sud du pays, une vaccination contre l'encéphalite à tiques peut être recommandée selon les conditions du voyage.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "De juin à août pour Stockholm, son archipel et les longues journées d'été. En Laponie, de décembre à mars pour profiter des paysages enneigés, des activités hivernales et de l'Icehotel. Pour les aurores boréales, la saison s'étend généralement de septembre à fin mars, avec des conditions particulièrement favorables pendant les mois les plus sombres de l'hiver.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "Le suédois est la langue officielle. L'anglais est très largement parlé dans le pays, notamment dans les villes et les principaux lieux touristiques. Dans les régions les plus septentrionales, on peut également entendre les langues sámi. Le français reste peu courant.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Le climat varie fortement selon les régions. À Stockholm, les étés sont doux, avec des températures généralement comprises entre 14°C et 23°C en juillet. En Laponie, les hivers sont longs, froids et enneigés, avec des températures pouvant descendre bien en dessous de -20°C et parfois sous -30°C. En été, les températures peuvent dépasser 20°C dans le nord. Au-delà du cercle polaire, le soleil ne se couche plus pendant plusieurs semaines autour du solstice d'été.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier suédois. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/suede/bento-${
            ["map", "adresses", "hebergements", "conciergerie", "experiences"][i]
          }.png`,
          alt: [
            "Carte d'itinéraire personnalisé entre l'archipel de Stockholm et la Laponie suédoise",
            "Adresse confidentielle en Suède, table ou atelier d'artisan",
            "Chambre design donnant sur la forêt suédoise",
            "Conseillère Exuma en conversation avec un voyageur",
            "Traîneau à chiens glissant sur la neige en Laponie suédoise",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les grandes étapes en Suède",
      heading: "Six lieux autour desquels s'organisent nos itinéraires",
      description:
        "Trois autour de Stockholm et de Gotland, trois en Laponie. La plupart de nos voyages se construisent sur l'un des deux blocs, ou sur les deux quand la durée le permet.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      initialZoom: 5,
      places: [
        {
          title: "Stockholm, Gamla Stan",
          description:
            "La vieille ville s'étend sur une seule île entre le lac Mälar et la Baltique, avec des ruelles qui datent du treizième siècle. C'est aussi le point de départ de tous les bateaux vers l'archipel.",
          image: {
            src: "/destination/suede/map-stockholm.png",
            alt: "Ruelles pavées de Gamla Stan, la vieille ville de Stockholm",
          },
          // TODO: verify coords
          coordinates: { lat: 59.3251, lng: 18.0711 },
        },
        {
          title: "Vaxholm",
          description:
            "Cette petite ville fortifiée marque l'entrée de l'archipel habité, à environ une heure de bateau de Stockholm. Au-delà, les liaisons régulières s'espacent et le nombre d'îles dépasse ce qu'aucune carte ne détaille.",
          image: {
            src: "/destination/suede/map-vaxholm.png",
            alt: "Forteresse et port de Vaxholm à l'entrée de l'archipel de Stockholm",
          },
          // TODO: verify coords
          coordinates: { lat: 59.4025, lng: 18.3539 },
        },
        {
          title: "Visby",
          description:
            "La capitale de Gotland a gardé son enceinte fortifiée du treizième siècle, longue de plus de trois kilomètres, et figure au patrimoine mondial de l'UNESCO depuis 1995.",
          image: {
            src: "/destination/suede/map-visby.png",
            alt: "Remparts fortifiés de Visby sur l'île de Gotland",
          },
          // TODO: verify coords
          coordinates: { lat: 57.6348, lng: 18.2948 },
        },
        {
          title: "Fårö",
          description:
            "Séparée de Gotland par un simple bras de mer, cette île de pêcheurs a accueilli le cinéaste Ingmar Bergman pendant plus de quarante ans. Les rochers de calcaire qui bordent ses plages ne se trouvent qu'ici et sur quelques îles voisines.",
          image: {
            src: "/destination/suede/map-faro.png",
            alt: "Rochers de calcaire (raukar) sur une plage de l'île de Fårö",
          },
          // TODO: verify coords
          coordinates: { lat: 57.9203, lng: 19.1449 },
        },
        {
          title: "Jukkasjärvi",
          description:
            "Un hôtel de glace se reconstruit ici chaque hiver depuis 1989, avec la neige et l'eau du fleuve Torne. Il fond entièrement chaque printemps et rouvre en décembre suivant.",
          image: {
            src: "/destination/suede/map-jukkasjarvi.png",
            alt: "Sculptures de glace de l'Icehotel de Jukkasjärvi en Laponie suédoise",
          },
          // TODO: verify coords
          coordinates: { lat: 67.8494, lng: 20.5955 },
        },
        {
          title: "Harads",
          description:
            "Un village de quelques centaines d'habitants au bord du fleuve Lule, connu depuis les années 2010 pour ses cabanes d'architectes suspendues dans la forêt. On y vient pour la forêt et pour la rivière, pas pour le village lui-même.",
          image: {
            src: "/destination/suede/map-harads.png",
            alt: "Forêt et fleuve Lule au bord du village de Harads, Laponie suédoise",
          },
          // TODO: verify coords
          coordinates: { lat: 66.3167, lng: 20.75 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage en Suède",
      description:
        "Huit observations de terrain qui expliquent pourquoi nous inscrivons une étape à une date plutôt qu'à une autre.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          title: "Dans ma valise",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Trois couches pour la Laponie, un simple lainage pour les soirs d'été à Stockholm",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Pour la Laponie en hiver : laine mérinos contre la peau,
                polaire ou duvet léger au milieu, coquille imperméable et
                coupe-vent par-dessus. Bottes isolées et moufles plutôt que
                gants pour les longues sorties en traîneau.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Pour l&apos;archipel en été, prévoyez tout de même un
                lainage léger : les nuits sur l&apos;eau restent fraîches
                même en juillet.
              </p>
            </div>
          ),
        },
        {
          title: "Choisir sa Suède",
          cardEyebrow: "Logistique",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "L'archipel et Gotland pour l'été, la Laponie pour l'hiver et la neige",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Au sud, l&apos;archipel de Stockholm et l&apos;île de
                Gotland se découvrent en bateau, de juin à août, sous une
                lumière qui ne faiblit presque pas. C&apos;est la Suède la
                plus simple à combiner avec une escale à Stockholm.
              </p>
              <p>
                Au nord, la Laponie suédoise se découvre en hiver, en
                traîneau ou en motoneige, sous une nuit qui peut durer
                plusieurs semaines. On y va pour la neige, le silence et les
                aurores.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                En dessous de dix jours, nous conseillons de n&apos;en
                choisir qu&apos;une. Relier les deux demande une journée
                entière de transport, avec un vol intérieur.
              </p>
            </div>
          ),
        },
        {
          title: "La lumière commande",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Soleil de minuit en été au nord, nuit polaire de plusieurs semaines en hiver",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Au-delà du cercle polaire, le soleil reste visible vingt-quatre
                heures sur vingt-quatre de fin mai à début août environ. À
                l&apos;inverse, pendant plusieurs semaines en hiver, il ne
                passe plus la ligne d&apos;horizon : il reste une clarté
                bleue de quelques heures en milieu de journée.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                À Stockholm, plus au sud, les écarts sont moins radicaux mais
                les soirées d&apos;été restent claires jusque tard, propices
                à un dîner sur l&apos;eau.
              </p>
            </div>
          ),
        },
        {
          title: "Voir les aurores boréales",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Entre septembre et mars, un ciel dégagé et loin des lumières de ville",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les aurores se voient surtout en Laponie, entre septembre et
                mars, quand le ciel est assez sombre. Il faut une nuit
                dégagée et une activité solaire suffisante. Aucun opérateur
                sérieux ne les garantit.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous prévoyons plusieurs nuits sur place plutôt qu&apos;une
                sortie unique, dans un hébergement d&apos;où l&apos;on peut
                sortir observer sans reprendre la voiture.
              </p>
            </div>
          ),
        },
        {
          title: "Les ferries de l'archipel",
          cardEyebrow: "Transport",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les bateaux publics desservent Vaxholm et Sandhamn, un skipper privé va plus loin",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Des navettes régulières relient Stockholm aux îles les plus
                proches, Vaxholm et Sandhamn en tête. Au-delà, les liaisons
                s&apos;espacent et beaucoup d&apos;îles ne se rejoignent que
                par bateau privé.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Un skipper privé permet de mouiller à l&apos;écart des
                lignes régulières, sur des îles sans quai ni horaire.
              </p>
            </div>
          ),
        },
        {
          title: "Le droit de circuler partout",
          cardEyebrow: "Culture",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "L'allemansrätten autorise à marcher, nager et bivouaquer en terrain sauvage",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La loi suédoise reconnaît un droit d&apos;accès à la nature,
                l&apos;allemansrätten. Chacun peut marcher, cueillir et
                planter une tente une nuit en terrain non cultivé, à
                condition de rester à bonne distance des habitations et de ne
                rien laisser derrière soi.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Le corollaire est qu&apos;aucune île ni aucun sommet ne se
                privatise vraiment. L&apos;isolement se gagne par
                l&apos;heure de départ et par le bateau, pas par la barrière.
              </p>
            </div>
          ),
        },
        {
          title: "Budget et vie locale",
          cardEyebrow: "Budget",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Un pays au coût de la vie élevé, où la carte est reine et l'alcool reste très encadré",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La couronne suédoise (SEK) reste la monnaie de référence.
                La carte bancaire est acceptée partout, jusque sur les
                bateaux et les petits marchés : il est inutile de changer
                des espèces.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Vins et spiritueux ne se vendent qu&apos;au Systembolaget, le
                réseau d&apos;État, fermé le dimanche et tôt le samedi.
              </p>
            </div>
          ),
        },
        {
          title: "Rencontrer les Samis, avec respect",
          cardEyebrow: "Culture",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le peuple same élève des rennes depuis des générations ; la rencontre se prépare avec un guide",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le peuple same vit sur le territoire du Sápmi, qui s&apos;étend
                sur la Norvège, la Suède, la Finlande et une partie de la
                Russie. L&apos;élevage du renne y est une pratique vivante,
                pas une reconstitution pour visiteurs.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous organisons la rencontre directement avec une famille
                d&apos;éleveurs, jamais via un enclos touristique, et
                respectons les moments où elle décline une visite.
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
            "Nous avons quitté Stockholm à l'aube, sans autre bateau à l'horizon. Le skipper a coupé le moteur près d'une île sans nom et nous avons nagé avant le petit-déjeuner. C'est ce moment-là que je raconte encore.",
          image: {
            src: "/destination/suede/hero-1.png",
            alt: "Portrait de Camille et Thomas", // TODO: verify
          },
          name: "Camille & Thomas", // TODO: verify
          role: "Voyage en couple, juillet 2025", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Le traîneau, le silence, puis les aurores la deuxième nuit alors qu'on ne les attendait plus. Notre guide a su exactement quand nous réveiller.",
          image: {
            src: "/destination/suede/hero-2.png",
            alt: "Portrait de Ludovic", // TODO: verify
          },
          name: "Ludovic", // TODO: verify
          role: "Séjour en Laponie, février 2025", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Nous avons dormi dans une usine de calcaire réhabilitée, à Gotland, sans autre lumière que celle du phare voisin. Ce n'était pas ce que j'imaginais d'un voyage en Suède, et c'est exactement pour ça que c'était juste.",
          image: {
            src: "/destination/suede/hero-3.png",
            alt: "Portrait de Delphine", // TODO: verify
          },
          name: "Delphine", // TODO: verify
          role: "Escapade solo, septembre 2025", // TODO: verify
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
          question: "Quelle est la meilleure période pour partir en Suède ?",
          answer:
            "Tout dépend de ce que vous venez chercher. De juin à août, les journées sont longues et l'archipel de Stockholm se navigue dans les meilleures conditions. De décembre à mars, la Laponie s'ouvre à l'Icehotel, au traîneau à chiens et aux aurores boréales, à condition d'accepter des nuits très froides.",
        },
        {
          question: "Combien de temps dure le vol Paris - Stockholm ?",
          answer:
            "Comptez environ 2h30 en vol direct entre Paris et Stockholm. Pour rejoindre la Laponie suédoise, un vol intérieur entre Stockholm et Kiruna dure environ 1h30 à 1h40.",
        },
        {
          question: "Faut-il un visa pour aller en Suède ?",
          answer:
            "Non. La Suède appartient à l'Union européenne et à l'espace Schengen. Une carte nationale d'identité ou un passeport en cours de validité suffit pour les ressortissants français. Aucune vaccination n'est exigée.",
        },
        {
          question: "Peut-on voir les aurores boréales en Suède ?",
          answer:
            "Oui, dans le nord du pays, en Laponie suédoise, entre septembre et mars. Il faut un ciel dégagé, une nuit sombre et une activité solaire suffisante. Nous prévoyons plusieurs nuits sur place plutôt qu'une sortie unique.",
        },
        {
          question: "Que faire en Suède en une semaine ?",
          answer:
            "Une semaine permet de traiter une seule région correctement. Au sud, installez-vous à Stockholm, naviguez dans l'archipel puis prolongez vers Gotland et Visby. Au nord, basez-vous en Laponie pour le traîneau à chiens, la rencontre avec une famille same et l'observation des aurores. Combiner les deux en sept jours revient à passer une journée entière en transport.",
        },
        {
          question: "Quel budget prévoir pour un voyage en Suède ?",
          answer:
            "Le budget se joue sur trois postes : le vol intérieur vers la Laponie, les hébergements de charme qui comptent peu de chambres, et la privatisation des sorties (voile dans l'archipel, traîneau à chiens). Nous construisons chaque voyage sur mesure et présentons un budget détaillé avant toute réservation, sans engagement.",
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
        "Trois autres façons de remonter vers le nord, entre fjords, glace et lumière basse.",
      slugs: ["norvege", "islande", "suisse"],
    },
  ],
};
