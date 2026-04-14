"use client";

import { useState } from "react";
import type { ResearchReport, ArticleParagraph, ArticleSection } from "@/lib/types";

function Paragraph({ p }: { p: ArticleParagraph }) {
  return (
    <div
      className={`rounded-lg border p-4 ${
        p.highlight
          ? "border-accent-blue/20 bg-accent-blue/5"
          : "border-border bg-surface"
      }`}
    >
      <p className="text-[13px] leading-relaxed text-ink/90">{p.en}</p>
      <p className="mt-2 text-[13px] leading-relaxed text-muted">{p.cn}</p>
    </div>
  );
}

function Section({ section }: { section: ArticleSection }) {
  return (
    <section className="space-y-3">
      {section.heading && (
        <h2 className="flex items-center gap-2 border-l-2 border-accent-blue/50 pl-3 text-base font-semibold text-ink">
          {section.heading}
        </h2>
      )}
      {section.paragraphs.map((p, i) => (
        <Paragraph key={i} p={p} />
      ))}
    </section>
  );
}

type GateState = "locked" | "tipping" | "unlocked";

export default function ReportPaywall({ report }: { report: ResearchReport }) {
  const [state, setState] = useState<GateState>("locked");

  const paidParagraphs = report.paidContent.reduce(
    (n, s) => n + s.paragraphs.length,
    0,
  );

  if (report.paidContent.length === 0) return null;

  if (state === "unlocked") {
    return (
      <div className="mt-8 space-y-6">
        <div className="flex items-center gap-2 rounded-lg border border-accent-green/20 bg-accent-green/5 px-4 py-2">
          <span className="text-accent-green">✓</span>
          <span className="text-xs text-accent-green">
            全文已解锁 · 感谢打赏支持
          </span>
        </div>
        {report.paidContent.map((section, i) => (
          <Section key={i} section={section} />
        ))}
      </div>
    );
  }

  if (state === "tipping") {
    return (
      <div className="relative mt-8">
        <div className="pointer-events-none absolute -top-24 left-0 right-0 h-24 bg-gradient-to-t from-bg to-transparent" />
        <div className="rounded-2xl border border-gold/30 bg-gradient-to-b from-gold-dim/40 to-surface p-6 md:p-8">
          <div className="mb-5 text-center">
            <div className="mb-2 text-2xl">📱</div>
            <h3 className="text-lg font-bold text-ink">扫码打赏解锁</h3>
            <p className="mt-1 text-sm text-muted">
              ¥{report.tipAmount} 解锁「{report.institution}」完整研报
            </p>
          </div>

          <div className="mx-auto max-w-xs rounded-xl border border-border bg-bg/60 p-5">
            <div className="flex items-center justify-center gap-4">
              <div className="flex h-32 w-32 items-center justify-center rounded-lg border border-border bg-surface2">
                <div className="text-center">
                  <div className="text-3xl text-black/80">📱</div>
                  <p className="mt-1 text-[9px] font-medium text-black/40">
                    微信 / 支付宝
                  </p>
                </div>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-gold">¥{report.tipAmount}</div>
                <p className="mt-1 text-[11px] text-muted">
                  {report.institution} 研报
                </p>
                <p className="mt-3 text-[10px] text-muted/60">
                  收款码即将接入
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setState("unlocked")}
            className="mt-5 w-full rounded-xl bg-accent-blue py-3 text-sm font-semibold text-[#fff] transition-opacity hover:opacity-90"
          >
            我已完成打赏，解锁全文
          </button>

          <button
            onClick={() => setState("locked")}
            className="mt-3 block w-full text-center text-xs text-muted hover:text-ink"
          >
            返回
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mt-8">
      <div className="pointer-events-none absolute -top-24 left-0 right-0 h-24 bg-gradient-to-t from-bg to-transparent" />

      <div className="rounded-2xl border border-accent-blue/30 bg-gradient-to-b from-accent-blue/10 to-surface p-6 md:p-8">
        <div className="mb-5 text-center">
          <div className="mb-2 text-2xl">📊</div>
          <h3 className="text-lg font-bold text-ink">打赏解锁完整研报</h3>
          <p className="mt-1 text-sm text-muted">
            剩余 <span className="font-semibold text-ink">{paidParagraphs}</span> 段
            中英对照深度分析等待解锁
          </p>
        </div>

        <div className="mb-5 rounded-xl border border-border bg-bg/60 p-4">
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
            解锁内容包含
          </div>
          <div className="space-y-2">
            {report.paidContent.map((section, i) => (
              <div key={i} className="flex items-center gap-2 text-xs">
                <span className="text-accent-blue">▸</span>
                <span className="text-ink/80">{section.heading ?? `章节 ${i + 1}`}</span>
                <span className="text-muted">
                  — {section.paragraphs.length} 段中英对照
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4 text-center">
          <div className="text-3xl font-bold text-ink">
            ¥{report.tipAmount}
          </div>
          <div className="mt-0.5 text-xs text-muted">
            约 {(report.wordCount / 1000).toFixed(1)}k 字完整中英对照 · 同等 GPT 翻译约需 ¥{Math.round(report.wordCount * 0.001)} token
          </div>
        </div>

        <button
          onClick={() => setState("tipping")}
          className="w-full rounded-xl bg-accent-blue py-3 text-sm font-semibold text-[#fff] transition-opacity hover:opacity-90"
        >
          打赏 ¥{report.tipAmount} 解锁全文
        </button>

        <div className="mt-5 space-y-2">
          {[
            "顶级机构原版报告逐段翻译，非 AI 机翻",
            "投资术语精准对照，保留专业含义",
            "数据模型、风险分析完整呈现",
            `同等内容用 GPT 翻译约需 ¥${Math.round(report.wordCount * 0.001)} token`,
          ].map((v) => (
            <div key={v} className="flex items-start gap-2 text-xs text-muted">
              <span className="mt-0.5 shrink-0 text-accent-blue">✓</span>
              <span>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
