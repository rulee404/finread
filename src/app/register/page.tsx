import RegisterForm from "./RegisterForm";
import Link from "next/link";

export const metadata = {
  title: "免费注册 | FinRead",
};

export default function RegisterPage() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-sm flex-col items-center justify-center px-5 py-16">
      <h1 className="mb-1 text-2xl font-bold text-white">注册 FinRead</h1>
      <p className="mb-8 text-sm text-muted">
        免费获取 SEC 原典摘要与管理层原话中英对照
      </p>
      <RegisterForm />
      <p className="mt-6 text-xs text-muted">
        已有账号？{" "}
        <Link href="/login" className="text-gold hover:underline">
          登录
        </Link>
      </p>
    </div>
  );
}
