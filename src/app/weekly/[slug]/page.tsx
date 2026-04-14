import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getPost, getAllSlugs } from "@/data/weekly";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `投资周报 #${post.number} · ${post.title} | FinRead`,
    description: post.summary,
  };
}

export default async function WeeklyDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="mx-auto max-w-[800px] px-5 py-10">
      {/* Back link */}
      <Link
        href="/weekly"
        className="mb-6 inline-flex items-center gap-1 text-xs text-muted hover:text-gold"
      >
        ← 返回周报列表
      </Link>

      {/* Header */}
      <div className="mb-8">
        <div className="mb-2 flex items-center gap-2">
          <span className="rounded-md bg-gold-dim px-2 py-0.5 text-[10px] font-semibold text-gold">
            投资周报 #{post.number}
          </span>
          <span className="text-[11px] text-muted">{post.date}</span>
        </div>
        <h1 className="text-xl font-bold text-ink md:text-2xl">
          {post.title}
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {post.summary}
        </p>
        <div className="mt-3 flex gap-1.5">
          {post.tickers.map((t) => (
            <Link
              key={t}
              href={`/company/${t.toLowerCase()}`}
              className="rounded border border-border bg-surface2 px-2 py-0.5 text-[10px] text-gold hover:bg-gold-dim"
            >
              {t}
            </Link>
          ))}
        </div>
      </div>

      {/* Content sections */}
      <div className="space-y-8">
        {post.sections.map((section, i) => (
          <section key={i}>
            <h2 className="mb-3 text-base font-semibold text-ink">
              {section.heading}
            </h2>
            <div className="whitespace-pre-line text-[13px] leading-relaxed text-text">
              {section.content}
            </div>
          </section>
        ))}
      </div>

      {/* Quote */}
      {post.quote && (
        <div className="mt-10 rounded-xl border border-border bg-surface p-5 text-center">
          <p className="text-sm italic text-ink/80">
            &ldquo;{post.quote.text}&rdquo;
          </p>
          <p className="mt-2 text-xs text-muted">— {post.quote.author}</p>
        </div>
      )}

      {/* Subscribe CTA */}
      <div className="mt-10 rounded-xl border border-gold/20 bg-gold-dim/20 p-5 text-center">
        <p className="text-sm text-muted">
          每周日更新 · 免费订阅不错过任何一期
        </p>
        <Link
          href="/register"
          className="mt-3 inline-block rounded-lg bg-gold px-5 py-2 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
        >
          免费订阅周报
        </Link>
      </div>
    </div>
  );
}
