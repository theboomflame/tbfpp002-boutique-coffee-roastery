import Image from "next/image";
import Divider from "../../ui/Divider";

export default function ContactContent() {
  return (
    <>
      {/* Hero */}

      <section className="pt-36 pb-20 md:pt-40 md:pb-24">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <p className="uppercase tracking-[0.35em] text-[#B78A56]">
            Contact
          </p>

          <h1 className="font-heading mt-6 text-5xl leading-[0.95] text-[#2D221C] sm:text-6xl md:text-8xl">
            We would Love
            <br />
            To Hear From You
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#6B4F3A]">
            Whether you are searching for exceptional coffee,
            wholesale partnerships or simply have a question,
            our team is always happy to help.
          </p>

        </div>

      </section>

      <Divider />

      {/* Contact Grid */}

      <section className="py-32">

       <div className="mx-auto grid max-w-7xl gap-16 px-6 md:px-8 lg:grid-cols-2">

          {/* Form */}

          <div>

            <p className="uppercase tracking-[0.35em] text-[#B78A56]">
              Send a Message
            </p>

            <h2 className="font-heading mt-5 text-4xl leading-tight text-[#2D221C] md:text-5xl">
              We Should Start
              <br />
              A Conversation
            </h2>

            <form className="mt-12 space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-full border border-[#D9C7B0] bg-white px-7 py-5 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-full border border-[#D9C7B0] bg-white px-7 py-5 outline-none"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-full border border-[#D9C7B0] bg-white px-7 py-5 outline-none"
              />

              <textarea
                rows={6}
                placeholder="Tell us about your enquiry..."
                className="w-full rounded-[30px] border border-[#D9C7B0] bg-white p-7 outline-none"
              />

              <button
  className="
    w-full
    rounded-full
    bg-[#2D221C]
    px-10
    py-5
    md:w-auto
                  uppercase
                  tracking-[0.3em]
                  text-sm
                  text-white
                  transition
                  hover:bg-[#433229]
                "
              >
                Send Message
              </button>

            </form>

          </div>

          {/* Information */}

          <div className="space-y-10">

  <div className="overflow-hidden rounded-[36px] shadow-[0_35px_70px_rgba(0,0,0,.15)]">

    <Image
      src="/images/contact.jpg"
      alt="Veloura Coffee Roastery"
      width={1200}
      height={800}
      className="h-[240px] w-full object-cover transition duration-700 hover:scale-105 md:h-[320px]"
    />

  </div>

  <div className="rounded-[36px] bg-white p-8 shadow-sm md:p-12">

              <h3 className="font-heading text-3xl text-[#2D221C] md:text-4xl">
                Visit Us
              </h3>

              <div className="mt-10 space-y-8">

                <div>
                  <p className="uppercase tracking-[0.3em] text-[#B78A56]">
                    Address
                  </p>

                  <p className="mt-3 leading-8 text-[#6B4F3A]">
                    18 Artisan Street
                    <br />
                    London
                    <br />
                    United Kingdom
                  </p>
                </div>

                <div>
                  <p className="uppercase tracking-[0.3em] text-[#B78A56]">
                    Email
                  </p>

                  <p className="mt-3 text-[#6B4F3A]">
                    hello@boutiquecoffeerostery.cofee
                  </p>
                </div>

                <div>
                  <p className="uppercase tracking-[0.3em] text-[#B78A56]">
                    Phone
                  </p>

                  <p className="mt-3 text-[#6B4F3A]">
                    +44 (0)20 1234 5678
                  </p>
                </div>

                <div>
                  <p className="uppercase tracking-[0.3em] text-[#B78A56]">
                    Opening Hours
                  </p>

                  <p className="mt-3 leading-8 text-[#6B4F3A]">
                    Monday – Friday
                    <br />
                    8:00 AM – 6:00 PM
                    <br />
                    <br />
                    Saturday
                    <br />
                    9:00 AM – 4:00 PM
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}