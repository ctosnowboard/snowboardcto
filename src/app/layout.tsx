import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";

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
  title: "$SNOWBOARD | Community Takeover on BSC",
  description:
    "Snowboard Token is a pure community-driven memecoin on Binance Smart Chain. Pure vibes. Send it.",
  openGraph: {
    title: "$SNOWBOARD | Community Takeover on BSC",
    description:
      "Snowboard Token is a pure community-driven memecoin on Binance Smart Chain. Pure vibes. Send it.",
    images: ["/assets/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-background font-sans text-foreground">
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
