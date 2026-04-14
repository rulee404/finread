"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function BottomCTA() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      setLoggedIn(!!data.user);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setLoggedIn(!!session?.user);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <section className="rounded-2xl border border-gold/20 bg-gradient-to-br from-gold-dim/60 to-gold-dim/20 p-8 text-center">
      <h3 className="text-lg font-bold text-white">加入 FinRead</h3>
      <p className="mt-2 max-w-lg mx-auto text-sm text-muted">
        每周日发布投资周报 · 财报季实时解读 · 三赛道持仓逻辑公开分享
      </p>
      <div className="mt-5 flex flex-wrap justify-center gap-3">
        {loggedIn ? (
          <>
            <Link
              href="/weekly"
              className="rounded-lg bg-gold px-6 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
            >
              阅读周报
            </Link>
            <Link
              href="/pro"
              className="rounded-lg border border-gold/30 bg-gold-dim px-6 py-2.5 text-sm font-semibold text-gold transition-colors hover:bg-gold/20"
            >
              了解 Pro 会员
            </Link>
          </>
        ) : (
          <>
            <Link
              href="/register"
              className="rounded-lg bg-gold px-6 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
            >
              免费注册
            </Link>
            <Link
              href="/pro"
              className="rounded-lg border border-gold/30 bg-gold-dim px-6 py-2.5 text-sm font-semibold text-gold transition-colors hover:bg-gold/20"
            >
              了解 Pro 会员
            </Link>
          </>
        )}
      </div>
    </section>
  );
}
