export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border px-5 py-6 text-center text-xs leading-relaxed text-muted">
      <div className="mx-auto max-w-[1080px]">
        <p>
          FinRead · 数据与引文来源于 SEC / IR 披露文件 · 不构成投资建议 · 以官方原文为准
        </p>
        <p className="mt-1 text-muted/60">
          © {new Date().getFullYear()} FinRead. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
