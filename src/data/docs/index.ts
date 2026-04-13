import type { CompanyDoc, RelatedContent, Discussion } from "@/lib/types";
import {
  crclQ4TranscriptFreePreview,
  crclQ4TranscriptPaidContent,
} from "./crcl-q4fy25-transcript-full";

/* ═══════════════════════════════════════════
   HOOD — Robinhood
   ═══════════════════════════════════════════ */

const hoodDocs: CompanyDoc[] = [
  {
    id: "hood-q4fy25-transcript",
    ticker: "HOOD",
    quarter: "Q4 FY2025",
    category: "transcript",
    categoryLabel: "Earnings Call Transcript",
    title: "Q4 FY2025 Earnings Call 全文中英对照",
    date: "2026-02-12",
    summary:
      "Vlad Tenev 阐述「金融超级 App」愿景。Q4 收入 $1.01B（+115% Y/Y），Rule of 40 达 102。Gold Card 200 万申请零营销、预测市场扩展至体育、Robinhood Chain 代币化股票愿景是三大亮点。",
    price: 9.9,
    wordCount: 15200,
    freePreview: [
      {
        heading: "CEO Opening — Financial SuperApp 战略",
        paragraphs: [
          { en: "Q4 was a record quarter. Revenue reached $1.01 billion, more than doubling year over year. For the full year, we generated $3.96 billion in revenue, up 58%, with adjusted EBITDA of $1.76 billion.", cn: "Q4 是创纪录的季度。收入达 10.1 亿美元，同比翻倍有余。全年收入 39.6 亿美元，增长 58%，调整后 EBITDA 为 17.6 亿美元。", highlight: true },
          { en: "Our Rule of 40 score hit 102. I want to emphasize — this isn't just about top-line growth. We're building a structurally profitable business while still investing aggressively in new products.", cn: "我们的 Rule of 40 得分达到 102。我要强调 — 这不仅仅是关于营收增长。我们在积极投资新产品的同时，正在构建一个结构性盈利的业务。" },
          { en: "The Gold Card has been our most successful product launch ever. Over 2 million applications with no marketing spend. It's becoming the most powerful customer acquisition funnel we've ever built.", cn: "Gold Card 是我们有史以来最成功的产品发布。超过 200 万份申请，零营销支出。它正成为我们有史以来构建的最强大的获客漏斗。", highlight: true },
        ],
      },
    ],
    paidContent: [
      {
        heading: "加密与预测市场 — 增长引擎",
        paragraphs: [
          { en: "Crypto revenue reached $672 million in FY2025, up 211% year over year. Event contracts contributed $126 million in their first full year — this is the fastest-growing product category in our history.", cn: "FY2025 加密收入达 6.72 亿美元，同比增长 211%。事件合约在其第一个完整年度贡献了 1.26 亿美元 — 这是我们历史上增长最快的产品品类。", highlight: true },
          { en: "We're now expanding prediction markets beyond politics into sports — NBA, NFL, soccer. The regulatory pathway is clear after the Kalshi precedent, and user demand has been overwhelming.", cn: "我们现在正将预测市场从政治扩展到体育领域 — NBA、NFL、足球。在 Kalshi 先例之后，监管路径已经明确，用户需求压倒性地强烈。" },
        ],
      },
      {
        heading: "国际化与 Robinhood Chain",
        paragraphs: [
          { en: "We now serve customers in the UK, EU, and are expanding in Asia. International is still early — less than 5% of revenue — but the TAM is multiples of the US market.", cn: "我们现在为英国、欧盟的客户提供服务，并正在亚洲扩展。国际业务仍处于早期 — 收入占比不到 5% — 但 TAM 是美国市场的数倍。" },
          { en: "Robinhood Chain is our vision for bringing tokenized equities on-chain. Imagine being able to trade US stocks 24/7, settle instantly, and compose them with DeFi protocols. That's the future we're building.", cn: "Robinhood Chain 是我们将代币化股票上链的愿景。想象一下能够 7×24 交易美股、即时结算，并与 DeFi 协议组合。这就是我们正在构建的未来。", highlight: true },
        ],
      },
      {
        heading: "分析师 Q&A 精选",
        paragraphs: [
          { en: "Q: SBC was $618M in FY2025 — how should we think about that normalizing? A (Tenev): We're committed to bringing SBC as a percentage of revenue into the mid-teens over time. As revenue scales, you'll see natural operating leverage here.", cn: "问：FY2025 SBC 为 6.18 亿美元 — 如何看待正常化？答（Tenev）：我们致力于将 SBC 占收入的比例逐步降至十几个百分点。随着收入规模扩大，你会看到这里天然的运营杠杆。" },
          { en: "Q: What's your view on crypto cyclicality risk? A (Tenev): Crypto is inherently cyclical, but our strategy is to build non-cyclical revenue streams — Gold subscription, net interest, event contracts — that provide a floor. In a downturn, we're still profitable.", cn: "问：如何看待加密周期性风险？答（Tenev）：加密本质上是周期性的，但我们的策略是构建非周期性收入来源 — Gold 订阅、净利息、事件合约 — 这些提供了底线。在下行周期中，我们仍然盈利。", highlight: true },
        ],
      },
    ],
  },
  {
    id: "hood-q4fy25-10k",
    ticker: "HOOD",
    quarter: "Q4 FY2025",
    category: "10k",
    categoryLabel: "10-K Annual Report",
    title: "FY2025 Annual Report (10-K) 要点中英对照",
    date: "2026-02-28",
    summary:
      "FY2025 年度报告核心数据：总收入 $3.96B（+58%），净利润 $1.41B，Funded Customers 24.8M，AUC $193B。风险因素新增加密监管不确定性与国际扩张执行风险。",
    price: 5.9,
    wordCount: 8400,
    externalUrl: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=HOOD",
    freePreview: [
      {
        heading: "核心财务数据",
        paragraphs: [
          { en: "Total net revenues for the year ended December 31, 2025 were $3.96 billion, an increase of 58% compared to $2.50 billion for the year ended December 31, 2024.", cn: "截至 2025 年 12 月 31 日的全年总净收入为 39.6 亿美元，较 2024 年同期的 25.0 亿美元增长 58%。", highlight: true },
          { en: "Net income attributable to Robinhood Markets, Inc. was $1.41 billion for the year ended December 31, 2025, compared to net income of $0.92 billion for the year ended December 31, 2024.", cn: "归属于 Robinhood Markets, Inc. 的净利润为 2025 年全年 14.1 亿美元，2024 年同期为 9.2 亿美元。" },
        ],
      },
    ],
    paidContent: [
      {
        heading: "收入结构拆解",
        paragraphs: [
          { en: "Transaction-based revenues were $2.35 billion, up 111% Y/Y, driven primarily by cryptocurrency ($672M, +211%), options ($465M, +56%), and event contracts ($126M, new). Equities transaction revenue was $364M, up 28%.", cn: "交易收入为 23.5 亿美元，同比增长 111%，主要受加密货币（6.72 亿美元，+211%）、期权（4.65 亿美元，+56%）和事件合约（1.26 亿美元，新品类）驱动。股票交易收入 3.64 亿美元，增长 28%。", highlight: true },
          { en: "Net interest revenues were $1.27 billion, up 12%, reflecting higher average customer cash balances and margin lending. Other revenues were $344 million, up 57%, driven by Robinhood Gold subscription growth.", cn: "净利息收入 12.7 亿美元，增长 12%，反映了更高的平均客户现金余额和保证金贷款。其他收入 3.44 亿美元，增长 57%，受 Robinhood Gold 订阅增长驱动。" },
        ],
      },
      {
        heading: "风险因素更新",
        paragraphs: [
          { en: "We added risk factors related to international expansion execution, cryptocurrency regulatory uncertainty across multiple jurisdictions, and potential concentration risk in event contract revenues which may be impacted by political cycles.", cn: "我们新增了与国际扩张执行、多司法管辖区加密货币监管不确定性以及事件合约收入可能受政治周期影响的集中度风险相关的风险因素。" },
        ],
      },
    ],
  },
  {
    id: "hood-q4fy25-shareholder",
    ticker: "HOOD",
    quarter: "Q4 FY2025",
    category: "shareholder-letter",
    categoryLabel: "Shareholder Letter",
    title: "Q4 FY2025 Shareholder Letter 要点中英对照",
    date: "2026-02-12",
    summary:
      "致股东信核心信息：Rule of 40 = 102，Gold 会员突破 300 万，提出 2026 年三大优先事项 — 国际化加速、产品宽度扩展、Robinhood Chain 上线。",
    price: 5.9,
    wordCount: 5600,
    freePreview: [
      {
        heading: "致股东 — 执行概要",
        paragraphs: [
          { en: "Dear Shareholders, 2025 was a transformational year for Robinhood. We more than doubled our quarterly revenue, achieved a Rule of 40 score of 102, and launched products that are reshaping how the next generation interacts with financial markets.", cn: "亲爱的股东们，2025 年是 Robinhood 的转型之年。我们的季度收入翻了一倍多，实现了 Rule of 40 得分 102，并推出了正在重塑下一代与金融市场互动方式的产品。", highlight: true },
          { en: "Gold membership surpassed 3 million subscribers, making it one of the fastest-growing financial subscription products in the US.", cn: "Gold 会员突破 300 万订阅用户，使其成为美国增长最快的金融订阅产品之一。" },
        ],
      },
    ],
    paidContent: [
      {
        heading: "2026 年三大优先事项",
        paragraphs: [
          { en: "Priority 1 — International Acceleration: We plan to launch in 5+ new markets in 2026, with Asia-Pacific as the primary focus. Our crypto-first approach allows faster regulatory approval compared to traditional brokerage.", cn: "优先事项 1 — 国际化加速：我们计划在 2026 年进入 5 个以上新市场，亚太地区为主要重点。我们的加密优先策略相比传统经纪业务能更快获得监管审批。", highlight: true },
          { en: "Priority 2 — Product Width: Index options, futures, advisory services, and banking products are all in our 2026 pipeline. Each product deepens customer engagement and increases lifetime value.", cn: "优先事项 2 — 产品宽度：指数期权、期货、投顾服务和银行产品均在 2026 年产品管线中。每个产品都能深化客户参与并提升生命周期价值。" },
          { en: "Priority 3 — Robinhood Chain: Tokenized equities, 24/7 trading, instant settlement. This is not a side project — it's the future architecture of our entire platform.", cn: "优先事项 3 — Robinhood Chain：代币化股票、7×24 交易、即时结算。这不是一个副项目 — 这是我们整个平台的未来架构。", highlight: true },
        ],
      },
    ],
  },
  {
    id: "hood-q3fy25-transcript",
    ticker: "HOOD",
    quarter: "Q3 FY2025",
    category: "transcript",
    categoryLabel: "Earnings Call Transcript",
    title: "Q3 FY2025 Earnings Call 全文中英对照",
    date: "2025-10-30",
    summary:
      "Q3 收入 $637M（+36% Y/Y），预测市场首次贡献可观收入，Gold Card 正式推出引发申请潮，管理层首次提出 Rule of 40 框架。",
    price: 9.9,
    wordCount: 13800,
    freePreview: [
      {
        paragraphs: [
          { en: "This was a breakthrough quarter. We delivered $637 million in revenue, up 36% year over year, and our adjusted EBITDA margin expanded to 40%. Most importantly, we're seeing product-market fit across multiple new categories simultaneously.", cn: "这是一个突破性的季度。我们实现了 6.37 亿美元的收入，同比增长 36%，调整后 EBITDA 利润率扩大至 40%。最重要的是，我们同时在多个新品类中看到了产品市场契合度。", highlight: true },
        ],
      },
    ],
    paidContent: [
      {
        heading: "预测市场首秀与 Gold Card",
        paragraphs: [
          { en: "Event contracts launched in August and already contributed meaningful revenue in Q3. The US presidential election cycle is driving unprecedented engagement, with average contract sizes suggesting both retail and sophisticated participation.", cn: "事件合约于 8 月推出，在 Q3 已贡献有意义的收入。美国总统选举周期正推动前所未有的参与度，平均合约规模表明零售和专业投资者都在参与。" },
          { en: "Gold Card applications exceeded 1 million in just 6 weeks. The 3% unlimited cashback proposition is disruptive — no other card offers this without category restrictions. This is our most powerful acquisition channel.", cn: "Gold Card 申请在短短 6 周内突破 100 万。3% 无限返现的价值主张具有颠覆性 — 没有其他信用卡在无品类限制下提供这一点。这是我们最强大的获客渠道。", highlight: true },
        ],
      },
    ],
  },
];

