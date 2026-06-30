import AnimatedSection from "../animations/AnimatedSection";

export default function Newsletter() {
  return (
    <AnimatedSection>
      <section className="relative overflow-hidden bg-[#2D221C] py-36">

        {/* Ambient Glow */}

        <div
          className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(183,138,86,.28), transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-5xl px-8 text-center">

          <p className="text-sm font-medium uppercase tracking-[0.45em] text-[#B78A56]">
            Join The Ritual
          </p>

          <h2 className="font-heading mt-6 text-6xl font-semibold leading-[0.92] tracking-[-0.03em] text-white md:text-7xl">
            Every Great Morning
            <br />
            Begins With
            <br />
            Great Coffee.
          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-[#E6D7C3]">
            Become part of the Boutique Coffee Roastery community and receive exclusive
            coffee releases, brewing guides, tasting notes, and stories
            from the people behind every remarkable cup.
          </p>

          <div className="mx-auto mt-14 h-px w-24 bg-[#B78A56]" />

          {/* Newsletter Form */}

          <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-5 md:flex-row">

            <input
              type="email"
              placeholder="Enter your email address"
              className="
                flex-1
                rounded-full
                border
                border-white/10
                bg-white
                px-8
                py-5
                text-[#2D221C]
                placeholder:text-[#8A7A6B]
                outline-none
                transition-all
                duration-500
                focus:border-[#B78A56]
                focus:shadow-[0_0_0_4px_rgba(183,138,86,.15)]
              "
            />

            <button
              className="
                rounded-full
                bg-[#B78A56]
                px-10
                py-5
                text-sm
                font-medium
                uppercase
                tracking-[0.3em]
                text-white
                transition-all
                duration-500
                hover:-translate-y-1
                hover:bg-[#C59660]
                hover:shadow-[0_20px_40px_rgba(183,138,86,.30)]
              "
            >
              Join Now
            </button>

          </div>

          <p className="mt-8 text-sm tracking-wide text-[#B8A89A]">
            No spam. Just exceptional coffee, thoughtful stories,
            and early access to limited releases.
          </p>

        </div>

      </section>
    </AnimatedSection>
  );
}