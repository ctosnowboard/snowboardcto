import type { FaqItem } from "@/features/(site)/shared";

export const ABOUT_STORY = {
  headline: "Built by riders, for riders",
  paragraphs: [
    "$SNOWBOARD started as a community takeover on Binance Smart Chain — no dev wallet drama, no hidden agendas. Just a crew of snowboard enthusiasts who wanted a token that matches the culture: rebellious, fun, and always sending it.",
    "We're not promising the moon with fake utility. This is a memecoin with real community energy — daily updates, holder rewards, and vibes that hit harder than a backside 180.",
    "Whether you ride powder or ride charts, you're welcome here. Strap in and join the movement.",
  ],
} as const;

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    question: "What is $SNOWBOARD?",
    answer:
      "$SNOWBOARD is a community-driven memecoin on Binance Smart Chain (BSC). It was born from a community takeover (CTO) and is maintained by holders — not a centralized team with promises of guaranteed returns.",
  },
  {
    question: "Is this financial advice?",
    answer:
      "No. $SNOWBOARD is a memecoin for entertainment purposes only. It has no intrinsic value and there is no expectation of profit. Always do your own research and never invest more than you can afford to lose.",
  },
  {
    question: "What chain is $SNOWBOARD on?",
    answer:
      "$SNOWBOARD lives on Binance Smart Chain (BSC). You can buy it on PancakeSwap using BNB. Always verify the contract address on our site or BscScan before swapping.",
  },
  {
    question: "Is the contract safe?",
    answer:
      "The contract has 0% tax, liquidity is locked, and ownership has been renounced. You can verify all of this on BscScan. Still — memecoins are risky. DYOR.",
  },
  {
    question: "How do I join the community?",
    answer:
      "Hop into our Telegram for daily updates, memes, and community chat. Follow us on X for announcements and send-it energy. Links are on this page and in the site footer.",
  },
  {
    question: "Will there be utility or games?",
    answer:
      "We're building light utility for the community — rewards, updates, and fun experiences like mini-games. No heavy promises, just vibes and incremental features as the community grows.",
  },
] as const;
