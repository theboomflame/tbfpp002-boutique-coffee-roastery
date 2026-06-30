import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

import { CartProvider } from "../context/CartContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://veloura-coffee.vercel.app"),

  title: {
    default: "Veloura Coffee Co.",
    template: "%s | Veloura Coffee Co.",
  },

  description:
    "Luxury specialty coffee roasted in small batches. Discover exceptional single-origin coffees, brewing guides, and the ritual of slowing down with every cup.",

  keywords: [
    "specialty coffee",
    "luxury coffee",
    "coffee roastery",
    "single origin coffee",
    "artisan coffee",
    "small batch coffee",
    "premium coffee",
    "espresso beans",
    "filter coffee",
    "coffee journal",
  ],

  authors: [
    {
      name: "Veloura Coffee Co.",
    },
  ],

  creator: "Veloura Coffee Co.",

  openGraph: {
    title: "Veloura Coffee Co.",
    description:
      "Luxury specialty coffee roasted in small batches for those who appreciate craftsmanship over convenience.",
    url: "https://veloura-coffee.vercel.app",
    siteName: "Veloura Coffee Co.",
    locale: "en_GB",
    type: "website",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Veloura Coffee Co.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Veloura Coffee Co.",
    description:
      "Luxury specialty coffee roasted in small batches.",

    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${cormorant.variable}`}
    >
      <body>
  <CartProvider>
    {children}
  </CartProvider>
</body>
    </html>
  );
}