export type UpdateType =
  | "earnings"
  | "report"
  | "opinion"
  | "transcript"
  | "filing"
  | "weekly";

export interface SiteUpdate {
  id: string;
  date: string;
  type: UpdateType;
  theme?: "ai" | "defi" | "space" | "macro";
  title: string;
  href: string;
  isNew?: boolean;
}

/**
 * Add new updates at the TOP of this array.
 * The component will display the most recent ones.
 */
const updates: SiteUpdate[] = [
  {
    id: "u-20260416-asml-q1",
    date: "2026-04-16",
    type: "earnings",
    theme: "ai",
    title: "新增：ASML Q1 2026 Transcript + IR Presentation 全文中英对照（含 PDF 下载）",
    href: "/company/asml",
    isNew: true,
  },
  {
    id: "u-20250414-opinion-ai-index",
    date: "2026-04-14",
    type: "opinion",
    theme: "ai",
    title: "观点更新：《AI Index Report 2026》一条主线与五条速读",
    href: "/opinions#opinion-ai-index-2026",
    isNew: true,
  },
  {
    id: "u-20250413-stanford-ai",
    date: "2025-04-13",
    type: "report",
    theme: "ai",
    title: "重磅：Stanford HAI AI Index Report 2026 全文中英对照 + PDF 下载",
    href: "/reports/stanford-ai-index-2026",
  },
  {
    id: "u-20250413-crcl-q1",
    date: "2025-04-13",
    type: "earnings",
    theme: "defi",
    title: "Circle (CRCL) Q1 FY2026 Earnings Call 全文中英对照上线",
    href: "/company/crcl",
    isNew: true,
  },
  {
    id: "u-20250412-ms-nvda",
    date: "2025-04-12",
    type: "report",
    theme: "ai",
    title: "新增研报：Morgan Stanley — NVIDIA AI Infrastructure Spending Outlook",
    href: "/reports/ms-nvda-ai-infra-2025",
  },
  {
    id: "u-20250410-gs-stablecoin",
    date: "2025-04-10",
    type: "report",
    theme: "defi",
    title: "新增研报：Goldman Sachs — Stablecoins & Digital Payments",
    href: "/reports/gs-defi-stablecoin-2025",
  },
  {
    id: "u-20250408-hood-q4",
    date: "2025-04-08",
    type: "transcript",
    theme: "defi",
    title: "Robinhood (HOOD) Q4 FY2025 财报电话会 完整翻译更新",
    href: "/company/hood/doc/hood-q4fy25-transcript",
  },
  {
    id: "u-20250406-ubs-rklb",
    date: "2025-04-06",
    type: "report",
    theme: "space",
    title: "新增研报：UBS — Rocket Lab 垂直整合太空平台深度分析",
    href: "/reports/ubs-rklb-space-2025",
  },
  {
    id: "u-20250403-weekly12",
    date: "2025-04-03",
    type: "weekly",
    title: "投资周报 #12：三赛道持仓回顾与 Q2 展望",
    href: "/weekly/weekly-12",
  },
];

export function getLatestUpdates(count = 5): SiteUpdate[] {
  return updates.slice(0, count);
}
