"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "公司财报" },
  { href: "/weekly", label: "每周投资周报" },
  { href: "/pro", label: "Pro 会员" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-[1080px] flex-wrap items-center justify-between gap-3 px-5 py-3">
        <Link href="/" className="text-[15px] font-bold tracking-tight text-white">
          Fin<span className="text-gold">Read</span>
        </Link>

        <nav className="flex flex-wrap gap-1.5">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/" || pathname.startsWith("/company")
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                  isActive
                    ? "border-gold/30 bg-gold-dim text-white"
                    : "border-border text-muted hover:border-gold/20 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/login"
            className="rounded-full border border-border px-3 py-1.5 text-xs text-muted transition-colors hover:border-gold/20 hover:text-white"
          >
            登录
          </Link>
        </nav>
      </div>
    </header>
  );
}
