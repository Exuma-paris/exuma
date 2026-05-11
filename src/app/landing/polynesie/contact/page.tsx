"use client";

import { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { SimpleHeader } from "@/components/sections/simple-header";
import { StepProgress } from "@/components/ui/step-progress";
import { SelectTile } from "@/components/ui/select-tile";
import { Button } from "@/components/ui/button";

const TOTAL_STEPS = 9;

type Question = {
  eyebrow: string;
  heading: string;
  options: { id: string; label: string }[];
};

// TODO: define real questions for steps 2–9. The progress bar still ticks
// through 9 steps so we can preview the flow, but the same first-question
// content renders for every step until the rest is authored.
const QUESTIONS: Question[] = [
  {
    eyebrow: "Créer votre voyage",
    heading: "Quelle expérience recherchez-vous en Polynésie ?",
    options: [
      { id: "lagon", label: "Lagon et plages iconiques" },
      { id: "culture", label: "Immersion culturelle polynésienne" },
      { id: "nature", label: "Nature & randonnées (îles hautes)" },
      { id: "exclusif", label: "Séjour ultra-exclusif / île privée" },
    ],
  },
];

const CONTACT_CTA = {
  label: "Contactez-nous",
  href: "/contact",
  // TODO: replace with /collaborateurs/stephane.jpg when on disk
  avatar: {
    src: "/destination/polynesie/hero-1.png",
    alt: "Stéphane, votre travel designer",
  },
  statusOnline: true,
};

const TESTIMONIAL = {
  image: {
    src: "/destination/polynesie/hero-2.png",
    alt: "Lagon de Polynésie française",
  },
  rating: 5,
  // TODO: replace with real testimonial
  quote: "« Le meilleur voyage de ma vie »",
  attribution:
    "Exuma nous a organisé un voyage incroyable, c'est complètement fou.",
};

export default function ContactFlowPage() {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState<Record<number, Set<string>>>({});

  const currentQuestion = QUESTIONS[Math.min(step - 1, QUESTIONS.length - 1)];
  const currentSelected = selections[step] ?? new Set<string>();

  const toggle = (id: string) => {
    setSelections((prev) => {
      const set = new Set(prev[step] ?? []);
      if (set.has(id)) set.delete(id);
      else set.add(id);
      return { ...prev, [step]: set };
    });
  };

  const goNext = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  const goPrev = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <div className="flex min-h-screen bg-background-subtle">
      <div className="flex flex-1 flex-col">
        <SimpleHeader contactCta={CONTACT_CTA} />

        <div className="flex flex-1 flex-col items-center justify-center px-6 py-12">
          <div className="flex w-full max-w-110 flex-col gap-10">
            <div className="flex flex-col items-center gap-5">
              <StepProgress step={step} total={TOTAL_STEPS} />
              <div className="flex flex-col items-center gap-1 text-center">
                <p className="text-eyebrow text-primary">
                  {currentQuestion.eyebrow}
                </p>
                <h2 className="text-h2 text-foreground">
                  {currentQuestion.heading}
                </h2>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              {currentQuestion.options.map((opt) => (
                <SelectTile
                  key={opt.id}
                  label={opt.label}
                  selected={currentSelected.has(opt.id)}
                  onToggle={() => toggle(opt.id)}
                />
              ))}
            </div>

            <div className="flex gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={goPrev}
                disabled={step === 1}
                className="h-10 flex-1"
              >
                Précédent
              </Button>
              <Button
                type="button"
                onClick={goNext}
                disabled={step >= TOTAL_STEPS}
                className="h-10 flex-1 bg-foreground text-background"
              >
                Continuer
              </Button>
            </div>
          </div>
        </div>
      </div>

      <aside className="hidden w-130 shrink-0 flex-col border-l border-border bg-background lg:flex">
        <div className="p-5">
          <div className="relative aspect-[478/597] w-full overflow-hidden">
            <Image
              src={TESTIMONIAL.image.src}
              alt={TESTIMONIAL.image.alt}
              fill
              sizes="520px"
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center px-10 pb-10">
          <div className="flex w-full max-w-90 flex-col items-center gap-3 text-center">
            <div className="flex gap-0.5">
              {Array.from({ length: TESTIMONIAL.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="size-3.5 text-primary"
                  fill="currentColor"
                  strokeWidth={0}
                />
              ))}
            </div>
            <p className="text-h3 text-foreground">{TESTIMONIAL.quote}</p>
            <p className="text-[14px] leading-[1.6] text-secondary-foreground">
              {TESTIMONIAL.attribution}
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}
