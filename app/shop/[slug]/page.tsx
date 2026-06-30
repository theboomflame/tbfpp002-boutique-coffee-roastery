import Image from "next/image";
import { notFound } from "next/navigation";

import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import AddToCartButton from "@/components/cart/AddToCartButton";

import { getProduct } from "../../../lib/products";

import type { Metadata } from "next";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const product = getProduct(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [
        {
          url: product.image,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F8F4EF]">
      <Navbar />

      <section className="mx-auto max-w-7xl px-8 py-40">

        <div className="grid gap-20 lg:grid-cols-2 lg:items-center">

          {/* Product Image */}

          <div className="relative overflow-hidden rounded-[40px] bg-[#F4EDE5] p-16">

            <div
              className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(183,138,86,.30), transparent 70%)",
              }}
            />

            <div className="relative flex justify-center">

              <Image
                src={product.image}
                alt={product.name}
                width={520}
                height={520}
                priority
                className="drop-shadow-[0_40px_50px_rgba(0,0,0,.18)]"
              />

            </div>

          </div>

          {/* Product Information */}

          <div>

            <p className="uppercase tracking-[0.4em] text-[#B78A56]">
              {product.origin}
            </p>

            <h1 className="font-heading mt-5 text-6xl leading-none text-[#2D221C] md:text-7xl">
              {product.name}
            </h1>

            <p className="mt-5 text-xl tracking-[0.2em] text-[#B78A56]">
              ★★★★★
            </p>

            <p className="mt-10 text-lg leading-8 text-[#6B4F3A]">
              {product.description}
            </p>

            <div className="mt-12 space-y-5 rounded-[28px] bg-white p-8 shadow-sm">

              <div className="flex justify-between">
                <span className="font-medium text-[#2D221C]">
                  Roast
                </span>

                <span className="text-[#6B4F3A]">
                  {product.roast}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium text-[#2D221C]">
                  Tasting Notes
                </span>

                <span className="text-right text-[#6B4F3A]">
                  {product.notes}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium text-[#2D221C]">
                  Origin
                </span>

                <span className="text-[#6B4F3A]">
                  {product.origin}
                </span>
              </div>

            </div>

            <p className="mt-12 text-5xl font-semibold text-[#2D221C]">
              £{product.price}
            </p>

            <AddToCartButton
  slug={product.slug}
  name={product.name}
  image={product.image}
  price={Number(product.price)}
/>

          </div>

        </div>

      </section>

      <Footer />
    </main>
  );
}