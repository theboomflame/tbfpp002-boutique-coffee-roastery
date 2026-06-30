import { products } from "../../../data/products";
import ProductCard from "../../ui/ProductCard";
import StaggerReveal from "../../animations/StaggerReveal";

export default function ShopGrid() {
  return (
    <section className="pb-32">
      <div className="mx-auto max-w-7xl px-8">

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

      </div>
    </section>
  );
}