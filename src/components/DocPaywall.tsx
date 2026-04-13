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
