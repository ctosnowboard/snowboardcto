import { PageContainer } from "@/components/layouts/(site)/page-container";
import { LINKS, SafuBanner } from "@/features/(site)/shared";

import { TRUST_PILLARS } from "../constants";
import { SectionIntro } from "./section-intro";

export function TrustSection() {
  return (
    <PageContainer className="space-y-8">
      <SectionIntro
        eyebrow="Why Snowboard"
        left="TRUST"
        right="THE RIDE"
        description="No hidden tax. No owner key. No team dump. Verify it on BscScan."
        href="/about"
        linkLabel="Why we sent it"
      />
      <SafuBanner />
      <ul className="grid gap-3 sm:grid-cols-2">
        {TRUST_PILLARS.map((pillar) => (
          <li
            key={pillar.title}
            className="rounded-2xl border border-ice/20 bg-surface/80 p-5 backdrop-blur-sm sm:p-6"
          >
            <h3 className="mb-2 text-sm font-semibold text-white sm:text-base">
              {pillar.title}
            </h3>
            <p className="text-xs leading-relaxed text-slate-400 sm:text-sm">
              {pillar.body}
            </p>
          </li>
        ))}
      </ul>
      <p className="text-center text-xs text-slate-500">
        <a
          href={LINKS.bscScan}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-ice-glow transition hover:text-ice"
        >
          Verify on BscScan →
        </a>
      </p>
    </PageContainer>
  );
}
