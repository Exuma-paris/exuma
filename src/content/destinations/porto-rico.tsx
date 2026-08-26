import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "porto-rico",
  name: "Porto Rico",
  placeKind: "country",
  country: "Porto Rico", // TODO: verify — territoire non incorporé des États-Unis, traité ici comme un pays autonome dans l'arborescence
  genitive: "de Porto Rico",
  continentSlug: "ameriques",
  blurb: "San Juan colonial, forêt tropicale, îles bioluminescentes",
  keywords: [
    "porto rico",
    "vieux san juan",
    "el yunque",
    "vieques",
    "culebra",
    "baie bioluminescente",
    "dorado",
    "caraibes",
  ],
  metaTitle: "Porto Rico : Voyage sur mesure",
  metaDescription:
    "Voyage à Porto Rico : Vieux San Juan, El Yunque, baie bioluminescente de Vieques. Itinéraire écrit par votre travel designer Exuma, conciergerie privée 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe à Porto Rico",
      heading: "Porto Rico se lit en climats, pas en kilomètres",
      description:
        "El Yunque, huit mille hectares de forêt tropicale et seule forêt du réseau forestier national des États-Unis, à moins d'une heure du Vieux San Juan, fondé en 1521 et toujours cerné par ses remparts espagnols. À quarante minutes d'avion, la baie bioluminescente de Mosquito Bay, à Vieques, reste la plus intense recensée par le Guinness World Records. Trois visages d'une même île, à combiner sans les opposer.",
      images: [
        {
          src: "/destination/porto-rico/hero-1.png",
          alt: "Façades colorées et remparts espagnols du Vieux San Juan à Porto Rico",
        },
        {
          src: "/destination/porto-rico/hero-2.png",
          alt: "Canopée et cascades de la forêt tropicale d'El Yunque",
        },
        {
          src: "/destination/porto-rico/hero-3.png",
          alt: "Kayak sur la baie bioluminescente de Mosquito Bay à Vieques",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir à Porto Rico ?",
      heading: "Tainà, spécialiste de Porto Rico, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "taina",
        // TODO: verify quote attribution
        quote:
          "Porto Rico surprend ceux qui s'attendent à une île de plage. En une demi-journée, on passe du Vieux San Juan colonial à la canopée d'El Yunque, puis on prend un petit avion pour Vieques.",
        role: "Travel Designer · Porto Rico",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte de Porto Rico",
      heading: "Porto Rico, une île qui change de climat en une heure de route",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Un voyage à Porto Rico se construit entre trois climats qui se touchent sans se ressembler. Le Vieux San Juan respire l'air salé de l'Atlantique sous les remparts espagnols du XVIe siècle. À moins d'une heure de route, El Yunque retient un mur d'humidité que la côte ne connaît pas. Au large, Vieques et Culebra gardent leurs plages presque vides, hors des grands ferries de croisière qui s'arrêtent à San Juan.",
        "La logique d'un itinéraire portoricain suit ces trois climats plutôt qu'une carte routière. Deux ou trois jours dans le Vieux San Juan pour prendre la mesure de la vieille ville : le fort San Felipe del Morro, les balcons bleus de la Calle Fortaleza, le marché couvert de Santurce. Direction ensuite Río Grande et la réserve d'El Yunque, où les cascades de La Mina et de Juan Diego coulent toute l'année. Le dernier tiers du séjour se joue au large : un vol de douze minutes ou un ferry depuis Ceiba mènent à Vieques, où la baie de Mosquito Bay referme la boucle.",
        "« Il n'y a pas un seul Porto Rico. Il y a l'île espagnole de San Juan, la forêt qui appartient encore aux coquís, et Vieques, où les chevaux sauvages traversent la route sans se presser. Le voyage consiste à passer de l'un à l'autre sans jamais forcer le rythme. »",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/porto-rico/full-image.png",
        alt: "Vue aérienne de la forêt tropicale d'El Yunque au-dessus de la côte de Porto Rico",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Le Vieux San Juan, avant les paquebots",
      heading: "Le matin où les balcons bleus appartiennent encore aux habitants",
      theme: "light",
      paragraphs: [
        "Dans le Vieux San Juan, la Calle Fortaleza se traverse à sept heures du matin sans un croisiériste. Les façades pastel et les balcons en fer forgé gardent la fraîcheur de la nuit, avant que la chaleur ne monte sur l'adoquín, ce pavé bleuté importé d'Angleterre comme lest des navires espagnols au XIXe siècle. Un guide raconte comment le fort San Felipe del Morro, achevé en 1783 après deux siècles de travaux, n'a jamais cédé à un assaut venu de la mer.",
        "Plus loin, la Capilla del Cristo referme la vieille ville sur une légende de cavalier sauvé in extremis. Le marché de la Plaza del Mercado de Santurce ouvre à la même heure : les vendeurs de mofongo et de jus de corossol s'installent avant les premiers groupes venus des paquebots.",
      ],
      images: [
        {
          src: "/destination/porto-rico/split-1.png",
          alt: "Ruelle pavée d'adoquín bleu dans le Vieux San Juan au petit matin",
        },
        {
          src: "/destination/porto-rico/split-2.png",
          alt: "Fort San Felipe del Morro surplombant l'Atlantique à San Juan",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/porto-rico/xp-baie-bioluminescente-vieques-1.png",
          alt: "Traînée de lumière bleue laissée par une pagaie dans la baie bioluminescente de Vieques",
        },
        right: {
          src: "/destination/porto-rico/xp-baie-bioluminescente-vieques-2.png",
          alt: "Kayaks transparents de nuit sur Mosquito Bay à Vieques",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Ramer dans une eau qui s'allume au passage de la pagaie",
        columns: [
          "Mosquito Bay, sur la côte sud de Vieques, concentre la plus forte densité de dinoflagellés bioluminescents recensée par le Guinness World Records. Le phénomène n'a rien d'un spectacle organisé : chaque geste dans l'eau, une pagaie, une main, un poisson qui passe, déclenche une traînée de lumière bleu-vert qui s'éteint aussitôt.",
          "On y accède en kayak transparent, la nuit, sans lune si possible : les nuits de pleine lune réduisent l'intensité visible. Aucun moteur n'est autorisé sur la baie depuis 2000, ce qui a permis à la bioluminescence de se maintenir alors qu'elle a disparu ailleurs dans les Caraïbes.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Porto Rico",
      heading: "Nos coups de cœur à Porto Rico",
      description:
        "Trois expériences ancrées dans trois Porto Rico différents : la canopée d'El Yunque, les ruelles coloniales du Vieux San Juan, le large vers Culebra. Aucune n'est démonstrative.",
      slugs: [
        "randonnee-cascades-el-yunque",
        "immersion-vieux-san-juan",
        "catamaran-prive-culebra",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Où séjourner",
      description:
        "Trois adresses choisies pour ce qu'elles permettent, pas pour ce qu'elles affichent : une réserve naturelle privée à Dorado, un couvent du XVIIe siècle au cœur du Vieux San Juan, une plage protégée aux portes d'El Yunque.",
      slugs: [
        "dorado-beach-ritz-carlton-reserve",
        "fairmont-el-convento",
        "st-regis-bahia-beach",
      ],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Avant le départ",
      heading: "Ce qu'il faut savoir avant de partir à Porto Rico",
      description:
        "Monnaie, formalités, vaccin, temps de vol, décalage et meilleure saison : l'essentiel pour préparer le voyage sereinement.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Comptez environ 13 à 14 heures pour un vol direct saisonnier entre Paris-CDG et San Juan. Avec une escale, prévoyez généralement 13 à 18 heures de voyage, selon l'itinéraire, la compagnie et la période.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Porto Rico a 5 heures de moins que la France en hiver et 6 heures de moins en été. L'île reste toute l'année à l'heure de l'Atlantique (AST), sans changement d'heure saisonnier.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Le dollar américain (USD) est la monnaie officielle. Les cartes bancaires sont largement acceptées, y compris en dehors des principales zones touristiques, et les distributeurs sont facilement accessibles dans les villes et zones fréquentées.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Les ressortissants français peuvent séjourner jusqu'à 90 jours à Porto Rico sans visa dans le cadre du Visa Waiver Program. Un passeport électronique ou biométrique ainsi qu'une autorisation ESTA obtenue avant le départ sont requis.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin n'est obligatoire pour les voyageurs arrivant directement de France. Il est néanmoins recommandé d'être à jour des vaccinations habituelles avant le départ.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "De décembre à avril, la période est généralement la plus agréable, avec un climat plus sec et des températures légèrement plus douces. La saison des ouragans s'étend officiellement de juin à novembre, avec un risque plus marqué en septembre et octobre.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "L'espagnol et l'anglais sont les deux langues officielles de Porto Rico. L'espagnol domine dans la vie quotidienne, tandis que l'anglais est largement parlé dans les hôtels, les sites touristiques et les principales zones fréquentées par les voyageurs.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Porto Rico bénéficie d'un climat tropical toute l'année, avec des températures généralement comprises entre 21 et 32°C. Les pluies sont plus fréquentes d'avril à novembre, particulièrement entre août et octobre. Les zones montagneuses et la forêt tropicale d'El Yunque sont naturellement plus humides que les régions côtières.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Porto Rico. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/porto-rico/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Carte d'itinéraire personnalisé à Porto Rico",
            "Ruelle colorée du Vieux San Juan",
            "Suite avec vue sur la baie à Porto Rico",
            "Concierge Exuma coordonnant un transfert privé à Porto Rico",
            "Guide privé commentant la canopée d'El Yunque",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables à Porto Rico",
      heading: "Six lieux, et ce qu'il y a derrière",
      description:
        "Le Vieux San Juan, El Yunque, Vieques, Culebra, Dorado et Ponce : chaque étape répond à une raison précise dans un itinéraire portoricain.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      initialZoom: 9,
      places: [
        {
          title: "Vieux San Juan, la cité fortifiée",
          description:
            "Fondée en 1521, la vieille ville garde sept blocs de remparts espagnols et le fort San Felipe del Morro, achevé en 1783. Classée au patrimoine mondial depuis 1983.",
          image: {
            src: "/destination/porto-rico/map-vieux-san-juan.png",
            alt: "Remparts espagnols du Vieux San Juan surplombant l'Atlantique",
          },
          coordinates: { lat: 18.4663, lng: -66.1057 }, // TODO: verify coords
        },
        {
          title: "El Yunque, l'unique forêt tropicale du réseau américain",
          description:
            "Huit mille hectares gérés par le service forestier des États-Unis. Les cascades de La Mina et de Juan Diego coulent toute l'année, alimentées par plus de quatre mètres de pluie annuelle.",
          image: {
            src: "/destination/porto-rico/map-el-yunque.png",
            alt: "Cascade de La Mina dans la forêt tropicale d'El Yunque",
          },
          coordinates: { lat: 18.293, lng: -65.7833 }, // TODO: verify coords
        },
        {
          title: "Vieques, la baie qui brille",
          description:
            "Ancien terrain d'essai de la marine américaine, rendu à l'île en 2003. Mosquito Bay y concentre la bioluminescence la plus intense recensée au monde.",
          image: {
            src: "/destination/porto-rico/map-vieques.png",
            alt: "Baie bioluminescente de Mosquito Bay à Vieques de nuit",
          },
          coordinates: { lat: 18.0967, lng: -65.4438 }, // TODO: verify coords
        },
        {
          title: "Culebra, Flamenco Beach",
          description:
            "Classée à plusieurs reprises parmi les plus belles plages du monde par des guides internationaux. Aucun grand hôtel n'y a jamais été construit.",
          image: {
            src: "/destination/porto-rico/map-culebra.png",
            alt: "Plage de Flamenco Beach aux eaux turquoise sur l'île de Culebra",
          },
          coordinates: { lat: 18.3286, lng: -65.3196 }, // TODO: verify coords
        },
        {
          title: "Dorado, la côte nord",
          description:
            "Ancienne plantation d'ananas transformée en réserve naturelle privée dans les années 1950. Deux terrains de golf signés Robert Trent Jones y bordent l'Atlantique.",
          image: {
            src: "/destination/porto-rico/map-dorado.png",
            alt: "Côte de Dorado bordée de palmiers sur la rive nord de Porto Rico",
          },
          coordinates: { lat: 18.4589, lng: -66.2678 }, // TODO: verify coords
        },
        {
          title: "Ponce, la perle du Sud",
          description:
            "Architecture néoclassique et Art déco autour de la Plaza Las Delicias. La caserne de pompiers Parque de Bombas, rayée de rouge et noir, reste l'image la plus reproduite de la ville.",
          image: {
            src: "/destination/porto-rico/map-ponce.png",
            alt: "Parque de Bombas rayé rouge et noir sur la Plaza Las Delicias à Ponce",
          },
          coordinates: { lat: 18.0111, lng: -66.6141 }, // TODO: verify coords
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage à Porto Rico",
      description:
        "Huit repères de terrain pour préparer un séjour entre ville coloniale, forêt tropicale et îles au large sans mauvaise surprise.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          title: "Dans ma valise",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Vêtements légers et anti-moustiques, chaussures de marche pour El Yunque, maillot de bain pour les sorties de nuit.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: passeport valide six mois après le retour. Autorisation
                ESTA à demander avant le départ pour les ressortissants
                français, comme pour tout séjour aux États-Unis.
              </p>
              <h4 className="font-medium">L&apos;essentiel :</h4>
              <p>
                TODO: vêtements légers et respirants, une couche
                imperméable pour El Yunque où il pleut presque chaque jour,
                anti-moustiques, chaussures de marche fermées.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Nos clients reçoivent une checklist personnalisée selon les
                étapes prévues, environ trois semaines avant le départ.
              </p>
            </div>
          ),
        },
        {
          title: "Formalités : ESTA obligatoire",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Porto Rico suit les règles d'entrée des États-Unis. L'ESTA se demande en ligne, plusieurs jours avant le départ.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: Porto Rico étant un territoire américain, les
                ressortissants français y entrent selon les règles de
                l&apos;ESTA (Electronic System for Travel Authorization), à
                demander en ligne au moins 72 heures avant le départ.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Nous rappelons les délais à chaque client et vérifions la
                validité de son passeport dès la confirmation du voyage.
              </p>
            </div>
          ),
        },
        {
          title: "Se déplacer sur l'île",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Voiture de location recommandée hors du Vieux San Juan. Vieques et Culebra se rejoignent par avion ou par ferry.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le Vieux San Juan se visite à pied. Pour El Yunque, Dorado ou
                Ponce, une voiture reste la solution la plus souple : les
                transports en commun sont limités hors de la capitale.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Un vol de douze minutes depuis l&apos;aéroport de Ceiba ou un
                ferry public relient Vieques et Culebra. Nous réservons les
                deux à l&apos;avance : les places partent vite en haute
                saison.
              </p>
            </div>
          ),
        },
        {
          title: "La saison des ouragans",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "De juin à novembre, avec un pic statistique en septembre. Décembre à avril reste la fenêtre la plus sûre.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: la saison officielle des ouragans dans l&apos;Atlantique
                s&apos;étend de juin à novembre. Porto Rico n&apos;est pas
                touché chaque année, mais septembre concentre statistiquement
                le plus de systèmes actifs.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Nous privilégions la fenêtre de décembre à avril pour les
                séjours qui combinent Vieques et Culebra, où les liaisons
                dépendent de la météo.
              </p>
            </div>
          ),
        },
        {
          title: "Réserver Vieques à l'avance",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les kayaks pour Mosquito Bay et les vols internes se réservent plusieurs semaines avant le départ.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les sorties en kayak sur Mosquito Bay sont contingentées pour
                préserver la bioluminescence. Les créneaux des nuits sans
                lune partent en premier.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous bloquons le vol interne, l&apos;hébergement et la sortie
                nocturne dans le même mouvement, en calant la date sur le
                calendrier lunaire.
              </p>
            </div>
          ),
        },
        {
          title: "Santé",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Aucun vaccin obligatoire. Eau du robinet potable à San Juan, moustiques présents surtout après la pluie.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: aucun vaccin obligatoire pour entrer à Porto Rico depuis
                la France. Vaccinations universelles à jour recommandées.
                L&apos;eau du robinet est potable dans les zones urbaines.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Répulsif anti-moustiques conseillé le soir, notamment près
                d&apos;El Yunque où l&apos;humidité favorise leur présence.
              </p>
            </div>
          ),
        },
        {
          title: "Meilleure période",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Décembre à avril pour un climat sec, en évitant la haute saison des ouragans.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: de décembre à avril, saison sèche et fréquentation plus
                douce que les vacances de Noël américaines. De mai à
                novembre, chaleur plus humide et risque de perturbations
                météo croissant.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Janvier et février offrent le meilleur compromis entre météo
                stable et affluence maîtrisée dans le Vieux San Juan.
              </p>
            </div>
          ),
        },
        {
          title: "Budget & vie locale",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Dollar américain, cartes largement acceptées, pourboire attendu comme aux États-Unis (15 à 20 %).",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: dollar américain (USD). Cartes bancaires acceptées
                partout, y compris dans les petites échoppes. Le pourboire au
                restaurant suit l&apos;usage américain, entre 15 et 20 %.
              </p>
              <p>
                Marché de la Plaza del Mercado de Santurce, marché agricole de
                Rincón le week-end : mofongo, alcapurrias, jus de corossol.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous organisons systématiquement les transferts privés et les
                vols internes vers Vieques et Culebra.
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
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      testimonials: [
        {
          // TODO: replace with real testimonial
          quote:
            "Nous ne nous attendions pas à une forêt tropicale à quarante minutes d'une ville coloniale espagnole. El Yunque après le Vieux San Juan a changé notre lecture de l'île, et Vieques en clôture restait le souvenir le plus fort du séjour.",
          image: {
            src: "/destination/porto-rico/hero-1.png",
            alt: "Portrait de Claire et Thomas", // TODO: verify
          },
          name: "Claire & Thomas", // TODO: verify
          role: "Voyage en famille, avril 2025", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "La nuit en kayak sur Mosquito Bay reste incomparable : l'eau s'allumait à chaque coup de pagaie. Notre travel designer avait choisi une nuit sans lune, ce qu'on n'aurait jamais su faire seuls.",
          image: {
            src: "/destination/porto-rico/hero-2.png",
            alt: "Portrait de Julien", // TODO: verify
          },
          name: "Julien", // TODO: verify
          role: "Voyage de noces, février 2025", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Ce qui m'a marquée, c'est le contraste entre le Vieux San Juan et Dorado : une même île, deux rythmes complètement différents. Notre suite donnait sur la réserve naturelle, les enfants n'ont pas voulu repartir.",
          image: {
            src: "/destination/porto-rico/hero-3.png",
            alt: "Portrait de Sophie", // TODO: verify
          },
          name: "Sophie", // TODO: verify
          role: "Voyage en famille, mars 2025", // TODO: verify
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
          question: "Quelle est la meilleure période pour partir à Porto Rico ?",
          answer:
            "De décembre à avril, pendant la saison sèche et avant la saison des ouragans qui s'étend de juin à novembre avec un pic en septembre. Janvier et février offrent le meilleur compromis météo.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris pour Porto Rico ?",
          answer:
            "Comptez environ 13 à 14 heures pour un vol direct saisonnier entre Paris-CDG et San Juan, ou généralement 13 à 18 heures avec une escale, selon l'itinéraire, la compagnie et la période.",
        },
        {
          question: "Faut-il un visa pour aller à Porto Rico ?",
          answer:
            "Non. Les ressortissants français peuvent séjourner jusqu'à 90 jours à Porto Rico sans visa dans le cadre du Visa Waiver Program. Un passeport électronique ou biométrique et une autorisation ESTA obtenue avant le départ restent requis.",
        },
        {
          question: "Le voyage à Porto Rico est-il adapté aux familles ?",
          answer:
            "Oui. Le Vieux San Juan se visite à pied sans difficulté, El Yunque propose des sentiers courts adaptés aux enfants, et des adresses comme Dorado ou la côte de Bahía offrent des plages protégées et des activités multi-âges.",
        },
        {
          question: "Faut-il absolument visiter Vieques ?",
          answer:
            "Ce n'est pas obligatoire, mais Vieques concentre deux expériences rares : la baie bioluminescente de Mosquito Bay et des plages presque désertes. Comptez deux à trois nuits pour en profiter sans se presser, accessible en douze minutes de vol ou par ferry depuis Ceiba.",
        },
        {
          question: "Quel budget prévoir pour un voyage à Porto Rico ?",
          answer:
            "Nos voyages sur mesure s'adaptent à chaque projet. À titre indicatif, comptez autour de 7 000 € par personne pour un séjour de dix jours combinant San Juan, El Yunque et Vieques, selon les hébergements et la saison choisis.",
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
        "Trois autres îles des Caraïbes où la même philosophie guide nos voyages : des adresses choisies pour ce qu'elles permettent, révélées par notre connaissance du terrain.",
      slugs: ["republique-dominicaine", "bahamas", "antigua"],
    },
  ],
};
