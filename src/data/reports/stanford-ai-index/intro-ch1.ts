import type { ArticleSection } from "@/lib/types";

/* ═══════════════════════════════════════════════════════
   Stanford HAI — AI Index Report 2026
   Introduction, Top Takeaways, and Chapter 1: R&D
   ═══════════════════════════════════════════════════════ */

// ── Introduction ──────────────────────────────────────

export const introSections: ArticleSection[] = [
  {
    heading: "导言：AI Index 第九版前言",
    paragraphs: [
      {
        en: "Welcome to the ninth edition of the AI Index report. As AI continues to advance rapidly, the question becomes whether the systems built around it can keep up. Governance frameworks, evaluation methods, education systems, and the data infrastructure needed to track AI's impact are struggling to match the pace of the technology itself. That gap—between what AI can do and how prepared we are to manage it—runs through every chapter of this year's report. New in this edition, the report tracks how AI is being tested more ambitiously across reasoning, safety, and real-world task execution, and why those measurements are increasingly difficult to rely on. It also features new estimates of generative AI's economic value alongside emerging evidence of its labor market effects, an analytical framework on AI sovereignty, and a science chapter developed in collaboration with Schmidt Sciences. For the first time, the report features standalone chapters on AI in science and AI in medicine, reflecting AI's growing impact across these two domains.",
        cn: "欢迎阅读第九版 AI Index 报告。随着人工智能持续快速发展，一个关键问题浮现：围绕 AI 构建的各项体系能否跟上它的步伐。治理框架、评估方法、教育体系以及追踪 AI 影响所需的数据基础设施，都在艰难地匹配技术本身的演进速度。这一差距——AI 能做什么与我们准备好管理它的程度之间的鸿沟——贯穿于今年报告的每一个章节。本版新增内容追踪了 AI 在推理、安全和现实世界任务执行方面如何接受更为雄心勃勃的测试，以及为何这些测量结果越来越难以依赖。报告还新增了生成式 AI 经济价值的估算及其劳动力市场影响的新证据、关于 AI 主权的分析框架，以及与施密特科学（Schmidt Sciences）合作开发的科学章节。报告首次设立了 AI 在科学和 AI 在医学的独立章节，反映出 AI 在这两个领域日益增长的影响力。",
        highlight: true,
      },
      {
        en: "For close to a decade, the AI Index has worked to bring reliable global data to a field that is evolving faster than most efforts to measure it. The report equips policymakers, researchers, executives, journalists, and the public with the necessary evidence to make informed decisions about AI. As the technology moves deeper into classrooms, clinics, and legislatures—and reshapes how people work, learn, and govern—the cost of incomplete data continues to rise.",
        cn: "近十年来，AI Index 致力于为这个演进速度超过大多数衡量努力的领域提供可靠的全球数据。本报告为政策制定者、研究人员、企业高管、记者和公众提供做出明智 AI 决策所需的证据。随着技术深入课堂、诊所和立法机构——重塑人们工作、学习和治理的方式——数据不完整的代价持续上升。",
      },
      {
        en: "In a field where much data is produced by organizations with a stake in the technology's success, the demand for neutral and rigorous measurement continues to grow. The AI Index remains independent and focused on revealing the long-term patterns underneath the headlines. The report is relied on by governments, research institutions, and companies around the world, and referenced by media outlets and in academic papers.",
        cn: "在一个大量数据由与技术成功利害相关的组织产出的领域中，对中立且严谨的测量需求持续增长。AI Index 保持独立性，专注于揭示新闻标题背后的长期趋势。本报告受到世界各国政府、研究机构和企业的依赖，并被媒体和学术论文广泛引用。",
      },
      {
        en: "The pages that follow offer the most comprehensive, independently sourced picture of AI's trajectory that is available. They also make clear where that picture remains incomplete—because what we cannot yet measure matters just as much as what we can.",
        cn: "接下来的篇章提供了目前可获得的最全面、来源独立的 AI 发展轨迹图景。它们也清楚地表明该图景在哪些方面仍不完整——因为我们尚无法衡量的部分与已能衡量的部分同等重要。",
        highlight: true,
      },
    ],
  },
  {
    heading: "联合主席寄语",
    paragraphs: [
      {
        en: "A year ago, this report documented AI's arrival as a mainstream force. This year's data shows what happens after arrival.",
        cn: "一年前，本报告记录了 AI 作为主流力量的到来。今年的数据展示的是「到来」之后会发生什么。",
        highlight: true,
        speaker: "Yolanda Gil & Raymond Perrault",
        speakerTitle: "AI Index Report 联合主席",
      },
      {
        en: "This is a technology that has reached mass adoption faster than the personal computer or the internet. Generative AI hit nearly 53% population-level adoption within three years. Leading AI companies are reaching meaningful revenue scale in a fraction of the time it took previous technology generations, and global corporate investment more than doubled in 2025. Organizational adoption rose to 88%, and early estimates suggest the consumer value of generative AI has grown substantially within a year.",
        cn: "这是一项比个人电脑或互联网更快达到大规模采用的技术。生成式 AI 在三年内实现了近 53% 的人口级采用率。领先的 AI 公司正以前几代技术所需时间的零头达到可观的营收规模，2025 年全球企业投资增长了一倍以上。组织采用率升至 88%，早期估算表明生成式 AI 的消费者价值在一年内大幅增长。",
        highlight: true,
        speaker: "Yolanda Gil & Raymond Perrault",
        speakerTitle: "AI Index Report 联合主席",
      },
      {
        en: "At the technical frontier, leading models are now nearly indistinguishable from one another. Open-weight models are more competitive than ever. But as models converge, the tools used to evaluate them are struggling to stay relevant. Benchmarks are saturating, frontier labs are disclosing less, and independent testing does not always confirm what developers report.",
        cn: "在技术前沿，领先模型之间现已几乎难以区分。开放权重模型比以往任何时候都更具竞争力。但随着模型趋同，用于评估它们的工具正努力保持相关性。基准测试正趋于饱和，前沿实验室披露的信息减少，独立测试并不总能证实开发者所报告的结果。",
        speaker: "Yolanda Gil & Raymond Perrault",
        speakerTitle: "AI Index Report 联合主席",
      },
      {
        en: "The chapters that follow trace what this scale of activity and capability means in practice. In science, AI shifted from accelerating individual research steps to attempting full replacement of entire workflows. In medicine, clinical AI tools moved from pilot programs to broader deployment, with systems like ambient AI scribes scaling across health systems.",
        cn: "后续章节追踪了这一规模的活动和能力在实践中意味着什么。在科学领域，AI 从加速单个研究步骤转向尝试完全替代整个工作流程。在医学领域，临床 AI 工具从试点项目走向更广泛的部署，环境 AI 抄录系统等正在各医疗系统中规模化应用。",
        speaker: "Yolanda Gil & Raymond Perrault",
        speakerTitle: "AI Index Report 联合主席",
      },
      {
        en: "Governments around the world acted on AI in 2025, but not in the same direction. The EU AI Act's first prohibitions took effect, while the United States shifted toward deregulation. Japan, South Korea, and Italy each passed national AI laws, and more than half of newly adopted national AI strategies came from developing countries entering the policy landscape for the first time. AI sovereignty emerged as a central organizing principle across all of these efforts. The public is also navigating competing signals. Global optimism about AI rose in 2025, but so did nervousness.",
        cn: "2025 年，世界各国政府纷纷对 AI 采取行动，但方向并不一致。欧盟 AI 法案的首批禁令生效，而美国则转向放松监管。日本、韩国和意大利各自通过了国家级 AI 法律，新采纳的国家 AI 战略中有一半以上来自首次进入政策领域的发展中国家。AI 主权成为所有这些努力的核心组织原则。公众也在应对相互矛盾的信号。2025 年全球对 AI 的乐观情绪上升，但不安情绪同样在增长。",
        highlight: true,
        speaker: "Yolanda Gil & Raymond Perrault",
        speakerTitle: "AI Index Report 联合主席",
      },
      {
        en: "The data does not point in a single direction. It reveals a field that is scaling faster than the systems around it can adapt. We encourage you to explore and decide for yourself.",
        cn: "数据并没有指向单一方向。它揭示的是一个扩展速度超过周围体系适应能力的领域。我们鼓励您深入探索并自行做出判断。",
        speaker: "Yolanda Gil & Raymond Perrault",
        speakerTitle: "AI Index Report 联合主席",
      },
    ],
  },
];

