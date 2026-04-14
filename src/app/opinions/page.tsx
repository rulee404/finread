import { getAllOpinions } from "@/data/opinions";
import type { Opinion } from "@/lib/types";
import Link from "next/link";

export const metadata = {
  title: "投资观点 | FinRead",
  description: "作者的实时投资观点、持仓思考与市场分析",
};

const themeColors: Record<string, { border: string; bg: string; text: string; label: string }> = {
  ai: { border: "border-l-theme-ai", bg: "bg-theme-ai-dim", text: "text-theme-ai", label: "AI" },
  defi: { border: "border-l-theme-defi", bg: "bg-theme-defi-dim", text: "text-theme-defi", label: "DeFi" },
  space: { border: "border-l-theme-space", bg: "bg-theme-space-dim", text: "text-theme-space", label: "Space" },
  macro: { border: "border-l-gold", bg: "bg-gold-dim", text: "text-gold", label: "宏观" },
};

const sentimentMap: Record<string, { icon: string; label: string; color: string }> = {
  bullish: { icon: "↑", label: "看多", color: "text-accent-green" },
  bearish: { icon: "↓", label: "看空", color: "text-accent-red" },
  neutral: { icon: "→", label: "中性", color: "text-muted" },
};

function OpinionDetail({ opinion }: { opinion: Opinion }) {
  const theme = themeColors[opinion.theme] ?? themeColors.macro;
  const sentiment = opinion.sentiment ? sentimentMap[opinion.sentiment] : undefined;

  return (
    <article
      id={opinion.id}
      className={`rounded-xl border border-border bg-surface ${theme.border} border-l-[3px] p-6 scroll-mt-24`}
    >
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className={`rounded-md px-2 py-0.5 text-[10px] font-semibold ${theme.bg} ${theme.text}`}>
          {theme.label}
        </span>
        {sentiment && (
          <span className={`rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold ${sentiment.color}`}>
            {sentiment.icon} {sentiment.label}
          </span>
        )}
        <span className="text-[11px] text-muted">{opinion.date}</span>
      </div>

      <h2 className="mb-2 text-lg font-bold text-ink">{opinion.title}</h2>
      <p className="mb-4 text-sm leading-relaxed text-muted">{opinion.summary}</p>

      <div className="whitespace-pre-line text-[13px] leading-relaxed text-text">
        {opinion.content.split("\n").map((line, i) => {
          if (line.startsWith("**") && line.endsWith("**")) {
            return (
              <p key={i} className="mt-3 mb-1 font-semibold text-ink">
                {line.replace(/\*\*/g, "")}
              </p>
            );
          }
          if (line.startsWith("**")) {
            const parts = line.split("**");
            return (
              <p key={i} className="mt-2">
                {parts.map((part, j) =>
                  j % 2 === 1 ? (
                    <strong key={j} className="text-ink">{part}</strong>
                  ) : (
                    <span key={j}>{part}</span>
                  ),
                )}
              </p>
            );
          }
          if (line.trim() === "") return <br key={i} />;
          return <p key={i}>{line}</p>;
        })}
      </div>

      {opinion.tickers && opinion.tickers.length > 0 && (
        <div className="mt-4 flex gap-1.5">
          {opinion.tickers.map((t) => (
            <Link
              key={t}
              href={`/company/${t.toLowerCase()}`}
              className="rounded border border-border bg-surface2 px-2 py-0.5 text-[10px] text-gold hover:bg-gold-dim"
            >
              {t}
            </Link>
          ))}
        </div>
      )}
    </article>
  );
}

export default function OpinionsPage() {
  const opinions = getAllOpinions();

  return (
    <div className="mx-auto max-w-[800px] px-5 py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-2xl font-bold text-ink">投资观点</h1>
        <p className="text-sm text-muted">
          作者的实时投资思考与持仓分析 · 覆盖 AI / DeFi / Space 三大赛道 ·
          持续更新
        </p>
        <div className="mt-4 flex items-center gap-3 rounded-lg border border-gold/20 bg-gold-dim/30 px-4 py-2.5">
          <span className="text-sm text-gold">●</span>
          <p className="text-xs text-muted">
            以下内容为个人投资日志，仅记录作者当时的思考过程，<strong className="text-text">不构成投资建议</strong>。市场观点随时可能变化。
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {opinions.map((op) => (
          <OpinionDetail key={op.id} opinion={op} />
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-gold/20 bg-gold-dim/20 p-5 text-center">
        <p className="text-sm text-muted">
          关注最新观点更新 · 每周同步周报发布
        </p>
        <Link
          href="/register"
          className="mt-3 inline-block rounded-lg bg-gold px-5 py-2 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
        >
          免费订阅
        </Link>
      </div>
    </div>
  );
}
