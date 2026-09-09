"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  ASSETS,
  BuyButton,
  NAV_LINKS,
  SITE,
} from "@/features/(site)/shared";
import { cn } from "@/lib/utils";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled || menuOpen
          ? "border-b border-ice/20 bg-background/95 shadow-[0_4px_24px_rgba(0,0,0,0.35)] backdrop-blur-md"
          : "border-b border-ice/10 bg-background/40 backdrop-blur-sm",
      )}
    >
      {/* Mobile header */}
      <div className="relative mx-auto flex min-h-14 items-center px-4 py-3 lg:hidden">
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-ice/30 bg-surface/60 text-ice-glow transition hover:border-ice hover:bg-ice/10"
        >
          {menuOpen ? (
            <X className="size-5" aria-hidden />
          ) : (
            <Menu className="size-5" aria-hidden />
          )}
        </button>

        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2"
        >
          <Image
            src={ASSETS.logo}
            alt={`${SITE.name} logo`}
            width={36}
            height={36}
            className="h-9 w-9 rounded-full object-cover"
          />
          <span className="text-sm font-bold tracking-wide text-white">
            {SITE.name}
          </span>
        </Link>

        <div className="ml-auto">
          <BuyButton size="sm" compact />
        </div>
      </div>

      {/* Desktop header */}
      <div className="mx-auto hidden h-18 max-w-7xl items-center justify-between gap-6 px-6 lg:flex lg:px-10">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <Image
            src={ASSETS.logo}
            alt={`${SITE.name} logo`}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="text-base font-bold tracking-wide text-white">
            {SITE.name}
          </span>
        </Link>

        <nav className="flex flex-1 items-center justify-center gap-1">
          {NAV_LINKS.map((link) =>
            link.live ? (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm font-medium transition",
                  isActivePath(pathname, link.href)
                    ? "bg-ice/15 text-ice-glow"
                    : "text-slate-400 hover:text-ice-glow",
                )}
              >
                {link.label}
              </Link>
            ) : (
              <span
                key={link.href}
                className="cursor-not-allowed rounded-full px-3 py-1.5 text-sm font-medium text-slate-600"
                title="Coming soon"
              >
                {link.label}
                <span className="ml-1 text-[10px] uppercase text-slate-700">
                  Soon
                </span>
              </span>
            ),
          )}
        </nav>

        <BuyButton size="sm" className="shrink-0" />
      </div>

      {menuOpen && (
        <div className="border-t border-ice/15 bg-background/98 px-5 py-4 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) =>
              link.live ? (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm font-medium transition",
                    isActivePath(pathname, link.href)
                      ? "bg-ice/15 text-ice-glow"
                      : "text-slate-300 hover:bg-surface hover:text-ice-glow",
                  )}
                >
                  {link.label}
                </Link>
              ) : (
                <span
                  key={link.href}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-600"
                >
                  {link.label}
                  <span className="ml-2 text-[10px] uppercase text-slate-700">
                    Soon
                  </span>
                </span>
              ),
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
