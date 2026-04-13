import type { ArticleSection, SummaryCard } from "@/lib/types";

export const crclQ4SummaryCards: SummaryCard[] = [
  { icon: "💰", label: "Q4 总收入", value: "$770M", note: "+77% Y/Y" },
  { icon: "📊", label: "Adj. EBITDA", value: "$167M", note: "+412% Y/Y" },
  { icon: "🪙", label: "USDC 流通量", value: "$75.3B", note: "+72% Y/Y" },
  { icon: "🔗", label: "链上交易量", value: "$12T", note: "+247% Y/Y" },
  { icon: "🏦", label: "CPN 机构入网", value: "55 家", note: "Q3 为 29 家" },
  { icon: "🌐", label: "CCTP 桥接份额", value: "62%", note: "2026 年 1 月" },
  { icon: "💶", label: "EURC 规模", value: "€389M", note: "+3.8x Y/Y" },
  { icon: "📈", label: "FY26 其他收入指引", value: "$150-170M", note: "USDC 40% CAGR" },
];

/* ═══════════════════════════════════════════════════════
   FREE PREVIEW — CEO 开场 + Q4 核心业绩
   ═══════════════════════════════════════════════════════ */

export const crclQ4TranscriptFreePreview: ArticleSection[] = [
  {
    heading: "CEO 开场：价值时代与 Circle 的定位",
    paragraphs: [
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "Now as we've achieved regulatory clarity, and as the technology has matured, we're now seeing these developments directly colliding with another major platform shift, which is the adoption of AI platforms. This value era, this combination of economic operating systems and an Internet native money layer with artificial intelligence, Agentic economic activity and automation, seems likely to drive the greatest acceleration of economic activity we've ever seen in human history, and we're really just at the beginning.",
        cn: "随着我们实现了监管清晰度，技术也已成熟，我们看到这些发展正与另一个重大平台转型直接碰撞——即 AI 平台的采用。这个价值时代，经济操作系统、互联网原生货币层与人工智能、自主经济活动和自动化的结合，似乎将推动人类历史上前所未有的经济活动加速，而我们才刚刚开始。",
        highlight: true,
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "Our aim at Circle has always been to build a new Internet financial system to build the software infrastructure that powers it, and we're more excited than ever to have that opportunity today.",
        cn: "Circle 的目标一直是构建一个新的互联网金融系统，打造驱动它的软件基础设施，我们比以往任何时候都更为此机会感到兴奋。",
      },
    ],
  },
  {
    heading: "Q4 核心业绩亮点",
    paragraphs: [
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "Let's talk about our key highlights in Q4. Our stablecoin network continued to grow. We saw USDC end the year around $75 billion in circulation, up 72% year-on-year despite some of the declines that we saw in Q4 due to the crypto market correction. We also saw tremendous ongoing growth in the amount of transactions happening on our network with on-chain USDC volume hitting nearly $12 trillion, representing 247% year-on-year growth. This continues to reflect the growing velocity and utility of digital dollars on the Internet.",
        cn: "让我们来谈谈 Q4 的关键亮点。我们的稳定币网络持续增长。USDC 年末流通量约 750 亿美元，同比增长 72%，尽管 Q4 因加密市场调整有所下降。我们还看到网络交易量的巨大增长，链上 USDC 交易量接近 12 万亿美元，同比增长 247%。这持续反映了数字美元在互联网上日益增长的流通速度和实用性。",
        highlight: true,
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "Q4 delivered very strong financial results. We realized $770 million in total revenue and reserve income in the quarter, up 77% year-on-year. Adjusted EBITDA for the quarter was $167 million, up 412% year-on-year, with an adjusted EBITDA margin of 54%. Overall, for the quarter, we had very strong yearly growth across the board.",
        cn: "Q4 交出了非常亮眼的财务业绩。本季度总收入和储备金收入为 7.7 亿美元，同比增长 77%。调整后 EBITDA 为 1.67 亿美元，同比增长 412%，调整后 EBITDA 利润率为 54%。总体而言，本季度各方面实现了非常强劲的年度增长。",
        highlight: true,
      },
    ],
  },
];

/* ═══════════════════════════════════════════════════════
   PAID CONTENT — 完整 CEO 演讲 + CFO 回顾 + 全部 Q&A
   ═══════════════════════════════════════════════════════ */

