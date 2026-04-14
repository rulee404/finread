import type { ResearchReport } from "@/lib/types";
import {
  stanfordAISummaryCards,
  stanfordAIFreePreview,
  stanfordAIPaidContent,
} from "./stanford-ai-index";

const reports: ResearchReport[] = [
  {
    id: "stanford-ai-index-2026",
    date: "2025-04-13",
    theme: "ai",
    institution: "Stanford HAI",
    title: "AI Index Report 2026 — Measuring Trends in AI",
    subtitle:
      "斯坦福大学 HAI 研究院年度 AI 指数报告（423 页），全文中英双语逐段对照翻译。涵盖研发、技术性能、负责任 AI、经济、科学、医学、教育、政策治理与公众舆论九大维度。",
    tickers: ["NVDA"],
    pdfUrl: "/reports/ai-index-report-2026.pdf",
    summaryCards: stanfordAISummaryCards,
    coverPoints: [
      "2025 年全球 AI 私募投资达 $2,859 亿，同比增长 127.5%",
      "产业界产出 90%+ 前沿模型，SWE-bench 编程基准一年飙升至接近人类基线",
      "中美 AI 模型性能差距实质性消除，DeepSeek-R1 曾一度追平美国最优模型",
      "生成式 AI 三年内达 53% 人口级采用率，超越 PC 和互联网",
      "AI 事故 362 起（+55% YoY），负责任 AI 基准报告不一致",
      "全球 AI 立法加速：32 国新增 75 项法规，欧盟 AI 法案全面生效",
      "AI 药物发现提速：300+ 候选药物进入临床，虚拟细胞模型兴起",
      "22-25 岁软件开发者就业率下降近 20%，AI 对年轻劳动者冲击最大",
    ],
    freePreview: stanfordAIFreePreview,
    paidContent: stanfordAIPaidContent,
    wordCount: 120000,
    tipAmount: 19.9,
  },
  {
    id: "ms-nvda-ai-infra-2025",
    date: "2025-04-08",
    theme: "ai",
    institution: "Morgan Stanley",
    title: "NVIDIA: AI Infrastructure Spending Outlook — Still Early Innings",
    subtitle:
      "大摩对 NVIDIA 数据中心业务的深度分析，上调目标价至 $180，认为 AI 基础设施投入周期远未结束。",
    tickers: ["NVDA"],
    coverPoints: [
      "数据中心收入 FY2026E $200B+，同比增长 55%",
      "Blackwell 架构供不应求，H200 → B200 过渡中产能利用率接近 100%",
      "AI Agent 推理需求将驱动下一波增长，边际利润率持续扩张",
      "风险提示：客户自研芯片进展、中国出口管制升级",
    ],
    freePreview: [
      {
        heading: "Executive Summary",
        paragraphs: [
          {
            en: "We reiterate our Overweight rating on NVIDIA with a revised price target of $180, reflecting our updated FY2026 revenue estimates. The AI infrastructure spending cycle remains in early innings, with hyperscaler capex budgets continuing to expand.",
            cn: "我们维持对英伟达的增持评级，将目标价上调至 $180，反映了我们更新后的 FY2026 收入预测。AI 基础设施支出周期仍处于早期阶段，超大规模云服务商的资本支出预算持续扩大。",
            highlight: true,
          },
          {
            en: "Key drivers include: (1) the Blackwell architecture ramp, which we expect to contribute $80B+ in data center revenue in FY2026; (2) emerging inference demand from AI agents and enterprise deployments; and (3) continued GPU shortage dynamics that support pricing power.",
            cn: "主要驱动因素包括：(1) Blackwell 架构放量，我们预计将在 FY2026 贡献 800 亿美元以上的数据中心收入；(2) 来自 AI Agent 和企业部署的新兴推理需求；(3) GPU 持续供不应求支撑定价能力。",
          },
        ],
      },
    ],
    paidContent: [
      {
        heading: "Revenue Model Deep Dive",
        paragraphs: [
          {
            en: "Our bottom-up model suggests NVIDIA's data center segment will reach $205B in FY2026, driven by a 60/40 split between training and inference workloads. The Blackwell B200 GPU, shipping in volume since Q3 FY2026, commands a 40% ASP premium over H100.",
            cn: "我们的自下而上模型显示，英伟达数据中心部门将在 FY2026 达到 2050 亿美元，由训练和推理工作负载的 60/40 分配驱动。自 FY2026 Q3 起批量出货的 Blackwell B200 GPU，平均售价较 H100 有 40% 的溢价。",
            highlight: true,
          },
          {
            en: "We model gross margins of 78.5% for FY2026, expanding from 75.0% in FY2025, primarily driven by favorable product mix shift toward high-end Blackwell configurations (GB200 NVL72 racks).",
            cn: "我们预测 FY2026 毛利率为 78.5%，较 FY2025 的 75.0% 提升，主要由产品组合向高端 Blackwell 配置（GB200 NVL72 机架）转移驱动。",
          },
        ],
      },
      {
        heading: "Competitive Landscape & Risks",
        paragraphs: [
          {
            en: "The primary risk to our thesis remains the pace of custom silicon development by hyperscalers. Google's TPUv6, Amazon's Trainium 3, and Microsoft's Maia 2 are all targeting 2026 volume production. However, we estimate custom chips will capture only 15-20% of total AI accelerator spend by 2027.",
            cn: "对我们论点的主要风险仍然是超大规模云服务商自研芯片的开发速度。谷歌的 TPUv6、亚马逊的 Trainium 3 和微软的 Maia 2 都瞄准 2026 年量产。然而，我们估计到 2027 年自研芯片将仅占 AI 加速器总支出的 15-20%。",
          },
          {
            en: "China export controls represent an ongoing overhang. We estimate NVIDIA's China data center revenue has declined from ~25% of segment revenue in FY2023 to ~8% in FY2025, largely priced into the stock.",
            cn: "中国出口管制构成持续的不确定性。我们估计英伟达的中国数据中心收入已从 FY2023 占部门收入约 25% 下降至 FY2025 的约 8%，这在很大程度上已反映在股价中。",
          },
        ],
      },
    ],
    wordCount: 8500,
    tipAmount: 9.9,
  },
  {
    id: "gs-defi-stablecoin-2025",
    date: "2025-03-22",
    theme: "defi",
    institution: "Goldman Sachs",
    title: "Stablecoins & Digital Payments: The Bridge Between TradFi and DeFi",
    subtitle:
      "高盛首次全面覆盖稳定币生态，认为 2025 年稳定币立法将成为催化剂，USDC 发行方 Circle 是最大受益者。",
    tickers: ["CRCL", "COIN"],
    coverPoints: [
      "稳定币市场总量将从 $160B 增长至 $500B+（2027E）",
      "GENIUS Act 通过概率 >70%，为行业提供监管确定性",
      "Circle（CRCL）：首次覆盖，买入评级，目标价 $45",
      "Coinbase（COIN）：USDC 托管收入被低估，上调至 $280",
    ],
    freePreview: [
      {
        heading: "Investment Thesis",
        paragraphs: [
          {
            en: "Stablecoins represent the most immediate bridge between traditional finance and decentralized finance. With bipartisan US legislation (GENIUS Act) likely to pass in 2025, we see a regulatory catalyst that could unlock institutional adoption at scale.",
            cn: "稳定币代表了传统金融与去中心化金融之间最直接的桥梁。随着美国两党稳定币立法（GENIUS Act）有望在 2025 年通过，我们认为这一监管催化剂将大规模释放机构采用。",
            highlight: true,
          },
          {
            en: "We initiate coverage on Circle (CRCL) with a Buy rating and $45 price target, based on a 30x FY2026E P/E. USDC is the only major stablecoin with full regulatory compliance positioning, giving Circle a structural advantage as legislation formalizes reserve and audit requirements.",
            cn: "我们首次覆盖 Circle（CRCL），给予买入评级和 $45 目标价，基于 30 倍 FY2026E 市盈率。USDC 是唯一具备完整合规定位的主要稳定币，随着立法正式确立储备金和审计要求，Circle 将拥有结构性优势。",
          },
        ],
      },
    ],
    paidContent: [
      {
        heading: "Market Sizing & Growth Projections",
        paragraphs: [
          {
            en: "Total stablecoin market capitalization has grown from $28B (Jan 2021) to $160B (Mar 2025). We project this to reach $500B+ by 2027, driven by: (1) cross-border payment adoption, (2) on-chain treasury management by corporates, and (3) emerging market dollar demand.",
            cn: "稳定币总市值已从 280 亿美元（2021年1月）增长至 1600 亿美元（2025年3月）。我们预计到 2027 年将达到 5000 亿美元以上，驱动因素包括：(1) 跨境支付采用，(2) 企业链上资金管理，(3) 新兴市场美元需求。",
            highlight: true,
          },
          {
            en: "USDC's market share has recovered from a trough of 18% (post-SVB, Mar 2023) to 28% currently. We model USDC reaching 35% share by 2027 as regulatory clarity favors compliant issuers. Revenue scales linearly with AUM at current Treasury yields.",
            cn: "USDC 的市场份额已从低谷的 18%（SVB 事件后，2023年3月）恢复至目前的 28%。我们预测随着监管明确有利于合规发行方，USDC 到 2027 年将达到 35% 的份额。在当前国债收益率水平下，收入随 AUM 线性增长。",
          },
        ],
      },
      {
        heading: "Coinbase: USDC Revenue Underappreciated",
        paragraphs: [
          {
            en: "Coinbase's USDC-related revenue (custody fees + interest sharing) contributed $910M in FY2024, representing 22% of net revenue. We model this growing to $1.8B by FY2026 as USDC supply doubles. The market is underpricing this high-margin, recurring revenue stream.",
            cn: "Coinbase 的 USDC 相关收入（托管费 + 利息分成）在 FY2024 贡献了 9.1 亿美元，占净收入的 22%。我们预测随着 USDC 供应翻倍，到 FY2026 将增长至 18 亿美元。市场低估了这一高利润率的经常性收入来源。",
          },
        ],
      },
    ],
    wordCount: 12000,
    tipAmount: 9.9,
  },
  {
    id: "ubs-rklb-space-2025",
    date: "2025-03-15",
    theme: "space",
    institution: "UBS",
    title: "Rocket Lab: The Vertically Integrated Space Platform Play",
    subtitle:
      "瑞银深度报告，首次覆盖 Rocket Lab，买入评级目标价 $32，认为 Neutron 火箭 + 卫星零部件双轮驱动增长。",
    tickers: ["RKLB"],
    coverPoints: [
      "Electron 火箭发射成功率 >97%，全球商业发射市场份额第二",
      "Neutron 中型火箭 2026 年首飞，TAM 扩大 10 倍",
      "Space Systems 部门收入 FY2025E $300M+，同比增 65%",
      "目标价 $32，基于 2027E 15x EV/Revenue",
    ],
    freePreview: [
      {
        heading: "Why Rocket Lab",
        paragraphs: [
          {
            en: "Rocket Lab (RKLB) is the only publicly traded company offering end-to-end space services — from launch (Electron, Neutron) to satellite components (solar panels, reaction wheels, star trackers) to on-orbit management. This vertical integration creates a compounding advantage that we believe the market undervalues.",
            cn: "Rocket Lab（RKLB）是唯一一家提供端到端太空服务的上市公司——从发射（Electron、Neutron）到卫星零部件（太阳能面板、反作用轮、星敏感器）再到在轨管理。这种垂直整合创造了我们认为市场低估的复利优势。",
            highlight: true,
          },
          {
            en: "We initiate coverage with a Buy rating and $32 price target. Our thesis is built on three pillars: (1) Electron's market leadership in small launch, (2) Neutron's transformative potential in the medium launch market, and (3) the underappreciated Space Systems business approaching profitability.",
            cn: "我们首次覆盖，给予买入评级和 $32 目标价。我们的论点基于三大支柱：(1) Electron 在小型发射市场的领导地位，(2) Neutron 在中型发射市场的变革性潜力，(3) 即将盈利的被低估的 Space Systems 业务。",
          },
        ],
      },
    ],
    paidContent: [
      {
        heading: "Neutron Economics",
        paragraphs: [
          {
            en: "Neutron targets the $10B+ medium-launch market currently dominated by SpaceX's Falcon 9. With a designed payload capacity of 13,000 kg to LEO and target launch price of $50-55M, Neutron offers 30-40% cost savings vs. Falcon 9 for dedicated missions. First flight is on track for mid-2026.",
            cn: "Neutron 瞄准的是目前由 SpaceX 猎鹰 9 号主导的 100 亿美元以上中型发射市场。设计运载能力为 13,000 公斤至 LEO，目标发射价格为 5000-5500 万美元，Neutron 为专用任务提供比猎鹰 9 号低 30-40% 的成本。首飞预计 2026 年中。",
            highlight: true,
          },
          {
            en: "We model Neutron reaching a 12-launch annual cadence by 2028, generating $600-660M in launch revenue alone. Combined with Space Systems growth, we project total company revenue of $1.4B by FY2028, with positive EBITDA by FY2027.",
            cn: "我们预测 Neutron 到 2028 年将达到年 12 次发射频率，仅发射收入就将产生 6-6.6 亿美元。结合 Space Systems 的增长，我们预计公司总收入到 FY2028 将达到 14 亿美元，FY2027 实现正 EBITDA。",
          },
        ],
      },
      {
        heading: "Space Systems: The Hidden Gem",
        paragraphs: [
          {
            en: "Rocket Lab's Space Systems segment — which designs and manufactures satellite components, separation systems, and software — is frequently overlooked. This business generated $180M in FY2024 revenue (+80% YoY) with improving gross margins (38% in Q4 vs. 28% in Q1). Key customers include NASA, the US Department of Defense, and commercial constellation operators.",
            cn: "Rocket Lab 的 Space Systems 部门——设计和制造卫星零部件、分离系统和软件——经常被忽视。该业务在 FY2024 产生了 1.8 亿美元收入（同比 +80%），毛利率持续改善（Q4 为 38%，Q1 为 28%）。主要客户包括 NASA、美国国防部和商业星座运营商。",
          },
        ],
      },
    ],
    wordCount: 9800,
    tipAmount: 9.9,
  },
];

export function getAllReports(): ResearchReport[] {
  return reports.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getReport(id: string): ResearchReport | undefined {
  return reports.find((r) => r.id === id);
}

export function getReportsByTheme(
  theme: ResearchReport["theme"],
): ResearchReport[] {
  return reports
    .filter((r) => r.theme === theme)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
