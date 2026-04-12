import type { CompanyData } from "@/lib/types";

export default function CompanyHeader({ company }: { company: CompanyData }) {
  return (
    <div className="flex flex-wrap items-start gap-4 py-7">
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-extrabold text-white"
        style={{ background: company.iconGradient }}
      >
        {company.iconLetter}
      </div>

      <div>
        <h1 className="text-xl font-bold tracking-tight text-white md:text-2xl">
          {company.name}
        </h1>
        <p className="mt-1 text-xs text-muted">
          {company.ticker} · {company.exchange} · {company.sector} ·{" "}
          {company.tagline.split("—")[0].trim()}
        </p>

        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {company.tags.map((tag) => (
            <span
              key={tag.label}
              className="rounded border border-border bg-surface px-2 py-0.5 text-[10px] text-muted"
            >
              <span className="font-semibold text-gold">{tag.label}</span>{" "}
              {tag.value}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
