import { Header } from "@/components/sections/header";
import Link from "next/link";
import { HeroImageBackground } from "@/components/sections/hero/image-background";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Recommended } from "@/components/blocks/recommended";
import { DestinationFinder } from "@/components/blocks/destination-finder";
import { Fingerprint } from "@/components/blocks/fingerprint";
import { TextBlock } from "@/components/blocks/text-block";
import { getDestinationFinderIndex } from "@/lib/content/destination-finder";
import { BentoSection } from "@/components/sections/bento";
import { FeatureCardsSection } from "@/components/sections/feature-cards";
import {
  getServiceCategoryCards,
  getThemeCards,
  getTravelDesignerTestimonials,
} from "@/lib/content/queries";
import { VideoSection } from "@/components/sections/video";
import { FaqSection } from "@/components/sections/faq";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { TextColumnsSection } from "@/components/sections/text-columns";
import { TextImagesSplitSection } from "@/components/sections/text-images-split";
import { createBackgroundRhythm } from "@/lib/content/background-rhythm";
import { SITE_URL } from "@/lib/site-url";

// Nom du site pour Google : sans ce bloc sur l'accueil, les résultats
// affichent « exuma.paris » au-dessus du titre au lieu de « Exuma ».
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Exuma",
  url: `${SITE_URL}/`,
};

