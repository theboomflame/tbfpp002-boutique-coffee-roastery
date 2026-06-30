export default function ShopToolbar() {
  return (
    <section className="pb-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-8 md:flex-row">

        {/* Left */}

        <div>

          <p className="text-sm uppercase tracking-[0.35em] text-[#B78A56]">
            Showing 3 Coffees
          </p>

        </div>

        {/* Middle */}

        <div className="flex flex-wrap justify-center gap-4">

          <button className="rounded-full bg-[#2D221C] px-6 py-3 text-sm text-white transition hover:scale-105">
            All
          </button>

          <button className="rounded-full border border-[#D9C7B0] px-6 py-3 text-sm text-[#6B4F3A] transition hover:bg-[#F4EDE5]">
            Espresso
          </button>

          <button className="rounded-full border border-[#D9C7B0] px-6 py-3 text-sm text-[#6B4F3A] transition hover:bg-[#F4EDE5]">
            Filter
          </button>

          <button className="rounded-full border border-[#D9C7B0] px-6 py-3 text-sm text-[#6B4F3A] transition hover:bg-[#F4EDE5]">
            Signature
          </button>

        </div>

        {/* Right */}

        <select className="rounded-full border border-[#D9C7B0] bg-transparent px-6 py-3 text-[#6B4F3A] outline-none">

          <option>Featured</option>

          <option>Price: Low to High</option>

          <option>Price: High to Low</option>

          <option>Newest</option>

        </select>

      </div>
    </section>
  );
}