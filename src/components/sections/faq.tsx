import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

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

export function FaqSection({
  eyebrow = "FAQ",
  heading,
  contact,
  items,
  background,
}: FaqSectionProps) {
  return (
    <div className={cn("w-full", background)}>
      <section className="mx-auto grid w-full max-w-layout gap-10 section-px py-16 md:grid-cols-2 md:gap-20">
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
