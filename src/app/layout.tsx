import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";

import { JsonLd } from "@/components/json-ld";
import { CONTRACT, SITE, SITE_URL, SOCIALS } from "@/features/(site)/shared";
import { organizationJsonLd, tokenJsonLd, websiteJsonLd } from "@/lib/seo";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "SNOWBOARD",
    "$SNOWBOARD",
    "Snowboard CTO",
    "BSC memecoin",
    "Binance Smart Chain",
    "community takeover",
    "PancakeSwap",
    CONTRACT.address,
    `CA ${CONTRACT.address}`,
  ],
  authors: [{ name: "Snowboard CTO", url: SITE_URL }],
  creator: "Snowboard CTO",
  publisher: "Snowboard CTO",
  category: "cryptocurrency",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    site: SOCIALS.x.handle,
    creator: SOCIALS.x.handle,
    title: SITE.title,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full overflow-x-hidden antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-background font-sans text-foreground">
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <JsonLd data={tokenJsonLd()} />
        {children}
        <Toaster
          theme="dark"
          position="bottom-center"
          toastOptions={{
            className: "border border-ice/30 bg-surface text-foreground",
          }}
        />
      </body>
    </html>
  );
}
