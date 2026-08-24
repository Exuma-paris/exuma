"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Play } from "@untitledui/icons";
import { TextBlock } from "@/components/blocks/text-block";
import { cn } from "@/lib/utils";

export type VideoSectionProps = {
  eyebrow?: string;
  heading: string;
  video: { src?: string; poster: string; alt?: string };
  /**
   * Quand la vidéo est hébergée ailleurs, le bloc devient un lien vers elle :
   * l'affiche et le bouton lecture restent, mais le clic ouvre la page
   * distante au lieu de tenter une lecture sur place.
   */
  href?: string;
  background?: string;
};

export function VideoSection({
  eyebrow,
  heading,
  video,
  href,
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

        <div className="group/video relative aspect-video w-full overflow-hidden bg-muted">
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${video.alt ?? heading} (s'ouvre dans un nouvel onglet)`}
              className="absolute inset-0 flex items-center justify-center focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-foreground"
            >
              <Image
                src={video.poster}
                alt={video.alt ?? heading}
                fill
                sizes="(min-width: 1024px) 80vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out group-hover/video:scale-[1.02]"
              />
              <span className="relative flex size-16 items-center justify-center rounded-full bg-background/90 text-foreground shadow-deep transition-transform group-hover/video:scale-105">
                <Play className="size-6 translate-x-0.5" fill="currentColor" />
              </span>
            </a>
          ) : (
          <>
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
          </>
          )}
        </div>
      </section>
    </div>
  );
}
