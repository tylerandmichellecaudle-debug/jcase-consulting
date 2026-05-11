import Image from "next/image";

export default function Lifestyle() {
  return (
    <section className="bg-[#0F1E2E] py-28">
      <div className="container-custom">
        <div className="mb-20 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C89B3C]">
            The Standard
          </p>

          <h2 className="mx-auto max-w-5xl text-5xl leading-tight md:text-7xl">
            Discipline Creates Freedom
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="overflow-hidden rounded-[32px]">
            <Image
              src="/images/lifestyle-1.jpg"
              alt="Lifestyle"
              width={500}
              height={700}
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          <div className="overflow-hidden rounded-[32px]">
            <Image
              src="/images/lifestyle-2.jpg"
              alt="Leadership"
              width={500}
              height={700}
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          <div className="overflow-hidden rounded-[32px]">
            <Image
              src="/images/lifestyle-3.jpg"
              alt="Growth"
              width={500}
              height={700}
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}