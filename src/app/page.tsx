import { Header } from "@/components/sections/header";
import { HeroImageBottom } from "@/components/sections/hero/image-bottom";
import { Recommended } from "@/components/blocks/recommended";
import { DestinationFinder } from "@/components/blocks/destination-finder";
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

export default function Home() {
  // Index construit côté serveur : le composant de recherche est client, lui
  // envoyer le registre entier pour comparer des noms serait absurde.
  const finderEntries = getDestinationFinderIndex();

  return (
    <>
      <main className="flex-1">
        <div className="relative">
          <Header />
          <HeroImageBottom
            eyebrow="Conciergerie de voyage · depuis 1991"
            // Copie volontaire de l'image de Madère plutôt qu'un lien vers
            // /destination/madere/ : ré-illustrer la page destination ne doit
            // pas changer la première image du site.
            image={{
              src: "/home-hero.png",
              alt: "Une famille sur un promontoire de Madère, au-dessus d'une mer de nuages",
            }}
            heading="Vous nous dites où. Nous nous occupons du reste."
            paragraph="Un interlocuteur unique conçoit, affine, réserve et coordonne vos voyages. Il reste joignable avant, pendant et après le voyage."
            ctas={{
              primary: { label: "Créer votre voyage", href: "/votre-projet" },
              secondary: {
                label: "Parler à un travel designer",
                href: "/contact",
              },
            }}
          />
        </div>
        <section className="section-px mx-auto w-full max-w-layout py-10">
          <Recommended />
        </section>
        {/* Cream plus soutenu que le fond de page : sans lui, ce bloc et le
            bandeau d'accréditations se confondaient en une seule zone. */}
        <div className="w-full bg-background-soft">
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
        <BentoSection
          background="bg-background"
          eyebrow="Conciergerie"
          heading="Ce dont vous n'avez plus à vous occuper"
          description="Nos pôles de services couvrent le voyage de bout en bout, du visa à obtenir au chauffeur qui attend à l'arrivée."
          cta={{ label: "Découvrir nos services", href: "/services" }}
          // Every tile is a photograph, so none is set to the dark tone: that
          // variant drops the gradient the titles rely on, and white text over
          // a bright image is unreadable.
          cards={getServiceCategoryCards()}
        />
        <FeatureCardsSection
          eyebrow="Thématiques"
          heading="Par envie plutôt que par destination"
          cta={{ label: "Créer votre voyage", href: "/votre-projet" }}
          cards={getThemeCards()}
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
          background="bg-background-soft"
        />
        <TestimonialsSection
          eyebrow="Travel designers"
          heading="Celles et ceux qui s'en occupent"
          cta={{ label: "Créer votre voyage", href: "/votre-projet" }}
          // Noms, rôles, portraits et verbatims viennent des fiches
          // collaborateurs : la page ne fait que choisir qui apparaît.
          testimonials={getTravelDesignerTestimonials([
            "carole",
            "stephane",
            "taina",
          ])}
        />
        <FaqSection
          heading="Questions fréquentes"
          contact={{
            prefix: "Une question qui n'est pas ici ? ",
            label: "Écrivez-nous",
            href: "/contact",
            suffix: ", nous répondons nous-mêmes.",
          }}
          items={[
            {
              question: "Comment se passe un premier échange ?",
              answer:
                "Une conversation, pas un questionnaire. Vous nous dites où vous aimeriez aller, avec qui et à quel moment ; nous vous disons ce qui est possible, et ce qui l'est moins. Un travel designer vous est attribué dès cet échange, et c'est lui qui vous suit jusqu'au retour.",
            },
            {
              question: "Faut-il tout vous confier ?",
              answer:
                "Non. Certains nous confient le voyage entier, d'autres seulement ce qui les encombre : les vols, les transferts, une table impossible à obtenir, un imprévu à rattraper. Vous gardez la main sur ce que vous souhaitez garder.",
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
