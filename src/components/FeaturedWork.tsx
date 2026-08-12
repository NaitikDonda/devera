"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { WebsitePreviewModal } from "@/components/WebsitePreviewModal";

const projects = [
  {
    id: "shreeramaerospace",
    title: "Shreeram Aerospace & Defence LLP",
    role: "HTML/CSS — Database",
    description: "A comprehensive aerospace industry website with database integration for inventory and client management.",
    layout: "left",
    url: "https://shreeramaerospace.com/",
    image: "/shreeram1.png",
    image2: "/shreeram2.png",
    rotateImages: true,
  },
  {
    id: "svgcrown",
    title: "SVGCrown",
    role: "Fullstack — Database",
    description: "A full-stack application studio platform with robust database architecture and user management.",
    layout: "right",
    url: "https://mirakiappstudio.fun/",
    image: "/svgcrown2.png",
    image2: "/svgcrown1.png",
    rotateImages: true,
  },
  {
    id: "amarijewels",
    title: "Amari Jewels",
    role: "Shopify — E-commerce",
    description: "A complete Shopify e-commerce solution for luxury jewelry with seamless shopping experience.",
    layout: "full",
    url: "https://amariboutique.com/",
    image: "/amarijewels.png",
    image2: null,
    rotateImages: false,
  },
];

function RotatingImage({ image1, image2, alt, height }: { image1: string; image2: string; alt: string; height: string }) {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [image1, image2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <AnimatePresence mode="wait">
      <motion.img
        key={currentImage}
        src={images[currentImage]}
        alt={alt}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`w-full object-cover`}
        style={{ height }}
      />
    </AnimatePresence>
  );
}

export function FeaturedWork() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [previewTitle, setPreviewTitle] = useState<string>("");

  const handlePreview = (url: string, title: string) => {
    setPreviewUrl(url);
    setPreviewTitle(title);
  };

  const handleClosePreview = () => {
    setPreviewUrl(null);
    setPreviewTitle("");
  };

  return (
    <>
      <WebsitePreviewModal
        isOpen={previewUrl !== null}
        onClose={handleClosePreview}
        url={previewUrl || ""}
        title={previewTitle}
      />
      <section id="work" className="relative overflow-hidden bg-white px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1480px]">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.32em] text-devera-dark/50">Selected work</p>
          <h2 className="mt-6 text-4xl font-semibold leading-tight text-devera-dark sm:text-5xl">Campaigns, digital products and brand experiences with precision.</h2>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="grid gap-10 lg:grid-cols-[0.55fr_0.45fr] xl:gap-16"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {project.layout !== "full" && !project.rotateImages ? (
                <div className={project.layout === "left" ? "order-1" : "order-2 lg:order-1"}>
                  <div className="overflow-hidden rounded-[2rem] border border-slate-200/70 bg-slate-100 shadow-sm">
                    {project.image2 ? (
                      <div className="grid grid-cols-2 gap-2">
                        <img 
                          src={project.image} 
                          alt={`${project.title} - 1`}
                          className="h-[420px] w-full object-cover"
                        />
                        <img 
                          src={project.image2} 
                          alt={`${project.title} - 2`}
                          className="h-[420px] w-full object-cover"
                        />
                      </div>
                    ) : (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="h-[420px] w-full object-cover"
                      />
                    )}
                  </div>
                </div>
              ) : null}

              <div className="flex flex-col justify-center gap-6">
                <span className="text-xs uppercase tracking-[0.3em] text-devera-dark/40">Project {index + 1}</span>
                <h3 className="text-3xl font-semibold leading-tight text-devera-dark sm:text-4xl">{project.title}</h3>
                <p className="max-w-xl text-base leading-8 text-devera-dark/70">{project.description}</p>
                <span className="text-sm uppercase tracking-[0.3em] text-devera-dark/60">{project.role}</span>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handlePreview(project.url, project.title)}
                    className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-devera-dark transition hover:text-devera-teal"
                  >
                    Preview website
                    <span aria-hidden="true">→</span>
                  </button>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-devera-dark/60 transition hover:text-devera-teal"
                  >
                    Open in new tab
                  </a>
                </div>
              </div>

              {project.rotateImages && project.image2 ? (
                <div className={project.layout === "left" ? "order-2" : "order-1 lg:order-1"}>
                  <div className="overflow-hidden rounded-[2rem] border border-slate-200/70 bg-slate-100 shadow-sm">
                    <RotatingImage 
                      image1={project.image} 
                      image2={project.image2}
                      alt={project.title}
                      height="420px"
                    />
                  </div>
                </div>
              ) : project.layout !== "full" ? (
                <div className={project.layout === "left" ? "order-2" : "order-1 lg:order-2"}>
                  <div className="overflow-hidden rounded-[2rem] border border-slate-200/70 bg-slate-100 shadow-sm">
                    {project.image2 ? (
                      <div className="grid grid-cols-2 gap-2">
                        <img 
                          src={project.image} 
                          alt={`${project.title} - 1`}
                          className="h-[420px] w-full object-cover"
                        />
                        <img 
                          src={project.image2} 
                          alt={`${project.title} - 2`}
                          className="h-[420px] w-full object-cover"
                        />
                      </div>
                    ) : (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="h-[420px] w-full object-cover"
                      />
                    )}
                  </div>
                </div>
              ) : (
                <div className="lg:col-span-full">
                  <div className="overflow-hidden rounded-[2rem] border border-slate-200/70 bg-slate-100 shadow-sm">
                    {project.image2 ? (
                      <div className="grid grid-cols-2 gap-2">
                        <img 
                          src={project.image} 
                          alt={`${project.title} - 1`}
                          className="h-[520px] w-full object-cover"
                        />
                        <img 
                          src={project.image2} 
                          alt={`${project.title} - 2`}
                          className="h-[520px] w-full object-cover"
                        />
                      </div>
                    ) : (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="h-[520px] w-full object-cover"
                      />
                    )}
                  </div>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
