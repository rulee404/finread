import type { Opinion } from "@/lib/types";

const opinions: Opinion[] = [
  {
    id: "opinion-ai-index-2026",
    date: "2026-04-14",
    theme: "ai",
    title: "《AI Index Report 2026》阅读笔记：一条主线与五条速读",
    summary:
      "Stanford HAI 年度指数适合当作「年度对齐」工具：谁在产出前沿模型、算力与成本曲线、资本与企业采用、科学与医疗落地、立法节奏与公众情绪——串起来就是一整年的 AI 投资叙事。",
    content:
      "我把这份报告当成「地图」而不是「预言」：它不替你做买卖决策，但把分散在论文、融资、基准测试、调查和立法里的信号，压成一条可以反复对照的主线。\n\n一条主线\n产业与学术在「重要模型」产出上的分工继续倾斜；美国、中国、欧盟在模型与算力上的格局清晰可量化；模型在标准任务上越来越强，但在更难、更综合的推理与评测上仍有明显短板——这意味着估值里既要计价「能力跃迁」，也要计价「瓶颈与反复」。\n\n五条速读\n（1）研发：资源向头部集中，训练前沿模型的成本曲线本身就会影响谁能留在牌桌上。\n（2）能力：多模态与 Agent 化拉长推理链，算力从「训练一次性」更多转向「推理持续性」。\n（3）经济：私募与企业采用数据是需求侧的温度计，但要把「试点」和「规模化」分开看。\n（4）治理：立法与披露密度上升，合规与信任成本会写进商业模式，而不只是公关话术。\n（5）社会：公众兴奋与担忧并存——这会影响产品形态、默认安全设计与监管窗口。\n\n对读者的用法\n先读指数里的图表与结论段，再回到你关心的标的：算力链、云与应用、合规与数据、以及跨市场的政策差。本站已整理该报告的中英对照精读与 PDF 原文入口，便于你对照原表核对。\n\n以上仅为个人阅读笔记，不构成投资建议。",
    sentiment: "neutral",
    tickers: ["NVDA"],
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
