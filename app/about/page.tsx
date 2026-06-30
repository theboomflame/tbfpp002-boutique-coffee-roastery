import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Newsletter from "../../components/sections/Newsletter";

import AboutContent from "../../components/pages/about/AboutContent";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn the story behind Veloura Coffee Co., our commitment to small-batch roasting, sustainable sourcing and exceptional craftsmanship.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#F8F4EF] min-h-screen">
      <Navbar />

      <AboutContent />

      <Newsletter />

      <Footer />
    </main>
  );
}