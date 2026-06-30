import AnimatedSection from "../animations/AnimatedSection";
import StaggerReveal from "../animations/StaggerReveal";

import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Divider from "../ui/Divider";
import PhilosophyCard from "../ui/PhilosophyCard";

export default function BrewingPhilosophy() {
  return (
    <AnimatedSection>
      <Section className="relative overflow-hidden bg-white">

        {/* Background Glow */}

        <div
          className="absolute left-1/2 top-24 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(183,138,86,.18), transparent 70%)",
          }}
        />

        <Container>

          <SectionHeading
            eyebrow="Our Philosophy"
            title="Crafted With Intention."
            description="Every memorable cup begins long before the first pour. From carefully selecting exceptional farms to patiently refining every roast, our philosophy values craftsmanship over speed and quality over compromise."
          />

          <div className="mt-16">
            <Divider />
          </div>

          {/* Editorial Timeline */}

          <div className="my-24 hidden items-center justify-center lg:flex">

            <div className="h-px w-44 bg-[#D9C7B0]" />

            <div className="mx-6 h-4 w-4 rounded-full bg-[#B78A56]" />

            <div className="h-px w-44 bg-[#D9C7B0]" />

            <div className="mx-6 h-4 w-4 rounded-full bg-[#B78A56]" />

            <div className="h-px w-44 bg-[#D9C7B0]" />

            <div className="mx-6 h-4 w-4 rounded-full bg-[#B78A56]" />

            <div className="h-px w-44 bg-[#D9C7B0]" />

          </div>

          <StaggerReveal>

            <PhilosophyCard
              icon="/icons/leaf.svg"
              title="Sourced Carefully"
              description="We work alongside trusted growers who cultivate exceptional coffees through sustainable farming, meticulous harvesting, and generations of expertise."
            />

            <PhilosophyCard
              icon="/icons/flame.svg"
              title="Roasted Slowly"
              description="Every roast profile is developed in small batches to reveal sweetness, balance, and the unique character hidden within each origin."
            />

            <PhilosophyCard
              icon="/icons/cup.svg"
              title="Enjoyed Deeply"
              description="Coffee should never be hurried. Every cup is an invitation to slow down, savour the moment, and appreciate remarkable craftsmanship."
            />

          </StaggerReveal>

        </Container>

      </Section>
    </AnimatedSection>
  );
}