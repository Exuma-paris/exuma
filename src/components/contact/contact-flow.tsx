"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
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
  isStaleAnswer,
  resolveQuestion,
  type Answer,
  type AnswersMap,
  type Question,
} from "@/lib/contact/types";
import { pushDataLayer } from "@/lib/analytics/datalayer";
import { getAttribution } from "@/lib/analytics/attribution";
import { formStepOrdinal } from "@/lib/analytics/cta-events";
import {
  contactUserData,
  encodeAnswers,
} from "@/lib/analytics/encode-answers";
import {
  buildSubmission,
  HONEYPOT_FIELD,
  submitContact,
  SubmissionError,
} from "@/lib/contact/submit";
import { cn } from "@/lib/utils";

export type ContactFlowAside = {
  image: { src: string; alt: string };
  rating: number;
  quote: string;
  attribution: string;
};

/**
 * Réponses et écran en cours, gardés le temps de la session : un rechargement
 * ou un aller-retour sur le site ne font rien perdre. Effacé à l'envoi.
 */
type StoredProgress = { step: number; answers: AnswersMap };
const storageKey = (product: string) => `exuma-form:${product}`;

function readProgress(product: string): StoredProgress | null {
  try {
    const raw = sessionStorage.getItem(storageKey(product));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredProgress;
    return typeof parsed.step === "number" && parsed.answers ? parsed : null;
  } catch {
    return null;
  }
}

function writeProgress(product: string, progress: StoredProgress): void {
  try {
    sessionStorage.setItem(storageKey(product), JSON.stringify(progress));
  } catch {
    // Stockage indisponible : le formulaire marche, il n'est juste pas repris.
  }
}

function clearProgress(product: string): void {
  try {
    sessionStorage.removeItem(storageKey(product));
  } catch {
    // Rien à effacer.
  }
}

/**
 * Délai entre un choix unique et l'écran suivant : assez pour voir la
 * sélection se poser, pas assez pour avoir l'impression d'attendre.
 */
const AUTO_ADVANCE_MS = 350;

/**
 * The step-by-step brief funnel, shared by the per-destination landing flow
 * (`/landing/<slug>/contact`) and the site-wide one (`/votre-projet`).
 * Everything destination-specific arrives through props so neither caller
 * needs its own copy of the stepper.
 */
