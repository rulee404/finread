import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border px-5 py-8">
      <div className="mx-auto max-w-[1080px]">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div>
            <div className="text-sm font-bold text-white">
              Fin<span className="text-gold">Read</span>
            </div>
            <p className="mt-1 max-w-xs text-xs text-muted">
              聚焦 AI · DeFi · Space 三大赛道
              <br />
              SEC 原典解读 · 中英对照 · 作者观点实时公开
            </p>
          </div>

          <div className="flex gap-10">
            <div>
              <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted">
                赛道
              </div>
              <div className="flex flex-col gap-1">
                <Link href="/theme/ai" className="text-xs text-theme-ai hover:underline">AI 人工智能</Link>
                <Link href="/theme/defi" className="text-xs text-theme-defi hover:underline">DeFi 去中心化金融</Link>
                <Link href="/theme/space" className="text-xs text-theme-space hover:underline">Space 太空经济</Link>
              </div>
            </div>
            <div>
              <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted">
                内容
              </div>
              <div className="flex flex-col gap-1">
                <Link href="/opinions" className="text-xs text-muted hover:text-white">投资观点</Link>
                <Link href="/article" className="text-xs text-muted hover:text-white">全文库 ☕</Link>
                <Link href="/weekly" className="text-xs text-muted hover:text-white">每周周报</Link>
                <Link href="/pro" className="text-xs text-muted hover:text-white">Pro 会员</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-border pt-4 text-center text-[10px] text-muted/60">
          <p>
            数据与引文来源于 SEC / IR 披露文件 · 作者观点不构成投资建议 · 以官方原文为准
          </p>
          <p className="mt-1">
            © {new Date().getFullYear()} FinRead. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
