import {
  HeartHandshake,
  Users,
  Landmark,
  Dumbbell,
} from "lucide-react";

const items = [
  {
    icon: HeartHandshake,
    title: "Faith",
    text: "Build a life grounded in purpose, discipline, integrity, and spiritual leadership.",
  },
  {
    icon: Users,
    title: "Family",
    text: "Strengthen your marriage, leadership at home, and the legacy you leave behind.",
  },
  {
    icon: Landmark,
    title: "Finances",
    text: "Create structure, stewardship, and financial confidence for long-term impact.",
  },
  {
    icon: Dumbbell,
    title: "Fitness",
    text: "Develop physical discipline, energy, resilience, and mental toughness.",
  },
];

export default function FourFs() {
  return (
    <section className="section-padding bg-[#13263A]">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C89B3C]">
            The Foundation
          </p>

          <h2 className="text-4xl md:text-6xl">
            The Four F’s Framework
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-[#0F1E2E] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#C89B3C]/50"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#C89B3C]/10">
                  <Icon className="text-[#C89B3C]" />
                </div>

                <h3 className="mb-4 text-3xl">
                  {item.title}
                </h3>

                <p className="leading-relaxed text-white/70">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}