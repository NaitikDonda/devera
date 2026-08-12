"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.96]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section id="hero" className="relative overflow-hidden bg-offwhite pb-24 pt-28 sm:pb-32 lg:pt-32">
      <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top_left,rgba(0,128,129,0.12),transparent_38%),radial-gradient(circle_at_top_right,rgba(0,95,96,0.18),transparent_36%)]" />
      <div className="mx-auto grid max-w-[1480px] gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <motion.div style={{ opacity, y: heroY }} className="relative z-10 max-w-2xl">
          <div className="mb-8 inline-flex rounded-full border border-devera-dark/10 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.28em] text-devera-dark/80 backdrop-blur-sm">
            Premium creative studio
          </div>
          <h1 className="max-w-[12ch] text-5xl font-semibold leading-[1.02] tracking-[-0.03em] text-devera-dark sm:text-6xl lg:text-7xl">
            We design digital experiences that feel intentional.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-8 text-devera-dark/70 sm:text-lg">
            Devera blends brand, interface, and immersive technology to create editorial digital work with precision, clarity and quiet confidence.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-devera-dark/10 bg-devera-cream px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-devera-dark transition hover:border-devera-teal hover:text-devera-teal"
            >
              View our work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-300/40 px-7 py-3 text-sm font-semibold tracking-[0.18em] text-devera-dark transition hover:border-devera-dark"
            >
              Let&apos;s Talk
            </a>
          </div>
        </motion.div>

        <motion.div style={{ scale: heroScale }} className="relative isolate overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/90 p-8 shadow-glow sm:p-10">
          <div className="pointer-events-none absolute -left-8 top-10 h-72 w-72 rounded-full bg-devera-teal/10 blur-3xl" />
          <div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,252,207,0.16),transparent_48%)]" />
          <div className="relative flex h-full flex-col justify-between gap-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-slate-200/75 bg-slate-50 p-6 shadow-sm">
                <span className="text-xs uppercase tracking-[0.3em] text-devera-dark/50">Featured</span>
                <h2 className="mt-4 text-2xl font-semibold leading-tight text-devera-dark">A documentary platform for a heritage brand.</h2>
                <p className="mt-4 text-sm leading-7 text-devera-dark/70">A warm editorial web experience with refined motion and tactile detail.</p>
              </div>
              <div className="flex flex-col justify-between rounded-[1.75rem] border border-slate-200/75 bg-devera-dark p-6 text-devera-cream shadow-sm">
                <span className="text-xs uppercase tracking-[0.3em] text-devera-cream/70">System</span>
                <div>
                  <h3 className="mt-4 text-2xl font-semibold leading-tight">Built for clarity.</h3>
                  <p className="mt-4 text-sm leading-7 text-devera-cream/80">A restrained interface with elevated details and deliberate spacing.</p>
                </div>
              </div>
            </div>
            <div className="mt-4 overflow-hidden rounded-[1.75rem] border border-slate-200/70 bg-[#111313] p-6 text-white shadow-xl shadow-slate-900/10">
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.22em] text-slate-300/90">
                <span>Devera project</span>
                <span>2026</span>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/8">
                  <div className="h-12 w-12 rounded-2xl border border-white/10 bg-devera-teal/80" />
                </div>
                <div className="max-w-[18rem]">
                  <p className="text-lg font-semibold leading-tight">Interactive product showcase</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300/90">A minimal, immersive experience that feels editorial and tactile.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-16 bottom-8 h-48 w-48 rounded-full bg-devera-teal/10 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
