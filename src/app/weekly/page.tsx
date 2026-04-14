import Link from "next/link";
import { getAllPosts } from "@/data/weekly";

export const metadata = {
  title: "每周投资周报 | FinRead",
};

export default function WeeklyListPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-[800px] px-5 py-10">
      <h1 className="mb-2 text-2xl font-bold text-ink">每周投资周报</h1>
      <p className="mb-8 text-sm text-muted">
        每周日发布 · 用一手数据解读本周美股动态 · 包含持仓思考与下周关注
      </p>

      <div className="space-y-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/weekly/${post.slug}`}
            className="group block rounded-xl border border-border bg-surface p-5 transition-colors hover:border-gold/20 hover:bg-surface2"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="mb-1 flex items-center gap-2">
                  <span className="rounded-md bg-gold-dim px-2 py-0.5 text-[10px] font-semibold text-gold">
                    #{post.number}
                  </span>
                  <span className="text-[11px] text-muted">{post.date}</span>
                </div>
                <h2 className="text-sm font-semibold text-ink group-hover:text-gold">
                  {post.title}
                </h2>
                <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted">
                  {post.summary}
                </p>
                <div className="mt-2 flex gap-1.5">
                  {post.tickers.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-border bg-surface2 px-1.5 py-0.5 text-[10px] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
