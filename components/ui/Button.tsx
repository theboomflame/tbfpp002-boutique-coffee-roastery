interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-[#6B4F3A] text-white hover:scale-105"
      : "border border-[#6B4F3A] text-[#6B4F3A] hover:bg-[#6B4F3A] hover:text-white";

  return (
    <button
      className={`rounded-full px-8 py-4 transition duration-300 ${styles}`}
    >
      {children}
    </button>
  );
}