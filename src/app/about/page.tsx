"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero */}
      <section className="relative overflow-hidden bg-devera-cream px-6 py-32 sm:px-8 lg:px-12 lg:py-48">
        <div className="absolute inset-0">
          <img
            src="/about.webp"
            alt="About Devera"
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        <div className="relative mx-auto max-w-[1480px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <p className="text-sm uppercase tracking-[0.32em] text-devera-dark/50">About Devera</p>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-[-0.03em] text-devera-dark sm:text-6xl lg:text-7xl">
              We build digital work that people remember.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="relative overflow-hidden bg-white px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <p className="text-lg leading-8 text-devera-dark/75">
                Devera is a studio for brand, product and digital experience. We believe in ideas defined by restraint, details that matter and interfaces that feel calm, clear and human.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-slate-100 shadow-glow"
            >
              <img
                src="/about.webp"
                alt="About Devera"
                className="h-[400px] w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative overflow-hidden bg-white px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <p className="text-sm uppercase tracking-[0.32em] text-devera-dark/50">Philosophy</p>
              <h2 className="mt-6 text-3xl font-semibold leading-tight text-devera-dark sm:text-4xl">
                Design with intention, build with precision.
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-xl space-y-6 text-lg leading-8 text-devera-dark/70"
            >
              <div className="inline-block rounded-full bg-devera-teal/10 px-4 py-2 text-sm font-semibold text-devera-teal">
                Devera = Dev-Era (Developers Era)
              </div>
              <p>
                Devera is a premium creative studio that believes in the power of thoughtful digital experiences. We don't just build websites—we craft systems that feel intentional, refined, and memorable.
              </p>
              <p>
                Our approach combines editorial aesthetics with technical excellence. Every pixel, every interaction, every transition is considered. We believe that great design should feel effortless, even when the execution is complex.
              </p>
              <p>
                We work with brands that value precision over trends, substance over style, and long-term impact over fleeting attention.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden bg-offwhite px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1480px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 max-w-2xl"
          >
            <p className="text-sm uppercase tracking-[0.32em] text-devera-dark/50">What we believe</p>
            <h2 className="mt-6 text-3xl font-semibold leading-tight text-devera-dark sm:text-4xl">
              Principles that guide every project.
            </h2>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Clarity over complexity",
                description: "We believe in clear communication through design. Every element should have a purpose.",
              },
              {
                title: "Craft over speed",
                description: "Quality takes time. We never rush the details that make the difference.",
              },
              {
                title: "Substance over trends",
                description: "We build for longevity, not for the moment. Timeless design outlasts trends.",
              },
              {
                title: "Collaboration over ego",
                description: "Great work happens when we listen, learn, and create together.",
              },
              {
                title: "Precision over approximation",
                description: "Every spacing decision, every color choice, every interaction is intentional.",
              },
              {
                title: "Experience over features",
                description: "We focus on how it feels, not just what it does. Emotion matters.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-[1.5rem] border border-slate-200/70 bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold leading-tight text-devera-dark">{value.title}</h3>
                <p className="mt-4 text-base leading-7 text-devera-dark/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="relative overflow-hidden bg-devera-dark px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-xl text-white"
            >
              <p className="text-sm uppercase tracking-[0.32em] text-devera-cream/60">Our approach</p>
              <h2 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl">
                Strategic thinking meets creative execution.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                We begin with understanding—your brand, your audience, your goals. Then we design with purpose, build with precision, and refine until every detail feels right.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {[
                "Brand strategy and visual identity",
                "UI/UX design and prototyping",
                "Web development and technical implementation",
                "3D and interactive experiences",
                "E-commerce solutions",
                "Creative technology consulting",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 text-devera-cream/90"
                >
                  <span className="h-px w-12 bg-devera-teal/50" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
