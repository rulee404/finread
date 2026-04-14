import type { ArticleSection } from "@/lib/types";

// ─── Chapter 2: Technical Performance ────────────────────────────────────────

export const chapter2Sections: ArticleSection[] = [
  {
    heading: "概述：AI 技术性能全面跃升",
    paragraphs: [
      {
        en: "AI systems continued to make significant gains across a wide range of benchmarks in 2025. Leading models now meet or exceed human-level performance on standardized tests, image classification, reading comprehension, and competition-level mathematics. The pace of improvement accelerated in several domains: on SWE-bench Verified, a coding benchmark, model performance rose from ~60% to near 100% of the human baseline within a single year. Multimodal reasoning and agentic task execution both saw substantial gains. But frontier model performance is also converging, with the gap between the best and second-best systems narrowing across many benchmarks. As models get closer together at the top, the benchmarks used to rank them are increasingly saturated, raising questions about whether current evaluation methods can meaningfully distinguish between frontier systems.",
        cn: "2025 年，AI 系统在众多基准测试中持续取得重大进展。领先模型如今在标准化考试、图像分类、阅读理解和竞赛级数学等领域已达到或超越人类水平。多个领域的进步速度显著加快：在编程基准 SWE-bench Verified 上，模型表现在一年内从人类基线的约 60% 飙升至接近 100%。多模态推理和智能体任务执行均取得实质性进展。然而，前沿模型的表现也在趋同——最优与次优系统之间的差距在许多基准上都在缩小。随着顶尖模型之间的距离越来越近，用于排名的基准测试日益饱和，引发了一个根本性问题：现有评估方法是否还能有效区分前沿系统之间的差异。",
        highlight: true,
      },
    ],
  },
  {
    heading: "核心亮点：九大关键发现",
    paragraphs: [
      {
        en: "AI performance is still rising, and in some domains it is rising fast. On SWE-bench Verified, scores went from ~60% to near 100% of the human baseline in a single year. Gemini Deep Think earned a gold medal at IMO. Frontier models now meet or exceed human baselines on PhD-level science questions.",
        cn: "AI 性能仍在提升，且在部分领域提升极为迅速。在 SWE-bench Verified 上，得分在一年内从人类基线的约 60% 飙升至接近 100%。Gemini Deep Think 在国际数学奥林匹克（IMO）中斩获金牌。前沿模型如今在博士级科学问题上已达到或超越人类基线。",
        highlight: true,
      },
      {
        en: "Frontier models are converging. On the Chatbot Arena leaderboard, which ranks models using pairwise human preferences, the gap between the first- and fifth-place models has narrowed from 72 Elo points in early 2024 to 30 in March 2026.",
        cn: "前沿模型正在趋同。在 Chatbot Arena 排行榜（基于人类成对偏好对模型进行排名）上，第一名与第五名之间的差距已从 2024 年初的 72 个 Elo 分缩窄至 2026 年 3 月的 30 个 Elo 分。",
      },
      {
        en: "Open-weight models are closing in on closed models. Llama 4 Maverick and DeepSeek R1 now rank alongside proprietary systems on Chatbot Arena. On benchmarks like AIME and MATH-500, top open-weight models trail closed models by less than 5 percentage points.",
        cn: "开源权重模型正在逼近闭源模型。Llama 4 Maverick 和 DeepSeek R1 如今在 Chatbot Arena 上与闭源系统并驾齐驱。在 AIME 和 MATH-500 等基准测试中，顶级开源权重模型与闭源模型的差距不到 5 个百分点。",
        highlight: true,
      },
      {
        en: "Benchmarks are saturating. Performance on several widely used evaluations, including MMLU and HellaSwag, has approached or exceeded estimated human baselines. Newer benchmarks like FrontierMath and GPQA Diamond have replaced them but are themselves showing early signs of rapid score compression.",
        cn: "基准测试正在饱和。在包括 MMLU 和 HellaSwag 在内的多项广泛使用的评估中，模型表现已接近或超过人类基线估计值。FrontierMath 和 GPQA Diamond 等更新的基准测试已取而代之，但它们本身也开始显现分数快速压缩的早期迹象。",
      },
      {
        en: "The jagged frontier is real. AI models win gold at IMO but read analog clocks correctly only 50.1% of the time. On SimpleBench, which tests for common-sense spatial and social reasoning, the best frontier models score around 42%.",
        cn: "「锯齿状前沿」是真实存在的。AI 模型能在 IMO 上斩获金牌，却只能以 50.1% 的准确率读取模拟时钟。在测试常识性空间与社交推理的 SimpleBench 上，最佳前沿模型的得分仅约 42%。",
        highlight: true,
      },
      {
        en: "AI agents made a significant leap in 2025. On OSWorld, agent task success jumped from 12% to ~66%. On SWE-bench Verified, agents crossed the human baseline. But agents still fail roughly 1 in 3 attempts on structured benchmarks, and deployment in enterprises remains in single digits.",
        cn: "AI 智能体在 2025 年实现了重大飞跃。在 OSWorld 上，智能体任务成功率从 12% 跃升至约 66%。在 SWE-bench Verified 上，智能体跨越了人类基线。但智能体在结构化基准测试中仍有大约三分之一的失败率，企业中的实际部署比例仍为个位数。",
        highlight: true,
      },
      {
        en: "Multimodal AI progressed rapidly in video understanding, audio, and cross-modal reasoning. The Video-MME benchmark, introduced in 2024, already shows rapid improvement across duration and domain categories.",
        cn: "多模态 AI 在视频理解、音频处理和跨模态推理方面取得了快速进展。2024 年引入的 Video-MME 基准测试已在不同时长和领域类别中显示出快速的性能提升。",
      },
      {
        en: "Robots succeed at only 12% of household tasks. On RLBench simulations, robotic manipulation reached 89.4%, but real-world performance in unpredictable environments remains far behind.",
        cn: "机器人仅能完成 12% 的家务任务。在 RLBench 模拟环境中，机器人操控成功率达到 89.4%，但在不可预测的真实环境中表现仍远远落后。",
      },
      {
        en: "Evaluation infrastructure is under strain. Frontier labs disclose less, independent verification does not always confirm developer claims, and the tools used to compare models are increasingly outdated relative to the systems they are trying to assess.",
        cn: "评估基础设施正承受巨大压力。前沿实验室披露的信息越来越少，独立验证并不总能证实开发者的声称，而用于模型比较的工具相对于它们试图评估的系统而言日益过时。",
        highlight: true,
      },
    ],
  },
  {
    heading: "语言与推理基准：从 MMLU 到 FrontierMath",
    paragraphs: [
      {
        en: "MMLU, once the gold standard for evaluating broad language understanding, has effectively been solved. Top models now exceed the estimated human baseline of ~89%, with several scoring above 90%. The benchmark was designed to test knowledge across 57 academic subjects, but the ceiling effect has rendered it unable to distinguish between frontier systems. MMLU-Pro and MMLU-Redux have been introduced as more challenging alternatives, but even these newer versions are seeing rapid score convergence.",
        cn: "MMLU 曾是评估广泛语言理解能力的黄金标准，如今实质上已被「攻克」。顶级模型现已超越约 89% 的人类基线估计值，多个模型得分超过 90%。该基准旨在测试 57 个学术学科的知识，但天花板效应已使其无法区分前沿系统之间的差异。MMLU-Pro 和 MMLU-Redux 作为更具挑战性的替代方案已被引入，但即便是这些更新版本也正经历分数的快速趋同。",
        highlight: true,
      },
      {
        en: "GPQA Diamond, a set of PhD-level science questions, has emerged as a more discriminating evaluation. Questions are drawn from physics, chemistry, and biology and are verified as difficult even for domain experts outside their specialty. In 2024, the best model scored 59.4% on GPQA Diamond; by early 2026, the top score had risen to over 80%. While this still leaves a meaningful gap to human expert baselines, the pace of improvement suggests the benchmark may have a limited useful lifespan.",
        cn: "GPQA Diamond——一组博士级科学问题——已成为更具区分度的评估方式。问题涵盖物理、化学和生物领域，经验证即使对于非本专业的领域专家也具有相当难度。2024 年，最佳模型在 GPQA Diamond 上得分 59.4%；到 2026 年初，最高分已升至 80% 以上。虽然与人类专家基线之间仍存在有意义的差距，但改进速度表明该基准的有效使用寿命可能有限。",
      },
      {
        en: "FrontierMath, introduced in late 2024, represents the hardest publicly available math benchmark. It contains problems from competition mathematics, graduate-level algebra, and research-level combinatorics. When first released, no model scored above 5%. Within six months, the best systems had reached approximately 30%. The benchmark was explicitly designed to remain unsaturated for years, but the rate of progress has exceeded expectations.",
        cn: "FrontierMath 于 2024 年底推出，是目前公开可用的最高难度数学基准。它包含竞赛数学、研究生级代数和研究级组合数学的题目。首次发布时，没有模型得分超过 5%。六个月内，最佳系统已达到约 30%。该基准明确设计为数年内不会饱和，但进步速度已超出预期。",
        highlight: true,
      },
      {
        en: "On competition-level mathematics, the gains have been dramatic. Gemini Deep Think earned a gold-medal-level score at the International Mathematical Olympiad, a result that would have been considered science fiction just two years ago. On AIME (American Invitational Mathematics Examination) problems, frontier models now solve over 85% correctly, up from under 30% in early 2024. MATH-500, a curated subset of 500 challenging math problems, has seen top scores climb from 72% to over 95% in the same period.",
        cn: "在竞赛级数学方面，进步极为显著。Gemini Deep Think 在国际数学奥林匹克竞赛中获得了金牌级成绩——这一结果在两年前还被认为是天方夜谭。在 AIME（美国数学邀请赛）题目上，前沿模型如今的正确率超过 85%，而 2024 年初还不到 30%。MATH-500（一组精选的 500 道高难度数学题）的最高分在同一时期从 72% 攀升至 95% 以上。",
      },
    ],
  },
  {
    heading: "编程基准：SWE-bench 与 HumanEval",
    paragraphs: [
      {
        en: "Coding benchmarks saw some of the most striking gains in 2025. SWE-bench Verified, which tests a model's ability to resolve real-world GitHub issues by generating working patches, went from a top score of ~60% of the human baseline in early 2025 to near 100% by the end of the year. This is one of the fastest capability gains ever recorded on a major AI benchmark, and it reflects both improvements in base model reasoning and the integration of agentic workflows that allow models to iterate on their own outputs.",
        cn: "编程基准测试在 2025 年取得了一些最引人注目的进步。SWE-bench Verified 测试模型通过生成可用补丁解决真实 GitHub 问题的能力，最高分从 2025 年初人类基线的约 60% 飙升至年底的接近 100%。这是在主要 AI 基准测试中有记录以来最快的能力提升之一，反映了基础模型推理能力的进步以及允许模型迭代自身输出的智能体工作流的整合。",
        highlight: true,
      },
      {
        en: "HumanEval, which tests functional code generation from docstrings, is now largely saturated. The best models exceed 95% pass@1, and the benchmark no longer differentiates between frontier systems. HumanEval+ and more complex variants have been introduced but face similar saturation pressures as model capabilities advance.",
        cn: "HumanEval 测试模型根据文档字符串生成功能代码的能力，如今基本已饱和。最佳模型的 pass@1 超过 95%，该基准已无法区分前沿系统之间的差异。HumanEval+ 及更复杂的变体已被引入，但随着模型能力的提升，面临着类似的饱和压力。",
      },
      {
        en: "The real-world significance of coding improvements extends beyond benchmarks. Multiple companies have reported that AI-assisted coding tools now generate 30–50% of new code in production environments. Cursor, GitHub Copilot, and similar tools have become standard developer infrastructure, and the gap between assisted and unassisted developer productivity continues to widen.",
        cn: "编程能力提升的现实意义远超基准测试本身。多家企业报告 AI 辅助编程工具如今在生产环境中生成了 30-50% 的新代码。Cursor、GitHub Copilot 及类似工具已成为标准开发者基础设施，辅助开发与非辅助开发之间的生产力差距持续扩大。",
        highlight: true,
      },
    ],
  },
  {
    heading: "多模态基准：视频理解与跨模态推理",
    paragraphs: [
      {
        en: "Multimodal AI progressed rapidly across several fronts. Video understanding, which lagged behind image and text capabilities, saw particularly strong improvement. The Video-MME benchmark, introduced in mid-2024 to evaluate models on video question-answering across short, medium, and long-duration clips, already shows rapid score increases. Top models improved by 15–25 percentage points across duration categories within a single year.",
        cn: "多模态 AI 在多个方面取得了快速进展。此前落后于图像和文本能力的视频理解领域出现了特别强劲的提升。Video-MME 基准于 2024 年中推出，用于评估模型在短、中、长时长视频片段上的视频问答能力，已显示出分数的快速提升。顶级模型在一年内各时长类别上的分数提高了 15-25 个百分点。",
        highlight: true,
      },
      {
        en: "Image understanding benchmarks have reached near-saturation. On standard visual question-answering tasks, multiple models exceed 85% accuracy. More challenging evaluations, such as those requiring fine-grained spatial reasoning or understanding of abstract diagrams, continue to show room for improvement, but the gap is closing.",
        cn: "图像理解基准已接近饱和。在标准视觉问答任务上，多个模型准确率超过 85%。更具挑战性的评估——如需要细粒度空间推理或理解抽象图表的任务——仍有提升空间，但差距正在缩小。",
      },
      {
        en: "Cross-modal reasoning, the ability to integrate information from text, images, audio, and video simultaneously, has become a key differentiator between frontier systems. Models that perform well on cross-modal tasks tend to also excel at complex real-world applications such as document understanding, scientific figure interpretation, and real-time situational awareness.",
        cn: "跨模态推理——即同时整合文本、图像、音频和视频信息的能力——已成为前沿系统之间的关键差异化因素。在跨模态任务上表现优异的模型往往也擅长复杂的现实应用，如文档理解、科学图表解读和实时态势感知。",
      },
    ],
  },
  {
    heading: "智能体基准：OSWorld、WebArena 与 SWE-bench",
    paragraphs: [
      {
        en: "AI agents—systems that autonomously plan, execute, and iterate on multi-step tasks—made a significant leap in 2025. On OSWorld, which evaluates agents on operating-system-level tasks such as file management, application use, and web navigation, agent task success jumped from 12% to approximately 66%. This improvement reflects both advances in underlying model capability and the development of more sophisticated agent scaffolding that supports memory, tool use, and error recovery.",
        cn: "AI 智能体——能够自主规划、执行和迭代多步任务的系统——在 2025 年实现了重大飞跃。在评估智能体执行操作系统级任务（如文件管理、应用使用和网页导航）的 OSWorld 上，智能体任务成功率从 12% 跃升至约 66%。这一提升既反映了底层模型能力的进步，也体现了支持记忆、工具使用和错误恢复的更精密智能体架构的发展。",
        highlight: true,
      },
      {
        en: "WebArena, which tests agents on realistic web-based tasks such as online shopping, forum navigation, and content management, has shown steadier but meaningful progress. Top agent scores have improved from approximately 20% to over 40% success rate on the full benchmark suite. Tasks involving multi-step navigation and information synthesis across multiple web pages remain the most challenging.",
        cn: "WebArena 测试智能体在现实网络任务上的表现，如网购、论坛导航和内容管理，展示了更为稳定但有意义的进步。在完整基准测试套件上，顶级智能体的得分从约 20% 提升至超过 40% 的成功率。涉及多步导航和跨多个网页信息综合的任务仍是最具挑战性的。",
      },
      {
        en: "On SWE-bench Verified, agentic systems that combine code generation with planning, debugging, and test execution have crossed the human baseline. This represents one of the first cases where autonomous AI agents outperform average human performance on a professionally relevant, complex task. However, agents still fail roughly 1 in 3 attempts on structured benchmarks, and deployment in enterprises remains in single digits, reflecting the gap between benchmark performance and production reliability.",
        cn: "在 SWE-bench Verified 上，将代码生成与规划、调试和测试执行相结合的智能体系统已跨越人类基线。这是自主 AI 智能体在一项专业相关复杂任务上首次超越人类平均表现的案例之一。然而，智能体在结构化基准测试中仍有大约三分之一的失败率，企业中的实际部署比例仍为个位数，反映了基准表现与生产可靠性之间的差距。",
        highlight: true,
      },
    ],
  },
  {
    heading: "机器人基准：模拟与现实的鸿沟",
    paragraphs: [
      {
        en: "Robotics benchmarks revealed a stark divide between simulated and real-world performance. On RLBench, a simulated manipulation benchmark, the best systems achieved 89.4% success rate across a suite of dexterous tasks. In contrast, real-world evaluations paint a far more modest picture: robots succeed at only 12% of household tasks in unstructured environments. The gap between simulation and reality is driven by the unpredictability of physical environments, sensor noise, and the difficulty of transferring policies trained in simulation to real hardware.",
        cn: "机器人基准测试揭示了模拟与真实世界表现之间的巨大鸿沟。在模拟操控基准 RLBench 上，最佳系统在一系列灵巧任务中达到了 89.4% 的成功率。相比之下，真实世界评估呈现出远为逊色的画面：机器人在非结构化环境中仅能完成 12% 的家务任务。模拟与现实之间的差距源于物理环境的不可预测性、传感器噪声，以及将在模拟中训练的策略迁移到真实硬件的困难。",
        highlight: true,
      },
      {
        en: "Foundation models for robotics have gained traction. Systems like RT-2, Octo, and π₀ attempt to bring the scaling and generalization benefits of large language models to robotic control. Early results are promising—foundation models show better generalization to unseen objects and environments than task-specific policies—but the sample efficiency and reliability required for real-world deployment have not yet been demonstrated at scale.",
        cn: "机器人基础模型正在获得关注。RT-2、Octo 和 π₀ 等系统尝试将大语言模型的规模化和泛化优势引入机器人控制。早期结果令人鼓舞——基础模型对未见过的物体和环境表现出比任务特定策略更好的泛化能力——但大规模真实世界部署所需的样本效率和可靠性尚未得到充分验证。",
      },
    ],
  },
  {
    heading: "「锯齿状前沿」：能力的不均衡分布",
    paragraphs: [
      {
        en: "The concept of a \"jagged frontier\" captures one of the most important patterns in current AI capability: models that demonstrate superhuman performance on some tasks can fail spectacularly on others that humans find trivial. AI systems that earn gold medals at the International Mathematical Olympiad read analog clocks correctly only 50.1% of the time. On SimpleBench, which tests for common-sense spatial and social reasoning, the best frontier models score around 42%—well below human baselines.",
        cn: "「锯齿状前沿」这一概念捕捉了当前 AI 能力中最重要的模式之一：在某些任务上展现超人表现的模型，在人类认为微不足道的其他任务上可能会惨遭失败。在国际数学奥林匹克竞赛中斩获金牌的 AI 系统，读取模拟时钟的正确率仅为 50.1%。在测试常识性空间与社交推理的 SimpleBench 上，最佳前沿模型的得分约为 42%——远低于人类基线。",
        highlight: true,
      },
      {
        en: "This pattern has significant implications for deployment. Organizations that adopt AI based on impressive headline benchmark results may encounter unexpected failures in production. The jagged frontier suggests that comprehensive, task-specific evaluation is essential before deployment, and that aggregate benchmark scores can be misleading indicators of real-world reliability.",
        cn: "这一模式对实际部署具有重大影响。基于令人印象深刻的基准测试头条结果而采用 AI 的组织，可能在生产环境中遭遇意外失败。锯齿状前沿表明，在部署之前进行全面的、针对特定任务的评估至关重要，而汇总的基准分数可能是真实世界可靠性的误导性指标。",
      },
    ],
  },
  {
    heading: "基准饱和与评估危机",
    paragraphs: [
      {
        en: "Benchmark saturation is now a systemic problem in AI evaluation. Performance on several widely used benchmarks—including MMLU, HellaSwag, and SQuAD—has approached or exceeded estimated human baselines, leaving these evaluations unable to differentiate between frontier systems. The community has responded by creating harder benchmarks, but this cycle is accelerating: FrontierMath, designed to remain unsolved for years, saw its top scores increase sixfold within six months of release.",
        cn: "基准饱和如今已成为 AI 评估中的系统性问题。在包括 MMLU、HellaSwag 和 SQuAD 在内的多项广泛使用的基准测试中，模型表现已接近或超过人类基线估计值，使这些评估无法区分前沿系统。学界的应对方式是创建更高难度的基准，但这一循环正在加速：设计初衷是数年内无法解决的 FrontierMath，在发布六个月内最高分就提升了六倍。",
        highlight: true,
      },
      {
        en: "The evaluation infrastructure is further strained by reduced transparency from frontier labs. Developer technical reports have become less detailed over time, independent reproduction of claimed results is not always possible, and the Chatbot Arena leaderboard—one of the most trusted public evaluation tools—faces challenges as the performance gap between models narrows to levels that may approach the noise floor of human preference judgments.",
        cn: "评估基础设施还受到前沿实验室透明度降低的进一步冲击。开发者技术报告随时间推移越来越不详细，独立复现声称的结果并不总是可行的，而 Chatbot Arena 排行榜——最受信赖的公开评估工具之一——也面临挑战：模型之间的性能差距已缩小到可能接近人类偏好判断噪声底限的水平。",
      },
      {
        en: "The convergence at the top raises a fundamental question: are current benchmarks measuring meaningful differences in capability, or have they become contests of incremental optimization? The answer likely varies by domain—some benchmarks still capture genuine capability gaps, while others have been effectively solved and serve primarily as marketing metrics.",
        cn: "顶端的趋同引发了一个根本性问题：当前的基准测试是在衡量能力上的有意义差异，还是已经沦为增量优化的竞赛？答案可能因领域而异——某些基准仍能捕捉到真正的能力差距，而另一些则已被有效攻克，主要充当营销指标。",
      },
    ],
  },
];