// ── Top 15 Takeaways ──────────────────────────────────

export const takeawaysSections: ArticleSection[] = [
  {
    heading: "核心要点 1：AI 能力并未见顶——正在加速并触达更多人",
    paragraphs: [
      {
        en: "AI capability is not plateauing. It is accelerating and reaching more people than ever. Industry produced over 90% of notable frontier models in 2025, and several of those models now meet or exceed human baselines on PhD-level science questions, multimodal reasoning, and competition mathematics. On a key coding benchmark—SWE-bench Verified—performance rose from 60% to near 100% of meeting the human baseline in a single year. Organizational adoption reached 88%, and 4 in 5 university students now use generative AI.",
        cn: "AI 能力并未触及天花板，而是在加速并触达比以往更多的人群。2025 年，产业界产出了超过 90% 的重要前沿模型，其中多个模型在博士级别科学问题、多模态推理和竞赛数学上已达到或超越人类基线。在关键编码基准 SWE-bench Verified 上，性能在一年内从达到人类基线的 60% 跃升至接近 100%。组织采用率达到 88%，五分之四的大学生现已使用生成式 AI。",
        highlight: true,
      },
    ],
  },
  {
    heading: "核心要点 2：中美 AI 模型性能差距已基本消除",
    paragraphs: [
      {
        en: "The U.S.-China AI model performance gap has effectively closed. U.S. and Chinese models have traded the lead multiple times since early 2025. In February 2025, DeepSeek-R1 briefly matched the top U.S. model, and as of March 2026 Anthropic's top model leads by just 2.7%. The U.S. still produces more top-tier AI models and higher-impact patents, while China leads in publication volume, citations, patent output, and industrial robot installations. South Korea stands out for its innovation density, leading the world in AI patents per capita.",
        cn: "中美 AI 模型性能差距已实质性消除。自 2025 年初以来，美中模型多次交替领先。2025 年 2 月，DeepSeek-R1 短暂追平美国顶级模型，截至 2026 年 3 月，Anthropic 的顶级模型仅领先 2.7%。美国仍然产出更多顶级 AI 模型和更高影响力的专利，而中国在论文数量、引用量、专利产出和工业机器人装机量上领先。韩国以其创新密度脱颖而出，在人均 AI 专利数上位居全球首位。",
        highlight: true,
      },
    ],
  },
  {
    heading: "核心要点 3：美国拥有最多 AI 数据中心，芯片制造依赖台湾一家代工厂",
    paragraphs: [
      {
        en: "The United States hosts the most AI data centers, with the majority of their chips fabricated by one Taiwanese foundry. The United States hosts 5,427 data centers, more than 10 times any other country, and it consumes more energy than any other country. A single company, TSMC, fabricates almost every leading AI chip, making the global AI hardware supply chain dependent on one foundry in Taiwan—though a TSMC-U.S. expansion began operations in 2025.",
        cn: "美国拥有最多的 AI 数据中心，其中大部分芯片由一家台湾代工厂制造。美国托管 5,427 座数据中心，是其他任何国家的 10 倍以上，且能源消耗居全球之首。台积电（TSMC）一家公司几乎制造了所有领先的 AI 芯片，使全球 AI 硬件供应链依赖于台湾的一座晶圆厂——不过台积电美国扩建工厂已于 2025 年投入运营。",
        highlight: true,
      },
    ],
  },
  {
    heading: "核心要点 4：AI 能赢国际数学奥赛金牌，却不能可靠地读钟——「锯齿状前沿」",
    paragraphs: [
      {
        en: "AI models can win a gold medal at the International Mathematical Olympiad but cannot reliably tell time—an example of what researchers call the jagged frontier of AI. Gemini Deep Think earned a gold medal at IMO, yet the top model reads analog clocks correctly just 50.1% of the time. AI agents made a leap from 12% to ~66% task success on OSWorld, which tests agents on real computer tasks across operating systems, though they still fail roughly 1 in 3 attempts on structured benchmarks.",
        cn: "AI 模型能赢得国际数学奥林匹克竞赛金牌，却无法可靠地读取时钟——这就是研究人员所说的 AI「锯齿状前沿」的一个例证。Gemini Deep Think 在 IMO 上获得金牌，然而顶级模型读取模拟时钟的准确率仅为 50.1%。AI 智能体在 OSWorld（跨操作系统测试智能体执行真实计算机任务）上的任务成功率从 12% 跃升至约 66%，但在结构化基准测试中仍约有三分之一的尝试失败。",
      },
    ],
  },
  {
    heading: "核心要点 5：机器人在家庭任务中仍大面积失败",
    paragraphs: [
      {
        en: "Robots still fail at most household tasks, even as they excel in controlled environments. Robots succeed in only 12% of household tasks, highlighting how far AI is from mastering the physical world. On RLBench, robotic manipulation in software-based simulations has reached 89.4% success, but the gap between predictable lab settings and unpredictable household environments is wide.",
        cn: "机器人在大多数家庭任务中仍然失败，即便它们在受控环境中表现出色。机器人仅完成 12% 的家庭任务，凸显了 AI 距离掌握物理世界还有多远。在 RLBench 基准上，基于软件模拟的机器人操控已达到 89.4% 的成功率，但可预测的实验室环境与不可预测的家庭环境之间的差距依然巨大。",
      },
    ],
  },
  {
    heading: "核心要点 6：负责任 AI 未能跟上 AI 能力增长——安全基准滞后，事故激增",
    paragraphs: [
      {
        en: "Responsible AI is not keeping pace with AI capability, with safety benchmarks lagging and incidents rising sharply. Almost all leading frontier AI model developers report results on capability benchmarks, but reporting on responsible AI benchmarks remains spotty. Documented AI incidents rose to 362, up from 233 in 2024. Adding to the challenge, recent research found that improving one responsible AI dimension, such as safety, can degrade another, such as accuracy.",
        cn: "负责任 AI 未能跟上 AI 能力的增长步伐，安全基准测试滞后，事故数量急剧上升。几乎所有领先的前沿 AI 模型开发者都报告了能力基准的结果，但在负责任 AI 基准上的报告仍然参差不齐。记录在案的 AI 事故上升至 362 起，高于 2024 年的 233 起。雪上加霜的是，最新研究发现改善负责任 AI 的某一维度（如安全性）可能会降低另一维度（如准确性）。",
        highlight: true,
      },
    ],
  },
  {
    heading: "核心要点 7：美国领跑 AI 投资，但吸引全球人才的能力正在下降",
    paragraphs: [
      {
        en: "The United States leads in AI investment, but its ability to attract global talent is declining. U.S. private AI investment reached $285.9 billion in 2025, more than 23 times the $12.4 billion invested in China—though looking at just private investment figures likely understates China's total AI spending, given its government guidance funds. The U.S. also led in entrepreneurial activity with 1,953 newly funded AI companies in 2025, more than 10 times the next closest country. However, the number of AI researchers and developers moving to the U.S. has dropped 89% since 2017, with an 80% decline in the last year alone.",
        cn: "美国在 AI 投资方面遥遥领先，但其吸引全球人才的能力正在下降。2025 年美国 AI 私募投资达到 2,859 亿美元，是中国 124 亿美元的 23 倍以上——不过仅看私募投资数据可能低估了中国的 AI 总支出，考虑到其政府引导基金。美国在创业活动方面同样领先，2025 年新获融资的 AI 公司达 1,953 家，是排名第二的国家的 10 倍以上。然而，迁往美国的 AI 研究人员和开发者数量自 2017 年以来下降了 89%，仅过去一年就下降了 80%。",
        highlight: true,
      },
    ],
  },
  {
    heading: "核心要点 8：AI 采用速度史无前例，消费者从免费工具中获得巨大价值",
    paragraphs: [
      {
        en: "AI adoption is spreading at historic speed, and consumers are deriving substantial value from tools they often access for free. Generative AI reached 53% population adoption within three years, faster than the PC or the internet, though the pace varies by country and correlates strongly with GDP per capita. Some show higher-than-expected adoption, such as Singapore (61%) and the United Arab Emirates (54%), while the U.S. ranks 24th at 28.3%. The estimated value of generative AI tools to U.S. consumers reached $172 billion annually by early 2026, with the median value per user tripling between 2025 and 2026.",
        cn: "AI 采用正以历史性的速度扩散，消费者从通常免费使用的工具中获得了巨大价值。生成式 AI 在三年内达到 53% 的人口采用率，快于个人电脑或互联网，但各国速度不一，与人均 GDP 高度相关。部分国家表现出高于预期的采用率，如新加坡（61%）和阿联酋（54%），而美国以 28.3% 排名第 24 位。到 2026 年初，生成式 AI 工具对美国消费者的估算年价值达到 1,720 亿美元，单用户中位价值在 2025 至 2026 年间增长了两倍。",
        highlight: true,
      },
    ],
  },
  {
    heading: "核心要点 9：AI 生产力提升出现的领域，恰是入门级就业开始下降的领域",
    paragraphs: [
      {
        en: "Productivity gains from AI are appearing in many of the same fields where entry-level employment is starting to decline. Studies show productivity gains of 14% to 26% in customer support and software development, with weaker or negative effects in tasks requiring more judgment. AI agent deployment remains in single digits across nearly all business functions. In software development, where AI's measured productivity gains are clearest, U.S. developers ages 22 to 25 saw employment fall nearly 20% from 2024, even as the headcount for older developers continues to grow.",
        cn: "AI 带来的生产力提升正在出现在许多入门级就业开始下降的相同领域。研究显示客户支持和软件开发领域的生产力提升幅度为 14% 至 26%，而在需要更多判断力的任务中效果较弱甚至为负。AI 智能体的部署在几乎所有业务职能中仍为个位数。在软件开发领域——AI 生产力提升最为明显的地方——22 至 25 岁的美国开发者就业人数自 2024 年以来下降了近 20%，而年长开发者的人数则持续增长。",
        highlight: true,
      },
    ],
  },
  {
    heading: "核心要点 10：AI 的环境足迹随能力增长而扩大",
    paragraphs: [
      {
        en: "AI's environmental footprint is expanding alongside its capabilities. Grok 4's estimated training emissions reached 72,816 tons of CO2 equivalent. AI data center power capacity rose to 29.6 GW, comparable to New York state at peak demand, and annual GPT-4o inference water use alone may exceed the drinking water needs of 12 million people.",
        cn: "AI 的环境足迹正随其能力增长而扩大。Grok 4 的估计训练排放达到 72,816 吨二氧化碳当量。AI 数据中心电力容量升至 29.6 吉瓦，相当于纽约州的峰值需求，仅 GPT-4o 年推理用水量就可能超过 1,200 万人的饮用水需求。",
      },
    ],
  },
  {
    heading: "核心要点 11：AI 科学模型可胜过人类科学家，但更大不一定更好",
    paragraphs: [
      {
        en: "AI models for science can outperform human scientists, though bigger models do not always perform better. Frontier models outperform human chemists on average on ChemBench, yet they score below 20% on replication in astrophysics and 33% on Earth observation questions. A 111-million-parameter protein language model, MSAPairformer, beat previous leading methods on ProteinGym, and a 200-million-parameter genomics model, GPN-Star, outperformed a model nearly 200 times larger. Most AI foundation models for science come from cross-sector collaborations, in contrast with the industry-dominated landscape of general-purpose AI.",
        cn: "面向科学的 AI 模型可以胜过人类科学家，但更大的模型并不总是表现更好。前沿模型在 ChemBench 上平均胜过人类化学家，但在天体物理学复现任务上得分低于 20%，在地球观测问题上仅为 33%。拥有 1.11 亿参数的蛋白质语言模型 MSAPairformer 在 ProteinGym 上击败了此前的领先方法，拥有 2 亿参数的基因组学模型 GPN-Star 则胜过了一个近 200 倍大的模型。大多数面向科学的 AI 基础模型来自跨部门合作，与产业界主导的通用 AI 格局形成对比。",
        highlight: true,
      },
    ],
  },
  {
    heading: "核心要点 12：AI 正在变革临床医疗，但严格证据仍然有限",
    paragraphs: [
      {
        en: "AI is transforming clinical care, but rigorous evidence remains limited. AI tools that automatically generate clinical notes from patient visits saw substantial adoption in 2025. Across multiple hospital systems, physicians reported up to 83% less time spent writing notes and significant reductions in burnout. Beyond certain tools, however, the evidence base for clinical AI remains thin. A review of more than 500 clinical AI studies found that nearly half relied on exam-style questions rather than real patient data, with only 5% using real clinical data.",
        cn: "AI 正在变革临床医疗，但严格的证据仍然有限。2025 年，自动从患者就诊中生成临床笔记的 AI 工具获得了大规模采用。在多个医院系统中，医生报告书写笔记的时间减少了高达 83%，职业倦怠也显著降低。然而，除某些特定工具外，临床 AI 的证据基础仍然薄弱。一项对 500 多项临床 AI 研究的综述发现，近一半依赖考试式问题而非真实患者数据，仅有 5% 使用了真实临床数据。",
      },
    ],
  },
  {
    heading: "核心要点 13：正规教育落后于 AI，但人们在人生各阶段都在学习 AI 技能",
    paragraphs: [
      {
        en: "Formal education is lagging behind AI, but people are learning AI skills at every stage of life. Over 80% of U.S. high school and college students now use AI for school-related tasks, but only half of middle and high schools have AI policies in place, and just 6% of teachers say those policies are clear. Outside the classroom, AI engineering skills are accelerating fastest in the United Arab Emirates, Chile, and South Africa. The number of new AI PhDs in the U.S. and Canada increased 22% from 2022 to 2024, the PhDs that make up that increase took jobs in academia, not in industry.",
        cn: "正规教育落后于 AI，但人们在人生的各个阶段都在学习 AI 技能。超过 80% 的美国高中生和大学生现在使用 AI 完成与学业相关的任务，但只有一半的初高中制定了 AI 政策，仅 6% 的教师表示这些政策是清晰的。在课堂之外，AI 工程技能增长最快的国家是阿联酋、智利和南非。2022 至 2024 年间，美国和加拿大的新增 AI 博士人数增长了 22%，而这些增量博士选择了学术界而非产业界的工作。",
      },
    ],
  },
  {
    heading: "核心要点 14：AI 主权成为国家政策的决定性特征",
    paragraphs: [
      {
        en: "AI sovereignty is becoming a defining feature of national policy, but capabilities remain uneven, even as open-source development helps to redistribute who participates. National AI strategies are expanding, particularly among developing economies, and state-backed investments in AI supercomputing are rising in parallel—a sign of growing ambitions for domestic control over AI ecosystems. Yet model production remains concentrated in the U.S. and China. Open-source development is starting to redistribute participation, with contributions from the rest of the world now outpacing Europe and approaching the United States on GitHub, fueling more linguistically diverse models and benchmarks.",
        cn: "AI 主权正成为国家政策的决定性特征，但各国能力参差不齐，尽管开源开发正在帮助重新分配参与权。国家 AI 战略正在扩展，尤其是在发展中经济体中，国家支持的 AI 超算投资也在同步增长——这是对国内控制 AI 生态系统雄心日益增长的信号。然而模型生产仍集中在美中两国。开源开发正开始重新分配参与权，来自世界其他地区的贡献现已超过欧洲，并在 GitHub 上接近美国水平，推动了更多语言多样化的模型和基准。",
        highlight: true,
      },
    ],
  },
  {
    heading: "核心要点 15：AI 专家与公众对技术未来的看法截然不同，全球信任碎片化",
    paragraphs: [
      {
        en: "AI experts and the public have very different perspectives on the technology's future, and global trust in institutions to manage AI is fragmented. When it comes to how people do their jobs, 73% of experts expect a positive impact, compared with just 23% of the public, a 50-point gap. Similar divides appear for AI's impact on the economy and medical care. Globally, trust in governments to regulate AI varies. Among surveyed countries, the United States reported the lowest level of trust in its own government to regulate AI, at 31%. Globally, the EU is trusted more than the United States or China to regulate AI effectively.",
        cn: "AI 专家与公众对技术未来的看法截然不同，全球对管理 AI 的机构的信任呈碎片化状态。在 AI 对人们工作方式的影响方面，73% 的专家预期积极影响，而公众中仅 23% 持相同看法，差距达 50 个百分点。在 AI 对经济和医疗的影响方面也存在类似分歧。在全球范围内，公众对政府监管 AI 的信任度差异显著。在受调查国家中，美国对本国政府监管 AI 的信任度最低，仅为 31%。在全球范围内，欧盟在有效监管 AI 方面获得的信任度高于美国或中国。",
        highlight: true,
      },
    ],
  },
];

