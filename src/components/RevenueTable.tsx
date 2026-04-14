import type { RevenueRow } from "@/lib/types";

export default function RevenueTable({ rows }: { rows: RevenueRow[] }) {
  return (
    <div className="overflow-x-auto rounded-[10px] border border-border bg-surface">
      <table className="w-full border-collapse text-xs">
        <thead>
          <tr>
            <th className="border-b-2 border-border px-3 py-2.5 text-left text-[10px] font-medium uppercase tracking-wider text-muted">
              收入明细
            </th>
            <th className="border-b-2 border-border px-3 py-2.5 text-right text-[10px] font-medium uppercase tracking-wider text-muted">
              FY2025
            </th>
            <th className="border-b-2 border-border px-3 py-2.5 text-right text-[10px] font-medium uppercase tracking-wider text-muted">
              FY2024
            </th>
            <th className="border-b-2 border-border px-3 py-2.5 text-right text-[10px] font-medium uppercase tracking-wider text-muted">
              Y/Y
            </th>
            <th className="border-b-2 border-border px-3 py-2.5 text-left text-[10px] font-medium uppercase tracking-wider text-muted">
              备注
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            if (row.isSpacer) {
              return <tr key={`sp-${i}`}><td colSpan={5} className="py-1" /></tr>;
            }
            return (
              <tr
                key={`${row.label}-${i}`}
                className={
                  row.isTotal
                    ? "bg-gold-dim/40"
                    : row.isSectionTotal
                      ? "bg-accent-green/[0.03]"
                      : ""
                }
              >
                <td
                  className={`border-b border-white/[0.03] px-3 py-2 ${
                    row.isTotal || row.isSectionTotal
                      ? "font-semibold text-ink"
                      : "text-text"
                  } ${row.isTotal ? "text-sm" : ""}`}
                >
                  {row.label}
                </td>
                <td
                  className={`border-b border-white/[0.03] px-3 py-2 text-right tabular-nums ${
                    row.isTotal || row.isSectionTotal
                      ? "font-semibold text-ink"
                      : "text-text"
                  } ${row.isTotal ? "text-sm" : ""}`}
                >
                  {row.fy2025}
                </td>
                <td className="border-b border-white/[0.03] px-3 py-2 text-right tabular-nums text-text">
                  {row.fy2024}
                </td>
                <td
                  className={`border-b border-white/[0.03] px-3 py-2 text-right tabular-nums ${
                    row.direction === "up"
                      ? "text-accent-green"
                      : row.direction === "down"
                        ? "text-accent-red"
                        : "text-muted"
                  }`}
                >
                  {row.yoy}
                </td>
                <td className="border-b border-white/[0.03] px-3 py-2 text-muted">
                  {row.note ?? ""}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
