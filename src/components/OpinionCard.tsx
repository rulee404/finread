import type { Opinion } from "@/lib/types";
import Link from "next/link";

const themeColors: Record<string, { border: string; bg: string; text: string; label: string }> = {
  ai: {
    border: "border-theme-ai/30",
    bg: "bg-theme-ai-dim",
    text: "text-theme-ai",
    label: "AI",
  },
  defi: {
    border: "border-theme-defi/30",
    bg: "bg-theme-defi-dim",
    text: "text-theme-defi",
    label: "DeFi",
  },
  space: {
    border: "border-theme-space/30",
    bg: "bg-theme-space-dim",
    text: "text-theme-space",
    label: "Space",
  },
  macro: {
    border: "border-gold/30",
    bg: "bg-gold-dim",
    text: "text-gold",
    label: "宏观",
  },
};

const sentimentMap: Record<string, { icon: string; label: string; color: string }> = {
  bullish: { icon: "↑", label: "看多", color: "text-accent-green" },
  bearish: { icon: "↓", label: "看空", color: "text-accent-red" },
  neutral: { icon: "→", label: "中性", color: "text-muted" },
};

export default function OpinionCard({
  opinion,
  compact = false,
}: {
  opinion: Opinion;
  compact?: boolean;
}) {
  const theme = themeColors[opinion.theme] ?? themeColors.macro;
  const sentiment = opinion.sentiment
    ? sentimentMap[opinion.sentiment]
    : undefined;

  return (
    <Link
      href={`/opinions#${opinion.id}`}
      className={`group block rounded-xl border border-border bg-surface transition-colors hover:border-white/10 hover:bg-surface2 ${compact ? "p-4" : "p-5"}`}
    >
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <span
          className={`rounded-md px-2 py-0.5 text-[10px] font-semibold ${theme.bg} ${theme.text}`}
        >
          {theme.label}
        </span>
        {sentiment && (
          <span
            className={`text-[10px] font-semibold ${sentiment.color}`}
          >
            {sentiment.icon} {sentiment.label}
          </span>
        )}
        <span className="text-[11px] text-muted">{opinion.date}</span>
      </div>

      <h3
        className={`font-semibold text-ink group-hover:text-gold ${compact ? "text-[13px]" : "text-sm"}`}
      >
        {opinion.title}
      </h3>

      <p
        className={`mt-1.5 leading-relaxed text-muted ${compact ? "line-clamp-2 text-[11px]" : "line-clamp-3 text-xs"}`}
      >
        {opinion.summary}
      </p>

      {opinion.tickers && opinion.tickers.length > 0 && (
        <div className="mt-2.5 flex gap-1.5">
          {opinion.tickers.map((t) => (
            <span
              key={t}
              className="rounded border border-border bg-surface2 px-1.5 py-0.5 text-[10px] text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
