import { Suspense } from "react";
import LoginForm from "./LoginForm";
import Link from "next/link";

export const metadata = {
  title: "登录 | FinRead",
};

export default function LoginPage() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-sm flex-col items-center justify-center px-5 py-16">
      <h1 className="mb-1 text-2xl font-bold text-ink">登录 FinRead</h1>
      <p className="mb-8 text-sm text-muted">SEC 原典 · 中英投研摘要</p>
      <Suspense>
        <LoginForm />
      </Suspense>
      <p className="mt-6 text-xs text-muted">
        还没有账号？{" "}
        <Link href="/register" className="text-gold hover:underline">
          免费注册
        </Link>
      </p>
    </div>
  );
}
