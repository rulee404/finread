import type { KPI } from "@/lib/types";

export default function KPIGrid({ items, cols = 4 }: { items: KPI[]; cols?: 2 | 3 | 4 }) {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
  }[cols];

  return (
    <div className={`grid gap-2.5 ${gridCols}`}>
      {items.map((kpi) => (
        <div
          key={kpi.label}
          className="rounded-lg border border-border bg-surface2 px-3.5 py-3"
        >
          <div className="text-[10px] uppercase tracking-wider text-muted">
            {kpi.label}
          </div>
          <div className="mt-0.5 text-xl font-bold text-white">{kpi.value}</div>
          {kpi.change && (
            <div
              className={`mt-0.5 text-[11px] ${
                kpi.direction === "up"
                  ? "text-accent-green"
                  : kpi.direction === "down"
                    ? "text-accent-red"
                    : "text-muted"
              }`}
            >
              {kpi.change}
            </div>
          )}
          {kpi.note && !kpi.change && (
            <div className="mt-0.5 text-[11px] text-muted">{kpi.note}</div>
          )}
        </div>
      ))}
    </div>
  );
}
