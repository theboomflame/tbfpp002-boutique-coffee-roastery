import Image from "next/image";
import Divider from "../../ui/Divider";

export default function AboutContent() {
  return (
    <>
      {/* Hero */}

      <section className="pt-40 pb-24">
        <div className="mx-auto max-w-5xl px-8 text-center">

          <p className="uppercase tracking-[0.35em] text-[#B78A56]">
            About Boutique Coffee Roastery
          </p>

          <h1 className="font-heading mt-6 text-6xl text-[#2D221C] md:text-8xl">
            Coffee Worth
            <br />
            Slowing Down For
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#6B4F3A]">
            Boutique Coffee Roastery Co. exists to celebrate craftsmanship over
            convenience. Every coffee is roasted in small batches,
            sourced responsibly, and created to transform an ordinary
            cup into a memorable ritual.
          </p>

        </div>
      </section>

      <Divider />

      {/* Story */}

      <section className="py-32">
        <div className="mx-auto grid max-w-7xl gap-20 px-8 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="uppercase tracking-[0.35em] text-[#B78A56]">
              Our Story
            </p>

            <h2 className="font-heading mt-5 text-5xl text-[#2D221C]">
              Built Around
              <br />
              Exceptional Coffee
            </h2>

            <p className="mt-8 leading-8 text-[#6B4F3A]">
              Every memorable conversation, early morning, and quiet afternoon
              has one thing in common; a great cup of coffee. 
              Boutique Coffee Rostery was founded with a simple belief.
              Exceptional coffee has the power to bring people together. 
              
            <p className="mt-6 leading-8 text-[#6B4F3A]">
              We work with trusted coffee growers who share our commitment to quality and sustainability. Every batch is roasted 
              with precision to preserve the unique flavors that make each origin special.
            </p>

 
            </p>

            <p className="mt-6 leading-8 text-[#6B4F3A]">
              To us, coffee is not just something you drink. 
              It is a daily ritual worth enjoying. 
            </p>

          </div>

         <div className="overflow-hidden rounded-[40px] shadow-[0_35px_70px_rgba(0,0,0,.15)]">

  <Image
    src="/images/about-1.jpg"
    alt="Veloura Coffee Roastery"
    width={900}
    height={1100}
    priority
    className="h-full w-full object-cover transition duration-700 hover:scale-105"
  />

</div>

        </div>
      </section>

      <Divider />

      {/* Principles */}

      <section className="py-32">
        <div className="mx-auto max-w-7xl px-8">

          <div className="text-center">

            <p className="uppercase tracking-[0.35em] text-[#B78A56]">
              Our Principles
            </p>

            <h2 className="font-heading mt-5 text-5xl text-[#2D221C]">
              Three Things We Never Compromise
            </h2>


      
          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-3">

            {[
              {
                title: "Craft",
                text: "Every roast is developed slowly until its character is fully expressed.",
              },
              {
                title: "Origin",
                text: "Exceptional coffee begins with responsible sourcing and trusted farmers.",
              },
              {
                title: "Patience",
                text: "We value consistency, precision and quality above speed.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[32px] bg-white p-12 shadow-sm"
              >
                <h3 className="font-heading text-4xl text-[#2D221C]">
                  {item.title}
                </h3>

                <p className="mt-6 leading-8 text-[#6B4F3A]">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}