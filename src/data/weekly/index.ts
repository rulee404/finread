export interface WeeklyPost {
  slug: string;
  title: string;
  date: string;
  number: number;
  summary: string;
  tickers: string[];
  sections: {
    heading: string;
    content: string;
  }[];
  quote?: {
    text: string;
    author: string;
  };
}

const posts: WeeklyPost[] = [
  {
    slug: "weekly-12",
    title: "稳定币法案推进 · HOOD预测市场扩展 · COIN费率压缩",
    date: "2026-04-06",
    number: 12,
    summary:
      "本周美国众议院推进Clarity Act，三大DeFi标的均受影响。HOOD宣布预测市场扩展至体育类别，COIN Q1交易量数据初现下滑信号，CRCL的CPN年化TPV突破$57亿。",
    tickers: ["HOOD", "COIN", "CRCL"],
    sections: [
      {
        heading: "📌 本周核心事件",
        content:
          "Clarity Act 在众议院金融服务委员会通过——这是继 GENIUS Act（稳定币）之后，美国数字资产领域第二个重要法案。\n\n该法案将 SEC 和 CFTC 的管辖边界正式厘清：完全去中心化的数字资产归 CFTC 管辖，其余归 SEC。对于 Coinbase 而言，这意味着其现有的「Everything Exchange」战略可以更明确地在合规框架内推进期货、预测市场等新产品。",
      },
      {
        heading: "HOOD · Robinhood",
        content:
          "预测市场扩展至体育类别：Robinhood 通过 Rothera JV 推出体育事件合约，包括 NBA、NFL 和足球。这直接扩大了 Event Contracts 的 TAM，FY2025 该品类已贡献 $126M 收入。\n\nGold Card 申请量持续超预期：3%全品类返现的信用卡产品继续成为获客利器，管理层在 3 月投资者日上将其定位为「最强用户漏斗」。\n\n关注点：SBC 仍高达 $618M（FY2025），占 OpEx 26%。2026 年 +18% 的费用增长指引意味着利润率扩张需要收入端超额增长。",
      },
      {
        heading: "COIN · Coinbase",
        content:
          "Q1 交易量信号偏弱：管理层在 Q4 电话会中给出 Q1 Transaction Revenue 约 $420M（截至 2/10），暗示加密交易热度从 Q4 高点回落。\n\n积极面：S&S Revenue 指引 $550-630M，其中 Stablecoin Revenue 受益于 USDC 余额增长。Coinbase One 订阅用户持续增长，是「周期中最稳定的收入线」。\n\nBase L2 生态：TVL 突破新高，AI Agent 交互量快速增长，Sequencer Fee 成为新的收入引擎。",
      },
      {
        heading: "CRCL · Circle",
        content:
          "CPN 数据持续向好：年化 TPV 达 $57 亿（+68%），55 家金融机构入网。管理层表示「规模化后将显著变现」，但 FY2026 Other Revenue 指引仅 $150-170M。\n\nIPO SBC 冲击消退中：FY2025 GAAP 亏损 $70M 主要受 IPO 相关 SBC $845M 影响，剔除后 Adj EBITDA 达 $582M（+104%）。\n\nUSDC 40% CAGR：管理层给出多年 USDC 流通量 40% CAGR 预期——如果实现，FY2028 流通量将超 $2000 亿。",
      },
      {
        heading: "💡 本周思考",
        content:
          "三家公司的共同主题：「监管清晰化 → 产品创新加速 → 非交易收入占比提升」。\n\n从建仓角度看：COIN 是加密beta+平台alpha的组合，HOOD 是传统金融到加密的桥梁，CRCL 是稳定币基础设施的纯度最高的标的。\n\n如果只能选一个：在当前位置，CRCL 的「USDC 增长 → 非利息收入爆发」的故事最清晰，但需要耐心等待 CPN 和 Arc 的变现兑现。",
      },
    ],
    quote: {
      text: "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "中国谚语",
    },
  },
  {
    slug: "weekly-8",
    title: "Q4财报季深度复盘 · Rule of 40 解读 · 预测市场$126M",
    date: "2026-03-09",
    number: 8,
    summary:
      "HOOD Q4财报亮眼，Rule of 40达到102，预测市场成为增长最快品类。本周深度拆分这些数字的含义。",
    tickers: ["HOOD"],
    sections: [
      {
        heading: "📌 本周核心",
        content:
          "Robinhood 公布 Q4/FY2025 财报：收入 $1.01B（+115% Y/Y），全年收入 $3.96B（+58%），Adj EBITDA $1.76B（+157%）。Rule of 40 达到 102。",
      },
      {
        heading: "Rule of 40 为什么重要",
        content:
          "Rule of 40 = 收入增长率 + 利润率。HOOD 的 102 = 58%（收入增长）+ 44%（EBITDA margin）。\n\n作为对比，大多数金融科技公司在 30-60 之间。超过 80 的公司通常享有显著的估值溢价。\n\n关键问题：58% 的增长率中有多少是周期性的（加密+预测市场）vs 结构性的（Gold+国际化）？如果加密交易回归均值，Rule of 40 是否还能维持 >60？",
      },
    ],
  },
  {
    slug: "weekly-5",
    title: "三大经纪平台对比 · HOOD vs COIN vs IBKR",
    date: "2026-02-16",
    number: 5,
    summary:
      "如果你想投资「万物上链」主题，HOOD、COIN、IBKR 三个平台各有什么优劣？本周做一个系统性对比。",
    tickers: ["HOOD", "COIN"],
    sections: [
      {
        heading: "📌 对比框架",
        content:
          "从五个维度对比：收入结构、用户基数、产品宽度、国际化进度、估值水平。\n\n结论先行：COIN 是纯加密beta最高的标的，HOOD 是增长最快的「传统→加密」桥梁，IBKR 是最成熟但增长最慢的。",
      },
    ],
  },
];

export function getAllPosts(): WeeklyPost[] {
  return posts.sort((a, b) => b.number - a.number);
}

export function getPost(slug: string): WeeklyPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}
