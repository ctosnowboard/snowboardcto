function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) {
    return explicit.replace(/\/$/, "");
  }

  const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (productionHost) {
    return `https://${productionHost.replace(/\/$/, "")}`;
  }

  return "https://ctosnowboard.vercel.app";
}

export const SITE_URL = resolveSiteUrl();

export const SITE = {
  name: "$SNOWBOARD",
  tagline: "The future is frozen",
  title: "$SNOWBOARD | Community Takeover on BSC",
  description:
    "$SNOWBOARD is a community takeover memecoin on Binance Smart Chain. Official CA 0x95b643d0f281016e4e8e22111f0cb1676c73efc6. 0% tax, locked liquidity, renounced ownership. Buy on PancakeSwap.",
  footer: "On Binance Smart Chain · Community Takeover",
  disclaimer:
    "$SNOWBOARD is a community-driven takeover project. No returns are guaranteed. Holders may gain or lose depending on market conditions.",
  narrative:
    "Welcome to the Snowboard Community Takeover (CTO). A pure, community-driven movement on Binance Smart Chain built to unite riders, share updates, and capture the rebellious spirit of snowboarding. No heavy utility promises — just light utility for community rewards, daily updates, and pure vibes as we send it together. Join the movement.",
} as const;

export const SOCIALS = {
  telegram: {
    label: "Join Telegram",
    href: "https://t.me/Snowboardcto",
  },
  x: {
    label: "Follow on X",
    href: "https://x.com/Snowboard_cto",
    handle: "@Snowboard_cto",
  },
} as const;

export const CONTRACT = {
  address: "0x95b643d0f281016e4e8e22111f0cb1676c73efc6",
  chain: "BSC",
} as const;

export const ASSETS = {
  logo: "/assets/images/logo.png",
  heroVideo: "/assets/videos/hero.mp4",
  art: {
    penguinDiscipline: "/assets/images/art/penguin-discipline.jpg",
    allInPlanA: "/assets/images/art/all-in-plan-a.jpg",
    destinationMoon: "/assets/images/art/destination-moon.jpg",
    ecosystemBsc: "/assets/images/art/ecosystem-bsc.jpg",
    memePack: "/assets/images/art/meme-pack.jpg",
    alienJourney: "/assets/images/art/alien-journey.jpg",
    danceNight: "/assets/images/art/dance-night.jpg",
    boardRidge: "/assets/images/art/board-ridge.jpg",
    summitClimb: "/assets/images/art/summit-climb.jpg",
    shibaSend: "/assets/images/art/shiba-send.jpg",
    goldSpray: "/assets/images/art/gold-spray.jpg",
    memeHeaven: "/assets/images/art/meme-heaven.jpg",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/", live: true },
  { label: "About", href: "/about", live: true },
  { label: "Ecosystem", href: "/ecosystem", live: true },
  { label: "Roadmap", href: "/roadmap", live: true },
  { label: "Community", href: "/community", live: true },
  { label: "Games", href: "/games", live: false },
] as const;

export const LINKS = {
  buy: `https://pancakeswap.finance/swap?outputCurrency=${CONTRACT.address}&chain=bsc`,
  bitgetWallet: `https://web3.bitget.com/en/swap?chain=bnb&toTokenAddress=${CONTRACT.address}`,
  okxWallet: `https://web3.okx.com/dex-swap?chain=bsc,bsc&token=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE,${CONTRACT.address}`,
  dexScreener: `https://dexscreener.com/bsc/${CONTRACT.address}`,
  bscScan: `https://bscscan.com/token/${CONTRACT.address}`,
  coinmun: "https://coinmun.com/coins/snowboard",
  liveCoinWatch: "https://www.livecoinwatch.com/price/snowboard-SNOWBOARD",
  listPad: "https://listpad.xyz/coins/snowboard",
  coinCodex: "https://coincodex.com/crypto/snowboard/",
  dexPaprika: `https://dexpaprika.com/bsc/token/${CONTRACT.address}`,
  geckoTerminal: `https://www.geckoterminal.com/bsc/tokens/${CONTRACT.address}`,
  dexCmc: `https://dex.coinmarketcap.com/token/bsc/${CONTRACT.address}/`,
  birdeye: `https://birdeye.so/token/${CONTRACT.address}?chain=bsc`,
} as const;

export const SAFU = {
  tax: "0%",
  liquidityLocked: true,
  renounced: true,
  chain: "BSC",
} as const;

export const MARQUEE_ITEMS = [
  "SEND IT",
  "PURE VIBES",
  "$SNOWBOARD",
  "COMMUNITY TAKEOVER",
  "BSC",
] as const;

export const EXCHANGES = [
  {
    name: "PancakeSwap",
    href: LINKS.buy,
    live: true,
  },
  {
    name: "Bitget Wallet",
    href: LINKS.bitgetWallet,
    live: true,
  },
  {
    name: "OKX Wallet",
    href: LINKS.okxWallet,
    live: true,
  },
  {
    name: "DexScreener",
    href: LINKS.dexScreener,
    live: true,
  },
  {
    name: "CoinGecko",
    href: "#",
    live: false,
  },
  {
    name: "CoinMarketCap",
    href: "#",
    live: false,
  },
] as const;
