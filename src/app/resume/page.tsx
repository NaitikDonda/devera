"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Download, Mail, ExternalLink, MapPin, Phone, Calendar, Award, Trophy, Star } from "lucide-react";

export default function ResumePage() {
  const handleDownload = () => {
    // Add resume download functionality
    window.open("/resume.pdf", "_blank");
  };

  return (
    <main className="bg-white text-devera-dark">
      <Navbar />
      
      {/* Hero */}
      <section className="relative overflow-hidden bg-devera-cream px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1480px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <p className="text-sm uppercase tracking-[0.32em] text-devera-dark/50">Resume</p>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-[-0.03em] text-devera-dark sm:text-6xl lg:text-7xl">
              Naitik Donda
            </h1>
            <p className="mt-6 text-lg leading-8 text-devera-dark/75 sm:text-xl">
              Freelance Full Stack Developer | AI/ML Enthusiast | UI Design & Client Delivery
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-3 rounded-full border border-devera-dark/20 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-devera-dark transition hover:border-devera-teal hover:text-devera-teal"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </button>
              <a
                href="mailto:dondanaitik@gmail.com"
                className="inline-flex items-center gap-3 rounded-full border border-devera-dark/20 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-devera-dark transition hover:border-devera-teal hover:text-devera-teal"
              >
                <Mail className="h-4 w-4" />
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="px-6 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1480px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            <div className="flex items-center gap-4">
              <Mail className="h-5 w-5 text-devera-teal" />
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-devera-dark/50">Email</p>
                <p className="text-base font-medium text-devera-dark">dondanaitik@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-5 w-5 text-devera-teal" />
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-devera-dark/50">Phone</p>
                <p className="text-base font-medium text-devera-dark">+91 83293 55641</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="h-5 w-5 text-devera-teal" />
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-devera-dark/50">Location</p>
                <p className="text-base font-medium text-devera-dark">Mumbai, India</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Calendar className="h-5 w-5 text-devera-teal" />
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-devera-dark/50">Available</p>
                <p className="text-base font-medium text-devera-teal">For Projects</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1480px]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-devera-dark sm:text-4xl"
          >
            Education
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 space-y-8"
          >
            <div className="border-l-2 border-devera-teal pl-6">
              <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.24em] text-devera-dark/50">
                <span>Aug. 2025 – May 2028</span>
                <span className="text-devera-dark/30">•</span>
                <span>B.Tech Data Science</span>
              </div>
              <h3 className="mt-2 text-2xl font-semibold text-devera-dark">NMIMS Deemed-to-be-University, MPSTME</h3>
              <p className="mt-1 text-base text-devera-dark/60">Mumbai, India</p>
              <p className="mt-3 text-base leading-7 text-devera-dark/70">CGPA: 7.86/10</p>
            </div>
            <div className="border-l-2 border-slate-200 pl-6">
              <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.24em] text-devera-dark/50">
                <span>Jun. 2022 – May 2025</span>
                <span className="text-devera-dark/30">•</span>
                <span>Diploma Computer Engineering</span>
              </div>
              <h3 className="mt-2 text-2xl font-semibold text-devera-dark">Thakur Polytechnic</h3>
              <p className="mt-1 text-base text-devera-dark/60">Mumbai, India</p>
              <p className="mt-3 text-base leading-7 text-devera-dark/70">85.96%</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-devera-cream px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1480px]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-devera-dark sm:text-4xl"
          >
            Experience
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 space-y-8"
          >
            <div className="border-l-2 border-devera-teal pl-6">
              <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.24em] text-devera-dark/50">
                <span>Jan. 2022 – Present</span>
                <span className="text-devera-dark/30">•</span>
                <span>Freelance Full Stack Developer</span>
              </div>
              <h3 className="mt-2 text-2xl font-semibold text-devera-dark">Remote</h3>
              <p className="mt-3 text-base leading-7 text-devera-dark/70">
                Web Development, UI Design & Client Delivery
              </p>
              <ul className="mt-4 space-y-2 text-base leading-7 text-devera-dark/70">
                <li>• Delivered 15+ end-to-end production web solutions for clients across multiple industries, engineering conversion-focused user experiences that increased engagement and sales based on post-launch analytics</li>
                <li>• Built Shopify and WordPress storefronts with custom themes and optimized UX flows, increasing client sales conversion based on post-launch client analytics</li>
                <li>• Currently building the full frontend for Gulmohartree Healthcare Pvt. Ltd. designing the component structure, UI system, and deployment setup from scratch</li>
              </ul>
            </div>
            <div className="border-l-2 border-slate-200 pl-6">
              <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.24em] text-devera-dark/50">
                <span>March 2026 – June 2026</span>
                <span className="text-devera-dark/30">•</span>
                <span>Frontend Developer Intern</span>
              </div>
              <h3 className="mt-2 text-2xl font-semibold text-devera-dark">ZeroOne Tech Labs LLP</h3>
              <p className="mt-1 text-base text-devera-dark/60">Mumbai, India</p>
              <ul className="mt-4 space-y-2 text-base leading-7 text-devera-dark/70">
                <li>• Built a library of 10+ reusable React.js and Tailwind CSS components used across 3 product modules, cutting UI build time by 35% and improving Lighthouse score from 68 to 91</li>
                <li>• Integrated 8+ REST API endpoints with async data-fetching, reducing redundant re-renders and improving data-load performance by 40%</li>
              </ul>
            </div>
            <div className="border-l-2 border-slate-200 pl-6">
              <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.24em] text-devera-dark/50">
                <span>Dec. 2025 – Feb. 2026</span>
                <span className="text-devera-dark/30">•</span>
                <span>QA Game Tester</span>
              </div>
              <h3 className="mt-2 text-2xl font-semibold text-devera-dark">Havoc Games</h3>
              <p className="mt-1 text-base text-devera-dark/60">Remote</p>
              <ul className="mt-4 space-y-2 text-base leading-7 text-devera-dark/70">
                <li>• Identified and documented 50+ bugs with detailed, reproducible test cases – collaborating with developers to verify fixes and improve pre-release stability</li>
              </ul>
            </div>
            <div className="border-l-2 border-slate-200 pl-6">
              <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.24em] text-devera-dark/50">
                <span>May 2024 – Jun. 2024</span>
                <span className="text-devera-dark/30">•</span>
                <span>AR/VR Developer Intern</span>
              </div>
              <h3 className="mt-2 text-2xl font-semibold text-devera-dark">IOFT</h3>
              <p className="mt-1 text-base text-devera-dark/60">Mumbai, India</p>
              <ul className="mt-4 space-y-2 text-base leading-7 text-devera-dark/70">
                <li>• Built a VR car showroom and 3D walkthrough in Unity, enabling clients to demo products virtually and significantly reducing physical setup time</li>
                <li>• Developed an AI-powered AR body-scanning app using Unity AR Foundation and an IoT smoke/fire detection system with real-time sensor monitoring and alerts</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1480px]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-devera-dark sm:text-4xl"
          >
            Projects
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 space-y-8"
          >
            <div className="rounded-[1.75rem] border border-slate-200/70 bg-white p-8 shadow-sm">
              <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.24em] text-devera-dark/50">
                <span>Python, Scikit-learn, Flask, Pandas</span>
                <span className="text-devera-dark/30">•</span>
                <span className="text-devera-teal">Live 2026</span>
              </div>
              <h3 className="mt-2 text-2xl font-semibold text-devera-dark">IPL Match Predictor</h3>
              <ul className="mt-4 space-y-2 text-base leading-7 text-devera-dark/70">
                <li>• Built a two-model ML system – a pre-match classifier (59% accuracy) and a live in-game predictor (75% accuracy)</li>
                <li>• Deployed as a Flask REST API with sub-500ms response time</li>
              </ul>
              <a
                href="https://ipl-match-prediction-v2-1.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-devera-teal transition hover:text-devera-dark"
              >
                <ExternalLink className="h-4 w-4" />
                View Project
              </a>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200/70 bg-white p-8 shadow-sm">
              <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.24em] text-devera-dark/50">
                <span>Python, Speech Recognition, OpenCV, ML</span>
                <span className="text-devera-dark/30">•</span>
                <span className="text-devera-teal">GitHub 2026</span>
              </div>
              <h3 className="mt-2 text-2xl font-semibold text-devera-dark">CogniScan</h3>
              <ul className="mt-4 space-y-2 text-base leading-7 text-devera-dark/70">
                <li>• Built an AI system using speech + facial expression detection</li>
                <li>• Designed multi-modal pipeline for user state classification</li>
              </ul>
              <a
                href="https://github.com/Daksh-M-Coder/Cogniscan-Ai"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-devera-teal transition hover:text-devera-dark"
              >
                <ExternalLink className="h-4 w-4" />
                View Project
              </a>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200/70 bg-white p-8 shadow-sm">
              <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.24em] text-devera-dark/50">
                <span>Python, ML, Scikit-learn, Pandas</span>
                <span className="text-devera-dark/30">•</span>
                <span className="text-devera-teal">GitHub 2026</span>
              </div>
              <h3 className="mt-2 text-2xl font-semibold text-devera-dark">Fraud Detection System</h3>
              <ul className="mt-4 space-y-2 text-base leading-7 text-devera-dark/70">
                <li>• Built ML model to classify fraudulent transactions</li>
                <li>• Applied preprocessing, feature engineering, and evaluation metrics</li>
              </ul>
              <a
                href="https://github.com/NaitikDonda/fraud-detection"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-devera-teal transition hover:text-devera-dark"
              >
                <ExternalLink className="h-4 w-4" />
                View Project
              </a>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200/70 bg-white p-8 shadow-sm">
              <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.24em] text-devera-dark/50">
                <span>Full Stack, Liquid, JS, CSS</span>
                <span className="text-devera-dark/30">•</span>
                <span className="text-devera-teal">Live 2024</span>
              </div>
              <h3 className="mt-2 text-2xl font-semibold text-devera-dark">Charon Jewel</h3>
              <ul className="mt-4 space-y-2 text-base leading-7 text-devera-dark/70">
                <li>• Developed full-stack e-commerce platform improving UX and conversions – resulting in 25–50% increase in engagement and sales</li>
              </ul>
              <a
                href="https://charonjewel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-devera-teal transition hover:text-devera-dark"
              >
                <ExternalLink className="h-4 w-4" />
                View Project
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="bg-devera-cream px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1480px]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-devera-dark sm:text-4xl"
          >
            Technical Skills
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            <div className="rounded-[1.75rem] border border-slate-200/70 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-devera-dark">Languages</h3>
              <p className="mt-3 text-base leading-7 text-devera-dark/70">
                Python, JavaScript, TypeScript, Java, HTML/CSS
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200/70 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-devera-dark">Frontend</h3>
              <p className="mt-3 text-base leading-7 text-devera-dark/70">
                React.js, Tailwind CSS, Liquid (Shopify)
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200/70 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-devera-dark">Backend & AI</h3>
              <p className="mt-3 text-base leading-7 text-devera-dark/70">
                Flask, Supabase, Firebase, Scikit-learn, Pandas, Google Gemini API
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200/70 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-devera-dark">Tools & Platforms</h3>
              <p className="mt-3 text-base leading-7 text-devera-dark/70">
                Git, Vercel, Figma, Unity, Adobe Photoshop, Illustrator
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200/70 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-devera-dark">CMS</h3>
              <p className="mt-3 text-base leading-7 text-devera-dark/70">
                Shopify, WordPress, WooCommerce
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1480px]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-devera-dark sm:text-4xl"
          >
            Achievements
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 space-y-8"
          >
            <div className="flex items-start gap-4">
              <Award className="h-6 w-6 text-devera-teal mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-devera-dark">Deployed Applications</h3>
                <p className="mt-2 text-base leading-7 text-devera-dark/70">
                  10+ production applications used by real clients across e-commerce, healthcare, solar, and jewellery industries
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Trophy className="h-6 w-6 text-devera-teal mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-devera-dark">Hackathons</h3>
                <p className="mt-2 text-base leading-7 text-devera-dark/70">
                  HackSpark 1.0, VES Hackathon, Google Developer Group Mumbai Hackathon, ACE (NMIMS MPSTME), Neo Future - LR Tiwari
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Star className="h-6 w-6 text-devera-teal mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-devera-dark">Certifications</h3>
                <p className="mt-2 text-base leading-7 text-devera-dark/70">
                  3D Animation, Blender, Unreal Engine, Product Visualization, Web Development, Unity (IOFT)
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Links */}
      <section className="bg-devera-cream px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1480px]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-devera-dark sm:text-4xl"
          >
            Connect
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="https://linkedin.com/in/naitikdonda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-devera-dark/20 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-devera-dark transition hover:border-devera-teal hover:text-devera-teal"
            >
              <ExternalLink className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="https://github.com/NaitikDonda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-devera-dark/20 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-devera-dark transition hover:border-devera-teal hover:text-devera-teal"
            >
              <ExternalLink className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="mailto:dondanaitik@gmail.com"
              className="inline-flex items-center gap-3 rounded-full border border-devera-dark/20 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-devera-dark transition hover:border-devera-teal hover:text-devera-teal"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
