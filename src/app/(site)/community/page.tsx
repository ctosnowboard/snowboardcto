import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import CommunityPage from "@/features/(site)/community/components/community-page";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Community",
  description:
    "Community updates, announcements, and a first look at $SNOWBOARD holder rewards on Binance Smart Chain.",
  path: "/community",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Community", path: "/community" },
        ])}
      />
      <CommunityPage />
    </>
  );
}
