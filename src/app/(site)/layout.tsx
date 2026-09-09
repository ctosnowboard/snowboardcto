import { SiteFooter } from "@/components/layouts/(site)/footer";
import { SiteHeader } from "@/components/layouts/(site)/header";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex min-h-full flex-1 flex-col overflow-x-hidden">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 snow-grid opacity-40"
      />
      <SiteHeader />
      <main className="relative z-10 flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
