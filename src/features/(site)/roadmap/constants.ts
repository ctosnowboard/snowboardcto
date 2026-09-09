export type RoadmapStatus = "completed" | "in-progress" | "upcoming";

export type RoadmapPhase = {
  emoji: string;
  title: string;
  description: string;
  status: RoadmapStatus;
  items: readonly string[];
};

export const ROADMAP_PHASES: readonly RoadmapPhase[] = [
  {
    emoji: "🏂",
    title: "Phase 1 — Launch & CTO",
    description: "Community takeover, contract deployment, and the first crew on the mountain.",
    status: "completed",
    items: [
      "Community takeover completed",
      "Contract deployed on BSC (0% tax, LP locked, renounced)",
      "Telegram & X channels live",
      "Website v1 — Home, About, Ecosystem, Community, Roadmap",
    ],
  },
  {
    emoji: "📡",
    title: "Phase 2 — Listed & Tracked",
    description: "Live on data sites and terminals so anyone can find the chart and verify the token.",
    status: "completed",
    items: [
      "Listed on Coinmun.com",
      "Listed on LiveCoinWatch.com",
      "Listed on ListPad.xyz",
      "Listed on CoinCodex.com",
      "Listed on DEX Paprika",
      "Tracked on CoinGecko Terminal",
      "Tracked on CoinMarketCap",
      "Tracked on Birdeye.com",
      "Tracked on Blockspot.io",
    ],
  },
  {
    emoji: "📈",
    title: "Phase 3 — Next Listings",
    description: "Market-cap gated listings, verifications, and community votes on where we go next.",
    status: "upcoming",
    items: [
      "Firescreener listing at $10k market cap",
      "DexScreener update at $15k market cap",
      "Peniwallet verification at $25k market cap",
      "At $50k, the community votes on the next listing",
      "CoinGecko listing at $100k market cap",
      "Exchange listing at $1M market cap",
      "Further community listing votes at later market-cap milestones",
    ],
  },
  {
    emoji: "🎁",
    title: "Phase 4 — Community Rewards",
    description: "Giveaways, shiller contests, and weekly game prizes — all picked by the community.",
    status: "upcoming",
    items: [
      "Monthly community giveaway — prize token chosen by the community",
      "Bi-weekly Best Shiller — voted by the community",
      "Weekly game rewards",
    ],
  },
  {
    emoji: "🎮",
    title: "Phase 5 — Games Arcade",
    description: "Built-in mini-games and shareable high scores on the mountain.",
    status: "upcoming",
    items: [
      "Games hub",
      "Snowboard Runner mini-game",
      "Leaderboards & high scores",
      "Share-on-X integrations",
    ],
  },
] as const;

export const STATUS_LABELS: Record<RoadmapStatus, string> = {
  completed: "Completed",
  "in-progress": "In Progress",
  upcoming: "Upcoming",
};
