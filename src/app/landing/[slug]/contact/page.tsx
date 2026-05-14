"use client";

import { useState } from "react";
import Image from "next/image";
import { notFound, useParams, useRouter } from "next/navigation";
import { Star01 as Star } from "@untitledui/icons";
import { SimpleHeader } from "@/components/sections/simple-header";
import { StepProgress } from "@/components/ui/step-progress";
import { Button } from "@/components/ui/button";
import { RenderQuestion } from "@/components/contact/render-question";
import {
  isAnswered,
  type Answer,
  type AnswersMap,
} from "@/lib/contact/types";
import { cn } from "@/lib/utils";
import { EXUMA_PHONE } from "@/lib/exuma";
import { getDestinationSpecialist } from "@/lib/content/queries";
import { destinations } from "@/lib/content/registry";

// TODO: move testimonial onto destination data when we have real per-destination
// quotes. For now uses the destination's first hero image as a placeholder visual.
function buildTestimonial(slug: string, destinationName: string) {
  return {
    image: {
      src: `/destination/${slug}/hero-2.png`,
      alt: `Voyage en ${destinationName}`,
    },
    rating: 5,
    quote: "« Le meilleur voyage de ma vie »",
    attribution:
      "Exuma nous a organisé un voyage incroyable, c'est complètement fou.",
  };
}

export default function ContactFlowPage() {
  const router = useRouter();
  const { slug } = useParams<{ slug: string }>();
  const destination = destinations[slug];

  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<AnswersMap>({});
  const [submitting, setSubmitting] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  // 404 if the destination doesn't exist or doesn't have a contact funnel.
  if (!destination?.contactQuestions?.length) notFound();

  const questions = destination.contactQuestions;
  const total = questions.length;
  const question = questions[step - 1];
  const answer = answers[question.id];
  const canContinue = isAnswered(question, answer);
  const isLastStep = step === total;
  const continueLabel = isLastStep ? "Envoyer ma demande" : "Continuer";

  const specialist = getDestinationSpecialist(slug);
  const specialistAvatar = specialist?.profileImage ?? specialist?.image;
  const contactCta = {
    label: "Contactez-nous",
    phone: EXUMA_PHONE,
    avatar: specialistAvatar,
    statusOnline: true,
  };
  const testimonial = buildTestimonial(slug, destination.name);
  const submitRedirect = `/landing/${slug}/merci`;

  const setAnswer = (next: Answer) => {
    setAnswers((prev) => ({ ...prev, [question.id]: next }));
  };

  const goPrev = () => {
    setDirection("prev");
    setStep((s) => Math.max(s - 1, 1));
  };

  const goNext = () => {
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

      <aside className="hidden w-130 shrink-0 flex-col border-l border-border bg-background lg:flex">
        <div className="p-5">
          <div className="relative aspect-478/597 w-full overflow-hidden">
            <Image
              src={testimonial.image.src}
              alt={testimonial.image.alt}
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
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="size-3.5 text-primary"
                  fill="currentColor"
                  strokeWidth={0}
                />
              ))}
            </div>
            <p className="text-h3 text-foreground">{testimonial.quote}</p>
            <p className="text-[14px] leading-[1.6] text-secondary-foreground">
              {testimonial.attribution}
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}
