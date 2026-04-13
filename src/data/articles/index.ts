import type { Article } from "@/lib/types";

const articles: Article[] = [
  {
    id: "crcl-q4-fy2025-transcript",
    date: "2026-04-10",
    theme: "defi",
    title: "Circle Q4/FY2025 Earnings Call 全文中英对照",
    subtitle:
      "Jeremy Allaire 与 CFO Jeremy Fox-Geen 关于 USDC 增长、CPN 网络效应与 AI+稳定币愿景的完整发言",
    sourceType: "earnings",
    sourceLabel: "Q4 FY2025 Earnings Call Transcript",
    tickers: ["CRCL"],
    price: 9.9,
    wordCount: 12400,
    freePreview: [
      {
        heading: "CEO Opening Remarks — USDC 增长叙事",
        paragraphs: [
          {
            en: "We achieved total revenues of $1.68 billion in FY2025, representing 16% growth year over year, with adjusted EBITDA of $582 million, more than doubling from the prior year.",
            cn: "FY2025 全年总收入 16.8 亿美元，同比增长 16%；调整后 EBITDA 为 5.82 亿美元，较上年翻倍有余。",
            highlight: true,
          },
          {
            en: "USDC circulation reached $75.3 billion by year end, growing 72% year over year. On-chain transaction volume surged to $11.9 trillion, up 247% — a clear signal that USDC is becoming critical infrastructure for the digital economy.",
            cn: "USDC 年末流通量达 753 亿美元，同比增长 72%。链上交易量飙升至 11.9 万亿美元，增长 247% — 明确信号表明 USDC 正成为数字经济的关键基础设施。",
          },
          {
            en: "Let me be clear about our vision: we believe there will be tens of billions of AI agents that need to transact value, and the only payment rail that can support micro-transactions at a fraction of a cent is stablecoins on blockchain.",
            cn: "让我明确我们的愿景：我们相信未来将有数百亿 AI Agent 需要进行价值交易，而唯一能以千分之一美分级别支持微支付的支付通道就是区块链上的稳定币。",
            highlight: true,
          },
        ],
      },
      {
        heading: "CPN 支付网络 — 从零到网络效应",
        paragraphs: [
          {
            en: "Circle Payments Network now has 55 financial institutions onboarded, with annualized TPV of $5.7 billion. This is still early days, but the network effect is beginning to compound.",
            cn: "Circle 支付网络（CPN）目前已有 55 家金融机构入网，年化 TPV 达 57 亿美元。这仍是早期阶段，但网络效应正开始显现。",
          },
          {
            en: "We're seeing real demand from institutions that want to move money across borders in minutes instead of days, at a fraction of the cost of traditional correspondent banking.",
            cn: "我们看到来自机构的真实需求 — 它们希望跨境汇款从数天缩短到数分钟，成本只是传统代理银行体系的零头。",
          },
        ],
      },
    ],
    paidContent: [
      {
        heading: "CFO 财务细节 — 收入结构拆解",
        paragraphs: [
          {
            en: "Reserve income reached $1.61 billion, up 13% year over year, driven by a higher average USDC in circulation and favorable interest rate environment. Other revenue contributed $63 million in FY2025.",
            cn: "储备金收入达 16.1 亿美元，同比增长 13%，主要受 USDC 平均流通量增加和有利利率环境驱动。其他收入在 FY2025 贡献了 6300 万美元。",
          },
          {
            en: "Distribution costs increased to $1.01 billion, representing 60.1% of revenue. These are primarily payments to Coinbase and other distribution partners. This is an area where we expect leverage as CPN scales and direct-to-user channels grow.",
            cn: "分发成本增至 10.1 亿美元，占收入的 60.1%。这主要是支付给 Coinbase 和其他分发合作伙伴的费用。随着 CPN 规模扩大和直接面向用户渠道增长，我们预期这一比率将改善。",
            highlight: true,
          },
          {
            en: "Compensation and SBC was $845 million in FY2025, inflated by IPO-related stock-based compensation. Excluding one-time IPO SBC, normalized compensation was approximately $320 million.",
            cn: "FY2025 薪酬和股权激励为 8.45 亿美元，因 IPO 相关 SBC 而膨胀。剔除一次性 IPO SBC 后，正常化薪酬约为 3.2 亿美元。",
          },
        ],
      },
      {
        heading: "FY2026 指引 — 管理层预期",
        paragraphs: [
          {
            en: "For FY2026, we expect USDC circulation to continue growing at a multi-year CAGR of approximately 40%. We're guiding other revenue of $150-170 million as CPN and new products begin to contribute more meaningfully.",
            cn: "对于 FY2026，我们预期 USDC 流通量将继续以约 40% 的多年复合增长率增长。我们给出其他收入 1.5-1.7 亿美元的指引，因为 CPN 和新产品开始产生更有意义的贡献。",
            highlight: true,
          },
          {
            en: "We anticipate distribution costs to moderate as a percentage of revenue over time, but in FY2026, it will remain in the high 50s to low 60s percent range.",
            cn: "我们预期分发成本占收入的比例将随时间推移而下降，但在 FY2026 将维持在 50% 高位至 60% 低位的区间。",
          },
        ],
      },
      {
        heading: "分析师 Q&A 精选",
        paragraphs: [
          {
            en: "Q: Can you quantify the revenue opportunity from AI agent transactions? A (Allaire): It's early to put a number on it, but think about this — if you have billions of AI agents doing millions of micro-transactions per second, even at basis point-level fees, the aggregate revenue opportunity is enormous. This is why we're investing heavily in programmable money infrastructure.",
            cn: "问：能否量化 AI Agent 交易的收入机会？答（Allaire）：现在给出具体数字还为时过早，但可以这样想 — 如果数十亿 AI Agent 每秒进行数百万笔微交易，即使是基点级别的费率，总收入机会也是巨大的。这就是我们大力投资可编程货币基础设施的原因。",
            highlight: true,
          },
          {
            en: "Q: How do you think about the competitive landscape for stablecoin payments? A (Allaire): We welcome competition. A rising tide lifts all boats in stablecoins. The more institutions that adopt stablecoin-based payments, the larger the overall market becomes. Our moat is USDC's regulatory clarity, multi-chain distribution, and now CPN's network effects.",
            cn: "问：如何看待稳定币支付的竞争格局？答（Allaire）：我们欢迎竞争。稳定币领域水涨船高。越多机构采用基于稳定币的支付，整体市场就越大。我们的护城河是 USDC 的监管清晰度、多链分发，以及现在 CPN 的网络效应。",
          },
        ],
      },
    ],
  },
  {
    id: "hood-q4-fy2025-transcript",
    date: "2026-04-08",
    theme: "defi",
    title: "Robinhood Q4/FY2025 Earnings Call 全文中英对照",
    subtitle:
      "Vlad Tenev 对「金融超级 App」愿景的完整阐述，含预测市场、Gold Card 与国际化战略细节",
    sourceType: "earnings",
    sourceLabel: "Q4 FY2025 Earnings Call Transcript",
    tickers: ["HOOD"],
    price: 9.9,
    wordCount: 15200,
    freePreview: [
      {
        heading: "CEO Opening — Financial SuperApp 战略",
        paragraphs: [
          {
            en: "Q4 was a record quarter. Revenue reached $1.01 billion, more than doubling year over year. For the full year, we generated $3.96 billion in revenue, up 58%, with adjusted EBITDA of $1.76 billion.",
            cn: "Q4 是创纪录的季度。收入达 10.1 亿美元，同比翻倍有余。全年收入 39.6 亿美元，增长 58%，调整后 EBITDA 为 17.6 亿美元。",
            highlight: true,
          },
          {
            en: "Our Rule of 40 score hit 102. I want to emphasize — this isn't just about top-line growth. We're building a structurally profitable business while still investing aggressively in new products.",
            cn: "我们的 Rule of 40 得分达到 102。我要强调 — 这不仅仅是关于营收增长。我们在积极投资新产品的同时，正在构建一个结构性盈利的业务。",
          },
          {
            en: "The Gold Card has been our most successful product launch ever. Over 2 million applications with no marketing spend. It's becoming the most powerful customer acquisition funnel we've ever built.",
            cn: "Gold Card 是我们有史以来最成功的产品发布。超过 200 万份申请，零营销支出。它正成为我们有史以来构建的最强大的获客漏斗。",
            highlight: true,
          },
        ],
      },
    ],
    paidContent: [
      {
        heading: "加密与预测市场 — 增长引擎",
        paragraphs: [
          {
            en: "Crypto revenue reached $672 million in FY2025, up 211% year over year. Event contracts contributed $126 million in their first full year — this is the fastest-growing product category in our history.",
            cn: "FY2025 加密收入达 6.72 亿美元，同比增长 211%。事件合约在其第一个完整年度贡献了 1.26 亿美元 — 这是我们历史上增长最快的产品品类。",
            highlight: true,
          },
          {
            en: "We're now expanding prediction markets beyond politics into sports — NBA, NFL, soccer. The regulatory pathway is clear after the Kalshi precedent, and user demand has been overwhelming.",
            cn: "我们现在正将预测市场从政治扩展到体育领域 — NBA、NFL、足球。在 Kalshi 先例之后，监管路径已经明确，用户需求压倒性地强烈。",
          },
        ],
      },
      {
        heading: "国际化与 Robinhood Chain",
        paragraphs: [
          {
            en: "We now serve customers in the UK, EU, and are expanding in Asia. International is still early — less than 5% of revenue — but the TAM is multiples of the US market.",
            cn: "我们现在为英国、欧盟的客户提供服务，并正在亚洲扩展。国际业务仍处于早期 — 收入占比不到 5% — 但 TAM 是美国市场的数倍。",
          },
          {
            en: "Robinhood Chain is our vision for bringing tokenized equities on-chain. Imagine being able to trade US stocks 24/7, settle instantly, and compose them with DeFi protocols. That's the future we're building.",
            cn: "Robinhood Chain 是我们将代币化股票上链的愿景。想象一下能够 7×24 交易美股、即时结算，并与 DeFi 协议组合。这就是我们正在构建的未来。",
            highlight: true,
          },
        ],
      },
      {
        heading: "分析师 Q&A 精选",
        paragraphs: [
          {
            en: "Q: SBC was $618M in FY2025 — how should we think about that normalizing? A (Tenev): We're committed to bringing SBC as a percentage of revenue into the mid-teens over time. As revenue scales, you'll see natural operating leverage here.",
            cn: "问：FY2025 SBC 为 6.18 亿美元 — 如何看待正常化？答（Tenev）：我们致力于将 SBC 占收入的比例逐步降至十几个百分点。随着收入规模扩大，你会看到这里天然的运营杠杆。",
          },
          {
            en: "Q: What's your view on crypto cyclicality risk? A (Tenev): Crypto is inherently cyclical, but our strategy is to build non-cyclical revenue streams — Gold subscription, net interest, event contracts — that provide a floor. In a downturn, we're still profitable.",
            cn: "问：如何看待加密周期性风险？答（Tenev）：加密本质上是周期性的，但我们的策略是构建非周期性收入来源 — Gold 订阅、净利息、事件合约 — 这些提供了底线。在下行周期中，我们仍然盈利。",
            highlight: true,
          },
        ],
      },
    ],
  },
  {
    id: "nvda-q4-fy2027-highlights",
    date: "2026-04-05",
    theme: "ai",
    title: "NVIDIA Q4/FY2027 财报核心要点 · 中英对照",
    subtitle:
      "Jensen Huang 关于推理经济、Blackwell 架构供需与 AI Agent 算力需求的关键表态",
    sourceType: "earnings",
    sourceLabel: "Q4 FY2027 Earnings Call Highlights",
    tickers: ["NVDA"],
    price: 5.9,
    wordCount: 6800,
    freePreview: [
      {
        heading: "Jensen Huang — 推理需求爆发",
        paragraphs: [
          {
            en: "Inference revenue now represents approximately half of our data center revenue. This is a fundamental shift — we've moved from the 'build phase' of AI infrastructure to the 'operate phase', where compute demand grows linearly with users and agents.",
            cn: "推理收入目前约占我们数据中心收入的一半。这是一个根本性转变 — 我们已从 AI 基础设施的「建设阶段」进入「运营阶段」，计算需求随用户和 Agent 线性增长。",
            highlight: true,
          },
          {
            en: "Blackwell is delivering 30x inference performance improvement. Combined with the explosion of reasoning models that require 100x more compute per inference, we see supply remaining constrained through 2027.",
            cn: "Blackwell 带来 30 倍推理性能提升。结合推理模型爆发（每次推理需要 100 倍以上算力），我们预计供应将持续紧张至 2027 年。",
          },
        ],
      },
    ],
    paidContent: [
      {
        heading: "数据中心收入拆解",
        paragraphs: [
          {
            en: "Q4 data center revenue reached $43 billion, exceeding our guidance of $41 billion. For the full year, data center revenue was $155 billion, up 78% year over year.",
            cn: "Q4 数据中心收入达 430 亿美元，超出 410 亿美元的指引。全年数据中心收入 1550 亿美元，同比增长 78%。",
            highlight: true,
          },
          {
            en: "The inference mix shift is important for understanding our margin trajectory. Inference workloads tend to have higher gross margins than training because they're more compute-bound and less memory-bound.",
            cn: "推理占比的转变对于理解我们的利润率轨迹非常重要。推理工作负载的毛利率通常高于训练，因为它们更偏计算密集型而非内存密集型。",
          },
        ],
      },
      {
        heading: "AI Agent 与边缘推理",
        paragraphs: [
          {
            en: "We're at the beginning of the AI Agent era. When you have agents running 24/7 — coding agents, research agents, customer service agents — the aggregate compute demand is orders of magnitude larger than today's human-driven usage patterns.",
            cn: "我们正处于 AI Agent 时代的开端。当 Agent 7×24 运行 — 编程 Agent、研究 Agent、客服 Agent — 总计算需求比今天人类驱动的使用模式大几个数量级。",
            highlight: true,
          },
          {
            en: "Edge inference is the next frontier. Every robot, every autonomous vehicle, every smart device will need local inference capability. This is an entirely new TAM that didn't exist three years ago.",
            cn: "边缘推理是下一个前沿。每台机器人、每辆自动驾驶汽车、每个智能设备都需要本地推理能力。这是三年前完全不存在的全新 TAM。",
          },
        ],
      },
    ],
  },
];

export function getAllArticles(): Article[] {
  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getArticle(id: string): Article | undefined {
  return articles.find((a) => a.id === id);
}

export function getArticlesByTheme(theme: string): Article[] {
  return getAllArticles().filter((a) => a.theme === theme);
}

export function getLatestArticles(count: number): Article[] {
  return getAllArticles().slice(0, count);
}
