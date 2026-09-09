"use client";

import Image from "next/image";

import {
  ASSETS,
  BuyButton,
  SITE,
  SOCIALS,
} from "@/features/(site)/shared";
import { cn } from "@/lib/utils";

const ctaClassName = cn(
  "inline-flex h-11 w-full items-center justify-center rounded-full border border-ice/40 bg-surface/60 px-5 text-sm font-semibold text-ice-glow backdrop-blur-sm transition",
  "hover:border-ice hover:bg-ice/10 sm:h-12 sm:w-auto sm:min-w-35 sm:px-6",
);

export function HeroSection() {
  return (
    <section className="relative flex min-h-[72vh] items-center justify-center overflow-hidden sm:min-h-[80vh] lg:min-h-[88vh]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover object-center"
        aria-hidden
      >
        <source src={ASSETS.heroVideo} type="video/mp4" />
      </video>

      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-b from-background/80 via-background/55 to-background"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 snow-grid opacity-30"
      />

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center px-5 py-16 text-center sm:px-6 sm:py-20 lg:py-24">
        <div className="ice-glow mb-6 rounded-full p-1 sm:mb-8">
          <Image
            src={ASSETS.logo}
            alt={`${SITE.name} logo`}
            width={120}
            height={120}
            priority
            className="h-20 w-20 rounded-full object-cover sm:h-24 sm:w-24 lg:h-28 lg:w-28"
          />
        </div>

        <h1 className="display-hero ice-text-glow mb-2 font-bold tracking-tight text-white sm:mb-3">
          {SITE.name}
        </h1>

        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-ice-glow/90 sm:mb-6 sm:text-sm sm:tracking-[0.3em]">
          {SITE.tagline}
        </p>

        <p className="mb-8 max-w-xl text-sm leading-relaxed text-slate-300 sm:mb-10 sm:text-base lg:text-lg">
          {SITE.narrative}
        </p>

        <div className="flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center">
          <BuyButton className="w-full sm:w-auto" />
          <a
            href={SOCIALS.telegram.href}
            target="_blank"
            rel="noopener noreferrer"
            className={ctaClassName}
          >
            {SOCIALS.telegram.label}
          </a>
          <a
            href={SOCIALS.x.href}
            target="_blank"
            rel="noopener noreferrer"
            className={ctaClassName}
          >
            {SOCIALS.x.label}
          </a>
        </div>
      </div>
    </section>
  );
}
