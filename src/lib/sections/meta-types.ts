export type LengthRule = {
  chars?: { target?: number; max?: number; min?: number };
};

export type ImageSpec = {
  role: string;
  ratio?: string;
};

export type SlotRule = {
  role: string;
  required: boolean;
  length?: LengthRule;
  image?: ImageSpec;
  slots?: Record<string, SlotRule | ArraySlotRule>;
};

export type ArraySlotRule = SlotRule & {
  itemCount: { exact?: number; min?: number; max?: number };
  perItem: SlotRule;
};

export type SectionMeta = {
  type: string;
  intent: string;
  slots: Record<string, SlotRule | ArraySlotRule>;
};

export function isArraySlot(slot: SlotRule | ArraySlotRule): slot is ArraySlotRule {
  return "itemCount" in slot;
}
