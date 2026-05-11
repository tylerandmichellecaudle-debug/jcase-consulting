import Image from "next/image";
import Link from "next/link";

export default function BooksPage() {
  return (
    <main className="bg-[#0F1E2E] pt-32 text-white">
      {/* HERO */}
      <section className="pb-24 pt-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#C89B3C]">
              Books & Resources
            </p>

            <h1 className="mb-8 text-5xl leading-tight md:text-7xl">
              Built To Last
            </h1>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/75 md:text-xl">
              A practical framework for building a life rooted in
              discipline, leadership, stewardship, and long-term impact.
            </p>
          </div>
        </div>
      </section>

      {/* BOOK SECTION */}
      <section className="pb-24">
        <div className="container-custom grid items-center gap-20 lg:grid-cols-2">
          <div className="flex justify-center">
            <Image
  src="/images/book-main.png"
  alt="Built To Last Book"
  width={550}
  height={800}
  priority
  loading="eager"
  className="rounded-[30px] shadow-2xl"
  style={{ width: "100%", height: "auto", maxWidth: "550px" }}
/>
          </div>

          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C89B3C]">
              The Framework
            </p>

            <h2 className="mb-8 text-5xl leading-tight md:text-6xl">
              Stop Restarting.
              <span className="gold-text"> Start Building.</span>
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-white/75">
              <p>
                Built To Last is designed to help men create structure,
                leadership, and intentional growth in the four areas that
                shape life most:
              </p>

              <ul className="space-y-4">
                <li>• Faith</li>
                <li>• Family</li>
                <li>• Finances</li>
                <li>• Fitness</li>
              </ul>

              <p>
                This is a practical guide for men who are tired of drifting,
                restarting, and living without direction.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#"
                className="rounded-full bg-[#C89B3C] px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105"
              >
                Buy The Book
              </a>

              <Link
                href="/apply"
                className="rounded-full border border-white/15 px-8 py-4 transition duration-300 hover:border-[#C89B3C]"
              >
                Apply For Coaching
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="bg-[#13263A] py-24">
        <div className="container-custom">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-4xl leading-relaxed md:text-6xl">
              “One life. One standard.
              <span className="gold-text">
                {" "}
                A legacy that lasts.”
              </span>
            </h2>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-custom">
          <div className="rounded-[40px] border border-[#C89B3C]/20 bg-gradient-to-br from-[#13263A] to-[#0B1622] p-12 text-center md:p-20">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C89B3C]">
              Ready To Build?
            </p>

            <h2 className="mx-auto mb-8 max-w-4xl text-5xl leading-tight md:text-7xl">
              Build A Life That Lasts
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/75">
              Coaching and resources designed to help men develop
              leadership, structure, discipline, and purpose.
            </p>

            <Link
              href="/apply"
              className="rounded-full bg-[#C89B3C] px-10 py-5 text-lg font-semibold text-black transition duration-300 hover:scale-105"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}