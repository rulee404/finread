import Link from "next/link";
import { getAllCompanies } from "@/lib/companies";

export default function HomePage() {
  const companies = getAllCompanies();

  return (
    <div className="mx-auto max-w-[1080px] px-5 py-10">
      {/* Hero */}
      <section className="mb-12 text-center">
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
          原典直译，投研可读
        </h1>
        <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted">
          SEC 原文与 Earnings Call 逐段对齐，管理层原话中英对照，关键数字可回溯至披露文件。
          <br />
          结构化摘要 · 指标拆解 · 同一套口径贯穿全文。
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            href="/register"
            className="rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
          >
            免费注册
          </Link>
          <Link
            href="/pro"
            className="rounded-lg border border-gold/30 bg-gold-dim px-5 py-2.5 text-sm font-semibold text-gold transition-colors hover:bg-gold/20"
          >
            了解 Pro
          </Link>
        </div>
      </section>

      {/* Company Cards */}
      <section>
        <h2 className="mb-5 text-lg font-semibold text-white">
          已覆盖公司
          <span className="ml-2 text-sm font-normal text-muted">
            Q4/FY2025 财报季
          </span>
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {companies.map((co) => (
            <Link
              key={co.ticker}
              href={`/company/${co.ticker.toLowerCase()}`}
              className="group rounded-xl border border-border bg-surface p-5 transition-colors hover:border-gold/20 hover:bg-surface2"
            >
              <div className="mb-3 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-extrabold text-white"
                  style={{ background: co.iconGradient }}
                >
                  {co.iconLetter}
                </div>
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold text-white">
                    {co.name}
                  </div>
                  <div className="text-xs text-muted">
                    {co.ticker} · {co.exchange}
                  </div>
                </div>
              </div>

              <p className="mb-3 line-clamp-2 text-xs leading-relaxed text-muted">
                {co.tagline}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {co.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag.label}
                    className="rounded bg-surface2 border border-border px-2 py-0.5 text-[10px] text-muted"
                  >
                    <span className="font-semibold text-gold">{tag.label}</span>{" "}
                    {tag.value}
                  </span>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                {co.kpis.slice(0, 4).map((kpi) => (
                  <div
                    key={kpi.label}
                    className="rounded-lg bg-bg/50 px-2.5 py-2"
                  >
                    <div className="text-[10px] uppercase tracking-wide text-muted">
                      {kpi.label}
                    </div>
                    <div className="text-sm font-bold text-white">
                      {kpi.value}
                    </div>
                    {kpi.change && (
                      <div
                        className={`text-[10px] ${
                          kpi.direction === "up"
                            ? "text-accent-green"
                            : kpi.direction === "down"
                              ? "text-accent-red"
                              : "text-muted"
                        }`}
                      >
                        {kpi.change}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "披露原文对齐",
            desc: "10-K、8-K、Earnings Call 与站内摘要逐段对应，关键数字可回溯至披露位置。",
          },
          {
            title: "中英对照原话",
            desc: "管理层 CEO/CFO 原话逐句翻译，保留投资术语的精确含义。",
          },
          {
            title: "结构化摘要",
            desc: "30秒速览 KPI → 10分钟章节摘要 → 完整原文，三层深度任你选择。",
          },
        ].map((f) => (
          <div
            key={f.title}
            className="rounded-xl border border-border bg-surface p-5"
          >
            <h3 className="mb-2 text-sm font-semibold text-white">{f.title}</h3>
            <p className="text-xs leading-relaxed text-muted">{f.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
