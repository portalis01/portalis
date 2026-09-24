interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  titleClassName?: string;
}

/**
 * Reusable section header with gold label, divider, serif title, and optional subtitle.
 * This pattern is used across every section of the site.
 */
export default function SectionHeader({
  label,
  title,
  subtitle,
  centered = false,
  titleClassName = "",
}: SectionHeaderProps) {
  return (
    <div className={centered ? "flex flex-col items-center text-center" : ""}>
      <span className="text-warm-gold text-xs uppercase tracking-[0.3em] font-semibold block mb-3">
        {label}
      </span>
      <div className={`h-[2px] w-10 bg-warm-gold/60 mb-6 ${centered ? "mx-auto" : ""}`} />
      <h2 className={`font-heading text-3xl sm:text-4xl md:text-5xl leading-tight text-forest-green ${titleClassName}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-charcoal-black text-xs sm:text-sm font-normal leading-relaxed max-w-xl mt-4">
          {subtitle}
        </p>
      )}
    </div>
  );
}
