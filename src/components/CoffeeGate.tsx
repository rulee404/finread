"use client";

import { useState } from "react";
import type { Article } from "@/lib/types";

const totalParagraphs = (a: Article) =>
  a.freePreview.reduce((n, s) => n + s.paragraphs.length, 0) +
  a.paidContent.reduce((n, s) => n + s.paragraphs.length, 0);

const paidParagraphs = (a: Article) =>
  a.paidContent.reduce((n, s) => n + s.paragraphs.length, 0);

export default function CoffeeGate({ article }: { article: Article }) {
  const [showQR, setShowQR] = useState(false);
  const paid = paidParagraphs(article);
  const total = totalParagraphs(article);
  const pct = Math.round((paid / total) * 100);

  return (
    <div className="relative mt-8">
      {/* Gradient fade overlay */}
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

          {/* Progress bar */}
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

        {/* Price & CTA */}
        <div className="mb-4 text-center">
          <div className="text-3xl font-bold text-white">
            ¥{article.price}
          </div>
          <div className="mt-0.5 text-xs text-muted">
            约 {(article.wordCount / 1000).toFixed(1)}k 字 · 原始文档约需
            ¥{Math.round(article.wordCount * 0.001)} token 翻译成本
          </div>
        </div>

        {/* Payment buttons */}
        <div className="space-y-2.5">
          <button
            onClick={() => setShowQR(!showQR)}
            className="w-full rounded-xl bg-gold py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
          >
            ☕ 微信 / 支付宝打赏 ¥{article.price}
          </button>
          <div className="flex gap-2.5">
            <button
              className="flex-1 rounded-xl border border-border bg-surface2 py-2.5 text-xs font-medium text-text transition-colors hover:bg-white/[0.06]"
              onClick={() => setShowQR(!showQR)}
            >
              其他金额打赏
            </button>
            <button className="flex-1 rounded-xl border border-accent-purple/30 bg-accent-purple/10 py-2.5 text-xs font-medium text-accent-purple transition-colors hover:bg-accent-purple/20">
              BTC / USDC 打赏
            </button>
          </div>
        </div>

        {/* QR Code placeholder */}
        {showQR && (
          <div className="mt-5 rounded-xl border border-border bg-bg p-5 text-center">
            <p className="mb-3 text-xs text-muted">
              扫码打赏后，截图发送到微信公众号「FinRead」，即刻获得全文链接
            </p>
            <div className="mx-auto flex justify-center gap-6">
              <div>
                <div className="mx-auto mb-2 flex h-28 w-28 items-center justify-center rounded-xl border border-border bg-white">
                  <span className="text-[10px] text-gray-400">
                    微信收款码
                    <br />
                    (待配置)
                  </span>
                </div>
                <div className="text-[10px] text-muted">微信支付</div>
              </div>
              <div>
                <div className="mx-auto mb-2 flex h-28 w-28 items-center justify-center rounded-xl border border-border bg-white">
                  <span className="text-[10px] text-gray-400">
                    支付宝收款码
                    <br />
                    (待配置)
                  </span>
                </div>
                <div className="text-[10px] text-muted">支付宝</div>
              </div>
            </div>
            <div className="mt-4 rounded-lg border border-accent-cyan/20 bg-accent-cyan/5 px-3 py-2">
              <p className="text-[11px] text-accent-cyan">
                💡 加密货币打赏：发送 USDC 至{" "}
                <code className="rounded bg-surface2 px-1 py-0.5 text-[10px]">
                  0x...待配置
                </code>{" "}
                （Base 网络）
              </p>
            </div>
          </div>
        )}

        {/* Value proposition */}
        <div className="mt-5 space-y-2">
          {[
            "省时间 — 不用自己翻墙找原始文档、注册 SEC EDGAR",
            "省 Token — 同样内容用 GPT-4 翻译约需 ¥" +
              Math.round(article.wordCount * 0.001) +
              " token 费用",
            "更准确 — 投资术语人工校对，不是机翻",
            "有结构 — 关键数字高亮、段落对齐，10 分钟读完管理层核心观点",
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
            </a>
            {" "}无限解锁所有全文，更划算
          </p>
        </div>
      </div>
    </div>
  );
}
