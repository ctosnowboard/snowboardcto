import { PageContainer } from "@/components/layouts/(site)/page-container";
import { CopyCa } from "@/features/(site)/shared";

import { COMMUNITY_DONATION } from "../constants";
import { SectionIntro } from "./section-intro";

export function DonationsSection() {
  return (
    <PageContainer className="space-y-8">
      <SectionIntro
        eyebrow="Support the ride"
        left="COMMUNITY"
        right="DONATIONS"
        description="Send USDT on Binance Smart Chain. Donations go toward listings, buybacks and burns, and game airdrops."
      />
      <div className="grid gap-3 sm:grid-cols-3">
        {COMMUNITY_DONATION.uses.map((use) => (
          <article
            key={use.title}
            className="min-w-0 rounded-2xl border border-ice/20 bg-surface/80 p-5 text-center backdrop-blur-sm sm:p-6"
          >
            <h3 className="mb-2 text-sm font-semibold text-white sm:text-base">
              {use.title}
            </h3>
            <p className="text-xs leading-relaxed text-slate-400 sm:text-sm">
              {use.body}
            </p>
          </article>
        ))}
      </div>
      <div className="flex flex-col items-center gap-3">
        <CopyCa
          className="w-full max-w-xl"
          address={COMMUNITY_DONATION.address}
          chain={COMMUNITY_DONATION.chain}
          label={`${COMMUNITY_DONATION.asset} donation wallet`}
          copiedMessage="Donation wallet copied"
          copyAriaLabel="Copy donation wallet address"
        />
        <p className="max-w-xl text-center text-xs text-slate-500">
          Send only {COMMUNITY_DONATION.asset} to this wallet. Other tokens may
          be lost.{" "}
          <a
            href={COMMUNITY_DONATION.explorerHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-ice-glow transition hover:text-ice"
          >
            View on BscScan →
          </a>
        </p>
      </div>
    </PageContainer>
  );
}
