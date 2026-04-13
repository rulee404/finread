"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function ProButton() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      setIsLoggedIn(!!data.user);
    });
  }, []);

  async function handleSubscribe() {
    if (!isLoggedIn) {
      router.push("/login?redirect=/pro");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/checkout-pro", { method: "POST" });
      const data = await res.json();

      if (!res.ok) {
        if (res.status === 503) {
          setError("订阅系统配置中，请稍后再试或先使用单篇打赏");
        } else {
          setError(data.error ?? "创建订阅失败");
        }
        setLoading(false);
        return;
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      setError("网络错误，请稍后再试");
      setLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={handleSubscribe}
        disabled={loading}
        className="mt-6 w-full rounded-lg bg-gold py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {loading
          ? "跳转中…"
          : isLoggedIn
            ? "开通 Pro 会员"
            : "登录后开通 Pro"}
      </button>
      {error && (
        <p className="mt-2 text-center text-xs text-accent-red">{error}</p>
      )}
    </>
  );
}
