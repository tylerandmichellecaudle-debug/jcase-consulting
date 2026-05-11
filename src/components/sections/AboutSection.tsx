import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[#0F1E2E] py-28">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top,#C89B3C,transparent_60%)]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* IMAGE SIDE */}
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-[#C89B3C]/10 blur-3xl" />

            <Image
              src="/images/about.jpg"
              alt="J Case Consulting"
              width={700}
              height={900}
              className="relative z-10 rounded-[40px] object-cover shadow-2xl"
            />
          </div>

          {/* CONTENT */}
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C89B3C]">
              About J Case Consulting
            </p>

            <h2 className="mb-8 text-5xl leading-tight md:text-7xl">
              Build With
              <span className="gold-text"> Discipline & Purpose</span>
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-white/75">
              <p>
                J Case Consulting helps men develop intentional leadership,
                structure, accountability, and long-term growth through the
                Four F’s framework.
              </p>

              <p>
                This is about building a life that lasts — spiritually,
                physically, financially, and relationally.
              </p>

              <p>
                No hype. No shortcuts. Just disciplined growth,
                leadership, and real transformation.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="rounded-full bg-[#C89B3C] px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105"
              >
                Learn More
              </Link>

              <Link
                href="/apply"
                className="rounded-full border border-white/15 px-8 py-4 transition duration-300 hover:border-[#C89B3C]"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}