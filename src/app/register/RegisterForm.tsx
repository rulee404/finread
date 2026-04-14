"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loggedInEmail, setLoggedInEmail] = useState<string | null>(null);
  const [checking, setChecking] = useState(true);
  const router = useRouter();

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
    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setSuccess(true);
    setLoading(false);
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
        <p className="text-sm font-semibold text-white">
          你已登录为 <span className="text-gold">{loggedInEmail.split("@")[0]}</span>
        </p>
        <p className="mt-2 text-xs text-muted">无需重复注册</p>
        <Link
          href="/"
          className="mt-4 inline-block rounded-lg bg-gold px-5 py-2 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
        >
          返回首页
        </Link>
      </div>
    );
  }

  if (success) {
    return (
      <div className="w-full rounded-lg border border-accent-green/20 bg-accent-green/5 p-5 text-center">
        <p className="text-sm font-semibold text-accent-green">注册成功！</p>
        <p className="mt-2 text-xs text-muted">
          请查收邮箱中的验证链接，确认后即可登录。
        </p>
        <button
          onClick={() => router.push("/login")}
          className="mt-4 rounded-lg bg-gold px-5 py-2 text-sm font-semibold text-bg"
        >
          前往登录
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div>
        <label htmlFor="reg-email" className="mb-1 block text-xs text-muted">
          邮箱
        </label>
        <input
          id="reg-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-white placeholder-muted/50 outline-none transition-colors focus:border-gold/40"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="reg-password" className="mb-1 block text-xs text-muted">
          密码
        </label>
        <input
          id="reg-password"
          type="password"
          required
          minLength={6}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-white placeholder-muted/50 outline-none transition-colors focus:border-gold/40"
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
        {loading ? "注册中…" : "免费注册"}
      </button>

      <p className="text-center text-[10px] text-muted/60">
        注册即表示同意 FinRead 的服务条款和隐私政策
      </p>
    </form>
  );
}
