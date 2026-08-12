"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Understanding the problem, audience and opportunity. We dive deep into your brand, market, and goals to uncover insights that shape the direction.",
  },
  {
    number: "02",
    title: "Define",
    description: "Creating the strategy and direction. We establish clear objectives, define success metrics, and map out the strategic framework.",
  },
  {
    number: "03",
    title: "Design",
    description: "Building the visual and interaction system. We craft the aesthetic, user experience, and detailed design specifications.",
  },
  {
    number: "04",
    title: "Build",
    description: "Turning the design into a real digital product. We develop with clean code, performance optimization, and technical excellence.",
  },
  {
    number: "05",
    title: "Refine",
    description: "Testing, improving and polishing every detail. We rigorously test, gather feedback, and refine until the experience is exceptional.",
  },
  {
    number: "06",
    title: "Launch",
    description: "Delivering the final experience. We launch with confidence, provide support, and ensure a successful transition to live.",
  },
];

export default function ProcessPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero */}
      <section className="relative overflow-hidden bg-offwhite px-6 py-32 sm:px-8 lg:px-12 lg:py-48">
        <div className="mx-auto max-w-[1480px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <p className="text-sm uppercase tracking-[0.32em] text-devera-dark/50">Our Process</p>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-[-0.03em] text-devera-dark sm:text-6xl lg:text-7xl">
              A methodology built for precision and excellence.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="relative overflow-hidden bg-white px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1480px]">
          <div className="space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid gap-8 lg:grid-cols-[0.3fr_1fr] lg:items-start py-16 ${
                  index !== steps.length - 1 ? 'border-b border-slate-200/50' : ''
                }`}
              >
                <div className="relative">
                  <span className="text-6xl font-semibold leading-none text-devera-teal/20 sm:text-7xl lg:text-8xl">
                    {step.number}
                  </span>
                </div>
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-semibold leading-tight text-devera-dark sm:text-4xl">
                    {step.title}
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-devera-dark/70">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-devera-cream px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1480px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-sm uppercase tracking-[0.32em] text-devera-dark/50">Ready to start?</p>
            <h2 className="mt-6 text-3xl font-semibold leading-tight text-devera-dark sm:text-4xl">
              Let's create something exceptional together.
            </h2>
            <div className="mt-10">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-devera-dark/10 bg-devera-dark px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-devera-cream transition hover:border-devera-teal hover:bg-devera-teal"
              >
                Start a conversation
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
