import type { SectionMeta } from "./meta-types";

export const imageDuoWithTextMeta = {
  type: "imageDuoWithText",
  intent: "Cultural duo — paired square images on top, then an editorial heading and 2 paragraphs below. Composite of ImageDuoSection + TextColumnsSection. On a destination page this fills the 'Notre coup de cœur' slot.",
  slots: {
    duo: {
      role: "Paired square images.",
      required: true,
      slots: {
        left: {
          role: "Left image of the pair.",
          required: true,
          image: { role: "cultural duo (left)", ratio: "1:1" },
        },
        right: {
          role: "Right image of the pair.",
          required: true,
          image: { role: "cultural duo (right)", ratio: "1:1" },
        },
      },
    },
    text: {
      role: "Editorial block under the duo.",
      required: true,
      slots: {
        eyebrow: {
          role: "Lead-in label above the heading.",
          required: false,
          length: { chars: { max: 60 } },
        },
        heading: {
          role: "Block <h2>.",
          required: true,
          length: { chars: { max: 70 } },
        },
        columns: {
          role: "Editorial paragraphs.",
          required: true,
          itemCount: { exact: 2 },
          perItem: {
            role: "One editorial paragraph.",
            required: true,
            length: { chars: { target: 300, max: 480, min: 180 } },
          },
        },
      },
    },
  },
} as const satisfies SectionMeta;

export const entityListMeta = {
  type: "entityList",
  intent: "Renders a row of feature cards from referenced entities (experiences, accommodations, or destinations). Each card's title, blurb, and image come from the referenced entity file. The section itself only owns its eyebrow / heading / description / CTA / list of slug references.",
  slots: {
    kind: {
      role: "Entity kind: 'experience' | 'accommodation' | 'destination'.",
      required: true,
      length: { chars: { max: 20 } },
    },
    eyebrow: {
      role: "Lead-in label above the heading.",
      required: false,
      length: { chars: { max: 60 } },
    },
    heading: {
      role: "Section <h2>.",
      required: true,
      length: { chars: { max: 70 } },
    },
    description: {
      role: "Optional sub-paragraph under the heading.",
      required: false,
      length: { chars: { target: 220, max: 320 } },
    },
    slugs: {
      role: "Slug references to existing entities. Card data (title, blurb, image) is pulled from each referenced entity file.",
      required: true,
      itemCount: { exact: 3, min: 1, max: 6 },
      perItem: {
        role: "One slug — must match an existing entity in the registry.",
        required: true,
        length: { chars: { max: 60 } },
      },
    },
  },
} as const satisfies SectionMeta;
