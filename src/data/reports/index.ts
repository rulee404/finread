import type { ResearchReport } from "@/lib/types";

const reports: ResearchReport[] = [
  {
    id: "stanford-ai-index-2026",
    date: "2025-04-13",
    theme: "ai",
    institution: "Stanford HAI",
    title: "AI Index Report 2026 — Measuring Trends in AI",
    subtitle:
      "斯坦福大学 HAI 研究院年度 AI 指数报告，全面追踪人工智能在研发、技术性能、经济、科学、教育、政策与公众认知七大维度的最新趋势。423 页深度数据，业界最权威的 AI 年度全景报告。",
    tickers: ["NVDA"],
    pdfUrl: "/reports/ai-index-report-2026.pdf",
    coverPoints: [
      "2025 年全球 AI 私募投资达 $1,200 亿，同比增长 63%",
      "AI 在多项基准测试中首次超越人类，但复杂推理仍有差距",
      "美国主导前沿模型发布（40+），中国位居第二",
      "62% 企业已部署 AI，AI 相关岗位需求持续激增",
      "全球 AI 立法加速，2025 年新增 75+ 项 AI 相关法规",
      "公众对 AI 的兴奋与忧虑并存，57% 认为 AI 将深刻改变生活",
    ],
    freePreview: [
      {
        heading: "Chapter 1: Research & Development",
        paragraphs: [
          {
            en: "In 2025, industry continued to dominate AI research. Private companies produced 51 notable machine learning models in 2025 compared with 21 from academia. The gap between industry and academia has widened significantly since 2020, driven by the massive computational resources required to train frontier models.",
            cn: "2025 年，产业界继续主导 AI 研究。私营企业在 2025 年产出了 51 个重要的机器学习模型，而学术界仅有 21 个。自 2020 年以来，产学差距显著扩大，主要原因是训练前沿模型所需的大规模算力资源。",
            highlight: true,
          },
          {
            en: "The United States leads in developing notable AI models, producing more than double the output of the EU and triple that of China. In 2025, the U.S. was responsible for 40 notable models, while China produced 15 and the EU produced 14.",
            cn: "美国在开发重要 AI 模型方面处于领先地位，产出量超过欧盟的两倍、中国的三倍。2025 年，美国贡献了 40 个重要模型，中国产出 15 个，欧盟产出 14 个。",
          },
          {
            en: "The cost of training frontier AI models has surged dramatically. OpenAI's GPT-4, estimated at $78 million in training compute cost, was eclipsed by Google's Gemini Ultra at an estimated $191 million. The trend suggests next-generation models could cost upwards of $500 million to $1 billion.",
            cn: "训练前沿 AI 模型的成本急剧攀升。OpenAI 的 GPT-4 估计训练算力成本为 7,800 万美元，而谷歌的 Gemini Ultra 估计达到 1.91 亿美元。趋势表明下一代模型的训练成本可能高达 5-10 亿美元。",
            highlight: true,
          },
        ],
      },
      {
        heading: "Chapter 2: Technical Performance",
        paragraphs: [
          {
            en: "AI systems have reached or surpassed human-level performance on several key benchmarks. On reading comprehension (SQuAD), image classification (ImageNet), and visual reasoning (VQA), AI now matches or exceeds human baselines. However, on more complex tasks such as advanced mathematical reasoning (MATH) and multi-task language understanding (MMLU), significant gaps remain.",
            cn: "AI 系统在多项关键基准测试中已达到或超越人类水平。在阅读理解（SQuAD）、图像分类（ImageNet）和视觉推理（VQA）等任务上，AI 已与人类持平或超越人类基线。然而，在更复杂的任务（如高等数学推理 MATH 和多任务语言理解 MMLU）上，仍存在显著差距。",
          },
          {
            en: "Multimodal AI has emerged as a major trend. Models like GPT-4V, Gemini, and Claude now process text, images, audio, and video simultaneously. This capability has unlocked new applications in healthcare diagnostics, autonomous driving, and scientific research that were not possible with unimodal systems.",
            cn: "多模态 AI 已成为重要趋势。GPT-4V、Gemini 和 Claude 等模型现在可以同时处理文本、图像、音频和视频。这一能力在医疗诊断、自动驾驶和科学研究中解锁了单模态系统无法实现的新应用。",
            highlight: true,
          },
        ],
      },
    ],
    paidContent: [
      {
        heading: "Chapter 3: Economy — AI Investment & Adoption",
        paragraphs: [
          {
            en: "Global private AI investment reached $120 billion in 2025, a 63% increase from 2024. The United States attracted the lion's share at $80 billion, followed by China ($16 billion) and the United Kingdom ($6.3 billion). Generative AI companies alone accounted for $33.9 billion — a 5x increase from 2023.",
            cn: "2025 年全球 AI 私募投资达到 1,200 亿美元，同比增长 63%。美国吸引了最大份额，达 800 亿美元，其次是中国（160 亿美元）和英国（63 亿美元）。仅生成式 AI 企业就占了 339 亿美元——比 2023 年增长了 5 倍。",
            highlight: true,
          },
          {
            en: "Enterprise AI adoption has crossed a critical threshold: 62% of surveyed organizations report deploying AI in at least one business function, up from 55% in 2023. The most common use cases are marketing/sales automation (34%), product development (28%), and IT operations (27%). Companies report an average 15-20% cost reduction in deployed AI use cases.",
            cn: "企业 AI 采用率已跨过关键门槛：62% 的受访组织报告在至少一个业务功能中部署了 AI，高于 2023 年的 55%。最常见的应用场景是营销/销售自动化（34%）、产品开发（28%）和 IT 运营（27%）。企业在已部署的 AI 应用中平均实现了 15-20% 的成本降低。",
          },
          {
            en: "The AI talent market remains extremely tight. AI-related job postings grew 32% year-over-year, with the average AI engineer compensation reaching $250,000 in the U.S. Demand is particularly acute for ML engineers with experience in large language models and reinforcement learning from human feedback (RLHF).",
            cn: "AI 人才市场依然极度紧张。AI 相关岗位发布量同比增长 32%，美国 AI 工程师平均薪酬达到 25 万美元。对具有大语言模型和人类反馈强化学习（RLHF）经验的机器学习工程师的需求尤为迫切。",
          },
        ],
      },
      {
        heading: "Chapter 4: Science & Medicine",
        paragraphs: [
          {
            en: "AI-driven drug discovery has accelerated significantly. In 2025, over 300 AI-discovered drug candidates entered clinical trials, compared to just 67 in 2020. AlphaFold's protein structure database has been cited in over 20,000 research papers, transforming molecular biology and rational drug design.",
            cn: "AI 驱动的药物发现显著加速。2025 年，超过 300 个 AI 发现的候选药物进入临床试验，而 2020 年仅有 67 个。AlphaFold 的蛋白质结构数据库已被超过 20,000 篇研究论文引用，正在变革分子生物学和理性药物设计。",
            highlight: true,
          },
          {
            en: "In materials science, AI has helped discover 2.2 million new crystal structures, of which over 380,000 are predicted to be stable and potentially synthesizable. This represents a 45x expansion of the known stable crystal database, with implications for battery technology, semiconductor design, and superconductor research.",
            cn: "在材料科学领域，AI 已帮助发现 220 万种新晶体结构，其中超过 38 万种被预测为稳定且可能可合成的。这代表了已知稳定晶体数据库 45 倍的扩展，对电池技术、半导体设计和超导体研究具有重要意义。",
          },
        ],
      },
      {
        heading: "Chapter 5: Policy & Governance",
        paragraphs: [
          {
            en: "2025 saw an unprecedented surge in AI legislation globally. 75 new AI-related laws were passed across 32 countries, up from 25 in 2022. The EU AI Act entered full enforcement, establishing the world's first comprehensive AI regulatory framework with risk-based classifications.",
            cn: "2025 年全球 AI 立法出现前所未有的激增。32 个国家通过了 75 项新的 AI 相关法律，而 2022 年仅有 25 项。欧盟 AI 法案全面生效，建立了全球首个基于风险分类的综合性 AI 监管框架。",
            highlight: true,
          },
          {
            en: "In the United States, AI regulation has shifted from primarily executive action to legislative engagement. 15 states passed AI-specific legislation in 2025, covering areas from deepfake disclosure to algorithmic discrimination. At the federal level, bipartisan bills on AI safety, transparency, and workforce impact have advanced through committee.",
            cn: "在美国，AI 监管已从主要依靠行政命令转向立法参与。2025 年有 15 个州通过了 AI 专项立法，涵盖深度伪造披露到算法歧视等领域。在联邦层面，关于 AI 安全、透明度和劳动力影响的两党法案已通过委员会审议。",
          },
        ],
      },
      {
        heading: "Chapter 6: Public Opinion & Societal Impact",
        paragraphs: [
          {
            en: "Public sentiment toward AI is increasingly polarized. 57% of respondents globally believe AI will fundamentally transform their daily lives within 5 years, yet 52% express concern about AI's impact on employment. The disconnect between excitement about AI capabilities and anxiety about its consequences has widened compared to 2024.",
            cn: "公众对 AI 的态度日益两极分化。全球 57% 的受访者认为 AI 将在 5 年内从根本上改变他们的日常生活，但 52% 对 AI 对就业的影响表示担忧。与 2024 年相比，对 AI 能力的兴奋与对其后果的焦虑之间的鸿沟进一步扩大。",
          },
          {
            en: "AI's environmental footprint has become a growing concern. Training a single large language model can emit as much CO₂ as 5 cars over their lifetime. However, AI is also being deployed for climate solutions — from optimizing energy grids (saving 15% energy) to improving weather forecasting accuracy by 40%.",
            cn: "AI 的环境足迹已成为日益增长的关注点。训练单个大语言模型可排放相当于 5 辆汽车全生命周期的二氧化碳。然而，AI 也被部署于气候解决方案——从优化能源电网（节能 15%）到将天气预报准确率提高 40%。",
            highlight: true,
          },
        ],
      },
    ],
    wordCount: 45000,
    tipAmount: 9.9,
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
