import { LINKS } from "@/features/(site)/shared";

export const TOKENOMICS = {
  totalSupply: "1,000,000,000 $SNOWBOARD",
  allocations: [
    {
      label: "Liquidity Pool",
      value: "100%",
      detail: "Fair launch. Full supply paired in LP.",
    },
    {
      label: "Team / Dev",
      value: "0%",
      detail: "No team allocation. Community takeover.",
    },
    {
      label: "Buy / Sell Tax",
      value: "0%",
      detail: "Zero tax on every swap.",
    },
    {
      label: "Ownership",
      value: "Renounced",
      detail: "Contract ownership is gone for good.",
    },
  ],
} as const;

export const WALLET_STEPS = [
  {
    step: "01",
    title: "Get a wallet",
    body: "Install a digital wallet below, or use a hardware wallet for extra security.",
  },
  {
    step: "02",
    title: "Add BNB Chain",
    body: "Most wallets already include BSC (Chain ID 56). Switch to it before you swap.",
  },
  {
    step: "03",
    title: "Fund with BNB",
    body: "You need BNB for gas and to buy $SNOWBOARD on PancakeSwap.",
  },
  {
    step: "04",
    title: "Swap & verify",
    body: "Use the official contract address from this site. Never paste a CA from a random chat.",
  },
] as const;

export const PARTNER_CATEGORIES = [
  "DEX",
  "Analytics",
  "Blockchain",
  "CEX",
] as const;

export type PartnerCategory = (typeof PARTNER_CATEGORIES)[number];

export const PARTNER_FILTERS = [
  "All",
  "Featured",
  ...PARTNER_CATEGORIES,
] as const;

export type PartnerFilter = (typeof PARTNER_FILTERS)[number];

export type Partner = {
  name: string;
  href: string;
  categories: readonly PartnerCategory[];
  featured?: boolean;
  live: boolean;
  logo?: string;
};

export const PARTNERS: readonly Partner[] = [
  {
    name: "PancakeSwap",
    href: LINKS.buy,
    categories: ["DEX"],
    featured: true,
    live: true,
  },
  {
    name: "Bitget Wallet",
    href: LINKS.bitgetWallet,
    categories: ["DEX"],
    featured: true,
    live: true,
  },
  {
    name: "OKX Wallet",
    href: LINKS.okxWallet,
    categories: ["DEX"],
    featured: true,
    live: true,
  },
  {
    name: "DexScreener",
    href: LINKS.dexScreener,
    categories: ["Analytics"],
    featured: true,
    live: true,
  },
  {
    name: "BscScan",
    href: LINKS.bscScan,
    categories: ["Blockchain"],
    featured: true,
    live: true,
  },
  {
    name: "BNB Chain",
    href: "https://www.bnbchain.org",
    categories: ["Blockchain"],
    featured: true,
    live: true,
  },
  {
    name: "Coinmun",
    href: LINKS.coinmun,
    categories: ["Analytics"],
    live: true,
  },
  {
    name: "LiveCoinWatch",
    href: LINKS.liveCoinWatch,
    categories: ["Analytics"],
    live: true,
  },
  {
    name: "ListPad",
    href: LINKS.listPad,
    categories: ["Analytics"],
    live: true,
  },
  {
    name: "CoinCodex",
    href: LINKS.coinCodex,
    categories: ["Analytics"],
    live: true,
  },
  {
    name: "DEX Paprika",
    href: LINKS.dexPaprika,
    categories: ["Analytics"],
    live: true,
  },
  {
    name: "GeckoTerminal",
    href: LINKS.geckoTerminal,
    categories: ["Analytics"],
    live: true,
  },
  {
    name: "CoinMarketCap DEX",
    href: LINKS.dexCmc,
    categories: ["Analytics"],
    live: true,
  },
  {
    name: "Birdeye",
    href: LINKS.birdeye,
    categories: ["Analytics"],
    live: true,
  },
  {
    name: "DexTools",
    href: "https://www.dextools.io",
    categories: ["Analytics"],
    live: false,
  },
  {
    name: "CoinGecko",
    href: "https://www.coingecko.com",
    categories: ["Analytics"],
    live: false,
  },
  {
    name: "CoinMarketCap",
    href: "https://coinmarketcap.com",
    categories: ["Analytics"],
    live: false,
  },
  {
    name: "Gate.io",
    href: "https://www.gate.io",
    categories: ["CEX"],
    live: false,
  },
  {
    name: "MEXC",
    href: "https://www.mexc.com",
    categories: ["CEX"],
    live: false,
  },
  {
    name: "Bitget",
    href: "https://www.bitget.com",
    categories: ["CEX"],
    live: false,
  },
] as const;

export type Wallet = {
  name: string;
  href: string;
  logo?: string;
};

export const HARDWARE_WALLETS: readonly Wallet[] = [
  { name: "Ledger", href: "https://www.ledger.com" },
  { name: "Trezor", href: "https://trezor.io" },
  { name: "SafePal", href: "https://www.safepal.com" },
  { name: "OneKey", href: "https://onekey.so" },
] as const;

export const DIGITAL_WALLETS: readonly Wallet[] = [
  { name: "MetaMask", href: "https://metamask.io" },
  { name: "Trust Wallet", href: "https://trustwallet.com" },
  { name: "Bitget Wallet", href: "https://web3.bitget.com" },
  { name: "OKX Wallet", href: "https://www.okx.com/web3" },
  { name: "Rabby", href: "https://rabby.io" },
  { name: "TokenPocket", href: "https://www.tokenpocket.pro" },
  { name: "Coin98", href: "https://coin98.com" },
  { name: "SafePal", href: "https://www.safepal.com" },
  { name: "Binance Wallet", href: "https://www.binance.com/en/web3wallet" },
] as const;