const hoodRelated: RelatedContent[] = [
  {
    id: "hood-tenev-investor-day",
    ticker: "HOOD",
    type: "interview",
    typeLabel: "管理层演讲",
    title: "Vlad Tenev 2026 年投资者日演讲 — 中英对照",
    author: "Vlad Tenev, CEO",
    date: "2026-03-18",
    summary:
      "Tenev 在投资者日上系统阐述 Robinhood 从经纪商到「金融操作系统」的转型路线图，含 Robinhood Chain 技术细节首次披露。",
    price: 5.9,
    wordCount: 7200,
    freePreview: [
      {
        paragraphs: [
          { en: "Today I want to share our vision for what Robinhood becomes over the next five years. We're not building a better brokerage. We're building the financial operating system for the next generation.", cn: "今天我想分享 Robinhood 未来五年的愿景。我们不是在构建一个更好的经纪商。我们在构建下一代的金融操作系统。", highlight: true },
        ],
      },
    ],
    paidContent: [
      {
        heading: "Robinhood Chain 技术架构",
        paragraphs: [
          { en: "Robinhood Chain will be an Ethereum L2 optimized for financial transactions. Sub-second finality, native compliance hooks, and direct integration with our existing order routing infrastructure.", cn: "Robinhood Chain 将是一个为金融交易优化的以太坊 L2。亚秒级确定性、原生合规钩子，以及与我们现有订单路由基础设施的直接集成。", highlight: true },
        ],
      },
    ],
  },
];

