import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-[#0F1E2E] pt-32 text-white">
      {/* HERO */}
      <section className="relative overflow-hidden pb-24 pt-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#C89B3C]">
              About J Case Consulting
            </p>

            <h1 className="mb-8 text-5xl leading-tight md:text-7xl">
              Leadership. Discipline. Legacy.
            </h1>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/75 md:text-xl">
              J Case Consulting exists to help men develop structure,
              leadership, accountability, and purpose across the four areas
              that shape life most: faith, family, finances, and fitness.
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE + STORY */}
      <section className="pb-24">
        <div className="container-custom grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <Image
              src="/images/about-main.jpg"
              alt="J Case Consulting"
              width={700}
              height={900}
              className="rounded-[40px] object-cover"
            />
          </div>

          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C89B3C]">
              The Mission
            </p>

            <h2 className="mb-8 text-4xl leading-tight md:text-6xl">
              Build A Life That Lasts
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-white/75">
              <p>
                Too many men drift through life without structure,
                accountability, direction, or intentional leadership.
              </p>

              <p>
                J Case Consulting was built to challenge that reality through
                practical coaching, disciplined growth, and leadership
                development rooted in long-term impact.
              </p>

              <p>
                This is not motivational hype. It’s about becoming the kind
                of man who leads himself, his family, and his future with
                consistency and purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR F'S */}
      <section className="bg-[#13263A] py-24">
        <div className="container-custom">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C89B3C]">
              The Framework
            </p>

            <h2 className="text-5xl md:text-7xl">
              The Four F’s
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[32px] border border-white/10 bg-[#0F1E2E] p-10">
              <h3 className="mb-4 text-4xl gold-text">
                Faith
              </h3>

              <p className="leading-relaxed text-white/75">
                Develop purpose, conviction, integrity, and internal
                discipline that guides every other area of life.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-[#0F1E2E] p-10">
              <h3 className="mb-4 text-4xl gold-text">
                Family
              </h3>

              <p className="leading-relaxed text-white/75">
                Build stronger relationships, leadership at home, and a
                lasting legacy for future generations.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-[#0F1E2E] p-10">
              <h3 className="mb-4 text-4xl gold-text">
                Finances
              </h3>

              <p className="leading-relaxed text-white/75">
                Create stewardship, structure, responsibility, and
                long-term financial confidence.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-[#0F1E2E] p-10">
              <h3 className="mb-4 text-4xl gold-text">
                Fitness
              </h3>

              <p className="leading-relaxed text-white/75">
                Develop physical discipline, resilience, energy, and
                mental toughness that impacts every part of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-custom">
          <div className="rounded-[40px] border border-[#C89B3C]/20 bg-gradient-to-br from-[#13263A] to-[#0B1622] p-12 text-center md:p-20">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C89B3C]">
              Ready To Grow?
            </p>

            <h2 className="mx-auto mb-8 max-w-4xl text-5xl leading-tight md:text-7xl">
              Start Building With Intention
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/75">
              Apply for coaching and begin building discipline,
              leadership, and structure in every major area of life.
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