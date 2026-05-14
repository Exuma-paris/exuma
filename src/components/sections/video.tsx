"use client";

import { useRef, useState } from "react";
import { Play } from "@untitledui/icons";
import { TextBlock } from "@/components/blocks/text-block";
import { cn } from "@/lib/utils";

export type VideoSectionProps = {
  eyebrow?: string;
  heading: string;
  video: { src: string; poster: string; alt?: string };
  background?: string;
};

export function VideoSection({
  eyebrow,
  heading,
  video,
  background,
}: VideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    const el = videoRef.current;
    if (!el) return;
    el.play();
    setPlaying(true);
  };

  return (
    <div className={cn("w-full", background)}>
      <section className="mx-auto flex w-full max-w-layout flex-col gap-10 section-px section-py">
        <TextBlock
          align="center"
          eyebrow={eyebrow}
          heading={heading}
          headingLevel="h2"
        />

        <div className="relative aspect-video w-full overflow-hidden bg-muted">
          <video
            ref={videoRef}
            src={video.src}
            poster={video.poster}
            aria-label={video.alt ?? heading}
            playsInline
            controls={playing}
            onEnded={() => setPlaying(false)}
            onPause={() => setPlaying(false)}
            className="h-full w-full object-cover"
          />
          {!playing ? (
            <button
              type="button"
              onClick={handlePlay}
              aria-label="Lire la vidéo"
              className="absolute inset-0 flex items-center justify-center focus-visible:outline-none"
            >
              <span className="flex size-16 items-center justify-center rounded-full bg-background/90 text-foreground shadow-deep transition-transform group-hover:scale-105 hover:scale-105">
                <Play className="size-6 translate-x-0.5" fill="currentColor" />
              </span>
            </button>
          ) : null}
        </div>
      </section>
    </div>
  );
}
