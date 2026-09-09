import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "grece",
  name: "Grèce",
  placeKind: "country",
  country: "Grèce",
  genitive: "de la Grèce",
  continentSlug: "europe",
  blurb: "Athènes, Delphes, les Cyclades, le Péloponnèse",
  keywords: [
    "grece",
    "athenes",
    "acropole",
    "cyclades",
    "santorin",
    "peloponnese",
    "delphes",
    "mer egee",
    "mykonos",
  ],
  metaTitle: "Grèce : Voyage sur mesure",
  metaDescription:
    "Voyage en Grèce sur mesure : Athènes, Delphes, Cyclades et Péloponnèse. Itinéraire écrit par votre travel designer Exuma, conciergerie privée 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe en Grèce",
      heading: "Grèce. La lumière y tombe droit, et la pierre lui répond.",
      description:
        "Six mille îles, un peu plus de deux cents habitées. Athènes, Delphes, le Péloponnèse, les Cyclades : chaque étape répond à une autre, et l'ordre dans lequel on les traverse change le récit. Nous composons cet enchaînement depuis plus de dix ans.",
      images: [
        {
          src: "/destination/grece/hero-1.png",
          alt: "Village blanc aux dômes bleus surplombant la mer Égée en Grèce",
        },
        {
          src: "/destination/grece/hero-2.png",
          alt: "Colonnes du Parthénon sur l'Acropole d'Athènes au lever du jour",
        },
        {
          src: "/destination/grece/hero-3.png",
          alt: "Goélette au mouillage dans une crique des Cyclades",
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
          "La Grèce, tout le monde croit la connaître avant d'y aller. L'Acropole, une île blanche, un coucher de soleil. Le voyage commence quand on remplace ces images par un ordre : quelle île avant quelle autre, à quelle heure on entre sur un site, où l'on dîne le soir où l'on ne veut voir personne. C'est ce travail-là que nous faisons.",
        role: "Travel Designer · Grèce",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Ouverture",
      heading: "Un pays d'îles, pas une carte postale",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      columns: [
        "Un voyage en Grèce ne commence pas à la plage. Il commence à Delphes, devant le fronton du temple d'Apollon, où deux mots gravés tenaient lieu de programme : connais-toi toi-même. Le sanctuaire s'étage à flanc du mont Parnasse, face à une mer d'oliviers. Les Grecs plaçaient ici le nombril du monde. On comprend pourquoi en montant.",
        "Le reste se construit autour d'une logique de déplacement. Deux nuits à Athènes pour l'Acropole et le musée qui la prolonge. Le Péloponnèse pour Épidaure, Mycènes et Nauplie, la première capitale du pays. Puis les Cyclades, choisies à deux ou trois, jamais toutes. On ne traverse pas la Grèce d'un bout à l'autre : on grave un itinéraire selon ce que l'on cherche, l'histoire ou l'eau, et le plus souvent les deux. Nous vérifions cette cohérence depuis plus de dix ans. Chaque étape a une raison.",
        "« Il n'y a pas une Grèce. Il y a celle des temples et celle des criques, celle des tavernes de port et celle des maisons fermées au public. Entre les deux, il y a tout le voyage. »",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/grece/full-image.png",
        alt: "Caldeira de Santorin au coucher du soleil, mer Égée, Grèce",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Hydra, l'île sans voitures",
      heading: "Une île où l'on entend ses propres pas",
      theme: "light",
      paragraphs: [
        "À Hydra, il n'y a pas une seule voiture. La loi l'interdit depuis des décennies. On débarque sur un port en fer à cheval, bordé de maisons de capitaines en pierre grise, et le premier bruit qui monte n'est pas un moteur : c'est le sabot des mules qui montent les bagages vers les hauteurs. La ville s'étage au-dessus de l'eau, sans une enseigne clignotante.",
        "La lumière d'Hydra a retenu des peintres pendant tout le vingtième siècle. Elle est nette, sans halo, elle découpe les ombres au couteau. Le soir, les cafés du port se remplissent d'un brouhaha bas, et le dernier ferry parti, l'île se referme sur elle-même.",
        "On y dort mal la première nuit. Le silence est trop grand.",
      ],
      images: [
        {
          src: "/destination/grece/split-1.png",
          alt: "Port en fer à cheval d'Hydra bordé de maisons de pierre",
        },
        {
          src: "/destination/grece/split-2.png",
          alt: "Ruelle pavée d'Hydra à flanc de colline au coucher du soleil",
        },
      ],
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Grèce",
      heading: "Nos coups de cœur en Grèce",
      description:
        "Des moments ancrés dans des lieux et des personnes : une crique avant les ferries, un site avant la foule, une table de vigneron. Des accès qui ne se trouvent pas en cherchant.",
      slugs: [
        "croisiere-privee-cyclades",
        "acropole-hors-heures",
        "delphes-guide-archeologue",
        "table-santorin-vigneron",
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/grece/cyclades-voile.png",
          alt: "Goélette toutes voiles dehors dans les Cyclades au petit matin",
        },
        right: {
          src: "/destination/grece/cyclades-crique.png",
          alt: "Crique turquoise déserte des Cyclades vue du pont d'un bateau",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Le matin où l'on lève l'ancre avant tout le monde",
        columns: [
          "Le caïque quitte le port de Naxos avant le premier ferry. Une heure de navigation, et il jette l'ancre dans une crique de Koufonissia que la journée n'ouvrira aux autres qu'après midi. L'eau y descend en dégradés de bleu jusqu'au sable, sans un bateau à l'horizon. On plonge avant le petit-déjeuner.",
          "À bord, le déjeuner se prépare pendant que l'on nage : poulpe séché au soleil sur le pont, tomates, un Assyrtiko frais des vignes de Santorin. Le patron connaît les mouillages qui restent à l'ombre l'après-midi, ceux que le meltem épargne, ceux où l'on peut dormir au calme. Ce n'est pas une excursion. C'est une façon de se déplacer entre les îles.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements en Grèce",
      heading: "Où séjourner",
      description:
        "Trois adresses choisies pour ce qu'elles sont, pas pour ce qu'elles disent. Une colline du Péloponnèse, une falaise de Santorin, une crête de Mykonos.",
      slugs: ["amanzoe", "canaves-oia", "kalesma-mykonos"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Avant le départ",
      heading: "Préparer votre voyage en Grèce",
      description:
        "Temps de vol, décalage, monnaie, formalités et meilleure saison : l'essentiel pour préparer le voyage sereinement.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "TODO: environ 3h15 en vol direct depuis Paris vers Athènes. Comptez une correspondance ou un vol intérieur pour rejoindre les îles.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "1 heure d'avance sur la France, toute l'année. Aucun décalage à gérer, aucune fatigue à l'arrivée.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "L'euro. Aucune conversion, aucun risque de change. Les cartes sont acceptées partout, l'espèce reste utile dans les petites tavernes de port.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "La Grèce est dans l'espace Schengen. Pour les ressortissants français et européens, une carte d'identité ou un passeport en cours de validité suffit, sans visa.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin obligatoire. Les vaccinations habituelles à jour suffisent. Pas de précaution sanitaire particulière.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "De mai à juin et de septembre à début octobre : chaleur douce, mer déjà ou encore chaude, sites moins fréquentés. Juillet et août sont beaux mais chargés.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "Le grec. L'anglais est largement pratiqué dans l'hôtellerie et les îles touristiques. Le français est apprécié mais plus rare hors d'Athènes.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Méditerranéen : étés chauds et secs, hivers doux. Sur les Cyclades, le meltem, un vent du nord, souffle fort en juillet-août et rafraîchit les journées.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Grèce. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/grece/bento-${
            ["map", "adresses", "hebergements", "conciergerie", "experiences"][i]
          }.png`,
          alt: [
            "Carte d'un itinéraire sur mesure en Grèce",
            "Ruelle d'un village des Cyclades aux volets bleus",
            "Suite troglodyte face à la caldeira de Santorin",
            "Concierge coordonnant un transfert privé en Grèce",
            "Table dressée face à la mer Égée au crépuscule",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Que voir en Grèce",
      heading: "Six lieux, et ce qu'il y a derrière",
      description:
        "Athènes, Delphes, Nauplie, Santorin, Hydra, Milos : chaque étape tient une promesse distincte. Voici celles autour desquelles s'organisent la plupart de nos itinéraires.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      initialZoom: 6,
      places: [
        {
          title: "Athènes, l'Acropole et son musée",
          description:
            "Le Parthénon domine la ville depuis vingt-cinq siècles. Le musée de l'Acropole, en contrebas, montre ce que le rocher a perdu. À voir tôt, avant la chaleur.",
          image: {
            src: "/destination/grece/map-athenes.png",
            alt: "Le Parthénon de l'Acropole d'Athènes dominant la ville",
          },
          coordinates: { lat: 37.9715, lng: 23.7267 }, // TODO: verify coords
        },
        {
          title: "Delphes, le nombril du monde",
          description:
            "Le sanctuaire d'Apollon s'accroche aux pentes du Parnasse, face à la vallée d'oliviers d'Amfissa. L'oracle y parlait au nom du dieu. La route depuis Athènes vaut le détour.",
          image: {
            src: "/destination/grece/map-delphes.png",
            alt: "Ruines du sanctuaire d'Apollon à Delphes sur les pentes du Parnasse",
          },
          coordinates: { lat: 38.4824, lng: 22.501 }, // TODO: verify coords
        },
        {
          title: "Nauplie, la première capitale",
          description:
            "Première capitale de la Grèce moderne, au pied de la forteresse de Palamède. Ruelles vénitiennes, escaliers de pierre, port au fond du golfe d'Argolide. Base idéale pour le Péloponnèse.",
          image: {
            src: "/destination/grece/map-nauplie.png",
            alt: "Vieille ville de Nauplie et forteresse de Palamède au bord du golfe",
          },
          coordinates: { lat: 37.5679, lng: 22.8081 }, // TODO: verify coords
        },
        {
          title: "Santorin, la caldeira",
          description:
            "Une île née d'une éruption, ourlée d'une falaise noire de trois cents mètres. Oia au nord, les vignes en couronne à l'intérieur. Spectaculaire, et donc à apprivoiser aux bonnes heures.",
          image: {
            src: "/destination/grece/map-santorin.png",
            alt: "Village d'Oia accroché à la caldeira de Santorin",
          },
          coordinates: { lat: 36.4618, lng: 25.3753 }, // TODO: verify coords
        },
        {
          title: "Hydra, l'île sans voitures",
          description:
            "Aucune voiture, seulement des mules et des barques. Un port en fer à cheval bordé de maisons de capitaines. Une heure et demie d'Athènes, et un autre rythme.",
          image: {
            src: "/destination/grece/map-hydra.png",
            alt: "Port d'Hydra bordé de maisons de pierre grises",
          },
          coordinates: { lat: 37.3492, lng: 23.4667 }, // TODO: verify coords
        },
        {
          title: "Milos, les criques volcaniques",
          description:
            "L'île de la Vénus du Louvre, ceinturée de criques que la lave a sculptées. Sarakiniko et ses roches blanches lunaires, Kleftiko accessible seulement par la mer. Encore préservée.",
          image: {
            src: "/destination/grece/map-milos.png",
            alt: "Roches blanches lunaires de Sarakiniko sur l'île de Milos",
          },
          coordinates: { lat: 36.742, lng: 24.436 }, // TODO: verify coords
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Ce que les guides ne disent pas",
      heading: "Les conseils de nos experts pour votre voyage en Grèce",
      description:
        "Huit observations de terrain qui ne se trouvent pas dans un guide. Pour décider d'une étape, ou comprendre pourquoi nous l'inscrivons à un itinéraire.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          title: "Athènes, une journée qui compte",
          cardEyebrow: "Ville",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "L'Acropole tôt le matin, le musée juste après, puis les ruelles d'Anafiotika. Une journée bien ordonnée suffit.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Athènes se visite mal à l'improviste. Le rocher de l'Acropole
                chauffe vite et se remplit dès dix heures. On y monte à
                l'ouverture, on redescend par le musée de l'Acropole, dont les
                baies vitrées cadrent le Parthénon à distance, puis on se perd
                dans Anafiotika, le hameau cycladique accroché sous le rocher.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous plaçons Athènes en début de séjour, deux nuits, avec un
                guide qui ouvre le site avant la foule. Le reste de la ville se
                découvre à pied, sans programme.
              </p>
            </div>
          ),
        },
        {
          title: "Les Cyclades ne se visitent pas toutes",
          cardEyebrow: "Îles",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Deux ou trois îles, pas huit. Le temps de comprendre chacune avant de repartir.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L'erreur classique est de vouloir cocher Santorin, Mykonos,
                Naxos, Paros et Milos en dix jours. On passe alors sa vie sur
                les ferries. Chaque île a un tempérament : Santorin le
                spectacle, Naxos la vie de village, Milos les criques, Amorgos
                le silence. On en choisit deux ou trois qui se complètent.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Trois nuits minimum par île. En dessous, on ne fait que
                traverser. Un bateau privé remplace avantageusement les ferries
                entre deux îles proches.
              </p>
            </div>
          ),
        },
        {
          title: "Le Péloponnèse, l'autre Grèce",
          cardEyebrow: "Continent",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Épidaure, Mycènes, Mystra, Nauplie : l'histoire à ciel ouvert, presque sans foule.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Beaucoup de voyageurs filent directement vers les îles et
                sautent le Péloponnèse. C'est pourtant là que la Grèce garde le
                plus d'histoire au mètre carré : le théâtre d'Épidaure et son
                acoustique parfaite, la porte des Lions de Mycènes, la cité
                byzantine de Mystra suspendue sur sa colline.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Deux à trois nuits à Nauplie, en voiture avec chauffeur. Les
                sites s'enchaînent sur des routes de montagne et d'oliveraies,
                jamais bondées.
              </p>
            </div>
          ),
        },
        {
          title: "Hydra, l'île sans voitures",
          cardEyebrow: "Île",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Aucun moteur, seulement des mules. Une heure et demie d'Athènes, un autre siècle.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Hydra interdit les voitures depuis des décennies. Les bagages
                montent à dos de mule, les livraisons se font en barque. Le port
                en fer à cheval, bordé de maisons de capitaines, a retenu des
                peintres tout le vingtième siècle pour sa lumière sans halo.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Une ou deux nuits en fin de séjour, au retour des Cyclades. Le
                trajet en hydroglisseur depuis Le Pirée prend une heure et demie.
              </p>
            </div>
          ),
        },
        {
          title: "Santorin, à quelle heure",
          cardEyebrow: "Timing",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Oia au coucher, c'est la cohue. La caldeira se vit mieux au lever du jour, ou depuis l'eau.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le coucher de soleil à Oia est devenu un spectacle de foule :
                des centaines de personnes serrées sur les mêmes marches. La
                caldeira est bien plus belle au lever du jour, terrasse vide, ou
                depuis un bateau au mouillage en contrebas des falaises.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Loger côté caldeira mais hors d'Oia, à Imerovigli ou Firostefani.
                On garde la vue, on évite la densité.
              </p>
            </div>
          ),
        },
        {
          title: "Manger grec, vraiment",
          cardEyebrow: "Table",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "L'huile d'olive, les légumes du jardin, le poisson pesé devant vous. Et l'Assyrtiko, un blanc minéral.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La bonne table grecque n'est presque jamais celle du front de
                mer photogénique. C'est la taverne du village, où l'on choisit
                le poisson au poids et où les légumes viennent du jardin
                derrière. L'huile d'olive de Kalamata et le vin d'Assyrtiko de
                Santorin, sec et minéral, tiennent le repas entier.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous réservons les tables qui ne prennent pas de réservation par
                Internet, et organisons un dîner chez un vigneron de Santorin,
                sur ses terres.
              </p>
            </div>
          ),
        },
        {
          title: "Le meltem, ce vent qu'il faut connaître",
          cardEyebrow: "Saison",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "En juillet-août, un vent du nord balaie les Cyclades. Rafraîchissant à terre, contraignant en mer.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le meltem souffle sur la mer Égée au cœur de l'été. Il assèche
                l'air, rend les journées supportables malgré la chaleur, mais
                peut clouer les petits bateaux au port et rendre certaines
                traversées inconfortables. Les îles de l'ouest, comme Milos,
                sont plus abritées.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Pour une croisière, privilégier mai-juin ou septembre. Le meltem
                se calme, la mer redevient lisse.
              </p>
            </div>
          ),
        },
        {
          title: "Se déplacer entre les îles",
          cardEyebrow: "Logistique",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Ferry, vol intérieur ou bateau privé : le bon choix dépend de la distance et de la saison.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Entre deux îles proches, un bateau privé fait gagner une
                demi-journée sur le ferry et ouvre des criques inaccessibles
                autrement. Pour les longues distances, un vol intérieur depuis
                Athènes reste le plus simple. Les ferries rapides restent une
                bonne option hors haute saison, quand ils sont à l'heure.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous arbitrons pour chaque étape entre ferry, vol et bateau
                privé, et coordonnons les transferts port à hôtel. Vous n'avez
                pas à vérifier les correspondances.
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
            "Notre voyage en Grèce a mêlé l'histoire et la mer sans jamais courir. L'Acropole avant l'ouverture, une journée de navigation dans les Cyclades, et ce dîner chez un vigneron de Santorin. Tout s'enchaînait naturellement.",
          image: {
            src: "/destination/grece/hero-1.png",
            alt: "Portrait de Bernard et Michèle", // TODO: verify
          },
          name: "Bernard & Michèle", // TODO: verify
          role: "Voyage anniversaire, septembre 2025", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Le Péloponnèse a été la révélation du séjour. Épidaure au lever du jour, Nauplie le soir, presque personne. Notre travel designer avait tout ordonné pour que rien ne se croise.",
          image: {
            src: "/destination/grece/hero-2.png",
            alt: "Portrait d'Édouard", // TODO: verify
          },
          name: "Édouard", // TODO: verify
          role: "Voyage en famille, juin 2025", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "La croisière privée dans les Cyclades restera le souvenir marquant. On lève l'ancre avant tout le monde, on nage dans une crique déserte, on déjeune à bord. Un rythme qu'on n'aurait jamais trouvé seuls.",
          image: {
            src: "/destination/grece/hero-3.png",
            alt: "Portrait de Claire", // TODO: verify
          },
          name: "Claire", // TODO: verify
          role: "Séjour en couple, mai 2025", // TODO: verify
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
          question: "Quelle est la meilleure période pour partir en Grèce ?",
          answer:
            "Les mois les plus agréables sont mai et juin, puis septembre et début octobre : la chaleur reste douce, la mer est chaude et les sites sont moins fréquentés. Juillet et août sont splendides mais très chargés, avec le meltem qui souffle fort sur les Cyclades.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris ?",
          answer:
            "Comptez environ 3h15 en vol direct depuis Paris vers Athènes. Pour rejoindre les îles, ajoutez un court vol intérieur ou une traversée en ferry depuis Le Pirée.",
        },
        {
          question: "Faut-il un visa pour aller en Grèce ?",
          answer:
            "Non. La Grèce fait partie de l'espace Schengen : pour les ressortissants français et européens, une carte nationale d'identité ou un passeport en cours de validité suffit, sans visa.",
        },
        {
          question: "Quelles îles grecques choisir pour un premier voyage ?",
          answer:
            "Tout dépend de ce que vous cherchez. Santorin pour la caldeira, Naxos pour la vie de village, Milos pour ses criques volcaniques, Hydra pour son calme sans voitures. Nous recommandons de retenir deux ou trois îles complémentaires plutôt que d'en enchaîner cinq.",
        },
        {
          question: "Combien d'étapes prévoir pour un voyage de deux semaines ?",
          answer:
            "Un rythme confortable sur deux semaines associe Athènes (2 nuits), le Péloponnèse autour de Nauplie (2 à 3 nuits) et deux ou trois îles des Cyclades (3 nuits chacune). Un bateau privé permet de relier les îles proches sans perdre de temps sur les ferries.",
        },
        {
          question: "Quel budget prévoir pour un voyage en Grèce ?",
          answer:
            "Le budget dépend des hébergements, de la saison et de la part de bateau privé dans l'itinéraire. Nous construisons chaque voyage sur mesure et vous présentons un budget détaillé avant toute réservation, sans engagement.",
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
        "D'autres rivages de Méditerranée où l'histoire et la mer se répondent, à composer sur mesure avec votre travel designer.",
      cta: { label: "Voir toutes les destinations", href: "/destinations" },
      slugs: ["rome", "corse", "marrakech"],
    },
  ],
};
