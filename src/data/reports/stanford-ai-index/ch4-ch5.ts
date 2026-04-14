import type { ArticleSection } from "@/lib/types";

/* ═══════════════════════════════════════════════════════
 *  Stanford HAI — AI Index Report 2026
 *  Chapter 4: Economy  ·  Chapter 5: Science
 * ═══════════════════════════════════════════════════════ */

// ── Chapter 4: Economy ─────────────────────────────────

export const chapter4Sections: ArticleSection[] = [
  /* ── 4.1 Overview ── */
  {
    heading: "第四章：经济 — 概览",
    paragraphs: [
      {
        en: "In 2025, more money flowed into AI than ever before, and faster. Global corporate AI investment more than doubled, revenue at leading frontier companies grew at historically fast rates. Generative AI reached close to 53% population-level adoption within three years of its mass-market introduction, faster than the personal computer or the internet, and that rapid uptake is translating into real value. U.S. consumer surplus from generative AI reached an estimated $172 billion annually by early 2026. But the benefits of this expansion are not distributed evenly. Investment is heavily concentrated in a small number of countries, companies and deals. In labor markets, demand for AI skills is rising across sectors but the workforce impact is showing signs of falling disproportionately on the youngest workers in AI-exposed occupations. Productivity gains are measurable within narrow tasks, but the evidence at the macro level remains early and mixed. The AI economy is scaling quickly, but how widely and how fairly that growth translates into real economic value is still an open question.",
        cn: "2025 年，流入 AI 领域的资金规模和速度均创历史新高。全球企业 AI 投资总额翻了一倍以上，头部前沿公司的收入以历史罕见的速度增长。生成式 AI 在大规模商用化后仅三年便达到接近 53% 的人口级采用率，速度超过个人电脑和互联网，而这种快速普及正在转化为实际价值。截至 2026 年初，美国消费者从生成式 AI 中获得的年化消费者剩余估计达 1,720 亿美元。但这一扩张的红利并非均匀分布。投资高度集中于少数国家、企业和交易。在劳动力市场上，各行业对 AI 技能的需求持续上升，但劳动力冲击正显现出不成比例地落在 AI 暴露岗位中最年轻劳动者身上的迹象。在特定任务中，生产率提升是可衡量的，但宏观层面的证据仍处于早期且结论不一。AI 经济正在快速扩张，但这种增长能多广泛、多公平地转化为真实的经济价值，仍是一个悬而未决的问题。",
        highlight: true,
      },
    ],
  },

  /* ── 4.2 Investment & Infrastructure ── */
  {
    heading: "4.2 投资与基础设施",
    paragraphs: [
      {
        en: "Global corporate AI investment more than doubled in 2025. Private investment grew fastest at 127.5% and now accounts for 60% of the total. Generative AI led the surge, growing more than 200% and capturing nearly half of all private AI funding. Newly funded AI companies rose 71%, and billion-dollar funding events nearly doubled.",
        cn: "2025 年全球企业 AI 投资总额翻了一倍以上。私募投资增速最快，达 127.5%，目前占总投资的 60%。生成式 AI 引领了这波增长浪潮，增幅超过 200%，占据了私募 AI 资金总额的近一半。新获融资的 AI 企业数量增长 71%，十亿美元级融资事件几乎翻番。",
        highlight: true,
      },
      {
        en: "The United States continues to lead in global private AI investment, committing 23 times more than China. In generative AI, U.S. investment exceeded the combined total of China and Europe by a wide margin. However, private investment figures likely understate China's total AI spending, as government guidance funds have deployed an estimated $184 billion into AI firms between 2000 and 2023.",
        cn: "美国继续在全球私募 AI 投资中保持领先，投入规模是中国的 23 倍。在生成式 AI 领域，美国的投资大幅超过中国和欧洲的总和。然而，私募投资数据很可能低估了中国的 AI 总支出，因为政府引导基金在 2000 年至 2023 年间估计向 AI 企业投入了 1,840 亿美元。",
      },
      {
        en: "AI company revenue is rising at historically fast rates, but compute costs and infrastructure spending are also reaching record levels. Leading frontier companies are reaching meaningful revenue scale in a short period of time, but compute spend has increased significantly year-over-year. Major cloud providers have accelerated capital expenditures, with Google reporting more than $150 billion in annual capex in 2025.",
        cn: "AI 企业收入正以历史罕见的速度增长，但算力成本和基础设施支出也在创历史新高。头部前沿企业在短期内实现了可观的收入规模，但算力支出同比大幅增加。主要云服务商加速了资本支出，其中谷歌 2025 年的年化资本支出超过 1,500 亿美元。",
      },
      {
        en: "The value consumers get from generative AI grew 54% in a year. Estimated U.S. consumer surplus reached $172 billion annually by early 2026, up from $112 billion a year earlier, with the median value per user tripling over the same period. Most of these tools remain free or close to it.",
        cn: "消费者从生成式 AI 中获得的价值在一年内增长了 54%。截至 2026 年初，美国消费者剩余估计达到年化 1,720 亿美元，高于一年前的 1,120 亿美元，同期每位用户的中位价值增长了两倍。这些工具中的大多数仍然免费或接近免费。",
      },
    ],
  },

  /* ── 4.3 Corporate AI Adoption ── */
  {
    heading: "4.3 企业 AI 采用",
    paragraphs: [
      {
        en: "Organizational AI adoption continued to rise in 2025, up to 88% of surveyed organizations, though AI agent use remains early. Generative AI is now used in at least one business function at 70% of organizations, and China and Europe posted the highest year-over-year increases. AI agent deployment was in the single digits across nearly all business functions.",
        cn: "2025 年，组织层面的 AI 采用率持续攀升，在受调查的组织中达到 88%，但 AI 智能体的使用仍处于早期。生成式 AI 目前在 70% 的组织中至少被应用于一项业务功能，中国和欧洲的同比增幅最高。AI 智能体在几乎所有业务功能中的部署率均为个位数。",
      },
      {
        en: "Generative AI reached 53% adoption in three years, faster than the personal computer or the internet. Adoption varies widely across countries and correlates strongly with GDP per capita, though some outpace what income would predict, including Singapore at 61% and the United Arab Emirates at 54%. Despite its lead in AI investment and model development, the United States ranks 24th at 28.3%.",
        cn: "生成式 AI 在三年内达到了 53% 的采用率，速度超过个人电脑和互联网。各国采用率差异巨大，与人均 GDP 高度相关，但部分国家的表现超出收入水平的预期，包括新加坡（61%）和阿联酋（54%）。尽管在 AI 投资和模型开发方面处于领先地位，美国仅以 28.3% 排名第 24 位。",
        highlight: true,
      },
    ],
  },

  /* ── 4.4 就业与劳动力市场 ── */
  {
    heading: "4.4 就业与劳动力市场",
    paragraphs: [
      {
        en: "AI's labor market effects are showing up unevenly, concentrated in hiring pipelines and the youngest workers in exposed occupations. Employment for software developers ages 22 to 25 has fallen nearly 20% from 2024. Employer surveys point to further change ahead, with one-third of respondents expecting workforce reductions over the coming year.",
        cn: "AI 对劳动力市场的影响正不均匀地显现，集中在招聘渠道和 AI 暴露岗位中的最年轻劳动者身上。22 至 25 岁软件开发人员的就业率较 2024 年下降了近 20%。雇主调查显示更大的变化即将到来，三分之一的受访者预计未来一年将减少员工人数。",
        highlight: true,
      },
      {
        en: "One-third of organizations expect AI to reduce their workforce in the coming year, even though large-scale job losses have not yet shown up in overall employment data. Almost half of organizations surveyed expected little to no change. Anticipated reductions are highest in service operations, supply chain, and software engineering.",
        cn: "三分之一的组织预计 AI 将在未来一年内缩减其劳动力，尽管大规模失业尚未在整体就业数据中显现。近一半受调查的组织预计变化不大或没有变化。预期裁减幅度最大的领域是服务运营、供应链和软件工程。",
      },
      {
        en: "Productivity gains from AI are largest in structured, measurable work where outputs are easy to monitor. Studies report gains of 14% to 15% in customer support, 26% in software development, and 50% in marketing output. Gains are smaller in tasks requiring deeper reasoning, and recent evidence raises concerns that heavy AI reliance may carry long-term learning penalties.",
        cn: "AI 带来的生产率提升在结构化、可衡量且产出易于监控的工作中最为显著。研究报告显示，客户支持领域的效率提升为 14% 至 15%，软件开发为 26%，营销产出为 50%。在需要更深层推理的任务中，提升幅度较小，且近期证据引发了对过度依赖 AI 可能带来长期学习能力衰退的担忧。",
      },
    ],
  },

  /* ── 4.5 Robot Deployments ── */
  {
    heading: "4.5 机器人部署",
    paragraphs: [
      {
        en: "China continues to install more industrial robots than the rest of the world combined, and the gap widened in 2024. China accounted for 54% of industrial robots installed globally, up from 51.1% in 2023.",
        cn: "中国继续安装了超过全球其他所有国家总和的工业机器人数量，且这一差距在 2024 年进一步扩大。中国占全球工业机器人安装量的 54%，高于 2023 年的 51.1%。",
      },
    ],
  },
];

