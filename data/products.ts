export interface Product {
  id: number;
  slug: string;
  image: string;
  name: string;
  origin: string;
  roast: string;
  notes: string;
  price: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    slug: "ethiopian-bloom",
    image: "/images/bag-1.png",
    name: "Ethiopian Bloom",
    origin: "ETHIOPIA",
    roast: "Filter",
    notes: "Floral • Citrus • Honey",
    price: "18",
    description:
      "Bright, floral and delicately sweet with notes of honey and citrus.",
  },

  {
    id: 2,
    slug: "midnight-roast",
    image: "/images/bag-2.png",
    name: "Midnight Roast",
    origin: "COLOMBIA",
    roast: "Espresso",
    notes: "Chocolate • Caramel • Walnut",
    price: "19",
    description:
      "A bold evening roast with rich chocolate, caramel sweetness and walnut finish.",
  },

  {
    id: 3,
    slug: "house-reserve",
    image: "/images/bag-3.png",
    name: "House Reserve",
    origin: "BRAZIL",
    roast: "Signature",
    notes: "Balanced • Cocoa • Almond",
    price: "17",
    description:
      "Our signature everyday coffee offering balance, cocoa richness and roasted almond.",
  },
];