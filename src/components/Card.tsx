export default function Card({
  title,
  children,
  className,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[10px] border border-border bg-surface p-5 ${className ?? ""}`}
    >
      {title && (
        <h3 className="mb-3 text-sm font-semibold text-white">{title}</h3>
      )}
      {children}
    </div>
  );
}
