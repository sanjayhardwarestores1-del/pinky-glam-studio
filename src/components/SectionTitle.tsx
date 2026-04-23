export const SectionTitle = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) => (
  <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} mb-14`}>
    {eyebrow && (
      <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4 font-medium">
        — {eyebrow} —
      </p>
    )}
    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);
