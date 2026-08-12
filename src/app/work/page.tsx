"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WebsitePreviewModal } from "@/components/WebsitePreviewModal";

const projects = [
  {
    slug: "cellvkyorpharma",
    title: "Cellvkyor Pharma",
    category: "WordPress",
    year: "2026",
    description: "Pharmaceutical company website built on WordPress with custom functionality and CMS integration.",
    url: "https://cellvkyorpharma.com",
    status: "in progress",
    image: "/cellvkyor.png",
  },
  {
    slug: "shreeramaerospace",
    title: "Shreeram Aerospace & Defence LLP",
    category: "HTML/CSS — Database",
    year: "2026",
    description: "A comprehensive aerospace industry website with database integration for inventory and client management.",
    url: "https://shreeramaerospace.com/",
    image: "/shreeram1.png",
  },
  {
    slug: "svgcrown",
    title: "SVGCrown",
    category: "Fullstack — Database",
    year: "2026",
    description: "A full-stack application studio platform with robust database architecture and user management.",
    url: "https://mirakiappstudio.fun/",
    image: "/svgcrown2.png",
  },
  {
    slug: "amarijewels",
    title: "Amari Jewels",
    category: "HTML/CSS",
    year: "2025",
    description: "An elegant jewelry website showcasing premium collections with sophisticated visual design.",
    url: "https://amarijewels.co/",
    image: "/amarijewels.png",
  },
  {
    slug: "charonjewel",
    title: "Charon Jewel",
    category: "Shopify",
    year: "2024",
    description: "A complete Shopify e-commerce solution for luxury jewelry with seamless shopping experience.",
    url: "https://charonjewel.com/",
    image: "/charonjewels1.png",
  },
  {
    slug: "earthrootsolar",
    title: "Earth Root Solar",
    category: "Fullstack — Database",
    year: "2025",
    description: "Solar energy company website with full-stack features and database integration for customer management.",
    url: "http://earthrootsolar.in/",
    status: "temporarily closed",
    image: null,
  },
  {
    slug: "westerncoatings",
    title: "Western Coatings",
    category: "Fullstack",
    year: "2023",
    description: "Industrial coatings company website with full-stack development and database integration.",
    url: "https://westerncoatings.com",
    status: "permanently closed",
    image: null,
  },
  {
    slug: "herbavue",
    title: "Herbavue",
    category: "Shopify",
    year: "2026",
    description: "A Shopify e-commerce platform for herbal and wellness products with seamless shopping experience.",
    url: "https://herbavue.com/",
    image: null,
  },
  {
    slug: "gulmohartree",
    title: "Gulmohar Tree",
    category: "HTML/CSS",
    year: "2025 - present",
    description: "A comprehensive website showcasing Gulmohar Tree's services and offerings with elegant design.",
    url: "https://www.gulmohartree.com/",
    image: "/gulmohartree.png",
  },
];

export default function WorkPage() {
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
    <main className="bg-white text-devera-dark">
      <WebsitePreviewModal
        isOpen={previewUrl !== null}
        onClose={handleClosePreview}
        url={previewUrl || ""}
        title={previewTitle}
      />
      <Navbar />
      
      <section className="relative overflow-hidden bg-offwhite px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1480px]">
          <p className="text-sm uppercase tracking-[0.32em] text-devera-dark/50">Work</p>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-tight sm:text-6xl">An editorial portfolio of digital systems, brand campaigns and immersive experiences.</h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-devera-dark/70 sm:text-lg">
            Each project is presented with intention, clarity and a strong visual rhythm to highlight craft and strategy.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1480px] gap-16">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group grid gap-8 rounded-[2rem] border border-slate-200/70 bg-white p-10 shadow-sm lg:grid-cols-[0.65fr_0.35fr]"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-sm uppercase tracking-[0.3em] text-devera-dark/40">
                  <span>{project.category}</span>
                  <span className="text-devera-dark/30">•</span>
                  <span>{project.year}</span>
                  {project.status && (
                    <>
                      <span className="text-devera-dark/30">•</span>
                      <span className="text-devera-teal">{project.status}</span>
                    </>
                  )}
                </div>
                <div className="overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-slate-100">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="h-[320px] w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-[320px] w-full items-center justify-center bg-slate-100">
                      <p className="text-sm font-medium text-slate-400">No image available</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col justify-between gap-6">
                <div>
                  <h2 className="text-4xl font-semibold leading-tight text-devera-dark sm:text-5xl">{project.title}</h2>
                  <p className="mt-5 text-base leading-8 text-devera-dark/70">{project.description}</p>
                </div>
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
            </motion.article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
