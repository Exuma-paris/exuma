import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "ile-de-paques",
  name: "Île de Pâques",
  placeKind: "region",
  country: "Chili",
  genitive: "de l'île de Pâques",
  continentSlug: "ameriques", // rattachée au Chili dans l'arborescence, même si l'île est polynésienne
  blurb: "Rapa Nui, Rano Raraku, Tongariki, Orongo",
  keywords: [
    "ile de paques",
    "rapa nui",
    "moai",
    "rano raraku",
    "ahu tongariki",
    "orongo",
    "hanga roa",
    "anakena",
  ],
  metaTitle: "Île de Pâques : Voyage sur mesure",
  metaDescription:
    "Voyage à l'île de Pâques sur mesure : Rano Raraku, Ahu Tongariki, Orongo, guides rapanui. Itinéraire écrit par votre travel designer Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe à l'île de Pâques",
      heading: "L'île de Pâques, des moai de Tongariki au cratère du Rano Kau",
      description:
        "Au milieu du Pacifique, l'île de Pâques se laisse apprivoiser lentement. On y vient pour les statues et l'on en repart avec autre chose : le vent qui ne faiblit jamais, la lumière qui change plusieurs fois par jour, et les récits que les familles rapanui réservent à ceux qui prennent le temps de les écouter. C'est cette île-là que nous vous ouvrons, avec ceux qui y sont nés.",
      images: [
        {
          src: "/destination/ile-de-paques/hero-1.png",
          alt: "Moai d'Ahu Tongariki au lever du jour sur l'île de Pâques",
        },
        {
          src: "/destination/ile-de-paques/hero-2.png",
          alt: "Cratère du Rano Kau et village de pierre d'Orongo au-dessus de l'océan",
        },
        {
          src: "/destination/ile-de-paques/hero-3.png",
          alt: "Baie d'Anakena et sa cocoteraie sur la côte nord de Rapa Nui",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir à l'île de Pâques ?",
      heading:
        "Carole, spécialiste de l'île de Pâques, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "carole",
        // TODO: verify quote attribution
        quote:
          "Rapa Nui ne ressemble à aucune autre étape chilienne : on y parle une langue polynésienne, on y mange le poisson sorti de terre, et l'océan tient tout autour sans jamais laisser voir autre chose. Je place cette étape en fin de voyage, quand on est prêt à ralentir. C'est là qu'elle fait son effet.",
        role: "Travel Designer · Île de Pâques",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte de l'île de Pâques",
      heading: "Une histoire que les Rapanui racontent encore",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Un voyage à l'île de Pâques commence toujours par Hanga Roa, le seul village, où les barques rentrent le matin et où les chevaux traversent la rue sans se presser. Le reste de l'île est un parc national que les Rapanui administrent eux-mêmes, et l'on n'y entre qu'accompagné de l'un d'entre eux. C'est une chance plutôt qu'une contrainte : personne ne raconte mieux cette terre que ceux qui en descendent.",
        "Les moai ne regardent pas la mer, et c'est la première chose que l'on apprend ici. Dressés sur leurs plateformes, ils tournent le dos au Pacifique pour veiller sur les villages qui les avaient élevés. À Rano Raraku, la carrière où ils sont nés, beaucoup n'ont jamais quitté la pente : certains à peine dégagés de la roche, d'autres couchés dans l'herbe, le visage tourné vers le ciel.",
        "Au sud, le cratère du Rano Kau ouvre son cirque de roseaux au-dessus de l'océan, et le village de pierre d'Orongo tient encore en équilibre sur son bord. C'est de là que partait la course de l'homme-oiseau, quand chaque clan envoyait son meilleur nageur chercher le premier œuf de sterne sur l'îlot de Motu Nui. Nous plaçons ces journées à contretemps des groupes, la carrière au petit matin et les plateformes en fin d'après-midi.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/ile-de-paques/full-image.png",
        alt: "Moai enterrés jusqu'aux épaules à Rano Raraku lors d'un voyage à l'île de Pâques",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Île de Pâques : ce que nous vous ouvrons",
      heading: "L'île que les familles rapanui acceptent de montrer",
      theme: "light",
      paragraphs: [
        "Tout le monde visite les mêmes sites, dans le même sens, aux mêmes heures. Ce qui change une journée sur cette île, ce n'est donc pas l'endroit où l'on va, c'est le moment où l'on y arrive et la personne qui vous accompagne. Nous choisissons l'un et l'autre.",
        "Nous travaillons avec des familles rapanui qui gardent des terres privées, une grotte dont l'entrée ne se devine pas du sentier, un jardin où le four enterré cuit encore sous les pierres chaudes. Un archéologue du programme de fouilles nous accompagne dans la carrière de Rano Raraku, avant l'arrivée des groupes. Ces accès ne s'achètent pas, ils se construisent avec le temps, et nous les ouvrons pour vous seuls.",
      ],
      images: [
        {
          src: "/destination/ile-de-paques/split-1.png",
          alt: "Guide rapanui devant une plateforme de moai sur la côte est de l'île de Pâques",
        },
        {
          src: "/destination/ile-de-paques/split-2.png",
          alt: "Four enterré umu pae que l'on ouvre dans un jardin de Hanga Roa",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/ile-de-paques/xp-rano-raraku-1.png",
          alt: "Moai inachevés dressés dans la pente de la carrière de Rano Raraku",
        },
        right: {
          src: "/destination/ile-de-paques/xp-rano-raraku-2.png",
          alt: "Archéologue montrant les traces d'outils dans la pierre de Rano Raraku",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Rano Raraku, la carrière des moai avec un archéologue",
        columns: [
          "La carrière occupe le flanc d'un volcan éteint, et c'est là que toutes les statues de l'île ont été taillées. Beaucoup n'en sont jamais parties. Elles se tiennent debout dans l'herbe, enterrées jusqu'aux épaules, ou couchées sur le dos, et la plus grande de toutes n'a jamais été détachée de la roche. On marche entre elles comme dans un atelier que l'on aurait quitté la veille.",
          "Nous y entrons avant l'ouverture, avec un archéologue du programme de fouilles, en dehors du sentier balisé. Il montre les traces d'outils dans la pierre tendre, les dos sculptés que l'on n'aperçoit jamais du chemin, les gravures retrouvées sous les statues ensevelies. Il dit aussi tout ce que l'on ignore encore, et c'est souvent ce dont on se souvient le mieux en rentrant.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités à l'île de Pâques",
      heading: "Les matins que l'on ne partage avec personne",
      description:
        "L'aube devant les moai de Tongariki avant l'ouverture des grilles, les chevaux d'une famille rapanui pour monter jusqu'aux hauteurs du Terevaka, et le four enterré que l'on ouvre à la tombée du jour dans un jardin de Hanga Roa.",
      slugs: [
        "tongariki-lever-soleil",
        "terevaka-cheval-rapa-nui",
        "umu-rapa-nui-famille",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Dormir au-dessus de l'océan, ou à l'écart du village",
      description:
        "Un lodge posé sur le plateau du sud, une maison de pierre volcanique en surplomb du Pacifique à la sortie de Hanga Roa, et un jardin de chambres basses au-dessus des moai de Tahai.",
      slugs: ["explora-rapa-nui", "nayara-hangaroa", "altiplanico-rapa-nui"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage à l'île de Pâques",
      description:
        "Vol, formalités, saisons et règles du parc national : l'essentiel pour préparer votre voyage à l'île de Pâques sereinement.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "L'île se rejoint depuis Santiago du Chili, où arrivent les vols venus de Paris. Air France dessert Santiago en direct : comptez environ 14h30 de vol. La traversée du Pacifique jusqu'à l'aéroport de Mataveri est assurée en direct par LATAM et demande environ 5h30, avec une fréquence qui varie selon la saison.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Rapa Nui reste toujours deux heures en arrière de Santiago. Avec la France, l'écart varie généralement de six à huit heures, selon les changements d'heure de part et d'autre.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Le peso chilien. Les cartes étrangères sont très largement acceptées dans les hôtels, les restaurants et les agences de Hanga Roa. Les distributeurs sont peu nombreux sur l'île, et il reste utile de conserver un peu d'espèces, notamment pour les guides, le marché et les familles qui vous reçoivent.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Les ressortissants français sont dispensés de visa pour un séjour touristique de moins de trois mois au Chili, et le passeport doit être valable pendant toute la durée du séjour. L'entrée sur l'île relève ensuite d'une réglementation qui lui est propre : le formulaire FUI est à compléter dans les 48 heures précédant le vol, un billet aller-retour est exigé, l'hébergement doit être agréé SERNATUR et le séjour est limité à trente jours. C'est la formalité que l'on oublie le plus souvent. L'entrée du parc national s'achète par ailleurs en ligne avant la visite, et un guide accrédité est requis sur les principaux sites archéologiques.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin spécifique n'est obligatoire pour un séjour touristique à l'île de Pâques. Il est recommandé d'être à jour des vaccinations prévues au calendrier vaccinal français, l'hépatite A se discutant ensuite selon la durée et les conditions du séjour au Chili. L'hôpital de Hanga Roa assure les soins courants.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "L'île se visite toute l'année. De janvier à mars, il fait plus chaud et le temps est relativement sec ; c'est aussi en février que se déroule le Tapati Rapa Nui, le grand rendez-vous de l'île, qui se prépare très longtemps à l'avance. Nous privilégions pour notre part octobre et mars, qui gardent la belle lumière et laissent les sites plus calmes.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "L'espagnol et le rapanui, langue polynésienne proche du tahitien et du maori, encore parlée dans les familles et enseignée à l'école de Hanga Roa. L'anglais est présent dans le secteur touristique, dans les hôtels comme chez les guides. Nous organisons l'accompagnement en français.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Subtropical et océanique, adouci par le Pacifique et balayé par un vent presque constant. Les températures restent douces toute l'année, plus chaudes de janvier à mars, plus fraîches en juillet et août. Des averses sont possibles en toute saison : elles sont souvent courtes, parfois intenses.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Île de Pâques. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/ile-de-paques/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Itinéraire sur mesure à l'île de Pâques entre Rano Raraku, Orongo et Anakena",
            "Adresses confidentielles à Rapa Nui : terres privées et grottes de familles rapanui",
            "Hébergements à l'île de Pâques : lodge du plateau sud et maisons de Hanga Roa",
            "Conciergerie privée 24/7 pour un voyage à l'île de Pâques",
            "Expériences immersives à Rapa Nui : carrière de Rano Raraku et umu pae en famille",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables à l'île de Pâques",
      heading: "Les endroits où l'île se raconte",
      description:
        "De Hanga Roa aux plateformes de la côte est, les lieux où l'on comprend d'où viennent les moai, visités aux heures qui leur vont.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      initialZoom: 10,
      places: [
        {
          title: "Hanga Roa",
          description:
            "Le seul village de l'île, où tout le monde vit et où tout commence. Les barques rentrent le matin et le poisson part directement au marché. En fin de journée, on descend à pied jusqu'aux moai de Tahai pour regarder le soleil tomber derrière eux.",
          image: {
            src: "/destination/ile-de-paques/map-hanga-roa.png",
            alt: "Barques de pêche et front de mer du village de Hanga Roa à Rapa Nui",
          },
          // TODO: verify coords
          coordinates: { lat: -27.1462, lng: -109.4265 },
        },
        {
          title: "Rano Raraku",
          description:
            "La carrière où toutes les statues de l'île ont été taillées, dans la pierre tendre d'un volcan éteint. Beaucoup n'en sont jamais parties : elles dorment dans l'herbe, enterrées jusqu'aux épaules, et la plus grande n'a jamais été détachée du rocher.",
          image: {
            src: "/destination/ile-de-paques/map-rano-raraku.png",
            alt: "Moai inachevés dans la carrière de Rano Raraku sur l'île de Pâques",
          },
          // TODO: verify coords
          coordinates: { lat: -27.1211, lng: -109.2892 },
        },
        {
          title: "Ahu Tongariki",
          description:
            "La plus grande plateforme de l'île, relevée après qu'un raz-de-marée avait couché ses moai. Le soleil se lève juste derrière eux. Nous vous y conduisons avant que les grilles n'ouvrent, quand il n'y a encore personne sur le site.",
          image: {
            src: "/destination/ile-de-paques/map-tongariki.png",
            alt: "Moai d'Ahu Tongariki en contre-jour au lever du soleil à Rapa Nui",
          },
          // TODO: verify coords
          coordinates: { lat: -27.1256, lng: -109.2767 },
        },
        {
          title: "Orongo et le Rano Kau",
          description:
            "Un cratère immense, tapissé de roseaux, ouvert d'un côté sur l'océan. Sur son bord tiennent encore les maisons de pierre d'Orongo, d'où les clans lançaient la course de l'homme-oiseau vers l'îlot de Motu Nui.",
          image: {
            src: "/destination/ile-de-paques/map-orongo.png",
            alt: "Maisons de pierre d'Orongo au bord du cratère du Rano Kau",
          },
          // TODO: verify coords
          coordinates: { lat: -27.1861, lng: -109.4419 },
        },
        {
          title: "Anakena",
          description:
            "La plage de l'île, son sable clair et sa cocoteraie, là où la tradition fait débarquer le premier roi Hotu Matu'a. Les moai d'Ahu Nau Nau y portent encore leur chignon de pierre rouge, et l'eau y est assez douce pour se baigner.",
          image: {
            src: "/destination/ile-de-paques/map-anakena.png",
            alt: "Plage d'Anakena, cocotiers et moai d'Ahu Nau Nau à l'île de Pâques",
          },
          // TODO: verify coords
          coordinates: { lat: -27.0736, lng: -109.323 },
        },
        {
          title: "Ahu Akivi",
          description:
            "Les seuls moai de l'île tournés vers l'océan. Ils sont alignés sur le soleil des équinoxes, à l'intérieur des terres, et l'endroit garde en fin de journée un calme que l'on ne trouve nulle part ailleurs.",
          image: {
            src: "/destination/ile-de-paques/map-ahu-akivi.png",
            alt: "Moai d'Ahu Akivi alignés face à l'océan sur l'île de Pâques",
          },
          // TODO: verify coords
          coordinates: { lat: -27.1153, lng: -109.3969 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage à l'île de Pâques",
      description:
        "Nos conseils de terrain pour choisir la saison, comprendre les règles du parc national et laisser à l'île le temps qu'elle demande.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          title: "Quand partir",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "L'île se visite toute l'année, et le Tapati Rapa Nui a lieu en février",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L&apos;île se visite toute l&apos;année. Des averses restent
                possibles en toute saison, souvent courtes et parfois intenses, et
                le vent accompagne les journées d&apos;un bout à l&apos;autre de
                l&apos;année. De janvier à mars, il fait plus chaud et le temps
                est relativement sec.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Nous aimons particulièrement octobre et mars, qui gardent la belle
                lumière et laissent les sites plus calmes : c&apos;est notre
                préférence, pas une règle. Le Tapati Rapa Nui, en février, est le
                grand rendez-vous de l&apos;année : l&apos;île entière danse, rame
                et chante pendant deux semaines. C&apos;est magnifique et cela se
                prépare très longtemps à l&apos;avance, vols et chambres compris.
              </p>
            </div>
          ),
        },
        {
          title: "Le vol depuis Santiago",
          cardEyebrow: "Accès",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Une nuit à Santiago avant de traverser le Pacifique",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                On rejoint l&apos;île depuis Santiago du Chili, où arrivent les
                vols venus de Paris. La traversée du Pacifique se fait ensuite
                d&apos;un seul trait, jusqu&apos;à la piste de Mataveri, posée en
                travers du sud de l&apos;île. La fréquence de cette liaison varie
                selon la saison, et les places se raréfient vite en janvier et
                février.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Nous prévoyons systématiquement une nuit à Santiago avant la
                seconde étape. On arrive ainsi reposé sur une île qui se découvre
                à pied et à cheval. Les formalités sont préparées par nos équipes
                en amont : le formulaire FUI se complète dans les 48 heures qui
                précèdent le vol, un billet aller-retour est exigé et
                l&apos;hébergement doit être agréé SERNATUR.
              </p>
            </div>
          ),
        },
        {
          title: "Le parc et son guide",
          cardEyebrow: "Terrain",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Un guide accrédité est requis sur les principaux sites, et l'entrée s'achète en ligne",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le parc national couvre la plus grande partie de l&apos;île et il
                est administré par la communauté rapanui. Un guide accrédité est
                requis sur les principaux sites archéologiques, et certains, comme
                Rano Raraku ou Orongo, ne se visitent qu&apos;une seule fois avec
                le même billet. L&apos;entrée du parc s&apos;achète en ligne avant
                la visite.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                C&apos;est ce qui fait le prix du séjour plutôt qu&apos;une
                contrainte. Nos guides sont nés sur l&apos;île, et ce sont eux qui
                obtiennent les entrées en dehors des heures d&apos;affluence. Nous
                gardons Rano Raraku pour le premier matin, quand la carrière est
                encore vide et que la lumière arrive de côté.
              </p>
            </div>
          ),
        },
        {
          title: "Le temps qu'il faut",
          cardEyebrow: "Rythme",
          modalEyebrow: "Guide pratique",
          shortDescription: "Quatre nuits pour que l'île se donne vraiment",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Deux journées suffisent à voir les grands sites et laissent
                repartir sans avoir rien compris. L&apos;île se donne au bout de
                trois jours, quand on croise les mêmes visages et que les guides
                passent du récit officiel aux histoires de leur propre famille.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Nous comptons quatre nuits, cinq si l&apos;étape suit la
                Patagonie ou le désert d&apos;Atacama. Rapa Nui gagne à venir
                après elles : le rythme y est plus lent qu&apos;ailleurs au
                Chili, et c&apos;est une belle façon de rentrer.
              </p>
            </div>
          ),
        },
        {
          title: "Se déplacer sur l'île",
          cardEyebrow: "Terrain",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Une île qui se marche et se monte à cheval plus qu'elle ne se roule",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Quelques routes goudronnées relient Hanga Roa à Anakena et à la
                côte est. Tout le reste est de la piste, et les hauteurs du
                Terevaka ne se rejoignent qu&apos;à pied ou à cheval. Les
                véhicules de location ne sont pas assurés sur l&apos;île, ce qui
                surprend toujours les voyageurs.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Nous travaillons en véhicule privé avec chauffeur et guide, et
                nous gardons toujours une demi-journée à cheval avec une famille
                de l&apos;île. C&apos;est la seule façon d&apos;atteindre les
                hauteurs du nord, d&apos;où le regard ne rencontre plus que de
                l&apos;eau.
              </p>
            </div>
          ),
        },
        {
          title: "Les usages sur les sites",
          cardEyebrow: "Usages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les plateformes sont des lieux funéraires, et cela se respecte",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les ahu, ces plateformes qui portent les moai, sont des sépultures.
                On ne marche pas dessus, on ne touche pas les statues et on ne
                déplace aucune pierre. Ce ne sont pas seulement des monuments :
                ce sont les ancêtres des familles qui vous accompagnent.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Demandez avant de photographier quelqu&apos;un, y compris pendant
                le Tapati. Les grottes et les terres privées que nous ouvrons
                appartiennent à des familles, et le guide explique en arrivant ce
                qui se fait et ce qui ne se fait pas. Cela s&apos;écoute
                volontiers.
              </p>
            </div>
          ),
        },
        {
          title: "À table",
          cardEyebrow: "Gastronomie",
          modalEyebrow: "Guide pratique",
          shortDescription: "Le thon du matin, le four enterré, le po'e à la banane",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Presque tout arrive par bateau ou par avion, sauf le poisson. Le
                thon et le mahi-mahi sont débarqués le matin à Hanga Roa et se
                mangent en ceviche partout dans le village. L&apos;umu pae, le
                four enterré, cuit poisson, poulet et patates douces sous des
                pierres chauffées au feu pendant une bonne partie de la journée.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Le po&apos;e, ce gâteau de banane ou de citrouille cuit à la
                vapeur, se sert en fin de repas et ne se trouve pas au restaurant.
                Nous organisons l&apos;umu chez une famille du village, avec les
                grands-parents et les enfants autour du four : c&apos;est le repas
                dont on parle en rentrant.
              </p>
            </div>
          ),
        },
        {
          title: "Dans ma valise",
          cardEyebrow: "Bagages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Un coupe-vent léger, de bonnes chaussures et de quoi encaisser le soleil",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le vent et les averses courtes dictent la liste : un coupe-vent
                imperméable léger, deux couches respirantes, des chaussures de
                marche déjà faites et un maillot pour Anakena. Le soleil du
                Pacifique sud est franc, même quand le ciel se couvre.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Prévoyez une protection solaire élevée, un chapeau qui tient dans
                le vent et des lunettes filtrantes. Une lampe frontale sert dans
                les tunnels de lave, et une housse étanche protège l&apos;appareil
                photo : les journées enchaînent la pluie et le grand soleil sans
                prévenir.
              </p>
            </div>
          ),
        },
        {
          title: "Budget et vie locale",
          cardEyebrow: "Budget",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Une île où presque tout arrive par la mer, et des accès qui se construisent",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les prix sont plus élevés que sur le continent, puisque tout ce
                qui n&apos;est pas poisson ou patate douce traverse le Pacifique.
                Les cartes passent dans les hôtels et les restaurants du village,
                les distributeurs sont rares et parfois hors service. Les guides
                et les familles se remercient en espèces.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Trois postes font le budget : le vol depuis Santiago, la maison
                choisie sur l&apos;île, et les accès que nous négocions localement,
                la carrière avec l&apos;archéologue, Tongariki avant
                l&apos;ouverture, les terres et les grottes privées. Nous
                détaillons ces lignes séparément dans le devis, pour que chacun
                décide où mettre le curseur.
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
            "Nous sommes entrés dans la carrière au petit matin avec l'archéologue, et il n'y avait personne d'autre. Il nous a montré ce que l'on ne voit jamais depuis le chemin. Quand les premiers visiteurs sont arrivés, nous étions déjà ailleurs sur l'île.",
          image: {
            src: "/destination/ile-de-paques/hero-1.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Île de Pâques, 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Le four a été ouvert au moment où le jour tombait, dans le jardin, avec la grand-mère et les petits-enfants autour. Nous avons mangé assis par terre et personne n'a regardé l'heure. C'est le repas dont nos enfants parlent encore.",
          image: {
            src: "/destination/ile-de-paques/hero-2.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Chili et Rapa Nui en famille, 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "En haut du Terevaka il n'y avait que les chevaux, le vent et le silence. Je n'avais jamais eu cette sensation nulle part ailleurs, et je ne l'ai pas oubliée depuis.",
          image: {
            src: "/destination/ile-de-paques/hero-3.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Île de Pâques après la Patagonie, 2025", // TODO: replace with real testimonial
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
            "Quelle est la meilleure période pour partir à l'île de Pâques ?",
          answer:
            "L'île se visite toute l'année. De janvier à mars, il fait plus chaud et le temps est relativement sec, et c'est en février que se déroule le Tapati Rapa Nui, le grand rendez-vous de l'île : il demande de réserver vols et chambres très longtemps à l'avance. Des averses restent possibles en toute saison, souvent courtes et parfois intenses. Nous privilégions pour notre part octobre et mars, qui gardent la belle lumière et laissent les sites plus calmes : c'est une préférence éditoriale, pas une règle.",
        },
        {
          question: "Combien de temps dure le vol pour l'île de Pâques ?",
          answer:
            "L'île se rejoint depuis Santiago du Chili. Air France dessert Santiago en direct depuis Paris, en environ 14h30 de vol. La traversée du Pacifique jusqu'à l'aéroport de Mataveri est ensuite assurée en direct par LATAM et demande environ 5h30, avec une fréquence qui varie selon la saison. Nous prévoyons systématiquement une nuit à Santiago entre les deux, pour arriver reposé sur une île qui se découvre à pied et à cheval.",
        },
        {
          question: "Faut-il un visa pour aller à l'île de Pâques ?",
          answer:
            "Les ressortissants français sont dispensés de visa pour un séjour touristique de moins de trois mois au Chili, et le passeport doit être valable pendant toute la durée du séjour. L'entrée sur l'île relève ensuite d'une réglementation particulière : le formulaire FUI est à compléter dans les 48 heures précédant le vol, un billet aller-retour est exigé, l'hébergement doit être agréé SERNATUR et le séjour est limité à trente jours. C'est la formalité que l'on oublie le plus souvent. L'entrée du parc national s'achète par ailleurs en ligne avant la visite. Nous préparons ces démarches avec vous avant le départ.",
        },
        {
          question: "Combien de jours faut-il pour visiter l'île de Pâques ?",
          answer:
            "Nous comptons quatre nuits. Deux journées permettent de voir les grands sites, elles ne laissent pas le temps de comprendre l'île. Avec quatre nuits, on entre à Rano Raraku au premier matin, on garde une aube pour Ahu Tongariki, une demi-journée à cheval vers les hauteurs du Terevaka et une fin d'après-midi à Orongo, au-dessus du cratère. Cinq nuits si l'étape suit la Patagonie ou le désert d'Atacama : le rythme y est plus lent, et c'est une belle façon de terminer le voyage.",
        },
        {
          question: "Peut-on visiter l'île de Pâques sans guide ?",
          answer:
            "Pas pour l'essentiel des sites. Le parc national couvre la plus grande partie de l'île, il est administré par la communauté rapanui, et un guide accrédité est requis sur les principaux sites archéologiques. L'entrée du parc s'achète en ligne avant la visite, et Rano Raraku comme Orongo ne se visitent qu'une seule fois avec le même billet. C'est ce qui fait le prix du séjour : les guides rapanui racontent leur île de l'intérieur, et ce sont eux qui obtiennent les entrées en dehors des heures d'affluence.",
        },
        {
          question: "Combien coûte un voyage à l'île de Pâques ?",
          answer:
            "Trois postes font l'essentiel du budget : le vol depuis Santiago, dont la fréquence limitée fait monter les prix en haute saison ; la maison choisie sur l'île, du lodge posé sur le plateau du sud aux chambres basses installées au-dessus des moai de Tahai ; et les accès que nous négocions localement, la carrière de Rano Raraku avec un archéologue, Ahu Tongariki avant l'ouverture, les terres et les grottes de familles rapanui. Nous détaillons ces lignes séparément avant toute réservation, sans engagement.",
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
        "Le pays auquel l'île se rattache, l'autre bout de la Polynésie et le grand Sud américain : trois prolongements naturels, à composer sur mesure avec votre travel designer.",
      slugs: ["chili", "polynesie", "argentine"],
    },
  ],
};
