"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Palette, Code, Layout, Zap, Globe, Layers } from "lucide-react";

export function ParallaxGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const midY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const fgY = useTransform(scrollYProgress, [0, 1], [0, -300]);

  const icons = [
    { Icon: Palette, label: "Design" },
    { Icon: Code, label: "Development" },
    { Icon: Layout, label: "UI/UX" },
    { Icon: Zap, label: "Performance" },
    { Icon: Globe, label: "Global" },
    { Icon: Layers, label: "Systems" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-devera-cream py-32 sm:py-40 lg:py-48"
    >
      <div className="mx-auto max-w-[1480px] px-6 lg:px-8">
        <div className="mb-20 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.32em] text-devera-dark/50">
            In detail
          </p>
          <h2 className="mt-6 text-4xl font-semibold leading-tight text-devera-dark sm:text-5xl">
            Every project tells a story through craft and precision.
          </h2>
        </div>

        <div className="relative h-[600px] lg:h-[700px]">
          {/* Background layer - large typography */}
          <motion.div
            style={{ y: bgY }}
            className="absolute inset-0 flex items-center justify-center opacity-20"
          >
            <span className="text-[12rem] font-semibold leading-none tracking-tighter text-devera-teal sm:text-[16rem] lg:text-[20rem]">
              D
            </span>
          </motion.div>

          {/* Middle layer - floating icons */}
          <motion.div
            style={{ y: midY }}
            className="absolute left-0 top-20 flex h-48 w-64 items-center justify-center rounded-2xl border border-devera-dark/10 bg-white shadow-lg lg:left-20 lg:h-64 lg:w-80"
          >
            <Palette className="h-16 w-16 text-devera-teal lg:h-20 lg:w-20" />
          </motion.div>

          <motion.div
            style={{ y: midY }}
            className="absolute right-0 top-40 flex h-40 w-56 items-center justify-center rounded-2xl border border-devera-dark/10 bg-white shadow-lg lg:right-20 lg:h-52 lg:w-72"
          >
            <Code className="h-14 w-14 text-devera-teal lg:h-18 lg:w-18" />
          </motion.div>

          {/* Foreground layer - main icon grid */}
          <motion.div
            style={{ y: fgY }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] overflow-hidden rounded-[2.5rem] border border-devera-dark/15 bg-white shadow-2xl p-12"
          >
            <div className="grid grid-cols-3 gap-8">
              {icons.map((icon, index) => (
                <div key={index} className="flex flex-col items-center gap-4">
                  <icon.Icon className="h-12 w-12 text-devera-dark/80" />
                  <span className="text-sm font-medium text-devera-dark/60">{icon.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            style={{ y: bgY }}
            className="absolute bottom-20 left-10 h-24 w-24 rounded-full bg-devera-teal/10 blur-2xl lg:left-32"
          />
          <motion.div
            style={{ y: bgY }}
            className="absolute top-32 right-16 h-32 w-32 rounded-full bg-devera-cream/50 blur-2xl lg:right-40"
          />
        </div>
      </div>
    </section>
  );
}
