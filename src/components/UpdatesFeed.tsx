import Link from "next/link";
import type { SiteUpdate, UpdateType } from "@/data/updates";

const typeConfig: Record<
  UpdateType,
  { icon: string; label: string; color: string }
> = {
  earnings: { icon: "📊", label: "财报", color: "text-accent-green" },
  report: { icon: "📄", label: "研报", color: "text-accent-blue" },
  opinion: { icon: "💡", label: "观点", color: "text-gold" },
  transcript: { icon: "🎙️", label: "实录", color: "text-accent-cyan" },
  filing: { icon: "📋", label: "SEC", color: "text-accent-purple" },
  weekly: { icon: "📬", label: "周报", color: "text-gold" },
};

const themeColor: Record<string, string> = {
  ai: "bg-theme-ai",
  defi: "bg-theme-defi",
  space: "bg-theme-space",
  macro: "bg-gold",
};

function relativeDate(dateStr: string): string {
  const now = new Date();
  const d = new Date(dateStr);
  const diff = Math.floor((now.getTime() - d.getTime()) / 86400000);
  if (diff === 0) return "今天";
  if (diff === 1) return "昨天";
  if (diff < 7) return `${diff} 天前`;
  return dateStr.slice(5);
}

export default function UpdatesFeed({ updates }: { updates: SiteUpdate[] }) {
  if (updates.length === 0) return null;

  return (
    <section className="mb-14">
      {/* Section header */}
      <div className="mb-4 flex items-center gap-3">
        <div className="relative flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-green" />
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-accent-green">
            Live
          </span>
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-accent-green/20 to-transparent" />
        <span className="text-[11px] text-muted">最新动态</span>
      </div>

      {/* Feed items */}
      <div className="space-y-0">
        {updates.map((update, i) => {
          const cfg = typeConfig[update.type];
          const dot = update.theme
            ? themeColor[update.theme] ?? "bg-muted"
            : "bg-muted";

          return (
            <Link
              key={update.id}
              href={update.href}
              className="group relative flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-surface"
              style={{
                animationDelay: `${i * 80}ms`,
              }}
            >
              {/* Timeline spine */}
              <div className="relative flex flex-col items-center pt-1.5">
                <div className={`h-2 w-2 rounded-full ${dot} shrink-0`} />
                {i < updates.length - 1 && (
                  <div className="mt-1 h-full w-px bg-border" />
                )}
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1 pb-2">
                <div className="mb-0.5 flex flex-wrap items-center gap-2">
                  {update.isNew && (
                    <span className="rounded bg-accent-green/15 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-accent-green">
                      New
                    </span>
                  )}
                  <span className={`text-[10px] font-semibold ${cfg.color}`}>
                    {cfg.icon} {cfg.label}
                  </span>
                  <span className="text-[10px] text-muted/60">
                    {relativeDate(update.date)}
                  </span>
                </div>
                <p className="text-[13px] leading-snug text-text transition-colors group-hover:text-ink">
                  {update.title}
                </p>
              </div>

              {/* Arrow */}
              <span className="mt-2 shrink-0 text-[10px] text-muted/40 transition-colors group-hover:text-gold">
                →
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
