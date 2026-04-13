import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getTheme, getAllThemes } from "@/lib/themes";
import { getCompaniesByTheme } from "@/lib/companies";
import { getOpinionsByTheme } from "@/data/opinions";
import ThemeIcon from "@/components/ThemeIcon";
import OpinionCard from "@/components/OpinionCard";
import Card from "@/components/Card";
import KPIGrid from "@/components/KPIGrid";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return getAllThemes().map((t) => ({ id: t.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const theme = getTheme(id);
  if (!theme) return { title: "Not Found" };
  return {
    title: `${theme.name} · ${theme.subtitle} | FinRead`,
    description: theme.thesis,
  };
}

const themeStyles: Record<string, { border: string; bg: string; text: string; glow: string }> = {
  ai: {
    border: "border-theme-ai/20",
    bg: "bg-theme-ai-dim",
    text: "text-theme-ai",
    glow: "theme-card-ai",
  },
  defi: {
    border: "border-theme-defi/20",
    bg: "bg-theme-defi-dim",
    text: "text-theme-defi",
    glow: "theme-card-defi",
  },
  space: {
    border: "border-theme-space/20",
    bg: "bg-theme-space-dim",
    text: "text-theme-space",
    glow: "theme-card-space",
  },
};

export default async function ThemePage({ params }: Props) {
  const { id } = await params;
  const theme = getTheme(id);
  if (!theme) notFound();

  const companies = getCompaniesByTheme(theme.id);
  const opinions = getOpinionsByTheme(theme.id);
  const style = themeStyles[theme.id] ?? themeStyles.ai;

  return (
    <div className="mx-auto max-w-[1080px] px-5 py-10">
      {/* Hero */}
      <section className="mb-12 flex flex-col items-center text-center">
        <div className="animate-float mb-4">
          <ThemeIcon theme={theme.id} size={100} />
        </div>
        <h1 className="mb-1 text-3xl font-bold text-white md:text-4xl">
          <span className={style.text}>{theme.name}</span>{" "}
          <span className="text-muted">·</span> {theme.subtitle}
        </h1>
        <p className={`mt-1 text-sm font-medium ${style.text}`}>
          {theme.heroLine}
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          {theme.thesis}
        </p>
      </section>

      {/* Key Metrics */}
      <section className="mb-10">
        <Card title={`${theme.name} 关键指标`}>
          <KPIGrid
            items={theme.keyMetrics.map((m) => ({
              label: m.label,
              value: m.value,
            }))}
          />
        </Card>
      </section>

      {/* Investment Angles */}
      <section className="mb-10">
        <h2 className="mb-4 text-lg font-semibold text-white">投资主题</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {theme.investmentAngles.map((angle) => (
            <div
              key={angle.title}
              className={`rounded-xl border ${style.border} ${style.bg} p-5`}
            >
              <h3 className={`mb-2 text-sm font-semibold ${style.text}`}>
                {angle.title}
              </h3>
              <p className="text-xs leading-relaxed text-muted">
                {angle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Companies */}
      <section className="mb-10">
        <h2 className="mb-4 text-lg font-semibold text-white">
          跟踪公司
          <span className="ml-2 text-sm font-normal text-muted">
            {companies.length} 家
          </span>
        </h2>

        {companies.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border bg-surface p-8 text-center">
            <p className="text-sm text-muted">
              该赛道的公司覆盖正在扩展中，敬请期待。
            </p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {companies.map((co) => (
              <Link
                key={co.ticker}
                href={`/company/${co.ticker.toLowerCase()}`}
                className={`group rounded-xl border border-border bg-surface p-5 transition-all hover:${style.border} hover:bg-surface2`}
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

                <div className="grid grid-cols-2 gap-2">
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
        )}
      </section>

      {/* Author Opinions */}
      {opinions.length > 0 && (
        <section className="mb-10">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">
              作者观点
              <span className="ml-2 text-sm font-normal text-muted">
                关于 {theme.name}
              </span>
            </h2>
            <Link
              href="/opinions"
              className="text-xs text-muted hover:text-gold"
            >
              查看全部 →
            </Link>
          </div>
          <div className="space-y-3">
            {opinions.slice(0, 3).map((op) => (
              <OpinionCard key={op.id} opinion={op} />
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <div className="rounded-xl border border-gold/20 bg-gradient-to-br from-gold-dim/60 to-gold-dim/20 p-6 text-center">
        <h3 className="text-[15px] font-semibold text-white">
          深入跟踪 {theme.name} 赛道？
        </h3>
        <p className="mt-2 text-[13px] text-muted">
          每周日发布投资周报，含持仓思考、建仓逻辑与下周关注点。
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Link
            href="/register"
            className="rounded-lg bg-gold px-5 py-2.5 text-xs font-semibold text-bg transition-opacity hover:opacity-90"
          >
            免费订阅周报
          </Link>
          <Link
            href="/weekly"
            className="rounded-lg border border-border bg-surface2 px-5 py-2.5 text-xs text-text transition-colors hover:bg-white/[0.06]"
          >
            查看往期周报 →
          </Link>
        </div>
      </div>
    </div>
  );
}
