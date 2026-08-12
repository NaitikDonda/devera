"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-devera-cream px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1480px] gap-16 lg:grid-cols-[0.55fr_0.45fr]">
        <div className="max-w-xl">
          <p className="text-sm uppercase tracking-[0.32em] text-devera-dark/50">About Devera</p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-5xl font-semibold leading-tight text-devera-dark sm:text-6xl"
          >
            We build digital work that people remember.
          </motion.h2>
          <p className="mt-8 text-base leading-8 text-devera-dark/75 sm:text-lg">
            Devera is a studio for brand, product and digital experience. We believe in ideas defined by restraint, details that matter and interfaces that feel calm, clear and human.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-slate-200/70 bg-white/90 p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.28em] text-devera-dark/50">Philosophy</p>
              <p className="mt-4 text-sm leading-7 text-devera-dark/75">Design that balances craft, motion and usability with a premium editorial framework.</p>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200/70 bg-white/90 p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.28em] text-devera-dark/50">Approach</p>
              <p className="mt-4 text-sm leading-7 text-devera-dark/75">A structured process from discovery to launch, with every detail polished before release.</p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-slate-100 p-8 shadow-glow"
        >
          <img
            src="/about.webp"
            alt="About Devera"
            className="h-[520px] w-full rounded-[2rem] object-cover"
          />
          <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(255,252,207,0.4),transparent_28%)]" />
        </motion.div>
      </div>
    </section>
  );
}
