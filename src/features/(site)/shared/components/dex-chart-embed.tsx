"use client";

import { LineChart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { CONTRACT } from "../constants";

const chartHeight = "h-64 sm:h-96 lg:h-125";

export function DexChartEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const src = `https://dexscreener.com/bsc/${CONTRACT.address}?embed=1&theme=dark&trades=0&info=0`;

  return (
    <div ref={containerRef}>
      <div className="overflow-hidden border border-ice/20 bg-surface/80 backdrop-blur-sm sm:rounded-2xl">
        {!shouldLoad ? (
          <div
            className={cn(
              "flex flex-col items-center justify-center gap-4 px-5 text-center sm:px-6",
              chartHeight,
            )}
          >
            <LineChart className="size-9 text-ice/60 sm:size-10" aria-hidden />
            <p className="max-w-xs text-xs text-slate-400 sm:text-sm">
              Chart loads when you scroll here — keeps the page fast.
            </p>
            <button
              type="button"
              onClick={() => setShouldLoad(true)}
              className="rounded-full bg-ice-bright px-5 py-2.5 text-sm font-semibold text-background transition hover:bg-ice-glow"
            >
              Load chart now
            </button>
          </div>
        ) : (
          <div className={cn("relative", chartHeight)}>
            {!isLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-surface">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-ice/30 border-t-ice-bright" />
                <p className="text-xs text-slate-400 sm:text-sm">Loading chart…</p>
              </div>
            )}
            <iframe
              title="DexScreener chart"
              src={src}
              className={cn(
                "h-full w-full border-0 transition-opacity duration-300",
                isLoaded ? "opacity-100" : "opacity-0",
              )}
              allow="clipboard-write"
              loading="lazy"
              onLoad={() => setIsLoaded(true)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
