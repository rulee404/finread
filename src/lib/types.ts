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
  theme: "ai" | "defi" | "space";
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

export interface Opinion {
  id: string;
  date: string;
  theme: "ai" | "defi" | "space" | "macro";
  title: string;
  summary: string;
  content: string;
  sentiment?: "bullish" | "bearish" | "neutral";
  tickers?: string[];
}

export interface Article {
  id: string;
  date: string;
  theme: "ai" | "defi" | "space" | "macro";
  title: string;
  subtitle: string;
  sourceType: "earnings" | "research" | "filing" | "interview";
  sourceLabel: string;
  tickers: string[];
  price: number;
  freePreview: ArticleSection[];
  paidContent: ArticleSection[];
  wordCount: number;
}

export interface ArticleSection {
  heading?: string;
  paragraphs: ArticleParagraph[];
}

export interface ArticleParagraph {
  en: string;
  cn: string;
  highlight?: boolean;
  speaker?: string;
  speakerTitle?: string;
}

/* ── Company Documents (per-company, per-quarter) ── */

export type DocCategory = "transcript" | "10k" | "10q" | "8k" | "shareholder-letter" | "earnings-ppt" | "press-release";

export interface SummaryCard {
  icon: string;
  label: string;
  value: string;
  note?: string;
}

export interface CompanyDoc {
  id: string;
  ticker: string;
  quarter: string;
  category: DocCategory;
  categoryLabel: string;
  title: string;
  date: string;
  summary: string;
  summaryCards?: SummaryCard[];
  price: number;
  wordCount: number;
  externalUrl?: string;
  freePreview: ArticleSection[];
  paidContent: ArticleSection[];
}

export interface RelatedContent {
  id: string;
  ticker: string;
  type: "interview" | "kol" | "analysis" | "news";
  typeLabel: string;
  title: string;
  author?: string;
  date: string;
  summary: string;
  price: number;
  wordCount: number;
  freePreview: ArticleSection[];
  paidContent: ArticleSection[];
}

export interface Discussion {
  id: string;
  ticker: string;
  date: string;
  title: string;
  content: string;
  sentiment?: "bullish" | "bearish" | "neutral";
}

/* ── Institutional Research Reports ── */

export interface ResearchReport {
  id: string;
  date: string;
  theme: "ai" | "defi" | "space" | "macro";
  institution: string;
  title: string;
  subtitle: string;
  tickers: string[];
  coverPoints: string[];
  freePreview: ArticleSection[];
  paidContent: ArticleSection[];
  wordCount: number;
  tipAmount: number;
  pdfUrl?: string;
}