const hoodDiscussions: Discussion[] = [
  {
    id: "hood-disc-20260413",
    ticker: "HOOD",
    date: "2026-04-13",
    title: "预测市场扩展体育 — 增量还是周期？",
    content:
      "HOOD 把预测市场从政治扩展到体育是好棋。政治事件合约有明显的周期性（选举年爆发），体育可以提供全年稳定的流量。FY2025 Event Contracts 收入 $126M 中大部分来自大选周期，2026 非选举年可能回落。但体育类别如果做得好，可以部分对冲。\n\n关注点：监管风险。CFTC 对体育预测市场的态度比政治类更保守。如果 Kalshi 的先例不能完全覆盖体育，HOOD 可能需要走额外的审批流程。\n\n我的操作：继续持有，不加仓。等 Q1 数据验证非选举年的事件合约收入韧性。",
    sentiment: "neutral",
  },
  {
    id: "hood-disc-20260330",
    ticker: "HOOD",
    date: "2026-03-30",
    title: "Rule of 40 = 102 能持续吗？",
    content:
      "HOOD 的 Rule of 40 得分 102 非常亮眼，但拆开看：58% 收入增长 + 44% EBITDA margin。问题是 58% 的增长率中有多少是加密 + 预测市场的周期性贡献？\n\n如果 2026 年加密进入平淡期，交易收入可能从 $2.35B 回落到 $1.5-1.8B。即使 Gold、净利息等非周期收入继续增长 20-30%，总增长率可能降至 15-25%。\n\n但 44% 的 EBITDA margin 应该是可持续的甚至可以扩张。所以 bear case 下 Rule of 40 大约 60-70，仍然是一流水平。\n\n估值：当前 ~15x P/S，如果增速放缓到 20%，P/S 可能压缩到 10-12x。但我认为市场已经 price in 了部分周期性回落。",
    sentiment: "bullish",
  },
];

