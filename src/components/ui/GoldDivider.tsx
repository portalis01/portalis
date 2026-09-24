interface GoldDividerProps {
  className?: string;
  centered?: boolean;
  width?: string;
}

/**
 * Reusable gold decorative divider line used across sections and headings.
 */
export default function GoldDivider({
  className = "",
  centered = false,
  width = "w-10",
}: GoldDividerProps) {
  return (
    <div
      className={`h-[2px] ${width} bg-warm-gold/60 ${centered ? "mx-auto" : ""} ${className}`}
    />
  );
}
