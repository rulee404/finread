import type { CompanyData } from "@/lib/types";
import Card from "@/components/Card";
import QuoteCard from "@/components/QuoteCard";
import ProGate from "@/components/ProGate";

export default function TranscriptPanel({ company }: { company: CompanyData }) {
  return (
    <Card title={`Q4 2025 Earnings Call · 发言人分段 · 中英对照`}>
      <p className="mb-4 text-[13px] text-muted">
        完整实录按发言人分段。Pro 会员可查看全文中英对照。免费用户可阅读管理层开场白摘要。
      </p>

      <div className="space-y-3">
        {company.transcriptPreview.map((q, i) => (
          <div key={i}>
            <div className="mb-2 text-xs font-semibold text-gold">
              {q.role.toUpperCase()}
            </div>
            <QuoteCard quote={q} />
          </div>
        ))}
      </div>

      <div className="mt-5">
        <ProGate
          message={`以下 ${company.ticker} 分析师问答需 Pro 会员查看完整中英对照`}
        />
      </div>
    </Card>
  );
}
