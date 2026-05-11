import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import type { SectionMeta } from "@/lib/sections/meta-types";

export type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

export type FaqSectionProps = {
  eyebrow?: string;
  heading: string;
  contact?: { prefix: string; label: string; href: string; suffix: string };
  items: FaqItem[];
  background?: string;
};

export const faqMeta = {
  type: "faq",
  intent: "FAQ accordion — also feeds the FAQPage JSON-LD that triggers Google 'People Also Ask' rich results.",
  slots: {
    eyebrow: {
      role: "Lead-in label (defaults to 'FAQ').",
      required: false,
      length: { chars: { max: 20 } },
    },
    heading: {
      role: "Section <h2>.",
      required: true,
      length: { chars: { max: 50 } },
    },
    items: {
      role: "Question/answer pairs.",
      required: true,
      itemCount: { exact: 6, min: 4, max: 8 },
      perItem: {
        role: "One Q&A. Question must be a real Google query as a user would type it.",
        required: true,
        slots: {
          question: {
            role: "User-typed question (mirrors Google 'People Also Ask').",
            required: true,
            length: { chars: { target: 60, max: 100 } },
          },
          answer: {
            role: "Direct factual answer. Plain string preferred — JSX answers are skipped from the FAQPage JSON-LD.",
            required: true,
            length: { chars: { target: 280, max: 480, min: 120 } },
          },
        },
      },
    },
  },
} as const satisfies SectionMeta;

export function FaqSection({
  eyebrow = "FAQ",
  heading,
  contact,
  items,
  background,
}: FaqSectionProps) {
  return (
    <div className={cn("w-full", background)}>
      <section className="mx-auto grid w-full max-w-layout gap-10 section-px py-30 md:grid-cols-2 md:gap-20">
        <div className="flex flex-col gap-3">
          {eyebrow ? (
            <p className="text-eyebrow text-primary">{eyebrow}</p>
          ) : null}
          <h2 className="text-h2 max-w-180">{heading}</h2>
          {contact ? (
            <p className="max-w-120 text-secondary-foreground">
              {contact.prefix}
              <Link
                href={contact.href}
                className="text-foreground underline decoration-1 underline-offset-4"
              >
                {contact.label}
              </Link>
              {contact.suffix}
            </p>
          ) : null}
        </div>

        <Accordion>
          {items.map((item, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
