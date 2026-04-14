import Link from "next/link";
import { getAllThemes } from "@/lib/themes";
import { getCompaniesByTheme } from "@/lib/companies";
import { getLatestOpinions } from "@/data/opinions";
import ThemeIcon from "@/components/ThemeIcon";
import OpinionCard from "@/components/OpinionCard";
import HeroCTA from "@/components/HeroCTA";
import BottomCTA from "@/components/BottomCTA";

const cardStyles: Record<string, { border: string; hoverBorder: string; text: string; glow: string; tagBg: string }> = {
  ai: {
    border: "border-theme-ai/10",
    hoverBorder: "hover:border-theme-ai/30",
    text: "text-theme-ai",
    glow: "theme-card-ai",
    tagBg: "bg-theme-ai-dim text-theme-ai",
  },
  defi: {
    border: "border-theme-defi/10",
    hoverBorder: "hover:border-theme-defi/30",
    text: "text-theme-defi",
    glow: "theme-card-defi",
    tagBg: "bg-theme-defi-dim text-theme-defi",
  },
  space: {
    border: "border-theme-space/10",
    hoverBorder: "hover:border-theme-space/30",
    text: "text-theme-space",
    glow: "theme-card-space",
    tagBg: "bg-theme-space-dim text-theme-space",
  },
};

export default function HomePage() {
  const themes = getAllThemes();
  const latestOpinions = getLatestOpinions(4);

  return (
    <div className="mx-auto max-w-[1080px] px-5 py-10">
      {/* Hero */}
      <section className="mb-16 pt-6 text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="text-theme-ai text-2xl font-black tracking-tight">AI</span>
          <span className="text-muted/40">·</span>
          <span className="text-theme-defi text-2xl font-black tracking-tight">DeFi</span>
          <span className="text-muted/40">·</span>
          <span className="text-theme-space text-2xl font-black tracking-tight">Space</span>
        </div>
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
          三大赛道，一手投研
        </h1>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted">
          聚焦三条投资主线 — 人工智能、去中心化金融、太空经济。
          <br />
          财报 Presentation / Shareholder Letter / 会议 Transcript 实录中英文全文对照深度解读
          <br />
          10-K · 10-Q 报告解读 · 管理层采访全文翻译 · 机构研报解读
        </p>
        <HeroCTA />
      </section>

      {/* Three Theme Cards */}
      <section className="mb-16">
        <div className="grid gap-5 md:grid-cols-3">
          {themes.map((theme) => {
            const companies = getCompaniesByTheme(theme.id);
            const style = cardStyles[theme.id];

            return (
              <Link
                key={theme.id}
                href={`/theme/${theme.id}`}
                className={`group relative rounded-2xl border ${style.border} ${style.hoverBorder} bg-surface p-6 transition-all duration-300 ${style.glow}`}
              >
                {/* Animated icon */}
                <div className="mb-4 flex justify-center">
                  <div className="animate-float">
                    <ThemeIcon theme={theme.id} size={80} />
                  </div>
                </div>

                {/* Theme name */}
                <div className="mb-3 text-center">
                  <h2 className={`text-xl font-bold ${style.text}`}>
                    {theme.name}
                  </h2>
                  <p className="mt-0.5 text-xs text-muted">{theme.subtitle}</p>
                </div>

                {/* Hero line */}
                <p className="mb-4 text-center text-[13px] font-medium text-white/80">
                  {theme.heroLine}
                </p>

                {/* Metrics */}
                <div className="mb-4 grid grid-cols-2 gap-2">
                  {theme.keyMetrics.slice(0, 4).map((m) => (
                    <div
                      key={m.label}
                      className="rounded-lg bg-bg/60 px-2.5 py-2 text-center"
                    >
                      <div className="text-[10px] text-muted">{m.label}</div>
                      <div className="text-xs font-bold text-white">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Companies preview */}
                {companies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {companies.map((co) => (
                      <span
                        key={co.ticker}
                        className={`rounded-md px-2 py-0.5 text-[10px] font-semibold ${style.tagBg}`}
                      >
                        {co.ticker}
                      </span>
                    ))}
                    <span className="rounded-md border border-border bg-surface2 px-2 py-0.5 text-[10px] text-muted">
                      更多 →
                    </span>
                  </div>
                )}

                {/* Hover arrow */}
                <div className="mt-4 text-center text-xs text-muted/50 transition-colors group-hover:text-white/60">
                  进入赛道 →
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Author Opinions */}
      <section className="mb-16">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white">
              作者投资观点
            </h2>
            <p className="mt-0.5 text-xs text-muted">
              实时更新 · 持仓逻辑公开 · 覆盖三大赛道
            </p>
          </div>
          <Link
            href="/opinions"
            className="text-xs text-muted hover:text-gold"
          >
            查看全部 →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {latestOpinions.map((op) => (
            <OpinionCard key={op.id} opinion={op} compact />
          ))}
        </div>
      </section>

      {/* Investment Thesis Summary */}
      <section className="mb-16">
        <h2 className="mb-5 text-lg font-semibold text-white">
          为什么是这三条赛道？
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "技术拐点已至",
              desc: "AI 的 Scaling Law、DeFi 的稳定币立法、Space 的发射成本骤降 — 三条赛道同时迎来技术/政策拐点，窗口期难得。",
              color: "border-l-theme-ai",
            },
            {
              title: "市场空间巨大",
              desc: "AI $15T、链上金融 $2T TVL、太空经济 $1.8T — 这不是增量市场，而是对现有万亿级产业的重写。",
              color: "border-l-theme-defi",
            },
            {
              title: "交叉产生 Alpha",
              desc: "AI Agent + DeFi、卫星数据 + AI 分析、太空资产代币化 — 三赛道交叉地带往往产生超额收益。",
              color: "border-l-theme-space",
            },
          ].map((f) => (
            <div
              key={f.title}
              className={`rounded-xl border border-border ${f.color} border-l-[3px] bg-surface p-5`}
            >
              <h3 className="mb-2 text-sm font-semibold text-white">
                {f.title}
              </h3>
              <p className="text-xs leading-relaxed text-muted">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mb-16 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "SEC 原典对齐",
            desc: "10-K、8-K、Earnings Call 与站内摘要逐段对应，关键数字可回溯至披露位置。",
          },
          {
            title: "中英对照原话",
            desc: "管理层 CEO/CFO 原话逐句翻译，保留投资术语的精确含义。",
          },
          {
            title: "作者观点公开",
            desc: "持仓逻辑、建仓/加仓决策实时公开。不做事后诸葛亮，只做实时决策记录。",
          },
        ].map((f) => (
          <div
            key={f.title}
            className="rounded-xl border border-border bg-surface p-5"
          >
            <h3 className="mb-2 text-sm font-semibold text-white">
              {f.title}
            </h3>
            <p className="text-xs leading-relaxed text-muted">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <BottomCTA />
    </div>
  );
}
