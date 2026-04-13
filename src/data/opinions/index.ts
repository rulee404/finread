import type { Opinion } from "@/lib/types";

const opinions: Opinion[] = [
  {
    id: "opinion-20260413",
    date: "2026-04-13",
    theme: "defi",
    title: "稳定币法案是 DeFi 赛道的「iPhone 时刻」",
    summary:
      "GENIUS Act + Clarity Act 双法案推进，意味着美国正式承认加密作为金融基础设施的地位。对三个持仓标的 (COIN/HOOD/CRCL) 都是长期利好。",
    content:
      "本周最重要的事件是 Clarity Act 在众议院通过。这意味着 SEC/CFTC 管辖边界正式厘清，DeFi 协议终于有了合规框架。\n\n对我的持仓影响：\n\n**COIN** — 最大赢家。Everything Exchange 战略可以在合规框架内推进期货、预测市场等新产品。Base L2 上的 AI Agent 交互量正快速增长。\n\n**CRCL** — 稳定币法案直接利好。USDC 40% CAGR 的多年预期如果叠加立法催化，流通量增长可能超预期。CPN 支付网络的 55 家机构入网是真正的网络效应开始。\n\n**HOOD** — 预测市场扩展到体育是增量。但更值得关注的是 Robinhood Chain 和股票代币化——这才是长期的 DeFi 入口。\n\n我的操作：继续持有，CRCL 如果回调到 $20 以下会加仓。",
    sentiment: "bullish",
    tickers: ["COIN", "CRCL", "HOOD"],
  },
  {
    id: "opinion-20260406",
    date: "2026-04-06",
    theme: "ai",
    title: "AI 推理需求爆发 — 算力投资的第二波浪潮",
    summary:
      "Reasoning models (o3, Claude Opus) 使单次推理计算量增长 100x。推理收入已占 NVDA 数据中心收入 ~50%。这改变了整个算力需求的增长曲线。",
    content:
      "上周 Jensen Huang 在 GTC 的发言值得反复回味：推理收入已经占到数据中心收入的一半。\n\n这意味着什么？训练阶段的算力需求是「建设期」投资，推理阶段的需求是「运营期」消耗。后者是可持续的、随用户量线性增长的。\n\n**为什么推理比训练更重要：**\n1. 训练是一次性投入，推理是持续消耗\n2. Reasoning models (chain-of-thought) 每次推理消耗 100x 算力\n3. AI Agent 7x24h 运行 = 持续推理需求\n4. 边缘推理 + 端侧推理 = TAM 扩大\n\n**对 NVDA 的影响：**\n- Blackwell 架构的推理性能提升 30x，正好满足这个需求\n- 供不应求状态可能持续到 2027\n- Q1 FY2027 指引 $43B 超市场预期\n\n我的观点：NVDA 当前估值已不便宜，但推理需求爆发可能使 bear case 大幅上调。持有不动，等回调 15% 以上再加仓。",
    sentiment: "bullish",
    tickers: ["NVDA"],
  },
  {
    id: "opinion-20260330",
    date: "2026-03-30",
    theme: "space",
    title: "Rocket Lab 的 Neutron 是太空赛道的关键变量",
    summary:
      "RKLB 的 Space Systems 增速惊人 (+99% Y/Y)，但 Neutron 首飞才是真正的估值催化剂。如果成功，RKLB 将成为 SpaceX 之外唯一的全栈太空公司。",
    content:
      "太空赛道目前最核心的投资问题是：SpaceX 之外，谁能成为第二个可靠的发射服务商？\n\nRocket Lab 是我目前唯一的太空持仓，原因：\n\n**1. 飞行遗产无可替代**\n56次 Electron 发射的成功记录，仅次于 SpaceX。这种信任需要真金白银和时间积累，新进入者无法复制。\n\n**2. 垂直整合是正确的战略**\nPeter Beck 的vision 是对的：太空公司最终需要全栈能力。Space Systems 收入已占 70%，这不再只是一家「发射公司」。\n\n**3. Neutron 是估值跳跃的催化剂**\n中型火箭市场 ($10B/year) 目前没有可靠竞争者。Falcon 9 太大，Electron 太小，Neutron 正好填补空白。\n\n**风险：** Neutron 首飞延迟是最大的执行风险。每延迟一个季度，市场信心就会受损。另外 SpaceX Starship 如果实现低成本发射，可能挤压中型火箭市场。\n\n我的操作：RKLB 在 $25-30 区间逐步建仓，目标持有到 Neutron 首飞验证。",
    sentiment: "bullish",
    tickers: ["RKLB"],
  },
  {
    id: "opinion-20260323",
    date: "2026-03-23",
    theme: "macro",
    title: "三大赛道的配置逻辑 — 为什么我不 All-in 单一赛道",
    summary:
      "AI、DeFi、Space 三赛道的周期节奏完全不同。AI 是已验证的增长曲线，DeFi 叠加 crypto 4 年周期，Space 是超长期成长股。分散配置是应对不确定性的最优策略。",
    content:
      "有读者问我为什么不 all-in AI — 毕竟 AI 是目前确定性最高的赛道。\n\n答案在于 **周期节奏不同步**，这正是分散的价值：\n\n**AI (40% 仓位)**\n- 处于 Scaling Law 验证期 → 资本开支持续增长 → 算力供应商确定受益\n- 风险：2026-2027 如果 Scaling 撞墙，当前估值可能修正 30%+\n- 但 Agent 化和推理需求是新的增长向量\n\n**DeFi (40% 仓位)**\n- 叠加 crypto 4 年周期 → 2025-2026 可能是周期中段\n- 监管清晰化是真正的结构性变量，不随周期消失\n- USDC 增长 + RWA 上链 = 周期底部的 floor 在抬高\n\n**Space (20% 仓位)**\n- 最长期的赛道 → 回报周期 5-10 年\n- 但发射成本下降是不可逆的趋势\n- 仓位较小是因为大部分标的仍在亏损\n\n**配置原则：**\n- 永远保留 20% 现金等待黑天鹅\n- 单一标的不超过总仓位的 15%\n- 深耕认知壁垒比广撒网重要",
    sentiment: "neutral",
    tickers: [],
  },
  {
    id: "opinion-20260316",
    date: "2026-03-16",
    theme: "defi",
    title: "Circle IPO 后首份财报 — USDC $753 亿流通量的含义",
    summary:
      "CRCL 上市后交出了一份超预期的首份财报。USDC 流通量 +72% Y/Y，CPN 支付网络从零到 $57 亿年化 TPV。但 IPO SBC 冲击使 GAAP 亏损，市场短期可能过度关注。",
    content:
      "Circle 的财报有两个层面：\n\n**表面看** — GAAP 亏损 $70M，因为 IPO 相关 SBC $845M。市场可能因此卖出。\n\n**实质看** — Adj EBITDA $582M (+104%)，USDC 流通量 $753B (+72%)，链上交易量 $11.9T (+247%)。这是一台正在加速的增长机器。\n\n**最让我兴奋的数字是 CPN：**\n从 2025 年 6 月上线到 55 家金融机构入网，年化 TPV $57 亿。这是支付网络效应的早期信号。\n\n**Jeremy Allaire 的 AI + 稳定币叙事值得重视：**\n如果真的有数百亿 AI Agent 需要进行微支付，传统支付系统的手续费结构完全不适用。USDC + 区块链是唯一能实现千分之一美分级别成本的方案。\n\n我的操作：IPO 后首次建仓 CRCL @$22。如果因 GAAP 亏损回调，$18-20 是加仓区间。",
    sentiment: "bullish",
    tickers: ["CRCL"],
  },
];

export function getAllOpinions(): Opinion[] {
  return opinions.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getOpinionsByTheme(theme: string): Opinion[] {
  return getAllOpinions().filter((o) => o.theme === theme);
}

export function getLatestOpinions(count: number): Opinion[] {
  return getAllOpinions().slice(0, count);
}
