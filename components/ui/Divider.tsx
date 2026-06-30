interface DividerProps {
  className?: string;
}

export default function Divider({
  className = "",
}: DividerProps) {
  return (
    <div
      className={`mx-auto h-px w-32 bg-[#D9C7B0] opacity-60 ${className}`}
    />
  );
}