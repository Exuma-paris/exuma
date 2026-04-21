"use client";

import { useId, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Map, { Marker, type MapRef } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { TextBlock } from "@/components/blocks/text-block";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type Place = {
  title: string;
  description: string;
  image: { src: string; alt: string };
  coordinates: { lat: number; lng: number };
};

export type PlacesMapSectionProps = {
  eyebrow?: string;
  heading: string;
  description?: string;
  cta?: { label: string; href: string };
  places: Place[];
  mapStyle?: string;
  initialZoom?: number;
  background?: string;
};

const DEFAULT_MAP_STYLE = "https://tiles.openfreemap.org/styles/liberty";

function MapMarkerPin({ size = 60 }: { size?: number }) {
  const id = useId();
  const shadowId = `map-pin-shadow-${id}`;
  const maskId = `map-pin-mask-${id}`;
  const height = (size * 92) / 80;
  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 80 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-foreground"
      aria-hidden
    >
      <g filter={`url(#${shadowId})`}>
        <mask
          id={maskId}
          maskUnits="userSpaceOnUse"
          x="18"
          y="12"
          width="44"
          height="56"
          fill="black"
        >
          <rect fill="white" x="18" y="12" width="44" height="56" />
          <path d="M40 14C51.0457 14 60 22.9543 60 34C60 48.5 46 66 40 66C34 66 20 48 20 34C20 22.9543 28.9543 14 40 14ZM40 24C35.0294 24 31 28.0294 31 33C31 37.9706 35.0294 42 40 42C44.9706 42 49 37.9706 49 33C49 28.0294 44.9706 24 40 24Z" />
        </mask>
        <path
          d="M40 14C51.0457 14 60 22.9543 60 34C60 48.5 46 66 40 66C34 66 20 48 20 34C20 22.9543 28.9543 14 40 14ZM40 24C35.0294 24 31 28.0294 31 33C31 37.9706 35.0294 42 40 42C44.9706 42 49 37.9706 49 33C49 28.0294 44.9706 24 40 24Z"
          fill="currentColor"
        />
        <path
          d="M40 14V16C49.9411 16 58 24.0589 58 34H60H62C62 21.8497 52.1503 12 40 12V14ZM60 34H58C58 40.6853 54.7343 48.2882 50.6014 54.3051C48.5509 57.2905 46.348 59.7944 44.347 61.5271C43.3459 62.3941 42.4318 63.0361 41.646 63.4523C40.8369 63.8808 40.2951 64 40 64V66V68C41.2049 68 42.4131 67.5724 43.5181 66.9872C44.6463 66.3897 45.8104 65.5512 46.9655 64.551C49.277 62.5494 51.6991 59.772 53.8986 56.5699C58.2657 50.2118 62 41.8147 62 34H60ZM40 66V64C39.7174 64 39.1826 63.8815 38.3722 63.4415C37.5864 63.015 36.6715 62.3571 35.6684 61.4703C33.6639 59.6982 31.4577 57.1457 29.4039 54.1254C25.2599 48.0313 22 40.429 22 34H20H18C18 41.571 21.7401 49.9687 26.0961 56.3746C28.2923 59.6043 30.7111 62.4268 33.0191 64.4672C34.1723 65.4866 35.3355 66.3444 36.4638 66.9569C37.5674 67.556 38.7826 68 40 68V66ZM20 34H22C22 24.0589 30.0589 16 40 16V14V12C27.8497 12 18 21.8497 18 34H20ZM40 24V22C33.9249 22 29 26.9249 29 33H31H33C33 29.134 36.134 26 40 26V24ZM31 33H29C29 39.0751 33.9249 44 40 44V42V40C36.134 40 33 36.866 33 33H31ZM40 42V44C46.0751 44 51 39.0751 51 33H49H47C47 36.866 43.866 40 40 40V42ZM49 33H51C51 26.9249 46.0751 22 40 22V24V26C43.866 26 47 29.134 47 33H49Z"
          fill="white"
          mask={`url(#${maskId})`}
        />
      </g>
      <defs>
        <filter
          id={shadowId}
          x="0"
          y="0"
          width="80"
          height="92"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="6" />
          <feGaussianBlur stdDeviation="9" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.285145 0 0 0 0 0.187794 0 0 0 0 0.0647272 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="6" />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.611356 0 0 0 0 0.402697 0 0 0 0 0.141874 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

function fitCenter(places: Place[]): { lng: number; lat: number } {
  if (places.length === 0) return { lng: 0, lat: 0 };
  const sum = places.reduce(
    (acc, p) => ({
      lng: acc.lng + p.coordinates.lng,
      lat: acc.lat + p.coordinates.lat,
    }),
    { lng: 0, lat: 0 },
  );
  return {
    lng: sum.lng / places.length,
    lat: sum.lat / places.length,
  };
}

export function PlacesMapSection({
  eyebrow,
  heading,
  description,
  cta,
  places,
  mapStyle = DEFAULT_MAP_STYLE,
  initialZoom = 5,
  background,
}: PlacesMapSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const mapRef = useRef<MapRef>(null);
  const center = useMemo(() => fitCenter(places), [places]);

  const focus = (i: number) => {
    const place = places[i];
    if (!place) return;
    mapRef.current?.flyTo({
      center: [place.coordinates.lng, place.coordinates.lat],
      zoom: Math.max(initialZoom, 7),
      duration: 800,
    });
  };

  return (
    <div className={cn("w-full", background)}>
      <section className="section-px mx-auto flex w-full max-w-layout flex-col gap-10 py-30">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <TextBlock
            align="left"
            eyebrow={eyebrow}
            heading={heading}
            headingLevel="h2"
            paragraph={description}
          />
          {cta ? (
            <Link
              href={cta.href}
              className={cn(buttonVariants(), "bg-foreground text-background")}
            >
              {cta.label}
            </Link>
          ) : null}
        </div>

        <div className="grid gap-3 md:grid-cols-2 md:aspect-2/1">
          <ul className="flex aspect-square min-h-0 flex-col gap-3 overflow-y-auto bg-background p-4 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-border md:aspect-auto md:h-full">
            {places.map((place, i) => {
              const isActive = activeIndex === i;
              return (
                <li key={i}>
                  <button
                    type="button"
                    onMouseEnter={() => setActiveIndex(i)}
                    onMouseLeave={() => setActiveIndex(null)}
                    onFocus={() => setActiveIndex(i)}
                    onBlur={() => setActiveIndex(null)}
                    onClick={() => focus(i)}
                    className={cn(
                      "flex w-full cursor-pointer items-start gap-4 p-2 text-left transition-colors",
                      isActive ? "bg-foreground/3" : "",
                    )}
                  >
                    <div className="relative aspect-square w-20 shrink-0 overflow-hidden bg-muted">
                      <Image
                        src={place.image.src}
                        alt={place.image.alt}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-foreground">{place.title}</h3>
                      <p className="text-secondary-foreground">
                        {place.description}
                      </p>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="relative flex aspect-square h-full w-full flex-col overflow-hidden bg-muted md:aspect-auto">
            <div className="relative flex-1">
            <Map
              ref={mapRef}
              mapStyle={mapStyle}
              initialViewState={{
                longitude: center.lng,
                latitude: center.lat,
                zoom: initialZoom,
              }}
              style={{ width: "100%", height: "100%" }}
              attributionControl={false}
              scrollZoom={false}
              dragPan={false}
              dragRotate={false}
              doubleClickZoom={false}
              touchZoomRotate={false}
              touchPitch={false}
              boxZoom={false}
              keyboard={false}
            >
              {places.map((place, i) => {
                const isActive = activeIndex === i;
                return (
                  <Marker
                    key={i}
                    longitude={place.coordinates.lng}
                    latitude={place.coordinates.lat}
                    anchor="bottom"
                  >
                    <button
                      type="button"
                      aria-label={place.title}
                      onMouseEnter={() => setActiveIndex(i)}
                      onMouseLeave={() => setActiveIndex(null)}
                      onFocus={() => setActiveIndex(i)}
                      onBlur={() => setActiveIndex(null)}
                      onClick={() => focus(i)}
                      className={cn(
                        "block cursor-pointer transition-transform",
                        isActive && "scale-110",
                      )}
                    >
                      <MapMarkerPin />
                    </button>
                  </Marker>
                );
              })}
            </Map>
            </div>
            <p className="bg-background px-2 py-1 text-[11px] text-secondary-foreground">
              © {" "}
              <a
                href="https://www.openstreetmap.org/copyright"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                OpenStreetMap
              </a>{" "}
              contributors, ©{" "}
              <a
                href="https://openmaptiles.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                OpenMapTiles
              </a>
              , ©{" "}
              <a
                href="https://openfreemap.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                OpenFreeMap
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
