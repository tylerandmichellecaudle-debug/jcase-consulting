"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      />

      <div className="hero-overlay absolute inset-0" />

      <div className="container-custom relative z-10 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#C89B3C]">
            Faith • Family • Finances • Fitness
          </p>

          <h1 className="mb-8 text-4xl sm:text-5xl font-semibold leading-tight lg:text-7xl">
            Faith-Driven Coaching for
            <span className="gold-text">
              {" "}
              High-Performance Living
            </span>
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
            Build discipline, leadership, purpose, and a life that lasts
            through intentional growth in every area that matters most.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/apply"
              className="rounded-full bg-[#C89B3C] px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:opacity-90"
            >
              Apply Now
            </Link>

            <Link
              href="/about"
              className="rounded-full border border-white/20 px-8 py-4 transition duration-300 hover:border-[#C89B3C] hover:bg-white/5"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}