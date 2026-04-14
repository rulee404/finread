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
    isNew: true,
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
    id: "u-20250405-opinion-defi",
    date: "2025-04-05",
    type: "opinion",
    theme: "defi",
    title: "作者观点更新：DeFi 赛道 — 稳定币立法催化下的布局逻辑",
    href: "/opinions",
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
