"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Article, ArticleParagraph, ArticleSection } from "@/lib/types";
import { checkAccess } from "@/lib/purchases";
import CoffeeGate from "./CoffeeGate";

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
          <span className="text-[13px] font-bold text-ink">{p.speaker}</span>
          {p.speakerTitle && (
            <span className="text-[11px] text-muted">{p.speakerTitle}</span>
          )}
        </div>
      )}
      <p className="text-[13px] leading-[1.85] text-ink/90">{p.en}</p>
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

interface Props {
  docId: string;
  paidContent: ArticleSection[];
  coffeeArticle: Article;
}

function DocPaywallInner({ docId, paidContent, coffeeArticle }: Props) {
  const searchParams = useSearchParams();
  const justUnlocked = searchParams.get("unlocked") === "1";
  const [status, setStatus] = useState<"loading" | "unlocked" | "locked">(
    justUnlocked ? "unlocked" : "loading",
  );

  useEffect(() => {
    if (justUnlocked) {
      setStatus("unlocked");
      return;
    }
    checkAccess(docId)
      .then(({ hasAccess }) => {
        setStatus(hasAccess ? "unlocked" : "locked");
      })
      .catch(() => {
        setStatus("locked");
      });
  }, [docId, justUnlocked]);

  if (paidContent.length === 0) return null;

  if (status === "loading") {
    return (
      <div className="mt-8 space-y-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="h-24 animate-pulse rounded-lg border border-border bg-surface"
          />
        ))}
      </div>
    );
  }

  if (status === "unlocked") {
    return (
      <div className="mt-8 space-y-6">
        <div className="flex items-center gap-2 rounded-lg border border-accent-green/20 bg-accent-green/5 px-4 py-2">
          <span className="text-accent-green">✓</span>
          <span className="text-xs text-accent-green">
            全文已解锁 · 感谢支持
          </span>
        </div>
        {paidContent.map((section, i) => (
          <Section key={i} section={section} />
        ))}
      </div>
    );
  }

  return <CoffeeGate article={coffeeArticle} />;
}

function LoadingFallback() {
  return (
    <div className="mt-8 space-y-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="h-24 animate-pulse rounded-lg border border-border bg-surface"
        />
      ))}
    </div>
  );
}

export default function DocPaywall(props: Props) {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <DocPaywallInner {...props} />
    </Suspense>
  );
}
