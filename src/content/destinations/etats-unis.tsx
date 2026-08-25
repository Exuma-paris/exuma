import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "etats-unis",
  name: "États-Unis",
  placeKind: "country",
  country: "États-Unis",
  genitive: "des États-Unis",
  continentSlug: "ameriques",
  blurb: "Le plateau du Colorado, Big Sur, New York",
  keywords: [
    "etats-unis",
    "utah",
    "big sur",
    "new york",
    "californie",
    "grand canyon",
    "monument valley",
    "napa",
    "ouest americain",
  ],
  metaTitle: "États-Unis : Voyage sur mesure",
  metaDescription:
    "Voyage aux États-Unis sur mesure : plateau du Colorado, Big Sur, New York. Itinéraire écrit par votre travel designer Exuma, conciergerie privée 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe aux États-Unis",
      heading: "Les États-Unis, de Monument Valley à Central Park",
      description:
        "Il y a l'Amérique des canyons et celle des avenues, et le plaisir du voyage tient à passer de l'une à l'autre. Le plateau du Colorado est silencieux au petit matin, les séquoias de Big Sur se devinent dans la brume, et New York rend ensuite le mouvement de la ville. Chaque étape se choisit pour ce qu'elle apporte aux autres.",
      images: [
        {
          src: "/destination/etats-unis/hero-1.png",
          alt: "Falaises de grès du plateau du Colorado au lever du jour, dans l'Utah, aux États-Unis",
        },
        {
          src: "/destination/etats-unis/hero-2.png",
          alt: "Route côtière de Big Sur surplombant le Pacifique en Californie",
        },
        {
          src: "/destination/etats-unis/hero-3.png",
          alt: "Façades de l'Upper East Side bordant Central Park à New York",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Notre rôle dans ce voyage",
      heading: "Un seul interlocuteur, d'une côte à l'autre",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "carole",
        // TODO: faire valider ce verbatim par Carole Galvier avant publication
        quote:
          "Ce que je préfère organiser aux États-Unis, ce sont les moments que l'on ne peut pas réserver soi-même. Un canyon navajo que l'on ouvre pour vous seuls au lever du jour, un chai de la Napa où le vigneron vous attend, une galerie du Metropolitan avant l'arrivée du public. Le reste du voyage se construit autour de ces rendez-vous. C'est cette Amérique-là que nous montrons.",
        role: "Travel Designer · États-Unis",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Ouverture",
      heading: "Un pays qui ne se visite pas d'un seul tenant",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      columns: [
        "Un voyage aux États-Unis commence souvent par le plateau du Colorado, là où l'eau a creusé le grès en canyons profonds. Le matin, on y marche dans un silence que rien ne vient troubler, sinon le vent dans les genévriers. Les Navajos nomment cette terre Dinétah et la parcourent depuis toujours. On prend la mesure du pays ici, avant d'en découvrir les villes.",
        "La suite se dessine selon ce que l'on cherche. Les canyons de l'Utah et les eaux du lac Powell d'abord, puis la côte de Big Sur, où la route suit l'océan entre Carmel et San Simeon. New York arrive en fin de parcours, quand l'envie de ville revient. Le plaisir tient à deux ou trois régions que l'on prend le temps d'habiter, et nous composons ces itinéraires depuis plus de dix ans.",
        "« Chaque région américaine a sa lumière et son tempo. Notre travail consiste à les assembler pour que le voyage garde son élan, du premier jour jusqu'au dernier. »",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/etats-unis/full-image.png",
        alt: "Méandre du Colorado encaissé dans les canyons de l'Utah, aux États-Unis",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Big Sur, 140 kilomètres sans une ville",
      heading: "Une côte où le brouillard arrive à heure fixe",
      theme: "light",
      paragraphs: [
        "La route de Big Sur suit le Pacifique entre Carmel et San Simeon, et elle traverse une côte que personne n'a bâtie. Elle longe la falaise, franchit le pont de Bixby Creek, puis redescend vers les criques de Piedras Blancas où les éléphants de mer viennent mettre bas en hiver.",
        "Le brouillard, ici, est un horaire. Il monte du large en fin de matinée, voile la montagne, puis se retire au milieu de l'après-midi. Les séquoias de la vallée y puisent l'eau qui leur manque l'été : ils la boivent par les aiguilles.",
        "Le soir, la route se vide. Il ne reste que le bruit de l'océan, en dessous, dans le noir.",
      ],
      images: [
        {
          src: "/destination/etats-unis/split-1.png",
          alt: "Pont de Bixby Creek sur la route côtière de Big Sur, en Californie",
        },
        {
          src: "/destination/etats-unis/split-2.png",
          alt: "Séquoias dans le brouillard de la vallée de Big Sur",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/etats-unis/xp-canyon-navajo-1.png",
          alt: "Parois de grès orange d'un canyon en fente sur les terres navajo de l'Utah",
        },
        right: {
          src: "/destination/etats-unis/xp-canyon-navajo-2.png",
          alt: "Guide navajo éclairé par la lumière réfléchie dans un canyon étroit",
        },
      },
      // TODO: verify accès, opérateur navajo et localisation exacte du canyon
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Le matin où le canyon n'appartient à personne",
        columns: [
          "On quitte l'hôtel avant le jour et le 4x4 s'écarte de la route goudronnée pour remonter un lit de rivière à sec. Il s'arrête devant une fente étroite dans la roche, si discrète qu'on passerait devant sans la voir. Ce canyon ne figure sur aucune carte touristique : il appartient aux terres de la nation Navajo, et c'est la famille qui en détient les droits qui vous ouvre la barrière.",
          "À l'intérieur, la lumière n'entre jamais directement. Elle glisse de paroi en paroi et la pierre la renvoie en orange, puis en violet à mesure que le soleil monte. Le guide montre les traces que les crues ont laissées bien au-dessus des têtes, et raconte comment il lit le ciel avant de descendre. On ressort du canyon avant que quiconque d'autre n'arrive.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités aux États-Unis",
      heading: "Trois accès que l'on ne trouve pas seul",
      description:
        "Une matinée de terrain avec des biologistes, un chai qui ne reçoit pas, un musée avant l'ouverture. Des accès qui se négocient, pas qui se réservent.",
      slugs: [
        "pistage-condors-big-sur",
        "cabernet-culte-napa",
        "met-avant-ouverture",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements aux États-Unis",
      heading: "Où séjourner",
      description:
        "Trois adresses pour trois atmosphères : un désert de pierre rouge dans l'Utah, une maison face à l'océan en Californie, un immeuble de Madison Avenue. Aucune ne ressemble aux deux autres, et c'est ce qui donne son relief au parcours.",
      slugs: ["amangiri", "post-ranch-inn", "the-mark-hotel"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Avant le départ",
      heading: "Préparer votre voyage aux États-Unis",
      description:
        "Temps de vol, décalage, formalités, saison et climat : l'essentiel pour cadrer le voyage avant d'en dessiner l'itinéraire.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          // TODO: verify durées de vol et villes de correspondance
          description:
            "Environ 8 h en vol direct de Paris à New York, 11 h 30 pour Los Angeles ou San Francisco. Pour rejoindre l'Utah, comptez une correspondance par Salt Lake City, Phoenix ou Las Vegas.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "6 heures de retard sur la France pour la côte Est, 9 heures pour la côte Ouest. Le décalage se remonte plus facilement à l'aller qu'au retour.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Le dollar américain. Les cartes passent partout, jusque dans les parcs nationaux, et l'espèce ne sert presque plus. Le pourboire, lui, est attendu partout, entre 18 et 20 %.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Pas de visa pour un séjour de moins de 90 jours, mais une autorisation ESTA obligatoire, à demander en ligne avant l'embarquement. Passeport biométrique en cours de validité.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin obligatoire, les vaccinations habituelles à jour suffisent. Une assurance santé solide est en revanche indispensable : les soins se facturent très cher.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "De mai à juin et de septembre à octobre pour l'Ouest : canyons praticables, chaleur tenable. New York se marche mieux en mai ou en octobre. En juillet et août, le plateau du Colorado dépasse les 40 °C.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "L'anglais. L'espagnol est courant dans le Sud-Ouest et en Californie. Le navajo se parle encore sur la réserve, qui s'étend sur trois États.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Presque tous les climats du globe dans un seul pays. Désert sec en Utah, brouillard océanique l'été à Big Sur, continental humide à New York, avec des hivers vifs et des étés lourds.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier américain. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/etats-unis/bento-${
            ["map", "adresses", "hebergements", "conciergerie", "experiences"][i]
          }.png`,
          alt: [
            "Carte d'un itinéraire sur mesure aux États-Unis",
            "Table dressée dans une salle à manger de l'Upper East Side",
            "Pavillon de désert ouvert sur les falaises de grès de l'Utah",
            "Concierge coordonnant un transfert privé aux États-Unis",
            "Marcheurs dans un canyon en fente du plateau du Colorado",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Que voir aux États-Unis",
      heading: "Six étapes, et pourquoi elles tiennent ensemble",
      description:
        "Canyon Point, Monument Valley, la rive nord du Grand Canyon, Big Sur, la Napa Valley, l'Upper East Side. Six points autour desquels s'organisent la plupart de nos itinéraires américains.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      initialZoom: 4,
      places: [
        {
          title: "Canyon Point et le lac Powell",
          description:
            "Le plateau du Colorado s'achève ici en larges marches de pierre rouge. Le lac Powell a rempli tout un réseau de canyons, que l'on remonte aujourd'hui en bateau jusqu'à des bras où l'on se retrouve seul. C'est de là que partent les canyons étroits.",
          image: {
            src: "/destination/etats-unis/map-canyon-point.png",
            alt: "Bras du lac Powell encaissé entre des falaises de grès à Canyon Point",
          },
          coordinates: { lat: 37.0089, lng: -111.53 }, // TODO: verify coords
        },
        {
          title: "Monument Valley",
          description:
            "Des buttes immenses posées sur un désert parfaitement plat, sur les terres de la nation Navajo. John Ford y a tourné ses westerns, et le paysage a gardé cette allure de décor. Au-delà de la piste principale, on circule accompagné d'un guide navajo.",
          image: {
            src: "/destination/etats-unis/map-monument-valley.png",
            alt: "Buttes de grès de Monument Valley à la tombée du jour",
          },
          coordinates: { lat: 36.998, lng: -110.0985 }, // TODO: verify coords
        },
        {
          title: "Le Grand Canyon, rive nord",
          description:
            "La rive nord reste la plus tranquille des deux, et une forêt de pins y remplace le désert. On y contemple le canyon depuis des promontoires où l'on croise peu de monde. Elle s'ouvre du printemps à l'automne.",
          image: {
            src: "/destination/etats-unis/map-grand-canyon.png",
            alt: "Rive nord du Grand Canyon vue depuis un promontoire boisé",
          },
          coordinates: { lat: 36.1976, lng: -112.0563 }, // TODO: verify coords
        },
        {
          title: "Big Sur",
          description:
            "Une côte que personne n'a bâtie, entre Carmel et San Simeon, où la route épouse la falaise. Les condors de Californie y planent de nouveau après avoir failli disparaître. Le brouillard monte du large en fin de matinée et se retire l'après-midi.",
          image: {
            src: "/destination/etats-unis/map-big-sur.png",
            alt: "Falaises de Big Sur plongeant dans le Pacifique en Californie",
          },
          coordinates: { lat: 36.2704, lng: -121.8081 }, // TODO: verify coords
        },
        {
          title: "La Napa Valley",
          description:
            "Une vallée entière couverte de vignes, où les plus grands cabernets de Californie se font depuis les années soixante. Les domaines les plus recherchés vendent sur liste d'attente et n'ouvrent pas leur portail. On y entre par le vigneron, jamais par la boutique.",
          image: {
            src: "/destination/etats-unis/map-napa.png",
            alt: "Rangs de vigne de la Napa Valley au petit matin, en Californie",
          },
          coordinates: { lat: 38.5025, lng: -122.2654 }, // TODO: verify coords
        },
        {
          title: "New York, l'Upper East Side",
          description:
            "Les grands musées de New York se suivent le long de la Cinquième Avenue, le Metropolitan en tête. Le quartier se vide le week-end, quand ses habitants s'en vont, et c'est le meilleur moment pour y marcher. Central Park s'ouvre juste en face.",
          image: {
            src: "/destination/etats-unis/map-new-york.png",
            alt: "Cinquième Avenue et le Metropolitan Museum bordant Central Park à New York",
          },
          coordinates: { lat: 40.7736, lng: -73.9566 }, // TODO: verify coords
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Ce que les guides ne disent pas",
      heading: "Les conseils de nos experts pour votre voyage aux États-Unis",
      description:
        "Huit observations de terrain qui ne figurent pas dans un guide. Pour arbitrer une étape, ou comprendre pourquoi nous l'inscrivons à un itinéraire.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          title: "Le plaisir de rester un peu",
          cardEyebrow: "Itinéraire",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Deux ou trois régions que l'on prend le temps d'habiter, et le pays se révèle beaucoup mieux",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les voyages américains les plus réussis sont ceux où l'on
                s'installe. On garde le temps de retourner deux fois au même
                point de vue, de retrouver la même table le soir, de voir la
                lumière changer sur les mêmes canyons. C'est là que le pays
                cesse d'être un décor et devient un séjour.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous construisons par ensembles cohérents : le plateau du
                Colorado et ses canyons, la côte californienne, ou le Nord-Est
                et ses villes. Une ville en ouverture ou en clôture du séjour,
                et de vraies journées ailleurs.
              </p>
            </div>
          ),
        },
        {
          title: "L'ESTA, et le piège du passeport",
          cardEyebrow: "Formalités",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Pas de visa sous 90 jours, mais une autorisation en ligne obligatoire, et un passeport qui doit être biométrique",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L'ESTA se demande en ligne et coûte quelques dizaines de
                dollars. La demande est presque toujours accordée en quelques
                heures, mais elle peut être mise en attente plusieurs jours sans
                explication. Le refus le plus courant n'a rien à voir avec le
                voyageur : c'est un passeport non biométrique, ou une ancienne
                autorisation encore valable rattachée à un passeport périmé.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Déposer la demande dès la confirmation du voyage, jamais la
                semaine du départ. Un séjour antérieur en Iran, en Irak, en
                Syrie, au Soudan, en Libye, en Somalie, en Corée du Nord ou au
                Yémen fait basculer le dossier vers un visa classique, à
                instruire au consulat.
              </p>
            </div>
          ),
        },
        {
          title: "Les parcs se visitent à deux heures",
          cardEyebrow: "Timing",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Avant huit heures, ou après dix-sept heures. Entre les deux, la lumière est plate et les parkings sont pleins",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les grands parcs de l'Ouest reçoivent l'essentiel de leurs
                visiteurs entre dix heures et seize heures, en autocar. Aux
                mêmes heures, le soleil au zénith écrase le relief et vide les
                canyons de leurs couleurs. Le même point de vue, à sept heures
                du matin, est désert et rouge.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous calons les journées sur les deux fenêtres utiles et
                installons la sieste au milieu, à l'hôtel. Certains sites, sur
                terres tribales ou en accès restreint, s'ouvrent en dehors des
                heures publiques.
              </p>
            </div>
          ),
        },
        {
          title: "Les terres tribales ne sont pas des parcs",
          cardEyebrow: "Terrain",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "La nation Navajo a ses lois, ses horaires et ses guides obligatoires. Ce n'est pas une formalité administrative",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La réserve navajo s'étend sur trois États et couvre une surface
                proche de celle de l'Irlande. On n'y entre pas comme dans un
                parc national : la plupart des canyons et des buttes se visitent
                uniquement accompagné d'un guide agréé, sur autorisation, et
                l'alcool y est interdit. Photographier des personnes sans leur
                accord ne se fait pas.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous travaillons avec des guides navajo qui détiennent les
                droits sur les parcelles où ils emmènent. C'est ce qui ouvre les
                canyons que les cars ne voient jamais, et c'est aussi ce qui
                fait tenir le récit de la journée.
              </p>
            </div>
          ),
        },
        {
          title: "Le pourboire n'est pas facultatif",
          cardEyebrow: "Usages",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Entre 18 et 20 % au restaurant, et une ligne à remplir soi-même sur le ticket de carte",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le service n'est pas inclus, et les salaires en salle en
                dépendent directement. Le ticket de carte présente une ligne
                vide à compléter à la main avant de signer. En dessous de 15 %,
                le message est celui d'un mécontentement explicite. Chauffeurs,
                bagagistes et guides relèvent des mêmes usages, à des montants
                différents.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Garder quelques billets de cinq et de dix dollars pour les
                transferts et les bagages. Sur un séjour de deux semaines, le
                poste représente une somme réelle : nous le chiffrons dans le
                budget plutôt que de le laisser en découverte.
              </p>
            </div>
          ),
        },
        {
          title: "Se soigner coûte très cher",
          cardEyebrow: "Santé",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Aucun vaccin obligatoire, mais une consultation aux urgences se facture en milliers de dollars",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Il n'y a pas de risque sanitaire particulier aux États-Unis, et
                aucun vaccin n'est exigé. Le risque est financier : une entorse
                traitée aux urgences, un vol sanitaire depuis un canyon, une
                nuit d'hospitalisation atteignent des montants sans équivalent
                en Europe. La carte européenne d'assurance maladie n'a aucune
                valeur sur place.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous vérifions les plafonds de votre assurance voyage avant le
                départ, en particulier le rapatriement et les frais médicaux, et
                nous identifions les établissements de référence sur chaque
                étape de l'itinéraire.
              </p>
            </div>
          ),
        },
        {
          title: "Conduire, ou se faire conduire",
          cardEyebrow: "Logistique",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "La voiture fait tout le charme de l'Ouest. En ville, elle devient une contrainte",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Dans l'Ouest, la voiture est un plaisir en soi. Les routes sont
                larges et presque vides, les panoramas se succèdent, et l'on
                s'arrête où l'on veut. En ville, en revanche, elle ne sert plus
                à rien : le stationnement coûte cher à New York comme à San
                Francisco, et tout se rejoint plus simplement autrement.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Voiture avec chauffeur sur les segments longs et les journées de
                site, où l'on ne veut pas repartir en conduisant après une
                marche. Restitution du véhicule à l'entrée en ville, transferts
                privés ensuite.
              </p>
            </div>
          ),
        },
        {
          title: "New York, quel quartier",
          cardEyebrow: "Ville",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "L'Upper East Side pour les musées et le calme, SoHo pour la ville qui bouge. Deux séjours différents",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le choix du quartier détermine le séjour plus sûrement que celui
                de l'hôtel. L'Upper East Side donne les musées à pied, Central
                Park au bout de la rue, et des trottoirs silencieux le soir.
                SoHo et le West Village donnent les tables, les galeries et le
                bruit jusqu'à deux heures du matin. Vingt minutes de taxi
                séparent les deux.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Pour un séjour à plusieurs générations, l'Upper East Side gagne
                presque toujours : les enfants marchent au parc, les grands
                gardent le Metropolitan à cinq minutes, et personne ne dort dans
                le bruit.
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
            "Nous partions à six, sur trois générations, et je redoutais la logistique. Le canyon au lever du jour a réuni tout le monde, ce que je n'attendais pas. Les distances avaient été pensées pour que personne ne subisse la route.",
          image: {
            src: "/destination/etats-unis/hero-1.png",
            alt: "Portrait de Bernard et Michèle", // TODO: verify
          },
          name: "Bernard & Michèle", // TODO: verify
          role: "Voyage en famille, mai 2025", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "J'avais déjà fait l'Ouest deux fois, en pensant l'avoir vu. Cette fois nous sommes entrés dans un canyon dont je n'avais jamais entendu le nom, avec la famille qui en détient l'accès. C'est exactement ce que je cherchais.",
          image: {
            src: "/destination/etats-unis/hero-2.png",
            alt: "Portrait d'Édouard", // TODO: verify
          },
          name: "Édouard", // TODO: verify
          role: "Séjour dans l'Ouest, octobre 2025", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Big Sur puis New York, en une semaine chacun. Le contraste faisait tout le voyage. Une seule personne au bout du téléphone d'un bout à l'autre, y compris pour un vol décalé la veille du retour.",
          image: {
            src: "/destination/etats-unis/hero-3.png",
            alt: "Portrait de Claire", // TODO: verify
          },
          name: "Claire", // TODO: verify
          role: "Voyage en couple, septembre 2025", // TODO: verify
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
          question: "Quelle est la meilleure période pour partir aux États-Unis ?",
          answer:
            "Pour l'Ouest et ses canyons, de mai à juin puis de septembre à octobre : la chaleur reste tenable et la lumière est meilleure. New York se marche mieux en mai ou en octobre. Juillet et août dépassent les 40 °C sur le plateau du Colorado, et l'hiver ferme la rive nord du Grand Canyon.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris ?",
          answer:
            "Comptez environ 8 h en vol direct de Paris à New York, et 11 h 30 pour Los Angeles ou San Francisco. Pour rejoindre l'Utah, il faut ajouter une correspondance par Salt Lake City, Phoenix ou Las Vegas, puis deux à quatre heures de route.",
        },
        {
          question: "Faut-il un visa pour aller aux États-Unis ?",
          answer:
            "Non, pas pour un séjour de moins de 90 jours, mais une autorisation ESTA est obligatoire et doit être demandée en ligne avant l'embarquement. Elle exige un passeport biométrique en cours de validité. Nous vous rappelons de la déposer dès la confirmation du voyage, car elle peut être mise en attente plusieurs jours.",
        },
        {
          question: "Que faire aux États-Unis en deux semaines ?",
          answer:
            "Deux régions, trois au maximum. Un rythme confortable associe cinq à six nuits sur le plateau du Colorado pour les canyons, quatre nuits sur la côte de Big Sur, et trois nuits à New York en fin de parcours. Vouloir relier les deux côtes et l'Ouest en quinze jours revient à passer le voyage dans les avions intérieurs.",
        },
        {
          question: "Faut-il louer une voiture pour visiter l'Ouest américain ?",
          answer:
            "Oui, ou prendre une voiture avec chauffeur : les distances entre deux étapes se comptent en heures et rien ne dessert l'intervalle. En ville, en revanche, la voiture devient une charge. Nous privilégions le chauffeur sur les segments longs et les journées de site, puis les transferts privés dès l'arrivée en ville.",
        },
        {
          question: "Quel budget prévoir pour un voyage aux États-Unis ?",
          answer:
            "Le budget dépend des hébergements, de la saison et de la part de vols intérieurs ou d'hélicoptère dans l'itinéraire. Nous construisons chaque voyage sur mesure et vous présentons un budget détaillé avant toute réservation, pourboires et assurance inclus, sans engagement.",
        },
      ],
    },
  ],
};
