"use client";

import Image from "next/image";

import {
  ASSETS,
  BuyButton,
  OutlineButton,
  SITE,
  SOCIALS,
} from "@/features/(site)/shared";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[72svh] items-center justify-center overflow-hidden sm:min-h-[80vh] lg:min-h-[88vh]">
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

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-20 lg:py-24">
        <div className="ice-glow mb-6 rounded-full p-1 sm:mb-8">
          <Image
            src={ASSETS.logo}
            alt={`${SITE.name} logo`}
            width={120}
            height={120}
            priority
            className="size-20 rounded-full object-cover sm:size-24 lg:size-28"
          />
        </div>

        <h1 className="display-hero ice-text-glow mb-2 font-bold tracking-tight text-white sm:mb-3">
          {SITE.name}
        </h1>

        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.16em] text-ice-glow/90 sm:mb-6 sm:text-sm sm:tracking-[0.3em]">
          {SITE.tagline}
        </p>

        <p className="mb-8 max-w-xl text-sm leading-relaxed text-slate-300 sm:mb-10 sm:text-base lg:text-lg">
          {SITE.narrative}
        </p>

        <div className="flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center">
          <BuyButton className="w-full sm:w-auto" />
          <OutlineButton href={SOCIALS.telegram.href}>
            {SOCIALS.telegram.label}
          </OutlineButton>
          <OutlineButton href={SOCIALS.x.href}>
            {SOCIALS.x.label}
          </OutlineButton>
        </div>
      </div>
    </section>
  );
}
