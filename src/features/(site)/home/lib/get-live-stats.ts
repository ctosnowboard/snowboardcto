import { CONTRACT } from "@/features/(site)/shared";

export type LiveStats = {
  priceUsd: string | null;
  marketCap: number | null;
  liquidityUsd: number | null;
  volumeH24: number | null;
};

type DexScreenerPair = {
  chainId?: string;
  priceUsd?: string;
  marketCap?: number;
  fdv?: number;
  liquidity?: { usd?: number };
  volume?: { h24?: number };
};

type DexScreenerResponse = {
  pairs?: DexScreenerPair[] | null;
};

export async function getLiveStats(): Promise<LiveStats | null> {
  try {
    const response = await fetch(
      `https://api.dexscreener.com/latest/dex/tokens/${CONTRACT.address}`,
      { next: { revalidate: 60 } },
    );

    if (!response.ok) return null;

    const data = (await response.json()) as DexScreenerResponse;
    const pairs = (data.pairs ?? []).filter(
      (pair) => pair.chainId === "bsc" || !pair.chainId,
    );
    const pair =
      pairs.sort(
        (a, b) => (b.liquidity?.usd ?? 0) - (a.liquidity?.usd ?? 0),
      )[0] ?? data.pairs?.[0];

    if (!pair) return null;

    return {
      priceUsd: pair.priceUsd ?? null,
      marketCap: pair.marketCap ?? pair.fdv ?? null,
      liquidityUsd: pair.liquidity?.usd ?? null,
      volumeH24: pair.volume?.h24 ?? null,
    };
  } catch {
    return null;
  }
}

export function formatUsd(
  value: number | null,
  { compact = true }: { compact?: boolean } = {},
) {
  if (value == null || Number.isNaN(value)) return "—";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: compact ? "compact" : "standard",
    maximumFractionDigits: value >= 1 ? 2 : 6,
  }).format(value);
}

export function formatPrice(value: string | null) {
  if (!value) return "—";

  const numeric = Number(value);
  if (Number.isNaN(numeric)) return "—";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumSignificantDigits: 4,
  }).format(numeric);
}
