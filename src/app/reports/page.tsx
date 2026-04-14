import Link from "next/link";
import { getAllReports } from "@/data/reports";

export const metadata = {
  title: "机构研报 | FinRead",
  description: "顶级机构研报中英全文解读，覆盖 AI、DeFi、Space 三大赛道",
};

const themeStyles: Record<string, { bg: string; text: string; label: string }> = {
  ai: { bg: "bg-theme-ai-dim", text: "text-theme-ai", label: "AI" },
  defi: { bg: "bg-theme-defi-dim", text: "text-theme-defi", label: "DeFi" },
  space: { bg: "bg-theme-space-dim", text: "text-theme-space", label: "Space" },
  macro: { bg: "bg-gold-dim", text: "text-gold", label: "宏观" },
};

export default function ReportsPage() {
  const reports = getAllReports();

  return (
    <div className="mx-auto max-w-[900px] px-5 py-10">
      {/* Header */}
      <div className="mb-10">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-blue/10 text-lg">
            📊
          </div>
          <div>
            <h1 className="text-2xl font-bold text-ink">机构研报</h1>
            <p className="text-xs text-muted">
              Morgan Stanley · Goldman Sachs · UBS · 更多机构持续收录
            </p>
          </div>
        </div>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
          精选顶级投行和研究机构的深度报告，逐段中英文对照翻译，保留投资术语精确含义。
          <span className="text-accent-blue"> 打赏 ¥9.9 解锁全文。</span>
        </p>
      </div>

      {/* Report list */}
      <div className="space-y-5">
        {reports.map((report) => {
          const theme = themeStyles[report.theme] ?? themeStyles.macro;
          return (
            <Link
              key={report.id}
              href={`/reports/${report.id}`}
              className="group block rounded-2xl border border-border bg-surface p-6 transition-all hover:border-accent-blue/30 hover:shadow-[0_0_24px_rgba(59,130,246,.06)]"
            >
              {/* Top row */}
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className={`rounded-md px-2 py-0.5 text-[10px] font-semibold ${theme.bg} ${theme.text}`}>
                  {theme.label}
                </span>
                <span className="rounded-md bg-surface2 px-2 py-0.5 text-[10px] font-semibold text-muted">
                  {report.institution}
                </span>
                <span className="text-[11px] text-muted">{report.date}</span>
                {report.pdfUrl && (
                  <span className="rounded-md border border-accent-blue/20 bg-accent-blue/10 px-2 py-0.5 text-[10px] font-semibold text-accent-blue">
                    附 PDF
                  </span>
                )}
                <span className="ml-auto rounded-md border border-gold/20 bg-gold-dim px-2 py-0.5 text-[10px] font-semibold text-gold">
                  打赏 ¥{report.tipAmount} 解锁
                </span>
              </div>

              {/* Title */}
              <h2 className="mb-1.5 text-base font-bold text-ink group-hover:text-accent-blue transition-colors">
                {report.title}
              </h2>
              <p className="mb-4 text-sm text-muted">{report.subtitle}</p>

              {/* Cover points */}
              <div className="grid gap-2 sm:grid-cols-2">
                {report.coverPoints.map((point: string, i: number) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 rounded-lg bg-bg/60 px-3 py-2 text-xs text-muted"
                  >
                    <span className="mt-0.5 shrink-0 text-accent-blue">▸</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Tickers + stats */}
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <div className="flex gap-1.5">
                  {report.tickers.map((t: string) => (
                    <span
                      key={t}
                      className="rounded border border-border bg-surface2 px-2 py-0.5 text-[10px] font-semibold text-gold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-[10px] text-muted">
                  {(report.wordCount / 1000).toFixed(1)}k 字 · 中英对照全文
                </span>
                <span className="ml-auto text-xs text-muted/50 transition-colors group-hover:text-accent-blue">
                  阅读详情 →
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* CTA */}
      <div className="mt-12 rounded-2xl border border-accent-blue/20 bg-accent-blue/5 p-6 text-center">
        <h3 className="text-base font-bold text-ink">更多研报持续收录中</h3>
        <p className="mt-2 text-sm text-muted">
          覆盖 AI · DeFi · Space 三大赛道 — 每周更新 1-2 篇顶级机构深度报告
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Link
            href="/theme/ai"
            className="rounded-lg border border-theme-ai/30 bg-theme-ai-dim px-4 py-2 text-xs font-semibold text-theme-ai"
          >
            AI 赛道 →
          </Link>
          <Link
            href="/theme/defi"
            className="rounded-lg border border-theme-defi/30 bg-theme-defi-dim px-4 py-2 text-xs font-semibold text-theme-defi"
          >
            DeFi 赛道 →
          </Link>
          <Link
            href="/theme/space"
            className="rounded-lg border border-theme-space/30 bg-theme-space-dim px-4 py-2 text-xs font-semibold text-theme-space"
          >
            Space 赛道 →
          </Link>
        </div>
      </div>
    </div>
  );
}
