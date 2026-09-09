import type { Metadata } from "next";

import EcosystemPage from "@/features/(site)/ecosystem/components/ecosystem-page";
import { SITE } from "@/features/(site)/shared";

export const metadata: Metadata = {
  title: `Ecosystem | ${SITE.name}`,
  description:
    "Explore $SNOWBOARD tokenomics, partners, wallet setup guides, and apply to collaborate.",
};

export default function Page() {
  return <EcosystemPage />;
}
