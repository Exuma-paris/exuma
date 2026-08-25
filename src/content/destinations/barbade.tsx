import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "barbade",
  name: "Barbade",
  placeKind: "country",
  country: "Barbade",
  genitive: "de la Barbade",
  continentSlug: "ameriques",
  blurb: "Platinum Coast, Bridgetown, rhum de Mount Gay",
  keywords: [
    "barbade",
    "platinum coast",
    "bridgetown",
    "mount gay",
    "carlisle bay",
    "holetown",
    "harrisons cave",
    "rhum",
  ],
  metaTitle: "Barbade : Voyage sur mesure",
  metaDescription:
    "Voyage à la Barbade sur mesure : Platinum Coast, villas privées, rhum de Mount Gay. Itinéraire écrit par votre travel designer Exuma, conciergerie privée 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe à la Barbade",
      heading:
        "Une île qui tourne le dos à l'Atlantique pour regarder les Caraïbes",
      description:
        "À l'est, l'Atlantique frappe les falaises de corail de Bathsheba sans relâche. À l'ouest, à peine trente kilomètres plus loin, la Platinum Coast s'étend sur une mer plate, à peine ridée par le passage des voiliers. Bridgetown et sa Garrison historique, classées à l'UNESCO en 2011, occupent l'angle sud entre les deux. Nous construisons chaque itinéraire à partir de ce contraste, pas en dépit de lui.",
      images: [
        {
          src: "/destination/barbade/hero-1.png",
          alt: "Villas et mer plate de la Platinum Coast lors d'un voyage à la Barbade",
        },
        {
          src: "/destination/barbade/hero-2.png",
          alt: "Voiliers mouillés dans la baie de Carlisle Bay à la Barbade",
        },
        {
          src: "/destination/barbade/hero-3.png",
          alt: "Falaises de corail battues par l'Atlantique à Bathsheba, Barbade",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir à la Barbade ?",
      heading: "Carole, spécialiste de la Barbade, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "carole",
        // TODO: verify quote attribution
        quote:
          "La Barbade se choisit une côte à la fois. La Platinum Coast pour les familles qui veulent une mer sans vague et des villas avec équipage complet, la côte est pour ceux qui veulent voir l'Atlantique sans concession.",
        role: "Travel Designer · Barbade",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte de la Barbade",
      heading: "La Barbade, deux mers pour une île",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Un voyage à la Barbade se lit en deux côtes, presque deux mers. La Platinum Coast, à l'ouest, longe une mer des Caraïbes plate sur près de vingt kilomètres, de Speightstown à Bridgetown. La côte est regarde l'Atlantique en face, sans îlot pour l'arrêter avant l'Afrique.",
        "Bridgetown organise l'angle sud-ouest de l'île autour de Carlisle Bay et de sa Garrison, un ensemble militaire du XVIIe siècle classé à l'UNESCO en 2011. Le tram électrique d'Harrison's Cave descend, lui, sous les collines calcaires du centre de l'île, à moins de trente minutes de la côte.",
        "« La Barbade n'a jamais été française, jamais espagnole. Trois cent trente-neuf ans de couronne britannique sans interruption jusqu'à l'indépendance de 1966, et une république depuis 2021. Ça se sent dans le rythme, dans le cricket, dans la façon de servir le rhum. »",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/barbade/full-image.png",
        alt: "Vue aérienne de la Platinum Coast et de ses villas privées, Barbade",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "La Barbade, hors des paquebots de Bridgetown",
      heading: "Le matin où Holetown appartient encore aux pêcheurs",
      theme: "light",
      paragraphs: [
        "Les paquebots accostent à Bridgetown avant huit heures et repartent au coucher du soleil. Plus haut sur la côte, à Holetown, les pêcheurs sortent leurs barques colorées avant le lever du jour, remontent le mahi-mahi et le vivaneau, et vendent directement sur le sable avant que les premiers baigneurs n'arrivent. Le nom du village rappelle le premier point de débarquement anglais sur l'île, en 1627.",
        "Speightstown, plus au nord, garde ses façades de bois colonial et son marché du samedi sans jamais figurer sur l'itinéraire des croisières. Le silence qui suit le départ des paquebots n'est pas un silence vide. C'est celui d'une île qui reprend son rythme.",
      ],
      images: [
        {
          src: "/destination/barbade/split-1.png",
          alt: "Pêcheurs déchargeant leur prise à Holetown au petit matin, Barbade",
        },
        {
          src: "/destination/barbade/split-2.png",
          alt: "Façades coloniales en bois du marché de Speightstown, Barbade",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/barbade/xp-catamaran-tortues-1.png",
          alt: "Catamaran privé mouillé au-dessus d'une épave à Carlisle Bay, Barbade",
        },
        right: {
          src: "/destination/barbade/xp-catamaran-tortues-2.png",
          alt: "Tortue imbriquée nageant près d'une épave à Carlisle Bay, Barbade",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Le lagon où les tortues n'ont jamais appris à fuir",
        columns: [
          "Carlisle Bay concentre six épaves dans à peine plus de dix mètres de fond, à la sortie de Bridgetown. Les tortues imbriquées et les tortues vertes s'y nourrissent d'algues sur les coques depuis des décennies, habituées au passage des nageurs. Le catamaran privé mouille au-dessus de l'épave du Berwyn, coulée en 1919, sans un autre bateau à l'horizon.",
          "L'équipage coupe le moteur avant d'atteindre le site, pour ne pas effrayer les tortues qui remontent respirer en surface. Les enfants sautent les premiers, masque déjà en place. Le repas se prend ensuite au mouillage, poisson grillé et fruits locaux, avant le retour vers Bridgetown au moment où la lumière rase l'eau.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités à la Barbade",
      heading: "Mount Gay, une table sur la falaise, une grotte sous les collines",
      description:
        "Une dégustation à la plus ancienne distillerie de rhum du monde, un dîner au-dessus des vagues à St. James, une descente en tram sous les collines calcaires du centre de l'île. Trois façons d'entrer dans l'île, que nous réservons avant votre arrivée.",
      slugs: ["degustation-mount-gay", "diner-the-cliff", "harrisons-cave"],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Où séjourner à la Barbade",
      description:
        "Un domaine historique avec golf et plage privée, des suites intimistes dans une ancienne demeure coloniale, des cottages tenus par la même famille depuis 1956. Trois échelles, une même côte.",
      slugs: ["sandy-lane", "cobblers-cove", "coral-reef-club"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage à la Barbade",
      description:
        "Vol, décalage, formalités et saisons : de quoi caler les dates d'un voyage à la Barbade en toute tranquillité.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Aucun vol direct depuis Paris. Comptez environ 10 à 13 heures de trajet avec une escale, notamment via Londres, selon l'itinéraire choisi.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "5 heures de moins qu'en France en hiver et 6 heures en été. La Barbade est à l'heure de l'Atlantique (UTC−4) toute l'année et ne change pas d'heure.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Le dollar barbadien (BBD) est la monnaie officielle, avec un taux fixe de 2 BBD pour 1 USD. Le dollar américain est largement accepté sur l'île.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Aucun visa n'est requis pour un séjour touristique de courte durée. Le passeport doit être valable pendant toute la durée du séjour. Un billet de retour ou de continuation peut être demandé à l'arrivée.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin n'est exigé pour les voyageurs arrivant de France. Il est recommandé d'être à jour des vaccinations habituelles.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "De décembre à avril, pendant la saison sèche, avec un climat généralement ensoleillé et des précipitations plus limitées. La saison cyclonique s'étend officiellement de juin à novembre, même si la Barbade est relativement moins exposée aux passages directs des ouragans que certaines autres îles des Caraïbes.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "L'anglais est la langue officielle. Le bajan, un créole local à base d'anglais, est également très présent dans la vie quotidienne.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Climat tropical toute l'année, avec des températures généralement comprises entre 24 et 31 °C. La saison sèche s'étend de décembre à avril, tandis que la saison humide, de juin à novembre, se caractérise par des averses souvent brèves et ponctuelles.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Barbade. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/barbade/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Itinéraire sur mesure à la Barbade entre Platinum Coast et côte est",
            "Adresses confidentielles à la Barbade : criques et tables discrètes",
            "Suite avec vue sur la mer à la Barbade",
            "Concierge Exuma coordonnant un transfert privé à la Barbade",
            "Guide privé commentant la distillerie Mount Gay à la Barbade",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables à la Barbade",
      heading: "Six lieux, deux côtes, et ce qu'il y a derrière",
      description:
        "De Bridgetown à Bathsheba, six repères qui racontent l'île autant par la mer plate de l'ouest que par l'Atlantique de l'est.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      initialZoom: 11,
      places: [
        {
          title: "Bridgetown et sa Garrison",
          description:
            "La ville et son ensemble militaire du XVIIe siècle sont classés à l'UNESCO depuis 2011. Le marché du Cheapside s'anime le samedi matin, avant l'arrivée des paquebots.",
          image: {
            src: "/destination/barbade/map-bridgetown.png",
            alt: "Garrison historique de Bridgetown classée à l'UNESCO, Barbade",
          },
          // TODO: verify coords
          coordinates: { lat: 13.0969, lng: -59.6145 },
        },
        {
          title: "Holetown et la Platinum Coast",
          description:
            "Premier point de débarquement anglais sur l'île, en 1627. La côte s'étend ensuite sur près de vingt kilomètres de mer plate jusqu'à Speightstown.",
          image: {
            src: "/destination/barbade/map-holetown.png",
            alt: "Plage de la Platinum Coast à Holetown, Barbade",
          },
          // TODO: verify coords
          coordinates: { lat: 13.1875, lng: -59.6367 },
        },
        {
          title: "Carlisle Bay, le mouillage aux tortues",
          description:
            "Six épaves reposent à moins de dix mètres de fond, dont le Berwyn, coulé en 1919. Les tortues imbriquées s'y nourrissent toute l'année.",
          image: {
            src: "/destination/barbade/map-carlisle-bay.png",
            alt: "Voiliers mouillés à Carlisle Bay près de Bridgetown, Barbade",
          },
          // TODO: verify coords
          coordinates: { lat: 13.0782, lng: -59.6198 },
        },
        {
          title: "Harrison's Cave, sous les collines calcaires",
          description:
            "Un tram électrique descend dans une grotte façonnée par l'eau depuis des millions d'années, à moins de trente minutes de la côte.",
          image: {
            src: "/destination/barbade/map-harrisons-cave.png",
            alt: "Stalactites et bassin souterrain à Harrison's Cave, Barbade",
          },
          // TODO: verify coords
          coordinates: { lat: 13.1936, lng: -59.5561 },
        },
        {
          title: "Bathsheba et le Soup Bowl",
          description:
            "L'Atlantique frappe des rochers de corail isolés sur le sable, et forme la vague la plus réputée des Caraïbes orientales chez les surfeurs.",
          image: {
            src: "/destination/barbade/map-bathsheba.png",
            alt: "Rochers de corail et vagues de l'Atlantique à Bathsheba, Barbade",
          },
          // TODO: verify coords
          coordinates: { lat: 13.2167, lng: -59.5167 },
        },
        {
          title: "Animal Flower Cave, la pointe nord",
          description:
            "Une grotte marine ouverte sur l'Atlantique, à l'endroit où l'île se termine en falaise. Les anémones qui lui donnent son nom se referment au moindre contact.",
          image: {
            src: "/destination/barbade/map-animal-flower-cave.png",
            alt: "Grotte marine ouverte sur l'Atlantique à Animal Flower Cave, Barbade",
          },
          // TODO: verify coords
          coordinates: { lat: 13.3167, lng: -59.6167 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage à la Barbade",
      description:
        "Huit repères de terrain pour composer un séjour entre Platinum Coast et côte atlantique sans mauvaise surprise.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          title: "La saison où la Barbade se dévoile le mieux",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "De décembre à avril, mer plus calme et ensoleillement quasi constant",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La saison sèche court de décembre à avril, avec un pic de
                fréquentation entre les fêtes de fin d&apos;année et Pâques.
                Mai et juin restent agréables et plus calmes, avant
                l&apos;installation de la saison humide.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                La saison cyclonique va officiellement de juin à novembre,
                avec un risque réel mais plus faible qu&apos;ailleurs dans
                les Caraïbes, la Barbade se situant à l&apos;extrémité est
                de l&apos;arc antillais.
              </p>
            </div>
          ),
        },
        {
          title: "Deux côtes, deux mers",
          cardEyebrow: "Orientation",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La Platinum Coast pour la baignade, la côte est pour le paysage",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La côte ouest, dite Platinum Coast, longe une mer des
                Caraïbes plate, idéale pour la baignade et les enfants. La
                côte est regarde l&apos;Atlantique, avec des vagues et des
                courants qui ne pardonnent pas l&apos;imprudence.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Nous plaçons systématiquement une excursion côté est en
                milieu de journée, jamais pour la baignade, et gardons
                l&apos;hébergement sur la côte ouest.
              </p>
            </div>
          ),
        },
        {
          title: "Réserver la table du Cliff Restaurant",
          cardEyebrow: "Table",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les meilleures tables en bord de falaise partent plusieurs semaines à l'avance",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: le Cliff Restaurant, à St. James, sert depuis 1995 des
                tables construites à même la falaise, éclairées à la bougie
                au-dessus de la mer. La carte change chaque soir selon la
                pêche du jour.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous réservons la table dès la confirmation du voyage, en
                demandant systématiquement un emplacement en premier rang de
                falaise.
              </p>
            </div>
          ),
        },
        {
          title: "Le rhum, et comment le déguster",
          cardEyebrow: "Boisson",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Mount Gay distille depuis 1703, la plus ancienne marque de rhum au monde",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Mount Gay revendique la plus ancienne licence de distillation
                de rhum au monde, datée de 1703. La distillerie de Brandons,
                aux portes de Bridgetown, propose une dégustation guidée par
                âge de vieillissement.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Nous plaçons la visite le matin, avant la chaleur, et
                réservons une dégustation privée pour éviter les groupes de
                paquebot.
              </p>
            </div>
          ),
        },
        {
          title: "Le cou-cou et le poisson volant",
          cardEyebrow: "Table",
          modalEyebrow: "Guide pratique",
          shortDescription: "Le plat national se sert avec une sauce Créole légère",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le cou-cou, une polenta de farine de maïs et d&apos;okra,
                accompagne traditionnellement le poisson volant, emblème de
                l&apos;île au point de figurer sur les pièces de monnaie
                barbadiennes.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Nous réservons un déjeuner de poisson volant grillé à
                Oistins, sur la côte sud, le vendredi soir pour le fish fry
                hebdomadaire.
              </p>
            </div>
          ),
        },
        {
          title: "L'argent, les taxes et les pourboires",
          cardEyebrow: "Argent",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le dollar américain est largement accepté, mais quelques espèces restent utiles au quotidien.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le dollar barbadien vaut environ deux pour un dollar
                américain, et les deux circulent dans la même poche. Les
                cartes passent dans les hôtels et la plupart des
                restaurants ; sur les plages et les petits marchés, les
                espèces restent utiles.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Vérifiez la ligne « service » avant d&apos;ajouter un
                pourboire, le service étant souvent déjà inclus. Nous
                prévoyons toujours des petites coupures pour les équipages
                et les guides.
              </p>
            </div>
          ),
        },
        {
          title: "Le cricket, une passion nationale",
          cardEyebrow: "Usages",
          modalEyebrow: "Guide pratique",
          shortDescription: "Kensington Oval, à Bridgetown, reste le temple du cricket local",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le cricket occupe une place à part à la Barbade, berceau des
                « Three Ws », trois joueurs légendaires nés à quelques rues
                l&apos;un de l&apos;autre. Kensington Oval, à Bridgetown,
                accueille les matchs internationaux.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                TODO: un match international en cours pendant le voyage
                mérite qu&apos;on ajuste l&apos;itinéraire d&apos;une
                journée. Nous suivons le calendrier de la sélection
                antillaise avant de fixer les dates.
              </p>
            </div>
          ),
        },
        {
          title: "Dans ma valise",
          cardEyebrow: "Bagages",
          modalEyebrow: "Guide pratique",
          shortDescription: "Léger, une tenue pour le dîner, une crème reef-safe",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La tenue reste simple le jour, avec chapeau et lunettes de
                soleil indispensables. Certaines adresses de la Platinum
                Coast, dont le Cliff Restaurant, demandent une tenue un peu
                plus habillée au dîner.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Une crème solaire minérale sans oxybenzone pour préserver le
                corail de Carlisle Bay, des chaussures d&apos;eau pour la
                côte est, et un coupe-vent léger pour les sorties en bateau.
                Les prises électriques sont au standard américain, en 115
                volts.
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
            "Nous avons nagé au-dessus de l'épave du Berwyn avec deux tortues qui ne se sont pas laissées perturber une seconde. Le catamaran privé, sans un autre bateau autour, a changé toute la matinée.",
          image: {
            src: "/destination/barbade/hero-1.png",
            alt: "Portrait", // TODO: verify
          },
          name: "", // TODO: replace with real testimonial
          role: "Barbade en famille, Platinum Coast, 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Le dîner au Cliff Restaurant reste le souvenir le plus net du séjour : une table sur la falaise, les vagues juste en dessous, et une carte différente chaque soir. Notre travel designer l'avait réservée dès la confirmation.",
          image: {
            src: "/destination/barbade/hero-2.png",
            alt: "Portrait", // TODO: verify
          },
          name: "", // TODO: replace with real testimonial
          role: "Voyage de noces, 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Personne ne nous avait dit que la côte est ressemblait si peu à la côte ouest. Bathsheba et ses rochers de corail, après trois jours de Platinum Coast, ont donné au voyage une autre dimension.",
          image: {
            src: "/destination/barbade/hero-3.png",
            alt: "Portrait", // TODO: verify
          },
          name: "", // TODO: replace with real testimonial
          role: "Escapade en couple, 2025", // TODO: replace with real testimonial
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
          question: "Quelle est la meilleure période pour partir à la Barbade ?",
          answer:
            "De décembre à avril, pendant la saison sèche, avec un ensoleillement quasi constant et une mer plus calme. La saison cyclonique s'étend officiellement de juin à novembre, avec un risque plus faible qu'ailleurs dans les Caraïbes du fait de la position la plus orientale de l'île.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris ?",
          answer:
            "Il n'existe pas de vol direct depuis Paris. On rejoint généralement la Barbade via Londres, pour un trajet total de 10 à 13 heures selon la correspondance. Nous plaçons toujours une nuit de récupération à l'arrivée plutôt que d'enchaîner directement sur une excursion.",
        },
        {
          question: "Faut-il un visa pour aller à la Barbade ?",
          answer:
            "Les ressortissants français n'ont pas besoin de visa pour un séjour touristique de courte durée. Le passeport doit rester valable durant tout le séjour, et un billet de retour ou de continuation est généralement demandé à l'entrée. Nous vérifions les formalités à jour avec vous avant le départ.",
        },
        {
          question: "La Barbade est-elle adaptée aux familles avec enfants ?",
          answer:
            "Oui. L'anglais est la langue officielle, la mer de la Platinum Coast reste calme presque toute l'année, et plusieurs propriétés, dont Coral Reef Club, accueillent des familles depuis plusieurs générations. Une villa avec personnel simplifie encore la logistique quotidienne.",
        },
        {
          question: "Que faire à la Barbade en une semaine ?",
          answer:
            "Une semaine permet de combiner la Platinum Coast, une matinée à Bridgetown et sa Garrison classée à l'UNESCO, une dégustation à la distillerie Mount Gay, une sortie en catamaran à Carlisle Bay et une excursion côté Atlantique à Bathsheba, sans jamais courir d'un point à l'autre.",
        },
        {
          question: "Quel budget prévoir pour un voyage à la Barbade ?",
          answer:
            "Le budget se joue sur trois postes : l'acheminement international, souvent avec une correspondance à Londres, les propriétés de la Platinum Coast qui tiennent un vrai niveau de service, et la privatisation des bateaux pour Carlisle Bay. Nous construisons chaque voyage sur mesure et présentons un budget détaillé avant toute réservation, sans engagement.",
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
        "D'autres eaux des Caraïbes, à composer sur mesure avec votre travel designer.",
      slugs: ["bahamas", "antigua", "republique-dominicaine"],
    },
  ],
};