/* ═══════════════════════════════════════════
   CRCL — Circle
   ═══════════════════════════════════════════ */

const crclDocs: CompanyDoc[] = [
  {
    id: "crcl-q4fy25-transcript",
    ticker: "CRCL",
    quarter: "Q4 FY2025",
    category: "transcript",
    categoryLabel: "Earnings Call Transcript",
    title: "Q4 FY2025 Earnings Call 完整全文中英对照",
    date: "2026-02-25",
    summary:
      "Jeremy Allaire 描绘 AI + 稳定币愿景，CFO Jeremy Fox-Geen 详解财务数据。涵盖 CEO 开场（USDC $753B +72%、链上交易量 $12T +247%、Q4 收入 $770M +77%、Adj EBITDA $167M +412%）、平台扩展（Arc 测试网、CPN 55 家机构入网 TPV $57B、StableFX）、企业合作（Intuit/Visa/Polymarket/Cash App/JPMorgan）、竞争格局（交易量份额从 39%→50%、双头垄断格局）、CCTP 互操作性（占全部桥接量 62%）、EURC（3.8x 增长至 €310M）与 USYC（$1.7B）、AI Agent 支付愿景、CFO 全年财务回顾、FY2026 指引（USDC 40% CAGR、其他收入 $150-170M）、分析师 Q&A（Arc 代币探索、GENIUS/CLARITY 法案影响、CPN B2B 跨境用例、分发成本与 Coinbase 关系）。完整 20 页逐段翻译。",
    price: 19.9,
    wordCount: 28000,
    freePreview: crclQ4TranscriptFreePreview,
    paidContent: crclQ4TranscriptPaidContent,
  },
  {
    id: "crcl-q4fy25-earnings-ppt",
    ticker: "CRCL",
    quarter: "Q4 FY2025",
    category: "earnings-ppt",
    categoryLabel: "Earnings Presentation",
    title: "Q4 FY2025 Earnings Presentation 要点中英对照",
    date: "2026-02-25",
    summary:
      "财报演示文稿核心图表解读：USDC 流通量增长曲线、CPN 网络效应指标、收入结构演变、非利息收入增长路径。",
    price: 5.9,
    wordCount: 4800,
    freePreview: [
      {
        paragraphs: [
          { en: "Slide highlight — USDC Circulation Growth: From $44B at end of FY2024 to $75.3B at end of FY2025. Management projects ~40% multi-year CAGR, implying >$100B by end of FY2026 and >$200B by FY2028.", cn: "幻灯片亮点 — USDC 流通量增长：从 FY2024 末的 440 亿美元增至 FY2025 末的 753 亿美元。管理层预计约 40% 多年 CAGR，意味着 FY2026 末超 1000 亿、FY2028 超 2000 亿。", highlight: true },
        ],
      },
    ],
    paidContent: [
      {
        heading: "CPN 网络效应数据",
        paragraphs: [
          { en: "CPN metrics: 55 financial institutions onboarded (from 0 in June 2025), annualized TPV $5.7B, average transaction size $48K suggesting institutional use cases dominate early adoption.", cn: "CPN 指标：55 家金融机构入网（2025 年 6 月从零开始），年化 TPV 57 亿美元，平均交易规模 4.8 万美元表明机构用例主导了早期采用。" },
        ],
      },
    ],
  },
  {
    id: "crcl-q4fy25-8k",
    ticker: "CRCL",
    quarter: "Q4 FY2025",
    category: "8k",
    categoryLabel: "8-K Filing",
    title: "Q4 FY2025 Earnings 8-K 核心数据中英对照",
    date: "2026-02-25",
    summary:
      "8-K 财报公告要点：Q4 收入 $471M，Adj EBITDA $167M，GAAP 净亏损 $70M（IPO SBC 影响），全年 Adj EBITDA $582M（+104%）。",
    price: 3.9,
    wordCount: 3200,
    externalUrl: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=CRCL",
    freePreview: [
      {
        paragraphs: [
          { en: "Circle Internet Group, Inc. today reported financial results for Q4 and FY2025. Total revenue was $1.68B for FY2025, up 16% Y/Y. Adjusted EBITDA was $582M, up 104% Y/Y.", cn: "Circle Internet Group, Inc. 今日公布 Q4 及 FY2025 财务业绩。FY2025 全年总收入 16.8 亿美元，同比增长 16%。调整后 EBITDA 为 5.82 亿美元，同比增长 104%。", highlight: true },
        ],
      },
    ],
    paidContent: [
      {
        heading: "Balance Sheet & Cash Flow",
        paragraphs: [
          { en: "Cash and equivalents: $1.2B. No long-term debt. Free cash flow for FY2025 was $380M, reflecting strong operating cash generation offset partially by strategic investments in CPN and international infrastructure.", cn: "现金及等价物：12 亿美元。无长期债务。FY2025 自由现金流 3.8 亿美元，反映了强劲的运营现金产生，部分被 CPN 和国际基础设施战略投资抵消。" },
        ],
      },
    ],
  },
];

