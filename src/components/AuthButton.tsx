"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function AuthButton() {
  const [email, setEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

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

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    setEmail(null);
    router.refresh();
  }

  if (loading) {
    return (
      <span className="rounded-full border border-border px-3 py-1.5 text-xs text-muted/40">
        …
      </span>
    );
  }

  if (email) {
    return (
      <div className="flex items-center gap-1.5">
        <span className="max-w-[120px] truncate rounded-full border border-gold/20 bg-gold-dim px-3 py-1.5 text-xs text-gold">
          {email.split("@")[0]}
        </span>
        <button
          onClick={handleLogout}
          className="rounded-full border border-border px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent-red/30 hover:text-accent-red"
        >
          退出
        </button>
      </div>
    );
  }

  return (
    <Link
      href="/login"
      className="rounded-full border border-border px-3 py-1.5 text-xs text-muted transition-colors hover:border-gold/20 hover:text-ink"
    >
      登录
    </Link>
  );
}
