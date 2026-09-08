import type { Destination } from "@/lib/content/types";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "danemark",
  name: "Danemark",
  placeKind: "country",
  country: "Danemark",
  genitive: "du Danemark",
  continentSlug: "europe",
  blurb: "Copenhague, les îles, le design, la table",
  keywords: [
    "danemark",
    "copenhague",
    "design danois",
    "gastronomie new nordic",
    "chateaux royaux",
    "bornholm",
    "aeroe",
    "skagen",
  ],
  metaTitle: "Danemark : Voyage sur mesure",
  metaDescription:
    "Voyage au Danemark sur mesure : Copenhague, châteaux royaux et gastronomie New Nordic. Itinéraire écrit par votre travel designer Exuma, conciergerie privée 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe au Danemark",
      heading: "Danemark, l'art de vivre à vélo",
      description:
        "Le Danemark compte quatre cent quarante-quatre îles, dont une soixantaine-dix seulement sont habitées. Copenhague s'étend principalement sur les îles de Sjælland et d'Amager, tandis que les ponts et les ferries relient les différentes terres de l'archipel. Au nord du Jutland, à Skagen, le Skagerrak et le Kattegat se rencontrent dans un paysage baigné d'une lumière singulière, qui a attiré dès les années 1870 toute une communauté de peintres et donné naissance à la célèbre école de Skagen.",
      images: [
        {
          src: "/destination/danemark/hero-1.png",
          alt: "Façades colorées et bateaux amarrés le long du canal de Nyhavn à Copenhague, Danemark",
        },
        {
          src: "/destination/danemark/hero-2.png",
          alt: "Château de Kronborg au bord de l'Øresund, à Helsingør au Danemark",
        },
        {
          src: "/destination/danemark/hero-3.png",
          alt: "Plage de sable blanc à Skagen, à la pointe nord du Danemark",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir au Danemark ?",
      heading: "Taïna, spécialiste du Danemark, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "taina",
        // TODO: verify quote attribution
        quote:
          "Le Danemark se découvre souvent à travers Copenhague, mais le pays ne s'arrête pas aux portes de la capitale. Bornholm et Ærø offrent un autre rythme, plus insulaire et contemplatif, tandis qu'une table chez Noma se réserve plusieurs mois à l'avance. Je commence toujours par définir le tempo du voyage avant de choisir les îles qui lui correspondent.",
        role: "Travel Designer · Danemark",
      },
      features: [
        {
          iconName: "badgeCheck",
          title: "Copenhague à vélo, pas en autocar",
          description:
            "Un vélo électrique et un guide privé pour décrypter le design urbain de Nordhavn ou de Christianshavn, loin des circuits organisés en groupe.",
        },
        {
          iconName: "sparkles",
          title: "Le calendrier avant la carte",
          description:
            "Skagen se visite pour sa lumière rasante d'automne, Bornholm pour l'arrivée des harengs dans les fumoirs de Svaneke. Nous choisissons la saison avant l'itinéraire.",
        },
        {
          iconName: "star",
          title: "Des artisans, pas des boutiques",
          description:
            "Un orfèvre chez Georg Jensen, un céramiste à Bornholm : les visites d'atelier se négocient en direct, jamais via une billetterie.",
        },
      ],
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte du Danemark",
      heading: "Un pays qui tient sur le vélo et sur l'eau",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Un voyage au Danemark commence souvent par Copenhague, mais le pays se révèle pleinement lorsque l'on poursuit la route au-delà de la capitale. Copenhague se traverse en une journée à vélo, entre les façades du dix-septième siècle de Nyhavn, le palais de Christiansborg et le nouveau quartier de Nordhavn, construit sur d'anciens quais industriels. Puis viennent les îles : 444 au total, chacune offrant une autre facette du Danemark, de Bornholm à Ærø.",
        "Sur l'île de Sjælland, à quarante minutes de train de Copenhague, Kronborg veille sur l'Øresund depuis la forteresse de Krogen, édifiée en 1420. Le château Renaissance actuel fut construit à partir de 1574 et inspira à Shakespeare l'Elseneur de Hamlet ; il figure au patrimoine mondial de l'Unesco depuis 2000. Plus à l'intérieur des terres, le château de Frederiksborg à Hillerød reste le plus grand château Renaissance de Scandinavie.",
        "Plus loin, Bornholm garde ses quatre églises rondes fortifiées et ses fumoirs à hareng, notamment à Svaneke ; Ærøskøbing déploie ses maisons historiques et ses ruelles pavées autour de son ancien port. Au nord du Jutland, Skagen a formé toute une école de peinture autour de sa lumière ; à Roskilde, cinq navires vikings, excavés du fjord en 1962, racontent une autre histoire du pays.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/danemark/full-image.png",
        alt: "Vue aérienne des canaux et des toits de Copenhague au coucher du soleil, Danemark",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Bornholm et Ærø",
      heading: "Deux îles, deux Danemark",
      theme: "light",
      paragraphs: [
        "Bornholm se trouve au cœur de la mer Baltique, à l'est du reste du Danemark. L'île conserve quatre églises rondes fortifiées médiévales, construites aux douzième et treizième siècles à la fois comme lieux de culte et ouvrages défensifs. À Svaneke, les fumoirs perpétuent la tradition du hareng fumé, tandis que l'île entretient une importante tradition de céramique et de verrerie artisanales.",
        "Ærø, au sud de Fionie, ne compte qu'une poignée de villages. Ærøskøbing aligne ses maisons à colombages, certaines datant des dix-septième et dix-huitième siècles, dans un ensemble historique remarquablement préservé. L'île se relie à Als par Ellen, le premier ferry cent pour cent électrique au monde, mis en service en 2019. Il relie Søby, sur Ærø, à Fynshav, sur Als, en environ une heure.",
      ],
      images: [
        {
          src: "/destination/danemark/split-1.png",
          alt: "Église ronde fortifiée du treizième siècle sur l'île de Bornholm, Danemark",
        },
        {
          src: "/destination/danemark/split-2.png",
          alt: "Maisons à toit de chaume d'Ærøskøbing sur l'île d'Ærø, Danemark",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/danemark/xp-diner-noma-1.png",
          alt: "Table dressée dans la salle de Noma avant l'ouverture au public, Copenhague",
        },
        right: {
          src: "/destination/danemark/xp-diner-noma-2.png",
          alt: "Plat de la cuisine New Nordic préparé en cuisine chez Noma, Copenhague",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Une table qui ferme ses portes plus souvent qu'elle ne les ouvre",
        columns: [
          "Noma a ouvert en 2003 à Christianshavn, sous l'impulsion de René Redzepi, avec une idée alors radicale : construire une cuisine à partir des produits du monde nordique et de ce que chaque saison offre de plus singulier. Le restaurant a depuis fait de la fermentation, de la cueillette et du travail avec les producteurs locaux une partie intégrante de son identité.",
          "Pour son nouveau chapitre à Copenhague en 2026, Noma abandonne le principe de trois grandes saisons au profit de douze rythmes saisonniers, avec une cuisine qui évolue désormais de mois en mois au fil des ingrédients, du climat et du paysage. Les réservations sont ouvertes par périodes, avec des dates d'ouverture annoncées à l'avance. Nous suivons ces ouvertures pour vous et pouvons anticiper votre demande dès que les prochaines tables sont mises en ligne.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Danemark",
      heading: "Trois clés qui ouvrent d'autres portes",
      description:
        "Un atelier d'orfèvre fermé au public, une croisière privée entre les petites îles du sud, une visite de château hors des horaires d'ouverture. Trois façons d'aller au-delà de ce que Copenhague montre déjà.",
      slugs: [
        "atelier-design-copenhague",
        "croisiere-iles-danoises",
        "visite-privee-chateaux-royaux",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Trois adresses, trois Danemark",
      description:
        "Un château du treizième siècle sur la côte de Sjælland, un pavillon mauresque dans les jardins de Tivoli, un ancien théâtre transformé en boutique-hôtel près de Nyhavn. Aucune ne ressemble à une chaîne.",
      slugs: ["dragsholm-slot", "nimb-hotel-copenhague", "hotel-sanders"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage au Danemark",
      description:
        "Temps de vol, formalités, monnaie, saisons et lumière : l'essentiel pour choisir vos dates avant de choisir votre itinéraire.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Comptez environ 2 heures de vol direct entre Paris et Copenhague.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Aucun. Le Danemark est sur le même fuseau horaire que la France et applique les mêmes changements d'heure.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "La monnaie est la couronne danoise (DKK), dont le cours est maintenu très stable autour de 7,46 DKK pour 1 euro. Le paiement par carte est très largement accepté, y compris pour les petites dépenses.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Le Danemark est membre de l'Union européenne et de l'espace Schengen. Aucun visa n'est nécessaire pour les ressortissants français. Une carte nationale d'identité ou un passeport en cours de validité suffit pour un court séjour.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucune vaccination spécifique n'est exigée pour entrer au Danemark depuis la France. Il est recommandé d'être à jour des vaccinations du calendrier français. Selon les activités et les régions visitées, notamment en zone rurale ou forestière, une vaccination contre l'encéphalite à tiques peut être recommandée.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "De mai à septembre pour profiter des longues journées, de Copenhague, de l'archipel de Fionie et des îles du sud. En décembre, les marchés de Noël et l'ambiance hygge de Tivoli offrent un registre différent.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "Le danois est la langue officielle. L'anglais est très largement parlé, y compris dans les commerces et dans les zones touristiques.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Le Danemark bénéficie d'un climat maritime tempéré, avec des étés doux et des hivers frais. Les températures moyennes atteignent environ 16 °C en août, le mois le plus chaud, et autour de 0 °C en février, le plus froid. L'automne est généralement plus humide et couvert, tandis que les journées sont particulièrement courtes en hiver.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Chaque dossier Danemark mobilise plusieurs expertises. Un interlocuteur unique en assure la coordination et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/danemark/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Itinéraire sur mesure au Danemark entre Copenhague, Sjælland et Bornholm",
            "Adresse confidentielle au Danemark, atelier d'artisan ou table de chef",
            "Chambre design donnant sur un jardin danois",
            "Conseillère Exuma en conversation avec un voyageur",
            "Voilier privé entre les petites îles danoises au lever du jour",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables au Danemark",
      heading: "Six lieux autour desquels s'organisent nos itinéraires",
      description:
        "De Copenhague aux fumoirs de Bornholm, des toits de chaume d'Ærø à la lumière de Skagen : six repères que la plupart de nos voyages combinent selon la durée du séjour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      initialZoom: 6,
      places: [
        {
          title: "Copenhague, Nyhavn",
          description:
            "Le canal historique, creusé à partir de 1670, garde ses façades colorées de marchands et de pêcheurs. C'est aussi le point de départ de la plupart des itinéraires à vélo dans la capitale.",
          image: {
            src: "/destination/danemark/map-copenhague.png",
            alt: "Canal de Nyhavn et ses façades colorées à Copenhague",
          },
          // TODO: verify coords
          coordinates: { lat: 55.6796, lng: 12.5883 },
        },
        {
          title: "Kronborg, Helsingør",
          description:
            "Le château garde l'Øresund depuis 1420 et a inspiré à Shakespeare le cadre de son Hamlet. Il figure au patrimoine mondial de l'Unesco depuis 2000.",
          image: {
            src: "/destination/danemark/map-kronborg.png",
            alt: "Château de Kronborg au bord de l'Øresund à Helsingør",
          },
          // TODO: verify coords
          coordinates: { lat: 56.0389, lng: 12.6136 },
        },
        {
          title: "Skagen",
          description:
            "À la pointe nord du Jutland, la mer du Nord et la Baltique se rejoignent visiblement sur la plage de Grenen. La lumière rasante de la région a formé toute une école de peinture à la fin du dix-neuvième siècle.",
          image: {
            src: "/destination/danemark/map-skagen.png",
            alt: "Plage de Grenen où se rejoignent deux mers, à Skagen",
          },
          // TODO: verify coords
          coordinates: { lat: 57.7208, lng: 10.5844 },
        },
        {
          title: "Bornholm",
          description:
            "Île de la Baltique à sept heures de ferry de Copenhague, connue pour ses églises rondes fortifiées et ses fumoirs à hareng de Svaneke. L'île compte aussi une forte concentration d'ateliers de céramique.",
          image: {
            src: "/destination/danemark/map-bornholm.png",
            alt: "Église ronde fortifiée et port de Svaneke sur l'île de Bornholm",
          },
          // TODO: verify coords
          coordinates: { lat: 55.1338, lng: 15.1414 },
        },
        {
          title: "Ærøskøbing, Ærø",
          description:
            "Ce village au sud de Fionie a gardé ses maisons à colombages et ses toits de chaume du dix-huitième siècle le long d'un unique quai, sans grande transformation depuis.",
          image: {
            src: "/destination/danemark/map-aeroe.png",
            alt: "Maisons à colombages d'Ærøskøbing sur l'île d'Ærø",
          },
          // TODO: verify coords
          coordinates: { lat: 54.8886, lng: 10.4106 },
        },
        {
          title: "Roskilde",
          description:
            "Cinq navires vikings, coulés volontairement au onzième siècle pour bloquer le fjord, ont été renfloués en 1962 et se visitent aujourd'hui au musée des navires vikings. La cathédrale voisine sert de nécropole aux monarques danois depuis le Moyen Âge.",
          image: {
            src: "/destination/danemark/map-roskilde.png",
            alt: "Navires vikings renfloués exposés au musée de Roskilde",
          },
          // TODO: verify coords
          coordinates: { lat: 55.6415, lng: 12.0803 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage au Danemark",
      description:
        "Huit observations de terrain qui expliquent pourquoi nous inscrivons une étape à une date plutôt qu'à une autre.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          title: "Dans ma valise",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Un coupe-vent toute l'année, des couches légères en été, l'imperméable ne quitte jamais le sac",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le vent reste constant sur les côtes, y compris en été : un
                coupe-vent respirant sert autant à Copenhague qu&apos;à
                Skagen. Les températures changent vite d&apos;une heure à
                l&apos;autre, mieux vaut superposer des couches légères
                qu&apos;un seul gros pull.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Des chaussures fermées et confortables comptent plus qu&apos;une
                jolie paire : Copenhague se visite surtout à vélo et à pied,
                sur des pavés.
              </p>
            </div>
          ),
        },
        {
          title: "Le vélo avant tout",
          cardEyebrow: "Logistique",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Copenhague compte plus de vélos que d'habitants ; louer un vélo change la façon de voir la ville",
          content: (
            <div className="flex flex-col gap-4">
              {/* TODO: verify bike count */}
              <p>
                La capitale danoise a construit son réseau de pistes
                cyclables sur plusieurs décennies : la plupart des trajets
                internes se font plus vite à vélo qu&apos;en voiture ou en
                métro.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous réservons des vélos électriques et, sur demande, un
                guide privé pour un parcours orienté architecture et design
                plutôt qu&apos;un simple tour touristique.
              </p>
            </div>
          ),
        },
        {
          title: "Choisir sa saison",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "L'été pour les îles et les longues journées, décembre pour l'ambiance hygge et les marchés de Noël",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                De mai à août, les journées s&apos;étirent et les traversées
                vers Bornholm ou Ærø se font dans de bonnes conditions. En
                décembre, Copenhague et Tivoli basculent dans une ambiance de
                marché de Noël qui n&apos;a rien à voir avec le reste de
                l&apos;année.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Éviter novembre pour un premier voyage : les journées
                raccourcissent déjà, sans encore la lumière des marchés de
                Noël.
              </p>
            </div>
          ),
        },
        {
          title: "Réserver Noma plusieurs mois à l'avance",
          cardEyebrow: "Gastronomie",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les ouvertures de réservation sont annoncées sans calendrier fixe ; nous les suivons pour vous",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Noma ouvre ses réservations par vagues, une saison à la fois,
                sans date annoncée à l&apos;avance. Les places partent en
                quelques heures une fois la fenêtre ouverte.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous surveillons ces ouvertures et réservons dès qu&apos;un
                créneau correspond à vos dates de voyage.
              </p>
            </div>
          ),
        },
        {
          title: "Combiner Copenhague et les îles",
          cardEyebrow: "Itinéraire",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Trois nuits suffisent pour Copenhague ; compter une journée entière de ferry pour Bornholm",
          content: (
            <div className="flex flex-col gap-4">
              {/* TODO: verify ferry duration */}
              <p>
                Bornholm se rejoint en sept heures de ferry depuis
                Copenhague, ou en une heure d&apos;avion. Ærø demande un
                enchaînement train puis ferry depuis Svendborg.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                En dessous de huit jours, nous conseillons de choisir une
                seule île plutôt que d&apos;enchaîner les traversées.
              </p>
            </div>
          ),
        },
        {
          title: "Le droit d'accès à la nature",
          cardEyebrow: "Culture",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "L'accès aux forêts publiques et à certaines plages reste large, mais moins étendu qu'en Suède ou en Norvège",
          content: (
            <div className="flex flex-col gap-4">
              {/* TODO: verify exact scope of access rights */}
              <p>
                La loi danoise autorise à marcher dans les forêts publiques
                et le long du littoral, mais la propriété privée reste
                davantage respectée qu&apos;en Scandinavie voisine, avec des
                panneaux clairs sur les terrains fermés.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Les sentiers côtiers autour de Skagen et de Bornholm restent
                les plus simples à parcourir librement.
              </p>
            </div>
          ),
        },
        {
          title: "Budget et vie locale",
          cardEyebrow: "Budget",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Un pays au coût de la vie élevé, où la carte bancaire remplace presque entièrement les espèces",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La couronne danoise (DKK) reste la monnaie de référence. La
                carte bancaire est acceptée presque partout, jusque dans les
                petits commerces et les fumoirs de Bornholm : il est inutile
                de changer beaucoup d&apos;espèces.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Les restaurants avec étoile ou distinction demandent souvent
                un acompte à la réservation, non remboursable en cas
                d&apos;annulation tardive.
              </p>
            </div>
          ),
        },
        {
          title: "Rencontrer les artisans du design",
          cardEyebrow: "Artisanat",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les ateliers d'orfèvres et de céramistes reçoivent sur rendez-vous, rarement en visite libre",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le design danois se transmet encore dans des ateliers de
                taille modeste, à Copenhague comme à Bornholm, où le maître
                artisan reçoit un petit groupe à la fois.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous organisons la visite directement avec l&apos;atelier,
                jamais via une billetterie de musée, et adaptons l&apos;horaire
                à votre séjour.
              </p>
            </div>
          ),
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
          question: "Quelle est la meilleure période pour partir au Danemark ?",
          answer:
            "De mai à septembre pour les longues journées, Copenhague à vélo et les traversées vers Bornholm ou Ærø. En décembre, Copenhague et Tivoli offrent une ambiance de marché de Noël très différente, avec des journées beaucoup plus courtes.",
        },
        {
          question: "Combien de temps dure le vol Paris - Copenhague ?",
          answer:
            "Comptez environ 2 heures de vol direct entre Paris et Copenhague.",
        },
        {
          question: "Faut-il un visa pour aller au Danemark ?",
          answer:
            "Non. Le Danemark appartient à l'Union européenne et à l'espace Schengen. Une carte nationale d'identité ou un passeport en cours de validité suffit pour les ressortissants français. Aucune vaccination n'est exigée.",
        },
        {
          question: "Comment réserver une table chez Noma ?",
          answer:
            "Noma ouvre ses réservations par vagues saisonnières, sans calendrier annoncé à l'avance, et les places partent en quelques heures. Nous suivons ces ouvertures pour nos clients et réservons dès qu'un créneau correspond aux dates du voyage.",
        },
        {
          question: "Que faire au Danemark en une semaine ?",
          answer:
            "Trois nuits à Copenhague pour Nyhavn, Christiansborg et un tour à vélo dans Nordhavn, puis une escale à Kronborg ou Frederiksborg sur l'île de Sjælland, avant de choisir entre Bornholm pour ses fumoirs et ses ateliers, ou Ærø pour ses villages aux toits de chaume.",
        },
        {
          question: "Quel budget prévoir pour un voyage au Danemark ?",
          answer:
            "Le budget se joue sur trois postes : les hébergements de charme qui comptent peu de chambres, les tables étoilées réservées longtemps à l'avance, et les traversées privées entre les îles. Nous construisons chaque voyage sur mesure et présentons un budget détaillé avant toute réservation, sans engagement.",
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
        "Trois autres façons de remonter vers le nord de l'Europe, entre archipels, fjords et lumière basse.",
      slugs: ["suede", "norvege", "islande"],
    },
  ],
};
