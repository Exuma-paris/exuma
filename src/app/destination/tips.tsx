"use client";

import { TipsSection } from "@/components/sections/tips";

export function PolynesieTips() {
  return (
    <TipsSection
      background="bg-background-soft"
      eyebrow="Guide pratique"
      heading="Les conseils de nos experts pour votre voyage en Polynésie Française"
      description="Un archipel confidentiel et préservé. Survolez des atolls vierges en hydravion privé avant de partager le savoir-faire ancestral d'un maître tatoueur. Chaque instant pensé pour vous devient un privilège absolu."
      cta={{ label: "Créer votre voyage", href: "/reserver" }}
      items={[
        {
          title: "Dans ma valise",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Vêtements légers, crème solaire reef-safe et anti-moustiques : l'essentiel pour voyager serein.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Passeport : durée de validité minimum requise. Visa : si vous
                n'êtes pas d'une 1 ambassade / délais. E-visa depuis Paris /
                Escale depuis Paris.
              </p>
              <p>
                &laquo; Nous vérifions systématiquement les formalités de chacun
                de nos clients avant le départ &raquo;
              </p>
              <h4 className="font-medium">Détergent :</h4>
              <p>
                Vêtement léger, adapté au climat, avec activités prévues au
                quotidien (tenues de randonnée : sneakers en toile respirante
                pour île, escape shoes de bateau). Découvrir maillots
                accessoires, rasoirs/shampoings.
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
            "Aucun vaccin obligatoire, mais quelques précautions à connaître avant de partir.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Pas de vaccin obligatoire (à vérifier selon le pays). Mention du
                paludisme/fièvre méditerranéenne/mise à jour des vaccins
                universels. Numéros d'urgence locaux.
              </p>
              <p>
                Tableau : 12 mois - code couleur Utéril / Recommandé /
                Déconseillé (températures, plongée, événements, faune terrestre,
                saisons de floraison, migrations animales)…
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Trousse de pharmacie de voyage à emporter : liste de pharmacie
                adaptée à la destination.
              </p>
            </div>
          ),
        },
        {
          title: "Meilleure période",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "De mai à octobre pour un climat sec et doux, idéal pour explorer les îles.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La pratique recommandée par notre équipe, c'est de voyager entre
                mai et octobre pour profiter de la saison sèche.
              </p>
              <p>
                Tableau : 12 mois - code couleur Utéril / Recommandé /
                Déconseillé (températures, plongée, événements, faune terrestre,
                saisons de floraison, migrations animales)…
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                La période recommandée par notre équipe. Fournir un lien,
                cultures/fêtes locales. Événements locaux majeurs.
              </p>
            </div>
          ),
        },
        {
          title: "Budget & Vie locale",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Franc Pacifique, pourboires et coût de la vie : tout savoir pour bien préparer son budget.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Fourchette par jour / personne. Usage local : monnaie habitudes
                de pourboire. Taux de change.
              </p>
              <p>
                Moyens de paiements courants (attention : wifi justification
                personnelle, tout en local).
              </p>
              <h4 className="font-medium">Moyens de transport sur place :</h4>
              <p>
                Transports type (bateau inter-île, voiture, hydravion, vélo,
                drôle, compréhension par jour).
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                &laquo; Nous organisons systématiquement tous les transferts de
                nos clients : chauffeur privé, taxi-boat, hydravion… &raquo;
              </p>
            </div>
          ),
        },
      ]}
    />
  );
}
