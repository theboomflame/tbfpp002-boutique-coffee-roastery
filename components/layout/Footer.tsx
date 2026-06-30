import Link from "next/link";

import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#241B16] text-white">

      {/* Background Glow */}

      <div
        className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full opacity-10 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(183,138,86,.35), transparent 70%)",
        }}
      />

      <Container className="relative py-32">

        {/* Hero */}

        <div className="max-w-4xl">

          <p className="text-sm font-medium uppercase tracking-[0.45em] text-[#B78A56]">
            Boutique Coffee Roastery Co.
          </p>

          <h2 className="font-heading mt-6 text-5xl font-semibold leading-[0.95] tracking-[-0.03em] text-white md:text-7xl">
            Small Batch.
            <br />
            Extraordinary Taste.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-[#DCCBB8]">
            Coffee is more than a drink. It is a ritual built on patience,
            craftsmanship, and a belief that extraordinary moments begin
            with extraordinary coffee.
          </p>

        </div>

        {/* Divider */}

        <div className="my-20 h-px bg-[#4A3A30]" />

        {/* Main Footer */}

        <div className="grid gap-16 md:grid-cols-4">

          {/* Visit */}

          <div>

            <h3 className="mb-8 text-sm font-medium uppercase tracking-[0.35em] text-[#B78A56]">
              Visit
            </h3>

            <p className="leading-8 text-[#DCCBB8]">
              18 Artisan Street
              <br />
              London
              <br />
              United Kingdom
            </p>

          </div>

          {/* Explore */}

          <div>

            <h3 className="mb-8 text-sm font-medium uppercase tracking-[0.35em] text-[#B78A56]">
              Explore
            </h3>

            <ul className="space-y-5">

              <li>
                <Link href="/" className="text-[#DCCBB8] transition hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/shop" className="text-[#DCCBB8] transition hover:text-white">
                  Shop
                </Link>
              </li>

              <li>
                <Link href="/about" className="text-[#DCCBB8] transition hover:text-white">
                  About
                </Link>
              </li>

              <li>
                <Link href="/journal" className="text-[#DCCBB8] transition hover:text-white">
                  Journal
                </Link>
              </li>

              <li>
                <Link href="/contact" className="text-[#DCCBB8] transition hover:text-white">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-8 text-sm font-medium uppercase tracking-[0.35em] text-[#B78A56]">
              Contact
            </h3>

            <ul className="space-y-5 text-[#DCCBB8]">

              <li>hello@veloura.coffee</li>

              <li>+44 (0)20 1234 5678</li>

              <li className="transition hover:text-white cursor-pointer">
                Instagram
              </li>

              <li className="transition hover:text-white cursor-pointer">
                Pinterest
              </li>

            </ul>

          </div>

          {/* Opening */}

          <div>

            <h3 className="mb-8 text-sm font-medium uppercase tracking-[0.35em] text-[#B78A56]">
              Opening Hours
            </h3>

            <p className="leading-8 text-[#DCCBB8]">
              Monday – Friday
              <br />
              8:00 AM – 6:00 PM
            </p>

            <p className="mt-6 leading-8 text-[#DCCBB8]">
              Saturday
              <br />
              9:00 AM – 4:00 PM
            </p>

            <p className="mt-6 text-[#B78A56]">
              Sunday • Closed
            </p>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-[#4A3A30] pt-10 text-center md:flex-row">

          <p className="text-[#A8927B]">
            © 2026 Boutique Coffee Roastery Co. All rights reserved.
          </p>

          <p className="text-[#A8927B]">
  Created by{" "}
  <a
    href="https://www.theboomflame.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#B78A56] transition hover:text-white"
  >
    Theboomflame
  </a>{" "}
  • Visibility is Good • Explosion is Better!
</p>

        </div>

      </Container>

    </footer>
  );
}