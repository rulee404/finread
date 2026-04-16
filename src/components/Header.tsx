"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import AuthButton from "./AuthButton";

interface NavItem {
  href: string;
  label: string;
  match: (p: string) => boolean;
  color?: string;
  activeBg?: string;
}

const tracks: NavItem[] = [
  {
    href: "/theme/ai",
    label: "AI",
    match: (p) => p.startsWith("/theme/ai") || p.startsWith("/company/nvda") || p.startsWith("/company/asml") || p.startsWith("/company/tsm"),
    color: "text-theme-ai",
    activeBg: "bg-theme-ai-dim border-theme-ai/30",
  },
  {
    href: "/theme/defi",
    label: "DeFi",
    match: (p) =>
      p.startsWith("/theme/defi") ||
      ["/company/hood", "/company/coin", "/company/crcl"].some((c) => p.startsWith(c)),
    color: "text-theme-defi",
    activeBg: "bg-theme-defi-dim border-theme-defi/30",
  },
  {
    href: "/theme/space",
    label: "Space",
    match: (p) => p.startsWith("/theme/space") || p.startsWith("/company/rklb"),
    color: "text-theme-space",
    activeBg: "bg-theme-space-dim border-theme-space/30",
  },
];

const content: NavItem[] = [
  { href: "/opinions", label: "观点", match: (p) => p.startsWith("/opinions") },
  { href: "/weekly", label: "周报", match: (p) => p.startsWith("/weekly") },
  {
    href: "/reports",
    label: "研报",
    match: (p) => p.startsWith("/reports"),
    color: "text-accent-blue",
    activeBg: "bg-accent-blue/10 border-accent-blue/30",
  },
];

function NavPill({ item, pathname }: { item: NavItem; pathname: string }) {
  const isActive = item.match(pathname);
  const activeClasses = item.activeBg ?? "border-gold/30 bg-gold-dim";
  const activeText = item.color ?? "text-ink";
  return (
    <Link
      href={item.href}
      className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
        isActive
          ? `${activeClasses} ${activeText}`
          : "border-border text-muted hover:border-gold/20 hover:text-ink"
      }`}
    >
      {item.label}
    </Link>
  );
}

function Separator() {
  return <span className="mx-0.5 h-4 w-px bg-border" aria-hidden />;
}

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-[1080px] flex-wrap items-center justify-between gap-3 px-5 py-3 max-lg:pr-16">
        {/* Logo = Home */}
        <Link href="/" className="flex items-center gap-2 text-[15px] font-bold tracking-tight text-ink">
          Fin<span className="text-gold">Read</span>
        </Link>

        <nav className="flex flex-wrap items-center gap-1.5">
          {/* Group 1: Tracks */}
          {tracks.map((item) => (
            <NavPill key={item.href} item={item} pathname={pathname} />
          ))}

          <Separator />

          {/* Group 2: Content */}
          {content.map((item) => (
            <NavPill key={item.href} item={item} pathname={pathname} />
          ))}

          <Separator />

          {/* Group 3: Account */}
          <Link
            href="/pro"
            className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
              pathname.startsWith("/pro")
                ? "border-gold/30 bg-gold-dim text-gold"
                : "border-border text-muted hover:border-gold/20 hover:text-gold"
            }`}
          >
            Pro
          </Link>
          <AuthButton />
        </nav>
      </div>
    </header>
  );
}
