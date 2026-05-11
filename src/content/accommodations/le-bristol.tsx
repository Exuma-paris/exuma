import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "le-bristol",
  name: "Le Bristol Paris",
  blurb: (
    <>
      Faubourg Saint-Honoré, 1925. Un jardin intérieur de 1 200 m²,{" "}
      <strong>hors normes pour un hôtel parisien</strong>. Trois étoiles chez
      Eric Frechon.
    </>
  ),
  keywords: ["paris", "bristol", "palace", "faubourg saint honore", "frechon", "epicure"],
  heroImage: {
    src: "/destination/paris/hotel-bristol.png",
    alt: "Façade du Bristol Paris rue du Faubourg Saint-Honoré",
  },
  destinationSlug: "paris",
  sections: [],
};
