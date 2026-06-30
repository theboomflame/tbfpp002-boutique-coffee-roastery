import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import Newsletter from "../../components/sections/Newsletter";
import ShopContent from "../../components/sections/ShopContent";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse Veloura Coffee Co.'s collection of premium single-origin and small-batch specialty coffees.",
};

export default function ShopPage() {
  return (
    <main className="bg-[#F8F4EF] min-h-screen">
      <Navbar />

      {/* Hero */}

      <section className="pt-40 pb-24">
        <div className="mx-auto max-w-5xl px-8 text-center">
          <p className="uppercase tracking-[0.35em] text-[#B78A56]">
            Shop
          </p>

          <h1 className="font-heading mt-6 text-6xl text-[#2D221C] md:text-8xl">
            Exceptional Coffee
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#6B4F3A]">
            Whether you are discovering specialty coffee for 
            the first time or searching for your next favorite blend, 
            we have roasted something just for you.
          </p>

          <div className="mx-auto mt-12 h-px w-32 bg-[#D9C7B0]" />
        </div>
      </section>

      {/* Shop Content */}

      <ShopContent />

      {/* Newsletter */}

      <Newsletter />

      {/* Footer */}

      <Footer />
    </main>
  );
}