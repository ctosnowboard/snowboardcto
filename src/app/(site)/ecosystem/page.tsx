import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import EcosystemPage from "@/features/(site)/ecosystem/components/ecosystem-page";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Ecosystem",
  description:
    "Explore $SNOWBOARD tokenomics, partners, wallet setup, and how to buy on PancakeSwap on Binance Smart Chain.",
  path: "/ecosystem",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Ecosystem", path: "/ecosystem" },
        ])}
      />
      <EcosystemPage />
    </>
  );
}
