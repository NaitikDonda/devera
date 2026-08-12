"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
}

export function Button({ children, href, variant = "primary", className = "", onClick }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-3 rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-300";
  
  const variants = {
    primary: "bg-devera-cream text-devera-dark border border-devera-dark/10 hover:border-devera-teal hover:text-devera-teal",
    secondary: "bg-devera-dark text-devera-cream border border-devera-cream/30 hover:border-devera-teal hover:bg-devera-teal hover:text-devera-cream",
    outline: "border border-slate-300/40 text-devera-dark hover:border-devera-dark",
  };

  const content = (
    <>
      {children}
      <motion.span
        className="inline-block"
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
      >
        →
      </motion.span>
    </>
  );

  const buttonContent = (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {content}
    </motion.button>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        {content}
      </motion.a>
    );
  }

  return buttonContent;
}
