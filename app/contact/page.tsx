import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Newsletter from "../../components/sections/Newsletter";

import ContactContent from "../../components/pages/contact/ContactContent";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Veloura Coffee Co. for enquiries, wholesale partnerships and exceptional coffee.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#F8F4EF] min-h-screen">
      <Navbar />

      <ContactContent />

      <Newsletter />

      <Footer />
    </main>
  );
}