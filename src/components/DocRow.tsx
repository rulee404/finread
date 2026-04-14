import type { DocItem } from "@/lib/types";

const iconStyles: Record<string, string> = {
  "10k": "bg-accent-red/10 text-accent-red",
  ppt: "bg-accent-blue/10 text-accent-blue",
  "8k": "bg-accent-blue/10 text-accent-blue",
  transcript: "bg-accent-purple/10 text-accent-purple",
  special: "bg-gold-dim text-gold",
};

export default function DocRow({ doc }: { doc: DocItem }) {
  return (
    <div className="flex items-center gap-3 border-b border-border px-4 py-3 transition-colors last:border-b-0 hover:bg-wash-row">
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold ${
          iconStyles[doc.type] ?? "bg-surface2 text-muted"
        }`}
      >
        {doc.typeLabel}
      </div>

      <div className="min-w-0 flex-1">
        <div className="truncate text-[13px] font-semibold text-ink">
          {doc.title}
        </div>
        <div className="text-[11px] text-muted">{doc.meta}</div>
      </div>

      <div className="flex shrink-0 gap-1.5">
        {doc.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`inline-flex items-center gap-1 whitespace-nowrap rounded-md border px-2.5 py-1.5 text-[11px] transition-colors ${
              link.primary
                ? "border-gold/30 bg-gold-dim text-gold hover:bg-gold/20"
                : "border-border bg-surface2 text-text hover:bg-wash-hover"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
