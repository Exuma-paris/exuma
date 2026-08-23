import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "philippines",
  name: "Philippines",
  placeKind: "country",
  country: "Philippines",
  genitive: "des Philippines",
  continentSlug: "asie",
  blurb: "El Nido, Coron, Siargao, rizières ifugao",
  keywords: [
    "philippines",
    "palawan",
    "el nido",
    "coron",
    "siargao",
    "boracay",
    "banaue",
    "apo reef",
  ],
  metaTitle: "Philippines : Voyage sur mesure",
  metaDescription:
    "Voyage aux Philippines sur mesure : lagons d'El Nido, île privée de Pamalican, rizières ifugao, Apo Reef. Itinéraire écrit par votre travel designer Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe aux Philippines",
      heading: "Les Philippines, des lagons d'El Nido aux rizières des Ifugao",
      description:
        "Les Philippines se découvrent une île à la fois, et chacune a son tempérament. À Palawan, les falaises de calcaire s'ouvrent sur des lagons que l'on gagne en bateau. Dans la Cordillère, les rizières s'étagent depuis des siècles. C'est cet archipel-là que nous composons pour vous.",
      images: [
        {
          src: "/destination/philippines/hero-1.png",
          alt: "Lagon fermé de la baie de Bacuit à El Nido, au nord de Palawan, aux Philippines",
        },
        {
          src: "/destination/philippines/hero-2.png",
          alt: "Plage de sable blanc et récif de l'île privée de Pamalican dans l'archipel des Cuyo",
        },
        {
          src: "/destination/philippines/hero-3.png",
          alt: "Rizières en terrasses des Ifugao dans la Cordillère de Luçon au lever du jour",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir aux Philippines ?",
      heading:
        "Stéphane, spécialiste des Philippines, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "stephane",
        // TODO: verify quote attribution
        quote:
          "Ce que j'aime aux Philippines, c'est qu'on n'y arrive jamais tout à fait par hasard. Il faut vouloir cette île-là, prendre le petit avion qui s'y pose, monter dans le bateau qui attend au bout de la plage, et c'est précisément ce chemin qui rend l'arrivée si douce. Je construis les voyages pour que ce moment-là existe, à chaque étape.",
        role: "Travel Designer · Philippines",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte des Philippines",
      heading: "Chaque île se laisse apprivoiser à son rythme",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      columns: [
        "Un voyage aux Philippines commence toujours par un choix, et c'est un plaisir plutôt qu'un renoncement. On garde Palawan pour ses lagons, une île du centre pour la douceur de ses plages, et la montagne pour ce qu'elle a d'inattendu. Le reste attend le voyage suivant, et il y en aura un.",
        "La baie de Bacuit se mérite au petit matin. Les falaises de calcaire y sortent de l'eau comme des tours, et les lagons qu'elles abritent ne s'ouvrent que par une brèche étroite, à la nage ou en kayak. Miniloc, Matinloc, Cadlao : les noms se retiennent vite, et l'eau y change de couleur d'une heure à l'autre.",
        "Plus au nord, la Cordillère de Luçon offre tout autre chose. Les Ifugao y cultivent des rizières en terrasses depuis des siècles, et le savoir se transmet encore de père en fils. On y marche dans la fraîcheur, on dort la fenêtre ouverte, et l'on comprend soudain que l'archipel ne se résume pas à ses plages.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/philippines/full-image.png",
        alt: "Tours de calcaire de la baie de Bacuit au large d'El Nido, aux Philippines",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Philippines : l'archipel hors circuit",
      heading: "Plonger sur les épaves de Coron, entre corail et acier",
      theme: "light",
      paragraphs: [
        "Des navires japonais reposent au fond de la baie de Coron depuis la guerre. Le corail mou les a recouverts, les bancs de poissons y ont pris leurs habitudes, et l'on descend dans les coursives comme on visiterait une maison abandonnée. Un guide qui connaît chaque cloison vous précède, lampe à la main.",
        "L'île de Coron, juste en face, cache des lacs d'eau claire entre ses parois. On y accède par un escalier d'une centaine de marches taillé dans la roche, et l'on nage dans une eau qui tiédit à mesure que l'on descend, jusqu'à devenir presque chaude. Les Tagbanua veillent sur ces lacs et les ferment certains jours pour leurs cérémonies. Nous vous y conduisons quand ils sont ouverts, et tôt le matin.",
      ],
      images: [
        {
          src: "/destination/philippines/split-1.png",
          alt: "Plongeur à l'intérieur d'une épave japonaise de la baie de Coron",
        },
        {
          src: "/destination/philippines/split-2.png",
          alt: "Falaises de karst et eau claire du lac Kayangan sur l'île de Coron",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/philippines/xp-lagons-el-nido-1.png",
          alt: "Bateau à balancier à l'entrée d'un lagon fermé de la baie de Bacuit à l'aube",
        },
        right: {
          src: "/destination/philippines/xp-lagons-el-nido-2.png",
          alt: "Kayak dans le Big Lagoon d'El Nido entre les parois de calcaire",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Les lagons secrets d'El Nido en bateau privé",
        columns: [
          "Le bateau quitte la plage avant le jour, quand la baie est encore lisse et que les moteurs se taisent. Le capitaine sait dans quel ordre visiter, et c'est tout l'art de la journée : arriver au Big Lagoon quand personne n'y est encore, glisser en kayak entre les parois de calcaire, écouter l'eau plutôt que le hors-bord.",
          "Le Secret Lagoon porte bien son nom. On y entre à la nage, par une ouverture dans la falaise à peine plus large qu'un homme, et l'on débouche dans un bassin fermé de tous côtés où le ressac n'arrive qu'assourdi. Quand les premiers bateaux se font entendre dans la baie, nous sommes déjà ailleurs, sur une plage de Matinloc que les circuits ne desservent pas.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités aux Philippines",
      heading: "Plonger, marcher dans les rizières, survoler les lagons",
      description:
        "Un récif immense au large de Mindoro, des terrasses de riz que les familles entretiennent à la main, et un vol au ras des lagons de Palawan. Trois façons d'entrer dans l'archipel, et nous les organisons de bout en bout.",
      slugs: [
        "apo-reef-plongee-privee",
        "rizieres-ifugao",
        "palawan-hydravion-prive",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Où séjourner aux Philippines",
      description:
        "Une île privée que l'on rejoint par les airs, une maison sans clé ni carte au bord de l'eau à Siargao, une forêt suspendue au-dessus des plages de Boracay. Trois manières d'habiter l'archipel.",
      slugs: ["amanpulo", "shangri-la-boracay", "nay-palad-hideaway"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage aux Philippines",
      description:
        "Vol, décalage, formalités et saisons : de quoi caler les dates d'un voyage aux Philippines en toute tranquillité.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Air France dessert Manille en direct depuis Paris selon la saison. Comptez environ 13h30 sans escale, 16 à 19h avec.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Les Philippines restent à UTC+8 toute l'année, sans changement d'heure. Comptez sept heures d'avance en hiver, six en été.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Le peso philippin. Les cartes sont courantes dans les hôtels ; garder des espèces reste utile hors des grandes villes.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          // TODO: verify formalités auprès du consulat avant publication
          description:
            "Sans visa jusqu'à 30 jours. eTravel obligatoire avant l'arrivée. Passeport valable 6 mois au-delà du séjour, billet retour requis.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Depuis la France, aucune vaccination spécifique systématiquement exigée. Calendrier vaccinal à jour recommandé, hépatite A selon le séjour.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "La saison sèche court de décembre à mai. Nous privilégions janvier à avril, sachant que le climat varie selon les îles.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "Le filipino et l'anglais sont officiels. Le cebuano, l'ilocano, l'hiligaynon et d'autres langues régionales sont largement parlés.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Climat tropical, chaud et humide. Les régions montagneuses de Luçon sont nettement plus fraîches : prévoir une petite laine.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Philippines. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/philippines/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Itinéraire sur mesure aux Philippines entre Palawan, Siargao et la Cordillère",
            "Adresses confidentielles aux Philippines : maisons d'île et plages hors circuit",
            "Hébergements aux Philippines : Amanpulo et Nay Palad Hideaway",
            "Conciergerie privée 24/7 pour un voyage aux Philippines",
            "Expériences immersives aux Philippines : lagons d'El Nido et récif d'Apo Reef",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables aux Philippines",
      heading: "Six îles que l'on n'a pas envie de quitter",
      description:
        "De Palawan à Siargao, six étapes que l'on relie par les airs et par l'eau, et que nous enchaînons dans l'ordre qui vous convient.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      initialZoom: 6,
      places: [
        {
          title: "El Nido et la baie de Bacuit",
          description:
            "Des falaises de calcaire sortent de l'eau et referment des lagons sur eux-mêmes. On y entre par une brèche étroite, en kayak ou à la nage, et l'eau y prend un vert que l'on ne revoit nulle part.",
          image: {
            src: "/destination/philippines/map-el-nido.png",
            alt: "Îles de calcaire de la baie de Bacuit vues depuis El Nido à Palawan",
          },
          // TODO: verify coords
          coordinates: { lat: 11.1957, lng: 119.416 },
        },
        {
          title: "Pamalican, l'île privée",
          description:
            "Une île de sable blanc ceinturée d'un récif continu, que l'on rejoint par les airs. Amanpulo l'occupe seule, et l'on peut y marcher longtemps sans croiser personne.",
          image: {
            src: "/destination/philippines/map-pamalican.png",
            alt: "Île privée de Pamalican et son récif dans l'archipel des Cuyo",
          },
          // TODO: verify coords
          coordinates: { lat: 11.0521, lng: 120.9838 },
        },
        {
          title: "Coron et ses épaves",
          description:
            "Des navires dorment au fond de la baie depuis la guerre, devenus récifs à leur tour. Sur l'île, des lacs d'eau tiède se cachent derrière la roche.",
          image: {
            src: "/destination/philippines/map-coron.png",
            alt: "Falaises karstiques de l'île de Coron au nord de Palawan",
          },
          // TODO: verify coords
          coordinates: { lat: 11.9986, lng: 120.2044 },
        },
        {
          title: "Boracay et White Beach",
          description:
            "Le sable de White Beach est d'une finesse rare et la mer y reste calme du matin au soir. Au nord, les criques de Punta Bunga offrent le même sable dans le silence.",
          image: {
            src: "/destination/philippines/map-boracay.png",
            alt: "Sable blanc de White Beach sur l'île de Boracay aux Philippines",
          },
          // TODO: verify coords
          coordinates: { lat: 11.9674, lng: 121.9248 },
        },
        {
          title: "Siargao, la vague et les cocotiers",
          description:
            "La vague de Cloud 9 a fait la réputation de l'île, mais on y vient aussi pour la lagune de Sugba et les routes bordées de palmiers. Le temps y ralentit sans qu'on s'en aperçoive.",
          image: {
            src: "/destination/philippines/map-siargao.png",
            alt: "Lagune de Sugba et palmiers de l'île de Siargao aux Philippines",
          },
          // TODO: verify coords
          coordinates: { lat: 9.7889, lng: 126.1583 },
        },
        {
          title: "Banaue et les terrasses ifugao",
          description:
            "Les rizières montent à flanc de montagne comme un escalier sans fin. L'air y est frais, le silence presque complet, et l'on y dort mieux qu'ailleurs.",
          image: {
            src: "/destination/philippines/map-banaue.png",
            alt: "Rizières en terrasses de Banaue dans la Cordillère de Luçon",
          },
          // TODO: verify coords
          coordinates: { lat: 16.9089, lng: 121.0578 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage aux Philippines",
      description:
        "Huit observations de terrain qui ne figurent pas dans un guide : la bonne saison, la façon de passer d'une île à l'autre, et ce qui se prépare avant de partir.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          title: "La saison qui rend tout plus facile",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Il y a une longue fenêtre sèche, et c'est celle sur laquelle nous construisons les voyages",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L&apos;archipel vit au rythme de deux saisons. La saison sèche court
                de décembre à mai, et c&apos;est entre janvier et avril que la
                mer se calme, que le ciel se dégage et que l&apos;eau devient
                limpide. Le climat varie cependant d&apos;une île à
                l&apos;autre, et nous en tenons compte étape par étape.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                La fin de l&apos;été et le début de l&apos;automne sont plus
                exposés aux tempêtes, surtout au nord de Luçon et à l&apos;est
                de Mindanao. Palawan est nettement plus abritée. Nous vous
                orientons vers les îles qui restent belles à la période où vous
                pouvez partir, plutôt que de forcer un itinéraire dans une
                mauvaise fenêtre.
              </p>
            </div>
          ),
        },
        {
          title: "Passer d'une île à l'autre",
          cardEyebrow: "Transport",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le petit avion et le bateau font partie du voyage, et c'est souvent le meilleur moment",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                On se déplace ici par les airs et par l&apos;eau. El Nido a son
                propre aérodrome, desservi par de petits appareils depuis
                Manille. Amanpulo dispose de son avion. Siargao se rejoint
                généralement par Cebu, et des liaisons directes existent selon
                les périodes et les compagnies.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Nous ménageons toujours de l&apos;air entre deux vols
                intérieurs, et jamais de vol intérieur le jour du retour vers
                Paris. Les petits appareils limitent les bagages : nous
                laissons les valises en consigne à Manille et repartons en sac
                souple, ce qui simplifie aussi les embarquements en bateau.
              </p>
            </div>
          ),
        },
        {
          title: "Les moustiques, la vraie vigilance",
          cardEyebrow: "Santé",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Rien de compliqué, mais quelques gestes à prendre dès le premier soir",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le paludisme a reculé presque partout dans l&apos;archipel. Un
                risque subsiste dans les zones rurales et forestières de
                Palawan, tandis que les stations de la côte et les îles au large
                sont considérées comme très peu exposées. La dengue, elle, peut
                se rencontrer toute l&apos;année.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Depuis la France, aucune vaccination spécifique n&apos;est
                systématiquement exigée, mais des exigences peuvent
                s&apos;appliquer si vous arrivez après un séjour dans certains
                pays à risque. Prenez conseil auprès d&apos;un centre de
                vaccinations internationales quelques semaines avant le départ :
                ce qui est recommandé dépend de votre itinéraire, pas seulement
                du pays.
                Sur place, un bon répulsif, des manches longues au crépuscule et
                la climatisation la nuit suffisent le plus souvent.
              </p>
            </div>
          ),
        },
        {
          title: "Garder des espèces sur soi",
          cardEyebrow: "Argent",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les cartes passent dans les hôtels, beaucoup moins au bout du ponton",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                À Manille et à Cebu, les cartes étrangères sont très largement
                acceptées. Ailleurs, une partie de la journée se règle en
                pesos : les bateaux, les guides, les droits d&apos;entrée des
                lagons et les petites taxes locales. Les distributeurs des
                îles peuvent limiter les retraits.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Retirez de quoi tenir avant le premier vol intérieur, en petites
                coupures : les grosses sont difficiles à faire changer dans un
                village. Nous prévoyons systématiquement cette réserve dans le
                budget des journées en mer, pour que la question ne se pose pas
                sur le ponton.
              </p>
            </div>
          ),
        },
        {
          title: "Les terres des communautés",
          cardEyebrow: "Usages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Plusieurs des plus beaux endroits appartiennent à ceux qui y vivent, et cela change tout",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les Tagbanua détiennent un titre sur l&apos;île de Coron et ses
                lacs. Les Ifugao possèdent et cultivent les terrasses de la
                Cordillère. Ces lieux ne sont pas des parcs publics :
                l&apos;accès se demande, se règle à la communauté, et peut se
                refermer certains jours pour des raisons rituelles.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Nous passons par les guides mandatés par les communautés
                elles-mêmes. C&apos;est plus long à organiser, et le plaisir
                n&apos;est pas le même : on entre dans un village avec
                quelqu&apos;un qui en vient, et l&apos;on comprend beaucoup plus
                de ce que l&apos;on voit.
              </p>
            </div>
          ),
        },
        {
          title: "Nager avec les requins-baleines",
          cardEyebrow: "Nature",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Deux endroits proposent la même rencontre, et un seul la laisse au hasard",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                À Oslob, sur Cebu, les requins-baleines sont nourris chaque
                matin par les bateaux, ce qui les retient sur place et modifie
                leur comportement. À Donsol, dans la baie de Sorsogon, la
                rencontre se fait sur des animaux libres, de passage au
                printemps, avec un nombre de bateaux limité et un observateur à
                bord.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Nous organisons cette sortie à Donsol, et nous le disons
                d&apos;emblée : certaines matinées passent sans rencontre.
                C&apos;est le prix d&apos;un endroit qui n&apos;a rien
                domestiqué, et l&apos;émotion, quand l&apos;animal remonte le
                long du bateau, n&apos;a rien à voir avec un rendez-vous
                garanti.
              </p>
            </div>
          ),
        },
        {
          title: "Dans ma valise",
          cardEyebrow: "Bagages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Un sac souple, des chaussons de récif, et de quoi se couvrir dans la montagne",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les petits avions et les bateaux à balancier s&apos;accommodent
                mal des valises rigides. Un sac souple et une pochette étanche
                pour les journées en mer suffisent amplement. Les récifs
                affleurent et sont coupants : des chaussons de récif rendent
                plus service que des tongs.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Si le voyage monte dans la Cordillère, glissez une polaire et
                une veste imperméable : les soirées y sont fraîches et
                l&apos;humidité fait le reste. Prévoyez aussi une crème solaire
                minérale, demandée par plusieurs aires marines protégées.
              </p>
            </div>
          ),
        },
        {
          title: "Rester plutôt que courir",
          cardEyebrow: "Itinéraire",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "L'archipel récompense ceux qui s'installent, bien plus que ceux qui enchaînent",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                On peut vouloir tout voir. C&apos;est souvent le meilleur moyen
                de ne rien garder. Un voyage de deux semaines respire
                confortablement avec trois destinations : Palawan, une île du
                centre, puis Siargao ou la Cordillère selon ce qui vous attire.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Nous préférons retirer une étape et offrir deux nuits de plus
                ailleurs. Les plus belles sorties en mer se décident la veille
                au soir, en regardant le vent avec le capitaine, et cela demande
                simplement d&apos;être encore là le lendemain.
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
      cta: { label: "Construire ce voyage", href: "/reserver" },
      testimonials: [
        {
          // TODO: replace with real testimonial
          quote:
            "Partir avant le jour, c'est ce qui a tout changé. Nous avons eu le Big Lagoon pour nous, en kayak, dans un silence complet. Quand les autres bateaux sont arrivés, nous étions déjà sur une plage que personne ne connaissait. Notre capitaine avait pensé la journée dans cet ordre-là.",
          image: {
            src: "/destination/philippines/hero-1.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Philippines, Palawan et Coron, 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Amanpulo, c'est une île pour soi. Nous n'avons croisé personne sur la plage de l'est en une semaine, et les enfants ont fini par connaître le récif mieux que nous. Même le vol depuis Manille fait partie du souvenir.",
          image: {
            src: "/destination/philippines/hero-2.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Philippines en famille, 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "On monte à Batad à pied, et on entend l'eau courir dans les canaux avant de voir les terrasses. L'aîné qui nous accompagnait a raconté comment sa famille les entretient depuis toujours. Après les lagons, nous ne pensions pas que ce serait ce souvenir-là qui resterait.",
          image: {
            src: "/destination/philippines/hero-3.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Philippines, Palawan et Cordillère, 2025", // TODO: replace with real testimonial
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
            "Quelle est la meilleure période pour partir aux Philippines ?",
          answer:
            "La saison sèche court de décembre à mai. Nous privilégions janvier à avril, la fenêtre la plus stable, quand la mer se calme et que l'eau devient très claire. Le climat varie cependant d'une île à l'autre. La fin de l'été et le début de l'automne sont plus exposés aux tempêtes, surtout au nord de Luçon et à l'est de Mindanao, tandis que Palawan reste nettement plus abritée.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris ?",
          answer:
            "Air France dessert Manille en direct depuis Paris selon la saison, pour environ 13h30 de vol. Avec une correspondance, à Dubaï, Doha, Istanbul, Singapour ou Séoul, comptez plutôt 16 à 19 heures de trajet. L'arrivée se fait à l'aéroport Ninoy-Aquino. Un vol intérieur prend ensuite le relais pour rejoindre la première île, et nous le plaçons de façon à ce que la journée reste confortable.",
        },
        {
          question: "Faut-il un visa pour aller aux Philippines ?",
          answer:
            "Les ressortissants français sont dispensés de visa pour un séjour touristique de moins de trente jours. L'inscription en ligne sur le portail eTravel est en revanche obligatoire avant l'arrivée : c'est la formalité que l'on oublie le plus souvent. Le passeport doit être valable au moins six mois au-delà du séjour prévu, et un billet de retour ou de continuation est requis. Nous vérifions le tout avec vous avant le départ.",
        },
        {
          question: "Que faire aux Philippines en 15 jours ?",
          answer:
            "Quinze jours permettent de vivre trois îles sans se presser. Un déroulé qui fonctionne bien : Palawan pour les lagons d'El Nido et les épaves de Coron, une île du centre pour la douceur et la plage, puis Siargao ou la Cordillère selon ce qui vous attire. Entre deux étapes, nous prévoyons une nuit agréable qui coupe le trajet plutôt qu'une journée de transit, et nous gardons du temps libre sur chaque île.",
        },
        {
          question:
            "Les Philippines sont-elles adaptées aux familles avec enfants ?",
          answer:
            "Oui, et c'est même l'une des destinations d'Asie les plus faciles avec des enfants. L'anglais est parlé très largement, l'accueil des familles va de soi, et les lagons abrités se nagent dès le plus jeune âge. Les îles-hôtels comme Amanpulo suppriment toute logistique quotidienne. Nous gardons alors deux étapes plutôt que trois, et nous allongeons les séjours pour que chacun trouve son rythme.",
        },
        {
          question: "Quel budget prévoir pour un voyage aux Philippines ?",
          answer:
            "Le budget se joue surtout sur trois postes : les vols intérieurs ou les charters privés, les quelques maisons de l'archipel qui tiennent un véritable niveau de service, et la privatisation des bateaux et des guides. La vie locale, elle, reste douce. Nous construisons chaque voyage sur mesure et vous présentons un budget détaillé avant toute réservation, sans engagement.",
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
        "D'autres îles de l'océan Indien et d'Asie du Sud où l'on se déplace au fil de l'eau, à composer sur mesure avec votre travel designer.",
      slugs: ["maldives", "sri-lanka", "seychelles"],
    },
  ],
};
