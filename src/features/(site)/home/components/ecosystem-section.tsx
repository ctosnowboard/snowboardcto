import { PageContainer } from "@/components/layouts/(site)/page-container";
import { LogoCard } from "@/features/(site)/ecosystem/components/logo-card";
import { PARTNERS } from "@/features/(site)/ecosystem/constants";

import { SectionIntro } from "./section-intro";

const featuredPartners = PARTNERS.filter((partner) => partner.featured);

export function EcosystemSection() {
  return (
    <PageContainer className="space-y-8">
      <SectionIntro
        eyebrow="Explore"
        left="THE"
        right="ECOSYSTEM"
        description="Live DEX, wallets, and trackers. The full grid including soon listings is on Ecosystem."
        href="/ecosystem"
        linkLabel="See all partners"
      />
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {featuredPartners.map((partner) => (
          <li key={partner.name}>
            <LogoCard
              name={partner.name}
              href={partner.href}
              live={partner.live}
              logo={partner.logo}
            />
          </li>
        ))}
      </ul>
    </PageContainer>
  );
}
