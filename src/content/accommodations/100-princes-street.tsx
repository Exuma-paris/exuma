import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "100-princes-street",
  name: "100 Princes Street",
  blurb:
    "Une maison de trente chambres sur Princes Street, face au château et aux jardins. Le bâtiment abritait autrefois un club de voyageurs, et la décoration en garde le fil : cartes anciennes, malles, cabinets de curiosités. Le bar sert du whisky jusque tard.", // TODO: verify le nombre de chambres
  keywords: ["ecosse", "edimbourg", "princes street", "ville", "whisky"],
  heroImage: {
    src: "/destination/ecosse/hotel-100-princes-street.png",
    alt: "Salon du 100 Princes Street à Édimbourg, avec vue sur le château",
  },
  destinationSlugs: ["ecosse"],
  sections: [],
};
