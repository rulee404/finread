import Link from "next/link";
import type { CompanyData, CompanyDoc } from "@/lib/types";
import { getDocsByTicker } from "@/data/docs";

const categoryIcons: Record<string, string> = {
  transcript: "🎙️",
  "10k": "📋",
  "10q": "📋",
  "8k": "📄",
  "shareholder-letter": "✉️",
  "earnings-ppt": "📊",
  "press-release": "📰",
};

function DocCard({ doc, ticker }: { doc: CompanyDoc; ticker: string }) {
  const icon = categoryIcons[doc.category] ?? "📄";
  const previewCount = doc.freePreview.reduce(
    (n, s) => n + s.paragraphs.length,
    0,
  );

  return (
    <Link
      href={`/company/${ticker.toLowerCase()}/doc/${doc.id}`}
      className="group flex items-start gap-3 rounded-xl border border-border bg-surface p-4 transition-all hover:border-gold/20 hover:bg-surface2"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface2 text-base group-hover:bg-gold-dim">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <span className="rounded bg-surface2 px-1.5 py-0.5 text-[10px] font-semibold text-muted">
            {doc.categoryLabel}
          </span>
          <span className="text-[10px] text-muted">{doc.date}</span>
        </div>
        <h4 className="mb-1 text-sm font-semibold text-white group-hover:text-gold">
          {doc.title}
        </h4>
        <p className="line-clamp-2 text-xs leading-relaxed text-muted">
          {doc.summary}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <span className="text-[10px] text-muted">
            {(doc.wordCount / 1000).toFixed(1)}k 字
          </span>
          <span className="text-[10px] text-accent-green">
            免费 {previewCount} 段
          </span>
          <span className="rounded border border-gold/20 bg-gold-dim px-1.5 py-0.5 text-[10px] font-bold text-gold">
            ☕ ¥{doc.price}
          </span>
          {doc.externalUrl && (
            <span className="text-[10px] text-accent-blue">有原文链接</span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default function EarningsPanel({ company }: { company: CompanyData }) {
  const docs = getDocsByTicker(company.ticker);

  const quarters = Array.from(new Set(docs.map((d) => d.quarter)));

  if (docs.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-border bg-surface p-8 text-center">
        <p className="text-sm text-muted">
          {company.ticker} 的财报文档正在整理中，敬请期待。
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {quarters.map((quarter) => {
        const qDocs = docs.filter((d) => d.quarter === quarter);
        return (
          <section key={quarter}>
            <div className="mb-3 flex items-center gap-2">
              <h3 className="text-sm font-semibold text-white">{quarter}</h3>
              <span className="text-[10px] text-muted">
                {qDocs.length} 份文档
              </span>
            </div>
            <div className="space-y-2.5">
              {qDocs.map((doc) => (
                <DocCard
                  key={doc.id}
                  doc={doc}
                  ticker={company.ticker}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
