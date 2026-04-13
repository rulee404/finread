import Link from "next/link";

export const metadata = {
  title: "支付成功 | FinRead",
};

export default function CheckoutSuccessPage() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-sm flex-col items-center justify-center px-5 py-16 text-center">
      <div className="mb-4 text-4xl">✅</div>
      <h1 className="mb-2 text-2xl font-bold text-white">支付成功！</h1>
      <p className="mb-6 text-sm text-muted">
        感谢支持！你购买的内容已解锁，可以返回文档页查看完整全文。
      </p>
      <div className="flex gap-3">
        <Link
          href="/"
          className="rounded-lg border border-border bg-surface2 px-5 py-2.5 text-sm text-text transition-colors hover:bg-white/[0.06]"
        >
          返回首页
        </Link>
        <Link
          href="/theme/defi"
          className="rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
        >
          继续浏览
        </Link>
      </div>
    </div>
  );
}
