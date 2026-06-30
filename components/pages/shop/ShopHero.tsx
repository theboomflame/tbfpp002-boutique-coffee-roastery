import Section from "../../ui/Section";
import Divider from "../../ui/Divider";

export default function ShopHero() {
  return (
    <Section className="pt-44 pb-24">
      <div className="mx-auto max-w-4xl text-center">

        <p className="uppercase tracking-[0.35em] text-[#B78A56]">
          Shop
        </p>

        <h1 className="font-heading mt-6 text-6xl text-[#2D221C] md:text-8xl">
          Exceptional Coffee.
          <br />
          Crafted Daily.
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#6B4F3A]">
          Discover small-batch coffees roasted with precision,
          sourced from exceptional farms around the world,
          and crafted for your everyday ritual.
        </p>

        <Divider className="mt-12" />

      </div>
    </Section>
  );
}