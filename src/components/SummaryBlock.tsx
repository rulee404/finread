import type { SummaryBlock as SummaryBlockType } from "@/lib/types";

export default function SummaryBlock({ block }: { block: SummaryBlockType }) {
  return (
    <div className="rounded-r-lg border-l-[3px] border-l-gold bg-surface2 px-4 py-3.5">
      <div className="mb-1 text-[11px] font-bold uppercase tracking-wider text-gold">
        {block.title}
      </div>
      <div className="whitespace-pre-line text-[13px] leading-relaxed text-muted">
        {block.content}
      </div>
    </div>
  );
}
