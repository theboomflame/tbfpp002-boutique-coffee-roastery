"use client";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Shop", href: "/shop" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#241B16] transition-all duration-500 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <button
        onClick={onClose}
        className="absolute right-8 top-8 text-5xl text-white"
      >
        ×
      </button>

      <nav className="flex h-full flex-col items-center justify-center gap-10">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={onClose}
            className="font-heading text-5xl text-white transition hover:text-[#B78A56]"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}