const crclRelated: RelatedContent[] = [
  {
    id: "crcl-allaire-cnbc",
    ticker: "CRCL",
    type: "interview",
    typeLabel: "媒体访谈",
    title: "Jeremy Allaire CNBC 专访 — AI Agent 支付愿景",
    author: "Jeremy Allaire, CEO",
    date: "2026-03-15",
    summary: "Allaire 在 CNBC 上深度解释为什么 AI Agent 需要稳定币支付通道，以及 USDC 如何成为「互联网原生美元」。",
    price: 3.9,
    wordCount: 3800,
    freePreview: [
      {
        paragraphs: [
          { en: "Think about it this way — every AI agent that does work on behalf of a human will eventually need to pay for services, receive compensation, and settle transactions. The traditional payment system charges 2-3% per transaction. That doesn't work when you have agents doing thousands of micro-tasks per hour.", cn: "这样想 — 每个代替人类工作的 AI Agent 最终都需要支付服务费、接收报酬、结算交易。传统支付系统每笔交易收取 2-3%。当 Agent 每小时执行数千个微任务时，这行不通。", highlight: true },
        ],
      },
    ],
    paidContent: [
      {
        heading: "USDC vs USDT — 合规优势",
        paragraphs: [
          { en: "USDC is the only major stablecoin with full reserves audited monthly by a Big Four firm, fully compliant with MiCA in Europe, and positioned for GENIUS Act compliance in the US. Institutions choose USDC because they need regulatory certainty.", cn: "USDC 是唯一一个由四大审计公司每月审计全额储备、完全符合欧洲 MiCA 法规、并已做好美国 GENIUS Act 合规准备的主要稳定币。机构选择 USDC 是因为它们需要监管确定性。" },
        ],
      },
    ],
  },
];

const crclDiscussions: Discussion[] = [
  {
    id: "crcl-disc-20260413",
    ticker: "CRCL",
    date: "2026-04-13",
    title: "稳定币法案是 CRCL 的「iPhone 时刻」",
    content:
      "GENIUS Act + Clarity Act 双法案推进，意味着美国正式承认稳定币作为金融基础设施的地位。对 CRCL 是直接利好 — USDC 是目前合规度最高的美元稳定币。\n\n管理层给出 USDC 40% CAGR 的多年预期。如果叠加立法催化，流通量增长可能超预期。FY2028 $2000 亿的流通量目标并非不可能。\n\nCPN 是真正的看点 — 55 家金融机构入网才刚刚开始。如果 2026 年能扩展到 200+，网络效应会加速。\n\n我的操作：如果回调到 $20 以下会加仓。当前价位持有不动。",
    sentiment: "bullish",
  },
];

/* ═══════════════════════════════════════════
   COIN — Coinbase
   ═══════════════════════════════════════════ */

