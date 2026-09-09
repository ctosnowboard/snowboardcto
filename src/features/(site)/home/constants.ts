export const COMMUNITY_DONATION = {
  address: "0xdd74e72e1CAec30eB9B8535683DA965354a48d68",
  chain: "BSC",
  asset: "USDT (BEP-20)",
  explorerHref:
    "https://bscscan.com/address/0xdd74e72e1CAec30eB9B8535683DA965354a48d68",
  uses: [
    {
      title: "Listings",
      body: "Pays for exchange and tracker listings so more riders can find $SNOWBOARD.",
    },
    {
      title: "Buyback & burn",
      body: "Funds market buybacks and burns that take supply off the mountain.",
    },
    {
      title: "Game airdrops",
      body: "Covers airdrops for upcoming games and holder rewards.",
    },
  ],
} as const;

export const TRUST_PILLARS = [
  {
    title: "Zero tax",
    body: "Every swap is 0%. Nothing silently drains the ride.",
  },
  {
    title: "LP locked",
    body: "Liquidity is locked. The pool stays on the mountain.",
  },
  {
    title: "Ownership renounced",
    body: "No owner key. Nobody can flip the contract later.",
  },
  {
    title: "Community takeover",
    body: "No team wallet. Holders steer the movement.",
  },
] as const;
