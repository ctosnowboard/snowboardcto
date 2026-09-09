import type { Metadata } from "next";

import AboutPage from "@/features/(site)/about/components/about-page";
import { SITE } from "@/features/(site)/shared";

export const metadata: Metadata = {
  title: `About | ${SITE.name}`,
  description:
    "Learn about the $SNOWBOARD community takeover — our story, values, and answers to frequently asked questions.",
};

export default function Page() {
  return <AboutPage />;
}
