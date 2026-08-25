import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "canada",
  name: "Canada",
  placeKind: "country",
  country: "Canada",
  genitive: "du Canada",
  continentSlug: "ameriques",
  blurb: "Les Rocheuses, le Pacifique, Terre-Neuve",
  keywords: [
    "canada",
    "rocheuses",
    "lac louise",
    "banff",
    "alberta",
    "colombie britannique",
    "tofino",
    "terre neuve",
    "vancouver",
  ],
  metaTitle: "Canada : Voyage sur mesure",
  metaDescription:
    "Voyage au Canada sur mesure : Rocheuses, lac Louise, forêt du Pacifique et Terre-Neuve. Itinéraire écrit par votre travel designer Exuma, conciergerie 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe au Canada",
      heading: "Le Canada, du lac Louise aux forêts du Pacifique",
      description:
        "Le lac Louise se découvre au petit matin, quand l'eau ne porte encore aucune ride et que la montagne s'y reflète en entier. Plus à l'ouest, la forêt descend jusqu'au Pacifique et les hydravions posent leurs flotteurs au fond des baies. À l'autre bout du pays, Terre-Neuve laisse dériver ses icebergs devant les maisons de bois. Nous relions ces trois Canada pour vous, dans l'ordre qui leur convient.",
      images: [
        {
          src: "/destination/canada/hero-1.png",
          alt: "Le lac Louise et les Rocheuses au petit matin au Canada",
        },
        {
          src: "/destination/canada/hero-2.png",
          alt: "Chalets sur pilotis au fond d'une baie de Colombie-Britannique",
        },
        {
          src: "/destination/canada/hero-3.png",
          alt: "Iceberg dérivant au large des maisons de bois de Terre-Neuve",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Notre rôle dans ce voyage",
      heading: "Un seul interlocuteur, du premier échange jusqu'au retour",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "carole",
        // TODO: replace with a real verbatim from Carole
        quote:
          "Les voyageurs m'arrivent souvent avec un itinéraire long comme le bras. On l'allège ensemble, et c'est presque toujours le meilleur moment de la préparation. Ce qu'on garde, on le garde bien : la bonne maison, la bonne heure, le bon guide.",
        role: "Travel Designer · Canada",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Ouverture",
      heading: "Le Canada, le grand air et le confort des maisons de bois",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Un voyage au Canada commence souvent en Alberta, sur la rive du lac Louise. L'eau y prend un vert laiteux qui vient des glaciers, et la montagne se couche dedans en entier dès que le vent tombe. On part en canoë avant le petit-déjeuner, puis on rentre déjeuner au chaud dans un hôtel qui regarde ce lac depuis toujours.",
        "La suite se dessine vers l'ouest. La forêt prend le relais sur l'île de Vancouver, avec ses cèdres immenses et ses baies que l'on rejoint en hydravion. Le Pacifique apporte ses ours noirs, ses saumons et ses tempêtes d'automne, que l'on regarde depuis un fauteuil, une couverture sur les genoux. Pour ceux qui veulent l'océan du bout du monde, Terre-Neuve garde ses icebergs et ses villages de pêcheurs. C'est ce Canada-là que nous montrons, et nous le composons maison par maison.",
        "« Le Canada se mesure au silence qu'il laisse. On y vient pour la montagne et pour la forêt, on en repart avec le souvenir d'une lumière et d'une maison où l'on nous attendait. »",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/canada/full-image.png",
        alt: "La promenade des Glaciers entre Banff et Jasper dans les Rocheuses au Canada",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "La côte du Pacifique",
      heading: "L'ours esprit, une rencontre au bord des rivières à saumons",
      theme: "light",
      paragraphs: [
        "Sur la côte de la Colombie-Britannique, la forêt du Grand Ours descend jusqu'à l'eau salée et ne s'interrompt jamais vraiment. Les cèdres y poussent depuis des siècles, couverts de mousse jusqu'aux branches hautes, et les saumons remontent le courant à l'automne. C'est la seule forêt du monde où vive l'ours esprit, reconnaissable à son pelage crème, que les Premières Nations protègent de longue date.",
        "On y va en bateau, avec un gardien du territoire qui connaît les rivières et les nomme une par une. L'attente se fait sur une plateforme de bois, à voix basse, pendant que la marée descend et que la forêt s'éveille autour. L'animal arrive quand il l'a décidé, et les guides le reconnaissent d'une année sur l'autre.",
        "Cette forêt reste en mémoire longtemps après le retour.",
      ],
      images: [
        {
          src: "/destination/canada/split-1.png",
          alt: "Ours esprit au pelage crème au bord d'une rivière à saumons de Colombie-Britannique",
        },
        {
          src: "/destination/canada/split-2.png",
          alt: "Cèdres couverts de mousse dans la forêt du Grand Ours au bord du Pacifique",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/canada/xp-heliski-bugaboos-1.png",
          alt: "Hélicoptère posé sur un glacier au pied des tours de granit des Bugaboos",
        },
        right: {
          src: "/destination/canada/xp-heliski-bugaboos-2.png",
          alt: "Skieur dans une pente de neige vierge au-dessus d'un glacier des Bugaboos",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "L'hélicoptère au-dessus des glaciers des Bugaboos",
        columns: [
          "L'hélicoptère décolle du lodge dès que la montagne donne sa fenêtre de beau temps. Les Bugaboos dressent leurs tours de granit au-dessus des glaciers, et c'est ici que l'héliski est né, le jour où un guide autrichien a eu l'idée d'y déposer des skieurs. La machine se pose sur une croupe de neige, le bruit s'éteint d'un coup, et il ne reste que le vent.",
          "La descente s'ouvre dans une neige que personne n'a touchée, un guide devant, l'hélicoptère qui attend plus bas. En été, le même appareil dépose sur le glacier pour marcher jusqu'à un lac suspendu, ou pour déjeuner face aux tours. Nous le réservons pour vous seuls et nous gardons un second matin en réserve : ici, c'est la montagne qui choisit l'heure.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités au Canada",
      heading: "Nos expériences préférées au Canada",
      description:
        "Un canoë sur le lac Moraine avant l'arrivée des navettes, deux jours à cheval jusqu'à un chalet de rondins de l'arrière-pays de Banff, un bateau qui longe les icebergs de Terre-Neuve. Trois moments que l'on ne réserve pas en ligne, et que nous obtenons pour vous.",
      slugs: [
        "canoe-aube-lac-moraine",
        "chevaux-skoki-banff",
        "icebergs-baleines-terre-neuve",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements au Canada",
      heading: "Trois maisons face aux grands paysages",
      description:
        "Un hôtel posé sur la rive du lac Louise, un camp de toile au fond d'un fjord de l'île de Vancouver, une maison de bois face à l'Atlantique Nord. Trois adresses très différentes, choisies pour l'accueil qu'on y reçoit.",
      slugs: [
        "fairmont-chateau-lake-louise",
        "clayoquot-wilderness-lodge",
        "fogo-island-inn",
      ],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Avant le départ",
      heading: "Préparer votre voyage au Canada",
      description:
        "Temps de vol, décalage, monnaie, formalités et meilleure saison : l'essentiel pour préparer le voyage sereinement.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Comptez environ 10 heures en vol direct de Paris à Vancouver, et environ 9 heures 30 vers Calgary, selon les compagnies et les périodes. Certaines liaisons vers l'Ouest ne sont assurées qu'en saison. Terre-Neuve se rejoint généralement avec une correspondance. Des vols directs saisonniers peuvent également être proposés depuis Paris.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Le Canada s'étend sur six fuseaux horaires. Comptez généralement huit heures de moins qu'en France en Alberta, neuf en Colombie-Britannique, et quatre heures et demie à Terre-Neuve, qui possède son propre fuseau. Les changements d'heure ne tombent pas aux mêmes dates qu'en Europe, ce qui modifie ces écarts pendant quelques semaines par an.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "La monnaie est le dollar canadien. Les cartes bancaires sont très largement acceptées, y compris pour les petits montants, mais il reste utile de conserver un peu d'espèces pour les traversées, les marchés et les pourboires. Le pourboire est d'usage au restaurant, généralement de quinze à vingt pour cent.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Les ressortissants français sont dispensés de visa pour un séjour touristique de moins de six mois. Une Autorisation de voyage électronique (AVE) est en revanche nécessaire pour une arrivée par avion : elle s'obtient en ligne et reste valable cinq ans, ou jusqu'à l'expiration du passeport. Celui-ci doit rester valide pendant toute la durée du séjour.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin spécifique n'est présenté comme obligatoire pour un voyage touristique classique. L'Institut Pasteur recommande d'être à jour du calendrier vaccinal. La vaccination contre la rage se discute ensuite selon la durée du séjour et le temps passé en pleine nature, et une protection contre les moustiques et les tiques est conseillée en été dans les régions boisées.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "Nous privilégions juin à septembre pour les Rocheuses et la côte du Pacifique : les journées sont longues et les soirées douces. À Terre-Neuve, la saison va de mai à septembre selon ce que l'on vient chercher, les icebergs étant surtout associés au printemps et au début de l'été, tandis que les baleines se laissent observer ensuite. De janvier à mars, la neige et l'hélicoptère prennent le relais dans l'Ouest.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "L'anglais et le français sont les deux langues officielles du pays. Le français est majoritaire au Québec et bien présent au Nouveau-Brunswick, seule province officiellement bilingue, tandis que l'anglais domine en Alberta, en Colombie-Britannique et à Terre-Neuve. Plusieurs dizaines de langues autochtones sont également parlées, parmi lesquelles le cri, l'inuktitut et l'ojibwé.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Le climat est continental sur la majeure partie du pays, avec des hivers froids et des étés chauds. La côte de la Colombie-Britannique, plus océanique, reste douce et pluvieuse une bonne partie de l'année. Dans les Rocheuses, le temps peut changer plusieurs fois dans la journée, et Terre-Neuve connaît des brouillards fréquents au printemps.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Canada. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/canada/bento-${
            ["map", "adresses", "hebergements", "conciergerie", "experiences"][i]
          }.png`,
          alt: [
            "Carte d'un itinéraire sur mesure au Canada",
            "Table dressée par un chef dans une maison de bois de l'Ouest canadien",
            "Chambre en bois clair ouverte sur la forêt du Pacifique",
            "Concierge organisant un vol en hydravion vers un lodge canadien",
            "Feu de camp au bord d'un lac des Rocheuses à la tombée du jour",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Que voir au Canada",
      heading: "Du lac Louise à Terre-Neuve, nos étapes préférées",
      description:
        "Banff, la promenade des Glaciers, les Bugaboos, Tofino, Vancouver et Fogo Island : chacune de ces étapes a son caractère, et c'est autour d'elles que s'organisent la plupart de nos itinéraires.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      initialZoom: 4,
      places: [
        {
          title: "Banff et le lac Louise",
          description:
            "Le lac Louise ouvre les Rocheuses, avec son eau verte et son glacier au fond de la vallée. Un peu plus haut, le lac Moraine se garde pour ceux qui montent avant les navettes.",
          image: {
            src: "/destination/canada/map-lac-louise.png",
            alt: "Le lac Louise et son glacier au fond de la vallée en Alberta",
          },
          coordinates: { lat: 51.4254, lng: -116.1773 }, // TODO: verify coords
        },
        {
          title: "La promenade des Glaciers",
          description:
            "La route relie Banff à Jasper en longeant les champs de glace. On s'arrête au lac Peyto, on marche jusqu'au pied d'un glacier, et l'on croise plus de wapitis que de voitures au petit matin.",
          image: {
            src: "/destination/canada/map-promenade-glaciers.png",
            alt: "Route de la promenade des Glaciers longeant les sommets enneigés des Rocheuses",
          },
          coordinates: { lat: 52.22, lng: -117.2255 }, // TODO: verify coords
        },
        {
          title: "Les Bugaboos",
          description:
            "Des tours de granit posées sur un glacier, au milieu des montagnes de Colombie-Britannique. L'héliski y est né et l'on n'y arrive qu'en hélicoptère, ce qui garde la vallée à peu de monde.",
          image: {
            src: "/destination/canada/map-bugaboos.png",
            alt: "Tours de granit des Bugaboos au-dessus d'un glacier de Colombie-Britannique",
          },
          coordinates: { lat: 50.75, lng: -116.75 }, // TODO: verify coords
        },
        {
          title: "Tofino et Clayoquot Sound",
          description:
            "À l'ouest de l'île de Vancouver, la forêt vient mourir sur des plages de sable gris. On sort en pirogue de cèdre, on guette les baleines grises, et l'on regarde les tempêtes arriver depuis l'intérieur.",
          image: {
            src: "/destination/canada/map-tofino.png",
            alt: "Plage de sable gris et forêt de cèdres à Tofino sur l'île de Vancouver",
          },
          coordinates: { lat: 49.153, lng: -125.9066 }, // TODO: verify coords
        },
        {
          title: "Vancouver",
          description:
            "La ville tient entre la mer et la montagne, et l'on skie le matin avant de dîner au bord de l'eau. Le marché de Granville Island et les totems de Stanley Park donnent le ton du voyage.",
          image: {
            src: "/destination/canada/map-vancouver.png",
            alt: "Vancouver entre la baie et les montagnes de la côte Pacifique",
          },
          coordinates: { lat: 49.2827, lng: -123.1207 }, // TODO: verify coords
        },
        {
          title: "Fogo Island, à Terre-Neuve",
          description:
            "Une île de pêcheurs posée dans l'Atlantique Nord, avec ses maisons de bois peintes et ses ateliers d'artistes. Les icebergs passent au large au début de l'été, et les baleines arrivent juste après.",
          image: {
            src: "/destination/canada/map-fogo.png",
            alt: "Maisons de bois peintes de Fogo Island face à l'Atlantique Nord",
          },
          coordinates: { lat: 49.7167, lng: -54.1833 }, // TODO: verify coords
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Ce que les guides ne disent pas",
      heading: "Les conseils de nos experts pour votre voyage au Canada",
      description:
        "Quelques observations de terrain qui ne se trouvent pas dans un guide, pour choisir une étape ou comprendre pourquoi nous l'inscrivons à un itinéraire.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          title: "Le lac Moraine, avant les navettes",
          cardEyebrow: "Rocheuses",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "La route est fermée aux voitures : tout le monde arrive par la navette, et jamais très tôt",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La route du lac Moraine n'est plus accessible aux voitures
                particulières. Les visiteurs arrivent par navette, ce qui laisse
                les premières heures du jour presque vides, au moment précis où
                les sommets de la vallée passent du bleu au cuivre et où l'eau
                reste parfaitement lisse.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous vous y conduisons avant l'ouverture de la navette, avec un
                canoë réservé et le petit-déjeuner qui attend sur la berge. On
                redescend au moment où les premiers groupes arrivent.
              </p>
            </div>
          ),
        },
        {
          title: "L'hélicoptère et la météo de l'Ouest",
          cardEyebrow: "Hélicoptère",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Les vols partent quand la montagne le permet : mieux vaut se garder deux matins",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Une dépose en hélicoptère dépend du plafond nuageux et du vent,
                et la montagne change d'avis vite dans les Rocheuses comme dans
                les Bugaboos. Un voyageur qui ne réserve qu'un seul matin repart
                parfois sans avoir volé.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous prévoyons plusieurs nuits sur place, l'appareil réservé le
                premier matin et le suivant gardé en réserve. Le vol est
                repositionné sans frais si le temps en décide autrement.
              </p>
            </div>
          ),
        },
        {
          title: "Les icebergs, une affaire de semaines",
          cardEyebrow: "Terre-Neuve",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Ils dérivent le long de la côte est en début de saison, puis la saison se referme",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les icebergs détachés du Groenland longent la côte est de
                Terre-Neuve à la fin du printemps et au début de l'été. Les
                baleines à bosse, elles, arrivent un peu plus tard et restent
                jusqu'à la fin de l'été.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Un séjour en juin permet souvent de voir les deux. Nous suivons
                la dérive des glaces avec les patrons de pêche locaux et
                ajustons la date de la sortie en mer sur place.
              </p>
            </div>
          ),
        },
        {
          title: "La pluie du Pacifique, un atout",
          cardEyebrow: "Côte ouest",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "C'est elle qui fait la forêt, et les tempêtes d'automne se regardent de l'intérieur",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La côte de l'île de Vancouver reçoit beaucoup d'eau, et c'est ce
                qui donne à la forêt ses cèdres immenses et sa mousse jusqu'aux
                branches hautes. À l'automne, les tempêtes viennent frapper les
                rochers de Tofino et le spectacle se regarde depuis un fauteuil,
                derrière une grande vitre.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Emportez une veste imperméable et des chaussures qui sèchent
                vite, quelle que soit la saison. Les maisons prêtent le reste,
                bottes comprises.
              </p>
            </div>
          ),
        },
        {
          title: "Les ours, à la bonne distance",
          cardEyebrow: "Faune",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "On les observe depuis un bateau ou une plateforme, avec un guide qui connaît les animaux",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les grizzlys et les ours noirs se rencontrent en Alberta comme
                sur la côte du Pacifique, et les rivières à saumons sont leur
                garde-manger de l'automne. Les belles observations se font
                depuis l'eau ou depuis une plateforme installée à distance.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous travaillons avec des gardiens du territoire des Premières
                Nations, qui gèrent l'accès à ces vallées et suivent les mêmes
                ours d'une année sur l'autre.
              </p>
            </div>
          ),
        },
        {
          title: "Les parcs nationaux et leurs réservations",
          cardEyebrow: "Formalités",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Laissez-passer Parcs Canada, navettes et créneaux se prennent bien à l'avance",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Banff, Jasper et Pacific Rim demandent un laissez-passer Parcs
                Canada, et plusieurs sites très fréquentés fonctionnent
                désormais par créneaux réservés. En haute saison, les places
                partent des semaines à l'avance.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Tout cela est pris en amont, laissez-passer compris, et les
                visites sont placées aux heures où les sites respirent. Vous
                n'avez aucune file à gérer.
              </p>
            </div>
          ),
        },
        {
          title: "L'AVE, avant l'embarquement",
          cardEyebrow: "Formalités",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "L'autorisation électronique se demande en ligne avant le vol, pas à l'arrivée",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les voyageurs français n'ont pas besoin de visa, mais une
                Autorisation de voyage électronique est demandée pour embarquer
                sur un vol à destination du Canada. Elle s'obtient en ligne et
                reste valable cinq ans, ou jusqu'à l'expiration du passeport
                déclaré lors de la demande.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Faites la demande dès que les billets sont émis, et gardez le
                numéro avec vos documents de voyage. Nous vérifions ce point
                avant chaque départ.
              </p>
            </div>
          ),
        },
        {
          title: "Moins d'étapes, plus de plaisir",
          cardEyebrow: "Itinéraire",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Deux ou trois maisons bien choisies valent mieux qu'une succession de nuits",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le Canada donne envie d'enchaîner les régions, et c'est là que
                les voyages se fatiguent. Deux ou trois maisons laissent le
                temps de sortir tôt, de revenir déjeuner et de repartir le soir,
                ce qui est exactement le plaisir de ces paysages.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous construisons l'itinéraire autour des maisons, et nous
                utilisons l'hydravion ou l'hélicoptère pour relier ce qui mérite
                de l'être.
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
            "Nous étions au bord du lac Moraine avant tout le monde, avec un canoë et du café chaud. Le silence de cette heure-là, je ne l'oublierai pas. Le reste du séjour a tenu la même note, jusqu'au dernier dîner dans les Rocheuses.",
          image: {
            src: "/destination/canada/hero-1.png",
            alt: "Portrait de Frédéric", // TODO: verify
          },
          name: "Frédéric", // TODO: verify
          role: "Séjour en couple, juillet 2025", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "L'hydravion nous a déposés au fond d'un fjord, et nos deux adolescents n'ont plus regardé leur téléphone pendant une semaine. Les chevaux, les ours vus depuis le bateau, le feu le soir : ils en parlent encore à table.",
          image: {
            src: "/destination/canada/hero-2.png",
            alt: "Portrait de Constance", // TODO: verify
          },
          name: "Constance", // TODO: verify
          role: "Voyage en famille, août 2025", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Trois jours dans les Bugaboos avec l'hélicoptère pour nous seuls, puis Terre-Neuve et ses icebergs, que je n'attendais pas du tout. Je pensais connaître le Canada. Pas celui-là.",
          image: {
            src: "/destination/canada/hero-3.png",
            alt: "Portrait d'Édouard", // TODO: verify
          },
          name: "Édouard", // TODO: verify
          role: "Voyage sur mesure, février 2026", // TODO: verify
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
          question: "Quelle est la meilleure période pour partir au Canada ?",
          answer:
            "Nous privilégions juin à septembre pour les Rocheuses et la côte du Pacifique : les journées sont longues, la montagne est dégagée et les soirées restent douces. Terre-Neuve se visite de mai à septembre selon ce que l'on vient chercher, les icebergs au printemps et au début de l'été, les baleines ensuite. De janvier à mars, l'Ouest devient un terrain de neige, avec l'hélicoptère et les lodges de montagne.",
        },
        {
          question: "Combien de temps dure le vol Paris-Vancouver ?",
          answer:
            "Comptez environ 10 heures en vol direct, selon les compagnies et les périodes. Calgary se rejoint en environ 9 heures 30, avec des liaisons directes parfois saisonnières. Terre-Neuve demande généralement une correspondance, même si des vols directs saisonniers peuvent être proposés depuis Paris.",
        },
        {
          question: "Faut-il un visa pour aller au Canada ?",
          answer:
            "Non. Les ressortissants français sont dispensés de visa pour un séjour touristique de moins de six mois. Une Autorisation de voyage électronique (AVE) est en revanche nécessaire pour une arrivée par avion : elle s'obtient en ligne et reste valable cinq ans, ou jusqu'à l'expiration du passeport. Celui-ci doit couvrir toute la durée du séjour.",
        },
        {
          question: "Que faire au Canada en deux semaines ?",
          answer:
            "Deux semaines permettent de tenir deux régions sans se presser : les Rocheuses depuis le lac Louise, puis l'île de Vancouver et la côte du Pacifique, avec une étape à Vancouver au passage. Si Terre-Neuve vous attire, mieux vaut lui consacrer un voyage à part, ou la choisir à la place des Rocheuses.",
        },
        {
          question: "Le Canada est-il adapté aux familles ?",
          answer:
            "Oui, et c'est l'une des destinations où les âges se rejoignent le plus facilement. Les canoës, les chevaux, les sorties en mer et l'observation des ours se partagent entre grands et petits, et les maisons que nous proposons prévoient des chambres communicantes ou des tentes indépendantes. Nous adaptons le rythme des journées à l'âge des enfants.",
        },
        {
          question: "Quel budget prévoir pour un voyage au Canada ?",
          answer:
            "Le budget dépend des maisons choisies, de la saison et de la place que prennent l'hydravion ou l'hélicoptère dans l'itinéraire. Nous construisons chaque voyage sur mesure et vous présentons un budget détaillé avant toute réservation, sans engagement.",
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
        "D'autres pays de grands paysages et de belles maisons de montagne, à composer sur mesure avec votre travel designer.",
      slugs: ["etats-unis", "suisse", "mexique"],
    },
  ],
};
