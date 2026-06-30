export interface Article {
  id: number;
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
 readingTime: string;
  image: string;
  excerpt: string;
  content: string[];
}

export const articles: Article[] = [
  {
    id: 1,
    slug: "the-perfect-morning-brew",
    title: "The Perfect Morning Brew",
    category: "Brewing",
    author: "Veloura Coffee",
    date: "June 2026",
    readingTime: "5 min read",
    image: "/images/journal/featured.jpg",
    excerpt:
      "A slower morning begins with a better cup. Here's how to create a coffee ritual worth waking up for.",
    content: [
      "Great coffee begins long before the first sip. It begins with intention.",
      "Choose freshly roasted beans, grind only what you need, and pay attention to water temperature.",
      "Whether you prefer pour-over, French press or espresso, consistency creates confidence.",
      "Coffee isn't simply a drink. At Veloura, it's a ritual."
    ]
  },

  {
    id: 2,
    slug: "why-small-batch-coffee-tastes-better",
    title: "Why Small-Batch Coffee Tastes Better",
    category: "Roasting",
    author: "Veloura Coffee",
    date: "June 2026",
    readingTime: "4 min read",
    image: "/images/journal/roasting.jpg",
    excerpt:
      "Discover why boutique roasting creates cleaner flavours and greater consistency.",
    content: [
      "Large commercial roasting prioritises volume.",
      "Small-batch roasting prioritises flavour.",
      "Roasters can make tiny adjustments throughout the roast.",
      "That's why every Veloura coffee is roasted in small batches."
    ]
  },

  {
    id: 3,
    slug: "understanding-single-origin-coffee",
    title: "Understanding Single-Origin Coffee",
    category: "Coffee Origins",
    author: "Veloura Coffee",
    date: "June 2026",
    readingTime: "6 min read",
   image: "/images/journal/origin.jpg",
    excerpt:
      "Every region tells a different story.",
    content: [
      "Coffee reflects the place where it grows.",
      "Altitude, rainfall, soil and processing shape flavour.",
      "Single-origin coffees allow those characteristics to shine."
    ]
  },

  {
    id: 4,
    slug: "espresso-vs-pour-over",
    title: "Espresso vs Pour Over",
    category: "Brewing",
    author: "Theboomflame",
    date: "June 2026",
    readingTime: "5 min read",
    image: "/images/journal/brewing.jpg",
    excerpt:
      "Two brewing methods. Two different experiences.",
    content: [
      "Espresso delivers intensity.",
      "Pour-over highlights clarity.",
      "Neither is objectively better.",
      "Experiment and discover your own ritual."
    ]
  }
];