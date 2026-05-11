import { cn } from "@/lib/utils";

export type StepProgressProps = {
  step: number;
  total: number;
  className?: string;
  ariaLabel?: string;
};

export function StepProgress({
  step,
  total,
  className,
  ariaLabel,
}: StepProgressProps) {
  return (
    <div
      role="progressbar"
      aria-valuenow={step}
      aria-valuemin={1}
      aria-valuemax={total}
      aria-label={ariaLabel ?? `Étape ${step} sur ${total}`}
      className={cn("flex items-start gap-1", className)}
    >
      {Array.from({ length: total }).map((_, i) => {
        const isActive = i === step - 1;
        return (
          <span
            key={i}
            aria-hidden
            className={cn(
              "h-0.5 rounded-full transition-all",
              isActive ? "w-8 bg-foreground" : "w-4 bg-border",
            )}
          />
        );
      })}
    </div>
  );
}
