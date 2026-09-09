import type { Metadata } from "next";

import { SITE } from "@/features/(site)/shared";
import RoadmapPage from "@/features/(site)/roadmap/components/roadmap-page";

export const metadata: Metadata = {
  title: `Roadmap | ${SITE.name}`,
  description:
    "See the $SNOWBOARD roadmap — listings live today, market-cap targets next, then community rewards and games.",
};

export default function Page() {
  return <RoadmapPage />;
}
