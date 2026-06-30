import Image from "next/image";
import Link from "next/link";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import BrandStory from "../components/sections/BrandStory";
import FeaturedCollection from "../components/sections/FeaturedCollection";
import BrewingPhilosophy from "../components/sections/BrewingPhilosophy";
import Newsletter from "../components/sections/Newsletter";

import FloatingCup from "../components/animations/FloatingCup";
import Steam from "../components/animations/Steam";
import FloatingBeans from "../components/animations/FloatingBeans";
import MouseParallax from "../components/animations/MouseParallax";

import CertificationBadge from "../components/ui/CertificationBadge";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Specialty Coffee",
  description:
    "Discover luxury specialty coffee roasted in small batches. Explore single-origin coffees, brewing guides and the ritual of exceptional coffee.",
};



export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F4EF]">
      <Navbar />

    <section className="relative flex min-h-screen items-center overflow-hidden px-8 pt-40">
  <div className="mx-auto grid max-w-7xl items-center gap-24 md:grid-cols-2">

    <div>
     <p className="mb-5 text-sm font-medium uppercase tracking-[0.45em] text-[#B78A56]">
        Boutique Coffee Roastery Co.
      </p>

     <h1 className="font-heading mb-10 text-7xl font-semibold leading-[0.9] tracking-[-0.03em] text-[#2D221C] md:text-[7rem]">
  Coffee Worth
  <br />
  Slowing Down
  <br />
  For.
</h1>

      <p className="mb-12 max-w-xl text-lg leading-9 text-[#6B4F3A]">
  At Boutique Coffee Rostery, we carefully source exceptional beans and roast
   them in small batches to bring out their richest flavors. Whether you are
    welcoming the morning, meeting with friends, or enjoying a quiet moment alone,
     we are here to make every cup unforgettable.
</p>

      <div className="flex flex-wrap gap-5">
      <Link
  href="/shop"
  className="
  rounded-full
  bg-[#2D221C]
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
  hover:shadow-[0_20px_40px_rgba(45,34,28,.25)]
"
>
  Shop Collection
</Link>

    
      </div>
    </div>

<div className="flex justify-center">
  <MouseParallax>
    <div className="relative h-[500px] w-[500px] rounded-full bg-[#E6D7C3] overflow-visible">

      <div
        className="absolute left-1/2 top-1/2
        h-[460px]
        w-[460px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        blur-3xl
        opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(183,138,86,.45) 0%, rgba(230,215,195,.1) 60%, transparent 100%)",
        }}
      />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

        <div className="relative h-[500px] w-[500px]">

          <FloatingBeans />

          <Steam />

          <FloatingCup>
            <Image
              src="/images/veloura-cup.png"
              alt="Veloura Coffee"
              width={540}
              height={540}
              className="
drop-shadow-[0_35px_60px_rgba(0,0,0,0.28)]
transition-transform
duration-700
"
              priority
            />
          </FloatingCup>

        </div>

      </div>

      <CertificationBadge
        title="SMALL BATCH"
        subtitle="Handcrafted"
        className="right-[20px] top-[110px]"
      />

      <CertificationBadge
        title="SINGLE ORIGIN"
        subtitle="Ethiopia"
        className="bottom-[55px] right-[65px]"
      />

    </div>
  </MouseParallax>
</div>
    

  </div>
</section>    

<BrandStory />
<FeaturedCollection />
<BrewingPhilosophy />
<Newsletter />

<Footer />

    </main>
  );
}