const coinDocs: CompanyDoc[] = [
  {
    id: "coin-q4fy25-transcript",
    ticker: "COIN",
    quarter: "Q4 FY2025",
    category: "transcript",
    categoryLabel: "Earnings Call Transcript",
    title: "Q4 FY2025 Earnings Call 全文中英对照",
    date: "2026-02-20",
    summary:
      "Brian Armstrong 阐述「Everything Exchange」愿景。Q4 Transaction Revenue $2.27B，S&S Revenue $2.27B 首次追平交易收入。Base L2 TVL 创新高，Deribit 整合进展顺利。",
    price: 9.9,
    wordCount: 14600,
    freePreview: [
      {
        heading: "CEO Opening — Everything Exchange",
        paragraphs: [
          { en: "We ended 2025 with a historic quarter. Total revenue reached $2.27 billion in Q4, and for the full year, we generated $6.56 billion — a 111% increase. Subscription and services revenue matched transaction revenue for the first time, demonstrating the durability of our business model.", cn: "我们以一个历史性的季度结束了 2025 年。Q4 总收入达 22.7 亿美元，全年收入 65.6 亿美元 — 增长 111%。订阅和服务收入首次追平交易收入，证明了我们商业模式的持久性。", highlight: true },
          { en: "Our vision remains unchanged: Coinbase will become the Everything Exchange — the primary financial account for the cryptoeconomy. Every asset class, every financial service, all on one platform.", cn: "我们的愿景不变：Coinbase 将成为 Everything Exchange — 加密经济的主要金融账户。所有资产类别、所有金融服务，全在一个平台上。" },
        ],
      },
    ],
    paidContent: [
      {
        heading: "Base L2 与 AI Agent 生态",
        paragraphs: [
          { en: "Base now processes more transactions than Ethereum mainnet. The AI agent ecosystem on Base is particularly exciting — we're seeing agents that autonomously manage portfolios, execute trades, and interact with DeFi protocols.", cn: "Base 的交易处理量现已超过以太坊主网。Base 上的 AI Agent 生态尤其令人兴奋 — 我们看到 Agent 自主管理投资组合、执行交易、与 DeFi 协议交互。", highlight: true },
          { en: "Sequencer fees from Base contributed meaningfully to Q4 revenue and are growing double-digits month over month.", cn: "来自 Base 的排序器费用对 Q4 收入有实质性贡献，且月环比增长两位数。" },
        ],
      },
      {
        heading: "分析师 Q&A — 费率压缩与竞争",
        paragraphs: [
          { en: "Q: How do you think about fee compression as the market matures? A (Armstrong): We've always been transparent — blended take rates will compress over time. But our strategy is to grow the pie faster than rates compress. S&S revenue is the proof point.", cn: "问：如何看待市场成熟后的费率压缩？答（Armstrong）：我们一直很透明 — 混合费率长期会压缩。但我们的策略是让蛋糕增长速度超过费率压缩速度。S&S 收入就是证明。" },
        ],
      },
    ],
  },
  {
    id: "coin-q4fy25-shareholder",
    ticker: "COIN",
    quarter: "Q4 FY2025",
    category: "shareholder-letter",
    categoryLabel: "Shareholder Letter",
    title: "Q4 FY2025 Shareholder Letter 要点中英对照",
    date: "2026-02-20",
    summary:
      "致股东信聚焦三大战略支柱：交易平台升级（Deribit 衍生品整合）、链上经济（Base L2 生态爆发）、合规领导力（GENIUS Act + Clarity Act 推动）。",
    price: 5.9,
    wordCount: 6200,
    freePreview: [
      {
        paragraphs: [
          { en: "2025 was the year crypto went from alternative to essential. Spot Bitcoin ETFs attracted $65B in net inflows, stablecoin circulation doubled, and DeFi TVL hit all-time highs. Coinbase was at the center of all of it.", cn: "2025 年是加密从「替代品」变为「必需品」的一年。比特币现货 ETF 吸引了 650 亿美元净流入，稳定币流通量翻倍，DeFi TVL 创历史新高。Coinbase 处于这一切的中心。", highlight: true },
        ],
      },
    ],
    paidContent: [
      {
        heading: "Deribit 整合与衍生品战略",
        paragraphs: [
          { en: "The Deribit acquisition is performing ahead of plan. Combined, we now have the #1 position in both spot and derivatives crypto trading globally. The cross-sell opportunity between Coinbase's retail base and Deribit's institutional derivatives platform is just beginning.", cn: "Deribit 收购进展超出计划。合并后，我们现在在全球现货和衍生品加密交易中均占据第一位。Coinbase 零售基础与 Deribit 机构衍生品平台之间的交叉销售机会才刚刚开始。", highlight: true },
        ],
      },
    ],
  },
];

const coinRelated: RelatedContent[] = [
  {
    id: "coin-ark-research",
    ticker: "COIN",
    type: "kol",
    typeLabel: "机构研报",
    title: "ARK Invest: Coinbase 是加密经济的 AWS — 研报要点中英对照",
    author: "Cathie Wood / ARK Invest",
    date: "2026-03-25",
    summary: "ARK 最新研报将 Coinbase 类比为加密经济的 AWS，认为 Base L2 + Staking + USDC 收入构成了「平台税」商业模式。给出 $450 目标价。",
    price: 5.9,
    wordCount: 5400,
    freePreview: [
      {
        paragraphs: [
          { en: "Coinbase is building the AWS of crypto. Just as Amazon Web Services became the default infrastructure for the internet economy, Coinbase is becoming the default infrastructure for the cryptoeconomy — through Base (compute), USDC custody (storage), and staking (yield).", cn: "Coinbase 正在构建加密领域的 AWS。正如 Amazon Web Services 成为互联网经济的默认基础设施，Coinbase 正通过 Base（计算）、USDC 托管（存储）和质押（收益）成为加密经济的默认基础设施。", highlight: true },
        ],
      },
    ],
    paidContent: [
      {
        heading: "估值模型与目标价",
        paragraphs: [
          { en: "Our base case values COIN at $350, bear case at $200, and bull case at $450. The key variable is S&S revenue growth — if it maintains 40%+ CAGR through 2028, the stock is significantly undervalued at current levels.", cn: "我们的基准情景估值 COIN 为 $350，悲观情景 $200，乐观情景 $450。关键变量是 S&S 收入增长 — 如果到 2028 年保持 40%+ CAGR，当前价位明显低估。", highlight: true },
        ],
      },
    ],
  },
];

