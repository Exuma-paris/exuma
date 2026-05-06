import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "le-bristol",
  name: "Le Bristol Paris",
  blurb: (
    <>
      Rue du Faubourg Saint-Honoré, palace de 1925. Un jardin intérieur de
      1 200 m², <strong>hors normes pour un hôtel parisien</strong>, où
      s&apos;organisent les petits-déjeuners au printemps. Les deux chats
      angoras Fa-Raon et Kléopâtre traversent les couloirs sans qu&apos;on
      s&apos;en étonne. La table d&apos;Eric Frechon a trois étoiles depuis
      2009.
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
