import Link from "next/link";

export const metadata = {
  title: "Pro 会员 | FinRead",
};

const freeFeatures = [
  "30秒 KPI 速览卡片",
  "章节摘要（10分钟版）",
  "管理层原话精选（每公司 2-3 条）",
  "原始 SEC 文件下载链接",
  "每周投资周报（延迟 3 天）",
];

const proFeatures = [
  "完整管理层原话中英对照（全部发言人）",
  "Earnings Call 全文逐句翻译",
  "分析师 Q&A 完整翻译",
  "实时摘要（财报发布后 2 小时内）",
  "无限公司追踪",
  "微信/邮件即时推送",
  "历史财报归档（回溯 8 个季度）",
  "行业对比数据表",
  "投资周报即时推送",
];

export default function ProPage() {
  return (
    <div className="mx-auto max-w-[800px] px-5 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white">FinRead Pro</h1>
        <p className="mt-2 text-sm text-muted">
          从「看个大概」到「看懂细节」，用一手数据做投资决策
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {/* Free tier */}
        <div className="rounded-xl border border-border bg-surface p-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted">
            免费版
          </div>
          <div className="mt-2 text-3xl font-bold text-white">¥0</div>
          <div className="mt-1 text-xs text-muted">永久免费</div>

          <ul className="mt-6 space-y-2.5">
            {freeFeatures.map((f) => (
              <li key={f} className="flex items-start gap-2 text-xs text-muted">
                <span className="mt-0.5 text-accent-green">✓</span>
                {f}
              </li>
            ))}
          </ul>

          <Link
            href="/register"
            className="mt-6 block rounded-lg border border-border bg-surface2 py-2.5 text-center text-sm font-semibold text-text transition-colors hover:bg-white/[0.06]"
          >
            免费注册 →
          </Link>
        </div>

        {/* Pro tier */}
        <div className="rounded-xl border border-gold/30 bg-gradient-to-b from-gold-dim/40 to-surface p-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-gold">
            Pro 会员
          </div>
          <div className="mt-2 text-3xl font-bold text-white">
            ¥49
            <span className="text-base font-normal text-muted">/月</span>
          </div>
          <div className="mt-1 text-xs text-muted">
            或 ¥399/年（省 ¥189）
          </div>

          <ul className="mt-6 space-y-2.5">
            {proFeatures.map((f) => (
              <li key={f} className="flex items-start gap-2 text-xs text-white/80">
                <span className="mt-0.5 text-gold">★</span>
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-6 w-full rounded-lg border border-gold/20 bg-gold-dim/30 py-3 text-center">
            <p className="text-sm font-semibold text-gold">即将开放</p>
            <p className="mt-1 text-[11px] text-muted">
              Pro 会员功能正在筹备中，敬请期待
            </p>
          </div>
          <p className="mt-2 text-center text-[10px] text-muted">
            开放后支持微信支付 · 支付宝 · 银行卡 · 随时取消
          </p>
        </div>
      </div>

      {/* Token & Coffee alternative */}
      <div className="mt-8 rounded-xl border border-border bg-surface p-6 text-center">
        <h3 className="text-[15px] font-semibold text-white">
          不想订阅？试试 Token &amp; Coffee ☕
        </h3>
        <p className="mt-2 text-sm text-muted">
          单篇打赏 ¥5.9-9.9，只为你感兴趣的内容付费
        </p>
        <Link
          href="/theme/defi"
          className="mt-3 inline-block rounded-lg border border-border bg-surface2 px-5 py-2 text-sm text-text transition-colors hover:bg-white/[0.06]"
        >
          进入公司页面查看 →
        </Link>
      </div>

      {/* Membership group upsell */}
      <div className="mt-5 rounded-xl border border-gold/20 bg-gold-dim/20 p-6 text-center">
        <h3 className="text-lg font-semibold text-white">会员群 · ¥99/月</h3>
        <p className="mt-2 text-sm text-muted">
          包含 Pro 全部权益 + 微信社群实时讨论 + 建仓逻辑分享 + 深度行业报告
        </p>
        <p className="mt-1 text-xs text-muted/60">
          限额 200 人 · 满员后需等待名额
        </p>
        <div className="mt-3 inline-block rounded-md border border-gold/20 bg-gold-dim/20 px-4 py-1.5 text-xs text-gold">
          即将开放
        </div>
      </div>
    </div>
  );
}
