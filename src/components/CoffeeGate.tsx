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

type PayMethod = "stripe" | "alipay";

export default function CoffeeGate({ article }: { article: Article }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [payMethod, setPayMethod] = useState<PayMethod>("stripe");
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
      router.push(
        `/login?redirect=${encodeURIComponent(window.location.pathname)}`,
      );
      return;
    }

    setLoading(true);
    setError(null);

    if (payMethod === "alipay") {
      setError("支付宝通道即将上线，目前请使用 Stripe（支持银行卡/Apple Pay）");
      setLoading(false);
      return;
    }

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
          <h3 className="text-lg font-bold text-ink">Token &amp; Coffee</h3>
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
          <div className="text-3xl font-bold text-ink">
            ¥{article.price}
          </div>
          <div className="mt-0.5 text-xs text-muted">
            约 {(article.wordCount / 1000).toFixed(1)}k 字 · 同等内容用 GPT
            翻译约需 ¥{Math.round(article.wordCount * 0.001)} token
          </div>
        </div>

        {/* Payment method selector */}
        <div className="mb-4 flex gap-2">
          <button
            onClick={() => setPayMethod("stripe")}
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg border py-2.5 text-xs font-medium transition-colors ${
              payMethod === "stripe"
                ? "border-gold/40 bg-gold-dim/40 text-ink"
                : "border-border bg-surface2/50 text-muted hover:border-border hover:text-ink"
            }`}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/>
            </svg>
            Stripe
          </button>
          <button
            onClick={() => setPayMethod("alipay")}
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg border py-2.5 text-xs font-medium transition-colors ${
              payMethod === "alipay"
                ? "border-[#1677FF]/40 bg-[#1677FF]/10 text-ink"
                : "border-border bg-surface2/50 text-muted hover:border-border hover:text-ink"
            }`}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M21.422 15.358c-1.04-.378-5.064-2.187-6.504-2.965-.445.628-1.626 2.004-2.844 2.96-1.218.955-2.785 1.508-4.05 1.508-1.51 0-3.046-.738-3.046-2.95 0-2.94 2.798-4.468 7.197-4.544-.503-1.108-.792-2.388-.792-3.164 0-.502.068-1.01.177-1.493H7.68v-.972h4.463c.21-.616.52-1.204.92-1.71H7.68V1.06h7.398a6.496 6.496 0 012.508 1.578v-.007c-.65-.348-2.48-.62-3.873.33-.865.586-1.516 1.556-1.84 2.067h4.413v.968H11.54c-.117.41-.188.84-.188 1.28 0 1.196.578 2.716 1.2 3.66 1.62-.056 5.89.302 8.67 1.6.347.163.672.32.972.48C22.82 10.852 23 8.51 23 6.003 23 2.687 20.313 0 17 0H6C2.687 0 0 2.687 0 6v12c0 3.313 2.687 6 6 6h11c3.313 0 6-2.687 6-6v-1.54c-.415-.366-.966-.738-1.578-1.102zM8.06 17.85c.96 0 2.058-.378 3.12-1.15.782-.57 1.47-1.297 1.98-1.96-2.96-.22-6.154.532-6.154 2.67 0 .902.6 1.4 1.31 1.44h.04c.234 0 .467-.033.704-.04z"/>
            </svg>
            支付宝
            <span className="rounded bg-ink/10 px-1 py-0.5 text-[9px] text-muted">
              即将上线
            </span>
          </button>
        </div>

        {/* Payment button */}
        <button
          onClick={handleCheckout}
          disabled={loading}
          className={`w-full rounded-xl py-3 text-sm font-semibold transition-opacity hover:opacity-90 disabled:opacity-50 ${
            payMethod === "alipay"
              ? "bg-[#1677FF] text-[#fff]"
              : "bg-gold text-bg"
          }`}
        >
          {loading
            ? "跳转支付中…"
            : isLoggedIn
              ? payMethod === "alipay"
                ? `支付宝支付 ¥${article.price}`
                : `☕ 立即解锁 ¥${article.price}`
              : "登录后解锁全文"}
        </button>

        {error && (
          <p className="mt-2 rounded-lg bg-accent-red/10 px-3 py-2 text-center text-xs text-accent-red">
            {error}
          </p>
        )}

        <p className="mt-2 text-center text-[10px] text-muted/60">
          Stripe 支持 Visa / Mastercard / Apple Pay · 付款即刻解锁
        </p>

        {/* Value proposition */}
        <div className="mt-5 space-y-2">
          {[
            "付款后立刻解锁，无需等待人工审核",
            "省时间 — 不用自己翻墙找原始文档",
            "省 Token — 同等 GPT 翻译约需 ¥" +
              Math.round(article.wordCount * 0.001),
            "更准确 — Claude Opus 4.6 Max 翻译 + 投资术语精校",
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
