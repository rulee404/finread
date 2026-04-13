export type ThemeId = "ai" | "defi" | "space";

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  subtitle: string;
  color: string;
  colorDim: string;
  gradient: string;
  heroLine: string;
  thesis: string;
  keyMetrics: { label: string; value: string }[];
  investmentAngles: { title: string; description: string }[];
}

export const themes: Record<ThemeId, ThemeConfig> = {
  ai: {
    id: "ai",
    name: "AI",
    subtitle: "人工智能",
    color: "var(--color-theme-ai)",
    colorDim: "var(--color-theme-ai-dim)",
    gradient: "linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #c084fc 100%)",
    heroLine: "从工具到劳动力的范式跃迁",
    thesis:
      "Scaling Law + Agent 化正让 AI 从「工具」变成「劳动力」。算力、能源、模型、应用四层价值链中，基础设施层确定性最高，应用层分化最大。我们重点跟踪 GPU 算力巨头与 AI 赋能的垂直 SaaS。",
    keyMetrics: [
      { label: "2035 TAM", value: "$15T" },
      { label: "AI 算力 CAGR", value: "~45%" },
      { label: "AI 编程渗透率", value: ">50%" },
      { label: "Agent 市场 (2028)", value: "$150B" },
    ],
    investmentAngles: [
      {
        title: "算力基础设施",
        description:
          "GPU/ASIC 芯片、数据中心能源 (核电 SMR)、GPU 云 — 卖铲子永远是最确定的生意",
      },
      {
        title: "模型与平台",
        description:
          "基础模型公司 (OpenAI, Anthropic)、开源生态 (Meta LLaMA)、Agent 框架",
      },
      {
        title: "垂直应用",
        description:
          "AI 编程 (Cursor)、AI 制药、具身智能机器人 — 分化最大但天花板也最高",
      },
    ],
  },
  defi: {
    id: "defi",
    name: "DeFi",
    subtitle: "去中心化金融",
    color: "var(--color-theme-defi)",
    colorDim: "var(--color-theme-defi-dim)",
    gradient: "linear-gradient(135deg, #34d399 0%, #10b981 50%, #059669 100%)",
    heroLine: "金融互联网化的第二波浪潮",
    thesis:
      "第一波是 Fintech（把传统金融搬上互联网），第二波是 DeFi（用代码重写金融规则）。稳定币立法推进、ETF 资金涌入、RWA 上链加速 — TradFi 正以前所未有的速度拥抱链上金融。",
    keyMetrics: [
      { label: "稳定币流通", value: ">$200B" },
      { label: "DeFi TVL 目标", value: "$2T (2035)" },
      { label: "RWA 上链", value: "$500B (2028)" },
      { label: "链上交易占比", value: "持续上升" },
    ],
    investmentAngles: [
      {
        title: "交易基础设施",
        description:
          "合规交易所 (Coinbase)、DEX (Uniswap)、衍生品 (Deribit) — 交易是加密最确定的变现模型",
      },
      {
        title: "稳定币与支付",
        description:
          "USDC 发行 (Circle)、跨境支付网络 (CPN)、稳定币立法催化 — 链上美元是 DeFi 的血液",
      },
      {
        title: "新型金融服务",
        description:
          "全栈经纪 (Robinhood)、预测市场、RWA 代币化 — 万物上链正在发生",
      },
    ],
  },
  space: {
    id: "space",
    name: "Space",
    subtitle: "太空经济",
    color: "var(--color-theme-space)",
    colorDim: "var(--color-theme-space-dim)",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%)",
    heroLine: "人类文明的第三增长曲线",
    thesis:
      "SpaceX 将发射成本压至历史低点，卫星互联网 + 在轨经济正在开启。太空经济从「政府项目」变成「商业市场」。发射、卫星通信、遥感数据是最快变现的赛道，在轨制造和深空开采是更远的 10 年愿景。",
    keyMetrics: [
      { label: "2035 太空经济", value: "$1.8T" },
      { label: "发射成本降幅", value: "-90% / 10Y" },
      { label: "卫星互联网用户", value: ">100M" },
      { label: "Starlink 估值", value: ">$200B" },
    ],
    investmentAngles: [
      {
        title: "发射与运输",
        description:
          "SpaceX (Starlink IPO)、Rocket Lab (RKLB) — 太空经济的核心瓶颈与入口",
      },
      {
        title: "卫星通信与数据",
        description:
          "手机直连卫星 (ASTS)、遥感影像 (Planet Labs) — 最快产生收入的赛道",
      },
      {
        title: "在轨经济 & 深空",
        description:
          "在轨制造、太空碎片清理 (Astroscale)、月球资源 — 超长期但想象力最大",
      },
    ],
  },
};

export function getTheme(id: string): ThemeConfig | undefined {
  return themes[id as ThemeId];
}

export function getAllThemes(): ThemeConfig[] {
  return Object.values(themes);
}
