import type { Metadata } from "next";

import {
  ASSETS,
  CONTRACT,
  LINKS,
  SITE,
  SITE_URL,
  SOCIALS,
} from "@/features/(site)/shared";

export function absoluteUrl(path = "/") {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "" : normalized}`;
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article";
  publishedTime?: string;
  image?: string;
};

export function pageMetadata({
  title,
  description,
  path,
  ogType = "website",
  publishedTime,
  image,
}: PageMetadataOptions): Metadata {
  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: ogType,
      url: path,
      title,
      description,
      ...(image ? { images: [{ url: image, alt: `${SITE.name} logo` }] } : {}),
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      title,
      description,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE_URL,
    description: SITE.description,
    logo: absoluteUrl(ASSETS.logo),
    identifier: CONTRACT.address,
    sameAs: [SOCIALS.telegram.href, SOCIALS.x.href, LINKS.bscScan],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE_URL,
    description: SITE.description,
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(ASSETS.logo),
      },
    },
  };
}

export function tokenJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: SITE.name,
    alternateName: ["SNOWBOARD", "$SNOWBOARD", CONTRACT.address],
    identifier: CONTRACT.address,
    url: SITE_URL,
    description: SITE.description,
    category: "Cryptocurrency",
    additionalProperty: {
      "@type": "PropertyValue",
      name: "contractAddress",
      value: CONTRACT.address,
    },
    sameAs: [LINKS.bscScan, LINKS.dexScreener],
  };
}

export function faqJsonLd(
  items: readonly { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(
  items: readonly { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleJsonLd({
  title,
  description,
  path,
  date,
}: {
  title: string;
  description: string;
  path: string;
  date: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    mainEntityOfPage: absoluteUrl(path),
    author: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(ASSETS.logo),
      },
    },
  };
}
