import Link from "next/link";

export default function ProGate({ message }: { message?: string }) {
  return (
    <div className="rounded-[10px] border border-dashed border-gold/30 bg-surface2 p-5 text-center">
      <p className="text-[13px] text-muted">
        🔒 {message ?? "以下内容需要 Pro 会员查看完整中英对照"}
      </p>
      <Link
        href="/pro"
        className="mt-3 inline-block rounded-lg bg-gold-dim px-5 py-2 text-sm font-semibold text-gold transition-colors hover:bg-gold/20"
      >
        升级 Pro · ¥49/月
      </Link>
    </div>
  );
}
