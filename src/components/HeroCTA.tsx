"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function HeroCTA() {
  const [email, setEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      setEmail(data.user?.email ?? null);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setEmail(session?.user?.email ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="mt-6 flex justify-center gap-3">
        <span className="rounded-lg bg-gold/20 px-5 py-2.5 text-sm text-transparent">
          占位
        </span>
      </div>
    );
  }

  if (email) {
    return (
      <div className="mt-6 flex flex-col items-center gap-3">
        <div className="flex items-center gap-2 text-sm text-muted">
          <span className="inline-block h-2 w-2 rounded-full bg-accent-green" />
          已登录为
          <span className="font-semibold text-gold">{email.split("@")[0]}</span>
        </div>
        <div className="flex gap-3">
          <Link
            href="/opinions"
            className="rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
          >
            作者观点
          </Link>
          <Link
            href="/pro"
            className="rounded-lg border border-gold/30 bg-gold-dim px-5 py-2.5 text-sm font-semibold text-gold transition-colors hover:bg-gold/20"
          >
            了解 Pro 会员
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 flex justify-center gap-3">
      <Link
        href="/register"
        className="rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
      >
        免费订阅
      </Link>
      <Link
        href="/opinions"
        className="rounded-lg border border-gold/30 bg-gold-dim px-5 py-2.5 text-sm font-semibold text-gold transition-colors hover:bg-gold/20"
      >
        作者观点
      </Link>
    </div>
  );
}
