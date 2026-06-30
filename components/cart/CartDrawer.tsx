"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
 const {

  isOpen,
  closeCart,
  items,
  subtotal,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} = useCart();



  return (
    <>
      {/* Backdrop */}

      <div
        onClick={closeCart}
        className={`fixed inset-0 z-[90] bg-black/40 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}

      <aside
        className={`fixed right-0 top-0 z-[100] flex h-screen w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b border-[#ECE3D9] p-8">

          <h2 className="font-heading text-3xl text-[#2D221C]">
            Your Cart
          </h2>

          <button
            onClick={closeCart}
            className="text-3xl text-[#6B4F3A]"
          >
            ×
          </button>

        </div>

        {/* Items */}

        <div className="flex-1 overflow-y-auto p-8">

          {items.length === 0 && (
            <div className="mt-20 text-center">

              <p className="text-lg text-[#6B4F3A]">
                Your cart is empty.
              </p>

            </div>
          )}

          <div className="space-y-8">

            {items.map((item) => (

              <div
                key={item.slug}
                className="flex gap-5"
              >

                <Image
                  src={item.image}
                  alt={item.name}
                  width={90}
                  height={90}
                  className="rounded-2xl bg-[#F4EDE5] p-2"
                />

                <div className="flex flex-1 flex-col">

                  <h3 className="font-heading text-2xl text-[#2D221C]">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-[#B78A56]">
                    £{item.price}
                  </p>

                  <div className="mt-4 flex items-center gap-4">

                    <button
                      onClick={() => decreaseQuantity(item.slug)}
                      className="h-8 w-8 rounded-full border"
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => increaseQuantity(item.slug)}
                      className="h-8 w-8 rounded-full border"
                    >
                      +
                    </button>

                  </div>

                  <button
                    onClick={() => removeItem(item.slug)}
                    className="mt-4 text-left text-sm uppercase tracking-[0.2em] text-red-500"
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Footer */}

        <div className="border-t border-[#ECE3D9] p-8">

          <div className="mb-8 flex justify-between text-xl">

            <span>Subtotal</span>

            <span className="font-semibold">
              £{subtotal.toFixed(2)}
            </span>

          </div>

          <button
            className="
              w-full
              rounded-full
              bg-[#2D221C]
              py-5
              uppercase
              tracking-[0.3em]
              text-white
            "
          >
            Checkout Coming Soon
          </button>

        </div>

      </aside>
    </>
  );
}