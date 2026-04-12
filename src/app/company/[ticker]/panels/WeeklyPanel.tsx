import type { CompanyData } from "@/lib/types";
import Card from "@/components/Card";
import Link from "next/link";

export default function WeeklyPanel({ company }: { company: CompanyData }) {
  return (
    <div className="space-y-4">
      <Card title={`📅 ${company.ticker} 相关周报引用`}>
        <p className="mb-4 text-[13px] text-muted">
          以下周报中提及了 {company.name}，点击可查看完整周报。
        </p>

        <div className="space-y-2.5">
          {company.weeklyRefs.map((ref) => (
            <Link
              key={ref.slug}
              href={`/weekly/${ref.slug}`}
              className="flex items-center gap-3 rounded-lg border border-border p-3.5 transition-colors hover:border-gold/20 hover:bg-surface2"
            >
              <div className="min-w-0 flex-1">
                <div className="text-[13px] font-semibold text-white">
                  {ref.title} · {ref.date}
                </div>
                <div className="mt-0.5 text-[11px] text-muted">
                  {ref.description}
                </div>
              </div>
              <span className="shrink-0 rounded-md border border-gold/30 bg-gold-dim px-2.5 py-1 text-[11px] font-semibold text-gold">
                阅读
              </span>
            </Link>
          ))}
        </div>
      </Card>

      {/* YouTube promo */}
      <div className="rounded-[10px] border border-gold/20 bg-gradient-to-br from-gold-dim/60 to-gold-dim/20 p-5">
        <h3 className="text-[15px] font-semibold text-white">
          🎬 YouTube 视频
        </h3>
        <p className="mt-2 text-[13px] leading-relaxed text-muted">
          重要财报发布后 48 小时内上线解读视频，与站内 SEC 原典摘要同源、可追溯。
        </p>
        <div className="mt-3.5 flex flex-wrap gap-2.5">
          <a
            href="#"
            className="rounded-lg border border-gold/30 bg-gold-dim px-4 py-2 text-xs font-semibold text-gold transition-colors hover:bg-gold/20"
          >
            订阅 YouTube 频道
          </a>
          <a
            href="#"
            className="rounded-lg border border-border bg-surface2 px-4 py-2 text-xs text-text transition-colors hover:bg-white/[0.06]"
          >
            B站同步更新
          </a>
        </div>
      </div>
    </div>
  );
}
