import { PageContainer } from "@/components/layouts/(site)/page-container";
import {
  ASSETS,
  ArtFrame,
  CopyCa,
  MarqueeBand,
  PageHeader,
  SafuBanner,
  SITE,
  SplitHeading,
} from "@/features/(site)/shared";

import {
  DIGITAL_WALLETS,
  TOKENOMICS,
  WALLET_STEPS,
} from "../constants";
import { LogoCard } from "./logo-card";
import { PartnerForm } from "./partner-form";
import { PartnerGrid } from "./partner-grid";

export default function EcosystemPage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <MarqueeBand />

      <div className="space-y-16 py-12 sm:space-y-20 sm:py-16 lg:space-y-24 lg:py-20">
        <PageContainer width="narrow">
          <PageHeader
            eyebrow="Trust & Tools"
            title="Ecosystem"
            subtitle="Tokenomics, partners, and wallet setup — everything you need to ride with $SNOWBOARD."
          />
        </PageContainer>

        <PageContainer>
          <ArtFrame
            src={ASSETS.art.ecosystemBsc}
            alt="Riding $SNOWBOARD on BSC through DeFi, NFT, GameFi, memecoin, and Web3"
            sizes="(max-width: 1024px) 100vw, 1100px"
            priority
          />
        </PageContainer>

        <PageContainer>
          <section className="space-y-8">
            <div className="text-center">
              <SplitHeading left="OUR" right="TOKENOMICS" />
              <p className="mx-auto mt-4 max-w-xl text-sm text-slate-400 sm:text-base">
                Fair launch CTO. No team wallet. Values match the SAFU banner
                on every page.
              </p>
            </div>

            <SafuBanner />

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

            <CopyCa />
          </section>
        </PageContainer>

        <PageContainer width="wide">
          <section className="space-y-8">
            <div className="text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-ice/80">
                Explore
              </p>
              <h2 className="text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                Partners & Integrations
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400">
                Live listings first. Everything marked Soon is on the outreach
                list.
              </p>
            </div>
            <PartnerGrid />
          </section>
        </PageContainer>

        <PageContainer>
          <section className="space-y-8">
            <div className="text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-ice/80">
                Wallet Setup
              </p>
              <h2 className="text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                How to hold $SNOWBOARD
              </h2>
            </div>

            <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {WALLET_STEPS.map((item) => (
                <li
                  key={item.step}
                  className="rounded-2xl border border-ice/20 bg-surface/80 p-5 backdrop-blur-sm"
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
          </section>
        </PageContainer>

        <PageContainer width="wide">
          <section className="space-y-10">
            <div>
              <h2 className="mb-6 text-center text-lg font-bold text-white sm:text-xl">
                Digital Wallets
              </h2>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                {DIGITAL_WALLETS.map((wallet) => (
                  <li key={wallet.name}>
                    <LogoCard
                      name={wallet.name}
                      href={wallet.href}
                      logo={wallet.logo}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </PageContainer>

        <PageContainer width="narrow">
          <section className="rounded-2xl border border-ice/20 bg-surface/80 p-6 backdrop-blur-sm sm:p-8 lg:p-10">
            <div className="mb-8 text-center">
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                Want to Partner With Us?
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-400">
                Wallets, swaps, exchanges, or anything that brings value to the
                ride — drop a line. If something is missing from the grid, tell
                us.
              </p>
            </div>
            <PartnerForm />
          </section>
        </PageContainer>

        <PageContainer width="narrow">
          <p className="text-center text-xs text-slate-500">
            {SITE.disclaimer}
          </p>
        </PageContainer>
      </div>
    </div>
  );
}