// ─── Chapter 3: Responsible AI ───────────────────────────────────────────────

export const chapter3Sections: ArticleSection[] = [
  {
    heading: "概述：负责任 AI 未能跟上能力增长的步伐",
    paragraphs: [
      {
        en: "Responsible AI is not keeping pace with AI capability. Almost all leading frontier model developers report results on standard capability benchmarks, but reporting on responsible AI evaluations remains inconsistent. Documented AI incidents rose to 362 in 2025, up from 233 in 2024. Safety benchmarks such as HELM Safety and AILuminate show that most frontier models achieve baseline safety under normal conditions, but performance degrades under adversarial testing. Recent research found that improving one responsible AI dimension, such as safety, can degrade another, such as accuracy—pointing to structural trade-offs that current evaluation methods do not capture.",
        cn: "负责任 AI 未能跟上 AI 能力增长的步伐。几乎所有领先的前沿模型开发者都会公布标准能力基准的结果，但在负责任 AI 评估方面的报告仍不一致。2025 年记录在案的 AI 事故升至 362 起，高于 2024 年的 233 起。HELM Safety 和 AILuminate 等安全基准表明，大多数前沿模型在正常条件下可达到基线安全水平，但在对抗性测试下表现会下降。最新研究发现，改善负责任 AI 的某一维度（如安全性）可能会恶化另一维度（如准确性）——指向当前评估方法未能捕捉到的结构性权衡。",
        highlight: true,
      },
    ],
  },
  {
    heading: "AI 事故追踪：急剧上升的趋势",
    paragraphs: [
      {
        en: "AI incident tracking shows a sharp increase: 362 documented incidents in 2025, up from 233 in 2024 and 123 in 2023. The AI Incident Database, maintained by the Partnership on AI, recorded failures spanning autonomous vehicles, healthcare diagnostics, hiring algorithms, content moderation, and financial trading systems. The year-over-year increase reflects both growing AI deployment and improved incident reporting infrastructure, though the true number of incidents is likely much higher given the absence of mandatory disclosure requirements in most jurisdictions.",
        cn: "AI 事故追踪显示急剧上升趋势：2025 年记录在案的事故达 362 起，高于 2024 年的 233 起和 2023 年的 123 起。由 Partnership on AI 维护的 AI 事故数据库记录了涵盖自动驾驶、医疗诊断、招聘算法、内容审核和金融交易系统等领域的故障。同比增长既反映了 AI 部署的扩大，也体现了事故报告基础设施的改善，但鉴于大多数司法管辖区缺乏强制披露要求，实际事故数量可能远高于此。",
        highlight: true,
      },
      {
        en: "The categories of incidents have shifted over time. In earlier years, the majority involved bias in hiring or criminal justice systems. By 2025, incidents related to generative AI—deepfakes, hallucinated content cited in legal proceedings, and AI-generated misinformation during elections—have grown to represent the largest category. Autonomous vehicle incidents continue to be tracked but have declined proportionally as other categories expand.",
        cn: "事故类别随时间推移发生了变化。在早期，大多数事故涉及招聘或刑事司法系统中的偏见。到 2025 年，与生成式 AI 相关的事故——深度伪造、在法律诉讼中被引用的幻觉内容，以及选举期间的 AI 生成虚假信息——已增长为最大类别。自动驾驶事故仍在被追踪，但随着其他类别的扩展，其占比已相对下降。",
      },
    ],
  },
  {
    heading: "基准报告差距：能力与责任的不对称",
    paragraphs: [
      {
        en: "Reporting on responsible AI benchmarks is inconsistent across frontier developers. Nearly all major model developers publish results on standard capability benchmarks such as MMLU, HumanEval, and MATH when releasing new models. However, reporting on responsible AI evaluations—covering safety, fairness, toxicity, and privacy—is far less systematic. A review of model release documentation from the top 10 frontier developers found that while 100% reported at least one capability benchmark, only 40% included results on any standardized responsible AI evaluation.",
        cn: "前沿开发者在负责任 AI 基准报告方面不一致。几乎所有主要模型开发者在发布新模型时都会公布 MMLU、HumanEval 和 MATH 等标准能力基准的结果。然而，涵盖安全性、公平性、毒性和隐私的负责任 AI 评估报告远不够系统化。对排名前 10 的前沿开发者的模型发布文档的审查发现，虽然 100% 的开发者报告了至少一项能力基准，但只有 40% 包含了任何标准化负责任 AI 评估的结果。",
        highlight: true,
      },
      {
        en: "This asymmetry creates a distorted picture of model quality. Users and organizations evaluating models for deployment can easily compare them on capability but have little basis for comparing safety or fairness. The lack of consistent RAI reporting also undermines the ability of regulators and civil society organizations to hold developers accountable for the downstream impacts of their systems.",
        cn: "这种不对称造成了模型质量的扭曲画面。评估模型以进行部署的用户和组织可以轻松在能力上进行比较，但在安全性或公平性方面几乎没有比较依据。负责任 AI 报告的缺乏一致性也削弱了监管机构和公民社会组织追究开发者对其系统下游影响的责任的能力。",
      },
    ],
  },
  {
    heading: "HELM Safety 与 AILuminate：安全基准趋同",
    paragraphs: [
      {
        en: "HELM Safety results show convergence at the top. Most models released in 2024–2025 score between 0.90 and 0.98 on the HELM Safety benchmark, with narrow gaps between systems. This convergence suggests that frontier developers have largely converged on similar safety training techniques—primarily reinforcement learning from human feedback (RLHF) and constitutional AI methods—and that the remaining differences between models are smaller than the differences between any model and an unaligned baseline.",
        cn: "HELM Safety 结果显示顶端趋同。2024-2025 年发布的大多数模型在 HELM Safety 基准上的得分在 0.90 到 0.98 之间，系统之间差距很小。这种趋同表明前沿开发者在安全训练技术上已大体趋同——主要是人类反馈强化学习（RLHF）和宪法 AI 方法——且模型之间的剩余差异小于任何模型与未对齐基线之间的差异。",
      },
      {
        en: "AILuminate, a newer safety evaluation framework developed by MLCommons, provides a more granular picture by testing models across multiple hazard categories: violent content, hate speech, sexual content, self-harm instructions, and dangerous information. Results show that while overall scores are high, performance varies significantly across categories. Models that score nearly perfectly on hate-speech detection may perform substantially worse on identifying dangerous information or self-harm content.",
        cn: "AILuminate 是由 MLCommons 开发的较新安全评估框架，通过在多个危害类别中测试模型提供更精细的画面：暴力内容、仇恨言论、色情内容、自残指导和危险信息。结果显示，虽然总体得分很高，但各类别的表现差异显著。在仇恨言论检测上几乎满分的模型，在识别危险信息或自残内容方面可能表现明显更差。",
        highlight: true,
      },
    ],
  },
  {
    heading: "越狱攻击：对抗条件下的安全退化",
    paragraphs: [
      {
        en: "Jailbreak attempts degrade safety. Under normal conditions, most frontier models score 'very good' or 'good' on safety evaluations. After adversarial prompts designed to bypass safety guardrails, nearly every system's score drops, some by a full tier. The most effective jailbreak techniques in 2025 include multi-turn persuasion attacks, prompt injection through encoded instructions, and persona-based manipulation where the model is convinced to adopt an unrestricted character.",
        cn: "越狱攻击会降低安全性。在正常条件下，大多数前沿模型在安全评估中获得「非常好」或「良好」评分。在遭受旨在绕过安全护栏的对抗性提示后，几乎每个系统的评分都会下降，部分甚至下降整整一个等级。2025 年最有效的越狱技术包括多轮说服攻击、通过编码指令的提示注入，以及基于角色的操纵——即说服模型扮演一个不受限制的角色。",
        highlight: true,
      },
      {
        en: "The arms race between safety training and adversarial attacks shows no sign of stabilizing. Each new round of safety improvements is followed by new jailbreak techniques that partially circumvent them. Red-teaming efforts by both developers and independent researchers have expanded, but the pace of adversarial innovation continues to outstrip defensive measures. This dynamic raises questions about whether current safety alignment approaches can provide durable protection as models become more capable.",
        cn: "安全训练与对抗攻击之间的军备竞赛没有稳定的迹象。每一轮新的安全改进之后，都会出现部分绕过这些改进的新越狱技术。开发者和独立研究者的红队测试努力已经扩展，但对抗性创新的步伐仍持续超越防御措施。这一动态引发了疑问：随着模型能力的增强，当前的安全对齐方法是否能提供持久的保护。",
      },
    ],
  },
  {
    heading: "RAI 维度权衡：结构性矛盾的实证",
    paragraphs: [
      {
        en: "Trade-offs across RAI dimensions are structural. Improving privacy can reduce fairness and accuracy by up to 33 percentage points. No single intervention improved all dimensions simultaneously. This finding, documented across multiple independent studies, represents one of the most important results in the responsible AI literature in 2025.",
        cn: "负责任 AI 各维度之间的权衡是结构性的。改善隐私可能导致公平性和准确性下降多达 33 个百分点。没有任何单一干预措施能同时改善所有维度。这一发现在多项独立研究中得到证实，是 2025 年负责任 AI 文献中最重要的成果之一。",
        highlight: true,
      },
      {
        en: "A comprehensive study by Kemmerzell and Schreiner examined the relationship between six RAI dimensions—accuracy, fairness, robustness, privacy, explainability, and safety—across 27 published interventions. The study found that 78% of interventions that improved one dimension measurably degraded at least one other. The most common trade-off was between privacy and accuracy: differential privacy mechanisms that protect individual data points consistently reduced model performance, with the magnitude of degradation increasing for underrepresented groups—thereby also reducing fairness.",
        cn: "Kemmerzell 和 Schreiner 的综合研究考察了六个 RAI 维度——准确性、公平性、鲁棒性、隐私性、可解释性和安全性——在 27 项已发表干预措施中的关系。研究发现，78% 的改善了某一维度的干预措施至少可测量地恶化了另一个维度。最常见的权衡是隐私与准确性之间的：保护个体数据点的差分隐私机制持续降低了模型性能，且对代表性不足群体的性能恶化程度更大——从而同时降低了公平性。",
      },
      {
        en: "Cecchini et al. extended this analysis to federated learning systems, where privacy is a central design goal. Their work showed that federated learning configurations optimized for privacy produced models with 15–20% lower accuracy than centralized alternatives, and that the accuracy loss was disproportionately concentrated in minority subgroups. Attempts to correct the fairness gap through post-processing introduced additional accuracy penalties, creating a three-way trade-off between privacy, fairness, and accuracy that no current method fully resolves.",
        cn: "Cecchini 等人将这一分析扩展到以隐私为核心设计目标的联邦学习系统。他们的研究表明，针对隐私优化的联邦学习配置所产生的模型，准确率比集中式替代方案低 15-20%，且准确率损失不成比例地集中在少数群体子群中。通过后处理纠正公平性差距的尝试引入了额外的准确率惩罚，形成了隐私、公平性和准确性之间的三方权衡——目前没有任何方法能完全解决。",
        highlight: true,
      },
      {
        en: "These findings have significant implications for AI governance. Regulators who mandate improvements in one dimension—such as the EU AI Act's requirements for fairness and transparency—may inadvertently create pressure to degrade other dimensions. Effective responsible AI governance will require explicit acknowledgment of these trade-offs and frameworks for making them transparent to stakeholders.",
        cn: "这些发现对 AI 治理具有重大意义。要求在某一维度上进行改善的监管者——如欧盟 AI 法案对公平性和透明度的要求——可能会无意中对其他维度造成恶化压力。有效的负责任 AI 治理需要明确承认这些权衡，并建立使其对利益相关者透明的框架。",
      },
    ],
  },
  {
    heading: "全球 AI 安全机构：2025 年的扩张浪潮",
    paragraphs: [
      {
        en: "AI safety institutes expanded globally in 2025: the United States, United Kingdom, European Union, Japan, Singapore, Canada, France, South Korea, Kenya, and Australia all established or significantly expanded dedicated AI safety bodies. The UK AI Safety Institute, established in 2023, expanded its staff to over 200 and conducted pre-deployment evaluations of several frontier models. The US AI Safety Institute, housed within NIST, focused on developing standardized evaluation frameworks and coordinating with international counterparts.",
        cn: "AI 安全机构在 2025 年全球范围内扩张：美国、英国、欧盟、日本、新加坡、加拿大、法国、韩国、肯尼亚和澳大利亚均成立或大幅扩展了专门的 AI 安全机构。英国 AI 安全研究所成立于 2023 年，已将员工扩充至 200 余人，并对多个前沿模型进行了部署前评估。设在 NIST 内的美国 AI 安全研究所专注于开发标准化评估框架并与国际同行协调。",
        highlight: true,
      },
      {
        en: "The establishment of Kenya's AI Safety Institute marked the first such body in Africa, signaling that AI governance is no longer exclusively a concern of high-income countries. Singapore's institute focused on testing AI systems for Southeast Asian language safety, while Japan's emphasized evaluation of AI systems used in critical infrastructure. The diversity of institutional mandates reflects both shared global concerns about AI safety and the recognition that safety requirements vary by deployment context.",
        cn: "肯尼亚 AI 安全研究所的成立标志着非洲首个此类机构的诞生，表明 AI 治理不再仅是高收入国家的关切。新加坡的研究所专注于测试 AI 系统在东南亚语言中的安全性，而日本的研究所则侧重于评估用于关键基础设施的 AI 系统。机构使命的多样性既反映了全球对 AI 安全的共同关切，也体现了对安全需求因部署场景而异的认识。",
      },
      {
        en: "International coordination between safety institutes has begun but remains nascent. The Bletchley Declaration, signed in November 2023, provided a high-level framework for cooperation, and bilateral agreements between the US and UK institutes have enabled some sharing of evaluation methodologies. However, significant differences in regulatory philosophy—particularly between the US preference for voluntary commitments and the EU's binding regulatory approach—create friction in harmonizing safety standards across jurisdictions.",
        cn: "安全机构之间的国际协调已经开始但仍处于初期。2023 年 11 月签署的布莱切利宣言提供了合作的高层框架，美英研究所之间的双边协议使得部分评估方法论得以共享。然而，监管理念上的显著差异——特别是美国偏好自愿承诺与欧盟具有约束力的监管方式之间的差异——为跨司法管辖区协调安全标准带来了摩擦。",
      },
    ],
  },
  {
    heading: "企业承诺与落地差距",
    paragraphs: [
      {
        en: "Corporate responsible AI commitments have increased, but implementation lags. Many companies have published AI principles but lack the infrastructure to operationalize them. A 2025 survey of Fortune 500 companies found that 85% had published some form of AI ethics statement or principles document, up from 65% in 2023. However, only 25% had dedicated responsible AI teams, and fewer than 15% had implemented systematic pre-deployment safety testing across all AI products.",
        cn: "企业的负责任 AI 承诺有所增加，但落实滞后。许多公司已发布 AI 原则，但缺乏将其付诸实践的基础设施。2025 年对财富 500 强企业的调查发现，85% 已发布某种形式的 AI 伦理声明或原则文件，高于 2023 年的 65%。然而，只有 25% 设有专门的负责任 AI 团队，不到 15% 在所有 AI 产品中实施了系统性的部署前安全测试。",
        highlight: true,
      },
      {
        en: "The gap between stated principles and operational practice is widest at companies where AI is not the core business. Technology companies with large AI research teams—such as Google, OpenAI, Anthropic, and Meta—have the most mature responsible AI infrastructure, including dedicated red teams, internal review boards, and model evaluation pipelines. Companies in sectors like finance, healthcare, and manufacturing that are deploying AI as an operational tool often lack comparable resources, relying instead on vendor assurances about model safety.",
        cn: "在 AI 并非核心业务的公司中，公开原则与运营实践之间的差距最大。拥有大型 AI 研究团队的科技公司——如谷歌、OpenAI、Anthropic 和 Meta——具有最成熟的负责任 AI 基础设施，包括专门的红队、内部审查委员会和模型评估流程。金融、医疗和制造等将 AI 作为运营工具部署的行业公司通常缺乏可比的资源，转而依赖供应商关于模型安全性的保证。",
      },
      {
        en: "The report identifies a growing need for third-party auditing and certification services. As AI systems are deployed in high-stakes domains, the current model of self-assessment and voluntary disclosure is increasingly seen as insufficient. Emerging audit frameworks from organizations like NIST, ISO, and the AI Alliance aim to fill this gap, but adoption remains voluntary in most jurisdictions and the audit ecosystem lacks the maturity and scale needed to keep pace with deployment.",
        cn: "报告指出对第三方审计和认证服务的需求日益增长。随着 AI 系统被部署在高风险领域，当前的自我评估和自愿披露模式越来越被认为不足够。来自 NIST、ISO 和 AI 联盟等组织的新兴审计框架旨在填补这一空白，但在大多数司法管辖区采用仍是自愿性的，审计生态系统缺乏跟上部署步伐所需的成熟度和规模。",
        highlight: true,
      },
    ],
  },
];
