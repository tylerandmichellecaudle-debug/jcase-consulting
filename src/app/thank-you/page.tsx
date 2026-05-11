import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0F1E2E] px-6 text-white">
      <div className="max-w-2xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C89B3C]">
          Application Submitted
        </p>

        <h1 className="mb-6 text-5xl md:text-7xl">
          Thank You
        </h1>

        <p className="mb-10 text-lg leading-relaxed text-white/75">
          Your application has been received. We’ll review your submission
          and reach out if it appears to be a strong fit.
        </p>

        <Link
          href="/"
          className="rounded-full bg-[#C89B3C] px-8 py-4 font-semibold text-black transition hover:opacity-90"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}