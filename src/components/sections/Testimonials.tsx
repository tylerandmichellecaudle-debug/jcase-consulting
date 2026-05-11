const testimonials = [
  {
    name: "Michael R.",
    role: "Business Owner",
    text: "This coaching helped me rebuild discipline, structure, and leadership in every area of my life.",
  },
  {
    name: "David L.",
    role: "Entrepreneur",
    text: "The Four F’s framework completely changed how I approach leadership, family, and personal growth.",
  },
  {
    name: "Chris T.",
    role: "Father & Executive",
    text: "I stopped drifting and finally built systems, consistency, and accountability that actually lasted.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#13263A] py-28">
      <div className="container-custom">
        <div className="mb-20 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C89B3C]">
            Testimonials
          </p>

          <h2 className="text-5xl leading-tight md:text-7xl">
            Real Transformation
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group rounded-[32px] border border-white/10 bg-[#0F1E2E] p-10 transition duration-300 hover:-translate-y-2 hover:border-[#C89B3C]/40"
            >
              <div className="mb-8 text-6xl text-[#C89B3C]/30">
                "
              </div>

              <p className="mb-8 text-lg leading-relaxed text-white/75">
                {testimonial.text}
              </p>

              <div>
                <h4 className="text-xl gold-text">
                  {testimonial.name}
                </h4>

                <p className="mt-1 text-sm uppercase tracking-wider text-white/40">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}