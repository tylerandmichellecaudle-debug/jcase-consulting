import Link from "next/link";

export default function ApplyCTA() {
  return (
    <section className="section-padding bg-[#0F1E2E]">
      <div className="container-custom">
        <div className="rounded-[40px] border border-[#C89B3C]/20 bg-gradient-to-br from-[#13263A] to-[#0B1622] p-12 text-center md:p-20">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C89B3C]">
            Take The Next Step
          </p>

          <h2 className="mx-auto mb-8 max-w-4xl text-5xl leading-tight md:text-7xl">
            Start Building A Life That Lasts
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/75">
            Apply for coaching and begin developing the discipline, leadership,
            and structure needed for long-term growth.
          </p>

          <Link
            href="/apply"
            className="rounded-full bg-[#C89B3C] px-10 py-5 text-lg font-semibold text-black transition hover:opacity-90"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
}