"use client";

import { motion } from "framer-motion";

export function FounderSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1480px] gap-16 lg:grid-cols-[0.55fr_0.45fr] items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-devera-dark/50">Founder</p>
          <h2 className="mt-6 text-5xl font-semibold leading-tight text-devera-dark sm:text-6xl">Hi, I&apos;m Naitik.</h2>
          <p className="mt-8 max-w-xl text-base leading-8 text-devera-dark/75 sm:text-lg">
            Designer, developer and creative technologist building interactive digital experiences, premium interfaces and meaningful brand systems.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-slate-200/70 bg-offwhite p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.28em] text-devera-dark/50">Focus</p>
              <p className="mt-4 text-sm leading-7 text-devera-dark/75">Creative technology, product interfaces, 3D storytelling and editorial design.</p>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200/70 bg-offwhite p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.28em] text-devera-dark/50">Method</p>
              <p className="mt-4 text-sm leading-7 text-devera-dark/75">A careful balance of craft, systems thinking and polished execution.</p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-slate-100 p-8 shadow-glow"
        >
          <img
            src="/founder_image.png"
            alt="Naitik - Founder of Devera"
            className="h-[520px] w-full rounded-[2rem] object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,128,129,0.18),transparent_38%)]" />
        </motion.div>
      </div>
    </section>
  );
}
