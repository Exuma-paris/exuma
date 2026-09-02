import type { ServiceCategory } from "@/lib/content/types";
import { EXUMA_TEL_HREF } from "@/lib/exuma";

/**
 * Page pilote des catégories de service. Elle fixe le gabarit que les quatre
 * autres (conciergerie, lifestyle, sécurité, ingénierie) doivent reprendre :
 *
 *   hero > textColumns > featureRows > textImagesSplit > tips >
 *   specialistSpotlight > infoGrid > faq > finalCta
 *
 * Arbitrages structurels (2026-08-24) :
 *   - Pas de page fille par prestation. Les quatre prestations de la catégorie
 *     vivent dans le `featureRows`, d'où l'absence de `serviceSlugs`. Ce bloc
 *     a d'abord été un `featureShowcase` (accordéon, une seule image visible),
 *     puis un `spotsList` (lisible mais sans images). `featureRows` a été créé
 *     pour ce besoin : chaque prestation garde son image et se lit sans clic.
 *   - Registre B2C (Constance, Bernard & Michèle, Frédéric). La porte B2B passe
 *     uniquement par le `secondaryCta` du `finalCta`, en bas de page.
 *   - Aucun bloc `testimonials` : pas de faux témoignage, même anonymisé. La
 *     section sera ajoutée quand de vrais verbatims auront été recueillis.
 *
 * TODO images : deux visuels sont produits pour cette page,
 * `/service/mobilite/hero-1.png` (rangée 01) et `accueil-aeroport.png`
 * (rangée 03, traçabilité dans `references/service/mobilite/SOURCES.md`). Les
 * autres sont provisoires, empruntés à `/professionnels/` : le chemin cible et
 * la photo attendue sont indiqués en commentaire au-dessus de chacun.
 *
 * TODO citation : la prise de parole de Calvin doit être validée avec lui avant
 * mise en ligne.
 */

