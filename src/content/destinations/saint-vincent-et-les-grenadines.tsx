import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "saint-vincent-et-les-grenadines",
  name: "Saint-Vincent-et-les-Grenadines",
  placeKind: "region",
  country: "Caraïbes",
  genitive: "de Saint-Vincent-et-les-Grenadines",
  continentSlug: "caraibes",
  blurb: "Mustique, Bequia, Canouan, les Tobago Cays",
  keywords: [
    "saint-vincent-et-les-grenadines",
    "grenadines",
    "mustique",
    "bequia",
    "canouan",
    "tobago cays",
    "petit saint vincent",
    "caraibes",
  ],
  metaTitle: "Saint-Vincent-et-les-Grenadines : Voyage sur mesure",
  metaDescription:
    "Voyage dans les Grenadines sur mesure : Mustique, Bequia, Canouan et les Tobago Cays. Itinéraire écrit par votre travel designer Exuma, conciergerie 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe dans les Grenadines",
      heading: "Saint-Vincent-et-les-Grenadines, de Mustique aux Tobago Cays",
      description:
        "Trente-deux îles et cays se suivent ici du nord au sud, et l'on passe de l'une à l'autre en une heure de navigation. Mustique se garde derrière une compagnie privée, Bequia construit encore ses bateaux, et les Tobago Cays n'appartiennent à personne. On arrive le plus souvent par la mer, et c'est la meilleure façon de comprendre l'endroit. C'est cet archipel-là que nous vous ouvrons.",
      images: [
        {
          src: "/destination/saint-vincent-et-les-grenadines/hero-1.png",
          alt: "Voyage dans les Grenadines : le mouillage des Tobago Cays derrière le récif Horseshoe",
        },
        {
          src: "/destination/saint-vincent-et-les-grenadines/hero-2.png",
          alt: "Voiliers au mouillage dans Admiralty Bay devant Port Elizabeth à Bequia",
        },
        {
          src: "/destination/saint-vincent-et-les-grenadines/hero-3.png",
          alt: "La plage de Macaroni à Mustique en fin d'après-midi",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir dans les Grenadines ?",
      heading:
        "Carole, spécialiste des Grenadines, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "carole",
        // TODO: verify quote attribution
        quote:
          "On vient rarement ici pour une seule île. Les traversées durent une heure, parfois moins, et l'on finit par vivre au rythme du bateau plutôt qu'à celui des journées. Je construis les séjours autour de ce mouvement : une maison où revenir le soir, et des îles que l'on va chercher le matin. C'est ce qui fait que personne ne compte plus les jours.",
        role: "Travel Designer · Saint-Vincent-et-les-Grenadines",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte des Grenadines",
      heading: "Un archipel que l'on parcourt d'île en île",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      columns: [
        "Un voyage dans les Grenadines commence par une carte marine plutôt que par une route. Saint-Vincent tient le nord avec sa montagne et ses jardins botaniques, puis l'archipel s'égrène vers le sud : Bequia, Mustique, Canouan, Mayreau, Union et les îlots qui les séparent. Les traversées se comptent en heures, parfois en minutes, et l'on change d'île comme ailleurs on change de quartier.",
        "Chacune a gardé son caractère. Bequia construit des bateaux depuis toujours, et les coques en chantier se voient encore derrière Port Elizabeth. Mustique appartient à une compagnie que se partagent les propriétaires de ses maisons, ce qui explique le calme des chemins et l'absence de circulation. Canouan reçoit les familles pour la semaine entière, dans de grandes villas où le personnel reste sur place.",
        "Les Tobago Cays ferment le tableau, cinq îlots sans habitants que le récif tient à l'abri de la houle. On y nage avec les tortues sans avoir eu à les chercher. Nous plaçons les maisons et les traversées pour que ces journées arrivent au bon moment du séjour, et jamais toutes à la suite.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/saint-vincent-et-les-grenadines/full-image.png",
        alt: "Voyage dans les Grenadines : les îlots déserts des Tobago Cays vus depuis la mer",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Les Grenadines vues du bateau",
      heading: "Les journées où l'on lève l'ancre après le petit-déjeuner",
      theme: "light",
      paragraphs: [
        "Le bateau n'est pas une excursion, c'est le moyen de transport. On quitte Admiralty Bay au matin, on déjeune au mouillage de Salt Whistle Bay à Mayreau, et l'on remonte vers Chatham Bay pour la fin d'après-midi. Les distances sont si courtes que rien ne se décide la veille : on regarde le vent en sortant, et l'équipage propose l'île qui ira le mieux ce jour-là.",
        "Ce qui frappe, c'est le peu de monde. Quelques bateaux se partagent chaque mouillage, les plages n'ont ni parasol ni vendeur, et l'on aborde des îlots où personne ne vit. Le soir, on rentre dîner à terre, et l'on repart le lendemain dans l'autre sens.",
      ],
      images: [
        {
          src: "/destination/saint-vincent-et-les-grenadines/split-1.png",
          alt: "Goélette au mouillage devant la plage de Salt Whistle Bay à Mayreau",
        },
        {
          src: "/destination/saint-vincent-et-les-grenadines/split-2.png",
          alt: "Coque de bateau en chantier sur la plage de Bequia",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/saint-vincent-et-les-grenadines/xp-tobago-cays-1.png",
          alt: "Tortue verte broutant l'herbier devant l'îlot de Baradal aux Tobago Cays",
        },
        right: {
          src: "/destination/saint-vincent-et-les-grenadines/xp-tobago-cays-2.png",
          alt: "Bateau privé à l'ancre devant les îlots des Tobago Cays",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "La journée de snorkeling aux Tobago Cays",
        columns: [
          "Les Tobago Cays sont cinq îlots inhabités, protégés par le récif Horseshoe qui casse la houle de l'Atlantique. Le bateau privé s'y installe pour la journée, et le masque se met presque en arrivant : le sanctuaire marin commence à la coque.",
          "Devant Baradal, les tortues vertes et imbriquées broutent l'herbier par deux ou trois mètres de fond. On nage à leur hauteur sans qu'elles s'écartent, et l'on remonte respirer en même temps qu'elles. Le reste de la journée se passe entre les bancs de sable et les rochers de Petit Tabac, où le déjeuner s'installe à l'ombre. Les derniers bateaux repartent avant le soir, et les îlots redeviennent déserts.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités dans les Grenadines",
      heading: "Naviguer d'une île à l'autre, ou monter à cheval sur le sable",
      description:
        "Nous vous emmenons à la voile de Bequia jusqu'à Petit St. Vincent, sur les sentiers de montagne et les plages désertes à cheval, et jusqu'à une table de soins installée face à l'océan.",
      slugs: [
        "voilier-iles-grenadines",
        "cheval-sentiers-plages-grenadines",
        "voyage-spa-grenadines",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Une maison de plantation, une île entière, ou une villa au vert",
      description:
        "Une ancienne maison de plantation tient lieu de place de village à Mustique, une île du sud se loue tout entière, et les villas de Canouan descendent jusqu'à la plage. Nous les proposons selon la façon dont vous aimez passer vos matins.",
      slugs: [
        "cotton-house-mustique",
        "petit-saint-vincent",
        "canouan-estate",
      ],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage dans les Grenadines",
      description:
        "Voici les repères pratiques à réunir avant de choisir vos dates : le trajet, les formalités, la monnaie et les saisons.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Il n'existe pas de vol direct depuis Paris. Les itinéraires passent le plus souvent par la Barbade, elle-même rejointe via Londres ou via une escale nord-américaine, puis gagnent l'aéroport international d'Argyle sur Saint-Vincent en environ quarante-cinq minutes de vol. Virgin Atlantic relie également Londres-Heathrow à Saint-Vincent, avec une courte escale technique à la Barbade pendant laquelle les passagers restent à bord. Comptez une journée complète de trajet. Mustique, Canouan, Bequia et Union ont chacune leur aérodrome, mais les liaisons ne sont pas toujours directes : selon l'île et selon les jours, on rejoint sa maison en petit avion, par le ferry ou par un transfert privé.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "L'archipel ne change pas d'heure. Comptez cinq heures de retard sur la France en hiver, et six heures en été.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "La monnaie est le dollar des Caraïbes orientales, indexé sur le dollar américain au taux officiel de 2,70 pour un dollar. Le dollar américain est très largement accepté, sans l'être partout : les petites structures demandent parfois des espèces, et souvent en monnaie locale. Les cartes passent dans les maisons et les grandes tables ; on garde du liquide pour les taxis, les bateaux-taxis et les petites adresses de Bequia et d'Union.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Aucun visa n'est demandé aux ressortissants français pour un séjour de moins de six mois. Le passeport doit être valide au moins six mois après la date de retour prévue, et un billet de retour est demandé à l'entrée. Si l'itinéraire comprend une escale aux États-Unis, l'autorisation ESTA est obligatoire, y compris en simple transit, sauf pour les voyageurs déjà titulaires du document américain adéquat. En cas de correspondance à Londres, l'autorisation britannique n'est pas nécessaire tant que l'on reste en zone de transit ; elle le devient dès que l'on franchit la frontière.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin n'est obligatoire pour un séjour touristique, sauf celui contre la fièvre jaune pour les voyageurs arrivant d'un pays où la maladie circule. Il est recommandé d'être à jour des vaccinations du calendrier français, celle contre l'hépatite A se discutant selon la durée du séjour. La dengue circule dans les Antilles selon les années : une protection contre les moustiques reste la précaution la plus utile.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "La saison sèche s'étend de décembre à mai, avec un alizé régulier qui rend la navigation facile. Nous privilégions la fin janvier à la mi-avril, quand la lumière est belle et que les îles se parcourent sans contrainte. La houle peut rester forte certains jours, y compris en pleine saison sèche, et c'est elle qui décide de l'île du lendemain. La saison cyclonique court officiellement de juin à novembre, avec un cœur d'activité en août, septembre et octobre.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "L'anglais est la langue officielle et celle de la vie quotidienne, dans les maisons comme dans les restaurants et sur les bateaux. Entre eux, les habitants parlent un créole vincentien, à base anglaise.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Le climat est tropical et les températures varient peu : la moyenne tourne autour de vingt-sept degrés, et les maximales approchent trente et un degrés. L'alizé souffle presque en continu et tempère la chaleur, en particulier sur les côtes au vent. La saison humide s'étend de juin à novembre, avec des averses tropicales et brèves.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Grenadines. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/saint-vincent-et-les-grenadines/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Itinéraire sur mesure dans les Grenadines entre Bequia, Mustique et Canouan",
            "Adresses confidentielles dans les Grenadines : mouillages déserts et tables de Bequia",
            "Hébergements dans les Grenadines : Cotton House, Petit St. Vincent et Canouan Estate",
            "Conciergerie privée 24/7 pour un séjour dans les Grenadines",
            "Expériences dans les Grenadines : snorkeling aux Tobago Cays et navigation à la voile",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables dans les Grenadines",
      heading: "Les îles où l'on jette l'ancre",
      description:
        "L'archipel se parcourt du nord au sud, une île après l'autre, et chacune a son heure. Nous plaçons les étapes pour que le rythme reste celui du bateau.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      initialZoom: 9,
      places: [
        {
          title: "Mustique",
          description:
            "L'île est gérée par une compagnie que se partagent les propriétaires de ses maisons, et l'on n'y débarque pas par hasard. Une centaine de villas se cachent dans la végétation, on circule en voiturette, et tout le monde finit par se retrouver au Basil's Bar, posé sur pilotis au-dessus de l'eau.",
          image: {
            src: "/destination/saint-vincent-et-les-grenadines/map-mustique.png",
            alt: "Voiturette sur un chemin de Mustique entre les villas et la végétation",
          },
          // TODO: verify coords
          coordinates: { lat: 12.8833, lng: -61.1833 },
        },
        {
          title: "Bequia",
          description:
            "C'est l'île des constructeurs de bateaux, et cela se voit dès Port Elizabeth : les coques attendent sur le sable, en chantier ou en réparation. Les voiliers de passage mouillent dans Admiralty Bay, et l'on rejoint Princess Margaret Beach à pied par le sentier qui longe la côte.",
          image: {
            src: "/destination/saint-vincent-et-les-grenadines/map-bequia.png",
            alt: "Port Elizabeth à Bequia et les bateaux au mouillage dans Admiralty Bay",
          },
          // TODO: verify coords
          coordinates: { lat: 13.0072, lng: -61.24 },
        },
        {
          title: "Les Tobago Cays",
          description:
            "Cinq îlots classés en parc marin, séparés par un lagon peu profond où l'eau reste claire toute la journée. On mouille devant Baradal pour nager, on déjeune sur un banc de sable, et l'on ne trouve à terre ni bâtiment ni route.",
          image: {
            src: "/destination/saint-vincent-et-les-grenadines/map-tobago-cays.png",
            alt: "Les cinq îlots des Tobago Cays et le récif Horseshoe vus du ciel",
          },
          // TODO: verify coords
          coordinates: { lat: 12.6333, lng: -61.35 },
        },
        {
          title: "Canouan",
          description:
            "L'île du milieu, plus verte et plus large que ses voisines, avec une longue plage abritée sur sa côte sous le vent. C'est l'étape que l'on choisit quand on préfère une base confortable à un mouillage différent chaque soir.",
          image: {
            src: "/destination/saint-vincent-et-les-grenadines/map-canouan.png",
            alt: "La baie de Carenage à Canouan et ses collines vertes",
          },
          // TODO: verify coords
          coordinates: { lat: 12.7, lng: -61.3333 },
        },
        {
          title: "Petit St. Vincent et Union",
          description:
            "Tout au sud, Petit St. Vincent tient son île à elle seule, à un quart d'heure de bateau de sa voisine. Union garde le mouillage sauvage de Chatham Bay et l'animation du port de Clifton, d'où partent la plupart des sorties vers le parc marin.",
          image: {
            src: "/destination/saint-vincent-et-les-grenadines/map-petit-saint-vincent.png",
            alt: "Cottage isolé au bord de la plage sur l'île de Petit St. Vincent",
          },
          // TODO: verify coords
          coordinates: { lat: 12.5333, lng: -61.3833 },
        },
        {
          title: "Saint-Vincent",
          description:
            "La grande île tient le nord de l'archipel, montagneuse et cultivée, dominée par le volcan de la Soufrière. Le jardin botanique de Kingstown est l'un des plus anciens du continent américain, et l'on y montre encore un arbre à pain issu de ceux que Bligh rapporta du Pacifique.",
          image: {
            src: "/destination/saint-vincent-et-les-grenadines/map-saint-vincent.png",
            alt: "Les reliefs verts de Saint-Vincent au-dessus de la côte caraïbe",
          },
          // TODO: verify coords
          coordinates: { lat: 13.16, lng: -61.2248 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading:
        "Les conseils de nos experts pour votre voyage dans les Grenadines",
      description:
        "Voici quelques observations de terrain qui ne se trouvent pas dans un guide, pour choisir la bonne semaine et comprendre comment l'archipel se vit une fois sur place.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          title: "Arriver dans l'archipel sans y penser",
          cardEyebrow: "Arrivée",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le dernier tronçon se fait en petit avion, et il se cale avec de la marge",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Il n&apos;existe pas de vol direct depuis Paris. Les itinéraires
                passent le plus souvent par la Barbade, puis rejoignent
                l&apos;aéroport d&apos;Argyle sur Saint-Vincent en une
                quarantaine de minutes. Virgin Atlantic dessert aussi
                Saint-Vincent depuis Londres-Heathrow, avec une escale technique
                à la Barbade pendant laquelle on reste à bord.
              </p>
              <p>
                Mustique, Canouan, Bequia et Union ont chacune leur aérodrome,
                mais les liaisons ne sont pas toujours directes et changent
                selon les jours. Le dernier tronçon se fait donc en petit avion,
                par le ferry ou par un bateau privé, selon l&apos;île et selon
                l&apos;heure. Ces petits appareils ne volent pas de nuit et leur
                franchise de bagages est limitée : nous laissons de la marge
                après le long-courrier, quitte à prévoir une nuit d&apos;escale à
                la Barbade quand les horaires ne s&apos;enchaînent pas bien.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous réservons les vols régionaux et les transferts par la mer
                selon votre heure d&apos;arrivée, et nous suivons les
                correspondances le jour même.
              </p>
            </div>
          ),
        },
        {
          title: "Choisir combien d'îles on veut voir",
          cardEyebrow: "Itinéraire",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Deux bases valent mieux que cinq escales, et le bateau fait le reste",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La tentation est de dormir sur une île différente chaque nuit.
                Les traversées sont courtes, mais les valises se refont à chaque
                fois et le séjour se passe à défaire des bagages. Nous
                préférons poser une ou deux bases, à Mustique et à Canouan par
                exemple, et aller chercher les autres îles à la journée.
              </p>
              <p>
                Une semaine suffit pour une base et les Tobago Cays. Dix jours
                permettent d&apos;en tenir deux, avec Bequia au nord et Petit
                St. Vincent au sud, sans jamais naviguer plus d&apos;une heure
                d&apos;affilée.
              </p>
            </div>
          ),
        },
        {
          title: "Quand partir, et quand la mer est la plus douce",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La saison sèche va de décembre à mai, et nous visons la fin de l'hiver",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La saison sèche s&apos;étend de décembre à mai, avec un alizé
                régulier qui rend la navigation facile. Nous privilégions la fin
                janvier à la mi-avril, quand la lumière est belle et que les
                bateaux se répartissent sur l&apos;archipel. La houle peut rester
                forte certains jours, même en pleine saison sèche, et c&apos;est
                elle qui décide de l&apos;île du lendemain.
              </p>
              <p>
                La période des fêtes est la plus demandée, et les maisons de
                Mustique se réservent alors très longtemps à l&apos;avance. La
                saison cyclonique court officiellement de juin à novembre, avec
                un cœur d&apos;activité en août, septembre et octobre.
              </p>
            </div>
          ),
        },
        {
          title: "Comment on circule d'une île à l'autre",
          cardEyebrow: "Sur place",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Bateau privé, ferry ou petit avion : les trois se combinent dans la semaine",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le bateau privé reste la solution la plus souple : on part quand
                on veut, on s&apos;arrête où l&apos;on veut, et l&apos;équipage
                adapte la journée au vent du matin. Les ferries relient
                Saint-Vincent, Bequia, Canouan et Union selon des horaires qui
                changent avec les jours, et les petits avions font gagner du
                temps sur les longues étapes.
              </p>
              <p>
                Sur les îles elles-mêmes, on se déplace en voiturette à
                Mustique, à pied ou en taxi à Bequia. Les distances sont courtes
                partout, et personne ne roule vite.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous retenons le bateau et son équipage pour la durée du séjour,
                et nous ajustons les journées au fil de la semaine.
              </p>
            </div>
          ),
        },
        {
          title: "Ce que Mustique demande",
          cardEyebrow: "Mustique",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "L'île se loue par ses maisons, et cela s'organise longtemps à l'avance",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Mustique n&apos;est pas une île que l&apos;on visite : elle se
                vit depuis l&apos;une de ses maisons ou depuis la Cotton House.
                La compagnie qui la gère tient les locations, et les plus belles
                villas se réservent une saison à l&apos;avance, parfois
                davantage pour les fêtes de fin d&apos;année.
              </p>
              <p>
                Sur place, la discrétion est la règle et tout le monde
                l&apos;applique, y compris ceux que l&apos;on reconnaît. On
                déjeune sur Macaroni Beach, on rentre à l&apos;ombre pour la
                sieste, et l&apos;on se retrouve au Basil&apos;s Bar le soir
                venu.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous traitons directement avec la compagnie de l&apos;île pour
                la maison, le personnel et les transferts depuis
                l&apos;aérodrome.
              </p>
            </div>
          ),
        },
        {
          title: "Venir avec des enfants",
          cardEyebrow: "Famille",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les eaux peu profondes des Tobago Cays et les villas avec personnel",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L&apos;archipel se vit très bien en famille. Les Tobago Cays se
                nagent par deux ou trois mètres de fond, ce qui met les tortues
                à portée des plus jeunes, et les bancs de sable permettent de
                s&apos;arrêter sans mettre pied à terre. Les villas de Canouan
                et de Mustique viennent avec cuisinier et gouvernante, ce qui
                règle la question des horaires et des repas.
              </p>
              <p>
                Les adolescents s&apos;attachent vite au bateau, surtout quand
                l&apos;équipage les laisse tenir la barre. Nous plaçons les
                traversées le matin, quand la mer est la plus douce, et nous
                gardons les après-midi libres.
              </p>
            </div>
          ),
        },
        {
          title: "Les tables et le ravitaillement",
          cardEyebrow: "Tables",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Peu de couverts sur chaque île, et des courses qui se préparent avant",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les îles sont petites et comptent peu de tables. Les adresses de
                Port Elizabeth à Bequia, celles de Mustique et les restaurants
                des maisons se réservent en amont, surtout entre janvier et
                avril. Le déjeuner reste plus souple, et il se prend le plus
                souvent à bord.
              </p>
              <p>
                Pour une villa, les courses se commandent avant l&apos;arrivée :
                le ravitaillement passe par Saint-Vincent ou par la Barbade,
                et certains produits demandent quelques jours. C&apos;est la
                seule vraie contrainte logistique de l&apos;archipel.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous posons les réservations avant votre départ et nous
                transmettons vos préférences à la cuisine de la maison.
              </p>
            </div>
          ),
        },
        {
          title: "Le nord de Saint-Vincent",
          cardEyebrow: "Nature",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La grande île se garde pour une journée à terre, entre forêt et jardins",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Saint-Vincent ne ressemble pas aux Grenadines : elle est
                montagneuse, cultivée, couverte de forêt, et la Soufrière la
                domine au nord. Le jardin botanique de Kingstown, l&apos;un des
                plus anciens du continent américain, se visite en une matinée,
                et les chutes de Dark View se rejoignent par la route côtière.
              </p>
              <p>
                Le sentier du Vermont mène à la forêt où vit le perroquet de
                Saint-Vincent, que l&apos;on ne trouve nulle part ailleurs. La
                marche se fait tôt, avant que la chaleur ne monte.
              </p>
            </div>
          ),
        },
        {
          title: "Ce que l'on met dans sa valise",
          cardEyebrow: "Bagages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Un bagage souple pour le petit avion, et de quoi passer la journée en mer",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les vols régionaux imposent une valise mesurée : mieux vaut un
                bagage souple qu&apos;une grande valise rigide. Les journées se
                passent en maillot, les soirées restent simples partout, un peu
                plus habillées à Mustique et à Canouan.
              </p>
              <p>
                Prévoyez une protection solaire élevée et un vêtement à manches
                longues pour les heures en mer, des chaussures d&apos;eau pour
                les rochers de Petit Tabac, et une protection contre les
                moustiques pour la fin de journée. Le masque et le tuba
                fournis à bord suffisent, mais ceux qui ont les leurs les
                emportent.
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
            "Nous avons nagé avec les tortues le premier matin et nos filles ont voulu y retourner deux fois. L'équipage arrivait chaque jour avec une île différente à proposer.",
          image: {
            src: "/destination/saint-vincent-et-les-grenadines/hero-1.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Les Grenadines en famille, mars 2026", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "La maison de Mustique était prête, la voiturette devant la porte, et personne ne nous a demandé quoi que ce soit de la semaine. C'est exactement ce que nous cherchions.",
          image: {
            src: "/destination/saint-vincent-et-les-grenadines/hero-2.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Mustique, février 2026", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Trois nuits à Petit St. Vincent après une semaine de bateau. On hisse un fanion quand on veut quelque chose, et le reste du temps on ne voit personne.",
          image: {
            src: "/destination/saint-vincent-et-les-grenadines/hero-3.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Les Grenadines, avril 2026", // TODO: replace with real testimonial
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
          question: "Quelle est la meilleure période pour partir aux Grenadines ?",
          answer:
            "La saison sèche s'étend de décembre à mai, avec un alizé régulier qui rend la navigation facile. Nous privilégions la fin janvier à la mi-avril, quand la lumière est belle et que les bateaux se répartissent sur l'archipel. La houle peut rester forte certains jours, y compris en pleine saison sèche : c'est elle qui décide de l'île du lendemain, plutôt qu'un programme écrit à l'avance. La période des fêtes est la plus demandée, et les maisons de Mustique se réservent alors une saison à l'avance. La saison cyclonique court officiellement de juin à novembre, avec un cœur d'activité en août, septembre et octobre.",
        },
        {
          question:
            "Comment se rendre à Saint-Vincent-et-les-Grenadines depuis Paris ?",
          answer:
            "Il n'existe pas de vol direct depuis Paris. Les itinéraires passent le plus souvent par la Barbade, elle-même rejointe via Londres ou via une escale nord-américaine, puis gagnent l'aéroport international d'Argyle sur Saint-Vincent en environ quarante-cinq minutes de vol. Virgin Atlantic relie également Londres-Heathrow à Saint-Vincent, avec une courte escale technique à la Barbade pendant laquelle les passagers restent à bord. Mustique, Canouan, Bequia et Union ont chacune leur aérodrome, mais les liaisons varient selon les jours : on rejoint son île en petit avion, par le ferry ou par un transfert privé. Comptez une journée complète de trajet, et prévoyez de la marge entre le long-courrier et le dernier tronçon, qui ne se fait pas de nuit.",
        },
        {
          question: "Faut-il un visa pour Saint-Vincent-et-les-Grenadines ?",
          answer:
            "Les ressortissants français n'ont pas besoin de visa pour un séjour de moins de six mois. Le passeport doit être valide au moins six mois après la date de retour prévue, et un billet de retour est demandé à l'entrée. Si votre itinéraire comprend une escale aux États-Unis, l'autorisation ESTA est obligatoire, y compris en simple transit, sauf si vous détenez déjà le document américain adéquat. En cas de correspondance à Londres, l'autorisation britannique n'est pas nécessaire tant que vous restez en zone de transit ; elle le devient dès que vous franchissez la frontière.",
        },
        {
          question: "Que faire aux Grenadines en une semaine ?",
          answer:
            "Une semaine tient confortablement sur une base et quelques journées de mer. On garde une journée entière pour le parc marin des Tobago Cays, une autre pour Bequia et ses chantiers de bateaux à Port Elizabeth, et une troisième pour Mayreau et le mouillage de Salt Whistle Bay. Les journées restantes se passent à terre, entre la plage, la table et la sieste. Ceux qui veulent voir le sud ajoutent Petit St. Vincent et Chatham Bay à Union.",
        },
        {
          question: "Peut-on séjourner à Mustique sans y posséder de maison ?",
          answer:
            "Oui. L'île se loue par ses villas, gérées par la compagnie qui administre Mustique, ou se vit depuis la Cotton House, l'ancienne maison de plantation devenue hôtel. Dans les deux cas la réservation passe par l'île elle-même, et les meilleures maisons partent une saison à l'avance, davantage encore pour les fêtes de fin d'année. Il n'y a ni paquebot ni excursion à la journée : on n'y séjourne que si l'on y dort.",
        },
        {
          question: "Quel budget prévoir pour un voyage dans les Grenadines ?",
          answer:
            "Le budget dépend surtout de la maison choisie, de la saison et de la place donnée au bateau. Les fêtes de fin d'année se situent en haut de la gamme, tandis que la fin janvier, février et le mois de mai restent plus mesurés à confort égal. Une villa avec personnel se chiffre à la semaine et selon le nombre de chambres, un bateau à la journée et selon sa taille. Nous chiffrons chaque projet précisément après un premier échange, une fois les dates et les envies posées.",
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
        "On remonte vers la région entière quand on veut relier plusieurs îles par la mer, on choisit Saint-Barthélemy pour ses tables et ses anses sans route, et les Bahamas pour leurs cays et leurs fonds encore plus clairs.",
      slugs: ["caraibes", "saint-barthelemy", "bahamas"],
    },
  ],
};
