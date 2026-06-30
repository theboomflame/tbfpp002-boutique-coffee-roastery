"use client";

import { useMemo, useState } from "react";

import ProductCard from "../ui/ProductCard";
import StaggerReveal from "../animations/StaggerReveal";

import { products } from "../../data/products";

export default function ShopContent() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("Featured");

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (search) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "All") {
      filtered = filtered.filter(
        (product) => product.roast === category
      );
    }

    switch (sort) {
      case "Price Low":
        filtered.sort(
          (a, b) => Number(a.price) - Number(b.price)
        );
        break;

      case "Price High":
        filtered.sort(
          (a, b) => Number(b.price) - Number(a.price)
        );
        break;

      case "Name":
        filtered.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        break;
    }

    return filtered;
  }, [search, category, sort]);

  const filters = [
    "All",
    "Espresso",
    "Filter",
    "Signature",
  ];

  return (
    <section className="pb-32">
      <div className="mx-auto max-w-7xl px-8">

        {/* Top */}

        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search coffee..."
            className="w-full rounded-full border border-[#D9C7B0] bg-white px-6 py-4 outline-none lg:max-w-sm"
          />

          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setCategory(filter)}
                className={`rounded-full px-6 py-3 transition ${
                  category === filter
                    ? "bg-[#2D221C] text-white"
                    : "border border-[#D9C7B0] text-[#6B4F3A]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-full border border-[#D9C7B0] bg-transparent px-6 py-4"
          >
            <option>Featured</option>
            <option>Price Low</option>
            <option>Price High</option>
            <option>Name</option>
          </select>

        </div>

        <p className="mb-12 uppercase tracking-[0.3em] text-[#B78A56]">
          Showing {filteredProducts.length} Coffees
        </p>

        <StaggerReveal>
          {filteredProducts.map((product) => (
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

      </div>
    </section>
  );
}