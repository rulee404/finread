"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";


export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [loggedInEmail, setLoggedInEmail] = useState<string | null>(null);
  const [checking, setChecking] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      if (data.user?.email) {
        setLoggedInEmail(data.user.email);
      }
      setChecking(false);
    });
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push(redirect ?? "/");
    router.refresh();
  }

  if (checking) {
    return (
      <div className="w-full py-8 text-center text-sm text-muted">
        检查登录状态…
      </div>
    );
  }

  if (loggedInEmail) {
    return (
      <div className="w-full rounded-lg border border-gold/20 bg-gold-dim/20 p-6 text-center">
        <div className="mb-2 inline-block h-2 w-2 rounded-full bg-accent-green" />
        <p className="text-sm font-semibold text-ink">
          你已登录为 <span className="text-gold">{loggedInEmail.split("@")[0]}</span>
        </p>
        {redirect ? (
          <Link
            href={redirect}
            className="mt-4 inline-block rounded-lg bg-gold px-5 py-2 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
          >
            继续前往 →
          </Link>
        ) : (
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-gold px-5 py-2 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
          >
            返回首页
          </Link>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div>
        <label htmlFor="email" className="mb-1 block text-xs text-muted">
          邮箱
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-ink placeholder-muted/50 outline-none transition-colors focus:border-gold/40"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="password" className="mb-1 block text-xs text-muted">
          密码
        </label>
        <input
          id="password"
          type="password"
          required
          minLength={6}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-ink placeholder-muted/50 outline-none transition-colors focus:border-gold/40"
          placeholder="至少 6 位"
        />
      </div>

      {error && (
        <p className="rounded-lg bg-accent-red/10 px-3 py-2 text-xs text-accent-red">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-gold px-4 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {loading ? "登录中…" : "登录"}
      </button>
    </form>
  );
}
