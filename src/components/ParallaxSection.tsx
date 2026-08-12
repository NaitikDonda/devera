"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ParallaxSection() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const cardY = useTransform(scrollYProgress, [0, 1], [60, -40]);
  const overlayY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-offwhite px-6 py-24 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,252,207,0.24),transparent_38%)]" />
      <div className="relative mx-auto max-w-[1480px]">
        <div className="grid gap-16 lg:grid-cols-[0.5fr_0.5fr] lg:items-center">
          <div className="z-10 max-w-xl">
            <p className="text-sm uppercase tracking-[0.32em] text-devera-dark/50">Depth & detail</p>
            <h2 className="mt-6 text-4xl font-semibold leading-tight text-devera-dark sm:text-5xl">A second parallax section with layered editorial imagery.</h2>
            <p className="mt-8 text-base leading-8 text-devera-dark/70 sm:text-lg">
              Large visuals move at different speeds to create refined depth and cinematic momentum through subtle layering.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-16 h-40 w-40 rounded-full bg-devera-teal/10 blur-3xl" />
            <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-devera-dark/10 blur-3xl" />
            <motion.div style={{ y: cardY }} className="relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white p-6 shadow-glow">
              <div className="h-[420px] overflow-hidden rounded-[1.75rem] bg-slate-200">
                <div className="relative h-full">
                  <div className="absolute left-8 top-10 h-52 w-52 rounded-[2rem] bg-devera-teal/8" />
                  <div className="absolute right-10 top-28 h-36 w-36 rounded-[2rem] bg-devera-cream/80" />
                  <div className="absolute inset-x-10 bottom-12 h-40 rounded-[1.5rem] bg-slate-300" />
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between gap-4 text-sm uppercase tracking-[0.3em] text-devera-dark/60">
                <span>Layered screens</span>
                <span>Editorial depth</span>
              </div>
            </motion.div>
            <motion.div style={{ y: overlayY }} className="pointer-events-none absolute left-8 bottom-8 h-32 w-32 rounded-full bg-devera-teal/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
