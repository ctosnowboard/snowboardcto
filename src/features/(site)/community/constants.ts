import { ASSETS } from "@/features/(site)/shared";

export type CommunityPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  body: readonly string[];
};

export type CommunityArt = {
  src: string;
  alt: string;
  span?: "full" | "half";
};

export const COMMUNITY_GALLERY: readonly CommunityArt[] = [
  {
    src: ASSETS.art.memePack,
    alt: "Snowboard meme pack  Doge, Pepe, penguin HODL, and one life one run",
    span: "full",
  },
  {
    src: ASSETS.art.memeHeaven,
    alt: "Meme characters sending $SNOWBOARD on BSC to the moon",
    span: "half",
  },
  {
    src: ASSETS.art.danceNight,
    alt: "Snowboard on BSC boards dancing under a full moon",
    span: "half",
  },
  {
    src: ASSETS.art.shibaSend,
    alt: "Shiba snowboarder in HODL mode  life is too short to stay on the ground",
    span: "half",
  },
  {
    src: ASSETS.art.allInPlanA,
    alt: "All in on the ride  no plan B, just plan A",
    span: "half",
  },
] as const;

export const REWARDS_TEASER = {
  badge: "Coming soon",
  emoji: "🎁",
  title: "Holder rewards on the mountain",
  body: "Light utility for people who actually ride with us — holder rewards, contests, and campaigns. Details drop in Telegram first. No fake yield. Just vibes with a prize table.",
} as const;

export const COMMUNITY_POSTS: readonly CommunityPost[] = [
  {
    slug: "website-v1-is-live",
    title: "Website v1 is live: The mountain is open",
    excerpt:
      "Home, About, Ecosystem, and Roadmap are up. Chart, buy, and contract copy live on day one.",
    date: "2026-09-07",
    tag: "Announcement",
    body: [
      "The coming-soon page has melted. $SNOWBOARD now has a real public site  icy-neon, CTO energy, and the pages the community actually asked for.",
      "Home has the hero, live DexScreener chart, PancakeSwap buy, and the official contract address. About covers the takeover story plus FAQ. Ecosystem lays out tokenomics, partners, and wallet setup. Roadmap shows where we are and where we are sending it next.",
      "Community updates live here from now on. If Telegram is the lodge, this feed is the trail map. Bookmark it, share it, and always verify the CA from this site  never from a random DM.",
      "Next up: this hub grows with more posts, a holder rewards teaser that becomes a real program, and the Games arcade. Strap in.",
    ],
  },
  {
    slug: "community-takeover",
    title: "Community takeover: why we sent it",
    excerpt:
      "No team wallet. 0% tax. LP locked. Ownership renounced. A CTO built for riders, not roadmaps full of vapor.",
    date: "2026-08-15",
    tag: "Story",
    body: [
      "$SNOWBOARD is a community takeover on Binance Smart Chain. That is not a slogan it is the whole point. No hidden team allocation, no tax draining every swap, no owner key sitting in someone's hardware wallet.",
      "The contract is 0% tax, liquidity is locked, and ownership is renounced. You can check all of that on BscScan. We still say it every time because memecoins train people to expect the opposite.",
      "We are not selling a protocol. This is a memecoin with light utility for the people who show up: updates, rewards, contests, and later a few games you can actually play. Entertainment first. DYOR always.",
      "If that sounds like your mountain, join Telegram and follow X. Daily updates, memes, and a crew that would rather send it than write another whitepaper.",
    ],
  },
] as const;

export function getPostBySlug(slug: string): CommunityPost | undefined {
  return COMMUNITY_POSTS.find((post) => post.slug === slug);
}

export function formatPostDate(isoDate: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00Z`));
}
