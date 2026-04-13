import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import type { ArticleParagraph, ArticleSection } from "@/lib/types";
import { getDoc, getRelatedDoc, getAllDocIds } from "@/data/docs";
import { getCompany } from "@/lib/companies";
import DocPaywall from "@/components/DocPaywall";

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
          ? "border-gold/20 bg-gold-dim/30"
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
        <h2 className="text-base font-semibold text-white">
          {section.heading}
        </h2>
      )}
      {section.paragraphs.map((p, i) => (
        <Paragraph key={i} p={p} />
      ))}
    </section>
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

        <div className="mt-4 rounded-xl border border-border bg-surface p-4">
          <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-gold">
            摘要
          </div>
          <p className="text-sm leading-relaxed text-text">{doc.summary}</p>
        </div>

        <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted">
          <span>
            <span className="font-semibold text-white">
              {(doc.wordCount / 1000).toFixed(1)}k
            </span>{" "}
            字
          </span>
          <span>
            <span className="font-semibold text-white">
              {totalParagraphCount}
            </span>{" "}
            段中英对照
          </span>
          <span>
            免费预览{" "}
            <span className="font-semibold text-accent-green">
              {freeParagraphCount}
            </span>{" "}
            段
          </span>
          {"externalUrl" in doc &&
            (doc as { externalUrl?: string }).externalUrl && (
              <a
                href={(doc as { externalUrl: string }).externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-blue hover:underline"
              >
                SEC 原文 ↗
              </a>
            )}
        </div>
      </header>

      {/* Free preview */}
      <div className="space-y-6">
        {doc.freePreview.map((section, i) => (
          <Section key={i} section={section} />
        ))}
      </div>

      {/* Paid content — checks purchase status client-side */}
      <DocPaywall
        docId={doc.id}
        paidContent={doc.paidContent}
        coffeeArticle={coffeeArticle}
      />

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