// ── Chapter 5: Science ─────────────────────────────────

export const chapter5Sections: ArticleSection[] = [
  /* ── 5.1 AI for Science in 2025 ── */
  {
    heading: "第五章：科学 — AI 与科学研究（2025）",
    paragraphs: [
      {
        en: "The speed with which AI is transforming science is accelerating, with momentum from the 2024 Nobel Prize in Chemistry awarded to Dennis Hassabis, John Jumper, and David Baker for their work on AI-driven protein structure prediction and design, and the operational deployment of AI weather models at the European Centre for Medium-Range Weather. In 2025, AI moved beyond improving individual pipeline steps and toward replacing entire scientific workflows, from weather prediction to multiagent hypothesis generation and experimental design. Still, rigorous benchmarks continue to expose large gaps between plausible output and reliable scientific work, with frontier agents scoring below 20% on paper-scale replication tasks. AI's impact in social sciences has been slower to emerge but with notable exceptions.",
        cn: "AI 变革科学的速度正在加快。这股势头源自 2024 年诺贝尔化学奖——授予 Dennis Hassabis、John Jumper 和 David Baker，以表彰他们在 AI 驱动的蛋白质结构预测和设计方面的工作——以及 AI 天气模型在欧洲中期天气预报中心（ECMWF）的实际业务部署。2025 年，AI 从改进单个流程环节发展到替代整个科学工作流，涵盖天气预测、多智能体假说生成和实验设计。然而，严格的基准测试持续揭示出看似合理的输出与可靠科学研究之间的巨大差距——前沿智能体在论文级复现任务上的得分低于 20%。AI 在社会科学中的影响显现较慢，但也有值得注意的例外。",
        highlight: true,
      },
      {
        en: "AI-related scientific publications are growing year-over-year. Natural sciences reached approximately 80,150 AI publications in 2025, up 26% from 2024. AI now accounts for 5.8%–8.8% of scientific research output depending on the field, up from below 1% in 2010.",
        cn: "AI 相关科学论文数量持续逐年增长。自然科学领域 2025 年的 AI 发表量约达 80,150 篇，较 2024 年增长 26%。视学科不同，AI 目前占科研产出的 5.8% 至 8.8%，而 2010 年这一比例不到 1%。",
      },
      {
        en: "Most AI models for science originate from academic and government institutions, in contrast with the industry-dominated landscape of general-purpose AI. Many AI foundation models for science result from international collaborations. Earth science datasets come entirely from government and academic sources, while industry leads foundation model development in weather and climate.",
        cn: "大多数科学领域的 AI 模型源自学术和政府机构，这与通用 AI 以产业界为主导的格局形成鲜明对比。许多科学领域的 AI 基础模型是国际合作的产物。地球科学数据集完全来自政府和学术来源，而产业界在天气和气候基础模型的开发中处于领先地位。",
      },
    ],
  },

  /* ── 5.2 AI Across Scientific Domains ── */
  {
    heading: "5.2 AI 在各科学领域的应用",
    paragraphs: [
      {
        en: "Frontier models outperform human chemists on average but cannot reproduce published research. On ChemBench, the best models surpass human expert averages across 2,700+ chemistry questions while struggling with basic tasks. On ReplicationBench, frontier models score below 20% on paper-scale replication in astrophysics. On UnivEarth, LLM agents answer earth observation questions with 33% accuracy, and their code fails 58% of the time.",
        cn: "前沿模型在平均水平上超越了人类化学家，但无法复现已发表的研究。在 ChemBench 上，最佳模型在 2,700 多道化学题中超过了人类专家平均水平，但在基础任务上仍力不从心。在 ReplicationBench 上，前沿模型在天体物理学论文级复现任务中的得分低于 20%。在 UnivEarth 上，大语言模型智能体回答地球观测问题的准确率为 33%，其代码的失败率为 58%。",
        highlight: true,
      },
      {
        en: "Astronomy released its first foundation model, first visualization benchmark, and a 100TB training dataset in 2025, signaling a field-wide shift toward AI infrastructure. AION-1, trained on over 200 million celestial objects from 5 major surveys, is the first astronomy foundation model. AstroVisBench introduced the first benchmark for LLM scientific computing and visualization in the field.",
        cn: "天文学在 2025 年发布了其首个基础模型、首个可视化基准测试和一个 100TB 的训练数据集，标志着该领域全面转向 AI 基础设施建设。AION-1 基于 5 项主要巡天观测中的超过 2 亿个天体对象训练而成，是天文学的首个基础模型。AstroVisBench 是该领域首个面向大语言模型科学计算和可视化的基准测试。",
      },
      {
        en: "An AI system ran a full weather forecasting pipeline end-to-end for the first time in 2025. Aardvark Weather replaced the traditional numerical prediction pipeline with a single ML system, and multiple AI weather models reached operational deployment. FourCastNet 3 generates a 60-day global forecast in under 4 minutes, running 8 to 60 times faster than prior approaches.",
        cn: "2025 年，AI 系统首次端到端运行了完整的天气预报流程。Aardvark Weather 以单一机器学习系统取代了传统的数值预报流程，多个 AI 天气模型实现了业务化部署。FourCastNet 3 能在 4 分钟内生成 60 天的全球预报，速度比此前方法快 8 至 60 倍。",
        highlight: true,
      },
    ],
  },

  /* ── 5.3 AI Agents & Tools for Science Workflows ── */
  {
    heading: "5.3 AI 智能体与科学工作流工具",
    paragraphs: [
      {
        en: "On end-to-end scientific research tasks, the best AI agents score roughly half of what PhD experts achieve. On PaperArena, the best agent reaches 38.8% accuracy versus a PhD expert baseline of 83.5%. On BixBench, frontier models achieve roughly 17% accuracy on real-world bioinformatics analysis.",
        cn: "在端到端科学研究任务中，最优秀的 AI 智能体得分大约为博士级专家的一半。在 PaperArena 上，最佳智能体准确率为 38.8%，而博士专家基线为 83.5%。在 BixBench 上，前沿模型在真实世界生物信息学分析中的准确率约为 17%。",
      },
      {
        en: "The first fully AI-generated paper was accepted at a peer-reviewed workshop in 2025, but the list of experimentally confirmed AI discoveries remains short. Sakana's AI Scientist-v2 produced a paper accepted at an ICLR workshop without human-coded templates. Google's AI Co-Scientist was validated in three biomedical areas.",
        cn: "2025 年，首篇完全由 AI 生成的论文被同行评审的学术研讨会接收，但经实验证实的 AI 发现清单仍然很短。Sakana 的 AI Scientist-v2 在无需人工编写模板的情况下生成了一篇被 ICLR 研讨会接收的论文。谷歌的 AI Co-Scientist 在三个生物医学领域得到了验证。",
      },
    ],
  },
];
