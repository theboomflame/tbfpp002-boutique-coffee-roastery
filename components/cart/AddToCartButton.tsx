"use client";

import { useCart } from "@/context/CartContext";

interface AddToCartButtonProps {
  slug: string;
  name: string;
  image: string;
  price: number;
}

export default function AddToCartButton({
  slug,
  name,
  image,
  price,
}: AddToCartButtonProps) {
  const { addItem } = useCart();

  return (
    <button
      onClick={() =>
        addItem({
          slug,
          name,
          image,
          price,
        })
      }
      className="
        mt-10
        inline-flex
        items-center
        rounded-full
        bg-[#2D221C]
        px-10
        py-5
        text-sm
        uppercase
        tracking-[0.3em]
        text-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-[#433229]
      "
    >
      Add to Cart
    </button>
  );
}