import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getReport, getAllReports } from "@/data/reports";
import type { ArticleParagraph, ArticleSection, SummaryCard } from "@/lib/types";
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
      className={`rounded-lg border p-4 transition-all ${
        p.highlight
          ? "border-gold/30 bg-gold/5 shadow-[0_0_12px_rgba(212,175,55,0.08)]"
          : "border-border bg-surface"
      }`}
    >
      {p.speaker && (
        <div className="mb-2">
          <span className="font-bold text-ink">{p.speaker}</span>
          {p.speakerTitle && (
            <span className="ml-2 text-[11px] text-muted">{p.speakerTitle}</span>
          )}
        </div>
      )}
      <p className="text-[13px] leading-relaxed text-ink/90">{p.en}</p>
      <p className="mt-2 text-[13px] leading-relaxed text-muted">{p.cn}</p>
      {p.highlight && (
        <div className="mt-3 h-[2px] rounded-full bg-gradient-to-r from-gold/60 via-gold/20 to-transparent" />
      )}
    </div>
  );
}

function Section({ section }: { section: ArticleSection }) {
  return (
    <section className="space-y-3">
      {section.heading && (
        <h2 className="flex items-center gap-2 border-l-2 border-gold/50 pl-3 text-base font-semibold text-ink">
          {section.heading}
        </h2>
      )}
      {section.paragraphs.map((p, i) => (
        <Paragraph key={i} p={p} />
      ))}
    </section>
  );
}

function SummaryCards({ cards }: { cards: SummaryCard[] }) {
  return (
    <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-5">
      {cards.map((card) => (
        <div
          key={card.label}
          className="rounded-xl border border-border bg-surface p-3 text-center"
        >
          <div className="text-lg">{card.icon}</div>
          <div className="mt-1 text-[10px] text-muted">{card.label}</div>
          <div className="mt-0.5 text-sm font-bold text-ink">{card.value}</div>
          {card.note && (
            <div className="mt-0.5 text-[10px] text-gold">{card.note}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default async function ReportDetailPage({ params }: Props) {
  const { id } = await params;
  const report = getReport(id);
  if (!report) notFound();

  const theme = themeStyles[report.theme] ?? themeStyles.macro;
  const totalSections = report.freePreview.length + report.paidContent.length;
  const freeParagraphCount = report.freePreview.reduce(
    (n: number, s: ArticleSection) => n + s.paragraphs.length,
    0,
  );
  const paidParagraphCount = report.paidContent.reduce(
    (n: number, s: ArticleSection) => n + s.paragraphs.length,
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
          <span className="rounded-md bg-surface2 px-2 py-0.5 text-[10px] font-semibold text-ink/80">
            📊 {report.institution}
          </span>
          <span className="text-[11px] text-muted">{report.date}</span>
          <span className="rounded-md bg-accent-green/10 px-2 py-0.5 text-[10px] font-semibold text-accent-green">
            ✓ 完整全文翻译
          </span>
        </div>

        <h1 className="text-xl font-bold text-ink md:text-2xl">
          {report.title}
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {report.subtitle}
        </p>

        {/* Tickers + PDF download */}
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {report.tickers.map((t: string) => (
            <Link
              key={t}
              href={`/company/${t.toLowerCase()}`}
              className="rounded border border-border bg-surface2 px-2 py-0.5 text-[10px] text-gold hover:bg-gold-dim"
            >
              {t}
            </Link>
          ))}
          {report.pdfUrl && (
            <a
              href={report.pdfUrl}
              download
              className="ml-auto inline-flex items-center gap-1.5 rounded-lg border border-accent-blue/30 bg-accent-blue/10 px-3 py-1.5 text-xs font-semibold text-accent-blue transition-colors hover:bg-accent-blue/20"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
                <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
              </svg>
              下载 PDF 原文
            </a>
          )}
        </div>

        {/* Summary Cards */}
        {report.summaryCards && <SummaryCards cards={report.summaryCards} />}

        {/* Cover points */}
        <div className="mt-4 rounded-xl border border-border bg-surface p-4">
          <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-accent-blue">
            核心观点
          </div>
          <div className="space-y-1.5">
            {report.coverPoints.map((point: string, i: number) => (
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
            { label: "字数", value: `${(report.wordCount / 1000).toFixed(0)}k` },
            { label: "章节", value: `${totalSections}` },
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
                      : "font-semibold text-ink"
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
        {report.freePreview.map((section: ArticleSection, i: number) => (
          <Section key={i} section={section} />
        ))}
      </div>

      {/* Paywall: tip to unlock */}
      <ReportPaywall report={report} />

      {/* Back */}
      <div className="mt-10 text-center">
        <Link
          href="/reports"
          className="inline-block rounded-lg border border-border bg-surface2 px-5 py-2 text-xs text-text transition-colors hover:bg-wash-hover"
        >
          ← 返回研报列表
        </Link>
      </div>
    </div>
  );
}
