import Link from "next/link";
import {
  Compass,
  Dumbbell,
  Landmark,
  ShieldCheck,
  Users,
} from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Leadership Coaching",
    text: "Develop discipline, structure, confidence, and leadership across every major area of life.",
  },
  {
    icon: Users,
    title: "Family Leadership",
    text: "Strengthen communication, responsibility, intentionality, and leadership within your home.",
  },
  {
    icon: Landmark,
    title: "Financial Stewardship",
    text: "Create systems, accountability, and long-term financial direction with intentional structure.",
  },
  {
    icon: Dumbbell,
    title: "Fitness & Discipline",
    text: "Build physical resilience, consistency, mental toughness, and sustainable habits.",
  },
  {
    icon: ShieldCheck,
    title: "Accountability Coaching",
    text: "Stay focused, eliminate excuses, and build momentum through consistent accountability.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#0F1E2E] pt-32 text-white">
      {/* HERO */}
      <section className="pb-24 pt-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#C89B3C]">
              Services
            </p>

            <h1 className="mb-8 text-5xl leading-tight md:text-7xl">
              Coaching Designed For
              <span className="gold-text"> Real Transformation</span>
            </h1>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/75 md:text-xl">
              J Case Consulting helps men build structure, discipline,
              leadership, and momentum through practical coaching rooted in
              the Four F’s framework.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-[32px] border border-white/10 bg-[#13263A] p-10 transition duration-300 hover:-translate-y-2 hover:border-[#C89B3C]/40"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#C89B3C]/10">
                    <Icon
                      size={30}
                      className="text-[#C89B3C]"
                    />
                  </div>

                  <h2 className="mb-5 text-3xl">
                    {service.title}
                  </h2>

                  <p className="leading-relaxed text-white/75">
                    {service.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#13263A] py-24">
        <div className="container-custom">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C89B3C]">
              The Process
            </p>

            <h2 className="text-5xl md:text-7xl">
              How Coaching Works
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-[32px] border border-white/10 bg-[#0F1E2E] p-10">
              <div className="mb-6 text-5xl font-semibold gold-text">
                01
              </div>

              <h3 className="mb-4 text-3xl">
                Apply
              </h3>

              <p className="leading-relaxed text-white/75">
                Submit your coaching application so we can determine fit,
                goals, and growth opportunities.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-[#0F1E2E] p-10">
              <div className="mb-6 text-5xl font-semibold gold-text">
                02
              </div>

              <h3 className="mb-4 text-3xl">
                Build Structure
              </h3>

              <p className="leading-relaxed text-white/75">
                Develop clear systems, routines, accountability, and
                leadership principles.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-[#0F1E2E] p-10">
              <div className="mb-6 text-5xl font-semibold gold-text">
                03
              </div>

              <h3 className="mb-4 text-3xl">
                Create Momentum
              </h3>

              <p className="leading-relaxed text-white/75">
                Gain consistency, confidence, discipline, and long-term
                momentum across all four areas of life.
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
              Ready To Begin?
            </p>

            <h2 className="mx-auto mb-8 max-w-4xl text-5xl leading-tight md:text-7xl">
              Start Building With Purpose
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/75">
              Apply for coaching and begin developing structure,
              accountability, leadership, and momentum.
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