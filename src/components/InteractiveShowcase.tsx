"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function InteractiveShowcase() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1.04, 0.98]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const translateX = useTransform(scrollYProgress, [0, 1], [0, -22]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.8], [0, 1, 0.8]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#111313] px-6 py-24 text-white sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,128,129,0.2),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,252,207,0.14),transparent_28%)]" />
      <div className="relative mx-auto grid max-w-[1480px] gap-16 lg:grid-cols-[0.55fr_0.45fr]">
        <div className="z-10 max-w-xl">
          <p className="text-sm uppercase tracking-[0.32em] text-devera-cream/60">Immersive work</p>
          <h2 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl">A premium product showcase designed to feel cinematic and tactile.</h2>
          <p className="mt-8 text-base leading-8 text-devera-cream/70 sm:text-lg">
            A layered composition with subtle perspective and scroll-driven movement that evokes a refined product launch.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-white/12 bg-white/5 p-6">
              <span className="text-xs uppercase tracking-[0.28em] text-devera-cream/60">Role</span>
              <p className="mt-4 text-sm leading-7 text-devera-cream/80">Strategy, product interface, motion, development.</p>
            </div>
            <div className="rounded-[1.75rem] border border-white/12 bg-white/5 p-6">
              <span className="text-xs uppercase tracking-[0.28em] text-devera-cream/60">Result</span>
              <p className="mt-4 text-sm leading-7 text-devera-cream/80">A quiet interactive moment that feels polished, dimensional and precise.</p>
            </div>
          </div>
        </div>

        <motion.div
          style={{ scale, rotateY, x: translateX, opacity }}
          className="relative isolate mx-auto h-[520px] max-w-[620px] overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950/95 shadow-[0_60px_120px_rgba(0,0,0,0.2)]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_35%)]" />
          <div className="absolute left-1/2 top-12 h-20 w-20 -translate-x-1/2 rounded-full bg-devera-cream/10 blur-3xl" />
          <div className="absolute -right-16 top-24 h-56 w-56 rounded-full bg-devera-teal/12 blur-3xl" />

          <div className="absolute inset-0 flex flex-col justify-between p-8">
            <div className="grid gap-4">
              <div className="w-28 rounded-full border border-white/10 bg-white/5 p-3 text-center text-xs uppercase tracking-[0.3em] text-devera-cream/75">
                Live prototype
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-devera-cream/60">Aether Studio</p>
                <h3 className="mt-4 text-3xl font-semibold leading-tight text-white">A carefully composed launch experience.</h3>
              </div>
            </div>
            <div className="grid gap-5">
              <div className="rounded-[1.75rem] border border-white/10 bg-[#0d1112]/90 p-6 text-sm leading-7 text-devera-cream/80">
                <p className="font-semibold text-white">Scroll to shift perspective</p>
                <p className="mt-3 text-devera-cream/70">The composition moves with depth, transforming from a quiet product reveal into an expressive editorial moment.</p>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center text-xs uppercase tracking-[0.3em] text-devera-cream/60">
                <span>Brand</span>
                <span>3D</span>
                <span>UX</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
