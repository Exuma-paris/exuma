"use client";

import { TipsSection } from "@/components/sections/tips";

export function CorseTips() {
  return (
    <TipsSection
      background="bg-background-soft"
      eyebrow="Guide pratique"
      heading="Les conseils de nos experts pour votre voyage en Corse"
      description="Une île de contrastes : montagne, mer, maquis, villages perchés. Quelques repères pour préparer un séjour à la hauteur de ce que la Corse a à offrir."
      cta={{ label: "Créer votre voyage", href: "/reserver" }}
      items={[
        {
          title: "Dans ma valise",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Tenue de randonnée, maillot, lainage léger pour les soirées en altitude : la Corse demande de l'amplitude.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: Carte d'identité ou passeport. Permis de conduire si vous
                louez un véhicule (vivement recommandé).
              </p>
              <p>
                &laquo; Nous vérifions systématiquement les formalités de chacun
                de nos clients avant le départ. &raquo;
              </p>
              <h4 className="font-medium">L'essentiel :</h4>
              <p>
                TODO: Tenue légère pour le littoral, chaussures de marche pour
                les sentiers du maquis, lainage pour les soirées en altitude.
                Crème solaire haute protection, anti-moustiques pour le maquis.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                &laquo; Nos clients reçoivent une checklist personnalisée selon
                les activités prévues lors de leur séjour, environ 3 semaines
                avant. &raquo;
              </p>
            </div>
          ),
        },
        {
          title: "Santé",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Aucun vaccin obligatoire. Quelques précautions pour le maquis et le soleil méditerranéen.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: Aucun vaccin obligatoire. Vaccinations universelles à
                jour. Numéros d'urgence européens (112) actifs partout sur
                l'île.
              </p>
              <p>
                Soleil intense en été, vigilance déshydratation en randonnée.
                Eau du robinet potable.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Trousse de pharmacie de voyage classique : antalgiques, pansements,
                anti-moustiques, crème apaisante après-soleil.
              </p>
            </div>
          ),
        },
        {
          title: "Meilleure période",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "De mai à juin et de septembre à mi-octobre pour la lumière, la mer chaude et le calme.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: La période recommandée par notre équipe : mai-juin et
                septembre-mi-octobre. Mer entre 22 °C et 25 °C, lumière douce,
                fréquentation modérée.
              </p>
              <p>
                Juillet-août : haute saison, chaleur forte, plages animées —
                parfait pour les amateurs d'effervescence, à anticiper côté
                hébergements.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                TODO: Festivals d'été (Calvi on the Rocks, Festivoce de Pigna),
                fêtes de village d'août — à intégrer à l'itinéraire pour ceux
                qui aiment la culture vivante.
              </p>
            </div>
          ),
        },
        {
          title: "Budget & Vie locale",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Euro, paiement par carte généralisé. Restaurants confidentiels et marchés de producteurs.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: Euro. Paiement par carte largement accepté. Pourboire non
                obligatoire mais apprécié (5–10 % en restaurant).
              </p>
              <p>
                Marchés de producteurs dans la plupart des villages le matin :
                charcuterie, fromage, miel, huile d'olive, vin.
              </p>
              <h4 className="font-medium">Moyens de transport sur place :</h4>
              <p>
                TODO: Voiture de location indispensable pour rayonner.
                Possibilité de bateau privé pour rejoindre les criques
                inaccessibles par la route.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                &laquo; Nous organisons systématiquement tous les transferts de
                nos clients : chauffeur privé, bateau, hélicoptère selon les
                envies. &raquo;
              </p>
            </div>
          ),
        },
      ]}
    />
  );
}
