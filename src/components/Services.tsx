"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const services = [
  {
    id: "graphic-design",
    label: "Graphic Design",
    description: "Creating stunning visual identities, logos, marketing materials and brand assets that captivate audiences and strengthen brand recognition.",
  },
  {
    id: "video-editing",
    label: "Video Editing & Production",
    description: "Professional video editing, post-production, and motion graphics that bring stories to life with cinematic quality and engaging narratives.",
  },
  {
    id: "web-development",
    label: "Web Development",
    description: "Full-stack web development services including custom websites, e-commerce platforms, web applications and responsive designs optimized for performance.",
  },
  {
    id: "social-media",
    label: "Social Media Management",
    description: "Strategic social media management, content creation, community engagement and analytics-driven campaigns that grow your online presence.",
  },
  {
    id: "website-management",
    label: "Website Management",
    description: "Comprehensive website maintenance, hosting, security updates, performance optimization and technical support to keep your digital presence running smoothly.",
  },
  {
    id: "ai-video",
    label: "AI Video Creation",
    description: "Cutting-edge AI-powered video production, automated content generation and intelligent video editing for scalable, cost-effective visual storytelling.",
  },
  {
    id: "uiux-design",
    label: "UI / UX Design",
    description: "User-centered interface design, wireframing, prototyping and experience optimization that creates intuitive and delightful digital interactions.",
  },
  {
    id: "brand-strategy",
    label: "Brand Strategy",
    description: "Strategic brand positioning, market research, competitive analysis and brand guidelines that build lasting connections with your target audience.",
  },
  {
    id: "seo-marketing",
    label: "SEO & Digital Marketing",
    description: "Search engine optimization, content marketing, PPC advertising and data-driven digital strategies that increase visibility and drive conversions.",
  },
  {
    id: "content-creation",
    label: "Content Creation",
    description: "Engaging content creation including reels, short videos, social media content and digital storytelling that connects with your audience and drives engagement.",
  },
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const progress = useTransform(scrollYProgress, [0, 1], [0, services.length - 1]);

  useEffect(() => {
    const unsubscribe = progress.on("change", (latest) => {
      setActiveIndex(Math.round(latest));
    });
    return () => unsubscribe();
  }, [progress]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const mobileContent = (
    <section id="services" ref={sectionRef} className="relative bg-offwhite px-6 py-16 sm:px-8">
      <div className="mx-auto max-w-[1480px]">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.32em] text-devera-dark/50 mb-4">Our Services</p>
          <h2 className="text-3xl font-semibold leading-tight text-devera-dark sm:text-4xl">
            Comprehensive Digital Solutions for Your Business Growth.
          </h2>
          <p className="mt-4 text-base leading-7 text-devera-dark/70">
            From creative design to cutting-edge AI technology, we deliver end-to-end digital services that transform your brand and drive measurable results.
          </p>
        </div>

        <div className="grid gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
              className="overflow-hidden rounded-[1.5rem] border border-slate-200/70 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-sm font-semibold text-devera-dark/80">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-xs uppercase tracking-[0.28em] text-devera-dark/40">Service</span>
              </div>
              <h3 className="text-xl font-semibold leading-tight text-devera-dark mb-3">
                {service.label}
              </h3>
              <p className="text-sm leading-6 text-devera-dark/65">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const desktopContent = (
    <section id="services" ref={sectionRef} className="relative bg-offwhite">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="mx-auto max-w-[1480px] h-full px-6 py-24 sm:px-8 lg:px-12 flex items-center">
          <div className="grid gap-12 lg:gap-20 lg:grid-cols-[0.4fr_0.6fr] w-full">
            {/* Left side - Sticky content */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-8">
                <motion.div 
                  className="text-sm font-semibold text-devera-dark/60"
                  animate={{ opacity: 1 }}
                >
                  <span className="text-xs uppercase tracking-[0.32em] text-devera-dark/50">Our Services</span>
                </motion.div>
                <motion.div 
                  className="text-sm font-semibold text-devera-teal"
                  animate={{ opacity: 1 }}
                >
                  {String(activeIndex + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                </motion.div>
              </div>
              
              <motion.h2 
                className="text-4xl font-semibold leading-tight text-devera-dark sm:text-5xl lg:text-6xl"
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
              >
                Comprehensive Digital Solutions for Your Business Growth.
              </motion.h2>
              
              <motion.p 
                className="mt-6 max-w-lg text-base leading-8 text-devera-dark/70 lg:text-lg"
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.1 }}
              >
                From creative design to cutting-edge AI technology, we deliver end-to-end digital services that transform your brand and drive measurable results.
              </motion.p>

              {/* Progress bar */}
              <div className="mt-12 w-full max-w-xs">
                <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-devera-teal"
                    style={{ scaleX: useTransform(progress, (p) => p / (services.length - 1)) }}
                    initial={{ scaleX: 0 }}
                  />
                </div>
              </div>
            </div>

            {/* Right side - Scroll-driven cards */}
            <div className="relative h-[500px] lg:h-[600px] flex items-center">
              {services.map((service, index) => {
                const opacity = useTransform(progress, (p) => {
                  const distance = Math.abs(p - index);
                  if (distance < 0.3) return 1;
                  if (distance < 1) return 0.8 - (distance - 0.3) * 0.5;
                  return 0.3;
                });
                const scale = useTransform(progress, (p) => {
                  const distance = Math.abs(p - index);
                  if (distance < 0.3) return 1;
                  if (distance < 1) return 1 - (distance - 0.3) * 0.2;
                  return 0.85;
                });
                const y = useTransform(progress, (p) => {
                  const distance = p - index;
                  return distance * 120;
                });
                const zIndex = useTransform(progress, (p) => {
                  const distance = Math.abs(p - index);
                  return Math.max(0, 10 - distance * 10);
                });

                return (
                  <motion.div
                    key={service.id}
                    className="absolute inset-0 flex items-center"
                    style={{ opacity, scale, y, zIndex }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="w-full overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white p-8 lg:p-12 shadow-xl">
                      <div className="flex items-center justify-between gap-4 mb-6">
                        <span className="text-2xl font-semibold text-devera-dark/80">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-xs uppercase tracking-[0.28em] text-devera-dark/40">Service</span>
                      </div>
                      
                      <motion.h3 
                        className="text-3xl font-semibold leading-tight text-devera-dark lg:text-4xl mb-6"
                        animate={{ color: index === activeIndex ? "#0d9488" : "#1e293b" }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.label}
                      </motion.h3>
                      
                      <p className="text-base leading-8 text-devera-dark/70 lg:text-lg">
                        {service.description}
                      </p>
                      
                      <motion.div 
                        className="mt-8 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-devera-dark/70"
                        animate={{ color: index === activeIndex ? "#0d9488" : "#334155" }}
                        transition={{ duration: 0.3 }}
                      >
                        <span>Learn More</span>
                        <span aria-hidden="true">→</span>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for scroll */}
      <div className="h-[50vh]" />
    </section>
  );

  return isMobile ? mobileContent : desktopContent;
}
