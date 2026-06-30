interface CertificationBadgeProps {
  title: string;
  subtitle: string;
  className?: string;
}

export default function CertificationBadge({
  title,
  subtitle,
  className = "",
}: CertificationBadgeProps) {
  return (
    <div
      className={`
        absolute
        flex
        h-28
        w-28
        flex-col
        items-center
        justify-center
        rounded-full
        border
        border-[#D8C2A2]
        bg-white/90
        backdrop-blur-md
        shadow-[0_12px_30px_rgba(0,0,0,0.08)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_18px_40px_rgba(0,0,0,0.15)]
        ${className}
      `}
    >
      <div className="mb-2 h-2 w-2 rounded-full bg-[#B78A56]" />

      <p className="text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-[#2D221C] leading-tight">
        {title}
      </p>

      <p className="mt-2 text-center text-[11px] text-[#6B4F3A]">
        {subtitle}
      </p>
    </div>
  );
}