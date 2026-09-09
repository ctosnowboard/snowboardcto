import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import AboutPage from "@/features/(site)/about/components/about-page";
import { FAQ_ITEMS } from "@/features/(site)/about/constants";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Learn about the $SNOWBOARD community takeover on Binance Smart Chain — our story, 0% tax contract, and FAQ.",
  path: "/about",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQ_ITEMS)} />
      <AboutPage />
    </>
  );
}