const coinDiscussions: Discussion[] = [
  {
    id: "coin-disc-20260410",
    ticker: "COIN",
    date: "2026-04-10",
    title: "S&S 收入追平交易收入 — 这才是 COIN 最大的故事",
    content:
      "Q4 的 S&S Revenue 首次追平 Transaction Revenue。这是一个里程碑 — 意味着 Coinbase 在 crypto winter 中也能盈利。\n\n拆解 S&S 收入：Stablecoin Revenue（USDC 利息分成）、Blockchain Rewards（ETH 质押）、Custody、Coinbase One 订阅。这些都是「平台税」性质的收入，随 AUM 和用户数增长，不依赖交易量。\n\nBase L2 的 Sequencer Fee 是新变量 — 如果 Base 成为 DeFi 的主要 L2，这部分收入可以很快超过 $1B/年。\n\n我的操作：COIN 是我 DeFi 仓位中最大的头寸。Q1 交易量数据如果偏弱（管理层已暗示），可能提供加仓机会。",
    sentiment: "bullish",
  },
];

/* ═══════════════════════════════════════════
   NVDA — NVIDIA
   ═══════════════════════════════════════════ */

const nvdaDocs: CompanyDoc[] = [
  {
    id: "nvda-q4fy27-transcript",
    ticker: "NVDA",
    quarter: "Q4 FY2027",
    category: "transcript",
    categoryLabel: "Earnings Call Transcript",
    title: "Q4 FY2027 Earnings Call 全文中英对照",
    date: "2026-02-26",
    summary:
      "Jensen Huang 阐述推理经济拐点。推理收入占数据中心收入约一半，Blackwell 架构 30 倍推理性能提升，供应紧张持续至 2027 年。Q4 数据中心收入 $43B 超指引。",
    price: 9.9,
    wordCount: 16000,
    freePreview: [
      {
        heading: "Jensen Huang — 推理需求爆发",
        paragraphs: [
          { en: "Inference revenue now represents approximately half of our data center revenue. This is a fundamental shift — we've moved from the 'build phase' of AI infrastructure to the 'operate phase', where compute demand grows linearly with users and agents.", cn: "推理收入目前约占我们数据中心收入的一半。这是一个根本性转变 — 我们已从 AI 基础设施的「建设阶段」进入「运营阶段」，计算需求随用户和 Agent 线性增长。", highlight: true },
          { en: "Blackwell is delivering 30x inference performance improvement. Combined with reasoning models requiring 100x more compute per inference, we see supply remaining constrained through 2027.", cn: "Blackwell 带来 30 倍推理性能提升。结合推理模型每次推理需要 100 倍以上算力，我们预计供应将持续紧张至 2027 年。" },
        ],
      },
    ],
    paidContent: [
      {
        heading: "数据中心收入拆解",
        paragraphs: [
          { en: "Q4 data center revenue reached $43 billion, exceeding our guidance of $41 billion. For the full year, data center revenue was $155 billion, up 78% year over year.", cn: "Q4 数据中心收入达 430 亿美元，超出 410 亿美元的指引。全年数据中心收入 1550 亿美元，同比增长 78%。", highlight: true },
          { en: "The inference mix shift is important for margin trajectory. Inference workloads tend to have higher gross margins than training because they're more compute-bound and less memory-bound.", cn: "推理占比转变对利润率轨迹很重要。推理工作负载毛利率通常高于训练，因为更偏计算密集型而非内存密集型。" },
        ],
      },
      {
        heading: "AI Agent 与边缘推理",
        paragraphs: [
          { en: "We're at the beginning of the AI Agent era. When you have agents running 24/7 — coding, research, customer service — the aggregate compute demand is orders of magnitude larger than today's human-driven patterns.", cn: "我们正处于 AI Agent 时代的开端。当 Agent 7×24 运行 — 编程、研究、客服 — 总计算需求比今天人类驱动的模式大几个数量级。", highlight: true },
        ],
      },
    ],
  },
];

const nvdaRelated: RelatedContent[] = [];

const nvdaDiscussions: Discussion[] = [
  {
    id: "nvda-disc-20260406",
    ticker: "NVDA",
    date: "2026-04-06",
    title: "推理需求爆发 — 算力投资的第二波浪潮",
    content:
      "Jensen 说推理收入占数据中心收入的一半，这改变了整个算力需求的叙事。\n\n训练是一次性投入（建设期），推理是持续消耗（运营期）。Reasoning models (o3, Claude Opus) 使单次推理计算量增长 100x。AI Agent 7×24 运行 = 持续推理需求。边缘推理 + 端侧推理 = TAM 扩大。\n\n对 NVDA 的影响：Blackwell 架构的推理性能提升 30x，正好满足需求。供不应求可能持续到 2027。Q1 FY2028 指引 $45B 超市场预期。\n\n我的观点：NVDA 当前估值已不便宜，但推理需求爆发可能使 bear case 大幅上调。持有不动，等回调 15%+ 再加仓。",
    sentiment: "bullish",
  },
];

