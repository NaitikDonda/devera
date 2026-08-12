"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function DeviceShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const deviceRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      // Device scale and position
      tl.fromTo(
        deviceRef.current,
        {
          scale: 0.85,
          y: 100,
          rotationX: 5,
        },
        {
          scale: 1,
          y: 0,
          rotationX: 0,
          duration: 0.5,
        }
      )
        .to(deviceRef.current, {
          rotationY: 15,
          duration: 0.3,
        })
        .to(deviceRef.current, {
          x: -100,
          rotationY: -5,
          duration: 0.4,
        });

      // Screen content fade
      gsap.fromTo(
        screenRef.current,
        { opacity: 0.6 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "center center",
            scrub: 1,
          },
        }
      );

      // Project info reveal
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "60% center",
            end: "80% center",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-devera-dark py-32 sm:py-40 lg:py-48"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,128,129,0.15),transparent_60%)]" />
      
      <div className="mx-auto max-w-[1480px] px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          {/* Device */}
          <div className="relative h-[600px] lg:h-[700px]">
            <div
              ref={deviceRef}
              className="relative mx-auto h-full w-full max-w-[500px] preserve-3d"
              style={{ perspective: "1000px" }}
            >
              {/* Laptop frame */}
              <div className="relative h-full rounded-[2rem] border border-slate-700/50 bg-gradient-to-b from-slate-800 to-slate-900 shadow-2xl">
                {/* Screen */}
                <div className="relative h-[85%] overflow-hidden rounded-t-[1.75rem] border-b border-slate-700/50 bg-slate-950">
                  <div
                    ref={screenRef}
                    className="absolute inset-0"
                  >
                    <img
                      src="/screen.webp"
                      alt="Website mockup"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Keyboard base */}
                <div className="relative h-[15%] rounded-b-[1.75rem] bg-gradient-to-b from-slate-800 to-slate-900">
                  <div className="absolute inset-x-4 top-3 h-2 rounded-full bg-slate-700/50" />
                </div>
              </div>
            </div>
          </div>

          {/* Project info */}
          <div
            ref={contentRef}
            className="relative z-10 max-w-xl text-white"
          >
            <span className="text-xs uppercase tracking-[0.32em] text-devera-cream/60">
              Featured Project
            </span>
            <h2 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Charon Jewel
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              A complete Shopify e-commerce solution for luxury jewelry. We crafted a seamless shopping experience with refined aesthetics and intuitive functionality.
            </p>
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.24em] text-devera-cream/80">
                <span className="h-px w-8 bg-devera-cream/40" />
                <span>Brand Identity</span>
              </div>
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.24em] text-devera-cream/80">
                <span className="h-px w-8 bg-devera-cream/40" />
                <span>Web Design</span>
              </div>
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.24em] text-devera-cream/80">
                <span className="h-px w-8 bg-devera-cream/40" />
                <span>Development</span>
              </div>
            </div>
            <a
              href="#"
              className="mt-10 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-devera-cream transition hover:text-white"
            >
              View full case study
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
