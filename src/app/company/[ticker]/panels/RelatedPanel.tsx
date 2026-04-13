import Link from "next/link";
import type { CompanyData, RelatedContent } from "@/lib/types";
import { getRelatedByTicker } from "@/data/docs";

const typeIcons: Record<string, string> = {
  interview: "🎙️",
  kol: "📝",
  analysis: "🔬",
  news: "📰",
};

function RelatedCard({
  item,
  ticker,
}: {
  item: RelatedContent;
  ticker: string;
}) {
  const icon = typeIcons[item.type] ?? "📄";
  const previewCount = item.freePreview.reduce(
    (n, s) => n + s.paragraphs.length,
    0,
  );

  return (
    <Link
      href={`/company/${ticker.toLowerCase()}/doc/${item.id}`}
      className="group block rounded-xl border border-border bg-surface p-5 transition-all hover:border-gold/20 hover:bg-surface2"
    >
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <span className="text-base">{icon}</span>
        <span className="rounded bg-surface2 px-1.5 py-0.5 text-[10px] font-semibold text-muted">
          {item.typeLabel}
        </span>
        <span className="text-[10px] text-muted">{item.date}</span>
      </div>

      <h4 className="mb-1 text-sm font-semibold text-white group-hover:text-gold">
        {item.title}
      </h4>
      {item.author && (
        <p className="mb-1.5 text-[11px] text-gold/70">{item.author}</p>
      )}
      <p className="line-clamp-2 text-xs leading-relaxed text-muted">
        {item.summary}
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-3">
        <span className="text-[10px] text-muted">
          {(item.wordCount / 1000).toFixed(1)}k 字
        </span>
        <span className="text-[10px] text-accent-green">
          免费 {previewCount} 段
        </span>
        <span className="rounded border border-gold/20 bg-gold-dim px-1.5 py-0.5 text-[10px] font-bold text-gold">
          ☕ ¥{item.price}
        </span>
      </div>
    </Link>
  );
}

export default function RelatedPanel({ company }: { company: CompanyData }) {
  const related = getRelatedByTicker(company.ticker);

  if (related.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-border bg-surface p-8 text-center">
        <p className="text-sm text-muted">
          {company.ticker} 的相关内容正在整理中 — 管理层访谈、KOL
          评论等将陆续上线。
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted">
        管理层访谈、知名 KOL 评论、机构研报等与 {company.ticker}{" "}
        相关的中英对照内容
      </p>
      {related.map((item) => (
        <RelatedCard
          key={item.id}
          item={item}
          ticker={company.ticker}
        />
      ))}
    </div>
  );
}
