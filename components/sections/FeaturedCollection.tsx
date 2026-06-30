import Link from "next/link";
import ProductCard from "../ui/ProductCard";
import StaggerReveal from "../animations/StaggerReveal";
import { products } from "../../data/products";


interface FeaturedCollectionProps {
  showHeading?: boolean;
}

export default function FeaturedCollection({
  showHeading = true,
}: FeaturedCollectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#F8F4EF] py-36">

      {/* Decorative Background Glow */}

      <div
        className="absolute left-1/2 top-32 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(183,138,86,.22), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-8">

        {showHeading && (
          <div className="mb-24 text-center">

            <p className="text-sm font-medium uppercase tracking-[0.45em] text-[#B78A56]">
              Featured Collection
            </p>

            <h2 className="font-heading mt-6 text-6xl font-semibold leading-[0.95] tracking-[-0.03em] text-[#2D221C] md:text-7xl">
              Crafted For
              <br />
              Every Ritual
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-[#6B4F3A]">
              Whether you enjoy bold espresso, smooth medium roasts, or
              bright single origin coffees, there is a perfect cup 
              waiting for you. 
            </p>

            <div className="mx-auto mt-12 h-px w-28 bg-[#D8C4A8]" />

          </div>
        )}

        <StaggerReveal>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              slug={product.slug}
              image={product.image}
              name={product.name}
              origin={product.origin}
              description={product.description}
              roast={product.roast}
              price={product.price}
            />
          ))}
        </StaggerReveal>

        {showHeading && (
          <div className="mt-24 text-center">

            <Link
  href="/shop"
  className="
    inline-flex
    items-center
    rounded-full
    border
    border-[#B78A56]
    px-10
    py-5
    text-sm
    font-medium
    uppercase
    tracking-[0.3em]
    text-[#6B4F3A]
    transition-all
    duration-500
    hover:-translate-y-1
    hover:bg-[#2D221C]
    hover:text-white
  "
>
  Explore the Collection
</Link>

          </div>
        )}

      </div>

    </section>
  );
}