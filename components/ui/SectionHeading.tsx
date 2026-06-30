interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-20 ${center ? "text-center" : ""}`}>
      <p className="uppercase tracking-[0.35em] text-[#B78A56]">
        {eyebrow}
      </p>

      <h2 className="font-heading mt-4 text-6xl text-[#2D221C]">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-6 max-w-2xl text-lg text-[#6B4F3A]">
          {description}
        </p>
      )}
    </div>
  );
}