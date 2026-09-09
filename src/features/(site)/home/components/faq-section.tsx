import { PageContainer } from "@/components/layouts/(site)/page-container";
import { FAQ_ITEMS } from "@/features/(site)/about/constants";
import { FaqAccordion } from "@/features/(site)/shared";

import { SectionIntro } from "./section-intro";

export function FaqSection() {
  return (
    <PageContainer width="narrow" className="space-y-8">
      <SectionIntro
        eyebrow="Got questions?"
        left="QUICK"
        right="FAQ"
        description="The short answers. Story, disclaimers, and more live on About."
        href="/about#faq"
        linkLabel="About & FAQ"
      />
      <FaqAccordion items={FAQ_ITEMS} />
    </PageContainer>
  );
}
