import type { CompanyData } from "@/lib/types";
import Card from "@/components/Card";
import KPIGrid from "@/components/KPIGrid";
import SummaryBlock from "@/components/SummaryBlock";
import QuoteCard from "@/components/QuoteCard";
import RevenueTable from "@/components/RevenueTable";
import Link from "next/link";

export default function OverviewPanel({ company }: { company: CompanyData }) {
  return (
    <div className="space-y-4">
      {/* 30-second KPIs */}
      <Card title="⚡ 30 秒速览 · Q4/FY2025">
        <KPIGrid items={company.kpis.slice(0, 4)} />
        <div className="mt-2.5">
          <KPIGrid items={company.kpis.slice(4, 8)} />
        </div>
      </Card>

      {/* Chapter summaries */}
      <Card title="📊 章节摘要 · 10 分钟读完核心">
        <div className="space-y-2.5">
          {company.summaries.map((block) => (
            <SummaryBlock key={block.title} block={block} />
          ))}
        </div>
      </Card>

      {/* Management quotes */}
      <Card title="🎙️ 管理层原话 · 英文+中文">
        <div className="space-y-3">
          {company.quotes.map((q, i) => (
            <QuoteCard key={i} quote={q} />
          ))}
        </div>
      </Card>

      {/* Revenue table */}
      <RevenueTable rows={company.revenueTable} />

      {/* Promo CTA */}
      <div className="rounded-[10px] border border-gold/20 bg-gradient-to-br from-gold-dim/60 to-gold-dim/20 p-5">
        <h3 className="text-[15px] font-semibold text-white">
          📬 想更深入地跟踪 {company.ticker}？
        </h3>
        <p className="mt-2 text-[13px] leading-relaxed text-muted">
          每周日发布「投资周报」——用一手数据解读本周美股动态，包含持仓思考与下周关注。
          <br />
          加入「FinRead 会员群」获取实时讨论、深度行业报告、建仓逻辑分享。
        </p>
        <div className="mt-3.5 flex flex-wrap gap-2.5">
          <Link
            href="/register"
            className="rounded-lg border border-gold/30 bg-gold-dim px-4 py-2 text-xs font-semibold text-gold transition-colors hover:bg-gold/20"
          >
            订阅周报（免费）
          </Link>
          <Link
            href="/pro"
            className="rounded-lg border border-gold/30 bg-gold-dim px-4 py-2 text-xs font-semibold text-gold transition-colors hover:bg-gold/20"
          >
            加入会员群 ¥99/月
          </Link>
          <Link
            href="/weekly"
            className="rounded-lg border border-border bg-surface2 px-4 py-2 text-xs text-text transition-colors hover:bg-white/[0.06]"
          >
            查看周报 →
          </Link>
        </div>
      </div>
    </div>
  );
}