/* ═══════════════════════════════════════════
   RKLB — Rocket Lab
   ═══════════════════════════════════════════ */

const rklbDocs: CompanyDoc[] = [
  {
    id: "rklb-q4fy25-transcript",
    ticker: "RKLB",
    quarter: "Q4 FY2025",
    category: "transcript",
    categoryLabel: "Earnings Call Transcript",
    title: "Q4 FY2025 Earnings Call 全文中英对照",
    date: "2026-02-27",
    summary:
      "Peter Beck 详解 Neutron 进展与 Space Systems 爆发。收入 $436M（+59% Y/Y），Space Systems $305M（+99%），Electron 第 56 次发射成功。Neutron 首飞时间线更新。",
    price: 9.9,
    wordCount: 11800,
    freePreview: [
      {
        paragraphs: [
          { en: "FY2025 was a landmark year. Revenue reached $436 million, up 59% year over year, with Space Systems growing 99% to $305 million. We are no longer just a launch company — Space Systems now represents 70% of our revenue.", cn: "FY2025 是里程碑式的一年。收入达 4.36 亿美元，同比增长 59%，Space Systems 增长 99% 至 3.05 亿美元。我们不再只是一家发射公司 — Space Systems 现占收入的 70%。", highlight: true },
        ],
      },
    ],
    paidContent: [
      {
        heading: "Neutron 进展与时间线",
        paragraphs: [
          { en: "Neutron remains on track for first flight in late 2026. We've completed the engine qualification program, the composite structures are in final assembly, and the launch pad at Wallops is construction-complete.", cn: "Neutron 仍按计划在 2026 年底首飞。我们已完成发动机资质认证、复合材料结构处于总装阶段、Wallops 发射台已建设完成。", highlight: true },
          { en: "The medium-lift market ($10B/year) currently has no reliable commercial competitor to Falcon 9. Electron is too small, Starship is too large. Neutron fills the gap perfectly.", cn: "中型运载市场（100 亿美元/年）目前没有可靠的 Falcon 9 商业竞争者。Electron 太小，Starship 太大。Neutron 完美填补了空白。" },
        ],
      },
    ],
  },
];

const rklbRelated: RelatedContent[] = [];

const rklbDiscussions: Discussion[] = [
  {
    id: "rklb-disc-20260330",
    ticker: "RKLB",
    date: "2026-03-30",
    title: "RKLB 的 Neutron — 太空赛道的关键变量",
    content:
      "太空赛道目前最核心的投资问题是：SpaceX 之外，谁能成为第二个可靠的发射服务商？\n\nRocket Lab 是我唯一的太空持仓。56 次 Electron 发射的飞行遗产无可替代。垂直整合是正确的战略 — Space Systems 收入已占 70%。Neutron 是估值跳跃的催化剂。\n\n风险：Neutron 首飞延迟是最大的执行风险。每延迟一个季度，市场信心就会受损。SpaceX Starship 如果实现低成本发射，可能挤压中型火箭市场。\n\n我的操作：RKLB 在 $25-30 区间逐步建仓，目标持有到 Neutron 首飞验证。",
    sentiment: "bullish",
  },
];

/* ═══════════════════════════════════════════
   Exports
   ═══════════════════════════════════════════ */

const allDocs: CompanyDoc[] = [
  ...hoodDocs,
  ...crclDocs,
  ...coinDocs,
  ...nvdaDocs,
  ...rklbDocs,
];

const allRelated: RelatedContent[] = [
  ...hoodRelated,
  ...crclRelated,
  ...coinRelated,
  ...nvdaRelated,
  ...rklbRelated,
];

const allDiscussions: Discussion[] = [
  ...hoodDiscussions,
  ...crclDiscussions,
  ...coinDiscussions,
  ...nvdaDiscussions,
  ...rklbDiscussions,
];

export function getDocsByTicker(ticker: string): CompanyDoc[] {
  return allDocs
    .filter((d) => d.ticker.toLowerCase() === ticker.toLowerCase())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getDoc(id: string): CompanyDoc | undefined {
  return allDocs.find((d) => d.id === id);
}

export function getRelatedByTicker(ticker: string): RelatedContent[] {
  return allRelated
    .filter((r) => r.ticker.toLowerCase() === ticker.toLowerCase())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getRelatedDoc(id: string): RelatedContent | undefined {
  return allRelated.find((r) => r.id === id);
}

export function getDiscussionsByTicker(ticker: string): Discussion[] {
  return allDiscussions
    .filter((d) => d.ticker.toLowerCase() === ticker.toLowerCase())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllDocIds(): { ticker: string; docId: string }[] {
  return [
    ...allDocs.map((d) => ({ ticker: d.ticker.toLowerCase(), docId: d.id })),
    ...allRelated.map((r) => ({ ticker: r.ticker.toLowerCase(), docId: r.id })),
  ];
}
