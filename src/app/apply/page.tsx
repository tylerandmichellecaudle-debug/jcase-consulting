"use client";

import { motion } from "framer-motion";

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-[#0F1E2E] pt-40 text-white">
      <section className="pb-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl"
          >
            <div className="mb-16 text-center">
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C89B3C]">
                Coaching Application
              </p>

              <h1 className="mb-6 text-5xl leading-tight md:text-7xl">
                Apply For Coaching
              </h1>

              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/75">
                This application helps determine whether J Case Consulting
                is the right fit for your current season of growth,
                leadership, and accountability.
              </p>
            </div>

            <form
              name="coaching-application"
              method="POST"
              data-netlify="true"
              action="/thank-you"
              className="space-y-8 rounded-[40px] border border-white/10 bg-[#13263A] p-8 md:p-14"
            >
              <input
                type="hidden"
                name="form-name"
                value="coaching-application"
              />

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-3 block text-sm uppercase tracking-wider text-white/60">
                    First Name
                  </label>

                  <input
                    type="text"
                    name="firstName"
                    className="w-full rounded-2xl border border-white/10 bg-[#0F1E2E] px-5 py-4 text-white outline-none transition focus:border-[#C89B3C]"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm uppercase tracking-wider text-white/60">
                    Last Name
                  </label>

                  <input
                    type="text"
                    name="lastName"
                    className="w-full rounded-2xl border border-white/10 bg-[#0F1E2E] px-5 py-4 text-white outline-none transition focus:border-[#C89B3C]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-3 block text-sm uppercase tracking-wider text-white/60">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  className="w-full rounded-2xl border border-white/10 bg-[#0F1E2E] px-5 py-4 text-white outline-none transition focus:border-[#C89B3C]"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm uppercase tracking-wider text-white/60">
                  Current Occupation
                </label>

                <input
                  type="text"
                  name="occupation"
                  className="w-full rounded-2xl border border-white/10 bg-[#0F1E2E] px-5 py-4 text-white outline-none transition focus:border-[#C89B3C]"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm uppercase tracking-wider text-white/60">
                  Which area needs the most growth right now?
                </label>

                <select
                  name="growthArea"
                  className="w-full rounded-2xl border border-white/10 bg-[#0F1E2E] px-5 py-4 text-white outline-none transition focus:border-[#C89B3C]"
                >
                  <option>Faith</option>
                  <option>Family</option>
                  <option>Finances</option>
                  <option>Fitness</option>
                  <option>Overall Structure & Discipline</option>
                </select>
              </div>

              <div>
                <label className="mb-3 block text-sm uppercase tracking-wider text-white/60">
                  What challenges are you currently facing?
                </label>

                <textarea
                  rows={5}
                  name="challenges"
                  className="w-full rounded-2xl border border-white/10 bg-[#0F1E2E] px-5 py-4 text-white outline-none transition focus:border-[#C89B3C]"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm uppercase tracking-wider text-white/60">
                  Why are you seeking coaching now?
                </label>

                <textarea
                  rows={5}
                  name="whyNow"
                  className="w-full rounded-2xl border border-white/10 bg-[#0F1E2E] px-5 py-4 text-white outline-none transition focus:border-[#C89B3C]"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#C89B3C] px-8 py-5 text-lg font-semibold text-black transition duration-300 hover:scale-[1.02]"
              >
                Submit Application
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}