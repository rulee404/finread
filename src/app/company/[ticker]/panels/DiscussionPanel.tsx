import type { CompanyData } from "@/lib/types";
import { getDiscussionsByTicker } from "@/data/docs";

const sentimentMap: Record<
  string,
  { icon: string; label: string; color: string }
> = {
  bullish: { icon: "↑", label: "看多", color: "text-accent-green" },
  bearish: { icon: "↓", label: "看空", color: "text-accent-red" },
  neutral: { icon: "→", label: "中性", color: "text-muted" },
};

export default function DiscussionPanel({
  company,
}: {
  company: CompanyData;
}) {
  const discussions = getDiscussionsByTicker(company.ticker);

  if (discussions.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-border bg-surface p-8 text-center">
        <p className="text-sm text-muted">
          暂无关于 {company.ticker} 的讨论，作者将在后续更新中添加观点。
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 rounded-lg border border-gold/20 bg-gold-dim/30 px-4 py-2.5">
        <span className="text-sm text-gold">●</span>
        <p className="text-xs text-muted">
          以下内容为作者个人投资日志，仅记录当时的思考过程，
          <strong className="text-text">不构成投资建议</strong>
          。市场观点随时可能变化。
        </p>
      </div>

      {discussions.map((disc) => {
        const sentiment = disc.sentiment
          ? sentimentMap[disc.sentiment]
          : undefined;

        return (
          <article
            key={disc.id}
            className="rounded-xl border border-border bg-surface p-5"
          >
            <div className="mb-2 flex flex-wrap items-center gap-2">
              {sentiment && (
                <span
                  className={`rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold ${sentiment.color}`}
                >
                  {sentiment.icon} {sentiment.label}
                </span>
              )}
              <span className="text-[11px] text-muted">{disc.date}</span>
            </div>

            <h3 className="mb-3 text-[15px] font-semibold text-white">
              {disc.title}
            </h3>

            <div className="whitespace-pre-line text-[13px] leading-relaxed text-text">
              {disc.content.split("\n").map((line, i) => {
                if (line.startsWith("**") && line.endsWith("**")) {
                  return (
                    <p key={i} className="mt-3 mb-1 font-semibold text-white">
                      {line.replace(/\*\*/g, "")}
                    </p>
                  );
                }
                if (line.startsWith("**")) {
                  const parts = line.split("**");
                  return (
                    <p key={i} className="mt-2">
                      {parts.map((part, j) =>
                        j % 2 === 1 ? (
                          <strong key={j} className="text-white">
                            {part}
                          </strong>
                        ) : (
                          <span key={j}>{part}</span>
                        ),
                      )}
                    </p>
                  );
                }
                if (line.trim() === "") return <br key={i} />;
                return <p key={i}>{line}</p>;
              })}
            </div>
          </article>
        );
      })}
    </div>
  );
}
