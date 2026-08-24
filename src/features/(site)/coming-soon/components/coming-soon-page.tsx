import Image from "next/image";

import { ASSETS, SITE, SOCIALS } from "../constants";
import { CopyCa } from "./copy-ca";

export default function ComingSoonPage() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 snow-grid opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-ice-bright/20 blur-3xl"
      />

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
        <div className="ice-glow mb-8 rounded-full p-1">
          <Image
            src={ASSETS.logo}
            alt={`${SITE.name} logo`}
            width={160}
            height={160}
            priority
            className="h-36 w-36 rounded-full object-cover sm:h-40 sm:w-40"
          />
        </div>

        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-ice">
          {SITE.status}
        </p>

        <h1 className="ice-text-glow mb-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {SITE.name}
        </h1>

        <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-ice-glow/90">
          {SITE.tagline}
        </p>

        <p className="mb-10 max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg">
          {SITE.narrative}
        </p>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={SOCIALS.telegram.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 min-w-35 items-center justify-center rounded-full bg-ice-bright px-6 text-sm font-semibold text-background transition hover:bg-ice-glow"
          >
            {SOCIALS.telegram.label}
          </a>
          <a
            href={SOCIALS.x.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 min-w-35 items-center justify-center rounded-full border border-ice/40 bg-surface/60 px-6 text-sm font-semibold text-ice-glow transition hover:border-ice hover:bg-ice/10"
          >
            {SOCIALS.x.label}
          </a>
        </div>

        <CopyCa />
      </main>

      <footer className="relative z-10 pb-8 text-center text-xs tracking-wide text-slate-500">
        {SITE.footer}
      </footer>
    </div>
  );
}
