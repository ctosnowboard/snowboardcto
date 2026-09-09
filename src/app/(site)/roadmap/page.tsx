import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import RoadmapPage from "@/features/(site)/roadmap/components/roadmap-page";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Roadmap",
  description:
    "See the $SNOWBOARD roadmap — listings live today, market-cap targets next, then community rewards and games.",
  path: "/roadmap",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Roadmap", path: "/roadmap" },
        ])}
      />
      <RoadmapPage />
    </>
  );
}
