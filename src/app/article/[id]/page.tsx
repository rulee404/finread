import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getArticle, getAllArticles } from "@/data/articles";
import type { ArticleParagraph, ArticleSection } from "@/lib/types";
import CoffeeGate from "@/components/CoffeeGate";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ id: a.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const article = getArticle(id);
  if (!article) return { title: "Not Found" };
  return {
    title: `${article.title} | FinRead`,
    description: article.subtitle,
  };
}

const sourceTypeLabels: Record<string, { icon: string; label: string }> = {
  earnings: { icon: "📊", label: "财报电话会" },
  research: { icon: "📄", label: "机构研报" },
  filing: { icon: "📋", label: "SEC 文件" },
  interview: { icon: "🎙️", label: "管理层访谈" },
};

const themeStyles: Record<string, { bg: string; text: string }> = {
  ai: { bg: "bg-theme-ai-dim", text: "text-theme-ai" },
  defi: { bg: "bg-theme-defi-dim", text: "text-theme-defi" },
  space: { bg: "bg-theme-space-dim", text: "text-theme-space" },
  macro: { bg: "bg-gold-dim", text: "text-gold" },
};

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

export default async function ArticlePage({ params }: Props) {
  const { id } = await params;
  const article = getArticle(id);
  if (!article) notFound();

  const source = sourceTypeLabels[article.sourceType] ?? sourceTypeLabels.earnings;
  const theme = themeStyles[article.theme] ?? themeStyles.macro;
  const freeParagraphCount = article.freePreview.reduce(
    (n, s) => n + s.paragraphs.length,
    0,
  );
  const totalParagraphCount =
    freeParagraphCount +
    article.paidContent.reduce((n, s) => n + s.paragraphs.length, 0);

  return (
    <div className="mx-auto max-w-[800px] px-5 py-10">
      {/* Back */}
      <Link
        href="/article"
        className="mb-6 inline-flex items-center gap-1 text-xs text-muted hover:text-gold"
      >
        ← 全文库
      </Link>

      {/* Article header */}
      <header className="mb-8">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className={`rounded-md px-2 py-0.5 text-[10px] font-semibold ${theme.bg} ${theme.text}`}>
            {source.icon} {source.label}
          </span>
          <span className="text-[11px] text-muted">{article.date}</span>
          <span className="rounded-md border border-gold/20 bg-gold-dim px-2 py-0.5 text-[10px] font-semibold text-gold">
            ¥{article.price}
          </span>
        </div>

        <h1 className="text-xl font-bold text-white md:text-2xl">
          {article.title}
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {article.subtitle}
        </p>

        {/* Tickers */}
        <div className="mt-3 flex gap-1.5">
          {article.tickers.map((t) => (
            <Link
              key={t}
              href={`/company/${t.toLowerCase()}`}
              className="rounded border border-border bg-surface2 px-2 py-0.5 text-[10px] text-gold hover:bg-gold-dim"
            >
              {t}
            </Link>
          ))}
        </div>

        {/* Article stats */}
        <div className="mt-4 flex flex-wrap gap-4 rounded-lg border border-border bg-surface p-3">
          <div className="text-xs text-muted">
            <span className="font-semibold text-white">{(article.wordCount / 1000).toFixed(1)}k</span> 字
          </div>
          <div className="text-xs text-muted">
            <span className="font-semibold text-white">{totalParagraphCount}</span> 段中英对照
          </div>
          <div className="text-xs text-muted">
            免费预览 <span className="font-semibold text-accent-green">{freeParagraphCount}</span> 段
          </div>
          <div className="text-xs text-muted">
            来源: <span className="font-semibold text-white">{article.sourceLabel}</span>
          </div>
        </div>
      </header>

      {/* Free preview sections */}
      <div className="space-y-6">
        {article.freePreview.map((section, i) => (
          <Section key={i} section={section} />
        ))}
      </div>

      {/* Paywall */}
      <CoffeeGate article={article} />

      {/* Related articles CTA */}
      <div className="mt-10 rounded-xl border border-border bg-surface p-5 text-center">
        <p className="text-sm text-muted">
          更多原典全文 · 中英对照 · 管理层原话
        </p>
        <div className="mt-3 flex flex-wrap justify-center gap-3">
          <Link
            href="/article"
            className="rounded-lg border border-border bg-surface2 px-5 py-2 text-xs text-text transition-colors hover:bg-white/[0.06]"
          >
            浏览全文库 →
          </Link>
          <Link
            href="/pro"
            className="rounded-lg border border-gold/30 bg-gold-dim px-5 py-2 text-xs font-semibold text-gold transition-colors hover:bg-gold/20"
          >
            Pro 会员无限解锁
          </Link>
        </div>
      </div>
    </div>
  );
}
