import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "uruguay",
  name: "Uruguay",
  placeKind: "country",
  country: "Uruguay",
  genitive: "de l'Uruguay",
  continentSlug: "ameriques",
  blurb: "José Ignacio, Garzón, gauchos, Cabo Polonio",
  keywords: [
    "uruguay",
    "montevideo",
    "jose ignacio",
    "punta del este",
    "garzon",
    "cabo polonio",
    "tacuarembo",
    "tannat",
  ],
  metaTitle: "Uruguay : Voyage sur mesure",
  metaDescription:
    "Voyage en Uruguay sur mesure : José Ignacio, vignobles de Garzón, estancias de Tacuarembó, dunes de Cabo Polonio. Itinéraire écrit par votre travel designer Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe en Uruguay",
      heading: "L'Uruguay, de José Ignacio aux collines de Garzón",
      description:
        "L'Uruguay s'apprivoise doucement. La côte s'étire de Montevideo jusqu'aux dunes de Cabo Polonio, ponctuée de villages de pêcheurs où les maisons restent basses et où le sable arrive jusqu'aux portes. À l'intérieur, les estancias vivent encore du cheval et du feu, et les collines se couvrent de vignes jusqu'à la sierra de la Ballena. C'est cet Uruguay-là que nous vous montrons.",
      images: [
        {
          src: "/destination/uruguay/hero-1.png",
          alt: "Plage de José Ignacio au coucher du soleil sur la côte atlantique de l'Uruguay",
        },
        {
          src: "/destination/uruguay/hero-2.png",
          alt: "Gaucho rassemblant le bétail à cheval dans une estancia du centre de l'Uruguay",
        },
        {
          src: "/destination/uruguay/hero-3.png",
          alt: "Dunes du parc national de Cabo Polonio au bord de l'Atlantique",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir en Uruguay ?",
      heading: "Carole, spécialiste de l'Uruguay, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "carole",
        // TODO: verify quote attribution
        quote:
          "Ce que j'aime en Uruguay, c'est cette façon qu'a le pays de ne rien précipiter. Le feu de midi rassemble la maison, le mate passe de main en main, et l'on finit par adopter ce rythme sans même y penser. Je veille surtout à ce que les plus belles adresses vous soient ouvertes en dehors des heures, comme si vous étiez reçus chez des amis.",
        role: "Travel Designer · Uruguay",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte de l'Uruguay",
      heading: "Le plaisir de ralentir, entre l'océan et les estancias",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Un voyage en Uruguay se savoure plutôt qu'il ne s'enchaîne. On passe de Montevideo, de sa vieille ville et de sa longue promenade au bord du Río de la Plata, aux villages de la côte sans jamais avoir l'impression de courir. La campagne prend le relais très vite, avec ses troupeaux, ses lagunes et ses chemins de terre bordés d'eucalyptus.",
        "La côte se découvre d'ouest en est, et chaque étape se fait plus tranquille. Colonia del Sacramento garde ses rues pavées héritées des Portugais et ses murs couverts de bougainvillées. Punta del Este a ses immeubles et son port animé, puis le paysage s'ouvre : José Ignacio, La Pedrera, et enfin Cabo Polonio où l'on s'éclaire encore à la bougie. Le pont circulaire de la Laguna Garzón, dessiné par Rafael Viñoly, marque le passage d'un monde à l'autre.",
        "À l'intérieur, la vie reste agricole et c'est ce qui fait son charme. Sacromonte a posé ses abris de verre dans la sierra de la Ballena, au milieu de son propre vignoble, et l'on y dort face aux collines sans apercevoir personne. Estancia Vik veille sur son troupeau entre la lagune de Garzón et l'océan, et confie chacune de ses suites à un artiste uruguayen. Nous composons les itinéraires autour de ces maisons, parce que ce sont elles qui donnent le ton du voyage.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/uruguay/full-image.png",
        alt: "Vignobles de tannat sur les collines de Garzón, dans le sud de l'Uruguay",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Uruguay : la côte de Rocha",
      heading: "La côte de Rocha, quand l'été s'attarde en mars",
      theme: "light",
      paragraphs: [
        "En janvier, la côte appartient aux familles argentines qui descendent en vacances, et l'ambiance y est joyeuse. En mars, tout se calme. L'eau reste chaude jusqu'à la fin du mois, les barques des pêcheurs rentrent dans la matinée, et les villages redeviennent eux-mêmes. C'est la période que nous préférons.",
        "Plus à l'est, la côte de Rocha se parcourt entre les dunes et les lagunes classées par l'Unesco. La Pedrera, Punta del Diablo et Aguas Dulces s'atteignent par des chemins de sable, au bout desquels on ne trouve que le bruit de l'océan. À Cabo Polonio, l'électricité n'est jamais arrivée, et personne là-bas ne s'en plaint.",
      ],
      images: [
        {
          src: "/destination/uruguay/split-1.png",
          alt: "Barque de pêcheur tirée sur le sable devant un village de la côte uruguayenne",
        },
        {
          src: "/destination/uruguay/split-2.png",
          alt: "Chemin de sable longeant les lagunes de la côte de Rocha en Uruguay",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/uruguay/xp-garzon-mallmann-1.png",
          alt: "Agneau cuit à la croix devant un feu ouvert dans la cour de la table de Garzón",
        },
        right: {
          src: "/destination/uruguay/xp-garzon-mallmann-2.png",
          alt: "Rangs de tannat sur les collines de granit des vignobles de Garzón",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Le déjeuner au feu de Francis Mallmann, puis les vignes alentour",
        columns: [
          "À Garzón, la vie s'organise autour de la place du village et d'une ancienne épicerie que Francis Mallmann a transformée en table. Il n'y cuisine qu'au feu. L'agneau tourne lentement sur sa croix pendant toute la matinée, les légumes cuisent sous la cendre, et le reste passe sur la plaque de fonte. On déjeune dans la cour, à l'ombre, et l'on découvre le menu en s'installant : c'est ce que les braises ont donné le matin même.",
          "L'après-midi, nous vous conduisons dans les collines, chez le vigneron. Le tannat est arrivé ici avec les familles basques venues du Sud-Ouest de la France, et il a trouvé sur le granit de Garzón, à portée de l'air marin, une élégance qu'il n'a pas ailleurs. La dégustation se fait dans le chai, au milieu des cuves, avec l'œnologue qui vous fait goûter avant l'assemblage. Cette porte-là, nous l'ouvrons pour vous seuls.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Uruguay",
      heading: "Le candombe, les gauchos et les dunes de Cabo Polonio",
      description:
        "Une répétition de comparsa dans une cour du barrio Sur, le rassemblement du bétail à cheval au petit matin, et la traversée du parc national jusqu'à l'océan.",
      slugs: ["candombe-montevideo", "gauchos-tacuarembo", "cabo-polonio-dunes"],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Où séjourner en Uruguay",
      description:
        "Des suites confiées à des artistes au-dessus de la lagune de Garzón, des abris de verre perdus dans la sierra de la Ballena, et une maison de bronze posée sur le sable de José Ignacio.",
      slugs: [
        "estancia-vik-jose-ignacio",
        "sacromonte-landscape-hotel",
        "playa-vik-jose-ignacio",
      ],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage en Uruguay",
      description:
        "Vol, décalage, monnaie, formalités et saisons : l'essentiel pour préparer le voyage en Uruguay sereinement.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Il n'existe pas actuellement de liaison directe entre Paris et Montevideo. L'aéroport de Carrasco (MVD), à l'est de la capitale, est desservi directement depuis Madrid, São Paulo et Buenos Aires. Comptez environ 15 à 18 heures de trajet selon la correspondance, le passage par Buenos Aires pouvant se révéler moins fluide selon les aéroports utilisés.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "L'Uruguay ne change pas d'heure, le pays ayant supprimé l'heure d'été. Comptez quatre heures de retard sur la France en hiver, et cinq heures en été.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "La monnaie du pays est le peso uruguayen (UYU). Les cartes étrangères sont très largement acceptées à Montevideo, à Punta del Este et sur la côte de Maldonado. Il reste utile de conserver des espèces pour les villages de la côte de Rocha et pour Cabo Polonio.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Les ressortissants français sont dispensés de visa pour un séjour touristique jusqu'à 90 jours inclus. France Diplomatie demande simplement un passeport en cours de validité.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin spécifique n'est présenté comme obligatoire pour un voyage touristique classique. Les vaccinations du calendrier français doivent être à jour. France Diplomatie mentionne l'hépatite A et la typhoïde selon les conditions et la durée du séjour, l'hépatite B et la rage relevant ensuite du profil du voyage. Une vigilance concernant la dengue est par ailleurs en cours, y compris à Montevideo.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "La saison favorable s'étend de novembre à avril, la grande saison estivale allant de décembre à mars. Nous privilégions le début du mois de décembre et la seconde quinzaine de mars, pour les températures agréables et une fréquentation plus douce. Janvier reste très animé, ce qui convient à qui recherche l'ambiance des vacances australes.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "L'espagnol est la seule langue officielle. L'accent rioplatense s'entend surtout à Montevideo et sur la côte, l'espagnol uruguayen connaissant plusieurs variantes régionales. Le portuñol se pratique le long de la frontière brésilienne.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Le climat est tempéré, avec quatre saisons marquées. L'été austral, de décembre à mars, est chaud et lumineux sur toute la côte. L'hiver reste doux dans la journée et frais la nuit, en particulier à l'intérieur du pays. Le pampero, vent venu du sud-ouest, peut rafraîchir l'air en quelques heures.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Uruguay. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/uruguay/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Itinéraire sur mesure en Uruguay entre Montevideo, Garzón et la côte de Rocha",
            "Adresses confidentielles en Uruguay : estancias en activité et tables de village",
            "Hébergements en Uruguay : Estancia Vik et Sacromonte Landscape Hotel",
            "Conciergerie privée 24/7 pour un voyage en Uruguay",
            "Expériences immersives en Uruguay : feux de Garzón et cavaliers des estancias",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables en Uruguay",
      heading: "De la vieille ville de Colonia aux villages de l'Atlantique",
      description:
        "Les étapes que nous aimons relier, en s'arrêtant là où le pays prend son temps.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      initialZoom: 6,
      places: [
        {
          title: "Montevideo, la ville et ses tambours",
          description:
            "La capitale s'est construite autour de son port et de sa longue promenade au bord de l'eau. Le soir, dans le barrio Sur et à Palermo, les tambours du candombe sortent dans la rue et le quartier suit.",
          image: {
            src: "/destination/uruguay/map-montevideo.png",
            alt: "Promenade de Montevideo au bord du Río de la Plata en fin de journée",
          },
          // TODO: verify coords
          coordinates: { lat: -34.9114, lng: -56.1969 },
        },
        {
          title: "José Ignacio, le village de pêcheurs",
          description:
            "Un phare veille sur la presqu'île, entre la plage Mansa et la plage Brava. On y dîne les pieds dans le sel, et le village a gardé son allure de port de pêche.",
          image: {
            src: "/destination/uruguay/map-jose-ignacio.png",
            alt: "Presqu'île et phare de José Ignacio entre les plages Mansa et Brava",
          },
          // TODO: verify coords
          coordinates: { lat: -34.8383, lng: -54.6383 },
        },
        {
          title: "Pueblo Garzón, la table et les vignes",
          description:
            "Une place, une église, et l'ancienne épicerie devenue la table de Francis Mallmann. Autour du village, les collines de granit se couvrent de tannat et d'albariño.",
          image: {
            src: "/destination/uruguay/map-garzon.png",
            alt: "Place de Pueblo Garzón et son ancienne épicerie, département de Maldonado",
          },
          // TODO: verify coords
          coordinates: { lat: -34.5789, lng: -54.5622 },
        },
        {
          title: "Cabo Polonio, au bout des dunes",
          description:
            "On rejoint le village en véhicule tout-terrain, à travers les dunes du parc national. Les otaries occupent les rochers sous le phare, et la nuit venue le ciel s'ouvre comme nulle part ailleurs dans le pays.",
          image: {
            src: "/destination/uruguay/map-cabo-polonio.png",
            alt: "Phare de Cabo Polonio et rochers occupés par les otaries sur la côte de Rocha",
          },
          // TODO: verify coords
          coordinates: { lat: -34.4022, lng: -53.7822 },
        },
        {
          title: "Tacuarembó, le cœur gaucho",
          description:
            "Le ministère du Tourisme uruguayen désigne ainsi ce département du centre-nord. Les estancias y travaillent encore le bétail à cheval, et la Fiesta de la Patria Gaucha y rassemble les cavaliers au mois de mars.",
          image: {
            src: "/destination/uruguay/map-tacuarembo.png",
            alt: "Cavaliers et troupeau dans une estancia de la campagne de Tacuarembó",
          },
          // TODO: verify coords
          coordinates: { lat: -31.7333, lng: -55.9833 },
        },
        {
          title: "Colonia del Sacramento, le pavé portugais",
          description:
            "Fondée par les Portugais et longtemps disputée aux Espagnols, elle a gardé son quartier historique inscrit au patrimoine mondial. On s'y promène sur le pavé d'origine, jusqu'à la calle de los Suspiros.",
          image: {
            src: "/destination/uruguay/map-colonia.png",
            alt: "Calle de los Suspiros et pavé portugais du quartier historique de Colonia del Sacramento",
          },
          // TODO: verify coords
          coordinates: { lat: -34.4714, lng: -57.8442 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage en Uruguay",
      description:
        "Quelques observations de terrain qui ne se trouvent pas dans un guide, pour choisir la bonne saison, comprendre les usages et savourer le pays comme il se vit.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          title: "Le meilleur moment pour la côte",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La saison favorable court de novembre à avril, et l'ambiance de la côte change beaucoup en son cœur",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Au cœur de l'été, les familles argentines et brésiliennes
                descendent sur Punta del Este, La Barra et José Ignacio. Les
                terrasses se remplissent, les tables se réservent bien à
                l'avance, et le pays vit sa saison la plus joyeuse.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Nous préférons le début du mois de décembre et la seconde
                quinzaine de mars. Les températures restent agréables, la lumière
                se fait plus douce, et la fréquentation retombe. C'est aussi le
                moment où les estancias de l'intérieur acceptent volontiers de
                vous accueillir seuls.
              </p>
            </div>
          ),
        },
        {
          title: "Le mate, et la façon de le prendre",
          cardEyebrow: "Usages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les Uruguayens le portent partout, thermos sous le bras, et le partagent volontiers",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le mate circule dans un ordre établi, toujours servi par la même
                personne. On boit toute la calebasse avant de la rendre, et l'on
                ne remue pas la bombilla. Dire « merci » en rendant le mate
                signifie que l'on s'arrête là.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Accepter le mate qu'un gaucho ou un chauffeur vous tend change la
                couleur de la journée. C'est souvent là que la conversation
                commence pour de bon.
              </p>
            </div>
          ),
        },
        {
          title: "Se déplacer avec un chauffeur",
          cardEyebrow: "Transport",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "On passe d'une ville à un vignoble, puis à une plage, sans jamais avoir à s'occuper de rien",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le pays se parcourt par la route, et le plaisir tient beaucoup à
                ce que l'on regarde par la fenêtre : les troupeaux, les palmiers
                butiá, les lagunes. La signalisation se fait rare dans la
                campagne et les chemins d'estancia ne portent pas de nom.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Nous travaillons avec voiture et chauffeur plutôt qu'en location.
                Un chauffeur uruguayen ouvre des grilles qu'un GPS ignore, connaît
                la table de campagne où l'on s'arrête à mi-parcours, et vous
                laisse profiter du paysage.
              </p>
            </div>
          ),
        },
        {
          title: "Le tannat, le vin du pays",
          cardEyebrow: "Vin",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Un cépage venu du Sud-Ouest de la France avec les familles basques, devenu la fierté uruguayenne",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le tannat donne en Uruguay des vins plus souples et plus droits
                qu'en France. Le granit des collines, l'air de l'Atlantique et la
                fraîcheur des nuits en arrondissent la puissance. Les bodegas
                plantent aussi de l'albariño, qui réussit remarquablement bien
                près de la côte.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                La dégustation la plus intéressante se fait dans le chai, au
                milieu des cuves, avant l'assemblage. Nous demandons toujours
                cette formule plutôt que la salle prévue pour les groupes.
              </p>
            </div>
          ),
        },
        {
          title: "L'heure du feu",
          cardEyebrow: "Table",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "L'asado se prépare longuement, et l'on dîne tard, comme partout au bord du Río de la Plata",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L'asado n'a rien d'un barbecue rapide. Les braises se préparent à
                part, dans un brasero, et se glissent sous la grille au fur et à
                mesure. Le repas s'étire, la viande arrive en plusieurs services,
                et la conversation compte autant que le reste.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Les restaurants de Montevideo et de la côte s'animent en fin de
                soirée et servent tard dans la nuit. Décalez les journées en
                conséquence : c'est aussi pour cela que rien ne commence tôt en
                Uruguay.
              </p>
            </div>
          ),
        },
        {
          title: "Une nuit à Cabo Polonio",
          cardEyebrow: "Nature",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le village vit sans réseau électrique, à la bougie et au solaire, dans un parc national",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                On rejoint Cabo Polonio par les véhicules tout-terrain officiels,
                qui franchissent les dunes du parc. Quelques maisons fonctionnent
                au solaire et au générateur, le reste s'éclaire à la bougie. Les
                otaries s'entendent depuis la plage une bonne partie de la nuit.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Prévoyez des espèces, une lampe et des batteries chargées.
                Surtout, dormez sur place plutôt que de repartir dans la journée :
                sans éclairage public, la voie lactée se lit à l'œil nu depuis le
                sable.
              </p>
            </div>
          ),
        },
        {
          title: "Ajouter Buenos Aires au voyage",
          cardEyebrow: "Combinés",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La traversée du Río de la Plata en ferry est un plaisir en soi",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le fleuve se traverse en ferry depuis Colonia del Sacramento ou
                depuis Montevideo, et l'on voit la ville apparaître depuis le
                pont du bateau. La liaison aérienne existe aussi entre les deux
                capitales.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                La combinaison que nous préférons commence par Buenos Aires et
                se poursuit en Uruguay, pour terminer le voyage au calme.
                Le sud du Brésil s'ajoute volontiers par le nord, en remontant
                depuis la frontière de Chuy.
              </p>
            </div>
          ),
        },
        {
          title: "Ce que l'on dépense sur place",
          cardEyebrow: "Budget",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le pays affiche le niveau de vie le plus élevé du continent, et cela se ressent sur la côte",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Contrairement à ses voisins, l'Uruguay n'est pas une destination
                bon marché. La côte de Maldonado se paie au prix de la haute
                saison australe, tandis que l'intérieur du pays reste très
                accessible.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                L'arbitrage se joue davantage sur le calendrier que sur les
                adresses. Une même maison à José Ignacio se loue bien plus
                sereinement en mars qu'au cœur de l'été. Nous construisons chaque
                voyage sur mesure et présentons un budget détaillé avant toute
                réservation.
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
            "Le déjeuner au feu à Garzón, puis les vignes dans l'après-midi avec l'œnologue, dans la même journée. On ne savait pas ce qu'on allait manger en s'asseyant, et c'était très bien comme ça. C'est le souvenir qui nous reste le plus nettement.",
          image: {
            src: "/destination/uruguay/hero-1.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Uruguay, Montevideo, Garzón et la côte, 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Partir à cheval au petit matin avec les gauchos, puis la viande sur les braises du corral à midi. Personne ne jouait un rôle pour nous : ils travaillaient, et on suivait. Je ne pensais pas que cela existait encore ainsi.",
          image: {
            src: "/destination/uruguay/hero-2.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Uruguay, estancias du centre-nord, 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Une nuit à Cabo Polonio, sans électricité et sans lune. On entendait les otaries depuis la plage et on voyait la voie lactée à l'œil nu. En mars, la côte était pour nous : c'était exactement ce que nous cherchions.",
          image: {
            src: "/destination/uruguay/hero-3.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Uruguay, côte de Rocha, mars 2026", // TODO: replace with real testimonial
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
          question: "Quelle est la meilleure période pour partir en Uruguay ?",
          answer:
            "La saison favorable s'étend de novembre à avril, la grande saison estivale allant de décembre à mars. Nous privilégions le début du mois de décembre et la seconde quinzaine de mars, pour les températures agréables et une fréquentation plus douce. Janvier reste la période la plus animée, portée par les vacances argentines et brésiliennes, ce qui plaît à qui recherche cette ambiance. Montevideo, Colonia et l'intérieur du pays se visitent aussi très agréablement en avril et en octobre.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris ?",
          answer:
            "Il n'existe pas actuellement de liaison directe entre Paris et Montevideo. L'aéroport de Carrasco (MVD), à une vingtaine de kilomètres à l'est du centre de la capitale, est desservi directement depuis Madrid, São Paulo et Buenos Aires. Comptez environ 15 à 18 heures de trajet selon la correspondance, le passage par Buenos Aires pouvant se révéler moins fluide selon les aéroports utilisés.",
        },
        {
          question: "Faut-il un visa pour aller en Uruguay ?",
          answer:
            "Non. Les ressortissants français sont dispensés de visa pour un séjour touristique jusqu'à 90 jours inclus. France Diplomatie demande simplement un passeport en cours de validité.",
        },
        {
          question: "Que faire en Uruguay en 10 jours ?",
          answer:
            "Dix jours suffisent pour goûter au pays sans le survoler. Nous commençons volontiers par Montevideo, sa vieille ville et le candombe du barrio Sur, avant de gagner une estancia du centre où l'on monte à cheval et où l'on déjeune au feu. Vient ensuite la région de Garzón et de la sierra de la Ballena, pour la table de Francis Mallmann et les bodegas, puis la côte, de José Ignacio jusqu'aux dunes de Cabo Polonio. Chaque trajet se fait avec chauffeur, et nous glissons toujours une halte agréable à mi-chemin.",
        },
        {
          question: "Peut-on combiner l'Uruguay avec l'Argentine ?",
          answer:
            "Oui, c'est la combinaison la plus fréquente et l'une des plus réussies. Le Río de la Plata se traverse en ferry depuis Colonia del Sacramento ou depuis Montevideo, et une liaison aérienne relie également les deux capitales. Nous plaçons en général Buenos Aires en début de voyage et l'Uruguay ensuite, parce qu'il est plus agréable de finir par la campagne et la côte que par une capitale. La même logique fonctionne avec le sud du Brésil, par la frontière de Chuy.",
        },
        {
          question: "Quel budget prévoir pour un voyage en Uruguay ?",
          answer:
            "L'Uruguay affiche le niveau de vie le plus élevé d'Amérique du Sud, et la côte de Maldonado se loue au prix de la haute saison australe au cœur de l'été. Le budget dépend donc beaucoup de la période choisie : une même maison à José Ignacio se réserve dans des conditions bien plus sereines en mars. Le reste se joue sur la part de chauffeur-guide et sur les accès que nous négocions, comme une bodega fermée au public ou une estancia entièrement privatisée. Nous construisons chaque voyage sur mesure et vous présentons un budget détaillé avant toute réservation, sans engagement.",
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
        "D'autres pays d'Amérique où la table, les grands espaces et l'art de recevoir composent un même voyage, à écrire sur mesure avec votre travel designer.",
      slugs: ["argentine", "bresil", "mexique"],
    },
  ],
};