export default function Home() {
  // Index construit côté serveur : le composant de recherche est client, lui
  // envoyer le registre entier pour comparer des noms serait absurde.
  const finderEntries = getDestinationFinderIndex();

  // Fonds attribués dans l'ordre d'affichage (crème, blanc, sable…) : deux
  // blocs voisins ne partagent jamais la même couleur.
  const rhythm = createBackgroundRhythm();
  const bg = {
    recommended: rhythm.next(),
    finder: rhythm.next(),
    themes: rhythm.next(),
    metier: rhythm.next(),
    services: rhythm.next(),
    video: rhythm.next(),
    designers: rhythm.next(),
    faq: rhythm.next(),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <main className="flex-1">
        <div className="relative">
          {/* Thème sombre : le titre est posé sur l'image plein cadre, comme
              sur les pages Professionnels et Expérience. */}
          <Header theme="dark" />
          <HeroImageBackground
            eyebrow="Maison de conseils privée dédiée aux déplacements · depuis 1991"
            // Copie volontaire de l'image de Madère plutôt qu'un lien vers
            // /destination/madere/ : ré-illustrer la page destination ne doit
            // pas changer la première image du site.
            images={[
              {
                src: "/home-hero.png",
                alt: "Une famille sur un promontoire de Madère, au-dessus d'une mer de nuages",
              },
            ]}
            heading={"Exprimez votre besoin, votre envie.\nNous gérons le reste."}
            description="Déplacements privés ou professionnels : un interlocuteur de référence, toujours le même."
            cta={
              <div className="flex flex-col items-center gap-5">
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {/* Le hero est en thème sombre : `bg-foreground text-background`
                      y donne le bouton blanc à texte sombre de la landing. */}
                  <Link
                    href="/votre-projet"
                    data-event-id="home-hero-create"
                    className={cn(buttonVariants(), "bg-foreground text-background")}
                  >
                    Confiez-nous votre projet
                  </Link>
                  {/* Vers le formulaire court plutôt que la page de coordonnées :
                      « parler » à quelqu'un, c'est lui écrire trois réponses, et
                      la demande est mesurée. Le téléphone reste dans l'en-tête
                      du formulaire. */}
                  <Link
                    href="/nous-ecrire"
                    data-event-id="home-hero-write"
                    className={cn(buttonVariants({ variant: "outline" }))}
                  >
                    Parler à un conseiller
                  </Link>
                </div>
                {/* La porte des professionnels, dès le premier écran : ils
                    n'ont pas à traverser le contenu grand public pour la
                    trouver. */}
                <Link
                  href="/professionnels"
                  className="text-[13px] tracking-wide underline underline-offset-4 transition-opacity hover:opacity-70"
                >
                  Entreprises et family offices : votre espace dédié
                </Link>
              </div>
            }
          />
        </div>
        <div className={cn("w-full", bg.recommended)}>
          <section className="section-px mx-auto w-full max-w-layout py-10">
            <Recommended />
          </section>
        </div>
        <div className={cn("w-full", bg.finder)}>
          <section className="mx-auto flex w-full max-w-layout flex-col gap-10 section-px section-py">
            <div className="flex flex-col items-start gap-6 text-left md:items-center md:text-center">
              <TextBlock
                align="left"
                mdAlign="center"
                eyebrow="Destinations"
                heading="Où souhaitez-vous partir ?"
                headingLevel="h2"
                paragraph="Cherchez un pays, une île, une ville. Nous vous montrons ce que nous y connaissons."
              />
            </div>
            <DestinationFinder entries={finderEntries} />
          </section>
        </div>
        {/* Juste sous les destinations : le chemin « voyage » se lit d'un
            trait (où partir, puis par envie) avant de passer à la maison. */}
        <FeatureCardsSection
          background={bg.themes}
          eyebrow="Expériences"
          heading="Par envie plutôt que par destination"
          cta={{ label: "Confiez-nous votre projet", href: "/votre-projet" }}
          cards={getThemeCards()}
        />
        {/* Le visiteur vient de voir qu'on peut l'emmener où il veut : ce bloc
            lui dit pourquoi nous confier cela plutôt qu'à une agence. Trois
            colonnes, une par terme du triptyque Exception, Excellence,
            Expérience ; chacune tient ensemble le déplacement professionnel
            et le voyage de loisir. L'empreinte reste en fond, en bas à droite. */}
        <div className="relative overflow-hidden [&_h2]:text-balance">
          <TextColumnsSection
            background={bg.metier}
            eyebrow="Notre conviction"
            heading="L'empreinte de l'excellence."
            brandEx
            cta={{ label: "Pourquoi Exuma", href: "/approche" }}
            columns={[
              "**Exception.** Maison de conseils privée, nous traitons chaque demande comme si elle était la seule : un rendez-vous à Genève à organiser pour demain matin, une table que l'on dit complète, un voyage composé à partir de vos envies plutôt que d'un catalogue. Ce que vous nous confiez reste entre nous.",
              "**Excellence.** Depuis 1991, tout commence par l'attention : écouter, retenir, anticiper. Votre conseiller, toujours le même, prend en charge vos déplacements entièrement, d'un aller-retour en train à un tour du monde, et les suit jusqu'à votre retour.",
              "**Expérience.** Un chauffeur au pied de l'avion, le fast track, un salon qui vous attend : rien ne vient troubler votre agenda. Puis vient le temps du voyage : une felouque sur le Nil au coucher du soleil, Pétra avant les premiers visiteurs. Un déplacement réussi passe inaperçu ; un voyage Exuma se raconte longtemps après.",
            ]}
          />
          <Fingerprint />
        </div>
        <BentoSection
          background={bg.services}
          eyebrow="Conciergerie"
          heading="Ce dont vous n'avez plus à vous occuper"
          description="Nos pôles de services couvrent le voyage de bout en bout, du visa à obtenir au chauffeur qui attend à l'arrivée."
          cta={{ label: "Découvrir nos services", href: "/services" }}
          // Every tile is a photograph, so none is set to the dark tone: that
          // variant drops the gradient the titles rely on, and white text over
          // a bright image is unreadable.
          cards={getServiceCategoryCards()}
        />
        {/* Seul bloc foncé de l'accueil : la porte de ceux qui délèguent.
            Deux paragraphes, deux boutons de même poids, un par public :
            les entreprises vers l'espace professionnels, les dirigeants,
            familles et family offices vers le Private Office. Hors rythme
            des fonds clairs. */}
        <TextImagesSplitSection
          theme="dark"
          eyebrow="Entreprises · Private Office"
          heading="Vous déléguez, nous portons la charge"
          paragraphs={[
            {
              label: "Entreprises et cabinets",
              text: "Un référent désigné organise les déplacements de vos collaborateurs dans le respect de votre politique voyages, et vos voyageurs le joignent directement. Une facture unique et un reporting mensuel vous donnent une lecture claire de la dépense.",
            },
            {
              label: "Private Office",
              text: "Pour vous, votre famille, votre family office ou vos associés : un personal assistant dédié et son binôme connaissent votre vie dans ses moindres détails. Ils anticipent, coordonnent, et toute la charge mentale passe chez nous.",
            },
          ]}
          images={[
            {
              src: "/professionnels/family-offices/poste-travail.jpg",
              alt: "Un conseiller Exuma à son poste de travail, dans les bureaux d'Exuma",
            },
            {
              src: "/service/pourquoi-exuma/couple-diner.png",
              alt: "Un couple dîne dans un restaurant lumineux face à Notre-Dame de Paris",
            },
          ]}
          cta={{ label: "L'offre entreprises", href: "/professionnels" }}
          secondaryCta={{ label: "Le Private Office", href: "/private-office" }}
        />
        <VideoSection
          // Le surtitre légende la vidéo du moment, le titre parle de la
          // pratique : changer de film ne demande de toucher qu'à cette ligne.
          eyebrow="Partenaire · Ponant"
          heading="Nous parlons destinations avec ceux qui les opèrent"
          description="Compagnies, hôteliers, guides locaux : nous passons du temps avec ceux qui travaillent sur le terrain, et nous y retournons régulièrement. Ce que nous vous conseillons vient de ces conversations, pas d'un catalogue."
          // La vidéo vit sur la chaîne YouTube d’Exuma, mais se regarde ici :
          // le lecteur n’est chargé qu’au clic, donc la page d’accueil ne
          // demande rien à YouTube tant que personne ne lance la lecture.
          video={{
            poster: "/videos/exuma-ponant-poster.jpg",
            alt: "Échange entre Céline Lagraulet et un travel designer Exuma sur la Polynésie",
          }}
          youtubeId="PukQKp3985c"
          youtubeStart={2}
          background={bg.video}
        />
        <TestimonialsSection
          background={bg.designers}
          eyebrow="Travel designers"
          heading="Celles et ceux qui s'en occupent"
          cta={{ label: "Confiez-nous votre projet", href: "/votre-projet" }}
          // Noms, rôles, portraits et verbatims viennent des fiches
          // collaborateurs : la page ne fait que choisir qui apparaît.
          testimonials={getTravelDesignerTestimonials([
            "carole",
            "stephane",
            "taina",
          ])}
        />
        <FaqSection
          background={bg.faq}
          heading="Questions fréquentes"
          contact={{
            prefix: "Une question qui n'est pas ici ? ",
            label: "Écrivez-nous",
            href: "/nous-ecrire",
            suffix: ", nous répondons nous-mêmes.",
          }}
          items={[
            {
              question: "Êtes-vous une agence de voyage ?",
              answer:
                "Oui sur le plan légal : Exuma est membre des Entreprises du Voyage et accréditée IATA, avec les garanties qui vont avec. Mais notre métier va plus loin. Nous sommes une maison de conseils privée : un interlocuteur de référence prend en charge vos voyages et vos déplacements, de la première idée au retour.",
            },
            {
              question: "Comment se passe un premier échange ?",
              answer:
                "Une conversation, pas un questionnaire. Vous nous dites où vous aimeriez aller, avec qui et à quel moment ; nous vous disons ce qui est possible, et ce qui l'est moins. Un travel designer vous est attribué dès cet échange, et c'est lui qui vous suit jusqu'au retour.",
            },
            {
              question: "Pouvons-nous tout vous confier ?",
              answer:
                "Oui, et vous pouvez tout aussi bien ne nous confier qu'une partie. Certains nous remettent le voyage entier, d'autres seulement ce qui les encombre : les vols, les transferts, une table impossible à obtenir, un imprévu à rattraper. Vous gardez la main sur ce que vous souhaitez garder.",
            },
            {
              question: "Voyager avec des enfants, cela change-t-il quelque chose ?",
              answer:
                "Cela change presque tout, et c'est justement le travail. Des enfants d'âges différents n'ont ni le même rythme ni la même patience : nous construisons des journées qui tiennent pour chacun, sans que personne n'ait le sentiment d'attendre les autres.",
            },
            {
              question: "Combien coûte un voyage conçu par Exuma ?",
              answer:
                "Il n'y a pas de tarif au catalogue, puisqu'il n'y a pas de programme au catalogue. Nous partons du budget que vous avez en tête et nous vous disons franchement ce qu'il permet et ce qu'il ne permet pas. Nos honoraires vous sont annoncés avant que le travail commence.",
            },
            {
              question: "Que se passe-t-il si quelque chose tourne mal sur place ?",
              answer:
                "Vous appelez votre interlocuteur, pas un standard. Vol annulé, hébergement décevant, contretemps de santé : nous reprenons la main depuis Paris et nous réorganisons ce qui doit l'être. C'est à ce moment précis que se juge une conciergerie.",
            },
            {
              question: "Quelles garanties apportez-vous ?",
              answer:
                "Exuma est membre des Entreprises du Voyage et accrédité IATA. Vos versements sont couverts par les garanties professionnelles attachées à ces statuts, et une assurance voyage vous est proposée avant le départ.",
            },
          ]}
        />
      </main>
    </>
  );
}
