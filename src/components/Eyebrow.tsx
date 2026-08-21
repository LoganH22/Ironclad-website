export default function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] ${
        light ? "text-white/70" : "text-muted-foreground"
      }`}
    >
      <span className="h-px w-8 bg-brass" aria-hidden="true" />
      {children}
    </span>
  );
}
