export interface KPI {
  label: string;
  value: string;
  note?: string;
  change?: string;
  direction?: "up" | "down" | "flat";
}

export interface Quote {
  speaker: string;
  role: string;
  text: string;
  textCn: string;
  color?: "green" | "cyan" | "purple" | "gold";
}

export interface SummaryBlock {
  title: string;
  content: string;
}

export interface RevenueRow {
  label: string;
  fy2025: string;
  fy2024: string;
  yoy: string;
  direction: "up" | "down" | "flat";
  note?: string;
  isTotal?: boolean;
  isSectionTotal?: boolean;
  isSpacer?: boolean;
}

export interface DocItem {
  type: "10k" | "ppt" | "8k" | "transcript" | "special";
  typeLabel: string;
  title: string;
  meta: string;
  links: { label: string; href: string; primary?: boolean }[];
}

export interface WeeklyRef {
  title: string;
  date: string;
  slug: string;
  description: string;
}

export interface CompanyData {
  ticker: string;
  name: string;
  exchange: string;
  sector: string;
  tagline: string;
  iconLetter: string;
  iconGradient: string;
  tags: { label: string; value: string }[];
  kpis: KPI[];
  summaries: SummaryBlock[];
  quotes: Quote[];
  revenueTable: RevenueRow[];
  docs: DocItem[];
  transcriptPreview: Quote[];
  weeklyRefs: WeeklyRef[];
}
