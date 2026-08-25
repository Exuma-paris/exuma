"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Star01 as Star } from "@untitledui/icons";
import { SimpleHeader, type SimpleHeaderProps } from "@/components/sections/simple-header";
import { StepProgress } from "@/components/ui/step-progress";
import { Button } from "@/components/ui/button";
import { RenderQuestion } from "@/components/contact/render-question";
import {
  emptyAnswer,
  isAnswered,
  type Answer,
  type AnswersMap,
  type Question,
} from "@/lib/contact/types";
import { cn } from "@/lib/utils";

export type ContactFlowAside = {
  image: { src: string; alt: string };
  rating: number;
  quote: string;
  attribution: string;
};

/**
 * The step-by-step brief funnel, shared by the per-destination landing flow
 * (`/landing/<slug>/contact`) and the site-wide one (`/votre-projet`).
 * Everything destination-specific arrives through props so neither caller
 * needs its own copy of the stepper.
 */
export function ContactFlow({
  questions,
  contactCta,
  aside,
  submitRedirect,
}: {
  questions: Question[];
  contactCta?: SimpleHeaderProps["contactCta"];
  aside?: ContactFlowAside | null;
  submitRedirect: string;
}) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<AnswersMap>({});
  const [submitting, setSubmitting] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const total = questions.length;
  const question = questions[step - 1];
  const answer = answers[question.id];
  // Validate against the default rather than `undefined`, so a step that ships
  // a meaningful default (two adults) counts as answered without forcing the
  // visitor to nudge a control just to unlock the button. Steps whose default
  // is genuinely empty still block, exactly as before.
  const canContinue = isAnswered(question, answer ?? emptyAnswer(question));
  const isLastStep = step === total;
  const continueLabel = isLastStep ? "Envoyer ma demande" : "Continuer";

  const setAnswer = (next: Answer) => {
    setAnswers((prev) => ({ ...prev, [question.id]: next }));
  };

  const goPrev = () => {
    setDirection("prev");
    setStep((s) => Math.max(s - 1, 1));
  };

  const goNext = () => {
    // Persist an untouched default (see `canContinue`) so it is part of the
    // payload once submission is wired, not silently dropped.
    if (!answer) {
      setAnswers((prev) => ({ ...prev, [question.id]: emptyAnswer(question) }));
    }
    if (isLastStep) {
      // TODO: POST `answers` to a real submission endpoint when one exists.
      setSubmitting(true);
      router.push(submitRedirect);
      return;
    }
    setDirection("next");
    setStep((s) => Math.min(s + 1, total));
  };

  return (
    <div className="flex min-h-screen bg-background-subtle">
      <div className="flex flex-1 flex-col">
        <SimpleHeader contactCta={contactCta} logoHref={null} />

        <div className="flex flex-1 flex-col items-center px-6 py-12">
          <div className="flex w-full max-w-110 flex-col gap-10">
            <div className="flex flex-col items-center gap-5">
              <StepProgress step={step} total={total} />
              <div className="flex flex-col items-center gap-1 text-center">
                {question.eyebrow ? (
                  <p className="text-eyebrow text-primary">{question.eyebrow}</p>
                ) : null}
                <h2 className="text-h2 text-foreground">{question.heading}</h2>
                {question.description ? (
                  <p className="mt-2 text-[14px] leading-[1.6] text-secondary-foreground">
                    {question.description}
                  </p>
                ) : null}
              </div>
            </div>

            <div
              key={step}
              className={cn(
                "animate-in fade-in duration-200 ease-out",
                direction === "next"
                  ? "slide-in-from-right-4"
                  : "slide-in-from-left-4",
              )}
            >
              <RenderQuestion
                question={question}
                answer={answer}
                onChange={setAnswer}
              />
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
                disabled={!canContinue || submitting}
                className="h-10 flex-1 bg-foreground text-background"
              >
                {continueLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {aside ? (
        <aside className="hidden w-130 shrink-0 flex-col border-l border-border bg-background lg:flex">
          <div className="p-5">
            <div className="relative aspect-478/597 w-full overflow-hidden">
              <Image
                src={aside.image.src}
                alt={aside.image.alt}
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
                {Array.from({ length: aside.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-3.5 text-primary"
                    fill="currentColor"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <p className="text-h3 text-foreground">{aside.quote}</p>
              <p className="text-[14px] leading-[1.6] text-secondary-foreground">
                {aside.attribution}
              </p>
            </div>
          </div>
        </aside>
      ) : null}
    </div>
  );
}
