"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2 } from "lucide-react";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
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

  return (
    <section id="contact" className="relative overflow-hidden bg-devera-dark px-6 py-24 text-devera-cream sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,128,129,0.35),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,252,207,0.16),transparent_28%)]" />
      <div className="relative mx-auto grid max-w-[1480px] gap-16 lg:grid-cols-[0.5fr_0.5fr]">
        <div className="max-w-xl">
          <p className="text-sm uppercase tracking-[0.32em] text-devera-cream/75">Let&apos;s make something great.</p>
          <h2 className="mt-6 text-5xl font-semibold leading-tight text-white sm:text-6xl">Have a project in mind?</h2>
          <p className="mt-8 text-base leading-8 text-devera-cream/75 sm:text-lg">
            Tell us what you&apos;re building and we&apos;ll create a refined digital experience with thoughtful detail, clarity and confidence.
          </p>
          <div className="mt-12 grid gap-6 text-sm text-devera-cream/75">
            <div>
              <span className="block font-semibold text-white">Email</span>
              <a href="mailto:deveracrew@gmail.com" className="mt-2 inline-block text-devera-cream/75 hover:text-white">
                deveracrew@gmail.com
              </a>
            </div>
            <div>
              <span className="block font-semibold text-white">Phone</span>
              <a href="tel:+918329355641" className="mt-2 inline-block text-devera-cream/75 hover:text-white">
                +91 83293 55641
              </a>
            </div>
            <div>
              <span className="block font-semibold text-white">Social</span>
              <div className="mt-2 flex flex-wrap gap-4 text-devera-cream/75">
                <a href="https://www.instagram.com/_devera_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
                <a href="https://linkedin.com/in/naitikdonda" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
                onSubmit={handleSubmit}
                className="rounded-[2rem] border border-white/15 bg-white/10 p-8 backdrop-blur-xl"
              >
                <input type="hidden" name="_subject" value="New Contact Form Submission from Devera Website" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <div className="grid gap-6">
                  <label className="grid gap-2 text-sm text-devera-cream/80">
                    Name
                    <input
                      type="text"
                      name="name"
                      className="rounded-3xl border border-white/15 bg-white/10 px-4 py-4 text-white outline-none placeholder:text-devera-cream/40 focus:border-devera-teal focus:ring-2 focus:ring-devera-teal/20 transition"
                      placeholder="Your name"
                      required
                    />
                  </label>
                  <label className="grid gap-2 text-sm text-devera-cream/80">
                    Email
                    <input
                      type="email"
                      name="email"
                      className="rounded-3xl border border-white/15 bg-white/10 px-4 py-4 text-white outline-none placeholder:text-devera-cream/40 focus:border-devera-teal focus:ring-2 focus:ring-devera-teal/20 transition"
                      placeholder="hello@example.com"
                      required
                    />
                  </label>
                  <label className="grid gap-2 text-sm text-devera-cream/80">
                    Company
                    <input
                      type="text"
                      name="company"
                      className="rounded-3xl border border-white/15 bg-white/10 px-4 py-4 text-white outline-none placeholder:text-devera-cream/40 focus:border-devera-teal focus:ring-2 focus:ring-devera-teal/20 transition"
                      placeholder="Company name"
                    />
                  </label>
                  <label className="grid gap-2 text-sm text-devera-cream/80">
                    Project type
                    <input
                      type="text"
                      name="projectType"
                      className="rounded-3xl border border-white/15 bg-white/10 px-4 py-4 text-white outline-none placeholder:text-devera-cream/40 focus:border-devera-teal focus:ring-2 focus:ring-devera-teal/20 transition"
                      placeholder="Branding / Web / Product"
                    />
                  </label>
                  <label className="grid gap-2 text-sm text-devera-cream/80">
                    Message
                    <textarea
                      name="message"
                      className="min-h-[160px] rounded-[1.5rem] border border-white/15 bg-white/10 px-4 py-4 text-white outline-none placeholder:text-devera-cream/40 focus:border-devera-teal focus:ring-2 focus:ring-devera-teal/20 transition resize-none"
                      placeholder="Tell us about your project."
                      required
                    />
                  </label>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-devera-cream px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-devera-dark transition hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Start a conversation"
                    )}
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[2rem] border border-devera-teal/30 bg-devera-teal/10 p-8 backdrop-blur-xl text-center"
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
    </section>
  );
}
