import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import type { ArticleParagraph, ArticleSection, SummaryCard } from "@/lib/types";
import { getDoc, getRelatedDoc, getAllDocIds } from "@/data/docs";
import { getCompany } from "@/lib/companies";
import DocPaywall from "@/components/DocPaywall";
import TipJar from "@/components/TipJar";

interface Props {
  params: Promise<{ ticker: string; docId: string }>;
}

export async function generateStaticParams() {
  return getAllDocIds().map(({ ticker, docId }) => ({ ticker, docId }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { docId } = await params;
  const doc = getDoc(docId) ?? getRelatedDoc(docId);
  if (!doc) return { title: "Not Found" };
  return {
    title: `${doc.title} | FinRead`,
    description: doc.summary,
  };
}

function Paragraph({ p }: { p: ArticleParagraph }) {
  return (
    <div
      className={`rounded-lg border p-4 ${
        p.highlight
          ? "border-gold/30 bg-gold-dim/30 shadow-[0_0_12px_rgba(255,204,0,0.05)]"
          : "border-border bg-surface"
      }`}
    >
      {p.speaker && (
        <div className="mb-2 flex items-baseline gap-2">
          <span className="text-[13px] font-bold text-white">{p.speaker}</span>
          {p.speakerTitle && (
            <span className="text-[11px] text-muted">{p.speakerTitle}</span>
          )}
        </div>
      )}
      <p className="text-[13px] leading-[1.85] text-white/90">{p.en}</p>
      <p className="mt-2 text-[13px] leading-[1.85] text-muted">{p.cn}</p>
      {p.highlight && (
        <div className="mt-2 h-px bg-gradient-to-r from-gold/40 via-gold/10 to-transparent" />
      )}
    </div>
  );
}

function Section({ section }: { section: ArticleSection }) {
  return (
    <section className="space-y-3">
      {section.heading && (
        <h2 className="flex items-center gap-2 border-l-2 border-gold/50 pl-3 text-base font-semibold text-white">
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
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {cards.map((c) => (
        <div
          key={c.label}
          className="rounded-xl border border-border bg-surface p-3 text-center"
        >
          <div className="text-lg">{c.icon}</div>
          <div className="mt-1 text-lg font-bold text-white">{c.value}</div>
          <div className="text-[10px] font-medium text-muted">{c.label}</div>
          {c.note && (
            <div className="mt-0.5 text-[10px] font-semibold text-accent-green">
              {c.note}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default async function DocDetailPage({ params }: Props) {
  const { ticker, docId } = await params;

  const doc = getDoc(docId) ?? getRelatedDoc(docId);
  if (!doc) notFound();

  const company = getCompany(ticker);
  if (!company) notFound();

  const freeParagraphCount = doc.freePreview.reduce(
    (n, s) => n + s.paragraphs.length,
    0,
  );
  const paidParagraphCount = doc.paidContent.reduce(
    (n, s) => n + s.paragraphs.length,
    0,
  );
  const totalParagraphCount = freeParagraphCount + paidParagraphCount;
  const totalSections = doc.freePreview.length + doc.paidContent.length;

  const summaryCards: SummaryCard[] | undefined =
    "summaryCards" in doc
      ? (doc as { summaryCards?: SummaryCard[] }).summaryCards
      : undefined;

  const coffeeArticle = {
    id: doc.id,
    date: doc.date,
    theme: company.theme,
    title: doc.title,
    subtitle: doc.summary,
    sourceType: "earnings" as const,
    sourceLabel: "",
    tickers: [doc.ticker],
    price: doc.price,
    freePreview: doc.freePreview,
    paidContent: doc.paidContent,
    wordCount: doc.wordCount,
  };

  return (
    <div className="mx-auto max-w-[800px] px-5 py-10">
      {/* Breadcrumb */}
      <div className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-muted">
        <Link
          href={`/company/${ticker.toLowerCase()}`}
          className="hover:text-gold"
        >
          {company.ticker} {company.name}
        </Link>
        <span>›</span>
        <span className="text-white/60">文档详情</span>
      </div>

      {/* Header */}
      <header className="mb-8">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          {"quarter" in doc && (
            <span className="rounded bg-surface2 px-2 py-0.5 text-[10px] font-semibold text-muted">
              {(doc as { quarter: string }).quarter}
            </span>
          )}
          <span className="text-[11px] text-muted">{doc.date}</span>
          <span className="rounded-md border border-gold/20 bg-gold-dim px-2 py-0.5 text-[10px] font-semibold text-gold">
            ☕ ¥{doc.price}
          </span>
        </div>

        <h1 className="text-xl font-bold text-white md:text-2xl">
          {doc.title}
        </h1>

        {/* Summary: cards if available, else text card */}
        {summaryCards && summaryCards.length > 0 ? (
          <div className="mt-5 space-y-4">
            <SummaryCards cards={summaryCards} />
            <div className="rounded-xl border border-border bg-surface/60 p-4">
              <p className="text-[13px] leading-relaxed text-text">
                {doc.summary}
              </p>
            </div>
          </div>
        ) : (
          <div className="mt-4 rounded-xl border border-border bg-surface p-4">
            <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-gold">
              摘要
            </div>
            <p className="text-sm leading-relaxed text-text">{doc.summary}</p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-4 flex flex-wrap gap-3">
          {[
            { label: "字数", value: `${(doc.wordCount / 1000).toFixed(1)}k` },
            { label: "段落", value: `${totalParagraphCount}` },
            { label: "章节", value: `${totalSections}` },
            { label: "免费预览", value: `${freeParagraphCount} 段`, green: true },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-lg border border-border bg-surface2/50 px-3 py-1.5 text-xs"
            >
              <span className="text-muted">{s.label} </span>
              <span className={s.green ? "font-semibold text-accent-green" : "font-semibold text-white"}>
                {s.value}
              </span>
            </div>
          ))}
          {"externalUrl" in doc &&
            (doc as { externalUrl?: string }).externalUrl && (
              <a
                href={(doc as { externalUrl: string }).externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-accent-blue/20 bg-accent-blue/5 px-3 py-1.5 text-xs text-accent-blue hover:bg-accent-blue/10"
              >
                SEC 原文 ↗
              </a>
            )}
        </div>

        {/* Completeness badge */}
        <div className="mt-4 rounded-lg border border-accent-green/20 bg-accent-green/5 px-4 py-2.5">
          <p className="text-xs text-accent-green">
            <span className="font-bold">✓ 完整全文</span> — 本文件为原始文档逐段翻译，包含管理层演讲全文及分析师 Q&A 所有提问与回答，无删减、无遗漏。
          </p>
        </div>
      </header>

      {/* Free preview */}
      <div className="space-y-6">
        {doc.freePreview.map((section, i) => (
          <Section key={i} section={section} />
        ))}
      </div>

      {/* Paid content */}
      <DocPaywall
        docId={doc.id}
        paidContent={doc.paidContent}
        coffeeArticle={coffeeArticle}
      />

      {/* Tip */}
      <TipJar articleTitle={doc.title} />

      {/* Back */}
      <div className="mt-10 text-center">
        <Link
          href={`/company/${ticker.toLowerCase()}`}
          className="inline-block rounded-lg border border-border bg-surface2 px-5 py-2 text-xs text-text transition-colors hover:bg-white/[0.06]"
        >
          ← 返回 {company.ticker} 主页
        </Link>
      </div>
    </div>
  );
}
