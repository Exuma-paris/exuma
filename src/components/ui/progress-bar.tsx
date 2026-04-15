import { cn } from "@/lib/utils";

export type ProgressBarProps = {
  active: number;
  total: number;
  onSegmentSelect?: (index: number) => void;
  segmentLabel?: (index: number) => string;
  className?: string;
};

export function ProgressBar({
  active,
  total,
  onSegmentSelect,
  segmentLabel = (i) => `Aller à la diapositive ${i + 1}`,
  className,
}: ProgressBarProps) {
  const safeTotal = Math.max(1, total);
  const safeActive = Math.min(safeTotal - 1, Math.max(0, active));

  return (
    <div
      role="progressbar"
      aria-valuenow={safeActive + 1}
      aria-valuemin={1}
      aria-valuemax={safeTotal}
      className={cn("relative h-px w-full max-w-80 bg-border", className)}
    >
      <div
        className="absolute top-0 left-0 h-full bg-foreground transition-transform duration-500 ease-out"
        style={{
          width: `${100 / safeTotal}%`,
          transform: `translateX(${safeActive * 100}%)`,
        }}
      />
      {onSegmentSelect ? (
        <div className="absolute inset-x-0 -inset-y-3 flex">
          {Array.from({ length: safeTotal }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => onSegmentSelect(i)}
              aria-label={segmentLabel(i)}
              className="group flex flex-1 cursor-pointer items-center justify-center focus-visible:outline-none"
            >
              <span className="h-px w-full bg-transparent transition-colors group-hover:bg-foreground/40" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
