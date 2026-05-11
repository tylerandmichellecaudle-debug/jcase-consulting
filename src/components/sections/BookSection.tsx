import Image from "next/image";

export default function BookSection() {
  return (
    <section className="section-padding bg-[#13263A]">
      <div className="container-custom grid items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C89B3C]">
            Featured Book
          </p>

          <h2 className="mb-8 text-5xl md:text-6xl">
            Built To Last
          </h2>

          <p className="mb-6 text-lg leading-relaxed text-white/75">
            A practical framework for building a life rooted in purpose,
            leadership, stewardship, and long-term impact.
          </p>

          <p className="text-lg leading-relaxed text-white/75">
            Stop restarting. Start building.
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/book.png"
            alt="Built To Last Book"
            width={500}
            height={700}
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}