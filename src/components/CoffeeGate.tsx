"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import type { Article } from "@/lib/types";
import { createClient } from "@/lib/supabase/client";

const totalParagraphs = (a: Article) =>
  a.freePreview.reduce((n, s) => n + s.paragraphs.length, 0) +
  a.paidContent.reduce((n, s) => n + s.paragraphs.length, 0);

const paidParagraphs = (a: Article) =>
  a.paidContent.reduce((n, s) => n + s.paragraphs.length, 0);

export default function CoffeeGate({ article }: { article: Article }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const paid = paidParagraphs(article);
  const total = totalParagraphs(article);
  const pct = Math.round((paid / total) * 100);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      setIsLoggedIn(!!data.user);
    });
  }, []);

  async function handleCheckout() {
    if (!isLoggedIn) {
      router.push(`/login?redirect=${encodeURIComponent(window.location.pathname)}`);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          docId: article.id,
          title: article.title,
          price: article.price,
          returnUrl: window.location.href.split("?")[0],
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 503) {
          setError("支付系统配置中，请稍后再试");
        } else {
          setError(data.error ?? "支付创建失败");
        }
        setLoading(false);
        return;
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      setError("网络错误，请稍后再试");
      setLoading(false);
    }
  }

  return (
    <div className="relative mt-8">
      <div className="pointer-events-none absolute -top-24 left-0 right-0 h-24 bg-gradient-to-t from-bg to-transparent" />

      <div className="rounded-2xl border border-gold/30 bg-gradient-to-b from-gold-dim/40 to-surface p-6 md:p-8">
        {/* Header */}
        <div className="mb-5 text-center">
          <div className="mb-2 text-2xl">☕</div>
          <h3 className="text-lg font-bold text-white">Token &amp; Coffee</h3>
          <p className="mt-1 text-sm text-muted">
            请作者喝杯咖啡，解锁完整中英对照全文
          </p>
        </div>

        {/* What you get */}
        <div className="mb-5 rounded-xl border border-border bg-bg/60 p-4">
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
            解锁内容
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="text-lg font-bold text-gold">{paid}</div>
              <div className="text-[10px] text-muted">中英对照段落</div>
            </div>
            <div>
              <div className="text-lg font-bold text-gold">
                {article.paidContent.length}
              </div>
              <div className="text-[10px] text-muted">章节</div>
            </div>
            <div>
              <div className="text-lg font-bold text-gold">{pct}%</div>
              <div className="text-[10px] text-muted">全文占比</div>
            </div>
          </div>

          <div className="mt-3">
            <div className="flex justify-between text-[10px] text-muted">
              <span>已读 {100 - pct}%</span>
              <span>剩余 {pct}%</span>
            </div>
            <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-surface2">
              <div
                className="h-full rounded-full bg-gradient-to-r from-gold/60 to-gold"
                style={{ width: `${100 - pct}%` }}
              />
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="mb-4 text-center">
          <div className="text-3xl font-bold text-white">
            ¥{article.price}
          </div>
          <div className="mt-0.5 text-xs text-muted">
            约 {(article.wordCount / 1000).toFixed(1)}k 字 · 同等内容用 GPT
            翻译约需 ¥{Math.round(article.wordCount * 0.001)} token
          </div>
        </div>

        {/* Payment button */}
        <button
          onClick={handleCheckout}
          disabled={loading}
          className="w-full rounded-xl bg-gold py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {loading
            ? "跳转支付中…"
            : isLoggedIn
              ? `☕ 立即解锁 ¥${article.price}`
              : "登录后解锁全文"}
        </button>

        {error && (
          <p className="mt-2 rounded-lg bg-accent-red/10 px-3 py-2 text-center text-xs text-accent-red">
            {error}
          </p>
        )}

        <p className="mt-2 text-center text-[10px] text-muted/60">
          支持微信支付 · 支付宝 · 银行卡 · 付款即刻解锁
        </p>

        {/* Value proposition */}
        <div className="mt-5 space-y-2">
          {[
            "付款后立刻解锁，无需等待人工审核",
            "省时间 — 不用自己翻墙找原始文档",
            "省 Token — 同等 GPT 翻译约需 ¥" +
              Math.round(article.wordCount * 0.001),
            "更准确 — 投资术语人工校对，非机翻",
          ].map((v) => (
            <div key={v} className="flex items-start gap-2 text-xs text-muted">
              <span className="mt-0.5 shrink-0 text-accent-green">✓</span>
              <span>{v}</span>
            </div>
          ))}
        </div>

        {/* Pro upsell */}
        <div className="mt-5 rounded-lg border border-border bg-surface2/50 p-3 text-center">
          <p className="text-[11px] text-muted">
            经常阅读？
            <a href="/pro" className="ml-1 text-gold hover:underline">
              Pro 会员 ¥49/月
            </a>{" "}
            无限解锁所有全文，更划算
          </p>
        </div>
      </div>
    </div>
  );
}