// ── Chapter 1: Research & Development ─────────────────

export const chapter1Sections: ArticleSection[] = [
  {
    heading: "第一章概述：研究与开发",
    paragraphs: [
      {
        en: "The resources powering AI development continued to grow in 2025, but fewer notable models were released than the year before, and the systems at the frontier are increasingly concentrated among a small number of organizations. Industry now accounts for over 90% of notable AI models, and the most capable systems are also the least transparent, with training code, dataset sizes, and parameter counts increasingly withheld. The computing power behind these models has grown roughly 3.3 times per year since 2022, yet almost all of it flows through a single chip foundry in Taiwan, making the global hardware supply chain fragile. Open-source development and AI publications continued to grow, and the research landscape is becoming more geographically distributed. China now leads in publication volume, citation share, and patent grants, while smaller countries like Switzerland and Singapore lead in AI researchers per capita. Yet some dimensions of the field have not changed at all. Gender gaps in AI talent remain deeply entrenched, with no meaningful progress in any country since 2010.",
        cn: "驱动 AI 发展的资源在 2025 年持续增长，但发布的重要模型数量少于前一年，前沿系统日益集中在少数组织手中。产业界现在占重要 AI 模型的 90% 以上，最强大的系统同时也是最不透明的——训练代码、数据集规模和参数量被越来越多地隐藏。这些模型背后的算力自 2022 年以来每年增长约 3.3 倍，但几乎全部流经台湾的一座晶圆厂，使全球硬件供应链十分脆弱。开源开发和 AI 论文持续增长，研究版图变得更加地理分散。中国现在在论文数量、引用份额和专利授权量方面领先，而瑞士和新加坡等较小国家在人均 AI 研究人员数上领先。但该领域的某些维度完全没有变化。AI 人才的性别差距仍根深蒂固，自 2010 年以来没有任何国家取得实质性进展。",
        highlight: true,
      },
    ],
  },
  {
    heading: "1.1 重要模型：产业界主导，透明度下降",
    paragraphs: [
      {
        en: "Industry produced over 90% of notable AI models in 2025, but the most capable models are now the least transparent. Training code, parameter counts, dataset sizes, and training duration are no longer disclosed for several of the most resource-intensive systems, including those from OpenAI, Anthropic, and Google.",
        cn: "2025 年，产业界产出了超过 90% 的重要 AI 模型，但最强大的模型现在也是最不透明的。包括 OpenAI、Anthropic 和谷歌在内的多个资源最密集型系统，其训练代码、参数量、数据集规模和训练时长均不再公开。",
        highlight: true,
      },
    ],
  },
  {
    heading: "1.2 研究格局：中国领跑研究产出，美国主导前沿模型开发",
    paragraphs: [
      {
        en: "China leads in research, while the U.S. leads in notable model development. China leads in publication volume, citations, and patent grants, while the U.S. retains higher-impact patents and produced 50 notable models in 2025 to China's 30. South Korea leads in AI patents per capita, and China's share of the top 100 most-cited AI papers grew from 33 in 2021 to 41 in 2024.",
        cn: "中国在研究方面领先，而美国在重要模型开发方面领先。中国在论文数量、引用量和专利授权方面领先，而美国保持着更高影响力的专利，2025 年产出了 50 个重要模型，中国为 30 个。韩国在人均 AI 专利数上领先，中国在全球前 100 篇最高引用 AI 论文中的份额从 2021 年的 33 篇增长至 2024 年的 41 篇。",
        highlight: true,
      },
    ],
  },
  {
    heading: "1.3 模型参数与计算：参数停留在万亿级别，披露骤减",
    paragraphs: [
      {
        en: "Reported parameters held in the trillions as disclosure dropped. Parameter counts have stayed near 1 trillion for three years, though reporting from frontier labs has stopped. Training compute, which can be estimated independently, has continued to rise.",
        cn: "报告的参数量维持在万亿级别，但披露率下降。参数量三年来一直保持在接近 1 万亿的水平，尽管前沿实验室已停止报告。可独立估算的训练算力持续上升。",
      },
    ],
  },
  {
    heading: "1.4 数据：合成数据尚未取代真实数据，但数据质量和后训练技术展现前景",
    paragraphs: [
      {
        en: "Synthetic data is still not replacing real data in pre-training, but data quality and post-training techniques are showing promise. OLMo 3.1 Think 32B, with nearly 90 times fewer parameters than Grok 4, achieves comparable results on several benchmarks through pruning, deduplication, and curation alone.",
        cn: "合成数据尚未在预训练中取代真实数据，但数据质量和后训练技术正展现出前景。OLMo 3.1 Think 32B 的参数量比 Grok 4 少近 90 倍，仅通过剪枝、去重和精选就在多项基准上取得了可比结果。",
      },
    ],
  },
  {
    heading: "1.5 全球 AI 算力：年增 3.3 倍，达 1,710 万 H100 等效单位",
    paragraphs: [
      {
        en: "Global AI compute capacity grew 3.3x per year since 2022, reaching 17.1 million H100-equivalents. Nvidia accounts for over 60% of total compute, with Google and Amazon supplying much of the remainder and Huawei holding a small but growing share.",
        cn: "全球 AI 算力容量自 2022 年以来每年增长 3.3 倍，达到 1,710 万 H100 等效单位。英伟达占总算力的 60% 以上，谷歌和亚马逊提供了剩余的大部分，华为则持有较小但不断增长的份额。",
        highlight: true,
      },
    ],
  },
  {
    heading: "1.6 数据中心：美国遥遥领先，芯片制造集中于台积电",
    paragraphs: [
      {
        en: "The United States leads in AI data centers, and one Taiwanese foundry fabricates the majority of chips inside them. The United States hosts 5,427 data centers, more than ten times any other country, consuming more energy than any other region. A single company, TSMC, fabricates almost every leading AI chip.",
        cn: "美国在 AI 数据中心方面遥遥领先，一家台湾代工厂制造了其中大部分芯片。美国托管 5,427 座数据中心，是其他任何国家的十倍以上，能源消耗量也超过其他任何地区。台积电一家公司几乎制造了所有领先的 AI 芯片。",
      },
    ],
  },
  {
    heading: "1.7 环境影响：电力、水耗与碳排放全面上升",
    paragraphs: [
      {
        en: "AI's environmental footprint increases across power, water, and emissions. In 2025, Grok 4's estimated training emissions reached 72,816 tons of CO₂ equivalent. AI data center power capacity rose to 29.6 GW, comparable to New York state at peak demand.",
        cn: "AI 的环境足迹在电力、水耗和排放方面全面上升。2025 年，Grok 4 的估计训练排放达到 72,816 吨二氧化碳当量。AI 数据中心电力容量升至 29.6 吉瓦，相当于纽约州的峰值需求。",
        highlight: true,
      },
    ],
  },
  {
    heading: "1.8 开源 AI：GitHub 项目达 560 万，Hugging Face 上传量三年翻三倍",
    paragraphs: [
      {
        en: "Open-source AI development continues to scale, with 5.6 million projects on GitHub and Hugging Face uploads tripling since 2023. U.S.-based projects still attract the most engagement, with 30 million cumulative GitHub stars.",
        cn: "开源 AI 开发持续扩展，GitHub 上已有 560 万个项目，Hugging Face 上传量自 2023 年以来增长了两倍。美国项目仍吸引最多关注，累计获得 3,000 万个 GitHub 星标。",
      },
    ],
  },
  {
    heading: "1.9 人才流动：迁往美国的 AI 研究者锐减 89%",
    paragraphs: [
      {
        en: "The number of AI researchers and developers moving to the United States has dropped 89% since 2017. The decline is accelerating, down 80% in the last year alone.",
        cn: "迁往美国的 AI 研究人员和开发者数量自 2017 年以来下降了 89%。这一下降正在加速，仅过去一年就下降了 80%。",
        highlight: true,
      },
    ],
  },
  {
    heading: "1.10 人才版图与性别差距：瑞士、新加坡人均领先，性别平等毫无进展",
    paragraphs: [
      {
        en: "The AI talent map is shifting, but gender gaps remain deeply entrenched. Switzerland and Singapore lead the world in AI researchers and developers per capita. No country approaches gender parity.",
        cn: "AI 人才版图正在变化，但性别差距仍根深蒂固。瑞士和新加坡在人均 AI 研究人员和开发者数量上领先全球。没有任何国家接近性别平等。",
      },
    ],
  },
];
