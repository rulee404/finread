import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getReport, getAllReports } from "@/data/reports";
import type { ArticleParagraph, ArticleSection } from "@/lib/types";
import ReportPaywall from "@/components/ReportPaywall";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return getAllReports().map((r) => ({ id: r.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const report = getReport(id);
  if (!report) return { title: "Not Found" };
  return {
    title: `${report.institution}: ${report.title} | FinRead 机构研报`,
    description: report.subtitle,
  };
}

const themeStyles: Record<string, { bg: string; text: string; label: string }> = {
  ai: { bg: "bg-theme-ai-dim", text: "text-theme-ai", label: "AI" },
  defi: { bg: "bg-theme-defi-dim", text: "text-theme-defi", label: "DeFi" },
  space: { bg: "bg-theme-space-dim", text: "text-theme-space", label: "Space" },
  macro: { bg: "bg-gold-dim", text: "text-gold", label: "宏观" },
};

function Paragraph({ p }: { p: ArticleParagraph }) {
  return (
    <div
      className={`rounded-lg border p-4 ${
        p.highlight
          ? "border-accent-blue/20 bg-accent-blue/5"
          : "border-border bg-surface"
      }`}
    >
      <p className="text-[13px] leading-relaxed text-white/90">{p.en}</p>
      <p className="mt-2 text-[13px] leading-relaxed text-muted">{p.cn}</p>
    </div>
  );
}

function Section({ section }: { section: ArticleSection }) {
  return (
    <section className="space-y-3">
      {section.heading && (
        <h2 className="flex items-center gap-2 border-l-2 border-accent-blue/50 pl-3 text-base font-semibold text-white">
          {section.heading}
        </h2>
      )}
      {section.paragraphs.map((p, i) => (
        <Paragraph key={i} p={p} />
      ))}
    </section>
  );
}

export default async function ReportDetailPage({ params }: Props) {
  const { id } = await params;
  const report = getReport(id);
  if (!report) notFound();

  const theme = themeStyles[report.theme] ?? themeStyles.macro;
  const freeParagraphCount = report.freePreview.reduce(
    (n, s) => n + s.paragraphs.length,
    0,
  );
  const paidParagraphCount = report.paidContent.reduce(
    (n, s) => n + s.paragraphs.length,
    0,
  );

  return (
    <div className="mx-auto max-w-[800px] px-5 py-10">
      {/* Back */}
      <Link
        href="/reports"
        className="mb-6 inline-flex items-center gap-1 text-xs text-muted hover:text-accent-blue"
      >
        ← 机构研报
      </Link>

      {/* Header */}
      <header className="mb-8">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className={`rounded-md px-2 py-0.5 text-[10px] font-semibold ${theme.bg} ${theme.text}`}>
            {theme.label}
          </span>
          <span className="rounded-md bg-surface2 px-2 py-0.5 text-[10px] font-semibold text-white/80">
            📊 {report.institution}
          </span>
          <span className="text-[11px] text-muted">{report.date}</span>
        </div>

        <h1 className="text-xl font-bold text-white md:text-2xl">
          {report.title}
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {report.subtitle}
        </p>

        {/* Tickers */}
        <div className="mt-3 flex gap-1.5">
          {report.tickers.map((t) => (
            <Link
              key={t}
              href={`/company/${t.toLowerCase()}`}
              className="rounded border border-border bg-surface2 px-2 py-0.5 text-[10px] text-gold hover:bg-gold-dim"
            >
              {t}
            </Link>
          ))}
        </div>

        {/* Cover points */}
        <div className="mt-4 rounded-xl border border-border bg-surface p-4">
          <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-accent-blue">
            核心观点
          </div>
          <div className="space-y-1.5">
            {report.coverPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-text">
                <span className="mt-0.5 shrink-0 text-accent-blue">▸</span>
                {point}
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-4 flex flex-wrap gap-3">
          {[
            { label: "字数", value: `${(report.wordCount / 1000).toFixed(1)}k` },
            { label: "总段落", value: `${freeParagraphCount + paidParagraphCount}` },
            { label: "免费预览", value: `${freeParagraphCount} 段`, green: true },
            { label: "打赏解锁", value: `${paidParagraphCount} 段`, gold: true },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-lg border border-border bg-surface2/50 px-3 py-1.5 text-xs"
            >
              <span className="text-muted">{s.label} </span>
              <span
                className={
                  s.green
                    ? "font-semibold text-accent-green"
                    : s.gold
                      ? "font-semibold text-gold"
                      : "font-semibold text-white"
                }
              >
                {s.value}
              </span>
            </div>
          ))}
        </div>
      </header>

      {/* Free preview */}
      <div className="space-y-6">
        {report.freePreview.map((section, i) => (
          <Section key={i} section={section} />
        ))}
      </div>

      {/* Paywall: tip to unlock */}
      <ReportPaywall report={report} />

      {/* Back */}
      <div className="mt-10 text-center">
        <Link
          href="/reports"
          className="inline-block rounded-lg border border-border bg-surface2 px-5 py-2 text-xs text-text transition-colors hover:bg-white/[0.06]"
        >
          ← 返回研报列表
        </Link>
      </div>
    </div>
  );
}
