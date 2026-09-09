import { PageContainer } from "@/components/layouts/(site)/page-container";
import { ExchangeStrip, MarqueeBand } from "@/features/(site)/shared";

import { AboutSection } from "./about-section";
import { ChartSection } from "./chart-section";
import { CommunitySection } from "./community-section";
import { DonationsSection } from "./donations-section";
import { EcosystemSection } from "./ecosystem-section";
import { FaqSection } from "./faq-section";
import { HeroSection } from "./hero-section";
import { HowToBuySection } from "./how-to-buy-section";
import { LiveStatsSection } from "./live-stats-section";
import { RoadmapSection } from "./roadmap-section";
import { TokenomicsSection } from "./tokenomics-section";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <MarqueeBand />
      <div className="space-y-10 py-10 sm:space-y-12 sm:py-12 lg:space-y-20 lg:py-16">
        <AboutSection />
        <LiveStatsSection />
        <ChartSection />
        <ExchangeStrip />
        <HowToBuySection />
        <TokenomicsSection />
        <EcosystemSection />
        <RoadmapSection />
        <CommunitySection />
        <DonationsSection />
        <FaqSection />
        <PageContainer width="narrow">
          <p className="text-center text-xs text-slate-500">
            Always verify the contract on this site before you swap.
          </p>
        </PageContainer>
      </div>
    </div>
  );
}
