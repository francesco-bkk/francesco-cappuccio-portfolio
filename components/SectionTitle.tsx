type SectionTitleProps = {
  label: string;
  count?: number;
};

export function SectionTitle({ label, count }: SectionTitleProps) {
  return (
    <div className="animate-fade-up flex items-center justify-between gap-5 border-t border-ivory/10 pt-8">
      <h2 className="font-mono text-xs uppercase tracking-[0.28em] text-stone">{label}</h2>
      {typeof count === "number" ? (
        <p className="font-mono text-[10px] tracking-[0.28em] text-stone">
          {String(count).padStart(2, "0")}
        </p>
      ) : null}
    </div>
  );
}
