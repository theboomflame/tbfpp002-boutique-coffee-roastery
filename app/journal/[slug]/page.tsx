import Image from "next/image";
import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Newsletter from "@/components/sections/Newsletter";

import {
  getArticleBySlug,
  getAllArticles,
  getRelatedArticles,
} from "@/lib/journal";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllArticles().map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({
  params,
}: PageProps) {
  const { slug } = await params;

  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const related = getRelatedArticles(slug);

  return (
    <main className="min-h-screen bg-[#F8F4EF]">
      <Navbar />

      {/* Hero */}

      <section className="pt-40 pb-24">
        <div className="mx-auto max-w-4xl px-8 text-center">

          <p className="uppercase tracking-[0.35em] text-[#B78A56]">
            {article.category}
          </p>

          <h1 className="font-heading mt-8 text-6xl leading-tight text-[#2D221C] md:text-7xl">
            {article.title}
          </h1>

          <div className="mt-8 flex justify-center gap-8 text-sm uppercase tracking-[0.25em] text-[#8B6B54]">

            <span>{article.author}</span>

            <span>{article.date}</span>

            <span>{article.readingTime}</span>

          </div>

        </div>
      </section>

      {/* Image */}

      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-8">

          <div className="overflow-hidden rounded-[40px]">

            <Image
              src={article.image}
              alt={article.title}
              width={1600}
              height={900}
              className="w-full object-cover"
            />

          </div>

        </div>
      </section>

      {/* Article */}

      <section className="pb-32">
        <div className="mx-auto max-w-3xl px-8">

          {article.content.map((paragraph, index) => (

            <p
              key={index}
              className="mb-10 text-lg leading-9 text-[#4F4034]"
            >
              {paragraph}
            </p>

          ))}

        </div>
      </section>

      {/* Related */}

      <section className="pb-32">

        <div className="mx-auto max-w-7xl px-8">

          <h2 className="font-heading mb-16 text-5xl text-[#2D221C]">

            Continue Reading

          </h2>

          <div className="grid gap-10 md:grid-cols-3">

            {related.map((item) => (

              <a
                key={item.slug}
                href={`/journal/${item.slug}`}
                className="rounded-[32px] bg-white p-10 shadow-sm transition hover:-translate-y-2"
              >

                <p className="uppercase tracking-[0.3em] text-[#B78A56]">

                  {item.category}

                </p>

                <h3 className="font-heading mt-6 text-3xl text-[#2D221C]">

                  {item.title}

                </h3>

                <p className="mt-6 leading-8 text-[#6B4F3A]">

                  {item.excerpt}

                </p>

              </a>

            ))}

          </div>

        </div>

      </section>

      <Newsletter />

      <Footer />

    </main>
  );
}