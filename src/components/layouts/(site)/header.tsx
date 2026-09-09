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

function NavLink({
  href,
  label,
  live,
  pathname,
  variant,
  onNavigate,
}: {
  href: string;
  label: string;
  live: boolean;
  pathname: string;
  variant: "desktop" | "mobile";
  onNavigate?: () => void;
}) {
  if (!live) {
    return (
      <span
        className={cn(
          "cursor-not-allowed font-medium text-slate-600",
          variant === "desktop" && "rounded-full px-3 py-1.5 text-sm",
          variant === "mobile" && "rounded-xl px-4 py-3 text-sm",
        )}
        title="Coming soon"
      >
        {label}
        <span
          className={cn(
            "uppercase text-slate-700",
            variant === "desktop" && "ml-1 text-[10px]",
            variant === "mobile" && "ml-2 text-[10px]",
          )}
        >
          Soon
        </span>
      </span>
    );
  }

  const active = isActivePath(pathname, href);

  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={cn(
        "font-medium transition",
        variant === "desktop" && "rounded-full px-3 py-1.5 text-sm",
        variant === "mobile" && "rounded-xl px-4 py-3 text-sm",
        active
          ? "bg-ice/15 text-ice-glow"
          : variant === "desktop"
            ? "text-slate-400 hover:text-ice-glow"
            : "text-slate-300 hover:bg-surface hover:text-ice-glow",
      )}
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPathname, setMenuPathname] = useState(pathname);
  const [scrolled, setScrolled] = useState(false);

  if (pathname !== menuPathname) {
    setMenuPathname(pathname);
    setMenuOpen(false);
  }

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
      <div className="mx-auto flex min-h-14 items-center gap-2 px-3 py-2 sm:px-4 lg:hidden">
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
          className="flex min-w-0 flex-1 items-center gap-2"
        >
          <Image
            src={ASSETS.logo}
            alt={`${SITE.name} logo`}
            width={36}
            height={36}
            className="size-9 shrink-0 rounded-full object-cover"
          />
          <span className="truncate text-sm font-bold tracking-wide text-white">
            {SITE.name}
          </span>
        </Link>

        <BuyButton size="sm" compact className="shrink-0" />
      </div>

      <div className="mx-auto hidden h-18 max-w-7xl items-center justify-between gap-4 px-6 lg:flex lg:px-10">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <Image
            src={ASSETS.logo}
            alt={`${SITE.name} logo`}
            width={40}
            height={40}
            className="size-10 rounded-full object-cover"
          />
          <span className="text-base font-bold tracking-wide text-white">
            {SITE.name}
          </span>
        </Link>

        <nav className="flex min-w-0 flex-1 flex-wrap items-center justify-center gap-1">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              live={link.live}
              pathname={pathname}
              variant="desktop"
            />
          ))}
        </nav>

        <BuyButton size="sm" className="shrink-0" />
      </div>

      {menuOpen && (
        <div className="max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-t border-ice/15 bg-background/98 px-4 py-4 backdrop-blur-md sm:px-5 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                live={link.live}
                pathname={pathname}
                variant="mobile"
                onNavigate={() => setMenuOpen(false)}
              />
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
