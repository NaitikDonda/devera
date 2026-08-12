"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/deveracrew@gmail.com", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      
      if (response.ok && result.success) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          window.location.href = "/";
        }, 3000);
      } else {
        console.error("Form submission failed:", result);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main>
      <Navbar />
      
      {/* Hero */}
      <section className="relative overflow-hidden bg-devera-teal px-6 py-32 sm:px-8 lg:px-12 lg:py-48">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,252,207,0.15),transparent_50%)]" />
        <div className="mx-auto max-w-[1480px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl text-devera-cream"
          >
            <p className="text-sm uppercase tracking-[0.32em] text-devera-cream/70">Contact</p>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              Let's make something great.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-devera-cream/90">
              Have a project in mind? Tell us what you're building and let's start a conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative overflow-hidden bg-devera-dark px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr]">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                Get in touch
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                We're always interested in hearing about new projects and opportunities.
              </p>
              
              <div className="mt-12 space-y-8">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-devera-cream/60">Email</p>
                  <a
                    href="mailto:deveracrew@gmail.com"
                    className="mt-2 block text-lg text-devera-cream transition hover:text-devera-teal"
                  >
                    deveracrew@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-devera-cream/60">Phone</p>
                  <a
                    href="tel:+918329355641"
                    className="mt-2 block text-lg text-devera-cream transition hover:text-devera-teal"
                  >
                    +91 83293 55641
                  </a>
                </div>
                
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-devera-cream/60">Social</p>
                  <div className="mt-4 space-y-3">
                    <a
                      href="https://www.instagram.com/_devera_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-lg text-devera-cream transition hover:text-devera-teal"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://linkedin.com/in/naitikdonda"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-lg text-devera-cream transition hover:text-devera-teal"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <input type="hidden" name="_subject" value="New Contact Form Submission from Devera Website" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-sm uppercase tracking-[0.24em] text-devera-cream/80 mb-3">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full rounded-xl border border-slate-700/50 bg-slate-800/50 px-5 py-4 text-devera-cream placeholder-slate-500 transition focus:border-devera-teal focus:outline-none"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm uppercase tracking-[0.24em] text-devera-cream/80 mb-3">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full rounded-xl border border-slate-700/50 bg-slate-800/50 px-5 py-4 text-devera-cream placeholder-slate-500 transition focus:border-devera-teal focus:outline-none"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm uppercase tracking-[0.24em] text-devera-cream/80 mb-3">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-700/50 bg-slate-800/50 px-5 py-4 text-devera-cream placeholder-slate-500 transition focus:border-devera-teal focus:outline-none"
                        placeholder="Company name"
                      />
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="projectType" className="block text-sm uppercase tracking-[0.24em] text-devera-cream/80 mb-3">
                          Project Type
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-slate-700/50 bg-slate-800/50 px-5 py-4 text-devera-cream transition focus:border-devera-teal focus:outline-none"
                        >
                          <option value="">Select type</option>
                          <option value="branding">Brand Identity</option>
                          <option value="web">Web Design & Development</option>
                          <option value="ecommerce">E-commerce</option>
                          <option value="product">Digital Product</option>
                          <option value="3d">3D / Interactive</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="budget" className="block text-sm uppercase tracking-[0.24em] text-devera-cream/80 mb-3">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-slate-700/50 bg-slate-800/50 px-5 py-4 text-devera-cream transition focus:border-devera-teal focus:outline-none"
                        >
                          <option value="">Select range</option>
                          <option value="10k-25k">$10,000 - $25,000</option>
                          <option value="25k-50k">$25,000 - $50,000</option>
                          <option value="50k-100k">$50,000 - $100,000</option>
                          <option value="100k+">$100,000+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm uppercase tracking-[0.24em] text-devera-cream/80 mb-3">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full rounded-xl border border-slate-700/50 bg-slate-800/50 px-5 py-4 text-devera-cream placeholder-slate-500 transition focus:border-devera-teal focus:outline-none resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-devera-cream/30 bg-devera-cream px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-devera-dark transition hover:border-devera-teal hover:bg-devera-teal hover:text-devera-cream disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Start a conversation
                          <span aria-hidden="true">→</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-2xl border border-devera-teal/30 bg-devera-teal/10 p-12 backdrop-blur-xl text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-devera-teal/20"
                    >
                      <Check className="h-10 w-10 text-devera-teal" />
                    </motion.div>
                    <h3 className="text-3xl font-semibold text-white mb-3">Thank You!</h3>
                    <p className="text-devera-cream/80 mb-2">Your message has been sent successfully.</p>
                    <p className="text-devera-cream/60 text-sm">We'll get back to you soon.</p>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="mt-6 text-devera-teal/60 text-sm"
                    >
                      Redirecting to homepage...
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
