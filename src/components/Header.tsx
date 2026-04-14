"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import AuthButton from "./AuthButton";

const navItems = [
  { href: "/", label: "首页", match: (p: string) => p === "/" },
  {
    href: "/theme/ai",
    label: "AI",
    match: (p: string) => p.startsWith("/theme/ai") || p.startsWith("/company/nvda"),
    color: "text-theme-ai",
    activeBg: "bg-theme-ai-dim border-theme-ai/30",
  },
  {
    href: "/theme/defi",
    label: "DeFi",
    match: (p: string) =>
      p.startsWith("/theme/defi") ||
      ["/company/hood", "/company/coin", "/company/crcl"].some((c) => p.startsWith(c)),
    color: "text-theme-defi",
    activeBg: "bg-theme-defi-dim border-theme-defi/30",
  },
  {
    href: "/theme/space",
    label: "Space",
    match: (p: string) => p.startsWith("/theme/space") || p.startsWith("/company/rklb"),
    color: "text-theme-space",
    activeBg: "bg-theme-space-dim border-theme-space/30",
  },
  { href: "/opinions", label: "观点", match: (p: string) => p.startsWith("/opinions") },
  { href: "/weekly", label: "周报", match: (p: string) => p.startsWith("/weekly") },
  {
    href: "/reports",
    label: "研报",
    match: (p: string) => p.startsWith("/reports"),
    color: "text-accent-blue",
    activeBg: "bg-accent-blue/10 border-accent-blue/30",
  },
  {
    href: "/pro",
    label: "Pro",
    match: (p: string) => p.startsWith("/pro"),
    color: "text-gold",
    activeBg: "bg-gold-dim border-gold/30",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-[1080px] flex-wrap items-center justify-between gap-3 px-5 py-3">
        <Link href="/" className="flex items-center gap-2 text-[15px] font-bold tracking-tight text-white">
          Fin<span className="text-gold">Read</span>
          <span className="rounded-md bg-surface2 px-1.5 py-0.5 text-[9px] font-medium text-muted">
            AI · DeFi · Space
          </span>
        </Link>

        <nav className="flex flex-wrap gap-1.5">
          {navItems.map((item) => {
            const isActive = item.match(pathname);
            const activeClasses = item.activeBg
              ? item.activeBg
              : "border-gold/30 bg-gold-dim";
            const activeText = item.color ?? "text-white";
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                  isActive
                    ? `${activeClasses} ${activeText}`
                    : "border-border text-muted hover:border-gold/20 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <AuthButton />
        </nav>
      </div>
    </header>
  );
}
