import Image from "next/image";
import Divider from "../../ui/Divider";

import Link from "next/link";
import { articles } from "@/data/journal";



export default function JournalContent() {
  return (
    <>
      {/* Hero */}

      <section className="pt-40 pb-24">
        <div className="mx-auto max-w-5xl px-8 text-center">

          <p className="uppercase tracking-[0.35em] text-[#B78A56]">
            Journal
          </p>

          <h1 className="font-heading mt-6 text-6xl md:text-8xl text-[#2D221C]">
            Stories Behind
            <br />
            Every Cup
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#6B4F3A]">
            Learn about roasting, brewing, sustainability and the people
            who make exceptional coffee possible.
          </p>

        </div>
      </section>

      <Divider />

      {/* Featured Article */}

      <section className="py-32">
        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            <div className="overflow-hidden rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,.12)]">

  <Image
    src="/images/journal-featured.jpg"
    alt="Coffee roasting"
    width={1200}
    height={800}
    className="h-full w-full object-cover transition duration-700 hover:scale-105"
    priority
  />

</div>

            <div>

              <p className="uppercase tracking-[0.35em] text-[#B78A56]">
                Featured Article
              </p>

              <h2 className="font-heading mt-5 text-5xl text-[#2D221C]">
                Why Small Batch
                <br />
                Roasting Changes Everything
              </h2>

              <p className="mt-8 leading-8 text-[#6B4F3A]">
                The finest coffees are not produced at industrial speed. They are developed gradually, roast by roast, allowing every origin to express its unique sweetness, aroma and complexity. Here is why small-batch roasting remains the hallmark of exceptional coffee.
              </p>

              <Link
  href={`/journal/${articles[0].slug}`}
  className="mt-10 inline-block rounded-full bg-[#2D221C] px-8 py-4 text-sm uppercase tracking-[0.3em] text-white transition hover:bg-[#433229]"
>
  Read the Story →
</Link>

            </div>

          </div>

        </div>
      </section>

      <Divider />

      {/* Latest Posts */}

      <section className="py-32">
        <div className="mx-auto max-w-7xl px-8">

          <div className="mb-16 text-center">

            <p className="uppercase tracking-[0.35em] text-[#B78A56]">
              Latest Articles
            </p>

            <h2 className="font-heading mt-5 text-5xl text-[#2D221C]">
              Fresh From Our Journal
            </h2>

          </div>

          <div className="grid gap-10 md:grid-cols-3">

           {articles.slice(1).map((post) => (
            <Link
  key={post.slug}
  href={`/journal/${post.slug}`}
  className="group"
>

<article
  className="
    rounded-[32px]
    bg-white
    p-10
    shadow-sm
    transition-all
    duration-500
    hover:-translate-y-3
    hover:shadow-[0_30px_60px_rgba(0,0,0,.12)]
  "
>
               

                <p className="uppercase tracking-[0.3em] text-[#B78A56]">
                  {post.category}
                </p>
                <p className="mt-3 text-sm uppercase tracking-[0.25em] text-[#9B7B5A]">
 {post.readingTime}
</p>

                <h3 className="font-heading mt-6 text-3xl text-[#2D221C]">
                  {post.title}
                </h3>

                <p className="mt-6 leading-8 text-[#6B4F3A]">
                  {post.excerpt}
                </p>

               <div className="mt-8 uppercase tracking-[0.3em] text-sm text-[#2D221C]">
  Read More →
</div>

            </article>

</Link>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}