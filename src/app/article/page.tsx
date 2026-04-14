import Link from "next/link";
import { getAllArticles } from "@/data/articles";

export const metadata = {
  title: "全文库 · 中英对照原典 | FinRead",
  description:
    "财报电话会、机构研报、SEC 文件的中英文逐段对照全文。Token & Coffee 打赏解锁。",
};

const sourceIcons: Record<string, string> = {
  earnings: "📊",
  research: "📄",
  filing: "📋",
  interview: "🎙️",
};

const themeStyles: Record<string, { bg: string; text: string; label: string }> = {
  ai: { bg: "bg-theme-ai-dim", text: "text-theme-ai", label: "AI" },
  defi: { bg: "bg-theme-defi-dim", text: "text-theme-defi", label: "DeFi" },
  space: { bg: "bg-theme-space-dim", text: "text-theme-space", label: "Space" },
  macro: { bg: "bg-gold-dim", text: "text-gold", label: "宏观" },
};

export default function ArticleListPage() {
  const articles = getAllArticles();

  return (
    <div className="mx-auto max-w-[800px] px-5 py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-2xl font-bold text-ink">
          全文库 · Token &amp; Coffee ☕
        </h1>
        <p className="text-sm text-muted">
          财报电话会、机构研报、SEC 文件的完整中英对照全文。
          <br />
          每篇提供免费预览，打赏解锁完整内容。
        </p>
        <div className="mt-4 flex items-center gap-3 rounded-lg border border-gold/20 bg-gold-dim/30 px-4 py-2.5">
          <span className="text-sm">☕</span>
          <p className="text-xs text-muted">
            「Token &amp; Coffee」= 用一杯咖啡的钱，获得专业翻译的一手投研原典。
            <strong className="text-text">
              省时间、省 Token、更准确。
            </strong>
          </p>
        </div>
      </div>

      {/* Article cards */}
      <div className="space-y-4">
        {articles.map((article) => {
          const theme = themeStyles[article.theme] ?? themeStyles.macro;
          const icon = sourceIcons[article.sourceType] ?? "📄";
          const freeParagraphs = article.freePreview.reduce(
            (n, s) => n + s.paragraphs.length,
            0,
          );
          const totalParagraphs =
            freeParagraphs +
            article.paidContent.reduce((n, s) => n + s.paragraphs.length, 0);

          return (
            <Link
              key={article.id}
              href={`/article/${article.id}`}
              className="group block rounded-xl border border-border bg-surface p-5 transition-all hover:border-gold/20 hover:bg-surface2"
            >
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span
                  className={`rounded-md px-2 py-0.5 text-[10px] font-semibold ${theme.bg} ${theme.text}`}
                >
                  {theme.label}
                </span>
                <span className="text-[10px] text-muted">
                  {icon} {article.sourceLabel}
                </span>
                <span className="text-[11px] text-muted">{article.date}</span>
              </div>

              <h2 className="mb-1 text-[15px] font-semibold text-ink group-hover:text-gold">
                {article.title}
              </h2>
              <p className="mb-3 line-clamp-2 text-xs leading-relaxed text-muted">
                {article.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                {/* Tickers */}
                <div className="flex gap-1">
                  {article.tickers.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-border bg-surface2 px-1.5 py-0.5 text-[10px] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <span className="text-[10px] text-muted">
                  {(article.wordCount / 1000).toFixed(1)}k 字
                </span>
                <span className="text-[10px] text-muted">
                  {totalParagraphs} 段对照
                </span>
                <span className="text-[10px] text-accent-green">
                  免费 {freeParagraphs} 段
                </span>

                {/* Price badge */}
                <span className="ml-auto rounded-lg border border-gold/30 bg-gold-dim px-2.5 py-1 text-xs font-bold text-gold">
                  ☕ ¥{article.price}
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Pro upsell */}
      <div className="mt-10 rounded-xl border border-gold/20 bg-gradient-to-br from-gold-dim/60 to-gold-dim/20 p-6 text-center">
        <h3 className="text-[15px] font-semibold text-ink">
          经常阅读？Pro 更划算
        </h3>
        <p className="mt-2 text-[13px] text-muted">
          Pro 会员 ¥49/月，无限解锁全部全文 + 更多独家内容
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Link
            href="/pro"
            className="rounded-lg bg-gold px-5 py-2.5 text-xs font-semibold text-bg transition-opacity hover:opacity-90"
          >
            了解 Pro 会员
          </Link>
          <Link
            href="/register"
            className="rounded-lg border border-border bg-surface2 px-5 py-2.5 text-xs text-text transition-colors hover:bg-wash-hover"
          >
            先免费注册
          </Link>
        </div>
      </div>
    </div>
  );
}
