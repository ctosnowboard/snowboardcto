import { PageContainer } from "@/components/layouts/(site)/page-container";
import { WALLET_STEPS } from "@/features/(site)/ecosystem/constants";
import { BuyButton, CopyCa } from "@/features/(site)/shared";

import { SectionIntro } from "./section-intro";

export function HowToBuySection() {
  return (
    <PageContainer className="space-y-8">
      <SectionIntro
        eyebrow="Get on the mountain"
        left="HOW TO"
        right="BUY"
        description="Wallet, BNB, official CA, swap. Full wallet list lives on Ecosystem."
        href="/ecosystem"
        linkLabel="Wallets & partners"
      />
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {WALLET_STEPS.map((item) => (
          <li
            key={item.step}
            className="min-w-0 rounded-2xl border border-ice/20 bg-surface/80 p-5 backdrop-blur-sm"
          >
            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-ice-glow">
              {item.step}
            </p>
            <h3 className="mb-2 text-sm font-semibold text-white sm:text-base">
              {item.title}
            </h3>
            <p className="text-xs leading-relaxed text-slate-400 sm:text-sm">
              {item.body}
            </p>
          </li>
        ))}
      </ol>
      <div className="flex w-full flex-col items-center gap-4">
        <CopyCa className="w-full max-w-md" />
        <BuyButton className="w-full max-w-md sm:w-auto" />
      </div>
    </PageContainer>
  );
}
