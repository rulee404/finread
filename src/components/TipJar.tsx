"use client";

import { useState } from "react";

const presets = [
  { amount: 5, emoji: "☕", label: "一杯咖啡" },
  { amount: 10, emoji: "🧋", label: "一杯奶茶" },
  { amount: 20, emoji: "🍜", label: "一碗牛肉面" },
  { amount: 50, emoji: "🍣", label: "一顿好的" },
];

type TipState = "idle" | "picking" | "thanked";

export default function TipJar({ articleTitle }: { articleTitle?: string }) {
  const [state, setState] = useState<TipState>("idle");
  const [picked, setPicked] = useState<(typeof presets)[0] | null>(null);

  function handlePick(preset: (typeof presets)[0]) {
    setPicked(preset);
    setState("thanked");
  }

  if (state === "thanked" && picked) {
    return (
      <div className="mt-10 overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-b from-gold-dim/40 to-surface">
        <div className="px-6 py-8 text-center">
          <div className="mb-3 text-4xl" style={{ animation: "tip-pop .5s cubic-bezier(.34,1.56,.64,1)" }}>
            {picked.emoji}
          </div>
          <h3 className="text-lg font-bold text-ink">感谢打赏！</h3>
          <p className="mt-1 text-sm text-muted">
            你的 ¥{picked.amount} 是对作者最好的鼓励
          </p>
          <div className="mx-auto mt-5 max-w-xs rounded-xl border border-border bg-bg/60 p-4">
            <p className="mb-2 text-[11px] font-semibold text-muted">扫码完成支付</p>
            <div className="flex items-center justify-center gap-3">
              <div className="flex h-28 w-28 items-center justify-center rounded-lg border border-border bg-surface2">
                <div className="text-center">
                  <div className="text-2xl text-black/80">📱</div>
                  <p className="mt-1 text-[9px] font-medium text-black/40">
                    微信 / 支付宝
                  </p>
                </div>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-gold">¥{picked.amount}</div>
                <p className="mt-1 text-[11px] text-muted">{picked.label}</p>
                <p className="mt-3 text-[10px] text-muted/60">
                  二维码功能<br/>即将接入
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={() => { setState("idle"); setPicked(null); }}
            className="mt-4 text-xs text-muted hover:text-ink"
          >
            返回
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10 overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-b from-gold-dim/40 to-surface">
      {state === "idle" ? (
        <div className="px-6 py-8 text-center">
          <div className="mb-2 text-2xl">❤️</div>
          <h3 className="text-base font-bold text-ink">觉得有用？打赏作者</h3>
          <p className="mt-1 text-xs text-muted">
            {articleTitle
              ? `如果这篇「${articleTitle}」对你有帮助`
              : "如果这篇文章对你有帮助"}
          </p>
          <button
            onClick={() => setState("picking")}
            className="mt-4 inline-flex items-center gap-2 rounded-xl border border-gold/30 bg-gold-dim px-6 py-2.5 text-sm font-semibold text-gold transition-all hover:bg-gold/20 hover:shadow-[0_0_20px_rgba(201,162,39,.15)]"
          >
            <span className="text-base">☕</span>
            打赏一下
          </button>
        </div>
      ) : (
        <div className="p-6">
          <div className="mb-4 text-center">
            <h3 className="text-base font-bold text-ink">选择打赏金额</h3>
            <p className="mt-0.5 text-xs text-muted">
              每一份支持都是继续创作的动力
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {presets.map((p) => (
              <button
                key={p.amount}
                onClick={() => handlePick(p)}
                className="group flex flex-col items-center gap-1.5 rounded-xl border border-border bg-surface p-4 transition-all hover:border-gold/30 hover:bg-gold-dim/30 hover:shadow-[0_0_16px_rgba(201,162,39,.1)]"
              >
                <span className="text-2xl transition-transform group-hover:scale-110">
                  {p.emoji}
                </span>
                <span className="text-lg font-bold text-ink">
                  ¥{p.amount}
                </span>
                <span className="text-[10px] text-muted">{p.label}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setState("idle")}
            className="mt-4 block w-full text-center text-xs text-muted hover:text-ink"
          >
            取消
          </button>
        </div>
      )}
    </div>
  );
}
