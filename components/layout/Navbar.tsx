"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

import MobileMenu from "./MobileMenu";
import CartDrawer from "../cart/CartDrawer";

import { useCart } from "@/context/CartContext";
import Image from "next/image";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Shop", href: "/shop" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
 const { openCart, totalItems, } = useCart();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  

  return (
    <>
      <nav
        className={`fixed left-0 top-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#F8F4EF]/85 backdrop-blur-xl shadow-md py-4"
            : "bg-transparent py-7"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-12">
          <Link
  href="/"
  className="flex items-center"
>
  <Image
    src="/images/veloura-logo.png"
    alt="Veloura Coffee Co."
    width={180}
    height={55}
    priority
    className="h-auto w-[150px]"
  />
</Link>

          <div className="hidden items-center gap-12 md:flex">
            {links.map((link) => (
              <Link
  key={link.label}
  href={link.href}
 className="group relative text-[15px] font-medium tracking-[0.08em] text-[#6B4F3A] transition-colors duration-300 hover:text-[#2D221C]"
>
                {link.label}

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#B78A56] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-5">

  {/* Cart */}

  <button
    onClick={openCart}
    className="relative hidden md:flex"
    aria-label="Shopping Cart"
  >
    <ShoppingBag
      size={28}
      className="text-[#2D221C]"
    />

{totalItems > 0 && (
      <span
        className="
          absolute
          -right-2
          -top-2
          flex
          h-5
          w-5
          items-center
          justify-center
          rounded-full
          bg-[#B78A56]
          text-[11px]
          text-white
        "
      >
        {totalItems}
      </span>
    )}
  </button>

  {/* Mobile Menu */}

  <button
    onClick={() => setMenuOpen(true)}
    className="text-3xl text-[#2D221C] md:hidden"
    aria-label="Open menu"
  >
    ☰
  </button>

</div>
        </div>
      </nav>

      <>
  <MobileMenu
    isOpen={menuOpen}
    onClose={() => setMenuOpen(false)}
  />

  <CartDrawer />
</>
    </>
  );
}