import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "emirats-arabes-unis",
  name: "Émirats arabes unis",
  placeKind: "country",
  country: "Émirats arabes unis",
  genitive: "des Émirats arabes unis",
  continentSlug: "proche-orient",
  blurb: "Abu Dhabi, Sharjah, le Rub al-Khali, Dubaï",
  keywords: [
    "emirats-arabes-unis",
    "abu dhabi",
    "dubai",
    "sharjah",
    "rub al khali",
    "liwa",
    "ras al khaimah",
    "fauconnerie",
    "desert",
  ],
  metaTitle: "Émirats arabes unis : Voyage sur mesure",
  metaDescription:
    "Voyage aux Émirats arabes unis sur mesure : Rub al-Khali, Abu Dhabi, Sharjah. Itinéraire écrit par votre travel designer Exuma, conciergerie privée 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe aux Émirats arabes unis",
      heading: "Les Émirats arabes unis, d'Abu Dhabi aux dunes de Liwa",
      description:
        "Les Émirats se laissent apprivoiser en deux temps. Il y a d'abord les villes, où les musées et les souks s'ouvrent dans la douceur du matin. Puis vient le désert, qui donne au voyage son silence et ses plus belles heures. Nous vous y conduisons dans cet ordre, et c'est ce qui change tout.",
      images: [
        {
          src: "/destination/emirats-arabes-unis/hero-1.png",
          alt: "Dunes du désert de Liwa au lever du jour aux Émirats arabes unis",
        },
        {
          src: "/destination/emirats-arabes-unis/hero-2.png",
          alt: "Dôme ajouré du Louvre Abu Dhabi filtrant la lumière sur l'eau",
        },
        {
          src: "/destination/emirats-arabes-unis/hero-3.png",
          alt: "Faucon posé sur le gant d'un fauconnier émirien dans le désert",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Notre rôle dans ce voyage",
      heading: "Un seul interlocuteur, du premier échange jusqu'au retour",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "taina",
        // TODO: verify quote attribution
        quote:
          "Les Émirats se révèlent quand on prend le temps de les regarder autrement. Une réserve de désert où seuls les hôtes entrent, un musée que l'on traverse avant l'arrivée du public, un fauconnier qui vous reçoit chez lui. Ce sont ces portes-là que nous ouvrons, et elles font tout le voyage.",
        role: "Travel Designer · Émirats arabes unis",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Ouverture",
      heading: "Le désert d'Arabie, à l'heure douce de l'hiver",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      columns: [
        "Un voyage aux Émirats arabes unis commence vraiment à Liwa, cette oasis de palmiers posée à la lisière du Rub al-Khali. La route s'arrête, le sable prend le relais et le silence s'installe. Les Bédouins appellent cette immensité le Quart Vide, et le nom dit bien ce que l'on y trouve. On s'y sent minuscule, et c'est un plaisir.",
        "Le reste du voyage se construit autour de ce contraste. Abu Dhabi retient pour son Louvre signé Jean Nouvel et pour la mosquée Cheikh Zayed, dont le marbre blanc rosit à la tombée du jour. Sharjah a gardé ses souks et ses maisons de marchands de perles, et l'on s'y promène le soir dans une ville qui prend son temps. Le désert vient ensuite, dans la réserve protégée voisine de Dubaï ou plus au sud dans les grandes dunes. C'est ce pays-là que nous montrons.",
        "« Les Émirats montrent volontiers leurs tours et gardent leurs oasis pour ceux qui les cherchent. Tout le voyage tient dans ce passage de l'une à l'autre. »",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/emirats-arabes-unis/full-image.png",
        alt: "Dunes du Rub al-Khali au coucher du soleil aux Émirats arabes unis",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Sharjah, l'émirat des perliers",
      heading: "Sharjah, l'émirat où le temps ralentit",
      theme: "light",
      paragraphs: [
        "À Sharjah, les maisons des marchands de perles ont été relevées une à une, dans la pierre de corail et le plâtre de chaux d'autrefois. Elles s'ouvrent sur des cours plantées, où l'ombre et un filet d'air suffisent à rafraîchir la journée. Les tours à vent qui coiffent les toits captent la brise et la font descendre dans les pièces, comme elles le faisaient bien avant le pétrole.",
        "L'émirat a conservé ses ateliers d'orfèvres et ses portes en teck rapportées d'Inde. Le musée de la civilisation islamique occupe un ancien marché couvert d'un dôme doré, et l'on y déambule dans un silence de bibliothèque. Le soir, le quartier du Cœur de Sharjah se remplit d'odeurs de cardamome et de pain chaud.",
        "On en repart avec le sentiment d'avoir vu le pays d'avant.",
      ],
      images: [
        {
          src: "/destination/emirats-arabes-unis/split-1.png",
          alt: "Cour intérieure d'une maison de marchand perlier à Sharjah",
        },
        {
          src: "/destination/emirats-arabes-unis/split-2.png",
          alt: "Tour à vent barjeel au-dessus des toits du vieux Sharjah",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/emirats-arabes-unis/xp-louvre-abu-dhabi-1.png",
          alt: "Dôme ajouré du Louvre Abu Dhabi vu depuis les bassins",
        },
        right: {
          src: "/destination/emirats-arabes-unis/xp-louvre-abu-dhabi-2.png",
          alt: "Galerie déserte du Louvre Abu Dhabi avant l'ouverture",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Le Louvre Abu Dhabi, ouvert pour vous avant le public",
        columns: [
          "Nous vous conduisons au Louvre Abu Dhabi avant l'ouverture, quand les galeries sont encore vides. Sous la coupole de Jean Nouvel, la lumière traverse les étoiles d'aluminium et se pose au sol en une pluie de taches claires qui se déplace toute la matinée. Le musée est à vous, et l'on entend ses propres pas sur la pierre.",
          "Un conservateur vous accompagne et suit le fil d'une idée plutôt que l'ordre des salles. Les collections mêlent les civilisations par époques, si bien qu'un bouddha, une Torah manuscrite et un Van Gogh se répondent dans la même galerie. On ressort au moment où les portes s'ouvrent, avec la sensation d'avoir eu le lieu pour soi.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités aux Émirats arabes unis",
      heading: "Les moments dont on reparle au retour",
      description:
        "Un vol en montgolfière au lever du jour, une sortie sur un dhow perlier à Al Rams, une nuit sous la tente au cœur du désert. Nous vous ouvrons ces portes, vous n'avez qu'à en profiter.",
      slugs: [
        "montgolfiere-faucon-al-marmoom",
        "perles-suwaidi-ras-al-khaimah",
        "bivouac-rub-al-khali",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements aux Émirats arabes unis",
      heading: "Trois adresses où l'on se sent chez soi",
      description:
        "Une réserve de désert réservée à ses seuls résidents, une forteresse de terre ocre face aux grandes dunes, une maison de perliers dans le vieux Sharjah. Nous les connaissons toutes les trois.",
      slugs: ["al-maha", "qasr-al-sarab", "al-bait-sharjah"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Avant le départ",
      heading: "Préparer votre voyage aux Émirats arabes unis",
      description:
        "Temps de vol, décalage, monnaie, formalités et meilleure saison : l'essentiel pour préparer le voyage sereinement.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Comptez environ 7 heures en vol direct depuis Paris vers Dubaï ou Abu Dhabi. Les deux villes sont reliées entre elles par une autoroute directe.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Les Émirats restent à UTC+4 toute l'année, sans changement d'heure. Ils ont donc deux heures d'avance sur la France métropolitaine en été et trois heures en hiver.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Le dirham des Émirats (AED), dont la parité avec le dollar est fixe. Les cartes sont très largement acceptées, mais il est utile de conserver un peu d'espèces pour les souks et les taxis.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Les ressortissants français sont dispensés de visa pour un court séjour. Le passeport doit en revanche être valable au moins six mois à la date d'entrée aux Émirats.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin n'est exigé à l'entrée pour un voyageur venant de France. L'Institut Pasteur recommande d'être à jour du calendrier vaccinal et d'y ajouter l'hépatite A, d'autres vaccinations pouvant se justifier selon la durée et les conditions du séjour.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "Nous privilégions les mois de novembre à mars, aux journées douces et aux nuits fraîches dans le désert. Avril et octobre sont également agréables. Le cœur de l'été est très chaud, surtout sur la côte où l'humidité est forte.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "L'arabe est la langue officielle du pays. L'anglais y est pratiqué de façon très courante, dans les hôtels comme dans les commerces et les taxis.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Le climat est désertique, avec des hivers doux et secs et des étés très chauds. La côte du Golfe est plus humide, tandis que l'intérieur et les monts Hajar connaissent des nuits nettement plus fraîches. Les pluies sont rares et se concentrent en hiver.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Émirats. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/emirats-arabes-unis/bento-${
            ["map", "adresses", "hebergements", "conciergerie", "experiences"][i]
          }.png`,
          alt: [
            "Carte d'un itinéraire sur mesure aux Émirats arabes unis",
            "Ruelle du vieux quartier d'Al Fahidi à Dubaï au petit matin",
            "Villa de désert ouverte sur les dunes de la réserve de Dubaï",
            "Concierge coordonnant un transfert privé entre Dubaï et Abu Dhabi",
            "Table dressée sur le sable au crépuscule dans le Rub al-Khali",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Que voir aux Émirats arabes unis",
      heading: "Les lieux que nous aimons faire découvrir",
      description:
        "Abu Dhabi, Liwa, Sharjah, la réserve de Dubaï, le Jebel Jais et la crique de Dubaï. Chacune de ces étapes a son caractère, et c'est autour d'elles que s'organisent la plupart de nos itinéraires.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      initialZoom: 7,
      places: [
        {
          title: "Abu Dhabi, le Louvre et la mosquée",
          description:
            "La ville s'est offert un Louvre sous coupole et l'une des plus belles mosquées de la région, dont le marbre blanc rosit au coucher du soleil. On y flâne aussi le soir sur la corniche, face aux eaux du Golfe.",
          image: {
            src: "/destination/emirats-arabes-unis/map-abu-dhabi.png",
            alt: "Coupole ajourée du Louvre Abu Dhabi au-dessus des bassins",
          },
          coordinates: { lat: 24.5339, lng: 54.398 }, // TODO: verify coords
        },
        {
          title: "Liwa, la porte du Quart Vide",
          description:
            "Une oasis de palmiers à la lisière du Rub al-Khali, avec les plus hautes dunes du pays juste derrière. Le sable y prend une teinte orangée en fin de journée, et le silence fait le reste.",
          image: {
            src: "/destination/emirats-arabes-unis/map-liwa.png",
            alt: "Dunes géantes de Moreeb en bordure de l'oasis de Liwa",
          },
          coordinates: { lat: 23.1333, lng: 53.7833 }, // TODO: verify coords
        },
        {
          title: "Sharjah, le Cœur de Sharjah",
          description:
            "Le vieux quartier des marchands de perles se parcourt à pied, d'une cour à l'autre, entre les ateliers d'orfèvres et les étals d'épices. L'atmosphère y a gardé quelque chose d'ancien.",
          image: {
            src: "/destination/emirats-arabes-unis/map-sharjah.png",
            alt: "Maisons de corail restaurées du Cœur de Sharjah",
          },
          coordinates: { lat: 25.3463, lng: 55.4209 }, // TODO: verify coords
        },
        {
          title: "La réserve de Dubaï",
          description:
            "Un territoire de dunes et d'acacias protégé, où vivent les oryx d'Arabie et les gazelles des sables. La barrière ne s'ouvre que pour les hôtes des lodges, ce qui explique le calme des lieux.",
          image: {
            src: "/destination/emirats-arabes-unis/map-reserve-dubai.png",
            alt: "Oryx d'Arabie dans la réserve naturelle du désert de Dubaï",
          },
          coordinates: { lat: 24.8153, lng: 55.6683 }, // TODO: verify coords
        },
        {
          title: "Ras al-Khaimah et le Jebel Jais",
          description:
            "Le sommet le plus haut du pays, dans les monts Hajar, où l'air se rafraîchit à mesure que la route s'élève. La vue porte au loin sur des vallées de calcaire nu, et l'on y respire un autre climat.",
          image: {
            src: "/destination/emirats-arabes-unis/map-jebel-jais.png",
            alt: "Route en lacets du Jebel Jais dans les monts Hajar",
          },
          coordinates: { lat: 25.9459, lng: 56.1394 }, // TODO: verify coords
        },
        {
          title: "La crique de Dubaï, Al Fahidi",
          description:
            "Le Dubaï d'avant les tours, avec ses maisons basses, ses barques qui traversent la crique et ses souks de l'or et des épices. La promenade y est un plaisir en fin d'après-midi.",
          image: {
            src: "/destination/emirats-arabes-unis/map-dubai-creek.png",
            alt: "Barques abras traversant la crique de Dubaï devant Al Fahidi",
          },
          coordinates: { lat: 25.2636, lng: 55.2988 }, // TODO: verify coords
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Ce que les guides ne disent pas",
      heading: "Les conseils de nos experts pour votre voyage aux Émirats",
      description:
        "Quelques observations de terrain qui aident à choisir une étape, ou à comprendre pourquoi nous l'inscrivons à un itinéraire.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          title: "Le désert à la saison douce",
          cardEyebrow: "Saison",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "L'hiver émirien est la belle saison des dunes : journées tempérées, nuits fraîches et lumière basse.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                De novembre à mars, le désert se vit pleinement. Les journées
                restent tempérées, la lumière reste basse une bonne partie de la
                matinée, et les nuits deviennent assez fraîches pour qu'une
                veste soit agréable autour du feu. C'est la saison où les
                campements ouvrent et où les dunes prennent leurs plus belles
                couleurs.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous plaçons les étapes de désert dans cette fenêtre, et nous
                calons les sorties de plein air au lever du jour ou en fin
                d'après-midi, quand la chaleur retombe.
              </p>
            </div>
          ),
        },
        {
          title: "Le Dubaï d'avant les tours",
          cardEyebrow: "Ville",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Sur les deux rives de la crique, les maisons basses d'Al Fahidi et les souks racontent l'autre Dubaï.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Tout le monde connaît la silhouette de Downtown, et bien peu
                traversent la crique. C'est pourtant là que Dubaï se raconte le
                mieux. Les barques font la navette d'une rive à l'autre, les
                entrepôts de dattes et d'épices ouvrent sur l'eau, et les
                maisons basses d'Al Fahidi abritent aujourd'hui des galeries et
                des cafés dans leurs cours.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Gardez cette promenade pour la fin d'après-midi, quand la
                lumière baisse et que les souks se remplissent. Une nuit à Dubaï
                suffit souvent à en profiter.
              </p>
            </div>
          ),
        },
        {
          title: "Abu Dhabi mérite qu'on s'y attarde",
          cardEyebrow: "Culture",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Le Louvre, la mosquée Cheikh Zayed et l'île de Saadiyat gagnent à être vus sur deux journées.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La plupart des programmes traitent Abu Dhabi comme une sortie à
                la journée, et le rythme s'en ressent. Le Louvre demande une
                bonne matinée. La mosquée Cheikh Zayed se visite tôt ou à la
                tombée du jour, quand le marbre change de couleur. Et l'île de
                Saadiyat garde des plages tranquilles où les tortues viennent
                pondre.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous prévoyons deux nuits sur place et nous vous faisons entrer
                au musée avant l'ouverture, accompagné d'un conservateur. Le
                reste se découvre en voiture avec chauffeur, sans horaires à
                tenir.
              </p>
            </div>
          ),
        },
        {
          title: "Sharjah, la belle surprise du voyage",
          cardEyebrow: "Émirat",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "L'émirat voisin a gardé ses cours, ses souks et le seul quartier de perliers restauré du pays.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Sharjah a fait le choix de restaurer son patrimoine plutôt que
                de bâtir en hauteur, et cela se sent dès les premières ruelles.
                Le quartier des marchands de perles a retrouvé ses cours et ses
                tours à vent. Le musée de la civilisation islamique, installé
                sous un dôme doré, tient la comparaison avec les grandes
                collections de la région.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Une nuit sur place change la perception du pays. On y dîne dans
                une cour, au calme, et le contraste avec Dubaï fait tout le
                plaisir du voyage.
              </p>
            </div>
          ),
        },
        {
          title: "Ce que l'on porte, ce que l'on boit",
          cardEyebrow: "Usages",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Une tenue couvrante dans les lieux de culte et les souks, et l'alcool servi dans les hôtels.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les usages sont simples et rarement expliqués. Dans les
                mosquées, les femmes couvrent les cheveux, les bras et les
                jambes ; la mosquée Cheikh Zayed prête des abayas à l'entrée.
                Dans les souks et les quartiers anciens, une tenue couvrante est
                appréciée. L'alcool se sert dans les hôtels et les clubs privés
                de Dubaï et d'Abu Dhabi, tandis que l'émirat de Sharjah a choisi
                de s'en passer.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Une chemise de lin à manches longues et un foulard rendent
                service, autant contre le soleil que par convenance. Pendant le
                ramadan, on attend le soir pour manger et boire en public.
              </p>
            </div>
          ),
        },
        {
          title: "Les réserves de désert et leurs hôtes",
          cardEyebrow: "Nature",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "La réserve du désert de Dubaï s'ouvre à ses seuls résidents, et c'est ce qui en fait le calme.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La Dubai Desert Conservation Reserve protège une grande étendue
                de dunes et d'acacias, et sa barrière ne s'ouvre que pour les
                résidents des lodges et leurs guides. C'est ce qui explique
                qu'on y croise des oryx et des gazelles à quelques mètres, dans
                un silence complet, alors que la ville est toute proche.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous réservons dans les maisons qui donnent cet accès et
                organisons les sorties avec les naturalistes de la réserve, au
                lever du jour.
              </p>
            </div>
          ),
        },
        {
          title: "Le vendredi, un rythme à part",
          cardEyebrow: "Rythme",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "La prière de la mi-journée ralentit la ville, et les horaires des musées s'en trouvent décalés.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le week-end émirien tombe désormais le samedi et le dimanche,
                mais le vendredi garde son caractère. La prière de la mi-journée
                vide les bureaux et ferme une partie des commerces pendant
                quelques heures. Les musées adaptent leurs horaires et les souks
                ouvrent plus tard.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Réservez le vendredi matin à une sortie en mer ou dans le
                désert, et gardez les visites de ville pour l'après-midi.
              </p>
            </div>
          ),
        },
        {
          title: "Se déplacer sans y penser",
          cardEyebrow: "Logistique",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Voiture avec chauffeur d'une étape à l'autre, et hélicoptère quand le plaisir du trajet le vaut.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le pays se parcourt par la route, sur de larges autoroutes qui
                relient les émirats entre eux. On passe ainsi d'une ville à une
                oasis sans avoir l'impression de courir, et les étapes
                s'enchaînent avec des pauses choisies. Pour rejoindre certains
                campements du désert, l'hélicoptère offre en plus une belle
                arrivée par les dunes.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Une voiture avec chauffeur reste à votre disposition sur toute
                la durée du séjour, et nous arbitrons au cas par cas entre route
                et hélicoptère. Vous ne conduisez pas et vous ne cherchez pas
                votre chemin.
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
            "Nous n'attendions pas grand-chose des Émirats, et c'est le désert qui a tout emporté. Les oryx qui passent devant la terrasse au petit matin, puis le musée d'Abu Dhabi que nous avons eu pour nous seuls. Rien ne se croisait, rien n'attendait.",
          image: {
            src: "/destination/emirats-arabes-unis/hero-1.png",
            alt: "Portrait de Frédéric", // TODO: verify
          },
          name: "Frédéric", // TODO: verify
          role: "Séjour en couple, février 2026", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "La nuit à Liwa restera notre plus beau souvenir. La tente dressée pour nous seuls, le dîner sur le sable et ce ciel dont on ne voit jamais autant d'étoiles. Notre travel designer nous avait conseillé une veste, nous avons eu tort d'en douter.",
          image: {
            src: "/destination/emirats-arabes-unis/hero-2.png",
            alt: "Portrait d'Édouard", // TODO: verify
          },
          name: "Édouard", // TODO: verify
          role: "Voyage anniversaire, janvier 2026", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Sharjah était l'étape dont je me passais volontiers, et c'est celle dont je parle encore. Les cours plantées, le dîner à l'ombre, le musée sous son dôme. Le contraste avec Dubaï fait tout le charme du séjour.",
          image: {
            src: "/destination/emirats-arabes-unis/hero-3.png",
            alt: "Portrait de Constance", // TODO: verify
          },
          name: "Constance", // TODO: verify
          role: "Voyage en famille, décembre 2025", // TODO: verify
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
            "Quelle est la meilleure période pour partir aux Émirats arabes unis ?",
          answer:
            "Nous privilégions les mois de novembre à mars : les journées sont douces, les nuits fraîches dans le désert et la mer encore agréable. Avril et octobre sont également de belles périodes. Le cœur de l'été est très chaud, avec une forte humidité sur la côte, et les activités de plein air se réservent alors au début et à la fin de la journée.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris ?",
          answer:
            "Comptez environ 7 heures en vol direct depuis Paris vers Dubaï ou Abu Dhabi. Il est possible d'arriver par l'une des deux villes et de repartir par l'autre, ce qui évite de revenir sur ses pas.",
        },
        {
          question: "Faut-il un visa pour aller à Dubaï ?",
          answer:
            "Les ressortissants français sont dispensés de visa pour un court séjour aux Émirats arabes unis. Le passeport doit en revanche être valable au moins six mois à la date d'entrée dans le pays.",
        },
        {
          question: "Peut-on boire de l'alcool aux Émirats arabes unis ?",
          answer:
            "Oui, dans les hôtels, les restaurants licenciés et les clubs privés de Dubaï et d'Abu Dhabi. L'émirat de Sharjah a fait le choix de s'en passer, y compris dans ses hôtels. La consommation dans l'espace public n'est en revanche pas admise.",
        },
        {
          question: "Combien d'étapes prévoir pour un voyage de dix jours ?",
          answer:
            "Trois à quatre étapes suffisent à en profiter pleinement : Abu Dhabi pour ses musées, une étape de désert dans la réserve de Dubaï ou à Liwa, une nuit à Sharjah et une dernière à Dubaï. Entre deux étapes, nous prévoyons toujours une halte agréable, une oasis ou une table en chemin.",
        },
        {
          question:
            "Quel budget prévoir pour un voyage aux Émirats arabes unis ?",
          answer:
            "Le budget dépend des hébergements, de la saison et de la part d'accès privés dans l'itinéraire. Nous construisons chaque voyage sur mesure et vous présentons un budget détaillé avant toute réservation, sans engagement.",
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
        "D'autres horizons que l'on aime associer à une étape aux Émirats, des lagons de l'océan Indien aux grandes plaines d'Afrique de l'Est. À composer sur mesure avec votre travel designer.",
      slugs: ["maldives", "kenya", "seychelles"],
    },
  ],
};
