"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Resume", href: "/resume" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("/#")) {
      if (pathname === "/") {
        // On homepage, scroll to section
        const sectionId = href.replace("/#", "");
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // On other pages, navigate to homepage with hash
        window.location.href = href;
      }
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto flex h-20 max-w-[1480px] items-center justify-between px-6 transition-all duration-500 ${
          scrolled ? "backdrop-blur-xl bg-white/70 border-b border-slate-200/40 shadow-sm" : "bg-transparent"
        }`}
      >
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="Devera" className="h-8 w-auto" />
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            item.href.startsWith("/#") ? (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-medium text-devera-dark/85 transition hover:text-devera-dark focus:outline-none focus:ring-2 focus:ring-devera-teal focus:ring-offset-2 rounded"
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-devera-dark/85 transition hover:text-devera-dark focus:outline-none focus:ring-2 focus:ring-devera-teal focus:ring-offset-2 rounded"
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/contact"
            className="text-sm font-semibold uppercase tracking-[0.22em] text-devera-dark transition hover:text-devera-teal focus:outline-none focus:ring-2 focus:ring-devera-teal focus:ring-offset-2 rounded"
          >
            Let&apos;s Talk
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-full border border-slate-300/30 bg-white/85 p-3 text-devera-dark shadow-sm backdrop-blur focus:outline-none focus:ring-2 focus:ring-devera-teal focus:ring-offset-2"
          onClick={() => setOpen((state) => !state)}
          aria-label="Open navigation menu"
          aria-expanded={open}
        >
          <span className="sr-only">Open navigation menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-devera-dark" />
            <span className="block h-0.5 w-5 bg-devera-dark" />
            <span className="block h-0.5 w-5 bg-devera-dark" />
          </div>
        </button>
      </div>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          className="fixed inset-0 z-40 bg-[#111313] text-white"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div className="mx-auto flex h-full max-w-[1080px] flex-col justify-center px-8 py-12">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center focus:outline-none focus:ring-2 focus:ring-devera-teal rounded">
                <img src="/logo.png" alt="Devera" className="h-10 w-auto" />
              </Link>
              <button
                type="button"
                className="text-sm font-medium uppercase tracking-[0.22em] text-white/75 focus:outline-none focus:ring-2 focus:ring-devera-teal rounded"
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
              >
                Close
              </button>
            </div>
            <nav className="mt-20 space-y-8 text-3xl font-semibold leading-tight" aria-label="Mobile navigation">
              {navItems.map((item) => (
                item.href.startsWith("/#") ? (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="block text-white/90 transition hover:text-devera-cream focus:outline-none focus:ring-2 focus:ring-devera-teal rounded text-left"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-white/90 transition hover:text-devera-cream focus:outline-none focus:ring-2 focus:ring-devera-teal rounded"
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </nav>
            <div className="mt-16 text-sm uppercase tracking-[0.24em] text-white/60">
              <a href="/contact" className="focus:outline-none focus:ring-2 focus:ring-devera-teal rounded">Let&apos;s Talk</a>
            </div>
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}
