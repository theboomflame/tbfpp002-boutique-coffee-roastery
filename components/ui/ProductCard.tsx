import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  slug: string;
  image: string;
  name: string;
  origin: string;
  description: string;
  roast: string;
  price: string;
}

export default function ProductCard({
  slug,
  image,
  name,
  origin,
  description,
  roast,
  price,
}: ProductCardProps) {
  return (
    <Link
      href={`/shop/${slug}`}
      className="group block"
    >
      <article
        className="
          h-full
          rounded-[40px]
          bg-white
          p-8
          shadow-[0_15px_45px_rgba(0,0,0,.05)]
          transition-all
          duration-700
          hover:-translate-y-3
          hover:shadow-[0_35px_80px_rgba(0,0,0,.10)]
        "
      >
        {/* Product Display */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[34px]
            bg-[#F4EDE5]
            p-6
          "
        >
          {/* Ambient Glow */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[320px]
              w-[320px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              opacity-60
              blur-3xl
            "
            style={{
              background:
                "radial-gradient(circle, rgba(183,138,86,.28), transparent 72%)",
            }}
          />

          {/* Image */}

          <div className="relative flex h-[500px] items-center justify-center">

            <Image
              src={image}
              alt={name}
              width={560}
              height={560}
              className="
                drop-shadow-[0_45px_45px_rgba(0,0,0,.18)]
                transition-all
                duration-700
                group-hover:-translate-y-4
                group-hover:scale-110
              "
            />

          </div>

        </div>

        {/* Content */}

        <div className="pt-10">

          <p className="text-center text-xs font-medium uppercase tracking-[0.45em] text-[#B78A56]">
            {origin}
          </p>

          <h3 className="font-heading mt-5 text-center text-[2.2rem] leading-tight text-[#2D221C]">
            {name}
          </h3>

          <p className="mx-auto mt-6 max-w-[280px] text-center leading-8 text-[#6B4F3A]">
            {description}
          </p>

          <div className="mx-auto mt-8 h-px w-20 bg-[#D8C4A8]" />

          <div className="mt-8 flex items-center justify-between">

            <div>

              <p className="text-[11px] uppercase tracking-[0.35em] text-[#B78A56]">
                Roast
              </p>

              <p className="mt-2 text-sm text-[#2D221C]">
                {roast}
              </p>

            </div>

            <div className="text-right">

              <p className="text-[11px] uppercase tracking-[0.35em] text-[#B78A56]">
                Price
              </p>

              <p className="mt-2 text-3xl font-semibold text-[#2D221C]">
                £{price}
              </p>

            </div>

          </div>

          <div
            className="
              mt-10
              flex
              items-center
              justify-center
              gap-3
              text-sm
              font-medium
              uppercase
              tracking-[0.3em]
              text-[#6B4F3A]
            "
          >
            View Details

            <span className="transition-transform duration-500 group-hover:translate-x-2">
              →
            </span>

          </div>

        </div>

      </article>
    </Link>
  );
}