export const crclQ4TranscriptPaidContent: ArticleSection[] = [
  {
    heading: "平台扩展：Arc 测试网、CPN、StableFX",
    paragraphs: [
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "Importantly, our platform continues to expand. We launched the Testnet of Arc, our Layer 1 blockchain network, and we're on track to launch Mainnet this year. Circle Payments Network continues to see very strong volume growth and participant expansion as we continue to see traction in real-world payments and cross-border settlements. We're also adding new products. We introduced StableFX in beta, our new onchain FX app and xReserve, which supports continued expansion of USDC across a wide range of blockchain ecosystems.",
        cn: "重要的是，我们的平台持续扩展。我们推出了 Arc 的测试网——我们的 Layer 1 区块链网络，并且按计划将在今年推出主网。Circle 支付网络（CPN）持续保持非常强劲的交易量增长和参与者扩展，我们在实际支付和跨境结算方面持续获得牵引力。我们还在增加新产品，推出了处于测试阶段的 StableFX——我们新的链上外汇应用程序，以及 xReserve，支持 USDC 在广泛的区块链生态系统中持续扩展。",
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "And we now support USDC on over 30 different blockchain networks with interoperability being a key piece of Circle's platform strategy.",
        cn: "我们现在在超过 30 个不同的区块链网络上支持 USDC，互操作性是 Circle 平台战略的关键组成部分。",
      },
    ],
  },
  {
    heading: "企业合作：Intuit、Visa、Polymarket 及更多",
    paragraphs: [
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "Mainstream adoption continues to deepen across a broad range of leading enterprises and institutions. Intuit and Circle are partnering for Intuit to bring low-cost programmable money through Circle's technology to its millions of consumers and businesses.",
        cn: "主流采用持续深化，覆盖广泛的领先企业和机构。Intuit 和 Circle 正在合作，让 Intuit 通过 Circle 的技术将低成本的可编程货币带给其数百万消费者和企业。",
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "Visa continues to expand its integration of Circle stablecoins, announcing the launch of USDC settlement that permits U.S. Visa card issuers and acquirers to settle outside of normal banking hours using USDC.",
        cn: "Visa 继续扩大对 Circle 稳定币的整合，宣布推出 USDC 结算服务，允许美国 Visa 卡发行商和收单机构在正常银行工作时间之外使用 USDC 进行结算。",
        highlight: true,
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "And earlier this month, Circle and Polymarket, the largest prediction market in the world, announced a formal partnership where Polymarket will continue to advance its use of USDC as the core collateral and settlement asset for their markets, demonstrating our very strong position as the leading regulated stablecoin network.",
        cn: "本月早些时候，Circle 和全球最大的预测市场 Polymarket 宣布正式合作，Polymarket 将继续推进其使用 USDC 作为其市场的核心抵押品和结算资产，证明了我们作为领先的合规稳定币网络的强大地位。",
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "Now these are just the tip of the iceberg. Major enterprises and financial institutions continue to integrate and support USDC in their businesses. We saw firms as diverse as Cash App, Gusto, Deel, Interactive Brokers, JPMorgan and Mastercard launched products and offerings that took advantage of USDC. Right now, we are seeing more activity from start-ups, enterprises and financial firms than we've ever seen in our history.",
        cn: "这些只是冰山一角。主要企业和金融机构持续在其业务中整合和支持 USDC。我们看到 Cash App、Gusto、Deel、盈透证券（Interactive Brokers）、摩根大通和万事达卡等多元化企业推出了利用 USDC 的产品和服务。目前，我们看到来自初创公司、企业和金融公司的活动达到了历史最高水平。",
        highlight: true,
      },
    ],
  },
  {
    heading: "竞争格局：双头垄断与交易量份额",
    paragraphs: [
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "The stablecoin market continues to grow strongly, and our position in that market continues to strengthen as well. Fiat-backed stablecoins grew $85 billion in the year, with 46% year-on-year growth. Within that market, our competitive position remains strong, and we continue to maintain a significant share.",
        cn: "稳定币市场持续强劲增长，我们在该市场的地位也持续加强。法币支持的稳定币在一年内增长了 850 亿美元，同比增长 46%。在该市场中，我们的竞争地位依然强劲，持续保持显著份额。",
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "Importantly, it's a market that, despite the efforts of many other firms to enter and compete is really a market of 2 major issuers. And this reflects the very durable network effects that we maintain that are significant barriers to entry and adoption.",
        cn: "重要的是，尽管许多其他公司努力进入并竞争，这实际上是一个由两大发行商主导的市场。这反映了我们维持的非常持久的网络效应，这些是重大的进入和采用壁垒。",
        highlight: true,
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "Looking at growth in actual transaction volumes, Circle's share of transaction volume grew from 39% in the third quarter to nearly 50% in the fourth quarter. This is based on Visa's published analysis, which works to eliminate internal transactions, exchange wallet rebalancing and bots to really capture the volume that better reflects real economic activity.",
        cn: "从实际交易量的增长来看，Circle 的交易量份额从第三季度的 39% 增长到第四季度的近 50%。这是基于 Visa 发布的分析，该分析剔除了内部交易、交易所钱包再平衡和机器人活动，以更好地反映真实经济活动的交易量。",
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "You can also note that while there have been a number of other stablecoins entering the market over the past year, their usage in real transactions is effectively 0.",
        cn: "你还可以注意到，虽然过去一年有许多其他稳定币进入市场，但它们在真实交易中的使用量实际上为零。",
        highlight: true,
      },
    ],
  },
  {
    heading: "网络效应与竞争护城河",
    paragraphs: [
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "Foundationally, Circle's competitive position has been built on trust, as an audited public company with a deep commitment to compliance, as a firm regulated across jurisdictions around the world and with the highest levels of transparency possible. We enjoy the trust of major financial institutions, payments companies, enterprises, developers and end users around the world.",
        cn: "从根本上讲，Circle 的竞争地位建立在信任之上——作为一家经过审计的上市公司，对合规有着深度承诺；作为一家在全球各司法管辖区受监管的公司，拥有尽可能高的透明度。我们享有全球主要金融机构、支付公司、企业、开发者和最终用户的信任。",
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "And that trust shows up in our fundamental liquidity with $75 billion of USDC in circulation and unmatched liquidity infrastructure that in Q4 supported $163 billion of minting and redemption volume. That minting and redemption, that promise to create and redeem a digital dollar one-for-one at scale and through banking systems around the world is completely unmatched by any other player in the market.",
        cn: "这种信任体现在我们基础流动性中——USDC 流通量为 750 亿美元，以及无与伦比的流动性基础设施，Q4 支持了 1630 亿美元的铸造和赎回量。这种铸造和赎回——大规模通过全球银行系统一对一创建和赎回数字美元的承诺——是市场上任何其他参与者完全无法匹敌的。",
        highlight: true,
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "In Q4 '25, we saw distribution and network usage grow as noted, to nearly $12 trillion of onchain transaction volume, continued growth in meaningful wallets using USDC and our product platform continuing to expand. The breadth of infrastructure we provide, the breadth of liquidity services that we provide and with new applications like CPN and StableFX, our whole product platform is not something others in our market are able to replicate.",
        cn: "在 2025 年第四季度，如前所述，我们看到分发和网络使用量增长至近 12 万亿美元的链上交易量，使用 USDC 的有效钱包持续增长，我们的产品平台也在持续扩展。我们提供的基础设施广度、流动性服务广度，加上 CPN 和 StableFX 等新应用，我们整个产品平台是市场上其他参与者无法复制的。",
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "And crucially, acting as a market-neutral infrastructure, not competing with our customers and our partners and building widely accessible and usable technology across as many platforms as possible have been keys to our competitive success as well.",
        cn: "至关重要的是，作为市场中立的基础设施运营商，不与客户和合作伙伴竞争，并在尽可能多的平台上构建广泛可访问和可用的技术，这些一直是我们竞争成功的关键。",
      },
    ],
  },
  {
    heading: "平台三大支柱详解",
    paragraphs: [
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "Circle's platform has really evolved from being a stablecoin network to being a comprehensive platform and infrastructure partner for onchain finance, spanning our 3 platform pillars. Arc and our developer infrastructure, which includes the tools, the operating systems and the onchain protocols and infrastructure to enable the Internet financial system to flourish.",
        cn: "Circle 的平台已经从一个稳定币网络演变为链上金融的综合平台和基础设施合作伙伴，涵盖我们的三大平台支柱。Arc 和我们的开发者基础设施——包括工具、操作系统和链上协议及基础设施，使互联网金融系统能够蓬勃发展。",
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "Our digital assets and services which includes USDC and EURC, the world's leading regulated digital dollar and digital euro, tokenized funds such as USYC and liquidity services such as Circle Mint and xReserve that ensure liquid and available stablecoins around the world.",
        cn: "我们的数字资产和服务——包括 USDC 和 EURC（全球领先的合规数字美元和数字欧元）、USYC 等代币化基金，以及 Circle Mint 和 xReserve 等流动性服务，确保全球范围内稳定币的流动性和可用性。",
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "And our apps. CPN is a rapidly growing application service from Circle for payments. And in beta now, StableFX, an application service for FX. We continue to invest in our platform and our infrastructure to expand what we can provide to companies around the world.",
        cn: "以及我们的应用层。CPN 是 Circle 快速增长的支付应用服务。目前处于测试阶段的 StableFX 是外汇应用服务。我们持续投资我们的平台和基础设施，以扩展我们能为全球企业提供的服务。",
      },
    ],
  },
  {
    heading: "Arc 测试网进展",
    paragraphs: [
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "With Arc and our developer infrastructure, we're seeing very strong progress. Our Testnet launched in Q4 with over 100 companies in banking, capital markets, digital assets, technology, commerce and payments. All leading brands actively testing, evaluating and working with us to bring this into commercial production.",
        cn: "在 Arc 和我们的开发者基础设施方面，我们看到了非常强劲的进展。我们的测试网在 Q4 推出，有超过 100 家银行、资本市场、数字资产、科技、商务和支付领域的公司参与。所有领先品牌都在积极测试、评估并与我们合作，将其推向商业化生产。",
        highlight: true,
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "We've had near 100% uptime since the launch of our Testnet with an average of 0.5 second for transaction settlement finality, over 166 million total transactions and we're now averaging around 2.3 million daily transactions in our testing environment. We're on track to launch Mainnet in 2026, and we're thrilled with the progress we're making.",
        cn: "自测试网推出以来，我们保持了近 100% 的正常运行时间，交易结算最终确认平均为 0.5 秒，总交易量超过 1.66 亿笔，目前在测试环境中日均约 230 万笔交易。我们按计划将在 2026 年推出主网，对取得的进展感到振奋。",
      },
    ],
  },
  {
    heading: "CCTP 跨链互操作性基础设施",
    paragraphs: [
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "I also want to touch a little bit more on CCTP. Obviously, we have had very strong year-on-year growth, very strong growth in the number of transactions that are happening over this network. But I want to call your attention to the market share for CCTP. You can see here that for USDC, CCTP is nearly all of the traffic that flows from moving USDC across blockchains, but we also reached more than 50% of all bridge volume. Not just of USDC, but of all assets across chains that we track. And in fact, in January, that volume reached 62%.",
        cn: "我还想更多地谈谈 CCTP。显然，我们在同比增长方面非常强劲，该网络上的交易数量增长非常显著。但我想请大家注意 CCTP 的市场份额。你可以看到，对于 USDC 而言，CCTP 几乎是所有跨区块链移动 USDC 的流量，但我们也达到了所有桥接交易量的 50% 以上——不仅是 USDC，而是我们追踪的所有跨链资产。事实上，在 1 月份，该比例达到了 62%。",
        highlight: true,
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "CCTP is becoming a critical infrastructure for how value moves on the Internet, and we're excited with our advancements in CCTP and the advancements in our interoperability infrastructure through our acquisition of Interop Labs. Through these advancements, we're building new capabilities that are really aimed at helping asset issuers of all types, whether you're issuing tokenized stocks, tokenized funds, tokenized bank deposits and new stablecoins to be able to take advantage of this tremendous interoperability infrastructure, to enable your assets to travel on these highways that Circle has built to move value on the Internet more seamlessly. We view interoperability infrastructure as a huge opportunity for us.",
        cn: "CCTP 正在成为互联网上价值流动方式的关键基础设施。我们对 CCTP 的进步以及通过收购 Interop Labs 带来的互操作性基础设施的进步感到兴奋。通过这些进展，我们正在构建新能力，旨在帮助各类资产发行方——无论你发行的是代币化股票、代币化基金、代币化银行存款还是新的稳定币——能够利用这一巨大的互操作性基础设施，让你的资产在 Circle 构建的这些「高速公路」上行驶，更无缝地在互联网上移动价值。我们将互操作性基础设施视为巨大的机遇。",
      },
    ],
  },
  {
    heading: "其他数字资产：EURC 与 USYC",
    paragraphs: [
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "And we also saw a strong growth in Circle other digital assets. In the fourth quarter, EURC reached EUR 310 million, representing 3.8x year-on-year growth and has already grown 25% since quarter end to EUR 389 million as of February 20. This reflects the growing demand for regulated euro-denominated stablecoins and EURC remains the largest euro stablecoin.",
        cn: "我们在 Circle 其他数字资产方面也看到了强劲增长。第四季度，EURC 达到 3.1 亿欧元，同比增长 3.8 倍，截至 2 月 20 日已比季末增长 25% 至 3.89 亿欧元。这反映了对合规欧元稳定币的日益增长的需求，EURC 仍然是最大的欧元稳定币。",
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "USYC, our tokenized Money Market Fund has also grown strongly since Q3. We acquired USYC in January of last year. We integrated it into Circle and we developed a new product and distribution strategy around it, focused on tokenized collateral on digital asset exchanges. With the relaunch of USYC, we've seen accelerating growth driven by demand for USYC as collateral on leading exchanges like Binance and others. USYC assets ended the year at approximately $1.5 billion and have continued to grow to now over $1.7 billion in assets since quarter end.",
        cn: "USYC——我们的代币化货币市场基金——自 Q3 以来也强劲增长。我们在去年 1 月收购了 USYC，将其整合到 Circle 并围绕其制定了新的产品和分发策略，专注于数字资产交易所上的代币化抵押品。随着 USYC 的重新推出，我们看到加速增长，主要受 Binance 等领先交易所对 USYC 作为抵押品的需求推动。USYC 资产年末约为 15 亿美元，季末以来已持续增长至超过 17 亿美元。",
        highlight: true,
      },
    ],
  },
  {
    heading: "CPN 支付网络扩展",
    paragraphs: [
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "In our apps pillar, Circle Payments Network continues to scale. We have 55 financial institutions enrolled, that's up from 29 in the third quarter. We have 74 financial institutions that are currently in eligibility reviews, and we continue to maintain a strong pipeline with interest from hundreds of banks, payment firms and others all around the world.",
        cn: "在我们的应用层面，Circle 支付网络持续扩展。我们已有 55 家金融机构入网，高于第三季度的 29 家。目前有 74 家金融机构正在进行资格审核，我们持续保持强劲的潜在客户管线，来自全球数百家银行、支付公司和其他机构的兴趣。",
        highlight: true,
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "We've continued to expand the markets where CPN is available with live flows now in 14 markets across the Americas, EMEA and APAC. And importantly, CPN volumes continue to ramp, with annualized volume based on a trailing 30-day period as of February 20, reaching $5.7 billion. That's growing approximately 68% from our third quarter earnings update. We are aggressively investing in product development for CPN and have a strong pipeline of upcoming country launches and anticipate adding 11 new markets in the coming months.",
        cn: "我们持续扩展 CPN 可用市场，目前在美洲、EMEA 和亚太地区的 14 个市场有实时流量。重要的是，CPN 交易量持续攀升，截至 2 月 20 日基于滚动 30 天的年化交易量达到 57 亿美元，较第三季度财报更新增长约 68%。我们正在积极投资 CPN 的产品开发，有强劲的新市场上线计划，预计未来几个月将新增 11 个市场。",
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "We also launched StableFX in production beta. This extends our application layer by combining institutional-grade FX execution with onchain atomic settlement, enabling 24/7 capital-efficient currency conversion and simplified risk management. We have stablecoin issuers for many jurisdictions participating in this, and we are excited to bring this application online alongside Arc, which will benefit the entire digital asset ecosystem and provide key infrastructure as we continue to scale CPN as well.",
        cn: "我们还推出了 StableFX 的生产测试版。这扩展了我们的应用层，将机构级外汇执行与链上原子结算相结合，实现了 7×24 小时资本高效的货币兑换和简化的风险管理。许多司法管辖区的稳定币发行方都参与了这一产品，我们很高兴能将这一应用与 Arc 一起上线，这将惠及整个数字资产生态系统，并在我们持续扩展 CPN 时提供关键基础设施。",
      },
    ],
  },
  {
    heading: "Circle 的 AI 战略",
    paragraphs: [
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "I want to talk specifically about AI at Circle. We are seeing an explosion of developer activity around AI and it's becoming an important driver for Circle's platform, and we believe an important and potentially significant driver for USDC adoption. We have a number of initiatives here. As many of you may have seen, when OpenClaw, the new open-source autonomous agent system came out. We quickly responded and ran an agent-only hackathon, where agents competed with each other to build innovative applications with USDC, and agents themselves voted on the winners, and we saw incredible engagement on this.",
        cn: "我想专门谈谈 Circle 的 AI 战略。我们看到围绕 AI 的开发者活动呈爆发式增长，这正成为 Circle 平台的重要驱动力，我们相信也将成为 USDC 采用的重要且可能具有深远意义的驱动力。我们在这方面有多项举措。很多人可能已经看到，当 OpenClaw——新的开源自主 Agent 系统推出时，我们迅速响应并举办了一次纯 Agent 黑客马拉松，Agent 之间相互竞争使用 USDC 构建创新应用，Agent 自己投票选出获胜者，我们看到了令人难以置信的参与度。",
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "We're also building systems to better support Agentic payments. In fact, we just went into Testnet release of a new capability with Circle Gateway that allows for agents to autonomously and programmatically automate cross chain USDC transactions with a transaction cost of one one-thousandth of a penny. This is live on our test net, and we're thrilled with what this is going to enable in terms of Agentic payments and monetization models on the Internet. We believe that no other payment system in the world can do this.",
        cn: "我们还在构建系统以更好地支持自主 Agent 支付。事实上，我们刚刚在测试网上发布了一项新功能——Circle Gateway，允许 Agent 自主地、以编程方式自动化跨链 USDC 交易，交易成本仅为千分之一美分。这已在我们的测试网上运行，我们对它在 Agent 支付和互联网变现模式方面的潜力感到兴奋。我们相信世界上没有其他支付系统能做到这一点。",
        highlight: true,
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "We're also investing in helping developers who are building AI agents and are using AI for their own development to build faster and smarter with Circle products. We're bringing our capabilities as an infrastructure provider in skills libraries and providing servers that allow developer tools and AI agents to directly use Circle products, and we're seeing great uptake on this.",
        cn: "我们还在投资帮助那些正在构建 AI Agent 并在自身开发中使用 AI 的开发者，让他们更快、更智能地使用 Circle 产品进行构建。我们将基础设施提供商的能力整合到技能库中，并提供服务器让开发者工具和 AI Agent 能直接使用 Circle 产品，我们看到了很好的采用率。",
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "Now inside Circle, AI is also becoming foundational infrastructure across all of our functions. We began our work with AI like many companies over the last 2 years, and our investments there are accelerating. We are making core AI infrastructure and automation a critical component that's embedded into all of our operations, agenetic infrastructure, specialized tooling and specific AI playbooks. We're building the governance that will allow all of our employees to self-serve, develop, deploy and use AI agents across their functions. And we're deepening AI integration across every aspect of our product development, design, engineering and deployment life cycle and seeing very strong results. Our product velocity is accelerating and I anticipate that to continue alongside the exponential improvements we're seeing from AI coding agents.",
        cn: "在 Circle 内部，AI 也正在成为所有职能部门的基础设施。和许多公司一样，我们在过去两年开始了 AI 工作，投资正在加速。我们正在将核心 AI 基础设施和自动化作为嵌入到所有运营中的关键组成部分——Agent 基础设施、专业工具和特定的 AI 剧本。我们正在构建治理框架，让所有员工都能在其职能范围内自助开发、部署和使用 AI Agent。我们正在深化 AI 在产品开发、设计、工程和部署生命周期各方面的整合，并看到了非常强劲的成果。我们的产品交付速度正在加速，我预计这将随着 AI 编码 Agent 的指数级改进而继续。",
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "Now my own belief is that AI platforms, AI agents and blockchain-based economic operating systems will support trustworthy, automated, transparent and hyper-efficient infrastructures that are going to be the underpinnings of the future of the global economic system. And I believe that this is going to be one of the most accelerated periods of technology transformation in the history of the world, and it really is just thrilling to be here building core infrastructure that can help to underpin this new economic system. I've never been more excited about Circle's market position, platform stack and our growth opportunities.",
        cn: "我个人相信，AI 平台、AI Agent 和基于区块链的经济操作系统将支持可信赖的、自动化的、透明的和超高效的基础设施，这将成为未来全球经济系统的基础。我相信这将是世界历史上技术转型最快速的时期之一，能够在这里构建有助于支撑这一新经济系统的核心基础设施，真的令人振奋。我从未像现在这样对 Circle 的市场地位、平台技术栈和增长机会感到兴奋。",
        highlight: true,
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "With that, let me turn it over to Jeremy Fox-Geen, our CFO, to take you through the financial results.",
        cn: "接下来，让我把话筒交给我们的 CFO Jeremy Fox-Geen，为大家介绍财务业绩。",
      },
    ],
  },
  {
    heading: "CFO 财务回顾",
    paragraphs: [
      {
        speaker: "Jeremy Fox-Geen",
        speakerTitle: "Chief Financial Officer",
        en: "Thank you, Jeremy, and good morning, everyone. I'm pleased to report we delivered strong financial results in the fourth quarter and full fiscal year, closing out an exceptional year of growth and momentum for Circle. I'll start by reviewing the quarter and then provide our forward guidance.",
        cn: "谢谢 Jeremy，大家早上好。我很高兴地向大家报告，我们在第四季度和整个财年交出了强劲的财务业绩，为 Circle 异常增长和充满动力的一年画上了句号。我将先回顾本季度，然后提供前瞻指引。",
      },
      {
        speaker: "Jeremy Fox-Geen",
        speakerTitle: "Chief Financial Officer",
        en: "USDC in circulation was $75.3 billion at year-end, up 72% year-on-year and notably grew faster than the overall fiat-backed stablecoin market. USDC held within Circle's platform infrastructure or on-platform USDC, grew 5.6x year-on-year to $12.5 billion at year-end, representing 17% of total circulation.",
        cn: "年末 USDC 流通量为 753 亿美元，同比增长 72%，值得注意的是增速超过了整体法币支持稳定币市场。Circle 平台基础设施内持有的 USDC（即平台上的 USDC）同比增长 5.6 倍，年末达到 125 亿美元，占总流通量的 17%。",
        highlight: true,
      },
      {
        speaker: "Jeremy Fox-Geen",
        speakerTitle: "Chief Financial Officer",
        en: "The reserve return rate was 3.81% for the fourth quarter, down 68 basis points year-on-year, reflecting the decline in SOFR during this period. Total revenue and reserve income increased 77% year-on-year to $770 million for the quarter as growth in average USDC in circulation and other revenue was partially offset by the lower reserve return rate.",
        cn: "第四季度储备金回报率为 3.81%，同比下降 68 个基点，反映了该时期 SOFR 的下降。本季度总收入和储备金收入同比增长 77% 至 7.7 亿美元，因为 USDC 平均流通量和其他收入的增长部分被较低的储备金回报率所抵消。",
      },
      {
        speaker: "Jeremy Fox-Geen",
        speakerTitle: "Chief Financial Officer",
        en: "Total distribution transaction and other costs increased 52% year-on-year to $461 million. I do want to remind you that distribution costs in the fourth quarter of 2024 included the previously disclosed onetime payment of $60 million to a large distribution partner. Revenue less distribution cost margin was 40.1% in the fourth quarter with a modest quarter-on-quarter increase of 0.6 percentage points, primarily reflecting the impact from growth in other revenue.",
        cn: "分发交易和其他成本同比增长 52% 至 4.61 亿美元。我想提醒大家，2024 年第四季度的分发成本包括此前披露的向一家大型分发合作伙伴支付的 6000 万美元一次性款项。第四季度收入减去分发成本利润率为 40.1%，环比小幅提升 0.6 个百分点，主要反映了其他收入增长的影响。",
      },
      {
        speaker: "Jeremy Fox-Geen",
        speakerTitle: "Chief Financial Officer",
        en: "Other revenue increased to $37 million in the fourth quarter. Subscription and services revenue was $24.7 million in the fourth quarter, primarily from revenue associated with our blockchain network partnerships. Transaction revenue was $12.2 million, primarily from blockchain rewards revenue, where our revenues from running a Super Validator on the Canton Network increased substantially as Canton Coin began trading during the quarter.",
        cn: "第四季度其他收入增至 3700 万美元。订阅和服务收入为 2470 万美元，主要来自区块链网络合作伙伴关系的收入。交易收入为 1220 万美元，主要来自区块链奖励收入，其中我们在 Canton 网络上运行超级验证器的收入因 Canton Coin 在本季度开始交易而大幅增长。",
      },
      {
        speaker: "Jeremy Fox-Geen",
        speakerTitle: "Chief Financial Officer",
        en: "Total revenue and reserve income less distribution transaction and other costs grew 136% year-over-year to $309 million in the fourth quarter. Adjusted operating expenses grew 32% year-on-year to $144 million for the quarter as we continue to invest in growing our platform and distribution at this pivotal time for our industry.",
        cn: "第四季度总收入和储备金收入减去分发交易及其他成本同比增长 136% 至 3.09 亿美元。调整后运营费用同比增长 32% 至本季度的 1.44 亿美元，因为我们在行业的关键时期持续投资平台和分发增长。",
      },
      {
        speaker: "Jeremy Fox-Geen",
        speakerTitle: "Chief Financial Officer",
        en: "Adjusted operating expenses include payroll taxes, including payroll taxes related to stock-based compensation, which were $8.4 million in the fourth quarter while we had no such expense in the prior year period. Beginning in the first quarter of 2026, we have amended the definition of adjusted operating expenses. First, to exclude stock-based compensation, payroll tax expense to align with our treatment of stock based compensation expense. And second, to exclude certain onetime legal expenses, acquisition-related costs and were relevant restructuring expenses all of which totaled $2.9 million in the fourth quarter as they reflect the same adjustments as in our adjusted EBITDA measure. Based on this amended definition, adjusted operating expenses would have been $133 million in the fourth quarter and would have grown 28% year-on-year on a comparable basis.",
        cn: "调整后运营费用包括工资税，包括与股权激励相关的工资税，第四季度为 840 万美元，而去年同期没有此类费用。从 2026 年第一季度开始，我们修改了调整后运营费用的定义：第一，排除与股权激励相关的工资税费用，以与我们对股权激励费用的处理保持一致；第二，排除某些一次性法律费用、收购相关成本以及相关的重组费用，第四季度合计 290 万美元，因为这些反映了与调整后 EBITDA 指标相同的调整。基于这一修改后的定义，第四季度调整后运营费用将为 1.33 亿美元，在可比基础上同比增长 28%。",
      },
      {
        speaker: "Jeremy Fox-Geen",
        speakerTitle: "Chief Financial Officer",
        en: "Adjusted EBITDA grew 412% year-on-year to $167 million, reflecting the operating leverage inherent in our model. The prior year adjusted EBITDA included the onetime distribution payment that I previously mentioned. Adjusted EBITDA margin was 54% in the fourth quarter.",
        cn: "调整后 EBITDA 同比增长 412% 至 1.67 亿美元，反映了我们模型固有的运营杠杆。上年调整后 EBITDA 包含了我之前提到的一次性分发支付。第四季度调整后 EBITDA 利润率为 54%。",
        highlight: true,
      },
    ],
  },
  {
    heading: "FY2025 全年指引回顾",
    paragraphs: [
      {
        speaker: "Jeremy Fox-Geen",
        speakerTitle: "Chief Financial Officer",
        en: "I want to take a moment to briefly recap our FY '25 guidance and results. First, our guidance philosophy. We are building our business for long-term success. And moreover, several of our most impactful performance drivers are visible to the market in real time. As such, we do not give detailed quarterly or full financial guidance, we guide only on certain metrics to help our investors better understand our expected performance trajectory. We will update this guidance when we expect our performance to materially deviate from guidance.",
        cn: "我想简要回顾一下 FY2025 的指引和业绩。首先谈我们的指引理念。我们正在为长期成功而构建业务。此外，我们最具影响力的几个绩效驱动因素对市场是实时可见的。因此，我们不提供详细的季度或完整的财务指引，我们只对某些指标提供指引，以帮助投资者更好地了解我们预期的业绩轨迹。当我们预期业绩将实质性偏离指引时，我们将更新指引。",
      },
      {
        speaker: "Jeremy Fox-Geen",
        speakerTitle: "Chief Financial Officer",
        en: "USDC in circulation at year-end grew 72% year-on-year. FY '25 other revenue of $110 million exceeded our guidance of $90 million to $100 million. Fourth quarter results came in better than expected, largely driven by a $7 million benefit as Canton coin began trading. FY '25 RLDC margin of 39.4% exceeded our guidance of approximately 38%. FY '25 adjusted operating expenses of $508 million was in line with guidance.",
        cn: "年末 USDC 流通量同比增长 72%。FY2025 其他收入 1.1 亿美元超过了我们 9000 万至 1 亿美元的指引。第四季度业绩好于预期，主要得益于 Canton Coin 开始交易带来的 700 万美元收益。FY2025 RLDC 利润率 39.4% 超过了我们约 38% 的指引。FY2025 调整后运营费用 5.08 亿美元符合指引。",
        highlight: true,
      },
    ],
  },
  {
    heading: "FY2026 前瞻指引",
    paragraphs: [
      {
        speaker: "Jeremy Fox-Geen",
        speakerTitle: "Chief Financial Officer",
        en: "Let me conclude with comments on our guidance for FY 2026. We do not give guidance on USDC circulation or growth. We are at the beginning of meaningful shifts in the global markets for money, and we expect both long-term growth and quarter-on-quarter variability. As previously noted, we would anticipate USDC to grow at a 40% CAGR over a multiyear through cycle.",
        cn: "最后谈谈 FY2026 的指引。我们不对 USDC 流通量或增长给出指引。我们正处于全球货币市场重大转变的开端，预期长期增长和季度间波动性并存。如前所述，我们预计 USDC 将以 40% 的多年跨周期复合增长率增长。",
        highlight: true,
      },
      {
        speaker: "Jeremy Fox-Geen",
        speakerTitle: "Chief Financial Officer",
        en: "We anticipate FY '26 other revenue to be between $150 million and $170 million. We anticipate the FY '26 RLDC margin to be between 38% and 40%. We anticipate the FY '26 adjusted operating expenses to be between $570 million and $585 million, reflecting growing investments in building our platform capabilities and global partnerships.",
        cn: "我们预计 FY2026 其他收入在 1.5 亿至 1.7 亿美元之间。预计 FY2026 RLDC 利润率在 38% 至 40% 之间。预计 FY2026 调整后运营费用在 5.7 亿至 5.85 亿美元之间，反映了对平台能力和全球合作伙伴关系建设的持续投资。",
      },
      {
        speaker: "Jeremy Fox-Geen",
        speakerTitle: "Chief Financial Officer",
        en: "As noted before, beginning in the first quarter of 2026, adjusted operating expenses will exclude payroll tax expense related to stock-based compensation, which totaled $20.6 million in FY '25, as well as certain onetime legal expenses, acquisition-related costs and where relevant restructuring expenses, all of which totaled $10 million in FY '25. Our 2026 guided range reflects this definitional change as does the FY '25 comparable figure on this slide of $478 million.",
        cn: "如前所述，从 2026 年第一季度开始，调整后运营费用将排除与股权激励相关的工资税费用（FY2025 合计 2060 万美元），以及某些一次性法律费用、收购相关成本和相关重组费用（FY2025 合计 1000 万美元）。我们 2026 年的指引范围反映了这一定义变化，FY2025 的可比数字为 4.78 亿美元。",
      },
      {
        speaker: "Jeremy Fox-Geen",
        speakerTitle: "Chief Financial Officer",
        en: "Overall, we have delivered a strong close to a critical year for Circle with meaningful growth and strong profitability. We are only just beginning to attack the opportunity before us, and we remain excited about our future. I want to thank the team here at Circle for your continued hard work to thank our investors and analysts for your support and engagement. With that, operator, we can now start the Q&A portion of the call.",
        cn: "总体而言，我们以有意义的增长和强劲的盈利能力为 Circle 关键的一年画上了完美句号。我们才刚刚开始攻克面前的机遇，我们对未来依然充满期待。我要感谢 Circle 团队的持续努力，感谢投资者和分析师的支持与参与。接下来，接线员，我们可以开始电话会的问答环节了。",
        highlight: true,
      },
    ],
  },
  {
    heading: "Q&A #1 — Devin Ryan (Citizens JMP Securities)：AI Agent 与 Arc 代币",
    paragraphs: [
      {
        speaker: "Devin Patrick Ryan",
        speakerTitle: "Citizens JMP Securities, LLC, Research Division",
        en: "[Question on AI Agent opportunity] ...kind of channels down to one one-thousandth of a penny. And in fact, we just went in Testnet last week with a feature that is designed for autonomous agents called Circle Gateway, which is a feature that would allow autonomous agents to hold a balance and spend not just on Arc, but on other networks and have a transaction cost of one one-thousandth of a penny and get that value moved in less than a second to all these other apps and services that are out on these networks.",
        cn: "[关于 AI Agent 机会的提问] ……把成本压到千分之一美分。事实上，上周我们刚在测试网上推出了一项专为自主 Agent 设计的功能——Circle Gateway，该功能允许自主 Agent 持有余额并在 Arc 以及其他网络上消费，交易成本仅为千分之一美分，并在不到一秒的时间内将价值转移到这些网络上的所有应用和服务。",
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "So we're building the primitives, we're building it at the operating system level, the infrastructure level, we're building the tooling. And we're really engaged in actually marketing to agents that are autonomously out there and want to build. So a lot more to come from us here, and we're really pleased. And I think we — again, we talk about money velocity and how effectively networks and infrastructure like what we've built will lead to higher and higher amounts of money velocity.",
        cn: "所以我们正在构建基础组件，在操作系统层面、基础设施层面构建，我们正在打造工具。我们真正在做的是向那些自主存在且想要构建的 Agent 进行营销。我们在这方面还有很多东西要推出，我们非常满意。我们再次谈到货币流通速度，以及像我们构建的这样的网络和基础设施将如何有效地推动越来越高的货币流通速度。",
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "And my own view, which is in my opening comments as well is in a world of tens or even hundreds of billions of AI agents, the velocity of money is just going to be multiple orders of magnitude higher than it is today in the existing economic system. And so we're building a new economic infrastructure. We're building a new Internet financial system. And I think we're very optimistic that Circle can play a really key role in this convergence between AI and stablecoins and blockchains.",
        cn: "我个人的观点——也在我的开场白中提到过——在一个有数百甚至数千亿 AI Agent 的世界中，货币流通速度将比今天现有经济系统高出多个数量级。所以我们正在构建一个新的经济基础设施，一个新的互联网金融系统。我认为我们非常乐观，Circle 可以在 AI、稳定币和区块链的融合中发挥真正关键的作用。",
        highlight: true,
      },
      {
        speaker: "Devin Patrick Ryan",
        speakerTitle: "Citizens JMP Securities, LLC, Research Division",
        en: "Yes. A great response, and it will be fascinating to follow this evolution. Maybe just a faster follow-up, but on just Arc token, any update on kind of the considerations there, how that's evolving? And then any sense of timing of when you might make a decision on whether you would launch a token for Arc?",
        cn: "很好的回答，跟踪这一演变将会非常精彩。快速跟进一下——关于 Arc 代币，在考量方面有什么更新？进展如何？你们可能在什么时间点做出是否为 Arc 推出代币的决定？",
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "Yes. A couple of things I can say. I think we're continuing to explore the Arc token. It's, I think, a very good exploration. We're getting a very good understanding of how a token can play a key role in providing stakeholder incentives, governance, security, utility and other things on the Arc network. And so that exploration continues.",
        cn: "有几点可以说。我们正在继续探索 Arc 代币。我认为这是一个非常好的探索。我们对代币如何在 Arc 网络上为利益相关者激励、治理、安全、实用性等方面发挥关键作用有了很好的理解。这一探索还在继续。",
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "We aren't communicating about any specific time line or other because we're still in that exploration. But as noted, we're making tremendous progress with Arc and we're making very strong progress towards Arc Mainnet, and we're very excited that come into play, and we expect to see some amazing companies participating in running the Arc infrastructure, deploying apps on the infrastructure and also providing foundational infrastructure to asset issuers and AI agents, a wide array of use cases on it. So we're pleased with the progress. And of course, as we have more to say about that, we'll share that publicly.",
        cn: "我们没有就任何具体时间线进行沟通，因为仍在探索中。但如前所述，我们在 Arc 方面取得了巨大进展，向 Arc 主网推进非常顺利，我们非常兴奋。我们预计将看到一些令人惊叹的公司参与运行 Arc 基础设施、在其上部署应用程序，并为资产发行方和 AI Agent 提供基础设施——应用场景广泛。对进展感到满意。当然，有更多要说的时候，我们会公开分享。",
      },
    ],
  },
  {
    heading: "Q&A #2 — Joseph Vafi (Canaccord Genuity)：GENIUS 与 CLARITY 法案",
    paragraphs: [
      {
        speaker: "Joseph Anthony Vafi",
        speakerTitle: "Canaccord Genuity Corp., Research Division",
        en: "Great progress. Just maybe we'll just regulatory backdrop a little bit, Jeremy and Jeremy. GENIUS has been in place now for a couple of quarters. Just wondering what kind of tangible signs of progress you've seen directly from GENIUS? And then the follow-up would be on CLARITY, where we sit now, your views on it. Clearly, the stablecoins are kind of in the middle of the compromise and discussion there. So your comments and thoughts there.",
        cn: "进展很大。关于监管背景，想简单聊聊，两位 Jeremy。GENIUS 法案实施已经几个季度了。想知道你们直接从 GENIUS 看到了哪些切实的进展迹象？后续问题是关于 CLARITY 法案，目前的进展以及你们的看法。显然，稳定币在那里的妥协和讨论中处于中心位置。请谈谈你们的评论和想法。",
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "Sure. So first on GENIUS, GENIUS has absolutely continued to be a tailwind for our business. And I think the sector as a whole. It has created this legal foundation for major institutions to come into this market. We've seen follow-on guidance from the likes of the SEC and the CFTC as they're clarifying how effectively what would be GENIUS compliant stablecoins can be used as collateral on CFTC markets.",
        cn: "好的。首先关于 GENIUS，GENIUS 绝对持续为我们的业务带来顺风。我认为对整个行业都是如此。它为大型机构进入这个市场创造了法律基础。我们看到 SEC 和 CFTC 等机构发布了后续指导意见，阐明了符合 GENIUS 法规的稳定币如何有效地用作 CFTC 市场的抵押品。",
        highlight: true,
      },
    ],
  },
  {
    heading: "Q&A #3 — John Todaro (Needham)：Arc 代币化愿景与 AI 行业顺风",
    paragraphs: [
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "So if I'm issuing a tokenized stock, and I want that tokenized stock to be able to run on Robinhood's L2 and on Coinbase's, onchain exchange and on some other tokenized environment that supports these assets. The people who are issuing assets really need to know that they can do it in a safe way, in a liquid way and have that kind of distribution. So we've built the highways. CCTP in January was over 60% of all traffic moving across these different networks.",
        cn: "如果我要发行代币化股票，我想让这个代币化股票能在 Robinhood 的 L2 上、Coinbase 的链上交易所上以及其他支持这些资产的代币化环境上运行。资产发行方确实需要知道他们可以安全地、有流动性地这样做，并获得这种分发。所以我们建造了这些高速公路。CCTP 在 1 月份占所有在这些不同网络间移动的流量的 60% 以上。",
        highlight: true,
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "And with the new technologies that we're bringing into Arc around this, we believe that we can light up those highways for any asset issuer. And so again, back to the vision side, big picture, this is a general purpose OS for economic activity on the Internet. As we come into the market in this environment where we have demands from people who want to build very, very cost-efficient, capital-efficient AI transactions, we have demand from people who want to build tokenization applications and get liquidity and distribution for those. We think Arc and our interoperability infrastructure will be very, very well suited for that environment.",
        cn: "借助我们为 Arc 引入的新技术，我们相信我们能为任何资产发行方点亮这些高速公路。再次回到愿景层面——大局观来看，这是互联网上经济活动的通用操作系统。在我们进入这个市场的环境中，有人想构建非常高效、资本高效的 AI 交易，有人想构建代币化应用并获得流动性和分发。我们认为 Arc 和我们的互操作性基础设施将非常适合这种环境。",
      },
      {
        speaker: "John Todaro",
        speakerTitle: "Needham & Company, LLC, Research Division",
        en: "That's great. That's very helpful. And then I guess just as a follow-up, going back to the Agentic AI comments, I would agree with you. Just with the way some of the crypto equities have been trading and then just the crypto token market in general, is agenetic AI and payments and all that within those ecosystems? Do you see the excitement kind of extending beyond stablecoins in Arc? Could this be a general tailwind for the sector?",
        cn: "非常好，很有帮助。作为后续问题，回到 Agent AI 的话题，我同意你的看法。鉴于一些加密股票的交易方式以及整个加密代币市场，Agent AI、支付以及这些生态系统中的所有内容——你是否看到这种兴奋感超越了 Arc 中的稳定币？这会成为整个行业的普遍顺风吗？",
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "I mean I think this is one of the most exciting — obviously, I'm biased, but I think this is one of the most exciting kind of points of convergence out there. If I'm a developer building AI agents, and I want to build AI agents that can enter into contracts with other agents that can enter into contracts with humans that might have disputes that need proof of data or things that happen that need to execute those contracts and move money if I'm thinking about building an organization that is mostly consists of some humans and some AI agents, and I want to build the underlying governance mechanisms, how that's going to work, blockchain infrastructure is going to be how that happens. We need cryptographic proof. It's the only thing that will allow us to trust the activity and the data and the transactions of these agents.",
        cn: "我认为这是最令人兴奋的融合点之一——显然我有偏见，但我确实这么认为。如果我是一个构建 AI Agent 的开发者，我想构建能与其他 Agent 签订合约、能与人类签订合约、可能存在需要数据证明的争议、需要执行这些合约并转移资金的 AI Agent——如果我想构建一个主要由一些人类和一些 AI Agent 组成的组织，并想构建底层治理机制来运作——区块链基础设施就是实现这一切的方式。我们需要密码学证明。这是唯一能让我们信任这些 Agent 的活动、数据和交易的东西。",
        highlight: true,
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "And so we're seeing that in our developer activity. We're seeing that in the Arc developer engagement where start-up founders who are coming in from the AI space are realizing like this is kind of a back plane that is really, really helpful. And if you go back and think about other big platform shift, there was sort of — sometimes there's the sort of 2 sides of the coin and you had the rise of mobile, which was obviously the surface area for creating applications and that corresponded to the rise in cloud platforms, which could actually be the back end and scale the back end for mobile. And so they work kind of hand-in-hand. And so I very much believe starting now, really starting now in 2026 that AI platforms and these blockchain operating system platforms will be kind of hand in glove for people who want to build for this new AI driven economic system.",
        cn: "我们在开发者活动中看到了这一点。在 Arc 的开发者参与中，来自 AI 领域的初创公司创始人正在意识到这是一个非常有用的底层平面。回顾其他大的平台转型——有时候就像硬币的两面——移动端的崛起显然是创建应用的表面积，与之对应的是云平台的崛起，它实际上可以作为移动端的后端并扩展后端。它们是相辅相成的。所以我非常相信，从现在开始——真正从 2026 年开始——AI 平台和这些区块链操作系统平台将成为想要为这个新的 AI 驱动经济系统构建产品的人的左膀右臂。",
      },
    ],
  },
  {
    heading: "Q&A #4 — Pete Christiansen (Citi)：CPN 详细用例与 Agent 商业模式影响",
    paragraphs: [
      {
        speaker: "Peter Corwin Christiansen",
        speakerTitle: "Citigroup Inc., Research Division",
        en: "Impressive and rapid progress on a number of fronts here. And the competitive moat looks stronger than ever. Jeremy, I was wondering if you could provide some underlying color on CPN onboarding and flows, perhaps initial use cases, sense of stickiness, growth per FI partner that sort of thing? And then as a follow-up regarding the conversation on agentic commerce, which looks incredibly compelling, how should investors think about this opportunity transforming Circle's operating/financial model?",
        cn: "在多个方面取得了令人印象深刻的快速进展，竞争护城河看起来比以往任何时候都要强大。Jeremy，能否提供一些关于 CPN 入网和流量的底层细节——也许是初始用例、粘性感受、每个金融机构合作伙伴的增长等？作为后续问题，关于 Agent 商务的讨论看起来极其引人注目，投资者应该如何看待这一机会对 Circle 运营/财务模式的转变？",
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "Sure. So on CPN, as you saw from the results, we are seeing very steady and very strong growth in the kind of key things that we're focused on now, which is when we launch this last June, it was at sort of state 0 with no financial institutions or just a couple and the technology is just getting off the ground. We have been progressing through product iterations and then commercial iterations, as noted, we now have 55 financial institutions on the network. That's up sequentially considerably the number of financial institutions wanting to add to the network continues to grow and be robust.",
        cn: "好的。在 CPN 方面，从业绩中可以看到，我们在关注的关键领域看到了非常稳定和强劲的增长。去年 6 月推出时，基本处于起步状态——没有金融机构或只有几家，技术刚刚起步。我们经历了产品迭代和商业迭代，如前所述，现在有 55 家金融机构在网络上。环比大幅增长，希望加入网络的金融机构数量持续增长且保持强劲。",
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "And then the flows, which I can characterize a little bit more about. The flows have grown as well. So from a standing start to an annualized TPV of about $5.7 billion as of last Friday, up I think, 68% since the last time we talked to you guys. We're very pleased with what we're seeing there. We are — a couple of things I'd say is there are more and more larger types of firms that are — can support larger flows that we're very focused on coming on to the network, and that's a key goal. From a product perspective, we want to increase the velocity of everything that happens, the velocity of how these members can join and implement and operationalize for a lot of financial institutions, they've never dealt with blockchains. They've never dealt with stablecoins. And so kind of streamlining how they can do that and then making sure that the highest demand corridors have good redundancies, have good players in those.",
        cn: "关于流量，我可以再多说一些。流量也在增长。从零开始到截至上周五年化 TPV 约 57 亿美元，我认为自上次交流以来增长了 68%。对此我们非常满意。有几点要说——越来越多的大型机构能够支持更大的流量，这是我们非常专注于引入网络的目标。从产品角度，我们想提高一切的速度——这些成员如何加入、实施和运营的速度。对很多金融机构来说，它们从未接触过区块链和稳定币，所以要简化它们的操作流程，同时确保需求最高的走廊有良好的冗余和优质的参与者。",
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "But what we're seeing in terms of use cases is this is very much B2B cross-border merchant settlement as major drivers. And we're seeing that in the markets that you would not be surprised to see businesses that are exporters out of Asia, and importers in both other emerging markets and developed markets, we're seeing some application flows that are very clearly — can be south to south and north to south remittance applications.",
        cn: "我们看到的用例方面，主要驱动力是 B2B 跨境商户结算。在你不会感到惊讶的市场中——来自亚洲的出口商，以及其他新兴市场和发达市场的进口商——我们看到了一些非常明显的南南和北南汇款应用流量。",
        highlight: true,
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "So we're seeing the use cases we want to see. There's certainly a lot more to come there. And we're, again, very pleased with the success. I made the comment on the earnings call that we've got a lot of product investments here. We have ambitious goals here in terms of what this can scale to be. And ultimately, obviously, as this starts to get to more meaningful scale, we can start to monetize this, and our partners are already starting to monetize this. So that's a bit on CPN.",
        cn: "我们看到了我们想看到的用例。未来肯定还有更多。我们对这些成功非常满意。我在财报电话会上提到，我们在这里有大量的产品投资。我们有雄心勃勃的目标。最终，随着规模变得更有意义，我们可以开始变现，我们的合作伙伴已经在开始变现了。以上是关于 CPN 的部分。",
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "And then on Agentic and kind of the impact for us. We think about this in a few ways. I think one is just as a major new demand driver for the utility of our stablecoin network. So AI agents as consumers of this as essentially end customers in a sense that are driving stablecoin transaction volume, driving balances of stablecoins, driving stablecoins out into more use cases and businesses that are not crypto-native but are kind of interacting with this new Agentic economy.",
        cn: "关于 Agent 对我们的影响，我们从几个角度来思考。首先，这是稳定币网络效用的重大新需求驱动力。AI Agent 作为消费者，实际上是推动稳定币交易量、推动稳定币余额、将稳定币推向更多非加密原生但正在与这种新 Agent 经济互动的用例和企业的最终客户。",
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "I think it's a way for us to kind of accelerate into other types of software-based institutions that see that they need to have their products be consumable by AI agents and maybe with different pricing and economics and where, again, the standards that we're building around Agentic payments could play a role. But also this can drive fundamentally traffic on Arc and growth on Arc. And over time, as we've noted, we believe that Arc can create new kind of transaction-based revenue streams. And so the velocity of that, the scale of that is, again, early, but we think could be very significant over time.",
        cn: "这也是我们加速进入其他类型的基于软件的机构的一种方式——这些机构看到它们需要让产品能被 AI Agent 消费，可能有不同的定价和经济模式——我们围绕 Agent 支付构建的标准可以在其中发挥作用。此外，这还能从根本上推动 Arc 上的流量和增长。随着时间推移，我们相信 Arc 能创造新型的基于交易的收入流。其速度和规模目前还处于早期，但我们认为随着时间推移可能会非常显著。",
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "And those are a few of the things. And I think we'll have more to say about this, obviously, as it progresses. But what we've seen literally just over the last 3 to 4 weeks has been really eye-opening, and we've been happy that we've had product and technology ready to go for — and we have been working on some of the standards in this space now for some time and are ready to go for this kind of lift off moment that seems to be happening.",
        cn: "这些是其中几个方面。随着进展，我们会有更多要分享。但过去 3-4 周所见确实令人大开眼界，我们很高兴产品和技术已准备就绪——我们在这个领域的标准方面已经工作了一段时间，已准备好迎接似乎正在发生的起飞时刻。",
      },
    ],
  },
  {
    heading: "Q&A #5 — Dan Dolev (Mizuho)：其他收入构成",
    paragraphs: [
      {
        speaker: "Jeremy Fox-Geen",
        speakerTitle: "Chief Financial Officer",
        en: "In addition, we also run validator infrastructure, and we mentioned that in my opening remarks is that this quarter, in particular, because of the trading — the listing of Canton coin and the share price movement, we recognized unusually high revenue in this quarter, particularly for that. Now we're not guiding on those building blocks. All of these monetizing products and services only started in the monetizable form in really the fourth quarter of 2024 and the first quarter of 2025 and onwards. So it's very, very early days for these products. But given that, collectively, this revenue line is only a year old, we're very pleased with where we ended up with $110 million for the year.",
        cn: "此外，我们还运行验证器基础设施，我在开场白中提到过——本季度特别是因为 Canton Coin 的上市和价格变动，我们在本季度确认了异常高的收入。我们不对这些组成部分提供指引。所有这些可变现的产品和服务实际上只是从 2024 年第四季度和 2025 年第一季度才开始可变现的形式。所以对于这些产品来说还处于非常早期。但鉴于这条收入线总共只有一年历史，全年 1.1 亿美元的成绩让我们非常满意。",
      },
    ],
  },
  {
    heading: "Q&A #6 — Ken Suchoski (Autonomous Research)：分发成本与 Coinbase 关系",
    paragraphs: [
      {
        speaker: "Kenneth Christopher Suchoski",
        speakerTitle: "Autonomous Research US LP",
        en: "Circle has seen some nice leverage on distribution costs. I wanted to focus there. I mean the Coin agreement is what it is, but wanted to get your latest thinking on what's happening outside of Coinbase in terms of distribution costs and how those conversations are going? Because those non Coinbase distribution costs have been pretty stable like the last couple of quarters. So just any update there would be great.",
        cn: "Circle 在分发成本方面看到了不错的杠杆。我想重点关注这里。我的意思是，Coinbase 的协议就是那样，但想了解你们对 Coinbase 之外的分发成本的最新想法——那些对话进展如何？因为非 Coinbase 的分发成本在过去几个季度一直相当稳定。任何更新都好。",
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "Yes. I can take part of that, and if Jeremy wants to add anything, he can as well. I think we are in a really strong position because USDC has the strength of its network effects, which is that if you're building a product or service, and you want to have a compliant liquid available, interoperable digital dollar, USDC is the top choice.",
        cn: "好的，我来回答一部分，Jeremy 有补充的话可以加上。我认为我们处于非常有利的地位，因为 USDC 拥有网络效应的力量——如果你正在构建产品或服务，想要一个合规的、流动的、可用的、可互操作的数字美元，USDC 是首选。",
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "And so what we see is just many, many products being built and launched that use USDC and connect to our stablecoin network and drive demand and drive liquidity and that's valuable for those products. Those products are tapping into essentially this globally available, nearly free dollar payment system. And so as that happens organically, that's kind of the organic developer-driven, institutionally-driven flywheels. That drives growth in USDC, and in those institutions, we don't need to go and do incentive deals or other things with. And so we're — I think as we've said, we're disciplined about where we think it makes sense to have an incentive relationship where it makes sense, where we can see that the partner can actually drive growth and can drive meaningful growth. So we look at those as factors like where is the growth? Where is the meaningful growth? And I think that contributes to the kind of strength of the fundamental kind of unit economics that we've been able to maintain here. And that's sort of the big picture.",
        cn: "我们看到的是大量产品正在使用 USDC 构建和推出，连接到我们的稳定币网络，推动需求和流动性——这对这些产品是有价值的。这些产品正在接入一个基本上全球可用、近乎免费的美元支付系统。当这些有机地发生时，这就是有机的、开发者驱动的、机构驱动的飞轮效应。这推动了 USDC 的增长，对于这些机构，我们不需要与其进行激励交易或其他安排。正如我们所说，我们对在哪些地方建立激励关系保持纪律——在有意义的地方，在我们能看到合作伙伴确实能推动增长、推动有意义的增长的地方。我们将这些视为因素——增长在哪里？有意义的增长在哪里？我认为这有助于我们能够维持的根本性单位经济效益的力度。这就是大局。",
        highlight: true,
      },
      {
        speaker: "Jeremy Allaire",
        speakerTitle: "Co-Founder, Chairman & CEO",
        en: "Jeremy may have other comments to add?",
        cn: "Jeremy 可能有其他补充？",
      },
      {
        speaker: "Jeremy Fox-Geen",
        speakerTitle: "Chief Financial Officer",
        en: "Yes. I'd add a couple of things to that important strategic narrative, which is — and we've said this, I think, before on these calls, which is growth in USDC distribution partners, some of which is incentivized. Also leads to a growth in the strength of the underlying network effects around USDC, which I spoke about the elements of that earlier in this call, right? And that makes it more attractive for other market participants to independently build and use USDC and provide products and services to their customers.",
        cn: "是的，我补充几点。我们之前在电话会上也说过——USDC 分发合作伙伴的增长（其中一些是激励性的），也会加强 USDC 底层网络效应的力度——我在本次电话会早些时候谈到了这些要素。这使得其他市场参与者更有吸引力地独立构建和使用 USDC，为其客户提供产品和服务。",
      },
      {
        speaker: "Jeremy Fox-Geen",
        speakerTitle: "Chief Financial Officer",
        en: "The underlying point of that, which is any distribution relationship we have also strengthens USDC that is not subject to any distribution relationship or indeed any incentive partnership. And that's a fundamental networks have network effects, strength to RLDC margin and our underlying economics.",
        cn: "核心要点是——我们拥有的任何分发关系也会加强不受任何分发关系或激励合作约束的 USDC。这是网络效应的根本力量，也是 RLDC 利润率和我们底层经济模型的力量所在。",
      },
    ],
  },
  {
    heading: "Q&A #7 — James Faucette (Morgan Stanley)",
    paragraphs: [
      {
        speaker: "Operator",
        speakerTitle: "",
        en: "Your next question comes from the line of James Faucette of Morgan Stanley.",
        cn: "下一个问题来自摩根士丹利的 James Faucette。",
      },
    ],
  },
];
