"use client";

import { motion } from "framer-motion";

const steps = [
  { title: "Discover", details: "Understanding the problem, audience and opportunity." },
  { title: "Define", details: "Creating the strategy and direction." },
  { title: "Design", details: "Building the visual and interaction system." },
  { title: "Build", details: "Turning the design into a real digital product." },
  { title: "Refine", details: "Testing, improving and polishing every detail." },
  { title: "Launch", details: "Delivering the final experience." },
];

export function ProcessSection() {
  return (
    <section id="process" className="relative overflow-hidden bg-white px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1480px]">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.32em] text-devera-dark/50">Process</p>
          <h2 className="mt-6 text-4xl font-semibold leading-tight text-devera-dark sm:text-5xl">A considered methodology from brief to launch.</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[1.75rem] border border-slate-200/80 bg-offwhite p-8 shadow-sm"
            >
              <span className="text-sm font-semibold text-devera-dark">0{index + 1}</span>
              <h3 className="mt-4 text-2xl font-semibold leading-tight text-devera-dark">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-devera-dark/70">{step.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
