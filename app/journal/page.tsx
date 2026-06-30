import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Newsletter from "../../components/sections/Newsletter";

import JournalContent from "../../components/pages/journal/JournalContent";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Coffee stories, brewing guides and specialty coffee education from Veloura Coffee Co.",
};

export default function JournalPage() {
  return (
    <main className="bg-[#F8F4EF] min-h-screen">
      <Navbar />

      <JournalContent />

      <Newsletter />

      <Footer />
    </main>
  );
}