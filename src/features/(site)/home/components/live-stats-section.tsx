import { Suspense } from "react";

import { PageContainer } from "@/components/layouts/(site)/page-container";

import { formatPrice, formatUsd, getLiveStats } from "../lib/get-live-stats";
import { SectionIntro } from "./section-intro";

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <article className="rounded-2xl border border-ice/20 bg-surface/80 px-4 py-5 text-center backdrop-blur-sm sm:py-6">
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-ice/80">
        {label}
      </p>
      <p className="ice-text-glow text-xl font-bold text-white sm:text-2xl">
        {value}
      </p>
    </article>
  );
}

function LiveStatsGrid({
  price,
  marketCap,
  liquidity,
  volume,
}: {
  price: string;
  marketCap: string;
  liquidity: string;
  volume: string;
}) {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      <StatCard label="Price" value={price} />
      <StatCard label="Market cap" value={marketCap} />
      <StatCard label="Liquidity" value={liquidity} />
      <StatCard label="24h volume" value={volume} />
    </div>
  );
}

async function LiveStatsData() {
  const stats = await getLiveStats();

  return (
    <LiveStatsGrid
      price={formatPrice(stats?.priceUsd ?? null)}
      marketCap={formatUsd(stats?.marketCap ?? null)}
      liquidity={formatUsd(stats?.liquidityUsd ?? null)}
      volume={formatUsd(stats?.volumeH24 ?? null)}
    />
  );
}

function LiveStatsFallback() {
  return (
    <LiveStatsGrid price="—" marketCap="—" liquidity="—" volume="—" />
  );
}

export function LiveStatsSection() {
  return (
    <PageContainer className="space-y-8">
      <SectionIntro
        eyebrow="On-chain"
        left="LIVE"
        right="STATS"
        description="Price, cap, liquidity, and volume from DexScreener. Charts and trades stay on the mountain."
      />
      <Suspense fallback={<LiveStatsFallback />}>
        <LiveStatsData />
      </Suspense>
    </PageContainer>
  );
}