export function ContactFlow({
  questions,
  product,
  contactCta,
  aside,
  submitRedirect,
  initialAnswers,
  exitHref = "/",
}: {
  questions: Question[];
  /**
   * Nom du formulaire dans le dataLayer (`product` sur chaque événement) :
   * `polynesie`, `votre-projet`, `nous-ecrire`, `pro-contact`,
   * `pro-engagement`, `pro-groupes`.
   */
  product: string;
  contactCta?: SimpleHeaderProps["contactCta"];
  aside?: ContactFlowAside | null;
  submitRedirect: string;
  /** Où mène la croix quand rien ne précède le formulaire dans l'historique. */
  exitHref?: string;
  /**
   * Answers already known before the first screen — typically what the page
   * the visitor came from says about them. Prefilled, never locked: the
   * visitor can change any of it, and a wrong guess costs one tap.
   */
  initialAnswers?: AnswersMap;
}) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<AnswersMap>(initialAnswers ?? {});
  const [submitting, setSubmitting] = useState(false);
  // Message affiché sous les boutons quand l'envoi a échoué.
  const [error, setError] = useState<string | null>(null);
  // Champ piège anti-robots, jamais affiché : voir `submitContact`.
  const [honeypot, setHoneypot] = useState("");
  const [direction, setDirection] = useState<"next" | "prev">("next");
  // Vrai une fois la session relue : le suivi et la sauvegarde attendent,
  // sinon le premier rendu écraserait ce qui était enregistré.
  const [ready, setReady] = useState(false);
  const [autoAdvance, setAutoAdvance] = useState(false);

  const total = questions.length;
  // A question can depend on what came before it — the budget scale narrows
  // for a short trip. Resolve it against the answers rather than reading the
  // authored version straight off the list.
  const question = resolveQuestion(questions[step - 1], answers);
  const stored = answers[question.id];
  // Walking back and changing the dates can swap the option set under a choice
  // already made. Rather than keep a value that is no longer on screen, drop
  // it and ask again — one tap, and the payload stays truthful.
  const answer = isStaleAnswer(question, stored) ? undefined : stored;
  // Validate against the default rather than `undefined`, so a step that ships
  // a meaningful default (two adults) counts as answered without forcing the
  // visitor to nudge a control just to unlock the button. Steps whose default
  // is genuinely empty still block, exactly as before.
  const canContinue = isAnswered(question, answer ?? emptyAnswer(question));
  const isLastStep = step === total;
  const continueLabel = !isLastStep
    ? "Continuer"
    : submitting
      ? "Envoi en cours…"
      : "Envoyer ma demande";

  // Reprise : ce que la session a gardé repasse par-dessus le pré-remplissage,
  // puisque c'est plus récent. Lu une fois, au montage.
  useEffect(() => {
    const saved = readProgress(product);
    /* eslint-disable react-hooks/set-state-in-effect -- synchronisation
       unique avec le stockage de session, impossible avant le montage. */
    if (saved) {
      setAnswers((prev) => ({ ...prev, ...saved.answers }));
      setStep(Math.min(Math.max(saved.step, 1), total));
    }
    setReady(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [product, total]);

  useEffect(() => {
    if (!ready) return;
    writeProgress(product, { step, answers });
  }, [ready, product, step, answers]);

  // Suivi des écrans : `form.view_second` … `form.view_last`, une seule fois
  // par écran et par visite (un retour arrière ne recompte pas), avec les
  // réponses déjà données, y compris une réponse pré-remplie de l'écran
  // affiché (`?destination=`). Même convention que l'ancien tunnel Webflow.
  const viewedSteps = useRef(new Set<number>());
  useEffect(() => {
    if (!ready || viewedSteps.current.has(step)) return;
    viewedSteps.current.add(step);
    pushDataLayer({
      event: `form.view_${formStepOrdinal(step, total)}`,
      product,
      ...encodeAnswers(questions, answers, step),
    });
  }, [ready, step, total, product, questions, answers]);

  // Le bouton d'envoi pousse aussi `click_primary` + `click_submit`, via
  // l'écouteur global (voir components/analytics/click-events).
  const submitEventAttrs = isLastStep
    ? { "data-event-button": "click_primary, click_submit", "data-event-id": "form-submit" }
    : {};

  // La croix rend la main d'où l'on vient. Sans historique — un lien ouvert
  // dans un nouvel onglet, par exemple — elle ramène à l'accueil plutôt que
  // de ne rien faire.
  const exit = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
      return;
    }
    router.push(exitHref);
  };

  const setAnswer = (next: Answer) => {
    setError(null);
    setAnswers((prev) => ({ ...prev, [question.id]: next }));
    // Un choix unique ou un oui / non suffit à répondre : on enchaîne sans
    // attendre le bouton, qui reste affiché pour qui revient en arrière et
    // veut repartir sans toucher à son choix.
    if ((question.type === "single" || question.type === "boolean") && !isLastStep) {
      setAutoAdvance(true);
    }
  };

  const goPrev = () => {
    setAutoAdvance(false);
    setError(null);
    setDirection("prev");
    setStep((s) => Math.max(s - 1, 1));
  };

  // L'envoi : la demande part vers `/api/contact`, qui la relaie vers Make.
  // `form.submit`, la conversion, n'est poussé qu'une fois l'envoi accepté :
  // les réponses en identifiants, les coordonnées dans `user_data`
  // (conversions avancées), l'origine de la visite (utm, gclid, page
  // d'arrivée) comme les champs cachés de l'ancien formulaire, jamais de
  // texte libre. Et avant la redirection, sinon la page merci l'emporte et
  // l'événement est perdu. En cas d'échec, les réponses restent à l'écran,
  // le bouton se réarme et `form.error` part à la place.
  const submit = async () => {
    const finalAnswers = answer
      ? answers
      : { ...answers, [question.id]: emptyAnswer(question) };
    setSubmitting(true);
    setError(null);
    try {
      await submitContact(
        buildSubmission(product, questions, finalAnswers),
        honeypot,
      );
    } catch (err) {
      setSubmitting(false);
      setError(
        "L'envoi n'a pas abouti. Vérifiez votre connexion et réessayez : vos réponses sont conservées.",
      );
      pushDataLayer({
        event: "form.error",
        product,
        error_status: err instanceof SubmissionError ? err.status : 0,
      });
      return;
    }
    pushDataLayer({
      event: "form.submit",
      product,
      user_data: contactUserData(finalAnswers),
      ...encodeAnswers(questions, finalAnswers),
      ...getAttribution(),
    });
    clearProgress(product);
    router.push(submitRedirect);
  };

  const goNext = () => {
    setAutoAdvance(false);
    // Persist an untouched default (see `canContinue`) so it is part of the
    // payload, not silently dropped.
    if (!answer) {
      setAnswers((prev) => ({ ...prev, [question.id]: emptyAnswer(question) }));
    }
    if (isLastStep) {
      if (!submitting) void submit();
      return;
    }
    setDirection("next");
    setStep((s) => Math.min(s + 1, total));
  };

  // Toujours la dernière version de `goNext`, pour le minuteur ci-dessous.
  const goNextRef = useRef(goNext);
  useEffect(() => {
    goNextRef.current = goNext;
  });

  useEffect(() => {
    if (!autoAdvance || !canContinue) return;
    const timer = setTimeout(() => goNextRef.current(), AUTO_ADVANCE_MS);
    return () => clearTimeout(timer);
  }, [autoAdvance, canContinue, step]);

  // À chaque changement d'écran, le focus va sur le titre de la question :
  // un lecteur d'écran l'annonce, et le clavier repart du haut au lieu de
  // rester sur le bouton, désormais sous une autre question. Un champ qui a
  // déjà pris le focus (`autoFocus`) le garde, pour taper sans détour.
  const headingRef = useRef<HTMLHeadingElement>(null);
  const previousStep = useRef(step);
  useEffect(() => {
    if (previousStep.current === step) return;
    previousStep.current = step;
    const active = document.activeElement;
    if (active instanceof HTMLInputElement || active instanceof HTMLTextAreaElement) {
      return;
    }
    headingRef.current?.focus();
  }, [step]);

  // Entrée vaut « Continuer » dans un champ. Dans une zone de texte, où la
  // touche fait un retour à la ligne, c'est Cmd ou Ctrl + Entrée. Une liste
  // de suggestions ouverte garde la touche pour elle (voir `destination`).
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Enter" || event.defaultPrevented) return;
    const target = event.target as HTMLElement;
    if (target.tagName === "BUTTON" || target.tagName === "A") return;
    if (target.tagName === "TEXTAREA" && !(event.metaKey || event.ctrlKey)) return;
    if (!canContinue || submitting) return;
    event.preventDefault();
    goNext();
  };

  return (
    <div className="flex min-h-screen bg-background-subtle" onKeyDown={onKeyDown}>
      <div className="flex flex-1 flex-col">
        <SimpleHeader contactCta={contactCta} logoHref={null} onClose={exit} />

        <div className="flex flex-1 flex-col items-center px-6 py-12">
          <div className="flex w-full max-w-110 flex-col gap-10">
            <div className="flex flex-col items-center gap-5">
              <StepProgress step={step} total={total} />
              <div className="flex flex-col items-center gap-1 text-center">
                {question.eyebrow ? (
                  <p className="text-eyebrow text-primary">{question.eyebrow}</p>
                ) : null}
                <h2
                  ref={headingRef}
                  tabIndex={-1}
                  className="text-h2 text-foreground outline-none"
                >
                  {question.heading}
                </h2>
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

            <div aria-hidden="true" className="sr-only">
              <label htmlFor={`${product}-${HONEYPOT_FIELD}`}>
                Ne pas remplir ce champ
              </label>
              <input
                id={`${product}-${HONEYPOT_FIELD}`}
                name={HONEYPOT_FIELD}
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(event) => setHoneypot(event.target.value)}
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
                {...submitEventAttrs}
              >
                {continueLabel}
              </Button>
            </div>
            {error ? (
              <p role="alert" className="text-[14px] leading-[1.6] text-destructive">
                {error}
              </p>
            ) : null}
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