export const serviceCategory: ServiceCategory = {
  slug: "mobilite",
  name: "Mobilité & accès privilégié",
  blurb:
    "Vol choisi pour vous, chauffeur à l'arrivée, passage rapide en aéroport et bagages suivis de bout en bout.",
  keywords: [
    "jet privé",
    "aviation",
    "transferts",
    "chauffeur",
    "limousine",
    "vip",
    "fast-track",
    "aéroport",
    "bagages",
  ],
  sections: [
    {
      type: "hero",
      // L'eyebrow porte le nom de la catégorie : le h1 étant éditorial, c'est le
      // seul endroit du haut de page qui situe le lecteur dans nos services.
      eyebrow: "Mobilité & accès privilégié",
      heading: "Le trajet ne devrait jamais être la partie difficile du voyage",
      description:
        "Vous montez à bord, une voiture vous attend à l'arrivée, vos bagages suivent. Entre les deux, nous avons anticipé ce qui pouvait mal se passer.",
      images: [
        {
          // Image unique, comme les quatre autres catégories et les continents.
          // Le jet reste attaché à la prestation qu'il illustre, en rangée 01.
          // L'ouverture montre la prise en charge plutôt qu'un appareil : c'est
          // le service qui différencie la maison, pas l'objet.
          //
          // TODO image : /service/mobilite/hero.png, une berline et son chauffeur
          // au pied de la passerelle au crépuscule, vus de dos, aucun visage
          // identifiable. Cadrage CARRÉ, pas 16/9, le hero recadre en 1:1.
          // En attendant, ce visuel est emprunté et se répète en rangée 02.
          src: "/professionnels/hero-2.png",
          alt: "Chauffeur ouvrant la portière au pied de l'appareil",
        },
      ],
    },

    {
      type: "textColumns",
      background: "bg-background-soft",
      eyebrow: "Ce que vous y gagnez",
      heading: "Vous décidez d'aller quelque part, le reste est déjà réglé",
      columns: [
        "Un départ se joue rarement au décollage. Il se joue dans les heures qui précèdent : la voiture qui n'arrive pas, la file au contrôle, le terminal qu'on découvre trop tard, la correspondance qui tient à quarante minutes. Nous retirons ces heures-là de votre voyage.",
        "Nous choisissons vos vols pour ce qu'ils vous coûtent en fatigue, pas seulement en durée. Un départ en fin de matinée plutôt qu'à l'aube, une escale qui laisse le temps de respirer, une cabine où vous dormirez vraiment. Quand aucune ligne régulière ne répond, nous affrétons.",
        "À l'arrivée, quelqu'un vous attend, connaît votre nom et votre adresse. Vous n'avez rien à chercher, rien à négocier, rien à porter. Le voyage commence là où d'ordinaire commence l'attente.",
      ],
      cta: { label: "Parler de votre prochain départ", href: "/contact" },
    },

    {
      type: "featureRows",
      eyebrow: "Nos prestations",
      heading: "Ce que nous mettons en place pour vous déplacer",
      description:
        "Quatre prestations qui se combinent selon le voyage. Vous n'en choisissez aucune à l'avance : nous composons le dispositif après vous avoir écouté.",
      items: [
        {
          title: "Jets privés et aviation d'affaires",
          paragraphs: [
            "Nous affrétons l'appareil qui correspond au trajet : un léger pour un aller-retour européen dans la journée, un long courrier quand il faut traverser sans escale, un turbopropulseur pour une piste courte que les jets ne prennent pas.",
            "Nous ne travaillons qu'avec des opérateurs certifiés, et nous vérifions leur certification et leur historique avant de vous proposer un appareil. Vous recevez le nom de l'appareil, celui de l'équipage et l'attestation d'assurance avant de confirmer.",
            "L'appareil est prêt avant que vous n'y montiez : l'aéroport le plus proche de votre adresse plutôt que le plus connu, l'heure de décollage calée sur votre rendez-vous et non l'inverse, la restauration que vous aimez à bord, les bagages hors format annoncés à l'équipage la veille.",
          ],
          image: {
            src: "/service/mobilite/hero-1.png",
            alt: "Jet privé prêt à l'embarquement sur le tarmac",
          },
        },
        {
          title: "Transferts et chauffeurs dédiés",
          paragraphs: [
            "Une voiture et un chauffeur vous attendent à chaque point du parcours, du départ de chez vous jusqu'à la porte de l'hôtel. Le chauffeur suit votre vol : s'il a deux heures de retard, il est là deux heures plus tard.",
            "Sur les séjours longs, nous mettons un chauffeur à votre disposition sur toute la durée. Il connaît vos horaires, parle votre langue, et devient l'un des repères du voyage.",
            "Sièges enfants installés à l'avance, véhicule adapté à une mobilité réduite, second véhicule quand le groupe et les bagages ne tiennent pas dans un seul.",
          ],
          image: {
            // TODO image : /service/mobilite/transferts.png, une berline noire
            // devant une entrée d'hôtel, portière ouverte, cadrage portrait.
            src: "/professionnels/hero-2.png",
            alt: "Chauffeur ouvrant la portière lors d'un transfert privé",
          },
        },
        {
          title: "Accueil et passage rapide en aéroport",
          paragraphs: [
            "Un agent vous retrouve à la dépose-minute, prend vos bagages et vous accompagne jusqu'au salon par les circuits réservés. Là où ce service existe, vous ne faites la queue ni à l'enregistrement, ni au contrôle, ni à l'immigration.",
            "À l'arrivée, le même dispositif fonctionne en sens inverse : accueil à la passerelle, passage accompagné, bagages récupérés pendant que vous rejoignez la voiture.",
            "Ce service existe dans la plupart des grands aéroports internationaux. Là où il n'existe pas, nous vous le disons avant le départ plutôt que de vous laisser le découvrir sur place.",
          ],
          image: {
            src: "/service/mobilite/accueil-aeroport.png",
            alt: "Agent d'accueil emmenant la valise d'un voyageur vers la voiture, devant le terminal",
          },
        },
        {
          title: "Bagages précieux et objets sensibles",
          paragraphs: [
            "Certaines choses ne voyagent pas dans une soute ordinaire : des bijoux, une œuvre, un instrument de musique, des documents, vos armes de chasse ou de tir sportif. Nous organisons leur transport à part, sous convoyage déclaré et assuré à leur valeur réelle.",
            "Nous prenons en charge les formalités qui vont avec : déclarations douanières et carnets de passage quand l'objet doit ressortir du pays, autorisations du pays d'accueil et carte européenne d'armes à feu quand il s'agit d'une carabine, accord préalable de la compagnie aérienne dans tous les cas.",
            "Pour les séjours à étapes, vos valises peuvent partir en avance d'une adresse à l'autre. Vous les retrouvez défaites dans la chambre suivante.",
          ],
          image: {
            // Rangée paire, donc cadrage portrait : on sert le dérivé 3:4
            // recadré sur le sujet plutôt que le master 16:9.
            src: "/service/mobilite/bagages-terminal-3x4.png",
            alt: "Porteur traversant un hall de départ animé avec un étui d'instrument de musique",
          },
        },
      ],
    },

    {
      type: "textImagesSplit",
      background: "bg-background",
      eyebrow: "Un jour de départ",
      heading: "Ce qui se passe pendant que vous faites votre valise",
      paragraphs: [
        "La veille, votre conseiller vérifie une dernière fois les éléments qui peuvent encore bouger : l'état du vol, la météo à l'arrivée, la validité des documents de chaque voyageur, l'heure réelle à laquelle la voiture doit être devant chez vous.",
        "Le matin, il sait que vous êtes parti avant que vous ne l'appeliez. Le chauffeur a confirmé la prise en charge, l'agent d'accueil a votre numéro de vol, l'hôtel sait à quelle heure vous arrivez et prépare la chambre en conséquence.",
        "Si quelque chose se déplace en cours de route, vous l'apprenez de nous, avec ce que nous avons déjà mis en place. C'est la seule différence qui compte : vous n'êtes jamais celui qui doit appeler.",
      ],
      // La paire joue les deux lieux à la même heure, ce que le titre promet :
      // chez nous le dossier se vérifie, chez vous la valise se fait.
      images: [
        {
          // Photo du shooting Exuma par Jules Despretz, image n°5, recadrée en
          // 3:4. Le bord droit est coupé avant le filigrane du photographe.
          src: "/service/mobilite/preparation-3x4.png",
          alt: "Conseillère Exuma à son poste, devant ses écrans",
        },
        {
          src: "/service/mobilite/valise-1x1.png",
          alt: "Valise ouverte en cours de préparation dans un appartement, au matin",
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Quand ça ne se passe pas comme prévu",
      heading: "Ce que 35 ans de pratique nous ont appris",
      description:
        "Ce que vous nous confierez, nous l'avons déjà rencontré. Voici comment nous traitons les quatre situations qui reviennent le plus souvent.",
      items: [
        {
          title: "La grève annoncée trois jours avant",
          cardEyebrow: "Cas vécu",
          modalEyebrow: "Quand ça ne se passe pas comme prévu",
          shortDescription:
            "Nous repositionnons avant l'annulation officielle, pendant qu'il reste des places.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Un préavis de grève est public avant que les vols ne soient
                annulés. C&apos;est la fenêtre utile : nous repositionnons
                pendant que les autres attendent la confirmation, donc pendant
                qu&apos;il reste des places sur les vols voisins.
              </p>
              <h4 className="font-medium">Ce que nous faisons :</h4>
              <p>
                Nous identifions les vols non concernés, y compris chez
                d&apos;autres compagnies et depuis un autre aéroport si la route
                l&apos;impose. Nous vous proposons une option arbitrée, pas une
                liste de possibilités à trancher vous-même.
              </p>
              <p>
                Si le départ doit glisser d&apos;un jour, nous décalons aussi
                l&apos;hôtel, les transferts et ce qui était réservé sur place.
                Vous n&apos;avez pas à défaire vous-même le reste du voyage.
              </p>
            </div>
          ),
        },
        {
          title: "La correspondance qui saute",
          cardEyebrow: "Cas vécu",
          modalEyebrow: "Quand ça ne se passe pas comme prévu",
          shortDescription:
            "Nous cherchons la solution pendant que vous êtes encore en vol.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Nous suivons les vols de nos clients. Quand un retard rend la
                correspondance impossible, nous le savons avant vous, et nous
                commençons à chercher pendant que vous êtes encore en l&apos;air.
              </p>
              <h4 className="font-medium">Ce que vous trouvez à l&apos;atterrissage :</h4>
              <p>
                Un message qui vous dit où aller. Soit le réacheminement est
                déjà fait, soit une chambre est réservée à proximité et le vol
                du lendemain est confirmé, avec un transfert pour vous y
                emmener.
              </p>
              <p>
                Nous prévenons également l&apos;hôtel de destination et
                repoussons les prestations qui devaient avoir lieu le jour même.
              </p>
            </div>
          ),
        },
        {
          title: "Le bagage qui n'arrive pas",
          cardEyebrow: "Cas vécu",
          modalEyebrow: "Quand ça ne se passe pas comme prévu",
          shortDescription:
            "La déclaration se fait avec vous, le suivi se fait sans vous.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La déclaration de perte doit être faite à l&apos;aéroport, avec
                vous : c&apos;est la seule étape que nous ne pouvons pas prendre
                à votre place. Notre agent d&apos;accueil s&apos;en charge avec
                vous, ce qui prend quelques minutes plutôt qu&apos;une heure.
              </p>
              <h4 className="font-medium">Ensuite, vous n&apos;appelez personne :</h4>
              <p>
                Nous relançons la compagnie, nous suivons la localisation du
                bagage et nous organisons sa livraison à votre hôtel, y compris
                si vous avez changé d&apos;adresse entre-temps.
              </p>
              <p>
                En attendant, nous faisons le nécessaire sur place pour que le
                séjour continue : le nécessaire du soir, une tenue pour le
                lendemain, ce que la journée prévue exige.
              </p>
            </div>
          ),
        },
        {
          title: "Le départ décalé la veille au soir",
          cardEyebrow: "Cas vécu",
          modalEyebrow: "Quand ça ne se passe pas comme prévu",
          shortDescription:
            "Un appel suffit. Nous défaisons et refaisons l'ensemble du dispositif.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Un rendez-vous se déplace, un proche tombe malade, une réunion
                s&apos;impose. Vous appelez, vous dites la nouvelle date, et
                vous raccrochez.
              </p>
              <h4 className="font-medium">Ce que nous reprenons :</h4>
              <p>
                Les vols et leurs conditions de modification, les transferts,
                l&apos;hôtel, les réservations sur place, et les formalités quand
                la nouvelle date les remet en jeu.
              </p>
              <p>
                Nous vous disons ce que le décalage coûte réellement avant de
                l&apos;engager, y compris quand la réponse est qu&apos;il vaut
                mieux annuler et repartir d&apos;une page blanche.
              </p>
            </div>
          ),
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Votre interlocuteur",
      heading: "Calvin Nguyen construit vos trajets et tient vos accès",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "calvin",
        // TODO : citation à valider avec Calvin avant mise en ligne.
        quote:
          "Ce qui fait qu'un déplacement se passe bien tient rarement au vol lui-même. C'est le siège pris côté couloir parce que vous vous levez la nuit, la voiture avancée parce qu'il pleut à l'arrivée, le salon prévenu que vous voyagez avec un instrument. Je passe mes journées à faire attention à ces détails-là. Vous n'en verrez aucun, et c'est exactement le but.",
      },
      features: [
        {
          iconName: "plane",
          title: "Il choisit l'opérateur, pas seulement l'appareil",
          description:
            "Certification, historique, équipage : ce que vous ne verrez jamais est vérifié avant que le devis ne vous parvienne.",
        },
        {
          iconName: "clock",
          title: "Il reste joignable pendant le trajet",
          description:
            "Vous convenez ensemble du mode de contact qui vous convient. Il vaut pour toute la durée du déplacement, week-end compris.",
        },
        {
          iconName: "badgeCheck",
          title: "Il retient ce que vous ne redirez pas deux fois",
          description:
            "Votre place habituelle, l'heure qui vous convient, ce qui vous agace. Ce qui a été dit une fois vaut pour les voyages suivants.",
        },
      ],
    },

    {
      type: "infoGrid",
      theme: "dark",
      eyebrow: "Nos engagements",
      heading: "Ce sur quoi vous pouvez compter, d'un voyage à l'autre",
      items: [
        {
          iconName: "badgeCheck",
          title: "Nous vérifions ce que vous ne verrez jamais",
          description:
            "Opérateurs aériens certifiés, sociétés de transport déclarées, chauffeurs habilités. Les attestations existent et vous sont transmises si vous les demandez.",
        },
        {
          iconName: "plane",
          title: "Le monde entier, sans exception",
          description:
            "Nous ne travaillons pas à partir d'un catalogue. Là où vous devez aller, nous organisons : la capitale évidente comme la piste desservie une fois par semaine.",
        },
        {
          iconName: "clock",
          title: "Une assistance calibrée sur votre voyage",
          description:
            "Vous nous dites ce dont vous avez réellement besoin pendant le déplacement, nous définissons ensemble le mode de fonctionnement qui y répond. Aucun dispositif standard ne vous est imposé.",
        },
        {
          iconName: "fileText",
          title: "Vos formalités sont contrôlées avant le départ",
          description:
            "Validité des passeports, visas, exigences de transit, documents des mineurs. Nous les vérifions pour chaque voyageur, sans que vous ayez à y penser.",
        },
      ],
    },


    {
      type: "faq",
      eyebrow: "Questions fréquentes",
      heading: "Ce que l'on nous demande avant de nous confier un départ",
      contact: {
        // Les espaces font partie des chaînes : le composant concatène sans
        // séparateur, comme sur les pages destination.
        prefix: "Une question qui n'est pas ici ? ",
        label: "Appelez-nous",
        href: EXUMA_TEL_HREF,
        suffix: ", nous y répondrons directement.",
      },
      items: [
        {
          question: "Faut-il voyager en jet privé pour faire appel à vous ?",
          answer: (
            <p>
              Non. La majorité des voyages que nous organisons se font sur des
              vols réguliers, et le soin apporté est le même : la place choisie
              en fonction de votre sommeil, l&apos;horaire qui vous arrange, la
              voiture qui attend à l&apos;arrivée. L&apos;affrètement est une
              possibilité parmi d&apos;autres, que nous mettons en place dès que
              vous le souhaitez.
            </p>
          ),
        },
        {
          question: "À partir de quand un jet privé devient-il pertinent ?",
          answer: (
            <p>
              Quand la ligne régulière n&apos;existe pas, quand elle impose deux
              escales pour un trajet court, quand vous voyagez à plusieurs et
              que le calcul se rapproche, ou quand la discrétion et
              l&apos;horaire priment sur tout le reste. Nous faisons le
              comparatif avec vous, chiffres à l&apos;appui, avant que vous ne
              décidiez.
            </p>
          ),
        },
        {
          question: "Que se passe-t-il si mon vol est annulé un dimanche ?",
          answer: (
            <p>
              Vous appelez le numéro dont nous aurons convenu ensemble avant le
              départ, et quelqu&apos;un qui connaît votre dossier vous répond.
              Le repositionnement, l&apos;hôtel et les transferts sont repris
              par nous. Vous n&apos;êtes jamais renvoyé vers un service client
              de compagnie aérienne.
            </p>
          ),
        },
        {
          question:
            "Pouvez-vous organiser le trajet si nous voyageons avec de jeunes enfants ?",
          answer: (
            <p>
              Oui, et c&apos;est même l&apos;un des cas où le dispositif se voit
              le plus. Sièges installés à l&apos;avance dans chaque véhicule,
              passage accompagné pour éviter les files, repas adaptés commandés
              sur le vol, poussette récupérée en passerelle. Nous prévoyons
              également le nécessaire si une valise manque à l&apos;arrivée.
            </p>
          ),
        },
        {
          question: "Prenez-vous en charge le transport d'objets de valeur ?",
          answer: (
            <p>
              Oui, sous convoyage déclaré et assuré à la valeur réelle de
              l&apos;objet, avec les formalités douanières qui
              l&apos;accompagnent. Bijoux, œuvres, instruments de musique,
              documents et armes de chasse voyagent séparément de vos bagages,
              selon un circuit que nous vous détaillons avant le départ. Pour
              une carabine, nous réunissons les autorisations du pays
              d&apos;accueil et l&apos;accord de la compagnie avant de confirmer
              quoi que ce soit.
            </p>
          ),
        },
      ],
    },

    {
      type: "finalCta",
      eyebrow: "Prendre contact",
      heading: "Nos services vous intéressent ? Prenons contact.",
      primaryCta: { label: "Contacter Exuma", href: EXUMA_TEL_HREF },
      // Porte B2B : unique passerelle vers /professionnels sur cette page.
      secondaryCta: {
        label: "Vous organisez pour d'autres",
        href: "/professionnels",
      },
    },
  ],
};
