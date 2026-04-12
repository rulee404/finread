import type { Quote } from "@/lib/types";

const borderColors: Record<string, string> = {
  green: "border-l-accent-green",
  cyan: "border-l-accent-cyan",
  purple: "border-l-accent-purple",
  gold: "border-l-gold",
};

export default function QuoteCard({ quote }: { quote: Quote }) {
  return (
    <div
      className={`rounded-r-[10px] border-l-[3px] bg-surface px-5 py-4 ${
        borderColors[quote.color ?? "green"]
      }`}
    >
      <div className="mb-1.5 text-[11px] font-bold text-muted">
        {quote.speaker} — {quote.role}
      </div>
      <p className="text-[13px] italic leading-relaxed text-white/80">
        &ldquo;{quote.text}&rdquo;
      </p>
      <div className="mt-2.5 border-t border-dashed border-white/5 pt-2.5 text-xs leading-relaxed text-muted">
        {quote.textCn}
      </div>
    </div>
  );
}
