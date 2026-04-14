import type { ArticleSection, SummaryCard } from "@/lib/types";

import { introSections, takeawaysSections, chapter1Sections } from "./intro-ch1";
import { chapter2Sections, chapter3Sections } from "./ch2-ch3";
import { chapter4Sections, chapter5Sections } from "./ch4-ch5";
import { chapter6Sections, chapter7Sections, chapter8Sections, chapter9Sections } from "./ch6-ch9";

export const stanfordAISummaryCards: SummaryCard[] = [
  { icon: "🏢", label: "产业主导", value: "90%+", note: "前沿模型由产业界产出" },
  { icon: "🇺🇸", label: "美国 AI 投资", value: "$2,859 亿", note: "2025 年私募投资" },
  { icon: "🤖", label: "企业采用率", value: "88%", note: "至少一项业务功能使用 AI" },
  { icon: "📊", label: "生成式 AI 采用", value: "53%", note: "三年内人口级采用率" },
  { icon: "💰", label: "消费者价值", value: "$1,720 亿", note: "美国年化消费者剩余" },
  { icon: "🧪", label: "AI 药物候选", value: "300+", note: "进入临床试验 (2025)" },
  { icon: "⚖️", label: "全球 AI 立法", value: "75 项", note: "32 国新增法规 (2025)" },
  { icon: "🌍", label: "AI 事故", value: "362 起", note: "同比增长 55% (2025)" },
  { icon: "💻", label: "SWE-bench", value: "~100%", note: "编程基准一年内达到人类基线" },
  { icon: "🔬", label: "报告总页数", value: "423 页", note: "九章 + 附录完整翻译" },
];

export const stanfordAIFreePreview: ArticleSection[] = [
  ...introSections,
  ...takeawaysSections,
];

export const stanfordAIPaidContent: ArticleSection[] = [
  ...chapter1Sections,
  ...chapter2Sections,
  ...chapter3Sections,
  ...chapter4Sections,
  ...chapter5Sections,
  ...chapter6Sections,
  ...chapter7Sections,
  ...chapter8Sections,
  ...chapter9Sections,
];
