const stats = [
  {
    number: "4",
    label: "Core Pillars",
  },
  {
    number: "100%",
    label: "Growth Focused",
  },
  {
    number: "1",
    label: "Life To Build",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#0B1622] py-24">
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,#C89B3C,transparent_60%)]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid gap-10 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <div className="mb-4 text-6xl font-semibold gold-text md:text-7xl">
                {stat.number}
              </div>

              <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}