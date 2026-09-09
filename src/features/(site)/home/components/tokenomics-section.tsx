import { PageContainer } from "@/components/layouts/(site)/page-container";
import { TOKENOMICS } from "@/features/(site)/ecosystem/constants";
import { ASSETS, ArtFrame } from "@/features/(site)/shared";

import { SectionIntro } from "./section-intro";

export function TokenomicsSection() {
  return (
    <PageContainer className="space-y-8">
      <SectionIntro
        eyebrow="Fair launch"
        left="OUR"
        right="TOKENOMICS"
        description="Full supply in LP. Zero team cut. Zero tax. See the ecosystem page for the breakdown."
        href="/ecosystem"
        linkLabel="Full tokenomics"
      />
      <ArtFrame
        src={ASSETS.art.goldSpray}
        alt="Snowboarder carving through a spray of golden BSC coins"
        sizes="(max-width: 1024px) 100vw, 1100px"
      />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {TOKENOMICS.allocations.map((item) => (
          <article
            key={item.label}
            className="rounded-2xl border border-ice/20 bg-surface/80 p-5 text-center backdrop-blur-sm sm:p-6"
          >
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-ice/80">
              {item.label}
            </p>
            <p className="ice-text-glow text-2xl font-bold text-white sm:text-3xl">
              {item.value}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-slate-400 sm:text-sm">
              {item.detail}
            </p>
          </article>
        ))}
      </div>
      <p className="text-center text-xs text-slate-500">
        Total supply: {TOKENOMICS.totalSupply}
      </p>
    </PageContainer>
  );
}
