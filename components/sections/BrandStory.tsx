import Image from "next/image";
import Link from "next/link";

import AnimatedSection from "../animations/AnimatedSection";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import StatCard from "../ui/StatCard";

export default function BrandStory() {
  return (
    <AnimatedSection>
      <Section className="bg-[#FCF8F3]">

        <Container>

          <div className="grid items-center gap-28 lg:grid-cols-2">

            {/* LEFT */}

            <div>

              <SectionHeading
                eyebrow="Our Story"
                title="Coffee deserves more than convenience."
                description="Boutique Coffee Roastery began with a simple belief: extraordinary coffee should tell a story. 
                  From carefully selected farms across renowned coffee-growing regions, we source beans that reflect 
                  the unique character of their origin."
                center={false}
              />

              <div className="mt-10 space-y-7 text-lg leading-9 text-[#6B4F3A]">

          

                <p>
                  Every batch is roasted in small quantities to preserve flavor, complexity, and freshness. We believe coffee is more than a beverage; it is a daily ritual, a moment of reflection, and a connection between people and places. Through craftsmanship, transparency, and passion, Boutique Coffee Roastery delivers exceptional coffee experiences to discerning coffee lovers across the United Kingdom.
                </p>

              </div>

              <div className="mt-10">
  <Link href="/about">
    <Button>
      Discover Our Philosophy
    </Button>
  </Link>
</div>

            </div>

            {/* RIGHT */}

            <div>

              <div
                className="
                overflow-hidden
                rounded-[44px]
                bg-[#F4EDE5]
                p-4
                shadow-[0_40px_80px_rgba(0,0,0,.12)]
                transition-all
                duration-700
                hover:-translate-y-2
              "
              >

                <Image
                  src="/images/story-image.jpg"
                  alt="Brewing coffee"
                  width={900}
                  height={900}
                  className="
                    h-full
                    w-full
                    rounded-[34px]
                    object-cover
                    transition
                    duration-700
                    hover:scale-105
                  "
                />

              </div>

            </div>

          </div>

          {/* STATS */}

          <div className="mt-32 grid gap-8 md:grid-cols-4">

            <StatCard
              value={25}
              suffix="+"
              label="Partner Farms"
            />

            <StatCard
              value={12}
              label="Origins"
            />

            <StatCard
              value={100}
              suffix="%"
              label="Arabica"
            />

            <StatCard
              value={2026}
              label="Since"
            />

          </div>

        </Container>

      </Section>
    </AnimatedSection>
  );
}